# Analýza klíčových slov – datalayer.cz (Google, Česko)

**Datum:** 8. 10. 2026 · **Zdroj objemů:** Ahrefs Keywords Explorer, databáze CZ (průměrná měsíční hledanost za 12 měsíců) · **SERP a otázky:** Google.cz (55 dotazů) + Ahrefs SERP overview (54 dotazů)

**Datové soubory (`data/`):**
| Soubor | Obsah |
|---|---|
| `../data/ahrefs/ahrefs_kw_ideas_cz_merged.tsv` | všech 35 233 nápadů z Ahrefs (153 seed slov × matching terms + otázky) |
| `data/kw_relevantni.tsv` | 20 249 relevantních slov po odfiltrování šumu, s clusterem, záměrem, skóre |
| `data/kw_clustery_souhrn.tsv` | souhrn 14 clusterů |
| `data/kw_mapovani_na_stranky.tsv` | každé relevantní slovo přiřazené ke stránce (LP / homepage / článek) |
| `data/kw_mapovani_souhrn.tsv` | souhrn hledanosti podle cílové stránky |
| `data/lp_keyword_inputs.json` | vstupy pro zadání LP (klíčová slova, otázky do FAQ) |
| `data/otazky_paa_vse.tsv` | 200 otázek „Lidé se také ptají“ (Google + Ahrefs) |
| `data/kw_top_per_cluster.md` | top 60 slov každého clusteru (pro rychlou kontrolu) |

---

## 1. Hlavní zjištění

1. **Český trh je malý, ale „levný“.** Relevantní slova s hledaností ≥ 10 měsíčně: **1 140** (celkem ~76 000 hledání/měsíc, z toho ~22 000 jsou názvy nástrojů typu *power bi*, *search console*). Konkrétní služby se hledají v řádu desítek až stovek: *cookie lišta* 200, *měření konverzí* 150, *audit webové analytiky* 70, *consent mode v2* 80, *server side tracking* 50, *datalayer* 30. Obtížnost je téměř nulová (medián KD 0).
2. **Komerční poptávka je fragmentovaná do long-tailu.** Lidé nehledají „agentura na GA4“, ale symptom nebo úkol: *nastavení ga4*, *ga4 shoptet*, *shopify gtm*, *meta pixel helper*, *heureka ověřeno zákazníky*, *ga4 nesedí tržby*. → LP musí pokrýt desítky variant a navazovat na řešení konkrétních platforem (Shoptet, Shopify, WooCommerce, Upgates).
3. **Největší objem mají informační/nástrojová témata**, kde datalayer.cz může budovat autoritu: *google tag manager* (2 400), *looker studio* (1 400) + *looker studio vs data studio* (2 100), *google analytics* (3 700), *ga4* (700), *utm builder* (1 100), *cookiebot* (450), *facebook/meta pixel* (350), *microsoft clarity* / *hotjar* (600 / 600), *bigquery* (150), *datový sklad* (150).
4. **Česká specifika jsou příležitost**: *heureka ověřeno zákazníky* (90), *seznam event measurement*, *sklik konverze*, *shoptet google analytics* (150), *shoptet cookie lišta* (40), *shoptet consent mode v2* (20) – mezinárodní obsah je nepokrývá.
5. **Nové pojmy roku 2025/2026**: *google tag gateway* (80), *first party mode*, *seznam event measurement*, *consent mode v2* – témata, kde se ještě nevytvořila autorita. Kdo napíše první kvalitní český obsah, vyhraje na roky.
6. **AI přehled v Google** se zobrazil na 40 ze 43 testovaných dotazů. Obsah musí mít jasné definice, „rychlé odpovědi“ a strukturovaná data – a kvůli nižšímu CTR je potřeba cílit i na *long-tail problémové dotazy*, kde AI odpověď nestačí (konkrétní implementace, ceny, rozhodování).
7. **Hlasová/otázková hledání** („co je google tag manager“ 150, „co je konverze“ 200, „dashboard co to je“ 200, „jak používat google analytics“ 200) → doporučuji **slovník pojmů** (konkurence: anycoders 209 hesel, pavelszabo 270 hesel, neogy 52) jako levný zdroj návštěvnosti a interních odkazů na LP.
8. **Seznam.cz**: Ahrefs měří jen Google. Seznam má v ČR podle odhadů jednotky až nízké desítky procent podílu hledání; obsahové doporučení platí stejně (Seznam preferuje kvalitní české texty). Doporučuji ověřit pozice i v Seznamu (Collabim/Marketing Miner).

> **Poznámka k datům:** Ahrefs u velmi úzkých českých dotazů často uvádí 0–10 hledání i tam, kde reálně poptávka je (např. *implementace ga4* má v SERP 3–4 inzerenty → hodnota je zjevně nenulová). Objemy používejte pro **relativní prioritizaci**, ne jako absolutní predikci návštěvnosti.

---

## 2. Tematické clustery

| Cluster | Relevantních slov | Hledanost / měsíc | Slov s objemem ≥ 10 | Otázek | Medián CPC (USD*) | Typická slova |
|---|---|---|---|---|---|---|
| Dashboardy & reporting | 2 955 | 22 050 | 297 | 133 | 0,70 | power bi (8 900), looker studio vs data studio (2 100), looker studio (1 400), dashboard co to je (200) |
| Analytika obecně | 2 304 | 21 690 | 159 | 156 | 0,80 | google search console (9 200), microsoft clarity (600), hotjar (600), datový analytik (300), analýza návštěvnosti (150) |
| GA4 | 2 879 | 10 510 | 196 | 237 | 0,70 | google analytics (3 700), ga4 (700), ga4 shopify (350), jak používat google analytics (200), shoptet google analytics (150) |
| Google Tag Manager | 2 201 | 6 790 | 122 | 121 | 0,50 | google tag manager (2 400), gtm (900), shopify gtm (350), návrh google tag manager (250), google tag gateway (80) |
| Audit webu | 937 | 3 790 | 96 | 54 | 0,85 | analýza webu (500), seo audit (500), analýza webu zdarma (350), audit webové analytiky (70) |
| Atribuce & UTM | 1 098 | 2 890 | 50 | 66 | 0,30 | utm builder (1 100), utm (600), atribuce (150), utm parametry (150), marketing mix modeling (50) |
| Konverze (Ads, Meta, Sklik, Heureka) | 1 412 | 2 480 | 60 | 233 | 0,50 | facebook pixel (250), měření konverzí (150), meta pixel (100), heureka ověřeno zákazníky (90) |
| Consent & cookies | 1 278 | 2 230 | 53 | 47 | 0,50 | cookiebot (450), cookie lišta (200), google analytics gdpr (100), consent mode v2 (80), zákon o cookies (60) |
| BigQuery & data | 2 731 | 1 890 | 44 | 91 | 0,80 | data warehouse (200), bigquery (150), datový sklad (150), big query (70) |
| Správa webu | 44 | 940 | 17 | 1 | 1,40 | správa webu (200), správa webových stránek (100), správa webu ceník (90) |
| Server-side | 887 | 390 | 21 | 45 | – | stape (80), google tag gateway (80, v GTM), server side tracking (50), server side gtm (30), first party data (20) |
| Tracking obecně | 835 | 200 | 15 | 116 | – | cross-domain tracking, user id, ecommerce tracking (většinou EN, 0–20) |
| Datová vrstva | 439 | 90 | 6 | 19 | 0,60 | datalayer (30), data layer (20), datalayer push (10) |
| CRM & leady | 249 | 80 | 4 | 11 | – | crm integrace (50), offline konverze, enhanced conversions for leads (0–10) |

\* Ahrefs uvádí CPC v USD (data v souboru jsou v centech, např. 70 = 0,70 USD).

**Interpretace:** objemově „velké“ clustery (dashboardy, analytika obecně, GA4, GTM) jsou z velké části **navigační/nástrojové** (lidé hledají přihlášení nebo stažení nástroje). Komerčně nejcennější clustery (server-side, datová vrstva, CRM, consent, konverze) mají malý objem, ale téměř nulovou konkurenci a vysokou hodnotu zakázky.

---

## 3. Záměr hledání (intent)

| Záměr | Podíl hledanosti | Co s tím |
|---|---|---|
| Informační („co je“, „jak“, „návod“, „vs“) | velký | Blog, pilířové průvodce, slovník, nástroje zdarma |
| Komerční („nastavení“, „implementace“, „audit“, „cena“, „agentura“, „školení“) | menší, ale nejhodnotnější | Landing pages služeb a řešení |
| Navigační / nástrojové („looker studio“, „power bi“, „cookiebot“) | největší objem | Jen tam, kde lze nabídnout hodnotu (srovnání, šablony, „kdy dává smysl“) |
| Lokální („správa webu brno“, „analýza webu brno“) | malý | Neřešit LP, maximálně zmínka „pracujeme po celé ČR / online“ |

**Školení a kurzy** (*školení google analytics* 200, *google analytics školení* 150, *power bi kurz* 200, *kurz google analytics* 60, *školení google tag manager* 20) mají jasný komerční záměr – klient školení v zadání nemá; doporučuji zvážit **firemní workshop „GA4 / GTM pro marketingový tým“** jako vedlejší službu (nízké náklady, vysoký lead potenciál). Zatím zahrnuto jako sekce na LP GA4 a GTM.

---

## 4. Mapování klíčových slov na stránky

Kompletní mapování: `data/kw_mapovani_na_stranky.tsv`. Souhrn (hledanost = součet průměrných měsíčních objemů slov přiřazených k dané stránce):

| Stránka | URL (návrh) | Hledanost LP / měs. | Hlavní klíčová slova (objem) |
|---|---|---|---|
| Homepage | `/` | 670 | webová analytika (90), analytika webu (70), webová analytika agentura, datová analytika, webový/datový analytik |
| Implementace GA4 | `/sluzby/implementace-ga4` | 860 | nastavení ga4 (50), nastavení google analytics (100), google analytics nastavení (50), ga4 shopify (350), google analytics e-shop (70), implementace ga4 |
| Google Tag Manager | `/sluzby/google-tag-manager` | 4 170* | google tag manager (2 400), gtm (900), návrh google tag manager (250), nastavení gtm (60) |
| Datová vrstva | `/sluzby/datova-vrstva` | 90 | datalayer (30), data layer (20), datalayer push (10), datalayer ga4 ecommerce |
| Server-side tracking | `/sluzby/server-side-tracking` | 450 | google tag gateway (80), stape (80), server side tracking (50), server side gtm (30), first party data (20), server side měření (20) |
| Cookie lišta & Consent Mode | `/sluzby/cookie-lista-consent-mode` | 1 380 | cookiebot (450), cookie lišta (200), cookies lišta (150), consent mode v2 (80), google consent mode v2 (80), shoptet cookie lišta (40) |
| Měření konverzí | `/sluzby/mereni-konverzi` | 1 260 | facebook pixel (250), měření konverzí (150), meta pixel (100), heureka ověřeno zákazníky (90), facebook pixel e-shop (60), conversions api, enhanced conversions |
| BigQuery | `/sluzby/bigquery` | 1 580* | bigquery (150), datový sklad (150), big query (70), ga4 bigquery, bigquery export |
| Dashboardy & reporting | `/sluzby/dashboardy-a-reporting` | 16 680* | looker studio (1 400), google looker studio (500), power bi (8 900)*, marketingový dashboard, looker studio dashboard na míru |
| Audit měření | `/sluzby/audit-mereni` | 90 | audit webové analytiky (70), audit google analytics, ga4 audit, gtm audit, kontrola měření |
| Technický audit webu | `/sluzby/technicky-audit-webu` | 2 940 | analýza webu (500), seo audit (500), technický audit webu (20), audit webu (90), audit rychlosti webu (30) |
| Správa webu a měření | `/sluzby/sprava-webu-a-mereni` | 920 | správa webu (200), správa webových stránek (100), správa webu cena/ceník (90/70) |
| Řešení: e-shopy | `/reseni/e-shopy` | 630 | shoptet google analytics (150), shopify gtm (350), shoptet ga4, woocommerce ga4, ecommerce analytics |
| Řešení: B2B a lead-gen | `/reseni/b2b-a-lead-generation` | 100 | crm integrace (50), offline konverze, měření formulářů, enhanced conversions for leads, call tracking |
| Řešení: velké firmy | `/reseni/velke-firmy` | <50 | (nízká hledanost – stránka pro obchod, LinkedIn a PPC; KW: enterprise analytika, GA4 360, governance měření) |

\* Objem je nafouknutý navigačními dotazy (lidé hledají nástroj). Reálně dosažitelná komerční návštěvnost je řádově nižší; tyto LP mají cílit na kombinace „nástroj + služba/řešení“ a na informační varianty pokrýt články.

> Úprava po zpracování zadání LP: *ga4 shopify* (350) a *shopify gtm* (350) cílí **LP Řešení pro e-shopy** (záložka Shopify), ne LP Implementace GA4.

**Nepřiřazené informační dotazy** (8 800 slov) → blog, slovník a nástroje. Největší: *google analytics* (3 700), *utm builder* (1 100), *ga4* (700), *microsoft clarity* (600), *hotjar* (600), *optimalizace míry konverze* (300), *google analytics 4* (300), *jak používat google analytics* (200), *školení google analytics* (200), *co je konverze* (200), *co je google tag manager* (150), *utm parametry* (150), *atribuce* (150), *cookies google analytics* (150), *google analytics gdpr* (100). Plán článků: `../06_clanky/`.

---

## 5. Otázky uživatelů (pro FAQ a články)

Nejčastější typy otázek z „Lidé se také ptají“ a z Ahrefs (`data/otazky_paa_vse.tsv`):

| Téma | Příklady otázek | Kam |
|---|---|---|
| Definice | Co je GA4? Co je GTM? Co je Google Tag Gateway? Co je looker studio? Co je atribuce? Co je UTM? Co je cookie lišta? | slovník + úvod článků |
| Consent a právo | Je Google consent mode v2 povinný? Co se stane, když odmítnu cookies? Jsou cookies osobní údaje? Musím informovat o cookies? Co musí obsahovat cookies? Je server-side tracking legální? Is pixel tracking illegal? | LP Consent, články o legislativě |
| Implementace | Jak nastavit Google Tag Manager? Jak propojit e-shop s GTM? How to setup server-side GTM? How to set conversion API on Facebook? Jak nastavit formulář jako cíl v GA4? | LP + návody |
| Rozdíly v datech | Proč vám nesedí data v Google Analytics? Proč se liší data v GA4 a Google Ads? Kde najdu konverzní poměr v GA4? | článek „Proč nesedí čísla“ + LP Audit |
| Náklady | Can I use BigQuery for free? How much does Looker Studio cost? Is Meta conversion API free? Kolik stojí Power BI? Is Cookiebot worth it? | FAQ LP BigQuery, Dashboardy, Konverze, Consent |
| Nástroje | Is Looker Studio the same as Data Studio? Is Google Looker similar to Tableau? Is BigQuery SQL? | články srovnání |

---

## 6. Prioritizace (co dělat nejdřív)

**Priorita A – landing pages s komerčním záměrem a nulovou konkurencí kvality** (spustit s novým webem):
1. Server-side tracking · 2. Cookie lišta & Consent Mode v2 · 3. Měření konverzí (vč. Meta CAPI, Sklik, Heureka) · 4. Implementace GA4 · 5. Audit měření · 6. Řešení pro e-shopy · 7. Řešení B2B a lead-gen · 8. Datová vrstva.

**Priorita B – autoritativní obsah s objemem** (první 3 měsíce):
- Pilíře: GTM průvodce, GA4 průvodce, Consent Mode v2 + legislativa, Server-side tracking průvodce, GA4 → BigQuery, Looker Studio pro marketing.
- Problémové články: „Proč nesedí čísla v GA4, Ads a e-shopu“, „Jak měřit formuláře a leady až do CRM“, „Meta CAPI a deduplikace“.

**Priorita C – nástroje a slovník** (průběžně):
- UTM builder (utm builder 1 100 + utm generator 100) – konkurence: marketingppc, DA.
- Kontrola consent mode (co posílá web před souhlasem), dataLayer validátor, kalkulačka ztráty konverzí.
- Slovník 60–100 hesel (GA4, GTM, dataLayer, sGTM, CAPI, consent mode, first-party cookie, ITP, UTM, atribuce, BigQuery, Looker Studio…).

**Priorita D – navigační objemy** (power bi, search console, hotjar, clarity): jen srovnávací/rozhodovací články, ne LP.
