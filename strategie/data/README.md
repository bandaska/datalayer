# Datové soubory rešerše

Všechny CSV mají hlavičku, oddělovač čárka, kódování UTF-8. Textová pole s čárkami v uvozovkách.

## pricing-dataset.csv – jedna nalezená cena = jeden řádek

- `pricing_model`: `retainer_hours` | `fixed_package` | `tiered` | `pct_of_spend` | `saas` | `hourly_rate` | `salary_proxy` | `marketplace_gig`
- `provider_type`: `analytics_agency` | `performance_agency` | `freelancer` | `saas_tool` | `job_ad` | `marketplace`
- `price_czk_month`: přepočet na CZK za měsíc (kurz uvést v `scope_notes`, pokud není EUR/USD ~ aktuální ČNB)
- `requires_bq`: `yes` | `no` | `optional` | `unknown`
- `scope_notes`: co je v ceně; pokud neznámo, zapsat `scope=unknown`

## evidence-log.csv – jeden důkaz = jeden řádek

- `phase`: číslo fáze plánu (1–10)
- `source_type`: `website` | `pricing_page` | `reddit` | `forum` | `linkedin` | `job_ad` | `github` | `case_study` | `review` | `podcast` | `interview`
- `quote_verbatim`: doslovný citát v původním jazyce
- `relates_to_rq`: např. `RQ2;RQ6`; `relates_to_hypothesis`: např. `H2`

## pain-log.csv – jeden syrový záznam problému = jeden řádek

- `segment`: `eshop_small` | `eshop_mid` | `eshop_large` | `b2b_leadgen` | `saas_marketplace` | `agency` | `unknown`
- `what_broke`: z katalogu ve fázi 7.2 (např. `release_web`, `consent_change`, `gtm_change_dev`, `ga4_change`, `ad_platform_change`, `connector_token`, `bq_export_gap`, `revenue_mismatch`)
- `pain_cluster`: doplní se až při syntéze (fáze 7.6)
