import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.9).
// Zdroj obsahu: seo-analyza/03_landing-pages/09_audit-mereni.md. Jádro stránky
// jsou taby „Co kontrolujeme“ – šest oblastí po čtyřech bodech. Diagram
// průběhu auditu a kroky s přístupy sloučil jednotný postup. Mockup výřezu
// reportu jako obrázek od klienta zatím nemáme, nahrazuje ho pět karet
// s fiktivními nálezy. Struktura reportu, definice priorit a úplný seznam
// přístupů zůstávají ve sbalených Technických detailech, dokud nevyjde
// článek H2. Dokud klient nedodá podklady, stránka neobsahuje případovou
// studii, počet auditů, délky kroků ani celkovou délku auditu, počet
// kontrol, termín a kapacitu rychlé kontroly ani ukázkový PDF report.
// Rychlá kontrola nemá vlastní formulář – obě karty vedou na jeden
// formulář (leadType audit).
// Texty prošly jazykovým auditem z 9. října 2026 (seo-analyza/2026-10-09_jazykovy-audit,
// kap. 3.12): „souhlas“ místo „consent“, bezplatnost rychlé kontroly jen
// v tlačítku hero a ve FAQ o ceně, postup s výchozími kroky.

export const page: PageInput = {
  path: 'sluzby/audit-mereni',
  kind: 'service',
  navTitle: 'Audit měření',
  tagline: 'zjistíme, kde data utíkají',
  pictogram: 'audit',
  menuGroup: 'audity',

  seo: {
    title: 'Audit měření – GA4, GTM, souhlas a konverze | datalayer.cz',
    description:
      'Nevěříte číslům v GA4? Audit měření prověří GA4, GTM, souhlas i konverze v Google Ads a Metě a porovná je s e-shopem. Nálezy s prioritou A, B a C.',
  },

  hero: {
    eyebrow: 'audity a správa',
    h1: 'Audit měření GA4, GTM, souhlasu a konverzí',
    subtitle:
      'Audit měření je nezávislá kontrola, jestli analytická a reklamní data odpovídají skutečnosti. Prověříme GA4, Google Tag Manager (GTM), souhlas návštěvníků a konverze v Google Ads, Metě a Skliku a porovnáme je s objednávkami v administraci nebo poptávkami v CRM. Nálezy seřadíme podle dopadu a navrhneme plán oprav.',
    primaryCta: { label: 'Objednat audit měření', href: '#kontakt' },
    secondaryCta: { label: 'Rychlá kontrola zdarma', href: '#rychla-kontrola' },
    microcopy: 'Stačí přístupy pro čtení, dohodu o mlčenlivosti (NDA) podepíšeme na požádání',
  },

  trust: ['Testovací nákupy a formuláře', 'Porovnání s administrací nebo CRM', 'Nálezy s prioritou A, B a C'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'kdy audit',
      title: 'Poznáváte se?',
      lead: 'Audit se vyplatí, když čísla přestanou sedět nebo když chystáte velkou změnu.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Čísla nesedí',
              text: 'GA4, Google Ads, Meta a administrace ukazují čtyři různá čísla a nikdo neumí vysvětlit proč.',
              pictogram: 'warn',
              tag: '≠',
            },
            {
              title: 'Po nové cookie liště spadly konverze',
              text: 'Propad o desítky procent přišel hned po nasazení lišty nebo po změně jejího nastavení.',
              pictogram: 'consent',
              tag: 'souhlas',
            },
            {
              title: 'Měníte agenturu nebo přebíráte web',
              text: 'Potřebujete vědět, co přebíráte: kdo má přístupy, jak vypadá nastavení a co nefunguje.',
              pictogram: 'gtm',
              tag: 'předání',
            },
            {
              title: 'Chystáte redesign, migraci nebo server-side měření',
              text: 'Než postavíte nové měření, je dobré vědět, které chyby nepřenést.',
              pictogram: 'serverside',
              tag: 'migrace',
            },
          ],
        },
      ],
    },

    {
      id: 'co-kontrolujeme',
      eyebrow: 'rozsah',
      title: 'Co v auditu webové analytiky kontrolujeme',
      lead: 'Audit nekončí u nastavení. Projdeme web jako zákazník, uděláme testovací nákup nebo poptávku a výsledek porovnáme se všemi systémy.',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'audit_oblast',
          items: [
            {
              id: 'ga4',
              label: 'A – GA4',
              paragraphs: ['Při auditu Google Analytics 4 procházíme hlavně:'],
              bullets: [
                'vlastnictví účtu a property, role, přístupy a dobu uchovávání dat',
                'filtry interní návštěvnosti a nežádoucí referraly, obvykle platební brány',
                'klíčové události a e-commerce: <code>transaction_id</code>, hodnotu, měnu a duplicity',
                'podíl <code>(not set)</code>, UTM, kanály a propojení s Google Ads a BigQuery',
              ],
            },
            {
              id: 'gtm',
              label: 'B – GTM a další kódy',
              paragraphs: [
                'Když potřebujete jen kontrolu kontejneru, samostatný audit GTM popisuje stránka <a href="/sluzby/google-tag-manager">Google Tag Manager</a>.',
              ],
              bullets: [
                'inventura tagů, spouštěčů a proměnných, duplicity a nepoužívané položky',
                'kódy mimo GTM: šablona webu, pluginy a integrace platformy',
                'Custom HTML, šablony třetích stran, verze a oprávnění Publikovat',
                'dopad tagů na rychlost webu',
              ],
            },
            {
              id: 'souhlas',
              label: 'C – Souhlas a cookies',
              paragraphs: [
                'Jde o technickou kontrolu, ne o právní posouzení. Technickou nápravu řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>.',
              ],
              bullets: [
                'co web načte a jaké cookies vzniknou <strong>před</strong> souhlasem',
                'Consent Mode v2: výchozí stav a aktualizace všech čtyř signálů',
                'jestli web respektuje odmítnutí, změnu volby a odvolání souhlasu',
                'stav Consent Mode v diagnostice Google Ads a v nastavení GA4',
              ],
            },
            {
              id: 'reklamni-systemy',
              label: 'D – Reklamní systémy',
              bullets: [
                '<strong>Google Ads:</strong> tag nebo import z GA4, primární akce, hodnoty, duplicity a rozšířené konverze',
                '<strong>Meta:</strong> Pixel a Conversions API, deduplikace přes <code>event_id</code>, Event Match Quality',
                '<strong>Sklik:</strong> konverzní a retargetingový kód vs. nový Seznam Event Measurement',
                '<strong>Heureka, Zboží.cz, TikTok a LinkedIn</strong> podle toho, co používáte',
              ],
            },
            {
              id: 'administrace',
              label: 'E – Shoda s administrací',
              bullets: [
                'objednávky a tržby po dnech: GA4 vs. administrace za třicet až devadesát dní',
                'členění podle platební metody, zařízení, prohlížeče a země – tam chyby vyplavou',
                'u B2B: formuláře v GA4 vs. poptávky v CRM a předávání <code>gclid</code>',
                'jakou část rozdílu vysvětlí souhlas, blokace a storna a jaká část je chyba',
              ],
            },
            {
              id: 'datova-vrstva',
              label: 'F – Datová vrstva a technika',
              bullets: [
                'struktura datové vrstvy vs. schéma GA4, časování pushů a jednostránkové aplikace (SPA)',
                'server-side GTM, pokud ho máte: deduplikace, first-party cookies, Google Tag Gateway',
                '<strong>testovací nákupy:</strong> kartou s návratem z brány, převodem, na dobírku a s kupónem',
                '<strong>další scénáře:</strong> obnovení děkovací stránky, formuláře, přihlášení a volba v cookie liště',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      lead: 'Report vlastníte vy a poslouží i při jednání s agenturou nebo dodavatelem webu.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'audit-report.pdf',
              title: 'Report z auditu',
              text: 'Manažerské shrnutí na jedné straně a nálezy s důkazem, dopadem, prioritou a pracností.',
            },
            {
              tag: 'remediation-plan.xlsx',
              title: 'Plán oprav',
              text: 'Pořadí podle priorit A, B a C, závislosti a kdo co opraví – třeba „nejdřív datová vrstva, pak tagy“.',
            },
            {
              tag: 'reconciliation.xlsx',
              title: 'Porovnání čísel',
              text: 'GA4 vs. administrace nebo CRM vs. reklamní systémy, s vysvětlením každého rozdílu.',
            },
            {
              tag: 'gtm-inventory.xlsx, qa-protocol.pdf',
              title: 'Inventura GTM a protokol testů',
              text: 'Všechny tagy s doporučením ponechat, upravit, nebo smazat a výsledky testovacích scénářů se snímky obrazovky.',
            },
            {
              tag: 'schůzka',
              title: 'Prezentace výsledků',
              text: 'Nálezy projdeme s marketingem, vývojem a vedením.',
            },
          ],
        },
      ],
    },

    {
      id: 'rychla-kontrola',
      eyebrow: 'rychlá kontrola',
      title: 'Kdy stačí rychlá kontrola a kdy celý audit',
      lead: 'Když nevíte, jestli audit potřebujete, začněte rychlou kontrolou – ve formuláři stačí adresa webu a do zprávy napište „Rychlá kontrola měření“.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'bez přístupů',
              title: 'Rychlá kontrola',
              text: 'Podíváme se na web zvenku a tři až pět nejvýraznějších nálezů pošleme e-mailem, nebo je probereme v krátkém hovoru.',
              bullets: [
                'tagy a cookies před souhlasem, stav Consent Mode',
                'duplicity GTM a Google tagu, reklamní pixely',
                'události e-commerce na produktu a v košíku, hrubý dopad na rychlost',
                'nákup, účty ani shodu s administrací nekontrolujeme',
              ],
              link: { label: 'Chci rychlou kontrolu', href: '#kontakt' },
            },
            {
              tag: 'audit',
              title: 'Audit měření',
              text: 'Všech šest oblastí A–F, testovací nákupy a formuláře a porovnání čísel s administrací nebo CRM.',
              bullets: [
                'přístupy jen pro čtení',
                'report s prioritami A, B a C a plán oprav',
                'prezentace nálezů s vaším týmem',
                'nabídka s pevným rozsahem po úvodním hovoru',
              ],
              link: { label: 'Objednat audit', href: '#kontakt' },
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak audit probíhá',
      lead: 'Audit je první z pěti kroků, které platí pro všechny naše služby. Data ze všech systémů svedeme do jednoho porovnání a každý rozdíl buď vysvětlíme, nebo z něj uděláme nález. Od vás potřebujeme přístupy pro čtení, export objednávek nebo poptávek bez osobních údajů a možnost testovacího nákupu.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation: 'Volitelně: nálezy opravíme sami, nebo připravíme zadání pro vaše vývojáře a jejich práci zkontrolujeme.',
          implementationFromClient: 'přístupy pro úpravy, u datové vrstvy vývojář',
        },
      ],
    },

    {
      id: 'ukazka-reportu',
      eyebrow: 'ukázka – fiktivní data',
      title: 'Jak vypadá report z auditu',
      lead: 'Výřez z tabulky nálezů. U každého nálezu v reportu najdete důkaz, doporučení, pracnost a to, kdo ho opraví.',
      tone: 'dark',
      note: 'Fiktivní data. Priorita A znamená opravit do dvou týdnů, B do jednoho až dvou měsíců, C podle kapacity.',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'A1 – datová vrstva',
              title: 'Web po návratu z brány neodešle nákup',
              text: 'GA4 nevidí šestnáct procent plateb kartou a kampaně vypadají hůř.',
            },
            {
              tag: 'A2 – souhlas',
              title: 'Meta Pixel běží před volbou v cookie liště',
              text: 'Data bez souhlasu a možný rozpor s § 89 odst. 3 zákona o elektronických komunikacích – ten by měl posoudit právník.',
            },
            {
              tag: 'A3 – Google Ads',
              title: 'Google Ads počítá nákup dvakrát',
              text: 'Import z GA4 i tag Google Ads jako primární akce nadhodnotí konverze a zkreslí optimalizaci nabídek.',
            },
            {
              tag: 'B2 – GA4',
              title: 'Platební brány jako referral',
              text: 'GA4 přepíše zdroj nákupu na platební bránu.',
            },
            {
              tag: 'C1 – GTM',
              title: 'Sedmatřicet nepoužívaných tagů a chybějící pravidla pojmenování',
              text: 'Pomalejší správa kontejneru a vyšší riziko chyb.',
            },
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Struktura reportu, priority a potřebné přístupy',
    blocks: [
      {
        type: 'list',
        style: 'bullet',
        title: 'Struktura reportu',
        items: [
          '<strong>Manažerské shrnutí</strong> na jedné straně: stav šesti oblastí, pět nejdůležitějších nálezů a odhad dopadu na rozhodování.',
          '<strong>Rozsah a metodika:</strong> co jsme kontrolovali, období dat a testovací scénáře.',
          '<strong>Nálezy podle oblastí:</strong> popis, důkaz v podobě snímku obrazovky nebo síťového požadavku, dopad, doporučení, priorita, pracnost a kdo opraví.',
          '<strong>Porovnání čísel</strong> GA4, administrace nebo CRM a reklamních systémů s vysvětlením rozdílů.',
          '<strong>Plán oprav</strong> s pořadím, odhadem pracnosti a závislostmi.',
          '<strong>Přílohy:</strong> inventura GTM, seznam cookies a požadavků před souhlasem a po něm, protokol testovacích scénářů.',
        ],
      },
      {
        type: 'list',
        style: 'bullet',
        title: 'Co znamenají priority',
        items: [
          '<strong>A – kritické:</strong> chyby v datech vedou ke špatným rozhodnutím nebo špatné optimalizaci kampaní, případně hrozí právní či smluvní riziko kvůli souhlasu, osobním údajům nebo pravidlům Googlu.',
          '<strong>B – důležité:</strong> data mají mezery nebo zkreslení a omezují analýzu, hlavní čísla ale zůstávají použitelná.',
          '<strong>C – doporučení:</strong> údržba, přehlednost a rozvoj, třeba pravidla pojmenování, BigQuery nebo dokumentace.',
        ],
      },
      {
        type: 'table',
        caption: 'Přístupy a podklady',
        head: ['Systém', 'Co potřebujeme', 'Proč'],
        rows: [
          ['GA4', 'roli Čtenář na úrovni property', 'nastavení a data, metriky tržeb neomezujte'],
          ['Google Tag Manager', 'oprávnění Číst, nebo export kontejneru', 'inventura tagů'],
          ['Google Ads', 'přístup Jen pro čtení', 'konverzní akce, diagnostika Consent Mode'],
          ['Meta Business', 'zobrazení datové sady v Events Manageru', 'deduplikace, kvalita párování'],
          ['Sklik', 'přístup k účtu jen pro čtení', 'konverze, Seznam Event Measurement'],
          ['Search Console', 'omezeného uživatele', 'propojení s GA4'],
          ['Cookie lišta, tedy nástroj pro správu souhlasů (CMP)', 'čtení v administraci, pokud ho používáte', 'kategorie a signály'],
          ['Administrace e-shopu', 'export objednávek bez osobních údajů: číslo, datum a čas, hodnota s DPH i bez, doprava, platba, stav', 'porovnání čísel'],
          ['CRM u B2B', 'export poptávek bez osobních údajů: ID, datum, zdroj, stav', 'porovnání formulářů a poptávek'],
          ['Testovací nákup', 'slevový kód na celou částku nebo testovací platební metodu a možnost storna', 'testovací scénáře'],
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Kolik audit měření stojí?',
      a: 'Cenu ovlivňuje počet systémů, jako jsou GA4, GTM, Google Ads, Meta, Sklik nebo srovnávače, dále počet webů a domén, typ webu a to, jestli chcete i porovnání s CRM. Po úvodním hovoru dostanete nabídku s pevným rozsahem. Rychlá kontrola zvenku je zdarma.',
    },
    {
      q: 'Jak dlouho audit trvá?',
      a: 'Záleží hlavně na tom, jak rychle se podaří zajistit přístupy, export objednávek a testovací nákup, a na počtu systémů a webů. U velkých firem s více weby a schvalováním přístupů počítejte s delší dobou. Délku odhadneme po úvodním hovoru, až budeme znát rozsah.',
    },
    {
      q: 'Jaké přístupy potřebujete a je to bezpečné?',
      a: 'Stačí přístupy pro čtení: role Čtenář v GA4, oprávnění Číst v GTM, přístup Jen pro čtení v Google Ads a obdobně v Metě a Skliku. Nic neměníme a od e-shopu potřebujeme export objednávek <strong>bez osobních údajů zákazníků</strong>. Na požádání podepíšeme NDA a po auditu doporučíme přístupy odebrat. Úplný seznam najdete v Technických detailech.',
    },
    {
      q: 'Posoudíte i právní stránku cookie lišty?',
      a: 'Ne, nejsme advokátní kancelář. Ověřujeme technickou stránku: co web spustí před souhlasem a po něm a jestli tagy respektují volbu návštěvníka. Pro orientaci: § 89 odst. 3 zákona č. 127/2005 Sb. vyžaduje k ukládání údajů, které nejsou nezbytné pro poskytnutí služby, předchozí souhlas. Texty lišty a zásady by měl posoudit váš právník.',
    },
    {
      q: 'Kdo nálezy opraví – vy, nebo naši vývojáři?',
      a: 'Jak chcete. Report píšeme tak, aby podle něj mohl opravy udělat kdokoli: váš vývojář, agentura, nebo my. Nálezy v GTM, GA4 a nastavení souhlasu většinou opravujeme sami, úpravy datové vrstvy připravíme jako zadání pro vývojáře a jejich práci zkontrolujeme.',
    },
    {
      q: 'Jak velký rozdíl mezi GA4 a e-shopem je normální?',
      a: 'Pevné číslo neexistuje – záleží na podílu návštěvníků, kteří odmítnou souhlas, na blokování měření v prohlížečích a na stornech. Důležitější než velikost rozdílu je, zda je stabilní a vysvětlitelný. Když se rozdíl liší podle platební metody nebo prohlížeče, jde téměř jistě o chybu, proto v auditu porovnáváme čísla v tomto členění.',
    },
  ],

  relatedArticles: [
    { slug: 'co-obsahuje-audit-mereni', title: 'Co má obsahovat audit měření' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla v GA4, Google Ads a e-shopu' },
    { slug: 'ga4-checklist-kvality-dat', title: 'Kontrolní seznam kvality dat v GA4' },
  ],

  relatedPages: ['sluzby/implementace-ga4', 'sluzby/mereni-konverzi', 'sluzby/sprava-webu-a-mereni'],

  contact: {
    formId: 'lp-audit',
    topics: ['audit'],
    title: 'Zjistíme, kde utíkají data',
    lead: 'Pošlete adresu webu a krátce popište, co nesedí. Ozveme se s návrhem rozsahu, nebo rovnou s výsledkem rychlé kontroly.',
    placeholder: 'Např. nevěříme číslům v GA4 a chceme vědět, kde je chyba…',
    leadType: 'audit',
  },

  schema: {
    name: 'Audit měření',
    serviceType: 'Audit webové analytiky a měření konverzí',
    description:
      'Nezávislá kontrola GA4, Google Tag Manageru, souhlasu návštěvníků v Consent Mode v2 a konverzí v Google Ads, Metě a Skliku; čísla porovnáme s administrací e-shopu nebo CRM. Výsledek tvoří report s nálezy podle priority A, B a C a plán oprav.',
    audience: 'E-shopy, B2B firmy, velké firmy',
  },
};
