# Fáze 9 – Syntéza pricingu: kolik má stát měsíční správa měření

Stav: **verze 3 (2026-09-06) – po třetím kole a druhé datové hygieně.** Třetí kolo přineslo typ důkazu,
který dvě předchozí kola neměla: **reálně zaplacené české ceny z registru smluv.** Co se mezi verzemi
změnilo, je v § 6.

Zdroj: `data/pricing-dataset.csv` (900 řádků, z toho **813 `status=active`**; 18 `refuted`, 20 `superseded`,
49 `duplicate` – viz `data/clean-dataset.py`). Tabulky generuje `data/analyze-pricing.py`.

**Nové rozlišení, které mění čtení všech čísel: `evidence_type`.**
`paid` = cena skutečně zaplacená podle smlouvy nebo objednávky (66 řádků, všechny české z registru smluv);
`list_price` = veřejný ceník dodavatele, typicky „od" (640); `estimate` = odhad třetí strany (62);
`opinion` = výrok z fóra nebo cenového průvodce (45). **Ceníková cena „od" a zaplacená cena nejsou totéž
a nepatří do jednoho mediánu.**

**Metodika, která ve verzi 1 chyběla a bez které nejsou čísla srovnatelná:**
- Tržní medián se počítá **jen** z řádků `scope_class=measurement_only` **a** `period=měsíc` **a** `status=active`.
  Bez toho se do „ceny za správu měření“ počítala správa PPC, sGTM hosting, americké federální zakázky
  (až 1,8 mil. Kč/měs) a názory z fór.
- **Hodinová sazba × 10 h se nikdy nemíchá do tržního mediánu.** Konstanta 10 h mapuje jakoukoli sazbu
  800–2 500 Kč přesně do cílového intervalu, takže si shodu vyrábí sama. Vykazuje se zvlášť (§ 2.1 E).
- Kde má dodavatel víc tierů, uvádí se i pohled **„po subjektech“** (jeden dodavatel = jeho nejnižší veřejný
  tier), aby jeden hráč s pěti tiery nepřehlušil pět hráčů s jedním.
- Rozpětí („700–1 200 €“) se zapisuje **dolní hranicí**, střed jde do `scope_notes`.

Kurzy: 1 EUR = 25, 1 USD = 23, 1 GBP = 29, 1 PLN = 5,8, 1 DKK = 3,35, 1 CHF = 26 Kč. Mzdy × 1,34 (odvody).
**Zahraniční body nejsou korigované na cenovou hladinu (PPP)** – slouží ke struktuře nabídky a k poměrům
uvnitř jednoho dodavatele, ne k tvrzení „u nás je to levné“.

## 1. Shrnutí – odpověď na otázku „tisíce, 5, 10 nebo 15 tisíc?"

1. **Poprvé máme reálně zaplacené české ceny.** Registr smluv dal **devět měsíčních cen skutečně
   zaplacených za práci na měření.** Rozdělují se ostře podle BigQuery:

   | | n | hodnoty (Kč/měs bez DPH) | medián |
   |---|---|---|---|
   | **bez BigQuery** | 4 | 8 640 / 9 000 / 10 000 / 12 143 | **9 500** |
   | **s BigQuery** | 5 | 15 300 / 37 200 / 38 000 / 40 946 / 62 500 | **38 000** |

   K tomu šest reálných hodinových sazeb: 1 440 / 1 500 / 1 500 / 1 600 / 1 700 / 1 750 Kč/h.

2. **Slabina verze 2 padla, ale nahradila ji jiná.** Už neplatí „celé české pásmo stojí na jediném ceníku".
   Ale **všech devět zaplacených cen je z veřejného sektoru** (Český rozhlas, ČT, CzechTourism, destinační
   agentury, města) a **z cílového segmentu – e-shopu – není doložena ani jedna.**

3. **Slovo „hlídání" v celém desetiletém registru smluv nepadlo ani jednou.** „Správa analytiky" 0 výskytů,
   „alerting" 0 výskytů. Čeští kupující platí za **„interpretaci dat a analytickou podporu"**, za
   **„správu Google Analytics"** a za **„rozvoj a údržbu platformy pro analytiku"**. To je třetí nezávislé
   potvrzení protievidence z 2. kola (0 z 53 poptávek na Shoptet Partnerech, 1 samostatná zakázka za 10 let).

4. **Tier po tieru, proti reálně zaplaceným penězům:**

   | Tier | Cena | Verdikt | Nejbližší zaplacený český bod |
   |---|---|---|---|
   | Hlídání | 8 900 | **potvrzen cenou, vyvrácen obsahem** – sedí do zaplaceného pásma bez BQ (8 640–12 143), ale nikdo v něm nekupuje hlídání | Neuschl 8 640 za interpretaci dat |
   | Správa | 19 900 | **nejslabší tier.** Mezi 15 300 a 37 200 Kč není v českých zaplacených datech nic | CzechTourism 15 300 za 9 h **včetně BQ a sGTM** – tedy víc obsahu za o 30 % nižší cenu |
   | Datová správa | 39 000 | **poprvé má domácí kotvu** – leží uprostřed zaplaceného shluku s BQ (37 200 / 38 000 / 40 946) | Optimics pro Český rozhlas 40 946 Kč/měs (průměr 39 měsíců) |

5. **Nákladový model verze 2 (700 Kč/h) byl podstřelený.** ISPV 2025: medián systémového analytika
   91 532 Kč hrubého → 122 470 Kč měsíčních nákladů zaměstnavatele → **816 Kč/h při 150 fakturovaných
   hodinách, 1 021 Kč/h při 120 h, 1 225 Kč/h při 100 h.** Marže tierů klesají na 31–40 % při realistické
   utilizaci (§ 3.1 A).

6. **Ústřední napětí, které rozhoduje o životaschopnosti:** implikovaná hodinovka tierů je
   1 483–2 438 Kč/h. Proti doložené české specialistické sazbě **1 440–1 750 Kč/h** jsou tiery obhajitelné
   jen v **horní polovině** vlastního odhadu hodin – tedy právě tam, kde marže padá na 31–40 %.
   **Hodiny, které cenu obhájí před klientem, jsou přesně ty, které zlikvidují marži.**

7. **Po PPP korekci na českou cenovou hladinu se ceník posouvá proti trhu nahoru, ne dolů.** Evropský
   medián vstupních tierů klesá z 11 062 na **6 990 Kč** – 8 900 Kč je tedy 27 % **nad** ním, ne pod.
   Argument „jsme pod evropským mediánem" z verze 2 **padá**. (Zahraniční body do klientské komunikace
   nepatří vůbec – klient platí nominál.)

8. **Ceny za práci na měření nesledují inflaci.** Jediná česká veřejná cena (RobertNemec.com) stojí beze
   změny od února 2016 a ztratila 38 % reálné hodnoty; Marketing Makers 16 % za 4 roky. Nástrojová vrstva
   naopak od 2022 zlevňuje o 15–40 % a dno detekce je dnes **nula** (Verified Data free tier).
   → Do smlouvy patří indexační doložka podle HICP služeb, ne podle celkové inflace.

9. **Za garantovanou reakční dobu si český trh účtuje medián 1,63× za stupeň zkrácení** a 2,61× za celý
   žebřík (9 přechodů, 5 dodavatelů ze sousedních oborů). Reakce do 4 h stojí v ČR ≈ 6 000 Kč/měs.
   Náš skok 8 900 → 19 900 (2,24×) je nad zvykem a musí se rozpadnout na SLA (≈1,6× → 14 500 Kč)
   a obsah (zbytek ≈ 5 400 Kč, který se musí umět vyjmenovat).

10. **Odpověď na původní otázku zůstává „ne tisíce, ale ani ne patnáct plošně":** vstupní úroveň
    8 900–9 500 Kč je podložena zaplacenými penězi, datová úroveň 38 000–40 000 Kč rovněž.
    **Prostřední úroveň kolem 20 000 Kč není podložena ničím** – ani zaplaceným bodem, ani ceníkem
    ve srovnatelném rozsahu. Buď se sníží k 15 900 Kč (kde CzechTourism reálně platí za víc obsahu),
    nebo musí vyjmenovat, co za těch 4 600 Kč navíc klient dostane.

---

## 2. FAKTA

### 2.1 Rozpětí podle regionu a typu důkazu (CZK/měs, jen `status=active`)

**A. REÁLNĚ ZAPLACENÉ české ceny** (`evidence_type=paid`, registr smluv a veřejné zakázky) — nejsilnější
důkaz celé rešerše a jediný, kde je jistota, že někdo ty peníze skutečně vydal.

| Kč/měs | Dodavatel | Předmět (zkráceně) | BQ | Kupující |
|---:|---|---|---|---|
| 8 640 | Martin Neuschl (OSVČ) | interpretace dat a analytická podpora | ne | veřejný |
| 9 000 | Martin Neuschl (OSVČ) | interpretace dat a analytická podpora | volitelně | veřejný |
| 10 000 | Michael Pokorný (OSVČ) | správa Google Analytics | ne | veřejný |
| 12 143 | Michael Pokorný (OSVČ) | správa Google Analytics | ne | veřejný |
| 15 300 | Tereza Neuschl (OSVČ) | interpretace dat a analytická podpora, 9 h | **ano** | veřejný (CzechTourism) |
| 37 200 | Optimics s.r.o. | rozvíjení a údržba analytiky návštěvnosti | **ano** | veřejný (ČRo) |
| 38 000 | Optimics s.r.o. | dtto, dílčí objednávka | **ano** | veřejný (ČRo) |
| 40 946 | Optimics s.r.o. | dtto, průměr 39 měsíců rámce | **ano** | veřejný (ČRo) |
| 62 500 | Taste, a.s. | rozvoj a údržba platformy pro analytiku | **ano** | veřejný |

Medián bez BQ **9 500 Kč**, s BQ **38 000 Kč**. Reálný násobek za BigQuery v českých zaplacených datech je
tedy **4,0×** — ale s vážnou výhradou: skupina s BQ je bimodální (jeden bod 15 300, čtyři body 37 200–62 500)
a ty velké nejsou paušály za správu, ale čerpání hodinových rámců s rozvojem platformy v rozsahu.
Rozptyl měsíční fakturace u ČRo je 20 000–127 075 Kč.

**Mezera 15 300 → 37 200 Kč je prázdná.** Přesně tam leží navrhovaný tier 2.

**B. CENÍKOVÉ ceny** (`evidence_type=list_price`, veřejné ceníky dodavatelů, typicky „od")

| Region | n | min | Q1 | medián | Q3 | max |
|---|---|---|---|---|---|---|
| EU | 30 | 1 000 | 7 306 | **11 750** | 29 919 | 100 000 |
| CZ | 13 | 2 500 | 9 250 | **15 300** | 37 200 | 62 500 |
| US | 8 | 29 877 | 46 270 | **59 800** | 74 744 | 229 977 |
| SK | 2 | 8 750 | 10 938 | **13 125** | 15 312 | 17 500 |

Po subjektech (jeden dodavatel = jeho nejnižší veřejný tier): EU n = 20, medián **9 946 Kč**;
CZ n = 12, medián **9 625 Kč**.

**C. Po PPP korekci na českou cenovou hladinu** (Eurostat PLI služeb; ČR ≈ 73,5 % evropského průměru)

| | nominálně | po korekci | dopad na náš ceník |
|---|---|---|---|
| Evropský medián vstupních tierů | 11 062 | **6 990** | 8 900 Kč je **27 % nad** ním, ne pod |
| Evropské body s BigQuery (n = 3) | 11 250 / 33 375 / 42 425 | 8 460 / 22 328 / 34 831 | 39 000 Kč je 12 % nad korigovaným maximem |
| Pod 39 000 Kč po korekci | – | – | leží **24 z 25** evropských bodů |

**PPP korekce se nikdy nepoužívá v klientské komunikaci** — klient platí nominál. Slouží jen k tomu,
abychom si sami nenamlouvali, že jsme levní. Na SaaS se neaplikuje vůbec: software se v ČR prodává
za 100,8 % evropského průměru, ale práce ve službách za 73,5 %, takže **substituce nástrojem je u nás
relativně dražší než na Západě**.

**D. Kotvy ochoty platit za garantovanou reakční dobu** (sousední CZ obory: IT podpora, managed hosting,
správa webu, účetnictví — `scope_class=adjacent_industry`, 34 řádků)

| Úroveň reakce | Typická cena Kč/měs | Násobek proti nižší úrovni |
|---|---|---|
| další pracovní den | 790–4 400 | – |
| do 8 hodin | 2 500–8 000 | ≈ 1,6× |
| do 4 hodin | 3 000–13 000 | ≈ 1,6× |
| do 1 hodiny | 8 000–18 000 | ≈ 1,6× |

Medián za jeden stupeň zkrácení **1,63×**, za celý žebřík **2,61×** (9 přechodů, 5 dodavatelů).
Kontext, který bolí: **8 900 Kč je v ČR cena kompletního firemního IT malé firmy** (Externí IT ≈ 9 000,
ICT-GROUP 12 910) a víc než nejdražší veřejný účetní paušál (7 500 Kč). A ICT-GROUP prodává doslova
„Problémy vidíme dřív než vaši lidé" za 3 000–13 000 Kč.

**E. Hodinové sazby — PROXY, do tržního mediánu se nemíchá**

| Region | n | medián ×10 h | Poznámka |
|---|---|---|---|
| CZ specialistická práce na měření | 6 reálně zaplacených | **15 950** | 1 440–1 750 Kč/h, registr smluv |
| CZ generalistická správa webu vč. měřicích kódů | 1 vysoutěžená | 9 900 | 990 Kč/h, Brno-střed |
| CZ ceníkové sazby | 38 | 18 750 | 1 150–2 500 Kč/h |
| SK / EU / US | 10 / 16 / 67 | 16 250 / 29 450 / 23 000 | |

**F. Vyřazeno z výpočtů:** 22 řádků amerických federálních zakázek (22 655 – 1 795 194 Kč/měs),
45 názorů z fór, 62 mzdových proxy, 251 SaaS, 38 PPC paušálů, 34 sousedních oborů, 13 infrastrukturních.

### 2.2 Veřejné cenové body relevantní pro českého klienta

| Bod | Cena Kč/měs | Co obsahuje | Zdroj |
|---|---|---|---|
| Khoder – správa e-commerce reportu | 2 500 | údržba Looker Studio reportu, konektory | E2-011 |
| Advisio DataPlus (sGTM produkt) | 800 / 1 500 / 3 000 | hosting sGTM + aktualizace + 24/7 monitoring, podle událostí | E2-018 |
| Softmedia – provoz sGTM | 1 000 / 2 500–4 000 / 6 000–8 000 | provoz specialisty podle hitů | E2-053 |
| RobertNemec.com – měsíční práce na analytice | od 9 250 / běžně 18 500 / (31 200) | konverze, reporty, analýzy; 1 850 Kč/h | E2-009 |
| Digitální architekti – formulářová pásma | 5–10 / 11–20 / 21–40 / 41+ tis. | „Pravidelná údržba a monitoring měření“ | E2-001, E2-069 |
| Václav Ráš – dlouhodobá spolupráce | ≥ 26 000 (13 000/MD, min 2 MD) | s BQ v základu | E2-010 |
| Marketing Makers – hodiny analytiky podle velikosti | 5 / 15 / 30 h × 2 100 = 10 500 / 31 500 / 63 000 | odhad hodin, PPC tiery 4/8/14 h | E2-013–015 |
| PPC správa (kotva) | 8 000–30 000 nebo 15–25 % spendu | správa kampaní, „měření součást paušálu“ | E2-057, E2-058 |
| DASE (SK) – mesačný paušál | min 17 500 (700 €) | klient volí objem, 2měsíční výpověď | E3-001 |
| Starbomedia (SK) – údržba sGTM | 2 500–7 500 (100–300 €) | jen sGTM vrstva | E3 |
| LEMONTEC (AT) | 4 975 (199 €) | monitoring 10 eventů + opravy, bez vazby | E4-001 |
| Amplio (ES) Maintained / Managed | 17 500–30 000 / 45 000+ | bez BQ / s BQ, anomálie, týdenní report, kvartální strategie | E4-058–059 |
| Manids (DK) Minimum / Aktiv | 10 000 / 20 000–27 000 | kvartálně / měsíčně + report | E4-065 |
| Elevar – ongoing tracking support | 11 500 (500 USD) | lidský add-on k nástroji | E6 |
| E2M white-label | 30 000 / 48 000 / 92 000 | 30–35 / 50–60 / 100–120 h; call měsíčně → týdně; 24–48 h | E5-014 |

### 2.3 Cenové kotvy českého klienta (co už platí nebo zná)

| Kotva | Kč/měs | Význam pro cenu správy |
|---|---|---|
| sGTM hosting / produkt | 500–3 000 | „měsíční poplatek za měření“, který klient zná; správa musí být zřetelně jiná kategorie |
| SaaS monitoring stack | 1 600–5 200 | detekce je komodita; nesmíme prodávat „monitoring“ |
| Lidský add-on k nástroji (Elevar) | 11 500 | trh už platí ~11 500 za „někdo se o tracking stará“ |
| PPC správa | 8 000–30 000 (15–25 % spendu) | psychologický strop: správa měření dražší než správa kampaní se špatně vysvětluje |
| In-house 1/8 úvazku | 11 000–14 000 | co firma bez analytika reálně chce utratit |
| In-house plný úvazek | 88 000 (46–107 tis.) | strop; externí správa do ~1/3 = 30 tis. je „jasně levnější než člověk“ |
| Jednorázová implementace GA4/GTM | 4 000–19 000 | správa v ceně 1/4–1/2 implementace měsíčně je hranice, kterou malý e-shop zná |
| Audit | 5 000–35 000 (150–1 400 €) | vstupní projekt před správou |

### 2.4 Podle čeho trh škáluje tiery

| Osa | Kdo | Vhodnost pro DataLayer.cz |
|---|---|---|
| Hodiny / kapacita | Ráš (MD), MM, E2M, surowiecki, ananalytics, UK dny | srozumitelné, ale klient nechce počítat hodiny; použít jako **limit na změny (A2, F5)**, ne jako hlavní osu |
| Kadence (kvartálně → měsíčně → týdně) | Manids, E2M, Amplio | **hlavní osa** – klient chápe „jak často se o mě někdo stará“ |
| Reakční doba / kanál | UK, US (24–48 h; Elevar 12/24 h) | **diferenciátor v ČR** – nikdo nemá číslo |
| BigQuery ano/ne (hloubka) | Amplio, Manids, US „strategic“ | **zlom mezi standardním a datovým tierem** |
| Traffic / události | DataPlus, ADS-Tracking, Stape | jen pro sGTM položku (náklad infrastruktury) |
| Počet property / webů | jen SaaS | ne jako veřejný ceník; jako násobitel v nabídce |
| % ze spendu | PPC agentury | ne – správa měření nemá být vázaná na spend, jinak se ztratí v PPC fee |

---

## 3. INTERPRETACE

### 3.1 Odvození cen pro DataLayer.cz

Verze 1 tvrdila, že tři nezávislé cesty dávají stejný výsledek. **Nezávislé byly jen dvě** – nákladová cesta
počítala s interní sazbou 1 800 Kč/h, což je 93 % tržní agenturní sazby (AKA 2026: Data Analyst 1 938 Kč/h)
a zhruba 3,3násobek skutečného mzdového nákladu (ISPV medián ≈ 543 Kč/h). Shoda s tržní cestou tedy byla
tautologická. Opravené odvození odděluje **nákladovou podlahu** od **cílové marže**:

**A) Nákladová podlaha** — verze 2 počítala se 700 Kč/h, což bylo podstřelené

ISPV 2025: medián systémového analytika **91 532 Kč** hrubého → × 1,338 odvodů = **122 470 Kč** měsíčních
nákladů zaměstnavatele. Přepočet na fakturovanou hodinu závisí na utilizaci, kterou **neznáme** — proto
celá matice, ne jedno číslo:

| Fakturovaných h/měs | Náklad Kč/h | Marže tier 1 (4–6 h) | Marže tier 2 (9–13 h) | Marže tier 3 (16–23 h) |
|---:|---:|---|---|---|
| 150 (nereálné) | 816 | 63 → 45 % | 63 → 47 % | 67 → 52 % |
| **120 (realistické)** | **1 021** | **54 → 31 %** | **54 → 33 %** | **58 → 40 %** |
| 100 (konzervativní) | 1 225 | 45 → 17 % | 45 → 20 % | 50 → 28 % |

**Dvě nákladové položky, které v modelu chybí úplně:** pojistné za profesní odpovědnost (cena není veřejná)
a **riziková rezerva na SLA kredity** — maximální měsíční expozice 4 450 / 9 950 / 19 500 Kč,
**nepojistitelná, platí se z marže**.

**Ústřední napětí:** implikovaná hodinovka tierů je 1 483–2 225 / 1 531–2 211 / 1 696–2 438 Kč/h.
Proti doložené české specialistické sazbě 1 440–1 750 Kč/h jsou tiery obhajitelné **jen v horní polovině
vlastního odhadu hodin** — tedy tam, kde marže padá na 31–40 %. Ve spodní polovině implikují
2 211–2 438 Kč/h, což je 26–39 % nad nejvyšší doloženou českou sazbou. Při subdodávce za tržních
1 550 Kč/h je **tier 1 při 6 hodinách ztrátový**.

**Odhad hodin (4–6 / 9–13 / 16–23 h) nebyl nikdy ověřen proti reálné dodávce** a G12 mu odporuje:
samotné řízení změn prostředí vychází na 2,5–7 h/měs. Je to nejrizikovější vstup celého modelu
a blokuje publikaci ceníku.

**B) Tržní zařazení** — nově proti reálně zaplaceným penězům, ne jen proti ceníkům

| Tier | Cena | Zaplacené české body | Ceníkové EU body | Verdikt |
|---|---|---|---|---|
| 8 900 | vstupní | **8 640 / 9 000 / 10 000 / 12 143** – sedí dovnitř | medián po subjektech 9 946; po PPP 6 990 | **podložen zaplacenými penězi**, ale po PPP je 27 % nad EU |
| 19 900 | standardní | **žádný** – mezera 15 300 → 37 200 je prázdná | shluk 14 975–19 975 (BuI Hinsche, Amplio, Piekarski, DASE, ADS) | **nejslabší**; 15 300 Kč reálně platí za víc obsahu |
| 39 000 | datový | **37 200 / 38 000 / 40 946** – sedí doprostřed | 11 250 / 33 375 / 42 425, medián 33 375 | **poprvé podložen**, ale veřejným sektorem a rámcem s rozvojem |

Nejbližší skutečný dvojník tieru 2 je německá **BuI Hinsche**, jediná nabídka v korpusu se stejnými
jednotkami: 599 €/měs (14 975 Kč) za **3 h + reakce 1 pracovní den**, 1 450 €/měs (36 250 Kč) za
**8 h + reakce 4 h**. Náš tier 2 dává stejné 3 hodiny o 33 % dráž, ale slibuje kratší reakci.
Ten rozdíl musí obhájit QA po releasu a changelog, ne cenové srovnání.

**C) Kotvy klienta**

| Kotva | Kč/měs | Vztah k tierům |
|---|---|---|
| SaaS detekce (dno) | **0** (Verified Data free tier) – 667 (ga4monitor) – 3 225 (CZ medián) | vstupní tier nesmí být prodáván jako monitoring |
| Kompletní firemní IT malé firmy | 8 000–13 000 | **8 900 Kč je tatáž hladina jako celé IT firmy** |
| Účetní paušál (nejdražší veřejný) | 7 500 | 8 900 Kč je nad ním |
| Reakce do 4 h v sousedních oborech | ≈ 6 000 | teprve s ní je 8 900 Kč obhajitelné |
| PPC paušál CZ (medián) | 13 900 | tier 2 je nad ním |
| Externí analytik na kapacitu (CzechTrade) | 520 Kč/h × 120 h = 62 400 | strop pro tier 3 |
| In-house analytik CZ (ISPV + odvody) | 122 470 | tier 3 = 32 % nákladu na člověka |

**Průnik:** vstupní 8 900 Kč a datový 39 000 Kč jsou podložené **reálně zaplacenými českými penězi**.
Standardní 19 900 Kč není podložen ničím a je to jediná cena, kterou doporučuji změnit — buď dolů
k 15 900 Kč (kde CzechTourism reálně platí za víc obsahu), nebo ji obhájit vyjmenovaným obsahem
za 4 600 Kč navíc. Marže při realistické utilizaci je 31–40 %, ne 43–65 %, jak tvrdila verze 2.

### 3.2 Proč ne níž a proč ne výš

- **Pod 8 640 Kč** není v českých zaplacených datech nic — a zdola tlačí LEMONTEC (AT), jediný evropský
  produktizovaný paušál na správu měření s doloženou životností 30 měsíců, který v české cenové hladině
  vychází na **2 897 Kč**. Vstupní tier prodává obsah a reakci, ne cenu.
- **Prostřední úroveň nad 15 300 Kč** naráží na to, že za tuto částku už veřejný zadavatel reálně kupuje
  9 hodin **včetně BigQuery a server-side GTM**. Rozdíl musí být vyjmenovatelný, jinak neobstojí.
- **Datový tier nad 42 000 Kč** se blíží externímu analytikovi na kapacitu (62 400 Kč) a klient si tu
  aritmetiku spočítá: 39 000 Kč ≈ 25 hodin seniorní kapacity při doložené sazbě 1 550 Kč/h.
  Publikovat proto jako **„od 39 000 Kč, cena podle rozsahu"**, ne jako pevnou cenu.

### 3.3 Rizika

| Riziko | Projev | Ošetření |
|---|---|---|
| **Odhad hodin neověřen (blokující)** | 4–6 / 9–13 / 16–23 h je odhad; řízení změn samo dá 2,5–7 h | změřit zpětně na 3–5 vlastních zakázkách **včetně plošného scénáře** |
| **Marže je poloviční proti verzi 2** | 31–40 % místo 43–65 %; tier 1 při 6 h a subdodávce ztrátový | fixovat cenu až po změření hodin; limit na změny vymáhat |
| **SLA kredity nelze pojistit** | expozice 4 450 / 9 950 / 19 500 Kč měsíčně z marže | strop kreditu 50 % odměny, omezení náhrady škody na 1–6 odměn |
| **Tier 2 bez opory** | mezera 15 300 → 37 200 Kč v zaplacených datech | snížit na ≈ 15 900 Kč, nebo vyjmenovat obsah za rozdíl |
| **Nikdo nekupuje „hlídání"** | 0 výskytů v registru za 10 let, 0 z 53 poptávek | prodávat jako kapacitu analytika s hlídáním v ceně |
| **Denní srovnání nejde u většiny Shoptetů** | REST API až od Premium (12 000 Kč/měs) | jmenný seznam podporovaných platforem v nabídce |
| **Ceny neindexované ztrácejí hodnotu** | RobertNemec −38 % reálné hodnoty za 10 let | roční indexace podle HICP služeb, „ceny platné od" na ceníku |
| **Kotvy jsou z veřejného sektoru** | z e-shopu není doložena ani jedna zaplacená cena | mystery shopping u 3–5 e-shopových zakázek |

## 4. DOPORUČENÍ

1. **Vstupní tier 8 900 Kč ponechat, ale přejmenovat a přeobsadit.** Čeští kupující platí za „interpretaci
   dat a analytickou podporu", ne za hlídání. Prodávat jako **malý paušál analytika (X hodin) s hlídáním
   v ceně**, ne jako monitoring.
2. **Standardní tier snížit na ≈ 15 900 Kč**, nebo explicitně vyjmenovat, co klient dostane za rozdíl proti
   CzechTourism (15 300 Kč za 9 h včetně BQ a sGTM). Současných 19 900 Kč nemá oporu v žádném zaplaceném bodě.
3. **Datový tier publikovat jako „od 39 000 Kč, cena podle rozsahu."** Kotva existuje (37 200–40 946 Kč
   reálně zaplaceno), ale je z rámce s rozvojem v rozsahu a s rozptylem 20 000–127 075 Kč měsíčně.
4. **Cenu nefixovat, dokud se nezměří hodiny** na vlastních zakázkách. Při realistické utilizaci je marže
   31–40 % a tier 1 může být při horním odhadu hodin ztrátový.
5. **Reakční dobu prodávat jako samostatnou osu s doloženou cenou.** Český trh za jeden stupeň zkrácení
   platí 1,63×; reakce do 4 h stojí ≈ 6 000 Kč/měs. To je jediná osa, kterou žádný SaaS nemá.
6. **Do smlouvy indexační doložku** podle HICP služeb ČR (2025: 5,0 % vs. celková inflace 2,3 %) a na ceník
   „Ceny platné od <datum>".
7. **Zahraniční ceny do klientské komunikace nepatří.** Po PPP korekci nejsme levní, jsme nad evropským
   mediánem.

## 5. Mezery

- **Z cílového segmentu (e-shop) není doložena ani jedna zaplacená cena.** Všech devět je z veřejného sektoru.
- **Mezera 15 300 → 37 200 Kč** v zaplacených datech je prázdná — právě tam leží tier 2.
- **Utilizace a skutečné hodiny** nejsou známy; marže je proto interval 17–54 %, ne číslo.
- **Cena pojištění profesní odpovědnosti** není veřejná — nákladová položka slibu reakční doby je neznámá.
- **Velikost trhu** (kolik českých e-shopů patří do kterého tieru) nebyla otevřena v žádném ze tří kol.
- **Ochota platit** nebyla testována; celá cena je stále odvozena z nabídkové strany.
- Rozpory **Metrics Watch 29 vs. 79 USD** a **Elevar Analyst Services** zůstávají nevyřešené.

## 6. Co se změnilo mezi verzemi

| # | Verze 1 (04. 9.) | Verze 2 (05. 9.) | Verze 3 (06. 9.) |
|---|---|---|---|
| 1 | medián 8–10 tis. potvrzují tři regiony | nezávislá je jen EU; ČR = 2 subjekty | **9 reálně zaplacených českých cen**; bez BQ medián 9 500, s BQ 38 000 |
| 2 | BigQuery násobek 3,5–5× | ≈ 2× | v českých zaplacených datech **4,0×**, ale skupina s BQ je bimodální (n = 5) |
| 3 | tři nezávislé odvozovací cesty | dvě | dvě; nákladová podlaha opravena ze 700 na **816–1 225 Kč/h** |
| 4 | „8 900 pod nejlevnějším balíčkem" | faktická chyba, 8 z 15 je levnějších | po PPP je 8 900 **27 % nad** evropským mediánem |
| 5 | tier 2 nejlépe podepřený | šest nezávislých subjektů | **vyvráceno v každém bodě**; tier 2 je nejslabší, mezera 15 300 → 37 200 je prázdná |
| 6 | tier 3 podepřen dvěma body | bez tržní opory, rozptyl 4× | **poprvé domácí kotva** (37 200–40 946 zaplaceno), ale veřejný sektor a rámec s rozvojem |
| 7 | marže 43–65 % | 43–65 % | **31–40 %** při realistické utilizaci; tier 1 může být ztrátový |
| 8 | – | detekce je komodita za 667 Kč | dno detekce je **nula**; komoditizovala se i **triáž a report** |
| 9 | – | – | **„hlídání" v desetiletém registru smluv: 0 výskytů**; kupuje se interpretace dat |
| 10 | – | – | ceny v oboru **nesledují inflaci** (−38 % reálné hodnoty za 10 let) → indexační doložka |

**Ceny se poprvé mění**: doporučuji snížit tier 2 a tier 3 publikovat jako „od". Tier 1 zůstává.
