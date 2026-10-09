import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/03_datova-vrstva.md (návrh v1, 8. 10. 2026).
// Dokud klient nedodá podklady, stránka neobsahuje: případovou studii (MiniCase),
// počet specifikací v trust baru, délky kroků a typickou délku projektu, reakční
// dobu na dotazy vývojářů, nasazení datové vrstvy vlastními silami (FAQ 3) ani
// odkazy na nástroj dataLayer validátor (/nastroje zatím neexistuje). Kroky
// postupu ze zadání (kap. 3.13) bez délek spojuje sekce spolupráce s IT.
// Klient ještě potvrzuje, že testy v CI a monitoring nabízí (zadání, kap. 6).

const CODE_CONTEXT = `<script>
  window.dataLayer = window.dataLayer || [];   // nikdy nepřepisovat: dataLayer = []
  window.dataLayer.push({
    page: { type: 'product', language: 'cs', environment: 'production' },
    user: { login_state: 'logged_in', customer_type: 'returning', user_id: 'u_83f2a1' }
  });
</script>
<!-- Google Tag Manager (kód kontejneru) následuje až pod tímto blokem -->`;

const CODE_PURCHASE = `window.dataLayer.push({ ecommerce: null });   // vyčistí předchozí ecommerce objekt
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
});`;

const CODE_LEAD = `// odeslat až po úspěšné odpovědi serveru, ne po kliknutí na tlačítko
window.dataLayer.push({
  event: 'generate_lead',
  form_id: 'poptavka-b2b',
  lead_topics: 'server-side,konverze',
  lead_id: 'L-mg3k2-4f9a',          // ze serveru: deduplikace (Meta event_id) a import z CRM
  user_data: {                      // jen SHA-256 po normalizaci, nikdy čitelný e-mail
    sha256_email_address: '<64 hex znaků>',
    sha256_phone_number: '<64 hex znaků>'
  }
});`;

const CODE_TEST = `// tests/datalayer/purchase.spec.ts – zkrácená ukázka (Playwright)
test('purchase odpovídá specifikaci', async ({ page }) => {
  await dokoncitTestovaciObjednavku(page);                 // pomocná funkce projektu
  await page.reload();                                     // obnovení děkovací stránky
  const purchases = await page.evaluate(() =>
    window.dataLayer.filter(e => e.event === 'purchase'));
  expect(purchases).toHaveLength(1);                       // žádné zdvojení po reloadu
  expect(validate('purchase', purchases[0])).toEqual([]);  // JSON Schema bez chyb
});`;

export const page: PageInput = {
  path: 'sluzby/datova-vrstva',
  kind: 'service',
  navTitle: 'Datová vrstva',
  tagline: 'zadání pro vývojáře, které funguje',
  pictogram: 'datalayer',
  menuGroup: 'sber',

  seo: {
    title: 'Datová vrstva dataLayer – zadání pro vývojáře | datalayer.cz',
    description:
      'Navrhneme datovou vrstvu (dataLayer) podle schématu GA4 pro e-shop i leady: specifikace, ukázky kódu, automatické testy a podpora IT. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'dataLayer · sběr dat',
    h1: 'Datová vrstva (dataLayer), které rozumí vývojáři',
    subtitle:
      'Navrhneme, co přesně má web posílat do datové vrstvy, napíšeme specifikaci s ukázkami kódu a hotovou implementaci ověříme automatickými testy. Pro e-shopy podle schématu GA4, pro leady i přihlášené uživatele.',
    quickAnswer:
      '<strong>Co je datová vrstva?</strong> JavaScriptové pole <code>window.dataLayer</code>, do kterého web zapisuje strukturované informace o stránce, produktech, objednávkách a akcích návštěvníka. Google Tag Manager z něj bere data pro GA4, Google Ads, Meta i další nástroje. Dobrá specifikace říká vývojářům přesně, kdy, co a v jakém formátu poslat.',
    primaryCta: { label: 'Konzultovat datovou vrstvu', href: '#kontakt' },
    secondaryCta: { label: 'Ukázka specifikace', href: '#ukazka' },
    microcopy:
      'Specifikace patří vám · píšeme ji pro vývojáře, ne pro marketing · odpovíme do jednoho pracovního dne',
  },

  trust: [
    'Podle oficiálního schématu GA4 – žádné vlastní „dialekty“',
    'Testy běží u vás – v CI projektu',
    'Specifikace patří vám – Markdown, Google Sheets nebo Confluence a JSON Schema',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Proč měření často nefunguje, i když ho někdo „nasadil“',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Vývojáři nevědí, co nasadit',
              text: 'Zadání „přidejte GA4 e-commerce“ nestačí. Každý si ho vyloží jinak.',
              pictogram: 'warn',
              tag: '?spec',
            },
            {
              title: 'GTM „škrábe“ data ze stránky',
              text: 'GTM čte cenu a název produktu z HTML. Po změně šablony měření tiše přestane fungovat.',
              pictogram: 'gtm',
              tag: 'querySelector',
            },
            {
              title: 'Po redesignu spadly konverze',
              text: 'Nový web prošel testy vývojářů, měření nikdo netestoval.',
              pictogram: 'conversion',
              tag: 'release',
            },
            {
              title: 'Každý pixel má vlastní kód',
              text: 'Google Ads, Meta, Sklik a Heureka dostávají data v jiné struktuře a z různých míst.',
              pictogram: 'datalayer',
              tag: '×6',
            },
            {
              title: 'Hodnota objednávky se liší',
              text: 'Jednou s DPH, jednou bez, jednou s dopravou. Nástroje pak nejde porovnat.',
              pictogram: 'eshop',
              tag: 'value ≠',
            },
            {
              title: 'Nikdo nehlídá, že to pořád funguje',
              text: 'Nová verze webu rozbije datovou vrstvu a někdo si toho všimne až po měsíci.',
              pictogram: 'monitor',
              tag: 'no tests',
            },
          ],
        },
      ],
    },

    {
      id: 'specifikace',
      eyebrow: 'řešení',
      title: 'Co ve specifikaci navrhneme',
      lead: 'Specifikace vychází z měřicího plánu: nejdřív víme, na co se budete ptát, pak navrhujeme data. Obsahuje šest částí.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Kontext stránky',
              text: 'Typ stránky, jazyk, měna, stav přihlášení a prostředí: produkce, nebo test. Web kontext zapíše ještě <em>před</em> kódem GTM, aby ho všechny tagy měly k dispozici od začátku.',
            },
            {
              title: 'E-commerce podle schématu GA4',
              text: 'Doporučené události od výpisu produktů po nákup a parametry položek. Pravidla pro hodnotu: s DPH, nebo bez, a bez dopravy. Unikátní <code>transaction_id</code>, <code>customer_type</code> a vyčištění předchozího objektu <code>ecommerce</code> před každým novým pushem. Vratky posíláme ze serveru.',
            },
            {
              title: 'Leady a formuláře',
              text: '<code>generate_lead</code> až po úspěšné odpovědi serveru, ne po kliknutí, s identifikací formuláře, tématem a <code>lead_id</code> ze serveru. Ten slouží k deduplikaci s Meta CAPI a k importu výsledků z CRM.',
            },
            {
              title: 'Uživatelské atributy',
              text: 'Interní ID přihlášeného uživatele, segment a typ zákazníka: B2B, nebo B2C, nový, nebo stávající. Nikdy e-mail, jméno nebo telefon v čitelné podobě.',
            },
            {
              title: 'Interakce a stavy',
              text: '<code>search</code> pro vyhledávání, <code>login</code> a <code>sign_up</code> pro přihlášení a registraci, chyby formulářů, změny stránky v SPA aplikacích a <code>cookie_consent_update</code> při změně souhlasu.',
            },
            {
              title: 'Pravidla zápisu',
              text: '<code>snake_case</code> a doporučené názvy GA4 všude, kde existují. Žádné rezervované názvy jako <code>form_start</code>, který GA4 používá pro rozšířené měření. Nejvýš čtyřicet znaků, čísla jako <code>number</code> a měna podle ISO 4217.',
            },
          ],
        },
      ],
    },

    {
      id: 'ukazka',
      eyebrow: 'ukázka',
      title: 'Jak vypadá specifikace datové vrstvy',
      lead: 'Ukázka: zkrácená verze specifikace e-shopu.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Události',
          head: ['Událost', 'Kdy ji web odešle', 'Klíčové parametry', 'Zdroj dat', 'Kam data jdou'],
          rows: [
            [
              '<em>kontext stránky, bez <code>event</code></em>',
              'na každé stránce, nad kódem GTM',
              '<code>page.type</code>, <code>page.language</code>, <code>page.environment</code>, <code>user.login_state</code>, <code>user.customer_type</code>, <code>user.user_id</code>',
              'backend → šablona',
              'všechny tagy, pro podmínky spouštěčů',
            ],
            [
              '<code>view_item_list</code>',
              'zobrazení výpisu: kategorie, vyhledávání, doporučené produkty',
              '<code>item_list_id</code>, <code>item_list_name</code>, <code>items[]</code>',
              'šablona výpisu',
              'GA4',
            ],
            [
              '<code>select_item</code>',
              'klik na produkt ve výpisu',
              '<code>item_list_id</code>, <code>items[]</code> s jednou položkou',
              'frontend',
              'GA4',
            ],
            [
              '<code>view_item</code>',
              'zobrazení detailu produktu',
              '<code>currency</code>, <code>value</code>, <code>items[]</code> s jednou položkou',
              'šablona detailu',
              'GA4, Google Ads pro dynamický remarketing, Meta <code>ViewContent</code>, Sklik',
            ],
            [
              '<code>add_to_cart</code>',
              'úspěšné přidání do košíku, i z výpisu a při navýšení množství',
              '<code>currency</code>, <code>value</code>, <code>items[]</code> jen s přidanými kusy',
              'frontend po odpovědi API košíku',
              'GA4, Meta <code>AddToCart</code>',
            ],
            [
              '<code>remove_from_cart</code>',
              'odebrání z košíku',
              '<code>currency</code>, <code>value</code>, <code>items[]</code>',
              'frontend',
              'GA4',
            ],
            [
              '<code>view_cart</code>',
              'zobrazení košíku',
              '<code>currency</code>, <code>value</code>, <code>items[]</code>',
              'šablona košíku',
              'GA4',
            ],
            [
              '<code>begin_checkout</code>',
              'vstup do pokladny',
              '<code>currency</code>, <code>value</code>, <code>coupon</code>, <code>items[]</code>',
              'šablona pokladny',
              'GA4, Meta <code>InitiateCheckout</code>',
            ],
            [
              '<code>add_shipping_info</code>',
              'potvrzení dopravy',
              '<code>shipping_tier</code>, <code>currency</code>, <code>value</code>, <code>items[]</code>',
              'frontend',
              'GA4',
            ],
            [
              '<code>add_payment_info</code>',
              'potvrzení platby',
              '<code>payment_type</code>, <code>currency</code>, <code>value</code>, <code>items[]</code>',
              'frontend',
              'GA4',
            ],
            [
              '<code>purchase</code>',
              '<strong>jednou</strong> po vytvoření objednávky, ne při obnovení děkovací stránky',
              '<code>transaction_id</code>, <code>value</code>, <code>tax</code>, <code>shipping</code>, <code>currency</code>, <code>coupon</code>, <code>customer_type</code>, <code>items[]</code>',
              'backend → děkovací stránka',
              'GA4, Google Ads, Meta, Sklik, Heureka, Zboží',
            ],
            [
              '<code>refund</code>',
              'storno nebo vratka v administraci',
              '<code>transaction_id</code>, <code>value</code>, <code>currency</code>, <code>items[]</code> u částečné vratky',
              '<strong>server</strong>: Measurement Protocol nebo Data Manager API',
              'GA4',
            ],
            [
              '<code>generate_lead</code>',
              'po úspěšné odpovědi serveru na odeslání formuláře',
              '<code>form_id</code>, <code>lead_topics</code>, <code>lead_id</code>, <code>user_data.sha256_*</code>',
              'frontend a server, který vrátí <code>lead_id</code>',
              'GA4, Google Ads pro rozšířené konverze, Meta <code>Lead</code> přes CAPI s <code>event_id</code> = <code>lead_id</code>, LinkedIn',
            ],
            [
              '<code>login</code> / <code>sign_up</code>',
              'úspěšné přihlášení nebo registrace',
              '<code>method</code>',
              'frontend',
              'GA4',
            ],
            [
              '<code>search</code>',
              'zobrazení výsledků vyhledávání',
              '<code>search_term</code>',
              'šablona výsledků',
              'GA4',
            ],
            [
              '<code>cookie_consent_update</code>',
              'změna volby v cookie liště',
              'stav kategorií souhlasu',
              'CMP',
              'GTM, pro spouštěče',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            '<code>user_id</code> je interní identifikátor, ze kterého nejde zpětně získat původní údaj. Nikdy to není e-mail.',
          ],
        },
        {
          type: 'table',
          caption: 'Parametry položky v poli items[]',
          head: ['Parametr', 'Typ', 'Povinné', 'Pravidlo a příklad'],
          rows: [
            [
              '<code>item_id</code>',
              'string',
              'ano*',
              'SKU z administrace, shodné s feedem pro Merchant Center a srovnávače: <code>SKU-1042</code>',
            ],
            ['<code>item_name</code>', 'string', 'ano*', 'název bez varianty: <code>Trekové boty Alpina</code>'],
            ['<code>item_brand</code>', 'string', 'doporučené', '<code>Alpina</code>'],
            [
              '<code>item_category</code> … <code>item_category5</code>',
              'string',
              'doporučené',
              'strom kategorií, nejvýš pět úrovní: <code>Obuv</code> › <code>Trekové</code>',
            ],
            ['<code>item_variant</code>', 'string', 'volitelné', '<code>42</code> nebo <code>černá</code>'],
            [
              '<code>price</code>',
              'number',
              'doporučené',
              'jednotková cena <strong>po slevě</strong>, s DPH, nebo bez podle dohody, desetinná tečka: <code>1652.89</code>',
            ],
            [
              '<code>quantity</code>',
              'integer',
              'doporučené',
              '<code>1</code>; když parametr chybí, GA4 počítá s jedním kusem',
            ],
            ['<code>discount</code>', 'number', 'volitelné', 'sleva na kus: <code>183.65</code>'],
            ['<code>coupon</code>', 'string', 'volitelné', 'kupón na úrovni položky'],
            ['<code>index</code>', 'integer', 'volitelné', 'pozice ve výpisu: <code>0</code>, <code>1</code>, …'],
            [
              '<code>item_list_id</code> / <code>item_list_name</code>',
              'string',
              'volitelné',
              'odkud produkt přišel: <code>kategorie-obuv</code>',
            ],
            [
              'vlastní parametry',
              '–',
              '–',
              'až 27 na položku, třeba <code>stock_status</code>. <strong>Marži do prohlížeče neposílejte</strong>, je vidět v kódu stránky. Patří do BigQuery přes import z ERP.',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: ['* Stačí jeden z parametrů <code>item_id</code> a <code>item_name</code>. Doporučujeme oba.'],
        },
      ],
    },

    {
      id: 'ukazka-kodu',
      eyebrow: 'kód',
      title: 'Ukázka dataLayer.push pro vývojáře',
      lead: 'Takhle vypadají ukázky ve specifikaci. Ke každé patří akceptační kritéria.',
      tone: 'dark',
      blocks: [
        { type: 'code', lang: 'html', caption: 'Kontext stránky – nad kódem GTM', code: CODE_CONTEXT },
        { type: 'code', lang: 'js', caption: 'Nákup – purchase', code: CODE_PURCHASE },
        { type: 'code', lang: 'js', caption: 'Poptávka – generate_lead', code: CODE_LEAD },
        {
          type: 'paragraphs',
          items: [
            'Hashované údaje posíláme do Google Ads a Meta jen se souhlasem návštěvníka: u Googlu podle signálu <code>ad_user_data</code>, u Mety podle marketingové kategorie v cookie liště. Do GA4 <code>user_data</code> neposíláme.',
            'Normalizace podle dokumentace Google: malá písmena, ořez mezer a telefon ve formátu E.164. Stejný kontrakt používá i formulář na tomto webu.',
          ],
        },
      ],
    },

    {
      id: 'validace',
      eyebrow: 'testy',
      title: 'Jak ověříme, že datová vrstva funguje a bude fungovat',
      lead: 'Ruční kontrola v náhledu GTM ukáže stav v jednom okamžiku. Každá nová verze webu ale může datovou vrstvu rozbít. Proto ji testujeme na třech úrovních.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Úroveň', 'Co děláme', 'Kdy běží', 'Kdo to vidí'],
          rows: [
            [
              '<strong>1. Schéma</strong>',
              'Pro každou událost JSON Schema: povinné parametry, typy <code>number</code> a <code>string</code>, povolené hodnoty, formát měny a ID',
              'při každém testu scénářů',
              'vývojáři',
            ],
            [
              '<strong>2. Testy scénářů</strong>',
              'Automatické testy prohlížeče v Playwrightu nebo Cypressu projdou nákup, košík, formulář a přihlášení, zachytí <code>window.dataLayer</code> a porovnají ho se schématem',
              'v CI při každém nasazení na testovací prostředí',
              'vývojáři, my',
            ],
            [
              '<strong>3. Monitoring provozu</strong>',
              'Denní kontrola dat v BigQuery nebo v server-side GTM: nákupy bez <code>transaction_id</code>, duplicitní <code>transaction_id</code>, nulová hodnota, propad počtu událostí. Upozornění e-mailem nebo do Slacku',
              'denně',
              'marketing, my',
            ],
          ],
        },
        { type: 'code', lang: 'ts', caption: 'Zkrácená ukázka testu v Playwrightu', code: CODE_TEST },
        {
          type: 'callout',
          tone: 'info',
          title: 'Poznámka pro vývojáře',
          text: 'Prohlížeč po přenačtení stránky vytvoří <code>dataLayer</code> znovu. Test zdvojení proto musí hlídat i logiku na serveru, která pozná, že web nákup už odeslal, nebo kontrolovat odchozí požadavky. Ukázku jsme zjednodušili.',
        },
      ],
    },

    {
      id: 'spoluprace-s-it',
      eyebrow: 'postup',
      title: 'Jak spolupracujeme s vašimi vývojáři',
      lead: 'Předáním specifikace nekončíme. S vývojáři pracujeme až do akceptace, ať jde o interní tým, nebo externího dodavatele.',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní konzultace',
              text: 'Za třicet minut zdarma zjistíme, co web posílá dnes a co bude potřeba přidat.',
              fromClient: 'URL webu, platforma a plán vývoje.',
            },
            {
              title: 'Workshop',
              text: 'Za hodinu až hodinu a půl projdeme měřicí plán, architekturu webu a omezení platformy.',
              fromClient: 'Účast marketingu a vývoje.',
            },
            {
              title: 'Specifikace a JSON Schema',
              text: 'Dokument a JSON Schema ve formátu, který používáte: Markdown v repozitáři, Confluence nebo Google Sheets.',
              fromClient: 'Přístup k testovacímu prostředí a struktura dat, třeba kategorie a ID.',
            },
            {
              title: 'Tickety',
              text: 'Pro každou událost připravíme user story s akceptačními kritérii do Jiry, YouTracku nebo GitLabu.',
            },
            {
              title: 'Dotazy během vývoje',
              text: 'Vývojáři datovou vrstvu programují a my odpovídáme na dotazy ve sdíleném kanálu: Slack, Teams nebo e-mail.',
              fromClient: 'Kapacita vývoje.',
            },
            {
              title: 'Kontrola na testovacím prostředí',
              text: 'Protokol s nálezy a ukázkou správného výstupu.',
              fromClient: 'Nasazení oprav.',
            },
            {
              title: 'Akceptace a spuštění',
              text: 'Kontrola v produkci, nastavení GTM a předání testů do CI projektu.',
              fromClient: 'Release do produkce.',
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Ukázka akceptačních kritérií pro purchase',
          items: [
            'Web událost odešle právě jednou na objednávku, i po obnovení děkovací stránky nebo návratu z platební brány.',
            '<code>transaction_id</code> = číslo objednávky v administraci, typ string.',
            '<code>value</code> = Σ <code>price</code> × <code>quantity</code>, bez dopravy, s DPH, nebo bez podle dohody.',
            'Všechna čísla jsou <code>number</code> s tečkou, ne text s čárkou.',
            'Před pushem proběhne <code>dataLayer.push({ ecommerce: null })</code>.',
            '<code>item_id</code> odpovídá ID ve feedu pro Merchant Center, Heureku a Zboží.',
            'Při platbě převodem nebo na dobírku web událost odešle také, a to po vytvoření objednávky, ne po zaplacení.',
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'diagram',
      title: 'Kde datová vrstva v měření sedí',
      lead: 'Datová vrstva je smlouva mezi webem a měřením. Web zapisuje data jednou, v jednom formátu, a GTM je překládá pro jednotlivé nástroje. Specifikace a testy hlídají, že smlouva platí i po dalším nasazení.',
      tone: 'light',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma: backend a šablona webu zapisují do datové vrstvy window.dataLayer, Google Tag Manager data předá do GA4, Google Ads, Meta a server-side GTM. Specifikace a automatické testy kontrolují web při každém nasazení. Vratky posílá backend rovnou do GA4 přes Measurement Protocol.',
          columns: [
            {
              label: 'Backend',
              items: ['objednávka, ceny, ID'],
              note: 'Vratky posílá rovnou do GA4 přes Measurement Protocol.',
            },
            {
              label: 'Šablona / SPA',
              items: ['dataLayer.push'],
              note: 'Automatické testy v CI ji kontrolují při každém nasazení podle specifikace a JSON Schema.',
            },
            {
              label: 'window.dataLayer',
              items: ['page · user', 'purchase · generate_lead'],
            },
            {
              label: 'Google Tag Manager',
              items: ['překlad dat pro jednotlivé nástroje'],
            },
            {
              label: 'Nástroje',
              items: ['GA4', 'Google Ads', 'Meta Pixel', 'server-side GTM → Meta CAPI, Sklik…'],
            },
          ],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Scraping, integrace platformy, nebo vlastní datová vrstva?',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: [
            'Kritérium',
            'Čtení ze stránky v GTM',
            'Datová vrstva platformy nebo pluginu',
            'Vlastní datová vrstva podle specifikace',
          ],
          highlightColumn: 3,
          rows: [
            ['Spolehlivost', 'Nízká, rozbije ji změna šablony', 'Dobrá pro standardní události', 'Vysoká, hlídají ji specifikace a testy'],
            [
              'Pokrytí',
              'Jen to, co je vidět na stránce',
              'Co platforma posílá. Často chybí parametry nebo B2B události',
              'Vše z měřicího plánu, včetně leadů a uživatelských atributů',
            ],
            [
              'Shoda hodnot',
              'Obtížná: formátování cen, DPH',
              'Podle logiky platformy, často jiné než administrace',
              'Pravidla určují DPH, dopravu i slevy',
            ],
            ['Práce vývojářů', 'Žádná', 'Žádná nebo malá', 'Jednorázová implementace a údržba testů'],
            [
              'Kdy zvolit',
              'Jen dočasně',
              'Menší e-shop na hotové platformě, třeba Shoptet nebo Shopify, kde stačí doladit mapování v GTM',
              'Vlastní řešení, headless, B2B aplikace, velké firmy, redesign',
            ],
          ],
        },
      ],
    },

    {
      id: 'platformy',
      eyebrow: 'platformy',
      title: 'Na čem je váš web?',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Shoptet, Upgates',
              text: 'Vycházíme z datové vrstvy platformy a v GTM ji mapujeme na schéma GA4. Co platforma neumí, doplníme.',
            },
            {
              title: 'Shopify',
              text: 'Pokladnu a měření ovlivňují pravidla Shopify pro pixely, takzvané customer events. Navrhneme řešení podle tarifu a verze pokladny.',
            },
            {
              title: 'WooCommerce, PrestaShop, Magento',
              text: 'Posoudíme plugin. Často je rychlejší napsat čistou datovou vrstvu do šablony než opravovat plugin.',
            },
            {
              title: 'Vlastní řešení a headless',
              text: 'U Reactu, Vue, Next.js nebo Nuxtu řešíme časování pushů, virtuální zobrazení stránek v SPA, hydrataci a události, které vznikají až po odpovědi API.',
            },
            {
              title: 'B2B aplikace, portály, kalkulačky',
              text: 'Události procesu, třeba krok kalkulačky, odeslání poptávky nebo přihlášení zákazníka, a návaznost na CRM.',
            },
          ],
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Měřicí plán', text: 'Proč měříme to, co měříme.', tag: 'measurement-plan.xlsx' },
            {
              title: 'Specifikace datové vrstvy',
              text: 'Události, parametry, pravidla a ukázky kódu.',
              tag: 'datalayer-spec.md',
            },
            { title: 'JSON Schema', text: 'Strojově čitelná pravidla pro každou událost.', tag: 'schema/*.json' },
            { title: 'Tickety s akceptačními kritérii', text: 'Rovnou pro váš backlog.', tag: 'backlog' },
            { title: 'Šablona testů', text: 'Testy scénářů pro Playwright nebo Cypress.', tag: 'tests/datalayer/' },
            { title: 'Protokol z kontroly', text: 'Nálezy z testovacího prostředí a produkce.', tag: 'qa-protocol.pdf' },
            {
              title: 'Nastavení GTM',
              text: 'Proměnné datové vrstvy a tagy, pokud patří do zakázky.',
              tag: 'gtm',
            },
            { title: 'Monitoring, volitelně', text: 'Denní kontrola v BigQuery s upozorněním.', tag: 'monitor' },
          ],
        },
      ],
    },

    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      tone: 'light',
      blocks: [
        {
          type: 'tabs',
          group: 'dl_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Celý nákupní trychtýř, jednotná ID produktů s feedy pro Merchant Center, Heureku a Zboží, pravidla pro DPH a slevy a vratky ze serveru.',
                'Víc na stránce <a href="/reseni/e-shopy">Měření pro e-shopy</a>.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Formuláře, kalkulačky a zákaznické portály. <code>lead_id</code> propojí web s CRM, takže Google Ads a Meta dostanou zpět informace o kvalifikovaných leadech a zakázkách.',
                'Víc na stránce <a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>.',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Jedna specifikace pro více webů a týmů, verzování v Gitu, JSON Schema jako kontrakt mezi dodavateli, testy v CI a monitoring. Specifikace přežije výměnu agentury i dodavatele webu.',
                'Víc na stránce <a href="/reseni/velke-firmy">Měření pro velké firmy</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co je datová vrstva a k čemu slouží?',
      a: 'Datová vrstva (dataLayer) je JavaScriptové pole, do kterého web zapisuje strukturované informace: typ stránky, zobrazené produkty, obsah košíku, objednávku nebo odeslání formuláře. Google Tag Manager z ní data čte a posílá je do GA4, Google Ads, Meta a dalších nástrojů. Výhoda: web data zapíše jednou a správně a měření nezávisí na vzhledu stránky.',
    },
    {
      q: 'Proč nestačí Google Tag Manager bez datové vrstvy?',
      a: 'GTM bez datové vrstvy čte data přímo ze stránky, například cenu z HTML prvku. Funguje to, dokud někdo nezmění šablonu. Pak měření tiše přestane fungovat nebo začne posílat nesmysly. Navíc některá data na stránce vůbec nejsou: číslo objednávky, typ zákazníka, ID produktu shodné s feedem nebo výsledek odeslání formuláře. Ty zná jen backend a do měření je dostane právě datová vrstva.',
    },
    {
      q: 'Kdo datovou vrstvu naprogramuje?',
      a: 'Obvykle vaši vývojáři nebo dodavatel e-shopu, protože data pocházejí z backendu a šablon. My připravíme specifikaci, tickety a testy, odpovídáme na dotazy a hotovou implementaci zkontrolujeme.',
    },
    {
      q: 'Kolik stojí návrh datové vrstvy a z čeho se skládá cena?',
      a: 'Cenu určuje počet typů stránek a událostí, třeba e-shop, formuláře, přihlášení nebo kalkulačky. Roli hraje i počet webů a jazyků a technologie: hotová platforma, nebo vlastní řešení či SPA. A také to, jestli chcete i JSON Schema, testy a monitoring. Po konzultaci dostanete nabídku s pevným rozsahem. Práci vývojářů na implementaci si odhadnete z ticketů, které píšeme tak, abyste je mohli naplánovat.',
    },
    {
      q: 'Jak dlouho to trvá?',
      a: 'Záleží hlavně na rozsahu a na kapacitě vývoje. Specifikace s ukázkami kódu zahrnuje i workshop s vývojáři. Pak následuje implementace, kontrola a spuštění a jejich tempo určuje hlavně vývojový tým. Rychlejší je zadat datovou vrstvu hned na začátku vývoje nového webu. Dodatečné úpravy hotového webu trvají déle.',
    },
    {
      q: 'Funguje to na Shoptetu, Shopify nebo WooCommerce?',
      a: 'Ano, ale postup se liší. Shoptet a Upgates mají vlastní datovou vrstvu, kterou v GTM mapujeme na schéma GA4 a doplníme, co chybí. U Shopify ovlivňují měření v pokladně pravidla platformy pro pixely. U WooCommerce a PrestaShopu posoudíme plugin, nebo napíšeme čistou datovou vrstvu do šablony. U vlastních řešení navrhujeme vše od začátku.',
    },
    {
      q: 'Máme web v Reactu nebo Next.js. Jde to?',
      a: 'Ano. U aplikací typu SPA, které nenačítají celou stránku znovu, řešíme virtuální zobrazení stránek a správné časování pushů až po načtení dat z API. Hlídáme také, aby web při překreslení komponenty neodeslal událost dvakrát. Ve specifikaci to popíšeme konkrétně pro váš framework a ověříme testy scénářů.',
    },
    {
      q: 'Jak poznáme, že datová vrstva funguje?',
      a: 'Rychlá kontrola: v konzoli prohlížeče napište <code>window.dataLayer</code> a uvidíte všechny objekty, které web zapsal. Nebo použijte náhled Google Tag Manageru. Spolehlivě to ale ukážou až automatické testy: při každém nasazení projdou nákup nebo formulář a porovnají data se specifikací.',
    },
    {
      q: 'Neposílá datová vrstva osobní údaje?',
      a: 'Nesmí. Do datové vrstvy a GA4 nepatří e-mail, jméno, telefon ani adresa v čitelné podobě. Uživatele identifikujeme interním ID. Pro rozšířené konverze v Google Ads a Meta posíláme jen hash SHA-256 po normalizaci, a to až po souhlasu návštěvníka. Marže a nákupní ceny do prohlížeče neposíláme vůbec, protože jsou vidět ve zdrojovém kódu. Právní posouzení zpracování by měl udělat váš právník.',
    },
    {
      q: 'Proč podle schématu GA4, když používáme i Meta a Sklik?',
      a: 'Schéma GA4 je podrobný a široce rozšířený standard e-commerce dat. Většina šablon v GTM pro další platformy s ním počítá nebo ho umí převést. Web tak zapisuje data jednou a GTM je překládá: <code>purchase</code> na Meta <code>Purchase</code>, položky na formát Skliku nebo Heureky. Jedna datová vrstva pro všechny nástroje znamená méně kódu a stejná čísla napříč systémy.',
    },
    {
      q: 'Co se stane při redesignu nebo změně platformy?',
      a: 'Specifikace funguje jako smlouva: nový web musí posílat stejné události ve stejném formátu. Dodavatel ji dostane do zadání a testy z CI ověří, že ji splnil, dřív než web půjde do produkce. Měření tak po spuštění funguje hned a data jsou srovnatelná se starým webem.',
    },
    {
      q: 'Komu patří specifikace?',
      a: 'Vám. Specifikace, JSON Schema i testy předáváme ve formátu, který si zvolíte, a můžete je dát jakémukoli dalšímu dodavateli. Doporučujeme je verzovat v repozitáři webu, aby změny měření procházely stejným schvalováním jako změny kódu.',
    },
  ],

  relatedArticles: [
    { slug: 'datova-vrstva-specifikace', title: 'Šablona specifikace datové vrstvy' },
    { slug: 'ga4-ecommerce-datalayer', title: 'Všechny e-commerce události s kódem' },
    { slug: 'merici-plan', title: 'Měřicí plán' },
    { slug: 'mereni-formularu-a-leadu', title: 'Měření formulářů a leadů' },
    { slug: 'ga4-pro-eshopove-platformy', title: 'GA4 na Shoptetu a dalších platformách' },
  ],

  relatedPages: ['sluzby/google-tag-manager', 'sluzby/implementace-ga4', 'sluzby/server-side-tracking'],

  contact: {
    formId: 'lp-datalayer',
    topics: ['datalayer'],
    title: 'Připravíme zadání datové vrstvy pro vaše vývojáře',
    lead: 'Napište nám, nebo vyplňte formulář. Na úvodní konzultaci zjistíme, co web posílá dnes a co bude potřeba přidat.',
    placeholder: 'Např. vyvíjíme nový e-shop a potřebujeme specifikaci dataLayer…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Datová vrstva (dataLayer)',
    serviceType: 'Návrh a specifikace datové vrstvy pro vývojáře',
    description:
      'Návrh datové vrstvy podle schématu GA4 pro e-commerce, leady a uživatelské atributy: specifikace s ukázkami kódu, akceptační kritéria, JSON Schema, automatické testy a podpora vývojářů.',
    audience: 'E-shopy, vývojové týmy, B2B firmy',
  },
};
