# Audit stagingu datalayer.vitnovotny.cz

**Datum:** 8. 10. 2026 · **Rozsah:** všech 12 indexovatelných URL (crawl přes HTTP Basic Auth), screenshoty desktop 1440 px + mobil 390 px, renderovaný DOM, síťové požadavky.
**Surová data:** `data/raw/site/staging/` (crawl.csv, crawl.json, HTML, extrahované texty) · `data/screenshots/staging/`

---

## 1. Shrnutí – 10 nejdůležitějších zjištění

| # | Zjištění | Dopad | Priorita |
|---|---|---|---|
| 1 | **Servisní stránky mají 32–41 slov** (2–3 věty). Pro Google jsou to „thin content“ stránky bez šance rankovat na konkurenční dotazy. | SEO, konverze | 🔴 P1 |
| 2 | **Chybí obsah, který prodává expertní službu**: případové studie, reference, tým/osoba, ukázky výstupů, FAQ, postup spolupráce na úrovni služby. | Důvěra, konverze | 🔴 P1 |
| 3 | **HubSpot formulář**: povinné pole „Firma“, telefon s předvolbou 🇺🇸 +1, branding „Create your own free forms“, jiný vizuální styl než web, 13 hostů / ~25 požadavků navíc, chybí alternativní kontakt (telefon, e-mail). | Konverze, rychlost, GDPR | 🔴 P1 |
| 4 | **Web analytické agentury nemá vlastní měření** (žádný GTM, GA4, consent lišta). Web by měl být „výkladní skříní“ – ukázat consent mode v2, server-side GTM, měření formuláře s enhanced conversions. | Důvěryhodnost, data | 🔴 P1 |
| 5 | **URL v camelCase a angličtině** (`/sluzby/serverSide`, `/sluzby/dataLayer`) + case-sensitive routing (`/sluzby/datalayer` → 404). Pro český web doporučuji `/sluzby/server-side-tracking`, `/sluzby/datova-vrstva` apod. | SEO, UX | 🟠 P2 |
| 6 | **Chybí sitemap.xml, canonical, Open Graph, strukturovaná data** (Organization, Service, BreadcrumbList, Article, FAQPage). | SEO, sdílení | 🟠 P2 |
| 7 | **Duplicitní URL**: `/sluzby` i `/sluzby/`, `/blog` i `/blog/`, `/SLUZBY` vrací 200. Chybí 301 sjednocení. | SEO | 🟠 P2 |
| 8 | **Homepage texty a piktogramy jsou generické** (Font Awesome ikony „graf“, „cookie“, „databáze“, „ozubená kola“ – použitelné pro jakoukoli IT firmu). Detailně v `04_homepage-ux/`. | Positioning | 🟠 P2 |
| 9 | **Mobil 390 px má horizontální scroll** (scrollWidth 395 px – přetéká tlačítko „[ Jak pracujeme ]“ a SVG v hero). Podtitulek kontaktní sekce má nečitelný kontrast (tmavě šedý text na tmavě modrém pozadí). | UX, Core Web Vitals | 🟠 P2 |
| 10 | **Tvrzení „+18 % konverzní uplift“ bez kontextu** (kdo, kdy, jak měřeno). Neověřitelná čísla snižují důvěru u technicky zdatného publika. | Důvěra | 🟡 P3 |

---

## 2. Inventář stránek

| URL | Title (znaky) | Meta desc. (znaky) | H1 | Slov | Poznámka |
|---|---|---|---|---|---|
| `/` | datalayer.cz – Datové základy pro váš růst (42) | 123 | Stavíme neprůstřelné datové základy pro váš růst. | 217 | Title bez klíčového slova služby |
| `/sluzby` | Služby \| datalayer.cz (21) | 67 | Technická expertíza pro vaše data | 88 | Rozcestník 6 služeb |
| `/sluzby/ga4` | GA4 Implementace \| datalayer.cz (31) | 74 | GA4 Implementace | 41 | Thin content |
| `/sluzby/gtm` | Google Tag Manager \| datalayer.cz (33) | 73 | Google Tag Manager | 35 | V menu nazváno „Server-Side GTM“ – nekonzistence |
| `/sluzby/serverSide` | Server-Side Měření \| datalayer.cz (33) | 73 | Server-Side Měření | 40 | Formulace „obcházení blokátorů“ – viz níže |
| `/sluzby/audit` | GA4 Audit \| datalayer.cz (24) | 53 | GA4 Audit | 32 | Thin content |
| `/sluzby/dataLayer` | Data Layer Design \| datalayer.cz (32) | 50 | Data Layer Design | 33 | Thin content, camelCase URL |
| `/sluzby/bigquery` | BigQuery & Data \| datalayer.cz (30) | 62 | BigQuery & Data | 38 | Thin content |
| `/blog` | Blog \| datalayer.cz (19) | 69 | Nejnovější poznatky ze světa dat | 99 | 2 články |
| `/blog/server-side-gtm-uvod` | Server-Side GTM: proč a jak začít (48) | 156 | = title | 79 | Datum 15. 1. 2025, autor Vít Novotný |
| `/blog/ga4-bigquery-export` | GA4 → BigQuery: vlastní data bez limitů (54) | 158 | = title | 49 | Datum 20. 2. 2025 |
| `/privacy` | Zpracování osobních údajů (40) | 0 | Zpracování osobních údajů | 20 | **Placeholder text** „Doplňte aktuální znění…“ |

Chybějící stránky, které konkurence běžně má (detail v `01_konkurence/`): **O nás / tým**, **Reference / případové studie**, **Kontakt** (samostatná stránka), **Cookies / zásady cookies**, **FAQ**.

---

## 3. Technické SEO

### 3.1 Indexace a crawl
- `robots.txt`: `Allow: /` – OK, ale **chybí odkaz na sitemapu**.
- `sitemap.xml`: **404** (vrací šablonu 404 stránky). → Vygenerovat sitemapu (React Router: route `sitemap[.]xml` s loaderem) a odkázat z robots.txt.
- Neexistující URL vrací správně **HTTP 404** ✅.
- `http://` → `https://` přesměrování je **302** (má být 301) – pravděpodobně dáno stagingem/Cloud Run; ověřit na produkci.
- Staging je za Basic Auth ✅ (nehrozí indexace stagingu). Při spuštění produkce ohlídat, aby se nepřenesl `noindex`/auth.

### 3.2 URL struktura
| Současná URL | Doporučená URL | Důvod |
|---|---|---|
| `/sluzby/ga4` | `/sluzby/implementace-ga4` | Klíčové slovo „implementace GA4“ v URL |
| `/sluzby/gtm` | `/sluzby/google-tag-manager` | Plné znění = hledaný výraz |
| `/sluzby/serverSide` | `/sluzby/server-side-tracking` | lowercase, pomlčky, hledaný výraz |
| `/sluzby/dataLayer` | `/sluzby/datova-vrstva` | lowercase, česky |
| `/sluzby/audit` | `/sluzby/audit-mereni` | Specifikace typu auditu |
| `/sluzby/bigquery` | `/sluzby/bigquery` | OK |
| `/privacy` | `/zpracovani-osobnich-udaju` | Český web → české URL |

Kompletní návrh architektury je v `03_landing-pages/00_architektura-webu.md`.

- Sjednotit trailing slash (doporučuji **bez lomítka**) a vše ostatní 301 přesměrovat.
- Routing má být **case-insensitive s 301 na lowercase** (dnes `/SLUZBY` = 200, `/sluzby/datalayer` = 404).

### 3.3 Meta data a strukturovaná data
- **Canonical chybí na všech stránkách** → přidat self-referencing canonical.
- **Open Graph / Twitter Card chybí** → sdílení na LinkedIn (hlavní B2B kanál) se zobrazí bez obrázku.
- **JSON-LD chybí**. Doporučeno:
  - celý web: `Organization` (+ `ProfessionalService`), `WebSite`
  - služby: `Service` + `BreadcrumbList` + `FAQPage` (FAQ sekce viz zadání LP)
  - blog: `BlogPosting` s `author` (Person – Vít Novotný, odkaz na LinkedIn), `datePublished`, `dateModified`
- Title tagy jsou krátké (19–33 znaků) a nevyužívají hledané výrazy. Návrhy title/description jsou v zadání každé LP.

### 3.4 Výkon a zdroje
- Na **každé stránce** se načítá: Bootstrap 5.3 CSS+JS (CDN jsDelivr), **celý Font Awesome 6.0** (cdnjs), **highlight.js theme** (i na stránkách bez kódu), Google Fonts (Inter 7 řezů + Roboto Mono 2 řezy). → Render-blocking CSS z 3 cizích domén.
  - Doporučení: self-host fontů (méně řezů: 400/600/800), SVG ikony inline místo Font Awesome (zároveň řeší generičnost ikon), highlight.js jen na blogu.
- **HubSpot formulář** přidává 13 hostů (`*.hubspot.com`, `*.hsforms.net`, `hsappstatic.net`) a zhruba polovinu všech požadavků homepage (51 celkem). Nativní formulář je odstraní.
- Obrázky: žádné `<img>` (vše SVG/CSS) ✅.

### 3.5 Bezpečnost a hlavičky
- Chybí `Strict-Transport-Security`, `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`. Pro firmu, která radí s daty a souhlasy, jde i o signál profesionality (a `Referrer-Policy` přímo souvisí s tím, co se posílá třetím stranám).

### 3.6 Vlastní měření (paradox: analytická agentura bez analytiky)
- Na stagingu **není GTM, GA4 ani consent lišta**. HubSpot si přitom ukládá vlastní cookies a posílá data do USA/EU1 bez souhlasu.
- Doporučení – udělat z vlastního webu referenční implementaci a **ukázat ji na webu** (sekce „Jak měříme my“):
  1. Consent lišta (vlastní nebo CMP) + Google Consent Mode v2 (advanced),
  2. GTM web + server-side GTM na vlastní subdoméně (např. `sgtm.datalayer.cz`),
  3. nativní formulář s `dataLayer` událostí `generate_lead` + hash e-mailu/telefonu (enhanced conversions) – stejně jako na annanovotna.cz,
  4. GA4 → BigQuery export + veřejný ukázkový dashboard (Looker Studio) s anonymizovanými daty webu.

---

## 4. Obsah a copywriting

- **Služby popsané 2–3 větami** bez: problému klienta, výstupů, postupu, doby trvání, technologií, příkladů, FAQ. Detailní zadání obsahu je v `03_landing-pages/`.
- **Generické formulace** („funkcionální ekosystém“, „konec cookies třetích stran a specializovaná implementace GA4, GTM, Server-Side měření atd.“ – druhá věta je navíc gramaticky/logicky nedokončená a opakuje nadpis).
- **„Obcházení blokátorů“** (`/sluzby/serverSide`, homepage) – formulace, kterou technicky zdatný a právně opatrný klient (velké firmy) čte jako riziko. Doporučená formulace: „first-party měření odolné vůči ztrátě dat, plně v souladu se souhlasem uživatele“.
- **Blog**: 2 články o 49 a 79 slovech, datované 2025 → na produkci působí jako opuštěný blog. Plán článků je v `06_clanky/`.
- **Věcná chyba v článku GA4 → BigQuery:** tip „Export je zdarma v rámci sandbox limitů BigQuery“ je zavádějící – v sandboxu BigQuery tabulky po 60 dnech expirují, streamovaný export nefunguje a úložiště sandboxu má limit 10 GiB (ověřeno 10/2026, viz `06_clanky/F1_ga4-bigquery-export.md` a `F5_bigquery-cena.md`). Opravit při přepisu článku.
- **Názvosloví:** „FB CAPI“ v hero → „Meta CAPI“; „Looker Studio“ se od 4/2026 opět jmenuje Data Studio.
- **Autor/osoba**: jméno Vít Novotný je jen u článků. Konkurence (zejména freelance konzultanti) staví důvěru na konkrétní osobě – fotka, praxe, certifikace, LinkedIn.
- **Kontakt**: e-mail `one@datalayer.cz` v patičce není klikací (`mailto:`), LinkedIn není odkaz, chybí telefon.
- **Patička**: „O nás“ odkazuje na `/`, „Quick links“ v angličtině.

---

## 5. UX / UI (souhrn – detail v `04_homepage-ux/`)

| Oblast | Zjištění |
|---|---|
| Navigace | Dvakrát položka „Služby“ (dropdown + odkaz). Dropdown obsahuje jen 3 ze 6 služeb a položka „Server-Side GTM“ vede na stránku „Google Tag Manager“. |
| Hero | Vizuál (diagram e-shop → GTM → GA4/FB CAPI/BigQuery) je silný a specifický ✅. Velká ikona košíku překrývá popisky „FB CAPI“ a „BigQuery“ – zvážit zmenšení/posun. Sekundární CTA „[ Jak pracujeme ]“ vede na formulář, ne na proces. |
| Sekce problémů | 3 obecné ikony + texty, které nepojmenovávají konkrétní symptomy (rozdíl GA4 vs. tržby v e-shopu, chybějící konverze v Google Ads po consent liště, Safari ITP, …). |
| Sekce služeb | 6 karet se stejnou strukturou, ikony Font Awesome, bez výstupu/benefitu. |
| Sekce „+18 %“ | Osamocené číslo bez zdroje. |
| Proces | 5 kroků OK, ale bez časové osy a bez výstupu každého kroku. |
| Kontakt | HubSpot iframe (výška 776 px), duplicitní nadpisy „Napište nám“ + „Kontakt“, nečitelný podtitulek, chybí telefon/e-mail. |
| Mobil | Horizontální scroll (395 px > 390 px). |
| Brand | Hranaté závorky „[ Konzultovat projekt ]“ – zajímavý „kódový“ prvek ✅, ale v kombinaci s generickými ikonami působí spíš jako šablona. |
