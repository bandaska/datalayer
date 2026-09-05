# Doplnění R2 – G13: Support komunity (Stack Overflow, Google Help, Shopify, WooCommerce, Magento)

Stav: hotovo (2. kolo, 2026-09-04). Data: `data/fragments/r2-g13-pain.csv` (77 výpovědí, NG13-001…077),
`data/fragments/r2-g13-evidence.csv` (66 zdrojů, EG13-001…066, `phase=11`).
Zaplňuje mezeru č. 2 z `reserse/06-pain-research.md` § 5 („Stack Overflow, GA4 Help Community, Shopify a Shoptet
komunity nedostupné – blokace/JS“).

**Jak se to podařilo otevřít** (pro replikovatelnost):

| Zdroj | 1. kolo | 2. kolo – použitá cesta | Výsledek |
|---|---|---|---|
| Stack Overflow | blokováno | `api.stackexchange.com/2.3/search/advanced?…&filter=withbody` | plná těla otázek, 225 otázek staženo |
| Magento | neprozkoumáno | tatáž API, `site=magento` | plná těla |
| Shopify Community | částečně | Discourse JSON: `/search.json?q=` + `/t/<id>.json` (nutné `curl -L`) | plná těla vláken, 389 postů |
| WordPress.org (WooCommerce, GTM4WP, Site Kit) | neprozkoumáno | `wordpress.org/support/plugin/<slug>/page/N/` + `/topic/<slug>/` (nutné `curl -L`) | plná těla vláken |
| GA4 / Google Ads / GTM Help Community | blokováno | `support.google.com/<produkt>/threads?hl=en&max_results=100` – seznam vláken je server-rendered, obsahuje **název + prvních ~90 znaků prvního příspěvku** v `aria-label` | jen názvy + úryvky |
| Meta Business Help Community | blokováno | `facebook.com/business/help/community` → HTTP 400 | **nedostupné** |
| PrestaShop fórum | neprozkoumáno | `prestashop.com/forums/` → HTTP 403 | **nedostupné** |
| BigCommerce komunita | neprozkoumáno | `community.bigcommerce.com` → proxy 502 (connect_rejected) | **nedostupné** |

Těla vláken na `support.google.com` jsou renderovaná až JS (`ViewThread` API vrací gRPC chybu 7 = permission denied,
`r.jina.ai` blokuje IP). U 22 výpovědí z Google komunit je proto citace **název vlákna + useknutý úryvek** – označeno
v `notes` každého evidence řádku. Všech 22 URL bylo ověřeno na HTTP 200.

---

## 1. Shrnutí

1. **77 nových výpovědí, 66 zdrojů, všechny s ověřenou URL.** Rozložení `what_broke`: `platform_migration` (16),
   `release_web` (9), `consent_change` (9), `ad_platform_change` (7), `gtm_change_dev` (6), `bq_export_gap` (6),
   `ga4_change` (6), `access_lost` (5).
2. **Medián doby do odhalení = 21 dní.** U 42 ze 77 výpovědí lze dobu vyčíslit: 9 do týdne, 24 mezi 8 a 30 dny,
   9 nad měsíc, z toho 6 nad tři měsíce (max. 4 měsíce, 10 měsíců, 1 rok a 2 měsíce, přes 1,5 roku). To **kvantifikuje**
   dosud jen slovní závěr 1. kola „2 týdny až 3 měsíce“.
3. **88 % výpovědí (68 ze 77) je od lidí bez BigQuery** – silněji než 75 % z 1. kola. Zároveň 9 BQ výpovědí popisuje
   painy, které bez exportu vůbec nevzniknou (`bq_export_gap` 6, `bq_cost_spike` 3) – potvrzuje dvouúrovňový model.
4. **Nejtvrdší nový důkaz pro H2:** GTM hlásí u tagu „Succeeded“, ale tag neodešle jediný požadavek
   (EG13-052). Podobně: „*The Tags keeps firing just fine, just the traffic to GA4 stop*“ (EG13-035) a Google Ads hlásí
   konverzní akci jako *Etiqueta inactiva*, přestože Tag Assistant potvrzuje správné spuštění (EG13-053).
   **Kontrola „tag se spustil“ tichý výpadek neodhalí** – hlídat se musí příjem dat na druhé straně.
5. **Nová kvantifikace dopadu v penězích a konverzích:** „*We are losing $1000's a day and wasting huge amounts of AD
   spend*“ (EG13-005); „*we are spending around 1k per day on Meta and Google and getting around 50 store sessions per
   day*“ (EG13-002); 18 neměřených objednávek z reklamy za 12 dní (EG13-001); 57 chybějících transakcí za jediný měsíc,
   které se musely dopočítat a ručně dolepit do reportů (EG13-025); propad impresí 1 097 → 616 po policy update (EG13-058).
6. **Platforma sama je nejčastější spouštěč** (16× `platform_migration` + 6× `ga4_change` = 29 % výpovědí). Klient přitom
   neudělal nic. Extrémní případ: v seznamu vláken GA4 komunity je k 4. 9. 2026 **nejméně 13 nezávislých vláken
   z 1.–3. 9. 2026 o témže** – standardní reporty ukazují nulu, realtime funguje (EG13-059).
7. **`bq_export_gap` a `bq_cost_spike` byly v 1. kole podreprezentované** (11 a 2 výpovědi). Přidáno 9 dalších, včetně
   exportu, který ze dne na den spadl z 540 tis. na 5 tis. řádků denně bez jediného chybového logu (EG13-013),
   20× vyššího účtu za dotazy (EG13-018) a 3× nafouknutých tabulek po změně schématu (EG13-020).
8. **`access_lost` má nově 5 výpovědí, všechny z Google komunit** – odchod jediného správce GTM (EG13-051), ztráta
   přístupu po změně domény firemního e-mailu, přičemž tag na webu měří dál (EG13-049), zablokovaná obnova
   administrátorského přístupu k GA4 (EG13-050). Přímý argument pro „kvartální audit přístupů zdarma“.
9. **Sama komunita si vypisuje proces, který má DataLayer.cz prodávat.** Vlákno „*How do you catch it when your Meta
   Pixel / GA4 / CAPI quietly stops firing?*“ (Shopify, 8/2026) končí návodem: denní porovnání objednávek vs. konverze
   v každé platformě s prahem 15 % po dva dny, týdenní testovací objednávka, okamžitý retest po každé změně tématu/
   consentu/checkoutu, diff `transaction_id` proti číslům objednávek. To je přesně obsah tierů Hlídání a Správa – jen
   dělaný ručně a nespolehlivě.
10. **Support platformy pain neřeší, spíš ho prodlužuje.** Vlákna se zavírají jako „resolved“ bez řešení (EG13-028,
    EG13-036), tři otevřené tickety po třech týdnech bez odpovědi (EG13-060), roční ticho na fóru („*Why is no one
    answering?*“, EG13-033). Tohle je prostor, do kterého se prodává reakční doba.

---

## 2. FAKTA

### 2.1 Doba do odhalení (42 výpovědí s vyčíslitelným časem)

| Pásmo | Počet | Příklady |
|---|---|---|
| do 7 dní | 9 | 31 hodin bez zpracování dat (NG13-051), 3 dny bez exportu do BQ (NG13-020), 4 dny všechny pixely mrtvé (NG13-011) |
| 8–30 dní | 24 | 10 dní consent (NG13-003), 12 dní 18 neměřených objednávek (NG13-001), 18 dní Google Ads bez konverzí (NG13-014), 21 dní intraday-only export (NG13-022), 25 dní consent denied (NG13-048) |
| 1–3 měsíce | 3 | 2 měsíce chybějících transakcí (NG13-030), 2,5 měsíce rozjetá čísla GA vs. Shopify (NG13-006) |
| nad 3 měsíce | 6 | 4 měsíce (NG13-070), 10 měsíců regrese pluginu (NG13-035), 1 rok 2 měsíce bez odpovědi (NG13-041), 1,5 roku chybná deduplikace (NG13-071) |

**Medián 21 dní.** U 35 výpovědí čas doložit nelze – typicky proto, že autor **neví, kdy to začalo**
(„*This problem appears since some time so its not something new*“, EG13-032). To samo je zjištění: bez baseline
neexistuje ani `time_to_notice`.

### 2.2 „Tag se spustil“ ≠ „data dorazila“ – nejsilnější nová linie důkazů

| Evidence | Doslova | Co to znamená |
|---|---|---|
| EG13-052 | „*Custom [HTML] tag reports „Succeeded“ but produces zero network requests or console errors*“ | GTM Preview i debug hlásí úspěch, Meta pixel neodešle nic |
| EG13-035 | „*The Tags keeps firing just fine, just the traffic to GA4 stop.*“ | bezpečnostní nastavení GTM zastavilo odesílání, tagy „fungují“ |
| EG13-053 | „*My Purchase conversion action has shown 'Etiqueta inactiva' since July 24, despite confirming via Go[ogle Tag Assistant]*“ | Ads nepočítá konverze, Tag Assistant je zelený |
| EG13-001 | „*the 'Purchase' event still triggers, but there are absolutely no parameters detected*“ | event chodí, ale bez `value`/`currency` – Smart Bidding nemá na čem optimalizovat |
| EG13-055 | „*We are experiencing an important events loss when we enable sGTM on our Android app, on average -10%*“ | zapnutí sGTM samo o sobě ukusuje 10 % eventů |

### 2.3 Kvantifikovaný dopad

| Evidence | Doslova | Vyčíslení |
|---|---|---|
| EG13-005 | „*We are losing $1000's a day and wasting huge amounts of AD spend.*“ | tisíce USD/den, 10 dní; potvrzeno druhým merchantem ve stejném vlákně |
| EG13-002 | „*we are spending around 1k per day on Meta and Google and getting around 50 store sessions per day. which is down about 100%*“ | 1 000 USD/den proti měření, které vidí 50 z ~2 000 sessions |
| EG13-001 | „*I had 18 orders from my ad since June 6th and nothing has been tracked since.*“ | 18 objednávek z reklamy, 12 dní |
| EG13-025 | „*for a period in Nov and Dec GA4 was not receiving transaction data … there were 57 more transactions in November than GA4 reports*“ | 57 transakcí za měsíc; reporty se musely ručně opravit |
| EG13-038 | „*GA4 collect requests rejected with 503 since Aug 31, recording only 15% of traffic*“ | zpravodajský web ~500 tis. zobrazení/měs., měří se 15 % |
| EG13-058 | „*Our Brand Awareness campaign received 616 impressions and 37 clicks in August 2026, down from 1,097*“ | −44 až −63 % výkonu po policy update, bez zásahu inzerenta |
| EG13-018 | „*Suddenly our BigQuery Analysis Costs have increased a lot and we think we are being charged like 20 times more than expected*“ | 20× faktura za dotazy |
| EG13-013 | „*Starting 2025-11-24, the exported tables only have about 5k rows per day*“ (z ~540 tis.) | −99 % objemu exportu, bez chybového logu |

### 2.4 Jak se to zjistí (`how_noticed`)

Ani jedna ze 77 výpovědí neuvádí automatický alert od nástroje. Odhalení přichází třemi cestami:

1. **Z peněz zvenčí** – rozpor mezi ad spendem a vykázanými konverzemi (NG13-003, NG13-007, NG13-011, NG13-066).
2. **Náhodou při jiné práci** – „*Just recently I decided to check BigQuery to start making some views and noticed…*“
   (EG13-017, 3 týdny), „*I only noticed a few weeks later, when there were 0 view_items…*“ (EG13-003).
3. **Ručním srovnáním s backendem** – „*I matched transactions from GA Universal and GA4 and found the missing orders*“,
   diff `transaction_id` proti číslům objednávek (EG13-004, EG13-025, EG13-060).

### 2.5 Platformní incidenty, které klient nezpůsobil

- **GA4, 1.–3. 9. 2026:** ≥13 nezávislých vláken téhož dne v komunitě GA4 – standardní reporty nula, realtime funguje
  (EG13-059; ID 464324440, 464373163, 464377878, 464422572, 464438369, 464407026, 464470920, 464522106, 464610251,
  464693610, 464681494, 464066176, 464590913). Nejostřejší z nich: „*GA4 under-reporting over 70% of traffic and
  purchases since 1 September 2026*“ (EG13-037).
- **Shopify, 31. 10. 2023 – únor 2024:** sessions, add-to-cart a konverze se neměří, tržby ano. Zástupce platformy
  oznámí opravu 10. 11., merchanti ji nevidí; 21. 11. „*there is still no resolution nearly 3 weeks later*“; v únoru
  2024 „*I've lost all faith in Shopify analytics*“ (EG13-060).
- **Shopify Checkout Extensibility:** update tématu Dawn přepnul obchod na nový checkout a purchase začal chodit bez
  parametrů (EG13-001); změna URL `thank_you` → `thank-you` rozbila konverzní cíl v Microsoft Ads a cíl se sám vrací
  na starou hodnotu (EG13-012).
- **Google Ads / GTM:** tagy automaticky pozastavené jako malware 10+ dní (EG13-056); `gtag.js` vrací 503 jen pro
  jedno konkrétní Measurement ID (EG13-057).
- **Consent mode v2:** Shopify Support měsíc před deadlinem Googlu: „*Shopify does not yet support Google Consent Mode
  v2 for Google Tag Manager and Google Analytics integrations. We are unable to state if and when…*“ (EG13-062).

### 2.6 BigQuery vrstva (9 výpovědí, doplňuje podreprezentovaný kód)

| ID | Co se stalo | Doba | Zdroj |
|---|---|---|---|
| NG13-017/018 | export přestal obsahovat webový stream, 540 tis. → 5 tis. řádků/den, žádný error log | neuvedeno | EG13-013 |
| NG13-019 | export se zastavil, propojení i sběr vypadají v pořádku | několik dní | EG13-014 |
| NG13-020 | 4 měsíce bez problému, pak stop bez změny konfigurace | 3 dny | EG13-015 |
| NG13-021 | Data Thresholding vyřazuje ~polovinu eventů z exportu | – | EG13-016 |
| NG13-022 | 3 týdny běžel jen intraday, denní tabulky nevznikly | 3 týdny | EG13-017 |
| NG13-023 | 20× vyšší náklady na dotazy, nedohledatelné | z faktury | EG13-018 |
| NG13-024 | refaktoring SQL do TVF znásobil compute | z faktury | EG13-019 |
| NG13-025 | změna schématu 3× nafoukla tabulky a náklady | po migraci | EG13-020 |

### 2.7 Ztráta přístupů (5 výpovědí, všechny z Google komunit)

- „*The only person who had admin access to our company's Google Tag Manager container has [left]*“ (EG13-051)
- „*I lost access to google tag manager after changing domain on gsuite email*“ – tag na webu měří dál (EG13-049)
- „*I lost direct administrator access to an existing GA4 account after the previous administrato[r]*“ (EG13-050)
- „*The GA accounts that were streaming data and connected to SiteKit have suddenly disappeared*“ (EG13-048)
- ztráta celé konfigurace GTM bez dokumentace → rekonstrukce reverzním inženýrstvím (EG13-027)

### 2.8 Proces, který si komunita sama vypsala (Shopify, 8/2026)

Ve vlákně „How do you catch it when your Meta Pixel / GA4 / CAPI quietly stops firing?“ (v 1. kole už podchyceno jako
N7-155…159) odpovídající praktici popsali postup, který se shoduje s navrhovanou dodávkou DataLayer.cz:

- **denně**: porovnat placené objednávky v e-shopu s Meta Purchase, GA4 purchase a Google Ads konverzemi za týž den
  (24–48 h na attribution lag); řešit, když se odchylka posune o víc než 15 % od normálu po dva dny;
- **týdně**: testovací objednávka přes Meta Test Events / GA4 DebugView / Tag Assistant, kontrola `value`, `currency`,
  order ID a deduplikace browser/server;
- **po každé změně** tématu, customer events, consentu, checkoutu nebo aplikace: okamžitý retest („*Those changes have
  caused more issues than platform outages in my experience*“);
- **místo součtů identity**: poslat číslo objednávky jako `transaction_id` do GA4 a `event_id` do Meta a jednou týdně
  diffovat seznamy – „*If you lose five purchase events and fire five duplicates in the same day, your daily count
  comparison shows a perfect match and you learn nothing*“;
- **filtrovat baseline**: objednávky bez prohlížeče (subscription renewals, POS, Shop app, draft orders) purchase event
  nikdy nevystřelí; bez filtru na web objednávky je celý baseline nesmyslný.

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Hypotézy

**H2 (největší pain = tiše rozbitá data) – potvrzeno a nově kvantifikováno.**
Z hypotézy se stává číslo: **medián 21 dní do odhalení** (42 doložených případů), 33 ze 42 nad týden, 9 nad měsíc.
Přibyla i kvalitativně nová linie: ani „tag fired“, ani „Tag Assistant potvrzuje“, ani „konfigurace nezměněna“
neznamená, že data dorazila (§ 2.2). To zpřesňuje sdělení: nestačí slíbit „hlídáme, že se tagy spouští“ – je třeba
slíbit **kontrolu příjmu dat a srovnání s backendem**.

**H1 (BQ-first) – dále oslabeno v silné podobě, potvrzeno ve slabé.**
88 % nových výpovědí (68/77) je od lidí bez BigQuery, oproti 75 % v 1. kole. Zároveň 9 BQ výpovědí popisuje painy,
které **bez exportu neexistují** (výpadek exportu, thresholding, náklady, změna schématu) a které klient sám
nezachytí – tři z nich se zjistily až z faktury nebo náhodou. BigQuery tedy zůstává **zlomem mezi tiery, ne
podmínkou vstupu**, a navíc je sám o sobě zdrojem nové správy (E1, E2, E3). Beze změny.

**H5 (SaaS nahrazuje část hodnoty) – potvrzeno, s upřesněním hranice.**
Vlákno EG13-059 (13 souběžných vláken o platformním incidentu) i EG13-060 (3 týdny neřešeného incidentu, tři tickety)
ukazují, že detekce je jen první krok; hodnota je v **triáži, diagnóze a eskalaci**. Nástroj nerozliší „Google má
výpadek“ od „rozbili jsme si to sami“ a nenapíše klientovi, kolik konverzí chybělo. Nová podpora pro G7 (reakce na
alert) jako placenou položku. Zároveň § 2.8 ukazuje, že alternativa k službě není nástroj, ale **ruční tabulka**,
kterou merchant vede sám – a která podle vlastního přiznání účastníků selhává (dvojí chyba se v součtech vyruší).

### 3.2 Cenová pásma – co se mění a co ne

**Nemění se nic na výši pásem** (medián 8–10 tis., horní kvartil 16–23 tis., BQ tier 35–45 tis.). Tato mezera
byla o painech, ne o cenách; nový vzorek neobsahuje jediný cenový bod a `r2-g13-pricing.csv` proto nevzniká.
Mění se **argumentace k tierům**:

| Tier | Co nově podpírá cenu |
|---|---|
| **Hlídání 8 900 Kč** | medián 21 dní do odhalení; 24 ze 42 případů v pásmu 8–30 dní. Denní automatická kontrola posouvá detekci do řádu dnů. Argument „za 8 900 Kč/měs zkrátíte 3 týdny slepoty na 1 den“ je nově podložený číslem, ne dojmem. |
| **Správa 19 900 Kč** | 9× `release_web` + 16× `platform_migration`: update tématu, pluginu, checkoutu nebo platformy je nejčastější příčina. „QA do 24 h po každém releasu“ přímo odpovídá tomu, co komunita sama doporučuje („*After any theme, customer events, consent, checkout, or app change, repeat the test immediately*“). Nově i **update pluginu je release** (EG13-029: regrese GTM4WP v1.22, purchase pryč, ostatní eventy OK). |
| **Datová správa 39 000 Kč** | 9 nových BQ painů, které bez exportu nevzniknou, včetně dvou zjištěných až z faktury. Reconciliace po `transaction_id` má nově explicitní podporu od praktika z komunity („*stop comparing counts and start comparing identities*“). |

**Doporučená úprava sdělení** (do `09-navrh-nabidky.md`, mimo rozsah tohoto souboru):
místo „víme to za 24 hodin“ přidat kontrast s číslem – *„Průzkum 77 veřejných výpovědí: medián doby, než si někdo
všimne rozbitého měření, je 21 dní. My to víme do 24 hodin.“* A doplnit rozlišení, které nikdo nenabízí:
**hlídáme příjem dat, ne jen spuštění tagu** (§ 2.2).

### 3.3 Co je nově použitelné jako produkt

1. **Kontrola příjmu dat, ne spuštění tagu** – § 2.2 dává čtyři různé mechanismy, jak „zelený“ tag neposílá data.
   V ČR ani SK to nikdo jako sdělení nepoužívá.
2. **Sledování platformních incidentů za klienta** – 29 % výpovědí je o změně, kterou klient neudělal. Sledování
   statusů a komunitních vláken (GA4 / Ads / Shopify / WooCommerce) je levné a v ČR to nikdo neprodává.
3. **Kvartální audit přístupů** – 5 nových výpovědí o ztrátě přístupu, z toho jedna, kde tag měří dál a nikdo se
   k němu nedostane. Nulový náklad, vysoká vnímaná hodnota.
4. **Update pluginu / šablony = release** – rozšířit definici A1 v nabídce: QA se dělá i po updatu WooCommerce
   pluginu, Shopify tématu nebo Magento verze, ne jen po nasazení nové featury.
5. **Baseline očištěný o objednávky bez prohlížeče** – subscription renewals, POS, Shop app a draft orders nikdy
   nevystřelí purchase; bez filtru je reconciliace falešně poplašná. Detail, který ukazuje řemeslo.

---

## 4. MEZERY, které zůstávají

1. **Meta Business Help Community nedostupná** (HTTP 400 na `facebook.com/business/help/community` i
   `business.facebook.com`). Výpadky pixelu a CAPI jsou tak doložené jen nepřímo – přes Shopify a WordPress vlákna
   (EG13-052, EG13-061, EG13-066) a přes 1. kolo.
2. **Těla vláken Google Help komunit nedostupná** – 22 výpovědí (NG13-045…066) stojí na názvu vlákna a ~90znakovém
   úryvku. Chybí tak dopad v penězích a často i `how_noticed`. Řešitelné jen s prohlížečem schopným JS.
3. **PrestaShop (403) a BigCommerce (proxy 502)** – ani jedna výpověď z těchto platforem; jediná zmínka o BigCommerce
   je zprostředkovaná přes GA4 komunitu (EG13-041).
4. **Shoptet komunita nadále neprozkoumána** – v této mezeře nebyla zadaná a české komunity řeší G01/G04. Pro
   Shoptet, Sklik a Heureku tak stále neexistuje žádná uživatelská výpověď o rozbitém měření z fóra.
5. **Žádný cenový bod** – tato mezera je čistě o painech; `r2-g13-pricing.csv` nevzniká.
6. **`browser_change` zůstává podreprezentovaný** (0 nových výpovědí). Lidé ho nepoznají jako událost, mísí se
   s `consent_change`.
7. **Segment `eshop_large` a `b2b_leadgen` je stále tenký** (0 a 6). Fóra jsou doménou malých a středních e-shopů;
   velcí hráči se ptají placeného dodavatele, ne komunity. Zkreslení vzorku směrem k `eshop_small` (30/77) je třeba
   při zobecňování na horní tier přiznat.
8. **Doba do odhalení je odhadem zdola.** Počítá se od data, které autor uvede jako začátek problému – tedy od
   okamžiku, kdy si už něčeho všiml. Skutečná doba tichého výpadku bude delší; u 35 výpovědí ji nelze určit vůbec,
   protože autor neví, kdy to začalo.
