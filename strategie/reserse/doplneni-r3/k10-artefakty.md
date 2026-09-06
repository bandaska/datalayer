# K10 – Artefakty dodávky: druhý pokus

Třetí kolo, priorita C6 (a částečně C3). Datum přístupu všech zdrojů: **2026-09-06**.
Data: `strategie/data/fragments/r3-k10-evidence.csv` (27 řádků, `EK10-001`–`EK10-027`, `phase=12`).

Zadání: kolo 2 prošlo 38 ukázek a nenašlo ani jeden skutečný klientský report z éry GA4, ani ukázku denní
reconciliace jako klientského výstupu, ani SLA dokument s čísly mimo UK/US. Tohle kolo to zkusilo jinými
cestami: přílohy zadávacích dokumentací, veřejné instituce, konferenční přednášky, GitHub jinými dotazy,
veřejné šablony (Notion/Coda/Google Docs) a lead magnety agentur.

---

## 1. Shrnutí

1. **Odpověď na hlavní otázku:** artefakty existují, ale ne ty, o které jsme se chtěli opřít – našel se
   **jeden skutečný klientský report z éry GA4** (jednostránkový PDF export z GA4 Explorations s názvem
   „Untitled exploration“, `EK10-018`) a **dvě SLA s čísly mimo UK/US** (Stape, Matomo – `EK10-009`,
   `EK10-017`), zatímco **denní reconciliace jako klientský výstup neexistuje veřejně ani v jednom
   z 27 nalezených artefaktů**.
2. **Nejcennější nález kola je veřejné repo agentury Efeonce** (`efeoncepro/greenhouse-eo`), které má
   kompletní **katalog devíti artefaktů správy měření** včetně živého tracking planu se stavem otagování,
   provozního deníku s datovanými poznatky z klientské práce, QA reportu po releasu a **normalizovaného
   snapshotu GTM kontejneru v gitu pro detekci driftu** (`EK10-005`–`EK10-008`, `EK10-020`, `EK10-022`,
   `EK10-023`). Je to jediný nalezený důkaz, že celá sada artefaktů reálně vzniká a je udržovatelná.
3. **Triáž už umí nástroj.** Trackingplan generuje u každého nálezu „plain-language summary + nejpravdě-
   podobnější hypotézu příčiny + doporučené kroky + ukázkové hity k reprodukci + odhad dopadu“ a denní
   Digest na začátek pracovního dne (`EK10-026`). Verze 2 tvrdila, že po komoditizaci detekce zůstává
   prodejná triáž; ta je od roku 2026 také produktem.
4. **Artefakt „co hlídáme“ je zdarma minimálně ze dvou nezávislých zdrojů.** Bezplatný Looker Studio
   audit GA4 s ~25 kontrolami na 5 stranách (`EK10-012`) a druhá bezplatná sada od DumbData včetně UTM
   auditu, 404 monitoringu a dopadu consent mode (`EK10-024`). Ani jeden nevyžaduje BigQuery.
5. **Laťka „klientského reportu“ je fakticky nulová.** Jediný nalezený skutečný report je nekomentovaný
   export jedné tabulky (`EK10-018`); univerzitní služba pravidelného reportování rozesílá PDF s jedinou
   metrikou – stránky seřazené podle unique pageviews (`EK10-003`).
6. **Česká stopa je slabá a stará.** Jediný veřejně stažitelný český vzor měsíčního reportu je z roku 2015,
   stojí na Core Reporting API v3 (`ga:*`), pro GA4 neexistujícím, a už v roce 2015 uživatelé hlásili
   `#REF!` (`EK10-004`). Jediná česká šablona měřicího plánu je za HubSpot formulářem (`EK10-015`).
7. **Ani český lídr v měření nepojmenovává výstupy.** Stránka služby Signals „Sběr dat“ neuvádí žádný
   artefakt, cenu, periodicitu ani délku smlouvy – jen dobu nasazení 2–4 týdny (`EK10-027`). Signals Bar
   prodává notifikaci, ne report, a veřejně ukazuje dva screenshoty (`EK10-013`).
8. **Nejlepší veřejný vzor „měřicího plánu jako produktu“ má GOV.UK:** živě generovaný záznam implementace,
   kde má každý event prioritu a příznak implementace a stránka z toho počítá **pokrytí měření: 88 z 90
   eventů, 97,78 %** (`EK10-010`).
9. **Runbook pro incident v měření prakticky neexistuje.** GitHub code search na `"tracking incident"
   filename:runbook.md` vrací v celém GitHubu **2 výsledky, z toho 1 relevantní** o 13 řádcích (`EK10-002`).
10. **Konferenční přednášky se screenshoty klientských reportů se nenašly ani ve třetím kole.** Speaker Deck
    vrací na „measurecamp“ pět výsledků, z toho dva relevantní – oba od jednoho dodavatele sGTM hostingu,
    který v nich ale **veřejně cení měsíční monitoring na 250–500 EUR** (`EK10-001`, `EK10-025`).

---

## 2. FAKTA

### 2.1 Katalog nalezených ukázek (27)

Sloupec **Typ**: `KLIENT` = skutečný klientský výstup, `PRÁCE` = skutečný pracovní artefakt (interní,
o vlastním nebo klientském webu), `ŠABLONA` = vzor / nástroj, `POPIS` = popis služby bez ukázky výstupu.

| # | Zdroj (URL) | Typ | Co přesně obsahuje | Kódy aktivit | BQ |
|---|---|---|---|---|---|
| `EK10-018` | [Speaker Deck – „Analytics Report“, GA4 report xploreitcorp.com](https://speakerdeck.com/satheeshckr/analytics-report) | **KLIENT** | 1 strana PDF, export z GA4 Explorations, název tabulky „Untitled exploration“, období 11. 8. – 7. 9. 2025, jedna volná tabulka: průměrná doba relace podle věkové skupiny × Direct/Organic. Bez komentáře a bez srovnání | F3 | ne |
| `EK10-007` | [Efeonce – technical closure 2026-08-31](https://github.com/efeoncepro/greenhouse-eo/blob/main/docs/audits/public-site/2026-08-31-content-marketing-technical-closure.md) | **PRÁCE** | QA report po releasu: stav hned v úvodu (co hotovo / co otevřené), SHA256 souborů před a po, vizuální regrese, **čtyři oddělené zkoušky** (ledger read-only, syntetický pokus přes UI, reálná zamítnutí API 422/403, samostatný GA4 smoke s HTTP 204), sekce Realtime, příkazy pro zopakování, rollback | A1, A4, B1, D1, G7, H2 | ne |
| `EK10-008` | [Efeonce – LEARNINGS.md](https://github.com/efeoncepro/greenhouse-eo/blob/main/docs/reference/measurement-gtm-ga4/LEARNINGS.md) | **PRÁCE** | Provozní deník, 4 datované záznamy 2026-07-07 až 2026-08-20, jeden o klientovi (Berel). Formát „co se dělalo + co se z toho naučilo“, včetně ověřeného CSS selektoru a Custom JS proměnné | A1, A2, A4, H2, H3 | ne |
| `EK10-006` | [Efeonce – TRACKING-PLAN.md](https://github.com/efeoncepro/greenhouse-eo/blob/main/docs/reference/measurement-gtm-ga4/TRACKING-PLAN.md) | **PRÁCE** | Živý registr 12 formulářů a sady CTA: slug, kind, stránka/surface, emituje dataLayer, event GTM → GA4, key event, **stav otagování ✅/⏳/n-a**, poznámky s datem a číslem úkolu. Vynutitelné pravidlo + automatický audit `growth:forms-tracking-audit` | A2, A4, C1, H1, H2 | ne |
| `EK10-005` | [Efeonce – 06 GTM as code + ops](https://github.com/efeoncepro/greenhouse-eo/blob/main/docs/reference/measurement-gtm-ga4/06-gtm-tagging-as-code-and-ops.md) | **PRÁCE** | Tabulka **4 verifikačních úrovní** (Tier 0 dataLayer, Tier 0b odchozí `/g/collect`, Tier 2 GTM Preview, Tier 3 DebugView) se sloupcem „automatizovatelné“; workflow nasazení; **diagnostický žebřík o 5 krocích**; tabulka 9 běžných režimů selhání | A1, A3, A4, A5, B1, G4, G7, H1, H2 | ne |
| `EK10-020` | [Efeonce – README referenční knihovny](https://github.com/efeoncepro/greenhouse-eo/blob/main/docs/reference/measurement-gtm-ga4/README.md) | **PRÁCE** | Katalog 9 artefaktů včetně `container-snapshot.json` – **normalizovaný snapshot GTM kontejneru v gitu pro detekci driftu** | A2, A3, A4, A6, B1, C1, C5, C6, H2 | ne |
| `EK10-022` | [Efeonce – 04 event convention](https://github.com/efeoncepro/greenhouse-eo/blob/main/docs/reference/measurement-gtm-ga4/04-greenhouse-gh-event-convention.md) | **PRÁCE** | Gramatika názvů, rozhodovací pravidlo GA4-doporučený vs. vlastní event, **pětikroková ověřovací smyčka**, správa: „deprekovat, ne přejmenovávat“, periodický diff proti zdroji pravdy | A2, A3, A4, C1, H1, H2 | ne |
| `EK10-023` | [Efeonce – 05 GTM API v2 tag shapes](https://github.com/efeoncepro/greenhouse-eo/blob/main/docs/reference/measurement-gtm-ga4/05-gtm-api-v2-tag-shapes.md) | **PRÁCE** | 12 kapitol: přesné JSON tvary API v2, workflow workspace→version→publish, OAuth rozsahy, fingerprint jako optimistické zamykání, kvóty a retry politika | A2, A3, A5 | ne |
| `EK10-002` | [tracking_incident_runbook.md](https://github.com/ozzy2438/drive-to-joy-automotive-analytics/blob/main/operations/runbooks/tracking_incident_runbook.md) | ŠABLONA | Jediný nalezený runbook incidentu měření: spouštěč, 5 okamžitých kroků, resolution. Celkem 13 řádků | A1, B1, G7, H2 | ne |
| `EK10-010` | [GOV.UK – GA4 Implementation Record / Progress](https://docs.publishing.service.gov.uk/analytics/progress.html) | **PRÁCE** | Živě generovaný měřicí plán; každý event má prioritu a příznak implementace; stránka počítá pokrytí: **88 z 90 (97,78 %)** | A4, C1, H2 | ne |
| `EK10-011` | [GOV.UK – Analytics on GOV.UK](https://docs.publishing.service.gov.uk/manual/analytics.html) | **PRÁCE** | Provozní manuál měření pro vývojáře, pole `owner_slack: #govuk-frontenders`, postup debugování, které aplikace mají vlastní přístup | A1, A2, A4, H1, H2, H4 | ne |
| `EK10-019` | [GSA – DAP API dokumentace](https://open.gsa.gov/api/dap/) | **PRÁCE** | 16 typů reportů na 3 úrovních + explicitní sekce limitů: práh 50 návštěv, sampling, předěl UA→GA4 24. 6. 2024 | C4, F1, F3 | ne |
| `EK10-021` | [analytics.usa.gov – About](https://analytics.usa.gov/about) | **PRÁCE** | Rozsah 500+ domén / ~7 000 hostname, přiznaná mezera „ne každý vládní web je v datech“, upozornění na sampling | C4, F1 | ne |
| `EK10-009` | [Stape – SLA](https://stape.io/sla) | **SLA s čísly** | Dostupnost 99,95 % / práh 99,5 %, kredit 10 % za procento pod prahem (strop 50 %), podpora UTC 8–18 po–pá, incidenty 2 h / 4 h / 8 h reakce a 8 h / 2 PD / 5 PD řešení, tikety 1–5 PD podle tarifu | A5, G5, H5 | ne |
| `EK10-017` | [Matomo – Support plans](https://matomo.org/support-plans/) | **SLA s čísly** | 12 h první reakce ve třech tarifech, 6 h ve VIP, pokrytí 24/5. Doba vyřešení není slíbena | H5 | ne |
| `EK10-012` | [Analytics Playbook – GA4 Audit dashboard](https://kpplaybook.com/resources/google-analytics-4-audit/) | ŠABLONA | 5 stran, ~25 kontrol: Unassigned sessions, case sensitivity zdrojů, PII v URL, 404, limit 500 eventů, duplicitní transakce, testovací data, self-referral, kontrola propojení Ads | C1, C3, C4, D1, D4, D5, G3 | **ne** |
| `EK10-024` | [DumbData – free dashboard resources](https://dumbdata.co/dashboard-resources/) | ŠABLONA | Druhá nezávislá bezplatná sada: GA4 Audit Tool, UTM Campaign Audit, 404 Error Monitoring, Consent Mode Migration Impact | B2, C1, C3, C4, D4, G3 | **ne** |
| `EK10-026` | [Trackingplan](https://www.trackingplan.com/) | ŠABLONA (produkt) | Denní Digest + alerty + **AI triáž**: shrnutí, hypotéza příčiny, doporučené kroky, podmínky vzniku, ukázkové hity, odhad dopadu | A4, B1, G1, G3, G4, G7, F3 | ne |
| `EK10-014` | [ga4monitor.com](https://www.ga4monitor.com/) | ŠABLONA (produkt) | 35+ kontrol kvality dat, health score (screenshot: 88, +16 b., 2 otevřené problémy), alerty, **export reportu do PDF a PowerPointu**, denní/týdenní audity, průběžný monitoring až 12×/den | A4, C1, C2, C4, D1, G1, G3, G4 | ne |
| `EK10-013` | [Signals Bar (CZ)](https://www.signals.cz/produkty/signals-bar) | POPIS | Zpráva do Slacku/Teams/e-mailu/SMS s kontextem (účet, kanál, produkt, velikost odchylky); filtrování alertů podle pravidel (urgentní hned, ostatní souhrnně); dva screenshoty, žádné demo | G1, G2, G3, G6 | ne |
| `EK10-027` | [Signals – služba Sběr dat (CZ)](https://www.signals.cz/sluzby/sber-dat) | POPIS | Žádný pojmenovaný artefakt, žádná cena, žádná periodicita; jediné číslo je doba nasazení 2–4 týdny | A1, A2, A4, G1 | ne |
| `EK10-004` | [Besteto – vzorový report (CZ, Google Sheets)](https://docs.google.com/spreadsheets/d/188OcrolWVgHia4_v8SLv1W3AJNLOjMrZNEs-Df9DjOs/edit?usp=sharing) | ŠABLONA | 15 pojmenovaných zdrojů (Seznam, Heureka.cz, Zboží.cz, Sklik, Srovname, Hledejceny, Firmy.cz…), každý jako dotaz s filtrem na `sourceMedium`, varianty MoM, 5 metrik | F2, F3 | ne |
| `EK10-015` | [6clickz – measurement plán pro GA4 (CZ)](https://www.6clickz.com/cs/zpracovani-measurement-planu-pro-ga4/) | ŠABLONA | Metodika: 4 úrovně cílů, události ve 3 kategoriích, správa práv a Collections; 5 screenshotů plánu. **Soubor je za HubSpot formulářem** | A2, A4, C1, C6, H2 | ne |
| `EK10-016` | [Segment / Twilio – tracking plan template](https://www.twilio.com/en-us/resource-center/how-to-create-a-tracking-plan) | ŠABLONA | Název eventu, popis a zdůvodnění, místo v kódu, properties, stav implementace; specifikace podle typu produktu. Tabulka vrací **401 bez přihlášení** | A4, H2 | ne |
| `EK10-003` | [Bates College – Analytics Report Request Form](https://www.bates.edu/wordpress/get-involved/analytics-report-request-form/) | POPIS | Týdenní/měsíční/kvartální PDF e-mailem; obsahem je **jediná metrika** – stránky a příspěvky seřazené podle unique pageviews | F3 | ne |
| `EK10-001` | [MeasureCamp Amsterdam 2026 – TAGGRS, business model kolem sGTM](https://speakerdeck.com/taggrs131/how-to-build-a-sustainable-business-model-around-server-side-tracking) | ŠABLONA (deck) | 34 slidů; tři linky příjmu: implementace 700–3 500 €, **monitoring 250–500 €/měs**, hosting s marží; modelový klient 10 860 € za rok 1 | A5, G4, G5, G7, H5 | ne |
| `EK10-025` | [MeasureCamp Amsterdam 2026 – TAGGRS, Tag Gateway vs. sGTM](https://speakerdeck.com/taggrs131/measurecamp-amsterdam-2026-google-tag-gateway-vs-server-google-tag-manager) | ŠABLONA (deck) | Druhý deck téhož dodavatele z téže konference | A5, G5 | ne |

**Souhrn typů:** 1× `KLIENT`, 11× `PRÁCE`, 10× `ŠABLONA`, 3× `POPIS`, 2× **SLA s čísly** = 27.
**Žádný z 27 artefaktů není denní reconciliace GA4 vs. backend jako klientský výstup.**

### 2.2 Doslovné citace, na kterých stojí závěry

**Jediný skutečný klientský report z éry GA4** (`EK10-018`, celý obsah jedné strany):

> „XploreitCorp | XploreitCorp Untitled exploration | Date 11 Aug 2025 - 7 Sept 2025 | Sept 2025 Analytics |
> Direct traffic – Average session duration – 25-34, 18-24, unknown | Organic traffic – Average session
> duration – 18-24, 25-34, 45-54, 35-44, unknown | Free-form 1 | Go to report“

**Triáž jako produkt** (`EK10-026`):

> „a plain-language summary of the issue, the most likely root cause hypothesis, recommended actions to
> fix it, and the conditions under which it occurs – with sample hits to reproduce the problem“ …
> „Digests notify your team with all you need to know about the state of your data at the beginning of
> your work day“

**Jediná automatizovatelná zkouška, že hit opravdu odešel** (`EK10-005`):

> „The gap only Tier 0b closes: dataLayer push and GTM firing can both be green while GA4 records nothing
> (ad-blocker, consent, wrong Measurement ID). Asserting the outbound `/g/collect` request is the only
> automated proof the hit left the browser; DebugView proves it arrived.“

**Vynucený živý měřicí plán** (`EK10-006`):

> „Registro vivo y OBLIGATORIO. Todo form o CTA público de Efeonce se registra aquí con su estado de
> tagging. … Un form/CTA no está ‚listo‘ si su fila dice ⏳ pendiente de tagging y la capability es medible.“

**Detekce driftu bez BigQuery** (`EK10-020`):

> „container-snapshot.json | Snapshot normalizado del config live del container (`pnpm gtm:snapshot`) —
> diff en git + drift detection.“
> „Frescura: GA4/GTM cambian cada trimestre (consent mode, features de reporting, límites).“

**SLA s čísly mimo UK/US** (`EK10-009`, `EK10-017`):

> Stape: „99.95 % service level performance standard with a 99.5 % threshold … 10 % Service Credit for each
> percentage under the specified Service Level Threshold … Major incidents: response within 2 hours,
> resolve within 8 hours (during business hours) … ticket response by plan: Free 5 days, Pro 3 days,
> Business 2 days, Enterprise/Custom 1 day“
>
> Matomo: „12-hour initial response target during support hours, 24/5 support coverage“ (VIP: „6-hour“)

**Cena kontinuálního monitoringu z konferenční přednášky** (`EK10-001`):

> „Implementation: €700-€3500 … **Monitoring: €250-€500 P/M** … Year 1 revenue: €10,860“

**Česká šablona reportu je mrtvá** (`EK10-004`, komentář pod článkem z roku 2015):

> „asi delam neco spatne, ale v tom vzorovem souboru mi to ve vsech listech haze #REF! takze toho moc
> neokoukam“ – a metriky souboru jsou `ga:sessions`, `ga:transactionRevenue`… tedy Core Reporting API v3,
> které pro GA4 neexistuje.

### 2.3 Co se nenašlo (ověřené negativní nálezy)

| Hledáno | Kde | Výsledek |
|---|---|---|
| Runbook incidentu měření | GitHub code search `"tracking incident" filename:runbook.md` | **2 výsledky v celém GitHubu**, 1 relevantní (`EK10-002`) |
| Klientský report / SLA v příloze zadávací dokumentace | TED API (`FT~"Google Analytics"` od 2024: 50 oznámení; `FT~"digital analytics"` od 2022: 16), Hlídač státu (`"report návštěvnosti"`: 21 smluv) | Přílohy se vzorem reportu se nepodařilo otevřít; české nálezy jsou dotace destinačnímu managementu, ne správa měření. TED oznámení popisují předmět, ne strukturu reportu |
| Univerzitní / institucionální GA4 report | WebSearch 3×, GOV.UK Search API | Nalezeny jen návody a školicí materiály; jediná institucionální reportovací služba je Bates College s jednou metrikou (`EK10-003`) |
| Konferenční deck se screenshotem klientského reportu | Speaker Deck (`GA4`, `measurecamp`, `measurecamp 2025`, `tracking QA`, `data quality analytics monitoring`, `"monthly report" analytics`), SlideShare (přes `r.jina.ai` i přímo), Superweek | Nenalezeno. SlideShare vrací názvy bez URL; Superweek publikuje jen videa |
| Veřejná šablona v Notion / Coda | notion.com/templates (404 na kategorie i kolekce, vyhledávání vrací prázdné karty) | Nenalezeno |
| Denní reconciliace GA4 vs. backend jako klientský výstup | všechny výše | **Nenalezeno ani jednou** – ani jako ukázka, ani jako šablona, ani jako popis služby |

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Pásmo 8 900 Kč (Hlídání) – tlak dolů zesílil, ale objevila se konkrétní cenová kotva

Verze 2 opřela tier 1 o to, že detekce je komodita, ale triáž a reakce ne. Toto kolo ukazuje, že se
komoditizovala **i vrstva nad detekcí**:

- **Seznam kontrol** je zdarma ze dvou nezávislých zdrojů, bez BigQuery (`EK10-012`, `EK10-024`).
- **Report jako artefakt** (PDF/PPT se skóre a seznamem nálezů) je součástí produktu za 667 Kč/měs
  (`EK10-014`).
- **Triáž** – shrnutí, hypotéza příčiny, doporučené kroky, odhad dopadu – je produktová funkce
  (`EK10-026`).

Zbytek, který stroj nedělá, je úzký: **oprava, komunikace s vývojáři a garantovaná reakční doba**.
Nabídka tieru 1 musí být na tento zúžený zbytek přepsaná; „hlídáme a pošleme report“ je za 667 Kč.

Zároveň kolo přineslo **první veřejnou cenovou kotvu pro čistý monitoring měření od dodavatele, ne od
nástroje**: 250–500 EUR/měs, tj. **6 250–12 500 Kč**, s modelovým klientem na 350 EUR = 8 750 Kč
(`EK10-001`). To je poprvé, kdy navržených 8 900 Kč leží doslova na cizí veřejné ceně za totéž. Kotva má
ale dvě omezení: je to **doporučení dodavatele hostingu vůči agenturám** (tedy velkoobchodní logika, ne
koncová cena) a monitoring je tam **navěšený na sGTM**, ne prodávaný samostatně.

**Doporučení k pásmu: 8 900 Kč zůstává, ale obsah tieru 1 se musí posunout z „hlídání a report“ na
„oprava a reakce“.** Publikovaný checklist použít jako důkaz kompetence, ne jako obsah služby.

### 3.2 Pásmo 19 900 Kč (Správa) – nejlépe podepřené a nově doložené artefakty

Tier 2 slibuje QA do 24 h po releasu, měsíční QA, changelog a reakci do 8 h. Toto kolo poprvé ukázalo,
**jak takové artefakty konkrétně vypadají**, a to v podobě, kterou lze převzít:

- QA report po releasu se čtyřmi oddělenými zkouškami a explicitním „co je dokázáno / co ne“ (`EK10-007`);
- verifikační úrovně Tier 0/0b/2/3 a diagnostický žebřík o pěti krocích (`EK10-005`);
- changelog jako datovaný deník „co se dělalo + co se naučilo“ (`EK10-008`);
- živý měřicí plán se stavem otagování a vynuceným pravidlem (`EK10-006`).

Zároveň se potvrdilo, že **slibovaná reakční doba 8 h je proti trhu přísná**: Stape slibuje na tiket
1–5 pracovních dnů, Matomo 12 h první reakce (6 h ve VIP) – oba s většími týmy (`EK10-009`, `EK10-017`).
To je argument pro tier 2, ale i varování: je to závazek, který nikdo srovnatelný nedává, a bez zástupu
ho jeden člověk neudrží.

**Doporučení k pásmu: 19 900 Kč beze změny. Nově je ale možné tier 2 prodávat ukázkou artefaktu,
ne popisem** – čtyři výše uvedené vzory jsou veřejné a lze podle nich postavit vlastní.

### 3.3 Pásmo 39 000 Kč (Datová správa) – toto kolo mu oporu nepřineslo, ale nabídlo náhradní obsah

Nosným diferenciátorem tieru 3 měla být denní reconciliace GA4 vs. backend po `transaction_id`.
**Za 27 artefaktů se nenašla ani jednou** – ani jako ukázka, ani jako šablona, ani jako popis služby.
To potvrzuje, že jde o skutečně prázdnou pozici, ale zároveň to znamená, že **na trhu neexistuje ani
vzor, podle kterého by se dala klientovi ukázat**; artefakt bude třeba vyrobit od nuly (viz C6 v `10-…`).

Kolo ale objevilo **náhradní diferenciátor, který nevyžaduje BigQuery**: `container-snapshot.json` –
normalizovaný export GTM kontejneru verzovaný v gitu s diffem a detekcí driftu (`EK10-020`, `EK10-023`).
To přímo adresuje kód `what_broke = gtm_change_dev` („někdo změnil GTM bez koordinace“), který je
v českém a slovenském vzorku jedním z nejčastějších, a lze ho dodat i klientovi bez exportu.

**Doporučení k pásmu: 39 000 Kč zůstává bez tržní opory – toto kolo na tom nic nezměnilo. Ale detekce
driftu GTM by měla sestoupit do tieru 2**, protože nevyžaduje BQ a řeší nejčastější českou příčinu.

### 3.4 Otevřená otázka „existuje poptávka?“ – posun z 0 na slabé ano, ale jinak, než se čekalo

Verze 2 uzavřela, že poptávka po samostatné správě měření je neověřená hypotéza s protievidencí
(0 z 53 českých poptávek, americké „this is not something you can sell on a retainer“). Toto kolo přináší
**první pozitivní evidenci – a je nepřímá**:

- Na MeasureCampu 2026 se veřejně přednáší **návod pro agentury, jak z monitoringu měření udělat
  opakovaný příjem**, s konkrétními čísly (`EK10-001`). Někdo to tedy prodává a někdo to kupuje.
- Ale prodává se to **navěšené na sGTM hosting**, ne jako samostatná služba. Monitoring je tam třetí ze
  tří linek příjmu a nejmenší z nich po hostingu a implementaci.
- Poptávková strana zůstává neviditelná: instituce, které pravidelný reporting reálně provozují,
  ho dělají v podobě „PDF s jednou metrikou“ (`EK10-003`) nebo „Untitled exploration“ (`EK10-018`).

**Závěr k otázce 6: hypotéza se posouvá z „neověřená s protievidencí“ na „poptávka existuje jako
příloha k něčemu jinému“.** To má přímý důsledek pro pořadí validace ve verzi 2: **white-label pilot
s agenturou je nadále první krok, ale nejpravděpodobnějším nosičem není PPC agentura, nýbrž ten, kdo už
klientovi provozuje sGTM nebo hosting měření.** Zároveň to podporuje hybridní model (nižší paušál +
platba za incident), protože přesně tak je monitoring v deckách oceněný – jako přípojka, ne jako hlavní
položka.

### 3.5 Vedlejší, ale prakticky použitelné

- **Metrika do měsíčního komentáře, kterou v ČR nikdo nemá:** „pokrytí měření v %“ podle vzoru GOV.UK
  (88 z 90, 97,78 %) (`EK10-010`). Je srozumitelná, nezávislá na trafficu a měřitelná i bez BQ.
- **Sekce „co data neumí“** (prahy, sampling, předěly) jako povinná část reportu podle vzoru DAP
  a analytics.usa.gov (`EK10-019`, `EK10-021`).
- **Pravidlo „deprekovat, ne přejmenovávat“** a periodický diff proti zdroji pravdy jako konkrétní obsah
  kvartálního review (`EK10-022`).
- **Tier 0b (assert na odchozí `/g/collect`)** jako jediná automatizovatelná zkouška, že hit opravdu
  odešel – použitelné jako technický důkaz v nabídce (`EK10-005`).

---

## 4. MEZERY, které zůstávají

| # | Co stále chybí | Proč to nešlo doplnit | Nejlevnější cesta dál |
|---|---|---|---|
| 1 | **Denní reconciliace jako klientský výstup** – ukázka, šablona ani popis služby | Neexistuje veřejně; 27 artefaktů, 0 nálezů | Vyrobit vlastní na jednom klientovi (C6 v `10-…` § 6) – je to současně jediná cesta k artefaktu i k ověření proveditelnosti (A5) |
| 2 | **Skutečný komentovaný měsíční report z éry GA4** | Jediný nalezený je nekomentovaný export (`EK10-018`); agentury reporty nezveřejňují a lead magnety jsou za formulářem | Anonymizovat vlastní; alternativně požádat 1–2 spřátelené agentury o anonymizovaný vzorek (mimo rozsah tohoto kola – zákaz kontaktu) |
| 3 | **Příloha zadávací dokumentace se vzorem reportu nebo SLA tabulkou** | NEN nedostupný (potvrzeno i v K02); TED vrací oznámení, ne přílohy; E-ZAK instance nemají fulltext | Otevřít 3–5 konkrétních profilů zadavatele u zakázek, které K02 identifikoval (SFŽP, Brno-střed), a stáhnout přímo přílohy |
| 4 | **Česká SLA za správu měření s čísly** | Nenalezena; jediné české SLA s čísly jsou z veřejných zakázek (K02) a z IT podpory (K04) | Mystery shopping (B2 v `10-…`) – SLA bývá až v návrhu smlouvy |
| 5 | **Obsah českého měřicího plánu 6clickz** | Soubor je za HubSpot formulářem, pravidlo 3 zakazuje vyplnění | Posoudit z 5 screenshotů na stránce, nebo vynechat |
| 6 | **Ceník Trackingplanu a Matoma** | Na veřejných stránkách neuveden | Pro tier 1 podstatné: bez ceny nevíme, jak drahá je automatizovaná triáž. Zkusit ceníkové stránky přímo (`/pricing`) v dalším kole |
| 7 | **Ověření, že Efeonce je agentura a ne jednorázový projekt** | Repo je veřejné, ale firemní kontext jsem neověřoval nad rámec obsahu dokumentů | Levné: profil firmy + jejich web; artefakty jsou použitelné bez ohledu na to |
| 8 | **Konferenční materiály z ČR/SK** (Marketing Festival, MeasureCamp Praha) | Speaker Deck ani SlideShare je neindexují | YouTube kanály konferencí – ale videa nejsou strojově čitelná bez přepisu |
