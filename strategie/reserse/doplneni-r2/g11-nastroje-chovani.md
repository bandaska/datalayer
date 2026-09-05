# Doplnění R2 / mezera G11 – Nástroje: chování konektorů a recenze

Stav: hotovo (2. kolo, datum přístupu ke všem zdrojům **2026-09-04**). Doplňuje § 5 reportu `05-nastroje-monitoring.md`.
Data: `data/fragments/r2-g11-evidence.csv` (49 řádků, EG11-xxx), `r2-g11-pain.csv` (18 řádků, NG11-xxx),
`r2-g11-pricing.csv` (24 řádků, PG11-xxx).
Kurzy: 1 USD = 23 Kč, 1 EUR = 25 Kč. Roční ceny děleny 12. Kódy aktivit (A1–I3) a `what_broke` podle `00-taxonomie-sluzby.md`
+ dva nové kódy zadané pro 2. kolo: `tool_noise`, `infra_cost`.

---

## 1. Shrnutí

1. **Odpověď na otázku „notifikují konektory selhání?“ je: ano, ale skoro všechny jen o sobě.** Z deseti prověřených
   nástrojů notifikuje selhání vlastního přenosu prokazatelně pět (Supermetrics, Fivetran, Airbyte, Improvado, Adverity).
   **Kvalitu přenesených dat hlídá jediný Adverity** (monitory Duplication, Volume, Timeliness, Column Consistency) –
   enterprise nástroj bez veřejné ceny. U Windsor.ai, Coupler.io a Porter Metrics se notifikaci o selhání nepodařilo
   doložit vůbec.
2. **Kadence notifikací dělá z „automatického hlídání“ poloautomat.** Supermetrics posílá souhrn selhaných přenosů
   **jednou za 24 hodin** (EG11-004). Airbyte pošle varování až po **20 po sobě jdoucích selháních** a konektor sám vypne
   až po **30** (EG11-005). Konektor tedy může selhávat týdny, aniž by to eskalovalo.
3. **Alert řekne „selhalo to“, ne „proč“.** Recenzenti Fivetranu: „Minimal visibility into what's happening behind the
   scenes“ a „when there is an issue it is sometimes hard to diagnose“ (EG11-030). To je přesně objem práce F2/E6:
   denní kontrola běhů, reautorizace, backfill, diagnostika. Improvado to má v dokumentaci pojmenované jako čtyři
   samostatné chybové stavy, z nichž dva končí ručním reconnectem nebo reautorizací (EG11-044).
4. **Slovo „alerty“ v ceníku konektoru může znamenat něco úplně jiného.** Dataslayer „Alerts Agent“ hlídá anomálie
   **výkonu kampaní** napříč 50+ platformami, ne funkčnost přenosu (EG11-045). Při srovnávání nabídek je to past.
5. **Recenze potvrzují H2 novým způsobem: selhává i samotný měřicí nástroj, a taky tiše.** Analyzify (4,7/5 ze 313
   recenzí): „The app stopped working“ opakovaně během tří let, „Direct impact on my business, causing a significant drop
   in sales“ (EG11-042). Elevar: „their report always shows 100% accuracy by default no matter what, just misleading“
   (EG11-011). Zelené číslo v dashboardu není důkaz funkčního měření.
6. **Nový, dosud nepojmenovaný pain: `tool_noise` – nástroj vyrábí práci.** Pět výpovědí: falešné pády syntetických
   průchodů („Frequent web journey failures in production without any change in scripts“, EG11-021), surová data bez
   výkladu („poor in visual data consulting, information is completely raw“, EG11-022), falešné nálezy auditu („a few red
   herrings“, EG11-036), falešné uklidnění (Elevar 100 %) a tiché selhání placené aplikace (Analyzify).
7. **Nativní GA4 alerty jsou slabší, než 1. kolo předpokládalo.** GA4 custom insights **neumí upozornit na event, který
   do GA4 vůbec nedorazil** – alert se počítá nad metrikou, která existuje (EG11-040). Zdarma tedy nedostanete G1 v plné
   podobě, jen propad už měřené metriky. To zdražuje vrstvu, kterou musí dodat člověk nebo placený nástroj.
8. **Čtyři nástroje, které 1. kolo minulo, a jedna celá kategorie.** Track-Guard (19 USD/měs za property a modul,
   validace parametrů eventů a Consent Mode v2 na reálných sessions, EG11-038), wetracked.io (49–249 USD/měs,
   206 recenzí 5,0/5), Seresa Transmute Engine (99–2 349 USD/rok, BigQuery i v nejlevnějším tieru), Conversios Order
   Recovery Engine. Nová kategorie: **průběžný consent monitoring uvnitř CMP** – OneTrust Compliance Assistant
   (spuštěn 4. 11. 2025, denní scan), consentmanager Compliance Monitor (3–300 crawlů denně, alerty do Slacku/Teams),
   Didomi.
9. **Otázka „umí něco porovnat GA4 s backendem mimo Shopify?“ – ano, ale jen pro WooCommerce.** Conversios Order
   Recovery Engine dohledá objednávky, které se nedostaly do GA4/Ads/Meta, na Shopify **i WooCommerce** (EG11-016);
   Seresa řeší server-side i editace objednávek v administraci, které GA4 nikdy nedožene (EG11-018). **Pro Shoptet,
   Upgates, Sklik, Heureka a Zboží.cz nebyl podruhé nalezen žádný nástroj** (EG11-020, EG11-049).
10. **`infra_cost` je reálný pain s čísly.** Reálná spodní hranice vlastního sGTM na Cloud Run není 45 USD, ale
    ~90 USD/měs (2 070 Kč), protože Google doporučuje minimálně dvě instance – „before a single traffic spike“
    (EG11-027). Náklad na 10 000 requestů: Cloud Run 0,25 EUR vs. Stape Enterprise 0,083 EUR (EG11-028).

---

## 2. FAKTA

### 2a. Notifikují konektory selhání přenosu? (ověřeno z dokumentace)

| Nástroj | Notifikuje selhání přenosu? | Kanál | Kadence / práh | Hlídá kvalitu dat? | Zdroj |
|---|---|---|---|---|---|
| **Supermetrics** | **ano** | e-mail, Slack, MS Teams | souhrn **1× za 24 h** pro všechny selhané transfery | **ne** | EG11-004 |
| **Windsor.ai** | **nedoloženo** (3 stránky bez zmínky) | – (jen live chat support) | – | ne | EG11-046 |
| **Coupler.io** | **v dokumentaci nenalezeno**; doložen jen e-mail při dosažení limitu objemu (pozastaví refresh) a webhook po dokončení běhu | e-mail / webhook | – | ne | EG11-007 |
| **Funnel.io** | **pravděpodobně ano** – nápověda má články „Workspace notifications“ a „Can I send Funnel notifications to Slack?“, tělo článků nedostupné | e-mail, Slack (nepotvrzeno) | – | ne | EG11-006 |
| **Dataslayer** | **ne** pro přenos; „Alerts Agent“ hlídá **anomálie výkonu kampaní** | „Real-Time Notifications“ | 24/7 | ne (výkon ano) | EG11-045 |
| **Porter Metrics** | **nedoloženo** (help center vrací jen kategorie) | – | – | ne | EG11-047 |
| **Fivetran** | **ano** (chyba zdroje, konfigurace, destinace) | e-mail | při vzniku alertu | ne | EG11-001 |
| **Airbyte** | **ano** | e-mail (jen Cloud), **webhook/Slack** i self-hosted | **varování po 20 selháních, vypnutí po 30** | ne (jen schema changes) | EG11-005 |
| **Improvado** | **ano**, 4 typy: extraction error, load error, source connection error (reconnect), destination connection error (reauthorization) | e-mail (+ Slack přeposláním) | při vzniku | částečně (governance rules) | EG11-044 |
| **Adverity** | **ano** + navíc **kvalita dat, expirace tokenů, výkonnostní odchylky** | **e-mail, Slack, MS Teams** | okamžitě + **denní / týdenní souhrn** nevyřešených problémů | **ano** – monitory Duplication, Volume, Timeliness, Column Consistency | EG11-002, EG11-003 |

Doslovně:

> „Alerts will be sent to the recipients once per 24 hours for all failed transfers that require your attention.“
> — Supermetrics docs (EG11-004)

> „Warning - Repeated Failures: Risk of automatic disconnection after 20 consecutive failures … Sync Disabled -
> Repeated Failures: Connection disabled after 30 consecutive failures … Self-Managed versions of Airbyte can send
> notifications to a webhook, but not an email.“ — Airbyte Docs (EG11-005)

> „A data quality summary email is a notification that consolidates all unacknowledged Data Quality issues over a
> selected period. … Once a day … Once a week (Monday)“ — Adverity docs (EG11-003)

> „Data source connection error [triggered when reconnection is needed] … Destination connection error [triggered when
> reauthorization is needed]“ — Improvado docs (EG11-044)

**Kolik lidské práce to přidává (F2/E6):** minimálně (a) denní kontrola došlých alertů ze sdílené schránky, (b) reconnect
a reautorizace u dvou typů chyb, které nástroj sám neopraví, (c) diagnostika, na kterou nástroj nedá podklad
(„hard to diagnose“, EG11-030), (d) backfill chybějícího období, (e) u levných konektorů **vlastní kontrolní dotaz nad
cílovou tabulkou**, protože nástroj nic nepošle.

### 2b. Recenze: proč to kupují a na co si stěžují

| Nástroj (zdroj, hodnocení, počet) | Proč kupují (doslova) | Na co si stěžují (doslova) | ID |
|---|---|---|---|
| **Elevar** (Shopify App Store, 4,7/5, 168) | „we consolidated onto Elevar as our single client and server side tracker...and now have conversion data we actually trust“ | „I opened a ticket, checked later and they already closed it without even replying“; **„their report always shows 100% accuracy by default no matter what, just misleading“**; „Trashiest dirtiest uninstall ever… Elevar seeps in every corners of code“ | EG11-010, EG11-011, EG11-013 |
| **Elevar – 1★ (12 z 168)** | – | souhrn: nedokončené nastavení, **ztráta dat za 3 měsíce**, požadavek 500 USD/měs navíc, „Support is non existent… suggesting I pay them $1000 for integration“ | EG11-012, EG11-014 |
| **Littledata** (Shopify, 4,8/5, 140) | „fixed our leaky funnel capture set up and solved a real pain point“; „duplicate events firing between server-side and browser tracking“ | ve vzorku bez konkrétních stížností (91 % pětihvězd) | EG11-008, EG11-009 |
| **Analyzify** (Shopify, 4,7/5, 313; Capterra 5,0/5, 14) | „Far less overwhelming than expected for something as technical as GA4“; „Data accuracy improvements are immediately noticeable“ | **„The app stopped working“ opakovaně 3 roky → „Direct impact on my business, causing a significant drop in sales“**; „It is quite expensive but my time is worth more“ | EG11-042, EG11-043, EG11-029 |
| **wetracked.io** (Capterra, 5,0/5, 206) | „Inaccurate tracking and integration without all possible events in an e-commerce operation“ | „The dashboards and historical data feel a little limited“; **„The reconnection process after switching accounts was confusing“** | EG11-025 |
| **Supermetrics** (GetApp, 4,4/5, 109; value 3,8/5) | rychlá extrakce dat, úspora času na reportingu | **„It also loses connection multiple times“** (Andi J.); „Need to pay extra for connectors that are not built into the basic plans“ (Pedro A.); pomalý support (Henri H.) | EG11-019 |
| **Coupler.io** (Capterra, 4,9/5, 111) | „Set it and forget it approach“; „consolidate fragmented data … into a single, always-current view“ | **„It lacks the ability to detect already imported rows for database destinations, which can lead to duplicates“**; „It can really get pricey when adding multiple data connections“ | EG11-031 |
| **Fivetran** (Capterra, 4,4/5, 25) | konektory se málokdy rozbíjejí | **„Minimal visibility into what's happening behind the scenes“**; „when there is an issue it is sometimes hard to diagnose“; „Pricing based on monthly active rows (MAR) can grow quickly“ | EG11-030 |
| **Stape** (Capterra, 5,0/5, 7) | „The biggest benefit for me is the time saving...no more server management“ | „The support could be quicker with responses for agencies“; **monitoring až od tieru Business**; „The free plan's limit is a bit tight“ | EG11-032 |
| **ObservePoint** (Capterra, 4,0/5, 3) | „You get informed in advance if any of your analytics tagging break in production“ | „Technical support in case of any issues is very slow“; **„Frequent web journey failures in production without any change in scripts/environment“** | EG11-021 |
| **Trackingplan** (Capterra, 4,8/5, 5) | „set it and forget it“ automatizace, „Being able to review the status of the data early and in a few minutes“ | **„poor in visual data consulting, information is completely raw“**; dlouhé počáteční nastavení; potřebuje velký objem trafficu | EG11-022 |
| **Metrics Watch** (Capterra, 4,3/5, 3) | rychlé nastavení, automatizovaný reporting do schránky | „it's not possible to build custom metrics yourself“; chybí integrace (Shopify, Klaviyo) | EG11-024 |
| **GA4 Auditor** (Product Hunt, 4,8/5, 4) | „spotted that my GA4 tag is duplicate which explains why some of my metrics seemed off“ | **„a few red herrings“**; otázka, jak nástroj nakládá se sdílenými daty | EG11-036 |

**Dvě věty, které shrnují celý vzorek:** kupují **„dozvím se to dřív, než mi to spočítá účetní“** a **„udělá to za mě
někdo, kdo tomu rozumí“** (u Analyzify a Littledata je chválen lidský tým, ne software). Stěžují si na **falešné poplachy,
falešné uklidnění, surová data bez výkladu, výpadky konektorů a pomalý support** – tedy na pět věcí, které nástroj
z definice neumí a které jsou obsahem služby.

### 2c. Nástroje, které 1. kolo minulo (nové ceny)

| Nástroj | Co dělá | Cena | Kč/měs | Hlídá | ID |
|---|---|---|---|---|---|
| **Track-Guard** | monitoring reálných GA4 eventů z produkce: povinné parametry (transaction_id, value, currency), Consent Mode v2 na reálných sessions, Ads konverze, Merchant Center feed, Search Console | 19 USD/měs za property a modul | **437** | A4, B1, C4, D1, G1, G4 | PG11-019, EG11-038 |
| **wetracked.io** | server-side tracking Shopify/WooCommerce + 6 dalších checkoutů, 6 reklamních kanálů | 49 / 149 / 249 USD/měs (500 / 3 000 / 7 500 obj.) | 1 127 / 3 427 / 5 727 | D1–D3 (ceník nezmiňuje monitoring) | PG11-011–013 |
| **Seresa (Transmute Engine)** | server-side tracking pro WooCommerce + **privátní BigQuery dataset už od nejnižšího tieru**; korekce editovaných objednávek (refund + nový purchase) | 99–2 349 USD/rok | **190 – 4 502** | A5, D5/G2, E4; „advanced monitoring“ až v 5. z 6 tierů | PG11-001–006 |
| **Conversios** | Order Recovery Engine: ve 24h cyklu dohledá objednávky, které nedorazily do GA4/Ads/Meta – **Shopify i WooCommerce** | 998 USD/rok (akce 449) | 1 913 | **D5/G2 mimo Shopify** | PG11-007, EG11-016 |
| **consentmanager Compliance Monitor** | detekce nových cookies, vendorů, **skriptů a tagů** na webu; 3 / 10 / až 300 crawlů denně | CMP 23 / 59 EUR/měs | 575 / 1 475 | **B1, A3 (cizí zásah do webu), A6** | PG11-017–018, EG11-033 |
| **OneTrust Compliance Assistant** | denní scan webu, validace Google Consent Mode, GPC, IAB TCF/GPP, compliance skóre; spuštěn 4. 11. 2025 | neuvedeno | – | B1 | EG11-037 |
| **AssertionHub** | assertion-based testování měření | 49 EUR/měs (sekundární zdroj) | 1 225 | A4 | PG11-020 |
| **Analyzify** | jednorázové nastavení + audit + validace měření pro Shopify | 749 USD jednorázově | 17 227 | A1, C1–C3 | PG11-016 |
| **Web Tonic** | agenturní služba (uvedena ve vlastním přehledu nástrojů) | 3 000 USD/měs | **69 000** | (služba) | PG11-021 |

### 2d. Opravené a nové cenové body u známých nástrojů

| Nástroj | 1. kolo | 2. kolo (ověřeno) | Poznámka |
|---|---|---|---|
| **Elevar** | dvě rozporné sady (0/200/450/950 vs. 225/650/1 250) + add-on „ongoing tracking support 500 USD“ | **Core 225 / Advanced 650 / Premium 1 250 USD/měs** = 5 175 / 14 950 / 28 750 Kč, podle objemu objednávek; **„Monitoring and alerts“ jsou ve VŠECH tierech** | ověřeno z listingu Shopify App Store; vlastní doména `getelevar.com/pricing` přesměrovává na `audiense.com`. **Add-on 500 USD/měs se v aktuálním ceníku nepodařilo doložit** | 
| **Trackingplan** | „agentury contact sales“, Enterprise od 1 750 USD | **Agencies 299 USD/měs (6 877 Kč)**, Enterprise od 1 500 USD (34 500 Kč) | zdroj Capterra profil, ne ceník dodavatele | 
| **Metrics Watch** | Basic 79 USD | Capterra uvádí startovní cenu **29 USD** | **rozpor**, nevyřešen | 
| **Cloud Run (vlastní sGTM)** | 120–300 USD/měs | **reálné minimum ~90 USD/měs** (2 instance), + logy, load balancer, čas inženýra | EG11-027 |
| **Stape** | Pro 20 / Business 100 / Enterprise 167 USD | potvrzeno (Pro 17 USD ročně), Capterra uvádí startovní cenu 17 USD | EG11-032 |

### 2e. Prahy pro rozdíl GA4 vs. e-shop (nový, použitelný artefakt)

| Zdroj | Normální rozdíl | Podezřelé | Nepoužitelné | ID |
|---|---|---|---|---|
| Seresa (US, WooCommerce) | 15–30 % | **nad 40 % = konfigurační chyba** | – | EG11-017 |
| MarketingPPC.cz (**CZ**) | 10–20 % | **30–40 % = problém s nastavením** | **nad 50 %** | EG11-048 |

Doslova česky: „Odchylka 10-20% je normální, 30-40% signalizuje problém s nastavením, přes 50% znamená, že data nejsou
použitelná“ a „máte-li v GA4 obraty 400.000 Kč, ale skutečné tržby jsou 600.000 Kč, pracujte s touto 33% odchylkou“
(EG11-048). **To je první nalezený český veřejný práh** – dá se použít přímo v definici alertu G2 i v nabídce.

### 2f. Painy `tool_noise` a `infra_cost` (18 řádků celkem, z toho 5 + 3)

| ID | Kód | Situace | Doslova |
|---|---|---|---|
| NG11-001 | tool_noise | dashboard trvale hlásí 100 % přesnost | „their report always shows 100% accuracy by default no matter what, just misleading“ |
| NG11-004 | tool_noise | syntetické průchody padají bez změny na webu | „Frequent web journey failures in production without any change in scripts/environment“ |
| NG11-005 | tool_noise | agentura dostává surová data bez výkladu | „poor in visual data consulting, information is completely raw“ |
| NG11-013 | tool_noise | audit obsahuje irelevantní nálezy | „a few red herrings“ |
| NG11-015 | tool_noise | placená měřicí aplikace opakovaně přestala fungovat | „The app stopped working … Direct impact on my business, causing a significant drop in sales“ |
| NG11-008 | infra_cost | reálné minimum Cloud Run je dvojnásobek uváděného | „your realistic floor is not $45 but closer to $90/month, before a single traffic spike“ |
| NG11-009 | infra_cost | faktura roste s trafficem i s počtem tagů | „your bill changes with every spike in traffic or heavier script load“ |
| NG11-010 | infra_cost | rostoucí cena nástrojového stacku | „Bit costly now. When we purchased it, price was affordable“ |

Rozdělení všech 18 painů: `tool_noise` 5, `connector_token` 5, `infra_cost` 3, `unknown_owner` 2, `consent_change` 1,
`revenue_mismatch` 1, `gtm_change_dev` 1. Regiony: US 9, EU 7, CZ 2.

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3a. Cenová pásma a tiery 8 900 / 19 900 / 39 000 Kč

**Nic z nalezeného nesnižuje navržené ceny; dvě zjištění je podpírají a jedno oslabuje jednu z kotev.**

- **Podpírá:** Elevar Premium je **28 750 Kč/měs za pouhý software** na jedné Shopify doméně (PG11-024). Agenturní
  služba Web Tonic je **69 000 Kč/měs** (PG11-021). Horní tier 39 000 Kč za lidskou správu tedy leží uvnitř pásma, které
  trh platí, ne nad ním.
- **Podpírá:** nástrojový stack pro nejnižší tier lze teď postavit levněji než v 1. kole – **Track-Guard 437 Kč** +
  GA4 insights 0 + Stape Pro 460 Kč ≈ **900 Kč/klient/měs** místo odhadovaných 1 600 Kč. Marže tieru „Hlídání“ za
  8 900 Kč se tím zlepšuje, a zároveň to **zesiluje doporučení neprodávat službu jako „monitoring“**: klient si ho
  vygooglí za 437 Kč.
- **Oslabuje:** kotva **„lidská vrstva má tržní cenu 11 500 Kč/měs“** stála na Elevar add-onu „ongoing tracking support
  500 USD/měs“. Ten se v aktuálním veřejném ceníku (Shopify listing, EG11-041) **nepodařilo doložit** a vlastní doména
  Elevaru přesměrovává jinam. **Tuto kotvu je třeba buď doložit jinde, nebo z argumentace vyřadit.**
- **Náhradní kotvy lidské vrstvy z 2. kola:** Analyzify **17 227 Kč jednorázově** za nastavení + audit (PG11-016);
  „suggesting I pay them $1000 for integration“ = **23 000 Kč** za implementaci (EG11-012); Web Tonic **69 000 Kč/měs**
  jako horní mez; Seresa dedikovaný account manager až v tieru za 4 502 Kč/měs.
- **Nový interní náklad k rozpočtu:** Trackingplan **Agencies 6 877 Kč/měs** (PG11-009) je nově veřejná cena – pro
  agenturu s 10+ klienty to je ~690 Kč/klient za jediný „real traffic“ monitoring v SMB ceně.
- **Poznámka k položce „Provoz sGTM 1 500–6 000 Kč“:** reálná spodní hranice vlastního Cloud Runu je **2 070 Kč/měs**
  (PG11-015), ne 1 500. Pokud se položka nabízí od 1 500 Kč, musí to být na managed hostingu (Stape 460–2 300 Kč), ne na
  vlastním GCP.

### 3b. H1 („správa hlavně nad BigQuery“) – **dále oslabeno, ale z nového důvodu**

1. kolo tvrdilo, že BigQuery je zlom mezi tiery, ne podmínka vstupu. 2. kolo to potvrzuje a **posouvá důvod**:
BigQuery přestal být cenovou překážkou. Seresa dává **privátní BQ dataset už v tieru za 630 Kč/měs** a sdílený za
190 Kč (PG11-001–002), Windsor.ai má BQ ve všech tierech od 529 Kč, Coupler.io taky. **Zlom mezi tiery tedy nedělá
přístup k BigQuery, ale to, co s ním kdo umí udělat** – rekonciliace po transaction_id, forenzní dohledání, historie.
Formulace v nabídce by měla znít „umíme říct proč a kolik“, ne „máme BigQuery“.

Zároveň se **rozšířilo to, co bez BQ jde**: Conversios ORE dělá D5/G2 (backend vs. GA4) i pro WooCommerce, Track-Guard
validuje parametry eventů na reálném provozu za 437 Kč. Naopak jedno zjištění tlačí opačným směrem: **GA4 custom
insights neumí alertovat na event, který nedorazil** (EG11-040) – bezplatná vrstva je slabší, než 1. kolo počítalo.

### 3c. H2 („pain = tiše rozbité měření“) – **potvrzeno, a nově i o nástrojích samotných**

Nové důkazy: 48 % webů má aspoň jednu chybu v konfiguraci Google Consent Mode a 20–30 % reklamního rozpočtu je zkresleno
rozbitým měřením (EG11-039); čtyři konkrétní režimy tichého selhání consent mode (EG11-034); „a misconfigured ecommerce
purchase event might fire with missing transaction values for weeks before anyone notices“ (EG11-035); editace objednávky
v administraci e-shopu rozbije GA4 revenue **trvale a neviditelně** (EG11-018).

**Nová vrstva, kterou 1. kolo nemělo:** tiše selhává i **placený měřicí nástroj** – aplikace za tisíce korun měsíčně
opakovaně přestala fungovat a e-shop to poznal z propadu tržeb (EG11-042), jiná trvale hlásila 100% přesnost (EG11-011).
To je silný prodejní argument: *„Nástroj vám řekne, že je vše v pořádku. My kontrolujeme i to.“*

### 3d. H5 („část hodnoty nahraditelná SaaS; služba stojí na tom, co nástroj neumí“) – **potvrzeno a zostřeno**

1. kolo: nástroje končí u detekce, služba začíná u G7. 2. kolo přidává **tři mechanismy, kterými nástroj práci nejen
nenahrazuje, ale vytváří**:

1. **Falešné poplachy a falešné nálezy** (`tool_noise`, 5 výpovědí) – někdo je musí třídit, jinak si tým na alerty zvykne.
2. **Surová data bez výkladu** – „information is completely raw“ (EG11-022). Nástroj dodá zjištění, ne rozhodnutí.
3. **Provozní režie nástroje samotného** – reconnect po změně účtu (EG11-025), reautorizace u dvou ze čtyř chybových stavů
   (EG11-044), špinavá odinstalace, která zanechá kód po celém webu (EG11-013), rostoucí faktura (`infra_cost`).

**Vzorec „monitoring je upsell“ platí, ale ne univerzálně:** Stape (monitoring od Business), Seresa (advanced monitoring
až v 5. z 6 tierů), consentmanager (počet crawlů podle tieru) – proti tomu Elevar má „Monitoring and alerts“ ve všech
placených tierech. V nabídce DataLayer.cz to mluví pro **monitoring v základu, člověka a reakční dobu jako osu tierů**.

### 3e. Odpověď na zadanou otázku č. 4 (GA4 vs. backend mimo Shopify)

**Existuje – pro WooCommerce.** Conversios Order Recovery Engine (Shopify + WooCommerce, 1 913 Kč/měs) a Seresa
Transmute Engine (WooCommerce, 190–4 502 Kč/měs, včetně korekce editovaných objednávek). **Pro Shoptet, Upgates, Sklik,
Heureka a Zboží.cz nebyl podruhé nalezen žádný nástroj** – veškerý nalezený obsah jsou návody na jednorázové nasazení
(EG11-020, EG11-049). Upgates navíc uvádí, že propojení s GA4 je řešené javascriptem, ne server-side. **Závěr 1. kola
o vlastním poli pro CZ platformy zůstává v platnosti a je teď ověřen dvěma nezávislými dotazy.**

---

## 4. MEZERY, které zůstávají

- **G2 a TrustRadius zůstaly nedostupné** i přes alternativní cesty (403 i přes `r.jina.ai`). Reddit je v tomto prostředí
  blokovaný na úrovni domény (`www.reddit.com` i `old.reddit.com`, včetně `.json` endpointů) – žádné komunitní výpovědi
  o ochotě platit za monitoring se nepodařilo získat ani ve 2. kole.
- **Funnel.io a Porter Metrics:** notifikace o selhání se nepodařilo doložit citací. Obě nápovědy běží na Intercomu,
  který přes fetch vrací jen navigaci, ne tělo článku. Zbývá ověřit přímo v produktu nebo dotazem na support.
- **Elevar add-on „ongoing tracking support 500 USD/měs“** – nedoložen v aktuálním ceníku. Buď byl zrušen, nebo je
  dostupný jen po přihlášení. **Dokud se nedoloží, nepoužívat jako kotvu.**
- **Metrics Watch:** rozpor 29 USD (Capterra) vs. 79 USD (ceník dodavatele v 1. kole) nevyřešen.
- **Dataslayer, AssertionHub, Didomi, OneTrust Compliance Assistant, Tag Inspector, JENTIS, Adverity:** stále bez veřejné
  ceny nebo jen ze sekundárního zdroje (blog Web Tonic).
- **Windsor.ai a Coupler.io:** negativní zjištění „notifikace nenalezena“ vychází ze tří, resp. dvou stránek. Není to
  důkaz neexistence.
- **Čísla „48 % webů má chybný Consent Mode“ a „20–30 % rozpočtu zkresleno“** pocházejí z agenturního blogu; původní
  studie nebyla dohledána. Před použitím v marketingu dohledat primární zdroj.
- **Recenzní vzorek u monitoringových nástrojů zůstává malý** (ObservePoint 3, Trackingplan 5, Metrics Watch 3,
  GA4 Auditor 4). Velké vzorky jsou jen u nástrojů, které monitoring neprodávají (Analyzify 313, wetracked.io 206,
  Elevar 168, Littledata 140, Coupler.io 111, Supermetrics 109). **Interpretace: monitoring měření je stále malý trh –
  a to je zároveň argument, proč ho neprodávat jako produkt, ale jako součást služby.**
- **Shopify App Store stránkuje recenze** a jednotlivé texty 1★ recenzí (Dragonfly, Fishe and Lilly) se nepodařilo
  načíst celé – v EG11-014 jsou proto parafráze, ne doslovné citáty.
