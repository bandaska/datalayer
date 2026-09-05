# Fáze 9 – Syntéza pricingu: kolik má stát měsíční správa měření

Stav: **verze 2 (2026-09-05) – přepočítáno po datové hygieně 2. kola.** Verze 1 (2026-09-04) obsahovala
čísla, která byla vypočtena z neuklizeného datasetu; co se změnilo a proč, je v § 6 na konci.

Zdroj: `data/pricing-dataset.csv` (749 řádků, z toho **685 `status=active`**; 16 `refuted`, 12 `superseded`,
36 `duplicate` – viz `data/clean-dataset.py`). Tabulky generuje `data/analyze-pricing.py`.

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

## 1. Shrnutí – odpověď na otázku „tisíce, 5, 10 nebo 15 tisíc?“

1. **Veřejná měsíční cena za správu měření je vzácná a v ČR ji má prakticky jeden subjekt.** Z 685 platných
   cenových řádků splňuje „měsíční cena za správu měření od identifikovatelného dodavatele“ jen **46 řádků**:
   EU 25, US 8, CZ 4, SK 2. **Ze čtyř českých řádků patří tři jednomu subjektu** (RobertNemec.com 9 250 /
   18 500 / 31 200 Kč) a čtvrtý je údržba reportu (Khoder 2 500 Kč). České pásmo tedy **není tržní nález** –
   je to rozhodnutí odvozené z evropského vzorku a z domácích kotev (PPC paušál, mzdy, SaaS).
2. **Evropský vzorek je jediná nezávislá opora.** EU všechny tiery (n = 25): min 3 350, Q1 7 475,
   **medián 12 250**, Q3 32 475, max 100 000 Kč. Po subjektech, tj. nejnižší veřejný tier každého dodavatele
   (n = 15): min 3 350, Q1 6 750, **medián 11 250**, Q3 28 750 Kč. SK: DASE 17 500 a Starbomedia 8 750 Kč.
3. **Násobek za BigQuery je ≈ 2×, ne 4×.** Verze 1 tvrdila 3,5–5×; to byl artefakt porovnání dvou různých
   populací. Po úklidu: EU+UK bez BQ medián 10 875 Kč (n = 21), s BQ medián 28 125 Kč (n = 2, hodnoty
   11 250 a 45 000). Uvnitř jednoho dodavatele je násobek doložen třikrát nezávisle: Amplio Maintained→Managed
   2,6×, Funnel.io 2,0×, EU vzorek 1,5–2,6×. **Odvození tieru 3 z násobku tím padá** (2,6 × 10 875 = 28 275).
4. **Hodinová sazba je kotva, ne důkaz.** CZ sazby 1 150–2 500 Kč/h jsou potvrzené ze tří nezávislých
   strukturovaných zdrojů (Shoptet Partneři medián 2 000 Kč/h, AKA 2026 „Data Analyst 1 938 Kč/h“, freelance
   profily 850–2 500 Kč/h) – ale ×10 h dává 11 500–25 000 Kč, což je interval, do kterého se trefí skoro
   cokoli. Navíc se dlouhodobá spolupráce v ČR prodává **o ~33 % levněji** než hlavičková sazba
   (Ráš 2 400 → 1 600 Kč/h), takže proxy retainer nadhodnocuje.
5. **Odpověď zůstává, ale mění se její status.** Doporučená pásma **vstupní 8–10 tis. / standardní 18–25 tis. /
   datový 35–45 tis. Kč** obstojí proti evropskému vzorku a domácím kotvám, ale:
   - **8 900 Kč není „pod nejlevnějším lidským balíčkem na trhu“** – pod ním leží nejméně 8 nezávislých
     evropských subjektů (3 350–7 800 Kč). Rozdíl musí obhájit obsah, ne cena.
   - **19 900 Kč je nejlépe podepřený tier** – šest nezávislých subjektů v pásmu 17 500–23 750 Kč.
   - **39 000 Kč nelze obhájit tržním srovnáním.** Dva veřejné evropské lidské body s BigQuery jsou
     11 250 a 45 000 Kč (rozptyl 4×). Tier 3 se musí obhájit **obsahem** (denní diff po `transaction_id`,
     monitoring GA4→BQ exportu, reakce do 4 h), a pokud násobkem, tak přiznaně z tieru 2 (19 900 × 2,0 = 39 800).
6. **Konkurenční tlak na vstupní tier je vyšší, než verze 1 uváděla.** Detekce je od roku 2026 v ČR komodita:
   Signals Bar 2 500 Kč/měs (a používá doslova slova „rozbité měření“ a „tiché výpadky“), ga4monitor.com
   667 Kč/měs, LEMONTEC (AT) slibuje odhalení „innerhalb von 24 Stunden“ za 4 975 Kč. K tomu RDY.cz nabízí
   10 000 Kč/měs včetně nastavení měření konverzí. **Vstupní tier proto nesmí být prodáván jako „monitoring“.**

---

## 2. FAKTA

### 2.1 Rozpětí podle regionu a rozsahu (CZK/měs, jen `status=active`)

**A. Tržní základ – měsíční správa měření (`scope_class=measurement_only`), všechny tiery**

| Region | n | min | Q1 | medián | Q3 | max | Poznámka |
|---|---|---|---|---|---|---|---|
| EU | 25 | 3 350 | 7 475 | **12 250** | 32 475 | 100 000 | jediná nezávislá opora; 12 zemí |
| US | 8 | 29 877 | 46 270 | **59 800** | 74 744 | 229 977 | jen struktura, ne cenová hladina |
| CZ | 4 | 2 500 | 7 562 | **13 875** | 21 675 | 31 200 | **3 ze 4 řádků = jeden subjekt** |
| SK | 2 | 8 750 | 10 938 | **13 125** | 15 312 | 17 500 | DASE 17 500, Starbomedia 8 750 |

**B. Totéž po subjektech** (jeden dodavatel = jeho nejnižší veřejný tier – měří šíři trhu, ne šíři ceníků)

| Region | n subjektů | min | Q1 | medián | Q3 | max |
|---|---|---|---|---|---|---|
| EU | 15 | 3 350 | 6 750 | **11 250** | 28 750 | 69 000 |
| US | 5 | 29 877 | 40 250 | **50 600** | 69 000 | 69 000 |
| SK | 2 | 8 750 | 10 938 | **13 125** | 15 312 | 17 500 |
| CZ | 2 | 2 500 | 4 188 | **5 875** | 7 562 | 9 250 |

Řádek „CZ = 2 subjekty“ je nejdůležitější číslo celé syntézy: **v Česku existují dva veřejné měsíční ceníky
za práci na měření**, a jeden z nich je údržba reportu. Cokoli dalšího o „českém tržním mediánu“ je dopočet.

**C. Podle BigQuery** (jen měření, měsíční)

| Skupina | n | min | Q1 | medián | Q3 | max |
|---|---|---|---|---|---|---|
| EU+UK bez BQ | 21 | 3 350 | 7 250 | **10 875** | 19 975 | 100 000 |
| EU+UK s BQ | 2 | 11 250 | 19 688 | **28 125** | 36 562 | 45 000 |
| EU+UK „BQ volitelně“ | 2 | 22 250 | 27 562 | 32 875 | 38 188 | 43 500 |
| CZ bez BQ | 4 | 2 500 | 7 562 | 13 875 | 21 675 | 31 200 |
| US bez BQ | 8 | 29 877 | 46 270 | 59 800 | 74 744 | 229 977 |

Násobek EU s BQ / bez BQ = **2,6×**. Uvnitř jednoho dodavatele: Amplio 2,6×, Funnel.io 2,0×. Dva body s BQ
jsou 11 250 Kč (Blagoweb IT, BigQuery přímo v dodávce) a 45 000 Kč (Amplio Managed) – **rozptyl 4×, n = 2**.

**D. SaaS nástroje (měsíční)** – cenová podlaha detekce, nikoli konkurence službě

| Region | n | min | Q1 | medián | Q3 | max |
|---|---|---|---|---|---|---|
| GLOBAL | 83 | 92 | 1 138 | 3 427 | 9 921 | 69 000 |
| CZ | 27 | 300 | 1 362 | 3 225 | 8 375 | 18 700 |
| EU | 25 | 437 | 1 225 | 2 475 | 8 947 | 34 500 |
| US | 24 | 460 | 2 726 | 8 038 | 16 951 | 149 500 |

**E. Hodinové sazby × 10 h – PROXY, do tržního mediánu se nemíchá**

| Region | n | min | Q1 | medián | Q3 | max |
|---|---|---|---|---|---|---|
| CZ | 38 | 6 000 | 12 125 | 18 750 | 23 250 | 45 920 |
| SK | 10 | 6 250 | 12 031 | 16 250 | 17 500 | 27 500 |
| EU | 16 | 7 540 | 21 625 | 29 450 | 34 762 | 46 800 |
| US | 67 | 1 150 | 13 989 | 23 000 | 31 034 | 69 000 |

Mezi verzí 1 a 2 vzrostl český medián této proxy z 11 500 na 18 750 Kč **jen tím, že přibyly další sazby** –
důkaz, že proxy měří sazby, ne retainery.

**F. Kotvy, které klient zná** (in-house, PPC paušál, infrastruktura)

| Kategorie | Region | n | medián | Rozpětí |
|---|---|---|---|---|
| Mzdové proxy (mzda × 1,34) | CZ | 32 | 86 185 | 8 000 – 145 050 |
| Mzdové proxy | SK | 13 | 63 650 | 47 500 – 114 771 |
| PPC / full-service paušál s měřením uvnitř | CZ | 14 | 13 900 | 3 000 – 100 000 |
| PPC paušál | SK | 7 | 8 750 | 7 250 – 13 750 |
| sGTM hosting a infrastruktura | CZ | 3 | 1 500 | 800 – 3 000 |
| sGTM hosting | EU | 6 | 5 588 | 780 – 23 200 |

**G. Vyřazeno z výpočtů** (bylo by zavádějící je míchat do tržního mediánu): 22 řádků veřejných zakázek
a enterprise kontraktů (US federální 22 655 – 1 795 194 Kč/měs), 44 řádků názorů z fór a cenových průvodců
(„I charge $400/month“), 62 mzdových proxy, 238 SaaS, 31 PPC paušálů, 12 infrastrukturních.

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

**A) Nákladová podlaha** (skutečný náklad, ne tržní sazba)

| Tier | Lidský čas / měs | Mzdový náklad (700 Kč/h vč. režie) | Nástroje | Podlaha | Cena | Hrubá marže |
|---|---|---|---|---|---|---|
| Vstupní | 4–6 h | 2 800–4 200 | 900 | 3 700–5 100 | 8 900 | **43–58 %** |
| Standardní | 9–13 h | 6 300–9 100 | 1 200 | 7 500–10 300 | 19 900 | **48–62 %** |
| Datový | 16–23 h | 11 200–16 100 | 2 500 | 13 700–18 600 | 39 000 | **52–65 %** |

Odhad hodin je oproti verzi 1 posunut nahoru: fáze G12 doložila **≈188 datovaných změn prostředí za 32 měsíců
(5,9/měs), z toho 57 měnících sběr dat**, což samo na řízení změn (B3/C5) dává 2,5–7 h/měs. Odhad „3–5 h“
pro vstupní tier byl proto podhodnocený. **Tento odhad stále nebyl ověřen proti reálné dodávce** – je to
nejrizikovější vstup celého modelu (viz § 5).

**B) Tržní zařazení** (jen evropský vzorek, jediný nezávislý)

| Tier | Cena | Kde leží v EU vzorku | Kolik subjektů je levnějších |
|---|---|---|---|
| 8 900 | vstupní | mezi Q1 (7 475) a mediánem (12 250); po subjektech pod mediánem (11 250) | **8 z 15** |
| 19 900 | standardní | mezi mediánem a Q3 (32 475) | 11 z 15 |
| 39 000 | datový | nad Q3, pod maximem (100 000) | 13 z 15 |

Šest nezávislých subjektů podepírá pásmo tieru 2: RobertNemec 18 500, DASE 17 500, Amplio Maintained 17 500,
YAG Enterprise 22 250, ADS-Tracking Middle 19 975, Elevar Analyst Tier 2 23 000 Kč.
Tier 3 podepírají **dva** body s rozptylem 4× (11 250 a 45 000) – to není tržní opora.

**C) Kotvy klienta**

| Kotva | Kč/měs | Vztah k tierům |
|---|---|---|
| SaaS detekce (CZ medián) | 3 225 | vstupní tier musí být zřetelně jiná kategorie, ne dražší monitoring |
| Signals Bar / ga4monitor | 667–2 500 | přímý konkurent ve *sdělení*, ne v dodávce |
| PPC paušál CZ (medián) | 13 900 | správa měření dražší než správa kampaní se vysvětluje těžko → tier 2 na hraně |
| RDY.cz (měření konverzí v ceně) | 10 000 | přímý tlak na vstupní tier |
| In-house analytik CZ (medián) | 86 185 | tier 3 = 45 % nákladu na člověka; nad ~43 tis. klient srovnává s úvazkem |

**Průnik:** 8 900 / 19 900 / 39 000 Kč obstojí jako **rozhodnutí** s marží 43–65 %, opřené o evropský vzorek
a domácí kotvy. Neobstojí jako **tržní nález odvozený z českých dat** – ta pro to nestačí (§ 2.1 B).

### 3.2 Proč ne níž a proč ne výš

- **Pod 7 500 Kč** nejde dodat víc než automat + kvartální kontrola (model LEMONTEC 199 €). Při skutečném
  nákladu 700 Kč/h a marži, která unese jeden incident, jsou to ~4 h měsíčně včetně komentáře. Zároveň se
  cena přibližuje SaaS podlaze (CZ medián 3 225 Kč) a produktu Signals Bar (2 500 Kč), takže klient přestane
  rozlišovat kategorii. **Pozor: 8 900 Kč není nejnižší lidská nabídka na trhu** – 8 z 15 evropských subjektů
  je levnějších (3 350–7 800 Kč), takže vstupní tier prodává obsah a reakci, ne cenu.
- **Standardní nad 25 000 Kč bez BQ** klient srovná s PPC paušálem (CZ medián 13 900 Kč), který vnímá jako
  „hlavní“ službu, a s in-house 1/4 úvazku (21 500 Kč). Doložený veřejný strop správy bez BQ je
  **31 200 Kč** (RobertNemec, ověřeno v raw HTML) a 32 475 Kč (ADS-Tracking Max) – dva nezávislé subjekty.
- **Datový tier**: pod 30 000 Kč nepokryje 16–23 h seniorní práce; nad 43 000 Kč se dostává k polovině
  nákladu na in-house analytika (CZ medián 86 185 Kč) a klient začne zvažovat vlastního člověka.
  **Tržní opora ale chybí** – dva veřejné evropské body s BQ jsou 11 250 a 45 000 Kč. Tier 3 je proto
  cenový návrh podložený obsahem a marží, ne tržní medián.

### 3.3 Rizika

| Riziko | Projev | Ošetření |
|---|---|---|
| **Odhad hodin není ověřen** | 4–6 / 9–13 / 16–23 h je odhad; G12 doložil 2,5–7 h jen na řízení změn | změřit zpětně na 3–5 vlastních zakázkách **před** publikací ceníku (kolo 3, A3) |
| **Souběh incidentů** | jedna změna Googlu = všichni klienti v jeden den; model počítá s nezávislými incidenty | modelovat plošný scénář; do SLA dát pořadí priorit |
| Podhodnocení vstupního tieru | releasy a ad-hoc dotazy sežerou 8+ h za 8 900 Kč | limit „změny nad 1 h měsíčně z hodinové sazby 1 900 Kč“; QA po releasu max 1×/měs |
| Tlak zdola na vstupní tier | Signals Bar 2 500 Kč se stejným sdělením, ga4monitor 667 Kč, RDY.cz 10 000 Kč vč. měření konverzí | nesoutěžit v detekci; prodávat triáž, opravu a číslo chybějících konverzí |
| „Monitoring“ jako název | klient si najde nástroj za 667–2 500 Kč | název „správa měření“; monitoring je vstup, ne produkt |
| Tier 3 bez tržní opory | dva body s rozptylem 4× | obhájit obsahem; ověřit mystery shoppingem (kolo 3, B2) |
| Vazba na PPC agenturu | správa zmizí v PPC fee (CZ medián 13 900 Kč) | prodávat samostatně nebo white-label za pevnou cenu |
| **České pásmo stojí na 2 subjektech** | vzorek je systematicky vychýlený dolů (ceníkují jen malí a produktizovaní hráči) | registr smluv + mystery shopping (kolo 3, B1/B2) |

## 4. DOPORUČENÍ

1. Zveřejnit **tři ceny** (8 900 / 19 900 / 39 000 Kč bez DPH) a „bez vazby, měsíční výpověď“ u prvních dvou –
   transparentnost je v ČR diferenciátor (veřejnou měsíční cenu za práci na měření má **jeden** subjekt).
   Prezentovat je jako **naše rozhodnutí**, ne jako „tržní cenu“ – ta pro ČR neexistuje.
2. Osy tierů: **kadence + reakční doba + BigQuery hloubka**; hodiny jen jako limit na změny; traffic jen u sGTM.
3. Vstupní projekt (audit / oprava měření) prodávat zvlášť za 9–25 tis. Kč a **první měsíc správy započítat
   do onboardingu** – odpovídá poptávce „jednorázová oprava a pak paušál“ (E7-109) i modelu DASE/Amplio.
4. Argumentovat **poměrem k rozpočtu**, ne absolutní ztrátou: standardní tier ≈ 4 % měsíčního rozpočtu do
   reklamy při spendu 500 tis. Kč. (Věta „týden bez alertu stojí víc než rok správy“ byla vypuštěna – pro
   deklarovaný segment je aritmeticky nepravdivá, platila by až od spendu ~2,2 mil. Kč/měs.)
5. Ceny **v Kč i EUR**; nepoužívat zahraniční body jako argument „u nás je to levné“ (chybí PPP korekce).
6. Před publikací ceníku ověřit: hodinovou náročnost na vlastních datech (A3), ochotu platit
   (Van Westendorp, A4) a proveditelnost denní reconciliace na Shoptet/Upgates API (A5).

## 5. Mezery

- **České pásmo stojí na 2 subjektech** (RobertNemec 3 hodnoty, Khoder 1). Chybí realizované ceny –
  cesta: registr smluv.gov.cz (povinné nad 50 tis. Kč, plné texty) a mystery shopping u 6–10 subjektů
  „na dotaz“, kde leží celá horní polovina trhu.
- **Tier 3 nemá tržní oporu**: n = 2 s rozptylem 4×; žádný český BQ retainer veřejně neexistuje.
- **Odhad hodin nebyl ověřen proti reálné dodávce**; ekonomika dodávky (utilizace, klientů na analytika,
  souběh incidentů) nebyla zkoumána vůbec.
- **Ochota platit** nebyla testována – celá cena je odvozena z nabídkové strany.
- **Bez PPP korekce**; zahraniční body nejsou srovnatelné v absolutní výši.
- Rozpor **Metrics Watch 29 vs. 79 USD** (Capterra vs. ceník dodavatele) nevyřešen.
- Rozpor **Elevar Analyst Services**: dva ověřovatelé doložili doslovným citátem z ceníku, třetí ho v aktuálním
  veřejném ceníku nenašel. Do rozhodnutí se kotva neuvádí jako nosná.

## 6. Co se změnilo mezi verzí 1 a 2

| # | Verze 1 (2026-09-04) | Verze 2 (2026-09-05) | Proč |
|---|---|---|---|
| 1 | „Medián 8–10 tis. potvrzují nezávisle tři regiony (CZ, SK, EU)“ | Nezávislá je **jen EU** (medián 12 250 / po subjektech 11 250 Kč); CZ = 2 subjekty, SK = 2 | Tři mediány neměřily totéž: CZ vzorek byl z 87 % PPC paušál, sGTM hosting a full-service |
| 2 | „Správa s BQ je 3,5–5× dražší“ | **≈ 2,0–2,6×** | Porovnávaly se dvě různé populace; uvnitř dodavatele doloženo 3× nezávisle |
| 3 | „Tři nezávislé odvozovací cesty dávají stejný výsledek“ | Nezávislé jsou **dvě**; nákladová cesta počítala s tržní sazbou 1 800 Kč/h jako s nákladem | Skutečný mzdový náklad je ≈ 700 Kč/h vč. režie; shoda byla tautologická |
| 4 | „8 900 Kč leží pod nejlevnějším lidským balíčkem na trhu“ | **Faktická chyba** – pod ním je 8 z 15 evropských subjektů (3 350–7 800 Kč) | Přepočet po úklidu datasetu |
| 5 | Horní kvartil správy bez BQ „16–23 tis.“ | Doložený veřejný **strop 31 200–32 475 Kč** (dva nezávislé subjekty) | RobertNemec 31 200 Kč ověřen v raw HTML (ve verzi 1 označen za nepotvrzený) |
| 6 | Tier 3 podepřen dvěma EU body (45 000 a 43 500) | Podepřen **dvěma body s rozptylem 4×** (11 250 a 45 000); Measurelab 43 500 vyřazen | Measurelab £1 500 je minimální odběr 10 kreditů = hodinová proxy, ne tier |
| 7 | Kotva „US federální zakázka 985 USD = 22 655 Kč“ jako důkaz, že nejsme drazí | **Vyřazeno** z argumentace | Srovnává federální zakázku s českým e-shopem bez PPP korekce |
| 8 | Softmedia sGTM 1 000 / 2 500–4 000 / 6 000–8 000 Kč | **Vyřazeno** (`refuted`) | Článek přepsán 2026-06-10, žádná cena, Wayback bez snapshotu |
| 9 | Dataset „352 řádků“ bez příznaků | 749 řádků, z toho 685 `active`; 16 `refuted`, 12 `superseded`, 36 `duplicate`, 8 tříd `scope_class` | Bez toho se do mediánu počítaly federální zakázky, názory z fór a PPC paušály |
| 10 | Konkurenční tlak „ošetřen (SaaS 1 600–5 200 Kč)“ | Přibyly tři přímé tlaky: Signals Bar 2 500 Kč **se stejným sdělením**, ga4monitor 667 Kč, RDY.cz 10 000 Kč | Nález 2. kola |

Ceny se nezměnily. Změnilo se **to, čím se dají obhájit** – a status pásem: z „tržního nálezu“ na
„rozhodnutí opřené o evropský vzorek, domácí kotvy a marži“.
