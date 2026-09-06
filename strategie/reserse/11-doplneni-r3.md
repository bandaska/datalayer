# Třetí kolo rešerše – syntéza

**Datum: 2026-09-06.** Navazuje na `02-shrnuti-a-zavery.md` (verze 2) a na zadání ve
`10-doplneni-a-overeni-r2.md` § 6. Deset úkolů (K01–K10), deset reportů v `doplneni-r3/`,
dvě nezávislé kritiky.

**Objem dat:** 16 nových fragmentů v `../data/fragments/r3-*.csv` –
**151 cenových řádků, 315 důkazů, 4 výpovědi o rozbitém měření** (spočteno CSV parserem, ne `wc -l`;
řádky obsahují víceřádkové citace). Rozpad podle úkolů:

| Úkol | Téma | pricing | evidence | pain |
|---|---|---:|---:|---:|
| K01 | Registr smluv (B1) | 31 | 26 | – |
| K02 | Veřejné zakázky NEN/TED/Věstník (B1) | 19 | 20 | – |
| K03 | Proveditelnost reconciliace (A5) | – | 46 | – |
| K04 | Kotvy ze sousedních CZ oborů (B4) | 52 | 18 | – |
| K05 | Analýza přežití (C5) | – | 36 | 4 |
| K06 | Právní a smluvní vrstva (C4) | – | 37 | – |
| K07 | Hodiny a SLA u konkurence (B3) | 18 | 26 | – |
| K08 | Francie a Polsko (D1) | 31 | 25 | – |
| K09 | Longitudinální řez + PPP (D2, D3) | – | 54 | – |
| K10 | Artefakty dodávky (C6) | – | 27 | – |
| **Celkem** | | **151** | **315** | **4** |

**Pozor:** K03, K06, K09 a K10 nezaložily cenový fragment vůbec, přestože ve svých textech uvádějí
dohromady ≈ 25 nových cenových bodů (ceník Shoptetu a Upgates, longitudinální řada 2022/2024/2026,
MeasureCamp deck, SLA kredity Googlu). Tyto body v datasetu **nejsou** a při slučování se musí doplnit
ručně – jinak z datasetu vypadne právě to nejčerstvější.

---

## 1. Shrnutí

**(a) Máme konečně reálně zaplacené české ceny?** **Ano – poprvé za tři kola.** Registr smluv dal
**šest reálně zaplacených měsíčních cen za práci na měření** (8 640 / 9 000 / 10 000 / 12 143 / 15 300 /
40 946 Kč bez DPH, medián **11 072 Kč**) a **šest reálných hodinových sazeb** (1 440 / 1 500 / 1 500 /
1 600 / 1 700 / 1 750 Kč/h). Slabina verze 2 – „celé české pásmo stojí na jediném ceníku RobertNemec.com“ –
tím **padá**. Nahrazuje ji ale jiná, stejně tvrdá: **všech šest bodů je z veřejného sektoru
(média, destinační agentury, univerzity, města) a z cílového segmentu – e-shopu – není doložena ani jedna.**

**(b) Uživí se to?** **Odpověď zní: ano jako práce, ne jako produkt jménem „hlídání měření“.**
Kontinuální placená práce na měření prokazatelně existuje a je opakovaně obnovovaná. Ale ve všech třech
poptávkových zdrojích, které kolo otevřelo, je **nula** dokladů, že by si někdo koupil monitoring nebo
alerting jako pojmenovanou službu: v celém registru smluv má „správa analytiky“ **0** a „alerting“ **0**
výskytů (EK1-024), v celém českém korpusu veřejných zakázek je průběžná analytická služba předmětem
**jedné** zakázky za deset let (EK2-016), a z 53 poptávek na Shoptet Partnerech (2. kolo) **0**.
To je třetí nezávislé potvrzení protievidence z 2. kola.

1. **Tier 1 (8 900 Kč) je jediný, který padá do doloženého českého zaplaceného pásma 8 640–15 300 Kč** –
   ale nikdo v tom pásmu nekupuje hlídání. Kupují interpretaci dat, reporty a konfigurační činnosti
   (EK1-005, EK1-008, EK1-010).
2. **Tier 2 (19 900 Kč) je 30 % nad horní hranou českého zaplaceného pásma.** Nejbližší reálně zaplacený
   český bod je CzechTourism 2025: **15 300 Kč za 9 hodin, a přitom zahrnuje BigQuery i server-side GTM** –
   tedy víc, než navrhovaný tier 2 (EK1-010).
3. **Tier 3 (39 000 Kč) domácí kotvu v cílovém segmentu nedostal.** Jediný český bod téhož řádu
   (ČRo 40 946 Kč) není paušál, ale čerpání hodinového rámce 1 600 Kč/h s rozptylem
   20 000–127 075 Kč měsíčně a s vývojem v rozsahu (EK1-001, EK1-004).
4. **Reálná česká sazba za specialistickou práci na měření je 1 440–1 750 Kč/h**, za generalistickou
   správu webu včetně měřicích kódů **990 Kč/h** (vysoutěžená, Brno-střed, EK2-003). To je cenový
   benchmark, ne náklad.
5. **Nákladový model verze 2 (700 Kč/h) je neudržitelný.** ISPV 2025: medián systémového analytika
   91 532 Kč hrubého → **122 470 Kč měsíčních nákladů zaměstnavatele** → 816 Kč/h při 150 fakturovaných
   hodinách, **1 021 Kč/h při 120 h**, 1 225 Kč/h při 100 h (K09).
6. **Denní reconciliace je proveditelná všude kromě Shoptetu bez Premium** – a tam je vstupní tier
   nejvíc doma. Shoptet doslova: *„Zakázková implementace proto není možná pro klienty, kteří využívají
   tarify Free až Enterprise, tito k REST API přístup nemají“* (EK3-032). Premium začíná na 12 000 Kč/měs.
7. **Za garantovanou reakční dobu si český trh účtuje medián 1,63× za stupeň zkrácení** (n = 9 přechodů,
   5 dodavatelů) a 2,61× za celý žebřík. Náš skok 2,24× je na horní hranici zvyku, rozpětí ceníku 4,38×
   je širší než u kteréhokoli nalezeného tříúrovňového měřicího paušálu (K04, K07).
8. **8 900 Kč je v ČR cena celého firemního IT malé firmy** (Externí IT ≈ 9 000, ITHOPE 8 000–18 000,
   ICT-GROUP 12 910 Kč) **a víc než nejdražší veřejný účetní paušál** (7 500 Kč). A reakce „další
   pracovní den“, kterou tier 1 slibuje, je v sousedních oborech nejlevnější vstupní úroveň za
   790–4 400 Kč/měs (EK4-002, EK4-003, EK4-012).
9. **Slib reakční doby publikovat lze**, ale jen s definovaným oknem, s kreditem z vlastní odměny se
   stropem a s omezením náhrady škody na 1–6 měsíčních odměn – přesně tak to dělá řetězec od Googlu dolů
   a § 2898 obč. zák. to vůči podnikateli dovoluje (EK6-001, EK6-012, EK6-019, EK6-020).
10. **Reakční doba na výpadek měření v ČR existuje – jen ne v ceníku, ale ve smlouvě.** Český rozhlas ji
    má od roku 2021: *„vadu odstranit do 12 hodin“*, pokuta 2 000 Kč/den, pojištění 900 000 Kč (EK1-003).
    Brno-střed: reakce 1 h / odstranění 4 h / pokuta 1 000 Kč za každou započatou hodinu (EK2-002).
11. **Hřbitov se nepotvrdil, ale ani příležitost.** Ze 46 prohledaných subjektů nemá ani jeden doložený
    případ „měl publikovanou měsíční cenu za správu měření a stáhl ji“ – jenže veřejnou měsíční cenu má
    v Evropě jen 5 ze 71 subjektů (7 %), takže test nulového počtu stažení nemá sílu rozlišit
    (K05 vs. K08).
12. **Po PPP korekci na českou cenovou hladinu se celý ceník posouvá proti trhu nahoru:** evropský medián
    vstupních tierů klesá z 11 062 na **6 990 Kč** (8 900 Kč je 27 % nad ním) a pod 39 000 Kč leží
    **24 z 25** korigovaných evropských bodů (K09 § 2.4).

---

## 2. Reálně zaplacené české ceny

Zdroj: registr smluv `smlouvy.gov.cz` přes fulltextový index Hlídače státu (oficiální vyhledávání na
`smlouvy.gov.cz/vyhledavani` nefunguje jako fulltext – vrací stejný počet záznamů pro libovolný dotaz;
`/vyhledavani-detailni` vrací 404). Doplněno Hlídačem veřejných zakázek a TED.

### 2.1 Průběžná práce na měření – reálně zaplacené měsíční ceny

| Zadavatel | Dodavatel | Předmět | Cena celkem | **Kč/měs** | Rozsah | BQ | Rok | Důkaz |
|---|---|---|---|---:|---|---|---|---|
| Český rozhlas | Optimics | rámec „Rozvíjení a údržba analytiky návštěvnosti a poslechovosti“ – **skutečné čerpání** 26 dílčích plnění | 1 596 875 Kč / 39 měs. | **40 946** | 25,6 h/měs à 1 600 Kč | ano | 2023–25 | EK1-004 |
| Český rozhlas | Optimics | týž rámec – **strop** | 1 600 000 Kč / 36 měs. | 44 444 | 1 000 h à 1 600 Kč | ano | 2023 | EK1-001 |
| Český rozhlas | Optimics | předchozí rámec – **strop** | 1 200 000 Kč / 36 měs. | 33 333 | 750 h à 1 500 Kč | ano | 2021 | EK1-007 |
| Český rozhlas | **Taste, a.s.** | nástupnický rámec, + SLA 8×5, hotline, vada do 3 dnů, post mortem | 3 000 000 Kč / 48 měs. | 62 500 | sazba v PDF nečitelná | ano | 2026 | EK1-011 |
| CzechTourism | Tereza Neuschl | konfigurační činnosti, dohled nad konzistencí dat, sGTM, Looker, optimalizace BQ | 15 300 Kč/měs | **15 300** | 9 h, další h 1 700 Kč | **ano** | 2025 | EK1-010 |
| Krkonoše – svazek měst a obcí | Michael Pokorný | „správa Google Analytics“ na 3 webech | 85 000 Kč / 7 měs. | **12 143** | neuveden | ne | 2023 | EK1-006 |
| Krkonoše – svazek měst a obcí | Michael Pokorný | totéž, předchozí rok | 10 000 Kč/měs | **10 000** | neuveden | ne | 2022 | EK1-005 |
| CzechTourism | Martin Neuschl | interpretace dat a analytická podpora | 9 000 Kč/měs | **9 000** | 6 h à 1 500 Kč | volitelně | 2024 | EK1-008 |
| CzechTourism | Martin Neuschl | totéž | 8 640 Kč/měs | **8 640** | 6 h à 1 440 Kč | ne | 2023 | EK1-009 |

**Doložené české zaplacené pásmo bez ČRo: 8 640 – 15 300 Kč/měs. Medián všech šesti bodů: 11 072 Kč.**
Rozptyl uvnitř jediného rámce ČRo: 20 000 Kč (05/2024) až 127 075 Kč (12/2024); průměr běžné měsíční
objednávky 2025 = 42 571 Kč, medián 43 200 Kč.

Doslovné doklady, na kterých to stojí:

> *„Cena za 1 hodinu poskytování služeb činí 1.600,- Kč bez DPH. (…) Nabízená cena za hodinu služeb
> v Kč bez DPH vynásobené předpokládaným počtem hodin (1000).“* — ČRo / Optimics, `smlouvy.gov.cz/smlouva/23433101` (EK1-001)

> *„Maximální měsíční cena je 15 300 Kč za 9 hodin podpory. V případě že požadavky Objednatele budou
> pracnější než 9 hodin, každá další hodina podpory je účtována zvlášť v ceně 1 700 Kč.“*
> — CzechTourism / T. Neuschl, `smlouvy.gov.cz/smlouva/32389880` (EK1-010)

> *„Objednáváme u Vás správu Google analytics spočívají v: 1. pravidelná tvorba reportů, 2. interpretace
> chování návštěvníků na webech (…) Smluvní cena bude postupně vyplácena v pravidelné částce 10.000,- Kč.“*
> — Krkonoše / Pokorný, `smlouvy.gov.cz/smlouva/20997923` (EK1-005)

### 2.2 Analytika jako položka v paušálu za něco jiného (konkurenční model)

Tyto řádky **nejsou** cenou za správu měření a nesmí se míchat do mediánu. Jsou to kotvy toho, s čím
vstupní tier soupeří u menšího klienta.

| Zadavatel | Dodavatel | Co je v ceně | Kč/měs | Důkaz |
|---|---|---|---:|---|
| HLAVNÍ MĚSTO PRAHA | LinkSoft Technologies | „Obsahový specialista, SEO a **webový analytik** pro portál praha.eu 2025–2027“ | 83 333 | PK2-007 |
| Statutární město České Budějovice | neuveden | marketingová podpora turistického webu budejce.cz 2026–27 | 39 310 | PK2-008 |
| Vysočina Tourism | XART | internetový marketing vč. GA4, Search Console, GTM, Looker Studio, SEO, PPC | 12 000 | EK1-021 |
| Město Velké Meziříčí | Aleš Janoušek | servisPARTNER: web + internetový marketing vč. webové analytiky | 5 900 | EK1-015 |
| Baťův kanál | Bystřický a spol. | odměna agentury uvnitř projektu (zbylých 120 000 z 158 000 Kč je přímo reklama) | 3 800 | EK1-022 |

### 2.3 Jednorázové plnění – zvlášť oddělené od průběžné správy

| Zadavatel | Dodavatel | Předmět | Cena bez DPH | Rok | Důkaz |
|---|---|---|---:|---|---|
| Český rozhlas | Optimics | „Online analytika Českého rozhlasu“, dílo do 3 měsíců | 900 000 | 2019 | EK1-012 |
| CzechTrade | Yaneba | nastavení analytiky BusinessInfo.cz **(z toho implementace GA4 jen 13 000, „analýza a verifikace metrik“ 68 000)** | 116 000 | 2023 | EK1-017 |
| Správa IT města Plzně | Digitální architekti | vstupní audit webové analytiky, workshopy, „pilotní narovnání měření“ | 100 000 | 2025 | EK1-020 |
| Národní divadlo | Optimics | analytika a reporting vč. GA4 → BigQuery → Power BI | 99 500 | 2020 | EK1-023 |
| Středočeská centrála CR | Martin Neuschl | webová analytika + implementace CMP s měřením | 97 900 | 2021 | EK1-019 |
| CzechTourism | Martin Neuschl | audit + tracking concept + GA4/GTM + testování + workshop | 96 800 | 2021 | EK1-016 |
| CzechTourism | Martin Neuschl | **jedno kolo testování nastavení měření** | 60 000 | 2024 | EK1-008 |
| Komorní scéna Aréna | Viktorie Peterová | cross-domain GTM, Data Studio, tracking taxonomy | 66 550 s DPH | 2022 | EK1-026 |
| VŠE | Etnetera Activate | reporting v Looker Studiu nad GA4 pro tři weby | 54 600 | 2026 | EK1-018 |
| CzechTourism | Martin Neuschl | úprava šesti automatizovaných reportů v Looker Studiu | 48 000 | 2023 | EK1-009 |
| CzechTourism | Martin Neuschl | nastavení měření do GA4 a Ads na straně serveru, dva portály | 31 750 | 2024 | EK1-008 |
| Univerzita Karlova (ÚJOP) | Avedeo | kontrola analytiky a jejího nastavení, 4 h | 7 000 | 2025 | EK1-013 |

**Nejcennější číslo z celé tabulky: poměr 13 000 : 68 000.** CzechTrade zaplatil za *nasazení* GA4
13 000 Kč, ale za *ověření, že čísla sedí*, 68 000 Kč – 5,2×. To je jediný doložený český důkaz, že
kontrola měření má vyšší cenu než jeho implementace.

### 2.4 Reálné hodinové sazby (ne ceníkové)

| Sazba bez DPH | Kdo / za co | Typ práce | Rok | Důkaz |
|---:|---|---|---|---|
| 1 750 Kč | Avedeo / UK ÚJOP – kontrola analytiky | specialista | 2025 | EK1-013 |
| 1 700 Kč | T. Neuschl / CzechTourism – hodina nad rámec paušálu | specialista | 2025 | EK1-010 |
| 1 600 Kč | Optimics / ČRo – rámcová dohoda | specialista | 2023 | EK1-001 |
| 1 500 Kč | Optimics / ČRo; M. Neuschl / CzechTourism | specialista | 2021, 2024 | EK1-007, EK1-008 |
| 1 440 Kč | M. Neuschl / CzechTourism | specialista | 2023 | EK1-009 |
| **990 Kč** | MČ Brno-střed – **vysoutěžená** správa webu vč. měřicích kódů GA/GTM/Clarity/Meta Pixel | generalista | 2026 | EK2-003 |
| 790 Kč | MČ Brno-střed – správa sociálních sítí | generalista | 2026 | EK2-003 |
| 700 Kč | Janoušek / Velké Meziříčí – analytické a programátorské práce uvnitř webového paušálu | generalista | 2021 | EK1-015 |
| 520 Kč | Ondřej Kostík / CzechTrade – **trvalá kapacita 120 h/měs = 62 400 Kč/měs** | OSVČ na úvazek | 2026–29 | EK1-014 |

**Kotva „koupit vs. najmout“:** za cenu jednoho tieru 3 má zadavatel u externího analytika na dlouhodobou
kapacitu 120 hodin měsíčně. Specialistická sazba je proti té kapacitní 2,8–3,3× vyšší. Klient si tuhle
aritmetiku spočítá sám a nabídka na to musí mít odpověď.

### 2.5 Kvantifikace poptávky nad celým registrem (EK1-024)

Povinně zveřejněná je každá veřejná smlouva nad 50 000 Kč, korpus 2016–2026. Dotazy omezené na pole
**předmět**:

| Dotaz | Počet smluv |
|---|---:|
| „Google Analytics“ | 15 |
| „webová analytika“ | 6 |
| „správa Google Analytics“ | 2 |
| „údržba analytiky“ | 2 |
| „Google Tag Manager“ | 2 |
| „analytika webu“ | 1 |
| **„správa analytiky“** | **0** |
| **„digitální analytika“** | **0** |
| **„alerting“** | **0** |

Ve veřejných zakázkách je výsledek stejný: **jediná** zakázka, jejímž předmětem je průběžná analytická
služba (CzechTrade, 1 996 800 Kč, EK2-016); ve všech ostatních případech je měření **řádkem uvnitř**
zakázky na web, online marketing nebo ICT roli.

**Evropský kontrast:** jakmile je organizace dost velká, měření se vyčleňuje – Úřad pro publikace EU
„Managed services: Digital analytics“ 3 000 000 EUR / 48 měs. = 1 562 500 Kč/měs (EK2-004), předchůdce
z roku 2018 se jmenoval doslova „Digital Analytics and **Website Monitoring**“ (EK2-005), Wit-Gele Kruis
(BE) samostatná část „Analytics & Dashboarding“ se stropem 300 000 EUR (EK2-006), Stadtwerke Lübeck
48měsíční „Rahmenvertrag digital analytics“ s požadavkem na certifikáty na BigQuery nad surovými GA daty
(EK2-007). **Hranice mezi „koupí to v balíku“ a „koupí to zvlášť“ neleží v zemi, ale ve velikosti
zadavatele.**

### 2.6 Výhrady k číslům v této kapitole

- **U 9 ze 13 zakázek z Hlídače chybí doba plnění**, takže z jejich smluvních cen měsíční cenu spočítat
  nelze; jsou to celkové částky, ne cenové body (K02 § 4.3).
- **Neověřený předpoklad:** že cena zobrazená v Hlídači bez předpony „odhad. cena“ znamená smluvní,
  nikoli předpokládanou hodnotu. Před použitím v prezentaci ověřit u jednoho případu proti profilu
  zadavatele podle § 219 ZZVZ (K02 § 4.4).
- **U České televize** (objednávky Rajtmajer 192 000 / 96 000 Kč, Toušovský 416 000 Kč) není v naskenovaném
  PDF čitelná tabulka jednotek a sazeb – řádky PK1-029 a PK1-030 mají `price_czk_month` záměrně prázdné.
- **Medián 13 722 Kč, který uvádí K01 § 1.2, nikde nepoužívejte.** Míchá skutečné paušály na měření
  s marketingovými paušály (3 800 / 5 900 / 12 000 Kč) a šest ze čtrnácti bodů pochází od jediného
  zadavatele. Správná čísla jsou dvě oddělená: měření 8 640–40 946 Kč (medián 11 072) a marketingový
  paušál s analytikou uvnitř 3 800–12 000 Kč.
- **NEN (`nen.nipez.cz`) a ISVZ jsou z tohoto prostředí nedostupné** – spojení resetováno na úrovni
  proxy (HTTP 000), nepomohl ani prohlížečový UA, ani `r.jina.ai`, ani CORS proxy. Neotevřené proto
  zůstaly zadávací dokumentace právě těch nejrelevantnějších zakázek: ČRo (analytika poslechovosti),
  ČEZ, Praha (praha.eu), CzechTrade (EK2-019).

---

## 3. Proveditelnost denní reconciliace

Verdikt pro každou platformu (K03, důkazy EK3-001 až EK3-046, výhradně veřejná dokumentace):

| Platforma | Verdikt | Podmínka | Reálná frekvence |
|---|---|---|---|
| **Shoptet Premium** (od 12 000 Kč/měs) | **JDE TO** | klient vygeneruje privátní token, omezí skupiny endpointů | denně, bez limitu dotazů |
| **Shoptet Free–Enterprise** (0–4 690 Kč/měs) | **NEJDE bez vlastního schváleného doplňku** | REST API tyto tarify nemají; jediná cesta je veřejný doplněk Shoptetu | – |
| **Upgates** (všechny tarify) | **JDE S OMEZENÍM** | příplatek Klientské API 100 Kč/měs + 30 Kč/měs za 1 000 volání/den navíc; kvóta Bronze 340 volání/den | denně ano, hodinově na Bronze ne |
| **Shopify** | **JDE S OMEZENÍM** | custom app v adminu klienta; `read_orders` = okno 60 dní (na denní běh stačí); slabinou je párování | denně |
| **WooCommerce** | **JDE TO** | klíč s právem Read | denně |
| **PrestaShop** | **JDE TO** | webservice klíč s GET na `/api/orders` | denně |

**Shoptet doslova (EK3-032):** *„Zakázková implementace proto není možná pro klienty, kteří využívají
tarify Free až Enterprise, tito k REST API přístup nemají.“* Ceník k 2026-09-06 (EK3-033): Free 0 ·
Basic 440 · Business 1 490 · Profi 2 490 · Enterprise 4 690 · **Premium od 12 000 Kč/měs**.

**Zpřesnění proti verdiktu K03:** kritika má pravdu, že „NEJDE VŮBEC“ je silnější než vlastní důkazy.
Citace se týká *zakázkové* implementace; tentýž úkol dokládá funkční cestu přes **schválený veřejný
doplněk** (Shoptet odpovídá na návrh do čtyř týdnů, posuzuje i „zamýšlenou cenovou politiku“ doplňku,
doplněk musí běžet na infrastruktuře partnera – EK3-002, EK3-003, EK3-034). Blokátor je tedy **partnerský
a nákladový, ne absolutní technický** – a poplatek za partnerství není nikde veřejně uveden, takže se
nedá ani ocenit (EK3-014). Přesná formulace: *„bez vlastního schváleného doplňku Shoptetu to nejde;
doplněk je samostatný produkt s neznámými poplatky a 4+ týdny schvalování.“*

**Co ještě z K03 platí a mění nabídku:**

- **Diff po jednotlivých `transaction_id` se bez BigQuery slíbit nedá.** `transaction_id` je maximálně
  kardinální dimenze, Google varuje, že nad 500 hodnot roste riziko řádku `(other)` i v odpovědi Data API
  (EK3-042), a než jsou denní data hotová, platí ještě přísnější limity kardinality (EK3-046).
  **Poctivý slib bez BQ je jen součtové srovnání.** To je první tvrdý technický důvod, proč je tier 3
  jiná služba a ne jen dražší – dosud se rozdíl obhajoval jen „hloubkou“.
- **Denně to jde, ale ne ráno.** Denní data za včerejšek jsou hotová ~11:30 (Explore) a ~15:30 (Reports)
  místního času, denní BigQuery události ~12:00, část dat může dorazit až o 7 dní později (EK3-045).
  Běh po 16:00 a alert až po potvrzení druhý den.
- **Párování je na Shoptetu zdarma a spolehlivé** (`transactionId` = `orderNo` = `code`, EK3-010,
  EK3-044), **na Shopify nespolehlivé** – `transaction_id` může být order name (`#850253`), order number
  (`850253`) nebo order ID (`5146079592553`) podle implementace (EK3-037).
- **Hotový nástroj neexistuje ani v ČR, ani na Shopify.** Projito všech 6 stran katalogu doplňků Shoptetu
  a katalog Upgates – žádný doplněk nesrovnává objednávky s GA4 (EK3-035, EK3-040). Na Shopify je stav
  umění ruční tabulka o 22 krocích (EK3-037).
- **Datixo je existenční důkaz i varování:** čte reálné objednávky ze Shoptetu přes API, ale GA4
  **obchází**, ne kontroluje (EK3-036). Prodává „kolik jsem vydělal“, ne „vaše měření je rozbité“.
- **Právní vrstva je nová nákladová položka:** objednávky jsou osobní údaje, potřeba je zpracovatelská
  smlouva podle čl. 28 GDPR (EK3-039). Levnější varianta pro tier 1: stahovat pouze agregáty (počet
  a součet za den), pak se osobní údaje nezpracovávají vůbec – cenou je, že zanikne diff po
  `transaction_id`, což je u tieru 1 tak jako tak nepoctivý slib.

**Neověřeno a blokuje to publikaci ceníku:** existuje na tarifu Business/Profi **plánovaný/automatický
export objednávek** dostupný třetí straně? K03 to netestoval; závěr „padá slovo denní“ je proto tvrzení,
ne nález. Dvě hodiny nad veřejnou dokumentací Shoptetu to rozhodnou.

---

## 4. Kotvy a SLA: kolik si český trh účtuje za garantovanou reakční dobu

Zdroj K04, 52 cenových řádků z pěti sousedních oborů, z toho 30 s cenou **i** číselnou reakční dobou.
Všechny body jsou **ceníkové**, ne zaplacené, a pocházejí od malých produktizovaných dodavatelů –
vzorek je vychýlený dolů.

### 4.1 Cena za zkrácení reakční doby

| Dodavatel | Služba | Nejpomalejší | Střední | Nejrychlejší | Celý žebřík |
|---|---|---|---|---|---:|
| Externí IT | vzdálená IT podpora, **mění se jen slib** | 5 prac. dní – 590 Kč/h | 24 h – 890 Kč/h (1,51×) | 2 h – 1 450 Kč/h (1,63×) | **2,46×** |
| SKOMATECH | paušál za PC, **mění se jen slib** | 4 h, SLA 95 % – 300 Kč | 1 h, SLA 99 % – 450 Kč (1,50×) | 15 min, SLA 99,9 % – 650 Kč (1,44×) | **2,17×** |
| Externí IT | paušál za stanici (+ obsah) | 24 h – 390–490 Kč | 4 h – 650–850 Kč (1,70×) | 1 h – 1 000–1 300 Kč (1,53×) | 2,61× |
| WPDistro | správa webu (+ obsah) | 24 h – 3 000 Kč | 4 h – 6 000 Kč (2,00×) | 1 h + kompenzace – 12 000 Kč (2,00×) | 4,00× |
| SiteCare | správa WordPressu (+ hodiny) | 24 h – 790 Kč | 24 h – 1 490 Kč | 4 h + SLA smlouva – 3 900 Kč (2,62×) | 4,94× |

> *„Za prémiovou rychlost platíte prémiovou cenu – ale váš provoz nestojí.“* — Externí IT (EK4-001)

**Medián za jeden stupeň zkrácení: 1,63×** (n = 9). **Za celý žebřík: 2,61×** (n = 5).
**Ale pozor na čistotu:** jen u dvou dodavatelů (Externí IT hodinovka, SKOMATECH) se mění výhradně
reakční doba; u zbylých tří se mění i rozsah (Externí IT přidává on-site a security monitoring, WPDistro
výkon a kompenzaci, SiteCare hodiny úprav – 790 → 1 490 Kč při **stejné** reakci 24 h). Z čistých žebříků
vychází spíš **~1,50×**. V materiálech uvádět obě čísla: čistá cena SLA ≈ 1,50×, s obsahem ≈ 1,63×.

### 4.2 Kolik stojí konkrétní úroveň reakce absolutně

| Slíbená reakce | Kdo a za kolik (Kč/měs) | Medián |
|---|---|---:|
| další pracovní den / 24 h | SiteCare 790 · SiteCare Byznys 1 490 · WPDistro Basic 3 000 · Externí IT Základ ≈ 4 400 | **≈ 2 200** |
| 4 hodiny | SKOMATECH START 3 000 · SiteCare Agentury 3 900 · WPDistro Standard 6 000 · Externí IT Standard ≈ 7 500 · ITHOPE 8 000–18 000 | **≈ 6 000** |
| 1 hodina | SKOMATECH PROFI 4 500 · Externí IT Prémium ≈ 11 500 · WPDistro Premium 12 000 | **≈ 11 500** |
| 15–30 minut | SKOMATECH PREMIUM 6 500 · ICT-GROUP 2 990–12 910 | **≈ 6 500–12 900** |
| sekundy, cena na dotaz | vshosting: telefon do 60 s, tickety ~15 min – **„Cena: Na vyžádání“** (EK4-018) | – |

**Tři absolutní kotvy, které vstupní tier musí ustát:**

- **8 900 Kč ≈ cena celého firemního IT malé české firmy.** Externí IT: *„menší firma s 8–10 stanicemi
  + 1 serverem vychází zhruba na 9 000 Kč / měsíc“* (EK4-002). ITHOPE: *„Typická firma 10–30 zaměstnanců
  platí 8 000–18 000 Kč/měsíc“* (EK4-003). ICT-GROUP: firma s 8 lidmi 12 910 Kč s neomezenou podporou
  (EK4-004).
- **8 900 Kč > nejdražší veřejný účetní paušál v ČR** (Victory Point PREMIUM 7 500 Kč; Finela 1 499 /
  2 499 / 3 499 Kč). Účetní paušál má přitom právní odpovědnost a pojištění do 5 mil. Kč – a reakční
  dobu neslibuje ani jeden dodavatel.
- **Reakce „další pracovní den“ je v sousedních oborech nejlevnější vstupní úroveň** za 790–4 400 Kč/měs.
  Reakční doba tedy cenu tieru 1 neobhájí.

### 4.3 SLA kredit jako standardní česká forma

Kredit z vlastního paušálu je v ČR zavedená a přijímaná forma, ne exotika:

| Zdroj | Vzorec |
|---|---|
| MČ Brno-střed (vysoutěžená smlouva) | kritická vada: reakce 1 h / odstranění 4 h; **pokuta 1 000 Kč za každou započatou hodinu prodlení** (EK2-002) |
| SFŽP ČR (zadávací dokumentace) | kritická vada do 4 h, dostupnost 99,5 %, **kredit 1/10 měsíčního paušálu za každou hodinu nedostupnosti** (EK2-013) |
| Český rozhlas (smlouva 2021 i 2023) | **výpadek měření odstranit do 12 h**, pokuta 2 000 Kč/den, pojištění odpovědnosti 900 000 Kč (EK1-003) |
| vshosting~ (VOP) | 1/10 měsíčního paušálu za započatou hodinu prodlení, **strop 1 měsíční paušál** (EK6-009) |
| Master Internet (VOP) | sleva 1/30 měsíční ceny za den výpadku > 6 h, jiné nároky vyloučeny (EK6-008) |
| WEDOS | servisní kredity 10 / 25 / 100 % měsíčního poplatku, lhůta 15 dní na uplatnění (EK4-017) |
| Google BigQuery | kredit 10/25/50 %, strop 50 %, *„sole and exclusive remedy“* (EK6-001) |
| Google Analytics 360 | kredit 5/10/15/25 %, strop 25 % (EK6-005) |

**Dvě věci, které z toho plynou pro nabídku:** (1) publikovat reakční dobu bez jakéhokoli kreditu bude
vedle toho, co zadavatel zná ze správy webu, vypadat slabě; (2) changelog, měsíční komentář a vzor
reportu **přestávají být diferenciátory** – ve veřejných zakázkách jsou to smluvní povinnosti
(*„Bez reportu prací je faktura neplatná. Vzor reportu prací poskytne objednatel.“* EK2-003).
Jsou to vstupenky, ne převaha.

**Mezera, která zůstává:** cena SLA doplňků u WEDOS (Silver 4 h / Gold 1 h / Platinum 15 min) není
veřejná – byl by to jediný český bod, kde je reakční doba samostatná placená položka **s cenou**.
A nejrychlejší česká reakční doba (vshosting) se vůbec neceníkuje.

---

## 5. Přežití: příležitost, nebo hřbitov?

### 5.1 Co K05 skutečně našel

Wayback CDX pass na **46 subjektů**, z toho 35 s rekonstruovanou časovou osou.

- **Nula zrušených cenových produktů.** Ani jeden subjekt nemá doložený případ „měl publikovanou měsíční
  cenu za správu měření a stáhl ji“.
- **Osm zaniklých firem, ale z jiných příčin:** Analytics Pros (2008–2024, doména dnes servíruje
  Adswerve), Empirical Path (2008–2024), Data to Value (2013–2024, bez DNS), Analytics Heroes (celkem
  2 archivní řezy), Tagmate (`/pricing` 2/2023–10/2024, doména dnes hostuje kasinový web),
  Adexpres → dentsu, Bidding Tools → conviu.cz, Digital Visions bez DNS (EK5-006 až EK5-011, EK5-033).
- **Akvizice není důkaz selhání:** *„retainers can get bundled with access to enterprise-tier software
  (which is probably a big reason why GA360 Resellers, including mine, tend to get acquired.)“* (EK5-026).
  **Tím padá výklad EG8-009 z 2. kola** – „Analytics Pros to zkusili a skončili prodejem reklamní
  agentuře“ se z argumentace „neuživí se“ vyřazuje: Analytics Pros měli „Monthly retainers“ v ceníku
  už v roce 2012 (EK5-005).
- **Kategorie je čerstvá:** 12 z 35 subjektů má první archivní řez v letech 2024–2026 a **10 produktových
  URL nemá ve Waybacku ani jeden řez** (ads-tracking.de/preise, signals.cz/produkty/signals-bar,
  ga4monitor.com, yagcomunicacion.com, blagoweb.com, gipfel-werk.ch, nicelookingdata.com,
  starbomedia.sk, datasailor.cz, trackless.cz). Amplio Data – kotva tieru 2 i 3 – má první řez
  19. 11. 2024, firma je stará nejvýš 22 měsíců (EK5-032).

### 5.2 Proč to lidé ruší – tři doložené mechanismy

**(A) Fungující paušál je neviditelný** – r/agency, 16. 8. 2026 (EK5-013):

> *„a working retainer is invisible. A project has an artefact. (…) A retainer that's going well looks
> like nothing happening: pipelines don't break, numbers stay right, nobody gets paged. (…) Its best case
> is silence. So it's both the easiest thing to justify technically and the first line item questioned
> in a budget review.“*

Recept z téhož vlákna (EK5-014): *„the retainers that survive seem to be the ones where something lands
in the client's inbox every month that they'd otherwise have had to ask for. Not a report nobody reads —
something that answers the question they were about to ask anyway.“*

**(B) Klient nabude dojmu, že si vystačí sám** – Measurelab FAQ 12/2023 (EK5-003): *„the most common
reason our engagements come to an end is our clients feel they're fully-equipped to go it alone.“*

**(C) Neomezený rozsah vyžere dodavatele** (EK5-035): *„they promised unlimited support. (…) The client
simply pulled out the contract and pointed to one word: unlimited.“* Doporučení: fair-use strop.

**Ani jeden z těch tří důvodů není cena ani kvalita.**

### 5.3 Kdo prodává dlouhodobě

| Subjekt | Jak dlouho | Doklad |
|---|---|---|
| RobertNemec.com (CZ) | cenová věta beze změny od **února 2016** (řezy 2016, 2017, 2022, 2026); poslední změna 2014→2016 | EK9-001…006, EK5-018/019 |
| Analytics Pros (US) | „Monthly retainers“ v ceníku už **2012**, značka do 2024 | EK5-005 |
| Verified Data (NL) | audit + „Monitor & Alert“ nepřetržitě **od 10/2019**, dnes s FREE tierem | EK5-028 |
| Measurelab (UK) | klientský vztah *„10+ year partnership“*, produktová stránka od 12/2023 | EK5-004, EK5-001 |
| DASE (SK) | 8 let existence, ale bez ceníkového paušálu na webu | EK5-030 |
| LEMONTEC / KlickImpuls (AT) | „GA4 & GTM Sorglos-Paket“ **30 měsíců** včetně rebrandingu; cena 199 €/měs přidána 2024 a v 2026 nezměněna | EK5-029, EK9-039…042 |

### 5.4 Verdikt: ani jedno, a je to metodicky pevný závěr

**Test „kdo to zrušil“ nemá v této kategorii statistickou sílu.** K08 ve stejném kole zjistil, že veřejnou
měsíční cenu za lidskou správu měření má **5 ze 71** evropských subjektů (7 %); K07 zjistil, že hodiny
i SLA publikují **3 z 18**. Nulový počet stažení v populaci, která ceny skoro nepublikuje, je konzistentní
s hypotézou příležitosti **i** hřbitova. Jediné dvě skutečně pozorovatelné události publikace ceny navíc
míří proti sobě: **Measurelab tři veřejné měsíční ceny v roce 2023 měl a v roce 2026 už nemá žádnou**
(EK5-001/002), **LEMONTEC jednu přidal** (EK5-029).

**Přesná formulace, kterou má verze 3 převzít:** *„Analýza přežití je pro tuto kategorii neproveditelná,
protože se v ní ceny nepublikují. Prázdná pozice pravděpodobně není ani příležitost, ani hřbitov – je to
pozice, která je prázdná proto, že se v ní neprodává samostatně; všude, kde produkt přežil, přežil jako
příloha k něčemu jinému.“*

Dva nezávislé doklady té „přílohy“: MeasureCamp Amsterdam 2026 / TAGGRS staví monitoring měření
(250–500 EUR/měs, modelový klient 350 EUR = 8 750 Kč) jako **třetí** linku příjmu navěšenou na sGTM
hosting a implementaci, s celoročním výnosem 10 860 EUR (EK10-001); a český veřejný sektor kupuje měření
jako **roli** uvnitř zakázky na web (Praha: „Obsahový specialista, SEO a webový analytik“, PK2-007).

**Nová longitudinální námitka proti publikaci tří veřejných cen:** ceny v tomto oboru nesledují inflaci.
Ze 16 doložených cenových řad se **šest nezměnilo vůbec, čtyři klesly a šest vzrostlo**. Detekční
nástrojová vrstva je čtyři roky v deflaci: Funnel 399 → 300 USD (−25 %) a 999 → 600 USD (−40 %),
Trackingplan 299 → 249 (−17 %), Stape 20 → 17 (−15 %), ObservePoint veřejné ceny úplně stáhl.
Waaila (Cross Masters) šla z *„€100 to €2800 a month“* (2021) na self-service 19–129 USD (2024, 2025) –
**jediný český subjekt, který kvalitu měření hlídal za lidskou cenu, ji dnes za lidskou cenu neprodává.**
Naopak MetricsWatch v roce 2026 spustil samostatné SKU „Alerts – Real-Time Data Monitoring“
za 99 a 299 USD (2 277 a 6 877 Kč) – nový cenový bod výrazně **nad** Signals Barem (2 500 Kč).

---

## 6. Právní vrstva: co musí být ve smlouvě, aby šlo slib reakční doby publikovat

Zdroj K06, 37 důkazů, výhradně veřejné dokumenty (VOP, SLA, text zákona, stanoviska ÚOOÚ, pojistné
podmínky). **Není to právní rada, je to osnova pro právníka.**

### 6.1 Co zákon dovoluje

> *„Nepřihlíží se k ujednání, které předem vylučuje nebo omezuje povinnost k náhradě újmy způsobené
> člověku na jeho přirozených právech, anebo způsobené úmyslně nebo z hrubé nedbalosti; nepřihlíží se
> ani k ujednání, které předem vylučuje nebo omezuje právo slabší strany…“* — § 2898 obč. zák. (EK6-012)

Číselný strop vůči e-shopu-podnikateli je tedy **platný**, pokud z něj vyjmeme úmysl a hrubou nedbalost.
Český trh omezuje odpovědnost na **1–6 měsíčních odměn**, medián ≈ 3: Konverzky 1× (EK6-020),
vshosting~ 1/3 odměny za 6 měsíců (EK6-010), Více než agentura 5× měsíční úhrady (EK6-022),
ADEO 6 měsíců (EK6-019). Google je velkorysejší – 12 měsíců poplatků (EK6-032).

### 6.2 Osm bodů, bez kterých se slib publikovat nemá

1. **Reakční doba = lhůta k zahájení práce**, ne k vyřešení (vzor: GA4Dataform slibuje „first response“,
   EK6-003; nikdo neslibuje výsledek).
2. **Definované okno**, ve kterém se lhůta měří. Jediná nalezená definice v celém korpusu je
   BuI Hinsche: *„Reaktionszeiten gemessen in Geschäftszeiten (Mo bis Do, 10 bis 12 und 13 bis 16 Uhr)“*
   = 20 hodin týdně (EK7-024). **Náš slib „reakce do 8 h“ dnes okno nemá.**
3. **Odkdy lhůta běží** – od nahlášení klientem *nebo* od naší vlastní detekce, podle toho, co nastane
   dřív. Trh počítá výhradně od nahlášení (EK6-008, EK6-009); nabízíme víc a musí to být vidět.
4. **Co lhůtu nespouští** – chyby na straně webu klienta, zásahy třetích osob do GTM, výpadky Googlu,
   změny platforem (EK6-007, EK6-011). Nejcennější klauzule k převzetí, vshosting~ 23.3:
   *„…za vady vzniklé v důsledku nastavení provedeného objednatelem nástrojem pro správu či jinou osobou,
   které objednatel umožnil přístup“* – kryje kódy `gtm_change_dev` a `unknown_owner` z pain-logu.
5. **Kredit jako jediná sankce**, číselně a se stropem. Doporučená konstrukce K06: **10 % měsíční odměny
   za každý započatý násobek lhůty, strop 50 % měsíční odměny** → maximální měsíční expozice
   **4 450 / 9 950 / 19 500 Kč**. Plus formulka „jiné nároky z prodlení se vylučují“ (EK6-008, EK6-001).
6. **Vyloučení ušlého zisku a nepřímé škody** – bez toho je promarněný reklamní spend v hře (EK6-023);
   spend je typově ušlý zisk.
7. **Číselný strop náhrady újmy** (trh 1–6 měsíčních odměn) + **věta o předvídatelné škodě** podle
   § 2913 odst. 1, aby strop obstál + **výhrada podle § 2898**. Bez výhrady padá celý článek.
8. **Samostatná klauzule k výstupům poradenské povahy.** § 2950 obč. zák.: odborník za odměnu odpovídá
   za škodu z *„neúplné nebo nesprávné informace nebo škodlivé rady“* (EK6-014), a § 2912 odst. 2 obrací
   důkazní břemeno v jeho neprospěch (EK6-013). To platí, i když měření funguje a jen dodáme špatné číslo
   v komentáři nebo rekonciliaci. **Kredit z reakční doby tohle nekryje.**

### 6.3 Tři věci, které to mění ekonomicky

- **SLA sankce je nepojistitelná.** Pojištění profesní odpovědnosti kryje čistou finanční škodu
  *„vč. pokut uložených klientovi pojištěného“* (EK6-033), ale **nekryje** *„újmy, k jejichž úhradě se
  pojištěný zaváže nad rámec stanovený právním předpisem“* ani *„újmy vzniklé překročením či nedodržením
  rozpočtů, úvěrů, nákladů, smluvních lhůt a termínů“* (EK6-034). Kredit se platí z marže. To je
  ekonomický důvod, proč ho celý trh drží malý – a proč je prázdná pozice „SLA na měření“ prázdná.
- **Nemůžeme přijmout větší odpovědnost za data, než má jejich výrobce.** Bezplatná GA4 má strop
  odpovědnosti **500 USD ≈ 11 500 Kč** (EK6-031). Ani placená GA360 nemá SLA na BigQuery export ani na
  propojení s Ads – jsou výslovně vyňaty jako „Integration Features“ (EK6-006), a u BigQuery se Downtime
  počítá až nad 10 % chybovosti (EK6-002).
- **Za špatně nastavený consent platí pokutu klient, ne my.** Všech 4 443 000 Kč pokut ÚOOÚ (pravomocně
  1 640 000 Kč, nejvyšší jednotlivá 898 000 Kč) šlo *„různým provozovatelům webových stránek“*, tedy
  správcům (EK6-027). Náš zbytek rizika je regres podle čl. 82 odst. 2 a 5 GDPR a **pozastavení účtu
  Googlem** – *„we may limit or suspend your use of the Google product and/or terminate your agreement“*,
  a to i pro weby *„under the control of … your client“* (EK6-035).

### 6.4 Dvě výhrady, které K06 sám nepojmenoval jako riziko

- **§ 2898 nedovoluje předem omezit odpovědnost za hrubou nedbalost** – a scénář „prodáváme hlídání
  a tři týdny jsme si nevšimli, že měření neběží“ je přesně ten, kde klientův právník hrubou nedbalost
  tvrdit bude. Strop je tedy nejslabší právě v situaci, kterou produkt sám vytváří.
- **Strop vložený jen do VOP je u B2B smlouvy vystaven § 1753** (překvapivá ujednání). Strop, vyloučení
  ušlého zisku i klauzuli k § 2950 dát do **podepsané smlouvy** a nechat individuálně odsouhlasit.

**Doplňkově:** DPA podle čl. 28 GDPR je u denní reconciliace povinná, ale je to příloha, ne překážka.
ÚOOÚ: *„Nemusí se jednat o samostatnou smlouvu, podstatné je, aby určené náležitosti vyplývaly z písemného
závazného dokumentu“* (EK6-026).

---

## 7. Co se mění na závěrech verze 2

### 7.0 Arbitráž pěti rozporů uvnitř kola

Kolo si v šesti reportech odporuje. Aby verze 3 nezdědila pět verdiktů o jedné ceně, rozhoduji je takto –
pravidlem „kotva musí sedět **rozsahem** (jen správa měření) i **segmentem** (komerční klient, ideálně
e-shop)“:

| Rozpor | Kdo co tvrdí | **Rozhodnutí** |
|---|---|---|
| Tier 3 | K01 „nejlépe podepřený“ × K02 „spodní hrana kategorie“ × K05 „výrazně oslabilo“ × K08 „zmírnit na slabou oporu“ × K09 „poprvé má oporu“ | **Bez kotvy v cílovém segmentu.** ČRo je hodinový rámec veřejnoprávního média s vývojem v rozsahu, ne paušál. Evropská opora je n = 3 s rozptylem 4×, po PPP korekci 8 460 / 22 328 / 34 831 Kč. |
| RobertNemec.com | K05 „stabilní hodnota 9 let“ × K09 „deset let neaktualizovaná stránka“ | **Ve prospěch K09** (je triangulovaný přes AKA: hodinovka 1 850 Kč byla v roce 2019 o 32 % **nad** průměrem AKA a v roce 2026 je o 4,5 % **pod** ním). Vyřadit jako kotvu v **obou** směrech – ani jako strop ochoty platit, ani jako prostor k růstu. |
| Česká hodinová sazba | K02 „990 Kč/h“ × K01 „1 440–1 750 Kč/h“ | **Obě, ale oddělené.** 990 Kč/h = generalistická správa webu, ve které jsou měřicí kódy jednou položkou. 1 440–1 750 Kč/h = specialistická práce na měření (6 nezávislých bodů). Benchmark pro naše tiery je ta druhá. |
| Náklad vs. cena | K01 „nákladový model přepočítat na 1 440–1 750 Kč/h“ | **Zamítnuto.** To je záměna prodejní sazby za náklad – přesně chyba, kterou 2. kolo už jednou opravilo. Náklad je **816–1 225 Kč/h** podle utilizace (ISPV 2025 přes K09); 1 440–1 750 Kč/h je **cenový benchmark**. |
| Skok mezi tiery | K05 „padá kritika, Measurelab měl 1 : 2,9 : 4,2“ × K04/K07 „2,24× je nad zvykem 1,63×“ | **Ve prospěch K04/K07.** Measurelab neprodával tři úrovně služby, ale kredity = hodiny (10/30/70+), takže jeho poměr je poměr nakoupených hodin, ne přirážka za obsah a SLA – a ty ceny navíc z webu stáhl. Skok 2,24× zůstává nepodložený a musí se rozpadnout na SLA (≈1,50–1,63× → 13 400–14 500 Kč) a obsah (zbytek 5 400–6 500 Kč, který se musí umět vyjmenovat). |

### 7.1 Tier 1 – 8 900 Kč: **potvrzena cena, vyvrácen obsah**

| Tvrzení verze 2 | Stav po 3. kole |
|---|---|
| „8 900 Kč leží pod evropským mediánem vstupních tierů (11 250 Kč)“ | **Vyvráceno.** Po PPP korekci je korigovaný medián vstupních tierů **6 990 Kč** a 8 900 Kč je **27 % nad ním**; levnějších je **9 z 15** subjektů (K09 § 2.4). |
| „Není to nejlevnější nabídka; rozdíl musí obhájit obsah“ | **Potvrzeno a zesíleno ze čtyř směrů.** (1) PPP; (2) sousední obory – 8 900 Kč je cena celého firemního IT malé firmy a víc než nejdražší účetní paušál; (3) komoditizace – triáž je od 2026 produktová funkce Trackingplanu (*„a plain-language summary of the issue, the most likely root cause hypothesis, recommended actions to fix it“*, EK10-026), seznam kontrol je zdarma ze dvou zdrojů (EK10-012, EK10-024), report jako PDF/PPT je součástí produktu za 667 Kč (EK10-014); (4) technická neproveditelnost součtového srovnání u většiny Shoptet e-shopů. |
| cena je „rozhodnutí, ne tržní nález“ | **Potvrzeno a nově doloženo z obou stran.** Zdola: LEMONTEC 199 €/měs = **2 897 Kč v české cenové hladině** – jediný evropský produktizovaný paušál na správu měření, o kterém víme, že vydržel 30 měsíců. Shora: MeasureCamp deck 350 EUR/měs = **8 750 Kč** – poprvé leží 8 900 Kč doslova na cizí veřejné ceně za totéž (EK10-001), byť je to velkoobchodní doporučení vůči agenturám a monitoring je tam navěšený na sGTM hosting. |
| „reakce další pracovní den“ jako součást hodnoty | **Vyvráceno jako argument.** V sousedních oborech je to nejlevnější vstupní úroveň za 790–4 400 Kč/měs. Reakce do 4 h stojí v ČR ≈ 6 000 Kč/měs – teprve s ní je 8 900 Kč obhajitelné. |
| „součtové srovnání objednávek vs. konverzí“ v tieru 1 | **Zpřesněno na: jen pro vyjmenované platformy.** Cílový klient tieru 1 (e-shop do ~20 mil., 1 web, bez BQ) je na Shoptetu skoro jistě na Business/Profi (1 490–2 490 Kč) a k REST API se nedostane. |
| **Nově doložené české pásmo** | Tier 1 je **jediný**, který padá do doloženého českého zaplaceného pásma 8 640–15 300 Kč. Ale všichni tři čeští kupující kupují *interpretaci dat a reporty*, ne *hlídání*. **Přejmenovat tier 1 z „hlídání“ na „malý paušál analytika (X h) + hlídání v ceně“.** |

### 7.2 Tier 2 – 19 900 Kč: **zpřesněno z „nejlépe podepřený“ na „horní hrana srovnatelného shluku“**

| Tvrzení verze 2 | Stav po 3. kole |
|---|---|
| „19 900 Kč je nejlépe podepřený tier – šest nezávislých subjektů v pásmu 17 500–23 750 Kč (RobertNemec, DASE, Amplio, YAG, ADS-Tracking, Elevar)“ | **Vyvráceno v každém jednotlivém bodě.** DASE (17 500) K07 vyřadil – *„Výšku mesačného paušálu si určuje vždy klient“*, žádný rozsah se neprodává (EK7-005). Amplio Maintained K07 opravil ze 17 500 na **16 500 Kč** (*„From €660 per month“*), tedy mimo pásmo, a firma má první archivní řez 11/2024. ADS-Tracking Middle (19 975) je **20 hodin ZA ROK** = 1,67 h/měs při 12měsíčním závazku placeném předem (EK7-001, EK7-002). YAG (22 250) nemá hodiny ani SLA a první řez má 2026. Elevar Tier 2 je SaaS add-on za 10 požadavků měsíčně a v datasetu je **dvakrát** (PV3-006 a PV4-010, oba `active`). RobertNemec 18 500 Kč je věta nezměněná od února 2016. |
| — | **Nové znění:** 19 900 Kč je **druhá nejvyšší hodnota shluku 14 975–19 975 Kč**, ne jeho střed: BuI Hinsche Basis 14 975 (3 h + reakce 1 pracovní den), CzechTourism **reálně zaplacených 15 300** (9 h **včetně BigQuery a server-side GTM**), Amplio Maintained 16 500, Piekarski (PL) 17 400, DASE 17 500, ADS Middle 19 975. |
| — | **Nejbližší skutečný dvojník je BuI Hinsche** (DE), jediná nabídka v korpusu se stejnými jednotkami: 599 €/měs = 14 975 Kč za **3 h + reakce 1 PD**, 1 450 €/měs = 36 250 Kč za **8 h + reakce 4 h** (EK7-023). Náš tier 2 dává stejné 3 h za o 33 % vyšší cenu, ale slibuje kratší reakci (8 h). **Ten rozdíl musí obhájit QA po releasu a changelog, ne srovnání cen.** |
| — | **Nejtvrdší domácí bod je CzechTourism.** Reálně zaplacených 15 300 Kč obsahuje **víc** než navrhovaný tier 2 (BQ + sGTM) za o 30 % nižší cenu. Mezi 15 300 a 20 000 Kč není v celém korpusu nic. |
| PPP | **Jediný tier, kterému korekce neublížila.** Korigované pásmo šesti opor je 14 400–24 600 Kč a 19 900 Kč sedí v jeho středu (K09 § 3.2). |
| Skok 8 900 → 19 900 = 2,24× | **Nepodložený, ale rozpadnutelný.** Český medián za jeden stupeň SLA je 1,50–1,63× → ≈ 13 400–14 500 Kč. Zbytek (5 400–6 500 Kč) musí být explicitně přiřazen obsahu (QA po releasu, měsíční QA + call, 3 h změn). Kdo to neumí vyjmenovat, má tier 2 snížit nebo přidat mezistupeň. |

### 7.3 Tier 3 – 39 000 Kč: **zpřesněno z „nemá tržní oporu“ na „opora existuje mimo cílový segment; publikovat jako ‚od‘“**

| Tvrzení verze 2 | Stav po 3. kole |
|---|---|
| „39 000 Kč nemá tržní oporu. Dva evropské body 11 250 a 45 000 Kč, rozptyl 4×, n = 2“ | **Zpřesněno na n = 3, ale směrem dolů.** Junto (FR) *„Fiabilisez votre data et votre tracking – Dès 1 335 €/mois“* = **33 375 Kč** s vlastním BigQuery skladem (145 dokumentovaných polí), automatizovanými regresními testy dataLayeru a bankou hodin (EK8-016) – nejbližší srovnatelná dodávka, jakou rešerše v Evropě našla. Zároveň K07 opravil Amplio Managed ze 45 000 na **42 425 Kč**. Nominálně tedy 11 250 / 33 375 / 42 425, medián 33 375; **39 000 Kč je 17 % nad mediánem**. |
| — | **Po PPP korekci je to horší:** 8 460 / 22 328 / 34 831 Kč, medián **22 328 Kč**. 39 000 Kč je **75 % nad PPP mediánem a 12 % nad PPP maximem**, a pod 39 000 Kč leží **24 z 25** korigovaných evropských bodů. |
| „domácí kotva chybí“ | **Platí dál.** Jediný český bod v tomto řádu (ČRo 40 946 Kč) je čerpání hodinového rámce 1 600 Kč/h s rozsahem zahrnujícím vývoj (*„nasazovat nová měření“, „rozvoj platformy“*), s rozptylem 20 000–127 075 Kč měsíčně, u jediného zadavatele z veřejnoprávních médií. **Je to kotva SAZBY, ne paušálu:** 39 000 Kč ≈ 25 h seniorní kapacity. Klient si tu aritmetiku spočítá – a proti ní stojí CzechTrade 520 Kč/h × 120 h = 62 400 Kč/měs za vlastního člověka. |
| — | **Vyvráceno jako protiargument:** „39 000 je nad doloženým českým stropem 31 200 Kč“ srovnává cenu 2026 s cenou 2016. Ale **nelze místo toho použít inflačně indexovaných 50 625 Kč** (návrh K09) – z nehybného čísla se indexací tržní opora vyrobit nedá. RobertNemec.com se z argumentace vypouští v obou směrech. |
| „tier se obhajuje obsahem“ | **Potvrzeno a poprvé věcně podloženo.** (1) Diff po `transaction_id` je bez BigQuery nespolehlivý kvůli kardinalitě a řádku `(other)` – to dává obsah násobku 2× za BQ (EK3-042, EK3-046). (2) Ani placená GA360 nemá SLA na BigQuery export ani na propojení s Ads (EK6-006) – tier 3 prodává jedinou kontrolu v řetězci, za kterou nikdo neručí. (3) Junto dává obsahový vzor, který návrh nemá pojmenovaný: *„Tests de non régression automatisés du datalayer“*. |
| — | **K10 oporu nepřinesl:** denní reconciliace jako klientský výstup se za 27 artefaktů nenašla ani jednou – neexistuje ani vzor, podle kterého by se dala ukázat. Náhradní diferenciátor bez BQ: `container-snapshot.json` v gitu s detekcí driftu GTM (EK10-020, EK10-023), který přímo řeší kód `gtm_change_dev` – **ten by měl sestoupit do tieru 2.** |
| **Doporučení** | **Nepublikovat jako pevnou třetí cenu.** „Od 39 000 Kč, cena podle rozsahu“, nebo kapacitní balík s uvedeným počtem hodin. Domácí kotvu doplní jedině mystery shopping (B2) u 3–5 e-shopových zakázek s BigQuery. |

### 7.4 Nákladový model – největší nová změna, a není to cena

Verze 2 počítá marži při nákladu **700 Kč/h**. ISPV 2025 (přes K09) dává u systémového analytika medián
**91 532 Kč** hrubého → × 1,338 odvodů = **122 470 Kč měsíčních nákladů zaměstnavatele**. Přepočet
na fakturovanou hodinu podle utilizace:

| Fakturovaných h/měs | Náklad Kč/h | Marže tier 1 (4–6 h) | Marže tier 2 (9–13 h) | Marže tier 3 (16–23 h) |
|---:|---:|---|---|---|
| 150 (nereálné) | 816 | 63 % → 45 % | 63 % → 47 % | 67 % → 52 % |
| **120 (realistické)** | **1 021** | **54 % → 31 %** | **54 % → 33 %** | **58 % → 40 %** |
| 100 (konzervativní) | 1 225 | 45 % → 17 % | 45 % → 20 % | 50 % → 28 % |

*(Poznámka k rozporu: kritika uvádí při 1 020 Kč/h marže 21–44 / 27–48 / 33–52 %. Z hodin verze 2
4–6 / 9–13 / 16–23 h se to reprodukovat nedá; její čísla odpovídají utilizaci kolem 100–110 fakturovaných
hodin. Rozdíl je materiální a rozhodne ho až A3 – proto uvádím celou matici, ne jedno číslo.)*

K tomu **dvě nové nákladové položky, které v modelu vůbec nejsou:** pojistné za profesní odpovědnost
(cena není veřejná, EK6-033) a **riziková rezerva na SLA kredity** – maximální měsíční expozice
4 450 / 9 950 / 19 500 Kč, **nepojistitelná, platí se z marže** (EK6-034).

**Ústřední napětí, které nepojmenoval ani jeden agent:** implikovaná hodinovka tierů je
1 483–2 225 / 1 531–2 211 / 1 696–2 438 Kč/h. Proti doložené české specialistické sazbě 1 440–1 750 Kč/h
jsou tiery obhajitelné **jen v horní polovině vlastního odhadu hodin** – tedy právě tam, kde marže padá
na 31–40 %. Ve spodní polovině implikují 2 211–2 438 Kč/h, což je 26–39 % nad nejvyšší doloženou českou
sazbou. **Hodiny, které cenu obhájí před klientem, jsou přesně ty, které zlikvidují marži.**
A při subdodávce za tržních 1 550 Kč/h je tier 1 při 6 h ztrátový.

### 7.5 Otevřená otázka 6 – „uživí se to?“

**Verze 2:** „Nevíme, a je to největší otevřená otázka. Existuje protievidence.“
**Verze 3:** *„Kontinuální placená práce na měření existuje a obnovuje se; ale ‚hlídání měření‘ jako
samostatně kupovaná položka nemá ani jeden doklad z poptávkové strany. Prodejná je hodinová kapacita
analytika s interpretací dat, uvnitř které je hlídání a SLA diferenciátor.“*

**Struktura důkazů je jednostranná a je nutné to přiznat.** Tabulka odděluje, odkud důkaz pochází:

| | Pro poptávku | Proti poptávce |
|---|---|---|
| **Poptávková strana** (kupující) | 4 čeští veřejní zadavatelé obnovují měsíční paušál na práci na měření (CzechTourism 3 roky, Krkonoše 2 roky, ČRo 4 rámce v řadě se stropem +150 % mezi 2021 a 2026 a se změnou dodavatele); zadavatelé sami píší „narovnání měření“, „dohled nad konzistencí dat“ | **0 z 53** poptávek na Shoptet Partnerech (2. kolo); **0** výskytů „správa analytiky“ a „alerting“ v celém registru smluv za 10 let; **1** samostatná analytická zakázka v celém českém korpusu VZ; u menších zadavatelů je analytika položkou paušálu za internetový marketing (3 800–12 000 Kč) a **ten model je v registru častější** |
| **Nabídková strana** (dodavatelé) | 4 prvoruké výroky na Redditu/LinkedIn (*„basically everyone struggles with the same thing: we need more retainers“*, a jako první příklad jádra paušálu doslova *„data quality monitoring to ensure the checkout's always being tracked“*, EK5-024/025); MeasureCamp deck s čísly (EK10-001); LEMONTEC 30 měsíců na trhu; Junto, Piekarski, Webie prodávají na retaineru s veřejnou cenou → **americké „not something you can sell on a retainer“ v Evropě doslova neplatí** | **5 ze 71** evropských subjektů má veřejnou měsíční cenu (7 %); **0 ze 71** má číselnou reakční dobu; **3 z 18** publikují hodiny i SLA; maďarský přehled ceníkuje měsíčně vše kromě měření; český přehled (Hasalík) vede měření **výhradně jednorázově** 2,5–15 tis. Kč; 2 prvoruké výroky proti (PPC agentura si měření drží in-house *„because it's soo essential part of the PPC service“*; datová agentura paušály vědomě nenabízí); Datixo si vybralo GA4 **obejít**, ne kontrolovat |

**Jediný poptávkový dataset za tři kola má n = 53 a výsledek 0.** Formulace „poptávka existuje“ tedy není
podložena poptávkovým důkazem ani jednou – to, co se doložilo, je poptávka po **práci analytika**,
ne po **hlídání**.

**Co to mění na pořadí validace:** pořadí z verze 2 (white-label pilot → test dvěma landing stránkami →
ekonomika dodávky → cena) **zůstává správné**, ale 3. kolo přidalo tři věci:

1. **Nejpravděpodobnějším nosičem white-labelu není PPC agentura, ale ten, kdo klientovi už provozuje
   sGTM nebo hosting měření** (MeasureCamp deck) – PPC agentura je doložený odpor, ne doložený kanál.
2. **Čtvrtý kanál, který verze 2 neměla: veřejné zakázky.** Kraje, destinační agentury, univerzity
   a veřejnoprávní média nakupují opakovaně, mění dodavatele a zakázka roste. Vstupenkou je předchozí
   jednorázový projekt – **ani jeden z nalezených paušálů nevznikl bez něj.**
3. **Třetí testovaná varianta: měření jako pojmenovaná role v paušálu dodavatele webu**, po vzoru Prahy
   („Obsahový specialista, SEO a webový analytik“).

### 7.6 Ostatní změny proti verzi 2

| Tvrzení verze 2 | Stav |
|---|---|
| „Reakční dobu na výpadek měření v ČR ani na SK veřejně neslibuje nikdo“ | **Potvrzeno pro ceníky a nově ověřeno na mnohem větším vzorku** (0 ze 71 evropských subjektů v 7 zemích, K08). **Vyvráceno pro smlouvy:** ve veřejných zakázkách se slibuje od roku 2021 (ČRo 12 h + 2 000 Kč/den; Brno-střed 1 h/4 h + 1 000 Kč/h). A **přestává být samo o sobě důkazem příležitosti** – důvod, proč to nikdo nemá, je ekonomický: slib je nepojistitelný a Google se sám k ničemu propsatelnému nezavazuje. |
| „Diferenciátory zdarma (changelog, kvartální audit přístupů, hlídání deadlinů) – nikdo v ČR“ | **Vyvráceno.** Ve veřejných zakázkách jsou to smluvní povinnosti (EK2-003, EK2-011, EK2-014); v sousedních oborech jsou zdarma (Victory Point: *„Proaktivní hlídání: Upozorníme vás, pokud se blížíte limitu DPH… My hlídáme termíny“*, EK4-012; ICT-GROUP prodává doslova *„Problémy vidíme dřív než vaši lidé“* za 3–13 tis. Kč, EK4-011). Přesunout z „diferenciátor“ do „hygiena“. |
| „Detekce je od 2026 komodita; prodejná je triáž, oprava, reakce“ | **Zpřesněno – komoditizovala se i triáž a report.** Trackingplan prodává triáž jako produktovou funkci (EK10-026), ga4monitor dodává report v PDF a PPT za 667 Kč (EK10-014), seznam kontrol je zdarma ze dvou zdrojů. Dno detekce je navíc **nula**, ne 667 Kč – Verified Data má od 2026 free tier (EK5-028). Nezautomatizovaný zbytek: **oprava, komunikace s vývojáři, garantovaná reakční doba.** |
| „Násobek za BigQuery ≈ 2×“ | **Nepotvrzeno ani nevyvráceno.** K08 z Junta násobek spočítat nelze (nemá variantu bez BQ); K07 dává jediný srovnatelný BQ skok Amplio Maintained → Managed **2,57×**, takže náš skok 1,96× je konzervativnější než jediný srovnatelný na trhu – ale n = 1. |
| Kotva „SaaS detekce CZ medián 3 225 Kč“ | **Ohrožena datovou vadou, ne nálezem.** K04 označil 37 řádků české IT podpory, správy WordPressu, správy serverů a **účetnictví** jako `provider_type=saas_tool`; po naivním sloučení se kotva tiše změní na **4 450 Kč** a bude obsahovat účetní balíčky. Viz § 8.3. |
| **Nový bod, který verze 2 nemá vůbec: indexační doložka** | Ceny v oboru nesledují inflaci: RobertNemec ztratil za 10 let **38 % reálné hodnoty**, Marketing Makers 16 % za 4 roky (2 000 → 2 100 Kč/h, přitom index služeb dává 2 489 Kč). Doporučeno indexovat ročně o `max(HICP služby ČR za předchozí rok; 0)` – ne o celkovou inflaci (2025: 5,0 % vs. 2,3 %; průměr 2023–25: 7,6 % vs. 5,7 %). Na ceník psát „Ceny platné od <datum>“ a indexovat i hodinovou sazbu nad rámec paušálu. |
| **Nový bod: PPP se nikdy neaplikuje na SaaS a nikdy nejde do klientské komunikace** | Software se v ČR prodává za 100,8 % evropského průměru, ale práce ve službách za 73,5 % (K09 § 2.3). Poměr „nástroj vs. člověk“ je proto v ČR nepříznivější než na Západě – substituce nástrojem je u nás relativně dražší. Klient platí nominál. |

---

## 8. Kritika a GO/NO-GO

Dvě nezávislé kritiky se v podstatě shodly: **ceny obstojí jako rozhodnutí, ale obhajoby, které pro ně
kolo vyrobilo, ne**, a **službu stavět, ale ne tu, která je navržená.**

### 8.1 Kritika 1 – „ceny obstojí, ale 3. kolo je posunulo opačně, než tvrdí souhrny“

Šest bodů, všechny doložené: (1) české pásmo už nestojí na jednom subjektu, ale definuje **jiný interval,
než navrhujeme** – do doloženého zaplaceného pásma 8 640–15 300 Kč padá jen tier 1; (2) tier 3 domácí
kotvu nedostal a po PPP korekci se obhajuje **hůř**, ne líp; (3) tier 2 přestal být „nejlépe podepřený“;
(4) skok 2,24× zůstává nepodložený; (5) **největší nový problém není cena, ale náklad** – hodiny, které
cenu obhájí, zlikvidují marži; (6) tier 1 je pod tlakem ze čtyř nezávislých směrů.

**Doporučení kritiky 1:** pásma 8 900 / 19 900 nechat, ale přepsat jejich obhajobu a **změnit cenotvornou
osu z kadence na hodiny + reakční dobu** (všechny doložené české zaplacené paušály jsou hodinové balíčky:
6 h / 9 h / rámec 1 000 h; a všechny zahraniční nabídky s publikovanými jednotkami také – BuI 3 a 8 h,
ADS 10/20/30 h ročně, Measurelab kredity, Conversion.pl dny v týdnu). Tier 3 nepublikovat jako pevnou
cenu. **Před jakýmkoli přepočtem opravit dataset.**

### 8.2 Kritika 2 – „kolo je metodicky nejlepší ze tří, ale závěry neobstojí“

Čtyři body: (1) **čtyři přímé vzájemné rozpory** mezi agenty téhož kola (rozhodnuty v § 7.0);
(2) zopakování chyby, kterou 2. kolo už opravilo (záměna tržní sazby za náklad); (3) doložitelné datové
vady; (4) **nezodpovězení té jediné otázky, kvůli které se kolo dělalo**.

**Procesní verdikt, který je nejtvrdší částí obou kritik:** 2. kolo označilo za prioritu A pět úkolů.
**3. kolo splnilo z nich jeden (A5).** A2 (test poptávky), A3 (ekonomika dodávky) a A4 (rozhovory
a ochota platit) zůstávají po třech kolech a ~50 agentech nedotčené – přitom právě u nich stálo
„může otočit doporučení“. Mezera „velikost trhu – kolik českých subjektů patří do každého tieru“ je
po 3. kole stále prázdná. **Čtvrté kolo rešerše má mezní hodnotu blízkou nule.**

**Doporučení kritiky 2:** nestavět samostatnou „Správu měření“ se třemi veřejnými cenami. Postavit ji
jako pojmenovanou položku nebo white-label modul navěšený na něco, co klient už kupuje – provoz sGTM,
správu webu, PPC – a prodávat ji nejdřív agenturám a dodavatelům webu, ne přímo e-shopu.

### 8.3 Datová hygiena – blokuje každé publikované číslo

Naivní sloučení fragmentů 3. kola **zopakuje chyby, kvůli kterým se dělala hygiena po 2. kole.**
Doložený dopad neopravení: CZ medián `measurement_only` se posune z 13 875 na **12 143 Kč**
kontaminovaný marketingovými paušály; CZ SaaS kotva z 3 225 na **4 450 Kč** s příměsí účetních balíčků;
do proxy hodinových sazeb se vloží 62 400 Kč.

| # | Co opravit | Řádky |
|---|---|---|
| 1 | `period=hodina`, ale v `price_czk_month` **měsíční strop rámce** (44 444 / 33 333 / 62 400 / 47 500 / 45 000) | PK1-001, PK1-009, PK1-019, PK2-004, PK2-005 |
| 2 | `period=jednorazove` u víceletých smluv s vyplněnou měsíční cenou | PK2-007, PK2-008, PK2-010, PK2-018 |
| 3 | `provider_type=saas_tool` u IT podpory, hostingu, správy webu a **účetnictví** – zavést `scope_class=adjacent_industry` a vyjmout ze SaaS tabulky | 37 řádků K04 |
| 4 | klasifikace veřejných zakázek jako `measurement_only` místo `public_tender` (TENDER_RX nezná „registr smluv“, „objednávka“, „Český rozhlas“) | 24 z 31 řádků K01, 10 z 19 řádků K02 |
| 5 | marketingový paušál klasifikovaný jako správa měření → `bundled_ppc` | PK1-020, PK1-026, PK1-027, PK2-007, PK2-008, PK4-050 |
| 6 | není cena služby, vyřadit úplně (celkový marketingový rozpočet menší firmy) | PK4-052 |
| 7 | duplicity: dílčí objednávky téhož rámce jako PK1-002; RobertNemec (přenést `hours_included` 5,0 / 10,0 / 16,9 do stávajících řádků) | PK1-003, PK1-004; PK7-013/014/015 |
| 8 | `superseded` s odkazem na opravené hodnoty (Amplio 17 500 / 45 000 → 16 500 / 42 425) | P4-035, P4-036 |
| 9 | duplicita Elevar pod dvěma jmény poskytovatele, obojí `active` | PV3-006 × PV4-010 |
| 10 | **chybějící pricing fragmenty** za K03 (ceník Shoptetu a Upgates), K09 (15 historických i nových bodů) a K10 (MeasureCamp kotvy) – doplnit ručně | – |

### 8.4 GO / NO-GO

**ANO stavět. NE tu službu, která je navržená, a NE s ceníkem v současné podobě.**

**Proč ano:** forma je doložená a opakovaně placená (čtyři čeští zadavatelé obnovují měsíční paušál,
ČRo soutěží počtvrté, strop rostl o 150 %); v Evropě existují srovnatelné produkty s veřejnou cenou
(Junto, Piekarski, LEMONTEC 30 měsíců na trhu); hotový nástroj na reconciliaci neexistuje ani v ČR,
ani na Shopify; a **pain je jediné, co tři kola rešerše nikdy nezpochybnila** – medián 21 dní do odhalení,
≈188 datovaných změn prostředí za 32 měsíců, GTM hlásí „Succeeded“ a neodešle nic, Google Ads označí tag
za neaktivní až po 7 dnech. Zpochybnila se jen ochota platit za to **zvlášť**.

**Proč ne v navržené podobě:** rozpočtová položka na „hlídání měření“ v ČR neexistuje – proto musí vzniknout
u někoho, kdo už jednu má. Prodávat jako **pojmenovanou položku nebo white-label modul navěšený na to,
co klient už kupuje** (provoz sGTM, správa webu, PPC), nejdřív agenturám a dodavatelům webu.

**Pět podmínek, které publikaci ceníku blokují – všechny splnitelné bez další rešerše:**

1. **Nákladová podlaha a hodiny (A3, blokující).** Změřit hodiny zpětně na 3–5 vlastních zakázkách
   **včetně plošného scénáře** (jedna změna Googlu = všichni klienti týž den) a teprve pak fixovat cenu.
   Bez toho se publikuje číslo, o kterém nevíme, jestli je ziskové.
2. **Datová hygiena před přepočtem (blokující pro každé číslo).** Viz § 8.3.
3. **Omezit slib denního srovnání (blokující pro tier 1).** Buď jmenný seznam podporovaných platforem
   (Upgates, Shopify, WooCommerce, PrestaShop, Shoptet Premium), nebo nejdřív dvě hodiny ověřit, jestli
   Shoptet na Business/Profi nabízí plánovaný export objednávek.
4. **Reakční doba jen s oknem a kreditem (blokující pro celý ceník).** Kredit 10 % měsíční odměny za
   započatý násobek lhůty se stropem 50 %, omezení náhrady škody na 1–6 měsíčních odměn s vyloučením
   ušlého zisku, **v podepsané smlouvě, ne ve VOP**, samostatná klauzule k § 2950, a předem tři nabídky
   pojištění profesní odpovědnosti (bez nich není znám náklad slibu).
5. **Tier 3 nepublikovat jako pevnou cenu.** „Od 39 000 Kč, cena podle rozsahu“; domácí kotvu doplnit
   mystery shoppingem u 3–5 zakázek s BigQuery.

**Dvě podmínky navíc od kritiky 2, které nejsou o ceníku, ale o rozhodnutí:**

6. **Dva podepsaní piloti do 8 týdnů** – jeden white-label (s agenturou nebo s dodavatelem sGTM), jeden
   přímý – za jakoukoli cenu. Kritérium je **podpis a první faktura**, ne „vzali bychom to“. Kdyby po
   8 týdnech nebyl podepsán ani jeden nad 8 900 Kč, je to no-go signál pro samostatný produkt a fallback
   je 2 900–5 000 Kč jako příloha plus fakturované incidenty.
7. **Druhé cenové rameno testu postavit na 2 900–5 000 Kč**, ne na 8 900 Kč – to je hladina, za kterou se
   jediná prokazatelně dlouhověká evropská instance přesně tohoto produktu (LEMONTEC, 30 měsíců) prodává
   v české cenové hladině. Testovat 8 900 proti 3 900 Kč s menším rozsahem je informativnější než testovat
   tři tiery odvozené z téže nabídkové strany.

---

## 9. Co zbývá – a co už žádná rešerše nezodpoví

### 9.1 Rozhodne jen test, ne čtvrté kolo

Všech deset reportů 3. kola končí stejnou větou. Tři úkoly priority A z 2. kola zůstávají po třech kolech
nedotčené a **jsou to přesně ty, u kterých stálo „může otočit doporučení“**:

| # | Co | Proč to veřejný zdroj neuzavře | Náklad |
|---|---|---|---|
| **A2** | Test poptávky: 4 týdny, dvě landing stránky (přímý e-shop × white-label pro agentury), **tři cenová ramena** 3 900 / 8 900 / „na dotaz“ a **dvě varianty slibu** („reakce do 8 h se smluvní pokutou“ × „kontrola měření bez SLA“) | Jediný poptávkový dataset za tři kola má n = 53 a výsledek 0. Poptávková strana ve FR i PL skončila na 404 (Codeur.com, Oferteo.pl). | 4 týdny, malý rozpočet |
| **A3** | Ekonomika dodávky: hodiny zpětně na 3–5 vlastních zakázkách, utilizace, souběh incidentů, plošný scénář | Všechny nalezené hodiny jsou **nabídkové** (kolik si dodavatel rezervuje), ne **spotřebované**. Uzavřou to jen vlastní výkazy. Rozhoduje současně o marži i o obhajitelnosti ceny. | 1 den |
| **A4** | 5–8 rozhovorů + Van Westendorp, druhé rameno hybridní model (nižší paušál + platba za incident) | Celá cena je odvozena z nabídkové strany. Vzory pro druhé rameno: DASE („platíte len za práce, ktoré budú reálne odvedené“), Measurelab kredity, hodiny fakturované zpětně. | 2 týdny |
| **B2** | Mystery shopping u 6–10 subjektů „na dotaz“, **zvlášť 3–5 zakázek s BigQuery** | Horní polovina trhu mlčí i po třech kolech: Enterprise BuI Hinsche, surowiecki, Measurelab na vlastním webu, Signals pro agentury, vshosting, Optimics, Napkyn. Zároveň to na jedno telefonní číslo rozhodne, jestli je RobertNemec.com živá cena nebo mrtvá stránka. | 1 den + čekání |
| **nová** | **Velikost trhu** – kolik českých e-shopů má obrat 20–200 mil. (tier 2) a kolik 100 mil.+ s BigQuery (tier 3); K04 navíc dokládá, že klient tieru 3 musí mít marketingový rozpočet 80–300 tis. Kč/měs | Mezera výslovně vyjmenovaná ve 2. kole, kterou ani jedno ze tří kol neotevřelo. Blokuje go/no-go. Zdroje: Shoptet/Heureka statistiky, ČSÚ e-commerce, žebříčky obratů. | půl dne |

### 9.2 Mezery, které jsou levné a stále blokují publikaci

- **Plánovaný export objednávek na Shoptet Business/Profi** – rozhoduje, jestli slovo „denní“ v tieru 1
  zůstává. Dvě hodiny nad veřejnou dokumentací.
- **Tři nabídky pojištění profesní odpovědnosti** (limit 5 / 10 / 20 mil. Kč, krytí čisté finanční škody
  a IT služeb). Bez nich není známa nákladová položka, kterou slib reakční doby generuje.
- **Ověřit jeden případ z Hlídače veřejných zakázek proti primárnímu zdroji** (profil zadavatele podle
  § 219 ZZVZ) – do té doby všech 13 řádků K02 označit „cena neověřena u primárního zdroje“.
- **Vyrobit vlastní artefakt denní reconciliace** na jednom klientovi. Za 27 prohledaných artefaktů
  se nenašla ani jednou – neexistuje ani vzor. Spojit s A5/A3.

### 9.3 Mezery, které zůstanou otevřené i po testu

- **Doložená česká ztráta v korunách z rozbitého měření.** Tři kola ji nenašla. Jediné české číslo v Kč,
  které umíme ukázat, je paradoxně z jiné oblasti: pokuty ÚOOÚ za consent (4 443 000 / 898 000 Kč).
  Vlastní kvantifikaci dá jen vlastní fakturace a výkazy (C2).
- **Klientská verze churnu.** Všechny čtyři doložené výpovědi o zrušení paušálu jsou anglofonní
  a **od dodavatelů**, kteří mají motivaci vysvětlit ztrátu klienta tak, aby to nebyla jejich chyba.
  V ČR a na SK není o churnu ani jedna výpověď.
- **Typický rozptyl denního diffu na reálných datech.** Bez něj se prahy alertu nastavit nedají a klient
  odejde na alert fatigue. Navazuje na C3 – 90denní historie na 5–10 stávajících klientech.
- **NEN, ISVZ a zadávací dokumentace nejrelevantnějších zakázek** (ČRo, ČEZ, Praha, CzechTrade) –
  z tohoto prostředí nedostupné, spojení resetováno na úrovni proxy. Zkusit z jiné sítě nebo přes Wayback
  na konkrétní `detail-zakazky` URL.
- **Kolik českých e-shopů je fakticky na Shoptet Premium.** Shoptet čísla nezveřejňuje; rozhoduje o tom,
  jak moc omezení bolí.
- **Poplatek za partnerství Shoptetu a provize z doplňku.** Veřejný ceník neexistuje; zjistitelné jen
  kontaktem.

---

## 10. Jedna věta na závěr

**Třetí kolo dodalo typ důkazu, který dva roky chyběl – reálně zaplacené české ceny – a ten důkaz říká,
že se u nás za práci na měření platí 8 640 až 15 300 Kč měsíčně, že to platí veřejný sektor a ne e-shopy,
a že slovo, které v celém desetiletém registru nepadlo ani jednou, je „hlídání“.**
