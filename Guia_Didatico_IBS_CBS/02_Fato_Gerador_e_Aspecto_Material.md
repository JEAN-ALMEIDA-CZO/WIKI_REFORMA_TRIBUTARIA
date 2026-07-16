# Módulo 2 — Fato Gerador e Aspecto Material do IBS e da CBS

## Visão Geral para Empresários

**O que é, em linguagem simples?** "Fato gerador" é só o nome jurídico para a pergunta: **o que faz nascer a obrigação de pagar o imposto?** A resposta curta: **qualquer venda ou prestação de serviço com pagamento** (mesmo vendendo um bem usado do estoque ou do imobilizado). Só em 4 situações bem específicas o imposto também nasce **sem** pagamento envolvido: dar bens de graça (ou baratos) para sócios/funcionários, dar brinde/bonificação, pagar sócio "em produto" no lugar de dinheiro, ou vender abaixo do preço para empresa do mesmo grupo.

**Por que isso importa pra você, empresário?** Muita gente pensa "não vendi nada, não devo imposto" — mas a lei olha para a **substância** da operação, não só para a venda formal. Dar desconto grande demais para um funcionário, doar produtos, ou vender aquela máquina velha do estoque também pode gerar imposto a pagar.

> **Exemplo prático:** Uma fábrica de bebidas deixa seus funcionários comprarem um produto pela metade do preço normal. Se o desconto passar de **25%**, a Receita não aceita tributar só o valor que o funcionário pagou — ela cobra o imposto como se o produto tivesse sido vendido pelo **preço cheio** de mercado. Ou seja: desconto generoso demais para o time pode sair mais caro para a empresa do que parece.

## Introdução para Profissionais de Contabilidade

**Equivalência com o que você já estudou:** o conceito de "fato gerador" não é novo — é o mesmo que você já vê no ICMS e no ISS. O que muda é a **codificação**: o **CST** (Código de Situação Tributária) você já conhece do ICMS (lá ele tem outra tabela, tipo "060", "102" etc.) — aqui ele ganha uma tabela própria do IBS/CBS, com números como 000, 200, 400, 510. O **cClassTrib** é o item **novo**: não existe equivalente direto no sistema atual — é um "sub-código" que detalha exatamente qual dispositivo de lei está sendo aplicado dentro daquele CST.

**Glossário rápido deste módulo:**
- **CST** — "qual é a situação tributária geral do item" (tributado normal, isento, diferido etc.).
- **cClassTrib** — "qual regra específica da lei justifica esse CST".
- **CFOP** — continua existindo (você já usa em NF-e hoje), e ainda ajuda a identificar remessas sem venda (ex.: 5.901 para industrialização por encomenda).
- **Operação onerosa/não onerosa** — "onerosa" = tem pagamento; "não onerosa" = não tem (mas atenção às 4 exceções tributadas do módulo).

**Dica prática de rotina:** ao lançar/conferir uma nota fiscal, **nunca olhe o CST sozinho** — sempre confira se o cClassTrib bate com a operação descrita no item. Um erro clássico de quem está começando é copiar o CST de uma nota parecida sem trocar o cClassTrib, gerando uma classificação tributária incoerente.

> Base Legal geral deste módulo: Art. 4º a 8º da Lcp nº 214/2025; Arts. 4º a 8º dos Regulamentos do IBS e da CBS.

## 2.1 A Matriz de Incidência — Sobre o que o IBS e a CBS incidem?

### O que é?

O **aspecto material** é a pergunta mais básica de todo tributo: **o que, exatamente, faz nascer a obrigação de pagar?** No IBS e na CBS, a resposta se divide em dois grandes blocos:

- **Operações Onerosas**: incidem em **todos os casos**, sem exceção.
- **Operações Não Onerosas**: a regra geral é a **não incidência**, mas existem **exatamente 4 hipóteses** em que, mesmo sem contraprestação, o imposto incide.

> Base Legal: Art. 4º da Lcp nº 214/2025; Art. 4º dos Regulamentos do IBS/CBS.

### Para que serve?

Esse desenho resolve o problema da **elisão via "gratuidade fictícia"**: se só operações remuneradas fossem tributadas, seria trivial contornar o imposto transferindo bens "de graça" para sócios, funcionários ou partes relacionadas. As 4 hipóteses de tributação do não oneroso (seção 2.3) fecham essa brecha.

### Como funciona na prática?

**Operação onerosa** é qualquer **fornecimento com contraprestação**. E **fornecimento**, por sua vez, é definido de forma deliberadamente ampla:
- a entrega ou disponibilização de **bem material**;
- a instituição, transferência, cessão, concessão, licenciamento ou disponibilização de **bem imaterial**, inclusive direito;
- ou a **prestação ou disponibilização de serviço**.

> Base Legal: Art. 4º da Lcp nº 214/2025; Art. 4º dos Regulamentos do IBS/CBS.

O IBS e a CBS incidem sobre **qualquer** operação com bem ou serviço realizada pelo contribuinte — inclusive as realizadas com **ativo não circulante** (imobilizado) ou no exercício de atividade econômica **não habitual**. Ou seja: **vender a máquina do imobilizado também gera IBS/CBS**, mesmo não sendo objeto normal do negócio.

> Base Legal: Art. 4º, § 4º da Lcp nº 214/2025; Art. 4º, § 4º dos Regulamentos do IBS/CBS.

O fato gerador **independe** de:
- o título jurídico pelo qual o bem está na posse do fornecedor;
- a espécie, tipo ou forma jurídica, validade jurídica e efeitos dos atos ou negócios jurídicos;
- a obtenção de lucro com a operação;
- o cumprimento de exigências legais, regulamentares ou administrativas.

> Base Legal: Art. 4º, § 3º da Lcp nº 214/2025; Art. 4º, § 3º dos Regulamentos do IBS/CBS.

> **EXEMPLO 1:** Uma empresa compra uma máquina em 2027 e a vende em 2037. Incide IBS/CBS? **SIM.** A venda está sujeita ao IBS e à CBS, observado o regime de transição de bens de capital (art. 406 da Lcp nº 214/2025) — o fato de o bem ter dez anos de uso não o tira do campo de incidência.
>
> **EXEMPLO 2:** Uma associação cobra mensalidade de seus associados para acesso a um clube social com piscina e área de esportes. Incide? **SIM.** A incidência não está ligada à obtenção de lucro, e a exceção de não incidência (Módulo 3) só abrange contribuições associativas estatutárias, não contraprestacionais, destinadas à manutenção de associações civis sem fins econômicos. Se há contraprestação (acesso ao clube), há incidência.

### Regras de Ouro e Exceções

- **Todas** as operações onerosas incidem — não existe "operação onerosa isenta por natureza"; isenções e reduções são tratadas nos regimes diferenciados (Módulo 8) e específicos (Módulo 9), não na matriz de incidência.
- Ativo imobilizado, bens não relacionados à atividade principal e operações não habituais **também entram no campo de incidência**.

---

## 2.2 CST e cClassTrib — A Linguagem Universal da Apuração Assistida

### O que é?

**CST** (Código de Situação Tributária) e **cClassTrib** (Código de Classificação Tributária) são os dois códigos que, juntos, "traduzem" para o sistema fiscal **qual é o tratamento tributário aplicado a cada item de cada documento fiscal**. O CST indica a macro-categoria (tributação integral, alíquota reduzida, isenção, diferimento etc.); o cClassTrib detalha, dentro daquela macro-categoria, exatamente qual dispositivo legal está sendo aplicado.

> Base Legal: NT 2025.002, v. 1.36 – NF-e/NFC-e; Informe Técnico 2025.002, v. 1.50.

### Para que serve?

Aqui está a frase mais importante deste módulo: **toda operação, com incidência ou não, deverá ser codificada por CST e cClassTrib para ser incorporada na apuração assistida.** Sem o código correto, a operação simplesmente **não entra corretamente** na conta corrente fiscal do contribuinte (Módulo 6) — o sistema não sabe se deve gerar débito, crédito, ajuste ou nada.

### Como funciona na prática? — Tabela completa de CST

| CST | Nome | O que significa | Direito a crédito ao adquirente? |
|---|---|---|---|
| **000** | Tributação integral | Situações normalmente tributadas pelo IBS e pela CBS | Sim, normalmente |
| **010** | Tributação com alíquotas uniformes | Serviços financeiros; alíquotas diferenciadas e nacionalmente uniformes | Conforme regime específico |
| **011** | Tributação com alíquotas uniformes reduzidas | Planos de saúde/funerária; concursos e prognósticos | Conforme regime específico |
| **200** | Alíquota reduzida | Regimes diferenciados/específicos com redução de alíquota | Sim, sobre valor reduzido |
| **220** | Alíquota fixa | Regimes optativos do setor imobiliário (incorporação/loteamento) | Regra própria |
| **221** | Alíquota fixa proporcional | Regimes optativos de locação de imóveis (mantém carga do PIS/Cofins cumulativo) | Regra própria |
| **222** | Redução de Base de Cálculo | Única hipótese: transporte internacional de passageiros com ida e volta cobradas em conjunto | Regra própria |
| **400** | Isenção | Exclusão do crédito tributário | **Não** dá direito à manutenção de crédito |
| **410** | Imunidade e não incidência | Hipóteses constitucionais/legais de imunidade e não incidência | Não gera crédito (não há débito) |
| **510** | Diferimento | Posterga o IBS/CBS para etapa posterior | **Não** há pagamento nesta etapa nem crédito ao adquirente |
| **515** | Diferimento com redução de alíquota | Como o 510, mas o tributo postergado sofre alíquota reduzida | Idem 510, com alíquota menor |
| **550** | Suspensão | Incidência suspensa por critério; se quebrado, volta a ser exigido | Condicional |
| **620** | Tributação Monofásica | Regime específico dos combustíveis; IBS/CBS recolhido em uma única etapa | Regra própria (Módulo 9) |
| **800** | Transferência de crédito | Transformações societárias (fusão/cisão/incorporação) e regime específico de cooperativas | Transferência, não geração |
| **810** | Ajuste de IBS na ZFM | Lançamento do crédito presumido do IBS para indústrias incentivadas na ZFM | Ver Módulo 11 |
| **811** | Ajustes | Uso exclusivo em NF-e de débito/crédito para ajustes na apuração assistida | — |
| **820** | Tributação em documento específico | Aplicável a documentos cuja tributação ocorre via declaração de regime específico — a **DeRE** (Módulo 9) | Conforme regime específico |
| **830** | Exclusão da Base de Cálculo | Exclusão pela distribuidora de energia do valor fornecido pela unidade consumidora | — |

### Detalhamento de cada CST (exemplos de cClassTrib)

> Base Legal (todos os itens abaixo): Informe Técnico 2025.002, v. 1.50.

- **000 – Tributação integral**: `000001` situações tributadas integralmente pelo IBS/CBS; `000002` exploração de via.
- **010 – Alíquotas uniformes**: `010001` operações do FGTS não realizadas pela Caixa; `010002` operações do serviço financeiro.
- **011 – Alíquotas uniformes reduzidas**: `011001` planos de assistência funerária; `011002` planos de assistência à saúde; `011003` intermediação de planos de assistência à saúde (Módulo 9.4); `011004` concursos e prognósticos.
- **200 – Alíquota reduzida**: `200003` alimentação humana (Anexo I); `200027` locação/cessão/arrendamento de imóveis; `200047` bares e restaurantes; `200048` hotelaria, parques de diversão e parques temáticos (Módulo 9.7); `200051` agências de turismo (Módulo 9.9).
- **220 – Alíquota fixa**: `220001`/`220002` incorporação imobiliária em regime especial; `220003` alienação de imóvel de parcelamento do solo.
- **221 – Alíquota fixa proporcional**: `221001` locação/cessão/arrendamento de imóvel com alíquota sobre a receita bruta.
- **222 – Redução da BC**: `222001` transporte internacional de passageiros com ida e volta vendidos em conjunto.
- **400 – Isenção**: `400001` transporte público coletivo de passageiros rodoviário e metroviário.
- **410 – Imunidade/não incidência**: `410001` bonificações no documento fiscal sem evento posterior; `410004` exportações de bens e serviços; `410005` fornecimentos pela União/Estados/DF/Municípios; `410006` fornecimentos por templos de qualquer culto; `410007` fornecimentos por partidos políticos/entidades sindicais/instituições de educação e assistência social; `410008` livros, jornais, periódicos e papel de impressão; `410010` radiodifusão sonora e de sons e imagens de recepção livre e gratuita; `410014` fornecimento de produtor rural não contribuinte; `410019` gorjeta excluída da BC (bares/restaurantes); `410020` valores não repassados ao estabelecimento por plataforma de delivery; `410030` estorno de crédito por perecimento/deterioração/roubo/furto/extravio.
- **510 – Diferimento**: `510001` energia elétrica (geração/comercialização/distribuição/transmissão).
- **515 – Diferimento com redução de alíquota**: `515001` insumos agropecuários e aquícolas (Anexo IX).
- **550 – Suspensão**: `550001` exportações de bens materiais; `550018` desoneração da aquisição de bens de capital.
- **620 – Tributação Monofásica**: `620006` tributação monofásica sobre combustíveis cobrada anteriormente. *(Este CST é exclusivo do IBS/CBS para combustíveis — Módulo 9, seção 9.1. Não confundir com o regime monofásico "legado" de PIS/Cofins, hoje aplicado também a farmacêuticos, cosméticos, autopeças, pneus, bebidas frias e cigarros, explicado na seção 18.1 do [Módulo 18](18_Transicao_PIS_Cofins_para_CBS.md).)*
- **800 – Transferência de crédito**: `800001` fusão/cisão/incorporação; `800002` transferência de crédito do associado (inclusive cooperativas singulares).
- **810 – Ajuste de IBS na ZFM**: `810001` crédito presumido sobre valor apurado nos fornecimentos a partir da ZFM.
- **811 – Ajustes**: `811001` anulação de crédito por saídas imunes/isentas; `811002` débitos de notas não processadas na apuração; `811003` desenquadramento do Simples Nacional.
- **820 – Tributação em DeRE**: `820001` planos de saúde; `820004` concursos de prognósticos.
- **830 – Exclusão da BC**: `830001` exclusão da BC de energia elétrica fornecida pela distribuidora à unidade consumidora.

### Regras de Ouro e Exceções

- **Nem todo CST tem cClassTrib publicado.** As hipóteses de não incidência de baixa/liquidação/transmissão de participação societária, fusão/cisão/incorporação e contribuições associativas estatutárias, por exemplo, ainda **não têm CST e cClassTrib publicados** no material do curso (ver Módulo 3).
- CST **400 (Isenção)** e CST **510/515 (Diferimento)** **não geram crédito ao adquirente** — é uma armadilha comum confundir "não tributado nesta etapa" com "gera crédito".

### Impacto Sistêmico e Operacional

- Código errado de CST/cClassTrib pode **rejeitar o documento** ou, pior, ser aceito pelo sistema mas levar a apuração assistida a **tratamento tributário incorreto** — débito que não deveria existir, crédito que não nasce, ou ajuste que não é feito.
- A conferência fiscal, neste novo modelo, passa a ser feita **por item, por código, e por efeito na apuração** — não mais por uma escrituração declaratória genérica.
- Base Legal desta seção de impacto: NT 2025.002 v1.50; NT CT-e 2025.001 v1.14a; NT CT-e 2026.002 v1.00.

### Fluxo de Preenchimento — Venda Comum, Totalmente Tributada

Cenário: uma loja de material de escritório vende R$ 500,00 em produtos para outra empresa, sem nenhum benefício, desconto condicional ou peculiaridade.

1. **Identifique a operação** — venda normal → `finNFe = 1 (Normal)`.
2. **Enquadre o item** — não há regime diferenciado nem específico aplicável a material de escritório → **regra geral**.
3. **Escolha CST e cClassTrib** — situação normalmente tributada → **CST 000**, `cClassTrib 000001` ("Situações tributadas integralmente pelo IBS e CBS").
4. **Determine o local e o momento** — cliente com domicílio principal em outro município → alíquota do **destino** (Módulo 4); fato gerador na entrega do produto.
5. **Calcule a base e os tributos** — base de cálculo = R$ 500,00 (valor da operação, sem exclusões nesse caso); aplique a soma das alíquotas de referência de IBS + CBS do destino sobre R$ 500,00.
6. **Grupos especiais** — nenhum aplicável neste cenário simples.

> **Resultado no XML**: item com `CST=000`, `cClassTrib=000001`, `vBC=500,00`, `vIBS` e `vCBS` calculados sobre essa base, sem grupos adicionais preenchidos.

**Duas interpretações da mesma nota:**

- **Interpretação 1 — Lado de quem vende (fornecedor):** a loja **debita** o valor do IBS/CBS calculado sobre os R$ 500,00. Esse débito entra na apuração do mês como "imposto a pagar", e só é considerado quitado quando o cliente efetivamente paga (Módulo 6).
- **Interpretação 2 — Lado de quem compra (adquirente):** se o comprador for uma empresa do regime regular, esse mesmo valor de IBS/CBS vira **crédito** para ela, assim que o pagamento for confirmado (Módulo 5) — ou seja, o que é "imposto a pagar" para a loja é "desconto futuro" para quem compra. **A mesma nota, os mesmos números, dois efeitos opostos e simultâneos.**

---

## 2.3 Operações Não Onerosas — As 4 Hipóteses que Rompem a Regra

### O que é?

Apesar de a regra geral ser a **não incidência** em operações sem contraprestação, existem **exatamente 4 hipóteses** em que uma operação não onerosa é tributada:

1. **Fornecimento não oneroso ou abaixo do valor de mercado para uso e consumo pessoal**;
2. **Brindes e Bonificações**;
3. **Fornecimento de Bem como Pagamento de Dividendos e Outras Remunerações**;
4. **Operações com partes relacionadas** (fornecimento não oneroso ou abaixo do valor de mercado).

> Base Legal: Art. 5º da Lcp nº 214/2025; Art. 5º dos Regulamentos do IBS e da CBS.

Antes de tributar como não onerosa, é preciso separar: existem operações que são apenas **remessas físicas sem transferência de propriedade** (não são nem onerosas nem as 4 hipóteses tributadas) — exemplos de CFOP: **5.901, 5.902, 5.903, 5.924, 5.925** (industrialização por encomenda/conta e ordem); **5.915, 5.916** (conserto); **5.908, 5.909** (locação e comodato); **5.905, 5.906, 5.923, 5.907, 5.934** (armazém).

### Para que serve?

Fecha a brecha de "distribuir bens de graça para quem está por dentro da empresa" (sócios, funcionários, familiares) sem pagar tributo, e trata como venda disfarçada operações que, na essência, transferem valor para fora da pessoa jurídica.

### Como funciona na prática? — Hipótese 1: Uso e consumo pessoal

Abrange fornecimento não oneroso ou abaixo do valor de mercado para:
- a) o próprio contribuinte, quando pessoa física;
- b) pessoas físicas sócias, acionistas, administradoras, membros de conselhos de administração e fiscal, e comitês de assessoramento previstos em lei;
- c) empregados do contribuinte;
- d) cônjuges, companheiros ou parentes (consanguíneos ou afins) até o **3º grau** das pessoas acima.

Este tema é tão relevante que ganha tratamento próprio na seção 2.4 abaixo, incluindo a definição operacional de "uso e consumo pessoal" e suas exceções.

### Como funciona na prática? — Hipótese 2: Brindes e Bonificações

- **Bonificação**: fornecimento **a maior** de bem/serviço objeto da atividade do contribuinte, em **substituição** a desconto no valor da operação. **Não é tributada** se constar do documento fiscal e não depender de evento posterior.
- **Brinde**: bem/serviço fornecido **gratuitamente** a consumidor final que **não** constitui objeto das atividades do fornecedor.

> Base Legal: Art. 5º, II e §§ 1º e 2º da LC nº 214/2025; Art. 5º, II e §§ 1º e 2º dos Regulamentos do IBS e da CBS.

- **Amostra Grátis** — não incide IBS/CBS: bem/serviço de **diminuto ou nenhum valor comercial**, objeto da atividade econômica do fornecedor. Requisitos:
  - bem material: fornecido em **quantidade necessária** para dar conhecimento de sua natureza/qualidade;
  - serviço/bem imaterial: fornecido em período pré-determinado, com **prazo máximo de 31 dias corridos**;
  - amostra grátis de medicamentos segue legislação específica da agência reguladora.

> Base Legal: Art. 6º, §§ 4º e 5º dos Regulamentos do IBS e da CBS.

### Como funciona na prática? — Hipótese 3: Bem como pagamento de dividendos

Transmissão, pelo contribuinte do regime regular, para sócio ou acionista, por devolução de capital, dividendos *in natura* ou de outra forma, de bens cuja aquisição tenha permitido a apropriação de créditos pelo contribuinte, inclusive na produção.

> Base Legal: Art. 5º, III da Lcp nº 214/2025; Art. 5º, III dos Regulamentos do IBS e da CBS.

### Como funciona na prática? — Hipótese 4: Partes Relacionadas

Considera-se que **partes são relacionadas** quando ao menos uma delas está sujeita à influência, direta ou indireta, de outra parte, capaz de levar ao estabelecimento de termos e condições que divirjam daqueles que existiriam entre partes independentes em condições comparáveis. Para essa definição, **entidade** abrange pessoas físicas e jurídicas e entidades sem personalidade jurídica.

> Base Legal: Art. 5º, IV da Lcp nº 214/2025; Art. 5º, IV dos Regulamentos do IBS e da CBS.

### Regras de Ouro e Exceções

- As **4 hipóteses são taxativas** — se a operação não onerosa não se encaixa em nenhuma delas, e não é remessa sem transferência de propriedade (CFOPs 5.9xx), não há incidência.
- Fique atento à diferença entre **bonificação** (não tributada, se no documento e sem evento posterior) e **brinde** (regra de amostra grátis é diferente e mais restrita).

---

## 2.4 Uso e Consumo Pessoal — O Divisor de Águas do Crédito

### O que é?

**Uso e consumo pessoal** é toda aquisição feita pelo contribuinte do regime regular que será utilizada ou consumida por **uma pessoa física**, fora das atividades da empresa.

> **Uso e Consumo ≠ Uso e Consumo Pessoal.** Material de escritório e bens de uso administrativo **não** são uso pessoal. Alimentação, vestuário e cuidados de saúde **são** aquisições de uso pessoal — dizem respeito à pessoa física, independentemente da atividade da empresa.

> Base Legal: Art. 57 da Lcp nº 214/2025; Art. 62 a 64 dos Regulamentos do IBS e da CBS.

### Para que serve?

Este é o principal filtro de negação de crédito no sistema (ver Módulo 5). A lógica: se o gasto beneficia a pessoa física e não a atividade econômica, ele não pode gerar crédito de um imposto sobre consumo — quem consome, na prática, é a pessoa, não a empresa.

### Como funciona na prática?

**Presumidos de uso e consumo pessoal**, no caso de fornecimento a sócios, empregados, administradores, familiares e demais pessoas relacionadas:
- bem imóvel residencial e bens/serviços relacionados à sua aquisição, locação e manutenção;
- veículo e bens/serviços relacionados à sua aquisição, locação e manutenção, **inclusive seguro e combustível**.

**Não se presume** uso pessoal quando o bem/serviço serve **preponderantemente** à atividade econômica do contribuinte — "se o gasto existe para viabilizar o trabalho, não é benefício pessoal".

**Vínculo funcional afasta a presunção**, em três hipóteses:
- **Obrigação legal ou trabalhista**: fornecimento exigido por lei ou norma trabalhista;
- **Bens corporativos**: veículos, computadores, aparelhos de comunicação para uso estritamente funcional;
- **Serviços corporativos**: transporte, telefonia e dados custeados para execução das funções do empregado.

Para afastar a presunção de uso pessoal, é preciso passar por **dois filtros cumulativos**:
1. **Características compatíveis** — o bem/serviço faz sentido para a função exercida;
2. **Quantidade compatível** — o volume corresponde à necessidade da atividade.

> **EXEMPLO:** celular corporativo para a equipe comercial faz sentido; fornecimento excessivo ou sem relação com a função descaracteriza a exceção.

**Descontos para empregados, sócios e pessoas ligadas** também podem escapar da tributação como uso pessoal, dentro de limites:
- Revenda de bens materiais: preço **não pode ficar abaixo do custo de aquisição**;
- Bens produzidos/serviços prestados: desconto **não pode superar 25%**.

> **EXEMPLO NUMÉRICO — Sr. Pedro (Bela Cola S/A):** Empregados da linha de produção compram garrafa de 2L a R$ 3,00 (custo), enquanto o preço normal ao público é R$ 5,00.
> - Desconto = R$ 5,00 − R$ 3,00 = **R$ 2,00**
> - % Desconto = R$ 2,00 / R$ 5,00 = **40%**
> - Como 40% > 25% (limite legal), **não** se tributa apenas o valor cobrado do Sr. Pedro: a **base de cálculo passa a ser R$ 5,00** (valor de mercado), mesmo cobrando-se R$ 3,00 dele.
> - Supondo IBS+CBS somados = 28% e Imposto Seletivo = 5%:
>   - IS = R$ 5,00 × 5% = **R$ 0,25**
>   - IBS+CBS = R$ 5,25 × 28% = **R$ 1,47**
>   - Total pago pelo Sr. Pedro: R$ 3,00 + R$ 0,25 + R$ 1,47 = **R$ 4,72**

> Base Legal (toda esta subseção): Art. 63 do Regulamento do IBS e da CBS.

**A pergunta-chave**: isso serve à empresa ou à pessoa física? Se serve à atividade econômica, com critérios objetivos de necessidade, compatibilidade e quantidade, fica fora do conceito de uso pessoal. Se revela benefício pessoal, liberalidade ou vantagem desconectada da função, volta à regra de uso pessoal.

> **EXEMPLO — Fixação de Conhecimento (Veículo misto):** Produtor Rural compra veículo para monitorar plantações, mas também usa na vida pessoal. É uso pessoal? **SIM.** Não existe "parcialmente de uso e consumo pessoal" — uso pessoal parcial contamina o bem **inteiro**.
>
> **EXEMPLO — Fixação de Conhecimento (Gado para casamento):** Produtor Rural abate uma cabeça de gado para o casamento da filha. Incide IBS/CBS? **SIM.** Não há vínculo entre a atividade rural e o evento pessoal.
>
> **EXEMPLO — Fixação de Conhecimento (Celular corporativo para gerentes):** Empresa fornece celular corporativo, usado também na vida pessoal dos gerentes. O regulamento afasta a presunção de uso pessoal para aparelho de comunicação fornecido para uso funcional — **não** se tributa como uso pessoal.

> Base Legal (todos os exemplos): Art. 57, II e § 1º da Lcp nº 214/2025; Art. 63, § 3º dos Regulamentos do IBS/CBS.

### Regras de Ouro e Exceções

- **Alienação de bens de uso pessoal**: se a aquisição não permitiu apropriação de crédito (por ser uso pessoal), o contribuinte pode **excluir da base de cálculo o valor de aquisição do bem**, até o limite do valor da alienação, desde que haja identificação inequívoca do bem.

> **EXEMPLO NUMÉRICO — Veículo do Sr. José:** Em 2027, sócio compra veículo por R$ 350.000,00 para a empresa; tratado como uso pessoal, **sem tomar crédito**. Em 2028, vende por R$ 370.000,00 (valor de tabela).
> - Base de Cálculo = R$ 370.000,00 − R$ 350.000,00 = **R$ 20.000,00**
> - IBS UF = R$ 20.000,00 × 0,05% = **R$ 10,00**
> - IBS Mun = R$ 20.000,00 × 0,05% = **R$ 10,00**
> - CBS = R$ 20.000,00 × 8,5% = **R$ 1.700,00**

> Base Legal: Art. 57, § 9º da Lcp nº 214/2025; Art. 64, § 3º dos Regulamentos do IBS e da CBS.

### Impacto Sistêmico e Operacional

O tratamento de uma aquisição como uso e consumo pessoal dispara, no lado do adquirente, o **estorno obrigatório de crédito** (Módulo 5), formalizado por documento fiscal específico, indicando o valor do IBS/CBS vinculado ao bem/serviço e a pessoa física destinatária.

---

## 2.5 Fornecimento Simultâneo

### O que é?

Regra que trata do fornecimento conjunto de diferentes bens e serviços em uma **mesma operação**.

### Para que serve?

Evita que a mistura de itens com tratamentos tributários distintos numa única linha do documento fiscal "contamine" indevidamente o cálculo — por exemplo, aplicando a alíquota de um regime diferenciado a itens que não fazem jus a ela.

### Como funciona na prática?

Regra geral: é **obrigatória a especificação de cada fornecimento e de seu respectivo valor**. Só é possível agrupar fornecimentos diferentes em um único item quando:
- todos os fornecimentos estiverem sujeitos ao **mesmo tratamento tributário**; ou
- algum fornecimento puder ser considerado **principal**, e os demais, seus **acessórios**.

> Base Legal: Art. 7º da Lcp nº 214/2025; Art. 7º dos Regulamentos do IBS e da CBS.

**O que é "Tratamento Tributário Distinto"?** Qualquer diferença em: incidência; regimes de tributação; isenção; momento de ocorrência do fato gerador; local da operação; alíquota; sujeição passiva; não cumulatividade.

> **EXEMPLO — Fixação de Conhecimento (Transporte ida e volta):** Posso cobrar em conjunto transporte de ida e volta de passageiros? **NÃO.** O IBS do transporte é sempre devido no local de **início** de cada trecho — como há locais de ocorrência do fato gerador distintos, não há como agrupar num único documento fiscal.
>
> **EXEMPLO — Fixação de Conhecimento (Mensalidade escolar):** Posso sempre cobrar a mensalidade da escola particular em um único item da NFS-e? **NÃO.** O regime diferenciado dos serviços de educação só abrange a mensalidade do ensino, não as atividades complementares (que têm tratamento tributário distinto).

> Base Legal: Art. 7º e 11, VI da Lcp nº 214/2025; Art. 7º e 12, VI dos Regulamentos do IBS/CBS. | Art. 7º e 129, § único da Lcp nº 214/2025; Art. 7º e 204, § único dos Regulamentos do IBS/CBS.

### Regras de Ouro e Exceções

- Regra prática de bolso: **"tratamento igual ou relação principal/acessório"** — fora isso, discrimine item por item, com valor próprio para cada um.
