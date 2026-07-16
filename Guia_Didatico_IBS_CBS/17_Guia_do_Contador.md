# Guia do Contador — O que Você Precisa Gerenciar na Transição para o IBS/CBS

> Este guia não repete a teoria dos módulos técnicos — ele organiza a **rotina profissional** de quem vai operar a transição na prática, para uma carteira inteira de clientes ao mesmo tempo. Cada seção responde a uma pergunta operacional: o que classificar, o que testar, o que prazo cobrar de cada cliente, o que auditar todo mês, e onde a responsabilidade do escritório aumenta. Sempre que o assunto for aprofundado em outro módulo, o link está indicado.
>
> Se o seu cliente quiser uma versão only dele — sem jargão técnico, organizada por decisão de negócio —, use o [`16_Guia_do_Empresario.md`](16_Guia_do_Empresario.md) como material de apoio para essa conversa.

## Como usar este guia

Símbolos usados neste guia:
- ✅ = ação recomendada / já deveria estar feita
- ❌ = risco a evitar
- ⚠️ = ponto de atenção ou prazo crítico
- 💡 = dica de rotina de escritório

---

## 1. O que muda na rotina do escritório — visão geral

A reforma não é um evento único (uma "virada de chave" em uma data): é uma **transição escalonada de 2026 a 2033**, com obrigações que se acumulam ano a ano. Isso significa que, na prática, o escritório vai operar **dois sistemas em paralelo** por vários anos — o modelo antigo (ICMS/ISS/PIS/Cofins) convivendo com o novo (IBS/CBS/IS) — com percentuais de transição mudando a cada exercício.

O que isso exige do escritório, de forma concreta:

| Frente | O que muda | Módulo de referência |
|---|---|---|
| **Classificação de clientes** | Cada cliente precisa ser reclassificado: regime (Regular x Simples), sub-regime (regra geral, diferenciado, específico), e se tem operações que disparam regras especiais (imóveis, exportação, ZFM) | [13](13_Guia_Comparativo_de_Regimes.md) |
| **Emissão de documentos fiscais** | Novos campos obrigatórios (IBS, CBS, IS, CST, cClassTrib) dentro dos documentos que já existem (NF-e, NFC-e, NFS-e, CT-e, MDF-e) | [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md) |
| **Apuração** | Migra de escrituração declaratória tradicional para **apuração assistida** — o Comitê Gestor do IBS e a RFB calculam e apresentam o saldo, e o escritório passa a ter um papel de **conferência e contestação**, não de cálculo do zero | [06](06_Pagamento_Split_Payment_Apuracao_Assistida.md) |
| **Pagamento** | **Split Payment** segrega o tributo no momento da liquidação financeira — o escritório precisa orientar o cliente sobre o impacto no fluxo de caixa e conciliar valores líquidos recebidos | [06](06_Pagamento_Split_Payment_Apuracao_Assistida.md) |
| **Sistemas** | ERPs e emissores de nota precisam de homologação/atualização para os novos leiautes — isso não é automático nem instantâneo | Seção 4 deste módulo |
| **Multas e prazos** | Regras de penalidade próprias do novo sistema, distintas das que você já conhece do ICMS/ISS | [07](07_Penalidades_e_Programas_Especiais.md) |

⚠️ **O ponto central que muda sua responsabilidade profissional**: na apuração assistida, o sistema já entrega o cálculo pronto ao cliente. Isso reduz o trabalho de "calcular", mas **aumenta** o trabalho de "auditar" — se o documento fiscal foi emitido com CST/cClassTrib errado, o cálculo automático herda o erro, e ninguém vai avisar o cliente disso antes da fiscalização. A conferência da classificação **antes** da emissão passa a ser mais crítica do que a apuração em si.

---

## 2. Ficha de Triagem — Classifique Cada Cliente Nesta Ordem

Use esta sequência para cada cliente da carteira. Ela é a versão operacional da árvore de decisão do [Módulo 16, seção 3](16_Guia_do_Empresario.md), pensada para preencher rápido, cliente por cliente.

| Passo | Pergunta | Onde anotar a resposta |
|---|---|---|
| 1 | O cliente é automaticamente contribuinte, ou só se ultrapassar algum limite (produtor rural, PF com imóveis, TAC, nanoempreendedor, condomínio)? | [04](04_Aspectos_Pessoal_Espacial_Temporal_Quantitativo.md) |
| 2 | Hoje o cliente é Simples Nacional, Lucro Presumido ou Lucro Real? | — |
| 3 | Se Simples: qual Anexo (I a V, hoje) ele ocupa, e qual vai ser sua faixa de receita em 2026? Isso define se a decisão "dentro/fora do IBS/CBS" compensa | [15](15_Simples_Nacional_na_Reforma.md) |
| 4 | A atividade do cliente se enquadra em algum regime diferenciado ou específico setorial (cesta básica, saúde, educação, combustíveis, financeiro, cooperativa, bar/restaurante, hotelaria, transporte coletivo, turismo, futebol)? | [08](08_Regimes_Diferenciados_e_Credito_Presumido.md) / [09](09_Regimes_Especificos_Setoriais.md) |
| 5 | O cliente tem operações com bens imóveis (venda, locação, incorporação, loteamento)? | [14](14_Regime_Especifico_Bens_Imoveis.md) |
| 6 | O cliente está na Zona Franca de Manaus ou Áreas de Livre Comércio, ou opera regime aduaneiro especial? | [11](11_Zona_Franca_de_Manaus_e_Regimes_Aduaneiros.md) |
| 7 | O cliente exporta, importa, ou vende para o governo? | [03](03_Nao_Incidencia_Imunidades_Comercio_Exterior.md) / [07](07_Penalidades_e_Programas_Especiais.md) |
| 8 | O produto/serviço do cliente está sujeito ao Imposto Seletivo (bebidas alcoólicas, fumo, veículos, bens minerais, apostas)? | [10](10_Imposto_Seletivo.md) |

💡 **Dica de rotina**: transforme esta tabela em uma planilha de carteira, com uma linha por cliente e uma coluna por passo. Ela vira, ao mesmo tempo, seu mapa de prioridade (quem exige mais atenção) e seu registro de decisão (para justificar depois por que classificou cada cliente daquela forma).

---

## 3. Calendário Mestre — Prazos que Você Gerencia por Cliente, Não por Escritório

Cada linha abaixo é um prazo que **cada cliente elegível** precisa decidir individualmente — não é uma decisão única do escritório. Construa um lembrete por cliente, não um lembrete genérico.

| Data | O que vence | Quem é afetado | Ação do escritório |
|---|---|---|---|
| **01.08.2026** | Início da obrigatoriedade de emissão dos DF-e com os novos campos (IBS, CBS, IS, CST, cClassTrib) | Todos os clientes emissores de documento fiscal | Confirmar homologação do sistema de cada cliente **antes** desta data (seção 4) |
| **01.09.2026 a 30.09.2026** | Janela de opção pelo **Regime Regular** do IBS/CBS | Clientes elegíveis a regime diferenciado que preferem não usá-lo | Simular os dois cenários (regra geral x diferenciado) para cada cliente elegível, **antes** de setembro |
| **Anual, em março** | Janela de opção "dentro/fora" do IBS/CBS para quem é do Simples Nacional | Clientes do Simples Nacional | Refazer a simulação **todo ano**, não só uma vez — a vantagem pode mudar conforme a receita do cliente cresce |
| **01.01.2027** | Início da vigência plena da CBS; início do Imposto Seletivo; início do regime específico de combustíveis (regra geral) | Todos os clientes | Verificar se algum cliente entra em novo regime específico a partir desta data |
| **07.07.2025 a 31.12.2026** | Projeto piloto de testes da apuração assistida | Clientes selecionados para o piloto (se houver) | Acompanhar retorno do piloto para antecipar ajustes de rotina |
| **2026 – 2033** | Percentuais de transição escalonados (créditos de ICMS, sublimites do Simples, alíquotas de regimes específicos) | Varia por regime — ver módulo específico de cada cliente | Atualizar a ficha de cada cliente a cada virada de ano-calendário |
| **31.12.2032** | Fim da autorização para uso transitório de leiautes/padrões técnicos do CGNFS-e, CGSN e CONFAZ (via Sinief) no âmbito do IBS/CBS | Clientes que ainda dependem de leiautes antigos de NFS-e | Confirmar migração ao ambiente nacional de NFS-e antes do prazo |

⚠️ **Erro comum de escritório**: tratar a opção "dentro/fora do Simples" como decisão de uma vez só. Ela é **anual** — o cliente pode entrar em um ano e sair no outro, e vice-versa. Se o escritório não repetir a simulação todo ano, o cliente pode perder a janela de março sem perceber que ela voltou a valer a pena (ou deixou de valer).

---

## 4. Homologação de Sistemas — Não Deixe Isso na Mão do Cliente

Nenhuma reclassificação de cliente importa se o sistema emissor dele não suporta os campos novos. Esta é, na prática, a frente que mais atrasa a preparação de uma carteira inteira — porque depende de terceiros (fornecedores de ERP/emissor) fora do controle direto do escritório.

**Checklist por cliente:**

- [ ] Identifiquei qual sistema o cliente usa para emitir DF-e (ERP próprio, sistema de terceiro, emissor gratuito da prefeitura/SEFAZ).
- [ ] Contatei o fornecedor do sistema e obtive confirmação **por escrito** (e-mail, não conversa verbal) da data prevista de suporte aos campos de IBS, CBS, IS, CST e cClassTrib.
- [ ] Agendei um teste de emissão de nota no ambiente de homologação **antes** de 01.08.2026 — não confie apenas na palavra do fornecedor, teste você mesmo.
- [ ] Verifiquei se o cliente usa NFS-e municipal com leiaute próprio (fora do ambiente nacional) — se sim, confirmei se o município já aderiu ao padrão nacional ou se vai operar no regime transitório até 31.12.2032.
- [ ] Documentei o resultado do teste (print de tela, XML de retorno) para ter registro caso o sistema falhe depois da obrigatoriedade.

❌ **Não faça**: assumir que "o sistema vai estar pronto porque é grande/conhecido". Fornecedores de grande porte também atrasam homologações — o cronograma de cada um é diferente, e a responsabilidade de confirmar isso a tempo, por cliente, é do escritório.

💡 **Dica de rotina**: monte uma tabela única com todos os fornecedores de sistema usados pela sua carteira (muitos clientes pequenos compartilham o mesmo fornecedor). Ao invés de checar cliente por cliente, você acompanha por fornecedor — reduz o trabalho de monitoramento.

---

## 5. Auditoria de CST e cClassTrib — a Rotina que Substitui a Conferência de CFOP

Quem já trabalha com ICMS/ISS conhece a rotina de conferir CFOP e CST antes de fechar a apuração. Essa rotina **continua existindo**, mas com códigos novos e consequências maiores, porque a apuração assistida herda automaticamente qualquer erro de classificação do documento fiscal.

**O que auditar, e com que frequência:**

| Item | Frequência recomendada | O que verificar |
|---|---|---|
| CST aplicado por produto/serviço | A cada novo item de catálogo, e mensalmente por amostragem | O CST corresponde à natureza real da operação (tributação integral, isenção, imunidade, diferimento, etc.) — ver tabela completa no [Módulo 2](02_Fato_Gerador_e_Aspecto_Material.md) |
| cClassTrib aplicado | A cada novo item de catálogo, e mensalmente por amostragem | O código de classificação tributária reflete o regime correto do produto/serviço (regra geral, diferenciado, específico, alíquota zero) |
| Consistência entre CST e cClassTrib | Mensalmente | Alguns CST só combinam com determinados cClassTrib — combinações inconsistentes tendem a gerar rejeição do documento ou erro na apuração assistida |
| Casos de exportação (imunidade x fim específico) | Por operação | Confirmar CST 410/cClassTrib 410004 (imunidade direta) x CST 550/cClassTrib 550001 (fim específico de exportação/ECE) — são cenários distintos, ver [Módulo 3](03_Nao_Incidencia_Imunidades_Comercio_Exterior.md) |
| Créditos presumidos (produtor rural, TAC, reciclagem, bem móvel usado, Suframa) | Mensalmente | Verificar se o cClassTrib do crédito presumido corresponde à origem real da aquisição — ver [Módulo 8](08_Regimes_Diferenciados_e_Credito_Presumido.md) e [Módulo 11](11_Zona_Franca_de_Manaus_e_Regimes_Aduaneiros.md) |

⚠️ **Ponto de risco elevado**: erro de CST/cClassTrib não é só um problema de "documento rejeitado". Quando o documento é aceito com o código errado, o erro entra silenciosamente na apuração assistida e só aparece quando o Comitê Gestor ou a RFB cruzam os dados — potencialmente meses depois, já com multa. Auditar **antes** de emitir é mais barato do que corrigir depois.

💡 **Dica de rotina**: monte uma tabela de "de-para" por cliente na primeira classificação (produto/serviço → CST → cClassTrib) e use-a como checklist toda vez que o cliente cadastrar um item novo. Isso evita reclassificar do zero a cada nota.

---

## 6. Apuração Assistida — o Novo Papel do Escritório

A apuração deixa de ser um cálculo que o escritório monta do zero e passa a ser um **cálculo pronto** que o Comitê Gestor do IBS e a RFB apresentam ao contribuinte, construído a partir dos documentos fiscais eletrônicos e dos eventos de extinção de débito (ver [Módulo 6](06_Pagamento_Split_Payment_Apuracao_Assistida.md)).

**O que isso muda na rotina mensal:**

- ✅ **Conferir**, não recalcular do zero: comparar o saldo apresentado pelo sistema com a expectativa construída a partir dos documentos emitidos/recebidos no período.
- ✅ **Contestar** divergências dentro do prazo — se o saldo não bate com o esperado, a causa normalmente está em CST/cClassTrib incorreto, documento não vinculado, ou crédito não homologado.
- ✅ **Acompanhar o ressarcimento** de saldo credor: créditos homologados são ressarcidos em até **15 dias** da conclusão da fiscalização — se o prazo estourar sem retorno, é sinal de pendência a resolver.
- ✅ Explicar ao cliente que o painel "Dados da Operação" e "Dados do Débito" do sistema mostra, por operação, o vínculo entre documento fiscal e tributo apurado — útil para localizar rapidamente a origem de uma divergência.

⚠️ **Não confunda apuração assistida com "não preciso mais conferir nada"**. O sistema apresenta o cálculo, mas a responsabilidade de identificar que o cálculo está errado — porque um documento foi mal classificado — continua sendo do contribuinte e do seu contador.

---

## 7. Split Payment — Orientando o Cliente sobre o Impacto no Caixa

O Split Payment segrega o valor do tributo **no momento da liquidação financeira** da operação — o fornecedor recebe apenas o valor líquido, já descontados IBS e CBS, que vão diretamente ao Comitê Gestor e à RFB.

**O que o escritório precisa antecipar para o cliente:**

- ✅ O caixa que entra na conta do cliente **já vem líquido** de tributo — isso muda a lógica de quem estava acostumado a receber o valor cheio e separar o tributo depois, na hora de pagar.
- ✅ Conciliação bancária muda: o valor recebido não bate mais com o valor bruto da nota — é preciso conciliar pelo valor líquido, com o tributo aparecendo como retenção automática, não como uma saída manual.
- ⚠️ Clientes que dependiam do "float" do tributo (usar o dinheiro do imposto como capital de giro até a data de pagamento) sentem esse impacto com mais força — vale simular o fluxo de caixa com o cliente antes da entrada em vigor, não depois.
- 💡 Para clientes com margem apertada, mostrar a diferença lado a lado (recebimento bruto de hoje x recebimento líquido futuro) ajuda a antecipar decisões de precificação ou negociação de prazo com fornecedores.

---

## 8. DeRE — Declaração de Regimes Específicos

A **DeRE** é a declaração usada pelos regimes específicos setoriais (ver [Módulo 9](09_Regimes_Especificos_Setoriais.md)) — obrigatória para clientes enquadrados nesses regimes (serviços financeiros, planos de saúde, cooperativas, entre outros).

**Checklist:**

- [ ] Identifiquei, na ficha de triagem (seção 2), quais clientes têm regime específico setorial.
- [ ] Confirmei se a atividade do cliente exige DeRE, e desde quando.
- [ ] Inclui a DeRE no calendário de obrigações acessórias do cliente, com prazo próprio — não é a mesma data da apuração mensal padrão.

---

## 8.5. Créditos de Transição de PIS/Cofins para CBS — Não Deixe Passar o Prazo

Todo cliente que hoje está no regime cumulativo de PIS/Cofins (a maioria dos clientes do Lucro Presumido) tem direito a créditos de transição na migração para a CBS — e o mais relevante deles, o **crédito presumido sobre estoque**, tem prazo apertado e fácil de perder de vista no meio do fechamento de ano. Mecânica completa, com todas as regras e vedações: [Módulo 18](18_Transicao_PIS_Cofins_para_CBS.md).

**Checklist por cliente do regime cumulativo:**

- [ ] Levantei o inventário valorado de 31.12.2026 (mercadorias para revenda, produtos acabados/em elaboração, matérias-primas, materiais de embalagem) — inclusive itens sob substituição tributária/monofasia que hoje não geram crédito.
- [ ] Apurei e apropriei o crédito presumido de estoque **até o último dia de junho de 2027** — depois desse prazo, o direito se perde.
- [ ] Levantei os bens do ativo imobilizado com depreciação de PIS/Cofins ainda em curso, para migrar o crédito remanescente para crédito presumido de CBS.
- [ ] Mapeei o histórico de créditos de PIS/Cofins ainda não utilizados (janela de 5 anos) e de possíveis créditos extemporâneos a retificar antes que a janela se feche.
- [ ] Verifiquei se o cliente tem vendas do regime de caixa que atravessam a virada de 2026 para 2027 (ainda sujeitas a PIS/Cofins mesmo recebidas já em 2027).

---

## 9. Erros Comuns no Onboarding de um Cliente à Reforma

Lista dos erros mais frequentes ao preparar um cliente para a transição — vale revisar antes de declarar um cliente "pronto":

- ❌ **Classificar o regime uma vez e nunca revisar.** A receita do cliente muda, a atividade pode mudar, e os percentuais de transição mudam ano a ano — reclassificação é anual, não é evento único.
- ❌ **Confiar na palavra do fornecedor de sistema sem testar.** Ver seção 4 — teste sempre, não assuma.
- ❌ **Tratar a opção do Simples "dentro/fora do IBS/CBS" como decisão irreversível.** Ela é anual, sempre em março — revisitar todo ano.
- ❌ **Ignorar clientes pessoa física que se tornam contribuintes por acúmulo de operações** — principalmente donos de imóveis alugados/vendidos que ultrapassam os limites do [Módulo 14](14_Regime_Especifico_Bens_Imoveis.md) sem perceber, porque "não têm empresa".
- ❌ **Não perguntar sobre exportação, importação ou venda ao governo na entrevista inicial de um cliente novo** — essas operações têm CST/cClassTrib próprios e prazos de comprovação (180 dias para exportação) que passam despercebidos se não forem perguntados diretamente.
- ❌ **Deixar a checagem de CST/cClassTrib para o fechamento mensal**, ao invés de auditar no cadastro do produto/serviço — o erro se repete em toda nota emitida até ser corrigido na origem.
- ❌ **Não documentar as decisões tomadas por cada cliente** (regime escolhido, data da opção, justificativa da simulação) — em caso de fiscalização ou disputa, o registro da decisão é a defesa do escritório e do cliente.

---

## 10. Fontes Oficiais para Monitoramento Regulatório

A regulamentação da reforma continua em construção — o escritório precisa de uma rotina de acompanhamento, não de uma leitura única.

| Fonte | O que monitorar |
|---|---|
| **Emenda Constitucional 132/2023** | Texto-base da reforma — raramente muda, mas é a referência para interpretar tudo o resto |
| **Lei Complementar 214/2025** | Regulamentação principal do IBS, CBS e Imposto Seletivo — sujeita a alterações por novas leis complementares |
| **Decretos regulamentadores** (ex.: Decreto 12.955/2026, sobre a CBS) | Detalhamento operacional — mudam com mais frequência que a lei complementar |
| **Resoluções do Comitê Gestor do IBS (CGIBS)** (ex.: Resolução CGIBS 06/2026) | Regras operacionais do IBS — split payment, apuração assistida, cadastros |
| **Notas técnicas** dos ambientes de documento fiscal (NF-e, NFS-e, CT-e) | Leiautes técnicos, campos obrigatórios, cronograma de homologação de sistemas |
| **CGNFS-e, CGSN e CONFAZ, via Sinief** | Regras transitórias (até 31.12.2032) que ainda regem parte do ambiente de NFS-e e do Simples Nacional |

💡 **Dica de rotina**: registre a data de publicação de cada norma relevante e a data em que o escritório a incorporou à prática — isso cria um histórico defensável caso um cliente questione uma orientação dada antes de uma mudança normativa.

---

## 11. Checklist Final por Cliente — "Este Cliente Está Pronto?"

Repita este checklist para cada cliente da carteira:

- [ ] Classificação de regime feita e documentada (seção 2), com data e justificativa.
- [ ] Sistema emissor homologado e testado antes de 01.08.2026 (seção 4).
- [ ] Tabela de CST/cClassTrib por produto/serviço revisada e sem inconsistências (seção 5).
- [ ] Se elegível a regime diferenciado: simulação Regular x Diferenciado feita antes de setembro (seção 3).
- [ ] Se Simples Nacional: simulação "dentro/fora" feita para o ano corrente, com lembrete para repetir no ano seguinte (seção 3).
- [ ] Se tem bens imóveis, exportação, importação, venda ao governo, ou está na ZFM: regras específicas verificadas (seção 2, passos 5-7).
- [ ] Rotina de conferência mensal da apuração assistida definida com o cliente (seção 6).
- [ ] Cliente orientado sobre o impacto do Split Payment no fluxo de caixa (seção 7).
- [ ] DeRE identificada como obrigatória ou não, e incluída no calendário se aplicável (seção 8).

> Se todos os itens estão marcados, o cliente está com a base preparada. A partir daqui, a rotina passa a ser de manutenção: reclassificar quando a receita ou atividade mudar, repetir simulações anuais, e manter a auditoria de CST/cClassTrib ativa a cada novo produto ou serviço cadastrado.
