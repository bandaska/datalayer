# Kolo 2 – souhrn: ověření nosných tvrzení a doplnění mezer

Stav: hotovo (2. kolo, datum přístupu ke všem zdrojům **2026-09-04**, syntéza 2026-09-05).
Vstupy: 5 ověřovacích reportů (`doplneni-r2/verify-*.md`) a 13 doplnění mezer (`doplneni-r2/g01`–`g13`),
34 datových fragmentů v `data/fragments/r2-*.csv`, tři nezávislé kritiky (pricing, pain/nabídka, celkový verdikt).

**Metodická poznámka, která platí pro celý dokument:** fragmenty 2. kola **nejsou slité** do
`data/pricing-dataset.csv`, `evidence-log.csv` a `pain-log.csv` (úkol #9 je `pending`). Všechna čísla
publikovaná v `02-shrnuti-a-zavery.md` a `08-pricing-synteza.md` proto stále pocházejí z datasetu 1. kola –
včetně řádků, které toto kolo prokazatelně vyvrátilo. Dokud neproběhne úklid podle § 5.4, **žádný medián
z těch dvou souborů není reprodukovatelný z opravených dat**.

---

## 1. Shrnutí (12 bodů)

1. **Ověřeno 126 nosných tvrzení 1. kola: 90 potvrzeno (71 %), 29 vyvráceno nebo změněno (23 %), 7 zůstává
   nedostupných (6 %).** Žádné z vyvrácených tvrzení nemění výši cenových pásem; tři z nich ale mění, čím se
   pásma a diferenciátory obhajují.
2. **Cenová pásma 8–10 / 16–23 / 35–45 tis. Kč se v základu nemění, ale horní hranice se posouvá a jedno
   odvození padá.** Doložený veřejný strop lidské správy **bez** BigQuery je ~31–32 tis. Kč (RobertNemec
   31 200 Kč ověřeno v raw HTML; ADS-Tracking Max 32 475 Kč), ne ~23 tis.
3. **Násobek „s BigQuery je to 3,7–5,5× dražší“ padl třikrát nezávisle** (G06: 1,5–2,6× uvnitř dodavatele;
   G07: Funnel.io 300 → 600 USD = 2,0×; verify-sk-eu: Amplio Maintained/Managed = 2,6×). Odvozovací rovnice
   v `08` § 3.1B (3,7–5,5× × 8–10 tis. = 30–50 tis.) po opravě dává 13–26 tis. Tier 3 přežívá jen se změnou
   základny na tier 2 (19 900 × 2,0 = 39 800) – a ta volba musí být v textu přiznaná.
4. **Česká důkazní základna se 2. kolem ZMENŠILA, ne zvětšila.** Softmedia vyvrácena (článek přepsán, Wayback
   bez snapshotu), Digitální architekti překlasifikováni z produktu na blogový článek, jejich rozpočtová pásma
   označena za nepoužitelná. **Počet CZ subjektů s kontinuální správou měření jako pojmenovaným produktem
   s cenou klesá na 0.** Stabilita pásem tedy není jejich potvrzením – pásma nikdy nestála na českých datech.
5. **Klíčové sdělení „měření se tiše rozbilo“ už NENÍ v ČR volné pole.** Signals Bar používá doslova slova
   „rozbité měření“ a „tiché výpadky“ za 2 500 Kč/měs (EG2-034), LEMONTEC (AT) slibuje „innerhalb von
   24 Stunden erkannt“ za 199 € = 4 975 Kč (EG7-025), ga4monitor.com prodává kontinuální GA4 audit s alerty
   za 29 USD = 667 Kč/měs. **Detekce je komodita. Prodejné zůstává G7 (triáž, oprava, číslo chybějících
   konverzí), prahy a doručení.**
6. **H2 je nově doložena z primární dokumentace dodavatelů, ne jen z anekdot.** GTM hlásí u tagu „Succeeded“
   a neodešle jediný request (EG13-052); GTM kontejnery „degraded automatically into a restricted state“
   bez oznámení (EG12-050); GA4 BQ export „will be paused and previous days' exports will not be reprocessed“
   (EG12-047); Looker Studio alert se při rozbitém zdroji **sám vypne**. To je nejsilnější nový materiál kola.
7. **„2 týdny až 3 měsíce“ je nově číslo: medián 21 dní** (42 ze 77 vyčíslitelných výpovědí, G13) –
   ale je to odhad zdola z anglofonních fór a je dvojitě samovýběrový. Pro ČR platí jiná, lepší formulace:
   rozhodující proměnná není velikost klienta ani BigQuery, ale **existence druhého nezávislého zdroje čísel** –
   s ním 1–5 dní, bez něj měsíc až dva roky (G01 § 3.3).
8. **Prahy pro reconciliaci máme poprvé z českých a slovenských zdrojů:** rozdíl GA4 vs. backend do 10 %
   ticho, 10–30 % sledovat, nad 30 % volat (EG1-032 Khoder, EG1-013 Webtrh, EG11-048 MarketingPPC,
   EG4-024/EG4-026 CZ i SK shodně „jednotky % OK, desítky % problém“). Nahrazuje převzatý 15% práh
   z anglofonního fóra, který by u českého e-shopu pálil denně.
9. **Nativní vrstva platforem je širší a levnější, než 1. kolo tvrdilo.** Meta posílá alerty při výrazném
   propadu eventů, GTM má e-mailové container notifications, Sklik MÁ Diagnostiku měření, Cloud Monitoring
   alerting je dnes zdarma (zpoplatnění „no sooner than September 1, 2027“), GCP budget alerts zdarma.
   Klesá tím hodnota slibu „my to uvidíme“ a roste hodnota rychlosti (prahy platforem jsou strukturálně
   7denní), doručení (vše je defaultně vypnuté nebo jen obrazovka) a reakce.
10. **Kalendář změn prostředí je nově kvantifikován: ≈188 datovaných změn za 32 měsíců (5,9/měs), z toho 57
    mění sběr dat (1,8/měs = jedna každé 2,5 týdne)**; GA4 99 změn, GTM 31 změn (G12). Samotné řízení změn
    (B3/C5) vychází na 2,5–7 h/měs, tj. 3 000–17 500 Kč hodnoty jen této vrstvy – **ale zároveň to znamená,
    že odhad „tier 1 = 3–5 h měsíčně“ v `08` § 3.1A je pravděpodobně podceněný.**
11. **Nejtvrdší protievidence celého kola** přišla z USA: „*this is not something you can sell on a retainer.
    Analytics setup and troubleshooting is a one-off service*“ (EG8-008) a od praktika, který to zkusil:
    „*there isn't much demand for this service… Analytics Pros… ultimately sold to a digital ad agency*“
    (EG8-009). Na české straně: **0 z 53 poptávek** v kategorii Analytika na Shoptet Partnerech žádá
    monitoring nebo alerting (EG1-030). Prázdná pozice nebyla otestována jako hřbitov.
12. **Doporučení k tierům: ceny neměnit, obhajobu přepsat.** 8 900 a 19 900 Kč obstojí (19 900 je nejlépe
    podepřený tier – šest nezávislých subjektů). **39 000 Kč v současném odvození neobstojí**: jediný
    srovnatelný lidský bod s BQ je Amplio 45 000 Kč, proti němu stojí Blagoweb IT 11 250–30 000 Kč
    s BigQuery přímo v dodávce – rozptyl 4×. Tier 3 se musí obhájit obsahem (denní diff po `transaction_id`,
    monitoring GA4→BQ exportu, reakce do 4 h), ne tržním zařazením.

---

## 2. OVĚŘENÍ

### 2.1 Přehled podle ověřovatele

| Ověřovatel | Tvrzení | Potvrzeno | Vyvráceno / změněno | Nedostupné | Dopad na pásma |
|---|---|---|---|---|---|
| `verify-cz-ceny` | 27 | 24 | 2 | 1 | základ beze změny, **strop výš (31 200 Kč)**, sGTM položka ztratila horní oporu |
| `verify-sk-eu-ceny` | 18 | 12 | 4 | 2 | beze změny, zpevněno; **násobek BQ 2,6×, ne 3,7×** |
| `verify-us-ceny` | 18 | 10 | 6 | 2 | beze změny; enterprise kotva 5–15 tis. USD **vypadává z prokázaných čísel** |
| `verify-nastroje-ceny` | 37 | 26 | 9 | 2 | beze změny; **podlaha nástroje klesla na 667 Kč** |
| `verify-nativni-moznosti` | 26 | 18 | 8 | 0 | beze změny; **nákladová strana tierů klesá** |
| **Celkem** | **126** | **90** | **29** | **7** | |

### 2.2 Nosná potvrzená tvrzení (výběr – ta, na kterých stojí cena)

| Tvrzení | Verdikt | Co je na zdroji dnes | Dopad |
|---|---|---|---|
| RobertNemec: měsíční práce na webové analytice od 9 250 Kč | confirmed | „Měsíční práce na webové analytice (tak, aby měla smysl) začínají na 9 250 Kč, nejběžnější cena je 18 500 Kč a 31 200 Kč.“ | jediný CZ veřejný bod za práci na měření; drží dolní hranici pásma |
| RobertNemec: sporných 31 200 Kč | **confirmed** (v 1. kole „nepotvrzeno“) | tatáž věta, ověřeno v raw HTML staženém curlem | **veřejný strop správy bez BQ je 31 200 Kč, ne 23 tis.**; mezi ním a tierem 3 je jen ~20 % |
| CZ hodinové sazby 1 150–2 500 Kč/h | confirmed na 3 nezávislých zdrojích | Shoptet Partneři (9 sazeb, medián 2 000 Kč/h), AKA duben 2026 „Data Analyst 1 938,00 Kč/h“, freelance profily 850–2 500 Kč/h | H3 uzavřena jako potvrzená; horní hranice posunuta z 2 400 na 2 500 Kč/h |
| Amplio (ES): Maintained 700–1 200 €, Managed od 1 800 € s BigQuery | confirmed doslova | „Our Maintained tier sits here, from €700 to €1,200 a month“; „The Managed tier, from €1,800 a month“; BigQuery je první odlišující položkou | jediný srovnatelný lidský BQ retainer v EU; násobek **2,6×**, ne 3,7–5,5× |
| DASE (SK): paušál od 700 € bez DPH | confirmed | „Nami odporúčané minimum… je 700 eur bez DPH mesačne“ | horní kvartil drží; hodiny a reakční doba **nikde** |
| ADS-Tracking (DE): 179–1 299 €/měs podle sessions | confirmed | 5 tierů, „10 Std. Support / Jahr“ u Small, 20 u Middle, 30 u Max | **scope error 1. kola**: Basic/Starter mají 0 h, Middle 20 h za ROK = 1,7 h/měs → kotva ochoty platit, ne srovnatelná lidská správa |
| Elevar Analyst Services +500 / +1 000 USD/měs | confirmed (2 ověřovatelé, doslovný citát) | „Tier 1 Up to 3 analyst requests/month +$500/month“; „Tier 2 Up to 10 … +$1000/month“; nedostupné u nejlevnějšího tieru Core | kotva lidské vrstvy 11 500 / 23 000 Kč; 23 000 sedí na horní hranici pásma 16–23 tis. **(pozor: G11 ji nedoložil – viz § 2.4)** |
| Meta Events Manager: Event Match Quality a diagnostika deduplikace | confirmed | „aim for an Event Match Quality score of 6.0 or higher“; varování jen v UI | D2 se dá hlídat, ale nikam se to neposílá |
| Google Ads: stavy konverzních akcí „No recent conversions“ / „Tag inactive“ | confirmed | „Tag inactive: We no longer see your tag, and haven't recorded any conversions in the last 7 days.“ | **práh je 7 dní** – doložená příčina, proč to trvá týdny |
| GA4 custom insights: hourly jen pro web, limit 50/property, e-mail defaultně nikomu | confirmed | „Hourly evaluation is available only for web data“; „By default, all users… see all triggered custom insights in the Insight dashboard“ | G1 zdarma existuje, ale **doručení je práce**, ne funkce |
| Stape: monitoring až od tieru Business (83 USD/měs) | confirmed | „Creates monitoring rules to track your sGTM container's… performance“ | správná URL je `/price`, ne `/pricing` |
| Trackingplan: 249 / 499 / 999 USD, Enterprise od 1 750 USD | confirmed | „Monthly price billed annually“; agentury contact sales | 1. kolo neznalo tier 499 USD; BigQuery na cenové stránce vůbec |
| DataTrue: Starter 16 000 USD/rok, Team 32 000 USD/rok (+2 h/měs support) | confirmed | „2 Hours pm dedicated support manager“ | enterprise software se srovnatelnou hloubkou stojí 30 667–61 333 Kč/měs **bez** plnohodnotného člověka |
| E2M: 1 299 / 2 099 / 3 999 USD za 30–35 / 50–60 / 100–120 h/měs | confirmed | „White Label Web Analytics Tracking – Plans and Pricing… No minimums. No contracts.“ | white-label kotva; 3 999 USD = 92 000 Kč za 100–120 h |
| Advisio DataPlus: 800 / 1 500 / 3 000 Kč/měs | confirmed | „Cenové rozpětí je přibližně jeden až tři tisíce korun měsíčně.“ | jediný živý CZ sGTM produkt s cenou |

### 2.3 VYVRÁCENÁ tvrzení (12) – nejdůležitější část

| # | Tvrzení 1. kola | Co je na zdroji dnes | Dopad |
|---|---|---|---|
| R1 | **Softmedia: provoz sGTM 1 000 / 2 500–4 000 / 6 000–8 000 Kč/měs** | Článek přepsán (10. 6. 2026), **žádná cena**. Wayback `archived_snapshots: {}` – čísla nelze doložit ani z archivu. | Položka „Provoz sGTM 1 500–6 000 Kč“ **ztratila horní oporu**. Zbývající živé CZ body: DataPlus 800/1 500/3 000, Szabo 350–600, MM ~300 Kč. → **posunout na 800–3 000 Kč + hosting**. Vyřadit P2-034/035/036. |
| R2 | **argoberlin (DE): 190 €/měs za Google Analytics-Beratung** | `/google-analytics-beratung/` vrací **404** i dnes; živá stránka řetězce „190“, „monatlich“, „Monat“ neobsahuje. | Vyřadit P4-009. Z EU vzorku tím mizí jediný bod nad 50 000 Kč u lidské správy bez BQ → horní konec evropského pásma **klesá** (konzervativnější základ). |
| R3 | **argoberlin: 106 €/h** | Řetězec „106“ na stránce není. Doslova: „Google Analytics Account aufsetzen 3h - € 285“ → **95 €/h**. | Nahradit P4-010 řádkem PV2-004. |
| R4 | **Fresh Egg (UK): měsíční GA4 podpora „from £1,750“** | Na `/analytics/` **žádná cena**; v sitemapu (393 URL) žádná cenová stránka. Údaj byl jen ze snippetu vyhledávače. | Vyřadit P4-031. |
| R5 | **Elevar: platná sada Essentials/Growth/Business 200/450/950 USD** | Na primárním ceníku není; přežila jen v Billing FAQ jako **„legacy plan (prior to January 2023)“**. Platná sada: Core 225 / Advanced 650 / Premium 1 250 / Elite od 3 000 USD. | Přepsat celý blok Elevaru v `05`; přibyl čtvrtý tier Elite (69 000 Kč/měs). |
| R6 | **US expertní hodinovka 175–300 USD/h u konkrétních konzultantů** (Analytics Mania, Team Simmer, Napkyn, Adswerve, InfoTrust) | **Ani jeden z pěti sazbu nezveřejňuje.** Analytics Mania: „No prices, hourly rates, fixed fees, or 'starting at' figures are listed“; Adswerve/Bounteous na Clutch „Hourly rate Undisclosed“; InfoTrust „No public rate card“. | Přepsat na „150–300 USD/h **dle cenových průvodců**, žádný jmenovaný konzultant sazbu nezveřejňuje“. Spodní hranice experta je spíš 100–150 než 175. |
| R7 | **Dataslayer: 29 / 99 / 299 EUR/měs** | Ceník (shodně přes WebFetch i r.jina.ai) zobrazuje u Starter, Advanced i Pro shodně **„20€“** – zjevná chyba zobrazení. | Cena Dataslayeru je **neověřitelná**; označit a nepoužívat. |
| R8 | **Tagmate: 79 / 299 / 499 USD/měs** | `www.tagmate.app` servíruje **francouzský katalog online kasin**; `tagmate.io` → 301 na mixitup.io; `app.tagmate.app` NXDOMAIN. | Produkt neexistuje. Vypadává **jeden z pěti důkazů „nástroje prodávají člověka jako add-on“** – zbývají Elevar, GAfix, DataTrue, ObservePoint. |
| R9 | **Looker Studio umí upozornit na rozbitý zdroj dat** | Opak: „*If the report changes such that the alert condition would no longer have the same meaning, Data Studio Pro **deactivates the alert**… The alert condition query failed to run.*“ | **Nejlepší doslovný důkaz H2 z celého kola.** Zároveň: nestavět alerting na Looker Studiu. |
| R10 | **Google Ads notifikuje stavy konverzních akcí e-mailem** | Úplný seznam kategorií e-mailů (Performance reporting, Newsletter, Campaign maintenance, Reports, Billing alerts…) **neobsahuje žádnou kategorii pro měření konverzí ani pro nefunkční tag**. | Diagnostika Ads je obrazovka, ne alert – posiluje G7 a „doručení“ jako diferenciátor. |
| R11 | **Meta neposílá žádné notifikace při výpadku eventů** | „*You may receive alerts about a significant drop in website event traffic from the Meta Pixel. We send these notifications only when event counts used in campaigns or audiences drop substantially compared to one week ago and the seven-day average.*“ | **Nesmíme tvrdit, že Meta mlčí.** Diferenciátor: nastavitelná citlivost, pokrytí eventů mimo kampaně, reakce. |
| R12 | **Sklik nemá nástroj pro diagnostiku měření konverzí** | „*Diagnostika měření vám pomáhá zkontrolovat kvalitu dat… Podíl hitů se souhlasem… Chyby validace… Při zjištění problému: Kontaktujte svého analytika nebo vývojáře.*“ (označeno „Nové“) | D3 se mění z **N na Č**. Diferenciátor se posouvá z „jediní to vidíme“ na **„jediní se na to koukáme každý den a reagujeme“** – a Sklik sám nás v závěru doporučuje. |

### 2.4 ZMĚNĚNÁ / UPŘESNĚNÁ tvrzení (17)

| # | Tvrzení 1. kola | Změna | Dopad |
|---|---|---|---|
| Z1 | Digitální architekti: „Pravidelná údržba a monitoring měření“ = **produkt** | Je to **blogový článek** pod `/produkty/`, bez ceny, bez formuláře, bez rozsahu; není v navigaci Produkty. | Počet CZ subjektů s kontinuální správou měření jako pojmenovaným produktem **s cenou = 0**. Teze o prázdné pozici **zesílila**, ale česká opora pásem se zmenšila. |
| Z2 | Manids (DK): tier „Minimum vedligeholdelse“ bez ceny | Cena na stránce je: **1 000–3 000 DKK/měs** = 3 350–10 050 Kč, ale **kvartální kadence**. | Bod pod pásmem, který potvrzuje, že 8–10 tis. je cena za **měsíční rytmus**. |
| Z3 | Elevar je samostatný dodavatel getelevar.com | `getelevar.com/pricing/` → **301 na audiense.com**; `apps.shopify.com/elevar` vrací 404. | Přejmenovat na „Audiense Online (Elevar)“; ceny číst přes r.jina.ai. |
| Z4 | Elevar se cení jen podle tieru SaaS | Další osy: +125 USD/měs za destinaci, +500 USD za Tailored Start, 1 000 / 4 500 USD jednorázová instalace, overage 0,50–0,04 USD/objednávku. | Model „tier + add-ony“ je tržní standard i u nástrojů. |
| Z5 | Elevar add-on „ongoing tracking support 500 USD/měs“ | Doslovný název je **„Analyst Services“**, jednotkou nejsou hodiny, ale **požadavky** (3 / 10 měsíčně), a jsou dva tiery. | Kotva lidské vrstvy je 11 500 **a 23 000 Kč**. **Nevyřešený rozpor**: G11 add-on v ceníku nedoložil – viz § 5.2. |
| Z6 | E2M má jen měsíční ceny | Přepínač Monthly / Quarterly −10 % / Yearly −15 %; Standard efektivně 1 104 USD/měs. | Sleva za delší závazek je u white-label standard. |
| Z7 | Clutch: hodinové sazby GA4 konzultantů 25–199 USD/h | Dnes „< $25/hr“ až „$200–$300/hr“, 293 firem; **žádná z firem citovaných v 1. kole už na první stránce není**. | Adresáře cení výhradně projektově a hodinově; enterprise hladinu z nich vyčíst nelze. |
| Z8 | ga4monitor.com – v 1. kole vůbec nezachycen | **29 / 99 / 499 USD/měs** (1 / 5 / 30 property), „35+ data quality checks“, weekly audits + real-time alerts, BigQuery nevyžaduje. | **Podlaha kontinuálního GA4 monitoringu klesá na 667 Kč/měs.** Minimální stack pro malý e-shop klesá z ~1 600 na ~900–1 060 Kč. |
| Z9 | Looker Studio Pro: cena per user neuvedena | **„$9 per user per project per month“** = 207 Kč (nalezeno grepem raw HTML). | Mezera 1. kola zaplněna; oprava P6-125. |
| Z10 | DashThis: nejvyšší tier = ∞ dashboardů | Standard $429 = **50 dashboardů**, ne ∞; **alerty nejsou na stránce vůbec zmíněny**. | Oprava v `05`. |
| Z11 | Porter Metrics: 13–20 účtů flat 100 USD | Dnes plány Free / Build ($15, ročně $12,50) / Grow ($8, 5–12 účtů) / Scale (od $4, 50–69 účtů). **Pásmo „13–20 účtů flat 100 USD“ neexistuje.** | Oprava v `05`. |
| Z12 | Amplitude data governance jen Growth/Enterprise | Existuje samoobslužný tier **Plus („Starts at $0“)**; Data Governance je v tabulce označena jako dostupná **i u Free**. | Oprava v `05`. |
| Z13 | Coupler.io má BigQuery ve všech plánech | BQ je dostupná destinace napříč tiery, ale **počet destinací je limitován plánem** (Free 1, Starter 1, Active 3, Pro unlimited). | Upřesnit formulaci. |
| Z14 | Google neposílá notifikaci, když nedorazí denní BQ export GA4 | Notifikace o **selhání** opravdu neexistuje, ALE u **GA4 360** existuje **completeness signal** v Cloud Logging → Pub/Sub. | Standardní BQ klient si monitoring exportu **musí postavit sám** – to je obsah tieru 3, ne samozřejmost. |
| Z15 | Cloud Monitoring: alerting stojí 0,35 USD/měs za metric reference | „*Starting **no sooner than September 1, 2027**, Cloud Monitoring will begin charging for alerting.*“ | Alerting je k 2026-09-04 **zdarma** → nákladová strana tieru 1 klesá. |
| Z16 | Při publishi GTM neexistuje žádná notifikace, musí se pollovat API | **E-mailové container notifications existují** (publish i vytvoření verze, per-uživatel, defaultně vypnuté). Webhook opravdu ne. | Zlevnění A3. Diferenciátorem zůstává **changelog v lidské řeči** a **review cizího publishe**. |
| Z17 | Enterprise US retainer 5 000–15 000 USD/měs | Ověřeno na 22 federálních kontraktech: **medián 16 694 USD/měs**, Q1 4 346, Q3 33 156, max 70 252. Pásmo 5–15 tis. je **spodní polovina**. Bounteous (o níž zdroj psal „retainers from $15,000“) má s NASA tři roky po sobě **4 349 USD/měs**. | Cena je lineární funkcí **rozsahu**, ne prestiže dodavatele. Řádky P5-011…P5-017 (citace konkurenta) označit jako neověřené a vyřadit z kvartilů. |

### 2.5 NEDOSTUPNÁ (7)

| Zdroj | Co se nepodařilo | Proč |
|---|---|---|
| Digitální architekti – rozpočtová pásma | zda jde o **měsíční, nebo projektový** rozpočet | na stránce není určení období; `name` pole je `obrat`; navazující dotazník se načítá JS |
| DASE (SK) | kolik hodin je v 700 € a jaká je reakční doba | nepublikováno – mezera na straně dodavatele, ne rešerše |
| ADMA (SK) sazebník 2025 | primární ceník | `adma.sk/hodinove-sadzby` 404, není v žádné z 13 sitemap, Wayback `{}`; 65 €/h zůstává jen ze sekundární citace |
| ObservePoint | ceny 599 / 2 400 USD / ~72 000 USD/rok | `/pricing` obsahuje jen „Pricing Calculator“; ověřeno třemi cestami, **nula výskytů znaku `$` ve 142 kB HTML** |
| „Tagging Server“ | existence produktu | všechny varianty domény NXDOMAIN; vyhledávání vrací jen Stape, Hardal, TagFly |
| Upwork | medián 30 USD/h za GTM práce | HTTP 403 přímo i přes r.jina.ai (Cloudflare CAPTCHA) |
| enterprise retainer 5–15 tis. USD | druhý nezávislý zdroj | „Only 3 of the 20 external firms publish a starting price“; u všech enterprise firem „No public rate card“ |

---

## 3. NOVÁ DATA

### 3.1 Kolik řádků přibylo

| Oblast | pricing | evidence | pain | Klíčový přínos |
|---|---:|---:|---:|---|
| G01 CZ incidenty | 0 | 43 | 36 | Webtrh otevřen (299 vláken, 49 staženo); všech 53 poptávek Shoptet Partneři; CZ práh 30 % |
| G02 CZ subjekty a ceny | 49 | 35 | 0 | Waaila a Signals ceníky; 3 neověřené subjekty vyřešeny; **H2 v ČR obsazena** |
| G03 CZ sazby a mzdy | 54 | 31 | 0 | **ISPV (kvalita A, N=11 690)**; AKA 1 938 Kč/h; bod zlomu 48,5 h/měs |
| G04 CZ/SK komunita | 0 | 41 | 15 | LinkedIn otevřen; MeasureCamp; RobertNemec SLA 3 h; tichý fallback atribuce |
| G05 SK doplnění | 28 | 51 | 21 | 7 z 8 blokovaných webů otevřeno; seoporadca.sk 290 €; Starbomedia validace v ceně |
| G06 EU hráči a země | 17 | 29 | 0 | **Blagoweb IT: první EU retainer s BQ v dodávce**; ES, CH, IT, FI, NO pokryty |
| G07 EU sazby, SLA, BQ | 25 | 35 | 0 | 8 cen spravované datové vrstvy; 12 mzdových proxy v 5 zemích; **BQ násobek 2,0×** |
| G08 US Reddit | 42 | 66 | 25 | Arctic Shift API: **115 vláken, 1 697 komentářů se skóre**; realizovaný retainer 400 USD |
| G09 US marketplaces | 79 | 21 | 0 | **api.usaspending.gov: 22 kontraktů** se skutečně nasmlouvanou cenou; Fiverr ověřen |
| G10 ukázky dodávky | 0 | 38 | 0 | 3 skutečné klientské reporty; GOV.UK changelog; SLA ceníky Google |
| G11 nástroje – chování | 24 | 49 | 18 | notifikace konektorů; **nové kódy `tool_noise`, `infra_cost`**; ga4monitor |
| G12 změny prostředí | 0 | 52 | 31 | **kalendář ≈188 změn / 32 měsíců**; `ga4_change` a `browser_change` zaplněny |
| G13 support komunity | 0 | 66 | 77 | Stack Exchange API, Discourse JSON, wordpress.org; **medián 21 dní** |
| verify V1–V5 | 79 | 31 | 0 | opravené a nové řádky z ověřování |
| **Celkem 2. kolo** | **397** | **588** | **223** | |
| Stav po sloučení (až proběhne) | 352 → **749** | 530 → **1 118** | 313 → **536** | |

**Rozložení nových řádků.** Pricing podle regionu: US 151, CZ 122, EU 59, GLOBAL 37, SK 28. Podle období:
`mesic` 234, `hodina` 88, `jednorazove` 60, `rok` 14. Podle typu: analytics_agency 119, saas_tool 113,
freelancer 68, job_ad 41, performance_agency 36, marketplace 20.
Pain podle regionu: GLOBAL 84, CZ 46, US 34, SK 30, EU 29. Podle `has_bq`: **no 173 (78 %)**, unknown 29,
yes 14, optional 7. Nejčetnější `what_broke`: platform_migration 25, release_web 24, consent_change 23,
gtm_change_dev 23, ga4_change 23, ad_platform_change 23.

### 3.2 Nové veřejné cenové body (výběr toho, co mění argumentaci)

**Česko**

| Subjekt | Co doslova | Cena | Poznámka |
|---|---|---|---|
| RobertNemec.com | „nejběžnější cena je 18 500 Kč **a 31 200 Kč**“ | 31 200 Kč/měs | **nový veřejný strop správy bez BQ** |
| RobertNemec.com | „Podpora Google Analytics… 1 900 Kč/h, minimum 5 h“ + **odpověď do 3 hodin** | 9 500 Kč | vyvrací „reakční dobu nikdo neslibuje“ |
| RDY.cz / webpj.cz | „Správa PPC kampaní… **včetně nastavení měření konverzí přes GA4 a Tag Manager**, měsíční report a konzultace, bez závazku“ | od 10 000 Kč/měs | **nejtvrdší konkurent tieru Hlídání** |
| Signals (celý stack 6 produktů) | Bar / Dance / Game 2 500, Bingo a Attribution 5 000, Bot Detector 1 000 Kč | **18 700 Kč/měs** + 70 000 setup | ≈ cena tieru 2 **bez jediné hodiny člověka** |
| Signals Bar | „Tiché výpadky v e-commerce vás stojí tržby… **rozbité měření** zjistíte z reportu až zpětně“ | 2 500 Kč/měs | **slovo „monitoring“ má v ČR kotvu 2 500 Kč** |
| Waaila (Cross Masters) | nástroj 29–399 €/měs + **lidské hodiny zvlášť**: 2 h = 140 €, 10 h = 600 € | 725–9 975 + 3 500–15 000 Kč | férová kalkulace: **60–70 €/h = 1 500–1 750 Kč/h** |
| per4mens.cz | měsíční správa podle výše kreditu | 7 250 / 10 150 / 18 850 Kč | nejnižší CZ retainer s analytikou |
| Marketingový svět | „Měsíční správa kampaní 7 h“ | 8 750 Kč/měs | prakticky totožná cena jako tier 1 za 7 h |
| Lukáš Štěpánek | „Dlouhodobá správa kampaní a analytiky **začíná od 10 000 Kč měsíčně**“, min. 3 měsíce | 10 000 Kč | |
| Growtix | „Fee… typicky 35 000–100 000 Kč měsíčně“ | 35–100 tis. Kč | kotva pro horní tier |
| AKA (asociace), duben 2026 | „**Data Analyst / Data Scientist = 1 938,00 Kč/h**“ | – | **nejnižší sazba ze všech specializovaných rolí** |
| ISPV / TREXIMA 2025 | CZ-ISCO 24311 medián **70 081 Kč** hrubého (N = 11 690, kvalita A) | 93 909 Kč nákladů | in-house hodina = **543 Kč**; bod zlomu **48,5 h/měs** |
| Zahálka (Shoptet partner) | PPC správa 10 / 15 / 20 / 30 / 50 tis. za 5 / 10 / 15 / 25 / 50 h | | rozšiřuje kotvu PPC nahoru |

**Slovensko**

| Subjekt | Co doslova | Cena |
|---|---|---|
| seoporadca.sk | „Kontrola KPI a mentoring **od 290 €/mes**“, min. 3 měsíce, přístup do GSC a Analytics | 7 250 Kč/měs |
| Starbomedia | PPC správa vč. „server-side tagging a Enhanced Conversions — **90 %+ reálnych tržieb, mesačne validované voči e-shopu**“ | 8 750–15 000 Kč/měs |
| WPP Media Slovakia | Digital Analytics Expert, 1 800–3 200 € brutto | 60 300–107 200 Kč nákladů |
| ADMA 2025 (sekundárně) | Špecialista webovej analytiky 65 €/h – stejně jako PPC a SEO | 1 625 Kč/h |

**Evropa**

| Subjekt | Co doslova | Cena | Poznámka |
|---|---|---|---|
| YAG Comunicación (ES) | Esencial / Pro / Enterprise, „Sin permanencia, sin letra pequeña“ | 7 250 / 12 250 / 22 250 Kč | **první plný trojstupňový EU ceník**; poměr 1 : 1,7 : 3,1 |
| Blagoweb (IT) | „canone“ **s BigQuery přímo v dodávce**; infra a náklady BQ zvlášť | 11 250–30 000 Kč/měs | **jediný srovnatelný lidský BQ retainer proti Ampliu – a odporuje 39 000 Kč** |
| DLM Digital (CH) | „Laufende Betreuung ab CHF 300/Mt.“ = monitoring, reporting, doporučení, **Fehlerbehebung**, pevný kontakt | 7 800 Kč/měs | obsah tieru 1 **není v EU unikátní** |
| Gipfelwerk (CH) | „Analyse-Betreuung ab CHF 490/Monat“ + **sGTM hosting ab CHF 30** | 12 740 + 780 Kč | 3. nezávislé potvrzení odděleného sGTM řádku |
| ePoint (ES) | mantenimiento mensual, výpověď 15 dní | 6 250–20 000 Kč/měs | |
| Measurelab (UK) | G-Cloud: £150/kredit = hodina, **minimum 10 kreditů/měs** | 43 500 Kč/měs | **hodinová proxy, ne datový retainer** (viz § 5.1) |
| Funnel.io (SE) | Starter 300 USD bez BQ → Business 600 USD **s BigQuery** | 6 900 → 13 800 Kč | **násobek za BQ = 2,0×** |
| GA4Dataform (NL) | model GA4→BQ, anomaly detection, error alerts; **první reakce „within 3 business days“** | 6 875 / 9 375 Kč | laťka reakční doby v oboru je extrémně nízko |

**USA / globálně**

| Subjekt | Co | Cena |
|---|---|---|
| federální kontrakty (usaspending) | Smithsonian „Google Analytics support“ (min) | 985 USD/měs = 22 655 Kč |
| | Bounteous / NASA, GA360 support, 3× po sobě | 4 349 USD/měs |
| | MetroStar / Fearless: **jeden „web analytics analyst“** | 19 911–25 212 USD/měs |
| | Rock Creek / Treasury (max) | 70 252 USD/měs |
| GSA sazby | Data Analyst I → V | 44,42 → 134,86 USD/h |
| Elevar / Audiense | Analyst Services Tier 1 / Tier 2 | +500 / +1 000 USD = 11 500 / 23 000 Kč |
| ga4monitor.com | kontinuální GA4 audit + alerty, 1 property | 29 USD = **667 Kč/měs** |
| Track-Guard | validace parametrů eventů a Consent Mode na reálném provozu | 19 USD = **437 Kč/měs** |
| Web Tonic | agenturní správa měření | 3 000 USD = 69 000 Kč/měs |
| E2M (white-label) | 30–35 / 50–60 / 100–120 h měsíčně | 1 299 / 2 099 / 3 999 USD |
| Reddit, doložený realizovaný retainer | „monthly retainer of 5 hours maintenance“ | 400 USD = 9 200 Kč/měs |

---

## 4. CO SE MĚNÍ NA ZÁVĚRECH

### 4.1 Hypotézy

**H1 – „Kontinuální správa má smysl hlavně nad BigQuery.“ → VYVRÁCENA v silné podobě, POTVRZENA ve slabé,
a nově vyvrácena i jako CENOVÁ osa.**

| Důkaz | 1. kolo | 2. kolo |
|---|---|---|
| podíl painů bez BQ | 75 % | **78 % v celém novém vzorku, 88 % u G13, 97 % u CZ (G01)** |
| CZ poptávka | – | **1 z 53** poptávek na Shoptet Partnerech zmiňuje BigQuery |
| největší kupující na světě | – | **ani jeden z 22 federálních kontraktů** nemá v předmětu BQ, datový sklad ani export |
| cena BQ jako bariéra | „BQ je drahé“ | **provoz BQ u českého e-shopu „typicky do 500 Kč/měs“** (EG2-004, EG2-010); Seresa dává privátní BQ dataset od 630 Kč |
| mzdový příplatek za BQ člověka | předpoklad „výrazně dražší“ | DE **+16 %**, NL +34 %, PL **−11 %** |
| násobek ceny za BQ | 3,7–5,5× | **1,5–2,6× uvnitř jednoho dodavatele; Funnel.io přesně 2,0×** |

**Zpřesněno na:** BigQuery je osa **hloubky**, ne osa vstupu **ani osa ceny**. Vyšší tier nelze obhajovat
dražším člověkem ani dražší infrastrukturou – jen rozsahem, kadencí (denní vs. měsíční) a reakční dobou.
Zároveň platí opak, který 1. kolo naznačovalo: **BQ je sám o sobě zdrojem nové správy** – 9 nových painů
(G13), 4 změny schématu exportu v roce 2024, limit 1 mil. událostí s **nevratným** pozastavením exportu,
a oficiální Google řešení `ga4_dataform` **nemá žádné data quality assertions** (EG10-018). Věta pro upsell:
*„máte export ≠ máte hlídaná data“.*

**H2 – „Pain není ‚nemáme data‘, ale ‚data se tiše rozbila‘.“ → POTVRZENA jako mechanismus, ZPŘESNĚNA
jako sdělení, VYVRÁCENA jako exkluzivita.**

- **Potvrzeno a povýšeno:** z hypotézy podpořené stížnostmi na **doložený vlastnostní rys prostředí** –
  čtyři citace z primární dokumentace (GTM „Succeeded“ bez requestu, GTM „degraded automatically into
  a restricted state“, BQ export „paused… will not be reprocessed“, Looker Studio alert se sám vypne).
- **Zpřesněno na číslo:** medián **21 dní** (n = 42, odhad zdola, anglofonní fóra). Nově doložená **příčina**:
  prahy platforem jsou strukturálně 7denní (Ads „Tag inactive“ po 7 dnech, Meta proti 7dennímu průměru,
  enhanced conversions „No recent data“ po 7 dnech).
- **VYVRÁCENO: „nikdo z české konkurence to jako sdělení nepoužívá“.** Signals Bar (2 500 Kč/měs) používá
  doslova „rozbité měření“ a „tiché výpadky“ včetně časové osy a kvantifikace, a pojmenovává i alert fatigue.
  DASE (SK) publikuje totéž slovensky: *„pokazené meranie môže pokojne vyzerať úplne normálne“*.
  LEMONTEC (AT) slibuje 24h detekci za 4 975 Kč/měs.
- **Zpřesněno: český pain má JINÉ pořadí než globální.** V CZ+SK dominují `gtm_change_dev`, `unknown_owner`,
  `release_web` a `ad_platform_change` – tedy *„nikdy to nebylo pořádně nastavené“*, ne *„fungovalo to a tiše
  se to rozbilo“*. Z 36 CZ výpovědí je skutečných tichých rozpadů dřív funkčního měření zhruba 5–7.
  **Pro ČR musí vedle H2 stát druhé sdělení.**

**H3 – „Trh v ČR nemá veřejný ceník; sazby 1 200–2 500 Kč/h, retainer 5–20 h/měs.“ → POTVRZENA, sazby
zpřesněny na 1 150–2 500 Kč/h (medián 2 000).**

Tři nezávislé strukturované zdroje (Shoptet Partneři 9 sazeb, AKA 1 938 Kč/h, freelance profily). Nejsilnější
nový důkaz je **negativní**: nejobsáhlejší veřejný CZ ceníkový benchmark (Hasalík) má měsíční paušál u PPC
(8–30 tis.), SEO (10–40 tis.), sociálních sítí (5–50 tis.) i srovnávačů (2–8 tis.) – **u měření výhradně
jednorázové ceny**. Khoder má v ceníku sloupec „Měsíční správa“ s cenami u Nákupů (4 500) a Facebooku
(3 500 Kč), ale u obou položek nastavení měření **pomlčku**. Trh měsíční správu umí naceňovat a u měření
ji vědomě nenabízí.

**H4 – „V USA je analytics retainer běžný produkt s tiery 1 500–10 000 USD.“ → ZPŘESNĚNA, horní hranice
rozšířena, ale zdroj vyměněn.**

Pásmo 5–15 tis. USD bylo z jednoho zdroje, který je sám konkurent, a **nemá druhý zdroj** („Only 3 of the 20
external firms publish a starting price“). Nahrazeno tvrdými daty: 22 federálních kontraktů, **medián
16 694 USD/měs, Q1 4 346, Q3 33 156, max 70 252**. Struktura: 985–4 349 USD = jedna property;
9–15 tis. = jedna aplikace; **19,9–25,2 tis. = jeden dedikovaný analytik**; 33–70 tis. = program.
**Cena je lineární funkcí rozsahu, ne prestiže dodavatele** (Bounteous dodává NASA za 4 349 USD/měs).

**H5 – „Část hodnoty nahradí SaaS; služba stojí na tom, co nástroj neumí.“ → POTVRZENA, ale hranice se
posunula a diferenciátor se změnil.**

- **Nejsilnější nový argument (G12):** ze všech ≈188 doložených změn prostředí není **ani jedna**, kterou by
  SaaS monitoring vyřešil sám – neví, že 24. 9. 2026 vyprší Meta v20.0 a 1. 3. 2027 přestanou fungovat
  Shopify ScriptTags (to je kalendář, ne alert), nerozhodne o migraci z Measurement Protocolu, nepozná, že
  skok v konverzích je změna metodiky Googlu, a nepokrývá Sklik.
- **Kvantifikace hranice (G07):** automatizovaná datová vrstva má v EU medián 10 438 Kč/měs, lidská správa
  téhož 50 000–125 000 Kč → **nástroj pokrývá 10–20 % ceny služby**. Federální úřady s plnou informací
  o obou cenách koupily **oboje** (poměr člověk : nástroj 4–11×).
- **Ale: nativní a levná vrstva je širší, než 1. kolo tvrdilo.** Sklik má Diagnostiku měření, Meta posílá
  alerty, GTM má container notifications, Cloud Monitoring alerting je zdarma, ga4monitor stojí 667 Kč.
  **Klesá hodnota slibu „my to uvidíme“**, roste hodnota tří věcí, které dokumentace platforem doslova nechává
  na člověku: rychlost proti 7dennímu prahu, doručení a příjemce, a **G7** (Sklik doslova: „Kontaktujte svého
  analytika nebo vývojáře“).
- **Nová vrstva, kterou 1. kolo nemělo:** tiše selhává i **placený nástroj** – Analyzify přestala fungovat
  opakovaně 3 roky (EG11-042), Elevar „*their report always shows 100% accuracy by default no matter what*“
  (EG11-011). A nástroj práci i **vytváří**: `tool_noise` 7 výpovědí, reconnecty a reautorizace, rostoucí faktura.
- **Ubyl jeden důkaz:** Tagmate neexistuje, takže „nástroje prodávají člověka jako add-on“ stojí na čtyřech,
  ne pěti případech.

### 4.2 Cenová pásma

| Tvrzení 1. kola | Verdikt 2. kola | Nová formulace |
|---|---|---|
| **Medián 8–10 tis. Kč** za lidskou správu bez BQ | **potvrzen jako řád, ale ne jako medián a ne jako shoda tří regionů** | Kurátorská sada (1 subjekt = 1 hodnota, jen scope správa měření, n = 18): **medián vstupních nabídek 7 525 Kč, Q1 6 250, Q3 10 950**. Nezávisle: nové EU balíčky medián 7 800 Kč (10 025 po vyloučení čistě infra nabídky), US kotvy 9 200 Kč dvakrát nezávisle, SK 7 250–8 750 Kč. **Skoro všechny body jsou ceny typu „od“ – je to medián podlah.** |
| **Horní kvartil 16–23 tis. Kč** | **zpřesněn na 17–32 tis., strop je 31–32 tis.** | Je to medián horních veřejných tierů, ne kvartil: n = 12, **medián 21 125 Kč, Q3 27 600, max 32 475 Kč**. Strop doložen dvěma nezávislými subjekty: RobertNemec 31 200 Kč a ADS-Tracking Max 32 475 Kč. |
| **S BigQuery 35–45 tis. (3,7–5,5×)** | **násobek VYVRÁCEN, pásmo oslabeno** | Uvnitř dodavatele **1,5–2,6×** (Amplio 2,6×, Funnel.io 2,0×). Poměr mezi veřejným non-BQ stropem (32 475) a nejvyšším BQ bodem (45 000) je jen **1,39×**. Dva veřejné evropské lidské BQ body: Amplio 45 000 a Blagoweb 11 250–30 000 Kč – **rozptyl 4×**. Pásmo držet jako rozhodnutí, ne jako tržní nález. |
| **Tier 1 = 8 900 Kč** | **potvrzen jako cena, VYVRÁCENO jeho zdůvodnění** | Věta „leží 23 % pod nejlevnějším lidským balíčkem na trhu“ je **faktická chyba proti datům téhož kola**: pod 8 900 Kč leží nejméně 8 nezávislých subjektů (ADS-Tracking Basic 4 475, LEMONTEC 4 975, Agencja Echo 6 090, Webanalist 6 250, ePoint 6 250, ananalytics.pl 6 960 za 5 h, YAG 7 250, seoporadca.sk 7 250, per4mens 7 250, DLM 7 800). 8 900 Kč je zhruba na **62. percentilu** vstupních nabídek. Rozdíl musí obhájit obsah, ne cena. |
| **Tier 2 = 19 900 Kč** | **potvrzen – nejlépe podepřený ze tří** | Šest nezávislých subjektů: RobertNemec 18 500, DASE 17 500, Amplio Maintained 17 500–30 000, YAG Enterprise 22 250, ADS-Tracking Middle 19 975, Elevar Analyst T2 23 000. Kontrola mzdovou cestou: 587 Kč/h × evropský agenturní násobek 2,3–3,8× × 10 h = 13 500–22 300 Kč. **Riziko: skok 8 900 → 19 900 je 2,24×, zatímco trh dělá 1,6–1,8×** (YAG 1,69×, Amplio 1,75×). |
| **Tier 3 = 39 000 Kč** | **cena zůstává, odvození NEOBSTOJÍ** | Rovnice v `08` § 3.1B po opravě násobku dává 13–26 tis. Přežívá jen se změnou základny: 19 900 × 2,0 = 39 800 Kč – **post-hoc volba základny, kterou je nutné přiznat**. Opory: evropská lidská hladina datové správy 50–125 tis. Kč (sekundární zdroj, nízká váha), DataTrue Team 61 333 Kč za software. Proti: Blagoweb 11 250–30 000 Kč s BQ a veřejný CZ bod 31 200 Kč **bez** BQ. Při AKA sazbě je 39 000 Kč = 20 h/měs; **nad ~48,5 h je in-house levnější → držet jako STROP paušálu**. |
| **Provoz sGTM 1 500–6 000 Kč** | **zpřesněn na 800–3 000 Kč + hosting** | Softmedia (horní opora) vyvrácena. Živé CZ body: DataPlus 800/1 500/3 000, Szabo 350–600, MM ~300 Kč. Pozor: **vlastní Cloud Run má reálné minimum ~2 070 Kč/měs** (2 instance), ne 45 USD z návodů. |
| **Nástroje ≤ 1 500 Kč/klient/měs** | **zpřesněno dolů na ~900 Kč** | Track-Guard 437 + GA4 insights 0 + Stape Pro 460 Kč. Navíc zdarma: Cloud Monitoring alerting, GCP budget alerts, GTM notifications, Sklik Diagnostika. **Marže tieru 1 se zlepšuje – a tím sílí námitka „proč 8 900, když monitoring je za 667“.** |
| **Nákladová cesta: interní sazba 1 800 Kč/h** | **VYVRÁCENA jako nákladová** | ISPV: skutečný interní náklad **543 Kč/h**. AKA tržní agenturní sazba **1 938 Kč/h**. 1 800 Kč/h je 93 % tržní ceny a 3,3× skutečného nákladu → nákladová cesta je tržní cesta v přestrojení a její „shoda“ s tržní cestou je tautologická. Skutečná nákladová podlaha tieru 1 je **~3 000–4 400 Kč**, ne 7 000–10 500. |

### 4.3 Ostatní závěry 1. kola, které je nutné přepsat

| Závěr | Verdikt | Proč |
|---|---|---|
| „Reakční dobu v ČR ani na SK nikdo veřejně neslibuje“ | **zpřesnit** | RobertNemec garantuje **odpověď do 3 hodin**; seoporadca.sk 48 h / 10 dní u výstupu; TechWeb 7 dní. Diferenciátor se posouvá na **SLA na DETEKCI**, ne na odpověď. Zároveň LEMONTEC (AT) prodává „innerhalb von 24 Stunden erkannt“ za 4 975 Kč. |
| „Katalog artefaktů je výhradně anglofonní“ | **vyvráceno** | DASE publikovalo 5. 8. 2026 21bodový a 8. 7. 2026 6bodový checklist slovensky; existuje český „Checklist správného nastavení GA4“ (~25 bodů). Rozdíl je v typu: jednorázová kontrola, ne opakované kontroly s prahy. |
| „313 výpovědí, 75 % bez BQ“ | **přepočítat** | Po sloučení **536 výpovědí**; v novém vzorku 78 % bez BQ, u G13 88 %, u CZ 97 %. |
| Frekvence změn prostředí | **nahradit** | ≈188 datovaných změn / 32 měsíců, 57 mění sběr dat; GA4 99, GTM 31. Opravit datum Shopify: 26. 8. 2026 byl termín **migrace** order-status stránek, **ScriptTags končí 1. 3. 2027**. |
| „Slib: víme to do 24 hodin“ | **technicky korigovat** | GA4 má latenci 24–48 h a dosypává až 72 h **bez SLA**. Slib nad denními čísly GA4 nelze splnit – musí stát na tag monitoringu / sGTM logu / denním exportu objednávek, nebo znít „do 24 h od okamžiku, kdy jsou data k dispozici“. |
| „Denní reconciliace patří až do tieru 3“ | **přesunout částečně dolů** | Součtové srovnání objednávek a tržeb GA4 vs. administrace by zachytilo **4 z 5 nalezených CZ incidentů do 24 h** a jde bez BQ → patří do tieru 1. Diff po `transaction_id` (rozliší ztrátu od duplicity, EG1-006) zůstává v tieru 3. |

---

## 5. KRITIKA – shrnutí tří nezávislých kritik

Všechny tři končí verdiktem **„S VÝHRADOU“**. Shodují se na tom, že ceny 8 900 a 19 900 Kč obstojí,
tier 39 000 Kč v současném odvození ne, a že hlavní slabina není ve výši cen, ale v **datové hygieně
a v tom, co se z dat vyvozuje**.

### 5.1 Slabá tvrzení, která je nutné přepsat (nejzávažnější)

| # | Tvrzení | Co je špatně | Co s tím |
|---|---|---|---|
| K1 | „Medián 8–10 tis. potvrzují nezávisle tři regiony (CZ, SK, EU)“ | Tři regionální mediány **neměří totéž**. Z 30 CZ měsíčních řádků lidských služeb mají scope „správa měření“ **3 – a všechny jsou tentýž subjekt** (RobertNemec). Zbytek je PPC paušál, SEO, full-service a sGTM hosting. SK: z 14 měsíčních řádků je 12 PPC nebo sGTM. **Nezávislý je jen EU vzorek.** | Publikovat kurátorské číslo (7 525 Kč, n = 18 subjektů) a napsat, že jde o mediány cen typu „od“. Nepsat o shodě tří regionů. |
| K2 | „Cenová pásma se nemění – 2. kolo je potvrdilo“ | Stabilita není potvrzením, protože **současně se zmenšila jejich česká opora** (Softmedia vyvrácena, DA překlasifikováni, jejich pásma nepoužitelná). Pásma se nezměnila proto, že nikdy nestála na českých datech. | V `08` § 2.1 a § 5 explicitně: v ČR existuje **jediný veřejný měsíční cenový bod za práci na měření** (RobertNemec, tři hodnoty jednoho subjektu); pásma jsou odvozena z EU vzorku a z domácích PPC/mzdových kotev. Prodávat pásmo jako **rozhodnutí**, ne jako tržní nález. |
| K3 | „Tier 3 je podepřen dvěma nezávislými EU body (Amplio 45 000, Measurelab 43 500)“ | Measurelab £1 500 je **minimální odběr 10 kreditů**, přičemž zdroj sám říká, že 1 kredit = 1 hodina (£150/h), a řádek nese `requires_bq=optional`. Je to **hodinová proxy ×10 h** přebalená do tieru, navíc v britské cenové hladině. | Vyřadit z opory tieru 3 (ponechat jako doklad UK hodinové sazby). Napsat pravdivě: dva veřejné EU lidské BQ body jsou 45 000 a 11 250–30 000 Kč, rozptyl 4× → tier 3 nelze obhájit tržním srovnáním. |
| K4 | „Hodinová sazba × 10 h potvrzuje stejné pásmo jako veřejné ceny“ | Proxy si shodu **vyrábí sama**: konstanta 10 h mapuje jakoukoli sazbu 800–2 500 Kč přesně do cílového intervalu. Že měří sazby a ne retainery, ukazuje posun mezi koly: CZ medián hodinové proxy vzrostl z 11 500 na 18 500 Kč **jen tím, že přibyly další sazby**. Navíc dlouhodobá spolupráce se v ČR prodává **o 33 % levněji** (Ráš 2 400 → 1 600 Kč/h) → ×10 na hlavičkové sazbě retainer nadhodnocuje o třetinu. | Hodinové proxy vykazovat v **samostatné tabulce**, nikdy nesměšovat do tržního mediánu; při převodu použít dlouhodobou sazbu (−33 %). |
| K5 | „Tři nezávislé odvozovací cesty dávají stejný výsledek“ | Nákladová cesta počítá s **cizí tržní sazbou 1 800 Kč/h jako by to byl náklad**. Shoda s tržní cestou je tautologická; nezávislé jsou jen tržní a kotvová cesta. | Rozdělit na skutečnou nákladovou podlahu (interní hodina + nástroje 900 Kč) a cílovou marži; uvést hrubou marži každého tieru. |
| K6 | „Tier 8 900 leží pod nejlevnějším lidským balíčkem na trhu“ | **Faktická chyba** – pod ním leží nejméně 8 nezávislých subjektů (4 350–7 800 Kč). | Nahradit: 8 900 Kč je **nad** evropským dnem i nad nejnižším CZ retainerem s analytikou; rozdíl obhajuje obsah. |
| K7 | „Ani jeden tier není podle mezinárodního srovnání drahý (US zakázka 985 USD = 22 655 Kč)“ | Srovnává **federální zakázku Smithsonianu** s cenou pro český e-shop, nominálním kurzem, **bez korekce na cenovou hladinu**. Stejná vada u CH (CHF 180/h = 4 680 Kč/h), UK (£150/h) a DK. Rétorický, ne důkazní argument. | Vyřadit z `08` i z prodejních textů. Zahraniční body používat jen na strukturu nabídky, poměry uvnitř dodavatele a šíři pásma. |
| K8 | „Jeden týden bez alertu stojí víc než rok správy“ (`09` § 5) | **Aritmeticky nepravdivé** pro deklarovaný segment: rok tieru Správa = 238 800 Kč, týden spendu při 50–500 tis./měs = 11 500–115 000 Kč. Platilo by až od spendu ~2,2 mil. Kč/měs. Navíc zdrojové číslo (E7-105) je snippet z Yahoo nad README konkurenta a **nebylo přečteno u zdroje**. | Vypustit. Nahradit poměrem, který je pravdivý („správa = 4 % vašeho měsíčního rozpočtu do reklamy“) nebo doloženým případem EG8-049 (8 měsíců, ROAS 12× vs. 4×, rozpočet 12 → 24 tis. GBP). |
| K9 | „NEJSILNĚJŠÍ CZ KVANTIFIKACE: rozdíl 410 000 Kč“ | **Není to ztráta**, je to rozpor v reportingu jednoho účtu (nerozlišené B2B/B2C v dataLayeru). Stejně: 30 000 Kč je **typizovaný výrok** z marketingového blogu konkurenta; Alza 70/18 tis. je provize affiliate partnera u třetí strany, mimo předmět služby; Zboží.cz „několik tisíc“ je neplatný provoz. | **Po 2. kole stále neexistuje doložená česká case study s korunovou ztrátou z rozbitého měření.** V `06` § 2b přidat sloupec „co to doopravdy je“ a přeznačit všechny čtyři položky. |
| K10 | Práh 15 % pro reconciliaci (`09` § 5) | Převzatý z anglofonního fóra. Tři nezávislé CZ zdroje říkají, že **10–30 % je v ČR NORMA** → alert by pálil denně. Navíc je slíben segmentu, jehož tier reconciliaci vůbec neobsahuje. | Český práh: do 10 % ticho, 10–30 % sledujeme, nad 30 % voláme. A součtové srovnání přesunout do tieru 1. |
| K11 | „Konkurenční tlak na vstupní tier je ošetřen (SaaS 1 600–5 200 Kč)“ | Tři nové kotvy tlačí přímo a v `08` ani `09` se neobjevují: **RDY.cz 10 000 Kč/měs vč. nastavení měření konverzí**, **Starbomedia SK měsíční validace tržeb ZDARMA v PPC správě od 350 €**, **Signals Bar 2 500 Kč se sdělením o tichém rozbití**. | Doplnit do `08` § 2.3 a do `09` § 4 řádek „čím se lišíme od PPC balíčku za 10 000 Kč“. |
| K12 | „48 % webů má chybný Consent Mode“, „20–30 % rozpočtu zkresleno“, „42 % webů závažné problémy“, „MeasureMinds ušetřil 42 tis. GBP“ | Vše **sebereportovaná čísla z prodejních stránek konkurentů** nebo z Clutch recenze dodané dodavatelem; primární studie nedohledány. | Označit jako nepoužitelné pro externí komunikaci, dokud se nenajde primární zdroj. |
| K13 | „Kanál white-label agentury“ | Existuje **tvrdá protievidence**, která se v návrhu nikde neobjevuje: EG8-008/009 (nedá se prodat na retainer; Analytics Pros skončili prodejem reklamní agentuře) a **0 z 53 CZ poptávek** žádá monitoring. | Doplnit protievidenci explicitně a udělat z white-labelu **první** validační krok, ne třetí. Kritérium úspěchu = podepsaný pilot, ne „vzali bychom to“. |
| K14 | „Publikované tabulky jsou reprodukovatelné z datasetu“ | **Nejsou.** V `pricing-dataset.csv` (352 řádků) stále leží P2-003, P2-034/035/036, P4-009, P4-010, P4-031, P5-011…P5-017 a Softmedia/ObservePoint/Tagmate/Dataslayer. 85 řádků je v 37 skupinách duplicit. Amplio Maintained je v datasetu **dvakrát s jiným číslem** (17 500 i 23 750). `analyze-pricing.py` nefiltruje `period` (24 jednorázových a 3 roční řádky se počítají do lidské správy) ani `scope` (po přidání G09 má US lidská správa Q3 215 856 Kč a max 1 795 194 Kč). | Viz § 5.4. |

### 5.2 Dva nevyřešené rozpory uvnitř 2. kola

1. **Elevar Analyst Services.** `verify-us` a G08 hlásí `confirmed` s doslovným citátem z primárního ceníku
   (audiense.com, „Tier 1 Up to 3 analyst requests/month +$500/month“, „Tier 2 … +$1000/month“).
   G11 hlásí, že add-on **v aktuálním veřejném ceníku nedoložil** a doporučuje kotvu vyřadit.
   Kotva se přitom používá na třech místech (`08` § 2.2, § 2.3, `09` § 1) a v CSV existuje **trojmo**
   (P5-058, PV3-005, PV4-009/012). → **Rozhodnout jedním ověřením s URL, datem a doslovným citátem**
   (pravděpodobně platí verify-us/G08: četli primární ceník, G11 četl listing Shopify App Store);
   ostatní řádky označit `superseded`. Do rozhodnutí kotvu neuvádět jako nosnou.
2. **Metrics Watch: 29 USD (Capterra) vs. 79 USD (ceník dodavatele).** Nevyřešeno.

### 5.3 Co v důkazech chybí úplně (shoda všech tří kritik)

- **Jediná doložená česká case study „rozbité měření stálo X Kč“.** Označeno za nezaplněné v 1. i 2. kole.
- **Prvoruké české a slovenské výpovědi klientů**, ne odborníků a dodavatelů. Z 536 pain řádků je CZ+SK 139,
  ale prvorukých (fórum, marketplace, support) jen **42 = 7,8 % korpusu**. Celé SK doplnění (21 řádků) je
  z blogů a webů dodavatelů → **H2 není na SK doložena ani jednou výpovědí klienta**.
- **Realizované (nasmlouvané) ceny, ne ceníkové „od“.** Jediný nalezený realizovaný měsíční bod za správu
  měření je Reddit 400 USD za 5 h – a i ten je měnově sporný (kontext CAD).
- **Ekonomika dodávky na naší straně** (marže, utilizace, klientů na analytika, náklad na incident, **souběh
  incidentů při plošné změně**). V korpusu nula relevantních zmínek. Odhad 3–5 / 8–12 / 15–22 h nebyl nikdy
  ověřen proti reálné dodávce a G12 mu odporuje (2,5–7 h jen na řízení změn).
- **Ochota platit.** Van Westendorp neproběhl; celá cena je odvozena z nabídkové strany.
- **Korekce na cenovou hladinu (PPP)** u zahraničních bodů.
- **Právní a smluvní vrstva** – odpovědnost za škodu, SLA kredity, zpracovatelská smlouva k objednávkovým
  datům, vlastnictví přístupů. Nula zásahů v korpusu, přitom se prodává slib reakční doby.
- **Technická proveditelnost** denní reconciliace na Shoptetu / Upgates (API, oprávnění, limity) – nosný
  diferenciátor bez ověřené proveditelnosti; v celém korpusu ani slovo o Shoptet/Upgates/Sklik/Heureka API.
- **Velikost trhu** – kolik českých subjektů patří do každého tieru.
- **Analýza přežití.** Prázdná pozice nebyla otestována jako hřbitov, přestože v korpusu leží nejméně čtyři
  doklady zániku (Analytics Pros prodán reklamní agentuře; agentura na Redditu to zkusila a poptávka nebyla;
  Tagmate zmizel; Analytics Heroes a Data to Value mají mrtvé domény; Bidding Tools a Adexpres pohlceny).

### 5.4 Datová hygiena – co udělat PŘED jakýmkoli přepočtem

1. Spustit sloučení fragmentů (`merge.sh`) – 397 pricing / 588 evidence / 223 pain nových řádků.
2. Přidat do `pricing-dataset.csv` sloupec **`status`** (`active` / `superseded` / `refuted`) a označit:
   P2-003 (nahrazen PV1-001), P2-034/035/036 (Softmedia – refuted), P4-009 (argoberlin 404),
   P4-010 (nahrazen PV2-004), P4-031 (Fresh Egg neexistuje), P5-011…P5-017 (neověřená citace konkurenta),
   dále ObservePoint, Tagmate, Dataslayer, Elevar legacy sada.
3. Přidat sloupec **`scope_class`** (`measurement_only` / `bundled_ppc` / `infra_only` / `saas` /
   `salary_proxy` / `hourly_proxy`) a **všechny mediány počítat zvlášť pro `measurement_only`**.
   Bez toho jsou publikované mediány mediány české PPC správy a amerických federálních programů.
4. Deduplikovat 37 skupin (85 řádků), zejména Amplio Managed (P4-036 vs. P5-031), Elevar 11 500
   (P5-058, PV3-005, PV4-009/012), RobertNemec 18 500 (P2-002 vs. P2-004). Sjednotit Amplio Maintained
   na jednu hodnotu (dnes 17 500 i 23 750 za tentýž tier) a stanovit pravidlo pro rozpětí
   (vždy dolní hranice, střed do `scope_notes`).
5. Do `analyze-pricing.py` doplnit filtr `period in {mesic, month, měsíc}` a filtr `scope_class`.
6. Sjednotit `has_bq` v `02-pain.csv`, `04-pain.csv`, `05-pain.csv` a `06-pain.csv` (dnes ano/ne/volitelně/
   částečně/neuvedeno místo yes/no/optional/unknown) – jinak nelze přepočítat podíl výpovědí bez BQ.
7. Teprve pak přepsat `02-shrnuti-a-zavery.md` a `08-pricing-synteza.md`. **Do té doby v nich neuvádět
   žádný medián jako ověřený.**

---

## 6. NÁVRH TŘETÍHO KOLA

Seřazeno podle toho, jak moc by výsledek změnil doporučení. Sloupec „dopad“ je odhad, jak velká je šance,
že zjištění změní cenu, strukturu nabídky nebo rozhodnutí službu vůbec stavět.

### Priorita A – může otočit doporučení (dělat první)

| # | Co | Proč | Dopad | Náklad |
|---|---|---|---|---|
| A1 | **Datová hygiena a přepočet** (§ 5.4) | Publikované mediány dnes pocházejí z datasetu, o kterém víme, že je vadný. Bez toho je každé další číslo nedůvěryhodné. | **Vysoký** – změní publikovaná čísla, ne rozhodnutí | 2–3 h, žádný nový zdroj |
| A2 | **Test poptávky, ne rešerše**: 4 týdny, dvě landing stránky (přímý e-shop vs. white-label pro agentury), stejný rozpočet, měřit poptávky | Nejtvrdší protievidence kola (EG8-008/009) i **0 z 53 CZ poptávek** říkají, že poptávka po samostatné „správě měření“ nemusí existovat. Žádný veřejný zdroj na to neodpoví. | **Velmi vysoký** – může změnit produkt i kanál | 4 týdny, malý mediální rozpočet |
| A3 | **Ekonomika dodávky**: zpětně změřit hodiny na 3–5 vlastních zakázkách; model zátěže N klientů × pravděpodobnost incidentu × hodiny, včetně **plošného scénáře** (jedna změna Googlu = všichni klienti v jeden den) | Odhad 3–5 h pro tier 1 odporuje G12 (2,5–7 h jen na řízení změn). Když je odhad špatný, mění se **model**, ne cena. | **Velmi vysoký** | 1 den, vlastní data |
| A4 | **Validační rozhovory (5–8)** s Van Westendorpem na 8 900 / 19 900 / 39 000 **plus druhé rameno: hybridní model** (nižší paušál + platba za vyřešený incident, po vzoru DASE „platíte len za odvedenú prácu“) | Celá cena je odvozena z nabídkové strany. Nejvíc to bolí u skoku 8 900 → 19 900 (2,24× vs. tržních 1,6–1,8×) a u tieru 3 bez domácí kotvy. | **Velmi vysoký** | 2 týdny |
| A5 | **Ověřit proveditelnost denní reconciliace** na Shoptet addon API, Upgates API, Shopify Admin API (oprávnění k objednávkám, limity, podmínky partnerství, poplatky) | Nosný diferenciátor tieru 3 (a nově i tieru 1) **nemá ověřenou proveditelnost**; v celém korpusu o tom není ani slovo. Když to nejde, slib se musí přeformulovat před publikací ceníku. | **Vysoký** | 0,5 dne, veřejná dokumentace |

### Priorita B – zásadně zpevní cenu (nejlepší poměr přínos/náklad)

| # | Co | Proč | Dopad | Náklad |
|---|---|---|---|---|
| B1 | **Registr smluv (smlouvy.gov.cz), NEN, TenderArena, Věstník VZ, TED** – dotazy „webová analytika“, „Google Analytics“, „správa měření“, „Google Tag Manager“ | G09 udělal největší objev kola tím, že našel **americkou** databázi zakázek. Český ekvivalent je povinný ze zákona nad 50 tis. Kč **včetně plných textů** – jediná cesta ke **skutečně zaplacené** české ceně s popisem rozsahu. Dnes celé CZ pásmo stojí na jednom subjektu. | **Vysoký** – doplní chybějící typ důkazu (realizované ceny) | 1 den, API |
| B2 | **Mystery shopping u 6–10 subjektů „na dotaz“** (Optimics, Taste, Effectix, Digital Vision, MeasureDesign, Daata, Fordigy, DASE, Roivenue, Cross Masters, Dexfinity) s jednotným zadáním (e-shop 60 mil., Shoptet, GA4+GTM, bez BQ, chceme měsíční hlídání) | Horní polovina trhu je **neznámá** – veškerá data máme jen od těch, kdo ceníkují, tj. od malých a produktizovaných hráčů. Vzorek je systematicky vychýlený dolů a přitom se z něj odvozuje strop. **5 poptávek stačí na pásmo.** Zvlášť pro tier 3, který nemá domácí kotvu vůbec. | **Vysoký** | 1 den + čekání |
| B3 | **Ověřená hodinová dotace a reakční doba v paušálech konkurence** (DASE, Amplio, Manids, RobertNemec „Podpora GA“) | Dnes porovnáváme 19 900 Kč za 3 h + SLA 8 h s 17 500 Kč **za neznámý objem**. Rozestup tierů i argument „tier 2 je levnější než Elevar Tier 2“ jsou bez toho nepodložené. | Střední–vysoký | součást B2 |
| B4 | **Sousední CZ obory jako kotvy ochoty platit**: IT podpora na uživatele/zařízení, managed hosting (Wedos, Master Internet, Vshosting, Sentia), údržba webu / WordPress paušály, **účetní paušál** | G07 to udělal pro DACH (IT údržba 400–2 500 €/měs s reakcí 2/4/8 h; web údržba „mit garantierten Reaktionszeiten 200–300 €“) a byl to jeden z nejsilnějších argumentů pro cenění SLA. Pro ČR to nikdo neudělal. Účetnictví je navíc paušál, který klient už platí a umí porovnat. | **Vysoký** vzhledem k nákladu | 0,5 dne, 15–20 bodů |

### Priorita C – doplní důkazy, které chybí (nemění cenu, mění copy)

| # | Co | Proč | Dopad |
|---|---|---|---|
| C1 | **Facebookové skupiny CZ/SK a Google Help komunity zevnitř** (přihlášený účet) – Webová analytika CZ/SK, PPCkaři, E-commerce, Shoptet uživatelé | Jediný zbývající velký zdroj **syrových českých klientských hlasů**. Bez nich je H2 na domácím trhu doložena odborníky, ne klienty, a `time_to_notice` chybí. Alternativa bez loginu: **položit otázku napřímo** – zároveň validace i akvizice. | Střední (copy, ne cena) |
| C2 | **Vlastní data DataLayer.cz** – projít fakturaci a výkazy za 12–24 měsíců, dohledat 3–5 incidentů u vlastních klientů, dopočítat chybějící konverze a spend | Nejlevnější dostupný zdroj, **nikdy nepoužitý**. Chybějící česká korunová kvantifikace možná leží ve vlastních e-mailech. Dá zároveň vlastní medián doby do odhalení s doložitelnou metodikou. | **Vysoký** vzhledem k nákladu |
| C3 | **Prahy na reálných datech** – na 5–10 stávajících klientech spočítat 90denní historii denního rozdílu GA4 vs. administrace a nastavit prahy z rozdělení | Nabídka dnes slibuje alerting na třech různých prazích z různých zdrojů. Když práh pálí denně, klient odejde na alert fatigue, kterou pojmenovává i Signals Bar. Vedlejší produkt: **artefakt „Co hlídáme“ s čísly, který v ČR nikdo nemá.** | Střední–vysoký |
| C4 | **Právní a smluvní vrstva** – VOP a SLA 5–8 dodavatelů, kteří číslo mají (Google Cloud TSSG, GA360 SLA 5–25 % kreditů, GA4Dataform, ADS-Tracking, DASE, CZ hosting); rozhodovací praxe ÚOOÚ; vzory zpracovatelských smluv | Prodáváme slib reakční doby a argumentujeme promarněným spendem – tedy přesně tou škodou, na kterou se klient zeptá, kdo ji nese. Bez toho nelze slib publikovat. | Střední (blokuje publikaci) |
| C5 | **Analýza přežití** – Wayback pass na 20–30 CZ/EU subjektů zpět do 2019 (kdo měl produkt „správa měření“ s cenou a zrušil ho); Arctic Shift dotazy `cancelled our analytics retainer`, `stopped offering`; 2 respondenti rozhovorů, kteří externí správu **zrušili** | Prázdná pozice se musí otestovat jako hřbitov, ne jen jako příležitost. Pokud je hlavní důvod churnu „nic se neděje a hodnota není vidět“, mění to **produkt** (povinný měsíční artefakt, garance), ne cenu. | Střední–vysoký |
| C6 | **Vlastní artefakt** – jeden anonymizovaný vzorek: jednostránkový měsíční komentář se 3–4 čísly + jeden záznam nálezu ve formátu Trackingplanu (shrnutí → hypotéza příčiny → kroky → dopad na konverze) | G10 prošel 38 ukázek a nenašel **ani jeden** skutečný klientský report z éry GA4 ani ukázku denní reconciliace jako klientského výstupu. Bez artefaktu je „my to víme dřív“ tvrzení proti tvrzení. | Střední |

### Priorita D – doplní vzorek (nízká priorita)

| # | Co | Proč | Dopad |
|---|---|---|---|
| D1 | **Francie a Polsko** ve větším vzorku (`suivi et maintenance du tracking`, `abonament analityka`, Sortlist FR) | EU medián je jediná skutečně nezávislá část důkazu a stojí na malém nerovnoměrném vzorku (ES 2, CH 2, IT 2, DK 1, DE 2, NL 1, AT 1, PL 2); FR – druhý největší trh EU – nebyla pokryta v žádném kole. | Nízký–střední |
| D2 | **PPP korekce** – doplnit index cenové hladiny (Eurostat PLI služeb / OECD PPP) ke každé zemi a u zahraničních bodů uvádět nominál i po korekci | Bez toho vypadají české tiery opticky levné proti CH/UK/US/DK podlaze. Jedna tabulka, žádná nová rešerše. | Nízký–střední |
| D3 | **Longitudinální řez** – Wayback na 15–20 subjektů s ceníkem ve třech řezech (2022 / 2024 / 2026) | Všechna data jsou snímek k jednomu dni. AKA měří +6 % meziročně, AKA 2018→2026 u data analytika +38 % za 8 let – jinde nic. Podklad pro smluvní roční indexaci. | Nízký |
| D4 | **Znovu projet mezery uzavřené jako „nedostupné“** funkčními cestami, které jiní agenti našli: Reddit přes `arctic-shift.photon-reddit.com`, LinkedIn přes `cz.linkedin.com/posts` a `/pulse`, Fiverr přes `r.jina.ai`, Webtrh přes `/forum` a `/diskuse`, SK weby přes curl s `Accept-Language: sk,cs`, Stack Exchange API, Discourse `/t/<id>.json` | Kola trpěla **nesdílením metod**: G08 vyřešil Reddit a G04 LinkedIn, zatímco G11, G12 a G05 ve stejném kole hlásí obojí jako blokované a uzavírají mezery negativním zjištěním. Nejde o nedostupnost, ale o nepředání postupu. **Sepsat jeden metodický soubor.** | Nízký–střední, ale levné |
| D5 | Zbylé trvale blokované: Facebook skupiny, Upwork, G2/TrustRadius, Ecommerce Bridge (403), Meta Business Help (400), PrestaShop (403), Datacop, ObservePoint kalkulačka, těla vláken Google Help | Vyžadují přihlášený prohlížeč s JS. | Nízký |

---

## 7. Co si z 2. kola odnést v jedné větě

Ceny se nemění, ale **tři ze čtyř jejich odůvodnění ano**: násobek za BigQuery je 2×, ne 4×; nákladová cesta
je tržní cesta v přestrojení; a detekce, na které stála obhajoba vstupního tieru, je od roku 2026 v ČR
komodita za 667–2 500 Kč. Co zůstalo neotřesené a nově kvantifikované, je **pain** (medián 21 dní, ≈188 změn
prostředí za 32 měsíců, tag hlásí „Succeeded“ a neodešle nic) a **prázdná pozice** (0 CZ subjektů
s kontinuální správou měření jako produktem s cenou). Otevřenou otázkou, kterou žádné další kolo rešerše
nezodpoví, zůstává, jestli je ta pozice prázdná proto, že si jí nikdo nevšiml, nebo proto, že se neuživí –
a to je věc testu, ne dalšího vyhledávání.
