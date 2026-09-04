# Fáze 8 – Analýza dodávky: co klient reálně dostane

Stav: hotovo (verze 1, 2026-09-04). Syntéza z fází 2–6 (`01`–`05`) a katalogu ukázek (`04-trh-us.md` § 2e).
Odkazy `E2-…`, `E4-…`, `E5-…` vedou do `data/evidence-log.csv`.

---

## 1. Shrnutí

1. **Průnik toho, co trh nazývá „správa měření“, je stabilní napříč regiony**: QA po releasu (A1), změny tagů (A2), hygiena
   klíčových událostí (C1), provoz konverzí do Ads/Meta (D1/D2), alert na propad eventu (G1/G4), oprava (G7), měsíční komentář (F3)
   a ad-hoc dotazy (H3). To nabízí ≥ 5 z 8 evropských nabídek s vyjmenovanou dodávkou i typický US retainer (E4 § 3.1, E5 § 3.1).
2. **Diferenciátory (nabízí < 30 %)**: reakční doba/SLA (jen UK a US), changelog a živá dokumentace, kvartální review měřicího
   plánu, reconciliace vs. backend, monitoring BQ exportu a nákladů, klientský portál, white-label pro agentury.
3. **V ČR nikdo veřejně nepopisuje ani neukazuje fyzickou dodávku** (report, alert, changelog) – jen slovně („zpráva psaná lidskou
   řečí“, „komentář k dashboardu“; E2-031, E2-014). Veřejné ukázky dodávky existují jen v anglofonním prostoru (31 položek v katalogu).
4. **Klient nečte dashboardy, čte jednu stránku.** Opakovaně (US komunita, narratiq, Reddit): měsíční výstup má být komentář se
   3–4 čísly, co se změnilo, proč a co s tím; churn vzniká „v tichu mezi reporty“ (E5 § 3.2).
5. **Rytmus je čtyřvrstvý**: denně automat, týdně digest, měsíčně report + call + QA, kvartálně review; u nejnižších tierů se
   měsíční vrstva mění na kvartální (Manids Minimum, Vixen „health check každých 6–12 měsíců“).
6. **BigQuery mění hloubku, ne seznam aktivit**: stejná položka („hlídáme purchase“) se bez BQ dělá přes GA4 Insights/Data API
   s denní granularitou a bez historie, s BQ přes SQL/assertions s tolerancemi po transaction_id a s neomezenou forenzní historií.

---

## 2. FAKTA

### 2.1 Matice aktivit × trh (kdo co nabízí)

Zdroj: tabulky subjektů ve fázích 2–5. „✔“ = nabízí většina subjektů s vyjmenovanou dodávkou, „◐“ = menšina / jen některé tiery,
„–“ = nenalezeno. Sloupec **Std/Dif** = standard (≥ 70 % nabídek se seznamem dodávky) / diferenciátor (< 30 %) / nikdo.

| Kód | Aktivita | CZ | SK | EU | US | SaaS umí | Std/Dif |
|---|---|---|---|---|---|---|---|
| A1 | QA po releasu | ◐ (DA, WEBUI) | ◐ (DASE „kontrola po zmene“) | ✔ | ✔ | Č | **standard** |
| A2 | Změny/přidání tagů | ✔ | ✔ | ✔ | ✔ | N | **standard** (ale limitované hodinami) |
| A3 | Verzování, changelog | ◐ (DA – jako samostatný produkt) | – | ◐ (Measurelab, Webdigita, surowiecki) | ◐ | Č | diferenciátor |
| A4 | Validace dataLayer | ◐ (Lecián, Waaila) | – | ◐ | ◐ (Liscor, IIH Nordic) | A | diferenciátor |
| A5 | Provoz sGTM | ✔ (Softmedia, DataPlus, Advisio) | ✔ (Starbomedia tabulka) | ✔ (ADS-Tracking, Manids) | ◐ | A | **standard, oddělená položka** |
| A6 | Úklid kontejneru | – | – | ◐ | ◐ | Č | diferenciátor |
| B1 | Tagy vs. consent | ✔ (Fragile, Advisio) | ✔ | ✔ | ✔ | Č | **standard** |
| B2 | Consent rate → dopad | ◐ | – | ◐ (Amplio Managed) | ◐ | Č | diferenciátor |
| B3 | Reakce na změny legislativy/Googlu | ◐ (Audy – jen lišta) | – | ◐ (LEMONTEC „proaktivní úpravy“) | ◐ | N | diferenciátor |
| C1 | Klíčové události, konverze, dimenze | ✔ | ✔ | ✔ | ✔ | Č | **standard** |
| C2–C3 | Retence, referraly, cross-domain | ◐ | ◐ | ◐ | ✔ (v auditu) | Č | standard v auditu, ne ve správě |
| C4 | (not set), direct, UTM | ◐ | – | ◐ | ✔ (Custom Insights) | A | diferenciátor v CZ, standard v US |
| C5 | Reakce na změny GA4 | – | – | ◐ | ◐ | N | diferenciátor |
| C6 | Přístupy, propojení | – | – | ◐ (Measurelab governance) | ◐ (NLD nález) | Č | diferenciátor |
| D1 | Google Ads konverze | ✔ | ✔ (v PPC správě) | ✔ | ✔ | Č | **standard** |
| D2 | Meta CAPI | ✔ | ✔ | ✔ | ✔ | Č | **standard** |
| D3 | Sklik, Bing, TikTok… | ✔ (Sklik u CZ) | ✔ | ◐ | ◐ | N (Sklik) | standard v CZ/SK |
| D4 | UTM konvence | ◐ | – | ◐ | ◐ | A | diferenciátor |
| D5 | Konverze vs. backend napříč platformami | – (jen jako pain) | ◐ (PPC „validácia voči tržbám“) | ◐ (Manids jako pain) | ◐ (Elevar Shopify) | Č | **diferenciátor** |
| E1 | Monitoring BQ exportu | – | – | ◐ (Measurelab „pipeline observability“) | ◐ (GOV.UK, konzultanti) | A | **nikdo v CZ/SK** |
| E2 | Náklady BQ | – | – | – | ◐ (GOV.UK dashboard) | A | nikdo komerčně |
| E3 | Transformace | ◐ (Ráš, Databy) | ◐ (Basta) | ◐ (Amplio Managed) | ◐ | Č | diferenciátor / projekt |
| E4 | Historizace | ◐ (Ráš, Machalová) | – | ◐ | ◐ | A | diferenciátor |
| E5 | Spojení s ad/CRM daty | ◐ (Effectix, MM, Databy) | ◐ | ◐ | ◐ | Č | projekt, ne správa |
| E6 | Konektory do BQ | – | – | ◐ | ◐ | Č | diferenciátor |
| F1 | Údržba dashboardů | ✔ | ✔ | ✔ | ✔ | Č | **standard** |
| F2 | Údržba konektorů (Supermetrics…) | ◐ (Khoder) | – | ◐ | ◐ | Č | standard implicitně |
| F3 | Měsíční komentovaný report | ✔ (Neogy, MM, Web S ÚSMĚVEM) | ✔ (DASE, Dexfinity) | ✔ | ✔ | N | **standard** |
| F4 | Kvartální review | – | – | ◐ (Amplio Managed) | ✔ (QBR ve všech US tierech) | N | **diferenciátor v EU/CZ, standard v US** |
| F5 | Nové reporty na vyžádání | ✔ (z hodin) | ✔ | ✔ | ✔ | N | standard (z hodin) |
| G1 | Alert propad eventu | ◐ (DA, WEBUI, DataPlus) | ◐ (Dexfinity) | ✔ (LEMONTEC, Manids) | ✔ | A | **standard v EU/US, diferenciátor v CZ** |
| G2 | GA4 revenue vs. backend | – | – | – | ◐ (Elevar) | A s BQ | **nikdo jako služba** |
| G3 | Skok (not set)/nové zdroje | – | – | ◐ | ✔ (Custom Insights) | A | diferenciátor |
| G4 | Tag monitoring | ◐ (Waaila, DataPlus) | – | ◐ | ◐ (GTM Monitor) | A | diferenciátor |
| G5 | Uptime sGTM | ◐ (DataPlus 24/7) | – | ✔ (v managed sGTM) | ◐ | A | standard u sGTM |
| G6 | Výpadek exportu/konektoru | – | – | ◐ | ◐ | A | diferenciátor |
| G7 | Reakce na alert | ✔ (reaktivně) | ✔ | ✔ | ✔ | N | **standard – ale bez závazku času** |
| H1 | Konzultace před releasy | ◐ (DA, Lecián) | ◐ | ✔ | ✔ | N | standard v EU/US |
| H2 | Živá dokumentace | ◐ (DA zvlášť) | – | ◐ | ◐ | N | diferenciátor |
| H3 | Ad-hoc dotazy | ✔ | ✔ | ✔ | ✔ | N | **standard** |
| H4 | Onboarding/školení | ✔ | ✔ | ◐ | ✔ | N | standard |
| H5 | Reakční doba / SLA | ◐ (WEBUI bez čísel, Khoder 24 h) | – (plexcore mimo analytiku) | ◐ (jen UK: 15 min – same-day) | ✔ (24–48 h; Elevar 12/24 h) | – | **nikdo v CZ/SK s číslem** |
| I1 | Ad-hoc analýzy | ✔ (Němec) | ◐ | ◐ (vyšší tiery) | ◐ | N | z hodin |

**Čtení matice:**
- **Standard, který musí být v každém tieru**: A1, A2 (limit hodin), B1, C1, D1–D3, F1, F3, G1, G7, H3.
- **Diferenciátory dostupné DataLayer.cz s nízkými náklady**: A3 changelog, C6 kvartální audit přístupů, F4 kvartální review, H5 číslo
  reakční doby, B3/C5 „sledujeme deadliny za vás“. V ČR to nikdo nedělá a stojí to hodiny, ne technologii.
- **Diferenciátory, kde je DataLayer.cz technicky silný a trh prázdný**: D5/G2 reconciliace vs. backend (Shoptet/Sklik/Heureka nemá
  žádný nástroj – E6 § 3d), E1/E2/E6 monitoring BQ exportu a nákladů, G4 tag monitoring přes sGTM logy.

### 2.2 Katalog artefaktů dodávky (co klient dostane do ruky)

Z 31 ukázek v `04-trh-us.md` § 2e + EU/CZ zdrojů. Výběr těch, které definují formát; plný seznam s URL je v US reportu.

| Artefakt | Kdo to ukazuje | Formát / obsah | Kód | BQ |
|---|---|---|---|---|
| **Sada denních kontrol s prahy** | GOV.UK (E5-057) | 6 kontrol: tabulka přišla; ±5 % eventů celkem; nové/zmizelé eventy; ±15 % per event nad 10k; nové/zmizelé parametry; ±20 % parametrů. E-mail 12–13 h. | E1, G1, G3 | ano |
| **Sada Custom Insights s prioritami** | Bounteous (E5-044) | 55+ alertů: „Daily Pageview < 1“, „Weekly Revenue −15 %“; priority Informative / Early Warning / Emergency | G1, G3, C1 | ne |
| **Denní SOP bez BQ** | Reddit SOP (E5-085), Shopify komunita (E7-016) | Data API: včera vs. stejný den minulý týden pro page_view, session_start, purchase, source/medium; objednávky vs. konverze s tolerancí 15 % | G1, G2 ručně | ne |
| **Slack alert** | The Data Story (E5-060) | „{event} is at least {X}% lower than last week / Yesterday: {yd} / Week before: {wb}“ | G1 | ano |
| **Tag monitor** | Simo Ahava GTM Monitor + server-container-monitor (E5-048–050) | per event: tag id, name, status, execution time → BQ → dashboard | G4, G5 | ano |
| **sGTM monitoring politiky** | Team Simmer (E5-046) | Cloud Monitoring: 4xx/5xx na /g/collect, CPU 60 %, instance 8, latence 2 s | G5, A5 | ne |
| **Dataform/dbt testy** | Liscor, Velir, Stacktonic, IIH Nordic (E5-051–054, E5-061) | purchase má transaction_id a revenue > 0; items mají id/qty/value; source freshness | A4, E3 | ano |
| **Anomálie ML** | Tognon, GA4Dataform (E5-055–056) | ARIMA_PLUS na denní metriky per dimenze → assertion → alert | G1, E3 | ano |
| **Týdenní digest** | NiceLookingData (E5-067), ga4monitor | „Monday digest: what moved, what broke, what's new“; nález ve formátu „3 osobní Gmail účty mají Administrator“ | C1–C6, A3 | ne |
| **Měsíční report – struktura** | narratiq (E5-063) | 8 stran: exec summary 4 KPI vs. M-1 → akvizice → obsah → konverze → **2–3 doporučení**; „read the summary in 60 seconds“ | F3 | ne |
| **Měsíční komentář – jedna stránka** | US komunita (E5 § 3.2), Neogy (E2-031) | 3–4 čísla, co se změnilo, proč, co s tím; „zpráva psaná lidskou řečí“ | F3 | ne |
| **Health-check checklist** | Fresh Egg (E4-047), Vixen 40–80 kontrol, GA4 Auditor 100+ bodů | šablona pro C1–C6 v onboardingu a kvartálně | C1–C6 | ne |
| **Checklist po releasu** | fáze 7 (E7-101) | 10 bodů, ~40 min: thank-you URL, dataLayer, formuláře, UTM průchod, consent, purchase hodnoty, duplicity | A1 | ne |
| **Tier tabulka s kadencí** | E2M (E5-014), Amplio, Manids | hodiny; progress call měsíčně → 2× měs. → týdně; QBR; turnaround 24–48 h | H3, H5, F4 | ne |
| **Klientský portál** | Measurelab my.measurelab (E5-011) | stav tagů, SLA, tickety | H5 | částečně |
| **Changelog / dokumentace** | Digitální architekti (E2-004), Webdigita, surowiecki | dokumentace GA/GTM jako živý dokument, popisy verzí | A3, H2 | ne |
| **Audit reportu formát** | Vixen (£1 500–3 000), GA4 Auditor PDF/PPT | vstupní artefakt onboardingu | C | ne |

Co v katalogu **chybí** (mezera trhu i rešerše): skutečný klientský měsíční report se screenshoty, SLA dokument s čísly mimo UK/US,
ukázka changelogu, ukázka reconciliace GA4 vs. backend jako klientský výstup. To jsou artefakty, které může DataLayer.cz
publikovat jako první v ČR.

### 2.3 Rytmus dodávky

| Frekvence | Automat (nástroj/SQL) | Člověk | Zdroj vzoru |
|---|---|---|---|
| **Denně** | kontrola exportu (E1), počet eventů ±5 % (G1), purchase/revenue vs. backend s tolerancí (G2), (not set)/direct (G3), tag status (G4), sGTM 5xx (G5) → Slack/e-mail | triáž alertů ráno („we actively check our feeds every morning“), G7 do X h | GOV.UK, Reddit SOP, Team Simmer |
| **Týdně** | digest „co se hnulo, co se rozbilo, co je nové“ (C1–C6, A3 změny kontejneru), PII kontrola | přečtení digestu, zápis do changelogu | NLD, GOV.UK Looker alert |
| **Při releasu** | Checkly/Playwright průchod (A1 automat) | 10-bodový checklist, potvrzení do 24 h, konzultace před releasem (H1) | E7-101, Trackingplan |
| **Měsíčně** | čísla do reportu (F1) | jednostránkový komentář (F3), call, GTM/consent QA (A3, B1), kontrola konektorů (F2), Ads/Meta konverzní akce (D1/D2) | E2M, narratiq, DASE |
| **Kvartálně** | – | review měřicího plánu a KPI (F4), audit přístupů (C6), úklid kontejneru (A6), aktualizace dokumentace (H2) | US QBR, Manids Minimum, Šutarík/TechWeb doporučení |
| **Při změně prostředí** | sledování changelogů GA4/GTM/Ads/Meta/Shoptet/Shopify | B3/C5: vyhodnocení dopadu a proaktivní úprava před deadlinem | LEMONTEC, fáze 7 § 2c |

Nejnižší tiery na trhu (Manids Minimum, Vixen health-check, LEMONTEC) škrtají měsíční lidskou vrstvu a nechávají denní automat +
kvartální review + opravy při alertu. To je nejlevnější životaschopná podoba správy.

### 2.4 Dodávka pro klienta s BigQuery vs. bez BigQuery

| Položka | Bez BQ (nativní GA4 / konektory) | S BQ exportem |
|---|---|---|
| Hlídání propadu eventů (G1) | GA4 Custom Insights (max 50/property, hodinově, e-mail) + denní Data API skript; bez historie nad 14 měs.; thresholding může maskovat | SQL nad denní tabulkou s prahy per event; ARIMA anomálie; historie neomezená |
| GA4 vs. backend (G2/D5) | ručně měsíčně nebo denně tabulkou s tolerancí 15 %; nerozliší ztrátu od duplicit (N7-157) | denní diff po transaction_id; baseline „normální“ rozdíl per zdroj/zařízení; odhalí duplicity i tichý propad objemu |
| QA po releasu (A1) | stejné (checklist + Checkly) | + kontrola, že eventy po releasu dorazily do exportu se správnými parametry (Dataform test) |
| Consent (B1/B2) | kontrola chování tagů; consent rate z GA4 UI | + dopad consentu po dnech/zařízeních; modelovaná vs. měřená data |
| Tag monitoring (G4) | jen přes sGTM logy (3–10 dní) nebo SaaS | GTM Monitor / sGTM log sink do BQ, neomezená historie |
| Export a náklady (E1, E2, E6) | netýká se | denní kontrola tabulky, objem, zpoždění; budget alerty; konektory |
| Reporting (F1) | Looker Studio nad nativním konektorem (kvóty, pomalé, thresholding) + údržba Supermetrics/Windsor tokenů (F2) | Looker Studio nad BQ (bez kvót), stabilnější zdroje |
| Měsíční komentář (F3) | stejné | + „kolik konverzí chybělo a proč“ v číslech |
| Historie po ztrátě přístupu (C6/E4) | ztracena s property | zůstává v klientově GCP projektu |
| Provozní břemeno navíc | údržba konektorů | údržba exportu a transformací (r/bigquery: „another setup to maintain“) |

Závěr pro fázi 10: **seznam položek je oba tiery téměř stejný; liší se metoda, spolehlivost a schopnost říct „proč a kolik“.**
Cena vyššího tieru se obhajuje forenzní hloubkou (G2 po transaction_id, historie, anomálie), ne „máme monitoring“.

---

## 3. INTERPRETACE

- **Trh neprodává nic, co by DataLayer.cz neuměl; prodává to ale bez čísel a bez artefaktů.** V ČR je dodávka popsaná slovně a
  reaktivně. První hráč, který zveřejní sadu kontrol s prahy, checklist po releasu, formát měsíčního komentáře a reakční dobu, má
  hmatatelný produkt tam, kde ostatní mají věty.
- **Standardní jádro je levné na dodání díky automatizaci** (fáze 6: detekce 0–5 000 Kč/měs v nástrojích). Lidský čas jde do triáže,
  oprav, QA při releasech a komentáře. Tomu odpovídá i to, že spodní tiery v EU stojí 5–7 tis. Kč – jsou to „automat + člověk na opravy“.
- **Diferenciátory se dělí na dvě skupiny**: (a) organizační (SLA, changelog, kvartální review, sledování deadlinů) – nestojí technologii,
  stojí disciplínu; (b) technické (reconciliace po transaction_id, BQ monitoring, tag monitoring) – vyžadují BQ nebo sGTM a v ČR/SK
  je nenabízí nikdo. DataLayer.cz může mít obě.
- **Jednostránkový komentář je důležitější než dashboard.** Všechny zdroje o churnu říkají totéž: klient odchází, když neslyší nic
  mezi reporty, ne když jsou čísla špatná. To zvyšuje váhu F3 a H5 vůči F1.

## 4. DOPORUČENÍ

1. **Publikovat dodávku jako artefakty, ne jako věty**: „Sada 12 kontrol“ (převzít GOV.UK prahy + Bounteous priority), „Checklist po
   releasu – 10 bodů“, „Jak vypadá náš měsíční komentář“ (anonymizovaná ukázka), „Reakční doba“ s číslem. Na webu i v nabídce.
2. **Jádro stejné pro všechny tiery** (A1, A2, B1, C1, D1–D3, F1, F3, G1, G7, H3); tiery lišit kadencí (kvartálně / měsíčně / týdně),
   reakční dobou, hodinami na změny a hloubkou (bez BQ / s BQ).
3. **Do každého tieru dát kvartální review (F4) a audit přístupů (C6)** – v US standard, v ČR nikdo; téměř nulové náklady.
4. **BQ tier prodávat na G2 a forenzní historii**, ne na „monitoringu“ – viz § 2.4.
5. **sGTM provoz jako oddělenou položku** škálovanou podle trafficu (standard v EU), s průchozím hostingem.
6. **Dokumentovat vlastní alert stack** jako interní standard onboardingu (GA4 Insights šablona, BQ SQL sada, Checkly scénář, sGTM log
   sink, Slack kanál per klient) – onboarding do 30 dnů, náklad na nástroje do 3 000 Kč/klient/měs (fáze 6 § 4.5).

## 5. Mezery

- Nenalezen žádný skutečný klientský měsíční report se screenshoty ani SLA dokument s čísly mimo UK/US (E5 § 5).
- Matice je postavená na veřejných webech; skutečný rozsah dodávky u agentur „na dotaz“ (Optimics, Trakken, Measurelab…) neznáme
  – kandidáti na mystery shopping / rozhovor ve fázi 10.6.
- CZ specifika (Shoptet, Sklik, Heureka, Zboží.cz) nemají v žádné ukázce dodávky protějšek – tady je DataLayer.cz na vlastním poli.
