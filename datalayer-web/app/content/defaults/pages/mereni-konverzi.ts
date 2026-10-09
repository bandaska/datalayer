import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.6).
// Zdroj obsahu: seo-analyza/03_landing-pages/06_mereni-konverzi.md. Tabulka
// platforem zmizela jako duplicita tabů, každý tab má tři body a tab Meta navíc
// dvě věty o deduplikaci a kvalitě shody (ukázka Event Match Quality poputuje
// do článku B5). Dvě tabulky mapování a deduplikace nahradil vizuální pruh
// „objednávka → ID → jedna konverze“ a devět důvodů rozdílů čtyři body (detail
// do článků E2, B5 a D2). Ve sbalených Technických detailech zůstává přehled
// deduplikace po systémech a pravidla pro ID, hodnotu a identitu zákazníka.
// Dokud klient nedodá podklady, stránka neobsahuje: počet nastavených účtů,
// případovou studii, délky kroků a typickou délku nastavení, výčet podporovaných
// e-shopových platforem ani výchozí atribuční okno Mety. Čísla v symptomu jsou
// ilustrační a otevřené zůstává, jestli backendová napojení nasazujeme sami,
// nebo jen dodáváme zadání pro vývojáře.

export const page: PageInput = {
  path: 'sluzby/mereni-konverzi',
  kind: 'service',
  navTitle: 'Měření konverzí',
  tagline: 'Ads, Meta, Sklik i Heureka vidí totéž',
  pictogram: 'conversion',
  menuGroup: 'sber',

  seo: {
    title: 'Měření konverzí: Ads, Meta, Sklik, Heureka | datalayer.cz',
    description:
      'Nastavíme měření konverzí pro Google Ads, Meta (Pixel + CAPI), Sklik, Heureku i TikTok z jedné datové vrstvy, bez dvojího počítání. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'conversion',
    h1: 'Měření konverzí pro Google Ads, Meta, Sklik i Heureku',
    subtitle:
      'Měření konverzí předává reklamním systémům informaci, že návštěvník z reklamy nakoupil nebo poslal poptávku. Stavíme ho z jedné datové vrstvy, aby každá objednávka dorazila do Google Ads, Mety, Skliku i Heureky jednou, se stejným ID a hodnotou – a jen podle souhlasu návštěvníka. Reklamy pak optimalizují na čísla, která sedí s administrací.',
    primaryCta: { label: 'Zkontrolovat moje konverze', href: '#kontakt' },
    secondaryCta: { label: 'Proč se čísla liší', href: '#proc-se-lisi' },
    microcopy: 'Úvodní konzultace zdarma · účty a data zůstávají vaše, pracujeme přes role, ne přes hesla',
  },

  trust: ['Google Ads, Meta, Sklik i Heureka z jedné datové vrstvy', 'Stejné ID a hodnota ve všech systémech', 'Odsouhlasení s backendem po čtrnácti dnech'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Které z toho znáte?',
      lead: 'Část rozdílů mezi systémy je přirozená, část je chyba v nastavení.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Každý systém hlásí jiné číslo',
              text: 'Administrace třeba ukáže 412 objednávek, GA4 371 a Meta 388 – a nevíte, který rozdíl je chyba.',
              pictogram: 'dashboard',
              tag: 'admin ≠ ga4',
            },
            {
              title: 'Systémy počítají nákup dvakrát',
              text: 'Pixel i Conversions API bez společného ID nebo import z GA4 vedle konverzní značky – a k tomu jednou cena s DPH, jednou bez.',
              pictogram: 'eshop',
              tag: '×2',
            },
            {
              title: 'Sklik měří jen část',
              text: 'Starý konverzní kód bez předání souhlasu, retargeting zvlášť – a Seznam mezitím spouští nové měření SEM.',
              pictogram: 'warn',
              tag: 'rc.js → sul.js',
            },
            {
              title: 'Google Ads optimalizuje na formuláře, ne na zakázky',
              text: 'Reklama počítá každý odeslaný formulář, i když obchod v CRM ví, které leady jsou dobré.',
              pictogram: 'lead',
              tag: 'crm',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Než napíšeme první tag, dohodneme s vámi, co je konverze a jaká je její hodnota. Pravidla zapíšeme do konverzní mapy, aby platila i pro agentury a budoucí dodavatele.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'conversion-map',
              title: 'Konverzní mapa',
              text: 'Které akce jsou konverze, primární a sekundární akce, hodnoty, ID a okna – pro každý systém.',
            },
            {
              tag: 'dataLayer.md',
              title: 'Zadání datové vrstvy',
              text: 'Pokud chybí nebo je neúplná: specifikace pro vývojáře s událostmi nákupu a leadu. Navazuje na službu <a href="/sluzby/datova-vrstva">Datová vrstva</a>.',
            },
            {
              tag: 'gtm-web · gtm-server',
              title: 'Nastavený GTM',
              text: 'Tagy, spouštěče a podmínky souhlasu s popisem verzí, volitelně Conversions API a Events API přes server-side GTM.',
            },
            {
              tag: 'api-spec',
              title: 'Backendové napojení',
              text: 'Zadání pro vývojáře: Ověřeno zákazníky, Seznam Nákupy a offline konverze přes Data Manager API.',
            },
            {
              tag: 'test-report',
              title: 'Testovací protokol a odsouhlasení',
              text: 'Výsledky testovacích objednávek po systémech a po čtrnácti dnech tabulka backendu a systémů s vysvětlením rozdílů.',
            },
            {
              tag: 'access-list',
              title: 'Přístupy a předání',
              text: 'Přehled rolí ve všech účtech a krátké zaškolení pro marketing a agentury, jak konverze číst.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'architektura',
      title: 'Jedna objednávka, jeden zdroj, všechny systémy',
      lead: 'Základ je datová vrstva, kterou e-shop nebo web naplní při nákupu či odeslání formuláře. Z ní konverze putují třemi cestami podle toho, co která platforma podporuje. Kdy se serverová cesta vyplatí, rozebíráme u služby <a href="/sluzby/server-side-tracking">Server-side tracking</a>.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Jedna objednávka putuje třemi cestami: z datové vrstvy přes webový GTM do skriptů v prohlížeči, přes volitelný server-side GTM do Google Ads, Meta Conversions API a TikTok Events API a z backendu přes API do Heureky, Seznam Nákupů a offline konverzí Google Ads.',
          columns: [
            { label: 'zdroje', items: ['datová vrstva: nákup nebo lead s ID, hodnotou a měnou', 'backend, ERP nebo CRM'] },
            { label: 'cesty', items: ['prohlížeč: web GTM s Consent Mode v2', 'server: server-side GTM, volitelně', 'backend: API'] },
            {
              label: 'platformy',
              items: [
                'Google Ads a rozšířené konverze',
                'Meta a TikTok: pixel i API se stejným <code>event_id</code>',
                'Sklik, Seznam Nákupy a Heureka',
                'LinkedIn a Microsoft Ads',
              ],
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Prohlížeč:</strong> tagy v GTM naběhnou jen podle souhlasu návštěvníka – základ pro většinu platforem.',
            '<strong>Server:</strong> Meta CAPI a rozšířené konverze doplní, co prohlížeč nezachytí, vždy jen se souhlasem.',
            '<strong>Backend:</strong> Ověřeno zákazníky s tajným klíčem a offline konverze z CRM, které do prohlížeče nepatří.',
          ],
        },
      ],
    },

    {
      id: 'platformy',
      eyebrow: 'platformy',
      title: 'Co nastavíme v jednotlivých systémech',
      lead: 'Každý systém má vlastní pravidla pro deduplikaci a souhlas.',
      tone: 'white',
      blocks: [
        {
          type: 'tabs',
          group: 'platforms',
          items: [
            {
              id: 'meta',
              label: 'Meta Pixel a CAPI',
              paragraphs: [
                'Pixel doplníme o Conversions API ze serveru a oba posílají stejný název události i <code>event_id</code>, takže Meta duplicitu do 48 hodin zahodí. Kvalitu párování ukazuje Event Match Quality – zvedají ji hashovaný e-mail a telefon a další parametry zákazníka, vždy jen se souhlasem.',
              ],
              bullets: [
                'standardní události od <code>ViewContent</code> po <code>Purchase</code> nebo <code>Lead</code> s hodnotou',
                'Conversions API přes server-side GTM nebo z backendu',
                'test deduplikace v Test Events a podmínění marketingovým souhlasem',
              ],
            },
            {
              id: 'ads',
              label: 'Google Ads',
              bullets: [
                'konverzní akce přes Google tag v GTM s <code>transaction_id</code>, hodnotou a měnou',
                'rozšířené konverze s hashovaným e-mailem nebo telefonem, jen se souhlasem <code>ad_user_data</code>',
                'pro B2B konverze z CRM přes Data Manager API, od 15. června 2026 místo nahrávání přes Google Ads API',
              ],
            },
            {
              id: 'sem',
              label: 'Sklik a SEM',
              bullets: [
                'jeden skript <code>sul.js</code> nahradí kódy Skliku i Seznam Nákupů, jejichž podpora skončí v průběhu roku 2027',
                'SEM je v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a testujeme v sandboxu',
                `souhlas přes IAB TCF nebo <code>SEM('updateConsent')</code>, server jen pro události mimo web`,
              ],
            },
            {
              id: 'nakupy',
              label: 'Seznam Nákupy',
              bullets: [
                'standardní měření: kód na děkovací stránce a backendový kód s tajným klíčem z Centra prodejce',
                'měření jen v prohlížeči je citlivější na blokátory a neumožní hodnocení ani API',
                'postup volíme podle stavu účtu a platformy, protože Seznam s nástupem SEM měření sjednocuje',
              ],
            },
            {
              id: 'heureka',
              label: 'Heureka',
              bullets: [
                'měření konverzí dvěma skripty v šabloně nebo modulu platformy – GTM Heureka kvůli blokátorům nedoporučuje',
                'Ověřeno zákazníky voláme z backendu s tajným klíčem a ID produktů z XML feedu',
                'zákazník musí mít možnost dotazník odmítnout, ÚOOÚ ho považuje za obchodní sdělení',
              ],
            },
            {
              id: 'other',
              label: 'TikTok, LinkedIn, Microsoft',
              bullets: [
                '<strong>TikTok:</strong> Pixel a Events API se stejným <code>event_id</code>, deduplikace do 48 hodin',
                '<strong>LinkedIn:</strong> Insight Tag a Conversions API se společným <code>eventId</code>, hlavně pro B2B',
                '<strong>Microsoft Ads:</strong> UET tag s Consent Mode, v EHP od 5. května 2025 povinné signály souhlasu',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'proc-se-lisi',
      eyebrow: 'deduplikace a rozdíly',
      title: 'Stejné ID, jedna konverze – a proč se čísla přesto liší',
      lead: 'Každá objednávka má jedno ID z backendu a hodnotu podle jednoho pravidla, takže ji každý systém započítá jednou. Stejné číslo ale všechny systémy ukazovat nebudou, protože každý počítá jinak. Cíl je vysvětlitelný a stabilní rozdíl – jeho náhlá změna pak spustí kontrolu.',
      tone: 'light',
      blocks: [
        {
          type: 'flow',
          caption: 'Objednávka 1234 dostane jedno ID, které prohlížeč i server posílají jako stejný klíč, a každý systém z ní započítá jednu konverzi.',
          columns: [
            { label: 'objednávka 1234', items: ['ID z backendu, prohlížeč ho nikdy negeneruje', 'hodnota podle jednoho pravidla'] },
            { label: 'transaction_id · event_id', items: ['stejný klíč pro prohlížeč i server'] },
            { label: 'jedna konverze v každém systému', items: ['Google Ads, Meta, Sklik i Heureka', 'znovunačtení stránky nic nepřidá'] },
          ],
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Čtyři důvody, proč se čísla liší i při správném nastavení',
          items: [
            '<strong>Atribuce:</strong> Meta i Google Ads si připíšou stejný nákup, na kterém se podílely.',
            '<strong>Datum:</strong> Google Ads připisuje konverzi ke dni prokliku, GA4 ke dni nákupu.',
            '<strong>Souhlas a modelování:</strong> Google Ads ukazuje i modelované konverze, Meta a Sklik vidí jen lidi se souhlasem.',
            '<strong>Storna a vratky:</strong> backend storno odečte, reklamní systém ne.',
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak nastavení probíhá',
      lead: 'Stejných pět kroků jako u všech našich služeb. Po spuštění následuje čtrnáct dní souběžného běhu a odsouhlasení s backendem, staré kódy vypneme až potom.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Podle konverzní mapy nastavíme GTM, Conversions API, rozšířené konverze, SEM, Heureku a další systémy – všude se stejným ID a hodnotou.',
          implementationFromClient: 'přístupy pro úpravy a tokeny API, vývojář nebo přístup do administrace e-shopu',
        },
      ],
    },

    {
      id: 'overeni',
      eyebrow: 'ověření',
      title: 'Jak poznáte, že měření konverzí funguje',
      lead: 'Každé nastavení ověřujeme testovacími objednávkami nebo poptávkami a pak dva týdny porovnáváme s backendem.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'testovací objednávka, kterou sledujeme od datové vrstvy po každý systém',
            'stejné ID a hodnota všude a jedna konverze i po znovunačtení stránky',
            'deduplikace v Metě a TikToku a správné chování po odmítnutí souhlasu',
            'odsouhlasení s backendem po čtrnácti dnech s vysvětlením rozdílů',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: deduplikace a parametry po systémech',
    blocks: [
      {
        type: 'table',
        caption: 'Jak deduplikují jednotlivé systémy',
        head: ['Systém', 'Klíč a okno', 'Co testujeme'],
        rows: [
          ['Meta', 'shodný <code>event_name</code> a <code>event_id</code>, 48 hodin', 'podíl deduplikovaných událostí v Events Manageru'],
          ['TikTok', 'shodná událost a <code>event_id</code>, 48 hodin', 'Test Events'],
          ['LinkedIn', 'shodné <code>eventId</code>, okno LinkedIn neuvádí', 'duplicity z Conversions API LinkedIn odečte'],
          ['Google Ads', '<code>transaction_id</code> u konverzní akce', 'znovunačtení děkovací stránky dá jednu konverzi'],
          ['Seznam SEM', 'deduplikace je podle Seznamu teprve v přípravě', 'stejná událost jde jen jednou cestou'],
          ['Heureka', 'ID objednávky v <code>set_order_id</code>', 'opakované zobrazení děkovací stránky'],
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'ID objednávky generuje vždy backend, nikdy prohlížeč. Hodnotu posíláme podle jednoho pravidla, třeba bez DPH a bez dopravy pro reklamní systémy, Heurece podle nastavení ve statistikách. ID produktů se shodují s produktovými feedy a měna odpovídá trhu.',
          'E-mail a telefon posíláme jen se souhlasem, po normalizaci a jako hash SHA-256: do Mety spolu s <code>external_id</code>, do Google Ads jako rozšířené konverze. Kvalitu shody v Metě dál zvedají aktuální <code>fbp</code> a <code>fbc</code>, IP adresa a user agent a také odesílání událostí hned, ne dávkově po hodinách.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Potřebuju Meta Pixel, když mám Conversions API?',
      a: 'Meta doporučuje oba zdroje souběžně: pixel zachytí události v prohlížeči a Conversions API je doplní ze serveru i tam, kde prohlížeč selže. Aby Meta nákup nepočítala dvakrát, posílají oba stejný název události a stejné <code>event_id</code>. Samotné Conversions API dává smysl třeba pro offline konverze, pro běžný e-shop doporučujeme kombinaci.',
    },
    {
      q: 'Co je Seznam Event Measurement a musím přejít?',
      a: 'Seznam Event Measurement, zkráceně SEM, je nové měření Seznamu: jeden skript <code>sul.js</code> nahrazuje kódy Skliku i měření pro Seznam Nákupy. Přechod budou podle Seznamu potřebovat všechny účty a podporu původních kódů Seznam ukončí v průběhu roku 2027. SEM je zatím v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a přepínáme až po ověření. Stav k říjnu 2026.',
    },
    {
      q: 'Jde měřit konverze bez souhlasu?',
      a: 'Ne tak, že bychom souhlas ignorovali – bez něj web nesmí ukládat ani číst netechnické údaje v zařízení návštěvníka. Google v advanced režimu Consent Mode dostává pingy bez cookies a část konverzí modeluje, ostatní systémy návštěvníka bez souhlasu nevidí. Naše práce je, aby u lidí se souhlasem konverze dorazily spolehlivě – víc u služby <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>.',
    },
    {
      q: 'Co budete potřebovat od našich vývojářů?',
      a: 'Záleží na stavu datové vrstvy a platformě. Pokud datová vrstva chybí nebo je neúplná, připravíme vývojářům zadání s událostmi nákupu a leadu, nebo upravíme nastavení e-shopové platformy. Pro backendová napojení – Ověřeno zákazníky, Seznam Nákupy a offline konverze – dostanou vývojáři zadání od nás.',
    },
    {
      q: 'Komu patří účty a jaké přístupy potřebujete?',
      a: 'Všechny účty – Google Ads, Meta Business, Sklik, Heureka i GTM – zůstávají vaše. Potřebujeme role s oprávněním k úpravám konverzí a značek, nikdy hesla, a nový token nebo datový zdroj vznikne vždy ve vašem účtu. Seznam přístupů dostanete při předání, abyste je mohli kdykoli odebrat.',
    },
    {
      q: 'Z čeho se skládá cena a jak dlouho to trvá?',
      a: 'Cena se odvíjí od počtu systémů, stavu datové vrstvy, platformy e-shopu, zapojení serveru nebo CRM a počtu domén a zemí. Délku nastavení ovlivňují stejné faktory a vždy k ní připočtěte čtrnáct dní souběžného běhu. Provoz serveru, pokud ho využijete, platíte přímo poskytovateli.',
    },
  ],

  relatedArticles: [
    { slug: 'meta-conversions-api', title: 'Meta Conversions API: deduplikace a kvalita shody' },
    { slug: 'seznam-event-measurement-sklik', title: 'Seznam Event Measurement: konverze Skliku po novu' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla mezi systémy' },
  ],

  relatedPages: ['sluzby/server-side-tracking', 'sluzby/cookie-lista-consent-mode', 'sluzby/datova-vrstva'],

  contact: {
    formId: 'lp-konverze',
    topics: ['konverze'],
    title: 'Ať reklamní systémy vidí stejné konverze jako vy',
    lead: 'Na úvodní konzultaci zdarma projdeme, jak objednávky nebo poptávky putují do reklamních systémů, a řekneme, kde je systémy počítají dvakrát a kde je nevidí vůbec.',
    placeholder: 'Např. Meta hlásí víc nákupů, než jich máme v administraci…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Měření konverzí pro Google Ads, Meta, Sklik a Heureku',
    serviceType: 'Nastavení a sjednocení měření konverzí v reklamních systémech',
    description:
      'Nastavení konverzí z jedné datové vrstvy pro Google Ads včetně rozšířených konverzí, Meta Pixel a Conversions API, Seznam Event Measurement pro Sklik a Seznam Nákupy, Heureku s měřením konverzí a Ověřeno zákazníky, TikTok, LinkedIn a Microsoft Ads. Sjednocení hodnot, deduplikace, testovací objednávky a odsouhlasení s backendem.',
    audience: 'E-shopy, B2B firmy a velké firmy',
  },
};
