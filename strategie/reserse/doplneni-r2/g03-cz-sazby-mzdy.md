# Doplnění mezery G03 – české sazby a mzdy (2. kolo)

Stav: hotovo, 2. kolo, datum přístupu 2026-09-04.
Data: `data/fragments/r2-g03-pricing.csv` (54 řádků, PG3-001…054), `data/fragments/r2-g03-evidence.csv` (31 řádků, EG3-001…031, phase=11).
Metoda: přímé WebFetch/curl známých i nově dohledaných URL, parsování strukturovaných dat (schema.org JobPosting na StartupJobs,
tabulka MZS-M8r z ISPV), 2 dotazy WebSearch. Kurzy nepoužity (vše CZK). Přepočty: hrubá mzda × 1,34 (odvody zaměstnavatele),
hodinová sazba × 10 h jako `price_czk_month` proxy.

**Mezera, kterou tenhle dokument zavírá** (z `01-trh-cz.md` § 5): *„Mzdy webových analytiků: žádný CZ inzerát s GA4/GTM neuvedl mzdu;
Platy.cz nemá veřejnou stránku pozice; StartupJobs a Jobs.cz detaily se načítají JS. Použity agregáty Jooble/PrůměrnéPlaty
(nadhodnocují/podhodnocují).“*

---

## 1. Shrnutí (10 bodů)

1. **Existuje oficiální mzdová kotva a je lepší než všechno, co použilo 1. kolo.** ISPV by TREXIMA, mzdová sféra ČR za rok 2025
   (kvalita odhadu A): CZ-ISCO **24311 Specialisté v oblasti marketingu — medián 70 081 Kč hrubého**, kvartily 51 938 / 96 949 Kč,
   N = 11 690 osob, placená doba 172,9 h/měs (EG3-028). Systémoví analytici (2511) mají medián 91 532 Kč.
2. **Platy.cz veřejné stránky pozic MÁ** – 1. kolo se mýlilo. Pozice „webový analytik“ v jejich číselníku neexistuje, nejbližší je
   **Specialista marketingových analýz 40 831 – 86 437 Kč** hrubého (10.–90. percentil), PPC specialista 37 869 – 74 931 Kč,
   SEO analytik 35 193 – 79 654 Kč (EG3-016).
3. **Našel jsem 9 konkrétních CZ inzerátů s uvedenou mzdou**, u 6 z nich i vyjmenované úkoly. Medián středů rozpětí je
   **70 000 Kč** – tedy přesně medián ISPV. Rozpětí od 42 tis. (přepočet z půlúvazku) po 90 tis. Kč.
4. **Ani jeden inzerát na čistou roli „webový analytik / web analytics specialist“ mzdu neuvádí.** Publicis Groupe (Senior webový
   analytik, EG3-010), BTL Medical (Web & Analytics Specialist, EG3-009), Alza.cz (Marketing Data Analyst, EG3-011),
   Ušetřeno.cz (Webový analytik a SEO specialista, EG3-012) – čtyři inzeráty, čtyřikrát „plat neuveden“. Mzdu uvádějí PPC
   a e-commerce role, kde je měření vedlejší dovednost. Zjištění 1. kola tedy **potvrzeno a kvantifikováno**: ze 72 relevantních
   inzerátů na StartupJobs uvádí `baseSalary` 29 (40 %), ale u tří ryze analytických nula ze tří (EG3-015).
5. **Nejsilnější nový cenový bod celého 2. kola: AKA (Asociace komunikačních agentur), průzkum hodinových sazeb duben 2026 –
   „Data Analyst / Data Scientist = 1 938,00 Kč/h“** (EG3-024). Je to **nejnižší sazba mezi všemi specializovanými rolemi tabulky** –
   pod Copywriterem (2 526), Social Media Managerem (2 558), UX Designerem (2 410) i Media Plannerem (2 672). Nezávislý přehled
   trhu Komora Plus 2026 uvádí „Data analytik přibližně 1 900 Kč“ (EG3-029) – shoda.
6. **Rozdíl junior vs. senior je menší, než se čeká.** Veřejný ceník per4mens: konzultace se specialistou od 1 450 Kč/h,
   konzultace s vedoucím oddělení od 2 500 Kč/h → **1,72×** (EG3-027). AKA 2018 (jediná tabulka, kde jsou obě úrovně):
   account manager 1 330 → 1 703 (1,28×), art director 1 544 → 1 886 (1,22×) (EG3-026). Ne 2–3×, jak se často předpokládá.
7. **Sleva za dlouhodobost je větší než příplatek za senioritu.** Václav Ráš: krátkodobá spolupráce 2 400 Kč/h,
   „Dlouhodobá spolupráce (více než 2 dny měsíčně) – 1.600 Kč / hod.“ → **−33 %** (EG3-023). To je zároveň upřesnění 1. kola,
   které uvádělo jen „13 000 Kč/MD“ (= 1 625 Kč/h, týž údaj jinak vyjádřený).
8. **7 nových freelance cenových bodů** (EG3-017…023; 6 hodinových sazeb + 1 veřejný měsíční retainer): 850 (Vojtěch Kaňa, „PPC specialista a webový analytik“), 1 000 (Jiří Novotný),
   1 500 (Denis Vysloužil), 1 600 (Ráš dlouhodobě), 2 100 (Petr Bechyně, „UX designér a webový analytik“, 20+ let praxe),
   2 500 Kč/h (Adam Švidek). Dva z nich sami nabízejí **měsíční paušál** jako alternativu k hodinovce – jinak v ČR raritní.
9. **Dva veřejné CZ ceníky, které 1. kolo minulo,** a oba mají měsíční tiery: per4mens (7 250 / 10 150 / 18 850 Kč/měs podle výše
   kreditu klienta, EG3-027) a Marketingový svět („Nastavení analytiky webu (o 10 stránkách): 6h – 7 500 Kč“ + „Měsíční správa
   kampaní 7h: 8 750 Kč“ při sazbě 1 250 Kč/h, EG3-030).
10. **Hodina agentury stojí 3,6× hodinu vlastního člověka, ale kupujete jich 5–20, ne 173.** Medián ISPV 70 081 Kč × 1,34 odvody
    = 93 909 Kč celkových nákladů / 172,9 h = **543 Kč za hodinu in-house**. Proti agenturní sazbě 1 938 Kč/h je to poměr 3,57.
    Zlom nastává na **48,5 hodinách měsíčně** – pod tím je retainer levnější než člověk.

---

## 2. FAKTA

### 2.1 CZ inzeráty s uvedenou mzdou a s vyjmenovanými úkoly

Sloupec „Úkoly, které retainer nahrazuje“ = doslovné položky náplně práce, které spadají do taxonomie `00-taxonomie-sluzby.md`.

| # | Firma / pozice | Mzda (doslova) | Typ vztahu | Úkoly, které retainer nahrazuje (doslova) | Kódy | Evidence |
|---|---|---|---|---|---|---|
| 1 | **Marketup s.r.o.** – Medior Reporting Specialist & Data Analyst (digitální agentura, 70+ lidí, klienti XXXLutz, E.ON, AXA) | 60 000 – 80 000 Kč | IČO | „Budeš „ownerem“ našich reportingových řešení“; „**Datová integrace a QA**: Propojování dat z reklamních systémů se CRM daty. Zároveň budeš tím, kdo **dokáže rychle odhalit anomálie a najít chybu v datech**“; „**Automatizace**: Hledání cest, jak eliminovat manuální práci“; „**Konzultace s klienty**: … prezentovat jim výsledky a řešit s nimi konkrétní reporty přímo na schůzkách“; „Orientace v cloudu … **především v BigQuery**“ | E3,E5,F1,F3,G1,G7,H3 | EG3-001 |
| 2 | **kalkulator.cz, s.r.o.** – Senior Performance Marketing Specialist | 70 000 – 90 000 Kč | IČO | „Alokaci a optimalizaci rozpočtů v řádu **milionů Kč měsíčně** s důrazem na ROAS … **s využitím Google predikcí a dat z GA4**“; „Testovat, měřit a posouvat – GA4, Google Ads, Meta Ads“ | C1,D1,D2,F3,I1 | EG3-002 |
| 3 | **Media:list s.r.o.** – PPC Specialista v digitální agentuře | 50 000 – 70 000 Kč (Jobs.cz) / 50 000 – 75 000 Kč (StartupJobs) | HPP, plný úvazek | „Analýzu dat a chování zákazníků a jejich převod do konkrétních doporučení“; „**Umíš pracovat s GA4, GTM** a všemi nástroji, které k tvoření kampaní potřebuješ“; „**Když něco nefunguje, jdeš po příčině**“; min. 5 let praxe | A2,C1,D1,D3,F3,G7 | EG3-003, EG3-007 |
| 4 | **EUPHORIA s.r.o.** – E-commerce & Online Marketing Specialist | 60 000 – 70 000 CZK | neuveden | „Kontrolu funkčnosti shopů“; „**Sledování návštěvnosti, konverzí, tržeb a návratnosti kampaní**“; „**Pravidelný jednoduchý reporting výsledků** a návrhy konkrétních kroků“; + správa e-shopů, promo akce, zákaznická komunikace, PPC, e-mailing, SEO | C1,D1,D4,F3,H3 | EG3-004 |
| 5 | **BRASTY GROUP s.r.o.** – Specialista online marketingu a správy eshopů (e-shop, 1000+ objednávek denně, 14 zemí) | 60 000 – 80 000 Kč/měsíc | pracovní smlouva **nebo** IČO | „**sledovat návštěvnost stránek, chování zákazníků** a navrhovat zlepšení“; „**vyhodnocovat a reportovat výsledky jednotlivých kampaní**“; „**znalost Google Analytics**“; zařazení mj. „marketingový analytik“ | C1,D1,D3,F3 | EG3-005 |
| 6 | **Systedo Marketing** – PPC specialist medior/senior (digitální agentura) | 60 000 – 80 000 Kč | plný úvazek | „**Analýza výkonnosti v Google Analytics** a jednotlivých reklamních platformách“; „**Práce s Google Tag Managerem** a Google Ads Editorem“; „Práce se **Shoptetem, Shopify** a dalšími e-commerce administracemi dle potřeby“ | A2,C1,D1,D3 | EG3-008 |
| 7 | **ASSIST spol. s r.o.** – BI Analyst / Developer (Looker & Data Platform) | 54 000 Kč (pevně) | – | reporting nad Lookerem a datovou platformou | F1 | EG3-013 |
| 8 | **ASSIST spol. s r.o.** – BI/Data Engineer | 60 000 – 80 000 Kč | – | datová vrstva | E3,E5 | EG3-014 |
| 9 | **Metodický kabinet digitálního vzdělávání z.s.** – Správce e-shopu se znalostí e-commerce nástrojů (½ úvazek, OZP) | 17 000 – 25 000 Kč | zkrácený úvazek | správa e-shopu vč. Google Analytics | C1 | EG3-006 |

**Medián středů rozpětí (9 inzerátů, přepočteno na plný úvazek): 70 000 Kč.**

### 2.2 CZ inzeráty na čistou roli „webový analytik“ – mzda NEUVEDENA

| Firma / pozice | Mzda | Nejcennější doslovné znění náplně | Evidence |
|---|---|---|---|
| **Publicis Groupe** – Senior webový analytik | neuvedena | „Jsme **analytické oddělení největší české digitální mediálky** … **Nastavujeme měření webů** či mobilních aplikací … **Praktické aplikace nových technologických přístupů k měření webů jako jsou server-side tagging**, či modelování a predikce dat. … Práce s **GTM, GA4 a Adobe Analytics**. … **CRO a monitorování dlouhodobých výsledků** napříč různými druhy klientů. … Hledáme spolupráci na plný úvazek, HPP.“ | EG3-010 |
| **BTL Medical** – Web & Analytics Specialist (desítky webů, 90+ poboček) | neuvedena | „**Webová analytika a měření: Nastavíš a budeš spravovat měření pomocí GA4, Google Tag Manageru** a dalších nástrojů.“ · „**Propojování webu a marketingu** … zajistíš, že vše bude správně změřené.“ · „Znalost JavaScriptu, DevTools a orientace v DOM.“ · „Zkušenost s Looker Studio.“ | EG3-009 |
| **Alza.cz** – Marketing Data Analyst | neuvedena | „V našem **Data & Automation týmu** interpretujeme data tak, aby měl marketing jasný směr. Pracujeme s MS SQL, Google Cloudem, OLAP kostkami i Google Analytics.“ | EG3-011 |
| **Ušetřeno.cz s.r.o.** – Webový analytik a SEO specialista | „Plat neuveden“ | „rozumíš webové analytice a máš **zkušenosti se správou analytických nástrojů (Power BI, GA4, GTM apod.)**“ · „**pravidelně reportuješ výsledky a dokážeš identifikovat příležitosti i rizika**“ · „**vlastnictví analytiky, reportingu a SEO napříč našimi 3 weby**“ | EG3-012 |

Vlastní sken strukturovaných dat `JobPosting` (schema.org) na StartupJobs.cz: **72 inzerátů** z oborů analytika / data / marketing / PPC / SEO / e-commerce, **29 s `baseSalary` (40 %), 43 bez**. U tří ryze analytických (Publicis, BTL, Alza) mzda **0 ze 3** (EG3-015).

### 2.3 Mzdové agregáty – ověřeno

**ISPV by TREXIMA, mzdová sféra ČR, rok 2025, tabulka MZS-M8r** (výsledky ke dni 25. 3. 2026, kvalita odhadu A), hrubá měsíční mzda:

| CZ-ISCO | Kategorie | N (tis. osob) | 1. kvartil | **Medián** | 3. kvartil | 9. decil | Průměr | Celkové náklady při mediánu (×1,34) |
|---|---|---|---|---|---|---|---|---|
| 33391 | Pracovníci v oblasti marketingu, propagace a reklamy | 9,61 | – | **43 334** | – | – | 48 838 | 58 068 |
| 24312 | Specialisté v oblasti propagace a reklamy | 1,52 | 51 812 | **66 930** | 87 497 | 112 664 | 74 243 | 89 686 |
| 2431 | Specialisté v oblasti reklamy a marketingu, průzkumu trhu | 14,34 | 52 065 | **69 982** | 95 932 | 131 981 | 81 412 | 93 776 |
| **24311** | **Specialisté v oblasti marketingu** | **11,69** | **51 938** | **70 081** | **96 949** | **133 616** | **81 988** | **93 909** |
| 24313 | Specialisté průzkumu trhu | 0,92 | 55 916 | **78 716** | 103 092 | 138 918 | 88 369 | 105 479 |
| 2521 | Návrháři a správci databází | 1,69 | 63 485 | **85 937** | 118 617 | 149 592 | 94 463 | 115 156 |
| 2511 | Systémoví analytici | 13,23 | 68 382 | **91 532** | 118 359 | 152 122 | 99 266 | 122 653 |
| 12213 | Řídící pracovníci v oblasti marketingu | 2,78 | 71 544 | **108 246** | 157 762 | 219 736 | 130 029 | 145 050 |

Placená doba: 172,9 h/měs (24311), 172,5 h/měs (2511). Zdroj: <https://www.ispv.cz/archiv/CR_254_MZS_M8r.xlsx> (EG3-028).

**Platy.cz (Paylab), veřejné stránky pozic** – „80 % lidí vydělává“ (10.–90. percentil, hrubého):

| Pozice | Rozpětí | Střed | Střed × 1,34 |
|---|---|---|---|
| SEO analytik | 35 193 – 79 654 Kč | 57 424 | 76 948 |
| Digital marketing specialist | 37 862 – 76 134 Kč | 56 998 | 76 377 |
| PPC specialista | 37 869 – 74 931 Kč | 56 400 | 75 576 |
| **Specialista marketingových analýz** | **40 831 – 86 437 Kč** | **63 634** | **85 270** |
| Databázový analytik | 46 627 – 103 089 Kč | 74 858 | 100 310 |
| Digital marketing manager | 47 861 – 114 826 Kč | 81 344 | 108 999 |
| IT Business Analyst | 54 353 – 113 784 Kč | 84 069 | 112 652 |
| Data scientist | 56 106 – 124 399 Kč | 90 253 | 120 938 |

Platy.cz nepublikuje medián ani velikost vzorku (EG3-016). **Pozice „webový analytik“ v číselníku Platy.cz neexistuje.**

### 2.4 Hodinové sazby – agentury

**AKA (Asociace komunikačních agentur), průzkum hodinových sazeb, zveřejněno 27. 4. 2026** (EG3-024):

| Role | Sazba 2026 | Role | Sazba 2026 |
|---|---|---|---|
| CFO / Finance Director | 5 342,98 Kč | Digital Strategist | 2 685,45 Kč |
| Client Service Director | 4 878,12 Kč | Media Planner | 2 672,00 Kč |
| Creative Director | 4 934,15 Kč | Account Manager | 2 587,79 Kč |
| Strategic planner (senior) | 4 592,16 Kč | Social Media Manager | 2 558,48 Kč |
| Research/insight director | 3 752,00 Kč | Digital Designer | 2 530,85 Kč |
| Art Director | 3 109,73 Kč | Copywriter | 2 525,60 Kč |
| Research/insight manager | 2 438,70 Kč | UX Designer | 2 410,33 Kč |
| Accountant | 2 112,99 Kč | Graphic Designer | 2 090,61 Kč |
| Programmer | 2 042,52 Kč | **Data Analyst / Data Scientist** | **1 938,00 Kč** |
| Producer | 1 912,56 Kč | Content Manager | 1 701,42 Kč |
| Account Executive | 1 686,48 Kč | Traffic Manager | 1 616,77 Kč |
| IT manager | 1 371,40 Kč | Coder | 1 266,62 Kč |
| DTP operator | 1 265,38 Kč | Assistant | 1 061,90 Kč |

Komentář AKA: *„Hodinové [sazby] v tuzemských komunikačních agenturách meziročně vzrostly přibližně o 6 %. … Nejčastěji se růst
hodinových sazeb podle šetření pohyboval v pásmu 5 až 10 %. Současně ale platí, že přibližně čtvrtina sledovaných pozic zůstala
meziročně beze změny. … Růst sazeb se nejvýrazněji projevil u specializovaných rolí v médiích a výkonnostním marketingu, zejména
v oblastech PPC a RTB“* (EG3-025). Srovnání s AKA 2017/2018: Data analyst **1 400 Kč → 1 938 Kč, tj. +38 % za 8 let** (EG3-026).

**Junior vs. senior – veřejné ceníky:**

| Zdroj | Junior / specialista | Senior / vedoucí | Poměr | Evidence |
|---|---|---|---|---|
| per4mens.cz (ceník) | konzultace se specialistou **od 1 450 Kč/h** | konzultace s vedoucím oddělení **od 2 500 Kč/h** | **1,72×** | EG3-027 |
| AKA 2018 – account manager | 1 330 Kč | 1 703 Kč | 1,28× | EG3-026 |
| AKA 2018 – art director | 1 544 Kč | 1 886 Kč | 1,22× | EG3-026 |
| Václav Ráš (sleva za objem, ne za senioritu) | dlouhodobě **1 600 Kč/h** | krátkodobě **2 400 Kč/h** | 0,67× (−33 %) | EG3-023 |

**Veřejné CZ ceníky s měsíčními tiery (nové, 1. kolo je minulo):**

| Poskytovatel | Položka | Cena | Poznámka | Evidence |
|---|---|---|---|---|
| per4mens.cz | Měsíční správa – kredit do cca 40 tis. Kč/měs | od **7 250 Kč/měs** | tier podle výše kreditu klienta, ne podle rozsahu práce | EG3-027 |
| per4mens.cz | Měsíční správa – kredit do cca 100 tis. Kč/měs | od **10 150 Kč/měs** | | EG3-027 |
| per4mens.cz | Kompletní správa online marketingu – kredit od cca 100 tis. Kč/měs | od **18 850 Kč/měs** | | EG3-027 |
| per4mens.cz | „Analytika a měření – Nastavení měření konverzí a následné testování“ | od **2 900 Kč / 2 h** | = sazba specialisty 1 450 Kč/h, ne manažera | EG3-027 |
| Marketingový svět | „Nastavení analytiky webu (o 10 stránkách): 6h“ (GTM + GA4 + GSC + konverzní a remarketingové kódy) | **7 500 Kč** jednorázově | sazba 1 250 Kč/h | EG3-030 |
| Marketingový svět | „Měsíční správa kampaní 7h“ | **8 750 Kč/měs** | uvnitř 1–1,5 h na komunikaci a reporting | EG3-030 |
| Komora Plus (přehled trhu 2026) | marketingová agentura – základní spolupráce | **30 000–80 000 Kč/měs** | plný servis, ne správa měření | EG3-029 |
| Komora Plus | marketingová agentura – růstový režim | **80 000–250 000 Kč/měs** | | EG3-029 |

### 2.5 Hodinové sazby – freelanceři (nové body 2. kola)

| Freelancer | Profilace (doslova z titulku profilu) | Sazba | Zmiňuje měsíční paušál? | Evidence |
|---|---|---|---|---|
| Vojtěch Kaňa | „PPC specialista a **webový analytik**“ | **850 Kč/h** | ano – „případně se můžeme domluvit na individuálním měsíčním paušálu“ | EG3-018 |
| Jiří Novotný | „online marketér … nastavení Google Analytics, měření a reporting“ | **1 000 Kč/h** | ano – „Jsem nakloněn i spolupráci formou měsíčního paušálu“ | EG3-019 |
| Denis Vysloužil | „PPC specialista, konzultant a stratég“, 9+ let | **1 500 Kč/h** | ne | EG3-020 |
| Václav Ráš | analytik (GTM, GA4, BigQuery) | **1 600 Kč/h** dlouhodobě / 2 400 Kč/h krátkodobě | částečně (min. 2 MD/měs = 25 600 Kč) | EG3-023 |
| Petr Bechyně | „UX designér a **webový analytik**“, 20+ let praxe | **2 100 Kč/h + DPH** | ne | EG3-017 |
| Adam Švidek | „IT konzultant, business analytik“ – „pro konzultace, **analytické práce** či ad-hoc podporu“ | **2 500 Kč/h** | ne | EG3-021 |
| Ladislav Žatečka | „výkonnostní marketér“ | „**Správa reklamy – od 15 000 Kč měsíčně**“ (+ Rozjezd od 30 000 Kč) | **ano, veřejný retainer** | EG3-022 |

Marketplace (Webtrh, v 1. kole nedostupný – nyní otevřený): kategorie „Služby / PPC reklama“ obsahuje **výhradně jednorázové giga**,
žádný měsíční paušál. „Audit účtu Google Ads – Jiří Novotný – 2 843,50 Kč“, „Audit účtu Seznam Sklik – 2 178 Kč“,
„PPC audit a strategie – Stransky Milan – 9 680 Kč“ (EG3-031).

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Kotva „in-house analytik = 88 tis. Kč měsíčních nákladů“ → **potvrzena, ale je konzervativní; správně je 86–123 tis.**

1. kolo tuto kotvu odvodilo z agregátů Jooble (81 943 Kč) a PrůměrnéPlaty (66 266 Kč) a nazvalo ji slabinou. Teď má tři nezávislé opory:

| Zdroj | Hrubá mzda | × 1,34 = celkové náklady |
|---|---|---|
| Platy.cz – Specialista marketingových analýz (střed 10.–90. percentilu) | 63 634 Kč | **85 270 Kč** |
| **ISPV 24311 Specialisté v oblasti marketingu – medián** | **70 081 Kč** | **93 909 Kč** |
| Medián 9 nalezených inzerátů (střed rozpětí) | 70 000 Kč | 93 800 Kč |
| ISPV 24311 – 3. kvartil | 96 949 Kč | 129 912 Kč |
| ISPV 2511 Systémoví analytici – medián | 91 532 Kč | **122 653 Kč** |

**Doporučená formulace místo „88 tis.“:** *„Vlastní člověk na měření stojí 86–94 tis. Kč měsíčně, pokud vezmete marketingového
specialistu (medián ISPV 70 081 Kč + odvody). Skutečný analytik (CZ-ISCO 2511) stojí 123 tis. Kč.“* Číslo je tvrdší, protože
pochází z oficiálního mzdového šetření s kvalitou odhadu A a vzorkem 11 690 osob, ne z agregátu inzerátů.

**Nová odvozená čísla, která v 1. kole nebyla:**
- **Hodina in-house člověka = 543 Kč** (93 909 / 172,9 h placené doby). U systémového analytika 711 Kč/h.
- **Agenturní sazba je 3,57× hodina vlastního člověka** (1 938 / 543). To je poctivé číslo pro obhajobu ceny – prodáváte
  hodinu 3,6× dráž, ale zákazník jich kupuje 5–20 místo 173.
- **Bod zlomu: 48,5 hodiny měsíčně.** Pod ním je retainer levnější než zaměstnanec (93 909 / 1 938). Všechny tři navržené tiery
  jsou hluboko pod ním, takže argument „levnější než člověk“ platí bez výhrad.

### 3.2 Cenová pásma tierů 8 900 / 19 900 / 39 000 Kč → **potvrzena, sedí na tržní sazbu**

Při agenturní sazbě AKA pro datového analytika (1 938 Kč/h) tiery odpovídají:

| Tier | Cena | = hodin za AKA sazbu | = % nákladů in-house člověka (93 909 Kč) | Kontrola proti H3 (5–20 h/měs) |
|---|---|---|---|---|
| Hlídání | 8 900 Kč | **4,6 h** | 9,5 % | těsně pod dolní hranicí |
| Správa | 19 900 Kč | **10,3 h** | 21,2 % | uprostřed |
| Datová správa | 39 000 Kč | **20,1 h** | 41,5 % | přesně na horní hranici |

Tři nezávislé kontroly ze 2. kola potvrzují, že pásmo je správné:
- **per4mens** prodává měsíční správu za 7 250 / 10 150 / 18 850 Kč – tedy tier „Hlídání“ (8 900) sedí mezi jejich první a druhý stupeň.
- **Marketingový svět** prodává „Měsíční správa kampaní 7h“ za 8 750 Kč – prakticky totožná cena jako tier „Hlídání“ za 7 hodin práce.
- **Ladislav Žatečka** má veřejný freelance retainer „od 15 000 Kč měsíčně“ – mezi tiery Hlídání a Správa.

**Riziko, které data odhalují:** tier „Datová správa“ 39 000 Kč = 20 h měsíčně za agenturní sazbu. To je horní hranice H3
a zároveň to je 42 % nákladů vlastního člověka. Nad 39 tis. Kč začíná klient legitimně počítat s vlastním úvazkem
(od 48,5 h / cca 94 tis. Kč je in-house levnější). **Doporučení: 39 000 Kč držet jako strop lidské správy a nad ním prodávat
projekty, ne vyšší paušál.**

### 3.3 H3 (ceny se odvozují od hodinových sazeb 1 200–2 500 Kč/h; retainer 5–20 h/měs) → **potvrzena přesně**

Nová data: AKA 1 938, Komora Plus 1 900, per4mens 1 450 / 2 500, Marketingový svět 1 250, freelanceři 850 / 1 000 / 1 500 /
1 600 / 2 100 / 2 500. Medián nových sazeb pro lidi, kteří dělají měření: **1 600 Kč/h** (11 hodnot: 850 / 1 000 / 1 250 / 1 450 / 1 500 / 1 600 / 1 900 / 1 938 / 2 100 / 2 500 / 2 500). Rozsah retaineru: Marketingový svět 7 h,
Webtrh nabídka „PPC & RTB Specialist na parciální úvazek / externí spolupráci (5–10 h týdně)“. H3 lze uzavřít jako potvrzenou.

### 3.4 H2 (pain je „data se tiše rozbila“) → **nepřímo posílena**

Nejde o pain research, ale inzeráty říkají totéž z druhé strany. Marketup hledá člověka, který „**dokáže rychle odhalit anomálie
a najít chybu v datech**“ – detekce chyby v datech je vypsaná jako samostatná odrážka náplně práce agentury se 70 zaměstnanci
(EG3-001). Media:list chce PPC specialistu, o kterém platí „**když něco nefunguje, jdeš po příčině**“ (EG3-003). BTL Medical
hledá člověka, který „**zajistí, že vše bude správně změřené**“ (EG3-009). To jsou tři nezávislé firmy, které si tuhle práci
**kupují jako úvazek**, protože ji nikdo neprodává jako službu. Přesně to je díra, do které míří nabídka DataLayer.cz.

### 3.5 H1 (BQ-first) → **spíše oslabena, potvrzuje dvouúrovňový model**

Z 9 inzerátů s mzdou zmiňuje BigQuery / GCP jen jeden (Marketup, jako požadavek „Orientace v cloudu“). Ostatní pracují s GA4,
GTM, Looker Studiem, Sklikem a Shoptetem. Alza.cz má vlastní tým Data & Automation (MS SQL, Google Cloud) – tj. největší CZ e-shop
BigQuery vrstvu řeší in-house a retainer si nekoupí. **Segment, kde retainer dává smysl, je ten bez BQ a bez datového týmu** –
tam je jediný člověk, který dělá zároveň e-shop, PPC, e-mailing, SEO a reporting (EUPHORIA, BRASTY). Data z 2. kola tedy podporují
BigQuery jako **osu vyššího tieru**, ne jako podmínku vstupu.

### 3.6 H5 (část hodnoty je nahraditelná nástrojem) → **posílena z nečekané strany**

AKA řadí datového analytika na **nejnižší sazbu ze všech specializovaných rolí** (1 938 Kč/h – pod copywritera, social media
manažera i UX designéra). Trh tedy datovou práci vnímá jako **komoditu blízkou automatizovatelnému výkonu**. Zároveň AKA píše,
že *„sazby u rolí s rozšířenými AI kompetencemi se častěji pohybují ve středních a vyšších pásmech, zvlášť u strategických či
datových specializací“*. **Praktický důsledek pro nabídku: neprodávat hodiny datové práce (trh je oceňuje nejlevněji ze všech
specializací), ale prodávat výsledek – „víme to za 24 hodin a řekneme, kolik konverzí chybělo“.** Pokud DataLayer.cz zdůvodní
cenu hodinami, dostane se na 1 938 Kč/h; pokud ji zdůvodní zabráněnou škodou, je hodinová sazba irelevantní.

### 3.7 Vedlejší zjištění použitelná v obchodní argumentaci

- **Růst cen o 5–10 % ročně je na trhu obhájitelný** – AKA měří +6 % meziročně při inflaci ve službách 4,7 % (EG3-025).
  Do smlouvy patří klauzule o roční indexaci.
- **Sleva za dlouhodobost −33 % je v ČR precedens** (Ráš). Rozdíl mezi „ad-hoc oprava“ a „paušál“ může být v ceníku
  vyjádřen právě takto: ad-hoc 2 400 Kč/h, v paušálu 1 600 Kč/h.
- **Rozdíl junior/senior je jen 1,2–1,7×.** Argument „u nás dělá senior“ neospravedlní dvojnásobnou cenu; ospravedlní ji
  maximálně o 70 % vyšší cenu, a to jen když je senior pojmenovaný.
- **Většina CZ inzerátů v oboru je na IČO** (Marketup, kalkulator.cz, BRASTY volitelně, Systedo částečně). To znamená, že
  konkurentem retaineru není zaměstnanec s odvody, ale **externista na IČO za 60–80 tis. Kč**, který je k dispozici 173 h měsíčně.
  Proti němu neobstojí argument „levnější než člověk“, obstojí jen argument „vy nepotřebujete 173 hodin, potřebujete hlídání“.

---

## 4. Mezery, které zůstávají

- **Glassdoor CZ** – HTTP 403 (blokováno na úrovni proxy i UA). Nemám tedy nezávislý zahraniční agregátor pro CZ mzdy.
- **Jobs.cz nemá sekci „platy“** – `/platy/` i `/prace/platy/` vrací HTTP 404. Bod 2 zadání („Jobs.cz platy“) je tedy
  neproveditelný, ne nedohledaný.
- **PrůměrnéPlaty.cz nemá stránku pozice „webový analytik“** (HTTP 404 na `/pozice/webovy-analytik`). Údaj 66 266 Kč z 1. kola
  je za obecného „analytika“ a měl by se z argumentace vyřadit ve prospěch ISPV.
- **Platy.cz nepublikuje medián ani velikost vzorku** – jen 10. a 90. percentil. Pro srovnávání s ISPV je proto nutné počítat
  se středem pásma, což je hrubší.
- **Cocuma.cz** – v přehledu nabídek mzdu nezobrazuje; k ověření by bylo nutné otevřít desítky detailů. Neprošlo.
- **Welcome to the Jungle CZ, Indeed.cz, LinkedIn Jobs, Techloop** – neprověřeno (rozpočet). Techloop a LinkedIn jsou přitom
  jediné dva kanály, kde by CZ inzerát na webového analytika mohl mít uvedenou mzdu.
- **Freelance.cz** – katalog profilů sazby nezobrazuje (0 nálezů na řetězec „Kč“ v kategorii Digitální marketing).
- **Navolnenoze.cz** – prohledáno 37 profilů z 8 dotazů; sazbu veřejně uvádí jen 9 z nich. Zbytek má ceník za přihlášením
  nebo „na dotaz“. Vzorek freelance sazeb tedy zůstává selektivní (kdo cenu zveřejní, bývá jistější si sebou).
- **AKA průzkum 2026 je dostupný jen zprostředkovaně přes Médiář**, primární publikaci AKA jsem neotevíral; čísla jsou citována
  z článku, ne z originálu. Před externím použitím ověřit u AKA.
- **Chybí CZ ceník, který by rozlišoval junior/senior explicitně u analytické role.** per4mens rozlišuje „specialista vs. vedoucí
  oddělení“ obecně, AKA rozlišuje jen u account managementu a kreativy (a jen v datech z roku 2018).
- **Není zjištěno, kolik hodin měsíčně reálně spotřebuje in-house analytik na samotné měření** (vs. reporting, SEO, PPC).
  Všechny nalezené inzeráty jsou slité role, takže „543 Kč/h in-house“ je cena za hodinu člověka, ne za hodinu měření.
