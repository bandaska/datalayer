# K09 – Longitudinální řez cen a PPP korekce

Stav: hotovo (3. kolo, úkol D2 + D3 z `10-doplneni-a-overeni-r2.md` § 6).
**Datum přístupu ke všem zdrojům: 2026-09-06.**
Data: `strategie/data/fragments/r3-k09-evidence.csv` (54 řádků, `EK9-001`–`EK9-054`, `phase=12`).
Kurzy podle zadání: 1 EUR = 25 Kč, 1 USD = 23 Kč, 1 GBP = 29 Kč, 1 DKK = 3,35 Kč.

---

## 1. SHRNUTÍ

**Jednou větou: ceny za práci na měření v tomto oboru nesledují inflaci – jediná česká veřejná
cena stojí beze změny od února 2016, globální nástroje za detekci od roku 2022 zlevňují, a po korekci
na cenovou hladinu spadne evropský medián o třetinu, takže argument „jsme pod evropským mediánem“
u tieru 8 900 Kč přestává platit, zatímco tier 39 000 Kč poprvé dostává oporu – reálnou hodnotu
horního českého pásma z roku 2016.**

1. **RobertNemec.com má identickou cenovou větu od 10. února 2016 do 9. června 2026** (EK9-002, EK9-006):
   1 850 Kč/h a 9 250 / 18 500 / 31 200 Kč. Poslední změna proběhla mezi červnem 2014 a únorem 2016
   (8 750 → 9 250, +5,7 %). Celé české cenové pásmo tedy stojí na **desetiletém, neaktualizovaném ceníku**.
2. **Že jde o zastaralou stránku, a ne o plochý trh, dokazuje triangulace přes AKA:** hodinovka
   1 850 Kč byla v roce 2019 o 32 % **nad** průměrem AKA pro datového analytika (1 400 Kč) a v roce 2026
   je o 4,5 % **pod** ním (1 938 Kč) – EK9-035, EK9-037.
3. **Přepočteno na ceny roku 2025 českým indexem cen služeb (+62,3 % od 2016) by pásma
   RobertNemec zněla 15 009 / 30 018 / 50 625 Kč** (EK9-028). Navržený tier 39 000 Kč tedy leží
   o 23 % **pod** reálnou hodnotou horního českého pásma z roku 2016.
4. **Nástrojová vrstva zlevňuje.** Funnel −24,8 % u vstupu a −39,9 % u středního tieru (2022→2026),
   Trackingplan −16,7 %, Stape −15 %; ObservePoint veřejné ceny 599 / 1 999 USD zcela stáhl
   (EK9-007–EK9-011, EK9-015–EK9-017, EK9-022, EK9-023).
5. **Ale detekce v lidské podobě zdražuje.** MetricsWatch zvedl vstup z 29 na 49 USD (+69 %) a v roce 2026
   spustil **samostatný produkt „Alerts – Real-Time Data Monitoring“ za 99 a 299 USD měsíčně**
   (2 277 a 6 877 Kč) s desetiminutovou detekcí (EK9-014). To je nový cenový bod nad Signals Bar
   (2 500 Kč) i ga4monitor (667 Kč).
6. **Waaila (Cross Masters) je opačný případ a je český:** z „100–2 800 € měsíčně, ozvěte se“ (2021)
   na samoobslužných 19–129 USD (2024 i 2025). Vstupní cena spadla na 17 % původní hodnoty
   (EK9-050, EK9-051).
7. **Jediný evropský produktizovaný paušál na správu měření přežil 30 měsíců a rebranding agentury:**
   KlickImpuls spustil GA4 & GTM Sorglos-Paket v prosinci 2023 bez ceny, v květnu 2024 zveřejnil
   199 € a pod značkou LEMONTEC ho v květnu 2026 stále prodává za 199 € (EK9-039–EK9-042).
8. **Po PPP korekci na českou cenovou hladinu klesne evropský vzorek o třetinu:** medián všech
   měsíčních evropských bodů z 11 750 na **8 463 Kč**, po subjektech z 11 062 na **6 990 Kč**.
   Tier 8 900 Kč je tedy **nad** oběma korigovanými mediány, ne pod nimi.
9. **České mzdy a náklady práce naopak rostly prudce:** medián systémového analytika podle ISPV
   61 774 (2019) → 91 532 Kč (2025), +48,2 %; náklady práce v českém ICT +79,8 % mezi 2016 a 2025;
   ceny služeb +62,3 % (EK9-028, EK9-030, EK9-031–EK9-034).
10. **Doporučení pro indexační doložku: indexovat ročně o `max(HICP služby ČR za předchozí rok; 0)`,
    ne o celkovou inflaci.** V roce 2025 byl rozdíl 5,0 % vs. 2,3 %, tedy 2,7 p. b. ročně; za tři roky
    2023–2025 průměrně 7,6 % vs. 5,7 %.

---

## 2. FAKTA

### 2.1 Longitudinální řez – 16 subjektů, tři řezy 2022 / 2024 / 2026

Prázdná buňka = Wayback pro daný řez nemá použitelný snapshot (nebo se ceny načítají JavaScriptem
a archiv je nezachytil). Sloupec „roční“ je geometrický průměr mezi krajními doloženými řezy.

| # | Subjekt | Země | ~2022 | ~2024 | ~2026 | celkem | ročně | evidence |
|---|---|---|---|---|---|---|---|---|
| 1 | RobertNemec.com – měsíční pásma | CZ | 9 250 / 18 500 / 31 200 Kč (2022-05) | – | 9 250 / 18 500 / 31 200 Kč (2026-06) | **0 %** | 0 % | EK9-004, EK9-006 |
| 2 | RobertNemec.com – hodinovka | CZ | 1 850 Kč/h | – | 1 850 Kč/h | **0 %** | 0 % | EK9-004, EK9-006 |
| 3 | Advisio DataPlus | CZ | – | 800 / 1 500 / 3 000 Kč (2024-11) | 800 / 1 500 / 3 000 Kč (2026-05) | **0 %** | 0 % | EK9-018, EK9-019 |
| 4 | Jiří Kroužek – hodinovka | CZ | 800 Kč/h (platné od 15. 12. 2020) | 1 150 Kč/h (od 1. 1. 2024) | – | **+43,8 %** | +12,5 % | EK9-046, EK9-047 |
| 5 | Jiří Kroužek – měsíční správa PPC | CZ | od 3 750 Kč | od 8 000 Kč | – | **+113,3 %** | +27,9 % | EK9-046, EK9-047 |
| 6 | Marketing Makers – webová analytika | CZ | 2 000 Kč/h (2022-07) | 2 000 Kč/h (2024-02) | 2 100 Kč/h (živě 2026-09) | **+5,0 %** | +1,2 % | EK9-048, EK9-049 |
| 7 | Waaila (Cross Masters) | CZ | 100–2 800 €/měs „na dotaz“ (2021-01) | 19–129 USD (2024-07) | 19–129 USD (2025-06) | **−82,5 %** u vstupu | −39,2 % | EK9-050, EK9-051 |
| 8 | MarketingPPC.cz – nasazení GA4 | CZ | – | od 4 500 / 12 000 Kč (2024-04) | od 3 900 / 7 800 / 19 000 Kč (2026-02) | **+58,3 %** u horního | +28,5 % | EK9-052, EK9-053 |
| 9 | LEMONTEC / KlickImpuls – Sorglos-Paket | AT | bez ceny (2023-12) | 199 € (2024-05) | 199 € (2026-05) | **0 %** od zveřejnění | 0 % | EK9-039–EK9-042 |
| 10 | DASE – doporučené minimum | SK | – | – | 700 € (2025-09 i 2026-05) | **0 %** za 8 měsíců | – | EK9-043, EK9-044 |
| 11 | Trackingplan | ES/glob. | 299 USD; Ent. od 1 499 (2022-05) | 299 USD; Ent. „custom“ (2024-03) | 249 / 499 / 999; Ent. od 1 500 (2026-01) | **−16,7 %** u vstupu | −4,9 % | EK9-007–EK9-009 |
| 12 | Funnel | SE | 399 / 999 / 1 999 USD (2022-12) | – | 300 / 600 USD (2026-08) | **−24,8 % / −39,9 %** | −7,5 % / −13,0 % | EK9-010, EK9-011 |
| 13 | MetricsWatch – reporty | US | 29 / 50 / 100 USD (2022-01) | 29 / 50 / 100 USD (2024-02) | 49 / 149 / 399 USD (2026-01) | **+69,0 %** | +14,0 % | EK9-012–EK9-014 |
| 14 | MetricsWatch – Alerts (nový produkt) | US | neexistuje | neexistuje | 99 / 299 USD (2026-01) | **nový** | – | EK9-014 |
| 15 | Stape – sGTM hosting | EU | 20 / 100 USD (2022-01) | 20 / 100 / 200 USD (2024-01) | od 17 USD (2026-01) | **−15,0 %** | −4,0 % | EK9-015–EK9-017 |
| 16 | Supermetrics | FI | – | od 39 USD (2024-01) | od 47 USD (2026-01) | **+20,5 %** | +9,8 % | EK9-045 |
| 17 | TAGGRS | NL | – | – | 22 / 57 / 127 / 196 € (2025-08 i 2026-08) | **0 %** | 0 % | EK9-020, EK9-021 |
| 18 | ObservePoint | US | 599 / 1 999 USD (2023-02) | – | ceny **stažené** (2026-08) | n/a | – | EK9-022, EK9-023 |
| 19 | AgencyAnalytics | CA | – | 12 / 18 USD za kampaň (2024-01) | – | n/a | – | EK9-024 |
| 20 | Databox, Littledata | – | nedostupné | nedostupné | nedostupné | – | – | EK9-054 |

**Doslovné citace k nejnosnějším řádkům:**

> „Cena je cena 1 850 Kč/h. … Měsíční práce na webové analytice (tak, aby měla smysl) začínají na
> 9 250 Kč, nejběžnější cena je 18 500 Kč a 31 200 Kč.“
> — RobertNemec.com, **snapshot 2016-02-10** i **snapshot 2026-06-09**, doslova stejná věta (EK9-002, EK9-006)

> „Cena je cena 1750 Kč/h. … začínají na 8 750 Kč, nejběžnější cena je 17 500 Kč a 31 200 Kč.“
> — tatáž stránka, snapshot 2014-06-02 (EK9-001). Poslední doložená změna ceny je tedy 2014→2016.

> „Ceny platné od 15. 12. 2020. … Hodinová sazba 800 Kč / hod“ → „Ceny platné od 1. 1. 2024. …
> Hodinová sazba 1 150 Kč / hod“ — Jiří Kroužek (EK9-046, EK9-047)

> „Monthly fee for our existing clients ranges between €100 to €2800 a month.“ (2021)
> → „Monthly fee starts at just 19.90 USD a month. … Price / month $19 $29 $39 $69 $99 $129“ (2024)
> — Waaila (EK9-050, EK9-051)

> „Alerts Pricing – Real-Time Data Monitoring – Catch data issues before they cost you money.
> Starter $99 /month – Up to 3 custom alerts, 10-minute detection time, Email & Slack notifications.“
> — MetricsWatch, 2026-01 (EK9-014)

> „GA4 & GTM Sorglos-Paket … Jetzt unverbindlich anfragen“ (2023-12) → „GA4 und GTM Sorglos-Paket
> 199 €“ (2024-05) → „199,- Inklusive: Automatisiertes Event-Monitoring, Kontinuierliche Anpassungen,
> Experten für Fehlerbehebung verfügbar“ (2026-05) — KlickImpuls → LEMONTEC (EK9-039, EK9-040, EK9-042)

### 2.2 Česká inflace, mzdy a agenturní sazby jako referenční osy

| Osa | 2019 | 2022 | 2024 | 2025/2026 | 2019→2025 | zdroj |
|---|---|---|---|---|---|---|
| HICP ČR – **služby**, roční změna | 3,4 % | 11,8 % | 6,7 % | 5,0 % (2025) | **+48,6 %** | EK9-028 |
| HICP ČR – celkem, roční změna | 2,6 % | 14,8 % | 2,7 % | 2,3 % (2025) | +44,1 % | EK9-029 |
| Index nákladů práce, ČR, NACE J (ICT) | 4,5 % | 6,6 % | 6,5 % | 8,4 % (2025) | **+49,9 %** | EK9-030 |
| ISPV – 2511 Systémoví analytici, medián | 61 774 Kč | 74 233 Kč | 85 317 Kč | 91 532 Kč (2025) | **+48,2 %** | EK9-031–034 |
| ISPV – 2431 Marketing a průzkum trhu, medián | 48 302 Kč | 59 385 Kč | 64 821 Kč | 69 982 Kč (2025) | +44,9 % | EK9-031–034 |
| ISPV – 2521 Návrháři a správci databází, medián | 59 144 Kč | 66 211 Kč | 81 239 Kč | 85 937 Kč (2025) | +45,3 % | EK9-031–034 |
| AKA – Data Analyst, průměrná hodinová sazba | 1 400 Kč | – | 1 758 Kč (2023) | 1 938 Kč (2026) | **+38,4 %** (2019→2026) | EK9-035–037 |

Kumulativně 2016 → 2025: služby **+62,3 %**, celková inflace +54,5 %, náklady práce v ICT **+79,8 %**.

> „Tuzemské komunikační agentury zvýšily letos ceny v průměru o 7,3 %. … Navýšení cen ale dosahuje
> **necelé poloviny loňské inflace (15,1 %)**.“ — Médiář / AKA, 2023 (EK9-036)

> „Hodinové sazby vzrostly přibližně o 6 %, nejčastěji v pásmu 5–10 %. Přibližně čtvrtina pozic zůstala
> beze změny. … Průměrná inflace v Česku za rok 2025 dosáhla 2,5 %, ceny služeb rostly o 4,7 %.“
> — Médiář / AKA, 27. 4. 2026 (EK9-037)

**Kontext k otázce, jak starý je obor:** v sazebníku AKA za roky 2015 a 2016 pozice datového analytika
vůbec není; objevuje se poprvé v šetření 2018/2019 (EK9-038, EK9-035).

**Co by musely české sazby dělat, aby udržely reálnou hodnotu:**

| Bod | Nominálně dnes | Reálná hodnota při zachování kupní síly | Ztráta |
|---|---|---|---|
| RobertNemec vstup (9 250 Kč, 2016) | 9 250 Kč | **15 009 Kč** (index služeb) / 14 289 Kč (celková inflace) | −38 % |
| RobertNemec střed (18 500 Kč, 2016) | 18 500 Kč | **30 018 Kč** | −38 % |
| RobertNemec strop (31 200 Kč, 2016) | 31 200 Kč | **50 625 Kč** | −38 % |
| RobertNemec hodinovka (1 850 Kč, 2016) | 1 850 Kč | **3 002 Kč** | −38 % |
| Marketing Makers (2 000 Kč/h, 2022) | 2 100 Kč | **2 489 Kč** | −16 % |
| AKA Data Analyst (1 400 Kč, 2019) | 1 938 Kč | **2 081 Kč** (služby) / 2 098 Kč (náklady práce ICT) | −7 % |

### 2.3 PPP korekce – převodní tabulka

Zdroj: Eurostat `prc_ppp_ind`, cenová hladina EU27_2020 = 100, **rok 2024** (novější Eurostat nemá).
Faktor převádí zahraniční cenu na **českou cenovou hladinu**: `cena × (PLI_CZ / PLI_země)`.
Pro služby je česká báze 73,5; pro HDP 80,8. UK a US Eurostat publikuje jen v agregátu HDP,
proto se u nich používá faktor z HDP (a je tedy konzervativnější – reálný rozdíl v ceně práce je větší).

| Země | PLI HDP | PLI služby (P02) | PLI software | faktor na ČR (služby) | faktor na ČR (HDP) |
|---|---|---|---|---|---|
| **CZ** | 80,8 | **73,5** | 100,8 | 1,000 | 1,000 |
| PL | 71,9 | 59,8 | 107,2 | 1,229 | 1,124 |
| SK | 80,2 | 76,9 | 101,2 | 0,956 | 1,007 |
| ES | 89,7 | 89,5 | 100,4 | 0,821 | 0,901 |
| IT | 95,7 | 97,7 | 96,4 | 0,752 | 0,844 |
| FR | 108,9 | 109,9 | 98,6 | 0,669 | 0,742 |
| DE | 111,7 | 113,1 | 95,2 | 0,650 | 0,723 |
| BE | 112,3 | 128,4 | 101,7 | 0,572 | 0,720 |
| AT | 114,8 | 126,2 | 103,1 | **0,582** | 0,704 |
| NL | 117,2 | 131,5 | 107,7 | 0,559 | 0,689 |
| SE | 117,6 | 129,5 | 106,5 | 0,568 | 0,687 |
| IE | 118,4 | 148,8 | 108,6 | 0,494 | 0,682 |
| FI | 120,1 | 131,3 | 104,5 | 0,560 | 0,673 |
| NO | 124,4 | 146,6 | 105,9 | 0,501 | 0,650 |
| UK | 125,7 | – | – | – | **0,643** |
| DK | 130,8 | 155,5 | 94,7 | 0,473 | 0,618 |
| US | 144,7 | – | – | – | **0,558** |
| CH | 160,0 | 206,5 | 116,5 | **0,356** | 0,505 |

**Metodická poznámka, která z tabulky přímo plyne:** software se v ČR prodává za 100,8 % evropského
průměru, ale práce ve službách za 73,5 %. **PPP korekci proto smíme aplikovat na lidskou službu,
ne na globální SaaS** – cena Trackingplanu nebo Funnelu je pro českého klienta plně nominální
(EK9-027). To zároveň znamená, že poměr „nástroj vs. člověk“ je v ČR nepříznivější než na Západě:
nástroj stojí stejně, člověk je levnější, takže substituce nástrojem je v ČR relativně dražší.

### 2.4 Aplikace korekce na klíčové body datasetu

| Bod (lidská služba) | Země | Nominálně Kč/měs | **V české cenové hladině** | báze |
|---|---|---|---|---|
| LEMONTEC Sorglos-Paket 199 € | AT | 4 975 | **2 897** | služby |
| ADS-Tracking Basic 179 € | DE | 4 475 | **2 908** | služby |
| Manids Minimum 1 000 DKK | DK | 3 350 | **1 583** | služby |
| Manids Aktiv 3 000–8 000 DKK | DK | 10 050 – 26 800 | **4 750 – 12 668** | služby |
| Blagoweb 450–1 200 € (s BigQuery) | IT | 11 250 – 30 000 | **8 463 – 22 569** | služby |
| DASE minimum 700 € | SK | 17 500 | **16 726** | služby |
| Amplio Maintained 700–1 200 € | ES | 17 500 – 30 000 | **14 372 – 24 637** | služby |
| ADS-Tracking Max 1 299 € | DE | 32 475 | **21 104** | služby |
| Amplio Managed od 1 800 € (s BigQuery) | ES | 45 000 | **36 955** | služby |
| Measurelab minimum £1 500 (G-Cloud) | UK | 43 500 | **27 962** | HDP |
| Elevar Analyst Tier 1 / Tier 2 (+500 / +1 000 USD) | US | 11 500 / 23 000 | **6 422 / 12 843** | HDP |
| E2M Standard / Pro / Advanced (1 299 / 2 099 / 3 999 USD) | US | 29 877 / 48 277 / 91 977 | **16 683 / 26 958 / 51 360** | HDP |
| MetricsWatch Alerts Starter / Professional (99 / 299 USD) | US | 2 277 / 6 877 | **1 271 / 3 840** *(jen orientačně – je to SaaS)* | HDP |

**Dopad na celý evropský vzorek** (`pricing-dataset.csv`, `status=active`, `scope_class=measurement_only`,
období měsíc, region EU+UK):

| Statistika | Nominálně | **Po PPP korekci** | Rozdíl |
|---|---|---|---|
| Všechny tiery (n = 26 / 25) – Q1 | 7 419 Kč | **4 642 Kč** | −37 % |
| Všechny tiery – **medián** | **11 750 Kč** | **8 463 Kč** | **−28 %** |
| Všechny tiery – Q3 | 33 731 Kč | 18 398 Kč | −45 % |
| Po subjektech, nejnižší tier (n = 16 / 15) – Q1 | 6 500 Kč | **2 908 Kč** | −55 % |
| Po subjektech – **medián** | **11 062 Kč** | **6 990 Kč** | **−37 %** |
| Po subjektech – Q3 | 33 125 Kč | 14 372 Kč | −57 % |

Kolik evropských subjektů je levnějších než navržený vstupní tier 8 900 Kč: **nominálně 7 ze 16,
po korekci 9 z 15.** Pod 19 900 Kč leží po korekci 13 z 15 subjektů. Pod 39 000 Kč leží po korekci
24 z 25 všech bodů (jediná výjimka je Digily Oy Pro).

*(Pozn.: dataset je stav po 1. kole a hygieně; fragmenty 2. a 3. kola do něj nejsou slité –
absolutní čísla se po sloučení posunou, poměr nominál : korigováno ne.)*

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Na pásmo 8 900 Kč: argument „ležíme pod evropským mediánem“ padá úplně

Verze 2 říká: *„8 900 Kč leží pod evropským mediánem vstupních tierů (11 250 Kč), ale osm z patnácti
evropských subjektů je levnějších.“* Po korekci na cenovou hladinu je to horší: **PPP-korigovaný
medián nejnižších tierů je 6 990 Kč a 8 900 Kč leží 27 % nad ním.** Devět z patnácti subjektů je
levnějších. Věta se musí přepsat na: *„8 900 Kč je po přepočtu na srovnatelnou cenovou hladinu
nad evropským mediánem vstupních balíčků; obhajuje ho obsah a reakční doba, ne cena.“*

Konkrétní referenční bod pro vstupní tier: **LEMONTEC 199 € = 2 897 Kč v české cenové hladině**
za automatizovaný monitoring, průběžné úpravy a dostupnost experta na opravu. To je 33 % ceny
navrženého tieru 1 – a je to jediný evropský produktizovaný paušál na správu měření, o kterém
víme, že na trhu vydržel 30 měsíců. **Rozdíl 8 900 vs. 2 900 Kč musí nabídka umět vysvětlit
konkrétně** (reakční doba, součtové srovnání s backendem, člověk, který opraví), jinak je vstupní
tier nejzranitelnější položkou ceníku.

### 3.2 Na pásmo 19 900 Kč: beze změny, ale zpevněné z nového směru

Šest nezávislých subjektů v pásmu 17 500–23 750 Kč zůstává, po korekci se ale rozpadají:
DASE 16 726 Kč (SK je téměř na české hladině, faktor 0,956), Amplio Maintained 14 372–24 637 Kč,
ADS-Tracking Max 21 104 Kč. **Korigované pásmo je 14 400–24 600 Kč a 19 900 Kč sedí v jeho středu.**
To je po korekci lepší výsledek, než jaký dává nominální srovnání – tier 2 je jediný, kterému
PPP korekce neublížila.

Nová opora zvenčí: **reálná hodnota středního českého pásma z roku 2016 je 30 018 Kč.**
Tier 2 je tedy o třetinu pod tím, co by dnes stálo to, co RobertNemec v roce 2016 označil
za „nejběžnější cenu“.

### 3.3 Na pásmo 39 000 Kč: poprvé má oporu, ale ne tržní – historickou

Verze 2 tvrdí, že tier 3 nemá tržní oporu (dva body 11 250 a 45 000 Kč, rozptyl 4×).
Longitudinální řez to nemění – rozptyl po korekci zůstává (Blagoweb 8 463 vs. Amplio Managed
36 955 Kč = 4,4×). **Přibývají ale dvě věci:**

1. **Amplio Managed po korekci = 36 955 Kč, tedy 5 % pod navrženými 39 000 Kč.** Nominálně
   (45 000 Kč) vypadal jako strop nad tierem 3; po korekci je to jeho přesná úroveň. To je
   nejlepší jediný srovnatelný bod, jaký tier 3 má.
2. **Reálná hodnota horního českého pásma z roku 2016 je 50 625 Kč.** Argument „doložený veřejný
   strop lidské správy v ČR je 31 200 Kč, takže 39 000 Kč je nad trhem“ (verze 2, § 2.2) **je
   metodicky vadný**: srovnává cenu z roku 2026 s cenou z roku 2016. Buď se ten strop dá číst
   jako 50 625 Kč v dnešních penězích, nebo se z argumentace musí vypustit úplně. **Doporučuji
   druhé** – stránka není udržovaná a nikdo nedokládá, že za ni někdo dnes platí; ale nesmí se
   používat proti tieru 3.

Tier 3 se tedy pořád obhajuje obsahem. Nově ale **neplatí, že je nad domácím stropem.**

### 3.4 Na otevřenou otázku „existuje vůbec poptávka?“ – posouvá se, nerozhoduje se

Longitudinální řez přináší pro obě strany nové důkazy a **žádný z nich otázku neuzavírá.**

**Pro poptávku:**
- **LEMONTEC / KlickImpuls: 30 měsíců.** Produkt s pojmenovaným paušálem na správu měření
  spuštěn 12/2023, cena zveřejněna 5/2024, prodává se dál v 5/2026 a přežil rebranding celé
  agentury. To je první longitudinální doklad, že tenhle produkt **nezaniká** (EK9-039–042).
  Cena se za dva roky nezměnila, tedy ani netlačí dolů.
- **MarketingPPC.cz zvedl horní cenu za nasazení GA4 o 58 % za necelé dva roky** (12 000 → 19 000 Kč,
  EK9-052, EK9-053) a přidal levnější vstupní hladinu. Poptávka po **projektové** práci na měření
  v ČR prokazatelně sílí – ne po paušálu, ale po práci samotné.
- **MetricsWatch v roce 2026 postavil samostatný produkt na alerting za 99 a 299 USD** (2 277
  a 6 877 Kč). Někdo si spočítal, že se monitoring měření dá prodávat jako vlastní SKU, a to
  o řád dráž než ga4monitor (667 Kč).

**Proti poptávce:**
- **Waaila je český pokus, který se z lidské služby stáhl do nástroje.** Z obsluhované služby za
  100–2 800 € měsíčně na self-service za 19–129 USD. Není to doložený zánik produktu, ale je to
  jediný český subjekt, který kvalitu měření hlídal za lidskou cenu – a dnes ji za lidskou cenu neprodává.
- **ObservePoint stáhl veřejné ceny**, Funnel snížil vstup o čtvrtinu a střední tier o 40 %,
  Trackingplan snížil vstup o 17 % a Stape o 15 %. **Vrstva „hlídáme vám měření nástrojem“
  je čtyři roky v deflaci.** Kdyby po ní byla přetlačená poptávka, ceny by rostly.
- **Nejtvrdší nový důkaz je RobertNemec.** Deset let neaktualizovaný ceník na jediné české veřejné
  stránce o ceně za práci na měření není znak trhu, na kterém se o ceně soutěží. Je to znak
  stránky, kterou nikdo nečte a která nikoho nestojí zákazníka.

**Závěr k otázce 6 zůstává v platnosti a doporučené pořadí validace se nemění.** Longitudinální řez
přidává jednu praktickou věc: **při testu poptávky je referenční cena, kterou trh v Evropě
skutečně dlouhodobě platí za produktizovanou správu měření, 199 € = 2 897 Kč v české hladině,
ne 8 900 Kč.** To je nejlepší dostupný odhad ochoty platit za vstupní úroveň a landing test by ho
měl mít jako druhé rameno.

### 3.5 Doporučení pro indexační doložku

**Nominální ceny v tomto oboru samy nerostou.** Ze 16 doložených cenových řad se **šest nezměnilo
vůbec, čtyři klesly a šest vzrostlo**. Kdo nemá doložku, ten po pěti letech prodává o třetinu
levněji – doloženo na RobertNemec (−38 % reálně za 10 let) i na Marketing Makers (−16 % za 4 roky).
Zároveň náklady rostou prokazatelně rychleji než spotřebitelský koš: náklady práce v ICT
+8,4 % v roce 2025 proti celkové inflaci 2,3 %.

**Návrh textu doložky:**

> Cena za správu měření se každoročně k 1. únoru upraví o **míru růstu cen služeb v České republice
> za předchozí kalendářní rok** (harmonizovaný index spotřebitelských cen, oddíl „služby“, Eurostat
> `prc_hicp_aind`, `coicop=SERV`, `unit=RCH_A_AVG`, `geo=CZ`; alternativně ČSÚ, index cen služeb).
> Je-li tato hodnota záporná, cena se nemění. Poskytovatel oznámí novou cenu nejpozději 30 dní
> předem; objednatel má právo smlouvu do 30 dnů od oznámení vypovědět bez sankce.

**Proč právě tento index a ne alternativy:**

| Varianta | Hodnota 2025 | Průměr 2023–2025 | Hodnocení |
|---|---|---|---|
| Celková inflace (HICP CP00) | 2,3 % | 5,7 % | **Nedoporučuji** – v roce 2025 podhodnotí růst nákladů o 2,7 p. b.; klient ji ale zná a přijme snadno |
| **HICP služby ČR** | **5,0 %** | **7,6 %** | **Doporučuji** – veřejně ověřitelné, měsíčně publikované, blízko reálným nákladům, srozumitelné |
| Index nákladů práce NACE J (ICT) | 8,4 % | 8,0 % | Nejpřesnější nákladově, ale publikuje se se zpožděním a klientovi se hůř vysvětluje |
| Pevná sazba (např. 5 % ročně) | – | – | Přijatelná varianta, pokud klient nechce vázat cenu na index; 5 % je zhruba desetiletý průměr služeb (5,53 % p. a.) |
| Bez doložky | – | – | **Nejhorší.** Doložená ztráta 38 % za 10 let. |

**Tři praktická doporučení navíc, která plynou přímo z Waybacku:**

1. **Na ceníkovou stránku psát „Ceny platné od <datum>“.** Dělá to Jiří Kroužek (jediný český subjekt
   v našem vzorku, který ceny reálně zvedl) – u něj Wayback ukazuje datum platnosti přímo v ceníku.
   RobertNemec.com datum nemá a jeho ceník je deset let starý, aniž by to bylo poznat.
2. **Indexovat i hodinovou sazbu nad rámec paušálu**, jinak se rozjede vnitřní ekonomika balíčků:
   tiery mají poměr k hodinám, které se prodávají zvlášť.
3. **Neopírat argumentaci o cizí veřejný ceník bez ověření jeho stáří.** Wayback CDX (`web.archive.org/cdx/search/cdx?url=…&output=json&collapse=timestamp:4&fl=timestamp,digest`)
   to zjistí za jeden dotaz – shodný `digest` napříč lety znamená, že se stránka nezměnila.

---

## 4. MEZERY, KTERÉ ZŮSTÁVAJÍ

| # | Mezera | Proč zůstala | Jak ji zavřít |
|---|---|---|---|
| 1 | **Žádná realizovaná (ne ceníková) česká cena stále není v datech.** Longitudinální řez měří ceníky, ne faktury. | Wayback zachytí jen veřejné ceníky. | Registr smluv (úkol B1 z r2), vlastní fakturace (C2). |
| 2 | **Ceníky vykreslované JavaScriptem Wayback neuloží.** Vypadli Databox, Littledata, AgencyAnalytics (řezy 2022 a 2026), Funnel 2024, Supermetrics 2022. | Archiv ukládá HTML, ne DOM po skriptech. | Vykreslovací prohlížeč nad archivními URL, nebo cenové agregátory typu pricingsaas.com jako sekundární zdroj. |
| 3 | **Amplio, ADS-Tracking, Manids, Taggrs a Signals nemají v archivu cenovou historii vůbec** (buď stránka není archivovaná, nebo jen jednou). Klíčové body PPP tabulky tak nemají časovou osu. | Malé weby mimo záběr crawlerů. | Pravidelný vlastní snapshot těchto URL (např. měsíční cron) – od dneška by za rok vznikla vlastní řada. |
| 4 | **Eurostat PLI je jen do roku 2024** a pro UK a US nemá rozpad na služby; použil se konzervativnější faktor z HDP. | Data pro 2025 Eurostat ještě nezveřejnil (aktualizace 2025-07-10). | OECD PPP benchmark pro US/UK služby; přepočet zopakovat po vydání dat za 2025. |
| 5 | **Zahraniční body nejsou očištěny o zahraniční inflaci.** LEMONTEC 199 € z roku 2024 se srovnává s českými cenami roku 2026 v hladině 2024. | Chyběl by k tomu HICP služeb pro AT/ES/DE/DK a rozklad každého bodu na rok vzniku. | Půl dne práce nad `prc_hicp_aind` pro těch šest zemí; posun je řádově 5–15 %, směr závěrů nemění. |
| 6 | **Není známa cenová historie žádného subjektu, který službu prodával a přestal.** Analýza přežití (úkol C5 z r2) není tímto řezem pokryta – Waaila je jediný nalezený případ a i ten je změna modelu, ne ukončení. | Cílem tohoto úkolu byl vývoj cen, ne mortality. | Wayback pass na 20–30 subjektů zpět do 2019 se sledováním *zmizení* stránky, ne ceny. |
| 7 | **AKA sazebník za roky 2020–2022 a 2024–2025 chybí** – řada má body 2019, 2023 a 2026. | Médiář nepublikoval každý ročník, respektive články nejsou v archivu. | Přímo AKA (výroční zprávy), nebo mystery request na sazebník. |
| 8 | **ISPV měří mzdy zaměstnanců, ne fakturaci OSVČ**, která je pro tento obor typická. | Jiný datový zdroj neexistuje. | Průzkum Na volné noze (má vlastní roční šetření sazeb), Dexfinity Dexguide. |
