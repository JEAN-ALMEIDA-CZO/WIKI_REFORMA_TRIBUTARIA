# -*- coding: utf-8 -*-
"""
Gera docs-data.js a partir dos .md do Guia Didatico.
Empacota tudo num unico JS (window.DOCS) para o site funcionar OFFLINE, via file://,
sem servidor e sem depender de fetch (mesmo padrao do ncm-data.js).
"""
import os, re, json, unicodedata

BASE = os.path.dirname(os.path.abspath(__file__))
GUIA = os.path.join(os.path.dirname(BASE), "Guia_Didatico_IBS_CBS")
OUT  = os.path.join(BASE, "docs-data.js")

# --- Trilha / blocos (ordem numerica crescente dos modulos) ---
BLOCKS = [
    ("A", "Fundamentos", "O sistema nasce", ["01","02","03","04"]),
    ("B", "Credito, pagamento e fiscalizacao", "Como o imposto circula", ["05","06","07"]),
    ("C", "Regimes especiais e setoriais", "Quando a regra geral nao se aplica", ["08","09","10","11"]),
    ("D", "Operacao, comparativos e casos especificos", "Documento fiscal, mapa de regimes, imoveis e Simples", ["12","13","14","15"]),
    ("E", "Guias praticos e transicao", "Consulta permanente e o desligamento do sistema antigo", ["16","17","18"]),
]
# ordem de leitura (trilha) para prev/next — segue a numeracao dos arquivos
TRILHA = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18"]

def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

def slugify(s):
    # GitHub-like: lower, remove pontuacao (mantem acentos), espacos -> hifen
    s = s.strip().lower()
    s = s.replace('`', '')
    s = re.sub(r'[*_]', '', s)
    s = re.sub(r'[^0-9a-zÀ-ɏ \-]', '', s)
    s = s.strip().replace(' ', '-')
    s = re.sub(r'-+', '-', s)
    return s

CAT = [
    ("conceito",     ["o que e", "o que sao"]),
    ("finalidade",   ["para que serve"]),
    ("funcionamento",["como funciona"]),
    ("regras",       ["regras de ouro", "vedac", "excec", "o que pode", "o que nao pode"]),
    ("operacional",  ["impacto sistemico", "fluxo de preenchimento"]),
    ("leigos",       ["para leigos"]),
    ("iniciante",    ["para quem esta comecando"]),
]

def categorize(heading):
    h = strip_accents(heading.lower())
    for cat, keys in CAT:
        for k in keys:
            if k in h:
                return cat
    return None

def clean_text(md):
    """texto limpo para busca (remove marcacao, mantem numeros/%/R$)"""
    t = md
    t = re.sub(r'`([^`]*)`', r'\1', t)
    t = re.sub(r'\*\*([^*]*)\*\*', r'\1', t)
    t = re.sub(r'\*([^*]*)\*', r'\1', t)
    t = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', t)
    t = re.sub(r'^[>#\-\|]+', ' ', t, flags=re.M)
    t = t.replace('|', ' ')            # tira pipes de tabela (evita frases quebradas)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

def parse_module(num, path):
    with open(path, encoding='utf-8') as f:
        raw = f.read()
    lines = raw.split('\n')
    # titulo
    title = None
    for ln in lines:
        m = re.match(r'^#\s+(.*)', ln)
        if m:
            title = m.group(1).strip()
            break
    if not title:
        title = os.path.basename(path)

    # quebra em blocos por heading (nivel >=2)
    heads = []  # (level, text, slug, startline)
    for i, ln in enumerate(lines):
        m = re.match(r'^(#{2,4})\s+(.*)', ln)
        if m:
            lvl = len(m.group(1))
            txt = m.group(2).strip().rstrip('#').strip()
            heads.append((lvl, txt, slugify(txt), i))

    sections = []  # secoes de nivel 2, com sub-blocos categorizados
    flat = []      # todas as secoes (2,3,4) para busca
    # helper: corpo de um heading = linhas ate proximo heading qualquer
    def body_of(idx):
        start = heads[idx][3] + 1
        end = heads[idx+1][3] if idx+1 < len(heads) else len(lines)
        return '\n'.join(lines[start:end]).strip()

    # agrupa: cada nivel-2 recebe seus nivel-3/4 seguintes ate o proximo nivel-2
    i = 0
    while i < len(heads):
        lvl, txt, slug, sl = heads[i]
        if lvl == 2:
            sub = {"conceito":"", "finalidade":"", "funcionamento":"", "regras":"", "operacional":"", "exemplos":[]}
            own_body = body_of(i)
            cat0 = categorize(txt)
            if cat0 and cat0 in sub and isinstance(sub[cat0], str):
                sub[cat0] = own_body
            # coleta exemplos do proprio corpo
            for ex in re.findall(r'(^>.*(?:\n>.*)*)', own_body, flags=re.M):
                if re.search(r'exemplo', strip_accents(ex.lower())):
                    sub["exemplos"].append(re.sub(r'^>\s?', '', ex, flags=re.M).strip())
            j = i + 1
            while j < len(heads) and heads[j][0] > 2:
                jl, jt, js, jsl = heads[j]
                jb = body_of(j)
                jc = categorize(jt)
                if jc and jc in sub and isinstance(sub[jc], str) and not sub[jc]:
                    sub[jc] = jb
                for ex in re.findall(r'(^>.*(?:\n>.*)*)', jb, flags=re.M):
                    if re.search(r'exemplo', strip_accents(ex.lower())):
                        sub["exemplos"].append(re.sub(r'^>\s?', '', ex, flags=re.M).strip())
                j += 1
            sections.append({"heading": txt, "slug": slug, "sub": sub})
            i = j
        else:
            i += 1

    # indice plano de busca: TODOS os headings; nivel-2 enriquecido com seus sub-blocos
    secmap = {s["slug"]: s for s in sections}
    for idx, (lvl, txt, slug, sl) in enumerate(heads):
        body = body_of(idx)
        if lvl == 2 and slug in secmap:
            sub = secmap[slug]["sub"]
            extra = ' '.join([sub.get(k,'') for k in ("conceito","finalidade","funcionamento","regras","operacional")])
            extra += ' ' + ' '.join(sub.get("exemplos", []))
            body = (body + ' ' + extra).strip()
        text = clean_text(body)[:1400]
        if not text:
            text = txt  # fallback: pelo menos o proprio cabecalho, p/ ser recuperavel
        flat.append({
            "mod": num, "level": lvl, "heading": txt, "slug": slug,
            "text": text, "cat": categorize(txt)
        })

    block = next((b[0] for b in BLOCKS if num in b[3]), ("Z"))
    return {
        "id": os.path.basename(path)[:-3],
        "num": num,
        "title": title,
        "block": block,
        "md": raw,
        "sections": sections,
        "flat": flat,
    }

def main():
    files = sorted(f for f in os.listdir(GUIA) if f.endswith('.md'))
    mods = {}
    order_ids = []
    for f in files:
        num = f[:2]
        m = parse_module(num, os.path.join(GUIA, f))
        mods[num] = m
    # ordem trilha -> ids
    order = [mods[n]["id"] for n in TRILHA if n in mods]
    blocks = [{"id": b[0], "label": b[1], "hint": b[2],
               "modules": [mods[n]["id"] for n in b[3] if n in mods]} for b in BLOCKS]
    # flat search index
    search = []
    for num, m in mods.items():
        for s in m["flat"]:
            if s["text"]:
                search.append({"mod": m["id"], "modTitle": m["title"], "modNum": m["num"],
                               "heading": s["heading"], "slug": s["slug"], "level": s["level"],
                               "text": s["text"], "cat": s["cat"]})
    data = {
        "order": order,
        "blocks": blocks,
        "modules": {m["id"]: {"id": m["id"], "num": m["num"], "title": m["title"],
                              "block": m["block"], "md": m["md"], "sections": m["sections"]}
                    for m in mods.values()},
        "search": search,
    }
    js = "window.DOCS = " + json.dumps(data, ensure_ascii=False) + ";\n"
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(js)
    print("OK ->", OUT)
    print("modulos:", len(mods), "| secoes busca:", len(search), "| bytes:", len(js))

if __name__ == "__main__":
    main()
