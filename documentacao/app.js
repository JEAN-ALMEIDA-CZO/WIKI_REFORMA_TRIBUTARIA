/* ============================================================
   Documentação IBS/CBS — app.js
   Renderer Markdown + navegação + busca + assistente (offline/RAG)
   ============================================================ */
(function(){
"use strict";
const D = window.DOCS;
if(!D){ document.getElementById('article').innerHTML = '<p>Erro: docs-data.js não carregou.</p>'; return; }

/* ---------- utils ---------- */
const $ = s => document.querySelector(s);
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const foldAccents = s => s.normalize('NFD').replace(/[̀-ͯ]/g,'');
const occ = (hay,t)=>{let n=0,i=0;while((i=hay.indexOf(t,i))>=0){n++;i+=t.length;}return n;};
function slugify(s){
  s = String(s).trim().toLowerCase().replace(/`/g,'').replace(/[*_]/g,'');
  s = s.replace(/[^0-9a-zà-ɏ \-]/g,'').trim().replace(/\s+/g,'-').replace(/-+/g,'-');
  return s;
}
const BLOCK_COLOR = {A:'var(--A)',B:'var(--B)',C:'var(--C)',D:'var(--D)',E:'var(--E)'};
// numeração pelo NÚMERO DO ARQUIVO (bate com o título do módulo, a prosa do índice e as seções X.Y)
const posOf = id => { const m=D.modules[id]; return m?String(m.num).padStart(2,'0'):'00'; };
const fileNumToId = {}; Object.keys(D.modules).forEach(id=>{ fileNumToId[D.modules[id].num]=id; });

/* ---------- Módulo do Contador protegido por senha ---------- */
const CONTADOR_ID = fileNumToId['17'] || '17_Guia_do_Contador';
const CONTADOR_PWD = 'orcatea';   // senha de acesso ao Guia do Contador (altere aqui)
const isContadorUnlocked = () => sessionStorage.getItem('contadorUnlocked') === '1';

/* ============================================================
   MARKDOWN RENDERER (subconjunto GFM usado no guia)
   ============================================================ */
function inline(t){
  t = esc(t);
  t = t.replace(/`([^`]+)`/g,(m,c)=>'<code>'+c+'</code>');
  t = t.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  t = t.replace(/(^|[^*])\*([^*\n]+)\*/g,'$1<em>$2</em>');
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(m,txt,url)=>{
     return '<a href="'+url+'">'+txt+'</a>';
  });
  return t;
}
function splitRow(line){
  let s = line.trim();
  if(s.startsWith('|')) s = s.slice(1);
  if(s.endsWith('|')) s = s.slice(0,-1);
  const out=[]; let cur='';
  for(let i=0;i<s.length;i++){
    const ch=s[i];
    if(ch==='\\' && s[i+1]==='|'){cur+='|';i++;continue;}
    if(ch==='|'){out.push(cur);cur='';} else cur+=ch;
  }
  out.push(cur);
  return out.map(c=>c.trim());
}
function isTableSep(line){
  return /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line) && line.indexOf('-')>=0;
}
function renderList(lines, i){
  // agrupa itens (com aninhamento por indentação de 2 espaços)
  const items=[];
  const re = /^(\s*)([-*]|\d+\.)\s+(.*)$/;
  let ordered = null;
  while(i<lines.length){
    const m = lines[i].match(re);
    if(!m) break;
    const indent = m[1].length;
    const marker = m[2];
    const ord = /\d+\./.test(marker);
    if(ordered===null) ordered=ord;
    items.push({indent, text:m[3], ord});
    i++;
  }
  // constrói HTML por indentação (stack simples)
  let html='', stack=[];
  function open(ord){ html+= ord?'<ol>':'<ul>'; stack.push(ord); }
  function close(){ html+= stack.pop()?'</ol>':'</ul>'; }
  let curIndent=-1;
  items.forEach(it=>{
    const lvl = Math.floor(it.indent/2);
    if(stack.length===0){ open(it.ord); curIndent=lvl; }
    else if(lvl>curIndent){ open(it.ord); curIndent=lvl; }
    else while(lvl<curIndent && stack.length>1){ close(); curIndent--; }
    html+='<li>'+inline(it.text)+'</li>';
  });
  while(stack.length) close();
  return {html, next:i};
}
function renderMarkdown(md){
  const lines = md.replace(/\r/g,'').split('\n');
  let html=''; let i=0;
  while(i<lines.length){
    let line = lines[i];
    // fenced code
    if(/^```/.test(line)){
      const lang = line.slice(3).trim(); let code=''; i++;
      while(i<lines.length && !/^```/.test(lines[i])){ code+=lines[i]+'\n'; i++; }
      i++; html+='<pre><code>'+esc(code.replace(/\n$/,''))+'</code></pre>'; continue;
    }
    // heading
    let hm = line.match(/^(#{1,6})\s+(.*)$/);
    if(hm){
      const lvl=hm[1].length; let txt=hm[2].replace(/#+\s*$/,'').trim();
      const id=slugify(txt);
      html+='<h'+lvl+' id="'+id+'">'+inline(txt)+'</h'+lvl+'>'; i++; continue;
    }
    // hr
    if(/^(\s*)(---|\*\*\*|___)\s*$/.test(line)){ html+='<hr>'; i++; continue; }
    // table
    if(line.indexOf('|')>=0 && i+1<lines.length && isTableSep(lines[i+1])){
      const header=splitRow(line); i+=2; const rows=[];
      while(i<lines.length && lines[i].indexOf('|')>=0 && lines[i].trim()!==''){
        rows.push(splitRow(lines[i])); i++;
      }
      let t='<table><thead><tr>'+header.map(h=>'<th>'+inline(h)+'</th>').join('')+'</tr></thead><tbody>';
      rows.forEach(r=>{ t+='<tr>'+header.map((_,c)=>'<td>'+inline(r[c]||'')+'</td>').join('')+'</tr>'; });
      t+='</tbody></table>'; html+=t; continue;
    }
    // blockquote (coleta linhas > consecutivas, renderiza recursivo)
    if(/^>\s?/.test(line)){
      let buf=[];
      while(i<lines.length && /^>\s?/.test(lines[i])){ buf.push(lines[i].replace(/^>\s?/,'')); i++; }
      html+='<blockquote>'+renderMarkdown(buf.join('\n'))+'</blockquote>'; continue;
    }
    // list
    if(/^(\s*)([-*]|\d+\.)\s+/.test(line)){
      const r=renderList(lines,i); html+=r.html; i=r.next; continue;
    }
    // blank
    if(line.trim()===''){ i++; continue; }
    // paragraph (junta linhas até blank/bloco)
    let para=[line]; i++;
    while(i<lines.length && lines[i].trim()!=='' &&
          !/^(#{1,6}\s|>\s?|```|(\s*)([-*]|\d+\.)\s+)/.test(lines[i]) &&
          !(lines[i].indexOf('|')>=0 && i+1<lines.length && isTableSep(lines[i+1])) &&
          !/^(\s*)(---|\*\*\*|___)\s*$/.test(lines[i])){
      para.push(lines[i]); i++;
    }
    html+='<p>'+inline(para.join(' '))+'</p>';
  }
  return html;
}

/* remapeia menções "Módulo N" (arquivo → contextual) nos NÓS DE TEXTO já renderizados,
   preservando os ids/âncoras dos cabeçalhos (que continuam com o slug original) */
function moduloContextual(n){ const id=fileNumToId[String(n).padStart(2,'0')]; return id?parseInt(posOf(id),10):n; }
function remapTextNodes(root){
  const re=/Módulos?\s+\d+(?:\s*(?:,|e)\s*\d+)*/g;
  const secRef=/\b(se[çc][ãa]o|se[çc][õo]es)\s+(\d{1,2})\.(\d+)/gi;   // "seção 13.3"
  const walker=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const p=node.parentElement;
    if(p && /^(CODE|PRE)$/.test(p.tagName)) return;
    let nv=node.nodeValue;
    // 1) "Módulo N" (arquivo -> contextual), inclusive listas
    nv=nv.replace(re, seg=> seg.replace(/\d+/g, n=>moduloContextual(n)));
    // 2) número de seção no INÍCIO de um cabeçalho (ex.: "9.6 Regime..." -> "10.6 Regime...")
    if(p && /^H[2-4]$/.test(p.tagName) && p.firstChild===node)
      nv=nv.replace(/^(\d{1,2})\.(\d+)/, (m,F,S)=>moduloContextual(F)+'.'+S);
    // 3) "seção X.Y" na prosa
    nv=nv.replace(secRef, (m,w,F,S)=>w+' '+moduloContextual(F)+'.'+S);
    if(nv!==node.nodeValue) node.nodeValue=nv;
  });
}

/* extrai o markdown COMPLETO de uma seção do módulo pelo slug (sem truncar) */
function sectionBodyMd(m, slug){
  const lines=m.md.split('\n'); let start=-1, lvl=0;
  for(let i=0;i<lines.length;i++){
    const hm=lines[i].match(/^(#{2,4})\s+(.*)/);
    if(hm && slugify(hm[2].replace(/#+\s*$/,'').trim())===slug){ start=i+1; lvl=hm[1].length; break; }
  }
  if(start<0) return '';
  let end=lines.length;
  for(let i=start;i<lines.length;i++){
    const hm=lines[i].match(/^(#{1,4})\s+/);
    if(hm && hm[1].length<=lvl){ end=i; break; }
  }
  return lines.slice(start,end).join('\n').trim();
}

/* reescreve links .md -> rota interna; #anchor -> scroll */
function fixLinks(container){
  container.querySelectorAll('a[href]').forEach(a=>{
    let href=a.getAttribute('href');
    if(/^https?:/i.test(href)){ a.target='_blank'; a.rel='noopener'; return; }
    let m = href.match(/^([0-9]{2}_[^#]*?)\.md(?:#(.*))?$/);
    if(m){
      const id=m[1]; const anchor=m[2]||'';
      a.setAttribute('href','#/mod/'+id+(anchor?'/'+anchor:''));
      a.addEventListener('click',e=>{e.preventDefault();goto(id,anchor);});
      return;
    }
    if(href.startsWith('#') && !href.startsWith('#/')){
      const anchor=href.slice(1);
      a.addEventListener('click',e=>{e.preventDefault();scrollToAnchor(anchor);});
    }
  });
}

/* ============================================================
   NAVEGAÇÃO / ROTEADOR
   ============================================================ */
function buildSidebar(){
  const nav=$('#nav'); let h='';
  D.blocks.forEach(b=>{
    h+='<div class="block-h"><span class="block-dot" style="background:'+BLOCK_COLOR[b.id]+'"></span>Bloco '+b.id+' · '+b.label+'</div>';
    b.modules.forEach(id=>{
      const m=D.modules[id]; if(!m) return;
      const lock = (id===CONTADOR_ID && !isContadorUnlocked()) ? ' <i class="fas fa-lock" style="font-size:10px;color:var(--muted);margin-left:4px"></i>' : '';
      h+='<a class="item" data-id="'+id+'" href="#/mod/'+id+'"><span class="n">'+posOf(id)+'</span>'+cleanTitle(m.title)+lock+'</a>';
    });
  });
  // Início (00) no topo
  const start=D.modules[D.order[0]];
  nav.innerHTML='<a class="item" data-id="'+start.id+'" href="#/mod/'+start.id+'" style="margin:6px 0 2px;font-weight:600"><i class="fas fa-house" style="margin-right:6px"></i>Início / Como usar</a>'+h;
  nav.querySelectorAll('a.item').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault(); goto(a.dataset.id); closeSidebar();
  }));
}
function cleanTitle(t){ return t.replace(/^#*\s*/,'').replace(/^Módulo\s+\d+\s*[—-]\s*/,'').replace(/^Guia Didático.*/,'Início / Como usar'); }

/* ---------- Gate de senha do Módulo do Contador ---------- */
function contadorLockHtml(m){
  return '<div class="lock-panel">'
    + '<div class="lock-icon"><i class="fas fa-user-lock"></i></div>'
    + '<h2>'+esc(cleanTitle(m.title))+'</h2>'
    + '<p>Este módulo é <b>restrito</b> — material técnico do escritório de contabilidade. Informe a senha de acesso para desbloquear o conteúdo nesta sessão.</p>'
    + '<button class="btn primary" id="btnUnlockContador"><i class="fas fa-key"></i> Inserir senha de acesso</button>'
    + '</div>';
}
function openPwdModal(){
  const ov=$('#pwdModal'); ov.classList.add('on');
  const inp=$('#pwdInput'); inp.value=''; $('#pwdError').style.display='none';
  setTimeout(()=>inp.focus(),60);
}
function closePwdModal(){ $('#pwdModal').classList.remove('on'); }
function tryUnlockContador(){
  const val=$('#pwdInput').value.trim();
  if(val===CONTADOR_PWD){
    sessionStorage.setItem('contadorUnlocked','1');
    closePwdModal();
    buildSidebar();                 // remove o cadeado do item
    goto(CONTADOR_ID);              // renderiza o conteúdo
  } else {
    const e=$('#pwdError'); e.style.display='block';
    const inp=$('#pwdInput'); inp.select();
  }
}

function goto(id, anchor){
  if(!D.modules[id]) id=D.order[0];
  const m=D.modules[id];
  const art=$('#article');
  // Módulo do Contador: protegido por senha
  if(id===CONTADOR_ID && !isContadorUnlocked()){
    art.innerHTML = contadorLockHtml(m);
    const btn=art.querySelector('#btnUnlockContador'); if(btn) btn.addEventListener('click', openPwdModal);
    const bl=D.blocks.find(x=>x.modules.includes(id));
    $('#crumb').textContent=(bl?('Bloco '+bl.id+' · '+bl.label+'  ›  '):'')+('Módulo '+parseInt(posOf(id),10)+' — '+cleanTitle(m.title)+' (bloqueado)');
    document.querySelectorAll('.nav a.item').forEach(a=>a.classList.toggle('active',a.dataset.id===id));
    history.replaceState(null,'','#/mod/'+id); window.scrollTo(0,0); currentId=id;
    return;
  }
  art.innerHTML=renderMarkdown(m.md);
  fixLinks(art);
  remapTextNodes(art);   // "Módulo N" (arquivo → contextual) no texto exibido, sem quebrar âncoras
  addPager(id);
  // crumb
  const b=D.blocks.find(x=>x.modules.includes(id));
  $('#crumb').textContent=(b?('Bloco '+b.id+' · '+b.label+'  ›  '):'')+(id===D.order[0]?'Início':('Módulo '+parseInt(posOf(id),10)+' — '+cleanTitle(m.title)));
  // active
  document.querySelectorAll('.nav a.item').forEach(a=>a.classList.toggle('active',a.dataset.id===id));
  history.replaceState(null,'','#/mod/'+id+(anchor?'/'+anchor:''));
  if(anchor) setTimeout(()=>scrollToAnchor(anchor),40);
  else { $('#article').scrollTop=0; window.scrollTo(0,0); }
  currentId=id;
}
function scrollToAnchor(anchor){
  const el=document.getElementById(anchor);
  if(!el) return;
  document.querySelectorAll('.ref-flash,.ref-flash-soft').forEach(n=>n.classList.remove('ref-flash','ref-flash-soft'));
  el.scrollIntoView({behavior:'smooth',block:'start'});
  // aplica o destaque SÓ quando a rolagem terminar
  const doFlash=()=>{
    el.classList.remove('ref-flash'); void el.offsetWidth; el.classList.add('ref-flash');
    const lvl=parseInt((el.tagName.match(/^H(\d)/)||[])[1]||'2',10);
    let n=el.nextElementSibling, count=0;
    while(n && count<8){
      const hm=n.tagName.match(/^H(\d)/);
      if(hm && parseInt(hm[1],10)<=lvl) break;
      n.classList.add('ref-flash-soft'); n=n.nextElementSibling; count++;
    }
    setTimeout(()=>document.querySelectorAll('.ref-flash,.ref-flash-soft').forEach(x=>x.classList.remove('ref-flash','ref-flash-soft')),2100);
  };
  // dispara o destaque SÓ quando a rolagem terminar (evento scrollend) — com fallback por tempo
  let fired=false;
  const onEnd=()=>{ if(fired) return; fired=true; window.removeEventListener('scrollend',onEnd); doFlash(); };
  window.addEventListener('scrollend', onEnd);
  const precisaRolar = Math.abs(el.getBoundingClientRect().top - 74);   // já visível no topo?
  setTimeout(onEnd, precisaRolar < 6 ? 150 : 1100);                     // fallback (sem scrollend / sem rolagem)
}
function addPager(id){
  const idx=D.order.indexOf(id);
  const prev=idx>0?D.modules[D.order[idx-1]]:null;
  const next=idx<D.order.length-1?D.modules[D.order[idx+1]]:null;
  const lbl=(mm)=>(mm.id===D.order[0]?'Início':(posOf(mm.id)+' · '))+cleanTitle(mm.title);
  let h='<div class="pager">';
  h+= prev?'<a href="#/mod/'+prev.id+'" data-go="'+prev.id+'"><div class="lbl">← Anterior</div><div class="tt">'+lbl(prev)+'</div></a>':'<span></span>';
  h+= next?'<a class="next" href="#/mod/'+next.id+'" data-go="'+next.id+'"><div class="lbl">Próximo →</div><div class="tt">'+lbl(next)+'</div></a>':'<span></span>';
  h+='</div>';
  const div=document.createElement('div'); div.innerHTML=h;
  $('#article').appendChild(div);
  div.querySelectorAll('a[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();goto(a.dataset.go);}));
}
let currentId=null;
function route(){
  const m=location.hash.match(/^#\/mod\/([^\/]+)(?:\/(.*))?$/);
  if(m) goto(decodeURIComponent(m[1]), m[2]?decodeURIComponent(m[2]):'');
  else goto(D.order[0]);
}

/* ============================================================
   BUSCA (sidebar)
   ============================================================ */
function runSearch(q){
  const box=$('#searchResults');
  q=foldAccents(q.trim().toLowerCase());
  if(q.length<2){ box.classList.remove('on'); box.innerHTML=''; return; }
  const terms=q.split(/\s+/).filter(Boolean);
  const scored=[];
  D.search.forEach(s=>{
    const hay=foldAccents((s.heading+' '+s.text).toLowerCase());
    const hayH=foldAccents(s.heading.toLowerCase());
    let sc=0;
    terms.forEach(t=>{
      const inH=hayH.includes(t), inT=hay.includes(t);
      if(inH) sc+=5; if(inT) sc+=1;
    });
    if(terms.every(t=>hay.includes(t))) sc+=3;
    if(sc>0) scored.push({s,sc});
  });
  scored.sort((a,b)=>b.sc-a.sc);
  const top=scored.slice(0,12);
  if(!top.length){ box.innerHTML='<div class="sr-item"><div class="m">Nada encontrado.</div></div>'; box.classList.add('on'); return; }
  box.innerHTML=top.map(o=>'<div class="sr-item" data-mod="'+o.s.mod+'" data-anchor="'+o.s.slug+'"><div class="h">'+esc(o.s.heading)+'</div><div class="m">'+o.s.modNum+' · '+esc(cleanTitle(o.s.modTitle))+'</div></div>').join('');
  box.classList.add('on');
  box.querySelectorAll('.sr-item[data-mod]').forEach(el=>el.addEventListener('click',()=>{
    goto(el.dataset.mod, el.dataset.anchor); box.classList.remove('on'); $('#searchInput').value='';
  }));
}

/* ============================================================
   ASSISTENTE — recuperação (BM25-lite) sobre as seções
   ============================================================ */
const STOP=new Set('a o e de da do das dos que em para com um uma os as no na nos nas por se ao aos à às ou como qual quais quando onde meu minha seu sua sobre entre ser tem ter the of gera dar da'.split(' '));
const SYN={
  cliente:['adquirente','comprador','tomador','consumidor'],
  adquirente:['cliente','comprador','tomador'],
  loja:['estabelecimento','comercio','varejista'],
  vender:['fornecer','venda','fornecimento'], venda:['fornecimento','fornecer'],
  comprar:['adquirir','aquisicao'], compra:['aquisicao','adquirir'],
  imovel:['imoveis','imobiliaria','imobiliario'], imoveis:['imovel','imobiliaria'],
  restaurante:['restaurantes','bar','bares','alimentacao','bebidas','refeicao'], bar:['bares','restaurante','restaurantes','alimentacao','bebidas'],
  restaurantes:['restaurante','bar','bares','alimentacao','bebidas'], bares:['bar','restaurante','restaurantes','alimentacao','bebidas'],
  combustivel:['combustiveis'], remedio:['medicamento','medicamentos','farmaceutico'],
  credito:['creditar','creditamento'], hotel:['hotelaria','hoteis'], banco:['financeiro','financeiros'],
  imposto:['tributo','tributos'], nota:['documento','nfe','dfe'],
  consumidor:['final','nao','contribuinte','pessoa','fisica'], final:['consumidor','nao','contribuinte'],
  creditar:['credito','credita','creditamento','apropriar','apropriacao'], creditos:['credito'],
  vedado:['veda','vedacao','proibido','nao','pode'], uso:['consumo','pessoal'],
  contribuinte:['regime','regular'], devolucao:['devolver','cancelamento','estorno']
};
function tokenize(s){
  return foldAccents(String(s).toLowerCase())
    .replace(/[^0-9a-z%$., ]/g,' ')
    .split(/\s+/).filter(t=>t.length>=2 && !STOP.has(t));
}
function expandQuery(s){
  const base=tokenize(s); const set=new Set(base);
  base.forEach(t=>{ (SYN[t]||[]).forEach(x=>set.add(x)); });
  return [...set];
}
let IDX=null;
function buildIndex(){
  const docs=D.search.map((s,i)=>{
    const toks=tokenize(s.heading+' '+s.heading+' '+s.heading+' '+s.text); // heading peso 3
    const tf={}; toks.forEach(t=>tf[t]=(tf[t]||0)+1);
    return {i, s, tf, len:toks.length};
  });
  const df={}; docs.forEach(d=>Object.keys(d.tf).forEach(t=>df[t]=(df[t]||0)+1));
  const N=docs.length; const avg=docs.reduce((a,d)=>a+d.len,0)/N;
  IDX={docs,df,N,avg};
}
function retrieve(query, k){
  if(!IDX) buildIndex();
  const qt=expandQuery(query); if(!qt.length) return [];
  const {docs,df,N,avg}=IDX; const k1=1.5,b=0.45;
  const qHead=foldAccents(query.toLowerCase());
  const scored=docs.map(d=>{
    if(d.s.modNum==='00') return null;   // índice não é fonte de conteúdo
    let sc=0;
    qt.forEach(t=>{
      const f=d.tf[t]; if(!f) return;
      const idf=Math.log(1+(N-df[t]+0.5)/(df[t]+0.5));
      sc += idf*(f*(k1+1))/(f+k1*(1-b+b*d.len/avg));
    });
    if(!sc) return null;
    const hh=foldAccents(d.s.heading.toLowerCase());
    if(qt.every(t=>hh.includes(t))) sc*=1.8;          // título casa tudo
    if(['conceito','regras','funcionamento'].includes(d.s.cat)) sc*=1.12;
    if(d.s.level===2) sc*=1.05;
    if(d.s.modNum==='16'||d.s.modNum==='17'||d.s.modNum==='13') sc*=0.85; // guias derivados (empresário/contador/comparativo) cedem ao módulo dedicado
    return {d,sc};
  }).filter(Boolean);
  scored.sort((x,y)=>y.sc-x.sc);
  return scored.slice(0,k||8);
}
function bestModuleSection(query, hits){
  // módulo = do hit mais forte (evita que módulos longos vençam por volume);
  // desempate: soma de score entre os 3 primeiros hits do mesmo módulo
  const topMod=hits[0].d.s.mod;
  const agg={};
  hits.slice(0,6).forEach((h,i)=>{ agg[h.d.s.mod]=(agg[h.d.s.mod]||0)+h.sc*(i===0?2:1); });
  const mod=Object.keys(agg).sort((a,b)=>agg[b]-agg[a])[0]||topMod;
  const m=D.modules[mod];
  // melhor ## section desse módulo p/ a query (cabeçalho pesa mais; prefere seções técnicas)
  const qt=expandQuery(query);
  let best=null,bs=-1;
  (m.sections||[]).forEach(sec=>{
    const head=foldAccents(sec.heading.toLowerCase());
    const body=foldAccents(Object.values(sec.sub).join(' ').toLowerCase());
    let sc=0; qt.forEach(t=>{ sc += occ(head,t)*6 + Math.min(occ(body,t),5); });
    const tech=(sec.sub.conceito||sec.sub.funcionamento||sec.sub.regras)?1:0;
    if(sc>0 && tech) sc+=4;                       // seção numerada técnica vence "Para Leigos"
    if(sc>bs){bs=sc;best=sec;}
  });
  return {m, sec:best};
}

/* RESPOSTA DIRETA: 1-2 FRASES concisas e no contexto (restrito aos módulos mais relevantes) */
function directAnswer(query, hits){
  const qt=expandQuery(query);
  const long=qt.filter(t=>t.length>4);
  const allowed=new Set((hits||[]).slice(0,2).map(h=>h.d.s.mod)); // só os 2 módulos mais relevantes
  const ANS=/(nao pode|nao gera|nao se credit|nao integra|nao incide|fica vedad|vedad|somente|apenas|exceto|permitid|incide sobre|considera-se|dao? direito|gera credito|reduzid|aliquota zero|isent|obrigad|deve emitir|precisa)/g;
  const cand=[];
  D.search.forEach(s=>{
    if(allowed.size && !allowed.has(s.mod)) return;
    s.text.split(/(?<=[.!?;:])\s+/).forEach(sent=>{
      const clean=sent.trim();
      if(clean.length<30||clean.length>280||clean.includes('|')) return;
      const f=foldAccents(clean.toLowerCase());
      let hit=0, cov=0;
      qt.forEach(t=>{ if(f.includes(t)) hit++; });
      long.forEach(t=>{ if(f.includes(t)) cov++; });
      if(cov<1 || hit<2) return;                     // cobre termo específico da pergunta
      const ans=(f.match(ANS)||[]).length;
      if(ans<1) return;                              // SÓ frases que de fato respondem (decisivas)
      let sc=hit + 2.2*cov + 2.6*ans;
      if(/\b(calcule|calcular|monte|preencha|passo|fluxo|emita|identifique|enquadre|por exemplo|exemplo)\b/.test(f)) sc-=6;
      cand.push({sent:clean, sc, mod:s.mod, slug:s.slug});
    });
  });
  cand.sort((a,b)=>b.sc-a.sc);
  const out=[], seen=new Set();
  for(const c of cand){
    if(c.sc<6) break;                                // alta confiança ou omite
    const key=foldAccents(c.sent.toLowerCase()).slice(0,40);
    if([...seen].some(k=>k.slice(0,30)===key.slice(0,30))) continue;
    seen.add(key); out.push(c); if(out.length>=2) break;
  }
  return out;
}

/* 1-2 primeiras frases limpas de um bloco (para resposta concisa) */
function firstSentences(md, n){
  let txt=String(md||'')
    .replace(/^>\s?/gm,'')
    .replace(/^\s*\*\*[^*]+\*\*:?\s*/,'')     // remove rótulo em negrito inicial
    .replace(/`([^`]*)`/g,'$1').replace(/\*\*([^*]*)\*\*/g,'$1').replace(/\*([^*]*)\*/g,'$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g,'$1')
    .replace(/^[#>\-\|]+/gm,' ').replace(/\s+/g,' ').trim();
  const sents=txt.split(/(?<=[.!?])\s+/).filter(s=>s.trim().length>18);
  return sents.slice(0,n).join(' ');
}
/* escolhe, em todo o módulo, o melhor sub-bloco de uma categoria p/ a query */
function pickSub(m, cats, query){
  const qt=expandQuery(query); let best='',bs=0;
  (m.sections||[]).forEach(sec=>{
    for(const cat of cats){
      const v=sec.sub[cat]; if(!v||!v.trim()) continue;
      const blob=foldAccents((sec.heading+' '+v).toLowerCase());
      let hits=0; qt.forEach(t=>{ hits+=occ(blob,t); });
      if(hits>bs){bs=hits;best=v;}
    }
  });
  return bs>0?best:'';   // exige ao menos 1 termo da pergunta
}
function pickExample(m, query){
  const qt=expandQuery(query); let best='',bs=0;
  (m.sections||[]).forEach(sec=>{ (sec.sub.exemplos||[]).forEach(ex=>{
    const blob=foldAccents(ex.toLowerCase()); let hits=0; qt.forEach(t=>{ hits+=occ(blob,t); });
    if(hits>bs){bs=hits;best=ex;}
  });});
  return bs>0?best:'';
}

/* monta resposta OFFLINE no formato pedido */
function offlineAnswer(query){
  const hits=retrieve(query,10);
  if(!hits.length || hits[0].sc<0.8){
    return {html:'<p>Não encontrei isso no conteúdo dos módulos. Tente termos mais específicos — por exemplo: <b>crédito presumido</b>, <b>Split Payment</b>, <b>cesta básica</b>, <b>bares e restaurantes</b>, <b>redutor de ajuste</b>, <b>Imposto Seletivo</b>.</p>', sources:[]};
  }
  const {m,sec}=bestModuleSection(query,hits);
  const sub = sec? sec.sub : {conceito:'',funcionamento:'',regras:'',operacional:'',finalidade:'',exemplos:[]};
  // trecho mais relevante do módulo (granularidade fina — pega subtópicos como "cesta básica"),
  // preferindo conteúdo explicativo a "Fluxo de Preenchimento"/layout
  const modHits = hits.filter(h=>h.d.s.mod===m.id);
  const isProc = h=>{ const hd=foldAccents(h.d.s.heading.toLowerCase()); return h.d.s.cat==='operacional'||hd.startsWith('fluxo')||hd.includes('impacto sistemico')||hd.includes('layout'); };
  const nonProc = modHits.filter(h=>!isProc(h));
  const top = nonProc[0] || modHits[0];
  // prefere um tema principal (## nível 2) a um subtópico (###), se relevância for próxima
  const lvl2 = (top.d.s.level>2) ? nonProc.find(h=>h.d.s.level===2 && h.sc >= top.sc*0.8) : null;
  const leadHit = lvl2 || top;
  const leadHead = leadHit ? leadHit.d.s.heading : (sec?sec.heading:'');
  // "O que é": se o líder é uma seção ##, usa o sub-bloco definicional dela; senão o texto do trecho
  const leadSec = (m.sections||[]).find(s=>leadHit && s.slug===leadHit.d.s.slug);
  let conceito;
  if(leadSec && (leadSec.sub.conceito||leadSec.sub.finalidade||leadSec.sub.funcionamento))
    conceito = leadSec.sub.conceito || leadSec.sub.finalidade || leadSec.sub.funcionamento;
  else
    conceito = (leadHit&&sectionBodyMd(m, leadHit.d.s.slug)) || pickSub(m,['conceito','finalidade'],query) || (leadHit&&leadHit.d.s.text) || sub.conceito || sub.finalidade;
  // se o "O que é" parecer exemplo/tabela, troca por um conceito limpo
  const looksExample = t => /^\s*(>|\||emenda|exemplo)/i.test(foldAccents(String(t||'')));
  if(looksExample(conceito)){
    const alt = pickSub(m,['conceito','finalidade'],query) || pickSub(m,['funcionamento'],query);
    if(alt && !looksExample(alt)) conceito = alt;
  }
  const funciona = pickSub(m,['funcionamento'],query) || sub.funcionamento;
  const regras   = pickSub(m,['regras','operacional'],query) || sub.regras || sub.operacional;
  const exemplo  = pickExample(m,query) || (sub.exemplos&&sub.exemplos[0]);
  let parts='';
  function block(label,txt){ if(txt && txt.trim()) parts+='<h4>'+label+'</h4>'+renderMarkdown(txt); }
  // Resposta direta concisa = 1ª frase do "O que é" (definicional, curado) — sem duplicar todo o bloco
  const resumo = firstSentences(conceito, 1);
  const conceitoResto = resumo ? conceito.replace(/^([\s\S]*?[.!?])(\s|$)/, '').trim() : conceito;
  if(resumo && resumo.trim()) parts+='<h4>Resposta direta</h4><p>'+inline(resumo)+'</p>';
  block('O que é', conceitoResto || conceito);
  block('Como funciona', funciona);
  block('O que pode / o que não pode', regras);
  if(exemplo && exemplo.trim()) parts+='<h4>Exemplo</h4><blockquote>'+renderMarkdown(exemplo)+'</blockquote>';
  if(!parts){ // fallback: mostra o melhor trecho recuperado
    const h=hits[0].d.s;
    parts='<h4>'+esc(h.heading)+'</h4><p>'+esc(h.text.slice(0,700))+'…</p>';
  }
  const header='<div style="font-size:12px;color:var(--muted);margin-bottom:2px">Fonte principal: Módulo '+parseInt(posOf(m.id),10)+' · '+esc(cleanTitle(m.title))+(leadHead?' › '+esc(leadHead):'')+'</div>';
  // fontes = top 5 seções distintas
  const seen=new Set(); const src=[];
  hits.forEach(h=>{ const key=h.d.s.mod+'#'+h.d.s.slug; if(!seen.has(key)&&src.length<5){seen.add(key);src.push(h.d.s);} });
  return {html:header+parts, sources:src, mod:m.id, anchor:leadHit?leadHit.d.s.slug:(sec?sec.slug:'')};
}

/* modo avançado: RAG via Anthropic (opcional) */
const AI_MODELS = {
  anthropic: [ ['claude-haiku-4-5-20251001','Claude Haiku 4.5 (rápido)'], ['claude-sonnet-5','Claude Sonnet 5 (preciso)'], ['claude-opus-4-8','Claude Opus 4.8 (máximo)'] ],
  gemini:    [ ['gemini-2.5-flash','Gemini 2.5 Flash (rápido)'], ['gemini-3.5-pro','Gemini 3.5 Pro (preciso)'] ]
};
async function loadEnv(){
  try{
    const r=await fetch('.env',{cache:'no-store'});
    if(!r.ok) return;
    const t=await r.text(); const env={};
    t.split(/\r?\n/).forEach(line=>{
      line=line.trim(); if(!line||line[0]==='#') return;
      const i=line.indexOf('='); if(i<0) return;
      env[line.slice(0,i).trim()]=line.slice(i+1).trim().replace(/^["']|["']$/g,'');
    });
    if(env.AI_KEY) window.__ENV=env;   // só considera se tiver chave preenchida
  }catch(e){/* file:// ou sem .env → ignora */}
}
function aiConfig(){
  const E=window.__ENV;
  if(E && E.AI_KEY){
    const provider=(E.AI_PROVIDER||'anthropic').toLowerCase();
    return {provider, key:E.AI_KEY, model:E.AI_MODEL||AI_MODELS[provider][0][0], fromEnv:true};
  }
  let provider=localStorage.getItem('aiProvider'), key=localStorage.getItem('aiKey'), model=localStorage.getItem('aiModel');
  if(!key && localStorage.getItem('anthKey')){ provider='anthropic'; key=localStorage.getItem('anthKey'); model=localStorage.getItem('anthModel'); } // compat
  provider=provider||'anthropic';
  if(!model) model=AI_MODELS[provider][0][0];
  return {provider, key, model, fromEnv:false};
}
function syncSettingsUI(){
  const c=aiConfig();
  const cfg=$('#aiKeyConfig'), note=$('#aiEnvNote');
  if(cfg) cfg.style.display = c.fromEnv ? 'none' : 'block';
  if(note){ note.style.display = c.fromEnv ? 'block' : 'none'; const p=$('#aiEnvProvider'); if(p) p.textContent = (c.provider==='gemini'?'Gemini':'Claude')+' · '+c.model; }
}
async function ragAnswer(query){
  const {provider,key,model}=aiConfig();
  const hits=retrieve(query,10);
  const direct=directAnswer(query, hits);
  const dctx=direct.length?('TRECHOS MAIS RELEVANTES:\n'+direct.map((d,i)=>'• '+d.sent+' (Módulo '+parseInt(posOf(d.mod),10)+')').join('\n')+'\n\n'):'';
  const ctx=dctx+hits.map((h,i)=>'['+(i+1)+'] Módulo '+parseInt(posOf(h.d.s.mod),10)+' — '+h.d.s.modTitle+' › '+h.d.s.heading+'\n'+h.d.s.text).join('\n\n');
  const sys="Você é um assistente especialista na Reforma Tributária brasileira (IBS/CBS). Responda com base no CONTEXTO fornecido (trechos oficiais do guia). Você PODE fazer inferência lógica quando a resposta decorre diretamente do contexto — por exemplo, se o contexto diz que só o contribuinte do regime regular se credita, então um consumidor final (não contribuinte) NÃO se credita. Mas NUNCA invente números, prazos, artigos, alíquotas ou regras que não estejam no contexto; se faltar base, diga que não consta no material. Responda em português do Brasil, didático, direto ao ponto, SEMPRE nesta estrutura markdown:\n**Resposta direta** (1-3 frases que respondem objetivamente a pergunta)\n**O que é**\n**Como funciona**\n**O que pode / o que não pode**\n**Exemplo** (se houver no contexto)\n**Fontes** (módulos usados, ex.: Módulo 9). Claro para leigos e empresários.";
  const userMsg='PERGUNTA: '+query+'\n\nCONTEXTO:\n'+ctx;
  let txt='';
  if(provider==='gemini'){
    const url='https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent?key='+encodeURIComponent(key);
    const r=await fetch(url,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({
      systemInstruction:{parts:[{text:sys}]},
      contents:[{role:'user',parts:[{text:userMsg}]}],
      generationConfig:{maxOutputTokens:1400,temperature:0.2}
    })});
    if(!r.ok){ const t=await r.text(); throw new Error('Gemini '+r.status+': '+t.slice(0,180)); }
    const j=await r.json();
    txt=(((j.candidates||[])[0]||{}).content||{parts:[]}).parts.map(p=>p.text||'').join('');
    if(!txt) throw new Error('Gemini não retornou texto (verifique o modelo/chave).');
  } else {
    const r=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'content-type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model, max_tokens:1400, system:sys, messages:[{role:'user',content:userMsg}]})
    });
    if(!r.ok){ const t=await r.text(); throw new Error('Claude '+r.status+': '+t.slice(0,180)); }
    const j=await r.json();
    txt=(j.content||[]).map(c=>c.text||'').join('');
  }
  const seen=new Set(); const src=[];
  hits.forEach(h=>{ const kk=h.d.s.mod+'#'+h.d.s.slug; if(!seen.has(kk)&&src.length<5){seen.add(kk);src.push(h.d.s);} });
  return {html:renderMarkdown(txt), sources:src};
}

/* ============================================================
   UI do chat
   ============================================================ */
const chatBody=$('#chatBody');
function addMsg(role, html){
  const d=document.createElement('div'); d.className='msg '+role; d.innerHTML=html;
  const sp=document.getElementById('chatSpacer');
  if(sp) chatBody.insertBefore(d, sp); else chatBody.appendChild(d);
  chatBody.scrollTop=chatBody.scrollHeight; return d;
}
function sourcesHtml(src){
  if(!src||!src.length) return '';
  const clean=h=>String(h||'').replace(/^\d+(\.\d+)*\s+/,'').replace(/\s*\(Módulo\s+\d+\)/gi,'').trim(); // tira "9.6 " e "(Módulo 9)" do arquivo
  return '<div class="sources"><i class="fas fa-paperclip"></i> <b>Ver nos módulos:</b>'+src.map(s=>'<a href="#/mod/'+s.mod+'/'+s.slug+'" data-mod="'+s.mod+'" data-anchor="'+s.slug+'">Módulo '+parseInt(posOf(s.mod),10)+' — '+esc(clean(s.heading))+'</a>').join('')+'</div>';
}
function wireSources(node){
  node.querySelectorAll('a[data-mod]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault(); goto(a.dataset.mod,a.dataset.anchor); if(window.innerWidth<=900) toggleChat(false);
  }));
}
async function ask(query){
  if(!query.trim()) return;
  const uMsg=addMsg('user', esc(query));
  const useApi=!!aiConfig().key;
  const t=addMsg('bot','<span class="thinking"><span class="dot"></span><span class="dot"></span><span class="dot"></span> consultando os módulos…</span>');
  try{
    let res;
    if(useApi){ try{ res=await ragAnswer(query); }catch(err){ res=offlineAnswer(query); res.html='<div style="font-size:12px;color:var(--warn);margin-bottom:6px"><i class="fas fa-triangle-exclamation"></i> Falha na IA ('+esc(err.message)+'). Resposta offline:</div>'+res.html; } }
    else res=offlineAnswer(query);
    t.innerHTML=res.html+sourcesHtml(res.sources);
    wireSources(t);
  }catch(err){
    t.innerHTML='<span style="color:var(--danger)">Erro: '+esc(err.message)+'</span>';
  }
  // espaçador (sempre por último) garante espaço p/ subir a pergunta ao topo
  const sp=document.getElementById('chatSpacer');
  if(sp){ sp.style.flex='none'; sp.style.minHeight=chatBody.clientHeight+'px'; }
  // mostra o INÍCIO da resposta (pergunta no topo), não o fim
  const goTop=()=>{ chatBody.scrollTop = Math.max(0, uMsg.offsetTop - 10); };
  setTimeout(goTop,60); setTimeout(goTop,180);
}
const SUGG=['Bar e restaurante gera crédito ao cliente?','O que é o Split Payment?','Como funciona o crédito presumido do produtor rural?','O que muda no Simples Nacional?','O que é o redutor de ajuste de imóveis?','Sobre o que incide o Imposto Seletivo?'];
function renderSuggest(){
  $('#chatSuggest').innerHTML=SUGG.map(s=>'<span class="chip">'+esc(s)+'</span>').join('');
  $('#chatSuggest').querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{ ask(c.textContent); }));
}

/* ============================================================
   WIRING
   ============================================================ */
function toggleChat(on){ $('#chat').classList.toggle('on', on===undefined?!$('#chat').classList.contains('on'):on); }
function openSidebar(){ $('#sidebar').classList.add('on'); $('#backdrop').classList.add('on'); }
function closeSidebar(){ $('#sidebar').classList.remove('on'); $('#backdrop').classList.remove('on'); }

function updateThemeIcon(){
  const icon=$('#themeIcon');
  if(!icon) return;
  const dark=document.documentElement.getAttribute('data-theme')==='dark';
  icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  const btn=$('#themeBtn');
  if(btn) btn.title = dark ? 'Ativar tema claro' : 'Ativar tema escuro';
}
const prefersDark=()=> !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
function initTheme(){
  const saved=localStorage.getItem('docTheme');        // só existe se o usuário escolheu manualmente
  const t=saved || (prefersDark()?'dark':'light');      // sem escolha → segue preferência do sistema (Windows)
  document.documentElement.setAttribute('data-theme',t);
  updateThemeIcon();
}
$('#themeBtn').addEventListener('click',()=>{
  const cur=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',cur); localStorage.setItem('docTheme',cur);
  updateThemeIcon();
});
// Segue o tema do Windows ao vivo enquanto o usuário não fixar manualmente
if(window.matchMedia){
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e=>{
    if(localStorage.getItem('docTheme')) return;         // escolha manual tem prioridade
    document.documentElement.setAttribute('data-theme', e.matches?'dark':'light');
    updateThemeIcon();
  });
}
$('#menuBtn').addEventListener('click',openSidebar);
$('#backdrop').addEventListener('click',closeSidebar);
$('#searchInput').addEventListener('input',e=>runSearch(e.target.value));
$('#searchInput').addEventListener('keydown',e=>{ if(e.key==='Escape'){$('#searchResults').classList.remove('on');} });
document.addEventListener('click',e=>{ if(!e.target.closest('.search')) $('#searchResults').classList.remove('on'); });

$('#fab').addEventListener('click',()=>toggleChat(true));
$('#closeChat').addEventListener('click',()=>toggleChat(false));
$('#gearBtn').addEventListener('click',()=>{ syncSettingsUI(); $('#settings').classList.toggle('on'); });
$('#chatSend').addEventListener('click',()=>{ const v=$('#chatInput').value; $('#chatInput').value=''; ask(v); });
$('#chatInput').addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('#chatSend').click();} });
$('#chatInput').addEventListener('input',e=>{ e.target.style.height='auto'; e.target.style.height=Math.min(e.target.scrollHeight,120)+'px'; });

function populateModels(provider){
  const sel=$('#model'); const cur=localStorage.getItem('aiModel');
  sel.innerHTML=(AI_MODELS[provider]||[]).map(m=>'<option value="'+m[0]+'"'+(m[0]===cur?' selected':'')+'>'+m[1]+'</option>').join('');
  const inp=$('#apiKey'); if(inp) inp.placeholder = provider==='gemini' ? 'Cole sua chave Google AI Studio (AIza…)' : 'Cole sua chave Anthropic (sk-ant-…)';
}
function refreshMode(){
  const c=aiConfig();
  const label=c.provider==='gemini'?'Gemini':'Claude';
  $('#chatMode').textContent=c.key?('modo IA · '+label):'modo independente';
}
$('#provider').addEventListener('change',()=>{ populateModels($('#provider').value); });
$('#saveKey').addEventListener('click',()=>{
  const k=$('#apiKey').value.trim(); const prov=$('#provider').value;
  localStorage.setItem('aiProvider',prov);
  if(k) localStorage.setItem('aiKey',k);
  localStorage.setItem('aiModel',$('#model').value);
  localStorage.removeItem('anthKey'); localStorage.removeItem('anthModel'); // migra chaves antigas
  refreshMode(); $('#settings').classList.remove('on');
});
$('#clearKey').addEventListener('click',()=>{ localStorage.removeItem('aiKey'); localStorage.removeItem('anthKey'); $('#apiKey').value=''; refreshMode(); });

window.addEventListener('hashchange',route);

/* modal de senha do Contador */
$('#pwdConfirm').addEventListener('click', tryUnlockContador);
$('#pwdCancel').addEventListener('click', closePwdModal);
$('#pwdClose').addEventListener('click', closePwdModal);
$('#pwdModal').addEventListener('click', e=>{ if(e.target.id==='pwdModal') closePwdModal(); });
$('#pwdInput').addEventListener('keydown', e=>{ if(e.key==='Enter'){e.preventDefault();tryUnlockContador();} if(e.key==='Escape') closePwdModal(); });

/* ---------- PWA: service worker + instalação ---------- */
if('serviceWorker' in navigator && location.protocol.indexOf('http')===0){
  window.addEventListener('load',()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); });
}
let deferredInstall=null;
const iBanner=()=>$('#installBanner');
window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault(); deferredInstall=e;
  if(!localStorage.getItem('pwaDismissed') && iBanner()) iBanner().classList.add('on');
});
if($('#ibInstall')) $('#ibInstall').addEventListener('click', async ()=>{
  if(iBanner()) iBanner().classList.remove('on');
  if(deferredInstall){ deferredInstall.prompt(); try{ await deferredInstall.userChoice; }catch(_){} deferredInstall=null; }
});
if($('#ibClose')) $('#ibClose').addEventListener('click', ()=>{ if(iBanner()) iBanner().classList.remove('on'); localStorage.setItem('pwaDismissed','1'); });
window.addEventListener('appinstalled', ()=>{ if(iBanner()) iBanner().classList.remove('on'); localStorage.setItem('pwaDismissed','1'); });
(function(){ // iOS não dispara beforeinstallprompt — mostra dica manual
  const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
  const standalone=window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const b=iBanner();
  if(isIOS && !standalone && !localStorage.getItem('pwaDismissed') && b){
    b.querySelector('.ib-txt span').textContent='No iPhone/iPad: toque em Compartilhar e depois "Adicionar à Tela de Início".';
    b.querySelector('#ibInstall').style.display='none';
    b.classList.add('on');
  }
})();

/* boot */
initTheme();
buildSidebar();
renderSuggest();
refreshMode();
(function(){ const c=aiConfig(); $('#provider').value=c.provider; populateModels(c.provider); if(c.model) $('#model').value=c.model; })();
syncSettingsUI();
loadEnv().then(()=>{ refreshMode(); syncSettingsUI(); });   // .env pode ativar modo IA e esconder a config de chave
route();
(function(){ const sp=document.createElement('div'); sp.id='chatSpacer'; chatBody.appendChild(sp); })();
addMsg('bot','Olá! Sou o assistente da documentação. Pergunte em linguagem natural — respondo com <b>o que é</b>, <b>como funciona</b>, <b>o que pode / não pode</b> e um <b>exemplo</b>, sempre baseado no conteúdo oficial dos módulos. Experimente uma das sugestões abaixo.');

})();
