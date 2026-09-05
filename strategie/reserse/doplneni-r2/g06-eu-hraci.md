# Doplnění R2 / G06 – EU: chybějící hráči a nepokryté země

Stav: hotovo (2. kolo, rešerše 2026-09-04). Zaplňuje mezeru `03-trh-eu.md` § 5 (nedostupní a nenalezení hráči,
nepokryté země BE / NO / FI / CH / IT / IE / ES / PT).
Data: `data/fragments/r2-g06-pricing.csv` (17 řádků, `PG6-xxx`), `data/fragments/r2-g06-evidence.csv` (29 řádků, `EG6-xxx`, phase = 11).
Kódy aktivit `A1`–`I3` a `what_broke` podle `00-taxonomie-sluzby.md`.
Přepočty: 1 EUR = 25 Kč, 1 CHF = 26 Kč, 1 GBP = 29 Kč, 1 PLN = 5,8 Kč. Hodinová sazba × 10 h = „proxy 10 h“.
Kurz NOK nebyl v zadání → norské ceny se záměrně nepřepočítávají.

---

## 1. Shrnutí

1. **Prošli jsme 29 nových subjektů** v 11 zemích. Z nich je 21 „v kategorii a dostupných“, 6 nedostupných nebo neexistujících
   a 2 mimo kategorii. **Veřejnou měsíční cenu za kontinuální správu má 6 z 21 (29 %)** – vyšší podíl než 9 z 58 v 1. kole,
   protože jsme hledali přímo cenovými frázemi v místním jazyce. Po sloučení obou kol je poměr **15 z 79 (19 %)**.
2. **Nejcennější nález: Blagoweb (IT) – první evropský veřejný retainer, který má BigQuery přímo v dodávce**:
   canone 450–1 200 €/měs (11 250–30 000 Kč) + setup 4 500–9 000 €, infrastruktura a náklady BQ zvlášť (EG6-005).
   Zaplňuje mezeru „chybí veřejná cena čistě BQ retaineru“ z 1. kola.
3. **Španělsko dodalo první plný trojstupňový veřejný ceník správy v EU**: YAG Comunicación 290 / 490 / 890 €/měs
   (7 250 / 12 250 / 22 250 Kč), bez vazby (EG6-001). Druhý ES bod: ePoint 250–800 €/měs (6 250–20 000 Kč), výpověď 15 dní (EG6-002).
4. **Švýcarsko je nově pokryto a překvapivě transparentní**: 2 ze 4 nalezených agentur mají veřejnou měsíční cenu –
   DLM Digital „Laufende Betreuung ab CHF 300/Mt.“ (7 800 Kč) a Gipfelwerk „Analyse-Betreuung ab CHF 490/Monat“ (12 740 Kč),
   Gipfelwerk navíc odděluje sGTM hosting jako položku ab CHF 30/měs (EG6-003, EG6-011).
5. **Nová mediánová hladina sedí se závěrem 1. kola.** Medián nových fixních měsíčních balíčků bez BQ je **7 800 Kč**
   (se zúžením na plnohodnotné nabídky **10 025 Kč**) – tedy přesně pásmo 8–10 tis. Kč.
6. **Multiplikátor za BigQuery je ale nižší, než říká 1. kolo.** Uvnitř jednoho dodavatele je skok
   **1,5–2,6×** (Amplio 700–1 200 → 1 800+; Blagoweb 450 → 1 200 €), ne 3,7–5,5×. Číslo 3,7–5,5× vzniklo srovnáním
   napříč trhy a nadhodnocuje.
7. **Obsah tieru 1 návrhu DataLayer.cz není v Evropě unikátní.** DLM Digital prodává za 7 800 Kč doslova
   „laufendes Monitoring, monatliches Reporting, Optimierungsempfehlungen, Fehlerbehebung, fester Ansprechpartner“ (EG6-011).
   Unikátní zůstává jen **slíbené číslo reakční doby** – to nemá ani jeden z 21 nových subjektů.
8. **Finsko ukazuje anti-vzor, který v ČR způsobuje odchody klientů**: nejviditelnější finský analytický konzultant
   neprodává správu měření samostatně, analytika je položka uvnitř marketingového balíčku 1 500 / 2 500 / 4 000 €/kk
   vedle SEO a Google Ads (EG6-007). Měření tam nemá vlastní cenu ani vlastní dodávku.
9. **Potvrzeno na pěti nezávislých subjektech: jakmile je ve hře BigQuery, cena z webu mizí.** Webanalist NL má veřejné
   ceny 495 / 695 / 795 € a jediný tier bez ceny je ten s „BigQuery-koppeling“ (EG6-022); stejně Measurelab, Precis, Fresh Egg (1. kolo).
   Blagoweb je zatím jediná výjimka.
10. **Ze seznamu chybějících hráčů je 6 z 10 uzavřeno definitivně**: Analytics Heroes a Data to Value – domény neexistují (DNS);
    Adapt (DK) a Loves Data – nejsou konkurenti v kontinuální správě; OrangeLoops a Datatrics – mimo kategorii.
    Neuzavřeno zůstává: Measure Minds (JS/cookie zeď i přes r.jina.ai), Whites (DNS timeout), Metrics Agency a „Dataroom“ (nenalezeny).

---

## 2. FAKTA

### 2.1 Nově nalezené veřejné měsíční ceny kontinuální správy

| Subjekt | Země | Název služby doslova | Model | Cena | Kč/měs | requires_bq | SLA / reakční doba | Kódy | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| YAG Comunicación | ES | „Medición Esencial“ | tiered | desde 290 €/mes | 7 250 | no | neuvedeno | A1, A2, C1, H2, H3 | EG6-001 |
| YAG Comunicación | ES | „Medición Pro“ | tiered | desde 490 €/mes | 12 250 | no | neuvedeno | + A5, B1, D1, D2, F1, A4 | EG6-001 |
| YAG Comunicación | ES | „Medición Enterprise“ | tiered | desde 890 €/mes | 22 250 | optional | neuvedeno | + E3, E5, F3, F4, I1 | EG6-001 |
| ePoint | ES | „mantenimiento mensual“ | fixed_package | 250–800 €/mes | 6 250–20 000 | no | neuvedeno | A1, A2, C1, D1, F1, F3 | EG6-002 |
| Gipfelwerk | CH | „Analyse-Betreuung“ | fixed_package | ab CHF 490/Monat | 12 740 | no | neuvedeno | A2, C1, F1, F3, F4 | EG6-003 |
| Gipfelwerk | CH | „Server-Side Hosting“ | fixed_package | Ab CHF 30/Monat | 780 | no | – | A5 | EG6-003 |
| DLM Digital | CH | „Laufende Betreuung“ | fixed_package | ab CHF 300/Mt. | 7 800 | no | „fester Ansprechpartner“ (bez čísla) | A2, C1, F1, F3, G1, G7, H5 | EG6-011 |
| Blagoweb | IT | „canone mensile“ (manutenzione, monitoring, evoluzione dashboard e alerting) | fixed_package | 450–1 200 €/mese | 11 250–30 000 | **yes** | neuvedeno | A1, A2, A4, A5, D1–D3, E1, E4, F1, F3, G1, G4, G7 | EG6-005 |
| Q4 Studio | IT | „canone infrastruttura e lettura dati“ | fixed_package | da 100 €/mese, disdetta libera | 2 500 | no | neuvedeno | A5, D1, D2, D5, G5, H2 | EG6-006 |

### 2.2 Nově nalezené hodinové sazby a projektové ceny

| Subjekt | Země | Sazba / cena | Kč | Poznámka | Evidence |
|---|---|---|---|---|---|
| digital M. | CH | CHF 160/h | 4 160 Kč/h → proxy 10 h = 41 600 Kč | alternativa „Retainer nach Bedarf“ bez ceny; audit ab 990, setup ab 1 800, advanced ab 3 500 CHF | EG6-004 |
| cloudWEB | CH | CHF 180/h | 4 680 Kč/h → proxy 10 h = 46 800 Kč | nebo hodinový pool v reklamním mandátu, nebo **fixní čtvrtletní rozpočet na údržbu** | EG6-012 |
| Sampsa Vainio | FI | audit 800–1 500 €, „laaja“ audit 1 500–3 000 €, server-side 2 000–5 000 €, migrace GA4+GTM 1 500–4 000 €, atribuce + Looker 1 500–3 500 € | 20 000–125 000 Kč jednorázově | měsíční správa v ceníku není | EG6-008 |
| Haus Byrå | NO | Liten 3 400 / Medium 12 500 / Stor 14 700 kr eks. MVA | – (kurz NOK nebyl v zadání) | pouze setup, žádná měsíční položka | EG6-021 |
| Webanalist | NL | 495 / 695 / vanaf 795 € | 12 375 / 17 375 / 19 875 Kč jednorázově | čtvrtý tier s „BigQuery-koppeling“ = „Op maat offerte“ | EG6-022 |
| Digily Oy (Sampsa Vainio) | FI | 1 500 / 2 500 / 4 000 €/kk | 37 500 / 62 500 / 100 000 | **analytika je položka v marketingovém balíčku**, ne předmět služby | EG6-007 |

### 2.3 Doslovné citáty

**Veřejné cení a struktura**
- „Medición Esencial – desde 290€/mes; Medición Pro – desde 490€/mes; Medición Enterprise – desde 890€/mes. **Sin permanencia, sin letra pequeña.**“ (YAG, ES, EG6-001)
- „el mantenimiento mensual entre 250 y 800 € según volumen de tráfico … **Puedes cancelar cuando quieras con 15 días de preaviso**“ (ePoint, ES, EG6-002)
- „**Laufende Betreuung ab CHF 300/Mt.**: laufendes Monitoring, monatliches Reporting, Optimierungsempfehlungen, Fehlerbehebung, fester Ansprechpartner“ (DLM Digital, CH, EG6-011)
- „**Analyse-Betreuung: ab CHF 490/Monat** | Basis-Setup: ab CHF 2'900 einmalig | **Server-Side Hosting: Ab CHF 30/Monat** | Cookiebot ab CHF 12/Monat, Usercentrics ab CHF 50/Monat“ (Gipfelwerk, CH, EG6-003)
- „Setup una tantum: 4.500 – 9.000 €; **canone mensile 450 – 1.200 €/mese (manutenzione, monitoring, evoluzione dashboard e alerting)**; infrastruttura 20-80 €/mese (Cloud Run) o 20-200 €/mese (Stape.io), più costi BigQuery“ (Blagoweb, IT, EG6-005)
- „Audit tracciamento: 490 € (3-5 giorni lavorativi) | Setup server-side: da 1.500 € | **Infrastruttura e lettura dati: da 100 €/mese, disdetta libera**“ (Q4 Studio, IT, EG6-006)
- „GA4-Audit oder GA4-Setup: ab CHF 900 | GTM-Migration: ab CHF 1'200 | Server-Side-Tracking-Setup: ab CHF 1'500 | Data-Studio-Dashboard: ab CHF 500 | Consent-Mode-v2-Implementierung: ab CHF 300 | **CHF 180/Stunde**“ (cloudWEB, CH, EG6-012)

**Anti-vzor „měření je v ceně marketingu“**
- „Perus 1 500 €/kk; Kasvu 2 500 €/kk; Pro 4 000 €/kk – kaikki paketit sisältävät: alkuauditointi ja kehityssuunnitelma, hakukoneoptimointi, Google Ads, **analytiikka**, sähköpostiraportointi.“ (Digily Oy, FI, EG6-007)
- „**Google Tag Managerin ylläpito on osa kuukausityötä jatkuvan asiakkuuden myötä.**“ (Sampsa Vainio, FI, EG6-008)

**BigQuery = konec veřejné ceny**
- „Basis GA4 & GTM €495 | Basis GA4 + Consent Mode €695 | GA4 E-commerce tracking vanaf €795 | **GA4 maatwerk & server-side: Op maat offerte na intake (inclusief BigQuery-koppeling)**“ (Webanalist, NL, EG6-022)

**Kvantifikace ztráty dat (podpora selling pointu)**
- „**Post iOS 14.5, ad-blocker e ITP, il tracciamento client-side perde tra il 20% e il 50% dei dati.**“ (Blagoweb, IT, EG6-005)

**Retainer bez ceny**
- „Vaste samenwerking, meetbare groei | **Maandelijks opzegbaar** | Vaste prijs of losse uren“ (Converted, BE, EG6-009)
- „**We monitor, iterate, and make sure what we built is working: in production, with real users, under real conditions.**“ (Beneath Analytics, IE, EG6-014)
- „Wir richten Ereignisse, Parameter und Ziele ein – in GA4 und im Google Tag Manager | **Regelmäßige, individuelle Reportings inkl. Handlungsempfehlungen**“ (EOM, DE, EG6-025)

**Nezávislý katalog (kontrola H3 na cizím vzorku)**
- „Web Tonic: Starting at USD $3,000 per month | Bind Media: From GBP £750 per project | Sense Data Lab: From AUD $750 | Digitxl: From AUD $1,999“ – **4 z 21 agentur mají cenu, z toho 1 měsíční; všech 8 evropských je quote-based** (Web Tonic katalog, EG6-013)

### 2.4 Vyřízení jmenného seznamu z `03-trh-eu.md` § 5

| Subjekt | Výsledek | Evidence |
|---|---|---|
| Analytics Heroes | **neexistuje** – DNS `analyticsheroes.com` ENOTFOUND; závěr 1. kola potvrzen | EG6-020 |
| Data to Value | **neexistuje** – DNS `www.datatovalue.co.uk` ENOTFOUND (doména není delegovaná) | EG6-019 |
| Ideo Force (PL) | **nalezeno, bez ceny** – analytika nabízena (strategie měření, GA4/GTM/CRM/e-commerce/POS, A/B, consent), abonament ani ceník nikde | EG6-015 |
| Whites (PL) | **nedostupné** – `whites.pl` DNS ETIMEOUT přímo i přes r.jina.ai (HTTP 422) | EG6-026 |
| Metrics Agency (PL) | **nenalezeno** – `metricsagency.pl` DNS ENOTFOUND (uvedena v katalogu Web Tonic) | EG6-027 |
| „Dataroom“ | **neidentifikováno** – `dataroom.fi` ENOTFOUND; název v EU obsazen desítkami VDR firem (jiná kategorie) | EG6-027 |
| Datatrics (NL) | **mimo kategorii** – akvizice, ceník přesměrován na Spotler; personalizace a marketing automation, ne správa měření | EG6-029 |
| OrangeLoops | **mimo kategorii** – AI-native product engineering (Boston/Montevideo), analytiku nenabízí | EG6-028 |
| Adapt (DK) | **není konkurent** – „Data & Insights“ jen jako obecná expertiza, bez GA4/GTM/BQ a bez ceny | EG6-016 |
| Measure Minds (GB) | **nedostupné i alternativní cestou** – přímý fetch 403, r.jina.ai vrací pouze cookie policy (JS zeď) | EG6-018 |
| Loves Data (AU) | **není konkurent** – výhradně kurzy (GA4, Ads, GTM, Data Studio) + komunita ke kurzům | EG6-017 |

### 2.5 Pokrytí dříve nepokrytých zemí

| Země | Stav po 2. kole | Subjekty | Veřejná měsíční cena správy |
|---|---|---|---|
| Švýcarsko | **pokryto** | Gipfelwerk, DLM Digital, digital M., cloudWEB | **ano, 2 ze 4** (300 a 490 CHF) |
| Španělsko | **pokryto** (nad rámec Amplio z 1. kola) | YAG Comunicación, ePoint | **ano, 2 ze 2** |
| Itálie | **pokryto** | Blagoweb, Q4 Studio | **ano, 2 ze 2** |
| Belgie | **pokryto** | Converted, Jens Van Vlierberghe | ne (0 ze 2) |
| Finsko | **pokryto** | Digily Oy / Sampsa Vainio | jen jako součást marketingového balíčku |
| Norsko | **pokryto** | Haus Byrå | ne – jen setup |
| Irsko | **doplněno** | Beneath Analytics (+ Khalid Farhan z 1. kola) | ne (0 ze 2 nových) |
| Portugalsko | **nepokryto** | – | – (viz § 4) |

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Cenová pásma: závěr POTVRZEN, se zpřesněním

Nových fixních měsíčních balíčků bez BigQuery je 7 (v Kč/měs, u rozpětí dolní hranice):
2 500 · 6 250 · 7 250 · 7 800 · 12 250 · 12 740 · 22 250.

- **Medián = 7 800 Kč.** Po vyloučení Q4 Studia (100 €/měs je jen provoz infrastruktury, ne správa měření)
  je medián **10 025 Kč**. Tvrzení 1. kola „medián 8–10 tis. Kč“ tedy **platí i na nezávislém vzorku ze 4 nových zemí**.
- **Horní kvartil je citlivý na to, jak se čtou rozpětí.** Podle dolních hranic vychází 12 740 Kč, podle horních
  20 000 Kč. Pásmo „horní kvartil 16–23 tis.“ je tedy **spíš horní okraj reality** – držitelný, ale ne konzervativní.
- **Návrh tieru 1 (8 900 Kč) je přesně na trhu.** DLM Digital dává 7 800 Kč, YAG Esencial 7 250 Kč, ePoint od 6 250 Kč.
  Prostor pro 8 900 Kč existuje, ale **nikoli jako „levná“ nabídka** – je to mírně nad evropským dnem.
- **Návrh tieru 2 (19 900 Kč) je nad evropským středem.** YAG Pro (12 250) a Gipfelwerk (12 740) dodávají za dvě
  třetiny ceny podobný rozsah. Rozdíl musí být obhájen QA po každém releasu do 24 h a číslem reakční doby, ne seznamem činností.
- **Návrh tieru 3 (39 000 Kč) je nad vším, co jsme v EU veřejně našli.** Nejvyšší veřejný evropský měsíční bod za
  správu s BigQuery je Blagoweb 30 000 Kč (a ten zahrnuje i sGTM a konverzní API pro čtyři platformy). Nad ním jsou
  už jen hodinové modely (CH 41 600–46 800 Kč za 10 h) a Amplio Managed 45 000 Kč.

### 3.2 Hypotéza H1 (BQ-first): dále OSLABENA, ale nově i kvantifikovaně

1. kolo tvrdí, že správa s BigQuery je **3,7–5,5× dražší**. Nová data ukazují, že to platí jen při srovnávání
napříč trhy. **Uvnitř jednoho dodavatele je skok 1,5–2,6×**:

| Dodavatel | Bez BQ | S BQ | Násobek |
|---|---|---|---|
| Amplio Data (ES, 1. kolo) | 700–1 200 € | 1 800+ € | 1,5–2,6× |
| Blagoweb (IT, nově) | – (BQ je součást základu) | 450–1 200 € | – |
| Blagoweb: dolní vs. horní tier téhož canone | 450 € | 1 200 € | 2,7× |

Praktický důsledek pro ceník: **poměr 8 900 → 39 000 Kč je 4,4×**, tedy skoro dvojnásobek toho, co si evropský trh
za stejný skok účtuje uvnitř jedné nabídky. Buď je potřeba tier 3 obhájit něčím, co Evropa nedělá
(denní rekonciliace po `transaction_id`, monitoring exportu, reakce do 4 h), nebo posunout tier 3 blíž k 30 000 Kč
a rozdíl vybrat jako oddělenou položku za provoz sGTM – přesně jak to dělá Gipfelwerk (Betreuung 490 CHF + hosting 30 CHF)
a Manids (údržba + samostatná sGTM položka).

Zároveň se potvrzuje, že **BigQuery není podmínka vstupu**: 6 ze 6 nových subjektů s veřejnou měsíční cenou má
plnohodnotný non-BQ tier, a 5 nezávislých EU subjektů (Webanalist, Measurelab, Precis, Fresh Egg, Amplio) ukazuje,
že s BigQuery mizí i ochota zveřejnit cenu.

### 3.3 Hypotéza H2 (tiché rozbití): POTVRZENA, ale mimo Itálii jazykem konfigurace

Nové země mluví o problému **dvěma různými jazyky**:
- **Incidentní** (jako CZ návrh): Blagoweb kvantifikuje ztrátu – „client-side tracking ztrácí 20–50 % dat“ (EG6-005);
  DLM prodává „Fehlerbehebung“ jako položku měsíčního paušálu (EG6-011).
- **Konfigurační** (statický pohled): ePoint popisuje pain jako „Datos duplicados, eventos sin valor, conversiones sin
  registrar … Tomas decisiones por intuición“ (EG6-002) – tedy „je to špatně nastavené“, ne „tiše se to rozbilo“.
  YAG jde ještě dál a **pain přiznává jako limit služby**: „No prometemos una medición perfecta al 100%“ (EG6-001).

To znamená, že sdělení „měření se tiše rozbilo a zjistili jsme to za 2 týdny až 3 měsíce“ **není v Evropě obsazené**
ani ve Španělsku, Itálii, Švýcarsku, Belgii, Finsku a Norsku. Jediný, kdo je mu blízko, je Blagoweb (procenta ztráty)
a z 1. kola Manids DK a LEMONTEC AT.

### 3.4 Hypotéza H3 (trh nemá veřejný ceník správy): POTVRZENA, ale je třeba ji přeformulovat

Nová čísla: 6 z 21 (29 %) dostupných nových subjektů má veřejnou měsíční cenu; nezávislý katalog Web Tonic má
4 z 21 (19 %) a **všech 8 evropských agentur v něm je quote-based** (EG6-013). Po sloučení kol: **15 ze 79 (19 %)**.

Zpřesnění: veřejné ceny nejsou náhodné, koncentrují se podle **typu a velikosti dodavatele**, ne podle země:
- **mají cenu**: malé produktizované agentury a freelanceři v menších trzích (AT, DK, ES, IT, CH, PL) – tj. ti,
  kdo ze správy udělali produkt s názvem;
- **nemají cenu**: klasické analytické agentury (Measurelab, Precis, Trakken, e-dialog, Conversion.pl, Cube, Ideo Force,
  monobunt, JSH, EOM, Beneath) a **kdokoli, kdo do dodávky přidá BigQuery**.

Pro DataLayer.cz to znamená, že zveřejněný ceník **nezařadí firmu mezi „levné“, ale mezi „produktizované“** –
a to je v ČR (2 ze 45 subjektů s cenou) stále volné pole.

### 3.5 Hypotéza H5 (SaaS nahrazuje část hodnoty): NEZMĚNĚNA, přibyla jen jedna hranice

Q4 Studio (IT) prodává „monitoraggio“ za 100 €/měs (2 500 Kč), ale předmětem je kontejner, API integrace, deduplikace
a dokumentace – **ne GA4 a ne reakce na incident** (EG6-006). Spolu s LEMONTEC (199 €) a NiceLookingData (49 $) to
kreslí stejnou hranici jako v 1. kole: **detekce a provoz se dají koupit za 2–5 tis. Kč/měs; diagnóza, oprava
a komunikace (G7, H1–H5) tam nejsou a jsou to ony, co dělá cenu.**

### 3.6 Nové poznatky mimo hypotézy

1. **Nikdo z 21 nových subjektů neuvádí reakční dobu na incident.** Nejblíž je DLM „fester Ansprechpartner“ (bez čísla)
   a Webanalist „Binnen 2 werkdagen contact“ (což je odezva obchodu, ne SLA). Číslo reakční doby zůstává v kontinentální
   Evropě **volné** – potvrzeno napříč CH, IT, ES, BE, FI, NO, AT, DE, IE.
2. **Nový model účtování údržby: fixní čtvrtletní rozpočet** (cloudWEB CH, EG6-012). Alternativa k měsíčnímu paušálu,
   která snižuje pocit „platím i v měsíci, kdy se nic nedělo“ – zvážit jako variantu pro malé klienty.
3. **Oddělený hosting sGTM jako samostatná řádka ceníku** je nezávisle potvrzen třetí zemí (Gipfelwerk CH ab 30 CHF/měs,
   po Manids DK a TAGGRS/GTM-Hosting). Návrh DataLayer.cz „Provoz sGTM 1 500–6 000 Kč zvlášť“ je tím pádem tržní standard.
4. **Transparentnost nákladů třetích stran** (Gipfelwerk vypisuje ceny Cookiebot a Usercentrics; Blagoweb vypisuje
   Cloud Run, Stape.io a BigQuery zvlášť) je detail, který v ČR nikdo nedělá a stojí nula – dá se převzít.
5. **Ratio mezi tiery je v Evropě mírnější než v návrhu.** YAG 290/490/890 = **1 : 1,7 : 3,1**; návrh DataLayer.cz
   8 900/19 900/39 000 = **1 : 2,2 : 4,4**. Pokud má být nejnižší tier vstupní branou, je evropsky obvyklejší
   menší rozestup – nebo naopak výslovně jiná cílová skupina pro každý tier.

---

## 4. MEZERY, které zůstávají

- **Portugalsko se nepodařilo pokrýt vůbec.** Dva vyhledávací dotazy v portugalštině vrátily jen kurzy, brazilský obsah
  a obecné průvodce GA4; jediná nalezená stránka s „avença mensal“ (ascmi.com.pt) má ceny v obrázcích a GA4/GTM v textu
  nezmiňuje. PT zůstává bílé místo.
- **Belgie má pokrytí, ale nulovou cenu.** Oba nalezené subjekty (Converted, Jens Van Vlierberghe) mají retainer
  a měsíční výpověď, ale cenu ne. Pro BE cenovou hladinu nemáme ani jeden bod – nejbližší proxy je NL a FR (FR nepokryta vůbec).
- **Francie nebyla v zadání ani v 1. kole** – v EU tedy chybí druhý největší trh.
- **Measure Minds (GB)** zůstává neověřen: 403 při přímém fetchi, cookie/JS zeď i přes textový mirror. Vyžaduje prohlížeč s JS.
- **Whites (PL)** – DNS ETIMEOUT opakovaně; nelze rozhodnout, zda nabídku správy má.
- **„Dataroom“ a Metrics Agency** se nepodařilo identifikovat; „Dataroom“ v zadání 1. kola byl pravděpodobně omyl.
- **Kurz NOK nebyl v zadání**, norské ceny proto nejsou přepočteny na Kč a nevstupují do žádného mediánu.
- **Žádná z nových cen není ověřena mystery shoppingem** – všechny jsou „od“ ceny z webu; skutečný rozsah za 290 € nebo
  300 CHF neznáme. U rozpětí (ePoint 250–800, Blagoweb 450–1 200) nevíme, co posouvá cenu uvnitř rozpětí.
- **Reakční doby/SLA v kontinentální EU** – potvrzeno, že se nepublikují; ale tím pádem nemáme ani jeden bod pro srovnání,
  kolik SLA na trhu stojí. Zůstává pouze UK (Webdigita 15 min, Hookflash same-day, Merkle 24 h) z 1. kola.
- **Přímé hlasy klientů** z nových zemí nemáme vůbec – všech 29 nových zdrojů jsou weby dodavatelů nebo katalog.
  Painy z BE/CH/IT/ES/FI/NO jsou tedy „z druhé ruky“ stejně jako v 1. kole u DACH a PL.
