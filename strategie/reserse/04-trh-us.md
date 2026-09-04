# Fáze 5 – USA / anglofonní trh: struktura produktu, marketplaces, Reddit, komunita, ukázky dodávky

Stav: hotovo (verze 1, datum přístupu ke všem zdrojům 2026-09-04).
Datové řádky: `data/fragments/05-pricing.csv` (80 řádků, P5-001…080), `data/fragments/05-evidence.csv` (99 řádků, E5-001…099),
`data/fragments/05-pain.csv` (48 řádků, N5-001…048). Kódy aktivit (A1…I3) a spouštěčů (`release_web`…) podle `00-taxonomie-sluzby.md`.

Metodická poznámka: WebSearch rozpočet se vyčerpal v polovině rešerše; Reddit byl vytěžen přes veřejné RSS feedy
(search.rss + vlákna), Upwork/Fiverr/Clutch profily a Glassdoor blokují automatický přístup (403) – viz sekce 5.
Kurz pro CZK: 1 USD = 23 CZK (zadání); pro EUR/GBP použit odhad 25 / 29 CZK, vždy uvedeno v `scope_notes`.

---

## 1. Shrnutí

1. **„Analytics retainer“ jako veřejný produkt s ceníkem v USA prakticky neexistuje.** Ze 17 sledovaných agentur (Bounteous, Adswerve, InfoTrust, Cardinal Path/Merkle, Napkyn, Seer, Evolytics, MeasureSchool, KS Digital, Analytics Mania, Marcel Digital, Netpeak US, Grazitti, Measurelab, Analytico, Blast, Empirical Path) **žádná** nemá veřejnou cenu měsíční správy. Veřejně cení jen (a) white-label dodavatelé pro agentury (E2M: 1 299 / 2 099 / 3 999 USD za 30–35 / 50–60 / 100–120 h měsíčně), (b) managed sGTM (MeasureSchool 297–697 USD/měs.), (c) SaaS monitoring (29–999 USD/měs.) a (d) evropští butici (Amplio €700–1 800/měs., UK freelanceři £150–600/měs.).
2. **Cenové kotvy z blogů a listingů**: retainer za správu analytiky se v US cenových průvodcích uvádí 500–3 800 USD/měs. pro SMB (EmberTribe, Dig Designs), 2 000–4 000 USD za 10–20 h a 5 000–10 000+ USD za 30–50 h (coders.dev), „governance retainer“ 1 000–5 000 USD (EGGKNITE); enterprise agentury podle třetích stran začínají na 5 000–15 000 USD/měs. (neověřeno na primárním zdroji). Hodinovky: Upwork medián 30 USD, Clutch pásma 25–199 USD, US freelance „ne pod 100 USD/h“, expert 175–300 USD/h.
3. **Struktura US retaineru** se škáluje třemi osami: (1) hodiny/měsíc, (2) frekvence check-inů (měsíčně → 2× měsíčně → týdně), (3) reakční doba / prioritní kanál (e-mail → Slack). Obsahově: monitoring + opravy + měsíční report + QBR + „progress call“; BQ vrstva a anomálie jsou vyšší tier nebo add-on.
4. **H2 („tiché rozbití“) je nejsilněji potvrzená hypotéza.** 48 pain záznamů: typický time-to-notice 2 týdny až 8 měsíců, nejčastější spouštěče `release_web` a `platform_migration` (po 10), `consent_change` (6), `gtm_change_dev` a `bq_export_gap` (po 5). Opakující se formulace: „silently broken for 2 weeks“, „in 18 months they were back where they started“, „the daily line looking completely normal“, „nobody notices until reporting season“.
5. **Hlavní bariéra prodeje retaineru** není cena, ale očekávání „it should just work after setup“ – a to i uvnitř agentur („VP of strategy sees little value in an ongoing retainer“). Praktici to řeší tím, že prodávají **monitoring jako produkt** (DataCanary, Sheets alerty), balí údržbu s PPC správou nebo s BQ analýzou/CRO, nebo prodávají white-label agenturám.
6. **Ukázky dodávky**: nalezeno 31 veřejných artefaktů (GitHub repozitáře, GOV.UK alerting s prahy, GTM Monitor, Dataform/dbt testy, Looker Studio šablony, struktura měsíčního reportu, SaaS „nálezy“, sGTM Cloud Monitoring politiky). 14 z nich vyžaduje BigQuery.

---

## 2. FAKTA

### 2a. Agentury a konzultanti – jak pojmenovávají a strukturují „ongoing“ práci

| Název | URL | Název služby doslova | Model | Cena / tiery | Kódy aktivit | requires_bq | Veřejná cena |
|---|---|---|---|---|---|---|---|
| Bounteous (US, enterprise) | bounteous.com/partners/google/google-analytics-consulting/ ; rfp.wiki | „regularly-scheduled calls and ongoing analysis“, „managed services, and retainer extensions“ | retainer, case by case | 3rd party: „Retainers typically start at $15,000/month“; blended 150–300 USD/h | A2, C1–C6, E3, E5, F1, F3, H3, H4, I1 | částečně | ne (E5-007, E5-008) |
| Adswerve (US) | adswerve.com/partners/google/google-analytics-4 | „End-to-end analytics consulting, services and support“ | individuálně | neuvedeno; 3rd party „Analytics Pros: Retainers from $5,000/month“ | A1–A5, C, D1–D2, E, I | částečně | ne |
| InfoTrust (US) | infotrust.com/what-we-do/ | „Integrity – proactive monitoring that identifies risks before they become costly violations“; „Managed Privacy Program, Consent Monitoring, Remediation Guidance“ | managed program + vlastní nástroj Tag Inspector | neuvedeno; 3rd party „from $8,000/month“ | B1–B3, G4, A3, C6 | ne | ne (E5-070) |
| Merkle \| Cardinal Path (US) | cardinalpath.com/google-analytics-4 | „expert implementation and analysis support“, GA4 360 „Google-backed SLAs“ | licence + support | neuvedeno; 3rd party „from $8,000/month“ | C, E1, E4, F, I | částečně | ne |
| Napkyn (CA/US) | napkyn.com/services/ga4-license-and-support ; /services | „on-demand training, monthly support hours, and regular check-ins“; „Automated Data Quality Monitoring“ | retainer hodin + check-iny | neuvedeno | C1–C6, E1, F3, F4, G1, H3, H4 | částečně | ne (E5-009) |
| Seer Interactive (US) | seerinteractive.com/services/analytics | „Data Strategy, Analytics Implementations, Reporting & Visualizations“; „92% Retention Rate“ | projekty + retence | neuvedeno | A, C, F, I | částečně | ne |
| Evolytics → Concord (US) | concordusa.com | „Customer & Digital Analytics Consulting“, „ensure data quality, lineage, security“ | konzultace | neuvedeno | C, E, F, I | částečně | ne |
| MeasureSchool (US/DE) | measureschool.com/services/server-side-tagging-services/ | „Managed Server-Side GTM“ Standard / Enterprise; „White-Label Support for Agencies“ | fixní předplatné (6 měs. min.) | 297 USD (běžně 497) / 697 USD (běžně 997) měsíčně; 1 h / 3 h konzultace měsíčně; Email vs. Priority Email/Slack | A5, G5, D1, D2, H3, H5 | ne | ano (E5-015) |
| KS Digital – Krista Seiden (US) | ksdigital.co/services/ | „Analytics Audits; Solution Design; Training; Executive Advising“ | projekty | neuvedeno | C, H2, H4 | ne | ne (E5-069) |
| Analytics Mania – J. Fedorovicius (LT/US trh) | analyticsmania.com/services/google-analytics-and-google-tag-manager-audit/ | „detailed report of all identified problems … Top Priority action items“ | audit za fix | neuvedeno | A1, A6, C1–C4 | ne | ne (E5-071) |
| Marcel Digital (US) | marceldigital.com/…/google-analytics-4-consulting | „weekly, bi-monthly, or monthly check-ins with our analytics specialists“ | retainer škálovaný frekvencí | neuvedeno | F3, F5, H3, H4, C1 | ne | ne (E5-010) |
| Netpeak US | netpeak.us/services/google-analytics-4/ | „continuously monitors and optimizes your GA settings, providing ongoing support and regular updates“ | „performance or project-based“ | neuvedeno | C1–C5, F1, F5 | ne | ne (E5-013) |
| Grazitti (US/IN) | grazitti.com/ga4-implementation-services/ | „GA4 maintenance service keeps your implementation accurate, catching issues before they skew data“ | maintenance | neuvedeno | A1, A2, C1, C5 | ne | ne (E5-012) |
| Measurelab (UK, benchmark) | measurelab.co.uk/solutions/managed-analytics/ | „Data Assurance – Subscription monitoring, maintenance and governance for a system that already works and needs to keep working“; „Tracking health monitoring and breakage detection“; „Pipeline observability with anomaly detection“; „SLA-backed tag management with guaranteed response times“; klientský portál my.measurelab; named client lead; měsíční alokace konzultací | subscription + SLA | neuvedeno | A1–A3, C, E1, E3, G1–G4, G7, H1–H5 | částečně | ne (E5-011) |
| Analytico Digital (CA/US) | analyticodigital.com | „Architecture Governance – Ongoing Accuracy: Signal quality monitoring, Schema governance, Stakeholder reporting, Stack evolution management“; „built to run without us“ | projekty, governance vrstva | neuvedeno | A4, C5, E3, F3, H2 | částečně | ne (E5-038) |
| E2M Solutions (IN → US agentury, white label) | e2msolutions.com/white-label-ga4-gtm-service/ | „White Label Web Analytics Tracking – Plans and Pricing“ | retainer hodin, „No minimums. No contracts. No retainers.“ | Standard 1 299 USD (30–35 h, progress call 1× měs., „Chosen by 77 agencies“) / Pro 2 099 USD (50–60 h, bi-weekly, 116) / Advanced 3 999 USD (100–120 h, weekly, 207) / Marketing Squad 9 999 USD (3 FTE); 24–48 h turnaround; QBR | A1–A4, C1, D1–D2, F1, F5, H3, H4 | ne | ano (E5-014) |
| Amplio Data (ES, prodává i přes US agentury) | ampliodata.io | Foundation (jednorázově €400–1 500) / „Maintained – ongoing data ops and reporting, from €700 a month“ (€700–1 200) / „Managed – fully embedded data team, from €1,800 a month“ | tiery | viz vlevo; „the monitoring, the inevitable fixes, the monthly reporting and the analysis“ | A1, A2, B1, D1, D5, F3, G1, G7, H3 | částečně | ano (E5-016) |
| Elevar (US, SaaS + lidé) | analyzify.com/shopify-apps/elevar-conversion-tracking | SaaS Essentials 200 / Growth 450 / Business 950 USD; „Analyst Support Tier 1: $500/month for up to three requests monthly; Tier 2: $1,000/month for up to ten requests“ | SaaS + add-on lidské podpory | viz vlevo; support „within 24 hours“ / „within 12 hours“ | D1, D2, G1, G7, H3 | ne | ano (E5-033) |
| Vixen Digital (UK) | vixendigital.com/analytics/ga4-audit/ | „Data Health Checks – Every 6 to 12 months“ | opakovaný audit místo retaineru | £1 500 / £2 500 / £3 000 per property | C1–C4, A1, D4 | ne | ano (E5-018) |
| GA4 Experts (US) | ga4experts.com | „Quick Fix – $299 flat … No retainer, no commitment“ | produktizovaná ad-hoc oprava | 299 USD; konzultace 199 USD/30 min | A2, G7 | ne | ano (E5-019) |

Cenové průvodce (US/UK), které tvoří „obecné povědomí“ o ceně správy (všechny E5-001…006):

| Zdroj | Doslovný údaj |
|---|---|
| EmberTribe | „A retainer for ongoing analytics management typically runs $500 to $3,000 per month depending on scope.“ |
| coders.dev | „Basic Retainer (10-20 hours/month): $2,000 - $4,000/month — Monthly reporting, basic maintenance, and ad-hoc query support. Strategic Retainer (30-50 hours/month): $5,000 - $10,000+/month.“ |
| Dig Designs | „Ongoing consulting and reporting for smaller businesses commonly falls between $600 and $3,800 per month“ |
| EGGKNITE | „Budget the governance retainer, directionally $1,000–5,000 per month, or budget a full re-audit every eighteen months.“ |
| NiceLookingData (SaaS, compare) | „Analytics agency on retainer $3,000 – $10,000 / month; In-house analyst $80,000 – $250,000 / year“ |
| Vidi Corp (UK) | „In-House Analyst: $70k–$110k+ salary, plus overheads. Outsourced Consultant: Typically $10k–$40k/year“ |
| Lilach Bullock (UK) | „Ongoing management, checking data quality, adjusting events as your site changes, building reports, runs £150 to £600 a month as a retainer with most independent consultants.“ |

### 2b. Marketplaces a SaaS kotvy

| Platforma / nástroj | Nabídka (doslova) | Cena | Obsah | Recenze / poptávka |
|---|---|---|---|---|
| Upwork | „Hourly rates for Google Tag Manager Specialists on Upwork typically range between $20 and $49“; medián 30 USD | 20–49 USD/h | GTM/GA4 setup, monitoring, maintenance; příklad zakázky 6 měs. × 15–20 h/týden | neuvedeno (stránka blokuje fetch) – E5-021 |
| Fiverr | „I will fix or setup google analytics 4, ga4 ecommerce tracking, conversion tracking GTM for $30“; „…fb pixel… via GTM for $10“ | 10–30 USD jednorázově; custom GA4 dashboard od ~200 USD | jednorázový setup/fix; **měsíční maintenance gigy nenalezeny** | počet recenzí nedostupný (403) – E5-022 |
| Clutch – GA4 consulting | DataVinci (Pune): $25–49/h, min $5 000+, 26 recenzí, „ongoing since Aug 2023“; adMind (UT): $150–199/h, min $5 000+, „always getting back to us in less than 24 hours“, „We meet biweekly“, „invested $150,000–$200,000“; RSO Consulting: $100–149/h, 35 recenzí; Vidi Corp: $100–149/h, min $1 000+, 51 recenzí; GA Agency: $100–149/h, min $25 000+; Analytive $50–99/h | 25–199 USD/h | recenze popisují ongoing spolupráci, reakci < 24 h, biweekly meetingy | E5-024…026 |
| Toptal / Growth Collective | „hire GA4 consultants on an hourly, part-time, or full-time basis“; 4.9/5 z 344 recenzí | neuvedeno | – | – |
| MarketerHire | „There's no plan to pick and no retainer to guess at.“ | neuvedeno | – | – |
| ZipRecruiter | „$24-$96/hr Freelance Google Analytics 4 Ga4 Jobs“ | 24–96 USD/h | – | E5-023 |
| GA4 Monitor | Starter 29 / Pro 99 / Agency 499 USD; 1 / 5 / 30 properties; weekly vs. **daily** audits; 35+ checks; Slack/Email/WhatsApp/Teams | 29–499 USD/měs. | C1–C4, D4, A1 (bez BQ) | E5-027 |
| NiceLookingData | Free / Pro 49 / Agency 199 USD; „61 GA4 + 44 GTM checks“; „Daily or weekly re-audits + emails when something drops“; „Monday digest“; branded client workspaces | 49–199 USD/měs. | C, A3, A6, C6 (bez BQ) | E5-005, E5-067 |
| GA4 Auditor | 99 USD/audit; Agency Pro 999 USD/rok (100 auditů, whitelabel PDF/PPT) | point-in-time | C (bez BQ) | E5-028 |
| Verified Data (NL) | 5 streams €99 / 10 €149 / 25 €249; „60+ preset GA4 checks“; „Monitor & Alert daily / weekly / monthly“ | €99–249/měs. | C, PII (bez BQ) | E5-029 |
| GA4Dataform (EU) | Core €0 („Basic data quality assertions“) / Premium One €275 / Unlimited €375; „Anomaly detection“, „Dataform error alerts“, „Priority updates for GA4 schema changes“ | €275–375/měs. | E1, E3, G1 (**vyžaduje BQ**) | E5-030 |
| Trackingplan | 249 / 499 / 999 USD (dle MAU), Enterprise od 1 750 USD; „24/7 Automatic error detection“ | 249–1 750+ USD/měs. | A4, G4 | E5-031 |
| ObservePoint | ~599 USD Essentials / ~2 400 USD Professional (dle 3rd party) | – | G4, B1 | E5-032 |
| Elevar | 200 / 450 / 950 USD + Analyst Support 500 / 1 000 USD | viz 2a | D1, D2, G1 + G7 (člověk) | E5-033 |
| AgencyAnalytics | „$20 USD per client / month“; „Goals, alerts & anomaly detection“, white-label, client portal | 20 USD/klient | F1, F3 bez komentáře | E5-035 |
| DataCanary | „Free to use“; event volume + parameter monitoring přes Data API, e-mail denně | 0 | G1 (bez BQ) | E5-036 |

### 2c. Reddit a komunita – doslovné citáty k cenám

| Zdroj | Citát | Kontext |
|---|---|---|
| r/analytics, u/Sausage_Queen_of_Chi (E5-076) | „I'm in the US and assuming you have at least a couple years of experience, I wouldn't charge less than $100/hour for analytics work. … the general rule of thumb is at least 2x your hourly salaried rate or more.“ | reakce na PH freelancera s 18–20 USD/h („These rates … are very low“) |
| r/GoogleAnalytics, u/Silent-Professor-295 (E5-075) | „What about on-going maintenance will that be included in your price??? … I might charge $125/hr but I have 15+ yrs experience“ | cenění custom dashboardu |
| r/GoogleAnalytics, u/Insane-Bull / u/mafost-matt (E5-074) | „We are charging USD3,000 per ecommerce website“ / „As little as $40 for a simple site up to $1500 for complex e-commerce.“ | GA4 migrace, jednorázově |
| r/agency, u/ds_frm_timbuktu + anonym (E5-077) | „I'm thinking of charging $600 per month per site.“ → „Analytics setup and troubleshooting is a one-off service. Once that is done, nobody is going to pay $600 every month for insights and reports.“ | test nabídky „Dedicated Tracking & Analytics Agency“ |
| r/agency, u/UnknownGuy102 (E5-077) | „You're better off targeting marketing agencies vs companies direct. Easier to create an offer that integrates well within their existing framework and on the backend they can have a better process they can charge their clients more for.“ | kam prodávat čistě analytickou službu |
| r/PPC, u/PPC-Memes (E5-078) | „5 hours x $125/hour for basic setup. 10 hours x $150/hour for advanced.“ | conversion tracking setup |
| r/PPC, u/Menaxerius_ (E5-078) | „Starting price of 3400$ for basic ga4 setup is my standard rate“ | |
| r/PPC, u/TTFV (E5-078) | „We don't charge for it, but we have an annual cap of free time … 2.5 hours … Of course, when clients make changes you often have to review and update tracking from time to time.“ | tracking schovaný v PPC retaineru |
| r/PPC, u/Dammit_Meg (E5-079) | „$1k a month to manage ads. If tracking isn't done I need to do that too which is usually around $500“ | |
| r/PPC, u/aldbz (E5-079) | „As a freelancer I do 2 bills : 1 for the setup (conversion tracking, GTM, GA4, Google merchant center) and 1 for the ads managing that I charge every month“ | |
| r/PPC (UK), u/HumorousSeating (E5-080) | „£800 flat for all that is basically charity work with extra steps … that setup alone would run 3-5k as a one-off from any decent agency … you should be looking at £300/day minimum“ | tracking + LP + PPC za £800/měs. |
| r/PPC (UK), u/PracticalAd9393 (E5-080) | „£399 minimum for each channel management per month and probably up to £199 for tracking setup as a one off“ | |
| r/PPC, u/PXLynxi (E5-080) | „Retainers last longer, especially with GTM (or tracking and tagging specialists been quite niche).“ | |
| r/agency, u/romanmalinowski (E5-081) | „$5-20k is the market price for SEO + paid ads“ | plný marketingový retainer |
| r/agency, u/trentonrerker (E5-082) | „if companies want specific reporting, then they need to pay for that … 2. When they want specific commentary every month 3. When they want industry or business relevant insights that tools don't automatically provide“ | co se z reportingu účtuje zvlášť |
| r/agency, u/JakeHundley (E5-082) | „Agency Analytics isn't that big of a bill... it's $20/client.“ | kotva automatického reportu |

### 2d. Doslovné citáty painů (výběr; plný seznam 48 řádků v `05-pain.csv`)

| ID | Citát | Spouštěč | Jak dlouho |
|---|---|---|---|
| N5-001 | „Clients used to bring me in for a one-off project (no retainer!) -> I set everything up -> and in 18 months they were back where they started. Changes pushed to the site and GTM slowly broke the setup.“ | release_web | měsíce |
| N5-003 | „site changes, new templates, dev updates, consent changes, and GTM edits slowly break tracking quality without anyone noticing immediately. In a lot of cases, companies only realize months later when reporting suddenly looks wrong.“ | gtm_change_dev | měsíce |
| N5-004 | „someone's GA4 tag was silently broken for 2 weeks and only caught it while pulling a report.“ | release_web | 2 týdny |
| N5-005 | „817 recorded where the real number was 1,024, for about three weeks, with the daily line looking completely normal. What found it was the BigQuery export disagreeing with the Data API.“ | konfigurace | 3 týdny |
| N5-010 | „I've seen GA4 setups silently break after site migrations, CMS updates, consent banner changes, GTM edits, you name it. Sometimes nobody notices until reporting season and then you're trying to explain missing data that can't be recovered.“ | platform_migration | měsíce |
| N5-011 | „conversion tracking broke in September for 30+ days … they were previously seeing 5-10 leads/day“ → ~1/den, růst CPC/CPL | release_web | 30+ dní |
| N5-013 | „every single one of their conversions is 'misconfigured' … No conversions for the past two weeks.“ (změnil jiný tým) | gtm_change_dev | 2 týdny |
| N5-015 | „a dev trying to update consent settings broke conversion tracking, for the whole website. We're looking at a 7 day gap … It took 3 days before I noticed“ | consent_change | 3 dny / 7 dní |
| N5-016 | „two conversions were set as primary (GA4 + Google Ads tag). … since rolling out GA4 about 8 months ago. I'm shocked the agency hasn't picked up on this“ (rozpočet zdvojnásoben, ROAS 8× → 4×) | ga4_change | 8 měsíců |
| N5-017 | „The only reason I caught this was so quickly we because I was monitoring updates to our enhanced conversions settings.“ | ga4_change | ~2 týdny |
| N5-019 | „the free storage quota is now treated as a one-time cumulative lifetime limit … That explains why my exports stopped even though only ~2.5 GiB was actually stored.“ | bq_export_gap | ~2 týdny |
| N5-021 | „the GA4 webstream will simply not post data on 'empty' days, but without ever issuing any kind of log event or system notification. … we actively check our feeds every morning“ | bq_export_gap | – |
| N5-024 | „None of these issues completely broke tracking. They just made the data less reliable. That's why they're so easy to miss.“ (Shopify Checkout Extensibility) | platform_migration | měsíce |
| N5-028 | „Shopify reports ~850 purchases and ~$290K in revenue. In GA4, I'm only seeing ~655 purchases and ~$219K“ | revenue_mismatch | měsíčně |
| N5-032 | „If a payload is missing user identifiers, the HTTP status is still 200, but the event is silently discarded by the platform.“ (CAPI −66 %) | ad_platform_change | ~10 dní |
| N5-036 | „Even if it worked for years, it now causes the tag to hang indefinitely without failing.“ (tichá změna gtag.js, leden 2026) | ad_platform_change | dny |
| N5-037 | „more than one agency told me a client caught a tracking or reporting error before they did. by the time it showed up as a complaint, it'd been broken for weeks and nobody thought to look because the dashboard 'looked fine.'“ | release_web | týdny |
| N5-047 | „Date gaps sit silently in datasets … every query, every model, every dashboard that references that date range inherits the gap without any indication something's wrong.“ | bq_export_gap | měsíce |
| N5-048 | „the settings … were probably configured once — during initial implementation — and haven't been touched since. Maybe that was six months ago. Maybe two years. Maybe the person who set it up left the company.“ | access_lost | roky |

Citáty k bariéře nákupu (RQ4): „It's hard to have a retainer on GA4, since most businesses expect it to just work after setup“ (N5-002); „both he and our new VP of strategy tend to see little value in an ongoing retainer … once the initial implementations have been done“ (N5-007); „I offer a retainer, most say no“ (N5-009).

### 2e. KATALOG UKÁZEK DODÁVKY (31 položek)

| # | URL | Typ | Co obsahuje / hlídá | Kódy | BQ | Evidence |
|---|---|---|---|---|---|---|
| 1 | https://www.simoahava.com/analytics/google-tag-manager-monitor/ | blog + architektura | GTM Monitor: per dataLayer event loguje tag id, name, firing status, execution time → Cloud Function → BigQuery; Data Studio dashboard; návrh ML anomálií (s Markem Edmondsonem) | G4, G7 | ano | E5-048 |
| 2 | https://github.com/gtm-templates-simo-ahava/google-tag-manager-monitor | GitHub šablona (web GTM) | Custom Tag Template, Apache 2.0 | G4 | ano (endpoint) | E5-049 |
| 3 | https://github.com/gtm-templates-simo-ahava/server-container-monitor + https://www.simoahava.com/analytics/write-to-google-bigquery-from-gtm-server-container/ | GitHub šablona (sGTM) + blog | Loguje event_name, event_timestamp, client_name, tag.id/name/status/execution_time do BQ; „see if tags are consistently signaling failure“, eventy bez tagů, dlouhé exekuce | G4, G5 | ano | E5-050 |
| 4 | https://docs.data-community.publishing.service.gov.uk/processes/ga4-data-alert-process/bigquery-email-alerts/ | veřejná dokumentace alertingu (GOV.UK) | 6 denních kontrol s prahy: data přišla / ±5 % eventů; nové/zmizelé eventy; ±15 % per event nad 10k; nové/zmizelé parametry >100; ±20 % parametrů nad 10k; e-mail na Google group, Apps Script 12–13 h | E1, G1, G3, G6 | ano | E5-057 |
| 5 | https://docs.data-community.publishing.service.gov.uk/processes/ga4-data-alert-process/looker-studio-alerts/ | týdenní PII alert | scheduled query + Looker Studio e-mail 1× týdně s 7 dny potenciální PII v page_location/title/referrer/query/search_term | C2, B | ano | E5-058 |
| 6 | https://docs.data-community.publishing.service.gov.uk/products/ga4-query-costs-dashboard | dashboard nákladů | „spot any jobs which result in unusually large query costs“ | E2 | ano | E5-059 |
| 7 | https://www.linkedin.com/pulse/ga4-events-anomaly-detection-alerting-bigquery-dataform-marco-tognon-pxxef + https://github.com/tognonm/ga4_dataformpublic | článek + repo | ARIMA_PLUS na denní page views → Dataform assertion (okno 7 dní) → Cloud Logging alert → e-mail/Slack; Workflow spouštěný po denním exportu | G1, E3 | ano | E5-056 |
| 8 | https://ga4dataform.com/ml-detect-anomalies-ga4dataform-concepts/ | produktová dokumentace | denní ML.DETECT_ANOMALIES per metrika×dimenze; Core zdarma s „Basic data quality assertions“ | G1, E3 | ano | E5-055, E5-030 |
| 9 | https://github.com/Liscor/dataform-ga4-tests | GitHub (Dataform) | testy e-commerce eventů, session kvality, chybějících user_pseudo_id/ga_session_id; overview tabulka podílu vadných eventů | A4, E3 | ano | E5-051 |
| 10 | https://github.com/aliasoblomov/Bigquery-GA4-Queries | GitHub (142★) | ga4_table_creation_time.sql (zpoždění tabulek), measurement_protocol_event_ratio.sql (podezřelé eventy), BQ administration/cost | E1, E2, C4 | ano | E5-052 |
| 11 | https://github.com/Velir/dbt-ga4 | GitHub (402★) | dbt modely GA4 exportu, partitioned tabulky, pytest unit testy | E3 | ano | E5-053 |
| 12 | https://stacktonic.com/article/google-analytics-big-query-and-dbt-a-dbt-example-project (repo stacktonic-com/stacktonic-dbt-example-project) | článek + repo (41★) | source freshness na GA4 export, unique testy na fact/dim | E1, E3 | ano | E5-054 |
| 13 | https://thedatastory.nl/en/data-stories/ga4-data-alerts-in-slack/ | návod + ukázka zprávy | Slack alert „is at least {diffp}% lower than last week / Yesterday: {yd} / Week before: {wb}“; Cloud Function + Scheduler + Sheets s definicemi | G1, G3 | ano | E5-060 |
| 14 | https://iihnordic.com/news/ensuring-data-quality-for-ga4-at-scale-with-google-cloud-platform/ | agenturní článek | validační pravidla: purchase má transaction_id ve formátu a revenue > 0, items mají id/quantity/value | A4, E3 | ano | E5-061 |
| 15 | https://www.optizent.com/blog/the-bigquery-audit-why-your-analytics-pipeline-might-be-built-on-missing-data/ | článek s kontrolou | „how many distinct event dates exist … over the trailing 90 days“; řádky vs. klouzavý průměr | E1 | ano | E5-040 |
| 16 | https://www.bounteous.com/insights/2022/01/19/google-analytics-4-custom-insights-data-governance/ | agenturní návod | sada GA4 Custom Insights: „Daily Pageview < 1“, „Weekly Ecommerce Revenue decreasing by 15 Percent“, priority Informative / Early Warning / Emergency; tabulka 55+ alertů | G1, G3, C1 | ne | E5-044 |
| 17 | https://support.google.com/analytics/answer/9443595 | nativní funkce | Custom insights: hourly (web) / daily / weekly / monthly, „Has anomaly“, e-mail, max 50/property | G1 | ne | E5-045 |
| 18 | https://www.teamsimmer.com/blog/how-do-i-proactively-monitor-my-server-side-gtm-setup/ | návod | 4 Cloud Monitoring politiky: 4xx/5xx na /gtm.js, /gtag/, /g/collect (5 err/s po 5 min), CPU 60 %, instance 8, latence 2 000 ms; e-mail | G5, A5 | ne | E5-046 |
| 19 | https://www.teamsimmer.com/blog/how-do-i-trigger-a-scheduled-query-when-the-ga4-daily-export-happens/ | architektura | Logs Router → Pub/Sub → Cloud Function po dokončení exportu („daily export schedule is erratic at best“) | E1, E3 | ano | E5-047 |
| 20 | https://dumbdata.co/dashboard-resources/ | Looker Studio šablony (zdarma) | „Google Analytics (GA4) Audit Tool“, „GA4 UTM Campaign Audit Tool“, „Consent Mode Migration Impact Report“, „404 Error Monitoring Dashboard“ | C1, C4, D4, B2 | ne | E5-062 |
| 21 | https://www.radyant.io/tools/free-google-analytics-4-looker-studio-template | Looker Studio šablony (zdarma) | Lean / Lead Gen (Client-Grade) / E-Commerce (Client-Grade): revenue, AOV, ROAS per source/medium, checkout funnel | F1 | ne | E5-064 |
| 22 | https://www.analyticsmates.com/resources/free-google-analytics-4-templates | Looker Studio šablony | Overall Performance, „PPC Report – Google Ads vs GA4“, Lead Gen, SaaS | F1, D5 | ne | E5-066 |
| 23 | https://narratiq.fr/en/blog/ga4-report-templates | struktura měsíčního reportu | 8 stran: Cover; Exec summary 4 KPI vs M-1; Acquisition; Content; Engagement; Conversions; Recommendations (2–3 actions); Appendix; „read the summary in 60 seconds“ | F3 | ne | E5-063 |
| 24 | https://88studio.io/products/ga4-ec-monthly-report-template | placená šablona (100 USD) | 99 stran e-commerce měsíčního reportu (MoM/YoY, SEO, revenue) | F3 | ne | E5-065 |
| 25 | https://www.nicelookingdata.com/ | SaaS – formát nálezu | „3 personal Gmail accounts have Administrator access — … can delete data streams, rotate measurement IDs“; „Monday digest: what moved, what broke, what's new“ | C6, A3, C1 | ne | E5-067 |
| 26 | https://www.ga4monitor.com/ | SaaS – health monitoring | 35+ checks (tag firing, event naming, conversion setup, attribution, retention), weekly/daily, Slack/Email/WhatsApp/Teams | C1–C4 | ne | E5-027 |
| 27 | https://www.measurelab.co.uk/solutions/managed-analytics/ | popis managed služby | Data Assurance: breakage detection, pipeline observability, SLA na tagy, klientský portál my.measurelab | G1–G4, H5 | částečně | E5-011 |
| 28 | https://www.e2msolutions.com/white-label-ga4-gtm-service/ | veřejný ceník/struktura | tabulka plánů: hodiny, progress call cadence (1× měs. / bi-weekly / weekly / 2× týdně), QBR, 24–48 h turnaround | H3, H5, F4 | ne | E5-014 |
| 29 | https://analyzify.com/shopify-apps/elevar-conversion-tracking | SaaS alerty + lidská podpora | „Configurable daily or weekly email alerts on tag and event delivery“; Analyst Support 3 / 10 požadavků měsíčně | G1, D2, G7 | ne | E5-033 |
| 30 | https://www.datacanary.io/ | free nástroj (z Reddit vlákna) | event volume → 0 / mimo rozsah, parametr zmizel; e-mail denně přes Data API | G1 | ne | E5-036 |
| 31 | https://www.reddit.com/r/GoogleAnalytics/comments/1vmb41m/… (u/Big-Branch-8532) | komunitní „SOP“ | Insights alert + denní Data API check (včera vs. stejný den v týdnu; page_view, session_start, hlavní konverze, source/medium) + Realtime API pro velké weby; alert jde tomu, kdo umí opravit | G1, G3, G7 | ne | E5-085 |

Doplňkově: Vixen Digital audit (40–80 kontrol, £1 500–3 000) a GA4 Auditor (100+ datapointů, PDF/PPT whitelabel) jako ukázky **auditního reportu**; Optizent „GA Auditor Insights & Monitoring“ (denně, priority High / Warning / Opportunity) jako ukázka **prioritizace alertů**.

---

## 3. INTERPRETACE

### 3.1 Jak vypadá typický US retainer

- **Vstup**: vždy projekt (audit → implementace/migrace, 2–10k USD u SMB, 15–35k+ enterprise). Retainer je „extension“ po go-live (Bounteous: „retainer extensions can extend TCO beyond the initial launch budget“; Amplio: Foundation → Maintained → Managed; Vixen: místo retaineru „Data Health Check every 6 to 12 months“).
- **Tři osy tierování** (E2M, MeasureSchool, Marcel Digital, Elevar, Amplio):
  1. **kapacita** – hodiny/měsíc (30–35 / 50–60 / 100–120) nebo počet požadavků (3 / 10 měsíčně);
  2. **rytmus kontaktu** – progress call měsíčně → bi-weekly → weekly → 2× týdně; QBR ve všech tierech;
  3. **reakce a kanál** – e-mail vs. „Priority Support – Email/Slack“, turnaround 24–48 h (E2M, Buildberg), 24 h vs. 12 h (Elevar), „SLA-backed tag management with guaranteed response times“ (Measurelab).
- **Obsah, který se objevuje opakovaně** (RQ1): monitoring/„breakage detection“ (G1–G4), opravy (G7), QA po změnách webu (A1), GTM + consent maintenance (A3, B1), měsíční report + komentář (F3), QBR (F4), ad-hoc dotazy (H3), školení/enablement (H4). BigQuery vrstva (E) a anomálie ML jsou buď vyšší tier („Strategic Retainer … BigQuery“), samostatný produkt (GA4Dataform Premium), nebo interní praxe konzultantů („~50 accounts all with some sort of monitoring“).
- **Rytmus**: denně automat (Custom Insights / Data API check / BQ assertions / Slack ráno – „we actively check our feeds every morning“); týdně digest („Monday digest“, PII e-mail, Looker alert); měsíčně report + call + audit tagů („monthly tag audit with GTM Preview/Tag Assistant“); kvartálně QBR / review; 6–12 měsíců plný re-audit tam, kde retainer není.
- **Hranice retainer vs. projekt**: komunita ji kreslí ostře – setup, migrace, tracking plan, sGTM build a LP jsou jednorázové („one-off jobs … separate flat fees“), správa je měsíční; některé PPC agentury tracking úplně schovají do PPC fee s ročním limitem hodin (TTFV 2,5 h/rok). Analytics-only retainer bez BQ/analýzy komunita považuje za těžko prodejný („nobody is going to pay $600 every month for insights and reports“), pokud není (a) navázán na měřitelný výsledek, (b) prodán agentuře jako white-label, nebo (c) produktizován jako monitoring.

### 3.2 Co lidé považují za fér cenu a proč

- **Fér = oddělené faktury.** Konsenzus PPC/analytické komunity: jedna cena za setup (100–3 400 USD, £199–5 000), druhá za měsíční správu; klient, který platí jen setup, musí počítat s tím, že „the next dev is liable to undo everything“.
- **Fér hodinovka v USA je ≥100 USD**, expert 175–300 USD; marketplaces (Upwork medián 30 USD, offshore Clutch 25–49 USD) jsou vnímány jako jiná liga („Fiverr Specialist is an oxymoron“). Proxy 10 h/měs. tedy dává 1 000–3 000 USD, což se kryje s blogovými rozpětími pro SMB retainer (500–3 800 USD).
- **Report sám o sobě není hodnota** – hodnota je komentář, flagnutí problému dřív než klient a dostupnost („Clients get nervous in the silence“). Automatický report stojí 20 USD/klient; komentář „needs to be paid for“.
- **Monitoring má cenovou kotvu 29–499 USD/měs.** (SaaS bez BQ) a 275–375 EUR (s BQ) – vše, co služba účtuje nad to, musí být interpretace, oprava, koordinace s vývojáři a odpovědnost (H5). Nástroje to přiznávají samy („It doesn't audit configuration settings. It doesn't validate BigQuery schema integrity. It doesn't review GTM container structure or check consent implementation.“).

### 3.3 Co říká materiál k hypotézám

- **H1 (BQ-first)** – **oslabena** v silné podobě, ale s důležitým dodatkem. Většina painů i většina veřejných monitoringových řešení je **bez BQ** (Custom Insights, Data API checky, SaaS auditory, DataCanary, GTM Preview QA). BQ je nutné pro „slow leaks“ (N5-005 odhalil rozdíl jen díky exportu), pro robustní anomálie, pro G2 (revenue vs backend) a pro celou vrstvu E. Zároveň r/bigquery ukazuje, že BQ export bez transformací „can become another setup to maintain“ – tj. BQ generuje vlastní správu (E1, E3), kterou klient sám neudělá. Závěr: dvouúrovňová nabídka; BQ tier prodávat těm, kdo už mají export a nevyužívají ho.
- **H2 (tiché rozbití)** – **silně potvrzena**. 48 záznamů, time-to-notice od 3 dnů po 8 měsíců, medián kolem 2–4 týdnů; nejčastěji si všimne klient přes objednávky/CRM nebo agentura při přípravě reportu. Nejdražší případy: dvojí konverze 8 měsíců + zdvojený rozpočet (N5-016), 30 dní bez konverzí a reset Smart Biddingu (N5-011), ~71k USD/měs. neatribuované revenue (N5-028). Formulace „the daily line looking completely normal“ a „everything was technically firing“ jsou přesně H2.
- **H4 (US retainer s tiery a vyjmenovanou dodávkou)** – **potvrzena strukturou, nepotvrzena veřejností cen**. Tiery existují (E2M, Amplio, Elevar, MeasureSchool, Marcel), ale enterprise agentury cenu neuvádějí; odhad 1 500–10 000 USD/měs. z plánu sedí na střed (SMB 500–3 800, mid 2 000–5 000, enterprise 5 000–15 000+ dle třetích stran). Strukturu lze převzít, ceny ne.
- **H5 (SaaS nahrazuje část hodnoty)** – **potvrzena**. Za 29–499 USD/měs. lze mít denní kontroly konfigurace, propadů eventů, UTM, consent a GTM kontejneru. Služba stojí na G7 (reakce, diagnóza, oprava), H1 (koordinace releasů), B3/C5 (reakce na změny Googlu – viz gtag.js leden 2026), D5/G2 (srovnání s backendem) a na komunikaci.
- **H3** není předmětem této fáze; US data jen potvrzují, že bez veřejného ceníku se cena odvozuje z hodinovky × hodiny.

---

## 4. DOPORUČENÍ pro DataLayer.cz (strukturu převzít, ceny ne)

1. **Pojmenovat službu jako „hlídání + oprava“, ne „správa“.** Nejlépe fungující slova v US materiálu: „Data Assurance“, „breakage detection“, „tracking health monitoring“, „catch it in 24 hours, not two weeks“. Hlavní pain do sdělení: *„Měření se rozbije potichu – po releasu, změně lišty, zásahu do GTM – a vy to zjistíte, až když report nesedí.“*
2. **Tři osy tierů převzít**: (a) kapacita (hodiny nebo počet požadavků), (b) rytmus (měsíční report + call → 2× měsíčně → týdně), (c) reakce/kanál (e-mail další den → Slack/priorita do 24 h → do 4 h). QBR dát do všech tierů – v US je standard.
3. **Dvouúrovňový model podle BQ**: „Bez exportu“ = Custom Insights + denní Data API kontrola klíčových eventů + měsíční GTM/consent QA + srovnání s backendem ručně; „S exportem“ = E1 kontrola tabulek, assertions (Dataform/dbt), anomálie, G2 automaticky, historizace. Explicitně nabídnout „aktivace nevyužitého BQ exportu“ jako vstupní bod (r/bigquery: export zapnutý, nevyužitý).
4. **Onboarding jako první měsíc = audit + zapojení alertů + changelog.** Převzít GOV.UK sadu kontrol s prahy (data přišla; ±5 % eventů; nové/zmizelé eventy a parametry; ±15–20 % per event) a Bounteous priority (Informative / Early Warning / Emergency) jako viditelný artefakt smlouvy.
5. **Dodávka, kterou klient fyzicky vidí**: (a) jednostránkový měsíční komentář s 3–4 čísly a „co s tím“ (Reddit: dlouhé reporty nikdo neotevře), (b) alert do Slacku/e-mailu ve formátu „je o X % níž než minulý týden / včera vs. před týdnem“, (c) changelog GTM + release kalendář, (d) kvartální review. Ukázky vzít z katalogu 2e (#4, #13, #16, #23, #25).
6. **Pro prodej**: nabídnout white-label variantu performance agenturám (US komunita: přímý prodej analytics-only retaineru SMB naráží, agentury jsou lepší kanál) a vázat vstup na spouštěče: nesoulad GA4 vs. objednávky, plánovaný release/migrace/nová CMP, spend v Ads závislý na konverzích (Dolphin Analytics triggery).
7. **Hranice**: setup, migrace, sGTM build, nové dashboardy = projekt nebo z hodin tieru; „reakce na změny Googlu/platform“ (B3, C5) a „QA po releasu“ (A1) musí být v ceně, protože to je přesně důvod nákupu.
8. **Nepřebírat ceny.** US hodinovka ≥100 USD a retainer 500–3 800 USD pro SMB nejsou přenositelné; přenositelný je poměr: retainer ≈ 10–20 h × sazba, monitoring SaaS ≈ 1/10 ceny služby.

---

## 5. Mezery rešerše

- **Reddit**: přístup jen přes RSS (vyhledávání + vlákna do hloubky 3, bez skóre/upvotes); r/marketing, r/digital_marketing, r/Entrepreneur, r/smallbusiness a r/dataengineering vydaly málo relevantních vláken. Chybí systematické hledání „monthly analytics report“ v r/analytics.
- **Marketplaces**: Upwork, Fiverr (včetně kategorie ga4-reporting), Clutch profily RSO/Vidi/Vexis a Glassdoor/ZipRecruiter detaily vrací 403 – ceny jen ze search snippetů a dvou Clutch profilů; počty objednávek/recenzí Fiverr gigů nezjištěny. **Měsíční „GA4 maintenance“ gig na Fiverr nenalezen** – samo o sobě zjištění (poptávka se tam formuluje jako jednorázový fix).
- **Agentury**: Analytics Pros (sloučeno do Adswerve), Jeffalytics, Loves Data (jen kurzy), Charles Farina, Ken Williams (ga4bigquery.com) – bez stránek k ongoing službám; Measure Slack archivy nedostupné; LinkedIn posty jen jeden (Tognon). Ceny enterprise retainerů (5–15k USD) jsou z jednoho třetího zdroje (yourgrowthpartner.io, sám konkurent).
- **Elevar** oficiální pricing přesměrovává na cizí doménu; ceny přes Analyzify/Attribuly (dva zdroje se liší v názvech tierů a cenách 200/450/950 vs. 225/650/1 250).
- **Ukázky reportů s obrázky** (agenturní case studies se screenshoty měsíčního reportu) nenalezeny; nalezeny šablony a struktury, ne skutečné klientské výstupy. SLA dokument agentury s konkrétními časy: jen Measurelab („guaranteed response times“ bez čísel) a E2M (24–48 h turnaround).
- **Kurzy EUR/GBP** jsou odhady (25 / 29 CZK) – při syntéze ve fázi 9 sjednotit.
