# Plán rešerše: kontinuální správa analytiky – dodávka, pricing, pozicování

Stav: **rešerše provedena 2026-09-04 (verze 1); všechny fáze mají výstup v `reserse/`. Shrnutí: [`02-shrnuti-a-zavery.md`](./02-shrnuti-a-zavery.md).**
Každá fáze níže má vlastní výstupní soubor v `reserse/`; po dokončení fáze se zde zaškrtne checkbox.

---

## 0. Co chceme zjistit (výzkumné otázky)

| # | Otázka | Proč na ní záleží |
|---|--------|-------------------|
| RQ1 | **Co konkrétně** obsahuje „měsíční správa analytiky“ u agentur a freelancerů v ČR, SK, EU a USA? Jaké jsou dílčí aktivity a v jaké frekvenci? | Bez toho nevíme, co dáváme do tierů. |
| RQ2 | **Kolik to stojí** a jak se cena strukturuje (retainer hodin / fixní balíček / per property / % ze spendu / SaaS)? Jaké jsou typické tiery a čím se liší? | Férová cena = cena, kterou trh už zná, korigovaná o naši hodnotu navíc. |
| RQ3 | **Jaký konkrétní pain** klient řeší, když si správu kupuje? Ne fráze, ale pojmenované situace s dopadem v penězích/čase. | Selling point musí být pojmenovaný problém, ne benefit. |
| RQ4 | **V jaké situaci** klient ke správě přistoupí (trigger) a proč ji naopak zruší (churn)? | Definuje cílovou skupinu a vstupní bod do služby. |
| RQ5 | Je správa **nutně navázaná na BigQuery export**, nebo existuje i nad nativními konektory (GA4 UI, Looker Studio, Supermetrics…)? Co se dá monitorovat bez exportu a co jen s ním? | Testujeme vlastní hypotézu o BQ-first službě. |
| RQ6 | **Jak vypadá fyzická dodávka**: měsíční report, dashboard, alerty, changelog, SLA, komunikační kanál? Existují veřejné ukázky? | Chceme vidět, co klient reálně dostane do ruky. |
| RQ7 | Jaké **SaaS nástroje** dnes monitoring dělají automaticky a za kolik? Kde tedy končí nástroj a začíná služba? | Nástroje určují cenovou kotvu i to, co nemá smysl dělat ručně. |
| RQ8 | Jak z toho vyplývá **nabídka DataLayer.cz**: tiery, ceny, cílový klient, klíčové sdělení? | Výstup celé rešerše. |

### Hypotézy, které rešerše potvrdí nebo vyvrátí

- H1: Kontinuální správa má smysl hlavně tam, kde klient má reporting nad BigQuery; nad nativními konektory je poptávka po „správě“ malá a jde spíš o ad-hoc opravy.
- H2: Největší reálný pain není „nemáme data“, ale „data se tiše rozbila a nikdo si nevšiml“ (release webu, změna consentu, změna GTM, změna v ad platformě, změna GA4).
- H3: Trh v ČR nemá veřejný ceník správy analytiky; ceny se odvozují od hodinových sazeb (odhad 1 200–2 500 Kč/h) a typický retainer je 5–20 h/měs.
- H4: V USA/UK je „analytics retainer“ běžný produkt s tiery (odhad 1 500–10 000 USD/měs) a jasně vyjmenovanou dodávkou; lze si z něj vzít strukturu, ne ceny.
- H5: Část hodnoty správy je nahraditelná SaaS monitoringem; služba musí stát na tom, co nástroj neumí (interpretace, oprava, komunikace s vývojáři, řízení změn).

---

## 1. Taxonomie: co všechno může „správa analytiky“ znamenat

Výstup: `reserse/00-taxonomie-sluzby.md`

Před hledáním na trhu si definujeme jednotný slovník, aby se výsledky daly srovnávat. Každou nalezenou
nabídku pak namapujeme na tyto položky (matice „kdo co nabízí“).

- [x] 1.1 Sepsat kandidátní aktivity správy, rozdělené do vrstev:
  - **Sběr dat (tagging):** kontrola GTM kontejneru, změny tagů, verzování, QA po releasech webu, dataLayer validace, server-side GTM provoz (Cloud Run náklady, certifikáty, aktualizace kontejneru).
  - **Consent a právo:** consent mode v2, CMP změny, monitoring podílu souhlasů, cookie lišta vs. realita měření.
  - **GA4 property hygiena:** konverze, vlastní dimenze, retence dat, filtry, referral exclusions, cross-domain, Google Signals, thresholding, (not set), kvóty.
  - **Reklamní platformy:** import konverzí do Google Ads / Meta CAPI / Sklik / Bing, deduplikace, kontrola párování, UTM konvence, auto-tagging.
  - **Datová vrstva v BigQuery:** export GA4 → BQ, monitoring úplnosti denních tabulek, zpoždění exportu, náklady BQ, transformace (dbt/Dataform), historizace, spojení s ad-daty a CRM.
  - **Reporting:** údržba Looker Studio / Power BI dashboardů, konektory (Supermetrics, Windsor, Dataslayer), rozbité zdroje, měsíční komentovaný report.
  - **Alerting a monitoring:** anomálie (propad eventů, purchase = 0, skok v (not set), rozjetí revenue GA4 vs. e-shop), tag monitoring, uptime sGTM.
  - **Změnové řízení a komunikace:** changelog, konzultace s vývojáři, specifikace pro nové featury, onboarding nových lidí klienta, ad-hoc dotazy.
  - **Analytická práce:** ad-hoc analýzy, atribuce, kohorty, LTV, experimenty.
- [x] 1.2 U každé aktivity poznamenat: **jde bez BQ exportu? (ano / částečně / ne)** – to je základ pro RQ5.
- [x] 1.3 Definovat metriky rozsahu, podle kterých se v praxi cení: počet property/webů, měsíční traffic/eventy, počet ad platforem, počet dashboardů, počet releasů webu za měsíc, počet hodin v ceně, reakční doba.
- [x] 1.4 Připravit sloupce `pricing-dataset.csv` a `evidence-log.csv` tak, aby odpovídaly této taxonomii (hotovo v `data/`, upravit podle potřeby).

---

## 2. Český trh

Výstup: `reserse/01-trh-cz.md` + řádky v `data/`

- [x] 2.1 **Sestavit seznam hráčů** (cíl 25–40 subjektů) ve třech skupinách:
  - analytické agentury a butiky (např. Optimics, Medio, Dataweps, Digital Visions, Bizztreat, Datamind, MarketUP, Adexpres, Advisio, House of Řezáč, Taste, Fragile, Proficio, Effectix, Sun Marketing, Dobrý web, Ecommerce Bridge – ověřit aktuálnost a doplnit),
  - performance agentury, které mají analytiku jako doplněk správy PPC,
  - freelanceři/konzultanti (LinkedIn, Webtrh, Freelance.cz, Navolnenoze.cz, přednášející na MeasureCamp Praha, Digisemestr, Marketing Festival).
- [x] 2.2 U každého projít web a zjistit: nabízí kontinuální správu? jak ji **nazývá** (správa, monitoring, retainer, „analytika jako služba“, care, support)? co vyjmenovává v dodávce? je veřejná cena? → šablona `sablony/profil-konkurenta.md`.
- [x] 2.3 **Hodinové sazby** jako proxy ceny: veřejné ceníky, Naceni.cz, poptávkové servery (Poptávej.cz, AAApoptávka), příspěvky na Webtrhu, LinkedIn průzkumy sazeb, platové průzkumy „webový analytik“ (proxy pro in-house alternativu klienta).
- [x] 2.4 **Komunitní zdroje**: FB skupiny (Webová analytika CZ/SK, Google Analytics CZ, E-commerce CZ), Slack/Discord komunity, diskuse pod články (Medio blog, Optimics blog, Lupa, Tyinternety), podcasty. Hledat: „správa analytiky cena“, „kolik stojí GA4 měsíčně“, „rozbilo se měření“, „přestaly chodit konverze“.
- [x] 2.5 **Inzeráty na pozice webový/marketingový analytik** (Jobs.cz, StartupJobs, LinkedIn): vyjmenované úkoly = seznam toho, co si firma jinak platí interně; nabízená mzda = strop, kolik je ochotná dávat za tuto práci měsíčně.
- [x] 2.6 Zaznamenat, jak konkurence komunikuje **kdy ke správě přistoupit** (po implementaci? při obratu X? při N releasech?) – vstup do RQ4.

## 3. Slovenský trh

Výstup: `reserse/02-trh-sk.md`

- [x] 3.1 Stejný postup jako u ČR, seznam 10–15 subjektů (např. Dexfinity, Basta digital, Visibility, ui42, Effectix SK, Pizza SEO, Truniversity, freelanceři z MeasureCamp Bratislava – ověřit).
- [x] 3.2 Zvlášť sledovat, zda se ceny uvádějí v EUR s jinou úrovní než v ČR a zda slovenské agentury prodávají do ČR/AT.

## 4. Evropa (DE/AT/CH, PL, UK, Nordics, NL)

Výstup: `reserse/03-trh-eu.md`

- [x] 4.1 **DACH**: Trakken, e-dialog, mohrstade, Feld M, Analytics Heroes, Lunapark, 121WATT (ceny školení jako kotva), Tracify. Hledané pojmy: „Tracking Retainer“, „Analytics Betreuung“, „Tracking Wartung“, „Monatspauschale Tracking“.
- [x] 4.2 **Polsko**: Bluerank, Conversion.pl, Semahead, Ideo Force, freelanceři. Pojmy: „opieka analityczna“, „utrzymanie analityki“, „abonament analityka“.
- [x] 4.3 **UK**: Measurelab, Measure Minds, Littledata, Fresh Egg, Evolytics (US/UK), Loves Data (AU – anglofonní benchmark). Pojmy: „analytics retainer“, „GA4 support retainer“, „measurement support“.
- [x] 4.4 **Nordics/NL**: Adapt, Precis Digital, Wunderman/Thompson Data, Datatrics, OrangeValley. Zajímavé pro pokročilé BQ-first modely (tam se dá hledat důkaz pro H1).
- [x] 4.5 U každého regionu: 5–10 profilů, ceny, název služby, struktura tierů, kde končí retainer a začíná „data engineering“.

## 5. USA (struktura produktu, ne cenová úroveň)

Výstup: `reserse/04-trh-us.md`

- [x] 5.1 **Agentury**: Bounteous, Adswerve, InfoTrust, Cardinal Path (Merkle), Napkyn, Seer Interactive, Analytics Pros, Evolytics, MeasureSchool, Jeffalytics, Loves Data. Hledat stránky „managed analytics“, „analytics support retainer“, „GA4 health monitoring“, „measurement operations“.
- [x] 5.2 **Marketplaces s reálnými cenami**: Upwork, Fiverr, Toptal, Clutch (ceny + recenze + „what was delivered“), MarketerHire, Growth Collective. Vytěžit: měsíční „GA4 maintenance“ nabídky, co obsahují, cena, počet objednávek/recenzí (proxy poptávky).
- [x] 5.3 **Reddit**: r/GoogleAnalytics, r/analytics, r/PPC, r/marketing, r/digital_marketing, r/bigquery, r/dataengineering. Dotazy typu „how much to charge for monthly GA4 maintenance“, „analytics retainer pricing“, „what do you include in monthly analytics report“, „tracking broke after release“. Ukládat do `pain-log.csv` a `pricing-dataset.csv`.
- [x] 5.4 **Měření komunita**: Measure Slack (#measure) archivy/odkazy, Simo Ahava blog a komentáře, Analytics Mania, Krista Seiden, Charles Farina, Ken Williams (GA4BigQuery), Johan van de Werken – jak popisují „ongoing“ práci a co je za ni fér chtít.
- [x] 5.5 **Ukázky dodávky na GitHubu / veřejně**: hledat repozitáře a šablony – GA4 BigQuery monitoring SQL, „ga4 data quality checks“, Dataform/dbt GA4 balíčky, GTM monitoring template (Simo Ahava), Looker Studio šablony „GA4 health dashboard“, „monthly analytics report template“ (PDF, Notion, Google Slides), agenturní case studies s obrázky reportů. Cíl: aspoň 10 konkrétních ukázek toho, co klient dostane do ruky.

## 6. SaaS nástroje jako cenová kotva a definice „monitoringu“

Výstup: `reserse/05-nastroje-monitoring.md` (šablona `sablony/profil-nastroje.md`)

- [x] 6.1 **Tag/data quality monitoring**: ObservePoint, Tag Inspector, Trackingplan, DataTrue, Elevar (Shopify), Tracify, Littledata, Analytics Debugger/Checker, GA4 Auditor (Analytics Mania), Tagmate, Jentis. Zjistit cenu, co hlídá, jak alertuje, pro jakou velikost klienta.
- [x] 6.2 **Konektory/ETL** (alternativa k BQ exportu): Supermetrics, Funnel.io, Windsor.ai, Dataslayer, Adverity, Fivetran, Airbyte, Porter Metrics, Coupler.io. Cena/měs, co se s nimi „spravuje“ (rozbité tokeny, změny API, limity).
- [x] 6.3 **Nativní možnosti zdarma**: GA4 Insights/anomálie, GA4 custom alerts (chybí), BigQuery scheduled queries + e-mail, Looker Studio (bez alertů), Google Cloud Monitoring pro sGTM, GTM verze/history.
- [x] 6.4 Výsledek: tabulka „co umí nástroj automaticky za X Kč/měs“ vs. „co vyžaduje člověka“. To je hranice, nad kterou se prodává služba (vstup do H5).

## 7. Pain research – konkrétní problémy, které klienti řeší

Výstup: `reserse/06-pain-research.md` + `data/pain-log.csv`

- [x] 7.1 **Sběr syrových výpovědí** (cíl 100+ záznamů): Reddit, GA4 Help Community, Stack Overflow (gtm/ga4 tagy), LinkedIn posty agentur i klientů, české FB skupiny, recenze na Clutch/G2 (co si chválí a na co si stěžují), issue trackery open-source GA4 nástrojů.
- [x] 7.2 **Katalog „co se rozbíjí a proč“** (změny prostředí, které správu ospravedlňují): release webu/redesign, změna CMP/consent mode, změna v GTM od vývojářů, GA4 změny (retence, thresholding, kvóty, nové API), změny ad platforem (Meta CAPI, Google Ads enhanced conversions, Sklik), prohlížeče (ITP, ad-blockery), migrace e-shop platformy, expirace tokenů konektorů, překročení BQ rozpočtu, rozjetí GA4 vs. e-shop revenue. U každé položky: jak často, jak dlouho typicky trvá, než si někdo všimne, a jaký je dopad (ztracená optimalizace kampaní, špatná rozhodnutí, ztracená historie).
- [x] 7.3 **Kvantifikace dopadu**, kde jde: příklady „N týdnů slepého spendu“, náklady na zpětnou rekonstrukci dat, cena in-house analytika vs. retainer.
- [x] 7.4 Rozřadit painy podle **segmentu klienta**: e-shop malý (do 20 mil. obratu), e-shop střední (20–200 mil.), B2B lead-gen web, marketplace/SaaS, agentura hledající white-label. U každého segmentu top 3 painy s důkazem.
- [x] 7.5 Zvlášť ověřit, které painy má **klient bez BQ** (jen GA4 UI + Looker Studio přes nativní konektor) – zásadní pro RQ5.
- [x] 7.6 Výstup: 10–15 pojmenovaných painů ve formátu „situace → co se stalo → dopad → co by tomu zabránilo“. Bez marketingových frází.

## 8. Analýza dodávky: co klient reálně dostane

Výstup: `reserse/07-dodavka-a-reporty.md`

- [x] 8.1 Z profilů (fáze 2–6) sestavit **matici aktivit × konkurenti** podle taxonomie z fáze 1: co je „standard“ (nabízí >70 %), co je „diferenciátor“ (nabízí <30 %), co nikdo.
- [x] 8.2 Sestavit **katalog artefaktů dodávky** s odkazy na ukázky: měsíční report (struktura, délka, komentář vs. čísla), health dashboard, alert e-mail/Slack, changelog GTM, měřicí plán jako živý dokument, kvartální review, SLA (reakční doba, hodiny, co je nad rámec).
- [x] 8.3 Zjistit **rytmus**: co je denně automaticky, co týdně, co měsíčně, co kvartálně.
- [x] 8.4 Rozlišit dodávku pro **BQ-first** klienta vs. **nativní konektory** klienta (tabulka: stejná položka, jiný způsob a hloubka).

## 9. Syntéza pricingu

Výstup: `reserse/08-pricing-synteza.md`

- [x] 9.1 Z `pricing-dataset.csv` spočítat rozpětí (min / median / max) po regionech a po modelu (retainer / fixní balíček / SaaS / % spendu), vše normalizované na CZK/měs a doplněné o „co je v ceně“.
- [x] 9.2 Identifikovat **cenové kotvy** pro českého klienta: in-house analytik (mzda + odvody / měs), SaaS monitoring (Kč/měs), PPC správa (typicky % ze spendu – klient je zvyklý), hodinová sazba × obvyklé hodiny.
- [x] 9.3 Rozebrat **strukturu tierů** u konkurence: podle čeho škálují (počet property, hodiny, reakční doba, počet platforem, BQ ano/ne) a kde je „přirozený“ zlom mezi tiery.
- [x] 9.4 Odpovědět na otázku ze zadání explicitně: má měsíční správa stát jednotky tisíc, 5 tis., 10 tis., 15 tis.+ Kč? Pro jaký segment a rozsah? Uvést odvození, ne názor.
- [x] 9.5 Rizika: co se stane při podhodnocení (nerentabilní hodiny), co při nadhodnocení (klient si vezme SaaS + ad-hoc).

## 10. Pozicování a návrh nabídky DataLayer.cz

Výstup: `reserse/09-navrh-nabidky.md`

- [x] 10.1 Vyhodnotit H1–H5 s důkazy; explicitně rozhodnout **BQ-first vs. dvouúrovňová nabídka** (s exportem / bez exportu).
- [x] 10.2 Navrhnout **2–3 tiery** s vyjmenovanou dodávkou (z fáze 8), rozsahovými limity (z fáze 1.3) a cenou (z fáze 9). Ke každému tieru: pro koho, jaký pain řeší (z fáze 7), co není v ceně.
- [x] 10.3 Formulovat **hlavní sdělení** pro web a nabídky: 1 věta pro každý segment, postavená na pojmenovaném painu, ne na benefitu. Plus 3–5 „důkazních“ argumentů (co se konkrétně hlídá, jak rychle se reaguje).
- [x] 10.4 Definovat **vstupní bod**: kdy klientovi správu nabídnout (po implementaci, po auditu, při BQ napojení, při N releasech/měs) a jak vypadá první měsíc (onboarding).
- [x] 10.5 Srovnat s aktuální nabídkou v `datalayer-web/app/lib/services.ts` (6 jednorázových služeb) a navrhnout, jak se správa mezi ně zařadí (nová služba vs. „pokračování“ každé z nich).
- [x] 10.6 Navrhnout **validaci před spuštěním**: 5–8 rozhovorů s existujícími klienty/prospekty (scénář otázek), případně testovací landing page s cenou a měření zájmu.

---

## Pořadí a závislosti

```
Fáze 1 (taxonomie) ──► Fáze 2, 3, 4, 5 (trhy, paralelně) ──► Fáze 8 (dodávka) ──┐
                   └─► Fáze 6 (nástroje) ─────────────────────────────────────────┼─► Fáze 9 (pricing) ─► Fáze 10 (nabídka)
                   └─► Fáze 7 (painy, průběžně během 2–6) ────────────────────────┘
```

Fáze 2–7 se dají dělat paralelně v samostatných sessions; každá zapisuje do společných CSV v `data/`.
Fáze 8–10 čekají na dokončení předchozích.

## Metodické zásady

1. **Každá cena má rozsah.** Řádek v datasetu bez informace o tom, co je v ceně, se označí `scope=unknown` a v syntéze má nižší váhu.
2. **Veřejné ceny jsou vzácné.** Kde nejsou, používáme proxy: hodinové sazby × typické hodiny, Upwork/Fiverr, inzeráty na pozice, Clutch „minimum project size“ a „hourly rate“ štítky.
3. **Datum a URL u všeho.** Trh se mění (GA4 změny, consent), rešerše musí být datovaná.
4. **Citovat doslova.** Pain se zapisuje v původním znění (překlad vedle), aby se neztratila konkrétnost.
5. **Oddělovat fakta, interpretaci a doporučení** – v každém výstupním souboru tři oddělené sekce.
6. **Nezaměňovat US ceny za CZ ceny.** Z USA bereme strukturu produktu a dodávky; cenovou úroveň bereme z CZ/SK a korigujeme podle DACH/PL.

## Konečné výstupy (definition of done)

- [x] `data/pricing-dataset.csv` – 352 řádků (265 s cenou CZK/měs) napříč regiony a modely
- [x] `data/evidence-log.csv` – zdroj ke každému tvrzení v `reserse/`
- [x] `data/pain-log.csv` – 313 syrových záznamů, 15 pojmenovaných painů
- [x] `reserse/00`–`09` – po jednom souboru na fázi, každý se sekcemi Fakta / Interpretace / Doporučení
- [x] Katalog 31 veřejných ukázek dodávky (`reserse/04-trh-us.md` § 2e, `07-dodavka-a-reporty.md` § 2.2)
- [x] Návrh tierů a cen DataLayer.cz s odvozením a s rozhodnutím o BQ-first vs. dvouúrovňový model
- [x] Seznam otázek pro validační rozhovory s klienty
