# Fáze 6 – SaaS nástroje jako cenová kotva a definice „monitoringu“

Stav: hotovo (verze 1, datum přístupu ke všem zdrojům **2026-09-04**). Odpovídá na RQ7 (+ podklady k RQ2, RQ5) a testuje H5.
Data: `data/fragments/06-pricing.csv` (127 řádků, P6-xxx), `06-evidence.csv` (69 řádků, E6-xxx), `06-pain.csv` (15 řádků, N6-xxx).
Kurz pro přepočty: 1 USD = 23 Kč, 1 EUR = 25 Kč; roční ceny děleny 12. Kódy aktivit (A1–I3) podle `00-taxonomie-sluzby.md`.

---

## 1. Shrnutí

1. **Detekce je komodita, reakce ne.** Za 0–2 500 Kč/měs dnes malý e-shop dostane automatické hlídání propadu eventů (GA4 custom insights zdarma, Metrics Watch 1 800 Kč, NiceLookingData 1 100 Kč), sGTM hosting s logy (Stape/Taggrs 460–550 Kč) a konfigurační audit GA4/GTM. Za 5 000–25 000 Kč/měs střední e-shop dostane monitoring reálného provozu (Trackingplan od 5 700 Kč) nebo Shopify per-kanál accuracy (Elevar 4 600–21 850 Kč). Enterprise tag governance (ObservePoint 13 800–55 200 Kč, DataTrue 30 700–61 300 Kč) se prodává s lidskými hodinami v tieru.
2. **Žádný nalezený nástroj nedělá G7 (reakce na alert) ani H1–H5 (komunikace, změnové řízení).** Naopak: nástroje samy prodávají člověka jako add-on – Elevar „ongoing tracking support“ 500 USD/měs (11 500 Kč), GAfix „service packages“ 199–499 USD, DataTrue 2–5 h/měs supportu v tieru, Tagmate 100 h/rok. **To je přímý důkaz pro H5** a zároveň cenová kotva pro lidskou vrstvu: trh už platí ~11 500 Kč/měs za „někdo se o tracking stará“ vedle nástroje.
3. **Bez BigQuery jde automatizovat víc, než taxonomie předpokládala** (G1, G3, G4, G5, C4, D4 přes GA4 Insights, Metrics Watch, Trackingplan, Stape, Checkly). Co bez BQ nejde spolehlivě: G2 (revenue vs. backend – jen Elevar pro Shopify), E-vrstva celá, historická diagnostika (Stape logy 3–10 dní). To oslabuje H1 v silné podobě, ale potvrzuje, že BQ přidává právě „forenzní“ vrstvu.
4. **Nativní Google možnosti jsou překvapivě silné, ale roztříštěné:** GA4 custom insights (50/property, hourly, e-mail), BQ scheduled queries (e-mail + Pub/Sub při selhání), Dataform assertions, Cloud Monitoring uptime checky (1 mil./měs zdarma), Looker Studio Pro nově uvádí alerty na graf. Chybí: notifikace o zpožděném BQ exportu, webhook na publish v GTM, push notifikace z Meta Events Manageru – vše je „polling + člověk“.
5. **Konektory (Supermetrics, Windsor, Funnel…) nejsou monitoring.** Ani jeden pricing nezmiňuje hlídání kvality dat; hlídají jen selhání vlastního přenosu (Fivetran e-mailem). Recenze Supermetrics: „Loses connection multiple times“ – tj. F2/E6 je reálná, opakující se lidská práce.

---

## 2. FAKTA

### 2a. Tabulka nástrojů

Ceny jsou veřejné ceníky (pokud není uvedeno „třetí strana“). Kódy = co nástroj **automaticky** pokrývá (aspoň částečně). Detail tierů v `06-pricing.csv`.

| Nástroj | Kategorie | Pricing URL | Tiery a ceny (originál) | Kč/měs | Čím škáluje | Hlídá (kódy) | Alert kam | BQ? | Cílový klient |
|---|---|---|---|---|---|---|---|---|---|
| ObservePoint | tag monitoring (enterprise) | observepoint.com/pricing (JS kalkulačka; ceny dle nicelookingdata/privado) | 1 000 scanů + 100 journeys/rok zdarma; 0,17 USD/scan; Essentials 599 USD/měs (4 000 scanů); Professional 2 400 USD/měs (20 000); Enterprise ~72 000 USD/rok | 13 800 / 55 200 / ~138 000 | page scans, journey runs | A1 (journeys), A4, A6, B1, G4 | e-mail (Slack nepotvrzen) | ne | enterprise (Microsoft, Disney, Roche…) |
| Tag Inspector (InfoTrust) | tag/privacy monitoring | infotrust.com/products/tag-inspector | neuvedeno (contact sales) | – | weby, scany | B1, G4 (PII realtime) | neuvedeno | ne | DPO, IT, enterprise |
| Trackingplan | data quality monitoring (real traffic) | trackingplan.com/pricing | 249–999 USD/měs (50k–500k MAU, ročně); Enterprise od 1 750 USD; agentury contact sales | 5 727 / 22 977 / 40 250+ | MAU | A1 (post-release diff), A4, B1 (modul), D2/D3 (pixel report), G1, G4 | „real-time alerts“ (kanál nespecifikován) | ne | analytické týmy, agentury, enterprise |
| DataTrue | tag monitoring (enterprise) | datatrue.com/pricing | Starter 16 000 USD/rok (2 domény, 10k scanů/měs); Team 32 000 USD/rok (+2 h/měs support); Enterprise custom (+5 h/měs) | 30 667 / 61 333 | domény, uživatelé, scany | A1 (journeys), A4, B1, G4 | e-mail | ne | enterprise, retail (Coles, Kmart), agentury |
| Elevar | Shopify tracking + monitoring | pricing přes třetí strany (attribuly 05/2026, PricingSaaS Q1/2026) | 0 / 200 / 450 / 950 USD/měs (100–50 000 obj.); nově Core 225 / Advanced 650 / Premium 1 250; add-on „ongoing tracking support“ 500 USD/měs | 4 600 / 10 350 / 21 850; add-on 11 500 | objednávky/měs | D1, D2, D3, **D5/G2 (Channel Accuracy: Shopify objednávky vs. konverze per kanál)**, G4 (server events log) | e-mail | ne | Shopify e-shopy (DTC) |
| Tracify | server-side atribuce (DE) | tracify.ai/pricing | od 500 EUR/měs, dál po demu | 12 500+ | neuvedeno | D5 (atribuce), B2 (tvrzení) | – | ne | DE e-shopy, lead-gen, agentury |
| Littledata | Shopify data pipeline | littledata.io/pricing | Flex 0,35 USD/obj.; Scale 159 USD (1 500 obj.); Plus 792 USD (10 000 obj.) | 3 657 / 18 216 | objednávky | D1, D2 (pipeline, ne monitoring) | – | ne | Shopify, subscription e-shopy |
| Analytics Debugger | debug rozšíření | analytics-debugger.com | zdarma | 0 | – | (A1 ručně) | – | ne | analytici |
| Analytics Mania audit | ruční audit (služba) | analyticsmania.com/ga4-auditor | neuvedeno | – | – | (C1–C3 jednorázově) | – | ne | firmy bez interního analytika |
| GA4 Auditor (ga4auditor.com) | jednorázový GA4 audit | saasworthy/nicelookingdata | 79 (jinde 99) USD jednorázově; Agency 349 / Agency Pro 749 USD/měs; 999 USD/rok = 100 auditů | 8 027 / 17 227 | audity | C1, C2, C3, A6 (point-in-time, „no continuous monitoring“) | PDF/PPT report | ne | agentury (white-label) |
| Tagmate | GTM automatizace | saasworthy/Capterra (doména tagmate.app vracela cizí obsah) | 79 / 299 / 499 USD/měs (1 / 5 webů; agenturní tier vč. 100 h/rok služeb) | 1 817 / 6 877 / 11 477 | weby, eventy | A2 (šablony), A1 (debugger) | – | ne | SMB, agentury |
| JENTIS | server-side tracking (AT) | jentis.com/pricing | Core / Professional / Enterprise – contact sales | – | neuvedeno | A5, G5 (Health Center), B2 (recovery) | Health Center | ne | mid-market, enterprise, EU |
| TAGGRS | sGTM hosting (NL) | taggrs.io/prices | 0 / 22 / 57 / 127 EUR/měs (10k / 750k / 3M / 10M req.); Enterprise custom | 0 / 550 / 1 425 / 3 175 | requests/měs | A5, G5 („24/7“ bez SLA) | neuvedeno | ne | marketéři bez tech. zázemí, agentury |
| Stape | sGTM hosting | stape.io (pricing dle hardal/datascale) | Free 10k; Pro 20 USD (17 ročně) 500k; Business 100 USD (83) 5M; Enterprise 167 USD 20M; Custom | 0 / 460 / 2 300 / 3 841 | requests/měs, 1 kontejner = 1 web | A5, G5 (**monitoring až od Business**), logy 3/10 dní | dashboard, notifikace (Capterra) | ne | SMB až enterprise |
| Addingwell | sGTM hosting (FR) | addingwell.com/pricing | 90 / 120 / 210 / 360 / 640 / 1 190 EUR/měs (1M–100M req.) + add-ony | 2 250 – 29 750 | requests, kontejnery, domény | A5 | neuvedeno | ne | agentury, enterprise |
| Cloud Run (vlastní sGTM) | infra | stape.io blog | min. 3 × ~40 USD = 120 USD/měs; provoz 240–300 USD; logy +~100 USD/500k req. | 2 760 – 6 900 | instance, requesty, logy | A5 (+Cloud Monitoring pro G5) | Cloud Monitoring | ne | kdo chce vlastní GCP |
| Avo | tracking plan + Inspector | avo.app/pricing | Free (2 editoři, 100k ev.); Team 300 USD (250 ročně); Enterprise | 0 / 6 900 | sedadla, eventy, zdroje | A4 (schéma v produkci), H2 (živý tracking plan – nástroj, ne práce) | Slack | ne | produktové/data týmy |
| Segment Protocols | schema validation | twilio.com/pricing/customer-data | add-on, contact sales | – | MTU | A4 | Segment | ne | enterprise CDP |
| Amplitude Data | governance | amplitude.com/pricing | jen Growth/Enterprise, custom | – | eventy | A4 | – | ne | produktová analytika |
| Metrics Watch Alerts | GA4 alerting | metricswatch.com/pricing | Basic 79 (3 alerty, 15 min) / Starter 99 / Professional 299 USD/měs (ročně 66/83/249); Enterprise custom; Reports 49/149/399 | 1 817 / 2 277 / 6 877 | počet alertů, rychlost detekce | **G1, G3, C4, D4** (metriky × dimenze, anomálie i prahy) | e-mail, Slack (od Starter) | ne | e-shopy, agentury („Stop flying blind on your GA4 data“) |
| Whatagraph | agenturní reporting | whatagraph.com/pricing | Max 699 EUR/měs (ročně, 50 source credits); Prime custom | 17 475 | source credits | F3 (čísla, ne komentář), G1 („Goals & alerts“) | e-mail | ne (Prime: BQ transfer) | agentury 20+ klientů |
| AgencyAnalytics | agenturní reporting | agencyanalytics.com/pricing | 20 USD/klient/měs (ročně); Enterprise 25+ klientů | 460/klient | klienti | F3 (čísla), G1 (alerty, anomaly detection) | neuvedeno | ne | agentury |
| DashThis | reporting | dashthis.com/pricing | 44 / 139 / 279 / 429 USD/měs (3 / 10 / 25 / ∞ dashboardů) | 1 012 – 9 867 | dashboardy | F3 (čísla) | – (bez alertů) | ne | agentury, marketing týmy |
| Databox | KPI dashboardy | databox.com/pricing | Free / Analyst 64 / Pro 159 / Growth 399 USD/měs (ročně) | 0 / 1 472 / 3 657 / 9 177 | zdroje (+5,60 USD), uživatelé | G1 (anomaly detection v placených), F3 (čísla) | Slack + notifikace od Pro | ne | SMB, agentury |
| Reportz | reporting | reportz.io/pricing | 9,90 USD/dashboard/měs | 228/dashboard | dashboardy | F3 (čísla) | – | ne | malé agentury |
| Supermetrics | konektor | supermetrics.com/pricing | Starter 55 (44 ročně) / Growth 222 (177) USD/měs; Enterprise custom (jediný s BQ) | 1 265 / 5 106 | zdroje, účty, uživatelé, destinace | F2 (přenos; hlídání selhání nezmíněno) | – | BQ jen Enterprise | agentury, marketing týmy |
| Funnel.io | konektor/hub | funnel.io/pricing | Starter 300 / Business 600 USD/měs (ročně); Enterprise | 6 900 / 13 800 | konektory, destinace | E5/E6 (od Business BQ, „data guarantee“) | – | BQ od Business | mid-market, agentury |
| Windsor.ai | konektor | windsor.ai/pricing | Free / 23 / 118 / 299 / 598 USD/měs; Enterprise | 0 / 529 / 2 714 / 6 877 / 13 754 | zdroje, účty | E6, F2 (BQ i Looker Studio ve všech plánech) | – | BQ ve všech | SMB, agentury |
| Dataslayer | konektor (ES) | dataslayer.ai/pricing (ceny z FAQ) | 29 / 99 / 299 EUR/měs (ročně); Business custom | 725 / 2 475 / 7 475 | konektory, účty, řádky do DWH | F2, E6 (omezené řádky), „Alerts Agent“ od Advanced | AI agent | BQ omezeně | agentury |
| Adverity | enterprise data hub | adverity.com/pricing | jen individuální nabídka | – | – | E5/E6, „Monitor“ produkt (stránka nedostupná) | – | ano | enterprise, velké agentury |
| Fivetran | ELT | fivetran.com/pricing | Free 500k MAR; Standard usage-based; Enterprise/BC custom | 0 / usage | MAR, konektory | E6, G6 (alerty: zdroj/destinace/konfigurace) | e-mail | ano | data týmy |
| Airbyte Cloud | ELT | airbyte.com/pricing | Standard od 10 USD/měs (objem); Pro/Enterprise custom; Core OSS zdarma | 230+ | objem dat | E6 | – | ano | data týmy |
| Porter Metrics | Looker Studio konektory | portermetrics.com/en/pricing | 12,50 USD/účet/měs ročně (15 měsíčně); 5–12 účtů 8 USD/účet; 13–20 účtů flat 100 USD | 288/účet; 2 300 flat | data-source účty | F2 | – | ne | malé agentury |
| Coupler.io | konektor | coupler.io/pricing | Free / 32 / 132 / 259 USD/měs (24/99/199 ročně) | 0 / 736 / 3 036 / 5 957 | účty, destinace, refresh | F2, E6 (BQ ve všech) | – | BQ ve všech | SMB, agentury |
| Improvado | enterprise data hub | improvado.io/pricing | Free limited; MCP Only 100 USD/měs; Advanced/Enterprise custom (governance rules 50/100) | 2 300 / custom | řádky/rok, workspacy | E5, D4/D5 (governance rules, „Get notified of any data, campaign or ops issues“) | notifikace | ano | 25M+ USD ad spend |
| Keboola (CZ) | data platforma | keboola.com/pricing | Free 60 min compute/měs, 0,14 USD/min; Enterprise custom | 0 / usage | compute minuty | E3, E5, E6 | – | vlastní DWH | data týmy, CZ enterprise |
| Meiro (CZ) | CDP | meiro.io/pricing | Start / Pro / Enterprise – contact sales | – | event volume | – (CDP, ne monitoring) | – | ne | enterprise |
| Checkly | syntetické testy (Playwright) | checklyhq.com/pricing | Hobby 0 (1k browser runs); Starter 24; Team 64 USD/měs (ročně); Enterprise | 0 / 552 / 1 472 | check runs, uživatelé | **A1/G4 jako postup:** Playwright průchod checkoutem + kontrola dataLayer/requestů každé 2+ min; G5 (uptime) | e-mail, Slack, webhook, SMS, PagerDuty | ne | dev/SRE týmy; pro analytiku „DIY“ |
| Verified Data | GA4 audit + monitoring, consent crawl | verified-data.com/pricing | ANALYTICS 0 / 99 / 149 / 249 EUR (1 / 5 / 10 / 25 streamů); CONSENT 249 / 399 / 699 EUR (5 / 10 / 25 projektů) | 2 475 / 3 725 / 6 225; consent 6 225 – 17 475 | streamy, projekty | C1–C4, A6 (60+ checků, PII), B1 (consent-state crawl 100 stránek) | denní/týdenní/měsíční alerty | ne | agentury (partner program), governance |
| NiceLookingData | GA4+GTM audit + Daily Pulse | nicelookingdata.com/pricing | Free (3 audity/měs) / Pro 49 / Agency 199 USD/měs | 0 / 1 127 / 4 577 | audity, workspacy | C1–C4, A6, A3 (GTM checky), **cross-check GTM↔GA4**, G1/G3 (Daily Pulse) | e-mail (score-drop, anomálie, pondělní digest) | ne | marketéři, agentury |
| GAfix.ai | jednorázový audit + lidské balíčky | gafix.ai/pricing | audit 0 / 49 / 198 USD (5 ks); service packages Bronze 199 / Silver 299 / Gold 499 USD (3–10 oprav) | jednorázově | audity | C1–C3, A6 (point-in-time) | Excel | ne | SMB |
| Simo Ahava GTM Monitor | open-source tag monitoring | simoahava.com | zdarma + GCP náklady (Cloud Function, BQ) | ~0 | – | **G4** (firing status každého tagu) | vlastní (BQ → Looker Studio / SQL alert) | ano (cíl) | kdo si to postaví |
| Datadog / Sentry | APM/log monitoring pro sGTM | – (jen zmínka) | – | – | hosty, logy | G5 (chyby sGTM kontejneru, latence) – jen pro vlastní Cloud Run | Slack, PagerDuty | ne | dev týmy; pro analytiku overkill |

### 2b. Nativní možnosti zdarma – co jde a co nejde

| Možnost | Co jde (ověřeno v dokumentaci) | Co nejde / limity | Kódy | BQ? |
|---|---|---|---|---|
| **GA4 Insights – automated** | „detects unusual changes or emerging trends in your data and notifies you automatically, on the Insights dashboard“ | jen v UI GA4, bez konfigurace prahů, bez garance kanálu | G1, G3 (pasivně) | ne |
| **GA4 Insights – custom** | až **50 custom insights / property**; frekvence hourly (jen web) / daily / weekly / monthly; metrika × podmínka × práh, nebo „Has anomaly“; segment podle dimenze; **e-mail** vybraným uživatelům | jen e-mail (žádný Slack/webhook); hourly ne pro app; uchování 1 rok; nelze porovnat s externím zdrojem (backend); kvalita anomálie závisí na historii | **G1, G3, C4, D4** | ne |
| **GA4 Data API + vlastní skript** | kvóty standard property: 200 000 core tokenů/den, 40 000/hod, 10 souběžných – stačí na hodinový skript nad klíčovými eventy; `returnPropertyQuota` pro sledování spotřeby | vlastní kód a hosting (Cloud Function/Apps Script); data v API zpožděná; agregovaná, ne raw | G1, G3, C4 | ne |
| **BigQuery scheduled queries** | „Send email notifications … of transfer run failures“; Pub/Sub topic; min. interval 5 min; cron-like plán | notifikace **jen o selhání běhu**, ne o obsahu dat → hlídání „přišla tabulka / je eventů dost“ = vlastní SQL + Pub/Sub → Slack/e-mail; platí se dotazy | E1, E2 (s budget alertem), G1–G3, **G2**, G6 | ano |
| **GA4 → BQ export** | denní tabulka „typically exports mid-afternoon … but can be delayed until later in the day or the next day“; streaming „best-effort“; limit 1 mil. eventů/den (standard) | **Google neposílá žádnou notifikaci o zpoždění/výpadku** → E1 musí hlídat klient | E1 | ano |
| **Dataform assertions** | nonNull, uniqueKey(s), rowConditions, custom SQLX; „alerts you if any assertions fail“ ve workflow execution logs | notifikační kanál (e-mail/Slack) nutno napojit přes workflow config/Cloud Logging; platí se BQ dotazy | E3, E1 | ano |
| **Cloud Monitoring (Cloud Run sGTM)** | uptime checky: **1 mil. executions/projekt/měs zdarma**, pak 0,30 USD/1 000; synthetic monitors 1,20 USD/1 000 (100 zdarma); alerting policies 0,35 USD/měs za metric reference (stránka uvádí účinnost 1. 9. 2027); logy 50 GiB/projekt/měs zdarma | jen pro vlastní hosting (Stape/Taggrs to řeší za vás od Business tieru); nehlídá obsah tagů | G5, A5 | ne |
| **Looker Studio / Pro** | Pro: až 200 plánovaných doručení na report, doručení do Google Chatu, **„set up alerts that will notify you … when a chart … meets criteria that you specify“**, team workspaces, mobil | cena per user na stránce neuvedena (jen 30denní trial – ověřit); free verze bez alertů; nehlídá rozbitý zdroj/konektor (F1) | G1 (Pro), F3 (distribuce) | ne |
| **GTM verze + GTM API v2** | verze, version headers, workspaces, tagy/triggery/proměnné, práva; „create, preview and publish a Version“ | **žádný webhook/push na publish** – kdo hlídá „někdo publikoval kontejner“, musí pollovat API; popisy verzí a changelog jsou ruční | A3 (Č) | ne |
| **Google Ads – stav konverzní akce** | (stránka se stavy „Tag inactive / No recent conversions“ se nepodařilo nalézt – **neověřeno v této fázi**) | – | D1 | ne |
| **Meta Events Manager** | Event Match Quality 1–10 (doporučeno ≥ 6,0); tab Event Deduplication (% deduplikovaných, dedupe klíče); Event Freshness (Real Time → Weekly); Overview počty eventů | dokument nezmiňuje žádné push notifikace → kontrola D2 je ruční návštěva UI | D2 | ne |
| **GTM Monitor (Simo Ahava)** | addEventCallback → GET na Cloud Function → BQ → Looker Studio; „monitor the data collection itself“ | závisí na síti (výpadek collectoru = výpadek monitoru); vlastní údržba | G4 | ano |

### 2c. Doslovné citáty – jak nástroje komunikují pain

| Nástroj | Citát | Zdroj |
|---|---|---|
| Trackingplan | „Front-end changes silently break tracking? Not anymore“ / „Money burns when marketing data doesn't tell the true story“ / „Tracking breaks all the time, especially after front-end changes, consent updates, or tag edits.“ | E6-004, E6-063 |
| Trackingplan (Havas) | „You can have a perfectly implemented tag … and still lose most of your data. If the timing is wrong … it is operationally invisible until something makes you look at it differently.“ | E6-063 |
| Trackingplan blog | „a minor code release, a marketing campaign launch, or a third-party script update can silently break your tracking“; „Manual audits are simply not a viable solution.“ | E6-062 |
| Metrics Watch | „Catch data issues before they cost you money“ / „Stop flying blind on your GA4 data“ / „One prevented incident pays for the entire year“ | E6-024, E6-025 |
| Metrics Watch – testimonial | „We recently experienced data loss that went unnoticed for several days, affecting dashboards, reports, and business decisions.“ | E6-025 |
| DataTrue | „Incomplete analytics lead to failed strategies and wasted spend.“ / „monitors your implementation 24/7 to identify broken analytics before the errors corrupt your reports“ / „Replace troubleshooting hours with strategic action.“ | E6-064 |
| ObservePoint | „Catch tracking errors fast“ / „Catch hidden privacy violations (before regulators do)“ / help: „how long you can tolerate an issue existing on a page before finding out about it“ | E6-065 |
| Tag Inspector | „The average website has $2M+ in risk exposure from non-compliant data collection“ | E6-003 |
| NiceLookingData | „A tag fires in GTM but no key event is configured in GA4... These are the most expensive analytics bugs to track down manually — and the ones vendors never warn you about.“ | E6-044 |
| TAGGRS | „Ad blockers, browser restrictions, and cookies drop up to 60% of events“ / „Every missing event is a missed ROAS optimization“ / „Tracking changes constantly“ | E6-016 |
| JENTIS | „conversion signals otherwise lost to consent“; „blockers, consent gaps, and third-party risks“ | E6-015 |
| Stape | „Recover conversions lost to tracking restrictions“ / „Oversee your tracking setup and resolve issues quickly“ | homepage |
| Tracify (DE) | „Traffic-Plattformen sind in Bezug auf ihr Tracking nicht ehrlich“ / „ohne Zustimmung bleibt Google Analytics vollständig blind“ | E6-008 |
| Avo | „instantly catch issues such as inconsistent naming, duplicate items or missing descriptions“ | E6-021 |
| Verified Data | „Automated audits at a fixed cost“ / „Continuous oversight with unlimited audits and alerts if things fail“ | E6-043 |
| Improvado | „Get notified of any data, campaign or ops issues.“ | E6-039 |
| Simo Ahava | „if you want to be alerted to issues in data collection, the best way to do this is to monitor the data collection itself“ | E6-055 |

Pozorování: slovník je konzistentní napříč trhem – **silently / unnoticed / before it costs you / invisible / wasted spend**. Nikdo neprodává „máme data“, všichni prodávají „dozvíš se, že se to rozbilo“. To je přesně H2.

### 2d. Z recenzí a diskusí

Pozn.: G2, TrustRadius a Reddit byly z tohoto prostředí nedostupné (403 / blokace) a rozpočet vyhledávání byl vyčerpán v polovině fáze; recenze pochází z Capterra, GetApp a Shopify App Store. Vzorek je malý – viz Mezery.

| Nástroj (zdroj, hodnocení) | Proč kupují | Na co si stěžují | Cena / ochota platit |
|---|---|---|---|
| ObservePoint (Capterra 4,0/5, 3 rec.) | „You get informed in advance if any of your analytics tagging break in production“; automatizace auditů a journeys bez skriptování | „Technical support … is very slow“; **„Frequent web journey failures in production without any change in scripts“** (falešné poplachy); rozhraní zahlcené | enterprise ceny (599–2 400 USD/měs, ~72k USD/rok) |
| Stape (Capterra 5,0/5, 7 rec.) | „no more server“ – úspora času, rychlé nastavení dle blogu | **„the monitoring tool is only available on“ [vyšším plánu]**; podpora pro agentury pomalá; free limit těsný pro malé inzerenty | 17–167 USD/měs akceptováno jako levné vs. Cloud Run |
| Stape (datascale review) | – | „Three-day logs on Pro. That's tight for debugging. An attribution problem someone reports a week later can no longer be reconstructed.“; „Without monitoring, you find out from accounting.“; 1 kontejner = 1 předplatné | – |
| Supermetrics (GetApp 4,4/5, 109 rec., value 3,8/5) | „Gamechanging tool to rapidly extract data“; úspora času na reportingu; account manažeři | **„Loses connection multiple times“**; „Need to pay extra for connectors not built into basic plans“; pomalá podpora; drahé pro malé firmy/agentury | 55–222 USD/měs; „expensive for small business“ |
| Funnel (GetApp 4,7/5, 19 rec.) | sledování výkonu kampaní napříč zdroji | bez konkrétních stížností ve vzorku | 300–600 USD/měs |
| Littledata (Shopify 4,8/5, 140 rec.) | „you skip the 99 mind boggling steps“ server-side nastavení; rychlý support | 6 % 1★ bez viditelného textu | „price – value ratio is incredible good“ |
| Trh GA4 auditů (GAfix blog, NLD blog) | – | – | nástroj 0–49 USD vs. konzultant 1 000–10 500 USD (20–60 h) vs. agentura 1 500–8 000 USD; člověk „nutný“ pro sGTM, cross-domain, atribuci, multi-property BQ |

Shrnutí recenzí: kupují **„dozvím se to dřív než z čísel“** a **úsporu času**; stěžují si na **falešné poplachy syntetických testů**, **výpadky konektorů**, **monitoring zamčený ve vyšších tierech**, **krátkou retenci logů** a **pomalou podporu**. Všechny čtyři stížnosti jsou lidská práce, kterou nástroj neumí – triáž alertů, re-autorizace, forenzní diagnostika, komunikace.

---

## 3. INTERPRETACE

### 3a. Klíčová tabulka: co umí nástroj automaticky za X Kč/měs vs. co vyžaduje člověka

Ceny = nejlevnější reálně použitelný nástroj pro daný kód (SMB) → střední varianta. „Auto“ aktualizuje sloupec z taxonomie podle zjištění.

| Kód | Aktivita | Auto (nově) | Nástroj a cena (Kč/měs) | Co zbývá člověku |
|---|---|---|---|---|
| A1 | QA po releasu | **Č** | Checkly Playwright 0–1 472 (DIY scénář); Trackingplan 5 727+ (diff reálného provozu po deployi); ObservePoint/DataTrue journeys 13 800–61 333 | napsat a **udržovat testovací scénáře** (checkout se mění), třídit falešné pády („journey failures without any change in scripts“), potvrdit e-commerce hodnoty, opravit |
| A2 | Změny tagů | **N** | Tagmate šablony 1 817 (jen standardní eventy) | vše nestandardní; specifikace pro devy |
| A3 | Verzování GTM, changelog | **Č** | GTM verze 0; polling GTM API 0 (vlastní skript); NLD GTM checky 1 127 | popisy verzí, changelog pro klienta, review cizích publish; **žádný webhook na publish** |
| A4 | Validace dataLayer | **A** | Avo Inspector 0–6 900; Trackingplan 5 727+; Segment Protocols (custom); sGTM vlastní validace 0 | specifikace (co je „správně“), oprava u devů |
| A5 | Provoz sGTM | **A** (hosting) / **Č** (náklady) | Stape 460–3 841; Taggrs 550–3 175; Addingwell 2 250+; vlastní Cloud Run 2 760–6 900 | volba tieru, kvóty (script loads, boti), konsolidace kontejnerů, řešení „find out from accounting“ |
| A6 | Úklid | **Č** | NLD 0–1 127; Verified Data 2 475; GA4 Auditor 79 USD jednorázově | rozhodnout co smazat, smazat, zdokumentovat |
| B1 | Tagy vs. consent | **Č** | Verified CONSENT 6 225–17 475; ObservePoint/Tag Inspector (enterprise); Trackingplan modul | interpretace, změna CMP/GTM |
| B2 | Podíl souhlasů → dopad | **Č** | GA4 UI 0; JENTIS/Tracify tvrzení (custom) | výklad pro klienta, modelování |
| B3 | Legislativa / Google požadavky | **N** | – | vše |
| C1–C3 | GA4 hygiena (konverze, retence, referraly) | **Č** (dřív N u C2) | NLD 0–1 127; Verified Data 2 475–6 225; GA4 Auditor 8 027 (agentura) – **detekce**, ne náprava | rozhodnutí a nastavení; cross-check GTM↔GA4 je jediný automatizovaný „most“ |
| C4 | (not set), direct, UTM kvalita | **A** | GA4 custom insights 0; Metrics Watch 1 817+; NLD Daily Pulse 1 127 | najít příčinu (dev? kampaň? platební brána?) |
| C5, C6 | Změny GA4, přístupy | **N** | – | vše |
| D1 | Google Ads import/EC | **Č** | Elevar Channel Accuracy 4 600+ (jen Shopify); Google Ads stav konverze 0 (neověřeno) | mimo Shopify ruční porovnání; oprava |
| D2 | Meta pixel + CAPI | **Č** | Meta EMQ/dedup tab 0 (bez notifikace); Elevar 4 600+; Stape gateway ~10 USD/pixel | kontrola UI, deduplikace, oprava |
| D3 | Sklik, Bing, TikTok… | **Č** | Elevar (některé kanály); jinak nic | **Sklik nemá žádný nástroj** – ruční |
| D4 | UTM konvence | **A** | GA4 custom insights 0; Improvado governance (enterprise) | vymáhání konvence u marketingu |
| D5 | Konverze napříč platformami vs. backend | **Č** (A s BQ) | Elevar 4 600+ (Shopify); Funnel/Improvado/Adverity 6 900+ (agregace, ne backend); BQ + SQL 0 | definice tolerancí, vysvětlení rozdílů klientovi |
| E1 | Monitoring BQ exportu | **A** | BQ scheduled query + Pub/Sub 0 (+ dotazy) – **Google nenotifikuje** | reakce na výpadek, backfill |
| E2 | Náklady BQ | **A** | GCP budget alerts 0 (v této fázi neověřeno), INFORMATION_SCHEMA dotazy | optimalizace dotazů |
| E3 | Transformace | **Č** | Dataform assertions 0 | změny schématu, opravy |
| E4 | Historizace | **A** | export sám 0 | – |
| E5 | Spojení s ad/CRM daty | **Č** | Windsor 529+ (BQ ve všech tierech); Coupler 736+; Fivetran free 500k MAR; Supermetrics BQ jen Enterprise | modelování, mapování, kvalita |
| E6 | Konektory do BQ | **Č** | Fivetran e-mail alerty 0; Windsor/Coupler bez zmínky o alertech | **re-autorizace, změny API** („Loses connection multiple times“) |
| F1 | Údržba dashboardů | **Č** | Looker Studio Pro alerty (cena neuvedena) – hlídá hodnoty, ne rozbitý zdroj | oprava zdrojů, nová pole |
| F2 | Údržba konektorů | **Č** | – (žádný konektor v ceníku nezmiňuje monitoring vlastního selhání kromě Fivetranu) | re-auth, kvóty, změny API |
| F3 | Měsíční komentovaný report | **N** (čísla A) | AgencyAnalytics 460/klient; Databox 1 472+; Whatagraph 17 475; NLD AI digest 1 127 | **komentář „co se stalo, proč, co s tím“** – žádný nástroj |
| F4, F5 | Kvartální review, nové reporty | **N** | – | vše |
| G1 | Propad klíčového eventu | **A** | GA4 custom insights 0 (hourly web, e-mail); Metrics Watch 1 817–6 877 (5–15 min, Slack); Databox 1 472+; BQ SQL 0 | triáž, diagnóza |
| G2 | GA4 revenue vs. backend | **A jen s BQ** (výjimka Shopify) | Elevar 4 600+ (Shopify bez BQ); jinak BQ + export backendu 0 | tolerance, vysvětlení, oprava |
| G3 | Skok v (not set), nové zdroje | **A** | GA4 custom insights 0; Metrics Watch dimenze 2 277+ | příčina |
| G4 | Tag monitoring | **A** | Simo GTM Monitor ~0 (BQ); Trackingplan 5 727+; Avo 0–6 900; ObservePoint 13 800+ | oprava, komunikace s devy |
| G5 | Uptime sGTM | **A** | Stape Business 2 300 (monitoring až tady); Cloud Monitoring 0 (1M checků); Checkly 0 | reakce |
| G6 | Výpadek exportu/konektoru | **A** | BQ transfer e-mail 0; Fivetran e-mail 0 | backfill, re-auth |
| **G7** | **Reakce na alert: diagnóza, oprava, eskalace, changelog** | **N** | – žádný nástroj; **prodává se jako lidský add-on**: Elevar 11 500 Kč/měs, GAfix 4 577–11 477 Kč/balíček, DataTrue 2–5 h/měs v tieru, Tagmate 100 h/rok | **celé** |
| H1–H5 | Konzultace s devy, měřicí plán, ad-hoc dotazy, onboarding, SLA | **N** | Avo jako nástroj pro živý tracking plan 0–6 900 (H2 – jen úložiště) | celé |
| I1–I3 | Analytická práce | **N** | – | celé |

**Hranice nástroj / služba (odpověď na 6.4):** Nástroje končí u **detekce a notifikace** (G1–G6, A4, A5, C4, D4, E1, E2, E4). Služba začíná u **G7** a všeho, co vyžaduje rozhodnutí nebo komunikaci (A1 scénáře a triáž, A2, A3 changelog, B3, C5, C6, D3 pro CZ platformy, E3/E5 modelování, F1–F5, H, I). Mezi tím je šedá zóna (Č), kde nástroj **ukáže**, ale člověk **rozhodne**: C1–C3, B1, D1/D2, E6/F2.

### 3b. Cenové kotvy: „monitoring stojí X Kč/měs jako nástroj“

Stack „jen nástroje“, bez lidské práce, měsíčně (Kč):

| Segment | Minimální stack (bez BQ) | Kč/měs | Střední stack | Kč/měs | Co stack **nedělá** |
|---|---|---|---|---|---|
| **Malý e-shop** (do 20 mil., 1 web, Shoptet/WooCommerce, bez BQ) | GA4 custom insights (0) + Stape Pro (460) + NLD Pro (1 127) | **~1 600** | + Metrics Watch Basic (1 817) + Stape Business kvůli monitoringu (2 300 místo 460) | **~5 200** | nikdo alerty nečte, Sklik/Heureka nepokryté, G2 bez Shopify nejde, po releasu nikdo netestuje |
| **Střední e-shop** (20–200 mil., 1–3 weby, ads 3–4 platformy, BQ ano/ne) | Stape Business (2 300) + Metrics Watch Starter (2 277) + Verified Data 5 streamů (2 475) + Windsor Standard do BQ/LS (2 714) | **~9 800** | + Trackingplan 50k MAU (5 727) nebo Elevar Growth pro Shopify (10 350) + Checkly Starter (552) | **~16 000–20 000** | G7, changelog, komentovaný report, konzultace s devy, re-auth konektorů |
| **Velký e-shop / enterprise** (200 mil.+, více značek/domén) | Trackingplan 500k MAU (22 977) + Addingwell 25M req. (9 000) + Funnel Business (13 800) | **~46 000** | ObservePoint Professional (55 200) + DataTrue Team (61 333) + Adverity (custom) | **80 000–150 000+** | totéž; enterprise nástroje navíc **prodávají lidské hodiny v tieru** (DataTrue 2–5 h/měs) |

Kotvy pro argumentaci s klientem:
- **„Nástrojový monitoring stojí 1 600–5 000 Kč/měs“** pro malý e-shop – tj. správa DataLayer.cz nesmí být prodávána jako „monitoring“ (to klient dostane za tisícovku), ale jako **G7 + H** nad monitoringem.
- **Lidská vrstva už má tržní cenu: 11 500 Kč/měs** (Elevar „ongoing tracking support“ 500 USD, k tomu nástroj 4 600–21 850). GAfix účtuje 4 577–11 477 Kč za balíček 3–10 oprav. Konzultantský audit 23 000–241 500 Kč jednorázově (1 000–10 500 USD).
- **Enterprise tag governance = 14 000–60 000 Kč/měs za software.** Pro střední český e-shop je to mimo; tady je prostor pro službu, která to nahradí kombinací levných nástrojů + člověka.
- **In-house analytik** je kotva, kterou nástroje samy používají: NLD „$110–250k fully loaded“, Metrics Watch „building in-house costs $30,000+“, Supermetrics „$70k in compensation“. Fáze 2 doplní CZ mzdy.

### 3c. Co to říká k hypotézám

- **H5 (část hodnoty nahraditelná SaaS; služba musí stát na tom, co nástroj neumí): potvrzeno silně.** Detekce G1–G6 je komodita od 0 Kč. Trh výslovně odděluje nástroj a člověka – Elevar, GAfix, DataTrue, Tagmate, ObservePoint („Expert review options“) prodávají lidskou vrstvu jako add-on. Služba DataLayer.cz = G7 + A1 scénáře/triáž + A3 changelog + F3 komentář + H1–H5; monitoring je v ní **vstup**, ne produkt.
- **H2 (pain = tiše rozbité měření):** potvrzeno slovníkem všech vendorů („silently“, „unnoticed for several days“, „operationally invisible“) a recenzemi („informed in advance if any of your analytics tagging break in production“).
- **H1 (správa hlavně nad BQ):** oslabeno. Bez BQ jde automatizovat G1, G3, G4, G5, C4, D4, A4, A5 (GA4 Insights, Metrics Watch, Trackingplan, Stape, Avo). BQ je nutné pro G2 (mimo Shopify/Elevar), E-vrstvu a **forenzní diagnostiku** (Stape logy 3–10 dní vs. BQ neomezeně). Doporučení: dvouúrovňová nabídka, kde BQ tier = „umíme říct proč a dohledat zpětně“, ne „umíme hlídat“.
- **RQ5:** Nad nativními konektory (Supermetrics, Windsor…) se „spravuje“ hlavně F2/E6: výpadky spojení, re-autorizace, příplatky za konektory – reálná, opakující se, ale nízkohodnotová práce.

### 3d. Co z nástrojů by DataLayer.cz měl použít interně

| Nástroj | Použít? | Proč / jak |
|---|---|---|
| GA4 custom insights (50/property, hourly) | **ano, u každého klienta** | baseline G1/G3/C4 zdarma, e-mail na sdílenou schránku → triáž |
| BigQuery scheduled queries + Pub/Sub → Slack | **ano (BQ klienti)** | E1 (přišla tabulka, počet eventů v normě), G2 (revenue vs. backend), G6; e-mail při selhání zdarma |
| Dataform assertions | ano (BQ klienti s transformacemi) | E3 |
| Simo GTM Monitor / vlastní sGTM tag-status log do BQ | **zvážit – vlastní „tag monitoring“ produkt** | G4 za GCP náklady; odlišení od agentur bez BQ |
| Stape (Business) nebo Addingwell | ano jako doporučený hosting | A5/G5 řeší za 2 300 Kč; Cloud Run vlastní jen pro klienty s GCP |
| Checkly (Hobby/Starter) + Playwright | **zvážit – A1 automatizace** | průchod checkoutem s kontrolou dataLayer/GA4 requestů každé 2–10 min; 0–552 Kč; scénáře jsou naše práce = součást služby |
| Metrics Watch (Professional) nebo NiceLookingData Agency | zvážit jako agenturní vrstva | 4 577–6 877 Kč pro všechny klienty bez BQ; Slack alerty; NLD cross-check GTM↔GA4 |
| Verified Data (partner program) | zvážit | C1–C4 + PII checky za 2 475 Kč/5 streamů; consent crawl pro B1 |
| Trackingplan (Agencies) | zvážit pro velké klienty | jediný „real traffic“ monitoring v SMB ceně; agenturní plán contact sales |
| Windsor.ai / Coupler.io | ano pro ad-data do BQ u menších klientů | BQ ve všech tierech od 529 Kč; Supermetrics BQ jen Enterprise |
| ObservePoint, DataTrue, Adverity, Improvado | ne | enterprise cena, cílový klient DataLayer.cz je mimo |
| Elevar | jen doporučit Shopify klientům | jediné automatizované G2 bez BQ; DataLayer.cz může být „člověk nad Elevarem“ |

---

## 4. DOPORUČENÍ

1. **Nepojmenovat službu „monitoring“.** Klient si to vygooglí a najde Metrics Watch za 79 USD. Pojmenovat podle toho, co nástroje neumí: „správa měření“ / „reakce a změnové řízení“ s monitoringem jako samozřejmou součástí.
2. **Do každého tieru explicitně napsat, jaké alerty běží a kdo na ně reaguje do kdy** (G1–G6 nastaveno první měsíc; G7 s reakční dobou). Reakční doba je jediná osa, kterou žádný SaaS nemá.
3. **Cenová argumentace:** „Nástroje za 2–5 tis. Kč/měs vám řeknou, že se něco rozbilo. My za X tis. zjistíme co, opravíme to nebo zadáme vývojářům, zapíšeme do changelogu a řekneme vám, kolik konverzí chybělo.“ Kotva lidské vrstvy: 11 500 Kč/měs (Elevar support), balíček oprav 4 600–11 500 Kč (GAfix).
4. **Dvouúrovňový model:** bez BQ = GA4 insights + Metrics Watch/NLD + Stape + Checkly scénáře + člověk; s BQ = navíc E1/E2/G2 vlastní SQL, forenzní logy, historie. Cenový rozdíl odůvodnit „umíme říct proč a kolik“, ne „umíme hlídat“.
5. **Postavit interní standard „alert stack“** (GA4 insights šablona 10–15 custom insights, BQ SQL sada, Checkly scénář checkout, sGTM log sink) – onboarding do 1 měsíce, náklady na nástroje do 3 000 Kč/klient/měs.
6. **Shopify klienti:** doporučit Elevar a prodávat se jako vrstva nad ním; pro Shoptet/CZ platformy a Sklik/Heureka neexistuje nástroj → jasný diferenciátor služby (D3, D5).
7. **Sledovat Looker Studio Pro alerty** (nová funkce, cena neověřena) – může nahradit Metrics Watch pro klienty s Looker Studio.

---

## 5. Mezery rešerše

- **Rozpočet WebSearch vyčerpán v polovině fáze** (celosessionový limit); zbytek přes přímé fetch. Chybí: Reddit/Measure Slack diskuse o ochotě platit za monitoring, G2 a TrustRadius recenze (403), Capterra u Supermetrics/Trackingplan (404).
- **Recenzní vzorek je malý** (ObservePoint 3, Stape 7, Funnel 19, Supermetrics 109, Littledata 140 – převážně pozitivní). Bod 2d brát jako indikaci.
- **Elevar:** dvě rozdílné cenové sady (Essentials/Growth/Business vs. Core/Advanced/Premium/Elite); doména při fetchi přesměrovávala jinam – ověřit přímo; „ongoing tracking support $500/month“ pochází ze shrnutí vyhledávače nad článkem attribuly.
- **ObservePoint:** ceny jen ze dvou třetích stran (nicelookingdata, privado 08/2026), vlastní stránka je JS kalkulačka.
- **Tagmate:** doména vracela nesouvisející obsah – produkt může být ukončen; ceny z Capterra/SaaSworthy.
- **Tag Inspector, JENTIS, Adverity, Meiro, Segment Protocols, Amplitude, Tracify (nad 500 EUR):** bez veřejné ceny.
- **Nativní Google:** nenalezena stránka se stavy konverzních akcí Google Ads („Tag inactive“ apod.); Meta Events Manager – notifikace neověřeny; Looker Studio Pro cena per user na stránce chybí; GCP budget alerts nefetchovány; Cloud Monitoring alerting cena má na stránce uvedenou účinnost 1. 9. 2027 (nejasné, zda platí už teď).
- **Supermetrics / Windsor / Coupler:** neověřeno, zda a jak notifikují selhání přenosu (pricing stránky to nezmiňují).
- **Dataslayer:** tabulka cen na stránce zobrazovala chybné hodnoty, použity ceny z FAQ.
- **Chybí CZ/SK nástroje pro monitoring** (kromě Keboola/Meiro, které monitoring měření nedělají) – potvrdit ve fázích 2–3.
- Taxonomie nemá kód pro pain „falešné poplachy nástroje“ (N6-007) ani „náklady infrastruktury sGTM“ (N6-004, N6-012) – použity nejbližší kódy s poznámkou; navrhnout `tool_noise` a `infra_cost` do fáze 7.
