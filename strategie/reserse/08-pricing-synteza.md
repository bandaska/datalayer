# Fáze 9 – Syntéza pricingu: kolik má stát měsíční správa měření

Stav: hotovo (verze 1, 2026-09-04). Zdroj: `data/pricing-dataset.csv` (352 řádků, 265 s číselnou cenou CZK/měs), tabulky
generuje `data/analyze-pricing.py`. Kurzy použité agenty: 1 EUR = 25, 1 USD = 23, 1 GBP = 29, 1 PLN = 5,8 CZK.
Hodinové sazby přepočteny jako sazba × 10 h („proxy 10 h“). Mzdy jako hrubá mzda × 1,34.

---

## 1. Shrnutí – odpověď na otázku „tisíce, 5, 10 nebo 15 tisíc?“

1. **Trh už má cenu, jen ji neříká nahlas.** Z 352 cenových bodů je veřejná měsíční cena za *lidskou* správu měření
   (retainer / fixní balíček / tiery od agentur a freelancerů) jen u 78 řádků ze všech regionů; v ČR u 4 subjektů. Kde cena
   je, sedí do úzkého pásma.
2. **Lidská správa bez BigQuery se v ČR, SK a EU prodává za medián ≈ 8 000–10 000 Kč/měs, horní kvartil 16 000–23 000 Kč.**
   CZ: median 10 000 (Q1 4 700, Q3 20 700, n = 15). SK: 9 700 (Q3 18 100). EU bez BQ: 8 100 (Q3 16 300). Tři regiony, tři
   nezávislé sady zdrojů, stejný výsledek.
3. **Správa s BigQuery je 3,5–5× dražší než bez ní**, kde existuje: EU BQ tier median 45 000 vs. 8 100 bez BQ; US 178 000 vs.
   48 000. Jediný veřejný evropský BQ bod je Amplio Managed od 1 800 € (45 000 Kč).
4. **Hodinová sazba × hodiny dává totéž.** CZ specialisté 1 150–2 400 Kč/h; 5 h = 6–12 tis., 10 h = 12–24 tis., 20 h = 23–48 tis.
   Veřejné CZ body leží přesně tam: 2 500 (údržba reportu), 9 250 (od), 18 500 (běžně), 26 000 (≥ 2 MD), 21–40 tis. (pásmo).
5. **Odpověď**: měsíční správa měření **nemá stát „tisíce“** (pod 5 000 Kč se prodává jen sGTM hosting a SaaS bez člověka) a
   **nemá stát 15 000+ bez BigQuery nebo bez vysokých hodin** (klient to porovná s PPC správou 8–30 tis. a in-house 1/8 úvazku).
   Fér pásma pro DataLayer.cz: **vstupní 8–10 tis. Kč**, **standardní 18–25 tis. Kč**, **BigQuery/datový 35–45 tis. Kč**;
   sGTM hosting průchozím způsobem zvlášť. Odvození níže.

---

## 2. FAKTA

### 2.1 Rozpětí podle regionu a modelu (CZK/měs)

**Jen lidská správa** – měsíční retainer / fixní balíček / tiery od agentur a freelancerů (bez SaaS, mezd, hodinových proxy):

| Region | n | min | Q1 | median | Q3 | max | Poznámka |
|---|---|---|---|---|---|---|---|
| CZ | 15 | 800 | 4 700 | **10 000** | 20 700 | 47 500 | min = sGTM produkt DataPlus; max = pásmo formuláře DA |
| SK | 16 | 3 750 | 8 750 | **9 700** | 18 100 | 63 000 | DASE min 700 € = 17 500; PPC správa s kontrolou měření 7 500–20 000 |
| EU | 22 | 4 350 | 6 400 | **10 600** | 22 800 | 50 750 | LEMONTEC 5 000, Webanalist 6 250, Manids 10–27k, Amplio 17,5–45k |
| US | 23 | 6 800 | 35 000 | **69 000** | 166 750 | 345 000 | jen struktura; SMB 500–3 800 USD |

**Lidská správa × BigQuery:**

| Region / BQ | n | median | Q3 | Poměr BQ : bez BQ |
|---|---|---|---|---|
| CZ bez BQ | 14 | 9 800 | 18 900 | – (CZ BQ tier veřejně neexistuje; Ráš ≥ 26 000 s BQ v základu) |
| SK bez BQ | 15 | 9 400 | 16 900 | – |
| EU bez BQ | 18 | 8 100 | 16 300 | **5,5×** |
| EU s BQ (volitelně/vyšší tier) | 3 | 45 000 | 47 900 | |
| US bez BQ | 15 | 48 300 | 63 300 | **3,7×** |
| US s BQ | 8 | 178 000 | 195 500 | |

**Hodinové sazby ×10 h (proxy):** CZ median 11 500 (Q1 8 000, Q3 20 000), SK 16 900, EU 27 800, US 28 600. Tj. CZ specialista
1 150–2 400 Kč/h, SK 65 €/h agentura, DE 85–139 €/h, US 100–300 USD/h.

**SaaS monitoring (nástroj bez člověka):** globální median 4 700 Kč/měs (Q1 2 000, Q3 9 900); SMB stack 1 600–5 200 Kč
(fáze 6 § 3b); CZ produkty 300–7 000 (DataPlus 800/1 500/3 000; Softmedia sGTM 1 000–8 000).

**In-house proxy (mzda × 1,34):** CZ median 88 000 Kč/měs (46 000–107 000), SK 63 000, PL 46 000. Firma velikosti agentury
hledá analytika na 20 h/měs externě (E2-050) → ochota ≈ 1/8 úvazku ≈ 11–14 tis. Kč/měs.

**Marketplace (Upwork/Fiverr/Jaspravim):** setup 10–60 USD/EUR jednorázově, GTM medián 30 USD/h; **měsíční maintenance gig
nenalezen** – poptávka na marketplace se formuluje jako jednorázová oprava, správu kupují firmy, které už mají spend a agenturu.

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

Tři nezávislé cesty musí dát podobný výsledek:

**A) Nákladová (hodiny × interní sazba 1 800 Kč/h + nástroje ≤ 1 500 Kč/klient):**

| Tier | Lidský čas / měs | Výpočet | Kč/měs |
|---|---|---|---|
| Vstupní (denní automat + triáž, měsíční QA, jednostránkový komentář, kvartální review) | 3–5 h | 5 400–9 000 + 1 500 | 7 000–10 500 |
| Standardní (+ QA po releasech, Ads/Meta konverze měsíčně, call, 3 h na změny, reakce další pracovní den) | 8–12 h | 14 400–21 600 + 1 500 | 16 000–23 000 |
| Datový/BQ (+ E1/E2, reconciliace po transaction_id, Dataform testy, anomálie, Slack, reakce 4 h, 5 h na změny) | 15–22 h | 27 000–39 600 + 2 500 | 30 000–42 000 |

**B) Tržní (veřejné body a kvartily):** vstupní = CZ/SK/EU median 8–10 tis. (Němec „od 9 250“, LEMONTEC 5 000, Manids Minimum
10 000); standardní = CZ Q3 a „běžná“ cena 18 500, DASE 17 500, Amplio Maintained 17,5–30k, Manids Aktiv 20–27k; datový = Amplio
Managed 45 000, DA pásmo 21–40 tis., Ráš ≥ 26 000 s BQ, poměr BQ:bezBQ 3,7–5,5× × 8–10 tis. = 30–50 tis.

**C) Kotvy klienta:** vstupní ≈ in-house 1/8 úvazku (11–14 tis.) mínus „nemusím řídit člověka“ → 8–10 tis. obhajitelné; standardní
≈ spodní až střední PPC správa (8–30 tis.) → 18–25 tis. obhajitelné, pokud je vidět dodávka; datový ≤ 1/2 in-house analytika
(44 tis.) → 35–45 tis. obhajitelné jen s BQ artefakty (reconciliace, historie, anomálie).

**Průnik A ∩ B ∩ C:**

| Tier | Doporučené pásmo | Doporučená cena k testu | Bez BQ / s BQ |
|---|---|---|---|
| Vstupní („Hlídání“) | 7 500–10 000 | **8 900 Kč/měs** | bez BQ (s BQ jen jako pasivní export bez SQL) |
| Standardní („Správa“) | 18 000–25 000 | **19 900 Kč/měs** | bez BQ; s BQ pouze E1 kontrola exportu |
| Datový („Datová správa“) | 35 000–45 000 | **39 000 Kč/měs** | vyžaduje BQ (a ideálně sGTM) |
| Enterprise / více značek | individuálně od 60 000 | – | BQ + sGTM + více domén |
| sGTM provoz (položka) | 1 500–6 000 podle trafficu + průchozí hosting | – | – |
| White-label pro agentury | −15 až −20 % při ≥ 3 klientech | – | – |

Ceny bez DPH. „9“ na konci odpovídá CZ konvenci (3 900 / 7 800 / 19 000 u MarketingPPC, 9 250 u Němce).

### 3.2 Proč ne níž a proč ne výš

- **Pod 7 500 Kč** nejde dodat nic víc než automat + kvartální kontrola (LEMONTEC model 199 €). Při 1 800 Kč/h to jsou < 3,5 h
  měsíčně včetně komentáře – nerentabilní, jakmile přijde jeden release. Navíc se cena potká s DataPlus/Softmedia (sGTM produkt
  800–3 000) a klient nerozliší kategorii.
- **Standardní nad 25 000 Kč bez BQ** klient srovná s PPC správou (8–30 tis.), kterou vnímá jako „hlavní“ službu, a s in-house
  1/4 úvazku (22 tis.). Němec drží 18 500 jako „nejběžnější“, DASE 17 500 min – to je strop trhu pro správu bez dat.
- **Datový tier pod 30 000 Kč** nepokryje 15+ h seniorní práce a signalizuje, že BQ vrstva „nic nestojí“; nad 45 000 se dostává k
  1/2 in-house analytika a klient začne zvažovat vlastního člověka (SK: „nad 1 000–1 500 € klient srovnává s částečným úvazkem“).

### 3.3 Rizika

| Riziko | Projev | Ošetření |
|---|---|---|
| Podhodnocení vstupního tieru | releasy a ad-hoc dotazy sežerou 8+ h za 8 900 | limit „změny nad 1 h měsíčně z hodinové sazby 1 900 Kč“; QA po releasu max 1×/měs ve vstupním tieru |
| Nadhodnocení standardu | klient vezme SaaS (2–5 tis.) + ad-hoc hodiny | ukázat artefakty (checklist, komentář, SLA), které SaaS neumí; H5 potvrzeno |
| „Monitoring“ jako název | klient si najde Metrics Watch za 79 USD | název „správa měření“, monitoring jako samozřejmá součást |
| Vazba na spend / PPC agenturu | správa zmizí v PPC fee | prodávat samostatně nebo white-label agenturám za pevnou cenu |
| Kurzové a mzdové posuny | EU/US kotvy zastarají | revize datasetu 1× ročně; CZ body sledovat průběžně |
| Malý vzorek CZ (15 lidských cen, 4 veřejné subjekty) | pásmo může být užší/širší | validační rozhovory (fáze 10.6) a testovací landing page s cenou |

## 4. DOPORUČENÍ

1. Zveřejnit **tři ceny** (8 900 / 19 900 / 39 000 Kč bez DPH) a „bez vazby, měsíční výpověď“ u vstupního a standardního tieru –
   transparentnost je v ČR diferenciátor (2 subjekty ze 45 mají cenu).
2. Osy tierů: **kadence + reakční doba + BigQuery hloubka**; hodiny jen jako limit na změny; traffic jen u sGTM položky.
3. Vstupní projekt (audit / oprava měření) prodávat zvlášť za 9–25 tis. Kč a **první měsíc správy započítat do onboardingu** –
   odpovídá poptávce „jednorázová oprava a pak paušál“ (E7-109) i DASE/Amplio modelu.
4. U klientů s Ads spendem > 50 000 Kč/měs argumentovat slepým spendem (fáze 7 pain 6): jeden týden výpadku konverzí = řádově
   měsíční cena standardního tieru.
5. Ceny **v Kč i EUR** (SK trh platí stejně, agentury ze SK přicházejí do Prahy).
6. Za 12 měsíců přepočítat dataset (skript `analyze-pricing.py`) a porovnat s reálnými uzavřenými smlouvami.

## 5. Mezery

- CZ lidských cen je 15 (z toho 4 veřejné subjekty + formulářová pásma) – pásmo je konzistentní se SK/EU, ale statisticky tenké.
- Žádný veřejný CZ BQ tier; poměr BQ:bezBQ převzat z EU/US.
- Kurzy jsou zaokrouhlené odhady agentů (25/23/29/5,8); při ±5 % kurzu se závěry nemění.
- Mzdové proxy CZ jen z agregátů (žádný inzerát s GA4/GTM neuvedl mzdu).
- Cena „31 200 Kč“ u RobertNemec.com neověřena (E2 § 5).
