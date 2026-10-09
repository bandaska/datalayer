# /sluzby/datova-vrstva

## Hlavička stránky (title, meta, OG)
- `title`: Datová vrstva dataLayer – zadání pro vývojáře | datalayer.cz
- `meta:description`: Navrhneme datovou vrstvu (dataLayer) podle schématu GA4 pro e-shop i leady: specifikace, ukázky kódu, automatické testy a podpora IT. Konzultace zdarma.
- `meta:og:title`: Datová vrstva dataLayer – zadání pro vývojáře | datalayer.cz
- `meta:og:description`: Navrhneme datovou vrstvu (dataLayer) podle schématu GA4 pro e-shop i leady: specifikace, ukázky kódu, automatické testy a podpora IT. Konzultace zdarma.
- `meta:twitter:title`: Datová vrstva dataLayer – zadání pro vývojáře | datalayer.cz
- `meta:twitter:description`: Navrhneme datovou vrstvu (dataLayer) podle schématu GA4 pro e-shop i leady: specifikace, ukázky kódu, automatické testy a podpora IT. Konzultace zdarma.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: Datová vrstva
- `jsonld:name`: Datová vrstva (dataLayer)
- `jsonld:serviceType`: Návrh a specifikace datové vrstvy pro vývojáře
- `jsonld:description`: Návrh datové vrstvy podle schématu GA4 pro e-commerce, leady a uživatelské atributy: specifikace s ukázkami kódu, akceptační kritéria, JSON Schema, automatické testy a podpora vývojářů.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: E-shopy, vývojové týmy, B2B firmy
- `jsonld:mainEntity.name`: Kolik stojí návrh datové vrstvy?
- `jsonld:mainEntity.acceptedAnswer.text`: Cenu určuje počet typů stránek a událostí, počet webů a jazyků, technologie webu a to, jestli chcete i JSON Schema, testy a monitoring. Po konzultaci dostanete nabídku s pevným rozsahem. Práci vývojářů si odhadnete z ticketů, které píšeme tak, abyste je mohli naplánovat.
- `jsonld:mainEntity.name`: Jak dlouho to trvá?
- `jsonld:mainEntity.acceptedAnswer.text`: Záleží hlavně na rozsahu a na kapacitě vývoje. Specifikace zahrnuje i workshop s vývojáři, tempo implementace, kontroly a spuštění pak určuje hlavně vývojový tým. Rychlejší je zadat datovou vrstvu hned na začátku vývoje nového webu než upravovat hotový web.
- `jsonld:mainEntity.name`: Kdo datovou vrstvu naprogramuje?
- `jsonld:mainEntity.acceptedAnswer.text`: Obvykle vaši vývojáři nebo dodavatel e-shopu, protože data pocházejí z backendu a šablon. My připravíme specifikaci, tickety a testy, odpovídáme na dotazy a hotovou implementaci zkontrolujeme.
- `jsonld:mainEntity.name`: Neposílá datová vrstva osobní údaje?
- `jsonld:mainEntity.acceptedAnswer.text`: Nesmí. Do datové vrstvy a GA4 nepatří e-mail, jméno, telefon ani adresa v čitelné podobě – uživatele identifikujeme interním ID a pro rozšířené konverze v Google Ads a Meta posíláme jen hash SHA-256, a to až po souhlasu návštěvníka. Marže do prohlížeče neposíláme vůbec, protože jsou vidět ve zdrojovém kódu. Právní posouzení zpracování by měl udělat váš právník.
- `jsonld:mainEntity.name`: Komu patří specifikace?
- `jsonld:mainEntity.acceptedAnswer.text`: Vám. Specifikaci, JSON Schema i testy předáváme ve formátu, který si zvolíte, a můžete je dát jakémukoli dalšímu dodavateli. Doporučujeme je verzovat v repozitáři webu, aby změny měření procházely stejným schvalováním jako změny kódu.
- `jsonld:mainEntity.name`: Jak poznáme, že datová vrstva funguje?
- `jsonld:mainEntity.acceptedAnswer.text`: Rychlá kontrola: v konzoli prohlížeče napište window.dataLayer a uvidíte všechny objekty, které web zapsal, nebo použijte náhled Google Tag Manageru. Spolehlivě to ale ukážou až automatické testy, které při každém nasazení projdou nákup nebo formulář a porovnají data se specifikací.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: Datová vrstva
- `p`: [ dataLayer · sběr dat ]
- `h1`: Datová vrstva (dataLayer), které rozumí vývojáři
- `p`: Datová vrstva neboli dataLayer je JavaScriptové pole, do kterého web zapisuje informace o stránce, produktech, objednávkách a akcích návštěvníka. Google Tag Manager z něj bere data pro GA4, Google Ads, Metu i další nástroje. Navrhneme, co přesně má web posílat, napíšeme specifikaci s ukázkami kódu a hotovou implementaci ověříme automatickými testy.
- `a`: [ Konzultovat datovou vrstvu ]
- `a`: [ Ukázka specifikace ]
- `p`: Úvodní konzultace zdarma · píšeme pro vývojáře, ne pro marketing · odpovíme do jednoho pracovního dne
- `li`: Podle oficiálního schématu GA4
- `li`: Testy poběží v CI vašeho projektu
- `li`: Specifikace a testy patří vám

### [sekce] Poznáváte se?
- `p`: [ symptomy ]
- `h2`: Poznáváte se?
- `p`: Měření často nefunguje, i když ho někdo „nasadil“.
- `span`: ?spec
- `h3`: Vývojáři nevědí, co nasadit
- `div`: Zadání „přidejte GA4 e-commerce“ nestačí, protože si ho každý vyloží jinak.
- `span`: querySelector
- `h3`: GTM „škrábe“ data ze stránky
- `div`: GTM čte cenu a název produktu z HTML a po změně šablony měření tiše přestane fungovat.
- `span`: release
- `h3`: Po redesignu spadly konverze
- `div`: Nový web prošel testy vývojářů, měření ale nikdo netestoval.
- `span`: value ≠
- `h3`: Hodnota objednávky se liší
- `div`: Jednou s DPH, jednou bez, jednou s dopravou, takže nástroje nejde porovnat.

### [sekce] Kde datová vrstva v měření sedí
- `p`: [ diagram ]
- `h2`: Kde datová vrstva v měření sedí
- `p`: Datová vrstva je smlouva mezi webem a měřením. Web zapisuje data jednou, v jednom formátu, a GTM je překládá pro jednotlivé nástroje.
- `span`: Backend
- `li`: objednávka, ceny, ID
- `p`: Vratky posílá rovnou do GA4 přes Measurement Protocol.
- `span`: Šablona / SPA
- `li`: dataLayer.push
- `p`: Automatické testy v CI ji kontrolují při každém nasazení.
- `span`: window.dataLayer
- `li`: page · user
- `li`: purchase · generate_lead
- `span`: Google Tag Manager
- `li`: překlad dat pro jednotlivé nástroje
- `span`: Nástroje
- `li`: GA4
- `li`: Google Ads
- `li`: Meta Pixel
- `li`: server-side GTM → Meta CAPI, Sklik…
- `figcaption`: Schéma: backend a šablona webu zapisují do window.dataLayer a Google Tag Manager data předá do GA4, Google Ads, Meta a server-side GTM. Automatické testy kontrolují web při každém nasazení, vratky posílá backend rovnou do GA4.
- `li`: Měření nezávisí na vzhledu. GTM nečte ceny ani názvy z HTML, takže změna šablony měření nerozbije.
- `li`: Jedna vrstva pro všechny nástroje. GTM přeloží purchase na Meta Purchase a položky na formát Skliku nebo Heureky.
- `li`: Data, která na stránce nejsou. Číslo objednávky, typ zákazníka nebo ID produktu shodné s feedem zná jen backend.

### [sekce] Co uděláme a co dostanete
- `p`: [ výstupy ]
- `h2`: Co uděláme a co dostanete
- `p`: Specifikace vychází z měřicího plánu: nejdřív víme, na co se budete ptát, pak navrhujeme data.
- `span`: measurement-plan.xlsx
- `h3`: Měřicí plán
- `div`: Proč měříme to, co měříme, a jaké otázky mají data zodpovědět.
- `span`: datalayer-spec.md
- `h3`: Specifikace datové vrstvy
- `div`: Kontext stránky, e-commerce podle schématu GA4, leady, uživatelské atributy a pravidla zápisu s ukázkami kódu.
- `span`: schema/*.json
- `h3`: JSON Schema
- `div`: Strojově čitelná pravidla pro každou událost: povinné parametry, typy a povolené hodnoty.
- `span`: backlog
- `h3`: Tickety s akceptačními kritérii
- `div`: Pro každou událost user story rovnou do Jiry, YouTracku nebo GitLabu.
- `span`: tests/datalayer/
- `h3`: Šablona testů
- `div`: Testy scénářů pro Playwright nebo Cypress, které poběží v CI vašeho projektu.
- `span`: qa-protocol.pdf · gtm
- `h3`: Protokol z kontroly a nastavení GTM
- `div`: Nálezy z testovacího prostředí a produkce. Proměnné datové vrstvy a tagy v GTM, pokud patří do zakázky.

### [sekce] Jak vypadá specifikace datové vrstvy
- `p`: [ ukázka ]
- `h2`: Jak vypadá specifikace datové vrstvy
- `p`: Pět řádků ze zkrácené specifikace e-shopu. Celá specifikace má i parametry položek, typy a akceptační kritéria.
- `caption`: Ukázka ze specifikace e-shopu
- `th`: Událost
- `th`: Kdy ji web odešle
- `th`: Klíčové parametry
- `th`: kontext stránky
- `td`: na každé stránce, nad kódem GTM
- `td`: page.type, page.language, user.login_state, user.customer_type
- `th`: view_item
- `td`: zobrazení detailu produktu
- `td`: currency, value, items[]
- `th`: add_to_cart
- `td`: úspěšné přidání do košíku
- `td`: currency, value, items[]
- `th`: purchase
- `td`: jednou po vytvoření objednávky
- `td`: transaction_id, value, tax, shipping, items[]
- `th`: generate_lead
- `td`: po úspěšné odpovědi serveru
- `td`: form_id, lead_topics, lead_id
- `p`: Chcete takovou specifikaci pro svůj web? Napište nám.
- `a`: Napište nám

### [sekce] Scraping, integrace platformy, nebo vlastní datová vrstva?
- `p`: [ rozhodnutí ]
- `h2`: Scraping, integrace platformy, nebo vlastní datová vrstva?
- `p`: Vlastní datovou vrstvu nenavrhujeme vždy. Na hotové platformě často stačí doladit mapování v GTM.
- `span`: scraping
- `h3`: Čtení ze stránky v GTM
- `div`: Vývojáři nic dělat nemusí, GTM ale vidí jen to, co je na stránce, a změna šablony měření rozbije. Hodí se jen dočasně.
- `span`: platforma
- `h3`: Datová vrstva platformy nebo pluginu
- `div`: Dobrá pro standardní události, často ale chybí parametry nebo B2B události. Pro menší e-shop na hotové platformě.
- `span`: specifikace
- `h3`: Vlastní datová vrstva podle specifikace
- `div`: Pokryje celý měřicí plán včetně leadů a pravidel pro DPH a slevy a hlídají ji testy. Pro vlastní řešení, headless a B2B aplikace.
- `p`: Na čem je váš web? U hotových platforem vycházíme z jejich datové vrstvy a doplníme, co chybí, u vlastních řešení a SPA navrhujeme vše od začátku.
- `a`: Shoptet
- `a`: Upgates
- `a`: Shopify
- `a`: WooCommerce
- `span`: PrestaShop
- `span`: Magento
- `span`: React a Next.js
- `span`: Vue a Nuxt
- `a`: B2B portály a kalkulačky

### [sekce] Jak spolupráce probíhá
- `p`: [ postup ]
- `h2`: Jak spolupráce probíhá
- `p`: Stejných pět kroků jako u všech našich služeb. Předáním specifikace nekončíme – s vývojáři pracujeme až do akceptace, ať jde o interní tým, nebo externího dodavatele.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Vývojáři naprogramují datovou vrstvu podle ticketů s akceptačními kritérii, my odpovídáme na dotazy a nastavíme GTM. od vás: kapacita vývoje a přístup k testovacímu prostředí
- `h3`: Implementace
- `p`: Vývojáři naprogramují datovou vrstvu podle ticketů s akceptačními kritérii, my odpovídáme na dotazy a nastavíme GTM.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.
- `h3`: S vývojáři
- `li`: workshop nad měřicím plánem, architekturou webu a omezeními platformy
- `li`: specifikace ve formátu, který používáte: Markdown v repozitáři, Confluence nebo Google Sheets
- `li`: dotazy během vývoje ve sdíleném kanálu: Slack, Teams nebo e-mail
- `h3`: Jak ověříme, že datová vrstva funguje
- `li`: testy scénářů projdou nákup, košík, formulář a přihlášení a porovnají data se schématem
- `li`: testy běží v CI při každém nasazení na testovací prostředí
- `li`: testovací prostředí zkontrolujeme s protokolem nálezů, po spuštění i produkci
- `li`: volitelně denní monitoring v BigQuery: nákupy bez transaction_id, duplicity a propad událostí

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: ukázka purchase a akceptační kritéria
- `span`: js
- `button`: Kopírovat
- `pre`: window.dataLayer.push({ ecommerce: null }); // vyčistí předchozí ecommerce objekt window.dataLayer.push({ event: 'purchase', ecommerce: { transaction_id: '2026-104882', // číslo objednávky z administrace value: 2058.67, // Σ price × quantity, bez dopravy (dohoda: bez DPH) tax: 432.32, shipping: 99.00, currency: 'CZK', coupon: 'PODZIM10', customer_type: 'returning', // 'new' | 'returning' | neuvádět, když nevíme items: [ { item_id: 'SKU-1042', item_name: 'Trekové boty Alpina', item_brand: 'Alpina', item_category: 'Obuv', item_category2: 'Trekové', item_variant: '42', price: 1652.89, discount: 183.65, quantity: 1 }, { item_id: 'SKU-2210', item_name: 'Merino ponožky', item_brand: 'Alpina', item_category: 'Doplňky', price: 202.89, quantity: 2 } ] } });
- `figcaption`: Nákup – purchase
- `h3`: Akceptační kritéria pro purchase
- `li`: Web událost odešle právě jednou na objednávku, i po obnovení děkovací stránky nebo návratu z platební brány.
- `li`: transaction_id = číslo objednávky v administraci, typ string.
- `li`: value = Σ price × quantity, bez dopravy, s DPH, nebo bez podle dohody.
- `li`: Všechna čísla jsou number s tečkou, ne text s čárkou.
- `li`: Před pushem proběhne dataLayer.push({ ecommerce: null }).
- `li`: item_id odpovídá ID ve feedu pro Merchant Center, Heureku a Zboží.
- `li`: Při platbě převodem nebo na dobírku web událost odešle také, a to po vytvoření objednávky, ne po zaplacení.
- `p`: Prohlížeč po přenačtení stránky vytvoří dataLayer znovu. Test zdvojení proto musí hlídat i logiku na serveru, která pozná, že web nákup už odeslal.
- `p`: Celá specifikace e-shopu pokrývá i view_item_list, select_item, remove_from_cart, view_cart, begin_checkout, add_shipping_info, add_payment_info, refund ze serveru, login, sign_up, search a cookie_consent_update.
- `summary`: Kolik stojí návrh datové vrstvy?
- `div`: Cenu určuje počet typů stránek a událostí, počet webů a jazyků, technologie webu a to, jestli chcete i JSON Schema, testy a monitoring. Po konzultaci dostanete nabídku s pevným rozsahem. Práci vývojářů si odhadnete z ticketů, které píšeme tak, abyste je mohli naplánovat.
- `summary`: Jak dlouho to trvá?
- `div`: Záleží hlavně na rozsahu a na kapacitě vývoje. Specifikace zahrnuje i workshop s vývojáři, tempo implementace, kontroly a spuštění pak určuje hlavně vývojový tým. Rychlejší je zadat datovou vrstvu hned na začátku vývoje nového webu než upravovat hotový web.
- `summary`: Kdo datovou vrstvu naprogramuje?
- `div`: Obvykle vaši vývojáři nebo dodavatel e-shopu, protože data pocházejí z backendu a šablon. My připravíme specifikaci, tickety a testy, odpovídáme na dotazy a hotovou implementaci zkontrolujeme.
- `summary`: Neposílá datová vrstva osobní údaje?
- `div`: Nesmí. Do datové vrstvy a GA4 nepatří e-mail, jméno, telefon ani adresa v čitelné podobě – uživatele identifikujeme interním ID a pro rozšířené konverze v Google Ads a Meta posíláme jen hash SHA-256, a to až po souhlasu návštěvníka. Marže do prohlížeče neposíláme vůbec, protože jsou vidět ve zdrojovém kódu. Právní posouzení zpracování by měl udělat váš právník.
- `summary`: Komu patří specifikace?
- `div`: Vám. Specifikaci, JSON Schema i testy předáváme ve formátu, který si zvolíte, a můžete je dát jakémukoli dalšímu dodavateli. Doporučujeme je verzovat v repozitáři webu, aby změny měření procházely stejným schvalováním jako změny kódu.
- `summary`: Jak poznáme, že datová vrstva funguje?
- `div`: Rychlá kontrola: v konzoli prohlížeče napište window.dataLayer a uvidíte všechny objekty, které web zapsal, nebo použijte náhled Google Tag Manageru. Spolehlivě to ale ukážou až automatické testy, které při každém nasazení projdou nákup nebo formulář a porovnají data se specifikací.
- `code`: window.dataLayer

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Google Tag Manager pořádek v tazích a verzích
- `a`: Implementace GA4 čísla, která sedí s tržbami
- `a`: Server-side tracking měření na vaší doméně

### [sekce] Připravíme zadání datové vrstvy pro vaše vývojáře
- `p`: [ Kontakt ]
- `h2`: Připravíme zadání datové vrstvy pro vaše vývojáře
- `p`: Na úvodní konzultaci zdarma zjistíme, co web posílá dnes a co bude potřeba přidat.
- `li`: E-mail one@datalayer.cz
- `a`: one@datalayer.cz
- `span`: VN
- `span`: Odpovídá Vít Novotný
- `span`: obvykle do jednoho pracovního dne
- `li`: Do jednoho pracovního dne navrhneme termín.
- `li`: Na třicet minut projdeme web a cíle.
- `li`: Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

### [sekce] 
- `nav@aria-label`: Drobečková navigace

### [sekce] Jak vypadá specifikace datové vrstvy
- `div@aria-label`: Ukázka ze specifikace e-shopu
- `td@data-label`: Kdy ji web odešle
- `td@data-label`: Klíčové parametry
- `td@data-label`: Kdy ji web odešle
- `td@data-label`: Klíčové parametry
- `td@data-label`: Kdy ji web odešle
- `td@data-label`: Klíčové parametry
- `td@data-label`: Kdy ji web odešle
- `td@data-label`: Klíčové parametry
- `td@data-label`: Kdy ji web odešle
- `td@data-label`: Klíčové parametry

### [sekce] Připravíme zadání datové vrstvy pro vaše vývojáře
- `ol@aria-label`: Co se stane po odeslání