# Módulo 18 — Transição de PIS/Cofins, PIS-Folha e IOF-Seguros para a CBS

## Visão Geral para Empresários

**O que é, em linguagem simples?** A CBS não nasce "do zero" em 2027 — ela substitui um conjunto de tributos federais que já existem hoje: **PIS, Cofins, PIS-Folha e IOF-Seguros**. Isso significa que, na virada de 2026 para 2027, toda empresa vai carregar um "resto a receber" e um "resto a pagar" do sistema antigo para o novo: créditos de PIS/Cofins que ainda não foram usados, estoque comprado antes da mudança, máquinas que ainda estavam gerando desconto de imposto, vendas que podem ser devolvidas depois da virada. Este módulo explica, item por item, o que acontece com cada um desses "restos".

**Por que isso importa pra você, empresário?** Se sua empresa está no regime cumulativo de PIS/Cofins hoje (a maioria das empresas do Lucro Presumido) e migra para a CBS em 2027, você tem direito a um **crédito presumido sobre o estoque** que tinha em 31/12/2026 — um valor que pode ser relevante e que **tem prazo para ser calculado e usado** (até junho de 2027). Perder esse prazo significa perder o direito ao crédito.

> **Exemplo prático:** Uma loja de roupas, hoje no Lucro Presumido (regime cumulativo de PIS/Cofins), tem R$ 200.000,00 em mercadorias no estoque em 31/12/2026. A partir de 2027, ela pode calcular um crédito presumido de CBS sobre esse estoque e usar esse crédito, em 12 parcelas mensais, para abater a CBS que vai começar a dever. Se a loja não fizer esse cálculo até o prazo, perde o direito ao crédito — o dinheiro fica "para trás", no sistema antigo.

## Introdução para Profissionais de Contabilidade

**Equivalência com o que você já estudou:** você já conhece o PIS e a Cofins — regime cumulativo (Lucro Presumido, alíquotas de 0,65% e 3%) e regime não cumulativo (Lucro Real, alíquotas de 1,65% e 7,6%, com direito a créditos). A seção 18.1 revisa essa mecânica atual com todo o detalhe (quem se enquadra em cada regime, fórmulas de apuração, lista fechada de receitas), porque ela é o ponto de partida de todo o resto do módulo, que foca no que acontece **na fronteira entre os dois sistemas**: quais créditos de PIS/Cofins "atravessam" para o lado da CBS, com que regras, e com que prazo.

**Glossário rápido deste módulo:**
- **Crédito de transição** — qualquer crédito de PIS/Cofins acumulado no sistema antigo que pode ser aproveitado, sob regras próprias, para abater a CBS no sistema novo.
- **Crédito extemporâneo** — crédito de um período passado que só é registrado agora, mediante retificação da declaração.
- **Saldo credor** — a parte do crédito de PIS/Cofins que sobrou sem uso num determinado mês; precisa continuar sendo declarada, mês a mês, até ser usada por completo.
- **EFD-Contribuições** — a escrituração fiscal digital onde PIS/Cofins são declarados e onde o saldo credor precisa ser controlado mensalmente (é o "livro digital" desses tributos).
- **IN RFB 2.121/2022** — a Instrução Normativa que hoje consolida as regras de PIS/Cofins; é a referência normativa mais citada neste módulo.
- **PIS-Folha** — não confundir com o PIS "normal" (sobre faturamento); é uma contribuição diferente, de 1% sobre a folha de salários, cobrada só de entidades imunes/isentas.

**Dica prática de rotina:** monte, para cada cliente que hoje está no regime cumulativo de PIS/Cofins, uma pasta de "transição 2026→2027" com: inventário valorado de 31/12/2026, relação de bens do ativo imobilizado com depreciação em curso, e histórico de créditos de PIS/Cofins ainda não utilizados. Ter isso pronto **antes** de 2027 evita perder prazo.

---

## 18.1 O Regime Atual de PIS/Cofins — Cumulativo x Não Cumulativo

### O que é?

Antes de tratar da transição, é preciso fixar o "estado atual" do sistema que está sendo substituído. Hoje, PIS/Pasep e Cofins não são calculados de uma única forma — existem **dois regimes de incidência** completamente diferentes, e saber em qual regime a empresa está é o primeiro passo de qualquer cálculo de transição deste módulo: o **regime cumulativo** (sem direito a crédito) e o **regime não cumulativo** (com direito a crédito, alíquota mais alta).

> Base Legal: Lei nº 9.718/1998; Lei nº 10.637/2002; Lei nº 10.833/2003.

### Como funciona na prática?

#### Alíquotas de cada regime

| Regime | PIS/Pasep | Cofins | Direito a crédito? |
|---|---|---|---|
| **Cumulativo** | 0,65% | 3,00% | **Não** |
| **Não cumulativo** | 1,65% | 7,60% | **Sim** |

A lógica é a mesma de qualquer IVA "incompleto": no regime cumulativo, a alíquota é mais baixa porque o tributo incide em cascata (sem desconto do que já foi pago antes); no regime não cumulativo, a alíquota é mais alta, mas a empresa desconta créditos das aquisições — o que se aproxima (sem ainda ser igual) da não cumulatividade plena que o IBS/CBS vai generalizar a partir de 2027 (Módulo 5).

#### Quem está obrigado ao regime cumulativo

Independentemente de qualquer opção, estas pessoas jurídicas são **obrigadas** a apurar PIS/Cofins pelo regime cumulativo:

1. Empresas tributadas pelo **Lucro Presumido**;
2. Empresas tributadas pelo **Lucro Arbitrado**;
3. **Securitizadoras** de créditos;
4. Pessoas jurídicas prestadoras de **serviços de segurança privada** (Lei nº 14.967/2024);
5. **Sociedades cooperativas**, exceto as de produção agropecuária e as de consumo (essas duas exceções ficam no regime não cumulativo).

> Base Legal: Arts. 122 a 125 da IN RFB nº 2.121/2022.

Todas as demais pessoas jurídicas (em regra, as do **Lucro Real**) apuram pelo regime **não cumulativo** — com uma ressalva importante, tratada a seguir.

#### Lista fechada de receitas sujeitas ao regime cumulativo mesmo para empresas do Lucro Real

Mesmo uma empresa do Lucro Real (regime não cumulativo "por padrão") aplica o regime **cumulativo** — com as alíquotas de 0,65%/3% e sem crédito — quando a receita vier especificamente de uma das hipóteses desta lista fechada:

1. Venda de **veículos usados**, adquiridos para revenda, por pessoa jurídica que tenha a compra e venda de veículos automotores como objeto social;
2. Prestação de serviços de **telecomunicações**;
3. Prestação de serviços de **transporte coletivo** rodoviário, metroviário, ferroviário e aquaviário de passageiros;
4. Serviços de: (a) hospital, pronto-socorro, clínica médica, odontológica, de fisioterapia e de fonoaudiologia, e laboratório de anatomia patológica, citológica ou de análises clínicas; e (b) diálise, raios X, radiodiagnóstico e radioterapia, quimioterapia e banco de sangue;
5. Serviços de **call center, telemarketing, telecobrança** e teleatendimento em geral;
6. Execução por administração, empreitada ou subempreitada de **obras de construção civil**;
7. Receitas de **parques temáticos**, serviços de **hotelaria** e organização de **feiras e eventos** (Portaria Interministerial nº 33/2005, Ministérios da Fazenda e do Turismo);
8. Prestação de serviços das **agências de viagem** e de viagens e turismo;
9. Empresas de **serviços de informática**: desenvolvimento de software e seu licenciamento/cessão de uso, além de análise, programação, instalação, configuração, assessoria, consultoria, suporte técnico e manutenção/atualização de software (incluindo páginas eletrônicas como "software" para este efeito);
10. Comercialização de **pedra britada, areia para construção civil e areia de brita**;
11. **Alienação de participações societárias**.

> Base Legal: Art. 126 da IN RFB nº 2.121/2022.

**Duas notas importantes de aplicação desta lista:**

- **Transporte coletivo — o detalhe do fretamento:** o item 3 acima **inclui explicitamente** a modalidade de fretamento e o transporte para fins turísticos — ou seja, uma empresa de fretamento de passageiros também cai na regra cumulativa, não é uma exceção à parte.
- **Software — a exceção dentro da exceção:** o item 9 fala em software desenvolvido no Brasil. Já as receitas de **comercialização, licenciamento ou cessão de direito de uso de software *importado*** (produzido por pessoa jurídica com sede fora do País) **não** se enquadram nesta lista — ou seja, permanecem no regime **não cumulativo**, com crédito. Esse entendimento está pacificado na **Solução de Consulta Cosit nº 303, de 23 de outubro de 2014** — segundo a qual as receitas de empresas de serviços de informática só se sujeitam ao regime cumulativo quando decorrem de software desenvolvido no Brasil e faturado de forma individualizada; softwares de processamento de dados e congêneres, fora dessa hipótese, ficam no regime não cumulativo mesmo para empresas de informática.

> Base Legal: Solução de Consulta Cosit nº 303/2014; Lei nº 10.833/2003, art. 10, inciso XXV e § 2º (redação da Lei nº 11.051/2004, art. 25).

#### Apuração no regime cumulativo

A base de cálculo é a **receita bruta**, que compreende:

- **I** — o produto da venda de bens nas operações de conta própria;
- **II** — o preço da prestação de serviços em geral;
- **III** — o resultado auferido nas operações de conta alheia; e
- **IV** — as receitas da atividade ou objeto principal da pessoa jurídica não compreendidas nos incisos I a III.

Como não há créditos a abater neste regime, o cálculo é direto:

> **PIS/Cofins a recolher (cumulativo) = Receita Bruta × (0,65% + 3%)**

> Base Legal: Art. 25 da IN RFB nº 2.121/2022.

> **EXEMPLO NUMÉRICO — regime cumulativo:** uma empresa do Lucro Presumido fatura R$ 500.000,00 de receita bruta no mês, sem nenhuma das exclusões legais aplicáveis. PIS = R$ 500.000,00 × 0,65% = R$ 3.250,00. Cofins = R$ 500.000,00 × 3% = R$ 15.000,00. Total a recolher: **R$ 18.250,00**, sem qualquer dedução de crédito.

#### Apuração no regime não cumulativo

Aqui a base de cálculo é mais ampla — não é só a receita bruta, é a **totalidade das receitas**, independentemente de sua denominação ou classificação contábil (inclui, por exemplo, receitas financeiras e outras receitas que não são "receita bruta" no sentido estrito).

O esquema de apuração funciona em duas etapas:

1. **Monta-se a base:** Receita Bruta + Todas as Demais Receitas Auferidas = **Total das Receitas** (base de incidência de PIS/Cofins);
2. **Abate-se o crédito:** PIS/Cofins a recolher = (PIS/Cofins sobre o Total das Receitas) − (Créditos de PIS/Cofins admitidos).

> **PIS/Cofins a recolher (não cumulativo) = [Total das Receitas × (1,65% + 7,6%)] − Créditos admitidos**

> Base Legal: Art. 25 da IN RFB nº 2.121/2022.

> **EXEMPLO NUMÉRICO — regime não cumulativo:** uma empresa do Lucro Real tem R$ 500.000,00 de receita bruta de vendas mais R$ 20.000,00 de receitas financeiras no mês (Total das Receitas = R$ 520.000,00). Débito de PIS = R$ 520.000,00 × 1,65% = R$ 8.580,00. Débito de Cofins = R$ 520.000,00 × 7,6% = R$ 39.520,00 (Total de débitos: R$ 48.100,00). Suponha créditos admitidos de insumos e energia elétrica no mês de R$ 12.000,00 (já somando PIS + Cofins). PIS/Cofins a recolher = R$ 48.100,00 − R$ 12.000,00 = **R$ 36.100,00**.

**Hipóteses de crédito no regime não cumulativo**: previstas nos arts. 173 a 215-B da IN RFB nº 2.121/2022 — abrangem, entre outros, **insumos**, **energia elétrica**, **aluguéis**, **depreciação de bens do ativo imobilizado** (ver seção 18.6 para o que acontece com esse crédito na transição) e **devoluções de vendas** (ver seção 18.7).

#### Comparativo rápido dos dois regimes

| | Regime Cumulativo | Regime Não Cumulativo |
|---|---|---|
| Alíquota PIS | 0,65% | 1,65% |
| Alíquota Cofins | 3,00% | 7,60% |
| Base de cálculo | Receita bruta (4 incisos) | Totalidade das receitas |
| Direito a crédito | Não | Sim (arts. 173-215-B) |
| Quem se enquadra | Lucro Presumido/Arbitrado, securitizadoras, segurança privada, cooperativas (exceto agro/consumo) — e a lista fechada de receitas específicas do art. 126 | Lucro Real, por padrão (exceto as receitas da lista fechada) |

### O Terceiro Mecanismo: Tributação Monofásica (Concentrada) de PIS/Cofins

#### O que é?

Além de cumulativo e não cumulativo, existe um **terceiro jeito** de cobrar PIS/Cofins, que corta pela raiz o problema da cascata: em vez de cobrar um pouquinho em cada etapa da cadeia (indústria → atacado → varejo), a lei cobra **tudo de uma vez só**, numa etapa **única e inicial** — normalmente a indústria ou o importador — com uma alíquota **bem mais alta** para compensar. Todas as etapas seguintes de revenda saem com **alíquota zero**. Por isso também se chama **tributação concentrada**.

#### Para que serve?

Facilita demais a fiscalização: em vez de a Receita Federal precisar acompanhar milhares de distribuidores, atacadistas e varejistas espalhados pelo país (cada um recolhendo um pouco), ela concentra a cobrança em um número pequeno de indústrias e importadores — que são poucos, grandes, e fáceis de fiscalizar. O restante da cadeia (quem revende) fica **de fora do jogo de recolher** esse tributo especificamente, o que também simplifica a vida do pequeno comerciante.

#### Como funciona na prática?

- A **indústria ou o importador** (primeiro elo da cadeia) recolhe PIS/Cofins numa **alíquota concentrada**, normalmente **maior** que a alíquota "normal" do regime não cumulativo — porque essa alíquota já embute, antecipadamente, o tributo que **não vai mais ser cobrado** nas etapas seguintes.
- O **atacadista, distribuidor e varejista**, ao revender esse mesmo produto, aplicam **alíquota zero** de PIS/Cofins sobre essa venda — não porque o produto seja isento, mas porque o tributo **já foi recolhido lá atrás**, de uma vez só, por outra pessoa jurídica.
- Consequência direta: quem revende um produto monofásico **não tem débito** de PIS/Cofins nessa venda, e por isso também **não tem direito a crédito** na compra desse mesmo produto (não faz sentido creditar um tributo que, na ponta da revenda, não gera débito nenhum).

> **Analogia para leigos:** pense num pedágio cobrado uma única vez na entrada de uma rodovia, que já dá direito a rodar até o fim sem pagar de novo em cada posto intermediário. A indústria paga o "pedágio cheio" lá na entrada (alíquota concentrada); quem revende depois já não paga mais nada (alíquota zero), porque o pedágio daquele produto específico já foi quitado.

#### Setores e produtos sujeitos (lista fechada por lei)

A tributação monofásica **não é a regra geral** — só se aplica aos setores que a lei lista expressamente:

| Setor | Base legal (referência) |
|---|---|
| Combustíveis (gasolina, diesel, GLP, querosene de aviação etc.) | Lei nº 9.718/1998; Lei nº 10.865/2004 |
| Produtos farmacêuticos | Lei nº 10.147/2000 |
| Produtos de perfumaria, toucador e higiene pessoal | Lei nº 10.147/2000 |
| Veículos e autopeças | Lei nº 10.485/2002 |
| Pneus novos e câmaras de ar | Lei nº 10.485/2002 |
| Bebidas frias (cerveja, refrigerante, água, isotônicos) | Lei nº 13.097/2015 |
| Cigarros e produtos de tabacaria | Lei nº 9.532/1997; Decreto nº 8.442/2015 |

> Fora dessa lista, **não existe** tributação monofásica — o produto segue normalmente pelo regime cumulativo ou não cumulativo, conforme o Anexo/regime do vendedor.

#### Quando se aplica e quando não se aplica

- **Aplica-se** à **indústria/fabricante ou ao importador** — é quem recolhe a alíquota concentrada, na primeira venda do produto.
- **Não se aplica** (alíquota zero, sem novo recolhimento) ao **atacadista, distribuidor e varejista** que compram para **revender** o mesmo produto, sem transformá-lo.
- **Cuidado com a exceção da exceção**: se uma empresa **industrializa** ou **transforma** o produto monofásico antes de vender (por exemplo, usa um insumo monofásico na fabricação de outro produto que não está na lista), ela pode voltar a ser tributada normalmente sobre o produto final — o que está "zerado" é a **revenda do mesmo produto**, não qualquer uso posterior dele.

> **EXEMPLO NUMÉRICO PARA LEIGOS:** uma indústria farmacêutica vende uma caixa de remédio para uma distribuidora por R$ 100,00, recolhendo PIS/Cofins pela alíquota concentrada (ex.: um valor já embutido no preço, muito maior do que os 1,65%+7,6% "normais", porque cobre toda a cadeia de uma vez). A distribuidora revende essa mesma caixa para a farmácia por R$ 130,00 — nessa venda, o PIS/Cofins destacado é **R$ 0,00** (alíquota zero). A farmácia revende ao consumidor final por R$ 180,00 — de novo, **R$ 0,00** de PIS/Cofins. O tributo inteiro da cadeia já foi recolhido uma única vez, lá na indústria.

#### Regras de Ouro e Exceções — Monofásico

- **Vedação de crédito na compra para revenda**: quem compra um produto monofásico para revender **não pode se creditar** de PIS/Cofins nessa aquisição — a mesma lógica de vedação já vista no regime monofásico de combustíveis (Módulo 9, seção 9.1), só que aplicada a farmacêuticos, cosméticos, autopeças, pneus, bebidas frias e cigarros.
- **Efeito dentro do Simples Nacional**: quando uma empresa do Simples revende um produto monofásico, os percentuais de PIS/Cofins são **retirados** do cálculo da alíquota efetiva do DAS — ver o exemplo numérico completo na seção 15.4 do [Módulo 15](15_Simples_Nacional_na_Reforma.md).
- **Não confundir com a monofasia de combustíveis dentro do IBS/CBS**: o regime monofásico de PIS/Cofins explicado aqui é um mecanismo **legado**, que desaparece com a extinção de PIS/Cofins em 2027. Já o regime monofásico de **combustíveis dentro do IBS/CBS** (Módulo 9, seção 9.1) é um mecanismo **novo**, que sobrevive à reforma — os dois têm a mesma ideia de fundo (recolher uma vez só, na origem), mas são regimes jurídicos diferentes, em tributos diferentes.
- **O que acontece com o monofásico na transição para a CBS**: bens sujeitos a substituição tributária ou tributação monofásica que nunca geraram crédito de PIS/Cofins também entram no cálculo do **crédito presumido da CBS sobre o estoque** (seção 18.8) — é uma das poucas "compensações" que a transição oferece a quem, historicamente, nunca teve direito a esse crédito.

> Base Legal: Lei nº 9.718/1998; Lei nº 10.147/2000; Lei nº 10.485/2002; Lei nº 10.865/2004; Lei nº 13.097/2015.

### Regras de Ouro e Exceções

- A distinção cumulativo x não cumulativo, hoje central para o cálculo de PIS/Cofins, **deixa de existir** a partir de 2027 — a CBS não tem regime cumulativo à parte; ela segue a mesma lógica de crédito amplo do IBS (Módulo 5), para todos os contribuintes do regime regular, **inclusive** para as receitas que hoje estão na lista fechada do art. 126 (transporte coletivo, construção civil, softwares nacionais etc.) — nenhuma delas mantém tratamento cumulativo dentro da CBS.
- Uma empresa pode ter **receitas mistas** — parte no regime cumulativo (por estar na lista fechada do art. 126) e parte no não cumulativo (o restante do seu faturamento) **ao mesmo tempo**, dentro do mesmo mês de apuração. Isso é relevante para a seção 18.8 (crédito presumido sobre estoque), que se aplica proporcionalmente também a essas empresas "mistas".

---

## 18.2 PIS/Cofins-Importação

### O que é?

A versão do PIS/Cofins que incide não sobre a receita de quem vende dentro do Brasil, mas sobre quem **traz** bens ou serviços de fora do País — o "PIS/Cofins da porta de entrada".

### Como funciona na prática?

**Fato gerador (o que dispara a cobrança)**:
- A **entrada de bens estrangeiros** no território nacional; ou
- A **importação de serviços** — serviços prestados por pessoa física ou jurídica residente ou domiciliada no exterior, executados no Brasil, **ou** executados no exterior cujo resultado se verifique no Brasil.

**Alíquotas básicas**:
- Importação de **bens**: **2,1%** de PIS-Importação + **9,65%** de Cofins-Importação;
- Importação de **serviços**: **1,65%** de PIS-Importação + **7,6%** de Cofins-Importação.

⚠️ **Atenção à NCM do produto**: a alíquota básica de bens não vale sempre — é preciso checar a NCM do produto importado, que pode estar sujeita a **alíquota diferenciada, suspensão, isenção, alíquota zero ou não incidência**.

**Adicional de 1% da Cofins-Importação**, aplicável sobre determinados produtos, com cronograma de **redução gradual**:

| Ano | Adicional da Cofins-Importação |
|---|---|
| Até 2024 | 1,0% |
| 2025 | 0,8% |
| 2026 | 0,6% |
| 2027 | 0,4% |

> Base Legal: Arts. 251, 254 e 274 da IN RFB nº 2.121/2022; § 21 do art. 8º da Lei nº 10.865/2004.

> **EXEMPLO PARA LEIGOS:** uma loja compra uma máquina de R$ 100.000,00 diretamente dos Estados Unidos (importação de bem). Ela paga PIS-Importação de R$ 2.100,00 (2,1%) e Cofins-Importação de R$ 9.650,00 (9,65%) — um total de **R$ 11.750,00** — só pelo fato de o bem vir de fora, além de qualquer outro tributo de importação (II, IPI, IBS/CBS-Importação). Se a mesma loja contratasse um serviço de consultoria de uma empresa americana (importação de serviço), as alíquotas seriam menores: 1,65% de PIS + 7,6% de Cofins.

### Impacto Sistêmico e Operacional

Assim como PIS/Cofins internos, o PIS/Cofins-Importação é **extinto em 01.01.2027**, sendo substituído pela CBS-Importação (Módulo 3) — o adicional decrescente acima é a última fase de vida desse tributo antes da extinção.

---

## 18.3 A Virada de Chave: Quando Sai PIS/Cofins e Quando Entra CBS

### O que é?

A regra central de convivência entre os dois sistemas durante a transição.

### Como funciona na prática?

**2026 — fase de teste, valor compensado:** em 2026, a CBS já é cobrada, mas só como teste: **IBS = 0,1%** e **CBS = 0,9%**. Esses valores recolhidos em 2026 **não são um tributo a mais** — eles são **compensados com o valor devido de PIS/Pasep e Cofins** no mesmo período, ou seja, na prática o contribuinte não paga os dois ao mesmo tempo em dobro.

> Base Legal: Arts. 125 e 126 da EC nº 132/2023.

- **Até 31.12.2026**: continuam exigidos **PIS/Pasep e Cofins**, normalmente.
- **A partir de 01.01.2027**: passa a ser exigida a **CBS**, no lugar de PIS/Pasep e Cofins.
- **Exceção — antecipação para quem opta pelos regimes de transição de bens imóveis**: contribuintes sujeitos aos regimes opcionais do **RET** (art. 485 da LC 214/2025), do **parcelamento de solo** (art. 486) ou da **locação** (art. 487) — todos tratados no Módulo 14 — já passam a recolher **CBS antes de 2027**, desde o momento em que exercem a opção por esses regimes. Para esses contribuintes específicos, a "virada de chave" acontece mais cedo que para o restante da economia.
- **Exceção — Simples Nacional**: dentro do Simples, a substituição de PIS/Cofins por CBS **não segue este cronograma de transição** — é tratada como simples troca de nome dentro da mesma sistemática de repartição do DAS, sem o período de convivência aqui descrito (ver [Módulo 15](15_Simples_Nacional_na_Reforma.md), seção "PIS/Cofins dentro do Simples").

> Base Legal: Arts. 125-126 da EC 132/2023; Art. 408 da LC nº 214/2025, alterado pela LC nº 227/2026.

**Regra do regime de caixa na virada**: operações realizadas **até 31.12.2026** sob o regime de caixa continuam sujeitas a PIS/Cofins **no momento do recebimento**, mesmo que o recebimento ocorra já em 2027.

> **EXEMPLO NUMÉRICO COMPLETO — venda parcelada atravessando a virada:** Uma empresa do regime de caixa vende uma mercadoria em 15/11/2026, por R$ 100.000,00, para receber em 4 parcelas mensais de R$ 25.000,00 (dezembro/2026, janeiro/2027, fevereiro/2027, março/2027). Como a venda foi **realizada** em 2026 e a empresa está no regime de caixa, **todas as 4 parcelas** — mesmo as recebidas já em 2027 — continuam sujeitas a **PIS/Cofins**, e não a CBS, porque o fato gerador (para quem está no regime de caixa) é o recebimento de uma operação que se originou sob a vigência do sistema antigo.

### Impacto Sistêmico e Operacional

Empresas do regime de caixa precisam manter, por vários meses após 01.01.2027, um controle paralelo de "vendas antigas ainda sendo recebidas" (sujeitas a PIS/Cofins) e "vendas novas" (sujeitas a CBS) — um mesmo período de apuração pode conter os dois tributos ao mesmo tempo.

---

## 18.4 O que Acontece com os Créditos Acumulados

### O que é?

Créditos de PIS/Cofins que a empresa já tinha direito, mas ainda não usou, na data da virada.

### Como funciona na prática?

**Prazo de prescrição: 5 anos**, contados do **1º dia do mês subsequente** à aquisição, devolução ou dispêndio que gerou o crédito.

> **EXEMPLO:** um crédito de PIS/Cofins gerado em **dezembro/2026** é utilizável até **31/12/2031**. Um crédito gerado em **março/2025** é utilizável até **31/03/2030**.

**Uso desses créditos**:
- Compensação com a **própria CBS**, mediante pedido, conforme ato a ser editado pela RFB;
- **Ressarcimento** ou **compensação com outros tributos federais**, seguindo as regras já existentes para PIS/Cofins.

> Base Legal: Art. 378 da LC nº 214/2025; Art. 602 do Decreto nº 12.955/2026; Art. 163 da IN RFB nº 2.121/2022.

**Como fazer, na prática — PER/DCOMP Web**: a Receita Federal confirmou (comunicado de 03.06.2026) que os saldos credores de PIS/Pasep e Cofins estão preservados na transição e continuam sendo usados pelo **PER/DCOMP Web**, o mesmo sistema já usado hoje para pedidos de ressarcimento e compensação — com uma funcionalidade nova, específica para compensar esse saldo com a CBS. Continuam disponíveis as três opções: **ressarcimento dos créditos**, **compensação com outros tributos** e a nova opção de **compensação com a CBS**. O sistema **recupera automaticamente** os saldos já informados na EFD-Contribuições de dezembro/2026, evitando que o contribuinte tenha que redigitar valores.

### Escrituração e Controle do Saldo Credor (EFD-Contribuições)

Não basta ter direito ao crédito — ele precisa ser **controlado formalmente**, mês a mês, na escrituração fiscal, para não se perder no meio do caminho.

**Regra de controle**: os créditos apropriados no mês que **não forem utilizados** no próprio período de escrituração devem ser controlados nos seguintes registros da **EFD-Contribuições**:

| Registro | Nome oficial | Tributo |
|---|---|---|
| **1100** | Controle de Créditos Fiscais — PIS/Pasep | PIS/Pasep |
| **1500** | Controle de Créditos Fiscais — Cofins | Cofins |

Cada um desses dois registros (Bloco 1 da EFD-Contribuições) armazena, separadamente, o saldo de crédito de cada contribuição que não foi totalmente aproveitado no período.

- Os créditos devem ser controlados **separadamente**, por **período de apuração** e por **tipo de crédito** (não é permitido "misturar tudo" num único saldo genérico);
- Esse controle deve ser **repetido nas escriturações posteriores** — ou seja, o saldo não utilizado precisa continuar aparecendo, mês após mês, nos registros 1100/1500, até que aconteça uma de três coisas: (1) seja **totalmente utilizado**; (2) seja objeto de **pedido de ressarcimento**; ou (3) seja objeto de **pedido de compensação** (quando a legislação permitir).

> Base Legal: Guia Prático da EFD Contribuições — Versão 1.35.

> **EXEMPLO PARA LEIGOS:** uma empresa apura R$ 5.000,00 de crédito de PIS/Cofins em março/2026, mas naquele mês só tinha R$ 3.000,00 de débito para abater. Ela usa R$ 3.000,00 e fica com **R$ 2.000,00 de saldo credor**. Esse saldo não desaparece — ele precisa aparecer, mês a mês, na EFD-Contribuições (registro 1100 se for saldo de PIS/Pasep, registro 1500 se for de Cofins), identificado como "saldo de março/2026", em abril/2026, maio/2026 e assim por diante, até o dia em que for todo utilizado, ressarcido ou compensado. Se a empresa parar de declarar esse saldo remanescente numa competência futura, na prática ela perde a rastreabilidade do crédito — e, sem rastreabilidade, a Receita Federal pode negar o uso posterior.

⚠️ **No radar da Receita Federal — item 2.17 do Relatório Anual de Fiscalização 2025-2026: "Utilização indevida de saldo credor de PIS/Pasep e da Cofins para compensação da CBS"**. O próprio relatório da RFB reconhece que a transição desses créditos para o novo tributo é um ponto de risco relevante, porque:

- Envolve **diferentes naturezas de créditos**, com regras, restrições e modalidades de utilização distintas (compensação, ressarcimento);
- A **coexistência temporária dos dois sistemas** eleva a complexidade operacional e cria risco de **apropriação indevida**, **duplicidade de creditamento**, uso de créditos **em desconformidade com as limitações legais**, e manutenção de valores **sem lastro econômico ou documental**;
- A necessidade de **compatibilizar informações entre diferentes escriturações e declarações** amplia o risco de assimetrias de informação, dificulta o controle automatizado pela fiscalização, e aumenta a exposição a **perdas arrecadatórias e litígios**.

**Medida anunciada pela RFB**: uma ação de **assistência ao contribuinte**, para garantir que os créditos de PIS/Pasep e Cofins estejam de acordo com a legislação vigente antes de serem usados para compensar a CBS em 2027 — incluindo a elaboração de um **Manual de Orientação Tributária** específico sobre o tema.

> Base Legal: Relatório Anual de Fiscalização 2025-2026, item 2.17.

Na prática, isso reforça a mensagem desta seção: o controle mês a mês, separado por tributo e período, não é uma formalidade burocrática — é exatamente o que a fiscalização vai olhar primeiro.

### Regras de Ouro e Exceções

- O prazo de 5 anos **não é "resetado"** pela reforma — ele continua contando a partir da data original do crédito, mesmo que o crédito passe a ser usado para compensar um tributo diferente (CBS, em vez de PIS/Cofins).
- Um saldo credor **sem controle mês a mês na EFD-Contribuições** é um risco de auditoria, mesmo que o crédito, na origem, seja legítimo e esteja dentro do prazo de 5 anos — a falta de escrituração contínua é, na prática, o motivo mais comum de glosa (recusa) desse tipo de crédito pela fiscalização.

---

## 18.5 Crédito Extemporâneo

### O que é?

Crédito de um **período anterior**, que só é registrado agora, mediante retificação da declaração de PIS/Cofins.

### Como funciona na prática?

**Retificação necessária: EFD-Contribuições *e* DCTF**. Para apropriar um crédito extemporâneo, é preciso retificar **as duas** declarações dos meses em que houve modificação na apuração da contribuição — não basta corrigir só a EFD-Contribuições.

**Prazo de retificação: até 5 anos**, contados do **1º dia do exercício seguinte** ao do período que se pretende retificar.

> **EXEMPLO:** até **31.12.2026**, ainda é possível retificar declarações de PIS/Cofins desde **2021** — porque o prazo de 5 anos, contado do início do exercício seguinte a 2021 (ou seja, 01.01.2022), só se encerra em 31.12.2026.

> Base Legal: Art. 11 da IN RFB nº 1.252/2012.

> **Caso oficial concreto — Solução de Consulta Cosit nº 90, de 18 de junho de 2025** (Assunto: Contribuição para o PIS/Pasep; tema: frete na aquisição de insumos sujeitos à incidência com alíquota zero): a Receita Federal confirmou que **os valores de frete e seguro na aquisição de bens considerados insumos** são serviços utilizados como insumo e podem ser descontados como crédito, **independentemente da alíquota do bem a que se refiram** (inclusive alíquota zero). A mesma consulta confirma, de forma explícita, a regra geral do crédito extemporâneo: "*os créditos não descontados no período a que se referem podem ser descontados extemporaneamente, desde que retificadas as EFD-Contribuições e DCTF dos meses em que haja modificação na apuração da Contribuição para o PIS/Pasep, respeitado o prazo de prescrição de cinco anos contado do momento da transmissão da EFD-Contribuições a que os créditos na origem se referem.*"

> Base Legal: Solução de Consulta Cosit nº 90/2025; Lei nº 10.637/2002, art. 3º, caput, inciso II e § 2º, inciso II; Parecer Normativo Cosit/RFB nº 5/2018; Art. 11 da IN RFB nº 1.252/2012; Art. 176, XXIII, da IN RFB nº 2.121/2022 (incluído pela IN RFB nº 2.264/2025).

### Regras de Ouro e Exceções

- Depois de 01.01.2027, com a extinção de PIS/Cofins, a **janela para registrar créditos extemporâneos desses tributos vai se fechando ano a ano** conforme os períodos mais antigos saem da janela de 5 anos — vale revisar todo o histórico de apuração de PIS/Cofins **antes** da virada, porque depois de extinto o tributo, a lógica de retificação de sua declaração tende a ficar mais restrita na prática operacional das empresas (mesmo que o direito legal ao crédito extemporâneo, em si, sobreviva dentro do prazo de 5 anos).

---

## 18.6 Crédito Presumido da CBS sobre Depreciação e Amortização

### O que é?

Regra de transição para o crédito de **depreciação/amortização** de bens do ativo imobilizado, que hoje existe dentro do regime não cumulativo de PIS/Cofins.

### Para que serve?

Evita que uma empresa "perca" o crédito de um bem comprado antes de 2027 só porque o tributo que gerava esse crédito (PIS/Cofins) deixou de existir — o crédito remanescente é **convertido** em crédito presumido da CBS.

### Como funciona na prática?

**Quais bens geram este crédito** — a lei fecha a lista em dois grupos:

1. **Máquinas, equipamentos e outros bens** incorporados ao ativo imobilizado, adquiridos ou fabricados para: (a) utilização na produção de bens destinados à venda; (b) utilização na prestação de serviços; ou (c) locação a terceiros;
2. **Edificações e benfeitorias** adquiridas ou construídas em imóveis próprios ou de terceiros, desde que utilizados nas atividades da empresa.

Em geral, o crédito se aplica sobre os **encargos de depreciação mensal**, em relação a bens **adquiridos antes** da mudança de regime — e continua sendo apropriado, mês a mês, mesmo depois que o tributo de origem (PIS/Cofins) deixa de existir, agora sob o nome de **crédito presumido da CBS**.

> Base Legal: Art. 179 da IN RFB nº 2.121/2022; Solução de Consulta Cosit nº 40/2023.

**Formas de apropriação**:
- **1/48 ao mês** (a forma padrão, ao longo de 4 anos), para máquinas e equipamentos do ativo imobilizado em geral; ou
- **Imediato**, no mês da própria aquisição, para **máquinas e equipamentos novos** destinados à produção de bens e à prestação de serviços (regra especial de aceleração do crédito).

> Base Legal: Arts. 184-185 da IN RFB nº 2.121/2022; Parecer Normativo Cosit nº 5.

> **EXEMPLO NUMÉRICO COMPLETO:** Uma empresa adquire um **veículo** em **abril/2025**, com direito a crédito de depreciação de PIS/Cofins ao longo de 4 anos (1/48 ao mês). Até dezembro/2026, o crédito mensal é calculado pelas alíquotas de PIS/Cofins do regime não cumulativo (**1,65% + 7,6% = 9,25%** sobre a fração mensal de depreciação). A partir de **janeiro/2027**, a mesma fração mensal de depreciação (o "resto" que ainda faltava creditar dos 48 meses) passa a gerar **crédito presumido de CBS**, à alíquota de **9,25%** — ou seja, o percentual numérico não muda (9,25% em ambos os casos), mas a natureza jurídica do crédito muda de "crédito de PIS/Cofins" para "crédito presumido de CBS" a partir da virada.

> Base Legal: Art. 380 da LC nº 214/2025 (fundamento geral da conversão do crédito na transição).

### Regras de Ouro e Exceções

- **Crédito parado, aguardando requisito**: se, na data da virada, o bem ainda estava **aguardando o cumprimento de algum requisito** para começar a gerar crédito (por exemplo, ainda não entrou em operação, ou falta alguma condição legal), esse crédito **não é perdido** — ele só começa a ser apropriado quando o requisito for cumprido, seguindo a mesma lógica de conversão para crédito presumido de CBS.
- ⚠️ **Alienação do bem antes de terminar as parcelas: a parte que faltava é perdida.** Se a empresa **vender o bem antes de esgotar todas as parcelas** do crédito (as 48 parcelas do 1/48, por exemplo), as **parcelas ainda não apropriadas não poderão ser creditadas** — o crédito remanescente simplesmente se extingue na data da venda. Isso vale tanto para o crédito de PIS/Cofins quanto para o crédito presumido de CBS que o sucede.

> Base Legal: Art. 380 da LC nº 214/2025.

> **EXEMPLO PARA LEIGOS:** a mesma empresa do exemplo do veículo (comprado em abril/2025, crédito em 48 parcelas mensais) decide vender o veículo em janeiro/2028 — quando ainda faltavam 9 parcelas para completar os 48 meses. A partir da data da venda, essas **9 parcelas restantes simplesmente não podem mais ser creditadas** — nem como PIS/Cofins, nem como crédito presumido de CBS. O crédito "morre" junto com a saída do bem do patrimônio da empresa.

---

## 18.7 Crédito da CBS sobre Devoluções de Vendas

### O que é?

Crédito para devoluções que ocorrem **depois** da virada, mas referentes a vendas feitas **antes** dela.

### Como funciona na prática?

Devoluções ocorridas **a partir de 01.01.2027**, referentes a vendas realizadas **até 31.12.2026**, geram um crédito de CBS no **valor do PIS/Cofins que incidiu na venda original**.

**Restrição**: esse crédito só pode ser usado para **compensar CBS** — são **vedados** o ressarcimento e a compensação com outros tributos.

> Base Legal: Art. 379 da LC nº 214/2025.

> **EXEMPLO PARA LEIGOS:** uma loja vendeu R$ 10.000,00 em mercadorias em novembro/2026 (regime não cumulativo), destacando R$ 165,00 de PIS (1,65%) e R$ 760,00 de Cofins (7,6%) — total de R$ 925,00. Em fevereiro/2027, o cliente devolve a mercadoria. Como a devolução ocorre já sob a CBS, mas se refere a uma venda feita sob PIS/Cofins, a loja não estorna PIS/Cofins (que já nem existe mais) — em vez disso, ganha um **crédito de CBS de R$ 925,00**, que só pode ser usado para abater CBS a pagar, nunca para reaver em dinheiro ou compensar outro tributo.

### Impacto Sistêmico e Operacional

Empresas com histórico relevante de devoluções (varejo, por exemplo) precisam manter, por algum tempo após 2027, o controle de qual imposto incidiu na venda original de cada mercadoria potencialmente devolvida — informação necessária para calcular corretamente o crédito de devolução.

---

## 18.8 Crédito Presumido da CBS sobre Estoque

### O que é?

**Este é o benefício de transição mais relevante do módulo.** Um crédito presumido de CBS, calculado sobre o valor do estoque que a empresa tinha em 31.12.2026 — criado para compensar o fato de que, no regime cumulativo de PIS/Cofins, a empresa **nunca teve direito a crédito** sobre suas compras, e agora, migrando para a CBS (que segue a lógica de crédito amplo), ficaria em desvantagem se não pudesse recuperar ao menos uma parte do tributo que pagou nas mercadorias que ainda tem em estoque.

### Para que serve?

Sem esse crédito, uma empresa que migra do Lucro Presumido para o regime regular da CBS venderia, já em 2027, um estoque comprado em 2026 **sem nenhum crédito de entrada** — pagando CBS sobre o valor cheio de venda, mesmo já tendo suportado PIS/Cofins (sem direito a crédito) na compra. O crédito presumido de estoque neutraliza essa distorção pontual da transição.

### Como funciona na prática?

**Quem tem direito**: o contribuinte do **regime cumulativo** de PIS/Cofins que migra para o **regime regular** da CBS.

**Quais itens de estoque entram**:
- Mercadorias para revenda;
- Produtos acabados e produtos em elaboração;
- Matérias-primas;
- Materiais de embalagem.

**Extensão a bens adquiridos sem crédito por substituição tributária/monofasia**: mesmo bens que nunca geraram crédito de PIS/Cofins por estarem sob **substituição tributária** ou **tributação monofásica** entram no cálculo — especificamente: produtos **farmacêuticos, de perfumaria e higiene pessoal**; **máquinas, veículos, autopeças e pneus**; **motocicletas**; e **cigarros**.

**Forma de apuração**:
- Levantamento de **inventário em 31.12.2026**;
- Valoração pelas **regras do IRPJ**: custo de aquisição + seguro + frete − tributos recuperáveis;
- Registro no **Livro de Inventário**, com **especificação individual** de cada item.

**Prazos**:
- Apurar e apropriar o crédito: até o **último dia de junho de 2027**;
- Uso do crédito: em **12 parcelas mensais iguais**, a partir do mês subsequente à apropriação.

**Restrição de uso**: o crédito só serve para **compensar CBS** — vedados ressarcimento e compensação com outros tributos.

**Vedações — o crédito NÃO se aplica a**:
- Bens **não novos**;
- Bens com **alíquota zero, isenção, suspensão ou não incidência** na aquisição;
- Bens de **uso e consumo pessoal**;
- **Ativo imobilizado** (esse tem regra própria, ver seção 18.6);
- **Imóveis**.

**Alíquotas aplicáveis ao cálculo do crédito**:
- Bens adquiridos **no país**: **9,25%**;
- Bens **importados**: a **alíquota efetiva do PIS/Cofins-Importação** vigente na aquisição (excluindo o adicional de 1%/0,8%/0,6%/0,4% tratado na seção 18.2).

> Base Legal: Art. 381 da LC nº 214/2025; Arts. 606-607 do Decreto nº 12.955/2026.

> **EXEMPLO NUMÉRICO COMPLETO:** a loja de roupas citada na abertura deste módulo (regime cumulativo de PIS/Cofins, Lucro Presumido) faz o inventário em 31.12.2026 e apura R$ 200.000,00 em mercadorias para revenda (custo de aquisição + frete + seguro − tributos recuperáveis), todas nacionais e adquiridas normalmente (sem alíquota zero/isenção/suspensão). Aplicando a alíquota de **9,25%**: crédito presumido de CBS = R$ 200.000,00 × 9,25% = **R$ 18.500,00**. Esse valor deve ser apurado e apropriado até **30.06.2027**, e então usado em **12 parcelas mensais de R$ 1.541,67** (R$ 18.500,00 ÷ 12), a partir do mês seguinte à apropriação, servindo apenas para abater CBS devida — nunca para restituição em dinheiro ou compensação com outro tributo.

### Regras de Ouro e Exceções

⚠️ **Este é o prazo de transição mais fácil de perder de vista**: como o crédito de estoque exige inventário datado de 31.12.2026, valorado e apropriado até junho de 2027, ele precisa entrar no planejamento de fechamento de ano **com antecedência** — não é algo que se resolve depois, "quando der tempo".

---

## 18.9 Ordem de Prioridade e Prazos dos Créditos de Transição

### Como funciona na prática?

**Prazo unificado**: os créditos de transição tratados nas seções 18.6 (depreciação/amortização), 18.7 (devolução) e 18.8 (estoque) têm **prazo de prescrição de 5 anos**, contado do **último dia do período de apuração** em que ocorreu a apropriação do crédito.

**Ordem de prioridade na compensação**: os créditos de CBS **decorrentes de PIS/Cofins** (ou seja, os créditos de transição desta seção) têm **preferência de compensação** em relação aos créditos "nativos" de CBS (os créditos normais, gerados já dentro da sistemática da CBS, tratados no Módulo 5) — na prática, o sistema consome primeiro os créditos herdados da transição, e só depois os créditos novos.

> Base Legal: Arts. 382-383 da LC nº 214/2025.

### Checklist de Créditos de Transição a Não Perder

| Crédito | Prazo-chave | Onde está neste módulo |
|---|---|---|
| Créditos de PIS/Cofins acumulados até 31.12.2026 | 5 anos, contados do 1º dia do mês subsequente ao fato gerador | Seção 18.4 |
| Escrituração do saldo credor não utilizado (registros 1100/1500 da EFD-Contribuições) | Controle mensal contínuo, por período e tipo de crédito, até total utilização/ressarcimento/compensação | Seção 18.4 |
| Crédito extemporâneo (retificação de declaração antiga) | 5 anos, contados do 1º dia do exercício seguinte | Seção 18.5 |
| Crédito presumido sobre depreciação/amortização | 1/48 ao mês, ou imediato para bens novos; prazo de uso de 5 anos | Seção 18.6 |
| Crédito de CBS sobre devoluções de vendas pré-2027 | 5 anos, contados do último dia do período de apuração | Seção 18.7 |
| **Crédito presumido sobre estoque** | Apurar e apropriar **até junho/2027**; usar em 12 parcelas mensais | Seção 18.8 |

---

## 18.10 PIS-Folha — o Tributo Esquecido

### O que é?

Uma contribuição federal pouco conhecida, distinta do PIS "normal" sobre faturamento: incide sobre a **folha de salários**, em vez de sobre a receita, de entidades que são **imunes ou isentas** do PIS sobre faturamento.

### Quem paga (lista fechada)

- Templos de qualquer culto;
- Partidos políticos;
- Instituições de educação e de assistência social (art. 12 da Lei nº 9.532/1997);
- Instituições de caráter filantrópico, recreativo, cultural, científico, e as associações (art. 15 da Lei nº 9.532/1997);
- Sindicatos, federações e confederações;
- Serviços sociais autônomos, criados ou autorizados por lei;
- Conselhos de fiscalização de profissões regulamentadas;
- Fundações de direito privado e fundações públicas instituídas ou mantidas pelo Poder Público;
- Condomínios de proprietários de imóveis residenciais ou comerciais;
- A Organização das Cooperativas Brasileiras (OCB) e as **Organizações Estaduais de Cooperativas**;
- Sociedades cooperativas, **nos meses em que fizerem uso de alguma das exclusões específicas** que a legislação permite a essas entidades.

> Base Legal: Art. 301 da IN RFB nº 2.121/2022.

### Como funciona na prática?

- **Fato gerador**: a constituição da obrigação de pagar salários aos empregados;
- **Base de cálculo**: a folha de salários mensal, nos termos do art. 22, I da Lei nº 8.212/91;
- **Alíquota**: **1%**;
- **Prazo de recolhimento**: até o **25º dia do mês subsequente**.

> **EXEMPLO PARA LEIGOS:** um sindicato paga R$ 60.000,00 em salários no mês. Como não recolhe PIS sobre faturamento (é isento), ele recolhe **PIS-Folha**: R$ 60.000,00 × 1% = **R$ 600,00**, até o dia 25 do mês seguinte. É um cálculo simples — não tem crédito, não tem desconto, é direto sobre o total da folha.

> Base Legal: Art. 301, Arts. 300 e 303-305 da IN RFB nº 2.121/2022; Art. 126 da EC 132/2023; Art. 542 da LC nº 214/2025.

### Regras de Ouro e Exceções

- O PIS-Folha é **extinto junto com PIS e Cofins**, em **01.01.2027**.
- Diferente do PIS/Cofins sobre faturamento, não existe um "PIS-Folha" dentro da CBS — a extinção é simples, **sem substituto direto**, já que entidades imunes/isentas em geral também não são o público-alvo típico da tributação sobre consumo.

---

## 18.11 RET: Por que a Alíquota Mudou de 4% para 1,92%

### Como funciona na prática?

O Módulo 14 (seção 14.6.2) já apresenta as alíquotas **novas** do RET — mas a composição de **por que** a alíquota mudou de valor fica mais clara olhando a decomposição completa, antes e depois:

**RET comum:**

| | Antes da reforma | Depois da reforma |
|---|---|---|
| Cofins | 1,71% | — (extinta) |
| PIS | 0,37% | — (extinta) |
| IRPJ | 1,26% | 1,26% |
| CSLL | 0,66% | 0,66% |
| CBS | — | 2,08% (à parte) |
| **Total unificado no RET** | **4,00%** | **1,92%** (IRPJ+CSLL) **+ 2,08%** de CBS |

**RET do MCMV — Faixa Urbano 1:**

| | Antes da reforma | Depois da reforma |
|---|---|---|
| Cofins | 0,44% | — (extinta) |
| PIS | 0,09% | — (extinta) |
| IRPJ | 0,31% | 0,31% |
| CSLL | 0,16% | 0,16% |
| CBS | — | 0,53% (à parte) |
| **Total unificado no RET** | **1,00%** | **0,47%** (IRPJ+CSLL) **+ 0,53%** de CBS |

> Base Legal: Art. 15 e Art. 25 da IN RFB nº 2.179/2024; Arts. 485 e 510 da LC nº 214/2025.

💡 Note que a "alíquota total" (1,92% + 2,08% = 4,00%; ou 0,47% + 0,53% = 1,00%) **não muda** em relação ao regime atual — o que muda é a composição interna: a fatia que antes era de PIS/Cofins agora é destacada separadamente como CBS.

> **EXEMPLO PARA LEIGOS:** uma incorporadora que optou pelo RET comum recebe R$ 1.000.000,00 de vendas de unidades no patrimônio de afetação em um mês. **Antes da reforma**, ela recolhia 4% sobre esse valor = R$ 40.000,00, sendo R$ 17.100,00 de Cofins, R$ 3.700,00 de PIS, R$ 12.600,00 de IRPJ e R$ 6.600,00 de CSLL — tudo numa guia só. **Depois da reforma**, ela recolhe separadamente: R$ 19.200,00 de IRPJ+CSLL (1,92%, na mesma guia unificada do RET) mais R$ 20.800,00 de CBS (2,08%, à parte) — total ainda de R$ 40.000,00, só que agora em duas guias em vez de uma.

> Ver também: [Módulo 14](14_Regime_Especifico_Bens_Imoveis.md), seção 14.6.2, para o RET completo no contexto de bens imóveis (condições de opção, patrimônio de afetação, efeitos sobre crédito e redutores).

---

## 18.12 Retenções na Fonte — o que Acaba em 2027

### Como funciona na prática?

**Regime atual de retenção sobre serviços** pagos entre pessoas jurídicas de direito privado, sobre pagamentos por serviços de: **limpeza, conservação, manutenção, segurança, vigilância e transporte de valores**; **locação de mão de obra**; **assessoria creditícia, mercadológica, gestão de crédito, seleção e riscos, administração de contas a pagar e a receber**; e **serviços profissionais** (sujeitos ao imposto de renda na fonte, art. 714, §1º do Decreto nº 9.580/2018).

**Alíquotas da retenção**: **0,65% de PIS + 3% de Cofins + 1% de CSLL**.

> Base Legal: Art. 30 da Lei nº 10.833/2003.

**Retenção em vendas para órgãos públicos**: aplica-se a vendas de bens e serviços para órgãos da administração pública federal direta, autarquias, fundações e empresas públicas federais (que usem o Siafi), e também para órgãos da administração direta, autarquias e fundações do Distrito Federal, Estados e Municípios que tenham firmado convênio com a União — regime de retenção próprio.

> Base Legal: Arts. 33-34 da Lei nº 10.833/2003.

**Retenção específica na aquisição de autopeças**: **0,1% de PIS + 0,5% de Cofins**, na aquisição de autopeças por pessoa jurídica fabricante de peças, componentes ou conjuntos destinados aos produtos relacionados no art. 1º da Lei nº 10.485/2002.

> Base Legal: Art. 1º da Lei nº 10.485/2002.

**Fato gerador de todas as retenções acima**: o **pagamento** (não a emissão da nota ou a prestação do serviço em si).

> **EXEMPLO PARA LEIGOS:** uma empresa paga R$ 10.000,00 por um serviço de limpeza predial prestado por outra pessoa jurídica. Na hora de pagar, ela **retém na fonte**: R$ 65,00 de PIS (0,65%), R$ 300,00 de Cofins (3%) e R$ 100,00 de CSLL (1%) — total de R$ 465,00 — e repassa apenas R$ 9.535,00 à empresa de limpeza. O valor retido de PIS/Cofins/CSLL é recolhido pela empresa tomadora do serviço diretamente à Receita Federal, funcionando como uma antecipação do tributo devido pela prestadora.

### Regras de Ouro e Exceções

- Todas essas retenções de **PIS e Cofins** são **extintas a partir de 01.01.2027** — mantém-se **apenas a retenção de CSLL**, quando devida, já que a CSLL não é substituída pela reforma.

> Base Legal: Arts. 509 e 542 da LC nº 214/2025.

---

## 18.13 IOF-Seguros — o que Vira "Serviço Financeiro"

### O que é?

O **Imposto sobre Operações Financeiras incidente sobre seguros**, tributo federal hoje cobrado sobre o recebimento de prêmios de seguro — um dos componentes que a CBS absorve (junto com PIS e Cofins, ver Módulo 1).

### Como funciona na prática?

- **Fato gerador**: o **recebimento do prêmio**;
- **Incidência**: seguros de vida, acidentes pessoais/do trabalho, e seguros de bens/valores/coisas;
- **Contribuinte**: o **segurado**; **responsável** pela cobrança e recolhimento: as **seguradoras** ou **instituições financeiras**, com prazo até o **3º dia útil do decêndio subsequente**.

**Alíquotas**:
- Alíquota **básica**: **25%**;
- **0,38%** para seguros de vida, acidentes pessoais e DPVAT;
- **2,38%** para seguros privados de saúde;
- **7,38%** para as demais hipóteses.

> Base Legal: Arts. 18-20 e 22 do Decreto nº 6.306/2007.

> **EXEMPLO PARA LEIGOS:** uma pessoa contrata um seguro de vida com prêmio mensal de R$ 1.000,00. A seguradora, ao **receber** esse prêmio, retém e recolhe **IOF de R$ 3,80** (0,38% de R$ 1.000,00) até o 3º dia útil do decêndio seguinte. Se em vez de seguro de vida fosse um seguro de bens (por exemplo, seguro de um equipamento), a alíquota seria bem maior: 7,38%, ou seja, R$ 73,80 sobre o mesmo prêmio de R$ 1.000,00.

**A mudança constitucional**: a partir de 2027, o art. 153, V da Constituição Federal deixa de mencionar "seguro" como fato gerador do IOF — as operações de seguro passam a ser tratadas como **"serviços financeiros"** para fins de IBS/CBS, dentro do regime específico já detalhado no Módulo 9.

> Base Legal: Art. 3º da EC 132/2023.

> Ver também: [Módulo 09](09_Regimes_Especificos_Setoriais.md), seção 9.2, subseção "Seguros e Resseguros", para como o IBS/CBS tributa seguros no regime novo (base de cálculo, deduções, crédito, alíquota zero para resseguro/retrocessão).

### Impacto Sistêmico e Operacional

Seguradoras precisam desligar, em 01.01.2027, toda a rotina de apuração e recolhimento de IOF-Seguros (guias, prazos decendiais, alíquotas por ramo) e operar simultaneamente a nova rotina de DeRE do regime específico financeiro (Módulo 9) — não há sobreposição de tributos aqui (IOF-Seguros simplesmente acaba), mas há sobreposição de **rotinas operacionais** durante o mês de transição.

---

## Vantagens e Desvantagens da Transição de PIS/Cofins para CBS

| Vantagens | Desvantagens |
|---|---|
| Créditos acumulados não se perdem — ganham regras específicas de conversão/uso, com prazo de 5 anos. | O acompanhamento simultâneo de múltiplos prazos de transição (estoque, depreciação, devolução, extemporâneo) exige controle rigoroso — cada um com sua própria regra e prazo. |
| Empresas do regime cumulativo (que hoje não tinham direito a nenhum crédito) ganham, pela primeira vez, um crédito relevante sobre o estoque na migração. | O crédito de estoque tem prazo apertado (apuração até junho/2027) — quem não organizar o inventário de 31.12.2026 com antecedência corre risco de perder o benefício. |
| Créditos de transição têm **prioridade de compensação** sobre créditos nativos da CBS — tendem a ser consumidos primeiro, reduzindo o risco de prescreverem sem uso. | A extinção simultânea de PIS, Cofins, PIS-Folha, IOF-Seguros e das retenções na fonte associadas exige atualização de múltiplas rotinas de uma só vez, em vez de uma mudança gradual. |
| A decomposição do RET (seção 18.11) mostra que a carga total tende a se manter estável — não há aumento de carga tributária embutido na simples troca de nome dos tributos. | Empresas do regime de caixa podem operar, por vários meses após 2027, dois sistemas de apuração em paralelo (PIS/Cofins residual + CBS nova) para operações que atravessam a virada. |
