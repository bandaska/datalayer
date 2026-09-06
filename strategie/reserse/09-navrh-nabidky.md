# Fáze 10 – Návrh nabídky DataLayer.cz: pozicování, tiery, sdělení, vstupní bod

Stav: **návrh k diskusi, verze 3 (2026-09-06)** – po třetím kole.
Vychází z fází 1–9 a z `10-doplneni-a-overeni-r2.md` a `11-doplneni-r3.md`. Čísla v Kč bez DPH.
Změny proti verzi 2 jsou v § 11.

> **Verdikt třetího kola: ANO stavět, NE tu službu, která je tady navržená, a NE s tímto ceníkem.**
> Kontinuální placená práce na měření v ČR prokazatelně existuje a obnovuje se — devět reálně zaplacených
> měsíčních cen z registru smluv. Ale *hlídání měření* jako samostatně kupovaná položka nemá ani jeden
> doklad z poptávkové strany: **0 výskytů v desetiletém registru smluv, 0 z 53 poptávek na Shoptet
> Partnerech, 1 samostatná zakázka v celém českém korpusu veřejných zakázek za 10 let.**
> Prodejná je **hodinová kapacita analytika s interpretací dat**, uvnitř které je hlídání a SLA
> diferenciátor. Podrobně v § 10.

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

| | **Analytik na malý úvazek** (dříve *Hlídání*) | **Správa měření** | **Datová správa** |
|---|---|---|---|
| **Cena** | **8 900 Kč/měs** | 19 900 Kč/měs → **doporučeno 15 900 Kč** | **od 39 000 Kč** podle rozsahu |
| **Opora v reálně zaplacených českých cenách** | 8 640 / 9 000 / 10 000 / 12 143 Kč — sedí dovnitř | **žádná** — mezera 15 300 → 37 200 Kč je prázdná | 37 200 / 38 000 / 40 946 Kč — sedí doprostřed |
| **Pro koho** | e-shop / lead-gen web do ~20 mil. obratu, 1 web, Ads spend do ~50 tis., bez BQ; agentura jako white-label vrstva | e-shop 20–200 mil., 1–3 weby, 3–4 ad platformy, releasy měsíčně, spend 50–500 tis.; B2B s drahými leady | e-shop 100 mil.+, více značek/zemí, BQ export (nebo ho zapneme), sGTM, reporting nad BQ, spend 500 tis.+ |
| **Pain, který řeší** | „Přestaly chodit konverze a zjistili jsme to za tři týdny na CPA.“ (painy 1, 2, 5, 8) | „Po každém releasu se něco rozbije a nikdo nevlastní měření; GA4 a e-shop se rozcházejí a nevíme proč.“ (painy 3, 4, 5, 6, 10, 13) | „Potřebujeme čísla, kterým se dá věřit napříč platformami, po transaction_id, a export, který nevypadne.“ (painy 3, 6, 7, 9, 15) |
| **Denně (automat)** | GA4 Custom Insights (10–15 pravidel) + Data API kontrola purchase/lead vs. včera a před týdnem; **součtové srovnání objednávek vs. konverzí (prahy 10 / 30 %) — jen na podporovaných platformách, viz § 4.1**; sGTM 5xx | + Checkly průchod checkoutem / formulářem s kontrolou dataLayer a GA4 requestů; kontrola konverzních akcí Ads/Meta | + kontrola BQ exportu (tabulka, objem ±5 %, zpoždění), Dataform/SQL testy (purchase má transaction_id, revenue > 0), anomálie per event/zdroj, **denní reconciliace GA4 vs. backend po transaction_id**, budget alerty |
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

### 4.1 Na kterých platformách denní srovnání s e-shopem funguje (nález 3. kola)

Slib denního srovnání objednávek nelze dát plošně. Ověřeno z veřejné dokumentace:

| Platforma | Denní srovnání | Poznámka |
|---|---|---|
| **Upgates** | ano | REST API s objednávkami dostupné |
| **Shopify** | ano | Admin API, `read_orders`; `read_all_orders` vyžaduje schválení |
| **WooCommerce** | ano | REST API |
| **PrestaShop** | ano | webservice API |
| **Shoptet Premium** | ano | REST API; Premium začíná na 12 000 Kč/měs |
| **Shoptet Free–Enterprise** | **ne** | Shoptet doslova: *„Zakázková implementace proto není možná pro klienty, kteří využívají tarify Free až Enterprise, tito k REST API přístup nemají"* |

**To je problém právě pro vstupní tier.** Jeho cílový klient (e-shop do ~20 mil., jeden web, bez BigQuery)
je na Shoptetu skoro jistě na tarifu Business nebo Profi (1 490–2 490 Kč/měs) a k API se nedostane.

**Do vyřešení platí:** v nabídce uvádět **jmenný seznam podporovaných platforem**. Pro Shoptet bez Premium
buď najít alternativu (plánovaný export objednávek e-mailem, XML feed), nebo slib denního srovnání u tohoto
segmentu vypustit a nahradit ho měsíční ruční kontrolou. **Ověření alternativy je dvě hodiny práce nad
veřejnou dokumentací a blokuje publikaci ceníku.**

### 4.2 Co musí být ve smlouvě, aby šel slib reakční doby publikovat (nález 3. kola)

Prodáváme slib reakční doby a argumentujeme promarněným reklamním rozpočtem — tedy přesně tou škodou,
na kterou se klient zeptá, kdo ji nese. Celý dodavatelský řetězec od Googlu dolů to řeší stejně a
§ 2898 občanského zákoníku to vůči podnikateli dovoluje:

1. **Reakční doba je lhůta k zahájení práce**, ne k vyřešení. Definovat od nahlášení klientem **nebo od
   naší vlastní detekce**, s pracovní dobou jako oknem.
2. **Jedinou sankcí je kredit z vlastní odměny**, číselně a se stropem. Návrh: 10 % měsíční odměny za každý
   započatý násobek lhůty, strop 50 %. Maximální měsíční expozice: 4 450 / 7 950 / 19 500 Kč — **je to
   nepojistitelné a platí se z marže**, takže to patří do nákladového modelu.
3. **Náhrada škody omezena na 1–6 měsíčních odměn s vyloučením ušlého zisku.** Samostatná klauzule
   k § 2950 (škoda způsobená informací nebo radou).
4. **V podepsané smlouvě, ne ve VOP.** Omezení odpovědnosti schované ve VOP je vůči podnikateli slabší.
5. **Zpracovatelská smlouva k objednávkovým datům.** Když čteme objednávky klienta, jsme zpracovatel
   osobních údajů se vším, co k tomu podle GDPR patří.
6. **Účty a přístupy vedeny pod klientem**, my jako správci. Řeší to nejčastější pain `access_lost`
   a zároveň je to prodejní argument.

Pro kontext, kolik takový slib stojí jinde: Český rozhlas má ve smlouvě od roku 2021 odstranění vady
do 12 hodin s pokutou 2 000 Kč/den a pojištěním na 900 000 Kč; Brno-střed reakci 1 h / odstranění 4 h
s pokutou 1 000 Kč za každou započatou hodinu. **Reakční doba na výpadek měření v ČR existuje — jen ne
v ceníku, ale ve smlouvě.**

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

## 9. Kanál: komu to prodat nejdřív

Třetí kolo změnilo odpověď. Verze 2 předpokládala PPC agentury jako hlavní white-label kanál; to je
**doložený odpor, ne doložený kanál** — PPC agentura si měření drží in-house, protože je to *„soo essential
part of the PPC service"*.

| Pořadí | Kanál | Proč | Doklad |
|---|---|---|---|
| 1 | **Kdo klientovi už provozuje sGTM nebo hosting měření** | rozpočtová položka už existuje, jen se rozšíří | MeasureCamp deck: monitoring navěšený na sGTM hosting, 350 €/měs velkoobchodně |
| 2 | **Dodavatel webu** — měření jako pojmenovaná role v paušálu | vzor Praha: „Obsahový specialista, SEO a webový analytik" | veřejné zakázky |
| 3 | **Veřejný sektor** — kraje, destinační agentury, univerzity, veřejnoprávní média | nakupují opakovaně, mění dodavatele, zakázka roste (ČRo strop +150 % mezi 2021 a 2026); **všech devět doložených zaplacených cen je odsud** | registr smluv |
| 4 | Přímý prodej e-shopu | rozpočtová položka neexistuje; nejtěžší kanál | 0 z 53 poptávek |

**Vstupenkou je vždy předchozí jednorázový projekt.** Ani jeden z nalezených paušálů nevznikl bez něj.

## 10. Rozhodnutí: stavět, ale jinak

**ANO stavět.** Forma je doložená a opakovaně placená; v Evropě existují srovnatelné produkty s veřejnou
cenou (Junto 33 375 Kč, Piekarski 17 400 Kč, LEMONTEC 30 měsíců na trhu); hotový nástroj na reconciliaci
neexistuje ani v ČR, ani na Shopify; a **pain je jediné, co tři kola rešerše nikdy nezpochybnila**.

**NE jako samostatný produkt se třemi veřejnými cenami.** Rozpočtová položka na hlídání měření v ČR
neexistuje, takže musí vzniknout u někoho, kdo už jednu má. Prodávat jako **pojmenovanou položku nebo
white-label modul navěšený na to, co klient už kupuje.**

**Pět podmínek, které blokují publikaci ceníku** — všechny splnitelné bez další rešerše:

| # | Podmínka | Blokuje | Náklad |
|---|---|---|---|
| 1 | Změřit hodiny zpětně na 3–5 vlastních zakázkách **včetně plošného scénáře** (jedna změna Googlu = všichni klienti týž den) | celý ceník; při realistické utilizaci je marže 31–40 % a tier 1 může být ztrátový | 1 den |
| 2 | Rozhodnout slib denního srovnání pro Shoptet bez Premium | vstupní tier | 2 hodiny |
| 3 | Smluvní konstrukce reakční doby (§ 4.2) + tři nabídky pojištění profesní odpovědnosti | celý ceník; bez pojištění není znám náklad slibu | 1 týden |
| 4 | Tier 3 publikovat jako „od", ne jako pevnou cenu | datový tier | – |
| 5 | Snížit tier 2 na ≈ 15 900 Kč, nebo vyjmenovat obsah za rozdíl | standardní tier | – |

**Dvě rozhodovací podmínky, které nejsou o ceníku:**

6. **Dva podepsaní piloti do 8 týdnů** — jeden white-label, jeden přímý, za jakoukoli cenu. Kritérium je
   **podpis a první faktura**, ne „vzali bychom to". Kdyby po 8 týdnech nebyl podepsán ani jeden nad
   8 900 Kč, je to no-go signál pro samostatný produkt a fallback je 2 900–5 000 Kč jako příloha
   k jiné službě plus fakturované incidenty.
7. **Druhé cenové rameno testu postavit na 2 900–5 000 Kč**, ne na 8 900 Kč. To je hladina, za kterou se
   jediná prokazatelně dlouhověká evropská instance přesně tohoto produktu (LEMONTEC, 30 měsíců) prodává
   v české cenové hladině.

## 11. Co se změnilo mezi verzemi

| # | Verze 2 (05. 9.) | Verze 3 (06. 9.) |
|---|---|---|
| 1 | poptávka po samostatné správě = neověřená hypotéza s protievidencí | **třetí nezávislé potvrzení protievidence**: 0 výskytů „hlídání" v desetiletém registru smluv, 1 samostatná zakázka za 10 let |
| 2 | české pásmo stojí na jednom subjektu | **devět reálně zaplacených cen**; ale všechny z veřejného sektoru, z e-shopu ani jedna |
| 3 | tier 3 (39 000) bez tržní opory | **poprvé domácí kotva** 37 200–40 946 Kč; publikovat jako „od" |
| 4 | tier 2 (19 900) nejlépe podepřený | **nejslabší**; mezera 15 300 → 37 200 Kč je prázdná → doporučeno 15 900 Kč |
| 5 | „8 900 pod evropským mediánem" | po PPP korekci **27 % nad** ním |
| 6 | marže 43–65 % | **31–40 %**; tier 1 při horním odhadu hodin ztrátový |
| 7 | denní srovnání slíbeno vstupnímu tieru | **nejde u Shoptetu bez Premium** — právě u cílového klienta tieru 1 |
| 8 | reakční dobu v ČR nikdo neslibuje | v cenících ne (0 ze 71 evropských subjektů), **ve smlouvách ano od roku 2021** |
| 9 | changelog a hlídání deadlinů = diferenciátor | **hygiena** — v sousedních oborech je to zdarma („Problémy vidíme dřív než vaši lidé", 3–13 tis. Kč) |
| 10 | white-label přes PPC agentury | **PPC agentura je doložený odpor**; kanál je provozovatel sGTM, dodavatel webu a veřejný sektor |
| 11 | tier 1 = „Hlídání" | **„Analytik na malý úvazek"** — čeští kupující platí za interpretaci dat, ne za hlídání |
| 12 | – | **indexační doložka** podle HICP služeb: ceny v oboru ztrácejí reálnou hodnotu (−38 % za 10 let) |
