# Fáze 4 – Evropa (DACH, Polsko, UK/IE, Nordics/NL): kontinuální správa analytiky

Stav: hotovo (verze 1, rešerše 2026-09-04). Data: `data/fragments/04-pricing.csv` (47 řádků, P4-xxx),
`data/fragments/04-evidence.csv` (77 řádků, E4-xxx), `data/fragments/04-pain.csv` (24 řádků, N4-xxx).
Kódy aktivit A1–I3 a spouštěče (`what_broke`) podle `00-taxonomie-sluzby.md`.
Přepočty: 1 EUR = 25 CZK, 1 GBP = 29 CZK, 1 PLN = 5,8 CZK, 1 CHF = 26 CZK; navíc 1 DKK ≈ 3,35 CZK (přes 7,46 DKK/EUR) a 1 USD ≈ 23 CZK (odhad, nebylo v zadání).

---

## 1. Shrnutí

- Prošli jsme **58 subjektů** (DACH 27, PL 14, UK/IE/ES 14, Nordics/NL 11 – několik SaaS a tržních referencí se překrývá).
  **Veřejnou cenu za kontinuální správu (ne za setup, ne za hosting) má jen 9 z nich**; dalších ~10 zveřejňuje hodinové/denní sazby
  nebo jednorázové balíčky, zbytek „cena na dotaz“. Evropa tedy H3 („trh nemá veřejný ceník správy“) nevyvrací – platí i v DACH a PL.
- **Cenová hladina kontinuální správy bez BigQuery** (GA4 + GTM, monitoring, opravy, měsíční report) v EU:
  **≈ 5 000–30 000 CZK/měs**. Dolní hranice: LEMONTEC AT 199 €/měs (E4-001), Webanalist NL od 250 €/měs (E4-068),
  ananalytics.pl 1 200 zł/měs za 5 h (E4-032), UK nezávislí 150–600 £/měs (E4-053). Střed: Manids DK 3 000–8 000 DKK (E4-065),
  Amplio „Maintained“ 700–1 200 € (E4-058), SaphirSolution „ab ca. 800–1 500 €“ (E4-006). Horní: Amplio „Managed“ s BigQuery
  1 800+ € (E4-059), Khalid Farhan IE od 1 500 € (E4-057), Fresh Egg „od 1 750 £“ (E4-045, neověřeno).
- **Hodinové sazby**: DE 85–139 €/h (E4-005, E4-020), NL 60–150 €/h (E4-068), PL 200–300 zł/h u specialistů (E4-032, E4-039),
  UK 800–1 000 £/den (E4-048, E4-050), DK 130 $/h (E4-075). Proxy „10 h/měs“ dává **17 000–36 000 CZK** – tj. reálný retainer
  10 h je v západní Evropě dražší než všechny fixní balíčky pod 10 000 CZK. Balíčky pod 10 000 CZK jsou proto buď silně
  automatizované (LEMONTEC – monitoring 10 eventů), nebo mají malý rozsah (5 h).
- **Struktura tierů** (kde existuje) škáluje podle **(a) trafficu/sessions** u managed sGTM (ADS-Tracking 179–1 299 €, E4-003),
  **(b) hodin/kapacity** (ananalytics 5 h; surowiecki „Opieka podstawowa / Regularny rozwój / Rozszerzona“, E4-029;
  coders.dev 10–20 h vs. 30–50 h, E4-062), **(c) hloubky dodávky s BigQuery jako zlomem** (Amplio Maintained vs. Managed, E4-059;
  Manids Minimum vs. Aktiv, E4-065). Nikdo v Evropě neškáluje podle počtu GA4 properties (to dělají jen SaaS).
- **H1 (BQ-first)**: Evropa ukazuje **dvouúrovňový model, ne BQ-only**. Správa bez BQ se prodává a má obsah (LEMONTEC, Manids,
  Amplio Maintained, surowiecki „Monitoring jakości danych“ explicitně „BigQuery, Power BI albo Looker Studio“ – E4-030).
  BigQuery je konzistentně **diferenciátor vyššího tieru** (Amplio Managed, Measurelab Data Assurance s „pipeline observability“,
  Fresh Egg Inspectre Insights nad BQ – E4-043, E4-046). H1 v silné podobě je vyvrácena, ve slabé („BQ = vyšší tier“) potvrzena.
- **H2 (tiché rozbití)**: Evropské zdroje to říkají téměř doslova – „ein Event schon monatelang nicht mehr erfasst wird, es aber
  niemand bemerkt“ (E4-002), „Seks måneder senere er halvdelen af opsætningen brudt“ (E4-066), „Usually happens gradually, nobody
  raises the alarm until damage is done“ (E4-043), „Błąd odkrywa dopiero człowiek“ (E4-030). Nejčastější spouštěče: release/redesign,
  změna CMP/consentu, změna integrace ad platformy (Shopify × Google app), změna schématu upstream zdroje.
- **H4 (retainer jako produkt s vyjmenovanou dodávkou)**: v UK ano (Measurelab „Data Assurance“, Webdigita „Optimisation Retainer“,
  KRM), ale ceny jsou skryté nebo denní. Nejlépe **produktizované** nabídky (název + seznam dodávky + cena) jsou paradoxně v menších
  zemích: LEMONTEC (AT), Manids (DK), Amplio (ES), surowiecki (PL – bez ceny). Z UK bereme strukturu, z AT/DK/PL cenovou úroveň.
- **H5 (SaaS nahrazuje část hodnoty)**: NiceLookingData (SE) za 49 $/měs dělá 105 automatických kontrol + re-audit s e-mailem
  a sám říká, co neumí: „strategy, stakeholder interviews, custom dashboards, one-off investigations“ (E4-064). Follo (NL) prodává
  konfigurační monitor GA4 „za fixní (velmi nízkou) částku měsíčně“ (E4-070). LEMONTEC za 199 € je fakticky „SaaS + člověk na opravy“.
  Hranice mezi nástrojem a službou je tedy: **detekce = nástroj, diagnóza/oprava/komunikace = člověk (G7, H1–H5)**.

---

## 2. FAKTA po regionech

### 2.1 DACH (DE/AT/CH)

| Subjekt | Země | URL | Název služby (doslova) | Model ceny | Cena / tiery | Kódy aktivit | requires_bq | Veřejná cena | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| LEMONTEC (ex KlickImpuls) | AT | lemontec.at/leistungen/tracking/ga4-gtm-sorglos-paket/ | „GA4 und GTM Sorglos-Paket“ | fixed_package | 199 €/měs, „Keine Bindung“, 14 dní setup | A1, A2, C1, C5, G1, G4, G7 | ne | **ano** | E4-001, E4-002 |
| ADS-Tracking.de | DE | ads-tracking.de/preise | „Server-Side Tracking Agentur“ | tiered (sessions) | Basic 179 / Starter 299 / Small 449 / Middle 799 / Max 1 299 €/měs; setup 549 €; 12 měs. min.; 10/20/30 h podpory ročně od Small | A5, D1, D2, G5, G7 | ne | **ano** | E4-003, E4-004 |
| Gandke (M. Baersch) | DE | gandke.de/online-internet-marketing-preisliste.html | „Tracking & Datenschutz-Audit“ | hourly_rate | 139 €/h po minutách; žádná tracking pauschale | A1, A4, B1, A5 | ne | ano (hodinová) | E4-005 |
| SaphirSolution | DE | saphirsolution.de/google-analytics-4-agentur/ | „laufende Betreuung statt Einmallösung“ | fixed_package | FAQ: „ab ca. 800–1.500 €“ měsíčně, setup ab 500 € | neurčeno | ne | částečně (FAQ rozpětí) | E4-006 |
| Grundauf | DE | grundauf.com/tracking | „White-Label-Betreuung“, „Laufende Live-Überwachung“ | fixed price + 15 % markup | neuvedeno | A1, G1, G4, H2, B1 | ne | ne | E4-007 |
| Tobias Batke | DE | tobiasbatke.com/preise/ | sGTM balíčky „Analytics / 1 Plattform / 2 Plattformen / Komplex“ | fixed_package (jednorázově) | 1 500 / 1 900 / 2 300 / ab 3 500 €; 30 dní support; hosting zvlášť | A5, D1, D2 (setup) | ne | ano (setup) | E4-008 |
| Beyond Media | DE | beyond-media.de/server-side-tracking/ | „Server-Side Tracking“ – „Laufend“ | setup + hosting | setup 2 500–8 000 €; hosting ab 50 €/měs; Betreuung bez ceny | A5, G5, B2, A6 | ne | částečně | E4-009 |
| Blue Marketing | DE | blue-marketing.de/leistungen/server-side-tracking-tagging/ | „Monitoring und die Wartung“ (volitelně) | – | hosting 17–40 €/měs; Wartung na dotaz | A5, G5 | ne | ne | E4-010 |
| GTM-Hosting (cDevelopment) | DE | gtm-hosting.com/preise/ | Hosting „Standard / Wachstum“ | saas | 0 / 19 / 99 €/měs podle requestů | (infrastruktura) | ne | ano | E4-012 |
| Tracify | DE | tracify.ai/en/preise | SaaS | saas | od 500 €/měs (+1 % spendu nad 25 k€) | D1, D2, I1 | ne | ano | E4-013 |
| JENTIS | AT | jentis.com/pricing | „Core / Professional / Enterprise“ | saas | „Get Price“; dle ZENITBLAU ab ca. 300 €/měs | A5 | ne | ne | E4-014, E4-015 |
| e-dialog | AT | e-dialog.group/en/analytics/ | – (monitoring jen v blogu) | – | neuvedeno | – | – | ne | E4-017 |
| TRKKN (Trakken) | DE | trkkn.com/…/analytics-360/ | SLA jen v rámci GA360 | licence | neuvedeno | C, E, F (enterprise) | ano (GA360) | ne | E4-018 |
| FELD M, mohrstade, lunapark | DE | feld-m.de, mohrstade.de, luna-park.de | projektové fáze; BigQuery jako služba | – | neuvedeno | – | – | ne | E4-019 |
| ELKEON, ZODA Media | DE | elkeon.de, zoda-media.de | ZODA: „kontinuierliches Monitoring“ jako krok 7 | – | „je nach Größe des Projekts“ | G1, G7 (ZODA) | ne | ne | E4-022, E4-023 |
| argoberlin | DE | argoberlin.de/google-analytics-beratung/ | „Google Analytics-Beratung“ | fixed_package / hourly | ab 190 €/měs; 106 €/h – **neověřeno (404)** | – | ne | (snippet) | E4-027 |
| digroma | DE | digroma.com/google-analytics | „Laufende Begleitung: gemeinsame Zeitkontingente“ | retainer_hours | neuvedeno; „ohne versteckte Retainer“ | H3, F3 | ne | ne | E4-028 |
| Freelanceři DE | DE | dygitized.io | – | hourly_rate | průměr 104 €/h (Freelancer-Kompass 2025); GA/GTM profily 85–120 €/h | – | – | ano | E4-020 |
| 121WATT | DE | 121watt.de | GA4 Seminar 2 dny | školení | 1 184–1 541 € s DPH/os. | – | – | ano | E4-021 |
| Clutch DE | DE | clutch.co/de/it-services/analytics | – | hourly label | CaseWhen 150–199 $/h, min 10 k$; ostatní IT outsourcing 25–99 $/h | – | – | ano | E4-056 |

**Typické struktury tierů DACH:** (1) jeden fixní balíček bez vazby (LEMONTEC); (2) tiery podle sessions s hodinami podpory až ve
vyšších tierech (ADS-Tracking); (3) hodinová sazba + „Zeitkontingente“ (Gandke, digroma); (4) setup jako fixní balíčky, provoz jako hosting
SaaS, „Betreuung“ neoceněná (Batke, Beyond Media, Blue Marketing). Klasické analytické agentury (Trakken, e-dialog, FELD M, mohrstade,
lunapark) žádný veřejný retainer nemají.

**Doslovné painy DACH:**
- „Das führt dann häufig dazu, dass ein Event schon monatelang nicht mehr erfasst wird, es aber niemand bemerkt.“ (LEMONTEC, E4-002)
- „jede Anpassung wird ein Ticket, jedes Ticket kostet Stundensatz“ (ADS-Tracking, E4-004)
- „Die Zahlen widersprechen sich; Niemand weiß, was gemessen wird; Nach einem Update war alles anders“ (Grundauf, E4-007)
- „Wenn durch Fehler beispielsweise Audience Listen nicht mehr befüllt werden, werden personalisierte Werbemittel nicht effizient ausgespielt“ (e-dialog, E4-017)
- „Schnittstellen zu Google, Meta oder anderen Plattformen ändern sich regelmäßig und müssen nachgepflegt werden.“ (eMinded, E4-011)
- Shopify DE komunita: cookie lišta 13. 12. 2024 → „der Wert bleibt bei allen 7 Conversion Aktionen auf 0,00“, zjištěno po ~15 dnech (E4-024);
  „gestern bin ich durch Zufall über einen massiven Fehler … gestoßen … uns geht gerade ordentlich Umsatz durch die Lappen“ (E4-025).

**Triggery pro nákup v DACH:** sGTM doporučují až od ad spendu 2 000 €/měs (ZENITBLAU, Gandke) resp. 5 000–10 000 €/měs (Beuing) – E4-015, E4-016.

### 2.2 Polsko

| Subjekt | URL | Název služby (doslova) | Model ceny | Cena / tiery | Kódy aktivit | requires_bq | Veřejná cena | Evidence |
|---|---|---|---|---|---|---|---|---|
| surowiecki.org | surowiecki.org/oferta/abonament-analityczny/ | „Abonament analityczny“ – RUN / CHANGE / INSIGHT; tiery „Opieka podstawowa / Regularny rozwój / Rozszerzona współpraca“ | retainer (kapacita) | neuvedeno | A1–A3, C1, E3, E5, F1, F3, F5, G1, G7, H2, H3, I1 | volitelně (BQ v CHANGE) | ne | E4-029 |
| surowiecki.org | …/monitoring-jakosci-danych/ | „Monitoring jakości danych · GA4, GTM i BI“ | „model utrzymania“ po kvalifikaci | neuvedeno | G1, G2, G3, G6, G7 | ne („BigQuery, Power BI albo Looker Studio“) | ne | E4-030 |
| Greenfields (Wrocław) | green-fields.pl/en/offer/permanent-analytical-care/ | „Permanent analytical care“ / „Stała opieka analityczna“ | na dotaz | neuvedeno | A2, C1, F1, F5, I1 | ne | ne | E4-031 |
| ananalytics.pl (freelancer) | ananalytics.pl/oferta/ | „5 godzin miesięcznie do wykorzystania na zmiany, pytania, analizy“ | retainer_hours | 1 200 zł netto/měs (5 h); 300 zł/h; audit 700 zł | A2, H3, F5, G7 | ne | **ano** | E4-032 |
| Agencja Echo | agencjaecho.pl/…/konfiguracja-google-analytics/ | „Abonament Basic“; „monitorujemy też stale ruch na stronie i poprawność danych“ | fixed_package | od 1 050 zł/měs (rozsah nejasný) | C1, C6, G3 | ne | **ano** | E4-033 |
| Conversion.pl | conversion.pl/pl/analityka-internetowa/ | „Opieka analityczna“, „Analytics Hotline“, „Doświadczony analityk na godziny“, „Audyt/Wdrożenie Google BigQuery“ | retainer / hotline / hodiny | neuvedeno | A–F, H3; E (BQ zvlášť) | volitelně | ne | E4-034 |
| Cube Group | cubegroup.pl/uslugi/analityka-i-dane/stala-obsluga-analityczna/ | „Stała obsługa analityczna“ | na dotaz | neuvedeno | D5, F3, I1 | ne (BQ jen na blogu) | ne | E4-036 |
| Sempai | sempai.pl/oferta/analityka-internetowa/ | „Wsparcie analityczne“ (3 projektové balíčky) | na dotaz | neuvedeno | C1, F3, I1 | ne | ne | E4-037 |
| NBRS | nbrs.pl/cennik/analityka/ | „Analityka Wdrożenie / Audyt“ | jednorázově | 1 999 / 2 199 zł | (setup) | ne | ano (setup) | E4-038 |
| Verseo / Smartowski | verseo.pl/cennik-ux/wdrozenie-google-analytics-4/ | „Starter / Starter Plus / Advanced / Pro“ | jednorázově | 990 (~5 h) / 1 920 (~8 h) / 2 800 (~12 h) / 4 100 zł (~18 h, BQ connection) → ~200–240 zł/h | (setup) | ne | ano (setup) | E4-039 |
| Agencja KS | ks.pl/ads | „Pakiet Optimum: Kompleksowa analityka (GA4 + GTM)“ v rámci Google Ads | fixed_package (PPC) | 990 / 1 490 zł/měs | D1, F3 (jako doplněk PPC) | ne | ano | E4-040 |
| DevaGroup, Sebastian Radwan, digitalk, MCS Group | – | setup 1 000–3 000 zł; „stały kontakt wsparcia“ | jednorázově | – | (setup) | ne | částečně | (viz poznámky) |
| Bluerank, Semahead (→ WeNet), Ideo Force, Whites | – | žádná veřejná nabídka správy | – | – | – | – | ne | – |
| In-house analytik (Conversion.pl blog) | conversion.pl/blog/ile-kosztuje-zatrudnienie-analityka-internetowego/ | mzda | salary_proxy | mid 8–14 k zł netto/měs (B2B); roční plný náklad > 200 k zł | – | – | ano | E4-035 |
| Freelanceři IT PL (PIT.pl) | – | – | hourly_rate | mid 130–190, senior 200–300+ zł/h | – | – | ano | E4-041 |

**Typické struktury PL:** správa se prodává buď jako **hodinový balíček** (5 h/měs), nebo **kapacitní tiery bez ceny** (surowiecki),
nebo je **zabalená do PPC správy** (KS, Echo). Velké agentury (Conversion, Cube) mají službu pojmenovanou, ale bez rozsahu a ceny.
Hotline pro ad-hoc dotazy (H3) je u Conversion.pl oddělený produkt od „opieky“.

**Doslovné painy PL:**
- „Purchase nagle znika lub się dubluje; CMP zmienia sposób uruchamiania tagów; Dashboard przestaje się odświeżać; Błąd odkrywa dopiero człowiek.“ (surowiecki, E4-030)
- „Błąd wychodzi przy raporcie; Backlog nie ma właściciela; Każde zlecenie zaczyna się od discovery“ (surowiecki, E4-029)
- „analityka istnieje, ale nikt nie odpowiada za jej codzienną użyteczność“ (surowiecki – definice cílového klienta, E4-029)
- „Około 7 na 10 naszych klientów … nie wykorzystuje w pełni potencjału Google Analytics“ (Sempai, E4-037)

### 2.3 UK / Irsko (+ Barcelona jako EU anglofonní)

| Subjekt | Země | URL | Název služby (doslova) | Model ceny | Cena / tiery | Kódy aktivit | requires_bq | Veřejná cena | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| Measurelab | GB | measurelab.co.uk/solutions/managed-analytics/ | „Data Assurance“ / „Managed analytics support“ – „Monitoring, maintenance and governance on subscription“ | subscription | neuvedeno | A1–A3, B1, C6, E1, E3, F1, G1–G7, H2, H5 | ano pro pipeline část | ne | E4-042, E4-043, E4-044 |
| Fresh Egg | GB | freshegg.co.uk/data-and-insight/ | „GA4 optimisation and support“; monitoring „Inspectre Insights“ nad BigQuery | fixed_package | „from £1,750“ (snippet, **neověřeno**) | A1, C, F3, G1–G3 | volitelně | ne (na webu) | E4-045, E4-046, E4-047 |
| KRM Digital | GB | krmdigital.uk/digital-marketing-services/ga4/ | „GA4 Consulting“; „Dedicated analytics support each month“ (pro agentury) | hourly_rate (den) | £1 000/den; setup £400–850/property; audit £850; Power Hour £200; training od £1 500 | A2, C1, H3, H4 | ne | **ano** | E4-048 |
| Webdigita | GB | webdigita.co.uk/google-analytics-consulting-services/ | „Optimisation Retainer – Monthly measurement upkeep“ | retainer | neuvedeno; „Reply within 15 minutes during UK hours“ | A1, C, F1, H2, D4 | ne | ne | E4-049 |
| Hookflash (G-Cloud) | GB | digitalmarketplace…/386727010772429 | „Google Analytics (GA4) Support Services“ | day rate | £800–900/den; same-day response | A2, C, F1, F3 | ne | **ano** | E4-050 |
| Merkle/Dentsu (G-Cloud) | GB | digitalmarketplace…/843534734432015 | „Google Analytics 4 (GA4)“ – continuous monitoring and support | day rate | £850–1 950/den; response 24 h | C, E, F | volitelně | **ano** | E4-051 |
| Bind Media | GB | bind.media/…/google-analytics-4 | „flexible retainer packages for GTM & Google Analytics“ | retainer | neuvedeno („from £750 per project“ dle Web Tonic) | A2, F5, I1 | ne | ne | E4-061 |
| Dolphin Analytics | GB | dolphinanalytics.co.uk/blog/… | (návod: audit / projekt / měsíční retainer / denní sazba) | – | – | – | – | – | E4-052 |
| Nezávislí konzultanti UK (L. Bullock) | GB | lilachbullock.com | „ongoing management … retainer“ | fixed_package | £150–600/měs; build £400–1 500 | C4, A2, F5 | ne | ano (rozpětí) | E4-053 |
| ITJobsWatch London | GB | itjobswatch.co.uk | GA contract | salary_proxy | medián £525/den (+23,5 % YoY) | – | – | ano | E4-054 |
| Clutch UK | GB | clutch.co/…/ga4-consulting-services/uk | – | hourly label | $100–149/h; min $1 000–10 000 | – | – | ano | E4-055 |
| Tasman Analytics | GB | tasman.ai | „Fixed-price sprints“; „make ourselves redundant“ | projekt | neuvedeno | – | – | ne | E4-076 |
| Khalid Farhan | IE | khalidfarhan.com/…/ireland | „Analytics services in Ireland“ | fixed_package | „start from €1,500/month“ | A, C, F1, I1 | ne | **ano** | E4-057 |
| Amplio Data | ES | ampliodata.io/pricing | „Maintained“ / „Managed“ / „Custom“ | tiered | Maintained 700–1 200 €/měs; Managed 1 800+ €/měs; month-to-month | Maintained: A1, A5, B1, C1, D1, F1, F3, G7; Managed: + E1–E5, G1–G3, F4, I1 | Maintained ne / Managed **ano** | **ano** (v blogu) | E4-058, E4-059 |
| Littledata | GB | littledata.io/pricing | SaaS (Shopify → GA4/Meta/Ads) | saas | $0,35/objednávka; Scale $159 (1 500 obj.); Plus $792 (10 000 obj., SLA) | D1, D2 | ne | ano | E4-060 |
| Measure Minds, Loves Data (AU) | GB/AU | – | web blokoval / jen školení | – | – | – | – | ne | – |

**Typické struktury UK:** (1) **denní sazba** jako univerzální jednotka (800–1 950 £/den; G-Cloud, KRM) – „retainer“ = předplacené dny;
(2) **pojmenovaný subscription produkt bez ceny** s velmi konkrétní dodávkou (Measurelab: tracking health monitoring, pipeline observability,
SLA-backed tag management, dedicated client lead, client portal); (3) **dvouúrovňová fixní cena** s BQ jako zlomem (Amplio).
Osy ceny, které UK zdroje vyjmenovávají: počet domén/webů, počet platforem, GTM, consent mode, sGTM, BigQuery, hloubka e-commerce, taxonomie eventů (E4-049, E4-052).

**Doslovné painy UK:**
- „Tracking drifts when consent requirements change. Pipelines break when an upstream schema does. Dashboards stop reflecting the business after a rebrand. … Usually happens gradually, nobody raises the alarm until damage is done.“ (Measurelab, E4-043)
- „Two reports disagree and nobody can say which one is right“ (Measurelab, E4-042)
- „A replatform, redesign or consent change broke tracking“; „You've inherited a GA4 account and have no idea whether to trust it“ (Dolphin, E4-052)
- „Conversions or revenue do not match platform totals“; „Multiple containers and tags create duplication“ (Webdigita, E4-049)
- „GA4 tells you what changed but not why; you still have to investigate manually.“ (Fresh Egg o GA4 Insights, E4-046)
- „monitoring, the fixes when tags break after a redesign, and monthly reporting … 20-40% of conversions often go missing“ (Amplio, E4-058)

### 2.4 Nordics / NL (+ SE SaaS)

| Subjekt | Země | URL | Název služby (doslova) | Model ceny | Cena / tiery | Kódy aktivit | requires_bq | Veřejná cena | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| Manids ApS | DK | manids.dk/hvad-koster-tracking-setup-… | „Minimum vedligeholdelse“ / „Aktiv vedligeholdelse“; „Server-side vedligeholdelse“ | tiered | Aktiv 3 000–8 000 DKK/měs; sGTM údržba 2 000–5 000 DKK/měs; infra 300–2 000 DKK; setup GA4 6–40 k DKK | Minimum: A1 (kvartálně), A2, G7; Aktiv: + C1, F3, F4; sGTM: A5, G5, D1, D2 | ne | **ano** | E4-065, E4-066 |
| Webanalist | NL | webanalist.com/google-analytics-uitbesteden/ | „Performance Marketing Support“ | fixed_package | vanaf 250 €/měs; 60–150 €/h; setup 495–795 € | C4, A2, D4, H3 | ne (enterprise s BQ na míru) | **ano** | E4-067, E4-068 |
| GA4Support / Attributions | NL | ga4support.nl | „Basis“ €499 jednorázově / „Advanced“ vanaf €20/měs (sGTM) | setup + hosting | 499 € / od 20 €/měs; audity od 450 € | A3, A4, B1, A5 | ne | ano | E4-069 |
| Follo (ex OrangeValley) | NL | folloagency.com/nl/insights/… | „Google Analytics Quality Control Monitor“ | saas-like | „voor vast (zeer laag) bedrag per maand“ | C1, C6 (monitoring konfigurace) | ne | ne (jen „nízká“) | E4-070 |
| Govanalytics | NL | govanalytics.nl | „volledig beheerd traject“ (obce) | fixed_package | 6–8 k €/rok; „basisrapportages een paar honderd euro per maand“ | B3, F3, H5 | ne | ano (rozpětí) | E4-071 |
| Precis | SE | precis.com/services/data-and-analytics | „Data engineering“, „monitoring and health alerts“; platforma Alvie na BigQuery | engagement | neuvedeno | E1–E6, G1–G3, I1, I3 | ano (BQ-first) | ne | E4-072 |
| Viva Media, Exsitec | SE | vivamedia.se, exsitec.se | „Löpande Support & Optimering“ | – | neuvedeno | A2, G7 | ne | ne | E4-073 |
| NiceLookingData | SE | nicelookingdata.com/pricing | „Analytics-as-Code“ – Free / Pro / Agency | saas | 0 / 49 / 199 $/měs; 61 GA4 + 44 GTM checks, denní re-audit | C1–C4, A3, A6 (auto) | ne | ano | E4-063, E4-064 |
| TAGGRS | NL | taggrs.io/prices/ | sGTM hosting FREE/BASIC/PRO/ULTIMATE/ENTERPRISE | saas | 0 / 22 / 57 / 127 €/měs; SLA až Enterprise | (infrastruktura) | ne | ano | E4-074 |
| M. Kupperschmidt | DK | bluerivermountains.com | freelancer; „a monthly retainer fee can be arranged“ | hourly_rate | 130 $/h | A, D2, A5 | ne | ano (hodinová) | E4-075 |
| Adapt | DK | adaptagency.com | „Data & Insights“ | – | neuvedeno | – | – | ne | – |

**Typické struktury Nordics/NL:** DK má **nejčitelnější dvoustupňovou údržbu** (Minimum = kvartální kontrola sběru + aktualizace tagů + rychlé
opravy; Aktiv = měsíční review + úpravy eventů/konverzí + reporting + poradenství) a **odděluje údržbu sGTM jako samostatnou položku**.
NL trh je levný a produktizovaný v setupu (495–795 €), správa „od 250 €“. SE je domov dvou protipólů: Precis (BQ-first data platforma
v ceně engagementu, bez ceny) a NiceLookingData (SaaS za 49 $ tvrdící, že nahradí 80 % rutinní práce).

**Doslovné painy Nordics/NL:**
- „Tracking bliver sat op, testet én gang og derefter glemt. Seks måneder senere er halvdelen af opsætningen brudt.“ (Manids, E4-066)
- „En virksomhed har kørt Google Ads i et halvt år, rapporteret 200 konverteringer i platformen, men … i CRM-systemet, er tallet 40 procent lavere.“ (Manids, E4-066)
- „GA4 giver ingen fejlmeddelelse, når en konvertering er sat forkert op.“ (Manids, E4-066)
- „Je data klopt niet maar je weet niet waarom“; „Je hebt geen tijd om GA4 bij te houden“ (Webanalist, E4-068)
- „The retainer becomes a slow drip of small fixes. The audit-and-monitor work that doesn't need a human eats the budget meant for strategy.“ (NiceLookingData o agenturách, E4-063)

---

## 3. INTERPRETACE

### 3.1 Co je standard napříč EU (obsah „správy“)

Průnik toho, co nabídky s vyjmenovanou dodávkou obsahují (LEMONTEC, ADS-Tracking, Manids, Amplio, Measurelab, Webdigita, surowiecki, Beyond Media):

| Vrstva taxonomie | Standard (≥ 5 z 8) | Diferenciátor (≤ 3 z 8) |
|---|---|---|
| A – tagging/GTM | A1 QA po releasu, A2 změny tagů, G7 opravy | A3 governance/verzování (Measurelab), A6 úklid |
| B – consent | B1 kontrola chování tagů dle consentu (Amplio, Measurelab, Manids) | B2 consent impact analysis (Amplio Managed) |
| C – GA4 hygiena | C1 klíčové eventy/konverze, C5 reakce na změny GA4 (LEMONTEC „proaktivní úpravy“) | C6 správa přístupů jako „platform governance“ (Measurelab) |
| D – ad platformy | D1/D2 provoz konverzí do Ads/Meta (u všech sGTM nabídek) | D5 rekonciliace vs. backend (Manids jako pain, ne jako služba) |
| E – BigQuery | – (nikdy standard) | E1 pipeline observability (Measurelab), E3/E5 DWH modelování (Amplio Managed) |
| F – reporting | F3 měsíční report (Manids Aktiv, Amplio, Hookflash) | F4 kvartální strategy review (Amplio Managed), týdenní automatický report |
| G – alerting | G1/G4 monitoring eventů/tagů (LEMONTEC denně top 10, Manids, Grundauf live) | G2/G3 anomálie nad BQ (Measurelab ARIMA, Fresh Egg Inspectre) |
| H – komunikace | H3 ad-hoc dotazy, H5 reakční doba (Webdigita 15 min, Hookflash same-day, Measurelab SLA) | H2 živá dokumentace (Webdigita, surowiecki), klientský portál (Measurelab) |
| I – analýzy | – | I1 v rámci vyšších tierů (surowiecki INSIGHT, Amplio Managed) |

Závěr: **„správa“ v EU = A1+A2+C1+C5+G1/G4+G7+F3+H3/H5**. To odpovídá tomu, co taxonomie označila za „jde bez BQ“. BigQuery
a vrstva E se objevují výhradně jako vyšší tier nebo jako oddělený „data engineering“ engagement.

### 3.2 Kde končí retainer a začíná data engineering

- **Retainer** (fixní měsíční cena, month-to-month): GA4+GTM+sGTM provoz, monitoring eventů, opravy, měsíční report. Cena 200–1 500 €/měs.
- **Data engineering** (projekt + následný „managed“ provoz): BigQuery DWH, transformace, anomálie nad exportem, CRM joiny. Objevuje se
  buď jako **vyšší tier retaineru** (Amplio Managed od 1 800 €, tj. ≈ 1,5–2,5× cena nižšího tieru), nebo jako **projekt, který agentura
  pak sama provozuje** (Measurelab „We manage the products we build“, Precis Alvie). Nikde jsme nenašli veřejnou cenu za čistý „BQ retainer“.
- Hranice v praxi: jakmile je součástí dodávky **transformační kód (SQL/Dataform) a monitoring pipeline**, mění se i tým (Amplio: „dedicated
  senior analyst **and engineer**“) a cena skáče. To potvrzuje taxonomii §2 (dvouúrovňový model).

### 3.3 Podle čeho se škálují tiery

1. **Traffic / sessions / requesty / objednávky** – u všeho, co provozuje infrastrukturu (ADS-Tracking, Littledata, TAGGRS, GTM-Hosting). Logika: náklad na provoz + význam výpadku.
2. **Kapacita / hodiny** – u konzultantů (ananalytics 5 h; surowiecki tři kapacity; coders.dev 10–20 vs. 30–50 h; UK předplacené dny).
3. **Hloubka dodávky s jasným zlomem** – Manids Minimum (kvartálně) → Aktiv (měsíčně + report); Amplio Maintained (bez BQ) → Managed (BQ + anomálie + týdenní report + kvartální strategie).
4. **Reakční doba / SLA** – jen u UK (Measurelab „SLA-backed tag management“, Webdigita 15 min, Hookflash same-day, Merkle 24 h); v DACH/PL se SLA veřejně neuvádí.
5. **Počet properties/webů** – jen SaaS (NiceLookingData Agency, Littledata per brand) a jako osa ceny „na dotaz“ (Webdigita, Dolphin). Žádná evropská agentura nemá veřejný ceník „per property“.
6. **Vazba** – zajímavý kontrast: LEMONTEC a Amplio „bez vazby / month-to-month“ vs. ADS-Tracking „12 měsíců + roční předplatba“.

### 3.4 Cenová úroveň DACH/PL vs. UK (normalizováno na CZK/měs)

| Segment | DACH | PL | UK/IE | NL/DK |
|---|---|---|---|---|
| Nejlevnější správa bez BQ (fixní) | 4 975 (LEMONTEC 199 €) | 6 090–6 960 (Echo 1 050 zł; ananalytics 5 h) | 4 350–17 400 (nezávislí 150–600 £) | 6 250 (Webanalist 250 €); 10 050–26 800 (Manids Aktiv) |
| „Střední“ správa (agentura, měsíční report) | 20 000–37 500 (Saphir FAQ) | neuvedeno (na dotaz) | 37 500–50 750 (Farhan 1 500 €; Fresh Egg 1 750 £ neověř.) | 17 500–30 000 (Amplio Maintained, ES) |
| S BigQuery / anomáliemi | neuvedeno | neuvedeno | 45 000+ (Amplio Managed) ; Measurelab neuvedeno | Precis neuvedeno |
| Hodinová sazba ×10 h | 26 000–34 750 (104–139 €/h) | 7 540–17 400 (130–300 zł/h) | 23 000–36 250 (100–149 $/h; 800–1 000 £/den) | 15 000–37 500 (60–150 €/h); 29 900 (130 $/h DK) |
| Managed sGTM (provoz + monitoring) | 4 475–32 475 (ADS-Tracking podle sessions) | – | – | 6 700–16 750 (Manids sGTM údržba) |
| In-house proxy | – | 46 400+ (mid analytik 8 k zł netto) | 19 000/10 h (kontraktor 525 £/den) | – |

Čtení: **PL hodinové sazby jsou ~2–3× nižší než DACH/UK**, ale **fixní balíčky správy na spodní hranici jsou v PL, AT a NL téměř stejné
(5 000–7 000 CZK)** – protože jde o malý rozsah (5 h) nebo automatizovaný monitoring. UK je dražší hlavně ve „střední“ vrstvě
(agenturní retainer 1 500–1 750 £/€). DACH střed (800–1 500 €) je zhruba 1,5–2× nad tím, co lze čekat v ČR podle H3 (5–20 h × 1 200–2 500 Kč = 6 000–50 000 Kč),
tedy **ČR cenu nelze přebírat z DACH 1:1, ale spodní PL/AT hranice je dobrá kotva pro „basic“ tier**.

### 3.5 Co to říká k hypotézám

- **H1 (BQ-first)** – *vyvráceno v silné podobě, potvrzeno ve slabé*. Správa bez BQ existuje, prodává se a má jasný obsah (3.1). BQ je konzistentně
  **zlom mezi tiery** (Amplio) nebo **vstupenka do „managed data products“** (Measurelab, Precis, Fresh Egg Inspectre). surowiecki výslovně dělá
  monitoring i nad Power BI/Looker Studio (E4-030). → Doporučení: dvouúrovňový model, BQ jako vyšší tier, ne jako podmínka.
- **H2 (tiché rozbití)** – *silně potvrzeno* 24 pain záznamy (N4-001…024). Kvantifikace: 15 dní (cookie lišta, N4-004), měsíce (LEMONTEC, N4-001),
  6 měsíců a 40 % odchylka vs. CRM (Manids, N4-009), „polovina setupu rozbitá po 6 měsících“ (N4-008). Spouštěče v pořadí četnosti:
  `release_web` (6), `ad_platform_change` (4), `consent_change` (3), `unknown_owner` (3), `revenue_mismatch` (2), `gtm_change_dev`, `ga4_change`, `connector_token`, `access_lost`, `platform_migration`, `browser_change` (po 1).
- **H3 (žádný veřejný ceník, odvození od sazeb)** – *platí i pro EU*: 9 veřejných cen z 58 subjektů; velké agentury (Trakken, e-dialog, FELD M, Conversion.pl, Bluerank, Cube, Measurelab, Fresh Egg) ceny nemají. Kde je cena, je to malý hráč nebo produktizovaný balíček.
- **H4 (retainer jako produkt s tiery a vyjmenovanou dodávkou)** – *potvrzeno strukturálně, ne cenově*. Nejlepší předlohy struktury:
  Measurelab Data Assurance (dodávka), Amplio Maintained/Managed (tiery), Manids Minimum/Aktiv (kadence), surowiecki RUN/CHANGE/INSIGHT (proudy práce),
  LEMONTEC (jednoduchý balíček bez vazby). Odhad 1 500–10 000 USD/měs z H4 odpovídá UK/US střední vrstvě, v DACH/PL je dolní hranice 5–10× níž.
- **H5 (SaaS nahrazuje část hodnoty)** – *potvrzeno a zpřesněno*: SaaS za 49–199 $/měs dělá detekci (C1–C4, A3, A6, G1/G4); to, co nástroje samy
  vylučují, je „strategy, stakeholder interviews, custom dashboards, one-off investigations“ (E4-064) a diagnóza „why“ (E4-046). Služba se tedy má
  prodávat na **G7 + H1–H5 + F3/F4**, s tím, že detekci koupí (nebo postaví) sama.

### 3.6 Kdy klientovi správu doporučují (trigger) – shrnutí z EU zdrojů

- „once the tracking needs ongoing care“ = po dokončení setupu, když „measurement becomes a responsibility rather than a task“ – běží placené kampaně závislé na konverzích, nebo se reportuje boardu/klientům (Amplio, E4-058).
- Po incidentu: „A replatform, redesign or consent change broke tracking“; „You've inherited a GA4 account“ (Dolphin, E4-052).
- Když „data nesedí a nevíš proč“ / není čas GA4 udržovat (Webanalist, E4-068).
- Když „analityka istnieje, ale nikt nie odpowiada za jej codzienną użyteczność“ (surowiecki, E4-029).
- sGTM (a tím i jeho správa) až od ad spendu 2 000 €/měs (AT/DE) resp. 15–20 k DKK/měs (DK) – E4-015, E4-065.
- Veřejný sektor NL: compliance termíny (DPIA, NIS2), bez interního analytika (E4-071).

---

## 4. DOPORUČENÍ pro DataLayer.cz (převzít strukturu, ne ceny)

1. **Dvouúrovňový model s BigQuery jako zlomem, ne jako podmínkou** (Amplio Maintained/Managed, Manids Minimum/Aktiv). Nižší tier =
   A1, A2, B1, C1, C5, D1/D2, G1/G4 (přes GA4 Data API / GTM monitor), G7, F3, H3/H5. Vyšší tier = + E1–E5, G2/G3 nad exportem, F4, I1.
2. **Pojmenovat proudy práce jako surowiecki (RUN / CHANGE / INSIGHT)** – klient vidí, že „správa“ není jen opravy, ale i backlog změn a odpovědi na otázky; zároveň to jasně odděluje, co je nad rámec.
3. **Kadence jako Manids**: nižší tier = kvartální revalidace sběru + opravy při problému; vyšší = měsíční review + report + úpravy eventů. Kadence je pro klienta srozumitelnější než hodiny.
4. **Zveřejnit alespoň spodní tier s cenou a „bez vazby“** (LEMONTEC 199 €, Amplio month-to-month). V EU jsou veřejné ceny vzácné → sama transparentnost je diferenciátor; ADS-Tracking ukazuje, že 12měsíční vazba je možná až u infrastrukturního produktu.
5. **Oddělit provoz sGTM jako samostatnou položku** (Manids „Server-side vedligeholdelse“, ADS-Tracking podle sessions). Škálovat ji podle trafficu, ne hodin; hosting (Stape/GCP) fakturovat průchozím způsobem.
6. **Osy ceny komunikovat explicitně** jako Webdigita/Dolphin: počet domén, počet ad platforem, sGTM ano/ne, BQ ano/ne, hloubka e-commerce. Bez veřejného „per property“ ceníku – v EU ho nikdo nemá.
7. **Dodávka, kterou klient dostane do ruky** (z Measurelab/Fresh Egg): měsíční „plain-language briefing“ (F3), health-check checklist (E4-047 jako šablona pro C1–C6), changelog změn (A3/H2), pojmenovaný „client lead“ a reakční doba (H5). UK ukazuje, že SLA je prodejní argument i bez BQ.
8. **Painy do komunikace brát doslova z EU (přeložené)**: „event se měsíce neměří a nikdo si nevšimne“, „po redesignu bylo všechno jinak“, „dva reporty si odporují a nikdo neví, který je správný“, „GA4 nehlásí chybu, když je konverze špatně nastavená“. Vyhýbat se „lepší data pro lepší rozhodnutí“.
9. **Pro segment agentur**: white-label správa jako Grundauf (+15 % k ceně pro koncového klienta, NDA, e-mail alias) a KRM „Analytics Support For Agencies“ – v ČR patrně nikdo nenabízí.
10. **Vůči SaaS**: nekonkurovat detekci (NiceLookingData 49 $, Follo). Detekci mít v ceně (vlastní nebo nástroj), prodávat G7 + komunikaci s vývojáři + interpretaci – přesně to, co SaaS sami vylučují.

---

## 5. Mezery rešerše

- **Vyhledávací rozpočet došel** po ~200 dotazech; část hráčů ze zadání jsme neotevřeli nebo nenašli: Analytics Heroes (nenalezeno – patrně
  neexistuje pod tímto jménem), Ideo Force, Whites (PL), Data to Value (DNS nefunkční), Dataroom, Datatrics, Orangeloops, Adapt (jen homepage),
  Evolytics (US – fáze 5), Measure Minds (web blokuje fetch), Loves Data (jen školení).
- **Neověřené ceny ze snippetů**: argoberlin 190 €/měs a 106 €/h (stránka 404), Fresh Egg „from £1,750“ (na webu nenalezeno). V CSV označeno „NEOVĚŘENO“, v syntéze používat s nízkou váhou.
- **Chybí veřejná cena čistě BQ retaineru** – jediný cenový bod je Amplio Managed 1 800+ €. Measurelab, Precis, Fresh Egg BQ služby nezveřejňují.
- **PL velké agentury** (Conversion, Cube, Bluerank) mají služby pojmenované, ale rozsah a cenu jen na dotaz → pro PL cenovou hladinu máme jen freelancery/malé agentury (1 050–1 200 zł/měs) a hodinové sazby.
- **Salary proxy** máme jen PL (Conversion.pl) a UK (ITJobsWatch); DE/NL/DK platové stránky se nepodařilo načíst.
- **Reakční doby/SLA** v DACH a PL veřejně prakticky neexistují – pro srovnání s ČR chybí.
- **Belgie, Norsko, Finsko, Švýcarsko** nepokryty (CH jen v kurzu). Itálie jen okrajově (Tag Manager Italia bez cen).
- Clutch štítky pro DE/PL v kategorii „analytics“ vracejí IT outsourcing, ne GA agentury – jako proxy pro správu GA4 málo použitelné (E4-056).
- Painy jsou převážně z agenturních webů a blogů (druhá ruka); přímé hlasy klientů jen 3 vlákna Shopify DE komunity (E4-024–026). Fáze 7 by měla doplnit Reddit/komunity v DE/PL.
