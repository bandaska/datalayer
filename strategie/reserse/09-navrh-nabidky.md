# Fáze 10 – Návrh nabídky DataLayer.cz: pozicování, tiery, sdělení, vstupní bod

Stav: **návrh k diskusi, verze 2 (2026-09-05)** – po 2. kole ověření a po datové hygieně.
Vychází z fází 1–9 a z `10-doplneni-a-overeni-r2.md`. Čísla v Kč bez DPH.
Změny proti verzi 1 jsou označené v § 5.1 a shrnuté v § 10.

---

## 1. Verdikt nad hypotézami

| Hypotéza | Verdikt | Důkaz |
|---|---|---|
| **H1** Správa má smysl hlavně nad BigQuery; bez BQ je poptávka malá | **Vyvrácena v silné podobě, platí slabá.** 75 % z 313 výpovědí o rozbitém měření je od klientů bez BQ a jejich painy jsou ty nejdražší (slepý spend). Správa bez BQ se prodává v CZ, SK i EU (DA, Němec, DASE, LEMONTEC, Manids, Amplio Maintained). BQ je konzistentně **vyšší tier** s ≈ 2× cenou (verze 1 uváděla 3,7–5,5×, což bylo vyvráceno třikrát nezávisle) a přidává forenzní hloubku (G2 po transaction_id, historie, anomálie), ne samotnou možnost hlídat. | 06 § 3c–3d, 03 § 3.5, 08 § 2.1 |
| **H2** Největší pain = „data se tiše rozbila a nikdo si nevšiml“ | **Potvrzena velmi silně.** Doslova: „It fails silently by design“, „No warning email. No grace period.“, „They just stopped being counted“, „ein Event schon monatelang nicht mehr erfasst wird, es aber niemand bemerkt“. Doba do odhalení typicky 2 týdny – 3 měsíce; kvantifikace 184 vs 291 objednávek, 60 000 USD/75 dní, CPA 15×. **Ale sdělení už volné pole není** – Signals Bar (CZ, 2 500 Kč/měs) používá doslova „rozbité měření“ a „tiché výpadky“, LEMONTEC (AT) slibuje odhalení do 24 h za 4 975 Kč. Nově doloženo z primární dokumentace: GTM hlásí u tagu „Succeeded“ a neodešle request; Looker Studio alert se při rozbitém zdroji **sám vypne**. | 06 § 1, § 3a; 10 § 1.5–1.6 |
| **H3** CZ nemá veřejný ceník; ceny z hodinovek 1 200–2 500 Kč/h × 5–20 h | **Potvrzena.** 2 ze 45 CZ subjektů mají veřejnou měsíční cenu; specialisté 1 150–2 400 Kč/h; body 2 500 / 9 250 / 18 500 / 26 000+. Platí i pro EU (9 z 58). | 01 § 3.3–3.4, 03 § 1 |
| **H4** US retainer = produkt s tiery a vyjmenovanou dodávkou (1 500–10 000 USD) | **Potvrzena strukturálně, ceny nepřenositelné.** Tři osy tierů (kapacita, kadence callů, reakce/kanál), QBR standard; SMB 500–3 800 USD, enterprise 5–15k USD jen z třetích stran. | 04 § 3.1–3.3 |
| **Nová (2. kolo)** Poptávka po samostatné „správě měření“ existuje | **Neověřeno – existuje protievidence.** Z 53 poptávek v kategorii Analytika na Shoptet Partnerech **žádná** nežádá monitoring ani alerting. Z USA: „*this is not something you can sell on a retainer. Analytics setup and troubleshooting is a one-off service*“; agentura Analytics Pros to zkusila a skončila prodejem reklamní agentuře. **Prázdná pozice nebyla otestována jako hřbitov.** | 10 § 1.11 |
| **H5** Část hodnoty nahradí SaaS; služba musí stát na tom, co nástroj neumí | **Potvrzena a zpřesněna.** Detekce (G1–G6) stojí 0–5 000 Kč/měs. Nástroje samy prodávají člověka jako add-on (Elevar 500 USD/měs) a vyjmenovávají, co neumí („strategy, stakeholder interviews, custom dashboards, one-off investigations“). Služba = G7 + A1 + B3/C5 + F3 + H. | 05 § 3a–3c, 03 § 3.5 |

## 2. Odpovědi na výzkumné otázky (RQ1–RQ7) v jedné tabulce

| RQ | Odpověď |
|---|---|
| RQ1 Co je „správa“ | Jádro napříč regiony: QA po releasu, změny tagů, hygiena konverzí, provoz konverzí do Ads/Meta, alert na propad, oprava, měsíční komentář, ad-hoc dotazy. Rytmus: denně automat, měsíčně člověk, kvartálně review. (08 § 2.1, 2.3) |
| RQ2 Kolik a jak | Bez BQ median 8–10 tis. Kč, Q3 16–23 tis.; s BQ 35–45 tis. Osy: kadence, reakce, BQ hloubka; hodiny jako limit. (09) |
| RQ3 Konkrétní pain | 15 pojmenovaných; top 5: consent lišta vypnula měření (17 %), platforma změnila pravidla (13 %), GA4 vs. backend rozjeté (12 %), purchase po releasu (14 %), kampaně v direct/(not set). Společný dopad: slepý spend v Smart Biddingu. (06 § 3a) |
| RQ4 Trigger a churn | Trigger: po incidentu („přestalo fungovat“), před/po migraci či redesignu, po deadlinu Googlu/Shopify, po auditu, při vstupu do PPC správy. Churn: ticho mezi reporty, „it should just work after setup“, konkurence PPC agentury, která měření „má v ceně“. (06 § 4c, 04 § 3.1) |
| RQ5 BQ nutné? | Ne pro seznam aktivit; ano pro hloubku: rozlišit ztrátu od duplicit, baseline vs. backend, tichý propad objemu, historie po ztrátě přístupu, tag monitoring s historií. Bez BQ se „spravují“ hlavně konektory a QA. (08 § 2.4) |
| RQ6 Dodávka | Sada denních kontrol s prahy, týdenní digest, checklist po releasu, jednostránkový komentář, changelog, kvartální review, SLA číslo. V ČR nikdo nepublikuje. (08 § 2.2) |
| RQ7 Nástroje | Detekce 0–5 000 Kč/měs (GA4 Insights, Metrics Watch, NLD, Stape, Checkly, BQ SQL). Enterprise governance 14–60 tis. Elevar jediný dělá G2 bez BQ (Shopify). Pro Shoptet/Sklik/Heureka nic. (05) |

---

## 3. Rozhodnutí: dvouúrovňová nabídka s BigQuery jako zlomem, ne BQ-only

Důvody: (a) největší a nejdražší painy má klient bez BQ; (b) trh ve všech regionech prodává správu bez BQ a BQ jako vyšší tier;
(c) DataLayer.cz má v BQ/sGTM technickou výhodu, kterou v CZ/SK nikdo neprodává (E1, G2, G4) – patří do horního tieru jako
důvod ceny, ne do podmínky vstupu; (d) BQ export generuje vlastní údržbu, kterou klient bez správy nezvládne („another setup to
maintain“) – tj. BQ klient je přirozený upsell, ne jediný trh.

Název služby: **„Správa měření“** (jazyk trhu: DA „údržba a monitoring měření“, poptávky „zkontrolovat/opravit měření“). Ne
„monitoring“ (SaaS za 79 USD), ne „retainer“ / „analytics as a service“ (v CZ nikdo).

## 4. Tiery

Jádro společné všem tierům (standard trhu, 08 § 2.1): alerty na propad klíčových eventů, kontrola consentu, hygiena konverzí,
konverze v Ads/Meta/Sklik, údržba dashboardů a konektorů, měsíční komentář, ad-hoc dotazy, oprava po alertu, kvartální audit
přístupů. Tiery se liší **kadencí, reakční dobou, hodinami na změny a hloubkou (BQ)**.

| | **Hlídání** | **Správa** | **Datová správa** |
|---|---|---|---|
| **Cena** | **8 900 Kč/měs** | **19 900 Kč/měs** | **39 000 Kč/měs** |
| **Pro koho** | e-shop / lead-gen web do ~20 mil. obratu, 1 web, Ads spend do ~50 tis., bez BQ; agentura jako white-label vrstva | e-shop 20–200 mil., 1–3 weby, 3–4 ad platformy, releasy měsíčně, spend 50–500 tis.; B2B s drahými leady | e-shop 100 mil.+, více značek/zemí, BQ export (nebo ho zapneme), sGTM, reporting nad BQ, spend 500 tis.+ |
| **Pain, který řeší** | „Přestaly chodit konverze a zjistili jsme to za tři týdny na CPA.“ (painy 1, 2, 5, 8) | „Po každém releasu se něco rozbije a nikdo nevlastní měření; GA4 a e-shop se rozcházejí a nevíme proč.“ (painy 3, 4, 5, 6, 10, 13) | „Potřebujeme čísla, kterým se dá věřit napříč platformami, po transaction_id, a export, který nevypadne.“ (painy 3, 6, 7, 9, 15) |
| **Denně (automat)** | GA4 Custom Insights (10–15 pravidel) + Data API kontrola purchase/lead vs. včera a před týdnem; **součtové srovnání objednávek v administraci vs. konverzí (prahy 10 / 30 %)**; sGTM 5xx | + Checkly průchod checkoutem / formulářem s kontrolou dataLayer a GA4 requestů; kontrola konverzních akcí Ads/Meta | + kontrola BQ exportu (tabulka, objem ±5 %, zpoždění), Dataform/SQL testy (purchase má transaction_id, revenue > 0), anomálie per event/zdroj, **denní reconciliace GA4 vs. backend po transaction_id**, budget alerty |
| **Kadence člověk** | triáž alertů v pracovní dny; **kvartální** review nastavení, přístupů a lišty; měsíční jednostránkový komentář e-mailem | triáž denně; **měsíční** QA GTM/consent/konverzí + call 30 min + komentář; **QA do 24 h po každém releasu** (checklist 10 bodů); kvartální review měřicího plánu | vše ze Správy + **týdenní digest** (co se hnulo, co se rozbilo, co je nové) + měsíční report s „kolik konverzí chybělo a proč“ + kvartální strategické review |
| **Reakce na výpadek** | další pracovní den (e-mail) | do 8 pracovních hodin (e-mail / sdílený Slack kanál) | do 4 pracovních hodin (Slack, pojmenovaný analytik) |
| **Hodiny na změny (A2, F5)** | 1 h/měs, nad to 1 900 Kč/h | 3 h/měs | 6 h/měs |
| **Changelog a dokumentace** | changelog GTM verzí | + živý měřicí plán | + dokumentace BQ modelu a alertů |
| **Reakce na změny prostředí (B3, C5)** | informace e-mailem před deadlinem | proaktivní úprava před deadlinem Googlu/Shoptetu/Shopify | + vyhodnocení dopadu v datech |
| **Vyžaduje** | GTM přístup, GA4 editor, Ads/Meta read | + přístup do administrace e-shopu (export objednávek nebo API) pro měsíční srovnání | + BQ export v klientově GCP projektu, přístup k backend datům (objednávky) |
| **Vazba** | měsíčně, bez vazby | měsíčně, bez vazby | 3 měsíce, pak měsíčně |
| **Není v ceně** | implementace, migrace, sGTM build, nové dashboardy (projekt nebo hodiny) | totéž | totéž + datové modelování nad rámec exportu (projekt) |

Doplňkové položky:
- **Provoz sGTM** (A5/G5): 1 500 / 3 000 / 6 000 Kč podle trafficu (do 1 / 5 / 20 mil. requestů), hosting Stape/GCP průchozím
  způsobem. Odpovídá DataPlus/Softmedia/Starbomedia kotvám a osvědčené EU praxi oddělené položky.
- **Aktivace nevyužitého BQ exportu** jako vstupní projekt do Datové správy (r/bigquery: export zapnutý, nevyužitý).
- **White-label pro PPC agentury**: Hlídání/Správa pod značkou agentury, −15–20 % od 3 klientů, sdílený Slack. US i EU ukazují,
  že agentury jsou lepší kanál než přímý prodej „analytics-only“ SMB.

**Rozhodnutí o cenách** viz `08-pricing-synteza.md` § 3.1: průnik nákladové (3–5 / 8–12 / 15–22 h), tržní (median 8–10 tis.,
„běžně“ 18 500, BQ ≈ 2×) a kotvové (1/8 úvazku, PPC správa, 1/2 in-house) cesty.
**Pozor:** nákladová a tržní cesta nejsou nezávislé (verze 1 to tvrdila) – viz `08` § 3.1.

## 5. Hlavní sdělení – po segmentech, postavené na pojmenovaných painech

Pravidlo: každá věta obsahuje **událost, dobu a dopad**, žádný benefit („lepší rozhodnutí“). Čísla mají zdroj
v `pain-log.csv`. **Verze 2 (2026-09-05):** čtyři formulace z verze 1 byly opraveny nebo vypuštěny – viz § 5.1.

| Segment | Sdělení (1 věta) | Důkazní argumenty (3) |
|---|---|---|
| **E-shop malý/střední (Shoptet, WooCommerce, Shopify)** | „Když vám po releasu nebo po nové cookie liště přestanou chodit konverze, zjistíte to typicky za tři týdny na CPA – Google Ads označí tag za neaktivní až po 7 dnech bez konverze. My se koukáme každý den.“ | 1) Kontrola do 24 h po každém releasu (checklist 10 bodů). 2) Denní srovnání objednávek v administraci vs. konverzí: **do 10 % ticho, 10–30 % sledujeme, nad 30 % voláme** (prahy z českých a slovenských zdrojů, ne z anglofonního fóra). 3) Hlídáme deadliny Googlu a changelogy Shoptetu/Shopify za vás – **za posledních 32 měsíců 57 změn, které mění sběr dat**. |
| **E-shop střední/velký s Ads spendem** | „Smart Bidding pozná výpadek konverzí za hodiny a přecení vaše kampaně dřív, než to uvidíte v reportu.“ | 1) Alert do 24 h + reakce do 8/4 h podle tieru. 2) Kontrola konverzních akcí Ads a Event Match Quality u Mety každý měsíc. 3) Měsíční komentář: kolik konverzí chybělo a proč – **správa stojí ≈ 4 % vašeho měsíčního rozpočtu do reklamy**. |
| **E-shop s BigQuery / více zemí** | „GA4 ukazuje o 20–40 % méně tržeb než e-shop. Řekneme vám po transaction_id, kolik z toho je consent a blokátory, kolik admin objednávky a kolik skutečná chyba.“ | 1) Denní reconciliace po transaction_id (rozliší ztrátu od duplicit – pět ztracených a pět duplicitních purchase dá v součtu „perfektní shodu“). 2) Export do BigQuery, který nevypadne bez varování: Google při pozastavení exportu **předchozí dny nedopočítá**. 3) Historie zůstává ve vašem GCP projektu, i když odejde agentura. |
| **B2B lead-gen** | „Leady ‚klesly‘ – nebo se jen přestaly počítat po změně formuláře? GTM u takového tagu hlásí ‚Succeeded‘ a neodešle jediný request.“ | 1) QA formulářů, thank-you URL a UTM průchodu po každém releasu. 2) Úklid falešných konverzí (page view jako lead, duplicitní tagy). 3) Týdenní kontrola podílu direct/(not set). |
| **PPC / performance agentura** | „Měření vašich klientů se rozbíjí mezi reporty a vy to vysvětlujete. Hlídáme ho pod vaší značkou za pevnou cenu.“ | 1) Sdílený Slack a alerty na všech klientech najednou (jeden consent deadline = desítky klientů v jeden den). 2) Pevná cena místo hodin vašich specialistů. 3) Changelog, na který se lze odvolat ve sporu „kdo to rozbil“. |

Věty k vyhnutí (nejsou pain, jsou fráze): „bez dat se nedá rozhodovat“, „data, kterým můžete věřit“ (aktuální
hero DataLayer.cz), „lepší data pro lepší rozhodnutí“, „správně nastavená analytika“.

### 5.1 Co bylo z verze 1 opraveno nebo vypuštěno

| # | Formulace verze 1 | Problém | Verze 2 |
|---|---|---|---|
| 1 | „Jeden týden bez alertu stojí víc než rok správy.“ | **Aritmeticky nepravdivé** pro deklarovaný segment: rok tieru Správa = 238 800 Kč, týden spendu při 50–500 tis./měs = 11 500–115 000 Kč. Platilo by až od spendu ≈ 2,2 mil. Kč/měs. Zdrojové číslo navíc nebylo přečteno u zdroje. | Vypuštěno. Nahrazeno poměrem „správa ≈ 4 % měsíčního rozpočtu do reklamy“. |
| 2 | „Denní srovnání s tolerancí 15 %.“ | Práh převzatý z anglofonního fóra. Tři nezávislé CZ/SK zdroje shodně říkají, že **rozdíl 10–30 % je v ČR norma** → alert by pálil denně a klient by odešel na alert fatigue. | Práh 10 / 30 % podle českých zdrojů. |
| 3 | „Zjistíte to za dva až tři týdny.“ | Číslo bylo odhad. Nově doloženo: medián 21 dní ze 77 vyčíslitelných výpovědí – **ale je to odhad zdola z anglofonních fór a je dvojitě samovýběrový**. | Ponecháno jako „typicky za tři týdny“ + doložená příčina (7denní práh Google Ads). |
| 4 | Reconciliace slíbena segmentu, jehož tier ji neobsahuje | Denní srovnání s backendem bylo ve verzi 1 v sdělení pro malý e-shop, ale v tieru Hlídání nebylo. | Součtové srovnání přesunuto **do tieru Hlídání**; diff po transaction_id zůstává v tieru Datová správa. |

### 5.2 Konkurenční tlak na toto sdělení (nález 2. kola)

**„Měření se tiše rozbilo“ už není v ČR volné pole.** Verze 1 tvrdila opak; je to vyvráceno:

| Kdo | Cena | Co říká |
|---|---|---|
| Signals Bar (CZ) | 2 500 Kč/měs | používá doslova „rozbité měření“ a „tiché výpadky v e-commerce vás stojí tržby“ |
| ga4monitor.com | 667 Kč/měs (29 USD) | kontinuální GA4 audit s alerty, 35+ kontrol |
| LEMONTEC (AT) | 4 975 Kč/měs (199 €) | slibuje odhalení „innerhalb von 24 Stunden“ |
| RDY.cz (CZ) | 10 000 Kč/měs | PPC balíček **včetně** nastavení měření konverzí |
| Starbomedia (SK) | v ceně PPC od 350 € | měsíční validace tržeb **zdarma** v rámci správy kampaní |

Důsledek pro pozicování: **detekce je komodita a slib „my to uvidíme“ ztratil cenu.** Prodejné zůstává to,
co nástroj neumí a co PPC balíček nedělá: **triáž (co to způsobilo), oprava, číslo chybějících konverzí,
komunikace s vývojáři a garantovaná reakční doba.** Vstupní tier musí v nabídce explicitně odpovědět na
otázku „čím se lišíte od Signals Bar za 2 500 Kč a od PPC balíčku za 10 000 Kč“.

## 6. Vstupní bod a první měsíc

**Kdy nabídnout (triggery s důkazem):**
1. Po incidentu – většina CZ poptávek („přestalo fungovat měření konverzí“, E7-109/116/117). Nabídka: oprava (projekt 9–25 tis.)
   + první měsíc Správy v ceně opravy.
2. Před redesignem / migrací platformy – nejčastější spouštěč rozbití (release 14 %, migrace 13 %). Nabídka: QA plán + Správa od
   měsíce před releasem.
3. Před deadlinem Googlu/Shopify/Shoptetu – známé dopředu, nejlevnější akvizice (outbound kampaň 4–6 týdnů před).
4. Po auditu – audit najde „zkusmo“ nastavení; Hlídání jako pokračování.
5. Po implementaci DataLayer.cz (GA4, GTM, sGTM, BQ) – každá stávající služba končí nabídkou správy (viz § 7).
6. Při zapnutém, nevyužitém BQ exportu – Datová správa jako „aktivace“.

**Práh velikosti:** Hlídání od ~200 tis. Kč obratu/měs nebo Ads spend ≥ 20 tis.; Správa od ~2 mil. obratu nebo spend ≥ 50 tis.
(SK: sGTM ROI od 2 000 € spendu; Khoder „od 500 tis. obratu“); Datová správa od BQ exportu a spendu ≥ 500 tis.

**Onboarding (první 30 dní, v ceně prvního měsíce):** audit 40–80 bodů → nasazení alert stacku (Custom Insights šablona, Data API
skript, Checkly scénář, sGTM log sink, u BQ SQL sada + Dataform testy) → baseline GA4 vs. backend → changelog založen → kontrola
přístupů a vlastnictví → první měsíční komentář s „co jsme našli a opravili“. Artefakt smlouvy: **seznam kontrol s prahy** (GOV.UK
vzor) a **reakční doba**.

## 7. Zařazení do aktuální nabídky (`datalayer-web/app/lib/services.ts`)

Dnes 6 jednorázových služeb. Doporučení: přidat 7. službu **„Správa měření“** s vlastní stránkou a třemi tiery a u každé stávající
služby doplnit větu „pokračuje správou“:

| Stávající služba | Navazující tier | Věta na stránce služby |
|---|---|---|
| GA4 Implementace | Hlídání / Správa | „Po nasazení hlídáme, že měření běží i po každém dalším releasu.“ |
| Google Tag Manager | Správa | „Kontejner verzujeme, dokumentujeme a kontrolujeme po každé změně.“ |
| Server-Side Měření | Správa + položka provoz sGTM | „Provoz kontejneru, monitoring a aktualizace jako měsíční položka.“ |
| GA4 Audit | Hlídání | „Audit najde, co je rozbité. Hlídání zajistí, že to tak nezůstane.“ |
| Data Layer Design | Správa | „Specifikaci validujeme při každém releasu.“ |
| BigQuery & Data | Datová správa | „Export, který nevypadne, a čísla sladěná s e-shopem po transaction_id.“ |

Hero text „Data, kterým konečně můžete věřit“ nahradit painovou větou ze § 5 (např. pro e-shop segment).

## 8. Validace před spuštěním

**Pořadí validace se ve verzi 2 mění.** Nejtvrdší nález 2. kola je protievidence k samotné existenci poptávky
(§ 1, řádek „Nová“). Proto se nejdřív testuje **poptávka**, ne cena:

| # | Krok | Kritérium úspěchu |
|---|---|---|
| V1 | **White-label pilot s PPC agenturou** – oslovit 5 agentur s pevnou cenou za hlídání jejich klientů | **podepsaný pilot**, ne „vzali bychom to“ |
| V2 | **Test poptávky**: 4 týdny, dvě landing stránky (přímý e-shop vs. white-label), stejný rozpočet | počet poptávek na tier, ne prokliky |
| V3 | **Ekonomika dodávky**: zpětně změřit hodiny na 3–5 vlastních zakázkách + model souběhu incidentů | odhad 4–6 / 9–13 / 16–23 h potvrzen nebo opraven |
| V4 | **Rozhovory (5–8, 30 min)** + Van Westendorp | medián přijatelné ceny pro Správu v pásmu 15–25 tis. |
| V5 | **Proveditelnost denní reconciliace** na Shoptet addon API, Upgates API, Shopify Admin API | doložená oprávnění, limity a poplatky – jinak slib přeformulovat |

**Rozhovory (5–8, 30 min): 3 stávající klienti, 3 prospekti z poptávek (Shoptet Partneři), 2 PPC agentury.** Otázky:
1. Kdy jste naposledy zjistili, že měření nefungovalo? Jak jste na to přišli a jak dlouho to trvalo? (ověření H2, doba do odhalení)
2. Co vás to stálo – v kampaních, v čase, v rozhodnutích? (kvantifikace v Kč, chybí v CZ datech)
3. Kdo u vás dnes „vlastní“ měření? Co dělá, když se něco rozbije? (unknown_owner, reaktivní režim)
4. Kolik dnes platíte měsíčně za správu kampaní a kolik za nástroje kolem měření? (kotvy)
5. Kdybychom hlídali měření a do 24 h vám řekli, že se něco rozbilo a co s tím – co by to pro vás mělo stát měsíčně? Proč tolik? (Van Westendorp: příliš levné / levné / drahé / příliš drahé pro 8 900 / 19 900 / 39 000). **Druhé rameno:
   hybridní model** – nižší paušál + platba za vyřešený incident (po vzoru DASE „platíte len za odvedenú prácu“).
   Který z těch dvou modelů vám dává větší smysl a proč?
6. Co byste chtěli dostávat do ruky: alert, měsíční stránku, dashboard, call? Jak často? (F3 vs. F1)
7. Máte zapnutý export do BigQuery? Co s ním děláte? (RQ5, upsell)
8. Co by vás přesvědčilo koupit to jako pokračování po implementaci / auditu? Co by vás odradilo? (trigger, churn)
9. Pro agentury: kolik hodin měsíčně vás stojí rozbité měření klientů a jak to účtujete? Vzali byste to white-label?

**Test na webu:** stránka „Správa měření“ se třemi cenami a formulářem; měřit podíl kliků na tier a odeslání; varianta A s cenami,
varianta B „od 8 900“. Cíl: 30 dní, min. 200 návštěv na stránku.

**Kritéria úspěchu validace:** ≥ 5 z 8 respondentů popíše vlastní incident s dobou odhalení > 1 týden; medián „přijatelné ceny“
pro Správu v pásmu 15–25 tis.; ≥ 1 agentura ochotná pilotovat white-label.

## 9. Co dál (návrh dalších kroků mimo tuto rešerši)

1. Sepsat **veřejný dokument „Co hlídáme“** (seznam kontrol s prahy, checklist po releasu, formát komentáře, reakční doby) – artefakt
   pro web a nabídky.
2. Postavit **interní alert stack** jako šablonu (GA4 Insights, Data API skript, Checkly, sGTM log sink, BQ SQL + Dataform testy,
   Slack) – náklad do 3 000 Kč/klient/měs.
3. Provést validační rozhovory (§ 8) a upravit ceny podle Van Westendorp výsledku.
4. Připravit stránku služby a úpravu `services.ts` (§ 7); publikovat ceny.
5. Outbound kampaň před nejbližším deadlinem Googlu / změnou Shoptetu s painovým sdělením ze § 5.

---

## 10. Co se změnilo mezi verzí 1 a 2

| # | Verze 1 | Verze 2 | Proč |
|---|---|---|---|
| 1 | „Měření se tiše rozbilo“ = volné pole, nikdo z CZ konkurence to nepoužívá | **Vyvráceno.** Signals Bar (2 500 Kč) používá doslova „rozbité měření“ a „tiché výpadky“; LEMONTEC (AT) slibuje 24 h za 4 975 Kč | nález 2. kola, § 5.2 |
| 2 | „Jeden týden bez alertu stojí víc než rok správy“ | **Vypuštěno** – aritmeticky nepravdivé pro deklarovaný segment | § 5.1 |
| 3 | Práh reconciliace 15 % | **10 / 30 %** podle tří českých a slovenských zdrojů | v ČR je rozdíl 10–30 % norma; 15% práh by pálil denně |
| 4 | Násobek za BigQuery 3,7–5,5× | **≈ 2×** | vyvráceno třikrát nezávisle |
| 5 | Reconciliace slíbena malému e-shopu, ale nebyla v jeho tieru | **Součtové srovnání přesunuto do tieru Hlídání** | slib musí odpovídat dodávce |
| 6 | Validace: rozhovory → landing page → white-label jako třetí | **White-label pilot je první krok** | existuje protievidence k samotné poptávce |
| 7 | Poptávka po samostatné správě brána jako daná | **Neověřená hypotéza s protievidencí** (0 z 53 CZ poptávek žádá monitoring; US praktici to nazývají one-off službou) | § 1, řádek „Nová“ |
| 8 | Tier 3 podepřen tržním srovnáním | **Bez tržní opory** (dva EU body s rozptylem 4×); obhajuje se obsahem a marží | 08 § 3.1 B |

**Ceny se nezměnily.** Změnilo se, čím se obhajují, jak se o nich mluví a v jakém pořadí se validují.
