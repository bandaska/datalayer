# Analýza konkurence – datalayer.cz (trh ČR)

**Datum:** 8. 10. 2026 · **Rozsah:** 43 komerčních dotazů v Google.cz (top 10 + reklamy + „Lidé se také ptají“), 54 SERP z Ahrefs, Ahrefs metriky 40 domén, **30 kvalitativních profilů** konkurentů (`profily/*.md`), stažené weby konkurence (`../data/raw/konkurence*`).
**Cílové segmenty klienta:** e-shopy · B2B / lead-gen · velké firmy. **Ceny na webu:** klient nechce uvádět.

---

## 1. Shrnutí v 10 bodech

1. **Trh je malý a nekonsolidovaný.** Relevantní organická návštěvnost celé konkurence je v řádu stovek návštěv měsíčně na doménu (lídr marketingppc.cz ~620/měs., digitalniarchitekti.cz ~480/měs. z relevantních slov). Kvalitním obsahem se dá do 6–12 měsíců dostat do top 3 na většinu komerčních dotazů – obtížnost (Ahrefs KD) má u českých dotazů s objemem ≥ 20 medián 0 (průměr 4; KD uvádí Ahrefs jen u 37 z nich).
2. **Jediný plnohodnotný specializovaný konkurent je Digitální architekti** (digitalniarchitekti.cz) – stejné služby, stejné segmenty, 212 článků, ~60 produktových stránek, objevuje se v 15 ze 43 testovaných SERP. Slabiny: neuvádí ceny, část obsahu zastaralá, duplicitní HTML (desktop/mobil), nefunkční lead magnety, málo čísel v případovkách.
3. **Velké agentury mají analytiku jen jako „přílepek“** (Visibility, Taste, SEO Consult, Advisio, Anycoders, Gameplan): šablonovité LP o 200–500 slovech, často zastaralé (UA, „konec cookies 2024“), bez technické hloubky. SEO Consult dokonce inzeruje na „implementace GA4“ a vede na článek z roku 2022.
4. **Freelanceři a malí specialisté vyhrávají transparentností a hloubkou jedné LP**: khoder.cz (4 300 slov, mockupy, diagram toku dat, 13 FAQ, kalkulačka), homoladigital.cz (pevné ceny, checklist „měření funguje“, kvíz), rajtmajer.cz + blog nazakladedat.cz (112 návodů se screenshoty).
5. **Server-side tracking je produktizovaný** (DataPlus od Advisia, NextAnalytica, DataNostro, Datimo, Gameplan OneTag) – soutěží cenou za měsíc a „rychlostí nasazení“. Nikdo neprodává **server-side na infrastruktuře klienta s plným vlastnictvím dat a auditovatelností** – to je mezera pro velké firmy.
6. **Consent je nejsilnější obchodní téma posledních let**: marketingppc.cz má nejlépe konvertující stránku (strašák „Google to ví“ + data z 250+ auditů). Současně je kolem consentu **nejvíc chyb a mýtů** (Consentio „až 70 % dat“, SEO Consult chybně popisuje advanced mód, DataPlus FAQ zmiňuje identifikaci bez souhlasu podle parametrů zařízení, OneTag „cookies ho nezastaví“). Ověřený, právně opatrný obsah je příležitost i diferenciace.
7. **Nikdo nepokrývá B2B / lead-gen měření** (CRM, offline konverze, enhanced conversions for leads, call tracking, pipeline reporting) jako samostatnou službu – s výjimkou reportingu NextAnalytica.
8. **BigQuery a dashboardy**: BI agentury (Revolt, Data Mind) dělají enterprise BI, ale ne sběr dat z webu; analytické agentury dělají sběr, ale BigQuery jen zmiňují. **Kombinace „sběr → BigQuery → dashboard“ end-to-end** nemá vlastní LP nikdo.
9. **Důvěryhodnost se v tomto oboru staví na důkazech kvality dat**: mockupy rozhraní (Tag Assistant, Events Manager s Event Match Quality), čísla „před/po“ (Potten & Pannen 30 % → 99 % zachycených konverzí), recenze Google s jménem a firmou. Loga klientů bez vazby na měření (Visibility) nefungují.
10. **AI odpovědi**: Google zobrazil *Přehled od AI* na **40 ze 43** testovaných dotazů – včetně komerčních („implementace ga4“, „webová analytika agentura“). Obsah musí mít „rychlou odpověď“ nahoře (khoder.cz to dělá), strukturovaná data a jasné definice – jinak klikání ještě klesne.

---

## 2. Metodika a zdroje dat

| Zdroj | Co obsahuje | Soubor |
|---|---|---|
| Google.cz (Chrome, `hl=cs&gl=cz&pws=0`), 8. 10. 2026 | 43 dotazů: organické top 10, reklamy, PAA, související hledání, přítomnost AI přehledu | `../data/serp/google_serp_cz_2026-10-08.json`, `google_serp_organic.tsv`, `google_serp_ads.tsv`, `google_paa.tsv`, `google_serp_domain_frequency.tsv` |
| Ahrefs Keywords Explorer – SERP overview (CZ) | 54 dotazů se SERP daty (98 dotazů Ahrefs bez SERP – nízký objem) | `../data/serp/ahrefs_serp_top10_cz_batch1.tsv`, `ahrefs_paa_cz_batch1.tsv` |
| Ahrefs Site Explorer (CZ) | DR, organická návštěvnost CZ, top 300 klíčových slov, top 100 stránek pro 40 domén | `../data/ahrefs/ahrefs_konkurence_*.tsv`, `data_konkurence_metriky.tsv` |
| Kvalitativní audit webů | 30 profilů: služby, anatomie LP, důvěryhodnost, ceny, konverze, obsah, technické SEO, mezery | `profily/*.md` |
| Crawl webů konkurence | sitemapy, HTML, texty | `../data/raw/konkurence/`, `../data/raw/konkurence_archiv/*.zip` |

> **Pozor na data Ahrefs pro malé české weby:** Ahrefs u nich výrazně podhodnocuje návštěvnost i počet klíčových slov (např. khoder.cz, rajtmajer.cz, nextanalytica.cz mají v Ahrefs téměř nulu, přestože v Google SERP reálně rankují). Proto je hlavním zdrojem viditelnosti **vlastní sběr SERP z Google.cz** a Ahrefs slouží pro relativní srovnání a pro větší weby.

---

## 3. Mapa konkurence

### 3.1 Segmenty konkurentů

| Skupina | Kdo | Jak soutěží | Hrozba pro datalayer.cz |
|---|---|---|---|
| **A. Specializovaní implementátoři měření** | digitalniarchitekti.cz, khoder.cz, homoladigital.cz, rajtmajer.cz, stepaneklukas.cz, marketingppc.cz (IT/analytické oddělení) | hloubka obsahu, ceny „od“, rychlé dodání, osoba specialisty | 🔴 vysoká (stejné služby) |
| **B. Produktizovaný server-side / data SaaS** | DataPlus (advisio.cz), nextanalytica.cz, datanostro.com, datimo.ai, gameplan.cz (OneTag) | měsíční předplatné 349–4 990 Kč, „spuštění do 24 h / 5 dní“, kalkulačky ztráty dat | 🟠 střední u e-shopů; nízká u velkých firem (vlastnictví dat) |
| **C. Full-service / mediální agentury s analytikou** | visibility.cz, taste.cz, trkkn.cz (Omnicom), seoconsult.cz, anycoders.cz, datanimals.com, impnet.cz, neogy.cz, magnas.cz, sovanet.cz | značka, certifikace (Google Premier Partner, GMP), velcí klienti | 🟠 u velkých firem (taste, trkkn); jinak slabé LP |
| **D. BI / datové firmy** | revolt.bi, datamind.cz | enterprise BI, datové sklady, Power BI/Tableau | 🟡 spíše **partneři** (nedělají sběr dat z webu) |
| **E. CMP (cookie lišty)** | cookies-spravne.cz, consentio.cz | levný SaaS + implementace za 3 000 Kč | 🟡 konkurence v obsahu o consentu; možní partneři |
| **F. Obsahoví konkurenti (SERP)** | nazakladedat.cz, janpospisil.cz, mariemullerova.cz, webglobe.cz, strafelda.cz, pavelszabo.cz, foxy.cz, navolnenoze.cz (katalog freelancerů) | návody, slovníky, definice | 🟠 berou informační dotazy a AI citace |

### 3.2 Klíčové metriky (výběr)

| Doména | Typ | DR | Org. návštěvnost CZ (Ahrefs) | Relevantní návštěvnost* | Výskyt v 43 SERP Google | Ø pozice | Reklama |
|---|---|---|---|---|---|---|---|
| digitalniarchitekti.cz | agentura – přímý | 33 | 761 | 476 | **15** | 4,5 | – |
| marketingppc.cz | PPC agentura s analytikou | 35 | 3 252 | **622** | 7 | 3,7 | ano |
| khoder.cz | freelancer | 19 | (podhodnoceno) | – | 7 | 5,3 | – |
| janpospisil.cz | freelancer (SEO) | 34 | 1 535 | 2 | 5 | 3,8 | – |
| anycoders.cz | agentura | 53 | 424 | 2 | 4 | 5,8 | – |
| advisio.cz (+ DataPlus) | e-commerce agentura | 47 | 869 | 21 | 4 | 6,3 | – |
| visibility.cz | full-service agentura | 34 | 249 | 20 | 3 | 2,0 | – |
| rajtmajer.cz / nazakladedat.cz | freelancer + blog | 10 / 11 | (podhodnoceno) | 17 | 3 / 1 | 4,7 | – |
| datanostro.com | SaaS sGTM | 0 | (nový) | – | 3 | 5,3 | – |
| taste.cz | enterprise agentura | 53 | 358 | 11 | 1 (+ academy) | 3,0 | – |
| seoconsult.cz | full-service agentura | 71 | 1 461 | 8 | 0 | – | **ano (3×)** |
| homoladigital.cz | freelancer | 31 | (nový web) | – | 0 | – | **ano (2×)** |
| trkkn.cz | enterprise (Omnicom) | 1 | 0 (noindex) | – | 0 | – | **ano (2×)** |
| nextanalytica.cz | SST/BI produkty | 17 | (podhodnoceno) | – | 1 | 4,0 | – |
| revolt.bi | BI agentura | 39 | 137 | 6 | 1 | 7,0 | – |

\* Organická návštěvnost z klíčových slov, která spadají do tematických clusterů datalayer.cz (viz `02_klicova-slova/`). Kompletní tabulka: `data_konkurence_metriky.tsv`.

**Kdo platí za reklamu** (Google Ads na 43 dotazech): seoconsult.cz (3×), homoladigital.cz („Nastavím GA4 bez chyb“, „GA4 a GTM od 6 000 Kč“, „Hotovo do 5 pracovních dnů“), trkkn.cz, marketingppc.cz, boppc.cz, webfusion.cz. Reklama se objevuje jen na nejkomerčnějších dotazech („implementace ga4“, „nastavení ga4“, „webová analytika agentura“) – PPC je pro datalayer.cz levná doplňková cesta.

### 3.3 Kdo vyhrává v SERP podle témat (Google.cz, 8. 10. 2026)

| Téma / dotaz | Top výsledky (pořadí) | Postřeh |
|---|---|---|
| implementace ga4 / nastavení ga4 | digitalniarchitekti, janpospisil, analytics-academy, marketingppc, anycoders | AI přehled + 3–4 reklamy; žádná LP s jasným postupem a výstupy na 1. místě |
| ga4 audit / audit google analytics | **visibility.cz #1**, rajtmajer, ga4auditor.com, vidi-corp | mezinárodní nástroje → prostor pro českou LP „audit měření“ |
| webová analytika agentura | antee, visibility, neogy, navolnenoze, datamind, digitalniarchitekti | žádný specialista na 1. místě |
| server side tracking / server-side měření | webglobe (blog), digitalniarchitekti, datamind, stape.io, roistory | slabá konkurence, většinou blogové články |
| implementace server side tracking cena | datimo, datanostro, ads-agency, nextanalytica, khoder | hledá se cena → produktizovaní hráči |
| consent mode v2 / nastavení | developers.google, digitalniarchitekti, impnet, khoder, consentio, cookies-spravne | návody od CMP a agentur, často chybné |
| cookie lišta / zákon | cookieslista.cz, cookie-lista.cz, **uoou.gov.cz**, cookies-spravne | úřední zdroj + CMP – služba „audit lišty + consent mode“ chybí |
| měření konverzí | heureka, sklik nápověda, foxy, vceliste | prostor pro průvodce „měření konverzí napříč Ads/Meta/Sklik/Heureka“ |
| rozšířené konverze google ads | support.google, shoptet, marketingppc | žádná česká služba |
| meta conversions api nastavení | facebook, cernovsky, eshop-rychle, prevedshop | žádná specializovaná LP |
| ga4 bigquery / bigquery export | Google dokumentace, ga4bigquery.com, digitalniarchitekti | **téměř bez české konkurence** |
| looker studio dashboard na míru | grou, digikurz, mariemullerova, pavelszabo, wemarket | freelanceři, žádná datová agentura |
| datová vrstva datalayer | nezzazvoni, opinest, nazakladedat, zatkovic, marketingppc | slabé, krátké články |
| ga4 nesedí tržby e-shop | lamapixel, ludekskop, gameplan, webglobe, khoder | výborný „problem-aware“ dotaz pro obsah |
| offline konverze google ads crm | support.google, tmrw.marketing, reklamix.sk | **B2B mezera** |
| first party data měření | leadhub, unikum, forum-media, o-seznam | |
| správa webu | lokální webová studia | jiný typ poptávky – viz doporučení k LP |

---

## 4. Nabídka služeb – kdo co pokrývá

Legenda: ●● samostatná propracovaná LP · ● LP/sekce existuje · ○ jen zmínka/článek · – nenabízí

| Konkurent | GA4 | GTM | Datová vrstva | Server-side | Consent / lišta | Konverze Ads/Meta/Sklik | B2B/CRM/offline | BigQuery | Dashboardy | Audit měření | Tech. audit webu | Školení |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| digitalniarchitekti.cz | ●● | ●● | ● | ● | ● | ● | ○ | ○ | ● | ● | ● | ●● |
| khoder.cz | ●● | ●● | ○ | ● | ●● | ● | ○ | – | ● | ● | – | ○ |
| marketingppc.cz | ● | ● | ○ | – | ●● | ● | – | ○ | ○ | ● | ● | ● |
| homoladigital.cz | ● | ● | ○ | ○ | ○ | ○ | – | – | ○ | ● | ● | ○ |
| rajtmajer.cz | ● | ● | ○ | – | ○ | ● | – | – | ● | ● | – | ● |
| advisio.cz (DataPlus) | ○ | ○ | – | ●● (SaaS) | ○ | ○ | – | ○ | ○ | – | – | ○ |
| nextanalytica.cz | – | – | – | ●● (SaaS) | – | ● (CAPI) | ● (lead-gen reporting) | ○ | ●● | ○ | – | – |
| datanostro.com | – | – | – | ●● (SaaS + Care) | ○ | ●● (Sklik S2S, Heureka) | – | – | – | ○ (nástroj) | – | ○ |
| visibility.cz | ● | ● | – | ○ | – | ● | – | – | ○ | ● | – | – |
| taste.cz | ○ (zastaralé) | – | – | – | – | – | – | ○ | ○ | ○ | – | ●● |
| anycoders.cz | ● | ● | – | – | ● | – | – | ○ (ETL) | ○ | – | ● | – |
| revolt.bi | – | – | – | – | – | – | – | ● | ●● | – | – | – |
| datamind.cz | ○ | ○ | – | ○ | – | – | – | ● | ●● | – | – | – |
| cookies-spravne.cz | – | – | – | – | ●● (CMP) | – | – | – | – | – | – | – |
| **datalayer.cz – cíl** | ●● | ●● | ●● | ●● | ●● | ●● | ●● | ●● | ●● | ●● | ● | ○ |

---

## 5. Cenové hladiny na trhu (pro orientaci – datalayer.cz ceny uvádět nebude)

| Služba | Nízký segment (freelanceři, SaaS) | Střední (agentury) | Poznámka |
|---|---|---|---|
| Nastavení GA4 + GTM | 3 200–8 400 Kč (rajtmajer), od 6 000 Kč (homola), 8 000–18 000 Kč (khoder) | 3 900 / 7 800 / 19 000 Kč (marketingppc); pásma 5–41 tis. Kč (DA) | e-shop s e-commerce měřením typicky 8–20 tis. Kč |
| Audit měření | 4 500 Kč (khoder), 4 800 / 12 000 Kč (rajtmajer) | 14 900 Kč (gameplan – součást auditu) | |
| Cookie lišta + Consent Mode v2 | 3 000 Kč (cookies-spravne), 6 500 Kč (khoder), od 3 990 Kč (marketingppc) | pásma do 5 / 5–20 / 20+ tis. Kč (DA) | |
| Server-side tracking | 349–4 490 Kč/měs. (SaaS) + Care 19 900 / 39 900 Kč (datanostro), 15 000 Kč (khoder) | 10–40 tis. Kč (DA) | |
| Dashboardy Looker Studio | od 5 600 / 9 800 Kč (rajtmajer) | 30–100+ tis. Kč (DA „analytika a BI“) | enterprise BI 350 tis. Kč/měs. (revolt) |
| Hodinová sazba | 950–1 500 Kč | 1 700–2 500 Kč | |

**Doporučení:** Když klient ceny neuvádí, musí LP **odstranit nejistotu jinak** – „co přesně dostanete“, „jak dlouho to trvá“, „z čeho se skládá cena“, „co od vás potřebujeme“, „první konzultace zdarma a s konkrétním výstupem“. Konkurence s cenami (khoder, homola, marketingppc) bude mít vyšší míru konverze u menších klientů; datalayer.cz tím přirozeně cílí výš (střední a velké firmy) – což odpovídá zvoleným segmentům.

---

## 6. Co dělají nejlepší landing pages konkurence (vzory k převzetí)

| Prvek | Kdo to dělá dobře | Jak to použít pro datalayer.cz |
|---|---|---|
| **Mockup rozhraní v hero** (GA4 real-time s eventy, stav Consent Mode 4/4) | khoder.cz, homoladigital.cz (tabulka e-commerce událostí) | Navázat na existující hero animaci (dataLayer → GTM → GA4/CAPI/BigQuery): na LP konkrétní „živý“ výřez – např. GTM Preview s `purchase` a jeho cestou |
| **Diagram toku dat** | khoder.cz, nextanalytica.cz (client-side vs. server-side ve 2 sloupcích), datanostro (4 kroky) | Na každé LP vlastní diagram architektury (SVG), na SST LP srovnání „před/po“ |
| **„Rychlá odpověď“ / definice nahoře** | khoder.cz | Odstavec 40–60 slov hned pod H1 pro AI přehledy a featured snippet |
| **Data z vlastních auditů** („250+ auditů, 42 % webů posílá data bez souhlasu“) | marketingppc.cz | Agregované statistiky z auditů datalayer.cz (i malé číslo, ale pravdivé) |
| **Kategorizace problémů A/B/C** + „co uděláme“ | marketingppc.cz | Sekce „Najdete se v tom?“ s typickými nálezy auditu |
| **Mini-případovky s tvrdými čísly** („rezervace nadhodnocené 24× kvůli měně“) | khoder.cz, datanimals (DovezuAuto −80 % poptávek kvůli liště), DataPlus (30 % → 99 %) | Formát „Problém → Příčina → Oprava → Výsledek“ s čísly |
| **Mockup Meta Events Manageru s Event Match Quality** | nextanalytica.cz | Důkaz kvality CAPI na LP konverzí |
| **Modelový výpočet ztráty dat** | DataPlus (1,4 mil. v administraci vs. 1 mil. v GA4) | Interaktivní kalkulačka „kolik konverzí vám chybí“ (bez ceny služby) |
| **Segmentace podle situace** (běžící e-shop / redesign / nový projekt) | digitalniarchitekti.cz | Blok „Kde jste teď?“ se 3–4 cestami → jiné CTA |
| **Checklist „jak poznáte, že měření funguje“** | homoladigital.cz | Samostatný blok + lead magnet (PDF/online checklist) |
| **FAQ s FAQPage schema (8–13 otázek)** | khoder.cz, homola, nextanalytica, gameplan | Na každé LP, otázky z PAA a z obchodních hovorů |
| **Výběr termínu hovoru přímo ve formuláři** / „30 min s founderem“ | marketingppc.cz, gameplan.cz | V nativním formuláři volitelně „preferovaný čas zavolání“ – viz `05_formulare/` |
| **Platformní podstránky** (SST pro GA4/Meta/Ads/TikTok/Shoptet) | nextanalytica.cz, datanostro.com | Fáze 2: podstránky podle platformy e-shopu (Shoptet, Upgates, WooCommerce, Shopify, vlastní řešení) |
| **Galerie ukázkových dashboardů** | revolt.bi, datimo.ai | LP Dashboardy: galerie 4–6 ukázek s anonymizovanými daty |

**Co nedělat (chyby konkurence):** šablonové LP s copy-paste texty (Visibility), Lorem ipsum v případovkách (Visibility, Štěpánek, datanimals), zastaralý obsah o UA a „konci cookies v roce 2024“ (Taste, Advisio), sliby „obejdeme blokátory / cookies nás nezastaví“ (OneTag, staging datalayer.cz), nepodložená čísla („až 70 % dat“), stránky bez H1 (revolt, impnet, datanimals), duplicitní HTML pro mobil (DA, impnet).

---

## 7. Obsah a blogy konkurence

| Kdo | Rozsah | Nejsilnější témata (podle návštěvnosti Ahrefs / SERP) |
|---|---|---|
| digitalniarchitekti.cz | 212 článků (poslední 5/2026) | Keboola, Co je Looker Studio, UTM parametry, Co je GTM, Facebook pixel, Microsoft Clarity, Cloud Run |
| marketingppc.cz | velký blog + průvodce GA4 (~5 500 slov), glosář, UTM builder | GA4, konverze, ROAS, PNO, KPI, Search Console, consent mode v2 |
| nazakladedat.cz | 112 návodů (aktuální 9/2026) | GA4 (45), GTM/dataLayer/consent (20), Ads/Sklik/Zboží (25); checklisty, GTM šablony |
| janpospisil.cz | ~213 textů, 25 hubů | Looker Studio, GSC, atribuční modely, server-side, UTM |
| datanostro.com | ~76 článků + 105 stránek dokumentace | server-side, Meta CAPI, Sklik S2S, migrace ze Stape |
| anycoders.cz | slovník 209 pojmů, 27 kalkulaček | consent mode v2 + server-side GTM |
| webglobe.cz / strafelda.cz / foxy.cz | obecné marketingové poradny | návštěvnost webu, Looker Studio, KPI, konverzní poměr |

**Mezery v obsahu (nikdo je pořádně nepokrývá česky):**
- GA4 → BigQuery: schéma exportu, SQL dotazy, náklady, rekonstrukce session, propojení s daty e-shopu/CRM.
- Propojení **client-side a server-side** taggingu (hybridní architektura, deduplikace `event_id`, transport_url, first-party cookies, Cookie Keeper/ITP).
- **Formulářová a uživatelská data**: co se smí poslat do GA4/Ads/Meta (PII, hashování, enhanced conversions for leads), jak měřit B2B poptávky až do CRM.
- **Consent mode – právo vs. technika**: ZEK § 89 odst. 3, GDPR, ÚOOÚ, co lze bez souhlasu (nic marketingového), basic vs. advanced, co reálně posílají „cookieless pingy“, server-side ≠ obcházení souhlasu.
- **Sklik / Seznam Event Measurement, Heureka, Zboží.cz** – české specifikum, obsah jen u DataNostro a v nápovědách.
- **Rozhodovací obsah pro firmy**: in-house vs. agentura, jak vybrat dodavatele měření, co má obsahovat audit, kolik stojí server-side provoz (Cloud Run vs. Stape), měřicí plán.

---

## 8. Mezery na trhu a doporučené positioning datalayer.cz

### 8.1 Největší příležitosti
1. **„Data, kterým věří i finanční ředitel“** – jediný český specialista, který dělá celý řetězec **sběr (dataLayer, GTM, consent, server-side) → ověření kvality → BigQuery → reporting**, s vlastnictvím dat a dokumentací. Konkurenti pokrývají vždy jen část.
2. **B2B / lead-gen měření** jako plnohodnotná služba (CRM, offline konverze, enhanced conversions for leads, kvalita leadů, call tracking).
3. **Velké firmy:** server-side na infrastruktuře klienta (Google Cloud), governance (pojmenování, měřicí plán, verzování GTM, přístupová práva), audit souladu, BigQuery. Enterprise hráči (Taste, TRKKN) jsou v SERP téměř neviditelní.
4. **Ověřený obsah o consentu a legislativě** – na trhu plném mýtů. Konzervativní, citovaný výklad (ÚOOÚ, ZEK, Google dokumentace) + jasné „nejsme právníci, spolupracujeme s …“.
5. **Česká specifika**: Sklik/Seznam Event Measurement, Heureka, Zboží.cz, Shoptet/Upgates dataLayer – technický obsah, který mezinárodní nástroje nepokrývají.
6. **Důkazy kvality dat**: zveřejnit „jak měříme vlastní web“ (consent mode, sGTM, dataLayer formuláře) – referenční implementace, kterou si klient může ověřit v DevTools.

### 8.2 Doporučená hodnotová nabídka (návrh)
> **datalayer.cz – techničtí inženýři vaší analytiky.** Navrhneme, nasadíme a ověříme měření od datové vrstvy po BigQuery – v souladu se souhlasem uživatelů, s dokumentací a s daty, která vlastníte vy.

Opěrné body (místo generických „přesná data“):
- měřicí plán a specifikace dataLayer jako dokument pro vývojáře,
- validace před spuštěním (testovací scénáře, porovnání s administrací e-shopu/CRM),
- server-side na vaší doméně a vašem Google Cloudu (bez vendor lock-inu),
- consent mode nastavený konzervativně – bez „obcházení“,
- BigQuery + dashboard, který sedí s účetnictvím.

### 8.3 Potenciální partneři (spíše než konkurenti)
- **BI firmy** (Revolt, Data Mind) – nedělají sběr dat z webu.
- **CMP** (cookies-spravne.cz) – lišta + datalayer.cz nastaví consent mode a měření.
- **SaaS sGTM** (DataNostro, Stape) – hosting pro menší klienty, white-label/provize.
- **PPC agentury bez analytika** – subdodávka (pozn.: white-label není hlavní cíl dle zadání).

---

## 9. Navazující dokumenty
- `../02_klicova-slova/` – analýza klíčových slov, clustery a mapování na stránky
- `../03_landing-pages/` – architektura webu a zadání landing pages (vychází z kap. 6 a 8)
- `../04_homepage-ux/` – návrh homepage
- `../06_clanky/` – obsahový plán (vychází z kap. 7)
- `profily/` – detail každého konkurenta
