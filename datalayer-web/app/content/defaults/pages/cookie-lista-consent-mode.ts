import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.5).
// Zdroj obsahu: seo-analyza/03_landing-pages/05_cookie-lista-consent-mode.md.
// Námitka „Cookie lištu přece máme“ otevírá symptomy, pět kategorií problémů
// shrnují čtyři symptomy, režim basic a advanced spolu s výběrem lišty tvoří
// blok Rozhodnutí a právní rámec tři karty s upozorněním, že nejde o právní radu.
// Ve sbalených Technických detailech zůstává napojení souhlasu v GTM s ukázkou
// kódu a mapou signálů, dokud nevyjde článek A1. Tabulky signálů, testovacího
// protokolu, srovnání CMP a právního rámce, dopad souhlasu na data, Sklik a SEM
// a pokuty ÚOOÚ poputují do článků A1, A2, A4, A6 a B6.
// Dokud klient nedodá podklady, stránka neobsahuje: počet auditů a statistiky
// z auditů, případovou studii, délky kroků a prezentace výsledků, partnerskou
// advokátní kancelář, referenční implementace, partnerství s CMP, sloty na hovor
// ve formuláři ani nástroj Kontrola consentu.

export const page: PageInput = {
  path: 'sluzby/cookie-lista-consent-mode',
  kind: 'service',
  navTitle: 'Cookie lišta a Consent Mode v2',
  tagline: 'souhlas legálně a bez zbytečné ztráty dat',
  pictogram: 'consent',
  menuGroup: 'sber',

  seo: {
    title: 'Cookie lišta a Consent Mode v2 – nastavení | datalayer.cz',
    description:
      'Vybereme a nastavíme cookie lištu, Consent Mode v2 a GTM. Ověříme, co web posílá před souhlasem, a vysvětlíme dopad na data. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'consent',
    h1: 'Cookie lišta a Consent Mode v2 nastavené a ověřené',
    subtitle:
      'Cookie lišta sbírá souhlas návštěvníka, Consent Mode v2 ho předává značkám Googlu a Google Tag Manager podle něj spouští ostatní tagy, třeba Metu nebo Sklik. Lištu vybereme a nastavíme tak, aby tagy souhlas respektovaly od prvního načtení stránky. Pak ověříme, co web posílá před souhlasem a po něm, a vysvětlíme dopad na data.',
    primaryCta: { label: 'Zkontrolovat můj web', href: '#kontakt' },
    secondaryCta: { label: 'Co web posílá před souhlasem', href: '#overeni' },
    microcopy: 'Úvodní konzultace zdarma · nejsme advokátní kancelář, s právníkem rádi spolupracujeme',
  },

  trust: ['Nastavení podle zákona a doporučení ÚOOÚ', 'Cookiebot, české CMP i vlastní lišta', 'Výsledek doložíme záznamem z prohlížeče'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: '„Cookie lištu přece máme.“ To, že web lištu zobrazí, ale ještě neznamená, že tagy souhlas respektují. Ani certifikovaná CMP podle Googlu sama soulad nezaručí – rozhoduje, jak ji nasadíte.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Tagy běží bez ohledu na lištu',
              text: 'Meta Pixel, Sklik nebo chatovací widget odešlou data ještě před kliknutím, nebo dokonce po odmítnutí.',
              pictogram: 'warn',
              tag: 'před souhlasem',
            },
            {
              title: 'Consent Mode startuje pozdě',
              text: 'Výchozí stav přichází až po načtení GTM, chybí nové reklamní signály a v GA4 roste podíl „Unassigned“.',
              pictogram: 'ga4',
              tag: 'unassigned',
            },
            {
              title: 'Po nasazení lišty spadly konverze',
              text: 'Tagy naběhnou až na další stránce nebo basic režim běží bez rozhodnutí a data mizí i u lidí, kteří souhlasili.',
              pictogram: 'conversion',
              tag: 'konverze',
            },
            {
              title: 'Lišta neodpovídá doporučení ÚOOÚ',
              text: 'Chybí „Odmítnout“ v první vrstvě, tlačítka nejsou rovnocenná, nebo lišta jen informuje tlačítkem „Rozumím“.',
              pictogram: 'gov',
              tag: 'ÚOOÚ',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Službu nabízíme ve dvou variantách: audit, když lištu máte, a nastavení na klíč, když ji zavádíte nebo měníte.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'inventory.csv',
              title: 'Inventura cookies a tagů',
              text: 'Všechny cookies, tagy a skripty včetně kódů mimo GTM – v šabloně, pluginech, chatu nebo videu.',
            },
            {
              tag: 'cmp',
              title: 'Lišta a podklady pro texty',
              text: 'Doporučíme CMP nebo navrhneme vlastní lištu a připravíme technické podklady pro texty, které pak schválí právník.',
            },
            {
              tag: 'consent-mode',
              title: 'Consent Mode v2',
              text: 'Výchozí stav před načtením značek, aktualizace po volbě, všechny čtyři signály a režim podle rozhodnutí s právníkem.',
            },
            {
              tag: 'gtm · sgtm',
              title: 'Napojení všech tagů',
              text: 'Tagy Mety, TikToku nebo LinkedInu naběhnou hned po souhlasu. Stav souhlasu předáme i do <a href="/sluzby/server-side-tracking">server-side GTM</a> a backendu, pokud je máte.',
            },
            {
              tag: 'sem',
              title: 'Sklik a Seznam Event Measurement',
              text: 'Souhlas předáme i novému měření Seznamu – přes IAB TCF, nebo ve formátu Google Consent Mode.',
            },
            {
              tag: 'protocol.har',
              title: 'Protokol a dokumentace',
              text: 'Osm testovacích scénářů se záznamem HAR, matice tagů a souhlasů, popis verzí GTM a seznam oprav pro vývojáře.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'tok souhlasu',
      title: 'Jak souhlas putuje od lišty k tagům',
      lead: 'Pořadí je klíčové. Výchozí stav souhlasu musí platit dřív, než prohlížeč načte jakoukoli značku – jinak se značky Googlu chovají, jako by Consent Mode neexistoval.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Tok souhlasu: výchozí stav denied platí ještě před načtením GTM, značky Googlu v advanced režimu posílají jen pingy bez cookies a ostatní tagy čekají. Po volbě v liště přijde aktualizace souhlasu a GTM spustí tagy s udělenou kategorií. Po odmítnutí ostatní tagy nic neposílají.',
          columns: [
            {
              label: 'před GTM',
              items: ['<code>consent default</code>: denied pro všechny signály'],
              note: 'musí proběhnout jako první',
            },
            {
              label: 'načtení GTM',
              items: ['značky Googlu: v advanced režimu jen ping bez cookies, v basic nic', 'Meta, Sklik, TikTok: čekají na souhlas'],
            },
            { label: 'volba v liště', items: ['web zobrazí lištu', 'návštěvník přijme, nebo odmítne'] },
            {
              label: 'po volbě',
              items: [
                '<code>consent update</code> a událost <code>cookie_consent_update</code>',
                'souhlas: plné měření Googlu a tagy s udělenou kategorií',
                'odmítnutí: ostatní tagy dál nic neposílají',
              ],
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Googlu stačí Consent Mode.</strong> Meta, Sklik nebo TikTok ho nečtou a potřebují podmínku souhlasu v GTM.',
            '<strong>Hned po volbě.</strong> Tagy naběhnou na stránce, kde návštěvník klikl, ne až na další.',
            '<strong>Méně dat je v pořádku.</strong> Nástroje dřív měřily i lidi bez souhlasu, část konverzí Google dopočítá modelováním.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'rozhodnutí',
      title: 'Basic, nebo advanced? A jakou lištu?',
      lead: 'Režim i typ lišty volíme spolu s vámi a s právníkem nebo DPO. Neprodáváme žádnou CMP, nastavíme kteroukoli a ověříme i lištu e-shopové platformy, třeba Shoptetu.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'basic',
              title: 'Basic: konzervativní varianta',
              text: 'Značky Googlu čekají na souhlas a před volbou neodejde nic.',
              bullets: [
                'Google Ads modeluje konverze jen obecným modelem',
                'GA4 chování bez souhlasu nemodeluje',
                'hodí se pro přísný právní výklad, regulované obory a malou návštěvnost',
              ],
            },
            {
              tag: 'advanced',
              title: 'Advanced: přesnější modelování',
              text: 'Prohlížeč načte značky Googlu hned a bez souhlasu odejdou jen pingy bez cookies.',
              bullets: [
                'Google Ads modeluje konverze modelem pro váš účet',
                'GA4 modeluje chování, pokud web splní prahy',
                'hodí se pro inzerenty v Google Ads s dostatkem návštěv, když právník souhlasí s přenosem pingů',
              ],
            },
          ],
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Mezinárodní CMP',
              text: 'Cookiebot, CookieYes nebo Usercentrics pro víc zemí a domén a pro vydavatele, kteří potřebují certifikovanou CMP s TCF.',
            },
            {
              title: 'Česká CMP',
              text: 'Cookies správně nebo Consentio s nižší licencí, fakturací v korunách a českou podporou pro malé a střední weby a e-shopy.',
            },
            {
              title: 'Vlastní lišta',
              text: 'Ve vašem designu, s minimem kódu a bez licence, pro weby bez reklamy třetích stran. Záznam souhlasů pak řešíme zvlášť.',
            },
          ],
        },
      ],
    },

    {
      id: 'pravni-ramec',
      eyebrow: 'právní rámec',
      title: 'Tři věci, které říká zákon, ÚOOÚ a Google',
      lead: 'Technické nastavení stavíme na těchto pravidlech. U každého uvádíme zdroj, ať si ho právník může ověřit.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: '§ 89 ZEK',
              title: 'Souhlas předem',
              text: 'K ukládání a čtení netechnických údajů v zařízení návštěvníka potřebujete předchozí prokazatelný souhlas. Výjimku má jen technicky nezbytné ukládání.',
            },
            {
              tag: 'Q&A ÚOOÚ',
              title: 'Odmítnout stejně snadno jako přijmout',
              text: '„Odmítnout“ patří do první vrstvy, tlačítka musí být rovnocenná a zavření lišty souhlas není. Odvolat souhlas musí jít stejně snadno jako ho udělit.',
            },
            {
              tag: 'Google',
              title: 'Souhlas i s personalizací reklam',
              text: 'U uživatelů z EHP chce Google platný souhlas s cookies i s personalizací reklam. Při nesouladu může pozastavit publika a měření konverzí.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Nejde o právní radu',
          text: 'Nejsme advokátní kancelář. Texty lišty, zásady cookies a právní titul pro další zpracování patří vašemu právníkovi nebo pověřenci. Rádi s ním spolupracujeme a dodáme mu technické podklady.',
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak to probíhá',
      lead: 'Stejných pět kroků jako u všech našich služeb. Nejvíc času obvykle zabere rozhodnutí o režimu a textech s právníkem.',
      tone: 'light',
      blocks: [
        {
          type: 'process',
          implementation: 'Po rozhodnutí s právníkem nastavíme lištu, Consent Mode v2, tagy v GTM, Sklik a SEM, případně server-side GTM.',
          implementationFromClient: 'kontakt na právníka nebo DPO, přístupy pro úpravy do GTM a CMP, případně vývojář',
        },
      ],
    },

    {
      id: 'overeni',
      eyebrow: 'ověření',
      title: 'Co web posílá před souhlasem a po něm',
      lead: 'Ověření je jádro naší práce. Výsledek dostanete jako záznam síťových požadavků z vašeho webu a screenshoty – ne jen jako „máte to dobře“.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'ilustrační ukázka',
              title: 'Před souhlasem',
              text: 'Odchází jen ping Googlu bez cookies, skripty Mety, Skliku a TikToku čekají na souhlas.',
              console: [
                '✓ googletagmanager.com/gtm.js  200',
                '◐ …/g/collect?en=page_view&gcs=G100  ping bez cookies',
                '✕ connect.facebook.net/…/fbevents.js  čeká na souhlas',
                '✕ sul.js  čeká na souhlas',
              ],
            },
            {
              tag: 'ilustrační ukázka',
              title: 'Po souhlasu',
              text: 'GTM spustí tagy s udělenou kategorií a Google měří s cookies.',
              console: [
                '✓ …/g/collect?en=page_view&gcs=G111  200',
                '✓ connect.facebook.net/…/fbevents.js  200',
                '✓ sul.js  200',
                '✓ analytics.tiktok.com  200',
              ],
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Co ověří testovací protokol',
          items: [
            'první návštěva bez kliknutí: od Googlu nanejvýš ping bez cookies, od ostatních nic',
            'po odmítnutí nenaběhne nic ani na další stránce, ani po změně volby v patičce',
            'po přijetí naběhnou tagy hned, na stejné stránce',
            'při návratu platí uložená volba od první stránky a zdroj z reklamy nezmizí',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: jak napojujeme souhlas v Google Tag Manageru',
    blocks: [
      {
        type: 'list',
        style: 'check',
        items: [
          'Výchozí stav nastavujeme <strong>před</strong> načtením GTM, nebo spouštěčem <em>Consent Initialization – All Pages</em>, který běží před všemi ostatními tagy.',
          'Značky Googlu mají vestavěné kontroly souhlasu. Meta, Sklik, TikTok, LinkedIn, Hotjar ani Clarity Consent Mode nečtou – dostanou <em>dodatečný požadavek na souhlas</em> a spouštění na aktualizaci souhlasu.',
          'Při víc kontejnerech nebo se server-side GTM inicializujeme souhlas v každém z nich.',
          `Seznam Event Measurement čte souhlas z IAB TCF, nebo ho dostane přes <code>SEM('updateConsent', …)</code>. Cookies <code>sid</code> a <code>udid</code> vytvoří až po souhlasu s <code>ad_storage</code>.`,
        ],
      },
      {
        type: 'code',
        lang: 'html',
        caption: 'Výchozí stav souhlasu patří do kódu stránky ještě před GTM',
        code: `<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    personalization_storage: 'denied',
    functionality_storage: 'granted',  // jen pokud je skutečně nezbytné
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true); // posoudit s právníkem
</script>
<!-- až teď Google Tag Manager -->`,
      },
      {
        type: 'paragraphs',
        items: [
          '<code>wait_for_update</code> dává liště čas poslat uloženou volbu dřív, než značky odešlou data. <code>ads_data_redaction</code> při odmítnutí reklamních cookies redukuje identifikátory prokliku a <code>url_passthrough</code> přenáší informace o prokliku v URL i bez cookies – i to doporučujeme probrat s právníkem.',
          'Stav souhlasu najdete v požadavcích Googlu v parametru <code>gcs</code>: <code>G100</code> znamená odmítnuté reklamní i analytické úložiště, <code>G111</code> povolené. Google parametr oficiálně nedokumentuje, proto výsledek vždy potvrzujeme v Tag Assistantu.',
        ],
      },
      {
        type: 'table',
        caption: 'Signály Consent Mode v2 a kategorie v liště',
        head: ['Signál', 'Co řídí', 'Kategorie v liště'],
        rows: [
          ['<code>ad_storage</code>', 'reklamní cookies a identifikátory', 'marketingové'],
          ['<code>ad_user_data</code>', 'údaje o uživateli pro reklamu, třeba u rozšířených konverzí', 'marketingové'],
          ['<code>ad_personalization</code>', 'personalizovanou reklamu a remarketing', 'marketingové'],
          ['<code>analytics_storage</code>', 'analytické cookies', 'analytické'],
          ['<code>functionality_storage</code>', 'funkce webu, třeba jazyk', 'nezbytné nebo preferenční'],
          ['<code>personalization_storage</code>', 'personalizaci obsahu', 'preferenční'],
          ['<code>security_storage</code>', 'bezpečnost a prevenci podvodů', 'nezbytné'],
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Je cookie lišta povinná?',
      a: 'Pokud web používá jen technicky nezbytné cookies, třeba pro košík nebo přihlášení, lištu se souhlasem nepotřebuje – informační povinnost ale trvá. Jakmile používáte analytiku, reklamní pixely nebo remarketing, potřebujete podle § 89 odst. 3 zákona o elektronických komunikacích předchozí prokazatelný souhlas, a to i pro GA4. Výjimka pro malé weby neexistuje.',
    },
    {
      q: 'Je Google Consent Mode v2 povinný?',
      a: 'Zákon vyžaduje souhlas, ne Consent Mode. Google ale Consent Mode fakticky vyžaduje po inzerentech, kteří chtějí u uživatelů z EHP měřit konverze a personalizovat reklamu – bez signálů souhlasu přicházíte o remarketingová publika. Od 15. června 2026 navíc Google Analytics u účtů propojených s Google Ads řídí reklamní data jen přes Consent Mode.',
    },
    {
      q: 'Proč po nasazení lišty klesly konverze?',
      a: 'Část poklesu je očekávaná, protože nástroje dřív měřily i lidi bez souhlasu. Často jde ale o chybu: basic režim bez modelování, tagy, které naběhnou až po znovunačtení stránky, výchozí stav až po GTM nebo nastavení bez signálu <code>ad_user_data</code>, které blokuje rozšířené konverze. Audit proto obsahuje i odhad dopadu na data.',
    },
    {
      q: 'Kolik to stojí a jak dlouho to trvá?',
      a: 'Cenu skládáme podle rozsahu: počet domén a jazyků, tagů a nástrojů, jestli lištu vybíráme, nebo vyvíjíme, a kolik kódů běží mimo GTM. Licenci CMP platíte přímo poskytovateli. Délka závisí na stejných faktorech a nejvíc času obvykle zabere rozhodnutí o textech a režimu s právníkem.',
    },
    {
      q: 'Jste právníci? Kdo připraví texty lišty?',
      a: 'Nejsme advokátní kancelář. Odpovídáme za technické nastavení a připravíme podklady: seznam cookies, účely, poskytovatele a dobu uložení. Z nich právník sestaví texty lišty a zásady cookies a vývojáři nebo správce GTM dostanou od nás seznam oprav.',
    },
    {
      q: 'Komu patří lišta, účet CMP a přístupy?',
      a: 'Vám. Účet CMP i kontejner GTM zůstávají vaše a licenci CMP platíte přímo poskytovateli. Pracujeme s přístupy pro čtení, při nastavení pro úpravy, a po předání je můžete kdykoli odebrat.',
    },
  ],

  relatedArticles: [
    { slug: 'consent-mode-v2-pruvodce', title: 'Consent Mode v2: kompletní průvodce' },
    { slug: 'cookies-zakon-gdpr-uoou', title: 'Cookies a zákon: § 89 ZEK, GDPR a ÚOOÚ' },
    { slug: 'jak-vybrat-cookie-listu', title: 'Cookiebot, česká CMP, nebo vlastní lišta?' },
  ],

  relatedPages: ['sluzby/mereni-konverzi', 'sluzby/server-side-tracking', 'sluzby/audit-mereni'],

  contact: {
    formId: 'lp-consent',
    topics: ['consent'],
    title: 'Nastavíme souhlas podle pravidel – a bez zbytečné ztráty dat',
    lead: 'Na úvodní konzultaci zdarma se podíváme, co web posílá před souhlasem, a řekneme, jestli stačí oprava, nebo je potřeba nové nastavení.',
    placeholder: 'Např. po nasazení lišty nám spadly konverze v Google Ads…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Cookie lišta a Google Consent Mode v2',
    serviceType: 'Nastavení a audit cookie lišty, Consent Mode v2 a Google Tag Manageru',
    description:
      'Výběr a nastavení cookie lišty, Google Consent Mode v2 v režimu basic nebo advanced a napojení všech tagů v GTM na souhlas. Audit, co web posílá před souhlasem, testovací protokol a vysvětlení dopadu na data. Technické nastavení podle § 89 odst. 3 zákona č. 127/2005 Sb. a doporučení ÚOOÚ; právní posouzení zajišťuje právník klienta.',
    audience: 'E-shopy, B2B firmy a velké firmy',
  },
};
