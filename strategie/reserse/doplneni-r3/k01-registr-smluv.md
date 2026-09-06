# K01 – Registr smluv: reálně zaplacené české ceny za měření

Kolo 3, doplnění B1 z `10-doplneni-a-overeni-r2.md` § 6. Datum přístupu všech zdrojů: **2026-09-06**.
Data: `../../data/fragments/r3-k01-pricing.csv` (31 řádků, 27 různých smluv),
`../../data/fragments/r3-k01-evidence.csv` (26 důkazů, `phase=12`).

---

## 1. Shrnutí

1. **Reálně zaplacená česká cena za kontinuální správu měření existuje a je doložitelná: 8 640 – 15 300 Kč
   bez DPH měsíčně u menších zadavatelů a 33 000 – 62 500 Kč měsíčně u velkého zadavatele s BigQuery
   a server-side GTM.** Tím padá největší slabina verze 2 – celé české pásmo už nestojí na jediném ceníku.
2. Nalezeno **27 smluv** s konkrétní URL, z toho **14 řádků s měsíční cenou** a 14 s jednorázovým plněním.
   Měsíční ceny (Kč bez DPH): 3 800 / 5 900 / 8 640 / 9 000 / 10 000 / 12 000 / 12 143 / 15 300 / 20 000 /
   37 200 / 38 000 / 40 946 / 62 500 / 127 075. **Medián 13 722 Kč.**
3. **Tier 3 (39 000 Kč) poprvé dostal domácí kotvu.** Český rozhlas za rozvoj a údržbu analytiky
   (GA4 + Firebase + GTM včetně server-side + BigQuery + Looker Studio) **skutečně vyčerpal 1 596 875 Kč
   bez DPH z rámce 1 600 000 Kč, tj. 40 946 Kč měsíčně** po dobu 39 měsíců; průměr běžné měsíční objednávky
   v roce 2025 je 42 571 Kč. Nástupnický rámec z 06/2026 má strop **62 500 Kč/měsíc**.
4. **Tier 1 (8 900 Kč) je nově podepřen třemi nezávislými českými body:** CzechTourism platil 8 640 Kč/měs
   (2023) a 9 000 Kč/měs (2024) za 6 hodin podpory, Krkonoše 10 000 Kč/měs (2022) a 12 143 Kč/měs (2023)
   za správu Google Analytics.
5. **Tier 2 (19 900 Kč) je naopak nejhůř podepřený.** Nejbližší český bod – CzechTourism 2025 –
   stojí **15 300 Kč za 9 hodin** a přitom obsahuje **víc** než navrhovaný tier 2: GA4, GTM client-side
   i server-side, Looker Studio **a BigQuery**. Mezi 15 300 a 20 000 Kč v korpusu není nic.
6. **Reálná česká hodinová sazba za práci na měření je 1 440 – 1 750 Kč bez DPH** (šest nezávislých bodů:
   1 440, 1 500, 1 500, 1 600, 1 700, 1 750). Nákladová úvaha verze 2 se 700 Kč/h je proto sazba *nákupní*,
   ne tržní; tržní je zhruba 2,2×.
7. **Vyvráceno tvrzení verze 2, že reakční dobu na výpadek měření v ČR nikdo neslibuje.** V ceníku skutečně
   nikdo, ale ve smlouvě ano: Český rozhlas má od roku 2021 smluvně **odstranění kritické vady, tj. výpadku
   měření, do 12 hodin**, pokutu 2 000 Kč za každý den prodlení a povinné pojištění odpovědnosti na 900 000 Kč.
   Rámec z roku 2026 přidává **servisní podporu 8×5, hotline, ticketing a post mortem report**.
8. **Poptávka existuje, ale je vzácná a opakovaná u týchž kupujících.** Za deset let má v celém registru
   výraz „webová analytika“ v předmětu smlouvy **6 smluv**, „správa Google Analytics“ **2**,
   „údržba analytiky“ **2**, „správa analytiky“ a „alerting“ **0**. Zato titíž zadavatelé nakupují znovu:
   CzechTourism 2023 → 2024 → 2025, Krkonoše 2022 → 2023, Český rozhlas 2019 → 2021 → 2023 → 2026.
9. **Cesta ke smlouvě vede přes projekt.** Všichni čtyři zadavatelé s paušálem si předtím koupili
   jednorázový audit nebo implementaci (ČRo 900 000 Kč v roce 2019, CzechTourism 96 800 Kč v roce 2021).
   Nenašel se ani jeden případ, kdy by paušál na správu měření vznikl bez předchozího projektu.
10. **Nejlevnější konkurenční model je paušál za internetový marketing, kde je analytika položkou:**
    XART 12 000 Kč/měs, servisPARTNER 5 900 Kč/měs, Bystřický a spol. 3 800 Kč/měs. To je reálná cenová
    kotva, se kterou vstupní tier soupeří u menšího klienta.

**Poznámka k metodě:** oficiální rychlé vyhledávání na `smlouvy.gov.cz/vyhledavani` **nefunguje jako
fulltext** – vrací stejný počet záznamů (4 965, resp. 10 000) pro libovolný i nesmyslný dotaz, detailní
vyhledávání `/vyhledavani-detailni` vrací 404. Otevřená data na `data.smlouvy.gov.cz` existují (měsíční XML
dumpy, 70–110 MB/měsíc, ~10 GB za celé období), ale obsahují metadata, nikoli strojově vytěžený text příloh.
Použitelnou cestou k plným textům je proto **fulltextový index Hlídače státu** nad registrem smluv
(`hlidacstatu.cz/hledatsmlouvy`, detail `/Detail/<id>`, text přílohy `/Home/TextSmlouvy/<id>`),
u každého nálezu je v CSV uvedena kanonická URL `smlouvy.gov.cz/smlouva/<id>`.

---

## 2. FAKTA

### 2.1 Kontinuální správa měření – měsíční ceny (reálně zaplacené)

| Zadavatel | Dodavatel | Předmět (zkráceně) | Cena / měsíc bez DPH | Hodin | BQ | Rok | Důkaz |
|---|---|---|---|---|---|---|---|
| Český rozhlas | Optimics | rámec „Rozvíjení a údržba analytiky návštěvnosti a poslechovosti" | **33 333** (strop) | 20,8 | ano | 2021 | EK1-007 |
| Český rozhlas | Optimics | tentýž rámec, nová zakázka | **44 444** (strop) | 27,8 | ano | 2023 | EK1-001 |
| Český rozhlas | Optimics | **skutečné čerpání** 26 dílčích plnění | **40 946** | 25,6 | ano | 2023–2025 | EK1-004 |
| Český rozhlas | Taste, a.s. | rámec „Rozvoj a údržba platformy pro analytiku poslechovosti" | **62 500** (strop) | – | ano | 2026 | EK1-011 |
| CzechTourism | Tereza Neuschl | interpretace dat a analytická podpora, 11 měsíců | **15 300** | 9 | ano | 2025 | EK1-010 |
| Krkonoše – svazek měst a obcí | Michael Pokorný | „správa Google Analytics" | **12 143** | – | ne | 2023 | EK1-006 |
| Vysočina Tourism | XART | internetový marketing (kontinuální) vč. GA4, GTM, Looker | **12 000** | – | ne | 2025 | EK1-021 |
| Krkonoše – svazek měst a obcí | Michael Pokorný | „správa Google analytics" | **10 000** | – | ne | 2022 | EK1-005 |
| CzechTourism | Martin Neuschl | interpretace dat a analytická podpora, 12 měsíců | **9 000** | 6 | volitelně | 2024 | EK1-008 |
| CzechTourism | Martin Neuschl | interpretace dat a analytická podpora, 12 měsíců | **8 640** | 6 | ne | 2023 | EK1-009 |
| Město Velké Meziříčí | Aleš Janoušek | servisPARTNER – web + internetový marketing vč. webové analytiky | **5 900** | – | ne | 2021 | EK1-015 |
| Baťův kanál | Bystřický a spol. | odměna agentury v projektu on-line datového marketingu | **3 800** | – | ne | 2025 | EK1-022 |

Rozptyl uvnitř jednoho rámce (Český rozhlas, dílčí objednávky): **20 000 Kč** (květen 2024) až
**127 075 Kč** (prosinec 2024); v roce 2025 se běžná měsíční objednávka drží v pásmu 37 200 – 49 200 Kč.

### 2.2 Reálné hodinové sazby

| Sazba bez DPH | Kdo / co | Rok | Důkaz |
|---|---|---|---|
| 1 750 Kč | Avedeo (UK/ÚJOP), kontrola analytiky a jejího nastavení | 2025 | EK1-013 |
| 1 700 Kč | Tereza Neuschl (CzechTourism), hodina nad rámec 9 h paušálu | 2025 | EK1-010 |
| 1 600 Kč | Optimics (Český rozhlas), rámcová dohoda | 2023 | EK1-001 |
| 1 500 Kč | Optimics (Český rozhlas), předchozí rámcová dohoda | 2021 | EK1-007 |
| 1 500 Kč | Martin Neuschl (CzechTourism) | 2024 | EK1-008 |
| 1 440 Kč | Martin Neuschl (CzechTourism) | 2023 | EK1-009 |
| 700 Kč | Aleš Janoušek – analytické/programátorské práce uvnitř paušálu za web | 2021 | EK1-015 |
| 520 Kč | Ondřej Kostík (CzechTrade) – dlouhodobá analytická kapacita, 120 h/měs | 2026–29 | EK1-014 |

Specialistická sazba za práci na měření je **1 440 – 1 750 Kč**; trvale najatá kapacita je **520 Kč**,
tedy 2,8–3,3× levnější. To je reálná podoba rozhodnutí „koupit službu vs. najmout člověka“.

### 2.3 Jednorázové plnění (pro odlišení od správy)

| Zadavatel | Dodavatel | Předmět | Cena bez DPH | Rok | Důkaz |
|---|---|---|---|---|---|
| Český rozhlas | Optimics | „Online analytika Českého rozhlasu", dílo do 3 měsíců | 900 000 Kč | 2019 | EK1-012 |
| CzechTrade | Yaneba | nastavení analytických nástrojů BusinessInfo.cz | 116 000 Kč | 2023 | EK1-017 |
| Správa IT města Plzně | Digitální architekti | vstupní audit stavu webové analytiky + workshopy + narovnání měření | 100 000 Kč | 2025 | EK1-020 |
| Národní divadlo | Optimics | analytika a reporting vč. GA4 → BigQuery → Power BI | 99 500 Kč | 2020 | EK1-023 |
| Středočeská centrála CR | Martin Neuschl | webová analytika + implementace CMP s měřením | 97 900 Kč | 2021 | EK1-019 |
| CzechTourism | Martin Neuschl | audit analytiky + tracking concept + GA4/GTM + testování + workshop | 96 800 Kč | 2021 | EK1-016 |
| CzechTourism | Martin Neuschl | testování nastavení měření (položka smlouvy 2024) | 60 000 Kč | 2024 | EK1-008 |
| Komorní scéna Aréna | Viktorie Peterová | cross-domain GTM, Data Studio, tracking taxonomy | 66 550 Kč s DPH | 2022 | EK1-026 |
| VŠE | Etnetera Activate | reporting v Looker Studiu nad GA4 pro tři weby | 54 600 Kč | 2026 | EK1-018 |
| CzechTourism | Martin Neuschl | úprava šesti automatizovaných reportů v Looker Studiu | 48 000 Kč | 2023 | EK1-009 |
| CzechTourism | Martin Neuschl | nastavení měření do GA4 a Google Ads na straně serveru | 31 750 Kč | 2024 | EK1-008 |
| Vysočina Tourism | XART | instalace nástrojů + onboarding | 13 500 Kč | 2025 | EK1-021 |
| UK (ÚJOP) | Avedeo | kontrola analytiky a její správné nastavení (4 h) | 7 000 Kč | 2025 | EK1-013 |

### 2.4 Doslovné citace, na kterých stojí závěry

**Hodinová sazba a strop u největší české zakázky na správu měření (EK1-001):**

> „Účelem této dohody je zajistit po dobu 36 měsíců ode dne účinnosti této dohody poskytování níže
> specifikovaných služeb (…) až do výše předpokládaného finančního limitu 1.600.000,- Kč (…) bez DPH.
> (…) **Cena za 1 hodinu poskytování služeb činí 1.600,- Kč bez DPH.** (…) Nabízená cena za hodinu služeb
> v Kč bez DPH vynásobené předpokládaným počtem hodin (**1000**)."
> — Rámcová dohoda Český rozhlas / Optimics, [smlouvy.gov.cz/smlouva/23433101](https://smlouvy.gov.cz/smlouva/23433101)

**Rozsah, který je prakticky totožný s navrhovanou službou DataLayer (EK1-002):**

> „Spravovat účty a reporty v analytických službách Google Analytics / Google Analytics 4 / Google Firebase
> a s tím související účty a nastavení ve službách Google Tag Manager, Google BigQuery, Looker Studio,
> Google Cloud Console a dalších. **Nasazovat nová měření, primárně přes Google Tag Manager (včetně
> server-side)** (…) a **kontrolovat nové změny v GTM** od Českého rozhlasu. **Testovat implementaci měření
> v nových aplikacích, službách a webech.** (…) **Poskytovat podporu při řešení nenadálých situací
> souvisejících s online analytikou jako jsou výpadky měření**, změny v nastavení a funkčnosti služeb
> Google Analytics 4, Google BigQuery, Google Tag Manager a dalších (…) pracovat na udržitelnosti měření –
> z pohledu finanční náročnosti (optimalizace nákladů v Google Cloud Console), počtu odesílaných hitů
> a eventů." — tamtéž, příloha č. 1

**SLA na výpadek měření (EK1-003):**

> „V případě výskytu **kritické vady (tj. vady způsobující výpadek měření** návštěvnosti či poslechovosti
> nebo omezující funkčnost webu) způsobené poskytovatelem se poskytovatel **zavazuje vadu odstranit do
> 12 hodin** od oznámení vady objednatelem. (…) zavazuje se zaplatit objednateli smluvní pokutu ve výši
> 2.000,- Kč za každý jednotlivý případ a každý započatý den prodlení. (…) Poskytovatel je povinen (…) mít
> pojištěnu svou odpovědnost za škodu (…) s minimálním limitem plnění 900.000,- Kč." — tamtéž

**Měsíční paušál za 9 hodin, který obsahuje BigQuery i server-side (EK1-010):**

> „Pro nástroj webové analytiky Google Analytics na strategických webech poskytovatel zajistí provádění
> konfiguračních aktivit, které jsou nezbytné pro udržení aktuálních nastavení, **dohled nad konzistencí
> dat** (…) Pro nástroj Google Tag Manager (…) **úpravy v server side tagging kontejneru**. Pro nástroj
> Looker Studio poskytovatel zajistí správu a aktualizaci automatizovaných reportů webů. **Pro nástroj
> BigQuery poskytovatel zajistí optimalizaci nákladů** (…) Poskytovatel rovněž **proaktivně informuje
> o novinkách v odvětví**, včetně technických, právních a oborových změn (…) **Maximální měsíční cena je
> 15 300 Kč za 9 hodin podpory.** V případě že požadavky Objednatele budou pracnější než 9 hodin, každá
> další hodina podpory je účtována zvlášť v ceně 1 700 Kč. (…) Součást každé faktury bude předem
> odsouhlasený **přehled o činnosti a zpráva o plnění služeb**."
> — CzechTourism / Tereza Neuschl, [smlouvy.gov.cz/smlouva/32389880](https://smlouvy.gov.cz/smlouva/32389880)

**Paušál 9 000 Kč za 6 hodin oddělený od jednorázové implementace v jedné smlouvě (EK1-008):**

> „Nastavení měření do GA4 a Google Ads na straně serveru. Testování nastavení měření. **Interpretace dat
> a analytická podpora na dobu 12 měsíců strategických portálů Objednatele v rozsahu 6 hodin měsíčně.**
> (…) Dílčí cena (…) je **1 500 Kč bez DPH / hodina v rozsahu 6 hodin /měsíčně, tedy 9 000 Kč bez DPH
> měsíčně**, tedy 108 000 Kč bez DPH za 12 měsíců."
> — CzechTourism / Martin Neuschl, [smlouvy.gov.cz/smlouva/27886775](https://smlouvy.gov.cz/smlouva/27886775)

**Reálně zaplacených 10 000 Kč měsíčně za „správu Google Analytics“ (EK1-005):**

> „Objednáváme u Vás **správu Google analytics** spočívají v: 1. pravidelná tvorba reportů, 2. interpretace
> chování návštěvníků na webech (…) 3. akvizice ze zdrojových stránek, 4. nastavení a vyhodnocení online
> kampaní. (…) Smluvní cena bude postupně vyplácena **v pravidelné částce 10.000,- Kč**, a to na základě
> předložených faktur v termínech: 15.6., 15.7., 15.8., 15.9. 15.10."
> — Krkonoše – svazek měst a obcí / Michael Pokorný, [smlouvy.gov.cz/smlouva/20997923](https://smlouvy.gov.cz/smlouva/20997923)

**Poměr „nasadit měření“ vs. „ověřit, že čísla sedí“ (EK1-017):**

> „1) Implementace měření systémem Google Analytics 4 (…) Celková cena: **13 000 Kč bez DPH** (…)
> analýza a verifikace potřebných metrik návštěvnosti systémů Universal Analytics a Google Analytics 4.
> Celková cena: **68 000 Kč bez DPH**."
> — CzechTrade / Yaneba, [smlouvy.gov.cz/smlouva/24590975](https://smlouvy.gov.cz/smlouva/24590975)

**Kvantifikace poptávky napříč celým registrem (EK1-024):**

> `predmet:"webová analytika"` → **6** · `predmet:"Google Analytics"` → **15** ·
> `predmet:"správa Google Analytics"` → **2** · `predmet:"údržba analytiky"` → **2** ·
> `predmet:"Google Tag Manager"` → **2** · `predmet:"analytika webu"` → **1** ·
> `predmet:"správa analytiky"` → **0** · `predmet:"digitální analytika"` → **0** · `predmet:"alerting"` → **0**

### 2.5 Longitudinální řada u jednoho zadavatele (Český rozhlas)

| Rok | Forma | Objem bez DPH | Doba | Kč/měs | Sazba | Dodavatel |
|---|---|---|---|---|---|---|
| 2019 | smlouva o dílo | 900 000 Kč | 3 měsíce | – (projekt) | – | Optimics |
| 2021 | rámcová dohoda | 1 200 000 Kč | 36 měsíců | 33 333 | 1 500 Kč/h, 750 h | Optimics |
| 2023 | rámcová dohoda | 1 600 000 Kč | 36 měsíců | 44 444 | 1 600 Kč/h, 1 000 h | Optimics |
| 2023–25 | **skutečné čerpání** | 1 596 875 Kč (99,8 % rámce) | 39 měsíců | **40 946** | – | Optimics |
| 2026 | rámcová dohoda | 3 000 000 Kč | 48 měsíců | 62 500 | nečitelná v PDF | **Taste, a.s.** |

Sazba +6,7 % za dva roky (2021→2023), objem hodin +33 %, strop rámce 2021→2026 **+150 %**.
Změna dodavatele v roce 2026 dokládá, že o zakázku je na nabídkové straně soutěž.

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Cenová pásma

**Tier 3 (39 000 Kč) – z „nemá tržní oporu“ na „nejlépe podepřený tier“.** Verze 2 psala, že tier 3 stojí
na dvou evropských bodech s rozptylem 4×. Nyní má domácí kotvu ze skutečně vyfakturovaných peněz:
**40 946 Kč/měsíc** průměrně za 39 měsíců u zadavatele s BigQuery, server-side GTM, více weby i aplikacemi,
při 25,6 hodinách měsíčně a smluvní reakci na výpadek měření do 12 hodin. Navrhovaných 39 000 Kč sedí
prakticky přesně. Formulace v `02-shrnuti-a-zavery.md`, že „39 000 Kč nemá tržní oporu“, se má nahradit
tím, že **oporu má, ale jen u velkého zadavatele s BigQuery** – nikoli u e-shopu.

**Tier 1 (8 900 Kč) – potvrzen, ale s jiným obsahem, než jaký nabízíme.** Tři čeští zadavatelé platí
8 640 – 12 143 Kč měsíčně. Jenže **žádný z nich nekupuje hlídání**. Kupují *interpretaci dat*, *pravidelné
reporty* a *konfigurační činnosti*. Slovo alerting nebo monitoring není v předmětu ani jedné smlouvy
v celém registru. Cena je tedy potvrzena, ale **hodnotová věta „hlídáme, aby se to nerozbilo“ nemá
v registru jediný doklad, že by za ni někdo platil.** Tier 1 se prodá spíš jako „malý paušál analytika“
než jako „monitoring“.

**Tier 2 (19 900 Kč) – zůstává nejslabší a nově je i nejhůř obhajitelný.** Nejbližší český bod je
CzechTourism 2025: **15 300 Kč za 9 hodin**, a v ceně má GA4, GTM client-side i **server-side**,
Looker Studio a **BigQuery**. Navrhovaný tier 2 za 19 900 Kč slibuje 3 hodiny na změny, QA po releasu
a SLA 8 h – za 30 % vyšší cenu a bez BigQuery. Buď je potřeba tier 2 obsahově výrazně posílit,
nebo cenu snížit do pásma 15–17 tis., nebo přijmout, že skok 8 900 → 19 900 se v ČR neopírá o nic.

**Nákladový model se musí přepočítat.** Verze 2 počítala marži při nákladu 700 Kč/h. Reálná tržní sazba
za práci na měření u veřejných zadavatelů je **1 440 – 1 750 Kč/h**; 700 Kč/h je v korpusu sazba za
*programátorské a analytické práce uvnitř levného webového paušálu*, ne za specialistu na měření.
Při 1 550 Kč/h odpovídají navrhované tiery **5,7 / 12,8 / 25,2 hodinám měsíčně** – tedy horní hranici
odhadu verze 2 (4–6 / 9–13 / 16–23 h). Odhad hodin tím není potvrzen, ale je aspoň konzistentní.

**Nová kotva pro „koupit vs. najmout“.** CzechTrade si na 48 měsíců najal analytika jako OSVČ za
**520 Kč/h při 120 h/měsíc = 62 400 Kč/měsíc**. To je přesně ten argument, který klient položí na stůl
u tieru 3: za cenu jednoho tieru 3 má „vlastního“ člověka na 120 hodin. Odpověď nabídky musí být
specializace a SLA, ne objem hodin.

### 3.2 Otevřená otázka: existuje poptávka po samostatné správě měření?

**Odpověď je: ano, ale je vzácná, opakovaná u týchž kupujících a téměř vždy navazuje na projekt.**

Co poptávku **potvrzuje**:
- Čtyři čeští zadavatelé mají **měsíční paušál na práci na měření jako samostatnou položku smlouvy**
  (CzechTourism 3 roky po sobě, Krkonoše 2 roky po sobě, Český rozhlas 3 rámcové dohody v řadě,
  Česká televize měsíční fakturace dle odpracovaných hodin).
- Rozsah, který nakupují, je **prakticky totožný s navrhovanou službou DataLayer** včetně BigQuery,
  server-side GTM, testování implementace a podpory při výpadcích měření.
- Zakázka se **nezmenšuje**: strop rámce Českého rozhlasu vzrostl z 1,2 mil. (2021) na 3,0 mil. Kč (2026)
  a mění se dodavatel, tedy je o co soutěžit.
- Formulace, které zadavatelé sami používají – „narovnání měření“, „vyhodnocení analytické a datové
  zralosti“, „dohled nad konzistencí dat“ – potvrzují českou vstupní větu z verze 2
  („zkontrolujeme, jestli měříte správně“) proti globální („vaše měření se tiše rozbilo“).

Co poptávku **zpochybňuje**:
- Za deset let a v korpusu, kde je povinně zveřejněná **každá** veřejná smlouva nad 50 000 Kč, má
  „webová analytika“ v předmětu **6 smluv** a „správa analytiky“ **nula**. Řádově jde o jednotky
  zadavatelů, ne o trh.
- **Alerting a monitoring měření se v předmětu neobjevují ani jednou.** Nikdo v ČR si veřejně nekoupil
  „hlídání měření“ jako pojmenovanou službu. To je nezávislé potvrzení protievidence z 2. kola
  (0 z 53 poptávek na Shoptet Partnerech).
- Tam, kde je zadavatel menší, je analytika **položkou v paušálu za internetový marketing**
  (12 000 / 5 900 / 3 800 Kč měsíčně) – tedy přesně to, čemu verze 2 říká „PPC agentura, která měření
  má v ceně“. Tento model je v registru **častější** než samostatná správa měření.
- Ani jeden z nalezených paušálů nevznikl bez předchozího jednorázového projektu.

**Praktický důsledek pro validaci:** registr smluv **nevyvrací** hypotézu z verze 2, že samostatná
poptávka nemusí existovat – jen ukazuje, že tam, kde vznikne, je stabilní a dobře placená. Zároveň
posiluje pořadí validace navržené ve verzi 2: nejdřív najít kanál, kde poptávka vzniká
(u veřejných zadavatelů to je **předchozí projekt**, ne inzerát), pak teprve řešit cenu.
Přidává také konkrétní čtvrtý kanál, který verze 2 neměla: **veřejné zakázky**. Rámec Českého rozhlasu
2026 běží do roku 2030, ale zadavatelů s podobným profilem (kraje, destinační agentury, univerzity,
veřejnoprávní média) je v registru vidět několik desítek a nakupují opakovaně.

### 3.3 Další opravy proti verzi 2

| # | Verze 2 tvrdí | Kolo 3 (registr smluv) |
|---|---|---|
| 1 | „Veřejnou měsíční cenu za práci na měření má v ČR jeden subjekt (RobertNemec.com).“ | **Vyvráceno.** Reálně zaplacených měsíčních cen je v registru 14, u **8 různých dvojic** zadavatel–dodavatel (ČRo/Optimics, ČRo/Taste, CzechTourism/M. Neuschl, CzechTourism/T. Neuschl, Krkonoše/Pokorný, Vysočina Tourism/XART, Velké Meziříčí/Janoušek, Baťův kanál/Bystřický). |
| 2 | „39 000 Kč nemá tržní oporu.“ | **Vyvráceno pro velkého zadavatele s BQ** (40 946 Kč skutečně čerpaných, strop 44 444 → 62 500 Kč). Pro e-shop opora dál chybí. |
| 3 | „Reakční dobu na výpadek měření v ČR nikdo neslibuje.“ | **Vyvráceno.** ČRo má smluvně 12 h na odstranění výpadku měření (od 2021), pokutu 2 000 Kč/den a pojištění 900 000 Kč; od 2026 navíc 8×5 hotline a post mortem report. |
| 4 | Hrubá marže počítána při nákladu 700 Kč/h. | **Přepočítat.** Tržní sazba za práci na měření je 1 440–1 750 Kč/h; 700 Kč/h je sazba za obecné analytické práce v levném webovém paušálu. |
| 5 | „Detekce je komodita, prodejná je triáž a oprava.“ | **Nepřímo potvrzeno.** CzechTrade zaplatil za implementaci GA4 13 000 Kč, ale za ověření, že metriky sedí, 68 000 Kč – 5,2×. |
| 6 | Kotva „in-house analytik 86 185 Kč měsíčních nákladů“. | **Doplněna levnější varianta:** externí analytik na dlouhodobou kapacitu 520 Kč/h × 120 h = 62 400 Kč/měs. |

---

## 4. MEZERY, které zůstávají

1. **Registr nepokrývá e-shopy.** Všech 27 smluv je z veřejného sektoru (média, cestovní ruch, univerzity,
   města). Segmenty `eshop_small/mid/large` z taxonomie tu nejsou vůbec. Hlavní cílový zákazník
   DataLayer.cz proto v tomto zdroji doložit nejde a otázka 6 zůstává otevřená pro komerční sektor.
2. **Hodinová sazba nástupnického rámce Českého rozhlasu (Taste, a.s., 2026) je ve zveřejněném PDF
   nevyplněná/nečitelná** – k dispozici je jen strop 3 000 000 Kč / 48 měsíců. Sazbu by mohl doplnit
   profil zadavatele (uveřejnění dle § 219 ZZVZ), který tento úkol neprocházel.
3. **U České televize (Rajtmajer, Toušovský) není v naskenovaném PDF čitelná tabulka s počtem jednotek
   a sazbou**, takže z objednávek 192 000 / 96 000 / 416 000 Kč nelze doložitelně odvodit měsíční cenu.
   Řádky PK1-029 a PK1-030 mají proto `price_czk_month` záměrně prázdné.
4. **Chybí druhá strana rovnice – kolik hodin dodavatel reálně odpracoval.** Známe fakturované částky
   a sjednané sazby, ale ne skutečnou pracnost ani souběh incidentů. Prioritu A3 z 2. kola
   (ekonomika dodávky na vlastních datech) registr nenahrazuje.
5. **Nepokryty zůstaly NEN, TenderArena, Věstník VZ a TED** – zadávací dokumentace k těmto zakázkám
   (zejména kvalifikační požadavky a hodnoticí kritéria) by ukázala, jak zadavatel poptávku formuluje
   *před* podpisem. Tento úkol pracoval jen s podepsanými smlouvami.
6. **Otevřená data `data.smlouvy.gov.cz` nebyla systematicky protažena** (≈10 GB měsíčních XML dumpů).
   Dotazy nad polem `predmet` byly provedeny přes fulltextový index Hlídače státu; systematický průchod
   dumpů by dal přesná čísla za celou historii bez závislosti na indexaci třetí strany.
7. **Vzorek měsíčních cen je malý (n = 14) a vychýlený nahoru jedním zadavatelem** – šest ze čtrnácti
   měsíčních bodů pochází z Českého rozhlasu. Medián 13 722 Kč je proto potřeba brát jako orientační.
8. **Právní vrstva (priorita C4) je doplněna jen částečně.** Registr dal vzory SLA, sankcí a pojištění
   z pozice dodavatele veřejné zakázky, ale nic o tom, jak se odpovědnost za škodu z rozbitého měření
   řeší v komerčních smlouvách s e-shopy.
