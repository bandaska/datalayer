# Shrnutí rešerše: kontinuální správa měření – odpovědi na původní otázky

**Verze 3 (2026-09-06)** – po třetím kole. Verze 1 a 2 obsahovaly čísla, která třetí kolo opravilo;
co se měnilo, je v § 7.

Rozsah: tři kola, ~53 agentů. **Kolo 1**: ČR 45 subjektů, SK 24, EU 58, USA, 45 nástrojů, pain research.
**Kolo 2**: 126 nosných tvrzení znovu ověřeno u zdroje (90 potvrzeno, 29 vyvráceno), 13 mezer doplněno.
**Kolo 3**: registr smluv, veřejné zakázky, proveditelnost, kotvy ze sousedních oborů, právní vrstva,
analýza přežití, Francie a Polsko, PPP korekce.
Dataset: **900 cenových řádků** (813 platných), 1 433 důkazů, 540 výpovědí o rozbitém měření.
Detail: `reserse/00`–`11`, data v `data/`, úklid `data/clean-dataset.py`, artefakty v `artefakty/`.

---

## Verdikt v jedné větě

**Za práci na měření se v Česku reálně platí 8 640 až 15 300 Kč měsíčně, platí to veřejný sektor a ne
e-shopy, a slovo, které v celém desetiletém registru smluv nepadlo ani jednou, je „hlídání".**

Službu stavět **ano** — ale ne jako samostatný produkt se třemi veřejnými cenami, nýbrž jako pojmenovanou
položku nebo white-label modul navěšený na to, co klient už kupuje.

---

## Otázka 1: Jaká je férová cena za měsíční správu Google Analytics?

Třetí kolo přineslo důkaz, který dvě předchozí kola neměla: **devět reálně zaplacených českých cen**
z registru smluv (do té doby jsme znali jen ceníkové ceny „od").

| | n | hodnoty (Kč/měs bez DPH) | medián |
|---|---|---|---|
| **bez BigQuery** | 4 | 8 640 / 9 000 / 10 000 / 12 143 | **9 500** |
| **s BigQuery** | 5 | 15 300 / 37 200 / 38 000 / 40 946 / 62 500 | **38 000** |

K tomu šest reálných hodinových sazeb: **1 440–1 750 Kč/h** za specialistickou práci na měření.

**Doporučený ceník a jak dobře je podložený:**

| Tier | Cena | Opora v zaplacených českých penězích |
|---|---|---|
| Analytik na malý úvazek | **8 900 Kč/měs** | **sedí dovnitř** pásma 8 640–12 143 Kč |
| Správa měření | 19 900 → **doporučeno 15 900 Kč** | **žádná** — mezera 15 300 → 37 200 Kč je prázdná |
| Datová správa | **od 39 000 Kč** podle rozsahu | **sedí doprostřed** shluku 37 200–40 946 Kč |

**Co je na tom slabé:** všech devět zaplacených cen je z veřejného sektoru (Český rozhlas, ČT,
CzechTourism, destinační agentury, města). **Z cílového segmentu — e-shopu — není doložena ani jedna.**
A tier 2 nemá oporu v žádném zaplaceném bodě: za 15 300 Kč reálně kupuje CzechTourism 9 hodin
**včetně BigQuery a server-side GTM**, tedy víc obsahu za nižší cenu.

**Ekonomika je horší, než tvrdily předchozí verze.** Nákladová podlaha není 700 Kč/h, ale
**816–1 225 Kč/h** podle utilizace (ISPV 2025). Marže tierů je **31–40 %**, ne 43–65 %. A implikovaná
hodinovka tierů (1 483–2 438 Kč/h) je proti doložené české sazbě obhajitelná jen v horní polovině odhadu
hodin — **tedy přesně tam, kde marže mizí**. Odhad hodin nebyl nikdy ověřen proti reálné dodávce; to je
podmínka číslo jedna před publikací ceníku.

**Zahraniční ceny do argumentace nepatří.** Po PPP korekci na českou cenovou hladinu je 8 900 Kč
**27 % nad** evropským mediánem vstupních tierů, ne pod ním.

## Otázka 2: Co je klíčový selling point a největší pain?

**Pain je jediné, co tři kola rešerše nikdy nezpochybnila.** Medián doby do odhalení 21 dní.
≈188 datovaných změn prostředí za 32 měsíců, z toho 57 mění sběr dat — jedna za 2,5 týdne.
Doloženo z primární dokumentace: GTM hlásí u tagu „Succeeded" a neodešle jediný požadavek;
Looker Studio alert se při rozbitém zdroji sám vypne; Google Ads označí tag za neaktivní až po **7 dnech**.

**Ale ochota platit za to zvlášť zpochybněná je, a to třikrát nezávisle:** 0 výskytů slov „hlídání",
„správa analytiky" a „alerting" v desetiletém registru smluv; 0 z 53 poptávek na Shoptet Partnerech;
1 samostatná analytická zakázka v celém českém korpusu veřejných zakázek za deset let.

**Čeští kupující platí za „interpretaci dat a analytickou podporu", za „správu Google Analytics"
a za „rozvoj a údržbu platformy pro analytiku".** Proto se vstupní tier přejmenovává z *Hlídání*
na *Analytik na malý úvazek* — hlídání je v ceně, ne na faktuře.

**Detekce je komodita a už i triáž a report.** Dno detekce je dnes **nula** (Verified Data free tier),
Signals Bar prodává „rozbité měření" a „tiché výpadky" za 2 500 Kč, ga4monitor dodává report v PDF
za 667 Kč, Trackingplan prodává triáž jako produktovou funkci. **Nezautomatizovaný zbytek: oprava,
komunikace s vývojáři a garantovaná reakční doba.**

## Otázka 3: Je služba nutně navázaná na BigQuery?

**Ne** — 76 % z 540 výpovědí o rozbitém měření pochází od klientů bez BigQuery a jejich painy jsou
ty nejdražší. Ale **BigQuery je zlom v ceně ostřejší, než jsme mysleli**: v českých zaplacených datech
je násobek **4,0×** (9 500 → 38 000 Kč). S výhradou, že skupina s BQ je bimodální a ty velké body
nejsou paušály za správu, ale rámce s rozvojem platformy v rozsahu.

BigQuery mění hloubku, ne seznam aktivit: bez něj nerozlišíte ztrátu od duplicit (pět ztracených a pět
duplicitních objednávek dá v součtu „perfektní shodu") a nemáte baseline vůči backendu po `transaction_id`.

## Otázka 4: Jak vypadá dodávka a kdy k ní klient přistoupí?

Dodávka je nově napsaná jako **artefakty, ne jako věty** — ve složce `artefakty/`: seznam 30 kontrol
s prahy a prioritami, desetibodový checklist po releasu, vzor jednostránkového měsíčního komentáře
a formát záznamu nálezu. V ČR to nikdo nepublikuje a katalog 65 zahraničních ukázek obsahoval jediný
skutečný klientský report z éry GA4.

**Prahy jsou české:** do 10 % ticho, 10–30 % sledovat, nad 30 % volat. Anglofonní práh 15 % by v ČR pálil denně.

**Jedno technické omezení, které mění slib:** denní srovnání objednávek s GA4 funguje u Upgates, Shopify,
WooCommerce, PrestaShopu a Shoptet Premium, ale **u Shoptetu na tarifech Free–Enterprise nejde vůbec** —
k REST API tam nemá přístup ani klient, ani agentura. A to je právě cílový klient vstupního tieru.

**Kdy klient kupuje:** po incidentu, před redesignem či migrací, před deadlinem platformy, po auditu.
**Vstupenkou je vždy předchozí jednorázový projekt** — ani jeden z nalezených paušálů nevznikl bez něj.

## Otázka 5: Uživí se to?

**Ano jako práce, ne jako produkt jménem „hlídání měření".**

| Pro | Proti |
|---|---|
| Čtyři čeští veřejní zadavatelé měsíční paušál na práci na měření **obnovují** (CzechTourism 3 roky, ČRo čtyři rámce v řadě se stropem +150 % mezi 2021 a 2026, se změnou dodavatele) | 0 dokladů, že by si někdo koupil monitoring nebo alerting jako pojmenovanou položku |
| V Evropě existují srovnatelné produkty s veřejnou cenou: Junto (FR) 33 375 Kč, Piekarski (PL) 17 400 Kč, LEMONTEC (AT) 30 měsíců na trhu | 5 ze 71 evropských subjektů má veřejnou měsíční cenu; **0 ze 71** má číselnou reakční dobu |
| Hotový nástroj na denní reconciliaci neexistuje ani v ČR, ani na Shopify | U menších zadavatelů je analytika položkou paušálu za internetový marketing — a **ten model je v registru častější** |
| Analýza přežití: ze 46 prohledaných subjektů **ani jeden** nestáhl publikovanou měsíční cenu | Test nulového počtu stažení nemá sílu — veřejnou cenu má jen 7 % subjektů |

**Kanál v pořadí, které změnilo třetí kolo:** (1) kdo klientovi už provozuje sGTM nebo hosting měření,
(2) dodavatel webu — měření jako pojmenovaná role v paušálu, (3) veřejný sektor, (4) přímý prodej e-shopu.
**PPC agentura je doložený odpor, ne kanál** — měření si drží in-house, protože je to *„soo essential part
of the PPC service"*.

## Otázka 6: Co teď udělat

Pět podmínek blokuje publikaci ceníku a **žádná z nich nevyžaduje další rešerši**:

| # | Co | Blokuje | Náklad |
|---|---|---|---|
| 1 | Změřit hodiny zpětně na 3–5 vlastních zakázkách včetně plošného scénáře | celý ceník — marže je 31–40 % a tier 1 může být ztrátový | 1 den |
| 2 | Rozhodnout slib denního srovnání pro Shoptet bez Premium | vstupní tier | 2 hodiny |
| 3 | Smluvní konstrukce reakční doby + tři nabídky pojištění profesní odpovědnosti | celý ceník | 1 týden |
| 4 | Tier 3 publikovat jako „od" | datový tier | – |
| 5 | Snížit tier 2 na ≈ 15 900 Kč, nebo vyjmenovat obsah za rozdíl | standardní tier | – |

A dvě rozhodovací podmínky: **dva podepsaní piloti do 8 týdnů** (kritérium je podpis a první faktura,
ne „vzali bychom to") a **druhé cenové rameno testu na 2 900–5 000 Kč**, ne na 8 900 Kč.

## 7. Co se měnilo mezi verzemi

| # | Verze 1 (04. 9.) | Verze 2 (05. 9.) | Verze 3 (06. 9.) |
|---|---|---|---|
| 1 | medián 8–10 tis. potvrzují tři regiony | nezávislá je jen EU; ČR = 2 subjekty | **9 reálně zaplacených českých cen**, ale všechny z veřejného sektoru |
| 2 | BigQuery násobek 3,5–5× | ≈ 2× | v zaplacených datech **4,0×**, skupina s BQ bimodální |
| 3 | „nikdo z české konkurence to jako sdělení nepoužívá" | vyvráceno (Signals Bar) | detekce, **triáž i report** jsou komodita; dno je nula |
| 4 | „8 900 pod nejlevnějším balíčkem" | faktická chyba | po PPP **27 % nad** evropským mediánem |
| 5 | tier 2 nejlépe podepřený | šest nezávislých subjektů | **nejslabší**, mezera 15 300 → 37 200 je prázdná |
| 6 | tier 3 podepřen dvěma body | bez tržní opory | **poprvé domácí kotva**, ale veřejný sektor |
| 7 | marže 43–65 % | 43–65 % | **31–40 %** |
| 8 | poptávka brána jako daná | neověřená hypotéza s protievidencí | **třetí nezávislé potvrzení protievidence** |
| 9 | práh rekonciliace 15 % | 10 / 30 % | denní srovnání **nejde u Shoptetu bez Premium** |
| 10 | – | white-label přes PPC agentury | **PPC agentura je odpor**; kanál je sGTM provozovatel a dodavatel webu |

**Ceny se poprvé mění**: tier 2 dolů, tier 3 na „od". Tier 1 zůstává, ale mění jméno a obsah.

## Co už žádná rešerše nezodpoví

Tři úkoly priority A zůstávají po třech kolech nedotčené a jsou to přesně ty, u kterých stálo
„může otočit doporučení". **Čtvrté kolo rešerše má mezní hodnotu blízkou nule.**

| Co | Proč to veřejný zdroj neuzavře | Náklad |
|---|---|---|
| **Test poptávky** — 4 týdny, dvě landing stránky, tři cenová ramena 3 900 / 8 900 / na dotaz | jediný poptávkový dataset za tři kola má n = 53 a výsledek 0 | 4 týdny |
| **Ekonomika dodávky** — hodiny zpětně, utilizace, souběh incidentů | všechny nalezené hodiny jsou nabídkové, ne spotřebované | 1 den |
| **Rozhovory + Van Westendorp**, druhé rameno hybridní model | celá cena je z nabídkové strany | 2 týdny |
| **Mystery shopping** u 6–10 subjektů „na dotaz", zvlášť 3–5 zakázek s BigQuery | horní polovina trhu mlčí i po třech kolech | 1 den |
| **Velikost trhu** — kolik českých e-shopů patří do kterého tieru | mezera vyjmenovaná ve 2. kole, neotevřená ani jedním kolem | půl dne |

Mystery shopping znamená kontaktovat reálné firmy pod záminkou poptávky — to je rozhodnutí zadavatele,
ne rešerše.
