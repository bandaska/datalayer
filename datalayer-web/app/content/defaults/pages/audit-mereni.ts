import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/09_audit-mereni.md (návrh v1, 8. října 2026).
// Do dodání podkladů od klienta stránka neobsahuje: případovou studii, počet
// auditů v trust baru, délky kroků a celkovou délku auditu, počet kontrol,
// termín a kapacitu rychlé kontroly, odečet ceny auditu ani ukázkový PDF report.
// Rychlou kontrolu zdarma zmiňují texty, formulář zůstává jeden (leadType audit).

export const page: PageInput = {
  path: 'sluzby/audit-mereni',
  kind: 'service',
  navTitle: 'Audit měření',
  tagline: 'zjistíme, kde data utíkají',
  pictogram: 'audit',
  menuGroup: 'audity',

  seo: {
    title: 'Audit měření – GA4, GTM, consent a konverze | datalayer.cz',
    description:
      'Nevěříte číslům v GA4? Audit měření prověří GA4, GTM, souhlas i konverze v Ads a Meta a porovná je s e-shopem. Nálezy s prioritou A/B/C. Kontrola zdarma.',
  },

  hero: {
    eyebrow: 'audity · audit měření',
    h1: 'Audit měření: GA4, GTM, consent a konverze',
    subtitle:
      'Prověříme GA4, Google Tag Manager, souhlas návštěvníků a konverze v Google Ads, Metě a Skliku a porovnáme je s objednávkami v administraci nebo leady v CRM. Dostanete seznam nálezů seřazený podle dopadu a plán oprav.',
    quickAnswer:
      '<strong>Co je audit měření?</strong> Nezávislá kontrola, zda analytická a reklamní data odpovídají skutečnosti. Prověřuje nastavení GA4 a Google Tag Manageru, chování tagů před souhlasem a po něm, konverze v reklamních systémech a jejich shodu s administrací e-shopu nebo CRM. Na konci dostanete report s nálezy seřazenými podle priority a plán oprav.',
    primaryCta: { label: 'Objednat audit měření', href: '#kontakt' },
    secondaryCta: { label: 'Rychlá kontrola zdarma', href: '#rychla-kontrola' },
    microcopy: 'Přístupy jen pro čtení · NDA na požádání · report vlastníte vy',
  },

  trust: [
    'Testovací nákupy a formuláře – ne jen kontrola nastavení',
    'Porovnání s administrací nebo CRM – čísla proti realitě',
    'Přístupy jen pro čtení – a po auditu je odeberete',
  ],

  sections: [
    {
      id: 'kdy-audit',
      eyebrow: 'kdy audit',
      title: 'Kdy se audit měření vyplatí',
      lead: 'Když čísla přestanou dávat smysl, nebo těsně před velkou změnou.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Čísla nesedí',
              text: 'GA4, Google Ads, Meta a administrace ukazují čtyři různá čísla a nikdo neumí vysvětlit proč.',
              pictogram: 'warn',
              tag: '≠',
            },
            {
              title: 'Po nové cookie liště spadly konverze',
              text: 'Propad o desítky procent hned po nasazení lišty nebo po změně jejího nastavení.',
              pictogram: 'consent',
              tag: 'consent',
            },
            {
              title: 'Měníte agenturu nebo přebíráte web',
              text: 'Potřebujete vědět, co přebíráte: kdo má přístupy, jak vypadá nastavení a co nefunguje.',
              pictogram: 'gtm',
              tag: 'handover',
            },
            {
              title: 'Chystáte redesign, migraci nebo server-side',
              text: 'Než postavíte nové měření, je dobré vědět, které chyby nepřenést.',
              pictogram: 'serverside',
              tag: 'migration',
            },
            {
              title: 'Vedení chce vědět, jestli data platí',
              text: 'Rozhodujete o rozpočtech na reklamu, investicích nebo akvizici podle dat z GA4 a reklamních systémů.',
              pictogram: 'dashboard',
              tag: 'due diligence',
            },
            {
              title: 'Kampaně optimalizují na „divné“ konverze',
              text: 'Konverzí je víc než objednávek, nebo do nich systém počítá mikrokonverze či stornované nákupy.',
              pictogram: 'conversion',
              tag: 'bidding',
            },
          ],
        },
      ],
    },
    {
      id: 'co-kontrolujeme',
      eyebrow: 'rozsah',
      title: 'Co v auditu webové analytiky kontrolujeme',
      lead: 'Audit nekončí u nastavení. Ověřujeme, co měření dělá v reálném provozu: projdeme web jako zákazník, uděláme testovací nákup nebo poptávku a výsledek porovnáme se všemi systémy.',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'audit_oblast',
          items: [
            {
              id: 'ga4',
              label: 'A · GA4',
              paragraphs: ['Při auditu Google Analytics 4 procházíme tyto oblasti:'],
              bullets: [
                'vlastnictví účtu a property, role a přístupy – kdo je administrátor',
                'datové streamy, měna, časové pásmo, retence a redakce dat',
                'filtry interní návštěvnosti, filtr hostitelů a nežádoucí referraly, typicky platební brány',
                'klíčové události: které jsou klíčové, duplicity, správnost hodnot',
                'e-commerce: úplnost trychtýře, <code>transaction_id</code>, hodnota a měna, parametry položek',
                'podíl návštěv <code>(not set)</code> a Unassigned, kanálové seskupení, UTM',
                'měření napříč doménami, User-ID, osobní údaje v URL a událostech',
                'propojení s Google Ads, Search Console a BigQuery, nastavení souhlasu v administraci GA4',
              ],
            },
            {
              id: 'gtm',
              label: 'B · GTM a další kódy',
              paragraphs: [
                'Kontrolujeme kontejner i kódy, které běží mimo něj. Potřebujete jen kontrolu kontejneru? Samostatný audit GTM popisuje stránka <a href="/sluzby/google-tag-manager">Google Tag Manager</a>.',
              ],
              bullets: [
                'inventura tagů, spouštěčů a proměnných, duplicity, nepoužívané položky',
                'kódy mimo GTM: šablona webu, pluginy, integrace platformy',
                'Custom HTML a šablony třetích stran, verze, pracovní prostory, oprávnění Publikovat',
                'dopad tagů na rychlost webu',
              ],
            },
            {
              id: 'souhlas',
              label: 'C · Souhlas a cookies',
              paragraphs: [
                'Jde o technickou kontrolu, ne o právní posouzení. Lištu a texty by měl posoudit váš právník, technickou nápravu řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>.',
              ],
              bullets: [
                'co web načte a jaké cookies vzniknou <strong>před</strong> souhlasem – síťové požadavky na Google, Metu, Seznam a další',
                'Consent Mode v2: výchozí stav a aktualizace všech čtyř signálů, basic vs. advanced',
                'jestli web respektuje odmítnutí, změnu volby a odvolání souhlasu',
                'stav consent mode v diagnostice Google Ads a v nastavení souhlasu GA4',
              ],
            },
            {
              id: 'reklamni-systemy',
              label: 'D · Reklamní systémy',
              bullets: [
                '<strong>Google Ads:</strong> odkud konverze pocházejí, zda z tagu Ads, nebo z importu z GA4, dále primární a sekundární akce, hodnoty a měna, duplicity, rozšířené konverze a stav consent mode',
                '<strong>Meta:</strong> Pixel a Conversions API, deduplikace přes <code>event_id</code>, kvalita párování neboli Event Match Quality',
                '<strong>Sklik a Seznam:</strong> konverzní a retargetingový kód vs. nový Seznam Event Measurement',
                '<strong>Heureka a Zboží.cz:</strong> konverzní kódy, Ověřeno zákazníky',
                '<strong>TikTok, LinkedIn</strong> a další systémy podle toho, co používáte',
              ],
            },
            {
              id: 'administrace',
              label: 'E · Shoda s administrací',
              bullets: [
                'počet objednávek a tržby po dnech: GA4 vs. administrace za třicet až devadesát dní',
                'rozpad podle platební metody, zařízení, prohlížeče a země – tam chyby vyplavou',
                'u B2B odeslané formuláře v GA4 vs. poptávky v CRM, předávání <code>gclid</code> a ID leadu',
                'vysvětlení rozdílu: jakou část čekáme kvůli souhlasu, blokaci a stornům a jaká část je chyba',
              ],
            },
            {
              id: 'datova-vrstva',
              label: 'F · Datová vrstva a technika',
              bullets: [
                'struktura datové vrstvy vs. schéma GA4, časování pushů, SPA',
                'server-side GTM, pokud ho máte: odesílání, deduplikace, first-party cookies, Google Tag Gateway',
                '<strong>testovací scénáře:</strong> nákup kartou s návratem z brány, převodem, na dobírku a s kupónem, obnovení děkovací stránky, odeslání každého typu formuláře, přihlášení, odmítnutí a udělení souhlasu',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'prubeh-auditu',
      eyebrow: 'průběh',
      title: 'Jak audit probíhá',
      lead: 'Data ze všech systémů svedeme do jednoho porovnání. Každý rozdíl buď vysvětlíme, nebo z něj uděláme nález. Nálezy seřadíme podle dopadu a pracnosti.',
      tone: 'light',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma auditu: data z webu, GTM, GA4, reklamních systémů a administrace porovnáme spolu s výsledky testovacích nákupů a formulářů. Nálezy seřadíme do priorit A, B a C a sestavíme z nich plán oprav s odhadem pracnosti.',
          columns: [
            {
              label: 'Zdroje',
              items: [
                'Web: tagy, cookies, souhlas',
                'GTM kontejner',
                'GA4',
                'Google Ads · Meta · Sklik · Heureka',
                'Administrace e-shopu / CRM',
              ],
            },
            {
              label: 'Testy',
              items: ['testovací nákupy', 'testovací formuláře'],
              note: 'Automatické nástroje nákup neotestují ani neporovnají data s administrací.',
            },
            {
              label: 'Porovnání a analýza',
              items: ['rozdíly mezi systémy', 'vysvětlení, nebo nález'],
            },
            {
              label: 'Nálezy',
              items: ['A – opravit hned', 'B – naplánovat', 'C – vylepšení'],
            },
            {
              label: 'Plán oprav',
              items: ['pořadí oprav', 'odhad pracnosti', 'kdo co opraví'],
            },
          ],
        },
      ],
    },
    {
      id: 'ukazka-reportu',
      eyebrow: 'ukázka – fiktivní data',
      title: 'Jak vypadá report z auditu',
      lead: 'Takhle vypadá výstup auditu. Čísla v ukázce jsou fiktivní.',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'bullet',
          title: 'Struktura reportu',
          items: [
            '<strong>Manažerské shrnutí</strong> na jedné straně: stav šesti oblastí, pět nejdůležitějších nálezů a odhad dopadu na rozhodování',
            '<strong>Rozsah a metodika:</strong> co jsme kontrolovali, období dat, testovací scénáře',
            '<strong>Nálezy podle oblastí:</strong> u každého popis, důkaz v podobě screenshotu nebo síťového požadavku, dopad, doporučení, priorita, pracnost a kdo opraví',
            '<strong>Porovnání čísel:</strong> GA4 vs. administrace nebo CRM vs. reklamní systémy, s vysvětlením rozdílů',
            '<strong>Plán oprav:</strong> pořadí A → B → C, odhad pracnosti a závislosti, třeba „nejdřív datová vrstva, pak tagy“',
            '<strong>Přílohy:</strong> inventura GTM, seznam cookies a požadavků před souhlasem a po něm, protokol testovacích scénářů',
          ],
        },
        {
          type: 'table',
          caption: 'Ukázka tabulky nálezů – fiktivní data. Pracnost: S malá, M střední.',
          head: ['ID', 'Oblast', 'Nález', 'Dopad', 'Priorita', 'Pracnost', 'Kdo'],
          rows: [
            [
              'A1',
              'Datová vrstva / GA4',
              'Web po návratu z platební brány neodešle nákup při platbě kartou',
              'GA4 nevidí šestnáct procent plateb kartou, kampaně vypadají hůř',
              '<strong>A</strong>',
              'S',
              'vývojář + my',
            ],
            [
              'A2',
              'Souhlas',
              'Meta Pixel běží ještě před volbou v cookie liště',
              'Možný rozpor s § 89 odst. 3 ZEK, který by měl posoudit právník; data bez souhlasu',
              '<strong>A</strong>',
              'S',
              'my v GTM',
            ],
            [
              'A3',
              'Google Ads',
              'Google Ads počítá nákup dvakrát: import z GA4 i tag Google Ads jako primární akce',
              'Nadhodnocené konverze, chybná optimalizace nabídek',
              '<strong>A</strong>',
              'S',
              'PPC + my',
            ],
            ['B1', 'GA4', 'Retence dat dva měsíce', 'Meziroční explorace nefungují', '<strong>B</strong>', 'S', 'my'],
            [
              'B2',
              'GA4',
              'Platební brány jako referral',
              'GA4 přepíše zdroj nákupu na bránu',
              '<strong>B</strong>',
              'S',
              'my',
            ],
            [
              'B3',
              'Souhlas',
              'Chybí signály <code>ad_user_data</code> a <code>ad_personalization</code>',
              'Omezení publik a personalizace pro EHP',
              '<strong>B</strong>',
              'S',
              'my',
            ],
            [
              'B4',
              'Sklik',
              'Starý konverzní kód, Seznam Event Measurement chybí',
              'Dnes bez dopadu, přechod v plánu',
              '<strong>B</strong>',
              'M',
              'my',
            ],
            [
              'C1',
              'GTM',
              '37 nepoužívaných tagů, žádné názvosloví',
              'Pomalejší správa, riziko chyb',
              '<strong>C</strong>',
              'M',
              'my',
            ],
            [
              'C2',
              'GA4',
              'Chybí export do BigQuery',
              'Žádná historie delší než čtrnáct měsíců',
              '<strong>C</strong>',
              'S',
              'my',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Co znamenají priority A, B a C',
          head: ['Priorita', 'Definice', 'Doporučený termín'],
          rows: [
            [
              '<strong>A – kritické</strong>',
              'Chyby v datech vedou ke špatným rozhodnutím nebo optimalizaci kampaní, případně hrozí právní či smluvní riziko kvůli souhlasu, osobním údajům nebo pravidlům Googlu.',
              'opravit do dvou týdnů',
            ],
            [
              '<strong>B – důležité</strong>',
              'Data mají mezery nebo zkreslení a omezují analýzu, hlavní čísla ale zůstávají použitelná.',
              'do jednoho až dvou měsíců',
            ],
            [
              '<strong>C – doporučení</strong>',
              'Údržba, přehlednost a rozvoj: názvosloví, BigQuery, dokumentace.',
              'podle kapacity',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Ukázka porovnání s administrací – fiktivní data od 1. do 30. září 2026.',
          head: ['Platební metoda', 'Objednávky v administraci', 'Nákupy v GA4', 'Rozdíl', 'Vysvětlení'],
          rows: [
            ['Karta přes platební bránu', '712', '598', '−16,0 %', '<strong>nález A1</strong> – návrat z brány'],
            ['Bankovní převod', '389', '377', '−3,1 %', 'očekávaný rozdíl – odmítnutý souhlas'],
            ['Dobírka', '150', '146', '−2,7 %', 'očekávaný rozdíl'],
            [
              '<strong>Celkem</strong>',
              '<strong>1 251</strong>',
              '<strong>1 121</strong>',
              '<strong>−10,4 %</strong>',
              'po opravě A1 odhad −3 %',
            ],
          ],
        },
      ],
    },
    {
      id: 'rychla-kontrola',
      eyebrow: 'kontrola zdarma',
      title: 'Rychlá kontrola zdarma, nebo celý audit?',
      lead: 'Nevíte, jestli audit potřebujete? Začněte rychlou kontrolou. Podíváme se na web zvenku, bez přístupů, a pošleme vám tři až pět nejvýraznějších nálezů.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Oblast', 'Rychlá kontrola zdarma', 'Audit měření'],
          rows: [
            [
              'Rozsah',
              'Web zvenku, bez přístupů',
              'GA4, GTM, souhlas, reklamní systémy, administrace nebo CRM',
            ],
            [
              'Co kontrolujeme',
              'Tagy a cookies před souhlasem, výchozí a aktualizovaný stav Consent Mode, duplicity GTM a Google tagu, e-commerce události na produktu a v košíku, reklamní pixely, hrubý dopad na rychlost',
              'Všechny oblasti A–F a k tomu testovací nákupy a formuláře',
            ],
            ['Co nekontrolujeme', 'Nákup, nastavení účtů, porovnání s administrací', '–'],
            [
              'Výstup',
              'E-mail nebo dvacetiminutový hovor, tři až pět nálezů',
              'Report s prioritami A, B a C, plán oprav, prezentace',
            ],
            ['Přístupy', 'Žádné, stačí adresa webu', 'Jen pro čtení'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Jak o rychlou kontrolu požádat',
          text: 'Ve formuláři níže vyplňte adresu webu a do zprávy napište „Rychlá kontrola měření“. Žádné přístupy, žádný závazek.',
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
          columns: 4,
          items: [
            {
              tag: 'audit-report.pdf',
              title: 'Report z auditu',
              text: 'Shrnutí, nálezy s důkazy, priorita a pracnost.',
            },
            {
              tag: 'remediation-plan.xlsx',
              title: 'Plán oprav',
              text: 'Pořadí, závislosti a kdo co opraví.',
            },
            {
              tag: 'reconciliation.xlsx',
              title: 'Porovnání čísel',
              text: 'GA4 vs. administrace nebo CRM vs. reklamní systémy.',
            },
            {
              tag: 'gtm-inventory.xlsx',
              title: 'Inventura GTM',
              text: 'Všechny tagy s doporučením ponechat, upravit, nebo smazat.',
            },
            {
              tag: 'qa-protocol.pdf',
              title: 'Protokol testů',
              text: 'Scénáře, výsledky a screenshoty.',
            },
            {
              tag: 'meeting',
              title: 'Šedesátiminutová prezentace',
              text: 'Nálezy projdeme s marketingem, vývojem a vedením.',
            },
            {
              tag: '+ fix',
              title: 'Volitelně opravy',
              text: 'Nálezy opravíme sami, nebo připravíme zadání pro vaše vývojáře.',
            },
          ],
        },
      ],
    },
    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Kroky auditu a co od vás potřebujeme',
      lead: 'Většinu práce uděláme sami. Od vás potřebujeme hlavně přístupy pro čtení, export objednávek nebo leadů a možnost testovacího nákupu.',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní hovor',
              text: 'Probereme cíle, systémy, známé problémy a období dat.',
            },
            {
              title: 'Přístupy a podklady',
              text: 'Pošlete pozvánky pro čtení a export objednávek nebo leadů. Společně domluvíme testovací objednávku.',
              fromClient: 'Přístupy a podklady podle tabulky níže',
            },
            {
              title: 'Analýza a testy',
              text: 'Zkontrolujeme oblasti A–F, projdeme testovací scénáře a porovnáme čísla.',
            },
            {
              title: 'Report',
              text: 'Sepíšeme nálezy, priority a plán oprav.',
              output: 'Report z auditu a plán oprav',
            },
            {
              title: 'Prezentace',
              text: 'Šedesát minut online s vaším týmem.',
            },
            {
              title: 'Volitelně opravy',
              text: 'Opravy implementujeme sami, nebo připravíme zadání pro vývojáře.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Přístupy a podklady',
          head: ['Systém', 'Co potřebujeme', 'Proč'],
          rows: [
            [
              'GA4',
              'Roli <strong>Čtenář</strong> na úrovni property',
              'Nastavení a data. Metriky tržeb neomezujte, potřebujeme je k porovnání.',
            ],
            [
              'Google Tag Manager',
              'Oprávnění <strong>Číst</strong> ke kontejneru, nebo export kontejneru',
              'Inventura tagů',
            ],
            ['Google Ads', 'Přístup <strong>Jen pro čtení</strong>', 'Konverzní akce, diagnostika consent mode'],
            [
              'Meta Business',
              'Přístup k datové sadě, tedy pixelu, v Events Manageru jen pro zobrazení',
              'Deduplikace, kvalita párování',
            ],
            ['Sklik a Seznam', 'Přístup k účtu jen pro čtení', 'Konverze, Seznam Event Measurement'],
            ['Search Console', 'Omezený uživatel', 'Kontrola propojení s GA4'],
            [
              'Cookie lišta, tedy CMP',
              'Přístup pro čtení do administrace, třeba v Cookiebotu, pokud CMP používáte',
              'Nastavení kategorií a signálů',
            ],
            [
              'Administrace e-shopu',
              '<strong>Export objednávek bez osobních údajů:</strong> číslo, datum a čas, hodnota s DPH i bez, doprava, platební metoda, stav',
              'Porovnání čísel',
            ],
            [
              'CRM u B2B',
              'Export leadů bez osobních údajů: ID, datum, zdroj, stav',
              'Porovnání formulářů a leadů',
            ],
            [
              'Testovací nákup',
              'Slevový kód na celou částku objednávky nebo testovací platební metodu a možnost storna',
              'Testovací scénáře',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Po auditu doporučujeme přístupy odebrat. NDA podepíšeme na požádání. Osobní údaje zákazníků k auditu nepotřebujeme.',
          ],
        },
      ],
    },
    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Na co se zaměříme u e-shopu, B2B a velké firmy',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'audit_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Nákupní trychtýř, platební brány, hodnota s DPH, nebo bez, srovnávače Heureka a Zboží.cz, Meta CAPI a deduplikace. Čísla porovnáme s administrací po platebních metodách.',
                'Více na stránce <a href="/reseni/e-shopy">Měření pro e-shopy</a>.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Formuláře, telefonáty a e-maily, předávání ID leadu a <code>gclid</code> do CRM, offline konverze. GA4 porovnáme s poptávkami v CRM.',
                'Více na stránce <a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>.',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Více domén a property, oprávnění a bývalí dodavatelé s přístupem, dokumentace, souhlas napříč weby, BigQuery. Audit poslouží jako podklad pro výběrové řízení nebo převzetí od agentury.',
                'Více na stránce <a href="/reseni/velke-firmy">Měření pro velké firmy</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co je audit měření a čím se liší od SEO auditu?',
      a: 'Audit měření kontroluje, zda data v GA4 a reklamních systémech odpovídají realitě: jestli web měří nákupy a poptávky jednou a správně, jestli tagy respektují souhlas návštěvníka a jestli čísla sedí s administrací. SEO audit řeší, jak web vidí vyhledávače – indexaci, obsah a rychlost. Technický stav webu řeší náš <a href="/sluzby/technicky-audit-webu">Technický audit webu</a>.',
    },
    {
      q: 'Kolik audit měření stojí a z čeho se skládá cena?',
      a: 'Cena se odvíjí od počtu systémů, jako jsou GA4, GTM, Google Ads, Meta, Sklik nebo srovnávače, dále od počtu webů a domén, typu webu – e-shop, B2B, aplikace – a od toho, zda chcete i porovnání s CRM. Po úvodním hovoru dostanete nabídku s pevným rozsahem. Rychlá kontrola zvenku je zdarma.',
    },
    {
      q: 'Jak dlouho audit trvá?',
      a: 'Záleží hlavně na tom, jak rychle se podaří zajistít přístupy, export objednávek a testovací nákup, a na počtu systémů a webů. Po analýze a testech následuje šedesátiminutová prezentace. U velkých firem s více weby a schvalováním přístupů počítejte s delší dobou. Délku odhadneme po úvodním hovoru, až budeme znát rozsah.',
    },
    {
      q: 'Jaké přístupy potřebujete a je to bezpečné?',
      a: 'Stačí přístupy pro čtení: role Čtenář v GA4, oprávnění Číst v Google Tag Manageru, přístup Jen pro čtení v Google Ads a obdobně v Metě a Skliku. Nic neměníme. Od e-shopu potřebujeme export objednávek <strong>bez osobních údajů zákazníků</strong>. Na požádání podepíšeme NDA. Po auditu doporučíme přístupy odebrat. Kompletní seznam najdete výše v tabulce „Přístupy a podklady“.',
    },
    {
      q: 'Co obsahuje rychlá kontrola zdarma a proč je zdarma?',
      a: 'Podíváme se na web zvenku, bez přístupů. Zjistíme, co stránka načte před souhlasem, jak funguje Consent Mode, jestli na webu neběží zdvojené Google tagy nebo kontejnery, jak měření zachytí produkt a košík a jaké reklamní pixely běží. Pošleme tři až pět nejvýraznějších nálezů. Zdarma je proto, že netestujeme nákup ani účty. Ukáže, jestli má smysl jít do hloubky. Kapacitu na rychlé kontroly máme omezenou.',
    },
    {
      q: 'Opravíte nalezené chyby?',
      a: 'Ano, pokud chcete. Report píšeme tak, aby podle něj mohl opravy udělat kdokoli: váš vývojář, agentura nebo my. Většinu nálezů v GTM, GA4 a consentu opravujeme sami. Úpravy datové vrstvy připravíme jako zadání pro vývojáře a jejich práci zkontrolujeme. Po opravách doporučujeme krátké ověření, že čísla sedí.',
    },
    {
      q: 'Posoudíte i právní stránku cookie lišty?',
      a: 'Ne. Nejsme advokátní kancelář. Ověřujeme technickou stránku: co web spustí před souhlasem a po něm a jestli tagy respektují volbu návštěvníka. Pro orientaci: § 89 odst. 3 zákona č. 127/2005 Sb. vyžaduje k ukládání údajů, které nejsou nezbytné pro poskytnutí služby, předchozí souhlas. Texty lišty a zásady by měl posoudit váš právník.',
    },
    {
      q: 'Co když nemáme GTM nebo máme jen integraci Shoptetu?',
      a: 'Nevadí. Audit pokryje měření v jakékoli podobě: kódy v šabloně, pluginy, integrace platformy i GTM. U platforem jako Shoptet nebo Upgates zkontrolujeme, co integrace skutečně posílá a jestli se nebije s dalším kódem. V reportu pak doporučíme, zda zůstat u integrace, nebo přejít na GTM s vlastní datovou vrstvou.',
    },
    {
      q: 'Jak velký rozdíl mezi GA4 a e-shopem je normální?',
      a: 'Pevné číslo neexistuje. Záleží na podílu návštěvníků, kteří odmítnou souhlas, na blokování měření v prohlížečích a na stornech. Důležitější než velikost rozdílu je, zda je stabilní a vysvětlitelný. Když se rozdíl liší podle platební metody nebo prohlížeče, jde téměř jistě o chybu. Proto v auditu porovnáváme čísla v rozpadu podle těchto dimenzí.',
    },
    {
      q: 'Jak často audit opakovat?',
      a: 'Doporučujeme po každé větší změně: redesign, nová platforma, nová cookie lišta, změna agentury, nasazení server-side. Bez změn jednou ročně, protože Google, Meta i Seznam své platformy průběžně mění. Průběžnou kontrolu bez opakovaných auditů řeší <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a> s monitoringem klíčových událostí.',
    },
    {
      q: 'Uděláte audit jako nezávislé ověření dodavatele?',
      a: 'Ano. Audit často slouží jako nezávislý pohled na práci agentury nebo dodavatele webu, při předávání zakázky nebo jako podklad pro výběrové řízení. Report píšeme věcně: nález, důkaz, dopad, doporučení. Poslouží i při jednání s dodavatelem. Pokud chcete, výsledky s dodavatelem rovnou projdeme.',
    },
    {
      q: 'Čím se audit měření liší od auditu GTM?',
      a: 'Audit GTM se zaměřuje jen na kontejner: tagy, spouštěče, názvosloví, verze, oprávnění a výkon. Audit měření je širší. Kromě GTM prověří GA4, souhlas, konverze v reklamních systémech a hlavně porovná data s administrací nebo CRM. Pokud víte, že problém je jen v kontejneru, stačí <a href="/sluzby/google-tag-manager">audit GTM</a>.',
    },
  ],

  relatedArticles: [
    { slug: 'co-obsahuje-audit-mereni', title: 'Co má obsahovat audit měření' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla v GA4, Ads a e-shopu' },
    { slug: 'ga4-checklist-kvality-dat', title: 'Checklist kvality dat v GA4: 25 kontrol' },
    { slug: 'odmitnuti-cookies-dopad-na-data', title: 'Odmítnutí cookies a dopad na data' },
    { slug: 'jak-vybrat-dodavatele-mereni', title: 'Jak vybrat dodavatele měření' },
  ],

  relatedPages: ['sluzby/implementace-ga4', 'sluzby/mereni-konverzi', 'sluzby/sprava-webu-a-mereni'],

  contact: {
    formId: 'lp-audit',
    topics: ['audit'],
    title: 'Zjistěte, kde utíkají data',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Pošlete adresu webu a krátce popište, co nesedí. Ozveme se s návrhem rozsahu, nebo rovnou s výsledkem rychlé kontroly.',
    placeholder: 'Např. nevěříme číslům v GA4 a chceme vědět, kde je chyba…',
    leadType: 'audit',
  },

  schema: {
    name: 'Audit měření',
    serviceType: 'Audit webové analytiky a měření konverzí',
    description:
      'Nezávislá kontrola GA4, Google Tag Manageru, souhlasu návštěvníků v Consent Mode v2 a konverzí v Google Ads, Meta a Skliku, kterou porovnáme s administrací e-shopu nebo CRM. Výsledek tvoří report s nálezy podle priority A, B a C a plán oprav.',
    audience: 'E-shopy, B2B firmy, velké firmy',
  },
};
