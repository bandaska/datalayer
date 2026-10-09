# Obsahový plán a specifikace článků – datalayer.cz

**Datum:** 8. 10. 2026 · **Podklady:** `../02_klicova-slova/` (klíčová slova, otázky), `../01_konkurence/` (mezery v obsahu), `../data/serp/` (SERP a „Lidé se také ptají“)
**Tabulka plánu:** `obsahovy-plan.tsv` · **Detailní briefy:** `A1_…md` až `H3_…md` v této složce

---

## 1. Strategie obsahu

**Cíl:** Stát se v češtině nejdůvěryhodnějším zdrojem pro *technické* otázky měření (consent, server-side, dataLayer, BigQuery, kvalita dat) a z každého článku přivádět poptávky na konkrétní LP.

**Proč takhle:**
1. Komerční dotazy mají v ČR malé objemy (desítky měsíčně) → návštěvnost a důvěru musí táhnout obsah.
2. Konkurence má obsahu hodně, ale **mělkého nebo zastaralého** (UA, „konec cookies 2024“, chybný popis advanced consent mode) – viz `../01_konkurence/00_analyza-konkurence.md`, kap. 7.
3. Témata, která klient explicitně chce vysvětlovat (zpracování dat v BigQuery, propojení server-side a front-end trackingu, sběr uživatelských a formulářových dat, verze consentu a legislativa), jsou zároveň **největší obsahové mezery na českém trhu**.
4. Google zobrazuje AI přehled na 40 ze 43 testovaných dotazů → vyhrává obsah s jasnými definicemi, vlastními daty, diagramy a příklady kódu, které AI neumí jen převyprávět, a který je citovatelný.

> **Aktualizace po rešerši (8. 10. 2026):** Looker Studio se od 16. 4. 2026 opět jmenuje Data Studio; Google od 7. 5. 2026 nezobrazuje FAQ rich results; od 15. 6. 2026 nová nahrávání offline konverzí Google Ads přes Data Manager (API); rozšířené konverze: od 4/2026 Google Ads přijímá uživatelská data z tagu, Data Manageru i API současně, od 6/2026 je pro web i potenciální zákazníky jeden přepínač; Privacy Sandbox API ukončeny 17. 10. 2025 (Chrome cookies třetích stran ponechává). Detaily a zdroje v jednotlivých briefech.

**Principy každého článku:**
- **Rychlá odpověď** do 60 slov pod H1 (pro AI přehled a featured snippet).
- **Vlastní diagram** (SVG, ve vizuálním stylu hero) + aspoň jedna **tabulka**; u technických témat **ukázky kódu** (dataLayer, GTM, SQL).
- **Zdroje**: odkazy na primární dokumentaci (Google, Meta, Seznam, ÚOOÚ, zákon) – posiluje E-E-A-T a umožňuje rychlou aktualizaci.
- **Autor s tváří**: Vít Novotný (bio, LinkedIn, `Person` schema), datum publikace i **datum poslední revize** (technická témata se mění – revize každých 6 měsíců).
- **CTA box služby** uprostřed článku (kontextový, ne banner) + **zkrácený kontaktní blok** na konci (`form_id: blog`, viz `../05_formulare/`).
- **Žádné „obcházení“ souhlasu nebo blokátorů**, právní věty s odkazem na zdroj a disclaimerem.

---

## 2. Tematické clustery (hub & spoke)

| Cluster | Pilíř (hub) | Podpůrné články | Cílová LP |
|---|---|---|---|
| **A. Consent & legislativa** | A1 Consent Mode v2 – průvodce · A2 Cookies a zákon v ČR | A3 Osobní údaje v analytice · A4 Jak vybrat cookie lištu · A5 Server-side a souhlas · A6 Co se stane po odmítnutí cookies · A7 Cookies třetích stran a ITP 2026 | Cookie lišta & Consent Mode |
| **B. Server-side & architektura** | B1 Server-side tracking – průvodce | B2 Propojení client-side a server-side · B3 Kde provozovat sGTM · B4 Google Tag Gateway · B5 Meta CAPI · B6 Seznam Event Measurement | Server-side tracking · Měření konverzí |
| **C. Datová vrstva & GTM** | C1 Datová vrstva – specifikace · C3 GTM průvodce | C2 GA4 e-commerce dataLayer · C4 Audit GTM kontejneru · C5 Měřicí plán | Datová vrstva · GTM |
| **D. GA4 & kvalita dat** | D1 Nastavení GA4 – průvodce | D2 Proč nesedí čísla · D3 Checklist kvality dat · D4 GA4 na e-shopových platformách · D5 UTM parametry · D6 Atribuce | Implementace GA4 · Audit měření · E-shopy |
| **E. Formuláře, leady & uživatelská data** | E1 Měření formulářů a leadů | E2 Rozšířené konverze · E3 Offline konverze z CRM · E4 First-party data · E5 Měření telefonátů | B2B a lead-gen · Měření konverzí |
| **F. BigQuery & zpracování dat** | F1 GA4 → BigQuery export | F2 SQL pro GA4 · F3 Zpracování dat v BigQuery · F4 Propojení dat e-shopu a CRM · F5 Kolik stojí BigQuery | BigQuery |
| **G. Dashboardy & reporting** | G1 Looker Studio pro marketing | G2 Looker Studio vs. Power BI · G3 Marketingový dashboard a KPI | Dashboardy a reporting |
| **H. Audity & rozhodování** | – | H1 Jak vybrat dodavatele měření · H2 Co obsahuje audit měření · H3 Měřicí skripty a rychlost webu | Audit měření · Technický audit · Homepage |

---

## 3. Seznam článků

Objemy = průměrná měsíční hledanost CZ (Ahrefs). Nula u strategických témat neznamená nulový zájem – jde o nové nebo velmi specifické dotazy (viz poznámka v `../02_klicova-slova/`).

| ID | Článek | URL | Hlavní KW (objem) | Σ objem clusteru KW | Formát | Cílová LP | Pořadí |
|---|---|---|---|---|---|---|---|
| A1 | Consent Mode v2: kompletní průvodce (basic vs. advanced, co se posílá před souhlasem) | /blog/consent-mode-v2-pruvodce | consent mode v2 (80) | 230 | pilíř | Consent | měsíc 1 |
| A2 | Cookies a zákon v ČR: § 89 ZEK, GDPR a doporučení ÚOOÚ v praxi | /blog/cookies-zakon-gdpr-uoou | zákon o cookies (60) | 130 | pilíř | Consent | 1 |
| A3 | Osobní údaje v analytice: co smíte poslat do GA4, Google Ads a Meta (a co nikdy) | /blog/osobni-udaje-v-analytice | google analytics gdpr (100) | 180 | průvodce | Consent | 1 |
| A4 | Jak vybrat cookie lištu: Cookiebot, české CMP, nebo vlastní řešení? | /blog/jak-vybrat-cookie-listu | cookie lišta (200) | 930 | srovnání | Consent | 2 |
| A5 | Je server-side tracking legální? Server-side a souhlas uživatele | /blog/server-side-tracking-a-souhlas | (strategické) | – | průvodce | Server-side | 2 |
| A6 | Co se stane s daty, když návštěvník odmítne cookies | /blog/odmitnuti-cookies-dopad-na-data | (PAA otázka) | – | vysvětlení | Consent | 3 |
| A7 | Cookies třetích stran, Chrome a Safari ITP v roce 2026: co se doopravdy změnilo | /blog/cookies-tretich-stran-2026 | cookies třetích stran (10) | 40 | vysvětlení | Server-side | 2 |
| B1 | Server-side tracking: průvodce pro e-shopy i firmy | /blog/server-side-tracking-pruvodce | server side tracking (50) | 130 | pilíř | Server-side | 1 |
| B2 | Propojení client-side a server-side trackingu: hybridní architektura krok za krokem | /blog/propojeni-client-side-a-server-side | (strategické) | – | technický návod | Server-side | 1 |
| B3 | Kde provozovat server-side GTM: Stape, Google Cloud Run, nebo český hosting? | /blog/hosting-server-side-gtm | stape (80) | 90 | srovnání | Server-side | 2 |
| B4 | Google Tag Gateway a first-party mode: co to je a čím se liší od server-side GTM | /blog/google-tag-gateway | google tag gateway (80) | 80 | vysvětlení | Server-side | 1 |
| B5 | Meta Conversions API: nastavení, deduplikace event_id a Event Match Quality | /blog/meta-conversions-api | meta conversions api (10) | 50 | technický návod | Konverze | 1 |
| B6 | Seznam Event Measurement: konverze Skliku po novu | /blog/seznam-event-measurement-sklik | seznam event measurement (20) | 50 | technický návod | Konverze | 1 |
| C1 | Datová vrstva (dataLayer): co to je a jak napsat specifikaci pro vývojáře (+ šablona) | /blog/datova-vrstva-specifikace | datalayer (30) | 60 | pilíř | Datová vrstva | 1 |
| C2 | GA4 e-commerce dataLayer: události od view_item po purchase s ukázkami kódu | /blog/ga4-ecommerce-datalayer | (EN long-tail) | – | technický návod | Datová vrstva | 2 |
| C3 | Google Tag Manager: průvodce pro marketéry | /blog/google-tag-manager-pruvodce | google tag manager (2 400) | 3 730 | pilíř | GTM | 1 |
| C4 | Audit GTM kontejneru: nejčastější chyby a jak udržet pořádek | /blog/audit-gtm-kontejneru | gtm audit (10) | 30 | checklist | GTM | 2 |
| C5 | Měřicí plán: jak naplánovat měření dřív, než se napíše první tag (+ šablona) | /blog/merici-plan | (strategické) | – | šablona | GA4 | 2 |
| D1 | Nastavení GA4 krok za krokem: průvodce 2026 | /blog/nastaveni-ga4-pruvodce | nastavení ga4 (50) | 1 230 | pilíř | GA4 | 1 |
| D2 | Proč nesedí čísla: GA4 vs. Google Ads vs. Meta vs. administrace e-shopu | /blog/proc-nesedi-data | (problémové dotazy) | 90 | problémový | Audit | 1 |
| D3 | Checklist kvality dat v GA4: 25 kontrol | /blog/ga4-checklist-kvality-dat | (audit dotazy) | 20 | checklist | Audit | 1 |
| D4 | GA4 na Shoptetu, Upgates, WooCommerce a Shopify | /blog/ga4-pro-eshopove-platformy | shoptet google analytics (150) | 950 | srovnání | E-shopy | 1 |
| D5 | UTM parametry: pravidla pojmenování (+ UTM builder) | /blog/utm-parametry | utm parametry (150) | 2 050 | návod + nástroj | GA4 | 1 |
| D6 | Atribuce v GA4 a reklamních systémech | /blog/atribuce-ga4 | atribuce (150) | 210 | vysvětlení | Dashboardy | 3 |
| E1 | Měření formulářů a leadů: od formuláře po zakázku v CRM | /blog/mereni-formularu-a-leadu | (strategické) | – | pilíř | B2B | 1 |
| E2 | Rozšířené konverze (enhanced conversions) pro web i leady | /blog/rozsirene-konverze | enhanced conversions (10) | 20 | technický návod | Konverze | 1 |
| E3 | Offline konverze z CRM do Google Ads a Meta | /blog/offline-konverze-z-crm | (strategické) | – | technický návod | B2B | 1 |
| E4 | Sběr uživatelských dat (first-party data) | /blog/first-party-data | first party data (20) | 40 | průvodce | BigQuery | 2 |
| E5 | Měření telefonátů a call tracking v ČR | /blog/mereni-telefonatu | (strategické) | – | vysvětlení | B2B | 3 |
| F1 | GA4 → BigQuery export: nastavení, struktura tabulek, limity a cena | /blog/ga4-bigquery-export | ga4 bigquery | 150 | pilíř | BigQuery | 1 |
| F2 | SQL pro GA4 v BigQuery: 12 dotazů pro marketéra | /blog/ga4-bigquery-sql | (EN long-tail) | – | technický návod | BigQuery | 2 |
| F3 | Zpracování dat v BigQuery: od surových eventů k reportovacím tabulkám | /blog/zpracovani-dat-v-bigquery | datový sklad (150) | 150 | průvodce | BigQuery | 2 |
| F4 | Propojení dat z e-shopu a CRM s GA4 (marže, vratky, LTV) | /blog/propojeni-dat-eshop-crm-ga4 | crm integrace (50) | 50 | průvodce | BigQuery | 2 |
| F5 | Kolik stojí BigQuery pro marketing | /blog/bigquery-cena | bigquery pricing (20) | 30 | výpočet | BigQuery | 3 |
| G1 | Data Studio (dříve Looker Studio) pro marketing | /blog/looker-studio-pruvodce | looker studio (1 400) | 4 150 | pilíř | Dashboardy | 1 |
| G2 | Data Studio (Looker Studio) vs. Power BI | /blog/looker-studio-vs-power-bi | power bi (navig.) | (9 130) | srovnání | Dashboardy | 2 |
| G3 | Marketingový dashboard: jaké KPI sledovat v e-shopu a v B2B | /blog/marketingovy-dashboard | dashboard co to je (200) | 400 | průvodce | Dashboardy | 2 |
| H1 | Jak vybrat dodavatele měření | /blog/jak-vybrat-dodavatele-mereni | webová analytika agentura | 160 | rozhodovací | Homepage | 2 |
| H2 | Co má obsahovat audit měření (ukázka výstupu) | /blog/co-obsahuje-audit-mereni | audit webové analytiky (70) | 80 | průvodce | Audit | 1 |
| H3 | Měřicí skripty a rychlost webu | /blog/tagy-a-rychlost-webu | core web vitals | 50 | technický návod | Tech. audit | 3 |

**Harmonogram (návrh):** měsíc 1 = 19 článků s prioritou 1 (lze rozložit do 2–3 měsíců podle kapacity: 2 články týdně), měsíc 2 = 15 článků, měsíc 3 = 6 článků. Pilíře vydat jako první, podpůrné články je doplní a prolinkují.

---

## 4. Slovník pojmů (`/slovnik`)

Každé heslo: definice do 50 slov (rychlá odpověď) → jak to funguje (100–200 slov) → mini-diagram nebo příklad → „Související pojmy“ → odkaz na LP a článek. Schema `DefinedTerm` v `DefinedTermSet`.

**První vlna (40 hesel):** GA4 · Google Tag Manager · Tag · Spouštěč (trigger) · Proměnná · Kontejner GTM · Datová vrstva (dataLayer) · Událost (event) · Klíčová událost (konverze) · Server-side tagging (sGTM) · First-party cookie · Third-party cookie · ITP (Intelligent Tracking Prevention) · Consent Mode · Cookieless ping · CMP (consent management platform) · Meta Pixel · Conversions API (CAPI) · Event Match Quality · Deduplikace (event_id) · Rozšířené konverze · Offline konverze · GCLID / gbraid / wbraid · UTM parametry · Atribuční model · Data-driven atribuce · Modelování konverzí · BigQuery · Datový sklad · Data Studio (dříve Looker Studio) · Power BI · Measurement Protocol · User-ID · Client ID · Cross-domain měření · Thresholding (prahování dat) · (not set) / Unassigned · Interní návštěvnost · Seznam Event Measurement · Google Tag Gateway.

---

## 5. Šablona briefu (struktura každého souboru `X#_….md`)

1. **Meta** – titulek (H1), SEO title, meta description, URL, hlavní a vedlejší KW s objemy, záměr, cílový čtenář (persona + segment), cílová LP, formát, rozsah slov, priorita.
2. **Analýza SERP** – kdo dnes rankuje (z `../data/serp/`), co jim chybí, jak je přeskočit.
3. **Otázky, na které článek musí odpovědět** – z „Lidé se také ptají“, Ahrefs a z praxe.
4. **Rychlá odpověď** (hotový text do 60 slov).
5. **Osnova H2/H3 s obsahem odpovědí** – u každé sekce: klíčové sdělení, fakta a čísla (se zdrojem), kroky, příklady kódu.
6. **Vizuály** – diagramy (náhled v Mermaidu), infografiky (rozvržení + data), tabulky (obsah), mockupy rozhraní, ukázky kódu.
7. **Fakta a zdroje** – seznam ověřených tvrzení s odkazy na primární zdroje a datem ověření.
8. **Interní odkazy a CTA** – cílová LP, text CTA boxu, související články, slovník.
9. **FAQ pro schema** – 4–6 otázek s krátkými odpověďmi.
10. **Poznámky pro autora** – na co si dát pozor (právo, zastarávání, citlivá tvrzení), co dodat od klienta (screenshoty, data).
