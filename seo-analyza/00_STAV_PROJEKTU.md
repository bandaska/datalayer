# SEO analýza datalayer.cz – stav projektu

**Klient:** datalayer.cz (staging: https://datalayer.vitnovotny.cz, HTTP Basic Auth)
**Zahájeno:** 2026-10-08 16:20 (Europe/Prague)
**Poslední aktualizace:** 2026-10-08 19:55 – **analýza dokončena**

## Zadání (shrnutí)
1. **Analýza konkurence** – kdo jsou konkurenti (CZ), jaký mají obsah, jaké služby, SEO metriky.
2. **Návrh landing pages** – na základě široké analýzy konkurence; detailní zadání obsahu každé LP (texty, grafy, tabulky, piktogramy, CTA…).
3. **Formuláře podle annanovotna.cz** – bez registrace, nativní formulář místo HubSpotu, ve stejném stylu (výzva ke kontaktu: zavolat / napsat / formulář).
4. **Homepage + UX** – hero je OK; piktogramy a texty jsou příliš generické → méně generické, opřené o klíčová slova.
5. **Specifikace článků** – témata a otázky z klíčových slov, odpovědi včetně schémat, diagramů, infografik (BigQuery, server-side vs. client-side, formulářová data, consent mode & legislativa…).

## Odpovědi klienta na úvodní otázky (16:27)
| Otázka | Odpověď |
|---|---|
| Ahrefs | Klient připojí Chrome s přihlášeným Ahrefs. Do té doby veřejné zdroje. |
| Cílové segmenty | **E-shopy, B2B / lead-gen, velké firmy** (ne white-label pro agentury) |
| Ceny na LP | **Bez cen** – jen výzva ke konzultaci |
| Trh / jazyk | **Jen Česko (CZ)** |

## Rozhodnutí přijatá samostatně
| Datum | Rozhodnutí | Důvod |
|---|---|---|
| 2026-10-08 | Konkurenty dohledávám sám (SERP + Ahrefs + sitemapy konkurentů) | Bez preference klienta |
| 2026-10-08 | Výstupy: Markdown + CSV + diagramy Mermaid + funkční HTML/JS prototyp formuláře | Bez preference klienta |
| 2026-10-08 | Do Ahrefs se nepřihlašuji sám (hesla nezadávám); použiju přihlášenou session v Chrome | Bezpečnost |
| 2026-10-08 | Data z Ahrefs stahuji přes interní API aplikace v přihlášené záložce → soubory TSV do Stažených → přesun do `data/ahrefs/` | Rychlost, úplnost dat (export z UI je limitovaný) |
| 2026-10-08 | Ve formuláři místo pole „Firma“ pole „Web“ + volitelná témata; místo povinného checkboxu souhlasu informační věta | Méně tření, právně přesnější (čl. 6/1/b GDPR) |

## Struktura složky
| Složka | Obsah |
|---|---|
| `00_STAV_PROJEKTU.md` | Tento soubor – stav, úkoly, log |
| `01_konkurence/` | Seznam konkurentů, profily, souhrnná analýza |
| `02_klicova-slova/` | Keyword research, clustery, mapování na stránky |
| `03_landing-pages/` | Architektura webu + detailní zadání každé landing page |
| `04_homepage-ux/` | Audit a návrh homepage |
| `05_formulare/` | Analýza formulářů annanovotna.cz, specifikace + prototyp |
| `06_clanky/` | Obsahový plán a briefy článků |
| `07_audit-webu-klienta/` | Technický a on-page audit stagingu |
| `data/` | Surová data (crawl, SERP, Ahrefs, screenshoty) |

## Úkoly a stav
| # | Úkol | Stav | Poznámka |
|---|---|---|---|
| 1 | Struktura projektu + stavový soubor | ✅ hotovo | |
| 2 | Audit webu klienta (staging) | ✅ hotovo | `07_audit-webu-klienta/audit-stagingu.md` |
| 3 | Analýza konkurence | ✅ hotovo | `01_konkurence/00_analyza-konkurence.md` + 30 profilů |
| 4 | Analýza klíčových slov | ✅ hotovo | `02_klicova-slova/00_analyza-klicovych-slov.md` + data (35 233 slov, mapování na stránky) |
| 5 | Landing pages – zadání | ✅ hotovo (v1) | `03_landing-pages/00_architektura-webu.md` + 15 zadání (01–15) |
| 6 | Formuláře (annanovotna.cz) + prototyp | ✅ hotovo (v1) | `05_formulare/` – specifikace + funkční prototyp + serverová action |
| 7 | Homepage UX revize | ✅ hotovo | `04_homepage-ux/homepage-audit-a-navrh.md` + HTML prototyp + sada 15 piktogramů |
| 8 | Specifikace článků | ✅ hotovo (v1) | `06_clanky/00_obsahovy-plan.md` + 40 briefů (A1–H3) |
| 9 | Kontrola faktů + souhrnný report | ✅ hotovo | `08_kontrola/kontrola-kvality.md` (25 ověřených tvrzení, opravy P1+P2 provedeny) · `00_SOUHRN.md` |

## Log průběhu
- **16:20** – Start (předchozí běh). Založena struktura projektu.
- **16:27** – Klient odpověděl na úvodní otázky (viz výše). Chrome s rozšířením zatím nepřipojený.
- **16:30** – Ověřen přístup na staging (Basic Auth funguje, bez auth 401). Zahájen crawl stagingu.
- **16:32** – Chrome připojen, Ahrefs přihlášen. Zjištěno interní API Ahrefs (keIdeas, keSerpOverview, seGetOrganicKeywords, seGetTopPages, seGetOrganicCompetitors).
- **16:40** – Crawl stagingu (12 URL), screenshoty desktop/mobil, analýza HubSpot formuláře. Zápis `07_audit-webu-klienta/audit-stagingu.md`.
- **16:45** – Analýza formulářů a cookie lišty na annanovotna.cz (HTML, JS, CSS, screenshoty).
- **16:50** – Prototyp nativního formuláře (HTML/CSS/JS + React Router action) otestován v Chromiu (validace, odeslání, dataLayer, hash e-mailu/telefonu). Specifikace `05_formulare/specifikace-formularu.md`.
- **16:55** – Ahrefs: sběr nápadů na klíčová slova (CZ) běží; Ahrefs odpovídá pomalu (některé požadavky timeout → automatické opakování). Průběžný export ~29 000 slov uložen.
- **17:00** – Spuštěn sběr SERP (top 10 + otázky „Lidé se také ptají“) pro 152 prioritních dotazů → podklad pro výběr konkurentů.
- **17:05** – Dokončen sběr Ahrefs (33 872 klíčových slov CZ) a Google SERP pro 43 komerčních dotazů (organické výsledky, reklamy, „Lidé se také ptají“). Hlavní přímý konkurent ve výsledcích: digitalniarchitekti.cz (15 ze 43 dotazů).
- **17:10–18:00** – 5 paralelních analytiků zpracovalo 30 konkurentů (profily, sitemapy, crawl webů). Výstupy: `01_konkurence/profily/*.md`, surová data `data/raw/konkurence/` + archivy `data/raw/konkurence_archiv/*.zip`.
- **17:30** – Pád datové záložky v Chrome (ztráta rozpracovaného běhu) → přepsáno na průběžné ukládání po každé doméně. Ahrefs metriky 40 domén: `data/ahrefs/ahrefs_konkurence_*.tsv`.
- **18:15** – Přísnější klasifikace klíčových slov (šum typu recepty/cookies, sledování zásilek apod. odfiltrován), 14 tematických clusterů.
- **18:20** – Druhá dávka Ahrefs (60 specifických seed slov: měřicí plán, offline konverze, Seznam Event Measurement, Google Tag Gateway…) a 12 dalších Google SERP s otázkami. Sloučeno: 35 233 slov.
- **18:30** – Hotovo: `01_konkurence/00_analyza-konkurence.md` (souhrn, mapa konkurence, matice služeb, cenové hladiny, vzory LP, mezery, positioning) a `02_klicova-slova/00_analyza-klicovych-slov.md` (clustery, intent, mapování na 15 stránek, otázky, priority).
- **18:40** – Hotovo: `03_landing-pages/00_architektura-webu.md` (strom webu, navigace, 301 přesměrování, šablona LP, systém piktogramů, copywriting, SEO šablona, měření) a `06_clanky/00_obsahovy-plan.md` (strategie, 8 clusterů, 40 článků, slovník, šablona briefu).
- **18:45** – Spuštěno 9 paralelních autorů: 4× zadání landing pages (15 souborů), 5× briefy článků (40 souborů). Každý ověřuje fakta v primární dokumentaci.
- **19:05** – Hotovo 15 zadání LP a 40 briefů článků (~289 000 slov, Mermaid diagramy, kód, zdroje ověřené k 10/2026). Nová fakta z rešerše: Looker Studio se od 4/2026 opět jmenuje Data Studio; Google od 7. 5. 2026 nezobrazuje FAQ rich results; od 15. 6. 2026 offline konverze Google Ads jen přes Data Manager; rozšířené konverze web + leady = jedno nastavení (4/2026); Privacy Sandbox ukončen 17. 10. 2025; Seznam Event Measurement v betě. `form_start` koliduje s automatickou událostí GA4 → přejmenovat na `lead_form_start`.
- **19:10** – Zahájen návrh homepage (`04_homepage-ux/`).
- **19:20** – Hotovo: `04_homepage-ux/homepage-audit-a-navrh.md` – audit, nová struktura (10 sekcí), finální texty, tabulka „před/po“, SEO, měření; prototyp `prototyp/homepage-prototyp.html` + screenshoty; nová sada 15 technických piktogramů (`piktogramy-sprite.svg`).
- **19:25** – Sjednoceny názvy událostí formuláře (`lead_form_start`, `lead_form_error`, `generate_lead`) ve specifikaci, prototypu, architektuře, LP a článcích.
- **19:45** – Nezávislá kontrola kvality: z 25 rizikových tvrzení 18 potvrzeno, 4 nepřesná, 2 chybná, 1 částečně neověřitelné → opravy P1 a P2 provedeny v 29 souborech; P3 (ruční ověření) zůstává. Souhrn podkladů od klienta: 254 položek v 6 skupinách.
- **19:55** – Hotovo: `00_SOUHRN.md` (shrnutí, zjištění, roadmapa, podklady od klienta, navigace). Analýza dokončena.

## Otevřené body pro klienta
- Podklady `[DOPLNIT]` – seznam v `08_kontrola/kontrola-kvality.md`, kap. 4.
- Ruční ověření před publikací (P3) – tamtéž, kap. 5.
- Ve složce Stažené (Downloads) nezůstaly žádné pracovní soubory – vše přesunuto do `data/`.
