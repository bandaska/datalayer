# k03 – Proveditelnost denní reconciliace: Shoptet, Upgates, Shopify (+ WooCommerce, PrestaShop)

**Kolo 3, úkol A5 z `10-doplneni-a-overeni-r2.md` § 6. Datum přístupu ke všem zdrojům: 2026-09-06.**
Zdroje: výhradně veřejná dokumentace platforem. Žádný účet nezaložen, žádná firma nekontaktována.
Důkazy: `data/fragments/r3-k03-evidence.csv`, ID `EK3-001`–`EK3-046` (46 řádků, `phase=12`).

---

## 1. Shrnutí

1. **Jde to – ale u Shoptetu jen pro klienty na tarifu Premium od 12 000 Kč/měs; na tarifech Free až
   Enterprise (0–4 690 Kč/měs) k REST API nemá přístup ani klient, ani agentura, takže tam denní
   reconciliace přes API NEJDE vůbec.** U Upgates, Shopify, WooCommerce a PrestaShop jde vždy, denně,
   se souhlasem klienta a bez schvalování třetí stranou.

2. Shoptet to říká sám a česky: *„Zakázková implementace proto není možná pro klienty, kteří využívají
   tarify Free až Enterprise, tito k REST API přístup nemají.“* (`EK3-032`). Jediné obejití je vyvinout
   **veřejný doplněk** – Shoptet na návrh odpovídá do čtyř týdnů, posuzuje i „zamýšlenou cenovou politiku“
   doplňku a teprve po smlouvě se smí začít vyvíjet (`EK3-034`).

3. **To bourá tier 1, ne tier 3.** Slib „součtové srovnání objednávek vs. konverzí“ je ve verzi 2 součástí
   tieru za 8 900 Kč pro „e-shop do ~20 mil., 1 web, bez BQ“. Přesně tenhle klient je na Shoptetu
   Business/Profi (1 490–2 490 Kč/měs) a API nemá. Tier 3 za 39 000 Kč je naopak v pohodě: e-shop
   100 mil.+ na Shoptet Premium být může, na Upgates Platinum/Exclusive taky.

4. **Upgates je nejsnazší z české dvojice, ale API je placený příplatek:** klient si přístup založí sám
   v administraci (Doplňky / API), omezí ho na endpoint objednávek a předá agentuře. Stojí ho to
   **100 Kč/měs** za „Klientské API“ + 30 Kč/měs za každých dalších 1 000 volání/den (`EK3-016`).
   Kvóta nejnižšího tarifu Bronze je **340 volání za celý den** sdílených se všemi ostatními napojeními
   (`EK3-017`) – na denní dávku to stačí, na hodinový monitoring ne.

5. **Párování po `transaction_id` je na Shoptetu zadarmo a spolehlivé, na Shopify ne.** Shoptet posílá
   v nativním dataLayeru `transactionId` = `orderNo` = `code` z API (`EK3-010`, `EK3-044`). Na Shopify
   může být `transaction_id` order name (`#850253`), order number (`850253`) nebo order ID
   (`5146079592553`) – tři různé podoby podle implementace (`EK3-037`).

6. **Diff po jednotlivých `transaction_id` se BEZ BigQuery slíbit nedá.** `transaction_id` je dimenze
   s nejvyšší možnou kardinalitou a Google výslovně varuje, že nad 500 hodnot roste riziko, že se část
   dat schová pod řádek `(other)` – a to i v odpovědi Data API (`EK3-042`). Než jsou denní data hotová,
   platí navíc **přísnější** limity kardinality (`EK3-046`). Bez BQ je poctivý slib jen **součtové**
   srovnání (počet objednávek a tržba za den).

7. **Denně to jde, ale ne ráno.** Denní data za předchozí den jsou v GA4 hotova kolem 11:30 (Explore)
   a 15:30 (Reports) místního času property, denní BigQuery události kolem 12:00; část dat může dorazit
   **až o 7 dní později** (`EK3-045`). Běh v 6:00 by porovnával nekompletní GA4 s kompletní administrací
   a pálil falešné alerty. Správný rytmus: běh po 16:00 místního času, alert až když rozdíl vydrží
   i druhý den.

8. **Limity na dotazy nejsou nikde problémem.** Shoptet: *„the quantity of queries or total volume of data
   are unlimited“* (`EK3-007`). Shopify: 100 bodů/s na standardním tarifu (`EK3-027`). GA4 Data API:
   200 000 tokenů denně na property zdarma (`EK3-041`). Jediná reálná kvóta je u Upgates.

9. **Hotový nástroj pro Shoptet ani Upgates neexistuje – tvrzení 2. kola potvrzeno.** Projito všech
   6 stran katalogu doplňků Shoptetu (`EK3-035`) a katalog Upgates (`EK3-040`): žádný doplněk nesrovnává
   objednávky s GA4. Nejblíž je **Datixo**, který už reálné objednávky ze Shoptetu přes API čte, ale GA4
   obchází místo aby ho kontroloval (`EK3-036`). I na Shopify je stav umění **ruční tabulka o 22 krocích**
   (`EK3-037`).

10. **Právní vrstva je nová položka nákladů, ne formalita.** Objednávky jsou osobní údaje: agentura je
    zpracovatel podle čl. 28 GDPR a potřebuje písemnou zpracovatelskou smlouvu (`EK3-039`). Shopify to má
    rozepsané do konkrétního checklistu (minimalizace, retence, šifrování v klidu i při přenosu,
    log přístupů) (`EK3-026`), Shoptet ani Upgates žádný takový seznam nevydaly.

---

## 2. FAKTA

### 2.1 Verdikt pro každou platformu

| Platforma | Verdikt | Podmínka | Reálná frekvence | Důkaz |
|---|---|---|---|---|
| **Shoptet Premium** (od 12 000 Kč/měs) | **JDE TO** | klient vygeneruje privátní token v Connections » Private API a omezí ho na skupinu endpointů | **denně**, bez limitu dotazů | `EK3-004`, `EK3-005`, `EK3-043` |
| **Shoptet Free–Enterprise** (0–4 690 Kč/měs) | **NEJDE TO** (přes API) | REST API pro tyto tarify neexistuje; jediná cesta je veřejný schválený doplněk | – | `EK3-001`, `EK3-032`, `EK3-033` |
| **Upgates** (všechny tarify) | **JDE TO S OMEZENÍM** | příplatek Klientské API 100 Kč/měs; kvóta 340–3 900 volání/den podle tarifu, sdílená s ostatními napojeními | **denně** ano, hodinově na Bronze ne | `EK3-015`, `EK3-016`, `EK3-017` |
| **Shopify** | **JDE TO S OMEZENÍM** | custom app v adminu klienta; `read_orders` vidí jen posledních 60 dní; `transaction_id` má tři možné podoby | **denně** | `EK3-023`, `EK3-025`, `EK3-028` |
| **WooCommerce** | **JDE TO** | klient vygeneruje klíč s právem Read v administraci | **denně** | `EK3-029`, `EK3-030` |
| **PrestaShop** | **JDE TO** | webservice klíč s právem GET na `/api/orders` | **denně** | `EK3-031` |

### 2.2 Shoptet – kdo se k objednávkám vůbec dostane

> „The API is not freely accessible, it is currently available for developers of so-called addons, which are
> published at the marketplace after their completion https://doplnky.shoptet.cz. (…) Presently, **not every
> e-shop operator can use the API, or partners that would develop only single e-shop**.“ — `EK3-001`

> „ZAKÁZKOVÁ IMPLEMENTACE – Oslovil vás klient, že chce vyvinout napojení na míru? Ano, je to možné! Tuto
> možnost mají **Shoptet Premium klienti**, mají totiž k dispozici privátní přístup k REST API. Zakázková
> implementace proto **není možná pro klienty, kteří využívají tarify Free až Enterprise, tito k REST API
> přístup nemají**. (…) V tomto případě proto není nutné zasílat doplněk k našemu schválení a také v tomto
> případě nepodepisujete se Shoptetem smlouvu o spolupráci. Jedná se o zakázku mezi vámi a klientem.“ — `EK3-032`

**Ceník tarifů Shoptetu k 2026-09-06** (`EK3-033`): Free 0 · Basic 440 · Business 1 490 · Profi 2 490 ·
Enterprise 4 690 · **Shoptet Premium od 12 000 Kč/měs**. Premium je 2,6× dražší než nejvyšší běžný tarif.

**Cesta přes veřejný doplněk** (`EK3-034`): odeslat návrh → Shoptet posuzuje, *„jaké přináší klientovi
výhody a jaká je jeho zamýšlená cenová politika“*, odpovídá **do čtyř týdnů** → smlouva → teprve pak vývoj →
technická kontrola → spuštění. Rozsah dat schvaluje nejdřív Shoptet, pak provozovatel e-shopu, a rozšíření
oprávnění vyžaduje **nové schválení oběma** (`EK3-002`). Doplněk musí běžet a ukládat data na infrastruktuře
partnera; Shoptet nedodává hosting ani úložiště (`EK3-003`).

**Poplatek za partnerství:** na veřejných stránkách Shoptetu **není uveden žádný ceník** – podmínky se řeší
individuálně ve smlouvě k danému doplňku (`EK3-014`, `EK3-034`). Zapsáno jako *nedostupné z veřejných zdrojů*.

### 2.3 Shoptet – co API umí, když se k němu klient dostane

| Vlastnost | Hodnota | Důkaz |
|---|---|---|
| Limit počtu dotazů | *„the quantity of queries or total volume of data are **unlimited**“*; jen 50 souběžných spojení z IP a 3 na token | `EK3-007` |
| Seznam objednávek | `GET /api/orders`, 50 položek na stránku | `EK3-008` |
| Filtry | `creationTimeFrom`, `creationTimeTo`, `changeTimeFrom`, `changeTimeTo`, `statusId`, `orderCodes` (max 50) | `EK3-008` |
| Pole v seznamu | `code`, `guid`, `creationTime`, `changeTime`, `price.withVat`, `price.withoutVat`, `currencyCode`, `paid`, `status` | `EK3-009` |
| Storna a mazání | `GET /api/orders/changes`, `changeType = edit/delete`, **garantovaná historie 30 dní** | `EK3-013` |
| Webhook | `order:create`, potvrzení do 4 s, jinak 2 opakování po 15 min a pak neaktivní | `EK3-011` |
| Doporučená frekvence | *„We recommend regular integration checks, **such as once a day**“* | `EK3-012` |
| Párování s GA4 | `transactionId` v nativním dataLayeru = `orderNo` = `code` v API | `EK3-010`, `EK3-044` |

**Pracnost:** e-shop se 200 objednávkami denně = **4 volání API za den** (200 ÷ 50 na stránku), bez detailu
objednávky – všechna potřebná pole jsou už v seznamu (`EK3-009`).

**Předání přístupu (Premium)** (`EK3-043`): klient vytvoří samostatný token, popíše ho, omezí skupiny
endpointů, a kdykoli ho jedním kliknutím smaže. Pozor na dvě věci: nový token má ve výchozím stavu práva
na **všechny** endpointy včetně zápisu (`EK3-006`) a **token nemá expiraci** – rotace patří do smlouvy.

### 2.4 Upgates

| Vlastnost | Hodnota | Důkaz |
|---|---|---|
| Zřízení přístupu | klient sám v administraci, sekce **Doplňky / API**; HTTP Basic; práva per endpoint | `EK3-015` |
| Cena | **Klientské API 100 Kč/měs**; +30 Kč/měs za 1 000 volání/den navíc | `EK3-016` |
| Kvóta (hod. / den. / celkem) | Bronze 10 / 100 / **340** · Silver 15 / 300 / 660 · Gold 50 / 600 / 1 800 · Platinum a Exclusive 100 / 1 500 / 3 900 | `EK3-017` |
| Souběžné požadavky | 3 na **skupinu** API přístupu (ne na přístup) | `EK3-018` |
| Seznam objednávek | `GET /api/v2/orders`, 100 položek na stránku, unikátní ID = `order_number` | `EK3-019` |
| Filtry | `creation_time_from/to`, `last_update_time_from`, `paid_yn`, `delivered_yn`, **`deleted_yn`** | `EK3-019` |
| Webhooky | `Orders.create / update / delete` s `order_number`, `creation_time`, `status_id`, `deletion_time`; timeout **1 s**, opakování po 5 min | `EK3-020` |
| Párování s GA4 | `upgates.order.number` na děkovací stránce; `transaction_id` se ale plní vlastním konverzním kódem | `EK3-021` |
| Výjimka pro agentury | *„Zpoplatnění API a omezení počtu požadavků **se nevztahuje na ověřené doplňky vytvářené agenturou**, jejichž účelem je nabídnout určitou službu všem klientům Upgates.“* | `EK3-018` |

Upgates sám doporučuje model, který agentura potřebuje: *„Pro každé napojení si vytvořte zvláštní přístup
(uživatele), kterému omezíte přístup pouze na potřebné služby. V budoucnu je poté jednodušší takové napojení
deaktivovat nebo zrušit.“* (`EK3-022`)

**Ceník tarifů Upgates** pro kontext (`EK3-016`): Bronze 450 · Silver 1 150 · Gold 1 750 · Platinum 3 250 ·
Exclusive od 10 000 Kč/měs.

### 2.5 Shopify

> „**read_all_orders** – All relevant orders rather than the default window of orders created within the last
> 60 days *permissions required*. (…) You need to request permission for this access scope from your Partner
> Dashboard before adding it to your app.“ — `EK3-023`

**Pozor na obavu ze zadání: 60denní okno denní reconciliaci neblokuje.** Denní běh potřebuje včerejšek,
který je uvnitř okna. `read_all_orders` je potřeba až na zpětný audit historie starší 60 dní (`EK3-023`).

Druhá obava – schvalování Shopify – se také ukázala menší, než se čekalo:

| Úroveň chráněných zákaznických dat | Public app | Custom app | Admin created custom app |
|---|---|---|---|
| 1 (bez jména, adresy, telefonu, e-mailu) | Requires review | **Always available** | **Always available** |
| 2 (se jménem, adresou, telefonem, e-mailem) | Requires review | Always available | Varies by plan |

Zdroj `EK3-025`. Objednávky spadají mezi chráněná zákaznická data (`EK3-026`), ale pro **reconciliaci
nepotřebujeme jméno ani adresu** – jen ID, čas, částku a stav, tedy úroveň 1, která je u custom app
založené v adminu klienta **vždy dostupná bez review Shopify**.

Limity: GraphQL Admin API 100 bodů/s na standardním tarifu, 200 Advanced, 1 000 Plus; jeden dotaz max
1 000 bodů (`EK3-027`).

**Slabina Shopify je párování, ne přístup.** `checkout.order.id` v pixelové události (`EK3-028`) a tři možné
podoby `transaction_id` v praxi (`EK3-037`). Typické systematické příčiny rozdílu, které nikdy nezmizí:
upsell mimo klientský checkout, aplikace zakládající objednávky mimo checkout (Global-E, Recharge),
předplatné po první objednávce, duplicitní purchase z page view (`EK3-038`).

### 2.6 WooCommerce a PrestaShop (stručně)

- **WooCommerce:** klíč se generuje ve `WooCommerce > Settings > Advanced > REST API` s úrovní
  **Read access**, autentizace HTTP Basic, kdykoli zneplatnitelné tlačítkem *Revoke API Key* (`EK3-029`).
  `GET /wp-json/wc/v3/orders` s filtry `after`, `before`, `modified_after` (`EK3-030`). Žádná kvóta –
  limitem je výkon hostingu klienta.
- **PrestaShop:** klíč se zakládá v back office s právy per resource (get/put/post/delete zvlášť);
  heslo neexistuje, klíč je zároveň přihlašovací údaj a dokumentace sama varuje, komu ho předávat.
  Filtr `filter[date_add]=[od,do]` je v dokumentaci uveden přímo jako *„a routine in an ERP fetching the
  orders since the last call“* (`EK3-031`).

### 2.7 Strana GA4

| Vlastnost | Hodnota | Důkaz |
|---|---|---|
| Kvóta Data API (standardní property) | 200 000 tokenů/den, 40 000/hod, 10 souběžných dotazů | `EK3-041` |
| Kdy jsou hotová data za včerejšek | Explore ~11:30, Reports ~15:30, denní BigQuery události ~12:00 místního času property | `EK3-045` |
| Jak dlouho se mohou měnit | *„Data processing can take 24-48 hours“*; část dat **až o 7 dní** později | `EK3-045` |
| Diff po `transaction_id` bez BQ | nespolehlivý – vysoká kardinalita → řádek `(other)`; do dokončení denních dat platí **přísnější** limity kardinality | `EK3-042`, `EK3-046` |

### 2.8 Existující nástroje – ověření tvrzení 2. kola

| Kde | Co bylo prohledáno | Nález |
|---|---|---|
| doplnky.shoptet.cz | všech 6 stran katalogu, regex na *Google Analytics / GA4 / analytik / měření / Tag Manager / konverz* | **žádný** doplněk na srovnání objednávek s GA4 (`EK3-035`) |
| doplnky.shoptet.cz | nejbližší nález | **Datixo** – čte reálné objednávky ze Shoptetu a spojuje je s náklady z Google Ads, Meta, Skliku; GA4 **obchází**, nekontroluje (`EK3-036`) |
| upgates.cz/a/doplnky | kategorie Marketing a srovnávače (100) + Zpracování dat (14) | **žádný** doplněk na hlídání měření (`EK3-040`) |
| Shopify (anglofonní trh) | stav umění | **ruční tabulka o 22 krocích**: export objednávek do CSV, exploration v GA4, copy-paste (`EK3-037`) |

**Tvrzení 2. kola („hotový nástroj neexistuje“) potvrzeno pro Shoptet i Upgates, a nově doloženo i pro Shopify.**

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Pásmo 8 900 Kč – tady je největší škoda

Verze 2 dává do tieru za 8 900 Kč „denní automatické kontroly **+ součtové srovnání objednávek vs. konverzí**“
pro „e-shop do ~20 mil., 1 web, bez BQ“. Takový klient je na Shoptetu skoro jistě na tarifu Business nebo
Profi (1 490–2 490 Kč/měs) – a **k API se nedostane** (`EK3-032`, `EK3-033`). Slib je pro podstatnou část
cílové skupiny nesplnitelný.

Tři možné reakce, seřazené podle nákladu:

1. **Přeformulovat slib** – u Shoptetu bez Premium nabídnout srovnání proti **exportu objednávek**, který
   klient sám pošle nebo naplánuje (Shoptet má vlastní exporty), ne proti API. Denní rytmus padá na týdenní
   nebo měsíční. Vstupní tier tím ale přijde o „denní“ – a proti Signals Baru za 2 500 Kč mu zbude méně.
2. **Podmínit tier platformou** – v ceníku napsat, na kterých platformách denní reconciliace běží
   (Upgates, Shopify, WooCommerce, PrestaShop, Shoptet Premium) a na kterých ne. Nejpoctivější a nejlevnější.
3. **Postavit veřejný doplněk pro Shoptet** – odemkne celý zbytek trhu, ale je to samostatný produkt:
   4 týdny jen na odpověď Shoptetu, smlouva, schválení rozsahu dat, vlastní infrastruktura, a Shoptet
   posuzuje i cenovou politiku (`EK3-002`, `EK3-003`, `EK3-034`). To není položka do ceníku, to je
   rozhodnutí o produktu.

### 3.2 Pásmo 19 900 Kč – nedotčeno

Tier 2 stojí na QA po releasu, měsíčním QA a SLA. Nic z toho na e-shopovém API nezávisí. Beze změny.

### 3.3 Pásmo 39 000 Kč – nově obhajitelné obsahem, ne cenou

Tier 3 slibuje „denní diff GA4 vs. e-shop po `transaction_id`“ pro klienty s BigQuery. Tři nové argumenty:

- **Je to proveditelné** a u Shoptetu dokonce triviální, protože `transactionId` = `orderNo` = `code`
  (`EK3-010`). Klient 100 mil.+ na Shoptet Premium nebo Upgates Platinum k API přístup má.
- **A hlavně: bez BigQuery to nejde slíbit poctivě.** `transaction_id` je vysoce kardinální dimenze,
  Data API ji může schovat pod `(other)` (`EK3-042`), a než jsou denní data hotova, platí ještě přísnější
  limity (`EK3-046`). To je **první tvrdý technický důvod, proč je tier 3 jiná služba, ne jen dražší** –
  dosud se rozdíl obhajoval jen „hloubkou“ a marží. Násobek 2× za BigQuery z 2. kola tím dostává obsah.
- **Zbývá nezodpovězené, jestli za to někdo dá 39 000 Kč.** Proveditelnost není poptávka. Tržní opora
  (dva evropské body, 11 250 a 45 000 Kč) se nezměnila.

### 3.4 Otevřená otázka „existuje vůbec poptávka?“ – posunula se, ale nerozhodla

Tři nové střípky, dva pro a jeden proti:

- **Pro:** hotový nástroj nikde neexistuje ani v ČR, ani na Shopify – tam je stav umění tabulka o 22 krocích
  (`EK3-037`). Prázdná pozice se potvrdila i technicky, nejen obchodně.
- **Pro:** **Datixo** je existenční důkaz, že český e-shopař zaplatí za produkt, který přes API čte jeho
  reálné objednávky a dělá z nich rozhodovací čísla (`EK3-036`). Někdo tu cestu už komerčně ušlapal.
- **Proti / vážně:** Datixo si zvolilo obejít GA4, ne ho kontrolovat. Prodává „kolik jsem vydělal“, ne
  „vaše měření je rozbité“. To je nepřímý, ale nepříjemný signál k témuž závěru jako 0 z 53 poptávek na
  Shoptet Partnerech: **trh kupuje čísla, ne jejich hlídání.** Reconciliace jako *feature uvnitř
  reportingu* možná prodejná je; jako *samostatná služba* to tenhle nález nepotvrzuje.

Závěr verze 2 – *„rozhodne test, ne další rešerše“* – proto **platí beze změny**. Tenhle úkol jen odstranil
jednu z výmluv: technická proveditelnost už nebrání pilotu.

### 3.5 Tři věci, které je nutné dopsat do nabídky, než se publikuje

1. **Seznam podporovaných platforem** včetně věty o Shoptetu bez Premium.
2. **Čas běhu**: po 16:00 místního času a alert až po potvrzení druhý den (`EK3-045`) – jinak alert fatigue,
   před kterou varuje i Signals Bar.
3. **Zpracovatelská smlouva** podle čl. 28 GDPR (`EK3-039`) plus technická opatření, která Shopify
   vyjmenoval jako minimum (minimalizace dat, retence, šifrování v klidu i při přenosu, log přístupů,
   omezení přístupu personálu) (`EK3-026`). Levnější varianta pro tier 1: stahovat **jen agregáty**
   (počet a součet za den), ne jednotlivé objednávky – pak se osobní údaje vůbec nezpracovávají. Cenou je,
   že zanikne diff po `transaction_id`, což je ale u tieru 1 tak jako tak nepoctivý slib (viz 3.3).

---

## 4. MEZERY, které zůstávají

| # | Co chybí | Proč to nešlo teď | Jak to získat |
|---|---|---|---|
| 1 | **Poplatek za partnerství u Shoptetu** – kolik stojí být partnerem a jaká je provize z doplňku | Na veřejných stránkách žádný ceník není; podmínky jsou individuálně ve smlouvě k doplňku (`EK3-014`, `EK3-034`) | Vyplnit formulář „Chci vytvořit vlastní doplněk“ – ale to je kontakt s firmou, mimo zadání tohoto kola |
| 2 | **Podporuje privátní API Shoptet Premium webhooky?** | Dokumentace webhooků je celá v sekci Addons a `GET /api/webhooks` je popsán jako *„registered by the specific addon“* (`EK3-011`) | Ověřit na testovacím Premium e-shopu, nebo dotazem na Shoptet |
| 3 | **Jak Shoptet a Upgates plní `transaction_id` v nativní GA4 integraci** (ne v dataLayeru) | Ověřeno jen to, co je v dataLayeru; nativní GA4 napojení v administraci může posílat něco jiného | Zkontrolovat na reálném e-shopu klienta při onboardingu |
| 4 | **Kolik českých e-shopů je fakticky na Shoptet Premium** | Shoptet čísla nezveřejňuje | Odhad z vlastní klientské báze; nebo dotaz do komunity |
| 5 | **Reálný podíl platforem v cílovém segmentu DataLayer.cz** | Nebylo součástí zadání | Vlastní data – rozpad stávajících klientů podle platformy; rozhoduje o tom, jak moc omezení Shoptetu bolí |
| 6 | **Typický rozptyl diffu na reálných datech** (kolik procent je „normálních“) | Bez přístupu k datům klienta nelze | Úkol C3 z 2. kola: 90denní historie na 5–10 stávajících klientech |
| 7 | **Cena doplňku Datixo a jeho reálná trakce** | Cena na stránce doplňku neuvedena (`EK3-036`) | Stránka datixo.com nebo mystery shopping v rámci úkolu B2 |
| 8 | **Zda existuje zahraniční SaaS, který reconciliaci dělá automaticky** (např. pro Shopify) | Jedno vyhledávání našlo jen ruční postupy a obecné blogy; systematický průzkum nástrojů nebyl zadáním | Doplnit do fáze 5 (nástroje) ve 4. kole |

---

## 5. Zapsané soubory

- `strategie/reserse/doplneni-r3/k03-proveditelnost-reconciliace.md` (tento dokument)
- `strategie/data/fragments/r3-k03-evidence.csv` – 46 řádků, `EK3-001` až `EK3-046`, `phase=12`
