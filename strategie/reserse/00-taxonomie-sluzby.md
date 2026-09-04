# Fáze 1 – Taxonomie: co všechno může „kontinuální správa analytiky“ znamenat

Stav: hotovo (verze 1, 2026-09-04). Slouží jako jednotný slovník pro fáze 2–8. Každou nalezenou nabídku
na trhu mapujeme na kódy aktivit níže (`A1`–`I3`), aby se dala srovnávat.

Tento dokument je **rámec**, ne výsledek rešerše. Vychází z technické znalosti GA4/GTM/BigQuery stacku a
z aktuální nabídky DataLayer.cz (`datalayer-web/app/lib/services.ts`). Tvrzení o tom, co trh reálně
nabízí, přinesou fáze 2–6.

---

## 1. Vrstvy a aktivity

Sloupec **Bez BQ** říká, zda se aktivita dá dělat pro klienta, který nemá GA4 export do BigQuery:
**ano** = plně, **částečně** = jen omezeně / ručně / s menší spolehlivostí, **ne** = bez exportu to nejde.
Sloupec **Auto** říká, zda to dnes umí zautomatizovat nástroj (viz fáze 6): **A** = ano, běžně, **Č** = částečně, **N** = ne, potřebuje člověka.

### A. Sběr dat – tagging a GTM

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| A1 | QA měření po každém releasu webu (klíčové eventy, e-commerce, formuláře) | při releasu | ano | Č |
| A2 | Změny a přidávání tagů/eventů podle požadavků marketingu | ad-hoc | ano | N |
| A3 | Verzování GTM, popisy verzí, changelog, práva uživatelů | průběžně | ano | Č |
| A4 | Validace dataLayer proti specifikaci (schéma, typy, povinná pole) | při releasu / denně | částečně | A |
| A5 | Provoz server-side GTM: Cloud Run, škálování, náklady, certifikáty, aktualizace image | průběžně / měsíčně | ano | Č |
| A6 | Úklid: mrtvé tagy, duplicitní triggery, nepoužívané proměnné | kvartálně | ano | Č |

### B. Consent a právní rámec

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| B1 | Kontrola, že se tagy chovají podle stavu souhlasu (consent mode v2, CMP) | při releasu / měsíčně | ano | Č |
| B2 | Sledování podílu souhlasů a jeho dopadu na měřená čísla (modelování konverzí) | měsíčně | částečně | Č |
| B3 | Reakce na změny CMP, legislativy a požadavků Googlu (např. povinné consent signály pro Ads) | při změně | ano | N |

### C. GA4 property – hygiena a konfigurace

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| C1 | Klíčové události/konverze, vlastní dimenze a metriky, kvóty na ně | měsíčně | ano | Č |
| C2 | Retence dat, Google Signals, thresholding, reporting identity | kvartálně | ano | N |
| C3 | Referral exclusions, cross-domain, unwanted referrals (platební brány) | měsíčně | ano | Č |
| C4 | Podíl (not set), (direct)/(none), self-referrals, kvality UTM | měsíčně | ano | A |
| C5 | Reakce na změny GA4 (nové/odebrané funkce, změny API a limitů) | při změně | ano | N |
| C6 | Správa přístupů, propojení (Ads, Search Console, Merchant Center, BigQuery) | kvartálně | ano | N |

### D. Reklamní platformy a konverze

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| D1 | Import konverzí do Google Ads, enhanced conversions, konzistence s GA4 | měsíčně | ano | Č |
| D2 | Meta pixel + Conversions API: deduplikace, event match quality, výpadky | měsíčně | ano | Č |
| D3 | Sklik, Bing, TikTok, LinkedIn – konverzní kódy a jejich funkčnost | měsíčně | ano | Č |
| D4 | UTM konvence, auto-tagging, kontrola kampaní bez parametrů | měsíčně | ano | A |
| D5 | Srovnání konverzí napříč platformami vs. GA4 vs. backend e-shopu | měsíčně | částečně | Č |

### E. Datová vrstva v BigQuery

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| E1 | Monitoring GA4 → BQ exportu: přišla denní tabulka, počet eventů v normě, zpoždění | denně | ne | A |
| E2 | Hlídání nákladů BQ (storage, dotazy, scheduled queries) a rozpočtových alertů | měsíčně | ne | A |
| E3 | Údržba transformací (Dataform/dbt/SQL), změny schématu GA4 exportu | při změně | ne | Č |
| E4 | Historizace a zálohy (obcházení 14-měsíční retence GA4) | průběžně | ne | A |
| E5 | Spojení GA4 dat s ad-platformami, CRM, ERP, e-shop backendem | při změně | ne | Č |
| E6 | Konektory do BQ z ad-platforem (Data Transfer, Fivetran, Airbyte…): tokeny, změny API, limity | měsíčně | ne | Č |

### F. Reporting a dashboardy

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| F1 | Údržba Looker Studio / Power BI dashboardů: rozbité zdroje, nová pole, výkon | měsíčně | ano | Č |
| F2 | Údržba nativních konektorů (Supermetrics, Windsor, Dataslayer…): tokeny, kvóty, změny API | měsíčně | ano | Č |
| F3 | Měsíční komentovaný report (co se stalo, proč, co s tím) | měsíčně | ano | N |
| F4 | Kvartální review měřicího plánu a KPI s klientem | kvartálně | ano | N |
| F5 | Nové reporty/pohledy na vyžádání | ad-hoc | ano | N |

### G. Alerting a monitoring

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| G1 | Alert: propad/výpadek klíčového eventu (purchase, lead, add_to_cart) | denně / hodinově | částečně (GA4 API, Insights) | A |
| G2 | Alert: rozjetí GA4 revenue vs. backend e-shopu nad toleranci | denně | částečně (ručně/přes API) | A (s BQ) |
| G3 | Alert: skok v (not set), (direct), nové neznámé zdroje | denně / týdně | částečně | A |
| G4 | Tag monitoring: tag se nespustil / spustil chybně (GTM monitor template, sGTM logy) | real-time | ano | A |
| G5 | Uptime a chyby sGTM kontejneru | real-time | ano | A |
| G6 | Alert: výpadek exportu, konektoru, scheduled query | denně | ne (pro BQ) / ano (pro konektor) | A |
| G7 | **Reakce na alert**: diagnóza, oprava nebo eskalace k vývojářům, zápis do changelogu | při alertu | ano | N |

### H. Změnové řízení a komunikace

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| H1 | Konzultace s vývojáři před releasy, review dataLayer specifikace nových featur | při releasu | ano | N |
| H2 | Aktualizace měřicího plánu / dokumentace jako živého dokumentu | průběžně | ano | N |
| H3 | Ad-hoc dotazy typu „proč tohle číslo vypadá takhle“ | ad-hoc | ano | N |
| H4 | Onboarding nových lidí klienta/agentury do měření a reportů | ad-hoc | ano | N |
| H5 | Komunikační kanál a reakční doba (Slack/e-mail, SLA) | průběžně | ano | N |

### I. Analytická práce (typicky mimo „správu“, ale často v retaineru)

| Kód | Aktivita | Frekvence | Bez BQ | Auto |
|-----|----------|-----------|--------|------|
| I1 | Ad-hoc analýzy (funnel, kohorty, LTV, atribuce) | ad-hoc | částečně | N |
| I2 | Podpora experimentů (A/B testy, měření variant) | ad-hoc | částečně | N |
| I3 | Pokročilé modely (predikce, segmentace, ML) | projektově | ne | N |

---

## 2. Co říká taxonomie k hypotéze H1 (BQ-first) – předběžně

Z tabulky vyplývá, že **bez BigQuery jde dělat většinu aktivit A–D a F–H**. BigQuery je nutné pro vrstvu E
a výrazně zlepšuje G1–G3 (spolehlivé, historické, dotazovatelné anomálie). Tedy:

- Správa **bez exportu** není prázdná: je to hlavně A (QA po releasech), C (hygiena), D (konverze v ad
  platformách), F1–F3 (údržba reportů + komentář) a G4/G5 (tag monitoring). Anomálie se hlídají hůř
  (GA4 Insights, Data API + skript, nebo ručně).
- Správa **s exportem** přidává E (celá vrstva), robustní G1–G3, G6 a otevírá I.
- To zatím **oslabuje H1** v silné podobě („bez BQ není co spravovat“) a podporuje spíš dvouúrovňový model.
  Rozhodne až fáze 7 (mají klienti bez BQ reálné painy?) a fáze 2–5 (prodává někdo správu bez BQ?).

## 3. Metriky rozsahu, podle kterých se v praxi může cenit

Pro každou nabídku na trhu zaznamenat, které z těchto os používá k odstupňování ceny:

| Osa | Příklady hodnot | Poznámka |
|-----|-----------------|----------|
| Počet webů / GA4 property / GTM kontejnerů | 1 / 2–5 / 5+ | nejčastější osa u SaaS nástrojů |
| Traffic nebo objem eventů | do 100k sessions/měs, do 1M, nad 1M | souvisí s náklady BQ a s významem výpadků |
| Počet releasů webu za měsíc | 0–1 / 2–4 / průběžný deploy | určuje množství A1 práce |
| Počet reklamních platforem | 1–2 / 3–4 / 5+ | určuje D práci |
| Počet dashboardů/reportů | 1 / 2–5 / 5+ | určuje F práci |
| Hodiny v ceně | 5 / 10 / 20 / 40 h | model retaineru |
| Reakční doba | další pracovní den / 4 h / 1 h | SLA osa |
| BigQuery ano/ne | – | zásadní pro E a G |
| Server-side GTM ano/ne | – | provozní náklad + A5, G5 |
| Komentovaný report ano/ne, kvartální review ano/ne | – | „lidská“ přidaná hodnota |

## 4. Katalog spouštěčů problémů (výchozí seznam pro pain research, fáze 7)

Kódy pro sloupec `what_broke` v `data/pain-log.csv`:

| Kód | Co se stalo | Typicky rozbije |
|-----|-------------|-----------------|
| `release_web` | release / redesign / změna šablony, nový checkout | dataLayer, eventy, e-commerce |
| `platform_migration` | migrace e-shopu (Shoptet→vlastní, WooCommerce→Shopify…) | všechno |
| `consent_change` | nový CMP, změna consent mode, změna textů lišty | podíl měřených uživatelů, Ads konverze |
| `gtm_change_dev` | někdo (dev, jiná agentura) změnil GTM bez koordinace | tagy, triggery, duplicity |
| `ga4_change` | Google změnil GA4 (limity, retence, API, atribuce, thresholding) | reporty, srovnatelnost |
| `ad_platform_change` | Meta CAPI, Google Ads enhanced conversions, Sklik změny | import konverzí, deduplikace |
| `browser_change` | ITP, ad-blockery, změny cookies | podíl měřených, atribuce |
| `connector_token` | vypršel token / limit konektoru (Supermetrics, Windsor, Data Transfer) | dashboardy se zastaví |
| `bq_export_gap` | export nepřišel / přišel pozdě / částečně | BQ reporty, alerty |
| `bq_cost_spike` | neefektivní dotazy, chybějící partition filtr | faktura GCP |
| `revenue_mismatch` | GA4 revenue vs. backend se rozjely | důvěra v data, optimalizace kampaní |
| `utm_chaos` | kampaně bez UTM, nekonzistentní pojmenování | atribuce, reporty |
| `access_lost` | odešel člověk, který měl přístupy; agentura drží účet | vše |
| `unknown_owner` | nikdo neví, co který tag dělá a proč | strach cokoli měnit |

## 5. Co z toho bereme do dalších fází

- Agenti ve fázích 2–6 označují u každé nabídky **kódy aktivit** (např. `A1, A2, C1, D1, F1, F3, G7, H3`),
  osy rozsahu z části 3 a hodnotu `requires_bq`.
- Fáze 7 používá kódy z části 4 ve sloupci `what_broke`.
- Fáze 8 z toho složí matici aktivit × konkurenti a rozhodne, co je standard a co diferenciátor.
