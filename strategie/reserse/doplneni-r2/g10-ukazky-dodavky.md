# Doplnění R2 / G10 – Ukázky dodávky: co klient fyzicky dostane

Datum přístupu všech zdrojů: **2026-09-04**. Fáze 11. Data: `strategie/data/fragments/r2-g10-evidence.csv` (38 řádků, `EG10-001`–`EG10-038`).

Mezera, kterou tento report zavírá (z `04-trh-us.md` § 5 a `07-dodavka-a-reporty.md` § 5):
„nenalezen žádný skutečný klientský měsíční report se screenshoty, žádný SLA dokument s čísly mimo UK/US, žádná ukázka changelogu
ani rekonciliace jako klientského výstupu.“

---

## 1. Shrnutí (10 bodů)

1. **Skutečné klientské měsíční reporty existují a jsou dohledatelné** – tři kusy (EG10-001, EG10-027, EG10-028), všechny přes
   SlideShare, všechny s reálnými čísly a dvě z nich s komentářem a doporučeními. Přímé načtení slideshare.net vrací chybu; funguje
   `r.jina.ai` prefix. Všechny tři jsou z éry Universal Analytics (2010–2015) – **GA4-éra klientský report se veřejně nenašel**.
2. **Formát, který nese hodnotu, není graf, ale srovnání s baseline + doporučení**: „144 zobrazení proti průměru 22“, „CTR 2,82 % proti
   oborovému průměru 2 %“ (EG10-027) a závěrečný slide „Action Plans to Consider“ (EG10-028). Nejnovější report (EG10-001) má naopak
   jen metriky vs. minulé období bez jediného komentáře – a je to přesně ten typ reportu, který US komunita v 1. kole označila za nečtený.
3. **SLA s čísly se našlo, ale odjinud, než rešerše čekala.** Nejsilnější nález: **GA4Dataform (EU) slibuje první reakci až do 3 pracovních
   dnů** a u tieru Premium výslovně „No SLA-backed response times apply“ (EG10-011). Laťka reakční doby v měřicím oboru je extrémně nízko.
4. **Referenční ceník reakčních dob dodává Google sám**: Cloud Silver P1 = 4 h v provozní době, Gold P1 = 1 h 24×7, Platinum P1 = 15 minut
   24×7 (EG10-013); GA 360 SLA má 99,9 % sběr / 99 % reporting / 98 % zpracování a u XL property připouští **až 7 dní zpoždění**
   zpracování (EG10-012). To je použitelný argument: i Google si nechává rezervu, kterou někdo musí denně kontrolovat.
5. **Changelog měření jako veřejný artefakt existuje – GOV.UK** (EG10-019): měsíční záhlaví, název změny, odstavec „co se změnilo, proč,
   jaký to má dopad“. Doplňuje ho **GA4 annotations report** (EG10-023) s poli datum od / datum do / kategorie / název problému / detail dopadu
   a **7krokový proces změn měření** s dvojím testem (vývojář + analytik) a povinnou aktualizací dokumentace (EG10-020).
6. **Automatický changelog jde postavit za odpoledne**: Apps Script `gtm-version-change-to-ga-annotation` zapisuje každou publikovanou verzi
   GTM jako anotaci přímo do GA4 (EG10-005). V ČR to nikdo nenabízí.
7. **Rekonciliace jako klientský výstup**: nejbližší nalezená ukázka je GA4 Auditor „duplicate purchases“ (EG10-032) – varování s počtem
   duplicit a dopadem na tržby, karty s dotčenými `transaction_id` a detailní tabulka `transaction_id / event_timestamp / purchase_revenue /
   počet opakování`; práh **červená při >5 duplicit nebo >5 % nákupů**.
8. **Nejlépe popsaný formát nálezu na trhu je Trackingplan** (EG10-031): shrnutí lidskou řečí → hypotéza příčiny → doporučené kroky →
   podmínky výskytu → ukázkové hity k reprodukci → odhad dopadu na ROAS/atribuci. Doručení jako **ranní digest**, ne jako proud alertů.
9. **Kompletní auditní sada ~20 kontrol jde bez BigQuery** (EG10-026, kpplaybook Looker Studio dashboard: „Kolik sessions je Unassigned?“,
   „Sbíráte data ze staging domén?“, „Je Google Ads správně propojený?“). Naopak oficiální Google řešení `ga4_dataform` (EG10-018)
   **nemá žádné data quality assertions** – transformace ano, hlídání ne.
10. **GitHub vydal 17 nových nástrojů**, které 1. kolo nemělo: od validace dataLayeru proti JSON schématu (EG10-002, EG10-010) přes
    Z-Score/STL/PELT detekci anomálií (EG10-004, EG10-007) po QA protokol v XLSX se screenshoty eventů (EG10-009).

---

## 2. FAKTA

### 2.1 Katalog nových ukázek dodávky (38 položek, `EG10-001`–`EG10-038`)

Sloupec **BQ** = vyžaduje GA4 export do BigQuery.

| # | Ukázka / URL | Typ | Co přesně obsahuje nebo hlídá | Kódy | BQ | Evidence |
|---|---|---|---|---|---|---|
| 1 | [SlideShare – Google Analytics Monthly Performance Report](https://www.slideshare.net/slideshow/google-analytics-monthly-performance-report-52410167/52410167) | **skutečný klientský měsíční report** | 11 slidů, 1.–24. 8. 2015 vs. 2014: tabulka 5 metrik s % změnou, časové řady, zdroje (organic/cpc/direct/referral), města a země, zařízení, top vstupní stránky, dotazy. Bez komentáře a doporučení | F3 | ne | EG10-001 |
| 2 | [SlideShare (markkegley) – Monthly Web Analytics Report](https://www.slideshare.net/markkegley/web-analytics-reportlinkedin) | **skutečný klientský měsíční report** | 9 slidů, červen 2010. Sekce: Site Performance / How They Came To The Site / Search Performance / Top Content / Social off-site / Member Database / E-Newsletter. Čísla s baselinem (CTR 2,82 % vs. obor 2 %; článek 144 vs. průměr 22) + doporučení | F3, F4 | ne | EG10-027 |
| 3 | [SlideShare (dleath) – Web Analytics Presentation (no client name)](https://www.slideshare.net/dleath/web-analytics-presentation-no-client-name) | **skutečný klientský report** | 16 slidů, 26. 4. 2011. Pořadí: obchodní cíle → cíle a filtry → dashboardy → zjištění → **„Action Plans to Consider“**. Konkrétní čísla (5 043 návštěv, bounce 14,75 %, konverze cílů 4 238 / 2 017 / 2 169) | F3, F4, C1 | ne | EG10-028 |
| 4 | [GA4Dataform – Service Level Agreement](https://ga4dataform.com/sla/) | **SLA s čísly (EU)** | Core/Community: jen GitHub a Measure Slack, žádná garance. Premium: „No SLA-backed response times apply“. Custom: první reakce do 3 pracovních dnů. Podpora Po–Pá 10:00–01:00 CET | H5 | ano | EG10-011 |
| 5 | [Google – GA 360 Suite SLA](https://marketingplatform.google.com/about/analytics_products/sla/) | **SLA s čísly** | Sběr ≥ 99,9 %, reporting ≥ 99 %, zpracování ≥ 98 %. Latence: normal 4 h, large 48 h, XL **7 dní**. Kredity 5/10/15/25 % podle pásma, nahlásit do 30 dní | H5, E1 | ne | EG10-012 |
| 6 | [Google Cloud – Technical Support Services Guidelines](https://cloud.google.com/terms/tssg/index-20170913) | **SLA / ceník reakčních dob** | Silver P1 4 h (provozní doba), Gold P1 1 h (24×7), Platinum P1 15 min (24×7); P2 4–8 h, P3/P4 8 h. Bronze = bez technické podpory | H5, A5, E2 | ne | EG10-013 |
| 7 | [GOV.UK – GA4 improvements changelog](https://docs.data-community.publishing.service.gov.uk/processes/govuk-ga-roadmap/ga-changelog/) | **changelog měření** | Měsíční záhlaví, název změny, odstavec co/proč/dopad. 1–5 položek měsíčně, leden–říjen 2025 | A3, H2, C5 | ne | EG10-019 |
| 8 | [GOV.UK – GA4 annotations](https://docs.data-community.publishing.service.gov.uk/products/govuk-ga4-annotations/) | **changelog + kalendář událostí** | Looker Studio nad 2 Sheety: změny sběru dat a externí události. Pole: datum od, datum do, kategorie, název problému, detail dopadu | A3, H2, F3 | ne | EG10-023 |
| 9 | [GOV.UK – GA4 tracking change process](https://docs.data-community.publishing.service.gov.uk/processes/ga-tracking-changes/) | **proces změnového řízení** | 7 kroků: požadavek → vyhodnocení hodnoty → schéma → implementace a test vývojářem → test analytikem → nasazení → aktualizace záznamu. GTM změny zvláštním procesem | H1, H2, A2, A3, A4 | ne | EG10-020 |
| 10 | [GOV.UK – GA4 users monitoring](https://docs.data-community.publishing.service.gov.uk/products/govuk-ga4-users-monitoring/) | **audit přístupů jako produkt** | Looker Studio nad access logy: celkový počet uživatelů a service účtů; tři kategorie k řešení – neplatné adresy, domény mimo povolené, **neaktivní 6 měsíců** | C6, A3 | ano (logy) | EG10-021 |
| 11 | [GOV.UK – GA4 data quality](https://docs.data-community.publishing.service.gov.uk/data-sources/ga/ga4/data-quality/) | **seznam známých vad dat** | Boti vývojářů spouštějí sběr; consent a blokátory; `form_complete` při každém refreshi; `view_item_list` oříznutý na 200 položek; parametry max 500 znaků | H2, C2, B2, A4 | ne | EG10-022 |
| 12 | [GOV.UK – GA4 usage report](https://docs.data-community.publishing.service.gov.uk/products/ga4-usage-dashboard/) | **dashboard čerpání API kvót** | Přístupy k produkčním datům a spotřeba API tokenů na uživatele, dělitelné podle mechanismu a typu reportu | C6, F1, F2 | ne | EG10-024 |
| 13 | [alphagov/ga4-dataform](https://github.com/alphagov/ga4-dataform) | GitHub (produkční kód státní správy) | „code used by GOV.UK to partition and flatten GA4 data using DataForm“ | E3, E1 | ano | EG10-017 |
| 14 | [GA4 Auditor – Duplicate purchases](https://ga4-auditor.dev/en/blog/duplicate-transactions-deduplication) | **rekonciliace jako klientský výstup** | Varování s počtem duplicit a dopadem na tržby; karty s `transaction_id`; detailní tabulka `transaction_id / event_timestamp / purchase_revenue / počet opakování`; červená při >5 duplicit nebo >5 % nákupů | G2, D5, E3 | ano | EG10-032 |
| 15 | [Trackingplan](https://www.trackingplan.com/) | **formát nálezu + digest** | Hlídá chybějící/zahozené eventy, propady a spiky, nesouhlas typů, porušení konvencí eventů a UTM, rozbité pixely (Meta, TikTok, Ads), consent a únik PII. Nález = shrnutí lidskou řečí + hypotéza příčiny + doporučené kroky + podmínky + ukázkové hity + dopad na ROAS. Ranní digest | G1–G4, G7, B1, D4 | ne | EG10-031 |
| 16 | [kpplaybook – GA4 Audit (Looker Studio)](https://kpplaybook.com/resources/google-analytics-4-audit/) | **auditní dashboard, 5 stran** | Akvizice (kolik mediumů, velká písmena, paid vs. organic social, „Unassigned“), stránky (case sensitivity, query parametry, PII v URL, 404), eventy (počet, duplicity, trend konverzí), kvalita dat (staging domény, self-referral, propojení Ads, demografie), e-commerce (duplicitní a testovací transakce, trychtýř) | C1–C4, D4, A6 | **ne** | EG10-026 |
| 17 | [DP6 – penguin-datalayer-collect](https://github.com/DP6/penguin-datalayer-collect) | GitHub (monitoring dataLayeru) | Validace dataLayeru proti JSON schématu; status ERRO / WARNING / OK + timestamp, schéma, objekt, klíč → BigQuery → Data Studio dashboard chybovosti. Terraform, Cloud Function | A4, G4, E3 | ano | EG10-002 |
| 18 | [Knowit – GA4 Documentation & Administration Solution](https://github.com/Knowit-Experience-MarTech/ga4-documentation-administration-solution) | GitHub (živá dokumentace měření) | Google Sheet jako dokumentace eventů, key eventů, parametrů a anotací; API pro hromadné create/edit/delete dimenzí, metrik a key eventů; Looker Studio Basic (Sheet) a Advanced (BQ) s detekcí anomálií | H2, A3, C1, C6 | volitelně | EG10-003 |
| 19 | [SENTRY.mark](https://github.com/francescaetnom-wq/SENTRY.mark) | GitHub (anomálie + Slack) | Klouzavý Z-Score baseline: **Z > 1,96 = MEDIUM, Z > 4,0 = CRITICAL**; klasifikace bot attack / **tracking break** / ghost 404 / PPC spike / currency glitch; Slack webhook | G1, G3, E3 | ano | EG10-004 |
| 20 | [gtm-version-change-to-ga-annotation](https://github.com/duracelltomi/gtm-version-change-to-ga-annotation) | GitHub (**automatický changelog**) | Apps Script: každá publikovaná verze GTM se přes Tag Manager API a Analytics Admin API zapíše jako anotace do GA4. Časový trigger (např. hodinově), limit 6 min runtime | A3, H2, C5 | ne | EG10-005 |
| 21 | [Trackboard](https://github.com/Astoriel/trackboard) | GitHub (open-source Avo) | Event contracts, review změn **před** rozbitím měření, typované helpery, validace produkčních eventů; **GitHub PR check blokující breaking změnu**; DLQ neplatných eventů seskupená podle problému | A4, H1, H2, G7 | ne | EG10-006 |
| 22 | [GA4-Anomaly-Detector](https://github.com/hugonissar/GA4-Anomaly-Detector) | GitHub (anomálie → markdown report) | STL dekompozice (**3,0 sigma**), PELT s RBF (penalty 10,0), Jensen-Shannon divergence na distribuce dimenzí. Výstup: markdown s headline, klíčovými zjištěními v %, mix-shift analýzou a watch listem – pro Slack, e-mail, dokumentaci | G1, E3, F3 | ano | EG10-007 |
| 23 | [Addocu](https://github.com/Addocu/addocu) | GitHub (inventura stacku) | Google Sheets add-on: metadata z 10 platforem (GA4, GTM, Looker Studio, Ads, BigQuery, Merchant Center, Search Console, YouTube, AdSense, Business Profile) do listů tabulky | C6, A3, A6, H2 | ne | EG10-008 |
| 24 | [tag-check](https://github.com/WodenWang820118/tag-check) | GitHub (**QA protokol po releasu**) | Přehraje uživatelské cesty, nahrává `.webm` video, čte GTM preview, rekonstruuje dataLayer. Výstup: **XLSX report s dataLayer výstupem, raw requesty, rekonstruovanými payloady a screenshoty eventů** | A1, A4, G4 | ne | EG10-009 |
| 25 | [ga4-datalayer-as-code](https://github.com/dgizdevans/ga4-datalayer-as-code) | GitHub (měřicí plán jako kód) | 48 schémat eventů, sdílené definice, párové ukázkové payloady, validační skripty, generovaná dokumentace `docs/EVENTS.md`; governance metadata `x-event-class`, `x-pii`, `x-sensitivity` proti driftu názvů mezi releasy | A4, H2, B | ne | EG10-010 |
| 26 | [tracking-auditor-extension (mbaersch)](https://github.com/mbaersch/tracking-auditor-extension) | GitHub (QA napříč platformami) | DevTools záložka: hity po blocích podle navigace, název eventu, parametry, souhrn user-data s detekcí hashe, **dekódovaný stav consentu**. GA4 vč. Stape loaderu a sGTM, Ads, Floodlight, Bing, Meta, LinkedIn, TikTok, Pinterest, Reddit, Snapchat, HubSpot, Criteo, Taboola, Outbrain, Awin | A1, B1, D1–D3 | ne | EG10-014 |
| 27 | [ga4-export-fixer (tanelytics)](https://github.com/tanelytics/ga4-export-fixer) | GitHub (7 vad BQ exportu) | Slučuje daily / fresh (360) / intraday; doplňuje `session_id` a `landing_page`; nuluje placeholder `transaction_id` a opravuje `purchase_revenue`; řeší session přes půlnoc, ztrátu `item_list` atribuce; přidává flag **`data_is_final`** | E1, E3, G2 | ano | EG10-016 |
| 28 | [dataform-ga4-sessions](https://github.com/ArtemKorneevGA/dataform-ga4-sessions) | GitHub (assertions) | „Base session assertions: timeliness, completeness, validity“. Deprecated ve prospěch GA4Dataform | E1, E3, A4 | ano | EG10-015 |
| 29 | [google-marketing-solutions/ga4_dataform](https://github.com/google-marketing-solutions/ga4_dataform) | GitHub (oficiální Google) | Sessions, user transactions daily, events; unikátní klíče, gclid widening, event-level last-click. **Bez data quality assertions a bez monitoringu** | E3 | ano | EG10-018 |
| 30 | [ga4dataform-community](https://github.com/superformlabs/ga4dataform-community) | GitHub (freemium jádro) | Flatten + sessionizace syrových GA4 tabulek; kvalita dat a podpora až v placených tierech (viz SLA #4) | E3 | ano | EG10-036 |
| 31 | [Chimera](https://github.com/NikolaWissenklaus/Chimera) | GitHub (diagnostika 3 vrstev) | V konzoli současně žlutě `dl.push()`, modře zpracování tagu v GTM, zeleně dekódovaný GA4 request na `/g/collect` a `/j/collect`, se společným pořadovým číslem. Meta/Floodlight/Criteo nezachytí | A1, A4, G4 | ne | EG10-029 |
| 32 | [N8N GA4 Backfill Workflow](https://github.com/aliasoblomov/N8N-GA4-Backfill-Workflow) | GitHub (historizace + provozní alert) | 13 předpřipravených GA4 reportů paralelně do BigQuery s razítkem období; historický backfill i denní sync; **Telegram souhrn úspěšných a neúspěšných dotazů po každém běhu** | E1, E4, E6, G6 | ano | EG10-030 |
| 33 | [analytics-tracking-automation](https://github.com/jtrackingai/analytics-tracking-automation) | GitHub (AI workflow) | Analýza webu → schéma eventů → sync do GTM → ověření v preview → publikace. Artefakty: analýza webu, business-friendly seskupení stránek, kompaktní tracking plan, GTM-ready výstupy, shrnutí ověření. U Shopify **ruční** post-install validace | A1, A2, A4, H2 | ne | EG10-033 |
| 34 | [event-contracts](https://github.com/iamroylim/event-contracts) | GitHub (drift v CI) | Offline Python CLI, JSON report na stdout, exit kódy 0/1/2; nálezy obsahují názvy schémat a cesty, nikdy hodnoty properties | A4, H1 | ne | EG10-034 |
| 35 | [Trackie](https://github.com/pualien/Trackie) | GitHub (multi-platform debug) | DevTools panel: dataLayer po načteních stránky, každý push jako podskupina + detaily odeslaných tagových requestů. GTM, Tealium, Commanders Act, DTM; GA4, Adobe, Floodlight, Comscore, Criteo, Facebook, Segment… | A1, A4, D1–D3 | ne | EG10-035 |
| 36 | [mcp-gtm-ga4](https://github.com/mharnett/mcp-gtm-ga4) | GitHub (consent audit + verze) | 14 nástrojů; `gtm_audit_consent` = „Audit all tags in the workspace for consent configuration compliance“; `gtm_create_version` = verzovaný snapshot kontejneru | B1, A3, C1, C6 | ne | EG10-037 |
| 37 | [ga4-tracking-logger panel](https://github.com/RicSti/ga4-tracking-logger-chrome-extension-panel) | GitHub (QA export) | Loguje GA4/UA volání s datem a časem; tlačítko Download exportuje zachycené eventy jako **CSV** | A1, A4 | ne | EG10-038 |
| 38 | [Avo – Tracking Plan](https://www.avo.app/docs/workspace/tracking-plan) | dokumentace produktu | Plán = eventy, properties, journeys, metriky, zdroje, stakeholdeři; změny v branchích s review a schválením před merge; Avo Codegen generuje typově bezpečný kód do CI/CD | H2, A4, H1 | ne | EG10-025 |

### 2.2 Doslovné citáty, které mění tón nabídky

| Citát | Zdroj | Proč je důležitý |
|---|---|---|
| „First response to bug reports: **within 3 business days**“ | GA4Dataform SLA, EG10-011 | Placený evropský měřicí produkt slibuje 3 pracovní dny. Slib „do 8 h“ je diferenciátor, ne standard. |
| „No SLA-backed response times apply“ (tier Premium) | GA4Dataform SLA, EG10-011 | I zaplacený vyšší tier je bez závazku. |
| „XL GA4: **within 7 days** of midnight (Pacific Time)“ | GA 360 SLA, EG10-012 | Sám Google si u velkých property vyhrazuje týden. |
| „Analytics schemas usually **drift silently**: an event is renamed in one client, a required property disappears… before anyone notices the broken dashboard.“ | event-contracts, EG10-034 | Nezávislé potvrzení H2 jinou komunitou (data/product engineering). |
| „**tracking break**“ jako jedna z pěti tříd anomálií vedle bot attack, ghost 404, PPC spike, currency glitch | SENTRY.mark, EG10-004 | Rozbité měření je v monitoringu samostatná, pojmenovaná kategorie. |
| „A bug which led to contact type `form_complete` events firing on the completion of other forms across GOV.UK has now been fixed.“ | GOV.UK changelog, EG10-019 | Vzorová věta changelogu: co bylo špatně, kde, a že je to opravené. |
| „The Analytics team will evaluate the need for and value of any requested changes to ensure GA4 data collection is of a high quality and **value for money**.“ | GOV.UK change process, EG10-020 | Změnové řízení jako obrana proti bobtnání kontejneru – prodejný argument. |
| „Status turns red when encountering **>5 duplicates or >5 % of purchases**.“ | GA4 Auditor, EG10-032 | Konkrétní práh do veřejného „co hlídáme“. |
| „Trackingplan's **Digests** will notify your team with all you need to know about the state of your data at the beginning of your work day.“ | Trackingplan, EG10-031 | Digest > proud alertů. Potvrzuje rytmus „denně automat → ráno člověk“. |
| „Are you collecting data from your **staging/test domains**?“ | kpplaybook audit, EG10-026 | Auditní otázky formulované lidsky, ne jako metriky. |

### 2.3 Co z artefaktů vyžaduje BigQuery a co ne

| Artefakt | Ukázka | BQ |
|---|---|---|
| QA protokol po releasu (XLSX / CSV / video / screenshoty) | EG10-009, EG10-038, EG10-029, EG10-014, EG10-035 | **ne** |
| Auditní dashboard 20 kontrol | EG10-026 | **ne** |
| Changelog měření + kalendář událostí | EG10-019, EG10-023, EG10-005 | **ne** |
| Proces změnového řízení, měřicí plán jako živý dokument | EG10-020, EG10-003, EG10-010, EG10-025, EG10-033 | **ne** |
| Audit přístupů a kvót | EG10-021, EG10-024, EG10-008, EG10-037 | částečně |
| Seznam známých vad dat („co o vašich datech víme, že není přesné“) | EG10-022 | **ne** |
| Validace dataLayeru proti schématu s dashboardem chybovosti | EG10-002 | ano |
| Detekce anomálií se statistickými prahy | EG10-004, EG10-007 | ano |
| Rekonciliace / duplicitní transakce s dopadem v Kč | EG10-032 | ano |
| Monitoring exportu a jeho vad, historizace | EG10-016, EG10-030, EG10-017 | ano |

Poměr: **z 38 ukázek jich 24 nepotřebuje BigQuery.**

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Na cenových pásmech (8 900 / 19 900 / 39 000 Kč)

- **Tiery zůstávají, ale mění se, čím se obhajuje ten nejnižší.** Doteď se 8 900 Kč obhajovalo „denními automatickými kontrolami“.
  Katalog ukazuje, že detekce je open-source komodita (EG10-004, EG10-007, EG10-002, EG10-026) – ale **artefakty kolem ní nejsou**:
  changelog, protokol QA po releasu, seznam známých vad dat, audit přístupů. To jsou položky, které se dají vyjmenovat do ceníku
  a všechny fungují bez BigQuery. Doporučení: v tieru Hlídání prodávat **čtyři artefakty** (měsíční changelog, protokol po releasu,
  jednostránkový komentář, kvartální audit přístupů), ne „monitoring“.
- **Reakční doba je podceněná cenová osa.** Trh měření slibuje 3 pracovní dny (EG10-011) nebo nic. Google si za rozdíl mezi 4 h a 1 h
  účtuje skok mezi Silver a Gold (EG10-013). Návrh: reakční dobu **explicitně cenit** – „do konce dalšího pracovního dne“ v 8 900,
  „do 8 h v pracovní době“ v 19 900, „do 4 h“ v 39 000 – protože je to jediné číslo v nabídce, které konkurence v ČR i v EU nemá.
- **Cena vyššího tieru se obhajuje čísly, ne přítomností BigQuery.** Nejlepší nalezená formulace je práh GA4 Auditoru
  (červená při >5 % nákupů, EG10-032) a Z-Score prahy SENTRY.mark (1,96 / 4,0, EG10-004). Do popisu tieru Datová správa patří
  **konkrétní prahy**, ne „hlídáme anomálie“.
- **Provoz sGTM jako samostatná položka je potvrzen nepřímo** – Google Cloud TSSG (EG10-013) ukazuje, že reakční doba na provozní
  incident je samostatně placená služba s vlastním ceníkem.

### 3.2 Na hypotéze H1 (správa je hlavně nad BigQuery)

**Dál oslabena, teď i na straně dodávky, ne jen na straně painu.** 24 z 38 nalezených artefaktů nepotřebuje export. Konkrétně:
kompletní auditní sada ~20 kontrol (EG10-026), celý QA řetězec po releasu včetně protokolu se screenshoty (EG10-009), changelog
(EG10-005, EG10-019), consent audit napříč tagy (EG10-037, EG10-014), měřicí plán jako kontrakt s PR checkem (EG10-006).
Zároveň se potvrzuje **BQ jako zlom do vyššího tieru**: rekonciliace po `transaction_id` s dopadem v tržbách (EG10-032),
statistické anomálie (EG10-004, EG10-007), sedm vad exportu, které někdo musí hlídat (EG10-016), a historizace přes 14měsíční
retenci (EG10-030) bez exportu nejdou. Nové zjištění: **oficiální Google řešení pro GA4 v BigQuery nemá žádné data quality
assertions** (EG10-018) – „máte export“ tedy neznamená „máte hlídané data“, což je přesně ta věta, kterou se prodává upsell.

### 3.3 Na hypotéze H2 (pain = měření se tiše rozbilo)

**Potvrzena z nového, nezávislého směru.** Dosud šla evidence z marketingových komunit. Teď přibývá slovník inženýrů:
„schemas usually **drift silently** … before anyone notices the broken dashboard“ (EG10-034) a **„tracking break“ jako
pojmenovaná třída anomálie** vedle bot útoku a měnové chyby (EG10-004). GOV.UK navíc dokládá, že i profesionálně vedené měření
se rozbíjí a musí se to evidovat: changelog obsahuje opravy typu „`form_complete` se spouštěl při dokončení jiných formulářů“
(EG10-019) a samostatnou stránku známých vad dat (EG10-022). To posiluje doporučení publikovat seznam „co o vašich datech víme,
že není přesné“ jako artefakt důvěry, ne jako přiznání chyby.

### 3.4 Na hypotéze H5 (část hodnoty nahradí SaaS)

**Potvrzena a doostřena.** Katalog obsahuje 17 nových nástrojů, které umí detekci zdarma. Rozdíl je v tom, co dělá s nálezem člověk.
Nejlepší popis dělby práce dodává Trackingplan (EG10-031): nástroj dodá shrnutí, hypotézu příčiny, doporučené kroky, podmínky a
ukázkové hity – a **člověk pak musí rozhodnout a opravit** (G7). Model GA4Dataform (EG10-036 + EG10-011) je ještě přímočařejší:
transformace zdarma, kvalita dat a reakční doba za peníze. Pro DataLayer.cz to potvrzuje pozici „nástroj je vstup, služba je výstup“ –
a přidává konkrétní důkaz, že i AI automatizace končí u ruční validace (Shopify branch, EG10-033).

### 3.5 Co se dá převzít doslova

1. **Formát changelogu** (EG10-019 + EG10-023): měsíc → název změny → co se změnilo, proč, dopad; k tomu tabulka `datum od / datum do /
   kategorie / název problému / detail dopadu`.
2. **Formát nálezu/alertu** (EG10-031): shrnutí lidskou řečí → hypotéza příčiny → doporučené kroky → podmínky výskytu →
   jak to reprodukovat → odhad dopadu na ROAS.
3. **Formát protokolu QA po releasu** (EG10-009): XLSX se sloupci dataLayer výstup, raw request, rekonstruovaný payload + screenshot eventu.
4. **Formát kontrolních otázek pro audit** (EG10-026): otázky, ne metriky („Sbíráte data ze staging domén?“).
5. **Formát reportu, který se čte** (EG10-027, EG10-028): 3–4 čísla proti baselinu, ne proti minulému měsíci, a slide „co s tím“ na konci.
6. **Proces změny měření v 7 krocích** s dvojím testem (EG10-020) jako příloha smlouvy – vysvětluje, proč se za změnu tagu platí.

---

## 4. MEZERY, které zůstávají

- **GA4-éra skutečný klientský report se nenašel.** Všechny tři nalezené reálné reporty jsou z Universal Analytics (2010, 2011, 2015).
  Novější agentury publikují jen šablony a marketingové stránky nástrojů. Slideshare/Scribd v GA4 éře prakticky nepoužívají.
- **Screenshoty rozhraní chybí i v nalezených reportech** – EG10-001 obsahuje přepsaná data, nikoli snímky GA. Ukázka „jak vypadá
  náš report“ s obrázkem se nepodařilo najít nikde.
- **SLA agentury s čísly stále chybí.** Nalezená SLA jsou produktová (GA4Dataform, Google Analytics 360, Google Cloud), ne servisní
  smlouvy analytických agentur. Český ani slovenský dodavatel měření s publikovanou reakční dobou nenalezen; MAGNAPRO (CZ) má
  stránku „Smlouva o úrovni služeb“, ale bez jediného čísla – detailní podmínky nejsou veřejné (ověřeno 2026-09-04).
- **Veřejné zakázky s přílohou „vzorový report“** se přes běžné vyhledávání nepodařilo otevřít; portály (NEN, TenderArena, TED)
  vyžadují vyhledávání ve vlastním rozhraní a nebyly z tohoto prostředí dosažitelné.
- **SlideShare i Scribd blokují přímé načtení** (JS shell); funguje jen `r.jina.ai` prefix a jen na detail prezentace, ne na výsledky
  vyhledávání – katalog reálných reportů tedy není vyčerpán, jen omezen dostupností.
- **GitHub API v tomto sezení nedovoluje číst obsah cizích repozitářů** (`Access denied … not configured for this session`);
  obsah README byl proto ověřován přes WebFetch stránky repozitáře, u čtyř repozitářů se nepodařilo dohledat detail nad rámec
  README (Liscor/terraform_dataform_ga4_pipeline, rimalesani/ga4-dataform-triggering, gtm-mcp, ga4dataform-docs) – nejsou v katalogu.
- **Ukázka reconciliace GA4 vs. backend e-shopu** stále chybí v čisté podobě: nalezená EG10-032 řeší duplicity uvnitř GA4, ne
  porovnání s objednávkami z e-shopu. Vzor pro „denní diff po `transaction_id` proti backendu“ jako klientský výstup zůstává nenalezen –
  potvrzuje se, že je to volné pole.
