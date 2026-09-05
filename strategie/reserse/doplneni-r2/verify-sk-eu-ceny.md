# Kolo 2 – ověření: ceny SK + EU

Role: ověřovatel `sk-eu-ceny`. Datum přístupu u všech zdrojů: **2026-09-04**.
Metoda: u každého tvrzení otevřena zdrojová URL (WebFetch + `curl` s vlastní extrakcí textu z HTML,
u PDF/ODT dekomprese streamů). Citace jsou doslovné v původním jazyce. Kde číslo na stránce dnes není,
je verdikt `refuted` nebo `unreachable` – ne `confirmed`.

Skóre: **12 potvrzeno, 4 vyvráceno/změněno, 2 nedostupné** (18 ověřovaných tvrzení).

---

## 1. Tabulka verdiktů

| Tvrzení (1. kolo) | Verdikt | Co je na zdroji dnes (doslova) | URL | Poznámka |
|---|---|---|---|---|
| DASE (SK): měsíční paušál **od 700 € bez DPH** | **confirmed** | „Aký je mesačný paušál za analytickú podporu? Výhodou spolupráce s DASE je flexibilita. Výšku mesačného paušálu si určuje vždy klient, pričom výška paušálu determinuje objem poskytovaných prác. **Nami odporúčané minimum, v rámci ktorého sú zahrnuté aj práce v rámci aktivácia dát je 700 eur bez DPH mesačne.**" | https://www.dase-analytics.com/blog/sk/analytika-nie-je-sprint-ale-maraton/ | Cena je stále jen v blogu, ne na stránce služby. V sitemapě dase-analytics.com není žádná stránka produktu „kontinuálna podpora“. |
| DASE: **2měsíční výpověď**, „platíte len za odvedenú prácu" | **confirmed** | „transparentnosť, **platíte len za práce, ktoré budú reálne odvedené** … flexibilná spolupráca s možnosťou navýšenia objemu prác … **2-mesačná výpovedná doba**" | https://www.dase-analytics.com/blog/sk/investicia-do-webovej-analytiky-co-dostanete-za-svoje-peniaze/ | Na téže stránce dále: „1. mesiac **1.400 €** Analytická stratégia"; „Cena implementácia analytickej stratégie … **od 600 eur až po jednotky tisíc eur**"; sGTM „zaplatíte iba **cca 20-50€ / mesačne**" (Google servery). |
| DASE: **kolik hodin** je v 700 € a jaká je **reakční doba** | **unreachable** | Ani na jedné ze dvou cenových stránek, ani ve VOP se nevyskytuje řetězec „hodin", „reakč" ani „SLA" ve významu závazku. VOP (`/sk/podmienky-sluzieb…`) upravují jen prodej on-line produktů a vstupenek, ne retainer. | https://www.dase-analytics.com/sk/podmienky-sluzieb-a-vseobecne-obchodne-podmienky/ | DASE hodiny ani reakční dobu **nepublikuje**. Odhad 1. kola „při ADMA 65 €/h ≈ 10–11 h/měs" zůstává odvozený, ne zdrojovaný. Kandidát na mystery shopping. |
| Starbomedia (SK): údržba sGTM **100–300 €/měs** | **confirmed** | Tabulka „Stape hosting (Pro) — €20-50 / GTM konfigurácia (agentúra) €1 000-3 000 — / **Údržba a aktualizácie — €100-300 (mesačne)** / Celkom €1 000-3 000 / **€120-350**". Druhá tabulka (DIY GCP): „GCP hosting — €120-300 / Setup a konfigurácia €3 000-8 000 — / **Údržba — €200-500** / Celkom €3 000-8 000 / **€320-800**". | https://starbomedia.sk/server-side-tagging-vs-server-side-tracking-aky-je-skutocny-rozdiel | Stále jen orientační tabulka v blogu, ne ceníková položka. Obě varianty (Stape i GCP) potvrzeny včetně horní hranice 500 €. |
| LEMONTEC (AT): **199 €/měs, bez vazby** | **confirmed** (s výhradou) | Cenový blok zní doslova „GA4 und GTM Sorglos-Paket **199,-** Inklusive: Automatisiertes Event-Monitoring / Kontinuierliche Anpassungen / Experten für Fehlerbehebung verfügbar". FAQ: „Unser LEMONTEC-Vorteil **„Keine Bindung"** gilt auch bei dem GA4 & GTM Sorglos-Paket, du kannst den Service also jederzeit wieder kündigen." | https://lemontec.at/leistungen/tracking/ga4-gtm-sorglos-paket/ | **Výhrada:** na stránce je jen číslo „199,-" – řetězce „€", „EUR" ani „Monat" se v textu stránky nevyskytují. Měsíční perioda a měna jsou dovozené z kontextu (AT, „Service-Laufzeit"), nejsou na stránce napsané. |
| LEMONTEC: monitoring **10 eventů** | **confirmed** | „Mit Hilfe unseres voll-automatisierten Monitoring Tools überwachen wir deine GTM Integration sowie die Conversion Events. … Folgende Aktionen werden überwacht: **Top 10 GA4 Events / GTM Integration / GA4 Pageviews**". Náběh: „Wir planen hier eine **Vorlaufzeit von 14 Tagen** ein." | https://lemontec.at/leistungen/tracking/ga4-gtm-sorglos-paket/ | Reakční doba **není** uvedena („Reaktion", „Stunde" se na stránce nevyskytují) – slibuje jen „Schnelle Fehlerbehebungen". Obsah balíčku = A1/A2 částečně, C5 („Proaktive Anpassungen der Konfiguration" – jmenovitě reakce na nové featury GA4), G1, G4, G7. |
| Amplio (ES): **Maintained 700–1 200 €** | **confirmed** | „Our **Maintained tier** sits here, **from €700 to €1,200 a month**, for teams who want the setup kept reliable and reported on." FAQ tamtéž: „expect a monthly retainer from about €700 to €1,200". Obsah tieru (stránka /pricing): „GA4 + GTM web container, properly structured / Server side GTM (Stape) + Consent Mode v2 / Enhanced conversions for Google Ads / Cross channel attribution wired end to end / **Monthly QA + tracking health checks** / Monthly reporting dashboard / API integrations (Google Ads, Meta, CRM)". | https://www.ampliodata.io/blog/cost-to-outsource-your-analytics-setup-to-an-agency + https://www.ampliodata.io/pricing | Cena je v blogu a v `og:description` stránky /pricing („**Foundation from €400, Maintained from €700/mo, Managed from €1,800/mo**"). Ve viditelném těle stránky /pricing je u obou tierů dnes **„From € 0 per month"** – zjevná chyba/nedoplněná šablona. Sazebník bere jako platný blog + meta. |
| Amplio (ES): **Managed od 1 800 € s BigQuery** | **confirmed** | „**The Managed tier, from €1,800 a month**, is for teams who want the whole measurement function run for them." Obsah (stránka /pricing): „Everything in Maintained / CRM integration (HubSpot, Salesforce, custom) / **BigQuery data warehouse + custom data modeling** / **AI powered insights + anomaly detection** / Weekly automated reporting digests / Consent impact analysis + compliance audits / Dedicated senior analyst + engineer / Quarterly strategy review". Smluvně: „Month to month after the first month", „Cancel any time after month one", „BigQuery licensing handled under client billing". | https://www.ampliodata.io/pricing | **Klíčové pro hypotézu H1:** BigQuery je doslova první položkou, která odděluje vyšší tier od nižšího. Poměr tierů 700 → 1 800 = 2,6×. |
| Manids (DK): **Aktiv 3 000–8 000 DKK/měs** | **confirmed** | „**Aktiv vedligeholdelse (3.000–8.000 kr./md.)** Månedlig gennemgang, løbende tilpasning af events og konverteringsmål, rapportering og rådgivning om dataanvendelse. Inkluderer typisk også vedligeholdelse af server-side infrastruktur." | https://manids.dk/hvad-koster-tracking-setup-ga4-gtm-og-server-side-priser/ | Sedí s P4-039. |
| Manids (DK): tier **Minimum** | **changed** | Tier má dnes na stránce **cenu**, kterou 1. kolo nezaznamenalo: „**Minimumsvedligeholdelse (1.000–3.000 kr./md.)** Kvartalsvis tjek af at data indsamles korrekt, opdatering af tags ved platformændringer og hurtig fejlrettelse ved problemer." | https://manids.dk/hvad-koster-tracking-setup-ga4-gtm-og-server-side-priser/ | Nový řádek **PV2-003** (3 350–10 050 Kč/měs). Je to nejlevnější evropská „lidská" správa v našem vzorku vedle LEMONTEC. |
| Manids (DK): údržba sGTM **2 000–5 000 DKK/měs** | **confirmed** | „**Vedligeholdelse (2.000–5.000 kr./md.)** Server-side tracking kræver løbende overvågning. Tags skal opdateres, når platformene ændrer deres API'er…" + „Løbende infrastrukturomkostninger (**300–2.000 kr./md.**)". | https://manids.dk/hvad-koster-tracking-setup-ga4-gtm-og-server-side-priser/ | Potvrzeno i doporučení „Det du aldrig bør betale for … **Månedlige gebyrer for et setup, der ikke inkluderer aktiv vedligeholdelse eller rådgivning**". |
| argoberlin (DE): **190 €/měs** | **refuted** | Stránka `/google-analytics-beratung/` vrací i dnes **HTTP 404**. Živá stránka `/google-analytics-agentur/` (HTTP 200) neobsahuje řetězce „190", „monatlich" ani „Monat" – **žádný měsíční paušál na ní není**. | https://argoberlin.de/google-analytics-agentur/ | Řádek **P4-009 vyřadit**. Snippet z vyhledávače se nepodařilo potvrdit u zdroje. |
| argoberlin (DE): **106 €/h** | **refuted** | Řetězec „106" se na živé stránce nevyskytuje. Doslovný ceník na ní je: „**Google Analytics Account aufsetzen 3h - € 285** / **Google Tag Manager einrichten 3h - € 285** / Google Pixel einrichten **€48** / Conversion einrichten **€ 32**"; hodinová sazba agentury „**€95/Stunde**". 285 € / 3 h = **95 €/h**. | https://argoberlin.de/google-analytics-agentur/ | Řádek **P4-010 nahradit** novým **PV2-004** (95 €/h). Sazba je tedy o ~10 % nižší, než 1. kolo uvádělo. |
| Fresh Egg (UK): **„from £1,750"/měs** | **refuted** | Na stránce `/analytics/` není žádná cena („Monthly ongoing GA4 support … £1,750" se na ní nevyskytuje; symbol £ je jen v case studies: „Ageas wins big with **£2.6m** conversion uplift"). V `sitemap.xml` (393 URL) **není žádná cenová stránka** (`pricing`, `cost`, `packages`, `retainer` – nic). | https://www.freshegg.co.uk/analytics/ | Řádek **P4-031 vyřadit**. Údaj byl jen ze snippetu a u zdroje neexistuje. Fresh Egg je zpět v kategorii „cena na dotaz". |
| Webanalist (NL): **od 250 €/měs** | **confirmed** | „**Performance Marketing Support start bijvoorbeeld vanaf €250 per maand.** Dit dekt regelmatige controles, campagne-aanpassingen en hulp bij nieuwe trackingvraagstukken." + „**Specialisten hanteren uurtarieven tussen €60 en €150 per uur**". | https://webanalist.com/google-analytics-uitbesteden/ | Doplněk: „Een basispakket voor eenmalige implementatie begint rond **€475**" (1. kolo mělo 495–795 € z jiné stránky /diensten/pakket/ – nejde o rozpor, jiný zdroj). |
| ananalytics.pl: **1 200 zł za 5 h/měs** | **confirmed** | „Analityka na godziny / Stałe wsparcie analityczne … **1200 zł netto / miesiąc** Co zyskujesz: **5 godzin miesięcznie do wykorzystania na zmiany, pytania, analizy** / **Reaguję od razu, gdy coś przestaje działać**". | https://ananalytics.pl/oferta/ | Potvrzeno i okolí: „Doradztwo analityczno-UX **300 zł netto / h**", audyt „od **700 zł netto**", konfigurace od 1 000 zł, rozšířená od 2 600 zł. |
| ADS-Tracking (DE): **179–1 299 €** podle sessions | **confirmed** | „**Basic 179 € / Monat** – 4.000 Sitzungen / GA4 + 1 Werbe-Pixel; **Starter 299 €** – 10.000; **Small 449 €** – 25.000, **10 Std. Support / Jahr**; **Middle 799 €** – 50.000, **20 Std.**; **Max 1.299 €** – 125.000, **30 Std.**; Individuell – Auf Anfrage. Alle Pakete: **einmalig 549 € Einrichtungsgebühr · 12 Monate Mindestlaufzeit · Zahlung im Voraus** … Laufendes Monitoring & Störungsbehebung durch uns / Updates & Plattform-API-Wartung inklusive". | https://ads-tracking.de/preise | Přesně sedí s P4-002…006 včetně hodin podpory a vazby. Osa tierů = sessions + počet ad pixelů, ne hodiny. |
| ADMA (SK): sazebník 2025, „špecialista webovej analytiky **65 €/h**" | **unreachable** (primární zdroj) | Primární zdroj **neexistuje**: `adma.sk` je dnes dostupná (HTTP 200), ale `adma.sk/hodinove-sadzby` (URL, na kterou se sekundární zdroj odkazuje) vrací **404** a v žádné z 13 sitemap ADMA není cenová/sazebníková stránka. Wayback: „archived_snapshots: {}" – **žádný snímek**. Sekundární zdroj je dnes doslova ověřen: „Benchmark: odporúčané hodinové sadzby od ADMA 2025 (www.adma.sk/hodinove-sadzby) Priemerné hodnoty zo slovenských agentúr; ceny sú bez DPH a nie sú záväzné. … Strategy Director 90 € … Performance Manager / Specialist 65 € … SEO Specialist 65 € … **Špecialista webovej analytiky 65 €** … Media Buying/Commercial Director 100 €". | https://adma.sk/ (404 na /hodinove-sadzby) + https://dobrymarketing.sk/blog/qa-freelnacer-marketer/ | Číslo 65 €/h **drží jako citace jednoho slovenského zdroje**, ne jako doložený sazebník asociace. Používat s poznámkou „převzato z dobrymarketing.sk, primární stránka ADMA neexistuje". |

---

## 2. Nové cenové body nalezené při ověřování

Zapsané do `strategie/data/fragments/r2-v2-pricing.csv` (ID `PV2-001`…`PV2-005`).

### Measurelab (UK) – 1. kolo tvrdilo „ceny nezveřejňuje". Zveřejňuje. {#measurelab}

Britský vládní G-Cloud 14 listing „Analytics Consulting, Training and Support" firmy **MEASURELAB LIMITED** uvádí
veřejně **„Pricing: £1,500 to £50,000 a unit a month"**. Připojený ceníkový PDF dokument obsahuje kompletní model:

> „**Transparent pricing model** — Engagement model | Credits/month | Annual SOW | Quarterly SOW | Monthly SOW
> **70+** £120 – –; **35–69** £125 £135 –; **10–34** £130 £140 £150.
> We sell credits – think of it like Measurecoin. Credits can be used to buy time or products.
> **One credit is equivalent to one hour.** The more credits per month you purchase and the longer the commitment,
> the lower the cost per credit. Simple. Up to 20 % of a month's credits can be rolled over to the following month…"

- Minimální vstup: **10 kreditů = 10 hodin měsíčně**, při měsíčním SOW **£150/h → £1 500/měs (43 500 Kč)**.
- Sazba klesá s objemem a délkou závazku na £120/h (70+ h/měs, roční SOW).
- Zdroj: https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/542682200642400
  a https://assets.applytosupply.digitalmarketplace.service.gov.uk/g-cloud-14/documents/714732/542682200642400-pricing-document-2024-05-03-1550.pdf

**Proč je to důležité:** je to první doložená cena „prémiové" evropské analytické agentury s BigQuery kompetencí
a zároveň potvrzení modelu „kredit = hodina, čím víc a čím delší závazek, tím levněji" – přesně osa, kterou
`09-navrh-nabidky.md` používá jen implicitně.

### Merkle UK (G-Cloud 14) – GA4 360 s hodinami podpory {#merkle}

> „By default, our GA contracts come with **up to 10 hours of support per month**…"
> Fixed Rate Pricing: „Up to 25 million events | **Up to 2 hours** | **£3,060.00** | £36,720 ročně";
> 100–200 M eventů £4,770 (5 h); 500 M–1 mld. £9,550 (8 h); 2,5–5 mld. £15,460 (10 h).

Zdroj: https://assets.applytosupply.digitalmarketplace.service.gov.uk/g-cloud-14/documents/719318/843534734432015-pricing-document-2024-05-07-1337.odt
Jde o **licenci GA4 360 + podporu**, ne o čistou správu – do mediánů nepatří, ale je to platná horní kotva
(88 740 Kč/měs za 2 h podpory měsíčně) a doklad, že i enterprise smlouvy stupňují **hodiny podpory podle objemu eventů**.

### Sputnik Digital (UK) – denní sazba za web analytics {#sputnik}

G-Cloud 14 listing „Web Analytics": **„£850 to £1,400 a unit a day"**.
Zdroj: https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/831343609553757
Do CSV nezapsáno – denní sazba se nedá bez dopočtu namapovat na povolené hodnoty `period`; jako orientace
odpovídá cca 106–175 £/h, tj. shodné pásmo jako Measurelab.

### Manids „Minimum" a argoberlin – viz PV2-003 a PV2-004 výše. {#manids} {#argoberlin}

---

## 3. Dopad na závěry

### 3.1 Cenová pásma 8–10 / 16–23 / 35–45 tis. Kč: **beze změny**

Ověření nepohnulo ani jednou hranicí; naopak dolní i horní konec zpevnilo:

| Pásmo 1. kola | Co s ním udělalo ověření |
|---|---|
| **Medián 8–10 tis. Kč** za správu bez BQ | Drží. Ověřené body kolem něj: Webanalist 250 € = 6 250 Kč, ananalytics 1 200 zł = 6 960 Kč, ADS-Tracking Starter 299 € = 7 475 Kč, Manids Aktiv od 3 000 DKK = 10 050 Kč. Nově přibyl bod **pod** pásmem (Manids Minimum od 1 000 DKK = 3 350 Kč), který ale odpovídá **kvartální** kadenci, ne měsíční – potvrzuje, že 8–10 tis. je cena za **měsíční** rytmus, ne za „být k dispozici". |
| **Horní kvartil 16–23 tis. Kč** | Drží. Amplio Maintained 700–1 200 € = 17 500–30 000 Kč (potvrzeno doslova), ADS-Tracking Middle 799 € = 19 975 Kč, DASE 700 € = 17 500 Kč. |
| **Správa s BigQuery 35–45 tis. Kč (3,7–5,5×)** | **Zpevněno.** Amplio Managed „from €1,800 a month" = 45 000 Kč potvrzeno doslova a BigQuery je na stránce doslova první odlišující položkou. Nově přibyl druhý nezávislý bod ve stejném pásmu: **Measurelab minimum £1 500 = 43 500 Kč** za 10 h/měs. Poměr Amplio Managed/Maintained = **2,6×**, poměr Measurelab min./Manids Aktiv ≈ 4,3× – původní rozpětí 3,7–5,5× je uvnitř, ale spodní hranici by šlo posunout na ~2,6×. |

**Doporučená formulace pro syntézu:** „s BigQuery je správa **2,6–5,5× dražší**" (dolní hranice podle Amplia,
horní podle CZ/SK poměrů), místo dosavadního 3,7–5,5×.

### 3.2 Navržené tiery DataLayer.cz 8 900 / 19 900 / 39 000 Kč: **beze změny, s lepším ukotvením**

- 8 900 Kč sedí mezi Webanalist (6 250) a Manids Aktiv (10 050) – tedy do evropského pásma vstupní správy.
- 19 900 Kč sedí do Amplio Maintained (17 500–30 000), ADS-Tracking Middle (19 975) i DASE (17 500).
- 39 000 Kč je nově podepřen **dvěma** body, ne jedním: Amplio Managed 45 000 a Measurelab 43 500.
  DataLayer.cz je tedy o 10–15 % **pod** evropskou hladinou datové správy, což je obhajitelná pozice.

### 3.3 Co se v datech mění

1. **Vyřadit** `P4-009` (argoberlin 190 €/měs) a `P4-031` (Fresh Egg „from £1,750"). Obojí byly snippety,
   u zdroje dnes neexistují. Tím z EU vzorku mizí **jediný** bod nad 50 000 Kč u lidské správy bez BQ –
   horní konec evropského pásma se tím **snižuje**, což je pro nás konzervativnější (a bezpečnější) základ.
2. **Nahradit** `P4-010` (106 €/h) řádkem `PV2-004` (95 €/h, doloženo).
3. **Doplnit** `PV2-003` (Manids Minimum 1 000–3 000 DKK), `PV2-001`/`PV2-002` (Measurelab), `PV2-005` (Merkle).
4. **Oslabit** váhu čísla ADMA 65 €/h – primární sazebník asociace neexistuje ani v archivu.
   Odvození „DASE 700 € ≈ 10–11 h/měs" na něm stojí, takže i toto odvození je slabší, než 1. kolo naznačovalo.
5. **Přepsat tvrzení „Measurelab ceny nezveřejňuje"** (03-trh-eu.md § 1 a § 5) – zveřejňuje, jen na jiném webu
   (britský G-Cloud). Poučení pro další rešerše: **veřejné ceny UK agentur jsou na Digital Marketplace,
   ne na jejich vlastním webu.**

### 3.4 Co ověření potvrdilo z nosných závěrů rešerše

- **„BigQuery je zlom mezi tiery, ne podmínka vstupu"** – potvrzeno doslovným zněním Amplio (Maintained bez BQ
  má plnohodnotný obsah včetně „Monthly QA + tracking health checks") a Manids (oba tiery bez BQ).
- **„Nikdo veřejně neslibuje reakční dobu"** – potvrzeno i po druhém průchodu: LEMONTEC („Schnelle Fehlerbehebungen",
  ale žádné číslo), DASE (nepublikuje), Amplio („Live in 72h" se týká náběhu, ne reakce na incident),
  Manids („hurtig fejlrettelse"). Jediné číselné závazky v celém vzorku jsou **kapacitní** (10/20/30 h ročně
  u ADS-Tracking, 2–10 h měsíčně u Merkle, 10 kreditů u Measurelabu), nikoli **časové**. Reakční doba
  zůstává volným místem na trhu.
- **„Pain = tiché rozbití"** – potvrzeno v nově čtených pasážích: Manids „Det du aldrig bør betale for:
  … Månedlige gebyrer for et setup, der ikke inkluderer aktiv vedligeholdelse eller rådgivning";
  LEMONTEC „Wer auf diese Wartung verzichtet, verzichtet auch auf diese neuen Möglichkeiten".

---

## 4. Zdroje otevřené v tomto kole (všechny 2026-09-04)

| Zdroj | HTTP | Poznámka |
|---|---|---|
| dase-analytics.com/blog/sk/analytika-nie-je-sprint-ale-maraton/ | 200 | 700 € potvrzeno |
| dase-analytics.com/blog/sk/investicia-do-webovej-analytiky-…/ | 200 | 2měs. výpověď, 1 400 € 1. měsíc |
| dase-analytics.com/sk/podmienky-sluzieb-…/ | 200 | VOP jen pro on-line produkty |
| dase-analytics.com/page-sitemap.xml | 200 | žádná stránka „paušál/podpora" |
| starbomedia.sk/server-side-tagging-vs-server-side-tracking-… | 200 | obě tabulky nákladů |
| lemontec.at/leistungen/tracking/ga4-gtm-sorglos-paket/ | 200 | 199,-; Keine Bindung; Top 10 events |
| ampliodata.io/pricing | 200 | tiery + og:description s cenami; tělo stránky chybně „From € 0" |
| ampliodata.io/blog/cost-to-outsource-your-analytics-setup-to-an-agency | 200 | 700–1 200 € / 1 800 €+ doslova |
| manids.dk/hvad-koster-tracking-setup-ga4-gtm-og-server-side-priser/ | 200 | Minimum i Aktiv s cenami |
| argoberlin.de/google-analytics-beratung/ | **404** | tvrzení 1. kola neověřitelné |
| argoberlin.de/google-analytics-agentur/ | 200 | reálný ceník: 285 € / 3 h, 95 €/h |
| freshegg.co.uk/analytics/ | 200 | bez ceny |
| freshegg.co.uk/sitemap.xml | 200 | 393 URL, žádná cenová stránka |
| webanalist.com/google-analytics-uitbesteden/ | 200 | vanaf €250 per maand |
| ananalytics.pl/oferta/ | 200 | 1200 zł / 5 h |
| ads-tracking.de/preise | 200 | 5 tierů potvrzeno |
| adma.sk/ | 200 | web funguje |
| adma.sk/hodinove-sadzby | **404** | primární sazebník neexistuje |
| archive.org/wayback (adma.sk/hodinove-sadzby) | 200 | `archived_snapshots: {}` |
| dobrymarketing.sk/blog/qa-freelnacer-marketer/ | 200 | celá tabulka ADMA 2025 doslova |
| applytosupply…/g-cloud/services/542682200642400 | 200 | Measurelab £1 500–50 000/měs |
| assets.applytosupply…/542682200642400-pricing-document-…pdf | 200 | kreditní ceník £120–150/h |
| assets.applytosupply…/843534734432015-pricing-document-…odt | 200 | Merkle GA4 360 |
| applytosupply…/g-cloud/services/831343609553757 | 200 | Sputnik £850–1 400/den |
| applytosupply…/g-cloud/search | 404 | vyhledávání frameworku je vyřazené, služby jen přes přímé ID |
