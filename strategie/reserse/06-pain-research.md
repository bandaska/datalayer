# Fáze 7 – Pain research: co se klientům v analytice reálně rozbíjí

Stav: verze 1 (2026-09-04), doplněno 2. kolem (2026-09-05) – viz § 0. Data: `data/fragments/07-pain.csv` (185 výpovědí, N7-001…185),
`data/fragments/07-evidence.csv` (154 zdrojů, E7-001…154), `data/fragments/07-pricing.csv` (19 řádků, P7-001…019).
Kódy `what_broke` a aktivit A1–I3 podle `00-taxonomie-sluzby.md`.

Metodická poznámka k rozsahu: rozpočet vyhledávače WebSearch byl v této session vyčerpán po 14 dotazech, Reddit,
Stack Overflow, G2 a Webtrh blokují přímé načtení. Náhradní kanály: interní vyhledávání Shopify Community (Discourse JSON),
Shoptet Partneři (poptávky e-shopů), Brave Search snippety (Reddit), Yahoo/Seznam (CZ/DE), LinkedIn posty, Trustpilot,
Shopify App Store recenze, jobs.cz/profesia.sk. Reddit citace jsou proto **snippety z vyhledávače** (označeno v `notes`
evidence), ne celé posty. Sloupec `has_bq`: `yes` = autor explicitně pracuje s BQ exportem; `no` = autor řeší problém
výhradně v GA4/Ads/Shopify UI a BQ nezmiňuje; `unknown` = blog/agentura bez kontextu.

---

## 0. Doplněk verze 2 (2026-09-05) – co změnilo 2. kolo

Korpus vzrostl z 185 na **536 výpovědí**. Rozložení se nepřevrátilo, ale tři věci je nutné číst jinak:

1. **Podíl klientů bez BigQuery je vyšší, ne nižší:** 409 z 536 (76 %) je bez BQ; mezi výpověďmi, kde je
   stav BQ známý, je to **88 %**. H1 v silné podobě zůstává vyvrácena.
2. **Česká a slovenská část je z 69 % z druhé ruky.** CZ+SK má 139 řádků (26 % korpusu), ale prvorukých
   (fórum, marketplace, support komunita) je jen **43 = 8,0 % korpusu**. Celé slovenské doplnění pochází
   z blogů a webů dodavatelů → **H2 není na SK doložena ani jednou výpovědí klienta.**
3. **Český vzorek popisuje jiný pain než globální.** Nejčetnější CZ+SK kódy jsou `consent_change` 20,
   `gtm_change_dev` 18, `unknown_owner` 18, `release_web` 18 – tedy z velké části **„nikdy to nebylo
   pořádně nastavené“**, ne „fungovalo to a tiše se to rozbilo“. Pro české publikum je proto přesnější
   formulace „zkontrolujeme, jestli měříte správně, a pak to hlídáme“ než „vaše měření se tiše rozbilo“.

**Kvantifikace v korunách po 2. kole stále neexistuje.** Čtyři české částky, které se objevily v doplnění,
jsou po kontrole něco jiného, než jak vypadají: 410 000 Kč je rozpor v reportingu jednoho účtu (nerozlišené
B2B/B2C v dataLayeru), ne ztráta; 30 000 Kč je typizovaný výrok z marketingového blogu konkurenta;
Alza 70/18 tis. je provize affiliate partnera mimo předmět služby; Zboží.cz „několik tisíc“ je neplatný provoz.
**Žádnou z nich nepoužívat v externí komunikaci.** Nejlevnější cesta k doložené české částce vede přes
vlastní fakturaci a výkazy DataLayer.cz za 12–24 měsíců (kolo 3, C2).

Nově doložené z **primární dokumentace dodavatelů** (nejsilnější materiál 2. kola pro H2): GTM hlásí u tagu
„Succeeded“ a neodešle jediný request; GTM kontejnery „degraded automatically into a restricted state“ bez
oznámení; GA4 BigQuery export „will be paused and previous days' exports will not be reprocessed“; Looker
Studio alert se při rozbitém zdroji **sám vypne**. Google Ads označí tag za neaktivní až po **7 dnech** bez
konverze – doložená příčina, proč odhalení trvá týdny.

Podrobně: `10-doplneni-a-overeni-r2.md` § 1, § 5.1 (K9) a § 5.3.

---

## 1. Shrnutí

1. **185 výpovědí, 14 kódů.** Nejčastější spouštěče: `consent_change` (35), `platform_migration` (29), `revenue_mismatch` (24),
   `release_web` (14). Dohromady 60 % všech výpovědí tvoří tři věci: **cookie lišta / consent mode**, **platforma (Shopify,
   Shoptet, Google) změnila chování bez vědomí e-shopu** a **rozjetá čísla GA4 vs. backend**.
2. **H2 se potvrzuje velmi silně.** Typický příběh není „nemáme data“, ale „data se tiše rozbila“: „*They just stopped being
   counted*“ (N7-001), „*It fails silently by design*“ (N7-156), „*No warning email. No grace period.*“ (N7-056),
   „*Their numbers have been soft for months. They assume it's the market.*“ (N7-057).
3. **Doba do odhalení**: u release/checkout změn typicky 1–3 týdny; u consent změn 2 týdny až 3 měsíce (root cause i 8 měsíců);
   u atribuce (direct/(not set)) měsíce až rok; u BQ exportu dny až týdny („*checked/queried a few weeks later*“, N7-134);
   u vlastnictví/dokumentace 6 měsíců až 3 roky. Kdo si všimne za den, má **denní porovnání objednávek vs. konverzí**
   („*pretty consistent conversion data so its pretty obvious when something stops working*“, N7-165).
4. **Dopad je téměř vždy stejný: slepý spend.** Smart Bidding a Meta algoritmus reagují na výpadek konverzí během hodin
   (N7-027), CPA roste dřív, než to dashboard ukáže (N7-026). Kvantifikace: −90 % konverzí přes noc, 60 % dat nevratně
   (N7-055/058); 60 000 USD za 75 dní (N7-012); 4 400 EUR v „learning phase“ za 2,5 měsíce (N7-172); 60 dní do mrtvého pixelu
   a CPA 15× (N7-078/079); 40–80 % konverzí chybí napříč platformami (N7-051).
5. **Klient bez BigQuery má naprostou většinu painů** (133 z 185 výpovědí je od lidí, kteří BQ nezmiňují): consent, release,
   platforma, Ads konverze, direct/(not set), přístupy. BQ-specifické painy (export díry, faktura) jsou reálné, ale úzké
   (13 výpovědí). Co ale bez BQ **nejde**: rozlišit ztrátu od duplicit („*If you lose five purchase events and fire five
   duplicates in the same day, your daily count comparison shows a perfect match*“, N7-157) a spolehlivá reconciliace
   po transaction_id (N7-154). → H1 v silné podobě **vyvrácena**, dvouúrovňový model potvrzen.
6. **Český trh**: 21 CZ/SK výpovědí, hlavně z poptávek e-shopů na Shoptet Partneři (53 poptávek v kategorii Analytika
   2023–2026) a komentářů na blogu Shoptetu. Formulace jsou méně dramatické, ale stejné: „*aktuálně přestalo správně fungovat
   měření konverzí*“ (N7-184), „*spousta dat zbytečně chybí*“ (N7-093), „*převážně zkusmo nastavena cca 3 roky*“ (N7-092),
   „*proč nám PPC a Analytics stále vyhazují, že nepovolujeme souhlas v rámci EHP*“ (N7-074). Jeden zadavatel výslovně
   chce „jednorázovou opravu měření a pak **pevný měsíční paušál**“ (E7-109) – to je přesně vstupní bod do správy.

---

## 2. FAKTA

### 2a. Katalog „co se rozbíjí a proč“

Počty = výpovědí v `07-pain.csv` s daným kódem. Doba do odhalení a dopad = typické hodnoty z výpovědí, kde jsou uvedeny.

| Kód | N | Typická doba do odhalení | Typický dopad | Doslovné citáty (evidence) |
|---|---|---|---|---|
| `consent_change` | 35 | dny–2 týdny (propad Ads konverzí) až 3 měsíce (postupný pokles přesnosti); root cause i 8 měsíců (N7-052) | 40–90 % konverzí zmizí z Ads/GA4, kliky stejné → Smart Bidding bez signálu; data z nekompliantního období nevratně ztracena | „*tracked to orders at around 98% accuracy. Since Pandectes implementation it has tracked to 55-65% accuracy*“ (E7-014) · „*I got a call last August from a client whose Google Ads conversions had dropped 90% overnight. They hadn't changed their campaigns.*“ (E7-099) · „*Since August 1 we see a sudden 40 - 80% drop in tracked conversions within GA4, Google Ads, Meta and other channels.*“ (E7-022) · CZ: „*Mně to totiž v Google ADS stále hlasí, že neposkytuji signály signály EHP.*“ (E7-107) |
| `platform_migration` | 29 | ~1–3 týdny; u atribuce až 12 měsíců (GoKwik, N7-035); u výpadku GA4 ID ~2 měsíce (N7-036) | purchase/konverze přestanou chodit u všech obchodů na platformě najednou; supporty si přehazují vinu | „*Essentially, the purchase event stopped firing since 15th of July.*“ (E7-001) · „*the number of conversion data being sent to facebook and google dropped to 60%*“ … „*we are also facing this same issue in more then 20 stores*“ (E7-006) · „*I'm devastated that I have no data from our biggest sale of the year*“ (E7-004) · CZ: „*po nasazení měření jsme dostali několik hlášení ohledně problémů s měření a proto jsme úpravu dočasně pozastavili.*“ (Shoptet, E7-133) |
| `revenue_mismatch` | 24 | často nikdy (považováno za normál), jinak při měsíčním/ročním srovnání; 1–2 dny jen s denní kontrolou | nedůvěra v data; nelze rozlišit blokátory od chyby; 20–50 % rozdíl bez vysvětlení | „*GA4 is recording less than half the revenue that shopify is showing.*“ (E7-005) · „*GA4 captured 36 purchases on 58 actual orders. Last week GA4 shows only 182 orders instead of actual 295. That's 38% less captures than reality.*“ (E7-069) · „*a 10-15% gap between GA4 and backend is common and generally acceptable. Above 20% and I start digging.*“ (E7-068) |
| `release_web` | 14 | ~2 týdny (klient hlásí „pokles leadů“); 75 dní bez auditu (E7-104) | ztráta konverzních dat z týdnů po launchi, spor agentura vs. klient, slepý spend | „*Then two weeks later the leads 'drop.' Except they didn't drop. They just stopped being counted.*“ (E7-101) · „*The GA4 migration had been completed by an external contractor six months prior. No post-migration audit had been conducted.*“ → $60k/75 dní (E7-104) · DE: „*Der Button funktionierte. Das Tracking war eingerichtet. Trotzdem: 0 Conversions.*“ (E7-102) |
| `gtm_change_dev` | 11 | 60 dní (mrtvý pixel), měsíce (fake konverze) | algoritmus se učí na nesmyslech; duplicity; marketing přijde o právo publikovat | „*one of our main campaigns had been sending conversion signals to a 'dead pixel'...for approximately 60 days.*“ (E7-024) · „*318 conversions. $1,270 spent. Zero real leads.*“ (E7-100) · „*Duplicate tags—the new developer added a GA4 tag without knowing one already existed*“ (E7-052) |
| `unknown_owner` | 11 | 6 měsíců – 3 roky | strach cokoli měnit; nikdo neví, co je správně; „zkusmo“ | „*Your GTM container has 47 tags, 83 triggers, and 120 variables. The developer who built it left six months ago.*“ (E7-052) · CZ: „*převážně zkusmo nastavena cca 3 roky*“ (E7-117) · CZ: „*Dělali jsme to bez nějaké větší znalosti sami … spousta dat zbytečně chybí, v ads se nám zase například neukazuje hodnota konverze*“ (E7-110) |
| `bq_export_gap` | 11 | dny–týdny („*checked/queried a few weeks later*“) | trvalé díry v historii (backfill nejde), selhávající transformace, tichý propad objemu | „*data collection was halted due to invalid payment details — with no further notifications until the table data was checked/queried a few weeks later*“ (E7-042) · „*Everything was working fine until 2025-11-23 … ~540k rows daily...Starting 2025-11-24, the exported tables only have about 5k rows per day*“ (E7-037) · „*Data gets not refreshed over the next days, so that we are facing a huge data gap for that day.*“ (GA360, E7-043) |
| `utm_chaos` | 11 | týdny–6 měsíců | ROI kampaní neviditelné, rozpočet mezi kanály naslepo | „*'Direct' is dominating our acquisition reports, which is making it impossible to see the true ROI of our campaigns.*“ (E7-058) · „*90% of all conversions are being incorrectly attributed as 'direct'*“ (E7-017) · CZ: „*presne identifikovat, zda dana objednavka vznikla organicky nebo z jakeho kanalu/kampane (Google, Seznam, Facebook, mailing)*“ (E7-114) |
| `access_lost` | 9 | okamžitě (při odchodu/ukončení) | ztráta historie GA4, nová property, týdny obnovy přes Google, vydírání | „*Help: Agency won't give me access to Google tag manager!*“ (E7-045) · „*Historical GA4 data cannot be exported without account access, so a truly orphaned property means starting a new one*“ (E7-051) · „*I gave the agency 48 hours to give me access...*“ (E7-048) |
| `ad_platform_change` | 8 | dny–týden | konverze mizí po upgradu kampaně/API; EMQ klesá; nová pravidla (Signals 6/2026) | „*We were recently auto upgraded to Google Performance Max campaign and suddenly Google Ads stopped tracking conversions.*“ (E7-012) · CZ: „*opraví kritické chyby v naší implementaci [Meta CAPI] a zajistí nejvyšší kvalitu dat pro učení algoritmu*“ (E7-112) |
| `browser_change` | 7 | nikdy (strukturální) | 20–40 % podměření jako „normál“, který maskuje skutečné výpadky | „*On average only about 60% of client side tracking is successful, and that number keeps dropping.*“ (E7-067) · „*A gap of 10–30% is normal (ad blockers, iOS, consent).*“ (E7-016) · SK: „*Sme firma ktora ma 100% zakaznikov z iOS*“ (E7-115) |
| `connector_token` | 7 | dny; řešení týdny | dashboardy stojí, klient to vidí první | „*upgraded to a more expensive plan … All my reports stopped working*“ (E7-080) · „*Constant connection breaks … drags any sort of issue out for weeks.*“ (E7-080) · „*Funnel dismissed connectors without giving any communication to its clients*“ (E7-082) |
| `ga4_change` | 6 | 1–6 týdnů | eventy odesílány, ale GA4 je nezpracuje; Google odkazuje na „tag setup“ | „*Purchase events gets triggered, but is not tracked in GA4*“ (E7-029) · „*GA4 did work fine – then the reporting (only for these checkout events) stopped for once in a sudden*“ (E7-019) |
| `bq_cost_spike` | 2 | až z faktury | jednorázový šok | „*The invoice arrived: $9,847.24 for Three Queries?!*“ (E7-149) |

Poznámka: `ga4_change` je jako **pain** podreprezentován (lidé nevědí, že se změnil GA4 – vidí jen následek), ale jako
**důvod pro průběžnou správu** je velmi dobře doložen frekvencí změn (2c).

### 2b. Kvantifikované příklady dopadů

| Co | Číslo | Zdroj |
|---|---|---|
| Consent lišta nepředávala signály → konverze Ads | **−90 % přes noc**; 2 dny diagnostiky; **40 % obnoveno, 60 % trvale ztraceno** | E7-098, E7-099 |
| B2B SaaS, GA4 migrace externistou bez auditu | **60 000 USD za 75 dní** přes Google/Meta/LinkedIn; zjištěno až při přípravě na board | E7-104 |
| Meta kampaň na mrtvý pixel | **~60 dní**; 3 měsíce rostoucí spend při stagnaci konverzí; **PMax CPA 15×** (¥45 000 vs. ¥2–3 000) | E7-024 |
| Server-side app špatně nastavená (DE e-shop) | **2,5 měsíce a 4 400 EUR** v learning phase; 40–50 % konverzí nikdy nezměřeno | E7-084 |
| Český Shopify e-shop s Elevar | **35 % nepřesnost**, „několik měsíců nefunkční tracking“, **2 měsíce** blokované retargetingové audience, 5 dní do Black Week | E7-083 |
| Shopify změna 12.5.2023 | jen **60 %** konverzí do Google/Meta; **20+ obchodů**; nutnost snížit tROAS | E7-006 |
| Cookiebot změna integrace (8/2025) | **−40 až −80 %** konverzí napříč GA4/Ads/Meta; root cause popsán po **8 měsících** | E7-022 |
| Pandectes lišta | přesnost **98 % → 55–65 %** | E7-014 |
| Nativní Shopify lišta + CMv2 | z 80 objednávek **~40 → 16** konverzí v Ads | E7-023 |
| Shopify backend 9.11.2023 | **40–60 % objednávek denně** bez atribuce | E7-026 |
| GA4 vs. Shopify tržby | **−38 %** (182 vs. 295); **<50 %**; **67,23 %** zachyceno; **−20 %**; **−20 až −30 %** trvale, 1 den −30 % | E7-069, E7-005, E7-076, E7-073, E7-074 |
| BQ export | **7 dní** bez tabulek po migraci; **540k → 5k řádků/den**; **9 847 USD** za 3 dotazy | E7-034, E7-037, E7-149 |
| Odhad promrhaného spendu při rozbité atribuci (marketing nástroje) | při 50k USD/měs spendu **~23 500 USD/měs** | E7-105 |
| Cena ruční kontroly | „*A daily eyeball is two minutes. A proper weekly test order is more like twenty to thirty minutes per store*“ → „*ten stores thats most of a day every week*“ | E7-016 |
| CZ audity cookie lišt | z **250+** auditů **42 %** webů závažné problémy, **39 %** má lištu, ale funguje špatně; služba od **3 990 Kč** | E7-122 |
| In-house alternativa (CZ/SK) | Marketup reporting analyst **60–80 tis. Kč** (IČO); WPP SK Digital Analytics Expert **1 800–3 200 EUR**; Senior Data/Reporting **1 500–2 800 EUR**; s odvody ×1,34 → **72–107 tis. Kč/měs** | P7-001…004 |
| Hodinové sazby CZ (Shoptet partneři, analytika) | **1 000–2 000 Kč/h** | P7-009…013 |

### 2c. Důkazy o frekvenci změn prostředí

| Vrstva | Fakt | Zdroj |
|---|---|---|
| GA4 produkt | **16 datovaných změn leden–srpen 2026** (konverzní okno, hostname filtr, měření AI trafficu, Data API konverze, Source Group…) = ~2/měsíc | E7-125 |
| GA4 Data API | **17 změn 2023, 13 změn 2024** (kvóty, nové dimenze, chování reportů) | E7-126 |
| Google Ads API | **5 vydání za 8 měsíců 2026** (v24, 24.1, 24.2, v25, 25.1), každé s „breaking changes“ | E7-128 |
| Meta Graph/Marketing API | **3 verze ročně** 2023–2025, deprekace po ~2 letech (v25 2/2026, v26 7/2026) | E7-127 |
| Server-side GTM image | **4 vydání 2025** (Node 22 → 24), **3 vydání 2026** – nutné aktualizace kontejneru (aktivita A5) | E7-129 |
| Consent | CMv2 povinný pro EEA od **března 2024**; **21.7.2025** Google začal vypínat konverze/remarketing nekompliantním; **15.6.2026** Google Signals přestává řídit Ads data (ad_storage rozhoduje) | E7-107, E7-131, E7-098, E7-092, E7-132 |
| Shopify | 12.5.2023 změna → 60 % konverzí; 9.11.2023 backend změna → atribuce; 7/2024 deprekace checkout scriptů; **8/2025** (Plus) a **26.8.2026** (non-Plus) vypnutí ScriptTags na order status page | E7-006, E7-026, E7-001, E7-025, E7-015 |
| Shoptet | 12/2023 platforma změnila integrované GA4 měření a po hlášeních problémů úpravu pozastavila | E7-133 |
| Prohlížeče | 22.4.2025 Chrome **otočil** – 3rd-party cookies zůstávají, žádný nový prompt; prostředí se mění oběma směry | E7-130 |
| Seznam | 2026 nový server-side model měření pro Sklik (SEM přes sGTM) | Optimics blog (v notes), CZ-specifická změna ad platformy |

Závěr: každý měsíc přijde **aspoň jedna změna od Googlu, Mety nebo platformy e-shopu**, která může měření ovlivnit.
To je faktický základ argumentu „měření není projekt, ale provoz“.

### 2d. Co říkají inzeráty na pozice (co si firma platí interně)

Náplň práce z 12 inzerátů (CZ/SK, 8–9/2026) – opakující se položky, mapované na kódy:

| Úkol z inzerátu (doslova) | Kód aktivity | Zdroj |
|---|---|---|
| „*monitoring a analýza chování uživatelů na webových stránkách a v aplikacích*“, „*sledování funnelů a identifikace míst, kde zákazníci odcházejí*“ | I1, F3 | O2, E7-134 |
| „*tvorba a aktualizace reportů, interpretace dat a prezentace výsledků*“, „*definování a sledování klíčových KPI*“ | F1, F3, F4 | O2, E7-134 |
| „*spolupráce s vývojáři, marketingem i externí digitální agenturou*“ | H1, H5 | O2, E7-134 |
| správa analytiky a reportingu napříč firmou „*Power BI, GA4, GTM*“ | A2, C1, F1 | Ušetřeno.cz, E7-135 |
| konfigurace webové analytiky „*GA4, Google Tag Manager*“ pro 90+ poboček | A2, A3, C6 | BTL, E7-136 |
| „*od sběru dat, přes datové sklady až po finální produkty*“, detekce anomálií, GCP/BigQuery | E1–E5, G1–G3 | Marketup 60–80k, E7-137 |
| „*Implement automated data quality controls and anomaly detection*“, Keboola/Dataform/BigQuery | E3, G1, G6 | Heureka, E7-140 |
| audity „*GA4, Google Tag Manager, and dataLayer*“, měření konverzí Ads/Meta, sGTM, Consent Mode v2 | A4, D1, D2, A5, B1 | WPP SK 1 800–3 200 EUR, E7-143 |
| „*Monitorovanie, auditovanie a zabezpečovanie kvality...dát*“, SQL/BigQuery/dbt, dashboardy | E3, F1, G6 | WPP SK 1 500–2 800 EUR, E7-144 |
| „*GA4 (vyhodnotit přínos kampaní a optimalizovat je dle toho)*“, GTM výhodou | D1, I1 | Grada, E7-142 |
| BigQuery, GA4, Power BI, enhanced conversions, profit-based bidding | D1, E5 | Alensa (PPC senior), E7-141 |

Pozorování: (1) Čistý „webový analytik“ je v ČR vzácný inzerát – analytika je přilepená k SEO, PPC nebo BI. (2) Mzdy se
uvádějí zřídka; kde ano, střed 70–80 tis. Kč hrubého (×1,34 = 94–107 tis. Kč/měs nákladu). (3) Firmy, které mají BQ (Heureka,
Marketup, Alensa, WPP), do inzerátů píší **detekci anomálií a kvalitu dat** jako explicitní povinnost – tj. na trhu se to
už chápe jako práce, ne jako vedlejší efekt. (4) Menší e-shopy tuto pozici nemají a řeší to poptávkami na Shoptet Partneři
(53 poptávek Analytika 2023–2026) – to je náš segment.

---

## 3. INTERPRETACE

### 3a. Pojmenované painy (15), seřazené podle četnost × dopad

Formát: situace → co se stalo → dopad → co by tomu zabránilo (kódy aktivit). N = počet výpovědí v clusteru.

1. **Cookie lišta potichu vypnula měření a Ads konverze** (N=29, dopad vysoký)
   Situace: e-shop nasadí/vymění CMP nebo Google zpřísní vymáhání CMv2 (3/2024, 7/2025, 6/2026). → Lišta „vypadá kompliantně“,
   ale nepředává signály; tagy běží v denied módu; Google vypne konverze a publika. → −40 až −90 % konverzí v Ads, Smart Bidding
   bez signálu, data z období nevratně ztracena; zjištění 2 týdny až 3 měsíce („*They assume it's the market.*“).
   → **B1** (kontrola chování tagů podle souhlasu při každé změně), **B3** (reakce na deadliny Googlu), **G1** (alert na propad
   konverzí), **B2** (sledování consent rate a modelování).

2. **Platforma změnila pravidla pod nohama** (N=24, dopad vysoký, plošný)
   Situace: Shopify/Shoptet/Google změní checkout, backend, app nebo integraci bez zásahu e-shopu. → Purchase přestane chodit,
   atribuce spadne na direct, konverze do Ads/Meta jen 60 %. → Postihuje desítky obchodů najednou; supporty si přehazují vinu
   („*Shopify support blames it on Facebook, Facebook support blames it on Shopify*“); 1–3 týdny slepoty.
   → **B3/C5** (sledování changelogů platforem a deadlinů), **A1** (QA po změně platformy, nejen po vlastním releasu), **G1/G2**,
   **H2** (kdo za co odpovídá).

3. **GA4 vs. backend se rozjely a nikdo neví, co je normální** (N=22, dopad střední, trvalý)
   Situace: majitel porovná tržby v GA4 a v e-shopu. → Rozdíl 20–50 %, ale bez baseline nelze říct, jestli je to blokátory,
   consent, admin objednávky, PayPal obcházející thank-you page, nebo skutečná chyba. → Nedůvěra v data, špatné rozhodnutí
   o kanálech; při roční uzávěrce „*numbers don't line up*“.
   → **G2** (denní srovnání s tolerancí), **D5** (reconciliace napříč platformami), **E5** (join po transaction_id – s BQ),
   **H3** (vysvětlení „proč tohle číslo vypadá takhle“).

4. **Kampaně spadly do Direct / (not set)** (N=21, dopad střední–vysoký)
   Situace: redirect stripuje UTM, nový checkout, CMP, změna Shopify Pixels, nový zdroj (AI asistenti). → 90 % konverzí
   „direct“, Paid Social mizí do Unassigned. → ROI kampaní neviditelné, rozpočet mezi Google/Seznam/Meta/mailing naslepo;
   zjištění týdny až 6–12 měsíců.
   → **C4** (týdenní kontrola podílu direct/(not set)), **G3** (alert na skok), **D4** (UTM konvence), **A1** (test průchodu UTM po releasu).

5. **Purchase potichu přestal chodit po releasu / změně checkoutu** (N=16, dopad vysoký)
   Situace: redesign, nová šablona, nová thank-you URL, přestavba frontendu. → GTM přežije, ale dataLayer/třídy/URL ne;
   sandboxované pixely selhávají bez chyby. → Týden–měsíc bez konverzí, data z prvních týdnů po launchi nevratně pryč, spor
   agentura vs. klient („*You broke our tracking*“).
   → **A1** (QA po každém releasu – „*About 40 minutes*“), **A4** (validace dataLayer proti specifikaci), **H1** (konzultace před
   releasem), **G1/G4** (alert na výpadek eventu / tag monitor).

6. **Smart Bidding týdny optimalizuje na rozbitá data (slepý spend)** (N=14, dopad nejvyšší v penězích)
   Situace: kterýkoli z painů 1–5 trvá déle než pár dní. → Algoritmus „*reads that as demand softening and reprices within
   hours*“; CPA roste dřív než reporty; tROAS se snižuje ručně. → 60 000 USD/75 dní, 4 400 EUR/2,5 měsíce, CPA 15×,
   „*spent a fortune*“.
   → **G1** (alert do 24 h), **G7** (reakce), **D1/D2** (kontrola konverzních akcí a EMQ), **F3** (měsíční komentář, který
   propad vysvětlí dřív, než ho vysvětlí „trh“).

7. **BigQuery export tiše přestal chodit / přišel děravý** (N=11, dopad vysoký pro BQ klienty)
   Situace: neplatná karta na billing účtu, konec trialu, migrace projektu, překročení limitu, pozdní/částečný batch (i GA360).
   → Tabulky chybí, nebo existují s 1 % objemu; downstream transformace selžou. → Trvalé díry v historii (backfill nejde),
   dashboardy nad BQ lžou; zjištěno „*a few weeks later*“.
   → **E1** (denní kontrola tabulky a počtu eventů), **E2** (billing alerty), **G6** (alert na výpadek exportu), **E3** (odolné
   transformace + backfill).

8. **Odešel člověk / agentura drží přístupy** (N=9, dopad vysoký, jednorázový)
   Situace: konec spolupráce, odchod zaměstnance, zrušení Workspace. → Klient nemá admin na GTM/GA4/Google Tag. → Ztráta
   historie, nová property, týdny obnovy přes Google, eskalace („*48 hours*“).
   → **C6** (kvartální audit přístupů, vlastnictví pod účtem klienta), **A3** (export/záloha kontejneru), **E4** (historizace
   v BQ pod klientovým projektem), **H4** (onboarding/offboarding).

9. **Fake a duplicitní konverze nafukují čísla** (N=7, dopad vysoký, skrytý)
   Situace: importované page views jako konverze, dvojí GA4 tag, hardcoded + GTM, redundantní property. → Součty vypadají OK,
   nebo lépe než dřív. → „*The algorithm was optimizing on fake data*“; 318 konverzí, 0 leadů.
   → **A6** (úklid duplicit), **A4**, **C1** (revize klíčových událostí), **D5**, **E5** (diff po transaction_id).

10. **Nikdo ve firmě nevlastní měření – nastaveno „zkusmo“** (N=7, CZ-typické)
    Situace: majitel e-shopu si GA4/Ads nastavil sám nebo přes bývalého dodavatele. → „*spousta dat zbytečně chybí*“, hodnota
    konverzí v Ads chybí, konverzní akce 90 dní na nule, protože ji nikdo nezapnul. → Roky rozhodování na neúplných datech;
    poptávka „*jednorázová kontrola a pak měsíční paušál*“.
    → **F4** (kvartální review měřicího plánu), **C1**, **D1**, **H2** (živá dokumentace), **F3**.

11. **Prohlížeče, blokátory a iOS ujídají 20–40 % měřeného** (N=7, dopad střední, strukturální)
    Situace: client-side měření, iOS publikum, kompliantní lišta s 17–30 % souhlasem. → „*only about 60% of client side
    tracking is successful*“. → Rozdíl „normální“ maskuje skutečné výpadky; bez baseline nepoznáš 30 % od 60 %.
    → **A5** (server-side), **B2** (modelování), **D5/G2** (baseline a tolerance), **D1/D2** (enhanced conversions, CAPI).

12. **Konektor / dashboard přestal aktualizovat** (N=7, dopad střední, viditelný klientem první)
    Situace: změna plánu Supermetrics, změna API zdroje, vendor zrušil konektor, expirovaný token. → Looker Studio prázdné.
    → Reporting týdny bez dat, support 10–15 dní.
    → **F2** (měsíční kontrola konektorů/tokenů), **G6** (alert), **F1**, **H5** (reakční doba).

13. **Někdo sáhl do GTM/dataLayeru bez koordinace** (N=5, dopad střední–vysoký)
    Situace: vývojář přejmenuje event, marketing přidá skript, více stran s přístupem. → Rozbité triggery nebo celý frontend;
    „*The marketing team lost access to publish GTM container changes.*“
    → **A3** (verzování, popisy verzí, práva), **H1**, **H2**, **G4**.

14. **Kontejner-černá skříňka** (N=4, dopad střední, dlouhodobý)
    Situace: autor kontejneru odešel před 6 měsíci, 47 tagů, mrtvé tagy 18 měsíců. → Strach cokoli měnit; nový dev přidá
    duplicitu. → Pomalý web, data leaks, náklady na reverse engineering.
    → **A6** (kvartální úklid), **H2** (dokumentace), **A3**.

15. **Překvapivá faktura za BigQuery** (N=2, dopad jednorázový)
    Situace: `SELECT *` bez partition filtru. → 9 847 USD za tři dotazy, zjištěno z faktury. → **E2** (rozpočtové alerty,
    kontrola drahých jobů – vzor GOV.UK dashboard E7-150), **H4** (zaškolení).

### 3b. Top 3 painy podle segmentu

| Segment | Top 3 (s důkazem) | Poznámka |
|---|---|---|
| **eshop_small** (82 výpovědí; Shopify/Shoptet do ~20 mil.) | 1. Cookie lišta vypnula měření (N7-046…077) 2. Platforma změnila pravidla (N7-015…045) 3. GA4 vs. backend / direct (N7-146, N7-032) | Nemají analytika, zjišťují to z propadu objednávek nebo varování v Ads; CZ poptávky = „zkontrolujte nastavení“ (E7-110, E7-117, E7-118). Prakticky nikdy BQ. |
| **eshop_mid** (18; 20–200 mil., více obchodů/zemí) | 1. Slepý spend při výpadku (mrtvý pixel 60 dní, CPA 15×, N7-078/079) 2. Consent přesnost 98 → 55 % (N7-049) 3. Kontejner-černá skříňka / duplicity po migraci (N7-021/022, N7-080) | Mají PPC tým, ale ne měřicího vlastníka; migrace platformy = největší riziko. |
| **eshop_large** (2 + GA360 kontext) | 1. BQ export částečný i u GA360 (N7-135) 2. Překročení exportního limitu (N7-142) 3. Subscription/POS objednávky bez prohlížeče kazí baseline (N7-159) | Mají BQ; pain je kvalita a úplnost exportu + reconciliace. |
| **b2b_leadgen** (14) | 1. Fake konverze (page views jako lead; N7-087) 2. Formulář/thank-you URL/tlačítko po releasu (N7-003/004, N7-010/011) 3. UTM stripované redirectem, gclid ztracený url_passthrough (N7-180, N7-077) | Málo konverzí → každá ztracená bolí; nikdo nekontroluje, protože „leady prostě klesly“. |
| **saas_marketplace** (5) | 1. Migrace GA4 bez post-auditu, 75 dní, 60k USD (N7-012) 2. Trojí sign_up event (N7-014) 3. BQ faktura (N7-144) | Více domén, více nástrojů, cross-domain; zjištění až na úrovni boardu. |
| **agency** (45) | 1. „Kdo za to může“ po releasu/změně platformy – spor s klientem (N7-001, N7-030/031) 2. Consent u desítek klientů najednou (N7-051, N7-055…057) 3. Konektory a dashboardy stojí, klient to vidí první (N7-126…132) | Agentura potřebuje škálovatelnou kontrolu („*ten stores thats most of a day every week*“, N7-158) → prostor pro white-label monitoring. |

### 3c. Painy klienta BEZ BigQuery vs. painy, které bez BQ nevidíš

**Painy klienta bez BQ (has_bq=no: 133/185 výpovědí)** – tedy prakticky vše mimo vrstvu E:
- consent (30/35), platforma (29/29), release (8/14 + 6 unknown), Ads konverze/PMax/Meta (7/8), direct/(not set) (6/11),
  konektory (7/7), přístupy (7/9), revenue mismatch v UI (17/24), „zkusmo“ (6/11).
- Tito lidé si problému všimli **v GA4 UI, Ads UI nebo Shopify adminu** – většinou pozdě a kvůli byznys symptomu (méně objednávek,
  vyšší CPA, varování „Tag inactive“ / „signály EHP“).
- **Poptávka po správě bez BQ existuje a je vyslovená**: „*jednorázovou kontrolu a opravu měření … pevný měsíční paušál*“
  (E7-109), „*zkontrolovat nastavení GA4 jednoho e-shopu*“ (E7-116/117), 53 poptávek Analytika na Shoptet Partneři.
  Není to ale poptávka po „správě“ jako produktu – je to poptávka po **opravě + jistotě, že to už zůstane v pořádku**.

**Painy, které bez BQ nevidíš (nebo jen ručně a pozdě):**
1. **Ztráta maskovaná duplicitou** – „*If you lose five purchase events and fire five duplicates in the same day, your daily
   count comparison shows a perfect match and you learn nothing.*“ (N7-157). Řešení = diff po transaction_id (E5) – v UI nejde.
2. **Baseline rozdílu GA4 vs. backend** – co je „normální“ 10–30 % a co je výpadek; subscription/POS objednávky bez prohlížeče
   (N7-159). Bez spojení s backendem (E5) se to jen odhaduje.
3. **Rozdíl je 40 % vs. 60 %** u consentu/ITP – v UI vidíš jen, že GA4 je „níž“; s BQ vidíš, které dny, zařízení a zdroje
   vypadly (N7-163: 30–70 % rozdíl klik vs. session po geo).
4. **Historie po ztrátě přístupu / po změně property** – „*Historical GA4 data cannot be exported without account access*“
   (N7-103); s exportem pod klientovým GCP projektem historie zůstává (E4).
5. **Tichý propad objemu** – 540k → 5k řádků/den při zachovaných tabulkách (N7-139): totéž se děje i v GA4 UI (thresholding,
   změny zpracování), ale bez denního počtu eventů v BQ to nikdo neuvidí.
6. **Vlastní BQ painy** (export díry, billing, náklady) – existují **jen** s BQ (13 výpovědí), tj. BQ přidává i vlastní
   provozní břemeno, které je třeba do správy započítat (E1, E2, G6).

**Co jde bez BQ dobře** (a co tvoří většinu hodnoty pro eshop_small): QA po releasu (A1), kontrola consentu (B1), Ads/Meta
konverzní akce (D1–D3), direct/(not set) (C4), přístupy (C6), konektory (F2), měsíční komentář (F3). GA4 Insights/Data API
zvládnou hrubý alert na purchase=0 (G1 částečně) – Shopify komunita to dělá tabulkou a 10 minutami denně (N7-158, E7-016).

### 3d. Co říká rešerše k hypotézám

- **H1 (správa má smysl hlavně nad BQ)** – **vyvráceno v silné podobě**. 72 % výpovědí je od lidí bez BQ a jejich painy jsou
  dražší (slepý spend) než BQ painy. Platí slabší verze: **hloubka** správy (rozlišit ztrátu/duplicitu, baseline, historie)
  vyžaduje BQ; bez BQ je správa „kontrola + oprava + komentář“, s BQ „monitoring + reconciliace“. → dvouúrovňový model.
- **H2 (největší pain = tiše rozbitá data)** – **potvrzeno**. Doslova: „*It fails silently by design*“, „*No warning email. No
  grace period.*“, „*They just stopped being counted.*“, „*nothing anywhere tells you*“. Doba do odhalení 2 týdny – 3 měsíce je
  norma; jediní, kdo si všimli za den, měli denní srovnání.
- **H5 (část hodnoty nahradí SaaS; služba musí stát na interpretaci, opravě, komunikaci s vývojáři)** – **potvrzeno s doplněním**.
  Nástroj/tabulka zachytí *že* něco spadlo (G1–G6); výpovědi ukazují, že bolest je v *proč* a *kdo to opraví*: 8 měsíců do
  root cause u Cookiebotu (N7-052), „*Shopify support blames it on Facebook…*“ (N7-031), „*Google support … tags are apparently
  misfiring*“ bez detailu (N7-167), 10–15 dní support konektoru (N7-131). Navíc i nástroj Elevar u českého klienta „*35%
  inaccuracy*“ – nástroj bez člověka nestačí (N7-169). Služba = G7 + H1 + H3 + B3/C5 (sledování změn prostředí za klienta).

---

## 4. DOPORUČENÍ

### 4a. Painy jako selling point – a jak je formulovat (konkrétně, ne frázemi)

| Pain | Formulace pro web/nabídku (návrh) | Pro segment |
|---|---|---|
| Consent lišta vypnula měření | „Od července 2025 Google vypíná konverze a remarketing e-shopům, jejichž lišta nepředává souhlas. Ve 39 % auditovaných webů lišta je, ale nefunguje. Kontrolujeme to po každé změně lišty a po každém deadlinu Googlu – ne až když Ads spadnou o 90 %.“ | eshop_small, eshop_mid, agency |
| Platforma změnila pravidla | „26. 8. 2026 Shopify vypnul skripty na děkovné stránce a tisícům obchodů přestal chodit purchase. Shoptet v prosinci 2023 změnil GA4 měření a musel to pozastavit. Hlídáme changelogy platforem a testujeme za vás, dřív než to uvidíte na CPA.“ | eshop_small, eshop_mid |
| Purchase po releasu | „Po redesignu leady ‚klesnou‘ za dva týdny – jen se přestaly počítat. Každý release projde 40-minutovou kontrolou 10 bodů (thank-you URL, dataLayer, formuláře, UTM, consent) a do 24 h víme, že měření běží.“ | všechny, agency |
| Slepý spend | „Smart Bidding pozná výpadek konverzí za hodiny a přecení kampaně. Vy to bez alertu poznáte za 2–3 týdny na CPA. Alert do 24 h + oprava do X h.“ (SLA jako důkaz) | eshop_mid, b2b |
| GA4 vs. backend | „GA4 vám ukáže o 20–40 % méně tržeb než e-shop. Řekneme vám, kolik z toho jsou blokátory a consent (normál), kolik admin objednávky a kolik skutečná chyba – po transaction_id, ne odhadem.“ (BQ tier) | eshop_mid, eshop_large |
| Direct / (not set) | „Když 90 % objednávek spadne do direct, přestanete vědět, který kanál prodává. Týdenní kontrola podílu direct/(not set) a alert na skok.“ | eshop_small, b2b |
| BQ export | „Export do BigQuery umí bez varování vypadnout kvůli expirované kartě a díra se nedá zpětně doplnit. Denně kontrolujeme, že tabulka přišla a má normální počet eventů.“ | eshop_large, saas |
| Přístupy | „Když odejde agentura nebo člověk s Gmail účtem, historie GA4 je pryč. Kvartálně kontrolujeme, že vše je pod vaším účtem a kontejner je zálohovaný.“ | všechny |

Důkazní argumenty pro nabídku (fáze 10): konkrétní data changelogů (2c), checklist 10 bodů po releasu (E7-101), denní
srovnání objednávek vs. konverze s **českými prahy 10 / 30 %** (viz § 0; 15% práh z E7-016 je anglofonní a v ČR by pálil denně), kvartální audit přístupů a lišty.

### 4b. Painy reálné, ale špatně prodejné

- **Kontejner-černá skříňka / úklid** – klient to necítí, dokud něco nespadne; prodávat jako součást onboardingu, ne jako tier.
- **Prohlížeče/ITP/blokátory** – strukturální, klient s tím nic neudělá; prodává se jen jako „vysvětlíme baseline“ nebo přes
  server-side (jednorázová služba, ne správa).
- **BQ faktura** – vzácné, řeší se jedním alertem; nestavět na tom tier.
- **Nikdo nevlastní měření** – pravdivé u eshop_small, ale říct to klientovi je urážka; přeformulovat jako „kontrola nastavení
  + roční review“ (poptávky Shoptet Partneři ukazují, že tak to klient sám nazývá: „zkontrolovat nastavení“).
- **Konektory (Supermetrics apod.)** – klient to vnímá jako chybu nástroje, ne jako důvod ke správě; nabídnout jako součást F2
  v tieru bez BQ.

### 4c. Vstupní body (pro RQ4)

Z výpovědí vyplývají čtyři momenty, kdy klient správu kupuje: (1) **po incidentu** (většina Shoptet poptávek: „přestalo
fungovat“, „přestali chodit objednávky“), (2) **před/po migraci platformy nebo redesignu**, (3) **po deadlinu Googlu/Shopify**
(3/2024, 7/2025, 8/2026, 6/2026), (4) **po auditu**, který najde „zkusmo“. Nejlevnější akvizice = (3): deadliny jsou známé dopředu.

---

## 5. Mezery rešerše

1. **Reddit jen přes snippety** (Brave), ne celé posty – čísla a kontext jsou částečné; 5 klíčových vláken (např. r/PPC
   „Six weeks ago my google conversion tracking…“, 1nbkgja) bez obsahu.
2. **Stack Overflow, GA4 Help Community, G2, Clutch, Webtrh** nedostupné (blokace/JS) – recenze monitoring nástrojů (ObservePoint,
   Trackingplan) chybí; recenze máme jen z Trustpilot a Shopify App Store.
3. **České FB skupiny (Webová analytika CZ/SK)** nejsou veřejně indexované – CZ výpovědi jsou z poptávek a blog komentářů,
   nikoli z diskusí analytiků. Slovenský trh: 1 výpověď.
4. **Sklik/Seznam** – žádná uživatelská výpověď o rozbitém měření Sklik konverzí; jen změna modelu měření (SEM 2026) z blogu Optimics.
5. **Kvantifikace v CZ** chybí úplně (žádný CZ příklad s Kč promrhaného spendu); k dispozici jen EUR/USD případy a český
   Shopify e-shop v recenzi Elevar bez čísla.
6. **`ga4_change` a `browser_change`** jsou jako painy podreprezentované – lidé je nepoznají; důkaz je nepřímý (changelogy).
7. **LinkedIn**: 5 postů; komentáře nedostupné bez přihlášení. MeasureCamp abstrakty nenalezeny.
8. Mzdové proxy: platy.cz vyžaduje interakci, jen agregáty (Indeed IT analytik, Kurzy medián). Doporučení pro fázi 9: doplnit
   3–5 inzerátů s uvedenou mzdou přes StartupJobs (JS) nebo LinkedIn s přihlášením.
