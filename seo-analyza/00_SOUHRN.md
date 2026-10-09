# SEO analýza datalayer.cz – souhrn a navigace

**Datum:** 8. 10. 2026 · **Trh:** Česko · **Segmenty:** e-shopy, B2B / lead-gen, velké firmy · **Ceny na webu:** neuvádět (rozhodnutí klienta)
**Stav projektu a log práce:** `00_STAV_PROJEKTU.md`

---

## 1. Co jsme udělali

| Část | Rozsah | Hlavní výstup |
|---|---|---|
| Audit stagingu | 12 URL, screenshoty desktop/mobil, technické SEO, HubSpot formulář | `07_audit-webu-klienta/audit-stagingu.md` |
| Analýza konkurence | 55 dotazů v Google.cz (top 10, reklamy, „Lidé se také ptají“), 54 SERP z Ahrefs, Ahrefs metriky 40 domén, **30 kvalitativních profilů** | `01_konkurence/00_analyza-konkurence.md` + `profily/` |
| Klíčová slova | **35 233** nápadů z Ahrefs (CZ) → 20 249 relevantních, 14 clusterů, mapování na 15 stránek | `02_klicova-slova/00_analyza-klicovych-slov.md` + `data/` |
| Landing pages | architektura webu + **15 detailních zadání** (sekce, hotové texty, vizuály – diagramy/tabulky/piktogramy/mockupy, FAQ, SEO, schema, měření) | `03_landing-pages/` |
| Homepage a UX | audit, nová struktura, finální texty, **nová sada 15 piktogramů**, HTML prototyp | `04_homepage-ux/` |
| Formuláře | vzor annanovotna.cz → nativní formulář místo HubSpotu, **funkční prototyp** + serverová action + měření | `05_formulare/` |
| Články | obsahový plán **40 článků** v 8 clusterech + 40 detailních briefů (odpovědi, kód, Mermaid diagramy, infografiky, ověřené zdroje) + slovník | `06_clanky/` |
| Kontrola kvality | nezávislé ověření 25 rizikových tvrzení, konzistence, seznam podkladů od klienta, provedené opravy | `08_kontrola/kontrola-kvality.md` |

Surová data: `data/ahrefs/`, `data/serp/`, `data/raw/` (crawl stagingu, annanovotna.cz, weby konkurence + archivy ZIP), `data/screenshots/`.

---

## 2. Nejdůležitější zjištění

1. **Trh je malý, ale skoro bez kvalitní konkurence.** Relevantní organická návštěvnost lídrů je v řádu stovek návštěv měsíčně (marketingppc.cz ~620, digitalniarchitekti.cz ~480 z relevantních slov). Obtížnost klíčových slov je téměř nulová.
2. **Jediný plnohodnotný specializovaný konkurent jsou Digitální architekti** (15 ze 43 testovaných SERP). Velké agentury mají analytiku jako šablonovitý doplněk, freelanceři (khoder.cz, homoladigital.cz, rajtmajer.cz) vyhrávají hloubkou jedné stránky a veřejnými cenami.
3. **Mezery, které může datalayer.cz obsadit:** end-to-end řetězec *sběr → kvalita a souhlas → BigQuery → dashboard*; **B2B/lead-gen měření** (CRM, offline konverze); **velké firmy** (server-side ve vlastním Google Cloudu, governance); **ověřený obsah o consentu a legislativě** (konkurence šíří mýty); česká specifika (Seznam Event Measurement, Heureka, Seznam Nákupy, Shoptet).
4. **Poptávka je v long-tailu a v problémech** („ga4 nesedí tržby“, „po cookie liště spadly konverze“), ne v „agentura GA4“. Velké objemy mají informační dotazy (google tag manager 2 400, looker studio 1 400, utm builder 1 100) → obsah a nástroje.
5. **Google zobrazil AI přehled na 40 ze 43 dotazů** → obsah musí mít rychlé odpovědi, vlastní data, diagramy a kód.
6. **Web stagingu:** služby mají 32–41 slov, chybí sitemap/canonical/OG/schema, URL v camelCase, HubSpot formulář (povinná firma, +1 předvolba, branding), web analytické firmy **nemá vlastní měření ani cookie lištu**, homepage pod hero je generická (Font Awesome ikony, obecné texty, osamocené „+18 %“).
7. **Změny v nástrojích k 10/2026, které musí obsah reflektovat** (ověřeno v primárních zdrojích): Looker Studio se od 16. 4. 2026 opět jmenuje **Data Studio**; Google od 7. 5. 2026 **nezobrazuje FAQ rich results**; nová nahrávání **offline konverzí Google Ads jen přes Data Manager** (od 15. 6. 2026); rozšířené konverze pro web a leady mají od 6/2026 jeden přepínač; **Privacy Sandbox ukončen** (17. 10. 2025), Chrome cookies třetích stran ponechává; **Seznam Event Measurement** nahrazuje staré kódy Skliku (konec v průběhu 2027).

---

## 3. Doporučený postup (roadmapa)

| Fáze | Co | Podklady |
|---|---|---|
| **0 – Základ webu (před spuštěním)** | URL dle architektury + 301; sitemap, canonical, OG, schema; odstranit HubSpot a Font Awesome; **nativní formulář**; cookie lišta + Consent Mode v2 + GTM + sGTM na vlastním webu; oprava mobilního přetékání | `07_…`, `03_…/00_architektura-webu.md`, `05_formulare/` |
| **1 – Spuštění (priorita A)** | Homepage dle návrhu; LP Server-side, Consent, Měření konverzí, Implementace GA4, Audit měření, Datová vrstva, Řešení e-shopy, Řešení B2B; /jak-pracujeme, /kontakt, /o-nas | `04_homepage-ux/`, `03_landing-pages/01, 03, 04, 05, 06, 09, 12, 13, 15` |
| **2 – Autorita (měsíc 1–3)** | 19 článků s prioritou 1 (pilíře A1, A2, B1, B2, C1, C3, D1, E1, F1, G1 + podpůrné), 2 články týdně; UTM builder; slovník (42 hesel) | `06_clanky/` |
| **3 – Rozšíření (měsíc 3–6)** | zbývající LP (GTM, BigQuery, Dashboardy, Technický audit, Správa, Velké firmy), články priority 2–3, případové studie, platformní podstránky (Shoptet, Upgates, WooCommerce, Shopify), další nástroje | `03_…`, `06_…` |
| **Průběžně** | revize technických článků každých 3–6 měsíců (E2, E3, B3, B6, A1 nejrychleji zastarávají); sledování pozic i v Seznamu | briefy – sekce „Poznámky pro autora“ |

---

## 4. Co je potřeba od klienta (nejdůležitější)

Kompletní seznam (254 položek ve 6 skupinách) je v `08_kontrola/kontrola-kvality.md`, kap. 4. Publikaci nejvíc blokují:
1. **Případové studie s čísly** (jedna na každou LP) a počty projektů/auditů – bez nich nevymýšlíme žádná čísla.
2. **Firemní údaje, bio a fotka Víta Novotného, telefon, LinkedIn** (kontaktní blok, O nás, schema).
3. **Typické délky kroků** (audit, specifikace, implementace, validace).
4. **SLA a smluvní podmínky** pro správu a velké firmy (LP 11, LP 14).
5. **Nasazení consentu, sGTM a nativního formuláře na vlastní web** (podmínka sekce „Ověřte si nás“ na homepage).
6. **Partnerská advokátní kancelář** pro recenzi právních textů (consent, osobní údaje) a rozhodnutí o lead magnetech (volně vs. za e-mail).

---

## 5. Před publikací ručně ověřit
- doslovné znění § 89 odst. 3 ZEK v e-Sbírce, stav EU–US Data Privacy Framework u Soudního dvora EU, termín Googlu pro `ad_personalization`/IP v Google Ads, regionální ceny BigQuery (Frankfurt/Varšava), ceníky Stape/DataNostro/Addingwell/TAGGRS, nativní možnosti Shoptetu a Upgates (consent, SEM, Heureka) – viz `08_kontrola/kontrola-kvality.md`, kap. 5 (P3).
- Všechna fakta jsou v dokumentech u sekcí „Zdroje“ s datem ověření (10/2026).

---

## 6. Navigace ve složce

```
seo-analyza/
├── 00_SOUHRN.md                      ← tento soubor
├── 00_STAV_PROJEKTU.md               ← úkoly, rozhodnutí, log práce
├── 01_konkurence/                    ← souhrn konkurence + 30 profilů + metriky
├── 02_klicova-slova/                 ← analýza KW + data (relevantní slova, mapování, otázky)
├── 03_landing-pages/                 ← 00 architektura + 01–15 zadání stránek
├── 04_homepage-ux/                   ← audit a návrh homepage + prototyp + piktogramy
├── 05_formulare/                     ← specifikace + funkční prototyp formuláře
├── 06_clanky/                        ← obsahový plán + 40 briefů (A1–H3)
├── 07_audit-webu-klienta/            ← audit stagingu
├── 08_kontrola/                      ← kontrola kvality, podklady od klienta, opravy
└── data/                             ← Ahrefs, SERP, crawl, screenshoty, archivy
```
