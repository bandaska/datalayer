import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.3)
// a vzorové stránky server-side-tracking.ts. Zdroj obsahu:
// seo-analyza/03_landing-pages/03_datova-vrstva.md. Diagram „Kde datová vrstva
// v měření sedí“ stojí hned za symptomy. Z ukázky specifikace (dvě tabulky,
// 28 řádků) zbylo pět řádků, plná struktura patří do článků C1 a C2. Ze tří
// ukázek kódu zůstal jen purchase s akceptačními kritérii ve sbalených
// Technických detailech. Testy a spolupráce s vývojáři jsou body v postupu,
// srovnání přístupů tři karty a platformy řádek štítků s odkazy na záložky
// stránky /reseni/e-shopy. Dokud klient nedodá podklady, stránka neobsahuje
// případovou studii, počet specifikací, délky kroků, reakční dobu na dotazy
// vývojářů, šablonu specifikace ke stažení (lead magnet z briefu C1),
// nasazení datové vrstvy vlastními silami ani odkazy na nástroj dataLayer
// validátor (/nastroje zatím neexistuje). Klient ještě potvrzuje, že testy
// v CI a monitoring nabízí (zadání, kap. 6).

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
      'Datová vrstva neboli dataLayer je JavaScriptové pole, do kterého web zapisuje informace o stránce, produktech, objednávkách a akcích návštěvníka. Google Tag Manager z něj bere data pro GA4, Google Ads, Metu i další nástroje. Navrhneme, co přesně má web posílat, napíšeme specifikaci s ukázkami kódu a hotovou implementaci ověříme automatickými testy.',
    primaryCta: { label: 'Konzultovat datovou vrstvu', href: '#kontakt' },
    secondaryCta: { label: 'Ukázka specifikace', href: '#ukazka' },
    microcopy: 'Úvodní konzultace zdarma · píšeme pro vývojáře, ne pro marketing · odpovíme do jednoho pracovního dne',
  },

  trust: ['Podle oficiálního schématu GA4', 'Testy poběží v CI vašeho projektu', 'Specifikace a testy patří vám'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Měření často nefunguje, i když ho někdo „nasadil“.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Vývojáři nevědí, co nasadit',
              text: 'Zadání „přidejte GA4 e-commerce“ nestačí, protože si ho každý vyloží jinak.',
              pictogram: 'warn',
              tag: '?spec',
            },
            {
              title: 'GTM „škrábe“ data ze stránky',
              text: 'GTM čte cenu a název produktu z HTML a po změně šablony měření tiše přestane fungovat.',
              pictogram: 'gtm',
              tag: 'querySelector',
            },
            {
              title: 'Po redesignu spadly konverze',
              text: 'Nový web prošel testy vývojářů, měření ale nikdo netestoval.',
              pictogram: 'conversion',
              tag: 'release',
            },
            {
              title: 'Hodnota objednávky se liší',
              text: 'Jednou s DPH, jednou bez, jednou s dopravou, takže nástroje nejde porovnat.',
              pictogram: 'eshop',
              tag: 'value ≠',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'diagram',
      title: 'Kde datová vrstva v měření sedí',
      lead: 'Datová vrstva je smlouva mezi webem a měřením. Web zapisuje data jednou, v jednom formátu, a GTM je překládá pro jednotlivé nástroje.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma: backend a šablona webu zapisují do window.dataLayer a Google Tag Manager data předá do GA4, Google Ads, Meta a server-side GTM. Automatické testy kontrolují web při každém nasazení, vratky posílá backend rovnou do GA4.',
          columns: [
            {
              label: 'Backend',
              items: ['objednávka, ceny, ID'],
              note: 'Vratky posílá rovnou do GA4 přes Measurement Protocol.',
            },
            {
              label: 'Šablona / SPA',
              items: ['dataLayer.push'],
              note: 'Automatické testy v CI ji kontrolují při každém nasazení.',
            },
            { label: 'window.dataLayer', items: ['page · user', 'purchase · generate_lead'] },
            { label: 'Google Tag Manager', items: ['překlad dat pro jednotlivé nástroje'] },
            { label: 'Nástroje', items: ['GA4', 'Google Ads', 'Meta Pixel', 'server-side GTM → Meta CAPI, Sklik…'] },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Měření nezávisí na vzhledu.</strong> GTM nečte ceny ani názvy z HTML, takže změna šablony měření nerozbije.',
            '<strong>Jedna vrstva pro všechny nástroje.</strong> GTM přeloží <code>purchase</code> na Meta <code>Purchase</code> a položky na formát Skliku nebo Heureky.',
            '<strong>Data, která na stránce nejsou.</strong> Číslo objednávky, typ zákazníka nebo ID produktu shodné s feedem zná jen backend.',
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Specifikace vychází z měřicího plánu: nejdřív víme, na co se budete ptát, pak navrhujeme data.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'measurement-plan.xlsx',
              title: 'Měřicí plán',
              text: 'Proč měříme to, co měříme, a jaké otázky mají data zodpovědět.',
            },
            {
              tag: 'datalayer-spec.md',
              title: 'Specifikace datové vrstvy',
              text: 'Kontext stránky, e-commerce podle schématu GA4, leady, uživatelské atributy a pravidla zápisu s ukázkami kódu.',
            },
            {
              tag: 'schema/*.json',
              title: 'JSON Schema',
              text: 'Strojově čitelná pravidla pro každou událost: povinné parametry, typy a povolené hodnoty.',
            },
            {
              tag: 'backlog',
              title: 'Tickety s akceptačními kritérii',
              text: 'Pro každou událost user story rovnou do Jiry, YouTracku nebo GitLabu.',
            },
            {
              tag: 'tests/datalayer/',
              title: 'Šablona testů',
              text: 'Testy scénářů pro Playwright nebo Cypress, které poběží v CI vašeho projektu.',
            },
            {
              tag: 'qa-protocol.pdf · gtm',
              title: 'Protokol z kontroly a nastavení GTM',
              text: 'Nálezy z testovacího prostředí a produkce. Proměnné datové vrstvy a tagy v GTM, pokud patří do zakázky.',
            },
          ],
        },
      ],
    },

    {
      id: 'ukazka',
      eyebrow: 'ukázka',
      title: 'Jak vypadá specifikace datové vrstvy',
      lead: 'Pět řádků ze zkrácené specifikace e-shopu. Celá specifikace má i parametry položek, typy a akceptační kritéria.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Ukázka ze specifikace e-shopu',
          head: ['Událost', 'Kdy ji web odešle', 'Klíčové parametry'],
          rows: [
            [
              '<em>kontext stránky</em>',
              'na každé stránce, nad kódem GTM',
              '<code>page.type</code>, <code>page.language</code>, <code>user.login_state</code>, <code>user.customer_type</code>',
            ],
            ['<code>view_item</code>', 'zobrazení detailu produktu', '<code>currency</code>, <code>value</code>, <code>items[]</code>'],
            ['<code>add_to_cart</code>', 'úspěšné přidání do košíku', '<code>currency</code>, <code>value</code>, <code>items[]</code>'],
            [
              '<code>purchase</code>',
              '<strong>jednou</strong> po vytvoření objednávky',
              '<code>transaction_id</code>, <code>value</code>, <code>tax</code>, <code>shipping</code>, <code>items[]</code>',
            ],
            ['<code>generate_lead</code>', 'po úspěšné odpovědi serveru', '<code>form_id</code>, <code>lead_topics</code>, <code>lead_id</code>'],
          ],
        },
        {
          type: 'paragraphs',
          items: ['Chcete takovou specifikaci pro svůj web? <a href="#kontakt">Napište nám</a>.'],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'rozhodnutí',
      title: 'Scraping, integrace platformy, nebo vlastní datová vrstva?',
      lead: 'Vlastní datovou vrstvu nenavrhujeme vždy. Na hotové platformě často stačí doladit mapování v GTM.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'scraping',
              title: 'Čtení ze stránky v GTM',
              text: 'Vývojáři nic dělat nemusí, GTM ale vidí jen to, co je na stránce, a změna šablony měření rozbije. Hodí se jen dočasně.',
            },
            {
              tag: 'platforma',
              title: 'Datová vrstva platformy nebo pluginu',
              text: 'Dobrá pro standardní události, často ale chybí parametry nebo B2B události. Pro menší e-shop na hotové platformě.',
            },
            {
              tag: 'specifikace',
              title: 'Vlastní datová vrstva podle specifikace',
              text: 'Pokryje celý měřicí plán včetně leadů a pravidel pro DPH a slevy a hlídají ji testy. Pro vlastní řešení, headless a B2B aplikace.',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            '<strong>Na čem je váš web?</strong> U hotových platforem vycházíme z jejich datové vrstvy a doplníme, co chybí, u vlastních řešení a SPA navrhujeme vše od začátku.',
          ],
        },
        {
          type: 'tags',
          items: [
            { label: 'Shoptet', href: '/reseni/e-shopy#shoptet' },
            { label: 'Upgates', href: '/reseni/e-shopy#upgates' },
            { label: 'Shopify', href: '/reseni/e-shopy#shopify' },
            { label: 'WooCommerce', href: '/reseni/e-shopy#woocommerce' },
            { label: 'PrestaShop' },
            { label: 'Magento' },
            { label: 'React a Next.js' },
            { label: 'Vue a Nuxt' },
            { label: 'B2B portály a kalkulačky', href: '/reseni/b2b-a-lead-generation' },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak spolupráce probíhá',
      lead: 'Stejných pět kroků jako u všech našich služeb. Předáním specifikace nekončíme – s vývojáři pracujeme až do akceptace, ať jde o interní tým, nebo externího dodavatele.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Vývojáři naprogramují datovou vrstvu podle ticketů s akceptačními kritérii, my odpovídáme na dotazy a nastavíme GTM.',
          implementationFromClient: 'kapacita vývoje a přístup k testovacímu prostředí',
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'S vývojáři',
              text: '',
              bullets: [
                'workshop nad měřicím plánem, architekturou webu a omezeními platformy',
                'specifikace ve formátu, který používáte: Markdown v repozitáři, Confluence nebo Google Sheets',
                'dotazy během vývoje ve sdíleném kanálu: Slack, Teams nebo e-mail',
              ],
            },
            {
              title: 'Jak ověříme, že datová vrstva funguje',
              text: '',
              bullets: [
                'testy scénářů projdou nákup, košík, formulář a přihlášení a porovnají data se schématem',
                'testy běží v CI při každém nasazení na testovací prostředí',
                'testovací prostředí zkontrolujeme s protokolem nálezů, po spuštění i produkci',
                'volitelně denní monitoring v BigQuery: nákupy bez <code>transaction_id</code>, duplicity a propad událostí',
              ],
            },
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: ukázka purchase a akceptační kritéria',
    blocks: [
      { type: 'code', lang: 'js', caption: 'Nákup – purchase', code: CODE_PURCHASE },
      {
        type: 'list',
        style: 'check',
        title: 'Akceptační kritéria pro purchase',
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
      {
        type: 'paragraphs',
        items: [
          'Prohlížeč po přenačtení stránky vytvoří <code>dataLayer</code> znovu. Test zdvojení proto musí hlídat i logiku na serveru, která pozná, že web nákup už odeslal.',
          'Celá specifikace e-shopu pokrývá i <code>view_item_list</code>, <code>select_item</code>, <code>remove_from_cart</code>, <code>view_cart</code>, <code>begin_checkout</code>, <code>add_shipping_info</code>, <code>add_payment_info</code>, <code>refund</code> ze serveru, <code>login</code>, <code>sign_up</code>, <code>search</code> a <code>cookie_consent_update</code>.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Kolik stojí návrh datové vrstvy?',
      a: 'Cenu určuje počet typů stránek a událostí, počet webů a jazyků, technologie webu a to, jestli chcete i JSON Schema, testy a monitoring. Po konzultaci dostanete nabídku s pevným rozsahem. Práci vývojářů si odhadnete z ticketů, které píšeme tak, abyste je mohli naplánovat.',
    },
    {
      q: 'Jak dlouho to trvá?',
      a: 'Záleží hlavně na rozsahu a na kapacitě vývoje. Specifikace zahrnuje i workshop s vývojáři, tempo implementace, kontroly a spuštění pak určuje hlavně vývojový tým. Rychlejší je zadat datovou vrstvu hned na začátku vývoje nového webu než upravovat hotový web.',
    },
    {
      q: 'Kdo datovou vrstvu naprogramuje?',
      a: 'Obvykle vaši vývojáři nebo dodavatel e-shopu, protože data pocházejí z backendu a šablon. My připravíme specifikaci, tickety a testy, odpovídáme na dotazy a hotovou implementaci zkontrolujeme.',
    },
    {
      q: 'Neposílá datová vrstva osobní údaje?',
      a: 'Nesmí. Do datové vrstvy a GA4 nepatří e-mail, jméno, telefon ani adresa v čitelné podobě – uživatele identifikujeme interním ID a pro rozšířené konverze v Google Ads a Meta posíláme jen hash SHA-256, a to až po souhlasu návštěvníka. Marže do prohlížeče neposíláme vůbec, protože jsou vidět ve zdrojovém kódu. Právní posouzení zpracování by měl udělat váš právník.',
    },
    {
      q: 'Komu patří specifikace?',
      a: 'Vám. Specifikaci, JSON Schema i testy předáváme ve formátu, který si zvolíte, a můžete je dát jakémukoli dalšímu dodavateli. Doporučujeme je verzovat v repozitáři webu, aby změny měření procházely stejným schvalováním jako změny kódu.',
    },
    {
      q: 'Jak poznáme, že datová vrstva funguje?',
      a: 'Rychlá kontrola: v konzoli prohlížeče napište <code>window.dataLayer</code> a uvidíte všechny objekty, které web zapsal, nebo použijte náhled Google Tag Manageru. Spolehlivě to ale ukážou až automatické testy, které při každém nasazení projdou nákup nebo formulář a porovnají data se specifikací.',
    },
  ],

  relatedArticles: [
    { slug: 'datova-vrstva-specifikace', title: 'Jak napsat specifikaci datové vrstvy' },
    { slug: 'ga4-ecommerce-datalayer', title: 'GA4 e-commerce dataLayer s ukázkami kódu' },
    { slug: 'merici-plan', title: 'Měřicí plán' },
  ],

  relatedPages: ['sluzby/google-tag-manager', 'sluzby/implementace-ga4', 'sluzby/server-side-tracking'],

  contact: {
    formId: 'lp-datalayer',
    topics: ['ga4'],
    title: 'Připravíme zadání datové vrstvy pro vaše vývojáře',
    lead: 'Na úvodní konzultaci zdarma zjistíme, co web posílá dnes a co bude potřeba přidat.',
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
