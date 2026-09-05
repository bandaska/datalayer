# Doplnění R2 / G07 – EU: sazby, SLA a cena BigQuery retaineru

Stav: hotovo (2. kolo, rešerše 2026-09-04). Zaplňuje tři mezery z `03-trh-eu.md` § 5:
(a) chybí salary proxy pro DE/NL/DK, (b) chybí SLA a reakční doby v DACH a PL,
(c) **chybí veřejná cena čistého BigQuery retaineru** – nejslabší místo celé cenové syntézy.

Data: `data/fragments/r2-g07-pricing.csv` (25 řádků, `PG7-001`–`PG7-025`),
`data/fragments/r2-g07-evidence.csv` (35 řádků, `EG7-001`–`EG7-035`, phase = 11).
Kódy aktivit `A1`–`I3` podle `00-taxonomie-sluzby.md`.
Přepočty: 1 EUR = 25 Kč, 1 USD = 23 Kč, 1 PLN = 5,8 Kč, 1 DKK = 3,35 Kč, 1 SEK = 2,2 Kč.
Hrubá mzda × 1,34 (odvody), roční cena ÷ 12.

---

## 1. Shrnutí

1. **Veřejná cena „čistého BigQuery retaineru“ dělaného člověkem v EU stále neexistuje.** Ověřeno na dalších
   šesti subjektech (Adverity AT, Measurelab UK, Stacktonic NL, Bigglo PL, Suasio PL, Conversion PL) – všichni
   službu pojmenují, nikdo neuvede cenu. Adverity to říká otevřeně: „we don't stick to rigid pricing plans“ (EG7-030).
2. **Zaplnit mezeru jde ale z druhé strany: existuje 8 veřejných cen za *spravovanou datovou vrstvu jako produkt*.**
   Weld (DK) 99/389/959 USD, GA4Dataform (NL) 275/375 EUR, Y42 (DE) 500 USD, Funnel.io (SE) 600 USD za tier
   s BigQuery, Datateer 998 USD. **Medián 10 438 Kč/měs** (rozpětí 2 277 – 22 954 Kč).
   To je cenovka *automatizované* části tieru 3 – ne celého tieru.
3. **Evropský benchmark pro celý „managed data service“ dělaný lidmi je 2 000–5 000 EUR/měs = 50 000–125 000 Kč**
   (EG7-022), denní sazba 800–1 500 EUR. Navržený tier 39 000 Kč leží **pod evropskou spodní hranicí** – není předražený.
4. **Multiplikátor za BigQuery uvnitř jednoho dodavatele je 2×, ne 3,7–5,5×.** Funnel.io: 300 USD bez BQ → 600 USD
   s „BigQuery, Amazon S3 and more cloud destinations“ (EG7-018). To nezávisle potvrzuje korekci z G06 (1,5–2,6×).
5. **Mzdový důkaz proti vysokému multiplikátoru:** německý data engineer stojí o **16 %** víc než webanalytik
   (56 000 vs. 48 200 EUR/rok, EG7-034 a EG7-007), nizozemský analytics engineer o **34 %** víc než web analist,
   polský analytics engineer je dokonce o 11 % **levnější** než analityk danych (EG7-035).
   Cenový skok mezi tiery tedy nesmí stát na sazbě člověka, ale na **rozsahu a kadenci práce**.
6. **12 mzdových proxy v 5 zemích.** Medián celkových měsíčních nákladů na jednoho analytika:
   **PL 49 600 Kč < ČR 88 000 Kč (1. kolo) ≈ NL 93 800 Kč < DE 138 900 Kč < SE 149 800 Kč < DK 276 200 Kč.**
   Německý analytik stojí 1,6× a dánský 3,1× víc než český – proto jsou západoevropské balíčky pod 10 000 Kč
   buď silně automatizované, nebo mají 5 hodin.
7. **SLA v DACH: potvrzena mezera z 1. kola.** Ani jeden analytický/tracking dodavatel v DE/AT/CH neuvádí smluvní
   reakční dobu. Ověřeno na nejtransparentnějším z nich: ADS-Tracking.de má 5 veřejných tierů a hodiny podpory ročně,
   ale jediné číslo latence je technické – „Latenz unter 40ms“ (EG7-033). Stejně monobunt (AT), 22GRAD (DE).
8. **Jediné číslo v DACH je detekční, ne smluvní:** LEMONTEC (AT) o velkých chybách píše „innerhalb von 24 Stunden
   erkannt und kann sofort behoben werden“ (EG7-025). Přesně ta formulace, kterou má DataLayer.cz použít.
9. **SLA v DACH ale *existuje a je oceněná* ve vedlejším oboru.** Německá údržba IT má standardní matici
   kritické 2 h / vysoké 4 h / střední 8 h a paušály 400–2 500 EUR/měs (EG7-028); údržba webu má explicitní stupeň
   „Premium-Pakete mit … garantierten Reaktionszeiten 200 bis 300 Euro“ a „Enterprise-Verträge … mit SLA ab 400 Euro“
   (EG7-029). Rozdíl mezi tierem bez a se zaručenou reakcí je tam **~2×** – stejný řád jako skok 8 900 → 19 900 Kč.
10. **SLA v PL: mezera potvrzena, s jednou výjimkou v podobě rámce bez čísla.** Surowiecki má prioritní schéma P1–P4,
    ale „Reakcja według uzgodnionego okna“ – okno se domlouvá individuálně (EG7-004). Conversion.pl prodává kapacitu
    „1 lub 2 dni w tygodniu“ bez ceny i bez reakce (EG7-005). Greenfields, Bigglo, Suasio: nic.
    **Napříč nástroji je reakční doba placený upsell nejvyššího tieru** – Y42, Funnel.io i Littledata ji dávají až
    do Enterprise/Plus (u Littledata je to 5× cena). Výjimka: Analyzify píše „Get answers within 24-48 hours“ už
    za 109 USD/měs (EG7-021).

---

## 2. FAKTA

### 2.1 Veřejné ceny za spravovanou datovou vrstvu (náhrada za chybějící „BQ retainer“)

| Dodavatel | Země | Název doslova | Cena | Kč/měs | BQ | SLA / reakce | Evidence |
|---|---|---|---|---|---|---|---|
| Weld | DK | „Basic – Google BigQuery & Weld Managed BigQuery access“ | From $99/mo (roč.) | 2 277 | yes | neuvedeno | EG7-001 |
| GA4Dataform | NL | „Premium One“ – model GA4→BQ, anomaly detection, error alerts | € 275/mo | 6 875 | yes | Priority e-mail, SLA až v Custom | EG7-017 |
| Weld | DK | „Premium – dbt integration included“ | From $389/mo | 8 947 | yes | neuvedeno | EG7-001 |
| GA4Dataform | NL | „Premium Unlimited“ | € 375/mo | 9 375 | yes | SLA až v Custom | EG7-017 |
| Y42 | DE | „Business“ – orchestrátor, dbt Core, Python | $500/mo | 11 500 | yes | **SLA až v Enterprise** | EG7-002 |
| Funnel.io | SE | „Business – BigQuery, Amazon S3 and more cloud destinations“ | $600/mo (roč.) | 13 800 | yes | **Enterprise SLA až v Enterprise** | EG7-018 |
| Weld | DK | „Business“ | From $959/mo | 22 057 | yes | neuvedeno | EG7-001 |
| Datateer | US | „Pro (Core Growth)“ + automated data quality monitoring | $998/mo + $499/zdroj | 22 954 | yes | dedicated support až v Enterprise | EG7-019 |

**Medián 10 438 Kč/měs, kvartily 8 429 / 15 864 Kč (metoda inclusive).** Všechno jsou **produkty, ne lidé** – GCP náklady jsou vždy zvlášť:
„Google Cloud costs included in the subscription? No. GA4Dataform runs in your own Google Cloud environment.“ (EG7-017).

Referenční body pro *lidskou* datovou správu (market_report, ne vlastní ceník dodavatele – nízká váha):

- EU: „Managed service models: €2,000–€5,000/month. Data engineering consulting costs €800–€1,500/day“ (EG7-022) → **50 000–125 000 Kč/měs**.
- US: „$8,000 to $25,000 per month for ongoing engineering, maintenance, and support“ (EG7-023) → 184 000–575 000 Kč/měs.

Doslovně nejlépe pojmenovaná služba v EU (bez ceny), Measurelab UK:
> „Monitoring, maintenance and governance on subscription, so tracking, pipelines and definitions stay trustworthy as the business changes.“ (EG7-020)

### 2.2 Tracking jako produkt s vysloveným číslem reakce

| Dodavatel | Tier | Cena | Kč/měs | Reakční doba doslova | Evidence |
|---|---|---|---|---|---|
| Analyzify | Standard | $109/mo | 2 507 | „Get answers within 24-48 hours“ | EG7-021 |
| Analyzify | Plus | $206/mo | 4 738 | tamtéž | EG7-021 |
| Littledata | Scale | from $159/mo | 3 657 | „Real-time support“ (bez čísla) | EG7-024 |
| Littledata | Plus | from $792/mo | 18 216 | **„Support SLAs“** | EG7-024 |

Analyzify zároveň prodává „Tracking Health & Troubleshooting System: Automated checks confirm your tracking works“
a „Real tracking experts, not chatbots“ – tedy přesně kombinaci automat + člověk, jen bez QA po releasu a bez komentáře.

### 2.3 Mzdové proxy (12 bodů, 5 zemí)

| Země | Role | Zdroj | Hrubá mzda | Kč/měs (× 1,34) | Evidence |
|---|---|---|---|---|---|
| DE | Data Engineer | StepStone | 56 000 €/rok (4 666 €/měs) | 156 311 | EG7-034 |
| DE | Digital Analyst | StepStone | 51 300 €/rok (4 275 €/měs) | 143 213 | EG7-008 |
| DE | Webanalyst | StepStone | 48 200 €/rok (4 016 €/měs) | 134 536 | EG7-007 |
| DE | Web-Analyst (medián) | Gehalt.de | 44 428 €/rok (3 583 €/měs) | 120 031 | EG7-015 |
| NL | Analytics Engineer | Talent.com | 45 000 €/rok (3 750 €/měs) | 125 625 | EG7-016 |
| NL | Web analist | Talent.com | 33 600 €/rok (2 800 €/měs) | 93 800 | EG7-009 |
| NL | Data analist | Talent.com | 27 300 €/rok (2 275 €/měs) | 76 213 | EG7-010 |
| PL | Analityk danych | Talent.com | 81 300 zł/rok (6 775 zł/měs) | 52 655 | EG7-011 |
| PL | Analytics engineer | Talent.com | 72 000 zł/rok (6 000 zł/měs) | 46 632 | EG7-035 |
| DK | Data Analyst (DST LONS20) | Loen.dk | 71 012 DKK/měs | 318 772 | EG7-012 |
| DK | Data Analyst (PROSA) | LønRadar | 52 045 DKK/měs | 233 629 | EG7-013 |
| SE | Dataanalytiker (medián) | Allaloner (SCB) | 50 800 SEK/měs | 149 758 | EG7-014 |

Mediány zemí: **PL 49 644 · NL 93 800 · DE 138 875 · SE 149 758 · DK 276 201 Kč/měs.**
Referenční ČR z 1. kola: 88 000 Kč celkových nákladů na in-house analytika.

Kvalitativní poznámky ke zdrojům:
- StepStone a Gehalt.de jsou registrové/výběrové statistiky – DE pásmo 44–56 tis. EUR/rok je robustní (čtyři body, dva nezávislé zdroje).
- Talent.com agreguje inzeráty včetně juniorních a částečných úvazků → **NL a PL čísla jsou spodní odhad**.
- Dánské zdroje se liší 1,4× (52 045 vs. 71 012 DKK); číslo z Danmarks Statistik navíc už obsahuje penzijní příspěvek
  zaměstnavatele, takže násobek 1,34 ho nadhodnocuje – reálný náklad je blíž 237 900 Kč.

### 2.4 SLA a reakční doby v DACH a PL – co se skutečně našlo

| Subjekt | Země | Co uvádí | Číslo? | Evidence |
|---|---|---|---|---|
| ADS-Tracking.de | DE | „Laufendes Monitoring & Störungsbehebung durch uns“; 10/20/30 Std. Support/Jahr | **ne** (jen „Latenz unter 40ms“) | EG7-033 |
| LEMONTEC | AT | „innerhalb von 24 Stunden erkannt und kann sofort behoben werden“ | **ano, ale detekce** | EG7-025 |
| monobunt | AT | „Account-Optimierung und Coaching rund um GA4“ | ne | EG7-026 |
| 22GRAD | DE | jen „kostenlosen Erstgespräch“ | ne | EG7-027 |
| Adverity | AT | „we don't stick to rigid pricing plans“ | ne | EG7-030 |
| Surowiecki | PL | P1 (Krytyczne): „Reakcja według uzgodnionego okna, szybka diagnoza i plan ograniczenia skutków“ | **rámec bez čísla** | EG7-004 |
| Conversion.pl | PL | „stałe wsparcie … 1 lub 2 dni w tygodniu“ | ne | EG7-005 |
| Greenfields | PL | „permanent analytical care“ | ne | EG7-006 |
| Bigglo | PL | „Umów bezpłatną konsultację“ | ne | EG7-031 |
| Suasio | PL | „stała obsługa analityczna“ | ne | EG7-032 |

**Vedlejší obor v DACH reakční dobu naopak ceníkuje:**
> „Kritisch – Server steht, Komplettausfall – **2 Stunden**. Hoch – Einzel-Anwendung ausgefallen – **4 Stunden**.
> Mittel – PC-Performance-Probleme – **8 Stunden**. … monatliche Pauschalen liegen je nach Paket zwischen
> **400 und 2.500 Euro**.“ (EG7-028)

> „Einfache Pakete mit Updates und Backups starten bei **50 bis 100 Euro** pro Monat. Standard-Verträge mit
> Sicherheitsmonitoring und Support liegen bei **100 bis 200 Euro**. Premium-Pakete mit Staging-Umgebung und
> **garantierten Reaktionszeiten kosten 200 bis 300 Euro**. Enterprise-Verträge … **mit SLA beginnen ab 400 Euro**.“ (EG7-029)

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Tier 39 000 Kč: z jednoho cenového bodu na osm + benchmark

Závěr 1. kola stál na jediném bodu (Amplio Managed 1 800 EUR). Teď má tier 3 tři nezávislé opory:

1. **Zdola – software:** automatizovaná část datové vrstvy má v EU medián **10 438 Kč/měs** (8 veřejných cen, § 2.1).
   Za 39 000 Kč tedy klient kupuje ~10 000 Kč nástrojů + ~29 000 Kč lidské práce. Při českém interním nákladu
   587 Kč/h (88 000 Kč ÷ 150 h) to odpovídá zhruba **12–20 hodin seniorní práce měsíčně** po započtení marže –
   což je přesně rozsah dodávky tieru 3 (denní reconciliace, monitoring exportu, týdenní digest, reakce do 4 h).
2. **Shora – evropský benchmark:** lidská správa datové platformy se v EU pohybuje na **50 000–125 000 Kč/měs**
   (EG7-022). 39 000 Kč je pod spodní hranicí, tj. **není prostor tvrdit, že je to drahé** – je to česká cena
   evropské služby.
3. **Uvnitř dodavatele:** Funnel.io účtuje za BigQuery destinaci **2,0×** (EG7-018), Amplio 1,5–2,6× (1. kolo + G06).
   19 900 × 2,0 = **39 800 Kč** – navržený tier 3 sedí na tržní násobek prakticky přesně.

**Změna závěru:** tvrzení „správa s BigQuery je 3,7–5,5× dražší“ je **potvrzeno jako vyvrácené** (nezávisle na G06).
Správný popis: **BigQuery zdvojnásobuje cenu uvnitř jednoho dodavatele (1,5–2,6×)**; číslo 3,7–5,5× vzniklo
srovnáváním různých trhů. Doporučení pro syntézu: v `08-pricing-synteza.md` a `02-shrnuti-a-zavery.md` nahradit
„3,7–5,5×“ za **„zhruba 2× (1,5–2,6×) uvnitř jednoho dodavatele“**. Cena 39 000 Kč se tím **nemění** – jen se mění
odůvodnění (z „trh to má 4× dražší“ na „trh to má 2× dražší a evropská lidská hladina je 50–125 tis.“).

### 3.2 Mzdy: skok mezi tiery nesmí stát na sazbě, ale na rozsahu

Trh **neplatí za „BigQuery člověka“ výrazně víc**: DE +16 %, NL +34 %, PL −11 % (§ 2.3). To znamená, že
cenový rozdíl mezi tierem 2 a 3 **nelze obhajovat dražším člověkem** – musí být obhájen počtem hodin, kadencí
(denní vs. měsíční) a reakční dobou. Prakticky: v ceníku a v prodejním rozhovoru argumentovat
„denně × reconciliace × 4 h reakce“, ne „na tohle potřebujete dražšího specialistu“.

Zároveň mzdová data vysvětlují, **proč jsou evropské balíčky pod 10 000 Kč tak úzké**: v DE stojí hodina interního
analytika ~926 Kč, v DK ~1 841 Kč. Balíček za 199 € (LEMONTEC) tedy nemůže obsahovat víc než ~5 hodin – a taky
neobsahuje: je to monitoring 10 eventů. **Česká nákladová výhoda je reálná** (587 Kč/h vs. 926 Kč/h v DE)
a je to legitimní argument pro white-label prodej do DACH.

Kontrola tieru 2 z mzdové strany: evropský agenturní násobek nad interním nákladem je 2,3–3,8×
(DE sazby 85–139 €/h = 2 125–3 475 Kč/h proti internímu nákladu 926 Kč/h). Aplikováno na ČR:
587 × 2,3–3,8 = **1 350–2 230 Kč/h**, tj. 10 hodin = **13 500–22 300 Kč**. Navržených **19 900 Kč** leží uvnitř.

### 3.3 H1 (BQ-first) – dále oslabena, ale jinak než v 1. kole

Nové důkazy H1 v silné podobě **vyvracejí ze třetí strany**: u nástrojů je BigQuery *destinace*, ne *služba*
(Funnel, Weld, Y42), a stojí 2×. U lidí není BigQuery dražší role (§ 2.3). A přitom **nikdo v EU neprodává
monitoring GA4 → BQ exportu jako samostatnou službu s cenou** – hledání „GA4 BigQuery export monitoring service“
nenašlo jediného dodavatele. To potvrzuje bod 5 shrnutí 1. kola: **monitoring BQ exportu je volné pole**,
ale zároveň varuje, že si ho zatím nikdo nekoupil jako samostatný produkt → prodávat ho jako *součást* tieru 3,
ne jako samostatnou položku.

### 3.4 H2 (tiché rozbití) – potvrzena, s novým doslovným zdrojem

LEMONTEC: „ein Event schon monatelang nicht mehr erfasst wird, es aber niemand bemerkt“ + protipól
„innerhalb von 24 Stunden erkannt“ (EG7-025). Measurelab: „so tracking, pipelines and definitions **stay
trustworthy as the business changes**“ (EG7-020) – nejlepší nalezená pozitivní formulace téhož painu.
Analyzify prodává doslova „Automated checks confirm your tracking works“ (EG7-021).
**Beze změny závěru; přibyly použitelné formulace.**

### 3.5 H5 (SaaS nahrazuje část hodnoty) – potvrzena a nově kvantifikována

Hranice nástroj/člověk se dá teď vyčíslit: **automatizovaná datová vrstva stojí medián 10 438 Kč/měs**,
kdežto evropská lidská správa téhož 50 000–125 000 Kč. **Nástroj tedy pokrývá zhruba 10–20 % ceny služby.**
Zbytek je diagnóza, oprava, komunikace a změnové řízení (G7, H1–H5 v taxonomii). Pro tier 3 to znamená:
z 39 000 Kč je ~25 % náklad na nástroje/licence a ~75 % lidská práce – a to je i správná struktura argumentace
proti námitce „vezmeme si GA4Dataform za 275 € a ušetříme“.

### 3.6 Reakční doba – nově doložený *prodejní* mechanismus

1. kolo tvrdilo „reakční dobu v ČR ani na SK nikdo veřejně neslibuje“. Druhé kolo přidává:
**ani v DACH a PL ji neslibuje nikdo z analytických dodavatelů** (10 ověřených subjektů, § 2.4).
Novým a užitečným zjištěním je, že **reakční doba je v DACH standardní a oceněná osa ve vedlejším oboru**
(IT a web údržba: 2/4/8 h, +2× cena za garanci). Tedy: mechanismus je prokázaně prodejný, jen ho v analytice
nikdo nepoužil. Zároveň i nástroje ji dávají jako upsell nejvyššího tieru (Y42, Funnel, Littledata 5× cena).

**Doporučení k návrhu tierů:** ponechat reakční dobu jako osu (další prac. den / 8 h / 4 h), ale
**uvést číslo už v nejnižším tieru** – to je jediné, co v celém evropském vzorku dělá pouze Analyzify
(„within 24-48 hours“ za 2 507 Kč). V ČR to nedělá nikdo.

---

## 4. MEZERY, které zůstávají

- **Veřejná cena lidského BigQuery retaineru v EU dále neexistuje.** Osm nalezených cen jsou produkty (SaaS),
  ne služby. Jediné dva „lidské“ body zůstávají Amplio ES 1 800 € (1. kolo) a Blagoweb IT 450–1 200 € (G06).
  Uzavřít by šlo jen mystery shoppingem u Measurelab / Precis / Adverity.
- **Evropský benchmark 2 000–5 000 €/měs pochází z blogu poradenské firmy (LSI Analytics), ne z ceníku dodavatele.**
  Je to sekundární zdroj – v syntéze používat s nízkou vahou a nepočítat do mediánů.
- **NL mzdy jsou slabé.** Talent.com agreguje inzeráty a dává 27–45 tis. EUR/rok, což je pod realitou;
  StepStone-ekvivalent pro NL (Intermediair, Nationale Vacaturebank) se nepodařilo načíst. DE a DK/SE jsou solidní.
- **Freelance denní/hodinové sazby v EU** se nepodařilo doplnit: Malt (403), freelance.de (403),
  GULP Stundensatzreport (404), freelancermap Freelancer-Kompass (404). Zůstávají čísla z 1. kola (DE 85–139 €/h).
- **Fiverr/Upwork jako podlaha ceny** nedostupné: fiverr.com vrací 403 i přes r.jina.ai proxy (jediný načtený gig
  byl jednorázový projekt za 100 USD, pozastavený – nepoužitelné).
- **Smluvní SLA analytických agentur v DACH/PL nebylo možné vyloučit definitivně** – ověřeno na 10 subjektech
  z veřejných stránek; smlouvy a nabídky na dotaz mohou reakční dobu obsahovat. Tvrzení formulovat jako
  „nikdo ji veřejně neinzeruje“, ne „nikdo ji nemá“.
- **Švýcarsko, Belgie, Norsko, Finsko** v mzdové části nepokryty (kurzy CHF/NOK jen částečně v zadání).
