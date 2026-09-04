# Fáze 3 – Slovenský trh: kontinuální správa webové analytiky

Stav: hotovo (verze 1, datum přístupu ke všem zdrojům **2026-09-04**). Kurz pro přepočty **1 EUR = 25 CZK**.
Data: `data/fragments/03-pricing.csv` (P3-001…033), `03-evidence.csv` (E3-001…051), `03-pain.csv` (N3-001…018).
Kódy aktivit A1–I3 a spouštěčů problémů podle `00-taxonomie-sluzby.md`.

Omezení: vyhledávací rozpočet session byl vyčerpán po ~200 dotazech; FB skupiny, LinkedIn posty a některé weby (Vivantina, dabl.sk,
ecommercebridge.sk, Riesenia, Datacop, ADMA ceník) vracely 403/404 – viz část 5.

---

## 1. Shrnutí

- Prošlo se **24 subjektů** (13 agentur, 6 freelancerů/butiků, 1 marketplace, 4 vyřazené/neexistující). Kontinuální správu analytiky
  jako **pojmenovaný produkt s veřejnou cenou** má na Slovensku **jediný subjekt – DASE** („mesačný paušál“, min. **700 € bez DPH/měs**,
  klient si volí objem, 2měsíční výpověď; E3-001, E3-005). Cena je navíc jen v blogu, ne na stránce služby.
- Dalších 5 subjektů kontinuální prvky **popisuje bez ceny**: Dexfinity (live dashboard, týdenní/měsíční souhrn, alerty na ROAS/traffic),
  Basta digital (kontinuální monitoring dostupnosti a správnosti dat), Visibility (na CZ webu „pokračující podpora“ – měsíční analýza
  a konzultace), BigWay („pravidelne reportujeme“), Starbomedia (údržba sGTM 100–500 €/měs jako orientační tabulka v blogu).
- Zbytek trhu prodává **jednorázově**: nastavení GTM/GA4 od 350–800 €, audit od 150 €, měření konverzí od 400 €; „správu“ chápe jako
  správu PPC (300–800 €/měs), do které je zabalená „kontrola merania konverzií“ a „mesačná validácia čísel voči tržbám“ (E3-022, E3-034).
- **Hodinové sazby**: ADMA benchmark 2025 pro „špecialistu webovej analytiky“ **65 €/h** (1 625 Kč); freelanceři dátová analytika/GA4
  25–45 / 45–70 / 70–110 €/h (junior/mid/senior); Dinally 110 €/h; marketplace Jaspravim 30 €/h. To je **uvnitř** rozpětí H3 (1 200–2 500 Kč/h),
  v horní části u seniorů.
- **In-house proxy**: inzeráty 1 900–2 800 €/měs brutto (náklad zaměstnavatele ≈ 2 600–3 800 € ≈ 65–95 tis. Kč/měs); DASE paušál 700 €
  je tedy ~1/4 juniorního in-house analytika.
- **SK → CZ/AT**: Dexfinity (kancelář Praha), ui42 (Praha od 2026), Visibility (CZ entita Visibility Digital, Praha), Dinally (SK CZ AT DE RO HU),
  Invelity (SK, CZ, US). Opačně CZ → SK: Effectix, Proficio. Cenově SK ≈ CZ; žádný důkaz o „levnějším SK“ pro analytiku.
- **Painy** jsou na SK dobře dokumentované v číslech (Šutarík, Madaj, DASE, Dexfinity): 37–43 % rozdíly GA4 vs. CRM/Shopify po redesignu
  nebo kvůli CMP bez Consent Mode v2, nezpozorované 2 měsíce až „celé mesiace“; >40 % nových klientů agentury má GA4 bez měření tržeb.
  To silně podporuje **H2** (tiché rozbití), zatím **neprokazuje H1** (BQ jako podmínka): DASE i Dexfinity nabízejí správu nad Looker Studio /
  GA4 bez povinného BQ exportu, BQ je „jedna z položek“.

---

## 2. FAKTA

### 2.1 Tabulka subjektů

| # | Subjekt | Typ | URL služby | Název služby doslova | Model ceny | Cena / sazba | Kódy aktivit | requires_bq | Veřejná cena | Evidence |
|---|---------|-----|-----------|----------------------|-----------|--------------|--------------|-------------|--------------|----------|
| 1 | **DASE** (Bratislava, od 2016, „jediná agentúra na Slovensku, ktorá sa zaoberá výlučne digitálnou analytikou“) | analytická agentura | dase-analytics.com/sk/ + blog | „mesačný paušál“ / kontinuálna analytická podpora; jednorázově „Efektívna analytika v praxi“, „Analytický audit“, „Server-side GTM“, „Marketing Data Warehouse“ | retainer (klient určuje výši paušálu → objem), fakturace odvedené práce, 2měs. výpověď | **min. 700 € bez DPH/měs**; vstup „od 1 400 €“; sGTM hosting 7–100 €/měs | A2, A5, B1, B3, C1, D1, D2, E3, E5, F1, F3, G1 (anomaly detection), G7, H3, H4, I1, I2 | optional (BQ/DWH jako položka) | **ano** (blog) | E3-001…009, E3-048 |
| 2 | **Dexfinity** (ex ui42 digital; 63 lidí; Bratislava, Trenčín, **Praha**) | performance agentura | dexfinity.com/sluzby/analytika/ | „Webová analytika a reporting pre e-shopy“ | součást (provizní) spolupráce; cena neuvedena | neuvedeno | A2, A5, B1, D1, D2, D5, F1, F3 („týždenný súhrn“, „automatizované reporty do e-mailu“), G1 (alerty ROAS/traffic), I1 | unknown (Looker Studio / Zoho) | ne | E3-010, E3-011, E3-045 |
| 3 | **Basta digital** (ex Pizza SEO; 35+ lidí) | performance/analytická agentura | bastadigital.com/enterprise-level-digitalna-analytika/ | „Pokročilá webová analytika“ / „Enterprise level digitálna analytika“ | individuálně | neuvedeno | A1, A4, E5, F1, F3, G1 („monitorovať ich dostupnosť a zároveň aj správnosť“), H1 | yes (enterprise: „surové dáta … Big Query“) | ne | E3-013 |
| 4 | **Visibility** (VISIBILITY s.r.o. Bratislava; VISIBILITY DIGITAL s.r.o. Praha) | performance agentura | visibility.sk/sluzby/webova-analytika/ (bez detailu); visibility.cz/…/konzultace-webova-analytika/ | SK: „webová analytika“; CZ: „Konzultace webové analytiky – pokračující podpora“ | měsíční konzultace; cena neuvedena (formulář s rozpočtem do 1 000 € … nad 5 000 €) | neuvedeno | F1, F3, F4, H3, H5, I1 | no | ne | E3-014, E3-015, E3-049 |
| 5 | **ui42** (80+ lidí; Praha od 2026) | full-service | ui42.sk – stránka analytiky 404 | – (blog GA4; školení) | – | neuvedeno | – | – | ne | E3-044 |
| 6 | **Effectix SK** (CZ agentura, kancelář Bratislava) | performance agentura | effectix.com/sk/strategicke-poradenstvo/ | „Business manager a Analytika“ (poradenský projekt) | individuálně | neuvedeno | F3, I1 | no | ne | – |
| 7 | **Proficio SK** (CZ agentura, SK web) | performance agentura | proficiodigital.sk/webova-analytika | „Analýza webových a mobilných aplikácií“, „Analýza elektronického obchodu“, „Hodnotenie kampaní“, „Školenie“ | individuálně | neuvedeno; sGTM cloud „rádovo v desiatkach či stovkách eur“ | C1, D5, F3, H4, I1 | no | ne | E3-046 |
| 8 | **ConsultOne / webanalytics.sk** (Martin Botťánek, Bratislava, od 2007) | analytický butik | consultone.sk/google-tag-manager/ | „Google Tag Manager“, „Google Analytics“, audity, „Server-side GTM“, „Offline konverzie“ | jednorázově | GTM „Cena od 350 € bez DPH“; sGTM provoz „od 20 EUR mesačne“, „50 EUR mesačne“ | A2, A5, D1, D2, E5 (CRM→sGTM), G4 | optional | částečně | E3-016, E3-017 |
| 9 | **TechWeb.sk** (Bratislava, od 2018) | digitální agentura | techweb.sk/tag-manager-implementacia | „Google Tag Manager implementácia“, „GTM audit“ | jednorázově; doporučuje „pravidelnú revíziu aspoň raz za štvrťrok“ | od 350 € / od 800 € / audit od 150 € | A1, A2, A4, B1, D1–D3, H2, H4 | no | **ano** | E3-018, E3-019 |
| 10 | **Starbomedia** | performance agentura | starbomedia.sk/cennik, /analyza-webu | „Nastavenie merania konverzií“; „Webová analytika“ (audit) | jednorázově + PPC správa měsíčně; blog: údržba sGTM měsíčně | od 400 € jednoráz.; Ads od 350 €/měs; **„Údržba a aktualizácie“ 100–300 €/měs** (Stape), 200–500 €/měs (GCP) | A5, B1, D1, D2, D5 („mesačná validácia čísel voči reálnym tržbám“), F1, G5 | no | **ano** | E3-020…022, E3-050 |
| 11 | **Peter Šutarík** (freelancer, marketing measurement, B2B) | freelancer | petersutarik.com/sk/ | „Nastavenie Server-Side Trackingu“, „B2B Atribúcia & Sledovanie Leadov“, „GA4 Implementácia & Migrácia“, „Audity Merania“ | projektově; bez retaineru | neuvedeno; blog: sGTM 500–2 000 € jednoráz., hosting 20–50 €/měs | A1, A4, B1, D1, D2, D5, E4 (BQ export článek), G1 („nastavte si monitoring: automatizované testy“), H2 | optional | ne | E3-023…029 |
| 12 | **Viktor Madaj** (madaja.sk, freelancer) | freelancer | madaja.sk | „audit procesov a meraní“, setup „na kľúč“, PPC s „mesačnými reportmi“ | kalkulačka / nabídka | neuvedeno | A1, C1, D1, F3 | no | ne | E3-030 |
| 13 | **Dinally** (SK CZ AT DE RO HU) | freelancer/malá agentura | dinally.sk | „GA4, Google Tag Manager, Meta Pixel a správne meranie konverzií“ | hodinově + měsíční správa kampaní | **110 €/h**; správa od 350 €/měs | C1, D1–D3 | no | **ano** | E3-031 |
| 14 | **plexcore** (konzultace/realizace, ne analytika) | konzultant | plexcore.sk/cennik | „Cenník konzultačných a realizačných služieb 2025“ | hodinově + roční retainer tiery | 70 €/h; 8 h/měs 532 €, 40 h 2 520 €, 80 h 4 760 €, 160 h 8 960 €; odezva 72 h / 24 h | – (strukturální benchmark) | – | **ano** | E3-032 |
| 15 | **Dobrý Marketing** | kolektiv freelancerů | dobrymarketing.sk/blog/qa-freelnacer-marketer/ | „Analytika & reporting: GA4, GTM, dashboardy, atribúcia, experimenty“ | „hodinovo, paušálne alebo projektovo“ | cituje ADMA 2025: špecialista webovej analytiky **65 €/h** | C1, D4, F1, I1, I2 | no | částečně (benchmark) | E3-033 |
| 16 | **BigWay Digital** | web/marketing agentura | bigway.sk/tracking-analytika-reporting/ | „Tracking, analytika, reporting“ (položky doslova shodné s DASE) | neuvedeno; „Pravidelne reportujeme výsledky“ | neuvedeno | A2, A5, C1, F3, H4 | no | ne | E3-047 |
| 17 | **Rast Digital** | agentura | rast.digital/analytika | „Analytika a dáta“ | neuvedeno | neuvedeno | C1, I1 | no | ne | E3-051 |
| 18 | **AdVeslo** | agentura | adveslo.sk/…/meranie-a-analytika/ | „Meranie a analytika“ (registrácia, implementácia, školenie, filtre, ciele) | „úplný cenník“ na vyžádání | neuvedeno | C1, C4, H4 | no | ne | – |
| 19 | **High5** | PPC agentura | high5.sk (blog) | – | – | neuvedeno | (D5 v rámci PPC) | no | ne | E3-042 |
| 20 | **Invelity** (Zvolen, Bratislava, SF; SK, CZ, US) | data/marketing agentura | invelity.com | – (blog BigQuery) | neuvedeno | neuvedeno | E2, E4 | yes | ne | – |
| 21 | **Jaspravim.sk** (marketplace) | marketplace | jaspravim.sk | „Google Analytics 4 – nastavenie merania“, „GTM – nastavenie“, „Audit účtu GA4“ | gig | 50 € / 60 € / 20 €; 30 €/h; **žádný měsíční gig** | A2, C1 | no | **ano** | E3-035 |
| 22 | **ppcexpert.sk** (Arnošt Vágner) | PPC freelancer | ppcexpert.sk | – (cenový článek) | PPC správa | agentury 300–800 €/měs nebo 10–20 % spendu; freelanceři 150–600 €/měs | D1, D5 („Kontrola merania konverzií, aby dáta sedeli“) | no | částečně | E3-034 |
| 23 | Digitalman, Madviso, Atte, 3R, VITA (školení) | menší agentury | – | „Web analytika“ jako odrážka | „unikátna cenová ponuka“ | neuvedeno | – | no | ne | E3-043 |
| 24 | **Vyřazené**: Lighting Beetle (UX design, bez analytiky), Elite Solutions → Elite Monday Lovers (reklamní agentura), Adbee (doména nefunguje), Riesenia.com (403; e-commerce dev), Bart.sk (dev; „proaktívny monitoring“ jen aplikací), Truniversity (přesměrování na wp.sk – zaniklo), Pizza SEO = Basta digital | – | – | – | – | – | – | – | – | – |

Souhrn: **veřejnou cenu čehokoli analytického má 7 z 20 aktivních subjektů** (DASE, TechWeb, Starbomedia, Dinally, plexcore, Jaspravim, ConsultOne);
**veřejnou cenu kontinuální správy má 1 (DASE)** + 1 orientační tabulku údržby sGTM (Starbomedia).

### 2.2 Hodinové sazby a proxy

| Zdroj | Sazba | CZK/h | Poznámka | Evidence |
|-------|-------|-------|----------|----------|
| ADMA benchmark 2025 (27 členských agentur; převzato z dobrymarketing.sk – přímé stránky ADMA 404) | špecialista webovej analytiky 65 €/h; Strategy/Account Director 90 €/h | 1 625 / 2 250 | 2022 ceník: 60 €/h (jen snippet PDF) | E3-033 |
| Dexfinity Dexguide „Freelancer“ (SK/CZ 2026) | dátová analytika/GA4: junior 25–45, mid 45–70, senior 70–110 €/h; PPC 20–80 €/h | 625–2 750 | „Retainer (mesačná paušálna platba za definovaný rozsah)“; realistické max. 100 fakturovaných h/měs | E3-012 |
| Dinally | 110 €/h | 2 750 | freelancer se 6 trhy | E3-031 |
| plexcore | 70 €/h; v retaineru 66,5 → 56 €/h; roční předplatba až 49 €/h | 1 750 → 1 225 | sleva za objem 5–30 %, reakční doba jako osa | E3-032 |
| Jaspravim.sk | 30 €/h (GA nastavení, ~5 h) | 750 | spodní hranice trhu | E3-035 |
| DASE paušál 700 €/měs | při 65 €/h ≈ 10–11 h/měs (odhad, DASE hodiny nezveřejňuje) | 17 500 Kč/měs | jediný retainer analytiky s cenou | E3-001 |
| Starbomedia „Údržba a aktualizácie“ sGTM | 100–300 €/měs (Stape), 200–500 €/měs (GCP) | 2 500–12 500 Kč/měs | orientační tabulka v blogu | E3-020 |
| Provoz sGTM (hosting) | 7–100 €/měs GCP (DASE); 20–50 €/měs Stape (Šutarík, webanalytics.sk); „desiatky až stovky eur“ (Proficio) | 175–2 500 | kotva nákladu infrastruktury | E3-006, E3-007, E3-016, E3-028, E3-046 |
| PPC správa jako kotva | agentury 300–800 €/měs nebo 10–20 % spendu; freelanceři 150–600 €/měs; Starbomedia od 350 €/měs | 7 500–20 000 | obsahuje „kontrolu merania konverzií“ a „mesačnú validáciu čísel voči tržbám“; „nastavenie analytiky od nuly“ zvlášť | E3-021, E3-022, E3-034 |

### 2.3 Inzeráty na pozice (in-house alternativa)

| Inzerát | Mzda brutto/měs | Náklad zaměstnavatele (×1,35, odhad) | Úkoly = co si firma platí interně | Evidence |
|---------|-----------------|--------------------------------------|------------------------------------|----------|
| Profesia, spol. s r.o. – „Webový analytik, GA špecialista“ (7/2022) | 2 800 € + 13. plat | ≈ 3 780 € ≈ 94 500 Kč | „Revidovať súčasné meranie … nastavovať nové meranie v GA4“, „Nastavenie a údržba reportingu v GA4“, „Správa prístupových práv GA/GTM“, rutinní změny GA/GTM, školení, BigQuery plánováno (A2, A3, C6, F1, H3, H4) | E3-036 |
| Slovenská produkčná / JOJ – „Dátový analytik pre digitálne produkty“ (8/2025) | 2 500 € | ≈ 3 375 € ≈ 84 400 Kč | „Implementácia a správa analytických nástrojov (GA4, GTM, Hotjar, atď.)“, dashboardy, A/B testy | E3-037 |
| Talent Solutions – „Webový analytik“ (7/2024) | 1 900 € | ≈ 2 565 € ≈ 64 100 Kč | „Nastavovať tags (pixely, eventy atď.) v nástroji GTM“, správa přístupů GA/GSC/GTM, pravidelný a ad-hoc reporting | E3-038 |
| msg life – „Webový analytik – IT analytik“ | dohodou | – | GA4, GTM, BigQuery, Data Studio, návrh metrik, reporty | – |
| 8h.sk agregát „Web analytik“ (50 inzerátů) | medián 2 050 €, průměr 2 403 €, rozpětí 980–4 900 € | – | široká kategorie | E3-039 |
| Platy.sk | Špecialista marketingových analýz 1 591–3 415 €; Dátový analytik 1 685–3 277 € (80 % zaměstnanců) | – | – | E3-040 |

### 2.4 Komunitní zjištění

- **MeasureCamp Bratislava** existuje od 2017, další ročník 3. 10. 2026; sponzoři 2026: Commanders Act (Diamond), Datacop (Gold), Bloomreach,
  Digitálna univerzita, O2, Google – žádná lokální agentura mezi sponzory (E3-041). Datacop (SK data firma) – web 403, neověřeno.
- Komunitní obsah k painům na SK vzniká hlavně na **firemních blozích** (DASE, webanalytics.sk, petersutarik.com, madaja.sk, techweb.sk,
  visibility.sk) – tam jsou konkrétní čísla; FB skupiny/LinkedIn nebylo možné otevřít (mezera).
- webanalytics.sk (Botťánek) drží sérii „diagnostických“ článků: „Duplicitné objednávky v GA“, „Neprimeraný nárast Direct-u“, „Oneskorenie dát
  v GA4“, „Je možné mať v GA 100 % presné dáta?“ („pravdivá je len suma na faktúre“) – to je de facto katalog toho, co klienti hlásí (E3-017).
- Nikde na SK se nenašla diskuse „koľko stojí správa analytiky“ – otázka ceny se veřejně řeší jen u PPC správy (E3-034).

### 2.5 Doslovné citáty (výběr; kompletní v `03-evidence.csv`, `03-pain.csv`)

- DASE: „**700 eur bez DPH mesačne** … Výšku mesačného paušálu si určuje vždy klient, pričom výška paušálu determinuje objem“ (E3-001);
  „2-mesačná výpovedná doba … platíte len za práce, ktoré budú reálne odvedené“ (E3-005).
- DASE (Selnekovič): „Meranie niektorých udalostí nefunguje korektne alebo vôbec. Dôvodom bývajú zmeny na webovej stránke.“ „Obzvlášť citlivé
  je to v prípade consent módu a zmien cookie lišty, kedy môže dôjsť k zníženiu počtu konverzií.“ (E3-003, E3-004)
- DASE (audit): „GA4 môže zbierať dáta každý deň a reporty môžu vyzerať úplne v poriadku. To však ešte neznamená, že meriate správne.“ (E3-008)
- Madaj: „E-shop má Google Analytics 4 nasadené celé mesiace... majiteľ si myslí, že meria. Pritom v Monetizácii má nuly.“ „Rozbité meranie sa
  neohlási, jednoducho ticho prestane posielať dáta.“ „Rozdiel nad 20 % už takmer vždy znamená chybu v nastavení.“ (E3-030)
- Šutarík: „GA4 ukazovalo za apríl 184 nákupov. Shopify 291 … Dva mesiace pred auditom prebehol frontendový redizajn“; „Tag sa spustí dvakrát.
  GA4 zaznamená dva eventy. Počet konverzií sa cez noc zdvojnásobí.“; „Minimálne raz za kvartál kompletný audit a rýchlu kontrolu po každej
  väčšej zmene“; „30-50% konverzií zostáva nesledovaných“ (E3-023, E3-024, E3-027, E3-029).
- Dexfinity: „Viac ako 40 % e-shopov, s ktorými začíname spoluprácu, má GA4 nainštalovaný ale bez merania revenue.“ (E3-011)
- Basta: „Našou úlohou je monitorovať ich dostupnosť a zároveň aj správnosť.“ „Implementácia programátormi vyžaduje opakované testovanie
  a kontinuálny monitoring zmien.“ (E3-013)
- Starbomedia: „mesačnú validáciu čísel voči reálnym tržbám“ (součást PPC správy); „Údržba a aktualizácie: €100-300 (mesačne)“ (E3-020, E3-022).
- ppcexpert.sk: „Kontrola merania konverzií, aby dáta sedeli“ v ceně PPC; „nastavenie analytiky od nuly … bežne účtujú zvlášť“ (E3-034).
- TechWeb: „Pravidelná revízia, aspoň raz za štvrťrok, zaistí, že vaše dáta odrážajú aktuálnu realitu webu“ (E3-019).
- webanalytics.sk: „Najlepšie investovaných 50 EUR mesačne do marketingu? Server-side tracking“ (E3-016).

---

## 3. INTERPRETACE

### 3.1 Standard vs. mezera

- **Standard (nabízí většina)**: jednorázové nastavení GA4/GTM (A2, C1), měření konverzí do Ads/Meta (D1, D2), sGTM implementace (A5),
  Consent Mode v2 (B1), audit, Looker Studio dashboard (F1), školení (H4). Ceny 350–800 € za GTM, 400–2 000 € za sGTM, audit 150 € – 1 400 €.
- **Diferenciátor (nabízí <30 %)**: pojmenovaný **měsíční paušál s obsahem** (DASE), **alerty** na propad ROAS/traffic (Dexfinity), **kontinuální
  monitoring dostupnosti a správnosti dat** (Basta, enterprise), **měsíční konzultace + analýza** (Visibility CZ), údržba sGTM jako měsíční
  položka (Starbomedia – jen tabulka).
- **Nikdo na SK nenabízí veřejně**: monitoring BQ exportu (E1), hlídání nákladů BQ (E2), tag monitoring v reálném čase (G4), SLA/reakční dobu
  (H5 – jen plexcore mimo analytiku, 72 h / 24 h), changelog GTM (A3), kvartální review měřicího plánu (F4) jako explicitní položku.
  Přitom Šutarík, TechWeb i DASE doporučují **kvartální audit + kontrolu po každé větší změně** – trh doporučuje rytmus, který sám neprodává
  jako produkt.
- **Kdy koupit (trigger) podle SK trhu**: (a) při vstupu do PPC správy – agentury zjišťují, že >40 % e-shopů nemá revenue (Dexfinity), (b) po
  změně webu/měření (DASE audit), (c) když „konverzie v Ads klesajú, zatiaľ čo reálne tržby rastú“ (Šutarík), (d) při ad spendu nad 2 000 €/měs
  (sGTM ROI, Šutarík), (e) DASE staví 12měsíční cestu: strategie 1 400 € → setup → cookie → sGTM → dashboardy → **teprve pak paušál**.

### 3.2 Odvozování cen

- Jediná přímá kotva: **DASE 700 €/měs minimum** (17 500 Kč). Při ADMA sazbě 65 €/h to je ≈ 10–11 h/měs → shoda s předpokladem H3 o
  retaineru 5–20 h.
- Nepřímé kotvy měsíčního „hlídání“: údržba sGTM 100–300 €/měs (2 500–7 500 Kč) – to je cena za jednu vrstvu (A5/G5) bez analytika;
  PPC správa 300–800 €/měs, která „kontrolu merania“ obsahuje – klient je zvyklý platit za měsíční správu jednotky stovek eur.
- Hodinová kotva 65 €/h (agentura) vs. 45–70 €/h (mid freelancer) vs. 110 €/h (senior freelancer s AT/DE trhy) → 5 h = 325–550 €,
  10 h = 650–1 100 €, 20 h = 1 300–2 200 €.
- Strop = in-house: junior analytik 1 900 € brutto (≈ 2 600 € náklad), medior 2 500–2 800 € (≈ 3 400–3 800 € náklad). Externí retainer je
  konkurenceschopný do ~1 000–1 500 €/měs; nad tím klient srovnává s částečným úvazkem.
- Marketplace (20–60 € za GA4/GTM) ukazuje, že **poptávka po levném jednorázovém setupu existuje, po měsíční správě na marketplace ne** –
  správu si kupují firmy, které už mají spend a agenturu.

### 3.3 Srovnání s ČR

- Fáze 2 (`01-trh-cz.md`) zatím není k dispozici, srovnání je s hypotézami: H3 předpokládá 1 200–2 500 Kč/h; SK agenturní benchmark 1 625 Kč/h
  a freelance 1 125–2 750 Kč/h (mid–senior) leží **ve stejném pásmu** – slovenské ceny v EUR nejsou nižší než české, jen zaokrouhlené na
  eurové „psychologické“ hranice (350, 700, 1 400 €).
- SK trh je menší a **koncentrovanější**: jedna čistě analytická agentura (DASE) + několik butiků; velké SK agentury (Dexfinity, ui42, Visibility)
  **expandují do Prahy**, takže s nimi DataLayer.cz soutěží i doma, a naopak CZ agentury (Effectix, Proficio) prodávají na SK. Trh CZ+SK
  se z pohledu analytiky chová jako jeden (Dexguide uvádí sazby „SK/CZ“).
- SK obsah je pain-konkrétnější než typický CZ agenturní web: Šutarík a Madaj publikují čísla (184 vs 291, 94 vs 162, 38 vs 67) – použitelné
  jako argumentace i pro CZ publikum (slovenština je srozumitelná).

### 3.4 Co říká SK trh k hypotézám

- **H1 (BQ-first)**: **oslabuje**. DASE prodává paušál, kde BQ/DWH je jedna z položek; Dexfinity dodává dashboardy + alerty nad Looker/Zoho;
  Visibility CZ „pokračující podporu“ nad GA4/Looker. Jen Basta (enterprise) staví monitoring správnosti explicitně nad surovými daty v BQ.
  → Dvouúrovňový model odpovídá SK realitě.
- **H2 (tiché rozbití)**: **silně potvrzuje**. Všechny konkrétní painy (N3-001…018) jsou o nezpozorovaném rozbití: měsíce nul v Monetizaci,
  2 měsíce po redesignu, 40 % e-shopů bez revenue, CMP bez CMv2. Spouštěče: `release_web` (5×), `consent_change` (3×), `gtm_change_dev` (3×),
  `revenue_mismatch` (2×), `unknown_owner` (2×), `ga4_change`, `browser_change`, `connector_token`, `ad_platform_change`.
- **H3 (bez veřejného ceníku, odvození z hodinovek 5–20 h)**: **potvrzuje** s jednou výjimkou (DASE 700 €); hodinovky 65 €/h ≈ 1 625 Kč/h.
- **H4**: nelze hodnotit z SK.
- **H5 (SaaS nahrazuje část, služba stojí na interpretaci/opravě)**: **potvrzuje**. Infrastruktura (sGTM 7–100 €/měs) je komodita, kterou
  všichni citují; hodnota, kterou SK hráči prodávají, je „pravidelná kontrola dát“, „monitoring dostupnosti a správnosti“, „konzultácie
  s odporúčaniami“, srovnání s CRM/backendem – tj. G7, H3, F3, D5. Nikdo neprodává SaaS monitoring samostatně.

---

## 4. DOPORUČENÍ pro DataLayer.cz

1. **Pojmenovat a ocenit paušál veřejně** – na SK to dělá jen DASE a získává tím pozici „jediné analytické agentury“. Vstupní tier kolem
   **15–20 tis. Kč/měs (600–800 €)** je trhem už akceptovaná hranice (DASE 700 €, PPC správa 300–800 €), nad ním tier 30–40 tis. Kč
   (≈ 20 h) a enterprise individuálně. Pod 10 tis. Kč se pohybuje jen údržba sGTM bez analytika – tam nekonkurovat.
2. **Prodávat rytmus, který trh doporučuje, ale neprodává**: „kontrola po každém releasu + kvartální audit + měsíční rekonciliace GA4 vs.
   backend/CRM“ (A1, F4, D5). Šutarík, TechWeb i DASE ho doporučují v blozích; jako produkt s termíny a SLA (H5) ho nikdo nemá.
3. **Argumentovat čísly z SK painů** (se zdrojem): 37–43 % rozdíl po redesignu/CMP, 2 měsíce nepozorováno, >40 % e-shopů bez revenue,
   „rozdiel nad 20 % = chyba“. Formulace „reporty vyzerajú v poriadku, ale nemeriate správne“ (DASE) je přesně pain H2 – použít vlastní verzi.
4. **Dvouúrovňová nabídka** (bez BQ / s BQ) je v souladu s trhem: DASE i Dexfinity dělají správu bez povinného BQ. Diferenciátor DataLayer.cz
   s BQ: E1/E2/G2 (monitoring exportu, nákladů, revenue vs. backend) – na SK to nikdo veřejně nenabízí.
5. **Vstupní bod**: převzít logiku DASE (audit/strategie za fixní cenu → paušál) a Dexfinity (kontrola e-commerce trackingu při každém
   novém klientovi). Trigger pro oslovení: změna CMP, redesign/replatforming, nárůst spendu nad ~50 tis. Kč/měs (SK ekvivalent 2 000 €).
6. **SK jako trh**: slovenské firmy platí stejné sazby v EUR a SK agentury přicházejí do Prahy; česká nabídka s cenou v Kč i EUR a slovensky
   srozumitelnými case studies je na SK prodejná bez slevy. Konkurence: DASE (jediná specializovaná), Dexfinity (e-shopy, provizní model).
7. **Zabalit údržbu sGTM jako položku paušálu** (A5, G5) s explicitní cenou – Starbomedia ji orientačně ceníkuje 100–300 €/měs; klient ji
   zná jako náklad a lze ji použít jako „vstupenku“ do širší správy.

---

## 5. Mezery rešerše

- **Komunitní zdroje**: FB skupiny (Webová analytika CZ/SK, Marketéri SK), LinkedIn posty a Slack/Discord nebyly dostupné – chybí syrové
  výpovědi klientů („pokazilo sa meranie“, „koľko stojí“); painy pocházejí z blogů odborníků, ne od klientů.
- **ADMA ceník 2025 přímo** (adma.sk stránky 404, PDF 2022 nedostupné) – 65 €/h převzato z citace dobrymarketing.sk; ověřit.
- **Nedostupné weby (403/404)**: Vivantina, dabl.sk, ecommercebridge.sk (článek „Efektívna analytika pre eshopy“, profil DASE, ui42 expanze),
  Riesenia.com, Datacop, Boosters.sk, ui42 stránka analytiky, Basta stránka služby analytiky, Cocuma/Blueweb inzerát.
- **DASE**: hodiny v paušálu, reakční doba, obsah „pravidelnej kontroly dát“ (jak často, co konkrétně) – jen z blogu; kandidát na mystery
  shopping / rozhovor.
- **Dexfinity**: cena analytiky v rámci provizního modelu a technika alertů (nástroj? BQ?) neznámá.
- **Visibility**: vazba SK VISIBILITY s.r.o. ↔ CZ VISIBILITY DIGITAL s.r.o. doložena jen značkou; SK web službu nepopisuje.
- **Platy.sk** nemá pozici „webový analytik“; použit „špecialista marketingových analýz“ a „dátový analytik“.
- Citát E3-025 („Consent banner je nasadený…“) je zpětný překlad z parafrázy nástroje – před použitím ověřit doslovnost na zdroji.
- Vyhledávací rozpočet vyčerpán: nedohledány SK freelance profily na LinkedIn se sazbami, SK Shoptet diskuse, sGTM ceny TechWeb.
