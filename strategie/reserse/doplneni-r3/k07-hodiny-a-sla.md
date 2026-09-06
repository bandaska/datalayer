# K07 – Ověřená hodinová dotace a SLA v paušálech konkurence

**Kolo 3, úkol B3 z `10-doplneni-a-overeni-r2.md` § 6. Datum přístupu všech zdrojů: 2026-09-06.**
Data: `strategie/data/fragments/r3-k07-pricing.csv` (18 řádků, `PK7-001`–`PK7-018`),
`strategie/data/fragments/r3-k07-evidence.csv` (26 řádků, `EK7-001`–`EK7-026`, `phase=12`).

---

## 1. Shrnutí

**Odpověď na hlavní otázku: srovnání „19 900 Kč za 3 h + SLA 8 h vs. DASE 17 500 Kč za neznámý objem“ je
neplatné, protože DASE žádný objem neprodává – prodává klientem určenou výši paušálu. Skutečný tržní dvojník
našeho tieru 2 existuje, ale je to německá BuI Hinsche: 599 €/měs (14 975 Kč) za **3 h + reakci 1 pracovní den**
a 1 450 €/měs (36 250 Kč) za **8 h + reakci 4 h**.**

1. **Hodiny nebo reakční dobu publikuje s číslem 5 z 18 prověřených paušálů.** Zbylých 13 má buď slovní
   příslib („hurtig fejlrettelse“, „Ansprechpartner“, „Soporte y mantenimiento“), nebo číslo nemá vůbec.
2. **DASE není balíček.** Doslova: *„Výšku mesačného paušálu si určuje vždy klient, pričom výška paušálu
   determinuje objem poskytovaných prác. Nami odporúčané minimum […] je 700 eur bez DPH mesačne.“*
   (`EK7-005`). Plus *„platíte len za práce, ktoré budú reálne odvedené“* a *„2-mesačná výpovedná doba“*
   (`EK7-006`). 17 500 Kč je **podlaha čerpání**, ne cena za rozsah.
3. **Jediný subjekt s kompletně doloženým hodinovým modelem je Measurelab (UK) – a číslo má jen ve státním
   registru, ne na vlastním webu.** G-Cloud 14: *„One credit is equivalent to one hour“*, pásma 120–150 £/kredit,
   minimum 10 kreditů/měs, *„Up to 20% of a month's credits can be rolled over“*, reakce *„Within 24 hours,
   09:00 - 17:30 weekdays“* (`EK7-017`, `EK7-004`). Na vlastní stránce má tatáž firma jen
   *„Guaranteed response times“* a *„Monthly allocation“* – **obojí bez čísla** (`EK7-026`).
4. **Rozestup 8 900 → 19 900 (2,24×) je obhájitelný; teze 2. kola o tržních 1,6–1,8× je artefakt výběru.**
   Rozestupy 1,6–1,8× platí tam, kde se tiery liší jen **obsahem** (YAG 1,69/1,82; Digily 1,67/1,60).
   Kde se liší **hodinami nebo SLA**, jsou rozestupy 2,0–2,6× (BuI Hinsche 2,42×; Elevar 2,00×;
   RobertNemec 2,00×; Amplio 2,57×).
5. **Celkové rozpětí naší nabídky (4,38× od nejnižšího k nejvyššímu) je ale širší než u kteréhokoli
   nalezeného tříúrovňového měřicího paušálu** (RobertNemec 3,37×, YAG 3,07×, Digily 2,67×).
6. **Česká cena je hodinový blok, ne balíček.** RobertNemec: 1 850 Kč/h a 9 250 / 18 500 / 31 200 Kč měsíčně –
   tedy **přesně 5,0 h a 10,0 h** (`EK7-013`). Zároveň tím opravuji stav řádku P2-003: částka 31 200 Kč
   **na stránce je** (ověřeno v raw HTML), 2. kolo ji vyřadilo neprávem.
7. **Amplio zlevnilo.** Ceníková cena k dnešku je *„From €660 per month“* (Maintained) a *„From €1697 per
   month“* (Managed), ne 700–1 200 € a 1 800 € (`EK7-003`). Blog téže firmy stále uvádí staré částky.
   Rozestup zůstává 2,57×. **„Live in 72h“ je doba nasazení, ne reakční doba.**
8. **ADS-Tracking má hodiny ROČNÍ, ne měsíční:** 10 / 20 / 30 h **za rok** u tierů Small / Middle / Max,
   Basic a Starter nemají hodiny žádné (`EK7-001`). Middle za 799 €/měs (19 975 Kč) dává **1,67 h měsíčně** –
   tedy zhruba polovinu našeho tieru 2 za srovnatelnou cenu. Podmínka: *„12 Monate Mindestlaufzeit ·
   Zahlung im Voraus für die Laufzeit“* (`EK7-002`).
9. **Reakční doba se v tomto oboru zatím nedá prodat samostatně.** Reakce do 4 h v pracovní dny stojí
   v DACH **198 Kč/měs** – jako součást pluginu za 7,90 € (`EK7-025`). Číslo SLA není hodnota; hodnotou je
   rozsah, který to číslo kryje.
10. **Tvrzení 2. kola „LEMONTEC slibuje odhalení do 24 h za 4 975 Kč“ je nutné zpřesnit.** Na placené
    produktové stránce žádné číslo není, jen *„Experten für Fehlerbehebung verfügbar“* (`EK7-008`).
    Číslo 24 h je na blogu a týká se **detekce alertovacím nástrojem**, ne reakce člověka (`EK7-022`).

---

## 2. FAKTA

### 2.1 Hodiny a reakční doba – co je skutečně doložené

| Subjekt | Cena/měs | Hodiny v ceně | Reakční doba | Zdroj (evidence) |
|---|---|---|---|---|
| **BuI Hinsche (DE)** Basis | 599 € = **14 975 Kč** | **3 h/měs** („3 Stunden Anpassungs-Budget / Monat“) | **1 pracovní den** | `EK7-023` |
| **BuI Hinsche (DE)** Professional | 1 450 € = **36 250 Kč** | **8 h/měs** („8 Stunden Entwicklungs-Budget / Monat“) | **4 h** (víkend do 24 h) | `EK7-023` |
| **BuI Hinsche (DE)** Enterprise | individuálně | „Budget nach Bedarf“ | **< 1 h, 24/7 SLA** | `EK7-023` |
| **Measurelab (UK)** min. pásmo | 10 × 150 £ = **43 500 Kč** (roční SOW 130 £ = 37 700 Kč) | **10 h** (1 kredit = 1 h, minimum pásma) | **do 24 h, Po–Pá 09:00–17:30** | `EK7-017`, `EK7-004` |
| **RobertNemec.com (CZ)** | 9 250 / 18 500 / 31 200 Kč | **5,0 h / 10,0 h / ~16,9 h** (odvozeno přesně z 1 850 Kč/h uvedených tamtéž) | neuvedena | `EK7-013` |
| **ADS-Tracking (DE)** Small/Middle/Max | 449 / 799 / 1 299 € | **10 / 20 / 30 h za ROK** = 0,83 / 1,67 / 2,50 h měsíčně | neuvedena | `EK7-001` |
| **Elevar Analyst Services (US)** T1/T2 | +500 / +1 000 $ = 11 500 / 23 000 Kč | **3 / 10 „analyst requests“ měsíčně** (ne hodiny) | 24 h standard / 12 h priority (dle tieru nástroje) | `EK7-021` |
| **ga4monitor.com** Agency | 499 $ = 11 477 Kč | žádné (jen podpora) | **„24-hour response SLA“ – jen v Agency tieru** | `EK7-016` |
| **BuI Hinsche plugin (DE)** | 7,90 € = **198 Kč** | žádné | **4 h v pracovní dny** (Slack/Teams) | `EK7-025` |
| DASE (SK) | od 700 € = 17 500 Kč | **klient si určuje sám** | neuvedena | `EK7-005` |
| Amplio (ES) Maintained/Managed | 660 / 1 697 € | neuvedeny | neuvedena („Live in 72h“ = nasazení) | `EK7-003` |
| Manids (DK) Minimum/Aktiv | 1–3 / 3–8 tis. DKK | neuvedeny | „hurtig fejlrettelse“ – bez čísla | `EK7-007` |
| LEMONTEC (AT) | 199 € = 4 975 Kč | neuvedeny | neuvedena na produktu | `EK7-008` |
| YAG (ES) 3 tiery | 290 / 490 / 890 € | neuvedeny | „Soporte y mantenimiento“ – bez čísla | `EK7-009` |
| ePoint (ES) | 250–800 € | neuvedeny | neuvedena | `EK7-012` |
| Gipfelwerk (CH) | od 490 CHF | neuvedeny | „feste Ansprechperson“ – bez čísla | `EK7-010` |
| DLM Digital (CH) | od 300 CHF | neuvedeny | „Ansprechpartner“ – bez čísla | `EK7-011` |
| Webanalist (NL) | od 250 € | neuvedeny | neuvedena | `EK7-014` |
| surowiecki (PL) 3 tiery | **cena neuvedena** | **záměrně neuvedeny** | mechanismus P1–P4, číslo až ve smlouvě | `EK7-019` |
| Signals Bar (CZ) | 2 500 Kč | neuvedeny | neuvedena | `EK7-015` |
| Digily (FI) 3 tiery | 1 500 / 2 500 / 4 000 € | neuvedeny | neuvedena (osa = frekvence schůzek) | `EK7-018` |
| Measurelab – vlastní web | neuvedena | „Monthly allocation“ bez čísla | „Guaranteed response times“ **bez čísla** | `EK7-026` |

**Skóre: 18 prověřených paušálů, z toho 5 s číslem u hodin, 5 s číslem u reakční doby, 3 s obojím
(BuI Hinsche, Measurelab, Elevar). 13 paušálů nemá ani jedno.**

### 2.2 Rozestupy mezi tiery

| Nabídka | Tiery (Kč/měs) | Rozestupy | Rozpětí | Co se mezi tiery mění |
|---|---|---|---|---|
| **DataLayer.cz (návrh)** | 8 900 / 19 900 / 39 000 | **2,24× / 1,96×** | **4,38×** | hodiny + SLA + BigQuery |
| BuI Hinsche (DE) | 14 975 / 36 250 / – | **2,42×** | 2,42× | **hodiny (3→8 h) + SLA (1 den→4 h)** |
| Amplio (ES) | 16 500 / 42 425 | **2,57×** | 2,57× | **BigQuery + dedikovaný tým** |
| Manids (DK) | 3 350 / 10 050 (dolní meze) | **3,00×** (středy 2,75×) | 3,00× | **frekvence (kvartálně → měsíčně)** |
| Elevar Analyst (US) | 11 500 / 23 000 | **2,00×** | 2,00× | **objem (3 → 10 požadavků)** |
| RobertNemec (CZ) | 9 250 / 18 500 / 31 200 | **2,00× / 1,69×** | 3,37× | **hodiny (5 → 10 → 16,9 h)** |
| YAG (ES) | 7 250 / 12 250 / 22 250 | 1,69× / 1,82× | 3,07× | obsah (consent, sGTM, CAPI → DWH, analytik) |
| Digily (FI) | 37 500 / 62 500 / 100 000 | 1,67× / 1,60× | 2,67× | obsah + frekvence schůzek (3 měs. → 1 měs. → 2–4×) |
| ADS-Tracking (DE) | 4 475 / 7 475 / 11 225 / 19 975 / 32 475 | 1,67× / 1,50× / 1,78× / 1,63× | 7,26× | objem sessions (+ hodiny až od 3. tieru) |
| Marketing Makers (CZ) | 6 400 / 12 800 / 22 400 | 2,00× / 1,75× | 3,50× | obsah (PPC balíček) |
| per4mens (CZ) | 7 250 / 10 150 / 18 850 | 1,40× / 1,86× | 2,60× | obsah (PPC balíček) |
| E2M (US, white-label) | 29 877 / 48 277 / 91 977 / 229 977 | 1,62× / 1,91× / 2,50× | 7,70× | kapacita týmu |
| Measurelab (UK) – sazba/kredit | 120 / 125 / 130 / 140 / 150 £ | 1,04–1,08× | 1,25× | **objem a délka závazku snižují sazbu** |

**Rozdělení podle toho, co se mezi tiery mění (mediány):**

| Typ skoku | Nalezené rozestupy | Medián |
|---|---|---|
| jen **obsah / funkce** | 1,40 / 1,50 / 1,60 / 1,62 / 1,63 / 1,67 / 1,67 / 1,69 / 1,75 / 1,78 / 1,82 / 1,86 / 1,91 | **1,67×** |
| **hodiny a/nebo SLA** | 1,69 / 2,00 / 2,00 / 2,42 | **2,00×** |
| **datová vrstva (BQ) nebo frekvence** | 2,00 (Funnel.io, z 2. kola) / 2,57 (Amplio, BQ) / 3,00 (Manids, kvartálně→měsíčně) | **2,57×** |

Náš skok 8 900 → 19 900 = **2,24×** patří do druhé kategorie (přidáváme hodiny i SLA) a leží uvnitř jejího
rozsahu. Skok 19 900 → 39 000 = **1,96×** patří do třetí kategorie (přidáváme BigQuery) a leží **pod** jejím
mediánem – tedy je spíš konzervativní, ne přemrštěný.

### 2.3 Cena za hodinu, když se dá spočítat

| Subjekt | Kč/měs | h/měs | Kč za hodinu |
|---|---|---|---|
| RobertNemec.com (CZ) | 9 250 / 18 500 / 31 200 | 5 / 10 / 16,9 | **1 850 Kč** (konstantní – lineární) |
| BuI Hinsche Basis (DE) | 14 975 | 3 | **4 992 Kč** |
| BuI Hinsche Professional (DE) | 36 250 | 8 | **4 531 Kč** |
| Measurelab měsíční SOW (UK) | 43 500 | 10 | **4 350 Kč** |
| Measurelab roční SOW 70+ (UK) | 243 600 | 70 | **3 480 Kč** |
| ADS-Tracking Middle (DE) | 19 975 | 1,67 | 11 985 Kč – *číslo je zavádějící: cena je za infrastrukturu sGTM podle sessions, ne za práci* |
| Elevar Analyst T1 / T2 (US) | 11 500 / 23 000 | 3 / 10 požadavků | 3 833 / 2 300 Kč **za požadavek** |
| **DataLayer.cz tier 2** | 19 900 | 3 h změn (celková dodávka odhadem 9–13 h) | **6 633 Kč za h změn / 1 531–2 211 Kč za h celkové dodávky** |

**Cenotvorba je v celém vzorku sublineární v objemu:** Measurelab snižuje sazbu ze 150 na 120 £ (−20 %) při
70+ kreditech a ročním závazku; Elevar snižuje cenu za požadavek ze 3 833 na 2 300 Kč (−40 %); BuI Hinsche
z 4 992 na 4 531 Kč (−9 %). Jedinou výjimkou je RobertNemec, u kterého je sazba konstantní.

### 2.4 Podmínky spolupráce (závazek, výpověď, překročení hodin)

| Subjekt | Minimální závazek | Výpovědní lhůta | Překročení / nevyčerpání hodin |
|---|---|---|---|
| **BuI Hinsche (DE)** | *„Die ersten drei Monate sind eine Pilotphase, die du monatlich kündigen kannst. Danach läuft der Vertrag 12 Monate und verlängert sich um jeweils 12 Monate.“* | v pilotu měsíčně, pak 12 měs. | *„Der Aufwand geht zuerst gegen dein Monatsbudget, alles darüber rechnen wir nach echtem Aufwand ab, mit Kostenrahmen und deiner Freigabe vorher.“* + *„Ungenutzte Stunden lassen sich innerhalb des laufenden Quartals übertragen.“* (`EK7-024`) |
| **ADS-Tracking (DE)** | *„12 Monate Mindestlaufzeit · Zahlung im Voraus für die Laufzeit“* | neuvedena | *„Ein Paket-Upgrade ist jederzeit möglich“* (`EK7-002`) |
| **Measurelab (UK)** | sazba klesá s délkou SOW (měsíční → kvartální → roční) | neuvedena | *„Up to 20% of a month's credits can be rolled over to the following month […] you're welcome to top-up at any time“* (`EK7-017`) |
| **DASE (SK)** | neuvedeno | **2 měsíce** (inzerováno jako výhoda) | *„platíte len za práce, ktoré budú reálne odvedené“* (`EK7-006`) |
| **ePoint (ES)** | *„Sin permanencia. Recomendamos un mínimo de 3 meses“* | **15 dní** | neuvedeno (`EK7-012`) |
| **Amplio (ES)** | *„Cancel any time after month one“*; u Managed *„We recommend 12 months“* | měsíc | neuvedeno (`EK7-003`) |
| LEMONTEC (AT) | *„Keine Bindung […] jederzeit wieder kündigen“*; 14 dní náběh před startem | žádná | neuvedeno (`EK7-008`) |
| YAG (ES) | *„Sin permanencia, sin letra pequeña“* | neuvedena | neuvedeno (`EK7-009`) |
| Digily (FI) | *„Sopimus on voimassa kuukauden kerrallaan“* | měsíc | neuvedeno (`EK7-018`) |
| ga4monitor | *„all plans can be cancelled at any time from your dashboard“* | žádná | – (`EK7-016`) |
| surowiecki (PL) | neuvedeno | neuvedena | *„Niewykorzystanie i przenoszenie pojemności wymaga ustalenia. Zasady rozliczenia zapisujemy w ofercie“* (`EK7-019`) |

### 2.5 Jak si obor definuje reakční dobu, aby ji splnil

BuI Hinsche má jedinou nalezenou **definici okna, ve kterém se SLA měří**:

> *„Reaktionszeiten gemessen in Geschäftszeiten (Mo bis Do, 10 bis 12 und 13 bis 16 Uhr), außer bei
> Wochenend- und 24/7-Tarifen.“* (`EK7-024`)

To je 5 hodin denně, 4 dny v týdnu, tedy **20 hodin týdně**. „Reakce do 4 hodin“ tak reálně znamená
„do konce následujícího dopoledne“. Measurelab má okno *„Monday to Friday 09:00 - 17:30“* (`EK7-004`).
Náš slib „reakce do 8 h“ dnes žádné okno definované nemá.

### 2.6 Vymezení rozsahu – nejlepší nalezená formulace

surowiecki (PL) publikuje mechaniku paušálu podrobněji než kdokoli jiný v korpusu, a přitom **záměrně
bez jediného čísla**:

> *„Pakiet godzin jest limitem pracy, a nie celem usługi.“*
> *„Zakres przed liczbą godzin. Najpierw ustalamy systemy, odpowiedzialność, rytm spotkań, sposób
> zgłaszania i oczekiwaną dostępność. Dopiero wtedy dobieram pojemność i wycenę.“*
> *„Stała opieka nie oznacza nieograniczonego zakresu ani dyżuru 24/7.“*
> *„Monitoring nie wykryje każdego błędu.“* (`EK7-019`)

Osy, podle kterých určuje kapacitu: *„liczba systemów, częstotliwość zmian, oczekiwany rytm spotkań,
zakres monitoringu i wielkość backlogu“*, a po prvních měsících se plán porovná se skutečným čerpáním
a kapacita se koriguje (`EK7-020`).

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Na pásmu 8 900 Kč

**Zesiluje se, ale mění se argument.** Verze 2 říká, že 8 900 Kč leží pod evropským mediánem vstupních tierů,
ale osm z patnácti evropských subjektů je levnějších. Toto kolo ukazuje, **proč jsou levnější**:

- **Manids Minimum (3 350 Kč) je kvartální, ne měsíční kontrola** – *„Kvartalsvis tjek“* (`EK7-007`).
  Gipfelwerk (12 740 Kč) má také *„vierteljährliche Tracking-Checks“* (`EK7-010`). Nejlevnější evropská
  podlaha tedy není srovnatelný produkt: je to čtvrtletní kontrola prodaná jako měsíční paušál.
- **Signals Bar za 2 500 Kč obsahuje víc lidské práce, než mu 2. kolo připsalo** – pět položek včetně
  *„Údržba při změnách v reklamních systémech a datových zdrojích“* a *„Podpora a konzultace nad tím,
  co se vyplatí hlídat“* (`EK7-015`). Bod 6 doporučení verze 2 („vstupní tier musí explicitně odpovědět,
  čím se liší od Signals Bar“) tím **posiluje**, ne oslabuje.
- Nejbližší doložený dvojník vstupního tieru není žádná analytická agentura, ale **BuI Hinsche Basis:
  14 975 Kč za 3 h a reakci do jednoho pracovního dne**. Náš vstupní tier je za 8 900 Kč o 41 % levnější,
  ale hodiny ani reakční dobu zatím nemá napsané.

**Doporučení: k 8 900 Kč doplnit číslo hodin a definici okna reakce.** Bez toho tier nejde odlišit od 2 500 Kč
ani obhájit proti 3 350 Kč.

### 3.2 Na pásmu 19 900 Kč

**Nejvíc se mění tady, a k lepšímu.** Verze 2 tvrdí, že 19 900 Kč je nejlépe podepřený tier, protože šest
subjektů leží v pásmu 17 500–23 750 Kč. Toto kolo ukazuje, že **z těch šesti je jen jeden skutečně
srovnatelný**:

- **DASE (17 500 Kč) do srovnání nepatří** – není to balíček, ale minimum klientem určeného čerpání
  s platbou za skutečně odvedenou práci (`EK7-005`, `EK7-006`). Argument „jsme dražší/levnější než DASE“
  se nedá vyslovit, protože DASE nemá rozsah.
- **Amplio zlevnilo** ze 700–1 200 € na *„From €660 per month“* (`EK7-003`), tedy 16 500 Kč. Pásmo se
  posouvá dolů, ne nahoru.
- **ADS-Tracking Middle (19 975 Kč) je téměř na koruně stejný jako náš tier 2 – a dává 1,67 h měsíčně**
  (20 h ročně), navíc při 12měsíčním závazku placeném předem (`EK7-001`, `EK7-002`). Nás to staví
  do dobrého světla, ale rozsah je jiný (sGTM infrastruktura podle sessions).
- **Nový skutečný benchmark: BuI Hinsche.** 3 h + reakce 1 pracovní den = 14 975 Kč; 8 h + reakce 4 h =
  36 250 Kč. **Náš tier 2 (3 h změn + reakce 8 h za 19 900 Kč) leží přesně mezi nimi a blíž k dolnímu bodu** –
  stejné hodiny jako Basis, lepší SLA než Basis, čtvrtinu ceny Professional. To je poprvé, kdy se dá
  o ceně tieru 2 říct něco doložitelného vůči nabídce se stejnými jednotkami.

**Doporučení: přestat citovat DASE jako cenový bod pro tier 2** a nahradit ho dvojicí BuI Hinsche
(hodiny i SLA) a Measurelab (hodiny i SLA, ale UK cenová hladina).

### 3.3 Na pásmu 39 000 Kč

**Beze změny – opora nepřibyla, ale ani neubyla.** Amplio Managed je po zlevnění 42 425 Kč (`EK7-003`),
tedy stále nejbližší evropský bod s BigQuery, a rozestup Maintained → Managed je 2,57×. Náš skok
19 900 → 39 000 je 1,96×, tedy **konzervativnější než jediný srovnatelný BQ skok na trhu**. To je nový
a použitelný argument. Zůstává ale, že jde stále o **n = 1 srovnatelný bod** (Measurelab 70+ kreditů
za 243 600 Kč je jiná liga i země).

Nová výhrada: **rozpětí celé nabídky (4,38×) je širší než u kteréhokoli nalezeného tříúrovňového měřicího
paušálu** (RobertNemec 3,37×, YAG 3,07×). Tři tiery s rozpětím 4,4× obvykle znamenají, že nejnižší a nejvyšší
tier prodáváme dvěma různým trhům – což je v pořádku, ale nemá se to prezentovat jako jeden ceník.

### 3.4 Na otevřené otázce, jestli poptávka existuje

**Neodpovídám na ni, ale posouvám ji.** Toto kolo přináší tři nepřímé signály, všechny stejným směrem:

1. **Nikdo, kdo prodává výhradně správu měření, nepublikuje hodiny ani SLA.** Kdo je publikuje
   (BuI Hinsche), prodává **správu e-shopu**, ve které je tracking jednou položkou z mnoha. Prodejnou
   jednotkou v DACH tedy je „funkční e-shop“, ne „funkční měření“.
2. **Kdo má číslo, schovává ho.** Measurelab má hodiny i reakční dobu, ale zveřejnil je jen tam, kde
   to zákon vyžaduje (G-Cloud), a na vlastní web dal totéž bez čísel (`EK7-026`). To odpovídá trhu,
   kde poptávka není standardizovaná natolik, aby se dala zabalit.
3. **Nejsofistikovanější nabídka v korpusu (surowiecki, PL) čísla odmítá záměrně** – *„Zakres przed
   liczbą godzin“* (`EK7-019`). A jediný SK subjekt s veřejnou cenou nechává objem na klientovi
   (`EK7-005`). Dva nezávislí dodavatelé nezávisle došli ke stejnému: **poptávka je natolik různorodá,
   že fixní balíček nedává smysl.**

To **oslabuje** předpoklad verze 2, že správu měření lze produktizovat do tří veřejných pevných cen,
a **posiluje** doporučení otestovat vedle tří tierů i **hybridní/čerpací model** (druhé rameno rozhovorů
z A4). Zároveň to nic nemění na prioritě A2 (test poptávky) – ta zůstává jedinou cestou k odpovědi.

---

## 4. MEZERY, které zůstávají

1. **Reálně zaplacená cena za správu měření v ČR i po tomto kole neexistuje ani jedna.** Toto kolo pracovalo
   jen s ceníky. Řeší B1 (registr smluv), ne K07.
2. **Horní polovina trhu nadále mlčí.** Enterprise tier BuI Hinsche, surowiecki všechny tři tiery, Measurelab
   na vlastním webu, Signals pro agentury – všude „na dotaz“. **Hodiny a SLA v tomto pásmu se veřejně
   nedozvíme; jedinou cestou je mystery shopping (B2).**
3. **Nezjištěno, kolik hodin reálně spotřebuje dodávka správy měření.** Všechny nalezené hodiny jsou
   *nabídkové* (kolik si dodavatel rezervuje), ne *spotřebované*. Mezera A3 z 2. kola zůstává otevřená
   a toto kolo ji uzavřít nemůže – dá se uzavřít jen vlastními výkazy.
4. **Právní obsah slibu reakční doby nenalezen.** Ani jeden z 18 subjektů nemá veřejné VOP se sankcí
   za nedodržení reakční doby (kredity, sleva). BuI Hinsche u Enterprise slibuje *„SLAs mit garantierten
   Reaktionszeiten“*, ale text SLA veřejný není. Mezera C4 verze 2 trvá.
5. **Manids, Gipfelwerk, DLM, Webanalist, ePoint, YAG: hodiny ani SLA neexistují.** Není to nedostupnost
   zdroje – ověřeno přímo na stránkách, čísla tam prostě nejsou. Další hledání u těchto šesti nemá smysl.
6. **Wayback k Amplio nemá snímek** (`archive.org/wayback/available` vrátil prázdné `archived_snapshots`),
   takže datum změny ceny z 700–1 200 € na 660 € nelze určit. Vlastní blog Amplia stále uvádí staré částky –
   nevíme, která z nich platí pro nové klienty.
7. **Francie a Polsko** (D1 z 2. kola) nebyly v tomto kole pokryty; surowiecki je jediný polský bod a cenu
   nezveřejňuje.
