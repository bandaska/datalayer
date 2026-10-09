# Kontrola webu po úpravách – datalayer.vitnovotny.cz

**Datum kontroly:** 9. 10. 2026 · **Rozsah:** 24 indexovatelných URL + `/dekujeme`, desktop 1440 px a mobil 390 px · **Srovnání proti:** audit stagingu (`07_audit-webu-klienta/`), architektura a zadání LP (`03_landing-pages/`), homepage (`04_homepage-ux/`), formuláře (`05_formulare/`), kontrola kvality (`08_kontrola/`)
**Nástroje:** crawl (requests), Playwright (screenshoty, metriky, události), Chrome (cookie lišta, formulář, síť), axe-core (přístupnost)
**Podklady:** `data/` (crawl, metriky po stránkách a sekcích, axe), `screenshots/` (celé stránky + detaily, na které se odkazuje níže)

**Priority:** **P1** = opravit před spuštěním · **P2** = do 2–4 týdnů po spuštění · **P3** = průběžně

---

## 1. Shrnutí

**Technicky a obsahově je web na úplně jiné úrovni než při auditu.** Z deseti hlavních zjištění auditu je sedm vyřešených. Dvě čekají hlavně na podklady od klienta a produkční nastavení (#2 případové studie a osoba; #4 GTM). U #9 zůstaly dílčí chyby na mobilu (kap. 2). Vyřešené jsou:
- služby mají plnohodnotný obsah (#1 – dokonce příliš, viz níže);
- nativní formulář místo HubSpotu (#3);
- nové URL a 301 přesměrování (#5) včetně sjednocení lomítek a velkých písmen (#7);
- sitemap, canonical, OG a strukturovaná data (#6);
- vlastní piktogramy a konkrétní texty na HP (#8);
- žádné neověřené „+18 %“ (#10).

Navíc přibyly cookie lišta s Consent Mode v2, bezpečnostní hlavičky a všechny zdroje běží z vlastní domény (bez Font Awesome a CDN).

**Hlavní problém se ale otočil: místo prázdných stránek jsou teď stránky přeplněné.** Vnímání, že je web „těžký“, potvrzují čísla:

| Ukazatel | Stránky služeb a řešení (14 LP) | Cíl |
|---|---|---|
| Slov na stránce (vč. sbalených FAQ a tabů) | 2 765–4 760 | 1 300–1 800 |
| Sekcí pod hero | 11–17 | 8–9 |
| Výška na desktopu | 13–19 obrazovek | ≤ 8 |
| Výška na mobilu | 22–33 obrazovek | ≤ 14 |
| Tabulek na stránce | 2–8 (celkem **67** na webu) | max. 1 |
| Tabulek, které na mobilu scrollují do strany | **67 z 67** | 0 |
| Otázek ve FAQ | 10–12 | 5–6 |

**Příčina:** zadání LP v `03_landing-pages/` byla záměrně psaná jako úplný inventář obsahu (14–18 sekcí, desítky tabulek, 6 000–10 000 slov na zadání). Implementace je převzala 1 : 1 a ve stejném pořadí, takže na stránce skončilo všechno, co mělo být rozdělené mezi stránku služby, rozbalovací detaily a články. Řešením není obsah mazat, ale **rozdělit ho do tří pater**:
1. **Krátká stránka služby** – rozhodnutí a poptávka.
2. **Sbalené „Technické detaily“** – pro technické čtenáře; patří sem jen to, co nemá vlastní článek.
3. **Články** – hloubka a SEO na informační dotazy. Briefy už existují v `06_clanky/`.

### Top 12 úprav

| # | Úprava | Priorita | Kapitola |
|---|---|---|---|
| 1 | **Produkce:** odstranit `X-Robots-Tag: noindex` a Basic Auth, http → https jako 301, nastavit GTM ID a Turnstile a otestovat odeslání formuláře (`generate_lead`) – na stagingu se GTM ani Turnstile nenačítají | P1 | 6.2, 7 |
| 2 | Zavést **štíhlou šablonu LP** (8–9 bloků) a přestavět podle ní všech 14 LP – plán sekce po sekci je v kap. 5 | P1 | 3.1, 5 |
| 3 | **Tabulky:** z 67 nechat na celém webu ~7, ostatní převést na karty, checklisty nebo do článků. Na mobilu zobrazit řádek jako kartu, ne posuvník do strany | P1 | 3.2 |
| 4 | Sloučit úvodní odstavec a box **„Rychlá odpověď“** (dnes říkají totéž dvakrát) – CTA z hero je pak na mobilu v první obrazovce (dnes je vidět jen sticky lišta „Napsat“) | P1 | 3.3 |
| 5 | Odstranit opakované bloky: **taby „Co je jinak u e-shopu, B2B a velké firmy“** (11 služeb + `/sluzby`), samostatné „Články k tématu“ (vedou na jediný starý článek); FAQ zkrátit na 5–6 otázek | P1 | 3.3 |
| 6 | **Mobilní menu:** podmenu Služby má 3 sloupce, třetí („Audity a správa“) je mimo obrazovku | P1 | 4 |
| 7 | **Kontrast CTA:** bílý text na oranžové `#ff7400` má 2,7 : 1 (WCAG vyžaduje 4,5 : 1) | P1 | 9 |
| 8 | **Identifikace provozovatele:** chybí jméno nebo firma, IČO a sídlo (patička, O nás, zásady zpracování) – zákonná povinnost | P1 | 8 |
| 9 | **Blog:** 2 články po ~190 slovech z roku 2025 s automatickým „aktualizováno 9. 10. 2026“, HP je představuje jako „návody s diagramy a kódem“. Před spuštěním vydat první pilíře, nebo blok a staré články skrýt (noindex) | P1 | 7.3 |
| 10 | Sjednotit **postup spolupráce**: HP má 5 kroků, `/jak-pracujeme` 8, jednotlivé LP 5–7 vlastních. Mřížky kroků mají osiřelé karty | P2 | 3.3 |
| 11 | Opravit drobné UI chyby: štítky natažené přes celou šířku karty, buňky tabulek se seznamy bez odrážek, mono písmo v souvislém textu | P2 | 3.4 |
| 12 | **Kontaktní stránka a blok:** formulář na `/kontakt` je až na konci stránky – přesunout pod nadpis; kontaktní blok zkompaktnit (12 čipů → 7) | P2 | 6.3, 6.4 |

---

## 2. Shoda s auditem stagingu (`07_audit-webu-klienta/audit-stagingu.md`)

| # | Zjištění auditu | Stav | Poznámka |
|---|---|---|---|
| 1 | Služby mají 32–41 slov (thin content) | ✅ přestřeleno | Teď 2 765–4 760 slov. Problém se obrátil v přehuštění (kap. 3) |
| 2 | Chybí důvěra: případovky, osoba, výstupy, FAQ, postup | ⚠️ částečně | Výstupy, postup, FAQ ✅. **Chybí:** případové studie, fotka a bio Víta, LinkedIn, telefon, firemní údaje |
| 3 | HubSpot formulář | ✅ | Nativní formulář: firma není povinná, předvolba +420, bez brandingu, jediný host = vlastní doména |
| 4 | Web nemá vlastní měření ani consent | ⚠️ | Cookie lišta + Consent Mode v2 ✅, události do `dataLayer` ✅. **GTM se na stagingu nenačítá** (`gtmId` prázdné), sGTM zatím neběží (web to sám poctivě uvádí) |
| 5 | camelCase URL, case-sensitive routing | ✅ | Nové URL; `/sluzby/serverSide`, `/sluzby/dataLayer`, `/SLUZBY`, `/Sluzby/Implementace-GA4` → 301 |
| 6 | Chybí sitemap, canonical, OG, JSON-LD | ✅ | Sitemap (24 URL), robots s odkazem, self-canonical, OG, JSON-LD (Organization + ProfessionalService, WebSite, Service, BreadcrumbList, FAQPage, Blog, BlogPosting) |
| 7 | Duplicitní URL (lomítko, velká písmena) | ✅ | `/sluzby/`, `/blog/`, `/kontakt/` → 301 bez lomítka |
| 8 | Generické ikony a texty na HP | ✅ | Vlastní sada piktogramů, symptomy, pipeline služeb dle návrhu |
| 9 | Mobil: horizontální scroll, nečitelný podtitul kontaktu | ✅ / ⚠️ | Stránka nepřetéká na žádné URL. **Ale:** všech 67 tabulek scrolluje uvnitř do strany a podmenu Služby přetéká (kap. 4) |
| 10 | „+18 %“ bez kontextu | ✅ | Odstraněno; sekce „Ověřte si nás“ správně skrytá, dokud neběží měření |
| – | Navigace: 2× „Služby“, dropdown jen se 3 službami | ✅ | Mega menu s 11 službami ve 3 skupinách, Řešení, Blog, O nás |
| – | „FB CAPI“ → „Meta CAPI“, „obcházení blokátorů“ | ✅ | Opraveno; text se nikde nevyskytuje |
| – | Chybný tip o BigQuery sandboxu | ✅ | Opraveno (60 dní, 10 GiB, bez streamingu) |
| – | E-mail bez `mailto:`, „Quick links“, „O nás“ → `/` | ✅ | Opraveno |
| – | Placeholder zásad zpracování | ⚠️ | Text je hotový, ale **chybí identifikace správce** (kap. 8) |
| – | Render-blocking CDN (Bootstrap, Font Awesome, highlight.js) | ✅ / ⚠️ | Vše self-hosted, bez Font Awesome, Brotli, `immutable` cache. Celý `bootstrap.min.css` (231 kB) se ale pořád načítá (kap. 9) |
| – | Bezpečnostní hlavičky | ✅ / ⚠️ | HSTS, nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy ✅; **chybí CSP** |
| – | http → https 302 | ⚠️ | Na stagingu pořád 302 (Google Frontend). Na produkci nastavit 301 |

**Shoda se zadáním homepage (`04_homepage-ux/`):** 9 z 10 sekcí podle návrhu, texty převzaté, piktogramy ze sady. Hero zůstal beze změny (dle zadání), „Meta CAPI“ je opravené. Odchylky a úpravy jsou v kap. 6.1.

---

## 3. UX – hustota obsahu, tabulky, struktura stránek

### 3.1 Štíhlá šablona LP (P1)

Platí pro 11 služeb a 3 řešení. Pořadí a rozsah bloků:

| # | Blok | Obsah a limit | Komponenta | Pozadí |
|---|---|---|---|---|
| 1 | **Hero** | H1, **jeden** úvodní odstavec o 2–3 větách (= rychlá odpověď), 2 CTA, mikrocopy; 3 body důvěry inline pod CTA | `HeroService` bez boxu „Rychlá odpověď“ | tmavé |
| 2 | **Poznáváte se?** | **4** symptomy, každý nadpis + 1 věta (max. 25 slov) | 4 karty v řadě; mobil: kompaktní seznam (ikona vlevo) | světlé |
| 3 | **Co uděláme a co dostanete** | sloučené „Co nastavíme“ + „Co od nás dostanete“: **6 karet**, každá = výstup (název souboru jako inline štítek) + 1 věta | `Deliverables` 3 × 2 | světlé |
| 4 | **Jak to funguje** | **1 diagram** (nejsilnější vizuál stránky) + max. 3 odrážky | `DataFlowDiagram` | tmavé |
| 5 | **Rozhodnutí** | jen to, co pomáhá rozhodnout se: „Kdy to dává smysl / kdy ne“ (2 sloupce po 4–5 bodech), **nebo** jedna srovnávací tabulka (≤ 3 sloupce, ≤ 6 řádků) | `ProsCons` / `CompareTable` | světlé |
| 6 | **Postup** | **jednotných 5 kroků** pro celý web; u služby se mění jen popis kroku 3; ke krokům doplnit délku (dodá klient). Dokud není jednotný postup hotový (P2), použít stávající kroky služby – max. 5 a bez osiřelých karet | `ProcessTimeline` horizontálně, na mobilu vertikálně | světlé |
| 7 | **Důkaz** | případová studie (až bude), jinak „Jak poznáte, že to funguje“ (4 body) | `MiniCase` / checklist | tmavé |
| 8 | **FAQ** | **5–6 otázek**: cena, délka, vlastnictví účtů, GDPR/souhlas, spolupráce s vývojáři + 1 specifická | `FAQ` | světlé |
| 9 | **Pokračujte + kontakt** | 1 pruh: 3 navazující služby + až 3 články; pod tím kompaktní kontaktní blok | `RelatedStrip` + `ContactBlock` | tmavé |
| – | **Technické detaily** (dočasně) | obsah, který má jít do článku, který ještě nevyšel – sbalený v `<details>` nad FAQ, max. 1 na stránku | `Accordion` | světlé |

**Cílové hodnoty na LP:** 1 200–1 700 slov viditelného textu (~1 300–1 800 včetně sbalených FAQ); 8–9 sekcí pod hero; desktop ≤ 8 obrazovek, mobil ≤ 14; max. 1 tabulka; max. 1 blok kódu (sbalený); FAQ 5–6.

**Pravidla, která drží stránku lehkou:**
- Každý blok odpovídá na **jednu otázku návštěvníka** (Mám tenhle problém? Co dostanu? Jak to funguje? Je to pro mě? Jak to proběhne? Komu to dělali?). Co na žádnou z nich neodpovídá, jde do článku.
- Odstavec max. 3 věty, karta max. 25 slov, odrážka max. 1 řádek na desktopu.
- Max. **3 přechody tmavé ↔ světlé** pod hero (dnes se pozadí střídá u každé ze 14–17 sekcí, což zesiluje dojem dlouhé stránky).
- Odborné detaily (názvy parametrů, cookies, API, časové limity) patří do článků. Na LP stačí výsledek pro byznys („Meta uvidí i nákupy, které pixel v prohlížeči nezachytí – vždy jen se souhlasem a bez dvojího započtení“).
- Při přesunu obsahu do článku zůstane na LP 1–2 věty a odkaz. **Dokud článek nevyjde, obsah zůstává ve sbaleném bloku „Technické detaily“** (je indexovatelný), takže se nic neztratí.

### 3.2 Tabulky (P1)

**Stav:**
- Na webu je **67 tabulek**, nejvíc na Google Tag Manageru (8 tabulek) a na server-side, měření konverzí, B2B a velkých firmách (po 6).
- Na mobilu jsou všechny široké nejméně 560 px (15 z nich 587–865 px) v kontejneru 366 px. U čtyřsloupcové tabulky tak vidíte 2,5 sloupce a zbytek je uříznutý. Žádná nápověda, že jde posouvat do strany. Screenshoty: `screenshots/detail_mobil_tabulka_hybridni-architektura.png`, `detail_mobil_tabulka_specifikace.png` (3 670 px vysoká sekce), `detail_mobil_tabulka_platformy.png` (3 583 px), `detail_mobil_tabulka_faze-leadu.png`.
- Buňky obsahují celé seznamy oddělené jen zalomením řádku, bez odrážek (`detail_desktop_tabulka-a-taby_platformy.png`). Průměrná buňka má až 131 znaků, nejdelší 371.
- Tabulka „Co vaše platforma změří sama“ (e-shopy) říká totéž co taby hned pod ní.
- Záhlaví je v malém mono písmu v tyrkysové, takže se hůř čte než obsah.

**Pravidla (rozhodovací strom):**

| Obsah | Forma místo tabulky |
|---|---|
| Srovnání 2–3 variant podle 3–6 kritérií, krátké buňky (≤ 6 slov) | **ponechat tabulku**: ≤ 3 sloupce, ≤ 6 řádků; na mobilu se řádek zobrazí jako karta „kritérium: hodnota“ |
| Dvě varianty (A vs. B) | 2 karty vedle sebe, 3–5 bodů v každé; na mobilu pod sebou |
| Seznam položek s popisem (2 sloupce: název – popis) | seznam definic nebo karty |
| Checklist (release checklist, 12 kontrol) | zaškrtávací seznam, 5 bodů viditelně + „celý checklist ke stažení“ (lead magnet) |
| Kroky s výstupem a „co od vás“ | časová osa (`ProcessTimeline`) |
| Platformy, systémy, CRM | taby nebo čipy s 3 body „umí / chybí“ |
| Detailní referenční data (limity GA4, parametry, cookies, ceníky) | článek; na LP max. 3 nejdůležitější body |

**Technicky:**
- Responzivní tabulka na mobilu jako stacked layout: `display:block` řádků a `data-label` u buněk.
- Pokud tabulka na mobilu výjimečně musí scrollovat, přidat stínový gradient na pravém okraji a popisek „posuňte →“.
- Záhlaví psát Interem 14 px, kontrast ≥ 4,5 : 1.
- Seznamy v buňkách jako `<ul>` s odrážkami.

**Cíl:** z 67 tabulek nechat na celém webu ~7 (výběr v kap. 5: GTM #7, server-side #4, B2B #9, SLA na správě a velkých firmách, `/cookies`, sbalená tabulka přístupů na `/jak-pracujeme`).

### 3.3 Opakující se bloky a duplicity (P1–P2)

| Prvek | Kde | Problém | Úprava | Prio |
|---|---|---|---|---|
| Úvodní odstavec + box „Rychlá odpověď“ | všech 14 LP, `/sluzby`, `/o-nas`, `/kontakt`, `/jak-pracujeme` | Dva odstavce za sebou říkají totéž. Na mobilu je první obrazovka celá z textu, CTA z hero je až pod ohybem a vidět je jen sticky lišta „Napsat“ (`detail_mobil_lp_hero.png`) | Sloučit do jednoho odstavce o 2–3 větách (ten slouží i jako odpověď pro AI přehledy) a box zrušit | P1 |
| Taby „Co je jinak u e-shopu, B2B a velké firmy“ | 11 služeb + `/sluzby` | Celá sekce (~400–480 px) pro jediný odstavec v tabu, stejný vzor na každé stránce (`detail_desktop_taby_segmenty.png`) | Odstranit. Odkazy na řešení dát do pruhu „Pokračujte“ nebo do jedné věty v hero („Pro e-shopy · B2B · velké firmy“) | P1 |
| Taby „Kde s GA4 právě jste?“ a podobné | GA4, e-shopy | Jeden odstavec na tab (`detail_desktop_taby_kde-jste.png`) | Odstranit nebo vložit do bloku Postup | P1 |
| FAQ 10–12 otázek | všechny LP | ~900 px desktop / ~1 100 px mobil. FAQ rich results Google od 7. 5. 2026 nezobrazuje, takže dlouhé FAQ už nepřinese ani rozšířený výsledek ve vyhledávání | 5–6 otázek. Zbytek do článků; schema `FAQPage` musí odpovídat viditelným otázkám | P1 |
| „Články k tématu“ | GA4, BigQuery, Velké firmy | Odkazují na jediný starý článek (GA4 → BigQuery, 187 slov) | Sloučit do pruhu „Pokračujte“. Zobrazit až s novými články | P1 |
| „Navazující služby“ + „Související služby“ | všude | Samostatná sekce (~330 px desktop / ~510 px mobil) | Sloučit s články do jednoho pruhu | P2 |
| Postup spolupráce | HP (5 kroků), `/jak-pracujeme` (8), každá LP (5–7, jiné názvy) | Návštěvník vidí pokaždé jiný proces. Mřížka 5 sloupců s 6 nebo 8 kartami má osiřelé karty (`detail_desktop_osm-kroku.png`; totéž na server-side, e-shopy, dashboardy) | Jeden proces o 5 krocích: Audit → Měřicí plán → Implementace → Validace → Předání a podpora. Na `/jak-pracujeme` rozvést podkroky, na LP jen upravit popis kroku 3 | P2 |
| Kontaktní blok | všechny stránky kromě `/cookies`, `/zpracovani-osobnich-udaju` a `/dekujeme` (i blog) | 986 px desktop, **~1 750 px mobil**, 12 čipů témat | Kompaktní verze (kap. 6.3) | P2 |
| Trust bar pod hero | všechny LP | 3 body, např. „Vlastní hosting neprodáváme“ (je jako bod důvěry nesrozumitelný) | Zkrátit na 3 jasné benefity a zobrazit inline pod CTA | P3 |
| „Data Studio (dříve Looker Studio)“ | 7 stránek, opakovaně, a mega menu na každé stránce | Opakování | Vysvětlivku uvést jen při prvním výskytu na stránce | P3 |

### 3.4 Vizuální a komponentové chyby (P2)

| Chyba | Kde | Úprava |
|---|---|---|
| Mono štítky (`meta`, `itp`, `measurement-plan.xlsx`…) jsou roztažené přes celou šířku karty a vypadají jako vstupní pole | symptomy a „Co dostanete“ na všech LP (`detail_desktop_symptomy_stitky.png`, `detail_desktop_co-dostanete.png`) | `display:inline-block; width:auto` |
| Osiřelé karty v mřížce kroků | `/jak-pracujeme` (8 kroků), LP s 6 kroky | Mřížku řídit počtem karet (3 × 2), nebo časová osa |
| Roboto Mono v souvislém textu (boxy „výstup“, „od vás“, záhlaví tabulek, čipy formuláře, taby) | celý web | Mono jen pro kód, názvy událostí a krátké štítky do 3 slov. Věty psát v Interu – mono se hůř čte a zabírá o ~15 % víc místa |
| Odkazy „Měření pro e-shopy →“ mají jen 23 px výšky; odkazy v patičce 21 px, otázky FAQ 26 px | karty na HP, řešeních, `/jak-pracujeme` a `/o-nas`; patička a FAQ všude | Klikací plocha ≥ 44 px (padding), případně celá karta jako odkaz |
| Diagramy jako HTML boxy s dlouhými seznamy | BigQuery (`detail_desktop_diagram_bigquery.png`), B2B, velké firmy | V boxech max. 4 položky. Vysvětlující seznamy pod diagramem (např. „Co je dobré vědět o zdrojích“) přesunout do článku |
| „Ukázky dashboardů“ jako textové `pre` bloky | Dashboardy | Nahradit 2–3 skutečnými screenshoty nebo mockupy (anonymizovanými), s lightboxem (`gallery_open`) |

---

## 4. Mobilní rozložení

| # | Zjištění | Úprava | Prio |
|---|---|---|---|
| M1 | Podmenu **Služby** v mobilním menu se zobrazí ve 3 sloupcích. Třetí sloupec „Audity a správa“ je mimo obrazovku a nejde na něj kliknout (`detail_mobil_menu_sluzby.png`) | Na < 768 px jeden sloupec: skupiny jako nadpisy, položky pod sebou, bez popisků (jen název) | P1 |
| M2 | LP mají na mobilu **22–33 obrazovek**. Nejvíc zabírají symptomy (~2 000 px), tabulky (až 3 600 px na sekci), kontaktní blok (~1 750 px) a FAQ (~1 100 px) | Štíhlá šablona (3.1). Symptomy jako kompaktní seznam (ikona 24 px vlevo, nadpis, 1 věta) ≈ 600 px | P1 |
| M3 | První obrazovka LP je jen text (H1 + úvod + „Rychlá odpověď“), CTA z hero až pod ohybem (vidět je jen sticky „Napsat“) | Sloučení úvodu (3.3) – CTA bude v první obrazovce | P1 |
| M4 | Tabulky scrollují do strany bez nápovědy | Stacked layout (3.2) | P1 |
| M5 | Sticky lišta má jen „Napsat“ | Až bude telefon, přidat „Zavolat“ (zadání HP). Lišta nesmí překrýt cookie lištu ani tlačítko formuláře | P2 |
| M6 | HP: všech 6 symptomů pod sebou (2 295 px) | Podle zadání 3 + „Zobrazit další 3“, nebo vodorovný scroll-snap | P2 |
| M7 | HP: 5 kroků jako vysoké karty (1 523 px) | Kompaktní vertikální časová osa (číslo – název – výstup) | P2 |
| M8 | Cookie lišta zabírá ~45 % první obrazovky (3 tlačítka pod sebou) | Tlačítka „Odmítnout“ a „Přijmout“ vedle sebe (stejná váha), „Nastavení“ jako textové tlačítko, text na 2 řádky | P3 |
| M9 | Kontaktní formulář: 12 čipů zabírá ~400 px | 6–7 čipů (6.3) | P2 |

**V pořádku:** žádná stránka nepřetéká (`scrollWidth` = 390 px na všech 25 URL); písmo odstavců 17,6–20 px; 37–42 znaků na řádek; CLS 0.

---

## 5. Plán úprav po stránkách

Legenda:
- ✅ ponechat
- ✂️ zkrátit
- 🔀 sloučit
- 🔁 převést (tabulka → karty, seznam, taby)
- 🔽 sbalit do „Technické detaily“, dokud nevyjde článek
- ➡️ přesunout do článku (ID briefu z `06_clanky/`)
- ❌ odstranit

Čísla sekcí odpovídají pořadí na webu (`data/sekce_prehled.txt`). Řádky tabulek = datové řádky bez záhlaví; rozměr tabulky = sloupce × datové řádky. Závěrečné sekce (Navazující/Související služby, Kontakt) se všude řeší stejně podle kap. 3.3 a 6.3 – kde v tabulce chybí, platí: 🔀 do pruhu „Pokračujte“ a ✂️ kompaktní kontakt.

### 5.1 `/sluzby/implementace-ga4` – dnes 14 sekcí, 2 tabulky, 13,8 / 24,7 obrazovky

| # | Sekce dnes | Akce |
|---|---|---|
| hero | úvod + Rychlá odpověď | 🔀 jeden odstavec |
| 0 | Poznáváte se (6 karet) | ✂️ 4 karty |
| 1 | Co v GA4 nastavíme (22 odrážek) | 🔀 s #6 → „Co uděláme a co dostanete“ (6 karet) |
| 2 | Kde s GA4 právě jste? (taby) | ❌ (situace „začínáme / opravujeme / migrujeme“ jako 1 věta v Postupu) |
| 3 | Jak data tečou z webu do GA4 a dál (diagram) | ✅ hlavní vizuál |
| 4 | Opravit stávající GA4, nebo založit novou? (tabulka) | 🔁 blok Rozhodnutí: 2 karty „Opravíme, když…“ / „Založíme novou, když…“ |
| 5 | Na jaké limity GA4 myslíme dopředu (tabulka 10 řádků) | ➡️ D1 (Nastavení GA4 krok za krokem); na LP 🔽 3 body |
| 6 | Co od nás dostanete (8 karet) | 🔀 viz #1 |
| 7 | Jak implementace probíhá | 🔁 jednotný Postup |
| 8 | Co je jinak u e-shopu… | ❌ |
| 9 | Firemní školení GA4 (2 karty) | 🔀 1 karta „Volitelně: školení“ v Co dostanete |
| 10 | FAQ (12) | ✂️ 6 |
| 11–12 | Články k tématu, Navazující služby | 🔀 pruh „Pokračujte“ (D1, D2, D3 až vyjdou) |
| 13 | Kontakt | ✂️ kompaktní |

### 5.2 `/sluzby/google-tag-manager` – 14 sekcí, **8 tabulek**

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Poznáváte svůj Tag Manager? | ✂️ 4 karty |
| 1 | Nastavení, audit, nebo správa? (taby) | ✅ jádro stránky; každý tab 4 odrážky |
| 2 | Pravidla, díky kterým GTM zůstane v pořádku (3 tabulky) | ➡️ C4 (Audit GTM kontejneru); na LP 1 karta s ukázkou pojmenování (`GA4 – event – purchase`) + 3 pravidla |
| 3 | Jak přesuneme kódy z webu do GTM (tabulka) | 🔁 3 kroky „paralelní běh → porovnání → vypnutí“ uvnitř Postupu |
| 4 | Jak v GTM nastavujeme souhlas (tabulka) | ✂️ 2 věty + odkaz na LP Consent; tabulka ➡️ A1 |
| 5 | GTM, který web nezpomaluje (6 karet) | ✂️ 3 body v Co dostanete; detail ➡️ H3 |
| 6 | Co se děje uvnitř kontejneru (diagram) | ✅ hlavní vizuál |
| 7 | Kde mají měřicí kódy žít? (tabulka) | ✅ **jediná tabulka stránky** (max. 4 řádky, mobil = karty) |
| 8 | Co od nás dostanete (tabulka) | 🔁 6 karet |
| 9 | Jak spolupráce probíhá (tabulka) | 🔁 jednotný Postup |
| 10 | Co je jinak… | ❌ |
| 11 | FAQ (11) | ✂️ 6 |
| 12–13 | Navazující, Kontakt | 🔀 / ✂️ |

### 5.3 `/sluzby/datova-vrstva` – 14 sekcí, 16,9 / 28,5 obrazovky

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Proč měření nefunguje (6 karet) | ✂️ 4 |
| 1 | Co ve specifikaci navrhneme (6 karet) | 🔀 s #9 |
| 2 | Jak vypadá specifikace (2 tabulky, 28 řádků, 2 668 px) | 🔁 1 ukázka (obrázek nebo mockup 5 řádků specifikace) + **šablona ke stažení** (lead magnet z briefu C1); plná struktura ➡️ C1/C2 |
| 3 | Ukázka `dataLayer.push` (3 bloky kódu) | ✂️ 1 blok (`purchase`) s taby pro další, sbalený |
| 4 | Jak ověříme, že datová vrstva funguje (tabulka + kód) | 🔀 do Postupu (krok Validace, 4 body) |
| 5 | Jak spolupracujeme s vývojáři (14 odrážek) | ✂️ 3 body v Postupu |
| 6 | Kde datová vrstva v měření sedí (diagram) | ✅ hlavní vizuál – **posunout hned za symptomy** |
| 7 | Scraping, integrace platformy, nebo vlastní datová vrstva? (tabulka) | 🔁 Rozhodnutí: 3 karty |
| 8 | Na čem je váš web? (5 karet platforem) | 🔁 řádek čipů s odkazem na `/reseni/e-shopy#platformy` |
| 9 | Co od nás dostanete (8) | 🔀 6 karet |
| 10 | Co je jinak… | ❌ |
| 11 | FAQ (12) | ✂️ 6 |

### 5.4 `/sluzby/server-side-tracking` – 15 sekcí, 6 tabulek, 17,5 / 30,6 obrazovky

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Poznáváte se (6) | ✂️ 4 |
| 1 | Co server-side vyřeší – a co ne (+ právní box) | ✅ jako Rozhodnutí: 2 sloupce ✓/✗ po 5 bodech; právní box 1 věta + odkaz na A5 |
| 2 | Jak funguje: client-side vs. server-side (diagram + tabulka 9 řádků) | ✅ diagram; tabulku ❌ (hlavní rozdíly jsou ve 3 bodech pod diagramem) |
| 3 | Hybridní architektura (tabulka 5 × 7) | ➡️ **B2** (propojení client-side a server-side); na LP 1 věta + odkaz |
| 4 | Kde server poběží (tabulka 5 × 8) | ✅ **jediná tabulka stránky**, zkrácená na 3 sloupce × 5 řádků (Google Cloud ve vašem projektu vs. spravovaný hosting), na mobilu karty – viz prototyp; detail ➡️ B3 |
| 5 | Kolik stojí provoz (tabulka + box) | 🔁 1 box se 3 čísly a zdrojem; detail ➡️ B3 |
| 6 | Google Tag Gateway, nebo sGTM? (tabulka) | ➡️ B4; na LP 1 otázka ve FAQ |
| 7 | Kdy server-side nenasazovat (tabulka) | 🔀 do #1 (sloupec ✗) |
| 8 | Co od nás dostanete (9) | ✂️ 6 |
| 9 | Jak nasazení probíhá (6 kroků) | 🔁 jednotný Postup |
| 10 | Jak poznáte, že funguje | ✅ jako blok Důkaz (4 body) |
| 11 | Co je jinak… | ❌ |
| 12 | FAQ (10) | ✂️ 6 |

Ukázka cílové podoby je v prototypu `prototyp/lp-server-side-stihla.html` (kap. 11).

### 5.5 `/sluzby/cookie-lista-consent-mode` – **17 sekcí**, 19,2 / 32,2 obrazovky (nejdelší služba)

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | „Cookie lištu přece máme.“ | 🔀 do hero / symptomů |
| 1 | Do které kategorie patří váš web? (5 karet, 262 slov) | ✂️ jako symptomy: 4 karty po 1 větě |
| 2 | Co pro vás uděláme (8 odrážek) | 🔀 s #11 → 6 karet |
| 3 | Jak souhlas putuje od lišty k tagům (diagram) | ✅ hlavní vizuál |
| 4 | Consent Mode v2: basic, nebo advanced? (2 tabulky, 15 řádků) | 🔁 Rozhodnutí: 2 karty basic / advanced po 3 bodech; tabulky ➡️ A1 |
| 5 | Jakou cookie lištu zvolit (tabulka 5 × 8) | ➡️ A4; na LP 3 krátké karty (mezinárodní CMP, česká CMP, vlastní) |
| 6 | Napojení na GTM (kód + odrážky) | ➡️ A1/C3; na LP 🔽 |
| 7 | Co váš web posílá před souhlasem (tabulka + karty + kód) | ✅ jako Důkaz: 1 vizuál „před souhlasem / po souhlasu“ (DevTools mockup); tabulka ➡️ A1, A6 |
| 8 | Co souhlas udělá s daty | ➡️ A6; na LP 1 věta |
| 9 | Sklik a Seznam: jak předat souhlas | ➡️ B6; na LP 1 bod v Co dostanete |
| 10 | Co říká zákon, ÚOOÚ a Google (tabulka, buňky až 260 znaků, 2 boxy) | 🔁 „3 věci, které říká zákon“ (3 karty) + upozornění „nejde o právní radu“ + odkaz na A2 |
| 11 | Co od nás dostanete (16 odrážek) | 🔀 viz #2 |
| 12 | Jak to probíhá | 🔁 jednotný Postup |
| 13 | Co je jinak… | ❌ |
| 14 | FAQ (11) | ✂️ 6 |

### 5.6 `/sluzby/mereni-konverzi` – 13 sekcí, 6 tabulek

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Které z toho znáte? | ✂️ 4 |
| 1 | Jedna objednávka, jeden zdroj, všechny systémy (diagram) | ✅ hlavní vizuál |
| 2 | Co nastavíme v jednotlivých systémech (tabulka 5 × 9 **i** 6 tabů) | ❌ tabulka (duplicita), ✅ taby Meta / Google Ads / Sklik a SEM / Seznam Nákupy / Heureka / „TikTok, LinkedIn, Microsoft“, 3 body každý |
| 3 | Jak vypadá dobře nastavená Meta (tabulka + karty + kód) | ➡️ B5; na LP 2 věty v tabu Meta |
| 4 | Stejné ID, stejná hodnota, jedna konverze (2 tabulky) | 🔁 1 vizuální pruh „objednávka 1234 → `transaction_id` / `event_id` → 1 konverze v každém systému“; tabulky ➡️ E2, B5 |
| 5 | Proč se čísla mezi systémy liší (2 tabulky, 391 slov) | ➡️ **D2** (Proč nesedí čísla); na LP 4 důvody v odrážkách + odkaz |
| 6 | Jak poznáte, že měření funguje | ✅ Důkaz |
| 7 | Co od nás dostanete (9) | ✂️ 6 |
| 8 | Jak nastavení probíhá | 🔁 Postup |
| 9 | Co je jinak… | ❌ |
| 10 | FAQ (12) | ✂️ 6 |

### 5.7 `/sluzby/bigquery` – 14 sekcí

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Poznáváte se (6) | ✂️ 4 |
| 1 | Co postavíme (6 karet) | 🔀 s #7 |
| 2 | Architektura (diagram + 24 odrážek, 1 box a 3 poznámky k diagramu) | ✅ diagram (max. 4 položky v boxu); „Co je dobré vědět o zdrojích“ ➡️ F1/F3 |
| 3 | Jak vypadá práce s daty (tabulka + SQL) | 🔽 1 SQL ukázka sbalená; tabulka ➡️ F2 |
| 4 | Co vám dá BigQuery navíc oproti GA4 (tabulka 10 řádků) | 🔁 Rozhodnutí: „Co v rozhraní GA4 nejde“ – 5 bodů ve 2 sloupcích |
| 5 | Čím budeme data transformovat (tabulka) | ➡️ F3 |
| 6 | Kolik stojí provoz (tabulka) | 🔁 box se 3 čísly + odkaz ➡️ F5 |
| 7 | Co dostanete (8) | 🔀 6 karet |
| 8 | Jak postupujeme | 🔁 Postup |
| 9 | Co je jinak u e-shopu, velké firmy a B2B | ❌ |
| 10 | FAQ (11) | ✂️ 6 |
| 11–12 | Články, Navazující | 🔀 pruh |

### 5.8 `/sluzby/dashboardy-a-reporting` – 15 sekcí

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Kdy je čas na nový reporting | ✂️ 4 |
| 1 | Ukázky dashboardů (6 karet s textovými mockupy) | 🔀 s #5 → **galerie 4 typů dashboardů** (obrázek + 2 věty), to je hlavní vizuál stránky |
| 2 | Jak stavíme dashboard (6 karet) | 🔀 do Postupu |
| 3 | Odkud čísla pocházejí (diagram) | ✅ zkrátit |
| 4 | Report, který sedí s účetnictvím (tabulka + odrážky) | 🔁 1 karta s příkladem odsouhlasení (3 řádky čísel); zbytek ➡️ F4/G3 |
| 5 | Čtyři typy dashboardů (tabulka 6 × 4) | 🔀 do #1 |
| 6 | Data Studio, nebo Power BI? (tabulka 11 řádků) | 🔁 2 karty po 3 bodech; detail ➡️ G2 |
| 7 | Přímé konektory, nebo BigQuery? | ➡️ G1; na LP 1 otázka ve FAQ |
| 8 | Reporting, který běží sám (4 karty) | 🔀 do Co dostanete |
| 9 | Co dostanete | 🔀 6 karet |
| 10 | Postup | 🔁 |
| 11 | Co je jinak… | ❌ |
| 12 | FAQ (12) | ✂️ 6 |

### 5.9 `/sluzby/audit-mereni` – 11 sekcí, 5 tabulek

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Kdy se audit vyplatí | ✂️ 4 |
| 1 | Co kontrolujeme (6 tabů, 28 odrážek) | ✅ jádro; 4 body na tab |
| 2 | Jak audit probíhá | 🔀 s #6 → Postup |
| 3 | Jak vypadá report z auditu (3 tabulky) | 🔁 1 mockup výřezu reportu (5 nálezů s prioritou A/B/C) jako obrázek; ➡️ H2 |
| 4 | Rychlá kontrola zdarma, nebo celý audit? (tabulka) | ✅ **posílit**: 2 karty se dvěma CTA (rychlá kontrola = lead magnet) |
| 5 | Co od nás dostanete (7) | ✂️ 5 |
| 6 | Kroky auditu a co od vás potřebujeme (tabulka 10 řádků) | 🔀 do Postupu |
| 7 | Na co se zaměříme u e-shopu… | ❌ |
| 8 | FAQ (12) | ✂️ 6 |

### 5.10 `/sluzby/technicky-audit-webu` – 13 sekcí

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Kdy dává technický audit smysl | ✂️ 4 |
| 1 | Technický audit, ne SEO kampaň | ✅ Rozhodnutí ✓/✗ (4 + 4) |
| 2 | Co audit kontroluje: šest oblastí (taby) | ✅ jádro |
| 3 | Kde se potkává rychlost a měření (13 odrážek) | ➡️ H3; na LP 2 věty v tabu „Výkon a Core Web Vitals“ |
| 4 | Jak vypadá výstup (tabulka 7 × 7 + kód) | 🔁 mockup výstupu (obrázek) |
| 5 | SEO audit, technický audit, nebo audit měření? (tabulka 12 řádků) | 🔁 3 karty „Potřebujete, když…“ s odkazy |
| 6 | Co dostanete | ✂️ 5 karet |
| 7 | Jak audit probíhá | 🔁 Postup |
| 8 | Analýza webu zdarma: co si zkontrolujete sami | ✅ jako lead magnet (checklist ke stažení), max. 5 bodů |
| 9 | Co je jinak… | ❌ |
| 10 | FAQ (11) | ✂️ 6 |

### 5.11 `/sluzby/sprava-webu-a-mereni` – 14 sekcí

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Znáte to? | ✂️ 4 |
| 1 | Čím se lišíme od běžné správy (tabulka 12 řádků) | 🔁 2 sloupce „běžná správa / naše správa“ po 5 bodech |
| 2 | Co hlídáme: tři moduly | ✅ jádro (3 karty) |
| 3 | Jak hlídání funguje (diagram) | ✅ zkrátit |
| 4 | Release checklist: 12 kontrol (tabulka) | 🔁 5 bodů + celý checklist ke stažení |
| 5 | Měsíční report kvality dat (tabulka + 6 karet) | 🔀 s #7 → 1 mockup reportu |
| 6 | SLA (tabulka) | ✅ malá tabulka (3 řádky) – **čeká na SLA od klienta** |
| 7 | Co dostáváte každý měsíc | 🔀 viz #5 |
| 8 | Jak začínáme | 🔁 Postup |
| 9 | Z čeho se skládá cena | 🔀 do FAQ „Jak se tvoří cena“ |
| 10 | Co je jinak… | ❌ |
| 11 | FAQ (10) | ✂️ 6 |

### 5.12 `/reseni/e-shopy` – 14 sekcí, **4 760 slov, 33 obrazovek na mobilu** (nejdelší stránka webu)

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Poznáváte se (6) | ✂️ 4 |
| 1 | Kde je váš e-shop teď? (4 taby) | 🔀 s #4 a #6 → **jeden „žebřík“ 4 úrovní** (Základ → Spolehlivé konverze → Marže → Jeden report), u každé úrovně 2 řádky a doporučený přístup (nativní / GTM / server-side) |
| 2 | Z čeho se skládá kompletní měření (8 karet, 408 slov) | ✅ jako rozcestník služeb: 8 karet, 1 věta + odkaz |
| 3 | Jak data tečou z e-shopu do reportu (diagram + kód + 14 odrážek) | ✅ diagram; kód a odrážky ❌ |
| 4 | Čtyři úrovně měření (tabulka, buňky až 206 znaků) | 🔀 viz #1 |
| 5 | Co vaše platforma změří sama (tabulka + 6 tabů, 630 slov, 3 583 px na mobilu) | ❌ tabulka (duplicita), ✅ taby Shoptet / Upgates / Shopify / WooCommerce / PrestaShop / vlastní – „umí“ 3 body, „chybí“ 3 body; detail ➡️ D4 |
| 6 | Nativní integrace, GTM, nebo server-side? (tabulka) | 🔀 do žebříku #1 |
| 7 | Proč marži nikdy neposíláme do prohlížeče | ✅ výrazný box (odlišuje nás od konkurence), 3 věty + mini diagram |
| 8 | Co od nás dostanete (9) | ✂️ 6 |
| 9 | Jak postupujeme | 🔁 Postup |
| 10 | Jak poznáte, že měření funguje (10 odrážek) | ✂️ 5 – Důkaz |
| 11 | FAQ (12) | ✂️ 6 |
| 12–13 | Související, Kontakt | 🔀 / ✂️ |

### 5.13 `/reseni/b2b-a-lead-generation` – 15 sekcí, 6 tabulek

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Poznáváte se (6) | ✂️ 4 |
| 1 | Jak to funguje: od kliknutí po zakázku (diagram, 19 odrážek) | ✅ hlavní vizuál, max. 5 uzlů |
| 2 | Co přesně nastavíme (7 karet, 383 slov) | 🔀 s #10 → 6 karet |
| 3 | Mapa fází leadu (tabulka 6 × 7) | 🔁 vodorovná časová osa lead → kvalifikovaný → nabídka → zakázka, u každé fáze „kam to posíláme“; tabulka ➡️ E3 |
| 4 | Co když obchod trvá týdny nebo měsíce? (4 karty) | ✂️ 2 věty + odkaz ➡️ E3 |
| 5 | Reporting pipeline (tabulka 8 × 5) | 🔁 1 mockup „cena leadu vs. cena zakázky“; ➡️ G3 |
| 6 | Napojení CRM (tabulka) | 🔁 řádek logotypů/čipů (HubSpot, Salesforce, Pipedrive, Raynet) s 1 větou |
| 7 | Call tracking (tabulka) | ➡️ E5; na LP 1 bod |
| 8 | Osobní údaje: co posíláme a co nikdy | ✅ 3 body (důvěra) + odkaz A3 |
| 9 | Běžné měření leadů vs. měření do CRM (tabulka) | ✅ **jediná tabulka stránky**, max. 5 řádků |
| 10 | Co od nás dostanete (tabulka) | 🔀 viz #2 |
| 11 | Jak postupujeme | 🔁 Postup |
| 12 | FAQ (12) | ✂️ 6 |

### 5.14 `/reseni/velke-firmy` – **17 sekcí**, 17,9 / 31,9 obrazovky

| # | Sekce dnes | Akce |
|---|---|---|
| 0 | Poznáváte se? | ✂️ 4 |
| 1 | Governance měření (6 karet, 330 slov) | ✅ jádro, karty po 1 větě |
| 2 | Architektura pro více trhů (diagram, 21 odrážek) | ✅ diagram, zkrátit |
| 3 | Více domén a trhů (tabulka) | 🔽 / ➡️ (nový článek nebo whitepaper „Měření pro více trhů“) |
| 4 + 5 | Server-side na vašem Google Cloudu + BigQuery a data residency | 🔀 „Infrastruktura ve vašem cloudu, data v EU“ – 2 karty |
| 6 | Bezpečnost a soulad (tabulka) | 🔁 checklist pro nákup a IT (5 bodů: zpracovatelská smlouva, IAM, logy, lokalita dat, odchod) + **bezpečnostní one-pager ke stažení** |
| 7 | Spolupráce s IT (tabulka 6 × 10 + kód) | ✂️ 4 body (Git, review, testovací prostředí, release); tabulka ➡️ C4 |
| 8 | SLA a podpora (tabulka + 3 karty) | ✅ zkrátit – **čeká na SLA** |
| 9 | Předání a zaškolení | 🔀 do Co dostanete |
| 10 | Potřebujete GA 360? (tabulka 11 řádků) | ➡️ nový článek „GA4 vs. GA4 360“; na LP 1 otázka ve FAQ |
| 11 | Co od nás dostanete (tabulka) | 🔁 6 karet |
| 12 | Jak postupujeme u velkého projektu | 🔁 Postup |
| 13 | FAQ (12) | ✂️ 6 |
| 14–15 | Články, Související | 🔀 pruh |

### 5.15 Ostatní stránky

| Stránka | Zjištění | Úprava | Prio |
|---|---|---|---|
| `/sluzby` (rozcestník) | Tabulka „Nejčastější situace a čím začít“ (11 řádků); taby segmentů; „Pět kroků“ duplikuje HP | 🔁 tabulku na seznam „symptom → služba“ (vzor symptomů z HP, 6–8 položek); kroky ❌ a nahradit odkazem na `/jak-pracujeme`; taby segmentů ❌ | P2 |
| `/jak-pracujeme` | 8 kroků v mřížce 5 + 3; tabulka přístupů 9 řádků; sekce „Jak měříme vlastní web“ (437 slov, 1 611 px) | 5 kroků s podkroky (3.3); tabulku přístupů 🔽 sbalit; „Jak měříme vlastní web“ zkrátit na 4 body + odkaz na důkaz v DevTools – a **ponechat až po nasazení GTM na produkci** | P2 |
| `/o-nas` | Stránka „Kdo stojí za…“ **nemá fotku, praxi, certifikace, LinkedIn ani firemní údaje**. Mluví v množném čísle, přitom je podepsaná jedním jménem. „Jak zacházíme s daty“ a „Co od vás budeme potřebovat“ duplikují `/jak-pracujeme` | Doplnit blok osoby (fotka, 3–4 věty praxe, nástroje a certifikace, LinkedIn); sjednotit „my/já“ podle reality; duplicitní sekce zkrátit na odkaz | P1 (osoba) / P2 |
| `/kontakt` | Formulář je až na konci (po „Co se stane“, „Jak se připravit“, FAQ, Související službách). Hero má CTA „Napsat zprávu“, které skočí dolů | Formulář hned pod H1 (2 sloupce: formulář + e-mail/telefon/„co se stane po odeslání“); „Související služby“ ❌; FAQ 3 otázky | P2 |
| `/blog`, články | Viz kap. 7.3 | | P1 |
| `/dekujeme` | `noindex`, není v sitemapě ✅ | Přidat 2–3 odkazy (jak pracujeme, články) | P3 |
| `/cookies` | Tabulka cookies OK | Doplnit cookies Seznamu (`sid`, `udid`), pokud se nasadí Sklik nebo SEM; seznam musí odpovídat tagům v GTM | P2 |

---

## 6. Homepage, formulář, kontaktní blok

### 6.1 Homepage (soulad s `04_homepage-ux/`)

| Sekce | Stav | Úprava | Prio |
|---|---|---|---|
| 1 Hero | ✅ beze změny vizuálu; nový nadtitulek a podtitul, „Meta CAPI“, 2. CTA → `/jak-pracujeme` | Hero neměnit (zadání). Jen technická poznámka: LCP (H1) na desktopu 1,9–2,1 s i bez zpomalení sítě (u LP 0,6–0,9 s), zřejmě kvůli vstupní animaci. Zkrátit nebo zrušit zpoždění animace, výsledný vzhled zůstane stejný | P2 |
| 2 Pro koho | ✅ 3 karty se štítky platforem | – | – |
| 3 Poznáváte se? | ✅ 6 „konzolí“ se symptomy, poznámka „ilustrativní“ | Mobil: 3 + „Zobrazit další“ (M6) | P2 |
| 4 Služby jako pipeline | ✅ 3 vrstvy, vlastní piktogramy | – | – |
| 5 Ověřte si nás | ✅ správně skryto | Zapnout až poběží GTM a consent na produkci a nativní formulář s `generate_lead` | později |
| 6 Jak pracujeme | ✅ 5 kroků s výstupy | Chybí délky (od klienta); na mobilu kompaktně (M7) | P2 |
| 7 S čím pracujeme | ✅ čipy s odkazy | – | – |
| 8 Do hloubky | ⚠️ 2 karty se starými články z 2025 (~190 slov), 3. místo prázdné (`detail_desktop_hp_do-hloubky.png`) | **Skrýt, dokud nevyjdou ≥ 3 pilířové články** (A1, B1, D2) | P1 |
| 9 FAQ | ✅ 5 otázek | – | – |
| 10 Kontakt | ✅ nativní | Chybí telefon a fotka (VN iniciály), kompaktní verze (6.3) | P2 |

### 6.2 Formulář (soulad s `05_formulare/`)

| Bod specifikace | Stav |
|---|---|
| Pole: jméno*, e-mail*, telefon, web, témata (čipy), zpráva*, honeypot `website` (`aria-hidden`, `tabindex=-1`), skryté `form_id` / `lead_type` / `page` | ✅ |
| Informační věta místo checkboxu se souhlasem + odkaz na zásady | ✅ |
| Čipy předvybrané podle stránky (GA4 na LP GA4, Server-side na LP server-side) | ✅ |
| Funguje i bez JS (`method="post"` na vlastní URL), `/dekujeme` s `noindex` | ✅ |
| `lead_form_start` (`form_id`, `form_location`) | ✅ ověřeno v Chrome |
| Validace při odeslání, `lead_form_error`, `generate_lead` s hashem jen se souhlasem | ⚪ v kódu je, **neotestováno odesláním** (testovací odeslání by poslalo poptávku do ostrého systému) |
| Cloudflare Turnstile | ⚠️ **na stagingu se nenačte ani po interakci** – chybí sitekey nebo je vypnutý. Ověřit na produkci |
| Telefon a „Zavolejte“ v kontaktním bloku | ❌ čeká na klienta |

**Doporučený test na produkci (klient, 10 minut):**
1. Odeslat prázdný formulář – musí se zobrazit chyby pod poli a fokus musí skočit na první chybné pole.
2. Odeslat platný formulář s odmítnutými cookies – v `dataLayer` musí být `generate_lead` **bez** `user_data`.
3. Totéž s přijatými cookies – `user_data` s poli `sha256_*`.
4. Ověřit, že dorazí e-mail a záznam ve Firestore.
5. Otestovat bez JS.

### 6.3 Kompaktní kontaktní blok (P2)
- **Čipy témat z 12 na 6–7:** GA4 a Tag Manager · Server-side · Cookie lišta a consent · Konverze a reklamy · BigQuery a reporting · Audit · Jiné. Dnešních 12 položek kopíruje strukturu menu, ne to, jak klient o problému mluví.
- Na mobilu nejdřív povinná pole (jméno, e-mail, zpráva), potom „+ Přidat telefon a web“ (rozbalit).
- Levý sloupec: e-mail, telefon, fotka a 1 věta „Odpovídá Vít Novotný“; pod formulářem 3 kroky „co se stane po odeslání“ (dnes jen na `/kontakt`).
- Cílová výška: desktop ≤ 750 px, mobil ≤ 1 200 px (dnes 986 / ~1 750).

### 6.4 Stránka `/kontakt`
Viz 5.15 – formulář nahoru, ostatní pod něj.

---

## 7. Měření, consent a obsah blogu

### 7.1 Consent a `dataLayer` (ověřeno v Chrome a Playwrightu)
- ✅ `consent default` (vše `denied` kromě `functionality` a `security`, `wait_for_update: 500`), `ads_data_redaction`, `url_passthrough`.
- ✅ Volba z cookie `dl_consent` se aplikuje už v `<head>` (`cookie_consent_loaded`); po kliknutí na liště `consent update` + `cookie_consent_update`.
- ✅ Lišta: „Odmítnout vše“, „Nastavení“ a „Přijmout vše“ mají stejnou váhu; „Nastavení cookies“ je v patičce.
- ✅ Události: `cta_click` (`cta_id`, `section`), `contact_click`, `faq_open`, `tab_select`, `code_copy`, `lead_form_start` – ověřeno kliknutím.
- ⚠️ `scroll_depth` v kódu není → nastavit v GTM (spouštěč hloubky posouvání 25/50/75/90), nebo vyřadit ze specifikace.
- ⚠️ **GTM se na stagingu nenačítá** (`gtmId` z env je prázdné). Pořadí „consent default → gtm.js“ je v kódu správně. Na produkci:
  1. nastavit `GTM_ID`;
  2. v GTM Preview ověřit, že žádný tag nevystřelí před volbou;
  3. ověřit, že se GA4 a Ads řídí souhlasem.

  Texty na `/jak-pracujeme` a `/o-nas` („Na datalayer.cz běží…“, „gtm.js až za ním“) platí až potom.
- ⚠️ Server-side GTM zatím neběží – web to správně uvádí („zatím neběží“). Při spuštění sGTM doplnit do zásad zpracování a do `/jak-pracujeme`.

### 7.2 Technické SEO
- **P1:** Odstranit `X-Robots-Tag: noindex, nofollow`, který staging posílá na všech stránkách. Na produkci nesmí zůstat. Totéž Basic Auth.
- **P1:** `http → https` jako **301** (dnes 302).
- **P1 (spolu s přestavbou LP):** schema `FAQPage` musí obsahovat jen zobrazené otázky. Rich results se už neukazují, takže je to volitelné; stačí, když schema nebude odporovat stránce.
- **P2:** `sitemap.xml`: `lastmod` má u 23 z 24 URL datum buildu (2026-10-09), `/blog` žádné. Generovat z data poslední změny obsahu, jinak Google údaj ignoruje.
- **P2:** `Organization`: doplnit `address`, `telephone`, `sameAs` (LinkedIn), `founder` (Person) – až od klienta.
- **P3:** OG obrázek je pro všechny stránky stejný (`/og/default.png`). Obrázek pro každou službu (piktogram + H1).

### 7.3 Blog (P1)
Dnes jsou na blogu 2 články:
- `/blog/ga4-bigquery-export` (187 slov);
- `/blog/server-side-gtm-uvod` (199 slov).

Jsou z 1–2/2025 a zobrazují „aktualizováno 9. 10. 2026“, což je datum buildu, ne skutečné úpravy. HP a blog je představují jako „návody s diagramy, kódem a odkazy na dokumentaci“ a 3 LP odkazují na jeden z nich v sekci „Články k tématu“.

**Varianty:**
- **A (doporučeno):** před spuštěním vydat 3 pilíře z plánu (např. **D2** Proč nesedí čísla, **A1** Consent Mode v2, **B1** Server-side tracking). `/blog/server-side-gtm-uvod` přesměrovat 301 na URL článku B1 (`/blog/server-side-tracking-pruvodce`). `/blog/ga4-bigquery-export` přepsat podle briefu **F1** (stejná URL) – buď hned, nebo do té doby `noindex`.
- **B:** do vydání nových článků oba staré dát `noindex`, sekce „Do hloubky“ a „Články k tématu“ skrýt a blog nechat v menu jen s textem „první články připravujeme“. To je méně vhodné, protože web pro experty bez obsahu působí nedotaženě.

Opravit logiku `dateModified` a „aktualizováno“ (P1, s blogem): zobrazit jen při skutečné změně textu. V boxu „Tip“ v článku nahradit `h5` za `p` nebo `strong` (axe: pořadí nadpisů).

---

## 8. Právní a důvěryhodnostní náležitosti (P1)

| Zjištění | Úprava |
|---|---|
| Na webu chybí **identifikace provozovatele** (jméno nebo firma, IČO, sídlo, případně zápis v rejstříku). Zásady zpracování uvádějí jen „provozovatel webu datalayer.cz“ | Doplnit do patičky, na `/o-nas` a do `/zpracovani-osobnich-udaju` (čl. 13 GDPR – totožnost a kontakt správce; § 435 občanského zákoníku – údaje podnikatele na webu) |
| Zásady zpracování uvádějí Seznam.cz jako příjemce, ale tabulka cookies neuvádí cookies Seznamu | Sladit seznam cookies se skutečně nasazenými tagy |
| Tvrzení „Cloudflare Turnstile cookies neukládá“ | Ověřit v aktuální dokumentaci Cloudflare před spuštěním |
| Právní texty (consent LP, zásady) | Doporučená revize advokátem – viz `08_kontrola/kontrola-kvality.md`, kap. 4.6 (a kap. 5 – tvrzení k ručnímu ověření) |
| Chybí fotka, praxe a LinkedIn osoby, která „odpovídá přímo“ | Doplnit (kontaktní blok, O nás, autor článků v `BlogPosting`) |

---

## 9. Přístupnost a výkon

### 9.1 Přístupnost (axe-core, 5 stránek × 2 viewporty)
| Zjištění | Dopad | Úprava | Prio |
|---|---|---|---|
| Bílý text na oranžové `#ff7400` = **2,71 : 1** (CTA v menu i v hero, „Odeslat zprávu“, sticky „Napsat“, skip-link) | serious, na všech stránkách | **Tmavý text `#020d1e` na oranžové = 7,18 : 1** (vizuál zůstane oranžový). Pokud má zůstat bílý text: oranžová `#b84f00` (5,05 : 1) | P1 |
| `aside` (boxy `lp-callout`) uvnitř jiného landmarku; tabulky s `role=region` mají všechny stejný `aria-label="Tabulka"` | moderate | Boxy jako `div` s `role="note"`; `aria-label` podle nadpisu tabulky | P3 |
| Sticky lišta mimo landmark | moderate | Obalit do `<nav aria-label="Rychlý kontakt">` | P3 |
| `pre` s posuvníkem není dosažitelný klávesnicí | serious (e-shopy) | `tabindex="0"` u `pre` | P3 |
| Klikací text 23 px vysoký | – | Klikací plocha 44 px | P2 |

V pořádku: skip-link, `lang="cs"`, `aria-selected` / `aria-controls` u tabů, `details/summary` u FAQ, popisky polí formuláře, kontrast šedých textů (`#8b949e` na `#020d1e` = 6,3 : 1).

### 9.2 Výkon (Playwright, bez zpomalení sítě – orientačně)
- 1 host (vlastní doména), ~373 kB přenos na stránku, Brotli, `immutable` cache u assetů, CLS 0 na mobilu (desktop ≤ 0,02), LCP služeb 0,6–0,9 s.
- ⚠️ HP: LCP (H1) 1,9–2,1 s na desktopu – animace (6.1). Podobně `/blog/server-side-gtm-uvod` (2,1 s).
- ⚠️ Celý `bootstrap.min.css` (231 kB, 33 kB Brotli) blokuje vykreslení → PurgeCSS, nebo jen grid a utility (P3).
- ⚠️ HTML služby má 105–143 kB (~30 kB Brotli) a 900–1 230 DOM uzlů. Obsah je v HTML i v hydratačních datech. Zeštíhlení LP sníží obojí přibližně na polovinu.
- ❗ Na produkci změřit PageSpeed Insights (mobil) **po zapnutí GTM** – GTM s tagy bude největší položka.
- P3: CSP hlavička (po nasazení GTM, s `nonce` pro inline consent skript).

---

## 10. Co zůstává (neměnit)

- Hero na HP (zadání klienta).
- URL architektura, přesměrování, kanonizace, sitemap, robots, hlavičky.
- Cookie lišta, Consent Mode v2 a pořadí skriptů.
- Nativní formulář včetně předvybraných čipů podle stránky a `lead_form_start`.
- Vlastní piktogramy, symptomy na HP, pipeline služeb, čipy platforem.
- Jazyk textů: konkrétní, bez marketingových frází. Poctivé hranice služeb („co server-side nevyřeší“, „kdy nenasazovat“). Rozhodovací bloky jsou silná stránka – zkracujeme je, nerušíme.
- Žádné cizí domény, žádný Font Awesome ani HubSpot.

---

## 11. Prototyp štíhlé LP

`prototyp/lp-server-side-stihla.html` (+ `lp-server-side-stihla_desktop.png`, `lp-server-side-stihla_mobil.png`) ukazuje šablonu z kap. 3.1 na stránce `/sluzby/server-side-tracking`, s texty převzatými z webu a zkrácenými. Prototyp předvádí:
- hero s jedním úvodem;
- 4 symptomy;
- ✓/✗ rozhodnutí;
- 1 diagram;
- jednu srovnávací tabulku, která se na mobilu skládá do karet;
- 6 výstupů s inline štítky;
- jednotný postup;
- FAQ (6);
- pruh „Pokračujte“;
- kompaktní kontakt.

### 11.1 Dnešní stránka vs. prototyp

| Ukazatel | `/sluzby/server-side-tracking` dnes | Prototyp |
|---|---:|---:|
| Slova vč. sbalených FAQ (a u prototypu i technických detailů) | ~3 800 | ~1 150 |
| Viditelná slova (bez sbaleného obsahu) | ~3 000 | ~1 070 |
| Sekcí pod hero | 15 | 9 |
| Tabulek | 6 | 1 (na mobilu karty) |
| Výška desktop | 15 729 px = 17,5 obrazovky | 6 204 px = **6,9 obrazovky** |
| Výška mobil | 25 795 px = 30,6 obrazovky | 10 951 px = **13 obrazovek** |
| CTA z hero v první obrazovce na mobilu | ne (vidět je jen sticky „Napsat“) | ano |

Co z dnešní stránky v prototypu „chybí“, nezmizelo. Je to buď v rozhodovacím bloku (zkrácené „kdy nenasazovat“), v nákladech (3 čísla místo tabulky), ve sbaleném bloku „Technické detaily“, nebo jde do článků B1–B4 (plán v kap. 5.4). Prototyp používá tmavý text na oranžovém CTA (kontrast 7,2 : 1), inline štítky, jednotný postup a kompaktní formulář se 7 čipy.

---

## 12. Kontrolní seznam před spuštěním

**P1 – musí být hotové:**
- [ ] Štíhlá šablona LP a přestavba 14 LP (kap. 3.1, 5); obsah určený do článků je dočasně sbalený v „Technické detaily“
- [ ] Tabulky: ~7 na webu, na mobilu karty (3.2)
- [ ] Sloučit úvod a „Rychlou odpověď“; odstranit taby segmentů; FAQ 5–6 (3.3)
- [ ] Mobilní podmenu Služby v jednom sloupci (M1)
- [ ] Kontrast CTA (9.1)
- [ ] Identifikace provozovatele, osoba na O nás (8)
- [ ] Blog: varianta A, nebo B (7.3); skrýt „Do hloubky“ na HP, dokud nejsou 3 články; „aktualizováno“ a `dateModified` jen při skutečné změně
- [ ] Schema `FAQPage` odpovídá zkráceným FAQ (7.2)
- [ ] Produkce: bez `X-Robots-Tag: noindex` a bez Basic Auth, 301 http → https, GTM ID, Turnstile sitekey, test formuláře (6.2)

**P2 – do 2–4 týdnů:**
- [ ] Jednotný 5krokový postup; mřížky bez osiřelých karet
- [ ] UI chyby (štítky, mono písmo, klikací plochy)
- [ ] Kompaktní kontaktní blok, `/kontakt` s formulářem nahoře
- [ ] HP mobil: symptomy 3 + „další“, kompaktní kroky; LCP animace H1
- [ ] Přesouvat obsah z „Technických detailů“ do článků podle plánu a na LP nechat odkaz
- [ ] `lastmod` v sitemapě podle skutečných změn; `scroll_depth` v GTM; `Organization` doplnit o adresu, telefon a LinkedIn
- [ ] Ostatní stránky podle 5.15: `/sluzby` (seznam symptom → služba), `/jak-pracujeme`, duplicity na `/o-nas`, cookies Seznamu na `/cookies`
- [ ] Sloučit „Navazující/Související služby“ a články do pruhu „Pokračujte“; sticky lišta s „Zavolat“, až bude telefon (M5)

**P3 – průběžně:**
- [ ] OG obrázky pro každou službu, CSP, PurgeCSS, drobnosti z axe, kompaktnější cookie lišta na mobilu
- [ ] Trust bar se 3 jasnými benefity, „Data Studio (dříve Looker Studio)“ jen při prvním výskytu, odkazy na `/dekujeme`

---

## 13. Co je potřeba od klienta (beze změny proti `08_kontrola/`, kap. 4 – nejdůležitější pro spuštění)

1. Firemní údaje (jméno nebo firma, IČO, sídlo), telefon, LinkedIn, fotka a krátké bio.
2. Typické délky kroků postupu.
3. SLA pro správu a velké firmy.
4. Aspoň 1–2 případové studie (blok Důkaz na LP).
5. Produkční konfigurace: GTM ID, Turnstile, e-mailové notifikace.
6. Rozhodnutí o blogu (varianta A, nebo B) a o lead magnetech ke stažení (šablona specifikace datové vrstvy, release checklist, checklist auditu).

---

## Příloha A – metriky po stránkách

Desktop 1440 × 900, mobil 390 × 844; „obrazovka“ = výška viewportu. Zdroj: `data/ux_desktop.json`, `data/ux_mobile.json`, `data/sekce.json`.

| URL | slov (text stránky) | sekcí | tabulek | FAQ | výška desktop (obrazovek) | výška mobil (obrazovek) | DOM uzlů |
|---|---:|---:|---:|---:|---:|---:|---:|
| `/` | 1203 | 9 | 0 | 5 | 7,6 | 15 | 811 |
| `/sluzby/implementace-ga4` | 2961 | 14 | 2 | 12 | 13,8 | 24,7 | 944 |
| `/sluzby/google-tag-manager` | 2930 | 14 | 8 | 11 | 14,3 | 24,5 | 1128 |
| `/sluzby/datova-vrstva` | 3077 | 14 | 4 | 12 | 16,9 | 28,5 | 1216 |
| `/sluzby/server-side-tracking` | 3796 | 15 | 6 | 10 | 17,5 | 30,6 | 1136 |
| `/sluzby/cookie-lista-consent-mode` | 3963 | 17 | 5 | 11 | 19,2 | 32,2 | 1136 |
| `/sluzby/mereni-konverzi` | 3867 | 13 | 6 | 12 | 15,3 | 26,9 | 1228 |
| `/sluzby/bigquery` | 3575 | 14 | 4 | 11 | 15,5 | 27,4 | 999 |
| `/sluzby/dashboardy-a-reporting` | 3591 | 15 | 3 | 12 | 15 | 28,5 | 1018 |
| `/sluzby/audit-mereni` | 2765 | 11 | 5 | 12 | 12,8 | 22,3 | 1063 |
| `/sluzby/technicky-audit-webu` | 3552 | 13 | 2 | 11 | 13,8 | 23,2 | 1016 |
| `/sluzby/sprava-webu-a-mereni` | 2981 | 14 | 4 | 10 | 15 | 25,8 | 1030 |
| `/sluzby` | 1090 | 7 | 1 | 5 | 6,9 | 12 | 701 |
| `/reseni/e-shopy` | 4760 | 14 | 3 | 12 | 17,7 | 33,1 | 1166 |
| `/reseni/b2b-a-lead-generation` | 3540 | 15 | 6 | 12 | 16,8 | 29,9 | 1157 |
| `/reseni/velke-firmy` | 3497 | 17 | 6 | 12 | 17,9 | 31,9 | 1178 |
| `/jak-pracujeme` | 2192 | 9 | 1 | 8 | 11,4 | 21,2 | 892 |
| `/blog` | 213 | 2 | 0 | 0 | 2,7 | 5,1 | 463 |
| `/o-nas` | 921 | 7 | 0 | 5 | 6,6 | 11,6 | 605 |
| `/blog/ga4-bigquery-export` | 187 | 2 | 0 | 0 | 2,8 | 4,8 | 460 |
| `/blog/server-side-gtm-uvod` | 199 | 2 | 0 | 0 | 2,9 | 4,9 | 460 |
| `/zpracovani-osobnich-udaju` | 431 | 1 | 0 | 0 | 2,8 | 5,1 | 391 |
| `/kontakt` | 482 | 5 | 0 | 5 | 4,8 | 7,6 | 543 |
| `/cookies` | 198 | 3 | 1 | 0 | 2,4 | 4,1 | 420 |
| `/dekujeme` | – | 1 | 0 | 0 | 1,2 | 2,2 | 369 |

## Příloha B – screenshoty

Soubory jsou ve složce `screenshots/`, pokud není uvedeno jinak.

| Soubor | Co ukazuje |
|---|---|
| `screenshots/<stránka>__desktop.png`, `__mobile.png` | celé stránky (25 URL × 2) |
| `screenshots/<stránka>__*_viewport.png` | první obrazovka včetně cookie lišty |
| `detail_mobil_tabulka_hybridni-architektura.png` | tabulka na mobilu – uříznuté sloupce |
| `detail_mobil_tabulka_specifikace.png`, `detail_mobil_tabulka_platformy.png` | sekce s tabulkou vysoké 3 600 px |
| `detail_desktop_tabulka-a-taby_platformy.png` | seznamy v buňkách bez odrážek + duplicitní taby |
| `detail_desktop_tabulka_zakon.png` | tabulka s buňkami až 260 znaků |
| `detail_desktop_tabulka_hybridni-architektura.png` | tabulka 5 sloupců na desktopu (kódové čipy v buňkách) |
| `detail_mobil_tabulka_faze-leadu.png` | B2B – tabulka 6 sloupců na mobilu |
| `detail_desktop_symptomy_stitky.png`, `detail_desktop_co-dostanete.png` | štítky roztažené přes kartu |
| `detail_desktop_taby_kde-jste.png`, `detail_desktop_taby_segmenty.png` | taby s jediným odstavcem |
| `detail_desktop_faq_12.png` | FAQ s 12 otázkami |
| `detail_desktop_osm-kroku.png` | 8 kroků, osiřelé karty, mono text |
| `detail_mobil_lp_hero.png` | první obrazovka LP na mobilu – úvod + Rychlá odpověď, CTA pod ohybem |
| `detail_mobil_menu.png`, `detail_mobil_menu_sluzby.png` | mobilní menu, podmenu ve 3 sloupcích |
| `detail_desktop_menu_sluzby.png` | mega menu na desktopu (OK) |
| `detail_mobil_kontaktni-blok.png` | kontaktní blok na mobilu (~1 750 px) |
| `detail_desktop_hp_do-hloubky.png` | HP – staré články v „Do hloubky“ |
| `detail_desktop_diagram_bigquery.png` | diagram s dlouhými seznamy |
| `detail_desktop_karty_kompletni-mereni.png` | e-shopy – 8 karet rozcestníku (ponechat, zkrátit text) |
| `prototyp/lp-server-side-stihla.html` + `_desktop.png`, `_mobil.png` (složka `prototyp/`) | prototyp štíhlé šablony LP (kap. 11) |
