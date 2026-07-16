# Módulo 8 — Regimes Diferenciados e Crédito Presumido

## Visão Geral para Empresários

**O que é, em linguagem simples?** Alguns setores pagam **menos** imposto por decisão da própria lei: saúde, educação, alimentos, produtos de higiene básica pagam **60% a menos**; itens da cesta básica e remédios pagam **zero**. Além disso, quem compra de gente que normalmente não emite nota fiscal (pequeno produtor rural, catador de material reciclável, motorista autônomo) ainda pode ganhar um **crédito "de presente"** (crédito presumido), mesmo sem imposto ter sido pago lá atrás.

**Por que isso importa pra você, empresário?** Se seu negócio está numa dessas áreas beneficiadas, sua margem melhora — mas você precisa configurar o código certo (CST/cClassTrib) em cada nota, senão o sistema cobra o imposto cheio por engano. Se você compra insumos de pequenos produtores ou autônomos informais, não deixe de emitir o documento fiscal de aquisição correto — é ele que garante seu crédito presumido.

> **Exemplo prático:** Um supermercado vende arroz, feijão e leite (itens da Cesta Básica Nacional) — sobre esses produtos, o imposto é **zero**. Já numa padaria que compra ovos direto de um pequeno produtor rural sem nota, a padaria pode calcular um **crédito presumido** sobre essa compra, mesmo o produtor rural não tendo recolhido imposto nenhum.

## Introdução para Profissionais de Contabilidade

**Equivalência com o que você já estudou:** "alíquota reduzida" e "isenção" você já viu no ICMS (produtos da cesta básica hoje já têm redução de base de cálculo em vários estados). O que é novo é o **crédito presumido** funcionando como ferramenta ampla e nacional: no ICMS, crédito presumido é benefício estadual raro e discricionário; no IBS/CBS, é regra **federal padronizada**, com fórmula fixa, para situações específicas (produtor rural, reciclagem, autônomos).

**Glossário rápido deste módulo:**
- **Regime diferenciado** — desconto de alíquota (ou crédito presumido) dado pela própria lei a um setor inteiro (ex.: saúde, educação).
- **Crédito presumido** — um crédito "calculado por fórmula", concedido mesmo sem o fornecedor ter pago imposto (diferente do crédito comum do Módulo 5, que exige pagamento efetivo).
- **Coeficiente (C)** — a variável da fórmula de crédito presumido que representa o percentual anual divulgado pelo governo.

**Dica prática de rotina:** ao configurar o cadastro de um cliente que compra de produtor rural, autônomo ou catador de reciclável, verifique **todo mês de setembro** se o percentual de crédito presumido foi republicado para o ano seguinte — os percentuais mudam anualmente e valem a partir de 1º de janeiro.

## 8.1 Regimes Diferenciados — Regras Gerais

### O que é?

**Regimes diferenciados** são desvios pontuais e uniformes da alíquota padrão, concedidos pela própria Lei Complementar a setores considerados socialmente sensíveis (saúde, educação, alimentação) — sempre por meio de **alíquota reduzida** ou **crédito presumido**, nunca por benefícios fiscais discricionários como no sistema atual.

### Para que serve?

Uma das promessas centrais da reforma foi **acabar com a "guerra fiscal"** e os benefícios fiscais concedidos discricionariamente por Estados e Municípios. Os regimes diferenciados são a válvula de escape controlada: em vez de cada ente conceder o que quiser, a própria lei nacional define **um número fechado de setores beneficiados**, com percentuais uniformes em todo o território.

### Como funciona na prática?

- Regimes diferenciados aplicam-se de maneira **uniforme em todo o território nacional**;
- consistem em **alíquotas reduzidas** ou **créditos presumidos**;
- a alteração de operações beneficiadas (inclusão, exclusão, substituição) só entra em vigor **após ajuste das alíquotas de referência** do IBS/CBS, para reequilibrar a arrecadação;
- **não podem ser cumulados** entre si, nem com regimes específicos ou favorecidos, **exceto se previsto expressamente** na Lei Complementar (relembra a regra de prioridade entre benefícios do Módulo 4.5).

### Regras de Ouro — Tabela de Reduções

**Redução de 60% nas alíquotas do IBS/CBS** (Art. 128 da LC 214/2025), para:
- serviços de educação;
- serviços de saúde;
- dispositivos médicos;
- dispositivos de acessibilidade para pessoas com deficiência;
- medicamentos;
- alimentos destinados ao consumo humano;
- produtos de higiene pessoal e limpeza majoritariamente consumidos por famílias de baixa renda;
- produtos agropecuários, aquícolas, pesqueiros, florestais e extrativistas vegetais *in natura*;
- insumos agropecuários e aquícolas;
- produções nacionais artísticas, culturais, de eventos, jornalísticas e audiovisuais;
- comunicação institucional;
- atividades desportivas;
- bens e serviços relacionados à soberania e segurança nacional, segurança da informação e cibernética.

**Redução a ZERO das alíquotas do IBS** (Art. 143 da LC 214/2025), para:
- dispositivos médicos;
- dispositivos de acessibilidade para pessoas com deficiência;
- medicamentos;
- produtos de cuidados básicos à saúde menstrual;
- produtos hortícolas, frutas e ovos;
- automóveis de passageiros adquiridos por PcD ou por pessoas com transtorno do espectro autista;
- automóveis adquiridos por motoristas profissionais de táxi;
- serviços prestados por Instituição Científica, Tecnológica e de Inovação (ICT) sem fins lucrativos.

**Cesta Básica Nacional de Alimentos** — **Alíquota Zero (0%)** para os produtos listados no **Anexo I** da LC 214/2025, com o objetivo de abranger a diversidade regional/cultural da alimentação do País e garantir alimentação saudável e nutricionalmente adequada.

### Abrangência Detalhada — Onde Termina Cada Categoria

As listas acima são amplas por natureza, e a linha exata entre "entra" e "não entra" costuma ficar em **anexos específicos da lei** (cada categoria tem seu próprio Anexo, de I a XIV, com a lista fechada de NCM/NBS e o cClassTrib correspondente — Módulo 2). Ainda assim, alguns limites de abrangência já ficam claros no material da reforma e merecem destaque:

| Categoria (redução de 60%) | O que entra | O que fica de fora (ou exige atenção) |
|---|---|---|
| **Serviços de educação** | Mensalidade do ensino regular (creche ao superior, cursos técnicos e profissionalizantes) | **Atividades complementares** da escola (material didático avulso, transporte escolar, alimentação, atividades extracurriculares) — como já visto no Módulo 2, cobrar tudo junto na mesma nota é erro; cada item segue seu próprio tratamento |
| **Alimentos destinados ao consumo humano** | Alimentos em geral vendidos para consumo | **Bebidas alcoólicas nunca entram**; alimentos preparados por bares/restaurantes seguem o **regime específico** do Módulo 9, não este regime diferenciado |
| **Produtos de higiene pessoal e limpeza** | Produtos **"majoritariamente consumidos por famílias de baixa renda"** — critério de composição de consumo, não simples categoria de prateleira | Produtos de higiene/limpeza "premium", fora do perfil de consumo popular, tendem a ficar de fora — a lista fechada está no Anexo próprio |
| **Produtos agropecuários/aquícolas/pesqueiros/florestais** | Produto ***in natura*** — sem transformação industrial relevante | Produto **industrializado/processado** a partir do agropecuário costuma sair deste regime e entrar na regra geral (ou em outro regime, conforme o caso) |
| **Insumos agropecuários e aquícolas** | Insumos usados na produção rural/aquícola | Segue lógica parecida com o CST **515** (diferimento com redução) do Módulo 2, para parte destes insumos |
| **Produções artísticas/culturais/jornalísticas/audiovisuais nacionais** | Produção **nacional** | Produção **estrangeira** não se qualifica — o critério de nacionalidade é central aqui |

| Categoria (redução a ZERO) | O que entra | O que fica de fora (ou exige atenção) |
|---|---|---|
| **Automóveis para PcD/TEA** | Aquisição feita **pela própria pessoa com deficiência ou TEA**, dentro dos limites regulamentares (geralmente 1 veículo por período) | Aquisição por terceiros sem essa condição; compra de segundo veículo fora do prazo mínimo entre aquisições |
| **Automóveis para motoristas de táxi** | Veículo destinado à **categoria de aluguel (táxi)**, adquirido por motorista profissional | Veículo de uso particular do próprio motorista, fora da atividade de táxi |
| **Serviços de ICT sem fins lucrativos** | Instituição **Científica, Tecnológica e de Inovação**, exclusivamente **sem fins lucrativos** | ICT com fins lucrativos não se qualifica para a alíquota zero |

> Regra prática: sempre que a categoria parecer "genérica demais" para aplicar direto (ex.: "alimentos", "produtos de higiene"), procure o **Anexo específico** e o **cClassTrib** correspondente antes de zerar ou reduzir a alíquota de um item — a lista fechada é que decide, não a interpretação do rótulo do produto.

**Isenção — Transporte Público Coletivo**: isento o fornecimento de serviços de transporte público coletivo de passageiros rodoviário e metroviário, de caráter urbano, semiurbano e metropolitano, sob regime de autorização, permissão ou concessão pública.

**Profissões Intelectuais — Redução de 30%**: aplicável a profissões de natureza científica, literária ou artística, submetidas à fiscalização de conselho profissional. **Alíquota estimada resultante: 18,55%.**

> **Profissões citadas como exemplo**: Contabilistas, Economistas, Economistas domésticos, Profissionais de educação física, Engenheiros e urbanistas/sociais, agrônomos, Estatísticos, Médicos veterinários e zootecnistas, Museólogos, Químicos, Profissionais de relações públicas, Técnicos industriais, Técnicos agrícolas.

- **Pessoa física**: a redução aplica-se se o serviço estiver vinculado à habilitação profissional.
- **Pessoa jurídica**: exige-se que os sócios tenham habilitação diretamente relacionada ao objeto social, sujeitos a fiscalização de conselho profissional; a PJ não pode ter sócio PJ; não pode ser sócia de outra PJ; não pode exercer atividade diversa das habilitações dos sócios; os serviços da atividade-fim devem ser prestados diretamente pelos sócios (admitido concurso de auxiliares/colaboradores).
- **Fatores que NÃO impedem a redução**: natureza jurídica da sociedade; união de diferentes profissões; forma de distribuição de lucros.
- **Exceção**: as exigências de PJ não se aplicam a profissionais de educação física prestando serviço via PJ fiscalizada por conselho profissional.

### Impacto Sistêmico e Operacional

Cada uma dessas reduções tem correspondência direta na tabela de **CST 200 (Alíquota Reduzida)** e nos códigos de **cClassTrib** apresentados no Módulo 2 (ex.: `200003` alimentação humana; `200027` locação de imóveis; `200047` bares e restaurantes). Aplicar CST 000 (tributação integral) num item que deveria levar CST 200 é um erro típico que infla indevidamente o débito do contribuinte.

### Vantagens e Desvantagens dos Regimes Diferenciados (visão geral)

A grande diferença deste regime em relação aos **Regimes Específicos** do Módulo 9 é que aqui **a mecânica de cálculo continua igual** à regra geral (débito sobre o valor da operação, crédito nas aquisições) — só a alíquota muda. Isso traz um perfil de vantagens e desvantagens bem diferente:

| Vantagens | Desvantagens |
|---|---|
| **O crédito nas suas compras continua normal** — diferente da maioria dos regimes específicos do Módulo 9, aqui o benefício **não** costuma vedar o crédito do adquirente. | A lista de setores beneficiados é **fechada por lei** — não é possível pedir enquadramento por analogia; se sua atividade não está na lista, paga alíquota cheia. |
| Fácil de aplicar no dia a dia: o item recebe CST 200 (ou 400/410, conforme o caso) e a alíquota já sai reduzida — sem cálculos paralelos de base de cálculo própria. | **Não pode ser cumulado** com outro regime diferenciado, específico ou favorecido, salvo previsão expressa — cuidado ao combinar benefícios. |
| Para profissões intelectuais em PJ, a redução de 30% é vantagem real de formalização — GERA incentivo para migrar de PF autônoma para sociedade profissional. | Regras de PJ para profissões intelectuais são rígidas (sócio não pode ser PJ, não pode ter atividade diversa) — sociedade mal estruturada perde o benefício inteiro, não parcialmente. |

---

## 8.2 Crédito Presumido

### O que é?

**Crédito presumido** é um crédito **fictício**, calculado por fórmula legal sobre o valor de uma aquisição, concedido ao adquirente **mesmo quando o fornecedor não é contribuinte** do IBS/CBS (e, portanto, não gerou débito algum na cadeia). É a forma que a reforma encontrou de preservar a não cumulatividade quando o elo anterior da cadeia está fora do sistema — like o pequeno produtor rural, o catador de recicláveis ou o transportador autônomo.

### Para que serve?

Sem crédito presumido, comprar de um não contribuinte "quebraria a cadeia" de créditos, tornando a aquisição artificialmente mais cara e empurrando o mercado para a informalidade ou para a concentração em grandes fornecedores já dentro do sistema. O crédito presumido devolve neutralidade à decisão de comprar de pequenos produtores, recicladores e autônomos.

### Como funciona na prática? — Condição geral

Créditos presumidos ficam condicionados:
- à **emissão de documento fiscal eletrônico** relativo à operação, pelo **adquirente**, com identificação do respectivo fornecedor; e
- ao **efetivo pagamento** ao fornecedor.

### 8.2.1 Crédito Presumido — Produtor Rural

O contribuinte do regime regular pode apropriar crédito presumido nas aquisições de bens/serviços de **produtor rural** ou **produtor rural integrado** não contribuintes.

O documento fiscal deve discriminar: **valor da operação** (o que foi pago ao fornecedor); **valor do crédito presumido**; e **valor líquido para efeitos fiscais** (a diferença entre os dois).

> **FÓRMULA:** `CP = (VO × C) ÷ (1 + C)`
> Onde: **CP** = crédito presumido; **VO** = valor da operação de aquisição; **C** = coeficiente do percentual divulgado para o crédito presumido.

- Não entram no cálculo aquisições destinadas ao **uso ou consumo pessoal** do produtor rural.
- Os percentuais são divulgados **anualmente até setembro**, pelo CG-IBS/RFB, com vigência a partir de **1º de janeiro do ano seguinte**, podendo variar por tipo de bem/serviço.
- No caso de produtor **integrado**, o valor da aquisição é o valor da **remuneração** definida no contrato de integração.
- Uso do crédito: **dedução do IBS/CBS devidos, com direito a ressarcimento**.
- **Extensão às cooperativas**: aplica-se também à recepção, pela cooperativa, de bens/serviços de associados não contribuintes e não optantes pelo Simples Nacional — **exceto** se o bem for enviado para beneficiamento na cooperativa e retornar ao associado.

#### Fluxo de Preenchimento — Compra de Produtor Rural (crédito presumido)

Cenário: uma indústria de laticínios do regime regular compra R$ 10.000,00 em leite de um produtor rural não contribuinte. O percentual de crédito presumido divulgado para o ano é de 12% (coeficiente C = 0,12).

1. **Identifique a operação** — aquisição de não contribuinte, com direito a crédito presumido → é a **indústria (adquirente)** quem emite o documento fiscal da aquisição, não o produtor rural.
2. **Enquadre o item** — regime de crédito presumido do produtor rural (Módulo 8.2.1), não a regra geral.
3. **Escolha CST e cClassTrib** — o fornecimento em si do produtor rural não contribuinte normalmente carrega **CST 410**, `cClassTrib 410014` ("Fornecimento de produtor rural não contribuinte"); o crédito presumido é informado à parte, no grupo próprio.
4. **Calcule o crédito presumido** — aplique a fórmula: `CP = (10.000 × 0,12) ÷ (1 + 0,12) = 1.200 ÷ 1,12 = R$ 1.071,43`.
5. **Determine o valor líquido para efeitos fiscais** — Valor líquido = R$ 10.000,00 − R$ 1.071,43 = **R$ 8.928,57**.
6. **Preencha o grupo especial `gCredPres`** — `cCredPres = 1` (Aquisição de PR não contribuinte); `pCredPres = 12%`; `vCredPres = R$ 1.071,43`. Em seguida, gere o **Evento de Solicitação de Apropriação de Crédito Presumido** (Código 211110), como adquirente/destinatário, referenciando o item da nota (`nItem`) e repetindo `vBC`, `cCredPres`, `pCredPres`, `vCredPres`.

> **Resultado no XML**: documento fiscal de aquisição com valor da operação (R$ 10.000,00), valor do crédito presumido (R$ 1.071,43) e valor líquido (R$ 8.928,57) discriminados, mais o evento de solicitação de apropriação que efetivamente faz o crédito entrar na apuração assistida da indústria.

**Duas interpretações da mesma compra:**

- **Interpretação 1 — Lado de quem vende (produtor rural):** o produtor **não é contribuinte** — ele não calcula, não destaca e não recolhe IBS/CBS nenhum. Para ele, a venda é simplesmente R$ 10.000,00 recebidos pelo leite, sem nenhuma camada tributária visível do lado dele.
- **Interpretação 2 — Lado de quem compra (indústria):** mesmo o produtor não tendo pago imposto nenhum, a indústria **ganha um crédito de R$ 1.071,43** "do nada" — é o crédito presumido fazendo o papel que, numa cadeia normal, seria feito pelo imposto que o fornecedor teria recolhido. **Por isso a fórmula existe**: ela simula, matematicamente, o imposto que "deveria" ter sido pago, para que a cadeia de não cumulatividade não se quebre só porque o produtor rural está fora do sistema.

### 8.2.2 Crédito Presumido — Transportador Autônomo de Carga (TAC)

Aplicável às aquisições de **serviço de transporte de carga** de TAC pessoa física, não contribuinte ou inscrito como MEI.

> **FÓRMULA (mesma estrutura):** `CP = (VO × C) ÷ (1 + C)`
> Onde **VO** = valor da operação do serviço de transporte; **C** = coeficiente do percentual divulgado.

- Percentual divulgado anualmente até setembro, vigência a partir de 1º de janeiro seguinte.
- Uso do crédito: **apenas dedução, SEM direito a ressarcimento** (diferença crucial em relação ao crédito de produtor rural).
- Aplica-se apenas ao contribuinte que **adquire o serviço** e suporta a cobrança do transporte diretamente — **não há** direito ao crédito se o transporte for cobrado **como parte do valor de outra operação** (mesmo especificado em separado no documento).
- Extensão às cooperativas de transportadores autônomos, nos mesmos moldes do produtor rural.

### 8.2.3 Crédito Presumido — Materiais Recicláveis

Aplicável às aquisições de **resíduos sólidos** de **coletores incentivados**, para destinação final ambientalmente adequada.

**Coletores incentivados**: (a) PF que coleta ou faz triagem de resíduos e vende a contribuinte que dá destinação final adequada; (b) associação/cooperativa de PF que executa exclusivamente essa atividade; (c) associação/cooperativa que congrega exclusivamente quem executa essa atividade.

**Percentuais plenos**: **13% de crédito presumido de IBS**; **7% de crédito presumido de CBS**, sobre o valor da aquisição.

**Escalonamento do crédito de IBS (2029-2032)**:
| Ano | Percentual |
|---|---|
| 2029 | **1,3%** |
| 2030 | **2,6%** |
| 2031 | **3,9%** |
| 2032 | **5,2%** |
| (posteriormente) | pleno de **13%** |

**Excluídos do crédito presumido de reciclagem**: agrotóxicos (resíduos/embalagens); óleos lubrificantes (resíduos/embalagens); lâmpadas fluorescentes/vapor de sódio e mercúrio/luz mista; medicamentos domiciliares industrializados/manipulados e suas embalagens; produtos eletroeletrônicos domésticos e componentes; sucata de cobre; pilhas e baterias; pneus.

**Exceção dentro da exceção**: óleo lubrificante usado ou contaminado, coletado por rerrefinador ou coletor autorizado pela **ANP**, **pode** gerar crédito presumido.

### 8.2.4 Crédito Presumido — Bem Móvel Usado (Revenda)

Aplicável às aquisições, **para revenda**, de bem móvel usado de PF não contribuinte ou inscrita como MEI.

**Percentuais e marcos de transição:**
- **IBS**: soma das alíquotas aplicáveis onde estiver o estabelecimento adquirente, vigente: (a) na data da **revenda**, para aquisições até **31/12/2032**; (b) na data da **aquisição**, a partir de **01/01/2033**.
- **CBS**: alíquota da CBS aplicável, vigente: (a) na data da **revenda**, até **31/12/2026**; (b) na data da **aquisição**, a partir de **01/01/2027**.

O crédito só pode ser usado para deduzir IBS/CBS **por ocasião da revenda** do bem. Considera-se bem móvel usado aquele que foi objeto de fornecimento para consumo final de PF e voltou à comercialização.

**Layout do DF-e**: campo `indBemMovelUsado` (I17c), grupo I01, ocorrência 0-1, valor **"1 = Bem Móvel Usado"** — obrigatório para fornecimentos de bem usado adquirido de PF não contribuinte/MEI.

### Impacto Sistêmico e Operacional — Eventos e Códigos Comuns a Todos os Créditos Presumidos

**Grupo `gCredPres` / `gCredPresOper`** (Grupo de Informações do Crédito Presumido) — informado quando o crédito é aproveitado pelo emitente:

| Campo | Descrição |
|---|---|
| `cCredPres` | Código de Classificação do Crédito Presumido (ex.: 1=Aquisição de PR não contribuinte; 2=TAC PF não contribuinte; 3=Aquisição de PF p/ reciclagem; 4=Bem móvel de PF não contribuinte p/ revenda; 5=Regime opcional para cooperativa) |
| `pCredPres` | Percentual do Crédito Presumido |
| `vCredPres` | Valor do Crédito Presumido |
| `vCredPresCondSus` | Valor do Crédito Presumido em condição suspensiva |

**Eventos da NF-e:**

- **Evento 1 — Informação de efetivo pagamento integral** (libera o crédito presumido do adquirente): autor = **emitente** da NF-e; modelo 55; **Código 112110**.
- **Evento 2 — Solicitação de Apropriação de Crédito Presumido**: autor = **adquirente/destinatário**; modelo 55; **Código 211110**. Campos: `nItem`; `vBC` (Base de Cálculo do Item); `cCredPres`; `pCredPres`; `vCredPres`.

**Regras de validação e rejeições:**
- **RV 2P21-10** → se `tpAutor=2` (Empresa Destinatário) e o CNPJ/CPF do autor divergir do destinatário da NF-e → **Rejeição 575**: "Autor do evento diverge do destinatário da NF-e".
- **RV 2P24-10** → se o número do item do evento (`gCredPres/nItem`) não existir na NF-e referenciada (`det/nItem`) → **Rejeição 1096**: "Número de item não existe na NF-e".

> Base Legal: NT 2025.002-RTC NF-e/NFC-e, versão 1.50, grupo gCredPresOper; LC 214/2025.

### Regras de Ouro — Não confunda os 4 créditos presumidos deste módulo

| Crédito Presumido | Ressarcimento em dinheiro? | Fórmula/Percentual |
|---|---|---|
| Produtor Rural | **Sim** | CP = (VO × C) / (1+C), percentual anual |
| TAC (transporte de carga) | **Não**, só dedução | CP = (VO × C) / (1+C), percentual anual |
| Materiais Recicláveis | Regra geral: dedução | IBS 13% (escalonado 2029-2032); CBS 7% |
| Bem Móvel Usado | Dedução na revenda | Soma das alíquotas vigentes (regra de marco temporal 2027/2033) |

> Note ainda que os créditos presumidos ligados à **Zona Franca de Manaus** seguem lógica e percentuais próprios, tratados separadamente no [Módulo 11](11_Zona_Franca_de_Manaus_e_Regimes_Aduaneiros.md).

### Vantagens e Desvantagens do Crédito Presumido (visão geral)

| Vantagens | Desvantagens |
|---|---|
| Preserva a não cumulatividade mesmo comprando de quem **não paga imposto** (produtor rural, autônomo, catador) — sem o crédito presumido, essas compras "quebrariam" a cadeia e ficariam artificialmente mais caras. | Percentual é **fixado por fórmula legal**, não pelo valor real pago — pode ser menor do que o crédito "cheio" que existiria se o fornecedor fosse contribuinte normal. |
| No caso do produtor rural, o crédito pode ser **ressarcido em dinheiro** — vantagem rara mesmo entre os créditos comuns do Módulo 5. | No caso do TAC e da reciclagem, o crédito **só serve para deduzir**, nunca vira dinheiro — se a empresa não tiver débito suficiente no mês, o crédito fica represado. |
| Incentiva a empresa a formalizar compras de pequenos produtores/autônomos (em vez de operar "por fora"), pois só nasce com documento fiscal correto. | Exige controle rígido de **percentuais anuais** (divulgados até setembro, valendo do ano seguinte) — usar o percentual do ano errado gera crédito calculado incorretamente. |
