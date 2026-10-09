import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/10_technicky-audit-webu.md (návrh v1, 8. 10. 2026).
// Vynecháno do dodání podkladů klientem: případová studie (MiniCase), počet auditů
// v trust baru, typická délka auditu a kroků postupu, doporučený SEO partner,
// rozhodnutí, zda jdou oblasti objednat samostatně. Nástroj „Kontrola consentu“
// zatím neexistuje, pátá kontrola v sekci „zdarma“ proto popisuje ruční postup.

export const page: PageInput = {
  path: 'sluzby/technicky-audit-webu',
  kind: 'service',
  navTitle: 'Technický audit webu',
  tagline: 'rychlost, tagy a technické SEO',
  pictogram: 'perf',
  menuGroup: 'audity',

  seo: {
    title: 'Technický audit webu – rychlost, tagy, SEO | datalayer.cz',
    description:
      'Technický audit a analýza webu: Core Web Vitals, dopad tagů na rychlost, indexace, strukturovaná data, hlavičky, formuláře a měření. S prioritami oprav.',
  },

  hero: {
    eyebrow: 'perf · audity a správa',
    h1: 'Technický audit webu: rychlost, tagy a technické SEO',
    subtitle:
      'Zjistíme, co web zpomaluje, co brání indexaci a kde mizí data – včetně toho, kolik rychlosti stojí měřicí a reklamní skripty. Dostanete seznam oprav podle dopadu, se kterým mohou vývojáři hned pracovat.',
    quickAnswer:
      '<strong>Technický audit webu</strong> je kontrola toho, jak web funguje pod kapotou: rychlost a metriky Core Web Vitals LCP, INP a CLS, dopad měřicích a reklamních skriptů, indexace a strukturovaná data, bezpečnostní hlavičky, přístupnost formulářů a funkčnost měření. Na konci nedostanete obecná doporučení, ale konkrétní úkoly pro vývojáře s prioritou – a ověření, že web po opravě opravdu zrychlil.',
    primaryCta: { label: 'Objednat technický audit', href: '#kontakt' },
    secondaryCta: { label: 'Co audit kontroluje', href: '#oblasti' },
    microcopy:
      'Nejsme SEO agentura: auditujeme techniku, ne obsah a odkazy · Úvodní třicetiminutová konzultace zdarma',
  },

  trust: [
    'Výstup jako úkoly pro vývojáře, ne PDF s 200 chybami z nástroje',
    'Vycházíme z dat reálných návštěvníků ze Search Console a Chrome UX Reportu, ne jen z laboratorního testu',
    'Každý měřicí skript změříme: velikost, čas hlavního vlákna a vazbu na souhlas',
    'Po opravách ověříme, že web zrychlil a měření pořád funguje',
  ],

  sections: [
    {
      id: 'kdy-ma-smysl',
      eyebrow: 'symptomy',
      title: 'Kdy dává technický audit smysl',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Search Console hlásí špatné Core Web Vitals',
              text: 'Přehled Core Web Vitals ukazuje u mobilu skupiny URL „Je třeba zlepšit“ nebo „Špatné“ a nikdo neví, co přesně je zpomaluje.',
              pictogram: 'perf',
            },
            {
              title: 'Každý nový pixel web zpomalí',
              text: 'Chat, heatmapy, A/B test, další reklamní pixel. Každý přidal pár set milisekund a nikdo neví, kolik dohromady.',
              pictogram: 'gtm',
            },
            {
              title: 'Stránky nejsou v indexu',
              text: 'Search Console ukazuje stovky URL, které Google prošel, ale nezaindexoval. Nebo duplicity z filtrů a parametrů e-shopu.',
              pictogram: 'audit',
            },
            {
              title: 'Drahé kliky na pomalé stránky',
              text: 'Kampaně vedou na landing pages, které prohlížeč na mobilu vykresluje několik sekund. Za kliky platíte, i když člověk odejde dřív, než stránku uvidí.',
              pictogram: 'conversion',
            },
            {
              title: 'Formulář, který odrazuje',
              text: 'Chybová hláška není u pole, formulář nejde vyplnit klávesnicí a odeslání nikdo neměří. Leady mizí a nevíte kde.',
              pictogram: 'lead',
            },
            {
              title: 'Před redesignem nebo migrací',
              text: 'Chcete vědět, co nesmí zmizet: přesměrování, strukturovaná data, měření, souhlas. Nebo po spuštění zjistit, co přestalo fungovat.',
              pictogram: 'warn',
            },
          ],
        },
      ],
    },

    {
      id: 'vymezeni',
      eyebrow: 'vymezení',
      title: 'Technický audit, ne SEO kampaň: co děláme a co ne',
      lead: 'Jsme technici měření a webu, ne SEO agentura. Díváme se na to, jak web funguje v prohlížeči a pro roboty: rychlost, kód, tagy, hlavičky, indexace.',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Obsahovou a odkazovou strategii nechte specialistům. Náš výstup jim i vývojářům dá pevný technický základ.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Co uděláme',
          items: [
            'Změříme rychlost na datech reálných návštěvníků i v laboratoři, zvlášť pro každý typ stránky.',
            'Najdeme skripty, které web brzdí, a navrhneme, jak je načítat.',
            'Zkontrolujeme indexaci, canonical, přesměrování, sitemapu a strukturovaná data.',
            'Projdeme bezpečnostní hlavičky a to, co web posílá třetím stranám.',
            'Otestujeme formuláře: přístupnost i měření.',
            'Ověříme, že měření a souhlas fungují.',
            'Připravíme úkoly pro vývojáře a po opravě je zkontrolujeme.',
          ],
        },
        {
          type: 'list',
          style: 'cross',
          title: 'Co neděláme',
          items: [
            'Analýzu klíčových slov a obsahovou strategii.',
            'Psaní a úpravy textů.',
            'Linkbuilding.',
            'Dlouhodobou správu SEO.',
            'UX výzkum s uživateli.',
            'Penetrační testy – bezpečnostní hlavičky ano, hledání zranitelností ne.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Máte SEO agenturu? Výstup jí rádi předáme a sladíme ho s jejími doporučeními.',
        },
      ],
    },

    {
      id: 'oblasti',
      eyebrow: 'oblasti auditu',
      title: 'Co audit kontroluje: šest oblastí',
      lead: 'Oblasti se vyplatí kombinovat – třeba kvůli zrychlení, které nerozbije měření.',
      tone: 'light',
      blocks: [
        {
          type: 'tabs',
          group: 'ta_oblasti',
          items: [
            {
              id: 'vykon',
              label: 'Výkon a Core Web Vitals',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> tři metriky Core Web Vitals na 75. percentilu návštěv. <strong>LCP</strong> měří načtení hlavního obsahu, dobrá hodnota je do 2,5 s. <strong>INP</strong> měří odezvu na interakci, dobrá hodnota je do 200 ms; v březnu 2024 nahradil FID. <strong>CLS</strong> měří vizuální stabilitu, dobrá hodnota je do 0,1.',
                'Data reálných návštěvníků ze Search Console a Chrome UX Reportu porovnáme s laboratorním měřením v Lighthouse a PageSpeed Insights. Měříme zvlášť úvodní stránku, kategorie, produkty, košík a pokladnu, landing pages kampaní a formuláře.',
                '<strong>Typické příčiny:</strong> pomalá odezva serveru, CSS a fonty, které blokují vykreslení, nevhodné formáty a velikosti obrázků, obrázky bez rozměrů, dlouhé úlohy JavaScriptu nebo cookie lišta a bannery, které web vkládá dodatečně.',
                '<strong>Ukázkový nález:</strong> „Cookie lišta, kterou vkládá GTM, posouvá obsah produktové stránky na mobilu. Laboratorní test ukazuje CLS 0,24.“',
              ],
            },
            {
              id: 'tagy',
              label: 'Měřicí skripty a tagy',
              paragraphs: [
                '<strong>Oblast, kterou SEO audity obvykle vynechávají.</strong> Uděláme inventuru všech skriptů třetích stran: GTM, Google tag, Meta Pixel, Sklik, Heureka, Hotjar nebo Clarity, chat, A/B testy. U každého zjistíme velikost, čas hlavního vlákna a okamžik spuštění.',
                'Hledáme duplicity, třeba GA4, které web načítá zároveň přes gtag i GTM. Dále tagy typu Custom HTML, pozastavené a mrtvé tagy v kontejneru a marketingové tagy, které web spouští před souhlasem. Zkontrolujeme i to, jak a kdy web načítá samotný GTM.',
                '<strong>Na co se odvoláváme:</strong> doporučení Googlu na web.dev. Pixely jsou lehčí než skripty. Nepodstatné tagy je lepší spouštět až po načtení stránky, nepoužívané tagy mazat, ne jen blokovat výjimkami, a cookie lištu ani hlavní obsah nenačítat přes tag manager.',
                '<strong>Výstup navíc:</strong> tabulka „inventura tagů“ s doporučením ponechat, odložit, sloučit, odstranit, nebo přesunout na server. Výřez z ní najdete níže.',
                '<strong>Ukázkový nález:</strong> „Chatovací widget, který web načítá hned na všech stránkách, zabírá 380 ms hlavního vlákna. Stačí ho načíst po interakci.“',
              ],
            },
            {
              id: 'technicke-seo',
              label: 'Technické SEO',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> přehled indexování stránek a kontrolu URL v Search Console, <code>robots.txt</code> a meta robots, canonical, přesměrování a jejich řetězce, stavové kódy 4xx a 5xx a sitemapu, která má obsahovat jen kanonické URL se stavem 200.',
                'Dále duplicity z parametrů a filtrů e-shopu, vykreslování JavaScriptu, interní prolinkování včetně hloubky a osiřelých stránek a <code>hreflang</code> u vícejazyčných webů. Strukturovaná data typu Organization, BreadcrumbList, Product, Offer a Article zkontrolujeme včetně validace. Podíváme se i na nové přehledy výkonu ve funkcích generativní AI v Search Console.',
                '<strong>Co víme k říjnu 2026:</strong> rozšířený výsledek FAQ Google od 7. května 2026 nezobrazuje a soubor <code>llms.txt</code> Google Search pro vyhledávání nepotřebuje. Takové věci vám nebudeme prodávat jako „SEO zlepšení“.',
                '<strong>Ukázkový nález:</strong> „Filtry kategorií vytvářejí 12 000 indexovatelných kombinací URL bez canonical. Sitemap obsahuje 1 800 adres s přesměrováním.“',
              ],
            },
            {
              id: 'hlavicky',
              label: 'Bezpečnostní hlavičky a soukromí',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> HTTPS a <code>Strict-Transport-Security</code>. Dále <code>Content-Security-Policy</code>: jestli povoluje jen potřebné domény GTM, sGTM a reklamních systémů a jestli naopak neblokuje měření. K tomu <code>X-Content-Type-Options: nosniff</code>, <code>Referrer-Policy</code>, tedy co web prozrazuje třetím stranám, <code>Permissions-Policy</code>, ochranu proti vložení do rámu přes <code>frame-ancestors</code> nebo <code>X-Frame-Options</code> a smíšený obsah.',
                'Zjistíme také, které cookies web nastaví a jaké požadavky pošle třetím stranám ještě <strong>před</strong> udělením souhlasu. Nastavení cookie lišty a Consent Mode řešíme v samostatné službě <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>.',
                '<strong>Vymezení:</strong> nejde o penetrační test ani bezpečnostní audit aplikace. Hlavičky navrhneme podle doporučení OWASP a nejdřív je otestujeme v režimu „report-only“, aby nerozbily tagy.',
                '<strong>Ukázkový nález:</strong> „Web nemá žádnou z doporučených bezpečnostních hlaviček. Meta Pixel nastavuje cookie <code>_fbp</code> ještě před volbou v cookie liště.“',
              ],
            },
            {
              id: 'formulare',
              label: 'Přístupnost formulářů',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> popisky polí, ne jen placeholder, označení povinných polí, chybové hlášky, které patří k poli a přečte je čtečka obrazovky, ovládání klávesnicí a viditelný fokus, kontrast, atributy <code>autocomplete</code>, velikost dotykových ploch, CAPTCHA a její alternativy a potvrzení odeslání. Vycházíme z WCAG 2.2 na úrovni AA.',
                '<strong>Proč na tom záleží i právně:</strong> zákon č. 424/2023 Sb. o požadavcích na přístupnost některých výrobků a služeb je účinný od 28. června 2025. Vztahuje se mimo jiné na služby elektronického obchodování pro spotřebitele. Na mikropodniky, které poskytují služby, se nevztahuje. My posoudíme technickou stránku formulářů. Zda a v jakém rozsahu se na vás zákon vztahuje, posoudí váš právník. Nejde o právní radu.',
                '<strong>A měření formuláře:</strong> ověříme, že web posílá <code>lead_form_start</code>, chyby validace a úspěšné odeslání <code>generate_lead</code> a že neposílá osobní údaje v čitelné podobě.',
                '<strong>Ukázkový nález:</strong> „Formulář ukazuje chyby jen barvou pole. Čtečka obrazovky je nepřečte a měření nezaznamená, na kterém poli lidé odpadají.“',
              ],
            },
            {
              id: 'mereni',
              label: 'Kontrola měření',
              paragraphs: [
                '<strong>Co kontrolujeme rychle:</strong> načtení GA4 a GTM, přítomnost datové vrstvy a odpalování klíčových událostí, jako je nákup nebo lead, bez duplicit. U Consent Mode ověříme výchozí stav a aktualizaci signálů <code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code> a <code>ad_personalization</code>.',
                '<strong>Kdy jít hlouběji:</strong> když GA4 nesedí s e-shopem nebo CRM o desítky procent, doporučíme <a href="/sluzby/audit-mereni">audit měření</a>. Technický audit ho nenahrazuje.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'rychlost-a-mereni',
      eyebrow: 'waterfall',
      title: 'Kde se na stránce potkává rychlost a měření',
      lead: 'Prohlížeč načítá stránku postupně. Audit hledá v tomto pořadí správné místo pro každý tag.',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Když web spustí měřicí skripty příliš brzy, soupeří s hlavním obsahem o síť i procesor. Zhorší tak LCP i odezvu na první kliknutí, tedy INP. Když je spustí příliš pozdě nebo až po interakci, část dat chybí.',
          ],
        },
        {
          type: 'flow',
          caption:
            'Ukázková data: načtení produktové stránky na mobilu. Prohlížeč nejdřív stáhne HTML, CSS a fonty a hlavní obrázek vykreslí až za 3,8 s. Mezitím GTM vloží cookie lištu, která posune obsah, a spustí Google tag s Consent Mode. Po nich přijdou na řadu Meta Pixel, retargeting Skliku, heatmapy a chat, který doběhne až za 4,2 s. Po optimalizaci je lišta přímo v HTML, heatmapy a chat přijdou na řadu až po načtení stránky nebo po interakci a LCP klesne na 2,1 s.',
          columns: [
            {
              label: 'Dokument',
              items: ['HTML: odezva serveru 0,42 s', 'CSS a fonty do 1,1 s', 'hlavní obrázek = LCP 3,8 s'],
            },
            {
              label: 'Měření před souhlasem',
              items: ['GTM kontejner 0,9–1,5 s', 'cookie lišta přes GTM posune obsah (CLS)', 'Google tag a Consent Mode'],
            },
            {
              label: 'Tagy třetích stran',
              items: ['Meta Pixel', 'Sklik retargeting', 'heatmapy', 'chat widget do 4,2 s'],
              note: 'soupeří s hlavním obsahem o síť i procesor',
            },
            {
              label: 'Po optimalizaci',
              items: [
                'cookie lišta přímo v HTML, bez posunu obsahu',
                'heatmapy a chat až po načtení stránky nebo po interakci',
                'LCP 2,1 s',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'vystup',
      eyebrow: 'ukázka výstupu',
      title: 'Jak vypadá výstup auditu',
      lead: 'Výřez z inventury tagů a jeden úkol pro vývojáře. Obojí s ukázkovými daty.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Inventura tagů: výřez s ukázkovými daty',
          head: ['Skript', 'Dodavatel', 'Přenos', 'Hlavní vlákno', 'Spouštění', 'Souhlas', 'Doporučení'],
          rows: [
            [
              '<code>gtm.js</code>',
              'Google',
              '98 kB',
              '120 ms',
              'při načtení',
              'výchozí stav „denied“',
              'ponechat; vyčistit 23 nepoužívaných tagů',
            ],
            [
              '<code>gtag/js</code> – GA4',
              'Google',
              '142 kB',
              '160 ms',
              'při načtení, <strong>dvakrát: gtag i GTM</strong>',
              'analytické',
              'odstranit duplicitní vložení v šabloně',
            ],
            [
              '<code>fbevents.js</code>',
              'Meta',
              '96 kB',
              '110 ms',
              'při načtení',
              'marketingové',
              'ponechat přes GTM; zvážit Conversions API přes server',
            ],
            ['<code>rc.js</code>', 'Seznam / Sklik', '18 kB', '30 ms', 'při načtení', 'marketingové', 'ponechat'],
            [
              '<code>hotjar-*.js</code>',
              'Hotjar',
              '210 kB',
              '290 ms',
              'při načtení',
              'analytické',
              'spouštět jen na vybraných šablonách a po načtení stránky',
            ],
            [
              '<code>chat-widget.js</code>',
              'dodavatel chatu',
              '340 kB',
              '380 ms',
              'při načtení',
              'nezbytné?',
              'načítat až po kliknutí na ikonu chatu',
            ],
            [
              'Custom HTML „starý remarketing“',
              'neznámý',
              '12 kB',
              '40 ms',
              'při načtení',
              'bez vazby',
              '<strong>odstranit</strong>, nefunguje od roku 2023',
            ],
          ],
        },
        {
          type: 'code',
          lang: 'text',
          caption: 'Vzorový úkol pro vývojáře, ukázková data',
          code: `[PERF-07] Cookie lišta posouvá obsah na mobilu (CLS)
Šablony: produkt, kategorie · Priorita: vysoká · Náročnost: S, do 1 dne

Jak reprodukovat:
  Chrome DevTools → Performance, profil mobil, první návštěva bez souhlasu.
Zjištění:
  GTM vkládá lištu až po načtení stránky. Lišta posune obsah o 180 px,
  laboratorní test ukazuje CLS 0,24.
Doporučení:
  Vykreslit lištu přímo v HTML šablony, ne přes GTM, a to jako překryv,
  kterému šablona předem vyhradí místo. Logiku Consent Mode, tedy
  default a update, nechat beze změny.
Akceptační kritérium:
  CLS < 0,1 v laboratorním testu na obou šablonách. Po nasbírání dat
  z reálných návštěv skupina URL „Dobré“ v přehledu Core Web Vitals.
Kontrola měření po opravě:
  V GTM Preview ověřit událost cookie_consent_update a stav souhlasu
  před volbou a po ní. GTM spouští GA4 a reklamní tagy jen po souhlasu.`,
        },
        {
          type: 'paragraphs',
          items: [
            'Úkoly dodáme ve formátu nástroje, který používáte: Jira, GitHub, GitLab, Trello nebo tabulka. Seřadíme je podle dopadu a náročnosti, takže je jasné, co udělat tento sprint a co počká.',
          ],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'SEO audit, technický audit, nebo audit měření?',
      lead: 'Tři služby se překrývají, ale každá odpovídá na jinou otázku. Popisujeme, co typicky obsahují – konkrétní nabídky se liší dodavatel od dodavatele.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Oblast', 'Typický SEO audit', 'Technický audit webu', '<a href="/sluzby/audit-mereni">Audit měření</a>'],
          highlightColumn: 2,
          rows: [
            ['Kdo ho dělá', 'SEO agentura', 'datalayer.cz', 'datalayer.cz'],
            [
              'Otázka',
              'Proč nemám víc návštěv z vyhledávání?',
              'Co web zpomaluje a co mu technicky brání?',
              'Proč nesedí data a kde mizí konverze?',
            ],
            ['Klíčová slova, obsah, konkurence', '✓ jádro', '– předáme agentuře', '–'],
            ['Zpětné odkazy', '✓', '–', '–'],
            ['Indexace, canonical, sitemap, přesměrování', '✓', '✓', '–'],
            ['Strukturovaná data', '✓', '✓ validace a implementace', '–'],
            ['Core Web Vitals', 'obvykle přehled z nástroje', '✓ příčiny podle šablon a skriptů', '–'],
            ['Dopad měřicích skriptů na rychlost', 'zřídka', '✓ inventura tagů', 'částečně: pořádek v GTM'],
            ['Bezpečnostní hlavičky, požadavky před souhlasem', 'zřídka', '✓', '✓ souhlas a Consent Mode'],
            ['Přístupnost a měření formulářů', 'zřídka', '✓', '✓ měření'],
            ['GA4, GTM, datová vrstva, konverze v Ads, Metě a Skliku', '–', 'rychlá kontrola', '✓ do hloubky'],
            [
              'Typický výstup',
              'report s doporučeními',
              'úkoly pro vývojáře a ověření po opravě',
              'nálezy, oprava kontejneru, měřicí plán',
            ],
          ],
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co dostanete',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Shrnutí pro vedení</strong> – jedna strana: stav, pět hlavních nálezů, odhad přínosu a náročnosti.',
            '<strong>Podrobná technická analýza</strong> – nálezy podle oblastí a šablon stránek s důkazy: měřeními, snímky a záznamy z DevTools.',
            '<strong>Seznam úkolů pro vývojáře</strong> – priorita podle dopadu a náročnosti, reprodukce, doporučení, akceptační kritérium.',
            '<strong>Inventura tagů</strong> – tabulka všech skriptů třetích stran s doporučením.',
            '<strong>Návrh výkonnostního rozpočtu</strong> – limity pro LCP, INP, CLS a velikost JavaScriptu na šablonu, aby web znovu nezpomalil.',
            '<strong>Návrh bezpečnostních hlaviček</strong> – konfigurace pro server nebo CDN, nejdřív v režimu „report-only“.',
            '<strong>Checklist přístupnosti formulářů</strong> – co opravit a jak to otestovat.',
            '<strong>Prezentace s vývojáři</strong> na šedesát až devadesát minut a <strong>ověření po opravách</strong> s krátkým závěrečným reportem.',
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak audit probíhá',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní hovor a rozsah',
              text: 'Vybereme šablony a klíčové cesty, jako je nákup nebo formulář, a domluvíme priority.',
              fromClient: 'Seznam hlavních typů stránek',
            },
            {
              title: 'Přístupy a sběr dat',
              text: 'Stáhneme data reálných návštěv ze Search Console a Chrome UX Reportu, projdeme web a exportujeme kontejner GTM.',
              fromClient: 'Přístup do Search Console, kde stačí omezený uživatel, dále čtení v GA4 a GTM a adresa testovacího prostředí',
            },
            {
              title: 'Měření a analýza',
              text: 'Laboratorní testy jednotlivých šablon, inventura tagů, hlavičky, formuláře a měření.',
              fromClient: 'Kontakt na vývojáře pro dotazy k architektuře',
            },
            {
              title: 'Report a úkoly',
              text: 'Shrnutí, nálezy a úkoly s prioritou.',
            },
            {
              title: 'Prezentace s vývojáři',
              text: 'Projdeme nálezy, odhadneme náročnost a domluvíme pořadí oprav.',
              fromClient: 'Účast vývojářů a vlastníka webu',
            },
            {
              title: 'Ověření po opravách',
              text: 'Laboratorní re-test a kontrola měření. Data reálných návštěv dobíhají několik týdnů.',
              fromClient: 'Informace o nasazení oprav',
            },
          ],
        },
      ],
    },

    {
      id: 'analyza-zdarma',
      eyebrow: 'zdarma',
      title: 'Analýza webu zdarma: co si zkontrolujete sami',
      lead: 'Na první orientaci nemusíte nikoho platit. Těchto pět kontrol zvládnete za půl hodiny, a když v nich najdete problém, budete přesně vědět, na co se ptát.',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'PageSpeed Insights',
              text: 'Zadejte adresu klíčové stránky. Horní část ukazuje data reálných návštěvníků, pokud jich je dost, spodní laboratorní test s konkrétními doporučeními.',
            },
            {
              title: 'Search Console → Core Web Vitals',
              text: 'Podívejte se, které skupiny stránek jsou na mobilu „Špatné“ nebo „Je třeba zlepšit“ a kvůli které metrice.',
            },
            {
              title: 'Search Console → Indexování stránek',
              text: 'Zjistíte, kolik URL není v indexu a z jakého důvodu. U e-shopu se dívejte hlavně na duplicity a na stránky, které Google prošel, ale nezaindexoval.',
            },
            {
              title: 'Test strukturovaných dat',
              text: 'V nástroji Rich Results Test ověříte, jestli produktové stránky mají validní data o produktu a ceně.',
            },
            {
              title: 'Co web posílá před souhlasem',
              text: 'Otevřete web v anonymním okně a v nástrojích pro vývojáře sledujte kartu Network. Uvidíte, jestli web posílá data Googlu, Metě a dalším ještě před volbou v cookie liště.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Kdy to nestačí',
          text: 'Nástroje řeknou, <em>že</em> je problém, ale ne vždy <em>proč</em> a <em>kterou změnou v kódu</em> ho opravit. Zvlášť když za ním stojí kombinace tagů, cookie lišty a šablony. Na úvodní konzultaci výsledky projdeme zdarma.',
        },
      ],
    },

    {
      id: 'pro-koho',
      eyebrow: 'segmenty',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'ta_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Hlavní témata jsou kategorie s filtry, kde vznikají duplicity a problémy s indexací, produktové stránky s LCP obrázku a strukturovanými daty Product a pokladna s tagy a skripty platebních bran.',
                'Na SaaS platformách, jako je Shoptet, Upgates nebo Shopify, nejde změnit všechno. V auditu oddělíme, co opravíte v administraci, co v šabloně a co vůbec.',
                '<a href="/reseni/e-shopy">Měření pro e-shopy</a>',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Klíčové jsou landing pages kampaní a formuláře: rychlost na mobilu, přístupnost a měření odeslání až do CRM. Často najdeme formulář, který hlásí úspěšné odeslání, ale lead nedorazí nebo ho měření nezachytí.',
                '<a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Více domén a jazykových verzí, CDN, přísnější bezpečnostní pravidla včetně CSP a release proces. Audit sladíme s IT a bezpečností: navrhneme hlavičky, které nerozbijí měření, a pravidla pro přidávání nových tagů.',
                '<a href="/reseni/velke-firmy">Měření pro velké firmy</a>',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Čím se technický audit liší od SEO auditu?',
      a: 'SEO audit odpovídá na otázku, proč web nemá víc návštěv z vyhledávání. Řeší klíčová slova, obsah, konkurenci a odkazy a technika je v něm jen jedna z oblastí. Technický audit se dívá na to, jak web funguje v prohlížeči a pro roboty: rychlost, skripty, indexace, strukturovaná data, hlavičky, formuláře a měření. SEO agentura nejsme – obsah a odkazy neřešíme. Proto jsou naše výstupy dobrý podklad pro SEO agenturu i pro vývojáře, kteří mají technické nálezy opravit.',
    },
    {
      q: 'Děláte analýzu webu zdarma?',
      a: 'Úvodní třicetiminutovou konzultaci ano: projdeme s vámi výsledky z PageSpeed Insights a Search Console, řekneme, co z nich vyplývá a jestli má smysl jít hlouběji. Za samotný audit platíte, protože zahrnuje ruční měření jednotlivých typů stránek, inventuru tagů a přípravu úkolů pro vývojáře. Pět kontrol, které zvládnete sami a zdarma, najdete výše na této stránce.',
    },
    {
      q: 'Jaké metriky Core Web Vitals sledujete a jaké hodnoty jsou dobré?',
      a: 'Tři metriky, které Google označuje jako Core Web Vitals. LCP říká, jak rychle stránka zobrazí hlavní obsah, a dobrá hodnota je do 2,5 s. INP říká, jak rychle stránka reaguje na kliknutí nebo klepnutí, dobrá hodnota je do 200 ms. CLS říká, jak moc obsah poskakuje, dobrá hodnota je do 0,1. Google hodnotí 75. percentil návštěv zvlášť na mobilu a na desktopu. INP v březnu 2024 nahradil starší metriku FID. Kdo ještě reportuje FID, pracuje se zastaralými údaji.',
    },
    {
      q: 'Zpomalují měřicí kódy web? Musíme se jich vzdát?',
      a: 'Každý skript třetí strany stojí síť a čas procesoru. Kolik, záleží na jeho velikosti, počtu a okamžiku spuštění. Měření se ale obvykle vzdávat nemusíte. Většinu zpomalení způsobují duplicitní vložení, staré nefunkční tagy, těžké skripty, které web spouští na všech stránkách hned, jako chat nebo heatmapy, a cookie lišta, kterou vkládá tag manager. V auditu každý skript změříme a navrhneme, jestli ho ponechat, odložit, sloučit, odstranit, nebo přesunout na server.',
    },
    {
      q: 'Zrychlí web server-side tracking?',
      a: 'Může, ale není to automatické. Server-side měření přesune část zpracování z prohlížeče na váš server. To pomůže, když díky němu odstraníte z webu několik reklamních knihoven. Pokud ale v prohlížeči zůstanou všechny původní pixely a k nim přibude další, web nezrychlí. V auditu spočítáme, které skripty by šlo nahradit a jaký dopad by to mělo. Kdy server-side dává smysl, popisujeme na stránce <a href="/sluzby/server-side-tracking">Server-side tracking</a>.',
    },
    {
      q: 'Může optimalizace rychlosti rozbít měření?',
      a: 'Ano, a stává se to často. Typické případy: web „odloží“ GTM tak pozdě, že kontejner nestihne zachytit nákup. Web načte skript až po interakci, kterou někteří uživatelé neudělají. Minifikace nebo slučování skriptů rozbije datovou vrstvu. Nová bezpečnostní hlavička zablokuje domény měření. Proto každé doporučení v auditu obsahuje i kontrolu měření po opravě a re-test ověří obojí – že web zrychlil a že data tečou dál.',
    },
    {
      q: 'Opravíte chyby z auditu i sami?',
      a: 'Úpravy v Google Tag Manageru, nastavení měření, Consent Mode a strukturovaná data, která web vkládá přes tagy, můžeme udělat sami. Změny v kódu šablon, serveru nebo CDN obvykle dělají vaši vývojáři. My jim dodáme přesné zadání, odpovíme na dotazy a po nasazení vše ověříme.',
    },
    {
      q: 'Musí být náš web přístupný?',
      a: 'Záleží na tom, co a komu nabízíte. Zákon č. 424/2023 Sb. se od 28. června 2025 vztahuje mimo jiné na služby elektronického obchodování pro spotřebitele, tedy typicky na e-shopy. Na mikropodniky, které poskytují služby, se nevztahuje. Pro veřejný sektor platí samostatná úprava. My zkontrolujeme technickou přístupnost formulářů podle WCAG 2.2 a navrhneme opravy. Zda a v jakém rozsahu se na vás zákon vztahuje, posoudí váš právník. Nejde o právní radu.',
    },
    {
      q: 'Vyplatí se ještě strukturovaná data, třeba FAQ?',
      a: 'Strukturovaná data mají dál smysl tam, kde je Google podporuje: produkty a ceny, drobečková navigace, organizace, články nebo recenze. Rozšířený výsledek FAQ ale Google od 7. května 2026 ve vyhledávání nezobrazuje, takže kvůli němu nemá smysl nic přidávat. Podobně soubor <code>llms.txt</code> Google Search podle své dokumentace nepotřebuje. V auditu zkontrolujeme, že značky jsou validní a odpovídají viditelnému obsahu a že neplýtváte vývojem na prvky bez efektu.',
    },
    {
      q: 'Jak dlouho audit trvá a co od nás potřebujete?',
      a: 'Délka závisí hlavně na počtu typů stránek a domén – u velkých webů s více doménami trvá audit déle. Termín domluvíme spolu s rozsahem. Potřebujeme přístup do Search Console, kde stačí omezený uživatel, a čtení v GA4 a GTM. Dále seznam hlavních typů stránek a klíčových cest, jako je nákup nebo formulář, adresu testovacího prostředí, pokud ho máte, a kontakt na vývojáře pro dotazy. Na konci si dáme šedesát až devadesát minut na prezentaci s vývojáři.',
    },
    {
      q: 'Jak stanovujete cenu?',
      a: 'Cenu stanovíme předem jako pevnou částku. Rozhoduje počet typů stránek a domén, platforma, ať už SaaS e-shop, nebo vlastní řešení, a počet tagů v kontejneru. Cenu ovlivní i to, jestli chcete ověření po opravách a pomoc s implementací. Nejdřív se domluvíme na rozsahu.',
    },
  ],

  relatedArticles: [
    { slug: 'tagy-a-rychlost-webu', title: 'Měřicí skripty a rychlost webu' },
    { slug: 'audit-gtm-kontejneru', title: 'Audit GTM kontejneru: nejčastější chyby a jak udržet pořádek' },
    { slug: 'co-obsahuje-audit-mereni', title: 'Co má obsahovat audit měření a jak vypadá jeho výstup' },
    { slug: 'server-side-tracking-pruvodce', title: 'Server-side tracking: průvodce pro e-shopy i firmy' },
    { slug: 'jak-vybrat-cookie-listu', title: 'Jak vybrat cookie lištu: Cookiebot, české CMP, nebo vlastní řešení?' },
  ],

  relatedPages: ['sluzby/audit-mereni', 'sluzby/sprava-webu-a-mereni', 'sluzby/server-side-tracking'],

  contact: {
    formId: 'lp-tech-audit',
    topics: ['tech-audit'],
    title: 'Zjistěte, co brzdí váš web',
    lead: 'Napište nám, nebo rovnou vyplňte formulář. Stačí adresa webu a jedna věta o tom, co vás trápí. Na úvodní konzultaci zdarma projdeme výsledky z PageSpeed Insights a Search Console a navrhneme rozsah auditu.',
    placeholder:
      'Např. Search Console hlásí špatné Core Web Vitals na mobilu a po přidání chatu a heatmap web zpomalil…',
    leadType: 'audit',
  },

  schema: {
    name: 'Technický audit webu',
    serviceType:
      'Technický audit webu: výkon a Core Web Vitals, dopad měřicích skriptů, technické SEO, bezpečnostní hlavičky, přístupnost formulářů a kontrola měření',
    description:
      'Technická analýza webu, která končí úkoly pro vývojáře s prioritou podle dopadu a ověřením po opravách.',
    audience: 'E-shopy, B2B firmy, velké firmy',
  },
};
