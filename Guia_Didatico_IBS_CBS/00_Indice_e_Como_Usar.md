# Guia Didático Completo — IBS e CBS (Reforma Tributária do Consumo)
### Da Incidência à Prática da Apuração Assistida

---

## 1. Escolha por onde começar

Você **não precisa** ler os 18 módulos na ordem numérica dos arquivos. Escolha o ponto de entrada que combina com seu momento e siga a trilha indicada:

| Se você é… | Comece por… | Depois siga para… |
|---|---|---|
| **Empresário** e só quer saber "o que muda no meu negócio" | [Módulo 16 — Guia do Empresário](16_Guia_do_Empresario.md) | as seções **"Visão Geral para Empresários"** dos módulos do seu setor |
| **Contador / escritório** operando a transição | [Módulo 17 — Guia do Contador](17_Guia_do_Contador.md) | [Módulo 13 (mapa de regimes)](13_Guia_Comparativo_de_Regimes.md) → [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md) → [18](18_Transicao_PIS_Cofins_para_CBS.md) |
| **Introdução para Profissionais de Contabilidade** | [Módulo 01](01_Panorama_da_Reforma_e_Legislacao.md), lendo as duas primeiras seções de cada módulo (**Visão Geral** + **Introdução para Profissionais de Contabilidade**) | a **Trilha Completa** (seção 3 abaixo), em ordem |
| **Analista fiscal experiente** | direto ao tema que precisa (use o **Mapa de Conexões**, seção 4) | as seções técnicas de cada módulo (**O que é / Como funciona na prática** e **Regras de Ouro e Exceções / Impacto Sistêmico**) |
| Com dúvida de **"quem se credita nessa operação?"** | [Módulo 13, seção 13.3 — Tabela Mestra de Quem se Credita](13_Guia_Comparativo_de_Regimes.md) | — |

---

## 2. Como cada módulo é organizado

Todo módulo repete a **mesma estrutura de raciocínio**, do mais simples ao mais técnico. Não são rótulos abstratos — são as **próprias seções (títulos)** que você encontra dentro de cada módulo, nesta ordem. Leia até a camada que você precisa e pare:

1. **Visão Geral para Empresários** — o que é, por que importa para um negócio, com exemplo do dia a dia. Sem juridiquês, sem código de sistema.
2. **Introdução para Profissionais de Contabilidade** — a ponte com o que você já conhece (ICMS, ISS, PIS, Cofins, IPI), glossário do módulo e dica de rotina de escritório.
3. **O que é / Para que serve / Como funciona na prática** — a explicação técnica completa, com fórmulas e exemplos numéricos "antes e depois".
4. **Regras de Ouro e Exceções / Impacto Sistêmico e Operacional** — a camada do analista: prazos que matam o direito, vedações, CST, cClassTrib, campos de XML, eventos de DF-e e as rejeições que o sistema devolve se você errar.

> **Por que essa estrutura importa:** errar um código não é detalhe estético — é dinheiro saindo do caixa errado, crédito que não nasce, ou documento rejeitado. O guia trata o IBS/CBS como um **sistema vivo**: nasce no fato gerador, gera crédito, é pago via Split Payment, é validado pela apuração assistida e o tempo todo se materializa em CST, cClassTrib e eventos de DF-e.

---

## 3. A Trilha Completa — leia nesta ordem para "ligar os pontos"

A ordem segue a **numeração dos módulos (01 → 18)**, que reproduz o **ciclo de vida de um fato gerador**: ele nasce, se localiza no espaço e no tempo, gera crédito e débito, é pago, pode ser beneficiado por um regime especial, vira documento fiscal e, ao fim, é fiscalizado. Cada etapa prepara a próxima.

### 🟦 Bloco A — Fundamentos: o sistema nasce (Módulos 01–04)
> *Leia este bloco inteiro antes de qualquer regime especial. É a base de tudo.*

| Ordem | Módulo | O que resolve | Conecta com |
|---|---|---|---|
| 1 | [01 — Panorama e Legislação](01_Panorama_da_Reforma_e_Legislacao.md) | O que é o IVA Dual (IBS+CBS), comparativo Hoje × Depois, base legal e **linha do tempo** da transição | A linha do tempo é detalhada em [18](18_Transicao_PIS_Cofins_para_CBS.md) (extinção de PIS/Cofins) e operacionalizada em [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md) (datas de DF-e) |
| 2 | [02 — Fato Gerador e Aspecto Material](02_Fato_Gerador_e_Aspecto_Material.md) | Quando há operação tributável (onerosa e não onerosa), uso e consumo pessoal, brindes, e a **tabela completa de CST e cClassTrib** | A tabela de CST/cClassTrib é a espinha dorsal usada em [13.3](13_Guia_Comparativo_de_Regimes.md), [09](09_Regimes_Especificos_Setoriais.md) e na calculadora. O CST 620 (monofásico) liga a [09](09_Regimes_Especificos_Setoriais.md) e [18](18_Transicao_PIS_Cofins_para_CBS.md) |
| 3 | [03 — Não Incidência, Imunidades, Comércio Exterior](03_Nao_Incidencia_Imunidades_Comercio_Exterior.md) | Onde **não** incide: imunidades, exportação (inclusive fim específico), importação, compras governamentais | A anulação de crédito por imunidade/isenção liga a [05](05_Nao_Cumulatividade_Plena_e_Credito.md); a base de cálculo na importação liga a [04](04_Aspectos_Pessoal_Espacial_Temporal_Quantitativo.md) |
| 4 | [04 — Pessoal, Espacial, Temporal, Quantitativo](04_Aspectos_Pessoal_Espacial_Temporal_Quantitativo.md) | **Quem** é contribuinte, **onde** o imposto é devido, **quando** nasce o fato gerador, **quanto** (base de cálculo e alíquotas) | "Quem é contribuinte" liga a [15](15_Simples_Nacional_na_Reforma.md) (Simples) e [09](09_Regimes_Especificos_Setoriais.md) (setores). A base de cálculo recebe o Imposto Seletivo de [10](10_Imposto_Seletivo.md) |

### 🟩 Bloco B — Crédito, pagamento e fiscalização (Módulos 05–07)
> *Como o imposto efetivamente circula, é pago e é controlado.*

| Ordem | Módulo | O que resolve | Conecta com |
|---|---|---|---|
| 5 | [05 — Não Cumulatividade Plena e Crédito](05_Nao_Cumulatividade_Plena_e_Credito.md) | Crédito amplo × crédito físico, vedações, estornos, devolução/cancelamento/correção do débito | As vedações de uso pessoal retomam [02](02_Fato_Gerador_e_Aspecto_Material.md); o **crédito presumido** é a exceção detalhada em [08](08_Regimes_Diferenciados_e_Credito_Presumido.md); "quem se credita" é consolidado em [13.3](13_Guia_Comparativo_de_Regimes.md) |
| 6 | [06 — Pagamento, Split Payment, Apuração Assistida](06_Pagamento_Split_Payment_Apuracao_Assistida.md) | As 5 formas de pagamento, o Split Payment, a apuração assistida e o ressarcimento de saldo credor | A apuração assistida é alimentada pelos DF-e de [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md); o Split Payment reaparece em [09](09_Regimes_Especificos_Setoriais.md) (combustíveis) e [15](15_Simples_Nacional_na_Reforma.md) |
| 7 | [07 — Penalidades e Programas Especiais](07_Penalidades_e_Programas_Especiais.md) | Multas e infrações (em UPF/IBS), reequilíbrio de contratos públicos, cashback e sorteios fiscais | A multa de Manifestação do Destinatário liga ao evento de DF-e de [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md); compras governamentais complementam [03](03_Nao_Incidencia_Imunidades_Comercio_Exterior.md) |

### 🟨 Bloco C — Regimes especiais e setoriais (Módulos 08–11)
> *Quando a regra geral não se aplica. Perdeu-se entre "diferenciado" e "específico"? O mapa comparativo é o [Módulo 13](13_Guia_Comparativo_de_Regimes.md) (Bloco D) — consulte-o a qualquer momento.*

| Ordem | Módulo | O que resolve | Conecta com |
|---|---|---|---|
| 8 | [08 — Regimes Diferenciados e Crédito Presumido](08_Regimes_Diferenciados_e_Credito_Presumido.md) | Alíquotas reduzidas (cesta básica, saúde, educação, profissões intelectuais) e crédito presumido (produtor rural, TAC, reciclagem, bem móvel usado) | O crédito presumido reaparece na [11](11_Zona_Franca_de_Manaus_e_Regimes_Aduaneiros.md) (ZFM); mecânica-base de crédito vem de [05](05_Nao_Cumulatividade_Plena_e_Credito.md); consolidado no mapa [13](13_Guia_Comparativo_de_Regimes.md) |
| 9 | [09 — Regimes Específicos Setoriais](09_Regimes_Especificos_Setoriais.md) | Combustíveis, serviços financeiros (+**DeRE**), planos de saúde, cooperativas, bares/restaurantes, hotelaria/parques, transporte, turismo, futebol (SAF/TEF) | Quem se credita em cada setor → [13.3](13_Guia_Comparativo_de_Regimes.md); o monofásico de combustíveis contrasta com o monofásico de PIS/Cofins de [18](18_Transicao_PIS_Cofins_para_CBS.md); seguros migram do IOF ([18](18_Transicao_PIS_Cofins_para_CBS.md)) para cá |
| 10 | [10 — Imposto Seletivo](10_Imposto_Seletivo.md) | O "imposto do pecado": hipóteses, base de cálculo, alíquotas ad rem/ad valorem | **Soma-se** ao IBS/CBS e entra na base de cálculo deles ([04](04_Aspectos_Pessoal_Espacial_Temporal_Quantitativo.md)); incide uma única vez, sem crédito |
| 11 | [11 — Zona Franca de Manaus e Regimes Aduaneiros](11_Zona_Franca_de_Manaus_e_Regimes_Aduaneiros.md) | ZFM (créditos presumidos regionais 7,5%/13,5%, saída de indústria), regimes aduaneiros especiais, desoneração de bens de capital | Créditos presumidos dialogam com [08](08_Regimes_Diferenciados_e_Credito_Presumido.md); bens de capital **usados** na transição estão em [15](15_Simples_Nacional_na_Reforma.md) |

### 🟧 Bloco D — Operação, comparativos e casos específicos (Módulos 12–15)
> *O documento fiscal, o mapa que organiza os regimes, e dois casos que merecem capítulo próprio (imóveis e Simples).*

| Ordem | Módulo | O que resolve | Conecta com |
|---|---|---|---|
| 12 | [12 — Obrigações Acessórias, DF-e e Cadastros](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md) | Cadastros (CNPJ/CPF/CIB), todos os documentos fiscais eletrônicos, NFS-e, o **Fluxo Padrão de Preenchimento** (6 passos-base) | É a base operacional de **todos** os fluxos de preenchimento espalhados pelo guia (ver seção 5); alimenta a apuração assistida de [06](06_Pagamento_Split_Payment_Apuracao_Assistida.md) |
| 13 | [13 — Guia Comparativo de Regimes](13_Guia_Comparativo_de_Regimes.md) 🗺️ | **Mapa-mestre**: Regular × Simples; Regra Geral × Diferenciado × Específico. Inclui a **Tabela 13.3 — quem se credita** | Organiza, num só lugar, tudo que os módulos [08](08_Regimes_Diferenciados_e_Credito_Presumido.md), [09](09_Regimes_Especificos_Setoriais.md), [14](14_Regime_Especifico_Bens_Imoveis.md) e [15](15_Simples_Nacional_na_Reforma.md) detalham |
| 14 | [14 — Regime Específico de Bens Imóveis](14_Regime_Especifico_Bens_Imoveis.md) | Alienação, incorporação, loteamento, locação, permuta (torna), redutor de ajuste e social, **RET**, pessoas físicas contribuintes, CIB, **NF-e ABI (modelo 77)** | O RET (4%→1,92%) é explicado por dentro em [18](18_Transicao_PIS_Cofins_para_CBS.md); a NF-e ABI é um dos DF-e de [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md) |
| 15 | [15 — Simples Nacional na Reforma](15_Simples_Nacional_na_Reforma.md) | IBS/CBS dentro ou fora do Simples, sublimite, Anexos I/II, MEI, novas multas, bens de capital usados, saldo credor de ICMS, fundo de compensação | A decisão dentro/fora usa o mapa de [13](13_Guia_Comparativo_de_Regimes.md); saldo credor de ICMS e fundo de compensação são peças da transição de [01](01_Panorama_da_Reforma_e_Legislacao.md)/[18](18_Transicao_PIS_Cofins_para_CBS.md) |

### 🟪 Bloco E — Guias práticos e transição (Módulos 16–18)
> *Os dois guias de consulta permanente (16 e 17) e o fechamento da linha do tempo, com o desligamento de PIS/Cofins (18).*

| Ordem | Módulo | Para quem / O que traz |
|---|---|---|
| 16 | [16 — Guia do Empresário](16_Guia_do_Empresario.md) | **Dono de negócio** — ficha-resumo de todos os regimes, árvore de decisão Regular × Simples, calendário mestre de prazos, checklist de emissão, tabela de multas, alertas do que costuma ser esquecido |
| 17 | [17 — Guia do Contador](17_Guia_do_Contador.md) | **Escritório de contabilidade** — gestão de carteira na transição, prazos por decisão de cliente, certificação de sistemas, auditoria de CST/cClassTrib, DeRE, split payment na conciliação, erros comuns de onboarding |
| 18 | [18 — Transição de PIS/Cofins para a CBS](18_Transicao_PIS_Cofins_para_CBS.md) | **Fechamento da transição** — regime atual de PIS/Cofins (cumulativo × não cumulativo) e sua extinção: créditos de transição (estoque, depreciação, devolução), monofásico, PIS-Folha, retenções, IOF-Seguros e por que o RET cai de 4% para 1,92%. Fecha a linha do tempo de [01](01_Panorama_da_Reforma_e_Legislacao.md); **não se aplica** ao Simples ([15](15_Simples_Nacional_na_Reforma.md)) |

---

## 4. Mapa de Conexões — como os módulos "conversam"

Alguns conceitos atravessam vários módulos. Se você entender **onde cada fio começa e termina**, o sistema deixa de parecer 18 assuntos soltos:

- **CST e cClassTrib** — nascem na [02](02_Fato_Gerador_e_Aspecto_Material.md) → aparecem em cada regime ([08](08_Regimes_Diferenciados_e_Credito_Presumido.md), [09](09_Regimes_Especificos_Setoriais.md), [14](14_Regime_Especifico_Bens_Imoveis.md)) → são conferidos em [17](17_Guia_do_Contador.md) → resumidos na Tabela [13.3](13_Guia_Comparativo_de_Regimes.md).
- **Crédito ao adquirente ("gera crédito?")** — regra geral em [05](05_Nao_Cumulatividade_Plena_e_Credito.md) → exceção do crédito presumido em [08](08_Regimes_Diferenciados_e_Credito_Presumido.md) → vedações setoriais em [09](09_Regimes_Especificos_Setoriais.md) → tudo consolidado, cenário a cenário, na Tabela [13.3](13_Guia_Comparativo_de_Regimes.md).
- **Monofásico** — dois regimes diferentes com o mesmo apelido: o de **combustíveis** (IBS/CBS, sobrevive) em [09](09_Regimes_Especificos_Setoriais.md); o **legado de PIS/Cofins** (farmacêuticos, cosméticos, autopeças, pneus, bebidas frias, cigarros — extinto em 2027) em [18](18_Transicao_PIS_Cofins_para_CBS.md). Ambos aparecem no CST 620 de [02](02_Fato_Gerador_e_Aspecto_Material.md) e no cálculo do Simples de [15](15_Simples_Nacional_na_Reforma.md).
- **Split Payment e apuração assistida** — definidos em [06](06_Pagamento_Split_Payment_Apuracao_Assistida.md) → dependem dos DF-e de [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md) → aparecem no Simples ([15](15_Simples_Nacional_na_Reforma.md)) e na conciliação do contador ([17](17_Guia_do_Contador.md)).
- **RET (imóveis)** — usado em [14](14_Regime_Especifico_Bens_Imoveis.md) → a decomposição de "por que 4% virou 1,92%" está em [18](18_Transicao_PIS_Cofins_para_CBS.md).
- **Linha do tempo da transição** — panorama em [01](01_Panorama_da_Reforma_e_Legislacao.md) → transição de ICMS/ISS/IPI e Simples em [15](15_Simples_Nacional_na_Reforma.md) → extinção de PIS/Cofins/IOF-Seguros em [18](18_Transicao_PIS_Cofins_para_CBS.md) → datas operacionais de DF-e em [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md).
- **DeRE (Declaração de Regimes Específicos)** — instituída para os setores de [09](09_Regimes_Especificos_Setoriais.md) → operada na rotina do escritório em [17](17_Guia_do_Contador.md).

---

## 5. Fluxos de Preenchimento de Nota — onde encontrar

Sempre que um cenário real justifica, o módulo traz um **"Fluxo de Preenchimento"**: passo a passo numerado de como montar o documento fiscal (finalidade, CST, cClassTrib, base de cálculo, grupos especiais). **Comece pelo Fluxo Padrão de 6 passos no [Módulo 12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md)** e depois veja as variações:

| Cenário | Módulo |
|---|---|
| Roteiro genérico (os 6 passos-base) | [12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md) |
| Venda comum, totalmente tributada | [02](02_Fato_Gerador_e_Aspecto_Material.md) |
| Venda para exportação (imune) | [03](03_Nao_Incidencia_Imunidades_Comercio_Exterior.md) |
| Antecipação de pagamento (parcelas antes da entrega) | [04](04_Aspectos_Pessoal_Espacial_Temporal_Quantitativo.md) |
| Devolução de mercadoria (com crédito já tomado) | [05](05_Nao_Cumulatividade_Plena_e_Credito.md) |
| Venda com Split Payment (pagamento via PIX) | [06](06_Pagamento_Split_Payment_Apuracao_Assistida.md) |
| Compra de produtor rural (crédito presumido) | [08](08_Regimes_Diferenciados_e_Credito_Presumido.md) |
| Conta de bar/restaurante (regime específico + taxa de serviço) | [09](09_Regimes_Especificos_Setoriais.md) |
| Venda de produto com Imposto Seletivo | [10](10_Imposto_Seletivo.md) |
| Permuta de imóveis com torna (NF-e ABI) | [14](14_Regime_Especifico_Bens_Imoveis.md) |
| Opção por recolher IBS/CBS dentro ou fora do Simples | [15](15_Simples_Nacional_na_Reforma.md) |

Cada fluxo termina com **duas interpretações**: o que a operação significa para **quem emite/vende** (débito) e para **quem recebe/compra** (crédito, ou a ausência dele) — porque todo documento fiscal tem dois lados.

---

## 6. Linha do tempo mestra (não perca estas datas)

- **07.07.2025 a 31.12.2026** — projeto piloto de testes da apuração assistida.
- **01.08.2026** — início da obrigatoriedade de emissão dos DF-e do IBS/CBS (Ato Conjunto RFB/CGIBS nº 1/2025).
- **até 30.09.2026** — janela para a opção por recolher IBS/CBS fora do Simples (1º semestre/2027), cancelável até **30.11.2026**.
- **01.09.2026 a 30.09.2026** — janela para opção pelo Regime Regular do IBS e da CBS.
- **01.01.2027** — vigência plena da CBS; início do Imposto Seletivo; início do regime específico de combustíveis; extinção de PIS/Cofins, PIS-Folha, IOF-Seguros e das retenções na fonte; IPI zerado (exceto ZFM).
- **2026–2032** — transição gradual (percentuais escalonados de ICMS/ISS e de diversos regimes, detalhados em cada módulo).
- **31.12.2032** — data-base do saldo credor de ICMS e do fim do Fundo de Compensação de Benefícios Fiscais.
- **2033** — sistema pleno (ICMS/ISS extintos).

> A ordem da **Trilha Completa** (seção 3) foi pensada para reproduzir o percurso lógico de um fato gerador: ele nasce ([02](02_Fato_Gerador_e_Aspecto_Material.md)), localiza-se no espaço e no tempo ([04](04_Aspectos_Pessoal_Espacial_Temporal_Quantitativo.md)), gera crédito e débito ([05](05_Nao_Cumulatividade_Plena_e_Credito.md)), é pago ([06](06_Pagamento_Split_Payment_Apuracao_Assistida.md)), pode ser beneficiado por um regime especial ([08](08_Regimes_Diferenciados_e_Credito_Presumido.md)/[09](09_Regimes_Especificos_Setoriais.md)) e, ao fim, é declarado ([12](12_Obrigacoes_Acessorias_DFe_e_Cadastros.md)) e fiscalizado ([07](07_Penalidades_e_Programas_Especiais.md)).
