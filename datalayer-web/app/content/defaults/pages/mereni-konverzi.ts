import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/06_mereni-konverzi.md (návrh v1, 8. října 2026).
// Dokud klient nedodá podklady, stránka neobsahuje: počet nastavených účtů v trust
// baru, případovou studii (MiniCase), délky kroků a typickou délku nastavení, výčet
// podporovaných e-shopových platforem a výchozí atribuční okno Mety, které zadání
// ověřilo jen v sekundárním zdroji. Ukázky rozhraní a odsouhlasení mají fiktivní data
// a štítek „ilustrační ukázka“.

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
      'Nastavíme konverze tak, aby každá objednávka nebo poptávka dorazila do všech reklamních systémů jednou, se stejným ID a hodnotou – a jen podle souhlasu návštěvníka. Ať reklamy optimalizují na čísla, která sedí s vaší administrací.',
    quickAnswer:
      'Měření konverzí předává reklamním systémům informaci, že návštěvník z reklamy nakoupil nebo poslal poptávku. Stavíme ho z jedné datové vrstvy: v prohlížeči přes Google Tag Manager a tam, kde to platforma umožní, i přes server – Meta Conversions API, rozšířené konverze Google Ads, Seznam Event Measurement. Každá konverze má jedno ID, jednu hodnotu a každý systém ji započítá jednou.',
    primaryCta: { label: 'Zkontrolovat moje konverze', href: '#kontakt' },
    secondaryCta: { label: 'Proč se čísla liší', href: '#proc-se-lisi' },
    microcopy: 'Úvodní konzultace zdarma. Účty a data zůstávají vaše – pracujeme přes role, ne přes hesla.',
  },

  trust: [
    'Google Ads, Meta, Sklik, Seznam Nákupy, Heureka, TikTok, LinkedIn i Microsoft Ads',
    'Stejné ID objednávky a hodnota ve všech systémech',
    'Každé nastavení ověříme testovací objednávkou a odsouhlasením s backendem',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Které z toho znáte?',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Každý systém hlásí jiné číslo',
              text: 'Třeba administrace 412 objednávek, GA4 371, Meta 388 a Google Ads 398. Část rozdílu je přirozená, část je chyba – a nevíte, která je která.',
              pictogram: 'dashboard',
              tag: 'admin ≠ ga4',
            },
            {
              title: 'Systémy počítají nákup dvakrát',
              text: 'Pixel i Conversions API bez stejného <code>event_id</code>, znovunačtení děkovací stránky nebo import z GA4 vedle konverzní značky Google Ads. Kampaně pak „vypadají“ lépe, než jsou.',
              pictogram: 'eshop',
              tag: '×2',
            },
            {
              title: 'Hodnota nesedí',
              text: 'Jeden systém dostává cenu s DPH, druhý bez, třetí včetně dopravy. Návratnost reklamy pak nejde porovnat.',
              pictogram: 'conversion',
              tag: 'value',
            },
            {
              title: 'Sklik měří jen část',
              text: 'Starý konverzní kód bez předání souhlasu, retargeting zvlášť – a Seznam mezitím spouští nové měření SEM.',
              pictogram: 'warn',
              tag: 'rc.js → sul.js',
            },
            {
              title: 'Heureka neposílá dotazníky, nebo je posílá bez možnosti odmítnutí',
              text: 'Ověřeno zákazníky voláte z prohlížeče a chybí ID produktů – nebo zákazník nemá jak dotazník odmítnout.',
              pictogram: 'consent',
              tag: 'heureka',
            },
            {
              title: 'Google Ads optimalizuje na formuláře, ne na zakázky',
              text: 'V B2B počítá Google Ads každý odeslaný formulář. Obchod mezitím ví, které leady jsou dobré – reklama ne.',
              pictogram: 'lead',
              tag: 'crm',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'architektura',
      title: 'Jedna objednávka, jeden zdroj, všechny systémy',
      lead: 'Základ je datová vrstva, kterou e-shop nebo web naplní při nákupu či odeslání formuláře. Z ní konverze putují třemi cestami: v prohlížeči přes GTM, přes server-side GTM a z backendu přes API. Která cesta se hodí pro kterou platformu, záleží na tom, co platforma podporuje.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Jedna objednávka putuje třemi cestami: z datové vrstvy přes webový GTM do skriptů v prohlížeči, přes volitelný server-side GTM do Google Ads, Meta Conversions API a TikTok Events API a z backendu přes API do Heureky, Seznam Nákupů a offline konverzí Google Ads.',
          columns: [
            {
              label: 'Zdroje',
              items: [
                'datová vrstva: <code>purchase</code> s <code>transaction_id</code>, <code>value</code>, <code>currency</code>, <code>items</code>, <code>event_id</code> a <code>user_data</code> jako hash',
                'backend, ERP nebo CRM',
              ],
            },
            { label: 'Cesty', items: ['prohlížeč: web GTM s Consent Mode v2', 'server: server-side GTM, volitelně', 'backend: API'] },
            {
              label: 'Platformy',
              items: [
                'Google Ads a rozšířené konverze',
                'Meta Pixel a Conversions API se stejným <code>event_id</code>',
                'TikTok Pixel a Events API',
                'Seznam SEM: <code>sul.js</code> v prohlížeči, S2S jen bez duplicity',
                'Heureka: skripty v šabloně, Ověřeno zákazníky z backendu',
                'Seznam Nákupy: standardní měření s backendovým kódem',
                'Google Ads: offline konverze a leady přes Data Manager API',
                'LinkedIn Insight Tag a Microsoft UET',
              ],
            },
          ],
        },
        {
          type: 'paragraphs',
          items: ['Kdy dává smysl serverová cesta, rozebíráme u služby <a href="/sluzby/server-side-tracking">Server-side tracking</a>.'],
        },
      ],
    },

    {
      id: 'platformy',
      eyebrow: 'platformy',
      title: 'Co nastavíme v jednotlivých systémech',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Přehled platforem',
          head: ['Platforma', 'Prohlížeč', 'Server nebo API', 'Deduplikace', 'Souhlas'],
          rows: [
            [
              '<strong>Google Ads</strong>',
              'Konverzní značka přes Google tag v GTM',
              'sGTM; offline konverze a leady přes Data Manager API',
              '<code>transaction_id</code>',
              'Consent Mode v2: <code>ad_storage</code>, <code>ad_user_data</code>',
            ],
            [
              '<strong>Meta</strong>',
              'Meta Pixel s <code>eventID</code>',
              'Conversions API přes sGTM nebo z backendu',
              '<code>event_name</code> a <code>event_id</code>, 48 hodin',
              'Marketingový souhlas, podmínka v GTM',
            ],
            [
              '<strong>Sklik</strong>: Seznam Event Measurement',
              '<code>sul.js</code>, povinný',
              'S2S na <code>sem.seznam.cz</code>',
              'Plná deduplikace je „v přípravě“',
              'IAB TCF nebo formát Google Consent Mode; <code>sid</code> a <code>udid</code> až po <code>ad_storage</code>',
            ],
            [
              '<strong>Seznam Nákupy</strong>, dříve Zboží.cz',
              'Frontendový kód na děkovací stránce',
              'Backendový kód s tajným klíčem',
              '–',
              'Podmínky měření a zpracovatelská smlouva',
            ],
            [
              '<strong>Heureka</strong>: měření konverzí',
              'Dva skripty: detail produktu a děkovací stránka',
              '–',
              '<code>set_order_id</code>',
              'Skript si podle Heureky hlídá souhlas sám, ověřujeme to',
            ],
            [
              '<strong>Heureka</strong>: Ověřeno zákazníky',
              '–',
              'Volání z backendu s tajným klíčem',
              '–',
              'Dotazník je obchodní sdělení, zákazník musí mít možnost ho odmítnout',
            ],
            ['<strong>TikTok</strong>', 'TikTok Pixel', 'Events API', 'Událost a <code>event_id</code>, 48 hodin', 'Marketingový souhlas'],
            ['<strong>LinkedIn</strong>', 'Insight Tag', 'Conversions API', '<code>eventId</code>', 'Marketingový souhlas'],
            [
              '<strong>Microsoft Ads</strong>',
              'UET tag',
              'Podle aktuální nabídky Microsoftu',
              '–',
              'Od 5. května 2025 v EHP, Spojeném království a Švýcarsku povinné signály souhlasu',
            ],
          ],
        },
        {
          type: 'tabs',
          group: 'platforms',
          items: [
            {
              id: 'meta',
              label: 'Meta Pixel a CAPI',
              paragraphs: [
                'Meta Pixel v prohlížeči doplníme o Conversions API ze serveru – Meta sama doporučuje oba zdroje souběžně. Aby Meta nákup nepočítala dvakrát, posílají oba stejný název události a stejné <code>event_id</code> a Meta duplicitu, která dorazí do 48 hodin, zahodí.',
                'Kvalitu párování ukazuje Event Match Quality: čím víc kvalitních parametrů zákazníka, tím víc konverzí Meta přiřadí ke kampaním. Patří sem hashovaný e-mail a telefon, <code>external_id</code>, <code>fbp</code>, <code>fbc</code>, IP adresa a user agent. Pixel nastavíme pro e-shop i pro poptávky.',
              ],
              bullets: [
                'standardní události od <code>ViewContent</code> po <code>Purchase</code> nebo <code>Lead</code> s hodnotou a <code>content_ids</code>',
                'Conversions API přes server-side GTM nebo z backendu',
                'deduplikace a test v nástroji Test Events a v Meta Pixel Helperu',
                'podmínění marketingovým souhlasem',
              ],
            },
            {
              id: 'ads',
              label: 'Google Ads',
              paragraphs: [
                'Pro nákupy nastavujeme konverzní akci přímo přes Google tag v GTM s ID objednávky, hodnotou a měnou. Rozšířené konverze doplní e-mail nebo telefon zákazníka, který po normalizaci zahashujeme algoritmem SHA-256, aby Google dokázal přiřadit víc konverzí – jen se souhlasem <code>ad_user_data</code>.',
                'Od dubna 2026 Google Ads přijímá uživatelská data z tagu, Data Manageru i API současně, od června 2026 je pro web i leady jeden přepínač. Hlídáme, aby Google Ads nákup nepočítal dvakrát, třeba když vedle konverzní značky běží jako primární akce i import z GA4.',
              ],
              bullets: [
                'konverzní akce, primární a sekundární, hodnoty a <code>transaction_id</code>',
                'rozšířené konverze z datové vrstvy přes <code>user_data</code>',
                'propojovač konverzí a Consent Mode v2',
                'pro B2B konverze z CRM přes Data Manager API, které od 15. června 2026 nahrazuje nahrávání přes Google Ads API',
              ],
            },
            {
              id: 'sem',
              label: 'Sklik a SEM',
              paragraphs: [
                'Seznam přechází na Seznam Event Measurement: jeden skript <code>sul.js</code> nahrazuje retargetingový a konverzní kód Skliku i měření pro Seznam Nákupy a podporuje víc typů událostí. SEM je zatím v betě, přepnutí účtu je nevratné a Seznam ukončí podporu původních kódů v průběhu roku 2027; přesný termín oznámí s předstihem.',
                'SEM proto nasazujeme nejdřív souběžně se starým měřením, testujeme ho v sandboxu a teprve pak přepínáme. Server-to-server je doplněk, ne náhrada: <code>sul.js</code> musí běžet v prohlížeči a stejnou událost zatím neposíláme z webu i serveru, protože deduplikace je podle Seznamu teprve v přípravě.',
              ],
              bullets: [
                'SEM ID, události a parametry podle reference Seznamu',
                `souhlas přes IAB TCF nebo <code>SEM('updateConsent')</code>`,
                'souběžný běh, sandbox a diagnostika měření',
                'S2S jen pro události mimo web, třeba offline konverze nebo aplikace',
              ],
            },
            {
              id: 'nakupy',
              label: 'Seznam Nákupy',
              paragraphs: [
                'Pro Seznam Nákupy, dříve Zboží.cz, doporučujeme standardní měření: frontendový kód na děkovací stránce a backendový kód s tajným klíčem z Centra prodejce. Omezené měření jen v prohlížeči je citlivější na blokátory a neumožní hodnocení od ověřených zákazníků ani API. S nástupem SEM Seznam měření sjednocuje, postup proto volíme podle stavu účtu a platformy.',
              ],
            },
            {
              id: 'heureka',
              label: 'Heureka',
              paragraphs: [
                '<strong>Měření konverzí</strong> má dva skripty. První na detailu produktu uloží informaci o příchodu z Heureky, druhý na děkovací stránce předá ID objednávky, produkty s cenou za kus včetně DPH, celkovou hodnotu a měnu. Heureka počítá konverze do třiceti dní po prokliku a vkládání přes GTM nedoporučuje kvůli blokátorům. Skripty proto nasazujeme přímo do šablony nebo přes modul e-shopové platformy.',
                '<strong>Ověřeno zákazníky</strong> voláme z backendu: e-mail zákazníka, ID objednávky a ID produktů z XML feedu, s tajným klíčem, který nesmí být v prohlížeči. ÚOOÚ považuje hodnotící dotazníky za obchodní sdělení a má je v kontrolním plánu na rok 2026. Zákazník musí mít možnost zaslání předem odmítnout, typicky zaškrtávátkem v objednávce, a odmítnout ho i v samotném dotazníku.',
                '<em>Nejde o právní radu – nastavení textů konzultujte s právníkem.</em>',
              ],
            },
            {
              id: 'other',
              label: 'TikTok, LinkedIn, Microsoft',
              paragraphs: [
                '<strong>TikTok:</strong> Pixel a Events API, deduplikace přes stejnou událost a <code>event_id</code> do 48 hodin.',
                '<strong>LinkedIn</strong>, hlavně pro B2B: Insight Tag a Conversions API se společným <code>eventId</code>. Pro každý zdroj vlastní konverzní pravidlo, při shodě LinkedIn započítá událost z Insight Tagu.',
                '<strong>Microsoft Ads:</strong> UET tag s Consent Mode. Microsoft od 5. května 2025 vyžaduje pro návštěvy z EHP, Spojeného království a Švýcarska signály souhlasu.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'event-match-quality',
      eyebrow: 'event match quality',
      title: 'Jak vypadá dobře nastavená Meta: prohlížeč + server, deduplikace, kvalita shody',
      lead: 'Tohle je typický stav po nasazení Conversions API, který kontrolujeme při předání. Jde o ilustrační ukázku rozhraní s fiktivními daty.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Ilustrační ukázka, fiktivní data. Skutečné rozhraní Mety vypadá jinak a Meta ho průběžně mění.',
          head: ['Událost', 'Integrace', 'Události za sedm dní', 'Deduplikace', 'Kvalita shody', 'Poslední událost'],
          rows: [
            ['Purchase', 'Prohlížeč · Server', '2 846', '✓ shodné <code>event_id</code>', '<strong>8,4 / 10</strong>', 'před 4 min'],
            ['InitiateCheckout', 'Prohlížeč · Server', '4 330', '✓', '<strong>7,2 / 10</strong>', 'před 2 min'],
            ['AddToCart', 'Prohlížeč · Server', '9 120', '✓', '<strong>6,9 / 10</strong>', 'před 1 min'],
            ['ViewContent', 'Prohlížeč', '61 450', '–', '<strong>5,1 / 10</strong>', 'před 1 min'],
          ],
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'ilustrační ukázka',
              title: 'Purchase: kvalita shody 8,4 / 10',
              text: 'Podíl událostí s parametrem zákazníka. Doporučení: doplňte telefon do datové vrstvy na děkovací stránce, ale jen se souhlasem.',
              console: [
                'e-mail (hash) 94 % · external_id 94 %',
                'IP 100 % · user agent 100 % · fbp 89 %',
                '⚠ telefon (hash) 71 % · fbc 31 %',
                'deduplikace 97 %: 2 761 z 2 846',
              ],
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            '<strong>Co je Event Match Quality:</strong> skóre od nuly do deseti, které Meta přiřazuje serverovým událostem z webu. Říká, jak dobře je Meta podle zaslaných údajů dokáže spárovat s účty na Facebooku a Instagramu. Vyšší skóre obvykle znamená víc přiřazených konverzí a lepší optimalizaci.',
            '<strong>Jak ho zvedáme:</strong> posíláme víc kvalitních parametrů – hashovaný e-mail a telefon, <code>external_id</code>, aktuální <code>fbp</code> a <code>fbc</code>, IP adresu a user agent – a události posíláme hned, ne dávkově po hodinách.',
            '<strong>Kde je hranice:</strong> parametry posíláme jen u návštěvníků s marketingovým souhlasem a nikdy v čitelné podobě. Konkrétní „cílové“ skóre neslibujeme – záleží na tom, jaká data o zákaznících na webu máte, třeba jestli nakupují jako hosté, nebo přihlášení.',
          ],
        },
      ],
    },

    {
      id: 'deduplikace',
      eyebrow: 'hodnoty a deduplikace',
      title: 'Stejné ID, stejná hodnota, jedna konverze',
      lead: 'Než napíšeme první tag, dohodneme se s vámi na pravidlech: co je konverze, jaká je její hodnota a podle čeho poznáte duplicitu. Pravidla zapíšeme do konverzní mapy, aby platila i pro agentury a budoucí dodavatele.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Jedna objednávka, stejná data všude – ukázka mapování, přesné názvy parametrů určuje dokumentace platforem',
          head: ['Údaj', 'Datová vrstva GA4', 'Google Ads', 'Meta', 'Heureka', 'Pravidlo, které s vámi dohodneme'],
          rows: [
            [
              'ID objednávky',
              '<code>transaction_id</code>',
              '<code>transaction_id</code>',
              'v <code>custom_data</code> a jako součást <code>event_id</code>',
              '<code>set_order_id</code>',
              'Jedno ID z backendu, prohlížeč ho nikdy negeneruje',
            ],
            [
              'Hodnota',
              '<code>value</code>',
              '<code>value</code>',
              '<code>value</code>',
              '<code>set_total_vat</code>',
              'Třeba bez DPH a bez dopravy pro reklamní systémy; Heureka podle nastavení ve statistikách',
            ],
            ['Měna', '<code>currency</code>', '<code>currency</code>', '<code>currency</code>', 'měna podle ISO 4217', '<code>CZK</code> nebo <code>EUR</code> podle trhu'],
            ['Produkty', '<code>items[].item_id</code>', 'pro nákupní kampaně', '<code>content_ids</code>', 'ID produktu a cena za kus s DPH', 'ID shodná s produktovými feedy'],
            [
              'Identita jako hash',
              '<code>user_data</code>, SHA-256',
              'rozšířené konverze',
              '<code>em</code>, <code>ph</code>, <code>external_id</code>',
              'nepoužívá, Ověřeno zákazníky jde z backendu',
              'Jen se souhlasem, normalizace před hashem',
            ],
            ['Deduplikační klíč', '<code>event_id</code>', '<code>transaction_id</code>', '<code>event_id</code>', '<code>set_order_id</code>', 'Stejný pro prohlížeč i server'],
          ],
        },
        {
          type: 'table',
          caption: 'Jak deduplikují jednotlivé systémy',
          head: ['Systém', 'Mechanismus', 'Okno', 'Co testujeme'],
          rows: [
            [
              'Meta',
              'shodný <code>event_name</code> a <code>event_id</code>, alternativně <code>fbp</code> nebo <code>external_id</code>',
              '48 hodin',
              'Podíl deduplikovaných událostí v Events Manageru',
            ],
            ['TikTok', 'shodná událost a <code>event_id</code>', '48 hodin', 'Test Events'],
            ['LinkedIn', 'shodné <code>eventId</code>', 'LinkedIn ho neuvádí', 'Insight Tag má vyšší počet, duplicity z CAPI LinkedIn odečte'],
            ['Google Ads', '<code>transaction_id</code> u konverzní akce', '–', 'Znovunačtení děkovací stránky dá jednu konverzi'],
            ['Seznam SEM', 'deduplikace je „v přípravě“', '–', 'Stejná událost jde jen jednou cestou'],
            ['Heureka', 'ID objednávky', '–', 'Opakované zobrazení děkovací stránky'],
          ],
        },
      ],
    },

    {
      id: 'proc-se-lisi',
      eyebrow: 'rozdíly',
      title: 'Proč se čísla mezi systémy liší – i při správném nastavení',
      lead: 'Nejde o to, aby všechny systémy ukazovaly stejné číslo. Každý počítá jinak. Jde o to, aby rozdíly byly <strong>vysvětlitelné a stabilní</strong> a aby náhlá změna rozdílu spustila kontrolu.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Devět důvodů, proč se čísla liší',
          head: ['Důvod', 'Příklad', 'Co s tím uděláme'],
          rows: [
            [
              '<strong>Atribuce</strong> – každý systém si připisuje konverze, na kterých se podílel',
              'Zákazník klikne na reklamu v Metě i v Google Ads a oba systémy si nákup započítají. Heureka počítá konverze do třiceti dní po prokliku.',
              'Reportujeme vedle sebe, co si systém připisuje a co ukazuje GA4 nebo backend',
            ],
            [
              '<strong>Datum připsání</strong>',
              'Standardní sloupec Konverze v Google Ads připisuje konverzi ke dni prokliku, GA4 ke dni nákupu',
              'Pro srovnání používáme sloupce „podle času konverze“',
            ],
            [
              '<strong>Souhlas a modelování</strong>',
              'Google Ads může ve sloupci Konverze ukazovat i modelované konverze, Meta a Sklik vidí jen souhlasící',
              'Podíl souhlasů a modelovaných konverzí sledujeme zvlášť',
            ],
            [
              '<strong>Duplicity</strong>',
              'Pixel a CAPI bez <code>event_id</code>, import z GA4 i konverzní značka jako primární akce, znovunačtení děkovací stránky',
              'Deduplikace podle tabulky výše',
            ],
            ['<strong>Hodnota</strong>', 'S DPH, nebo bez DPH, doprava, slevové kódy, měna', 'Jedno pravidlo hodnoty v konverzní mapě'],
            [
              '<strong>Storna a vratky</strong>',
              'Backend storno odečte, reklamní systém ne',
              'Storna posíláme jako úpravy tam, kde to platforma umí, a v reportu je odlišujeme',
            ],
            [
              '<strong>Prohlížeč a platby</strong>',
              'Zákazník se z platební brány nevrátí, Safari zkracuje platnost cookies z JavaScriptu na sedm dní a po prokliku z odkazu s identifikátorem prokliku na 24 hodin, blokátory',
              'Serverové události z backendu se stavem souhlasu, first-party nastavení',
            ],
            [
              '<strong>Časová pásma a filtry</strong>',
              'Účty v různých časových pásmech, testovací a interní objednávky',
              'Sjednotíme pásmo, testovací objednávky označíme a vyřadíme',
            ],
            [
              '<strong>Víc zařízení</strong>',
              'Reklamní systémy párují přihlášené uživatele napříč zařízeními, GA4 bez User-ID ne',
              'Vysvětlujeme v reportu, v GA4 případně nasadíme User-ID',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Ukázka odsouhlasení, které dostanete čtrnáct dní po spuštění. Ukázkový příklad, fiktivní čísla.',
          head: ['Systém', 'Objednávky 1.–14. října', 'Rozdíl vůči backendu', 'Vysvětlení', 'Stav'],
          rows: [
            ['Backend e-shopu', '412', '–', 'zdroj pravdy, bez storen', '–'],
            ['GA4', '371', '−9,9 %', 'souhlas a blokátory; rozdíl je stabilní', '✓'],
            ['Google Ads podle času konverze', '398', 'nepočítáme', 'vlastní atribuce a modelované konverze', '✓'],
            ['Meta', '388', 'nepočítáme', 'vlastní atribuce', '✓'],
            ['Sklik, SEM', '96', 'nepočítáme', 'jen konverze, které Sklik přiřadil', '✓'],
            ['Heureka', '41', 'nepočítáme', 'prokliky z Heureky do třiceti dní', '✓'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'U reklamních systémů rozdíl vůči backendu nepočítáme – kvůli vlastní atribuci s ním nejsou srovnatelné jedna ku jedné.',
          ],
        },
      ],
    },

    {
      id: 'overeni',
      eyebrow: 'ověření',
      title: 'Jak poznáte, že měření konverzí funguje',
      lead: 'Každé nastavení ověřujeme testovacími objednávkami nebo poptávkami a pak dva týdny porovnáváme s backendem.',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Testovací objednávka v produkci.</strong> Označíme ji, sledujeme ji od datové vrstvy po každý systém a pak ji vyřadíme.',
            '<strong>Nástroje:</strong> GTM Preview, Tag Assistant, GA4 DebugView, Test Events v Meta Events Manageru a Meta Pixel Helper, diagnostika a sandbox SEM, statistiky měření konverzí Heureky, TikTok Pixel Helper.',
            '<strong>Kontrolní body:</strong> stejné ID a hodnota všude, jedna konverze po znovunačtení děkovací stránky, deduplikace v Metě a TikToku, chování při odmítnutí souhlasu a diagnostika rozšířených konverzí v Google Ads.',
            '<strong>Odsouhlasení po čtrnácti dnech:</strong> tabulka podle ukázky výše s vysvětlením rozdílů.',
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
              text: 'Pokud chybí nebo je neúplná: specifikace pro vývojáře s událostmi <code>purchase</code>, <code>generate_lead</code> a <code>user_data</code>. Navazuje na službu <a href="/sluzby/datova-vrstva">Datová vrstva</a>.',
            },
            { tag: 'gtm-web', title: 'Nastavený GTM', text: 'Tagy, spouštěče, podmínky souhlasu a verze s popisem.' },
            {
              tag: 'gtm-server',
              title: 'Serverová část, volitelně',
              text: 'Conversions API, rozšířené konverze a Events API přes server-side GTM.',
            },
            {
              tag: 'api-spec',
              title: 'Backendové napojení',
              text: 'Zadání pro vývojáře: Ověřeno zákazníky, Seznam Nákupy a offline konverze přes Data Manager API.',
            },
            {
              tag: 'test-report',
              title: 'Testovací protokol',
              text: 'Testovací objednávky, výsledky po systémech, deduplikace a souhlas.',
            },
            {
              tag: 'reconciliation',
              title: 'Odsouhlasení po čtrnácti dnech',
              text: 'Tabulka backendu a systémů s vysvětlením rozdílů.',
            },
            {
              tag: 'access-list',
              title: 'Přehled přístupů',
              text: 'Kdo má jakou roli v jakém účtu. Nic nezůstává na našich osobních účtech.',
            },
            { tag: 'handover', title: 'Předání', text: 'Krátké zaškolení pro marketing a agentury, jak konverze číst.' },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak nastavení probíhá',
      lead: 'Nastavení má šest kroků. Po spuštění následuje čtrnáct dní souběžného běhu a odsouhlasení s backendem.',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Audit konverzí',
              text: 'Projdeme účty, GTM, datovou vrstvu a souhlas a najdeme duplicity a chyby.',
              fromClient: 'Přístupy pro čtení do Google Ads, Meta Business, Skliku, Heureky, GTM a GA4',
            },
            {
              title: 'Konverzní mapa',
              text: 'Dohodneme pravidla: co je konverze, jaká je její hodnota, ID a okna.',
              fromClient: 'Rozhodnutí marketingu a obchodu',
            },
            {
              title: 'Datová vrstva',
              text: 'Připravíme zadání pro vývojáře, nebo upravíme nastavení na platformě.',
              fromClient: 'Vývojář nebo přístup do administrace',
            },
            {
              title: 'Nastavení',
              text: 'GTM, Conversions API, rozšířené konverze, SEM, Heureka a další systémy.',
              fromClient: 'Přístupy pro úpravy a tokeny API',
            },
            {
              title: 'Test a souběžný běh',
              text: 'Testovací objednávky a čtrnáct dní srovnání s backendem.',
              fromClient: 'Export objednávek nebo leadů',
            },
            {
              title: 'Předání',
              text: 'Dokumentace, zaškolení a vypnutí starých kódů.',
              fromClient: 'Účast agentur a marketingu',
            },
          ],
        },
      ],
    },

    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'segments',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Nákupy posíláme do Google Ads, Mety, Skliku, Seznam Nákupů, Heureky a TikToku se stejným ID objednávky a hodnotou. Řešíme přechod na Seznam Event Measurement, Ověřeno zákazníky z backendu i Conversions API. U e-shopových platforem ověříme, co jejich vestavěné napojení skutečně posílá.',
                'Víc o <a href="/reseni/e-shopy">měření pro e-shopy</a>.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B / lead-gen',
              paragraphs: [
                'Odeslaný formulář je jen začátek. Lead posíláme s hashovaným e-mailem do rozšířených konverzí pro leady, do Mety a do LinkedInu. Později z CRM pošleme informaci, že z leadu je kvalifikovaný lead nebo zakázka – do Google Ads přes Data Manager API, do Mety a LinkedInu přes Conversions API.',
                'Navazuje na <a href="/reseni/b2b-a-lead-generation">měření pro B2B a lead generation</a>.',
              ],
            },
            {
              id: 'enterprise',
              label: 'Velká firma',
              paragraphs: [
                'Jedna konverzní mapa pro všechny značky, země a agentury: stejné definice, hodnoty a ID. Přístupy přes role ve firemních účtech, dokumentace pro interní audit a odsouhlasení s ERP. Pro víc domén a vysoké objemy doporučujeme serverovou část ve vlastním Google Cloudu, viz <a href="/sluzby/server-side-tracking">server-side tracking</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co všechno můžete měřit jako konverzi?',
      a: 'Konverze je akce, kterou chcete z reklamy získat: nákup, odeslaná poptávka, registrace, telefonát, rezervace, stažení ceníku. Pro e-shop je hlavní nákup s hodnotou, pro B2B poptávka – a ideálně i to, co se z ní stalo v CRM. Doplňkové akce jako přidání do košíku nebo zahájení pokladny měříme jako mikrokonverze pro optimalizaci a remarketing. V GA4 se konverze nově jmenují klíčové události. Na začátku vždy určíme, které akce jsou pro jednotlivé systémy primární.',
    },
    {
      q: 'Proč se konverze v Google Ads, Meta a GA4 liší?',
      a: 'Protože každý systém počítá jinak. Google Ads i Meta si připisují konverze, na kterých se jejich reklama podílela, takže součet za kanály je vyšší než počet objednávek. Google Ads navíc standardně připisuje konverzi ke dni prokliku a může zahrnovat modelované konverze. GA4 přiřazuje konverzi jednomu zdroji. K tomu přistupují souhlas, blokátory, storna a rozdíly v DPH. Cíl je vysvětlitelný a stabilní rozdíl – a ten vám doložíme v odsouhlasení.',
    },
    {
      q: 'Potřebuju Meta Pixel, když mám Conversions API?',
      a: 'Meta doporučuje používat oba zdroje souběžně: pixel zachytí události v prohlížeči a Conversions API je doplní ze serveru, i tam, kde prohlížeč selže. Aby Meta nákup nepočítala dvakrát, posílají oba stejný název události a stejné <code>event_id</code>. Samotné Conversions API bez pixelu jde použít, třeba pro offline konverze, pro běžný e-shop ale doporučujeme kombinaci.',
    },
    {
      q: 'Je Meta Conversions API zdarma?',
      a: 'Meta za používání Conversions API neúčtuje poplatek. Náklady jsou na straně implementace a provozu: buď server-side GTM s hostingem serveru v Google Cloudu nebo u spravovaného poskytovatele, nebo napojení z backendu e-shopu. Některé platformy nabízejí vestavěnou integraci – ověříme, co skutečně posílá, tedy parametry zákazníka a <code>event_id</code>, protože na tom závisí kvalita párování.',
    },
    {
      q: 'Co je Event Match Quality a jakou hodnotu chceme?',
      a: 'Event Match Quality je skóre od nuly do deseti v Meta Events Manageru. Říká, jak dobře Meta dokáže serverové události z webu podle zaslaných údajů spárovat s uživateli Facebooku a Instagramu. Zvedá ho hashovaný e-mail a telefon, <code>external_id</code>, <code>fbp</code>, <code>fbc</code>, IP adresa a user agent – u návštěvníků se souhlasem. Konkrétní cílové číslo neslibujeme, záleží na tom, kolik údajů o zákaznících máte. Sledujeme hlavně, aby u nákupu nekleslo a po každé úpravě rostlo.',
    },
    {
      q: 'Co jsou rozšířené konverze Google Ads a potřebuju je?',
      a: 'Rozšířené konverze doplní ke konverzi e-mail nebo telefon zákazníka zahashovaný algoritmem SHA-256, aby Google dokázal přiřadit konverze i tam, kde chybí cookies. Pro e-shopy i B2B weby je doporučujeme. Od dubna 2026 Google Ads přijímá uživatelská data z tagu, Data Manageru i API současně a od června 2026 je pro web i leady jeden přepínač. Potřebujete k nim souhlas s <code>ad_user_data</code> a správnou normalizaci údajů před hashováním. U leadů navazuje nahrání konverzí z CRM, které Google od 15. června 2026 přijímá přes Data Manager API.',
    },
    {
      q: 'Co je Seznam Event Measurement a musím přejít?',
      a: 'Seznam Event Measurement, zkráceně SEM, je nové měření Seznamu: jeden skript <code>sul.js</code> nahrazuje retargetingový a konverzní kód Skliku i měření pro Seznam Nákupy. Seznam uvádí, že přechod budou potřebovat všechny účty a podporu původních kódů ukončí v průběhu roku 2027; přesný termín oznámí s předstihem. SEM je zatím v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně, testujeme v sandboxu a přepínáme až po ověření. Stav k říjnu 2026.',
    },
    {
      q: 'Jak správně nasadit Heureka Ověřeno zákazníky?',
      a: 'Ověřeno zákazníky voláme z backendu po dokončení objednávky: e-mail zákazníka, ID objednávky a ID produktů z XML feedu, s tajným klíčem, který nesmí být v kódu stránky. Měření konverzí Heureky je samostatná služba se dvěma skripty v šabloně. Pozor na souhlas: ÚOOÚ považuje hodnotící dotazníky za obchodní sdělení a v roce 2026 je kontroluje. Zákazník musí mít možnost zaslání předem odmítnout a odmítnout ho i v dotazníku. Texty doporučujeme konzultovat s právníkem.',
    },
    {
      q: 'Jde měřit konverze bez souhlasu, takzvaně „cookieless“?',
      a: 'Ne tak, že bychom souhlas ignorovali. Bez souhlasu web nesmí ukládat ani číst netechnické údaje v zařízení návštěvníka. Google v advanced režimu Consent Mode dostává pingy bez cookies a část konverzí modeluje – ty pak uvidíte ve sloupci Konverze. Ostatní systémy nesouhlasícího návštěvníka nevidí. Naše práce je, aby u souhlasících návštěvníků konverze dorazily spolehlivě a správně. Víc u služby <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>.',
    },
    {
      q: 'Měříte i poptávky a konverze z CRM v B2B?',
      a: 'Ano. Formulář posílá do datové vrstvy událost <code>generate_lead</code> s ID leadu a hashovaným e-mailem a z ní vznikají konverze v Google Ads, tedy rozšířené konverze pro leady, v Metě a v LinkedInu. Když obchod v CRM lead kvalifikuje nebo uzavře, pošleme tuto informaci zpět jako offline konverzi – do Google Ads přes Data Manager API, do Mety a LinkedInu přes Conversions API. Reklama se pak učí na kvalitních poptávkách, ne na počtu formulářů.',
    },
    {
      q: 'Komu patří účty a jaké přístupy potřebujete?',
      a: 'Všechny účty – Google Ads, Meta Business, Sklik, Heureka, GTM – zůstávají vaše. Potřebujeme role s oprávněním k úpravám konverzí a značek, nikdy hesla. Nic nezakládáme na našich osobních účtech; pokud je potřeba nový token nebo datový zdroj, vznikne ve vašem účtu. Seznam přístupů dostanete při předání, abyste je mohli kdykoli odebrat.',
    },
    {
      q: 'Z čeho se skládá cena a jak dlouho to trvá?',
      a: 'Cena se odvíjí od počtu systémů, stavu datové vrstvy, platformy e-shopu, toho, jestli zapojujeme server-side GTM nebo backend a CRM, a od počtu domén a zemí. Délku nastavení ovlivňují stejné faktory; k ní vždy připočtěte čtrnáct dní souběžného běhu a odsouhlasení. Provoz serveru, pokud ho využijete, platíte přímo poskytovateli.',
    },
  ],

  relatedArticles: [
    { slug: 'meta-conversions-api', title: 'Meta Conversions API: nastavení, deduplikace event_id a Event Match Quality' },
    { slug: 'seznam-event-measurement-sklik', title: 'Seznam Event Measurement: konverze Skliku po novu' },
    { slug: 'rozsirene-konverze', title: 'Rozšířené konverze pro web i leady' },
    { slug: 'offline-konverze-z-crm', title: 'Offline konverze z CRM do Google Ads a Mety' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla: GA4 vs. Google Ads vs. Meta vs. administrace e-shopu' },
  ],

  relatedPages: ['sluzby/server-side-tracking', 'sluzby/cookie-lista-consent-mode', 'sluzby/datova-vrstva'],

  contact: {
    formId: 'lp-konverze',
    topics: ['konverze'],
    title: 'Ať reklamní systémy vidí stejné konverze jako vy',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Na úvodní konzultaci projdeme, jak objednávky nebo poptávky putují do Google Ads, Mety, Skliku a Heureky, a řekneme, kde je systémy počítají dvakrát a kde je nevidí vůbec. Nezávazně a zdarma.',
    placeholder: 'Např. Sklik a Heureka ukazují jiné konverze než GA4 a Meta hlásí víc nákupů, než jich máme v administraci…',
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
