# URL: https://datalayer.vitnovotny.cz/sluzby/datova-vrstva

1. [Úvod](/)
2. [Služby](/sluzby)
3. Datová vrstva

[ dataLayer · sběr dat ]

# Datová vrstva (dataLayer), které rozumí vývojáři

Datová vrstva neboli dataLayer je JavaScriptové pole, do kterého web zapisuje informace o stránce, produktech, objednávkách a akcích návštěvníka. Google Tag Manager z něj bere data pro GA4, Google Ads, Metu i další nástroje. Navrhneme, co přesně má web posílat, napíšeme specifikaci s ukázkami kódu a hotovou implementaci ověříme automatickými testy.

[[ Konzultovat datovou vrstvu ]](#kontakt)[[ Ukázka specifikace ]](#ukazka)

Úvodní konzultace zdarma · píšeme pro vývojáře, ne pro marketing · odpovíme do jednoho pracovního dne

* Podle oficiálního schématu GA4
* Testy poběží v CI vašeho projektu
* Specifikace a testy patří vám

[ symptomy ]

## Poznáváte se?

Měření často nefunguje, i když ho někdo „nasadil“.

?spec

### Vývojáři nevědí, co nasadit

Zadání „přidejte GA4 e-commerce“ nestačí, protože si ho každý vyloží jinak.

querySelector

### GTM „škrábe“ data ze stránky

GTM čte cenu a název produktu z HTML a po změně šablony měření tiše přestane fungovat.

release

### Po redesignu spadly konverze

Nový web prošel testy vývojářů, měření ale nikdo netestoval.

value ≠

### Hodnota objednávky se liší

Jednou s DPH, jednou bez, jednou s dopravou, takže nástroje nejde porovnat.

[ diagram ]

## Kde datová vrstva v měření sedí

Datová vrstva je smlouva mezi webem a měřením. Web zapisuje data jednou, v jednom formátu, a GTM je překládá pro jednotlivé nástroje.

Backend

* objednávka, ceny, ID

Vratky posílá rovnou do GA4 přes Measurement Protocol.

Šablona / SPA

* dataLayer.push

Automatické testy v CI ji kontrolují při každém nasazení.

window.dataLayer

* page · user
* purchase · generate\_lead

Google Tag Manager

* překlad dat pro jednotlivé nástroje

Nástroje

* GA4
* Google Ads
* Meta Pixel
* server-side GTM → Meta CAPI, Sklik…

Schéma: backend a šablona webu zapisují do window.dataLayer a Google Tag Manager data předá do GA4, Google Ads, Meta a server-side GTM. Automatické testy kontrolují web při každém nasazení, vratky posílá backend rovnou do GA4.

* **Měření nezávisí na vzhledu.** GTM nečte ceny ani názvy z HTML, takže změna šablony měření nerozbije.
* **Jedna vrstva pro všechny nástroje.** GTM přeloží `purchase` na Meta `Purchase` a položky na formát Skliku nebo Heureky.
* **Data, která na stránce nejsou.** Číslo objednávky, typ zákazníka nebo ID produktu shodné s feedem zná jen backend.

[ výstupy ]

## Co uděláme a co dostanete

Specifikace vychází z měřicího plánu: nejdřív víme, na co se budete ptát, pak navrhujeme data.

measurement-plan.xlsx

### Měřicí plán

Proč měříme to, co měříme, a jaké otázky mají data zodpovědět.

datalayer-spec.md

### Specifikace datové vrstvy

Kontext stránky, e-commerce podle schématu GA4, leady, uživatelské atributy a pravidla zápisu s ukázkami kódu.

schema/\*.json

### JSON Schema

Strojově čitelná pravidla pro každou událost: povinné parametry, typy a povolené hodnoty.

backlog

### Tickety s akceptačními kritérii

Pro každou událost user story rovnou do Jiry, YouTracku nebo GitLabu.

tests/datalayer/

### Šablona testů

Testy scénářů pro Playwright nebo Cypress, které poběží v CI vašeho projektu.

qa-protocol.pdf · gtm

### Protokol z kontroly a nastavení GTM

Nálezy z testovacího prostředí a produkce. Proměnné datové vrstvy a tagy v GTM, pokud patří do zakázky.

[ ukázka ]

## Jak vypadá specifikace datové vrstvy

Pět řádků ze zkrácené specifikace e-shopu. Celá specifikace má i parametry položek, typy a akceptační kritéria.

Ukázka ze specifikace e-shopu

| Událost | Kdy ji web odešle | Klíčové parametry |
| --- | --- | --- |
| *kontext stránky* | na každé stránce, nad kódem GTM | `page.type`, `page.language`, `user.login_state`, `user.customer_type` |
| `view_item` | zobrazení detailu produktu | `currency`, `value`, `items[]` |
| `add_to_cart` | úspěšné přidání do košíku | `currency`, `value`, `items[]` |
| `purchase` | **jednou** po vytvoření objednávky | `transaction_id`, `value`, `tax`, `shipping`, `items[]` |
| `generate_lead` | po úspěšné odpovědi serveru | `form_id`, `lead_topics`, `lead_id` |

Chcete takovou specifikaci pro svůj web? [Napište nám](#kontakt).

[ rozhodnutí ]

## Scraping, integrace platformy, nebo vlastní datová vrstva?

Vlastní datovou vrstvu nenavrhujeme vždy. Na hotové platformě často stačí doladit mapování v GTM.

scraping

### Čtení ze stránky v GTM

Vývojáři nic dělat nemusí, GTM ale vidí jen to, co je na stránce, a změna šablony měření rozbije. Hodí se jen dočasně.

platforma

### Datová vrstva platformy nebo pluginu

Dobrá pro standardní události, často ale chybí parametry nebo B2B události. Pro menší e-shop na hotové platformě.

specifikace

### Vlastní datová vrstva podle specifikace

Pokryje celý měřicí plán včetně leadů a pravidel pro DPH a slevy a hlídají ji testy. Pro vlastní řešení, headless a B2B aplikace.

**Na čem je váš web?** U hotových platforem vycházíme z jejich datové vrstvy a doplníme, co chybí, u vlastních řešení a SPA navrhujeme vše od začátku.

[Shoptet](/reseni/e-shopy#shoptet)[Upgates](/reseni/e-shopy#upgates)[Shopify](/reseni/e-shopy#shopify)[WooCommerce](/reseni/e-shopy#woocommerce)PrestaShopMagentoReact a Next.jsVue a Nuxt[B2B portály a kalkulačky](/reseni/b2b-a-lead-generation)

[ postup ]

## Jak spolupráce probíhá

Stejných pět kroků jako u všech našich služeb. Předáním specifikace nekončíme – s vývojáři pracujeme až do akceptace, ať jde o interní tým, nebo externího dodavatele.

1. 01

   ### Audit

   Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.

   od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Byznys cíle převedeme na události, parametry a pravidla pojmenování.

   od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Vývojáři naprogramují datovou vrstvu podle ticketů s akceptačními kritérii, my odpovídáme na dotazy a nastavíme GTM.

   od vás: kapacita vývoje a přístup k testovacímu prostředí
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

### S vývojáři

* workshop nad měřicím plánem, architekturou webu a omezeními platformy
* specifikace ve formátu, který používáte: Markdown v repozitáři, Confluence nebo Google Sheets
* dotazy během vývoje ve sdíleném kanálu: Slack, Teams nebo e-mail

### Jak ověříme, že datová vrstva funguje

* testy scénářů projdou nákup, košík, formulář a přihlášení a porovnají data se schématem
* testy běží v CI při každém nasazení na testovací prostředí
* testovací prostředí zkontrolujeme s protokolem nálezů, po spuštění i produkci
* volitelně denní monitoring v BigQuery: nákupy bez `transaction_id`, duplicity a propad událostí

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: ukázka purchase a akceptační kritéria

jsKopírovat

```
window.dataLayer.push({ ecommerce: null });   // vyčistí předchozí ecommerce objekt
window.dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: '2026-104882',             // číslo objednávky z administrace
    value: 2058.67,                            // Σ price × quantity, bez dopravy (dohoda: bez DPH)
    tax: 432.32,
    shipping: 99.00,
    currency: 'CZK',
    coupon: 'PODZIM10',
    customer_type: 'returning',                // 'new' | 'returning' | neuvádět, když nevíme
    items: [
      { item_id: 'SKU-1042', item_name: 'Trekové boty Alpina', item_brand: 'Alpina',
        item_category: 'Obuv', item_category2: 'Trekové', item_variant: '42',
        price: 1652.89, discount: 183.65, quantity: 1 },
      { item_id: 'SKU-2210', item_name: 'Merino ponožky', item_brand: 'Alpina',
        item_category: 'Doplňky', price: 202.89, quantity: 2 }
    ]
  }
});
```

Nákup – purchase

### Akceptační kritéria pro purchase

* Web událost odešle právě jednou na objednávku, i po obnovení děkovací stránky nebo návratu z platební brány.
* `transaction_id` = číslo objednávky v administraci, typ string.
* `value` = Σ `price` × `quantity`, bez dopravy, s DPH, nebo bez podle dohody.
* Všechna čísla jsou `number` s tečkou, ne text s čárkou.
* Před pushem proběhne `dataLayer.push({ ecommerce: null })`.
* `item_id` odpovídá ID ve feedu pro Merchant Center, Heureku a Zboží.
* Při platbě převodem nebo na dobírku web událost odešle také, a to po vytvoření objednávky, ne po zaplacení.

Prohlížeč po přenačtení stránky vytvoří `dataLayer` znovu. Test zdvojení proto musí hlídat i logiku na serveru, která pozná, že web nákup už odeslal.

Celá specifikace e-shopu pokrývá i `view_item_list`, `select_item`, `remove_from_cart`, `view_cart`, `begin_checkout`, `add_shipping_info`, `add_payment_info`, `refund` ze serveru, `login`, `sign_up`, `search` a `cookie_consent_update`.

Kolik stojí návrh datové vrstvy?

Cenu určuje počet typů stránek a událostí, počet webů a jazyků, technologie webu a to, jestli chcete i JSON Schema, testy a monitoring. Po konzultaci dostanete nabídku s pevným rozsahem. Práci vývojářů si odhadnete z ticketů, které píšeme tak, abyste je mohli naplánovat.

Jak dlouho to trvá?

Záleží hlavně na rozsahu a na kapacitě vývoje. Specifikace zahrnuje i workshop s vývojáři, tempo implementace, kontroly a spuštění pak určuje hlavně vývojový tým. Rychlejší je zadat datovou vrstvu hned na začátku vývoje nového webu než upravovat hotový web.

Kdo datovou vrstvu naprogramuje?

Obvykle vaši vývojáři nebo dodavatel e-shopu, protože data pocházejí z backendu a šablon. My připravíme specifikaci, tickety a testy, odpovídáme na dotazy a hotovou implementaci zkontrolujeme.

Neposílá datová vrstva osobní údaje?

Nesmí. Do datové vrstvy a GA4 nepatří e-mail, jméno, telefon ani adresa v čitelné podobě – uživatele identifikujeme interním ID a pro rozšířené konverze v Google Ads a Meta posíláme jen hash SHA-256, a to až po souhlasu návštěvníka. Marže do prohlížeče neposíláme vůbec, protože jsou vidět ve zdrojovém kódu. Právní posouzení zpracování by měl udělat váš právník.

Komu patří specifikace?

Vám. Specifikaci, JSON Schema i testy předáváme ve formátu, který si zvolíte, a můžete je dát jakémukoli dalšímu dodavateli. Doporučujeme je verzovat v repozitáři webu, aby změny měření procházely stejným schvalováním jako změny kódu.

Jak poznáme, že datová vrstva funguje?

Rychlá kontrola: v konzoli prohlížeče napište `window.dataLayer` a uvidíte všechny objekty, které web zapsal, nebo použijte náhled Google Tag Manageru. Spolehlivě to ale ukážou až automatické testy, které při každém nasazení projdou nákup nebo formulář a porovnají data se specifikací.

[ pokračujte ]

[**Google Tag Manager**pořádek v tazích a verzích](/sluzby/google-tag-manager)[**Implementace GA4**čísla, která sedí s tržbami](/sluzby/implementace-ga4)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)

[ Kontakt ]

## Připravíme zadání datové vrstvy pro vaše vývojáře

Na úvodní konzultaci zdarma zjistíme, co web posílá dnes a co bude potřeba přidat.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)

VNOdpovídá Vít Novotnýobvykle do jednoho pracovního dne

1. Do jednoho pracovního dne navrhneme termín.
2. Na třicet minut projdeme web a cíle.
3. Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

Web firmy

Jméno a příjmeníE-mail

Co řešíte? (nepovinné)

GA4 a Tag ManagerServer-sideCookie lišta a consentKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?+ Přidat telefon a web (nepovinné)

Telefon (nepovinné)Web (nepovinné)

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

[ Odeslat zprávu ]

Ozveme se do jednoho pracovního dne.