import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/05_cookie-lista-consent-mode.md (návrh v1, 8. října 2026).
// Dokud klient nedodá podklady, stránka neobsahuje: počet auditů v trust baru,
// statistiky z auditů, případovou studii (MiniCase), délky kroků a délku prezentace
// výsledků, partnerskou advokátní kancelář, zmínku o annanovotna.cz a datalayer.cz
// jako referenční liště, partnerství s CMP, sloty na hovor ve formuláři a odkaz
// na nástroj Kontrola consentu, který zatím neexistuje.

export const page: LandingPageContent = {
  path: 'sluzby/cookie-lista-consent-mode',
  kind: 'service',
  navTitle: 'Cookie lišta a Consent Mode v2',
  tagline: 'souhlas legálně a bez ztráty dat',
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
      'Vybereme a nastavíme cookie lištu, propojíme ji s Google Consent Mode v2 a se všemi tagy v Google Tag Manageru. Pak ověříme, co web opravdu posílá před souhlasem a po něm – a vysvětlíme, co to znamená pro vaše data.',
    quickAnswer:
      'Cookie lišta sbírá souhlas návštěvníka, Consent Mode v2 ho předává značkám Googlu a Google Tag Manager podle něj spouští ostatní tagy, třeba Metu, Sklik nebo TikTok. Nestačí, že web lištu zobrazí – tagy musí souhlas skutečně respektovat od prvního načtení stránky. Když advanced režim nastavíte správně, umožní navíc Googlu část chybějících konverzí modelovat.',
    primaryCta: { label: 'Zkontrolovat můj web', href: '#kontakt' },
    secondaryCta: { label: 'Co web posílá před souhlasem', href: '#overeni' },
    microcopy: 'Nejsme advokátní kancelář – řešíme technické nastavení a jeho ověření. S vaším právníkem rádi spolupracujeme.',
  },

  trust: [
    'Nastavení podle zákona o elektronických komunikacích a Q&A ÚOOÚ',
    'Cookiebot, CookieYes, české CMP i vlastní lišta',
    'Dostanete záznam HAR, co web posílá – ne jen „máte to dobře“',
  ],

  sections: [
    {
      id: 'namitka',
      eyebrow: 'námitka',
      title: '„Cookie lištu přece máme.“ Proč to nestačí',
      lead: 'To, že web lištu zobrazuje, ještě neznamená, že tagy souhlas respektují.',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'V auditech nejčastěji nacházíme weby, kde lišta naskočí správně, ale Meta Pixel, Sklik nebo chatovací widget běží ještě před kliknutím – nebo naopak po přijetí čekají až na další stránku.',
            'Google navíc ve svých zásadách výslovně uvádí, že ani certifikovaná platforma pro správu souhlasů, tedy CMP, sama o sobě soulad nezaručuje. Rozhoduje, jak ji nasadíte.',
          ],
        },
      ],
    },

    {
      id: 'kategorie',
      eyebrow: 'kategorie A–E',
      title: 'Do které kategorie patří váš web?',
      lead: 'Problémy se souhlasem se opakují. Rozdělujeme je do pěti kategorií – každá má jiné riziko a jinou opravu.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'kategorie A',
              title: 'Lišta chybí nebo jen informuje',
              text: '<strong>Jak to poznáte:</strong> žádná volba, nebo jen „Rozumím“ či „OK“.<br><strong>Riziko:</strong> web ukládá netechnické cookies bez souhlasu, který vyžaduje § 89 odst. 3 ZEK; Google může omezit remarketing a měření konverzí.<br><strong>Co uděláme:</strong> výběr CMP nebo vlastní lišta, kategorie, Consent Mode v2 a napojení tagů.',
            },
            {
              tag: 'kategorie B',
              title: 'Lišta je, tagy běží bez ohledu na ni',
              text: '<strong>Jak to poznáte:</strong> po odmítnutí najdete v síti požadavky na Metu, Sklik, TikTok nebo Hotjar.<br><strong>Riziko:</strong> stejné jako u A, jen méně viditelné, a k tomu falešný pocit bezpečí.<br><strong>Co uděláme:</strong> inventura tagů včetně kódů mimo GTM, podmínění souhlasem a test.',
            },
            {
              tag: 'kategorie C',
              title: 'Consent Mode máte, ale startuje pozdě',
              text: '<strong>Jak to poznáte:</strong> web nastavuje výchozí stav až po načtení GTM, chybí <code>ad_user_data</code> a <code>ad_personalization</code>, v GA4 roste „Unassigned“.<br><strong>Riziko:</strong> značky Googlu se chovají, jako by Consent Mode neexistoval, a mizí zdroj návštěvy.<br><strong>Co uděláme:</strong> výchozí stav před GTM, <code>wait_for_update</code>, správné signály a kontrola v Tag Assistantu.',
            },
            {
              tag: 'kategorie D',
              title: 'Příliš přísně – data mizí zbytečně',
              text: '<strong>Jak to poznáte:</strong> GTM spustí tagy až na další stránce, basic režim běží bez rozhodnutí, po přijetí neodejde nic.<br><strong>Riziko:</strong> chybějící konverze a remarketingová publika u lidí, kteří souhlasili.<br><strong>Co uděláme:</strong> spouštění na událost aktualizace souhlasu, posouzení advanced režimu a <code>url_passthrough</code>.',
            },
            {
              tag: 'kategorie E',
              title: 'Vzhled a texty v rozporu s doporučením ÚOOÚ',
              text: '<strong>Jak to poznáte:</strong> v první vrstvě chybí „Odmítnout“, tlačítka nejsou rovnocenná, lišta má předem zaškrtnuté kategorie a v patičce chybí změna volby.<br><strong>Riziko:</strong> neplatný souhlas a hrozba sankce.<br><strong>Co uděláme:</strong> úprava lišty a textů, které schvaluje váš právník, a odkaz „Nastavení cookies“.',
            },
          ],
        },
      ],
    },

    {
      id: 'co-udelame',
      eyebrow: 'řešení',
      title: 'Co pro vás uděláme',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Inventura.</strong> Projdeme všechny cookies, tagy a skripty, i ty mimo GTM: v šabloně, pluginech, platformě, iframech, chatu nebo videu.',
            '<strong>Výběr nebo kontrola lišty.</strong> Doporučíme CMP, nebo navrhneme vlastní lištu ve vašem designu. U existující lišty zkontrolujeme nastavení.',
            '<strong>Kategorie a texty.</strong> Přiřadíme cookies ke kategoriím – nezbytné, analytické, marketingové, případně preferenční – a připravíme technické podklady pro texty. Finální znění schvaluje váš právník.',
            '<strong>Consent Mode v2.</strong> Výchozí stav před načtením značek, aktualizace po volbě, všechny čtyři signály a rozhodnutí basic, nebo advanced.',
            '<strong>Napojení všech tagů v GTM.</strong> Značky Googlu přes vestavěné kontroly souhlasu, ostatní – Meta, Sklik, TikTok, Hotjar, Clarity, LinkedIn – přes podmínky souhlasu a spouštění hned po volbě.',
            '<strong>Server-side a backend.</strong> Pokud máte <a href="/sluzby/server-side-tracking">server-side GTM</a> nebo posíláte konverze z backendu, předáme stav souhlasu i tam.',
            '<strong>Ověření.</strong> Testovací protokol s osmi scénáři, záznam síťových požadavků, kontrola v Tag Assistantu a v diagnostice platforem.',
            '<strong>Dokumentace a hlídání.</strong> Matice tagů a souhlasů, popis verzí GTM a volitelně pravidelná kontrola v rámci <a href="/sluzby/sprava-webu-a-mereni">správy měření</a>.',
          ],
        },
      ],
    },

    {
      id: 'tok-souhlasu',
      eyebrow: 'tok souhlasu',
      title: 'Jak souhlas putuje od lišty k tagům',
      lead: 'Pořadí je klíčové. Výchozí stav souhlasu musí platit dřív, než prohlížeč načte jakoukoli značku – jinak se značky Googlu chovají, jako by Consent Mode neexistoval.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Tok souhlasu: výchozí stav denied platí ještě před načtením GTM. Značky Googlu v advanced režimu posílají jen pingy bez cookies a ostatní tagy čekají. Po volbě v liště přijde aktualizace souhlasu a událost cookie_consent_update. Při souhlasu GTM spustí plné měření Googlu a tagy s udělenou kategorií, při odmítnutí ostatní tagy dál nic neposílají a Google dostává v advanced režimu jen pingy bez cookies, v basic režimu nic.',
          columns: [
            {
              label: 'Před GTM',
              items: ['<code>consent default</code>: denied pro všechny signály'],
              note: 'musí proběhnout jako první',
            },
            {
              label: 'Načtení GTM',
              items: ['značky Googlu: v advanced režimu jen ping bez cookies, v basic nic', 'Meta, Sklik, TikTok: čekají na souhlas'],
            },
            { label: 'Volba v liště', items: ['web zobrazí lištu', 'návštěvník přijme, nebo odmítne'] },
            {
              label: 'Po volbě',
              items: [
                '<code>consent update</code> a událost <code>cookie_consent_update</code>',
                'souhlas: plné měření Googlu a tagy s udělenou kategorií',
                'odmítnutí: ostatní tagy dál nic neposílají',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'basic-vs-advanced',
      eyebrow: 'consent mode v2',
      title: 'Consent Mode v2: basic, nebo advanced?',
      lead: 'Consent Mode má dva režimy implementace. Liší se tím, co se stane, než návštěvník klikne – a tím, jak dobře pak Google umí chybějící konverze modelovat.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Basic a advanced režim Consent Mode v2',
          head: ['Kritérium', 'Basic', 'Advanced'],
          rows: [
            ['Načtení značek Googlu před volbou', 'Ne – značky čekají na souhlas', 'Ano – s výchozím stavem „denied“'],
            [
              'Co odchází při odmítnutí',
              'Nic, ani informace o odmítnutí',
              'Pingy bez cookies: časové razítko, user agent, referrer, informace o prokliku z reklamy v URL, třeba GCLID, stav souhlasu, náhodné číslo stránky a identifikátor CMP',
            ],
            ['Cookies bez souhlasu', 'Ne', 'Ne'],
            ['Modelování konverzí v Google Ads', 'Obecný model', 'Model specifický pro inzerenta'],
            ['Modelování chování v GA4', 'Ne', 'Ano, pokud web splní prahy – viz dopad na data níže'],
            ['Náročnost', 'Nižší', 'Vyšší – pořadí, testování'],
            [
              'Právní posouzení',
              'Konzervativní varianta',
              'I pingy bez cookies přenášejí údaje z prohlížeče, rozhodnutí proto doporučujeme udělat s právníkem nebo DPO',
            ],
            [
              'Kdy zvolit',
              'Přísný právní výklad, regulované obory, malá návštěvnost, u které Google modelování stejně nespustí',
              'Inzerujete v Google Ads, máte dost návštěvnosti a právník souhlasí s přenosem pingů',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Technické doporučení vám dáme, rozhodnutí basic, nebo advanced je ale i právní otázka. Evropský sbor pro ochranu osobních údajů v pokynech 2/2023 řadí pod pravidlo souhlasu i některé techniky bez cookies, a proto tohle rozhodnutí nepodceňujeme.',
          ],
        },
        {
          type: 'table',
          caption: 'Signály Consent Mode v2 a jak je mapujeme na lištu',
          head: ['Signál', 'Co řídí podle Googlu', 'Kategorie v liště', 'Výchozí stav pro web v ČR'],
          rows: [
            ['<code>ad_storage</code>', 'Ukládání reklamních cookies a identifikátorů', 'Marketingové', 'denied'],
            ['<code>ad_user_data</code>', 'Odesílání údajů o uživateli Googlu pro reklamu, třeba u rozšířených konverzí', 'Marketingové', 'denied'],
            ['<code>ad_personalization</code>', 'Personalizovanou reklamu, tedy remarketing', 'Marketingové', 'denied'],
            ['<code>analytics_storage</code>', 'Analytické cookies, třeba pro délku návštěvy', 'Analytické', 'denied'],
            ['<code>functionality_storage</code>', 'Úložiště pro funkce webu, třeba jazyk', 'Nezbytné nebo preferenční', 'granted, jen pokud je skutečně nezbytné'],
            ['<code>personalization_storage</code>', 'Personalizaci obsahu, třeba doporučení', 'Preferenční', 'denied'],
            ['<code>security_storage</code>', 'Bezpečnost, autentizaci a prevenci podvodů', 'Nezbytné', 'granted'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Co se změnilo v roce 2026',
          text: 'Od 15. června 2026 používá Google Analytics u účtů propojených s Google Ads jako jediné řízení reklamních dat Consent Mode – nastavení Google Signals už reklamní data neřídí. Signál <code>ad_personalization</code> má později v roce 2026 výhradně řídit využití propojených dat GA4 pro personalizaci reklam; přesné datum Google zatím neoznámil. Na správném nastavení signálů v liště proto záleží ještě víc. Stav k říjnu 2026.',
        },
      ],
    },

    {
      id: 'jakou-listu',
      eyebrow: 'cmp',
      title: 'Jakou cookie lištu zvolit: Cookiebot, česká CMP, nebo vlastní lišta?',
      lead: 'Neprodáváme žádnou CMP a nastavíme kteroukoli. Vybíráme podle toho, kolik máte domén a jazyků, jestli zobrazujete reklamu třetích stran a kdo bude lištu spravovat.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Srovnání variant cookie lišty',
          head: [
            'Kritérium',
            'Zahraniční CMP: Cookiebot, CookieYes, Usercentrics',
            'Česká CMP: Cookies správně, Consentio',
            'Vlastní lišta na míru',
            'Lišta e-shopové platformy, třeba Shoptetu',
          ],
          rows: [
            ['Náklady', 'Licence podle počtu stránek nebo domén', 'Nižší licence, fakturace v Kč', 'Jednorázový vývoj, bez licence', 'V ceně platformy'],
            ['Automatický sken cookies', 'Ano', 'Ano', 'Ne – inventuru děláme ručně a hlídáme ve správě', 'Omezeně'],
            [
              'Záznam souhlasů pro doložitelnost',
              'Ano',
              'Ano',
              'Musíme doplnit, třeba serverový záznam volby bez osobních údajů',
              'Podle platformy',
            ],
            ['IAB TCF a certifikace Google', 'Obvykle ano', 'Podle poskytovatele, ověřujeme', 'Ne', 'Podle platformy'],
            ['Consent Mode v2', 'Ano, šablona GTM', 'Ano, šablona GTM', 'Ano, napíšeme ho', 'Často ano – ověřujeme tagy mimo platformu'],
            ['Design a rychlost', 'Omezené přizpůsobení, skript třetí strany', 'Lepší přizpůsobení', 'Plně ve vašem designu, minimum kódu', 'Podle šablony'],
            ['Jazyky a víc domén', 'Silné', 'Dobré', 'Podle rozsahu vývoje', 'Podle platformy'],
            [
              'Kdy ji volíme',
              'Velké firmy, víc zemí a domén, vydavatelé s reklamou Googlu – AdSense a Ad Manager vyžadují certifikovanou CMP s TCF',
              'Malé a střední české weby a e-shopy',
              'Firmy s vlastním vývojem, důraz na design a výkon, bez reklamy třetích stran',
              'E-shop na platformě bez vlastních úprav',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Vlastní lištu stavíme podle stejného vzoru: výchozí stav „denied“ před načtením GTM, 500 ms čekání na aktualizaci a přečtení uložené volby ještě před GTM, takže vracejícího se návštěvníka měříte hned. K tomu událost do datové vrstvy, odkaz „Nastavení cookies“ v patičce a rovnocenná tlačítka.',
            'Certifikovanou CMP s TCF vyžaduje Google od vydavatelů, kteří používají AdSense, Ad Manager nebo AdMob – v EHP a ve Spojeném království od 16. ledna 2024, ve Švýcarsku od 31. července 2024. Pro inzerenty v Google Ads tato povinnost neplatí.',
          ],
        },
      ],
    },

    {
      id: 'napojeni-gtm',
      eyebrow: 'gtm',
      title: 'Napojení na Google Tag Manager: aby každý tag věděl, co smí',
      lead: 'Souhlas z lišty musí dorazit ke každému tagu v <a href="/sluzby/google-tag-manager">Google Tag Manageru</a>. Takhle to nastavujeme.',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Výchozí stav souhlasu nastavujeme <strong>před</strong> načtením GTM, nebo spouštěčem <em>Consent Initialization – All Pages</em>, který běží před všemi ostatními tagy.',
            'Značky Googlu mají vestavěné kontroly souhlasu a podle signálů samy upraví chování.',
            'Ostatní tagy – Meta, Sklik, TikTok, LinkedIn, Hotjar, Clarity – Consent Mode samy nečtou. Nastavujeme jim <em>dodatečný požadavek na souhlas</em> a spouštění na událost aktualizace souhlasu, aby po kliknutí na „Přijmout“ naběhly hned, ne až na další stránce.',
            'V kontejneru zapínáme přehled souhlasů <em>Consent Overview</em>, aby u každého tagu bylo vidět, na čem závisí.',
            'Pokud používáte víc kontejnerů nebo server-side GTM, inicializujeme souhlas v každém z nich.',
          ],
        },
        {
          type: 'code',
          lang: 'html',
          caption: 'Výchozí stav – musí být před GTM',
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
            '<code>wait_for_update</code> dává liště čas poslat uloženou volbu dřív, než značky odešlou data. <code>ads_data_redaction</code> při odmítnutí reklamních cookies redukuje identifikátory prokliku v požadavcích. <code>url_passthrough</code> přenáší informace o prokliku v URL, když návštěvník cookies odmítl – i to je rozhodnutí, které doporučujeme probrat s právníkem.',
          ],
        },
      ],
    },

    {
      id: 'overeni',
      eyebrow: 'ověření',
      title: 'Co váš web posílá před souhlasem a jak to ověřujeme',
      lead: 'Ověření je jádro naší práce. Každé nastavení projdeme podle stejného protokolu a výsledek dostanete jako záznam síťových požadavků ve formátu HAR a screenshoty – ne jen jako „máte to dobře“.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'ilustrační ukázka',
              title: 'Před souhlasem',
              text: 'Odchází jen ping Googlu bez cookies. Skripty Mety, Skliku a TikToku čekají na souhlas.',
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
              text: 'GTM spustí tagy s udělenou kategorií a Google měří s cookies. V auditu dostanete skutečný záznam z vašeho webu.',
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
          type: 'table',
          caption: 'Testovací protokol: osm scénářů',
          head: ['Scénář', 'Co kontrolujeme', 'Nástroj', 'Očekávaný výsledek'],
          rows: [
            [
              'První návštěva bez kliknutí',
              'Cookies a požadavky před volbou',
              'DevTools: Síť a Aplikace, čistý profil',
              'Jen technické cookies; od Googlu nanejvýš pingy bez cookies v advanced režimu; od ostatních nic',
            ],
            ['Odmítnout vše', 'Že nic nenaběhne ani po přechodu na další stránku', 'DevTools, GTM Preview', 'Stav denied trvá, marketingové tagy neběží'],
            ['Přijmout vše', 'Že tagy naběhnou <strong>hned</strong> po kliknutí', 'GTM Preview, Tag Assistant se záložkou Consent', 'Update na granted, tagy běží na stejné stránce'],
            ['Jen analytické', 'Oddělení kategorií', 'Tag Assistant, Meta Pixel Helper', 'GA4 měří, reklamní tagy ne'],
            ['Změna volby v patičce', 'Odvolání je stejně snadné a tagy přestanou', 'DevTools', 'Po odvolání žádné nové marketingové požadavky'],
            ['Návrat druhý den', 'Web načte uloženou volbu dřív než značky', 'DevTools', 'Lišta „nebliká“, měření běží od první stránky'],
            [
              'Příchod z reklamy s <code>gclid</code>, <code>fbclid</code> nebo <code>utm_*</code>',
              'Zdroj návštěvy zůstane, žádné „Unassigned“',
              'GA4 DebugView, Tag Assistant',
              'GA4 zachytí zdroj po souhlasu',
            ],
            [
              'Mobil, Safari a podstránky mimo šablonu: košík, blog, platební brána',
              'Konzistence napříč webem',
              'Reálné zařízení, vzdálené ladění',
              'Stejné chování všude',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'V požadavcích Googlu najdete stav souhlasu v parametru <code>gcs</code>: <code>G100</code> znamená odmítnuté reklamní i analytické úložiště, <code>G111</code> povolené. Google tento parametr oficiálně nedokumentuje, proto výsledek vždy potvrzujeme v Tag Assistantu.',
          ],
        },
      ],
    },

    {
      id: 'dopad-na-data',
      eyebrow: 'dopad na data',
      title: 'Co souhlas udělá s daty',
      lead: 'Po nasazení správné lišty uvidíte v nástrojích méně dat než předtím – dřív totiž nástroje měřily i lidi, kteří souhlas nedali. Důležité je vědět, kolik chybí a co z toho Google umí dopočítat.',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            '<strong>GA4</strong> při odmítnutí neukládá cookies. V advanced režimu může chování nesouhlasících návštěvníků modelovat, pokud web splní prahy: zhruba tisíc událostí denně s odmítnutým <code>analytics_storage</code> aspoň sedm dní a zhruba tisíc uživatelů denně se souhlasem aspoň sedm z posledních 28 dní. Ani splnění prahů modelování nezaručuje.',
            '<strong>Google Ads</strong> ukazuje modelované konverze přímo ve sloupci Konverze. Mezi podmínky patří 700 prokliků z reklam za sedm dní v rámci země a skupiny domén. Basic režim používá obecný model, advanced model specifický pro váš účet.',
            '<strong>Meta, Sklik, TikTok a LinkedIn</strong> bez souhlasu neměří a chybějící data na webu nenahradí žádné modelování srovnatelné s Googlem. U nich proto záleží hlavně na kvalitě měření u lidí, kteří souhlasili: Conversions API, Seznam Event Measurement, správné parametry.',
            '<strong>Podíl souhlasů</strong> sledujeme agregovaně ze statistik CMP. Náhlá změna často znamená chybu lišty, ne změnu chování lidí.',
          ],
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Proč po nasazení lišty spadly konverze v Google Ads',
          items: [
            'Nízký podíl souhlasů na mobilu.',
            'Basic režim bez modelování.',
            'Tagy naběhnou až po znovunačtení stránky.',
            'Výchozí stav až po GTM, takže mizí <code>gclid</code> a zdroj návštěvy.',
            'Chybějící <code>ad_user_data</code> blokuje rozšířené konverze.',
            'GTM nespouští Sklik nebo Metu po aktualizaci souhlasu.',
          ],
        },
      ],
    },

    {
      id: 'sklik-a-seznam',
      eyebrow: 'sklik · sem',
      title: 'Sklik a Seznam: jak předat souhlas',
      lead: 'Seznam přechází na Seznam Event Measurement, zkráceně SEM: jeden skript nahrazuje dřívější retargetingový a konverzní kód Skliku i měření pro Seznam Nákupy, dřívější Zboží.cz. SEM je zatím v betě. Seznam ukončí podporu původních kódů v průběhu roku 2027 a přesný termín oznámí s předstihem.',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'SEM přednostně čte souhlas z rámce <strong>IAB TCF</strong>, pokud ho lišta podporuje.',
            `Bez TCF dostane SEM souhlas ve formátu <strong>Google Consent Mode</strong> přes <code>SEM('updateConsent', …)</code> – při načtení stránky i po volbě v liště. Výchozí stav nastavujeme ještě před zobrazením lišty.`,
            'Cookies <code>sid</code> a <code>udid</code>, na kterých měření stojí, vznikají <strong>až po souhlasu <code>ad_storage</code></strong>. Hashované identifikátory závisí na <code>ad_user_data</code>, retargeting na <code>ad_personalization</code>.',
            'Seznam doporučuje pořadí: souhlas, uživatelská data, <code>PageView</code>.',
            'U starých kódů Skliku hlídáme parametr souhlasu přímo v požadavku, v DevTools s filtrem „conv“.',
            'Heureka u nového měřicího skriptu uvádí, že si souhlas hlídá sám – v auditu to ověřujeme v síťových požadavcích.',
          ],
        },
        {
          type: 'paragraphs',
          items: ['Konverze pro Sklik a Seznam Nákupy řešíme v rámci služby <a href="/sluzby/mereni-konverzi">Měření konverzí</a>.'],
        },
      ],
    },

    {
      id: 'pravni-ramec',
      eyebrow: 'právní rámec',
      title: 'Co říká zákon, ÚOOÚ a Google',
      lead: 'Technické nastavení stavíme na těchto pravidlech. Nejde o právní radu – odkazujeme na zdroje, ať si je může váš právník ověřit.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Pravidla pro cookie lištu a jejich zdroje',
          head: ['Požadavek', 'Zdroj'],
          rows: [
            [
              'K ukládání údajů do zařízení návštěvníka a k přístupu k nim potřebujete <strong>předem prokazatelný souhlas</strong>. Výjimku má technicky nezbytné ukládání pro přenos zprávy nebo pro službu, kterou si uživatel výslovně vyžádal. Pravidlo platí od 1. ledna 2022, zavedla ho novela č. 374/2021 Sb.',
              '§ 89 odst. 3 zákona č. 127/2005 Sb.',
            ],
            [
              'Netechnické cookies pro měření návštěvnosti, preference a marketing jen se souhlasem. Souhlas podle ZEK je potřeba odlišit od právního titulu podle GDPR pro následné zpracování.',
              'Q&A ÚOOÚ – Cookies',
            ],
            [
              'Možnost <strong>odmítnout v první vrstvě</strong>, <strong>stejně viditelná</strong> tlačítka, žádná předzaškrtnutá políčka, žádná cookie wall.',
              'Q&A ÚOOÚ',
            ],
            ['Zavření lišty ani nastavení prohlížeče <strong>není souhlas</strong>. Odvolání musí být stejně snadné jako udělení.', 'Q&A ÚOOÚ'],
            [
              'Přiměřená platnost souhlasu je <strong>dvanáct měsíců</strong>. Po odmítnutí se web smí znovu zeptat nejdřív za <strong>šest měsíců</strong>, dřív jen při významné změně.',
              'Q&A ÚOOÚ',
            ],
            ['Správce musí souhlas umět <strong>prokázat</strong>.', 'Q&A ÚOOÚ, čl. 7 GDPR'],
            ['Pravidla platí i pro technologie podobné cookies, třeba místní úložiště, a pro <strong>fingerprinting</strong>.', 'Q&A ÚOOÚ'],
            [
              'Pro Google: platný souhlas s cookies a s personalizací reklam u uživatelů z EHP, Spojeného království a Švýcarska, uchovávání záznamů, zmínka o <strong>personalizaci reklam v první vrstvě</strong> a odkaz na stránku Googlu o odpovědnosti za data firem.',
              'Zásady Google pro souhlas uživatele z EU',
            ],
            [
              'Ani certifikovaná CMP sama o sobě nezaručuje soulad se zásadami Googlu. Při nesouladu může Google pozastavit publika, personalizaci reklam i měření konverzí.',
              'Nápověda k zásadám Google',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Sankce',
          text: 'ÚOOÚ od roku 2022 nejdřív vyzýval k nápravě. V roce 2023 oznámil pokuty za cookies v celkové výši 4 443 000 Kč, z toho 1 640 000 Kč pravomocně – podle tiskové zprávy ÚOOÚ z 2. srpna 2023.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Nejsme advokátní kancelář',
          text: 'Technické nastavení děláme podle zákona o elektronických komunikacích, doporučení ÚOOÚ a pravidel Googlu. Právní posouzení – texty lišty, zásady cookies, právní titul pro další zpracování – patří vašemu právníkovi nebo pověřenci. Rádi s ním spolupracujeme a dodáme mu technické podklady.',
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      lead: 'Službu nabízíme ve dvou variantách. Audit se hodí, když lištu máte. Nastavení na klíč, když ji teprve zavádíte nebo ji chcete vyměnit.',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'check',
          title: 'Audit souhlasu',
          items: [
            'Inventura cookies, tagů a skriptů včetně kódů mimo GTM',
            'Testovací protokol s osmi scénáři, záznamem HAR a screenshoty',
            'Zařazení nálezů do kategorií A–E s prioritou',
            'Kontrola Consent Mode v2: pořadí, signály, režim',
            'Kontrola Skliku a SEM, Mety, TikToku, Heureky a dalších',
            'Seznam oprav pro vývojáře nebo správce GTM',
            'Odhad dopadu na data',
            'Prezentace výsledků',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Nastavení na klíč',
          items: [
            'Vše z auditu',
            'Výběr CMP nebo návrh vlastní lišty ve vašem designu',
            'Kategorie, technické podklady pro texty a zásady cookies',
            'Consent Mode v2 v režimu basic, nebo advanced podle rozhodnutí s právníkem',
            'Napojení všech tagů v GTM a spouštění po aktualizaci souhlasu',
            'Předání souhlasu do server-side GTM a backendu, pokud je máte',
            'Matice tagů a souhlasů, popis verzí GTM',
            'Opakovaný test po nasazení a předání',
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak to probíhá',
      lead: 'Spolupráce má pět kroků. Nejvíc času obvykle zabere rozhodnutí o textech a režimu s právníkem.',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní hovor',
              text: 'Projdeme web, platformy, reklamní kanály a stávající lištu.',
              fromClient: 'Adresa webu a seznam nástrojů, které používáte',
            },
            { title: 'Audit', text: 'Inventura a testovací protokol.', fromClient: 'Přístup pro čtení do GTM a CMP' },
            {
              title: 'Rozhodnutí',
              text: 'S vaším právníkem vybereme režim basic, nebo advanced, CMP a texty.',
              fromClient: 'Kontakt na právníka nebo DPO',
            },
            {
              title: 'Nastavení',
              text: 'Lišta, Consent Mode, tagy v GTM, Sklik a SEM, případně server-side.',
              fromClient: 'Přístupy pro úpravy do GTM a CMP, případně vývojář',
            },
            { title: 'Ověření a předání', text: 'Opakovaný protokol, dokumentace a předání.', fromClient: 'Účast na předání' },
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
                'U e-shopu rozhoduje hlavně Google Ads, Meta, Sklik a Heureka. Hlídáme, aby tagy po souhlasu naběhly hned na stránce, kde návštěvník klikl, a aby zdroj návštěvy z reklamy nezmizel do „Unassigned“. Shoptet, Upgates i další platformy mají vlastní lišty nebo doplňky – ověříme, jak spolupracují s vaším GTM a se skripty mimo platformu.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B / lead-gen',
              paragraphs: [
                'B2B weby mívají méně návštěv, takže modelování Googlu často nemá dost dat. O to důležitější je čisté měření u lidí, kteří souhlasí, a správné napojení formulářů, LinkedIn Insight Tagu a chatovacích nástrojů, které často běží bez souhlasu.',
              ],
            },
            {
              id: 'enterprise',
              label: 'Velká firma',
              paragraphs: [
                'Velké firmy potřebují souhlas konzistentně na víc doménách a v několika jazycích, s doložitelností a dokumentací pro DPO. Pomůžeme vybrat CMP, často s TCF, nastavit stejná pravidla všude a dodat technický audit jako podklad k právnímu posouzení.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Je cookie lišta povinná?',
      a: 'Pokud web používá jen technické cookies nezbytné pro provoz, třeba pro košík, přihlášení nebo uložení volby, lištu se souhlasem nepotřebuje – informační povinnost o zpracování ale trvá. Jakmile používáte analytiku, reklamní pixely, remarketing nebo podobné nástroje, potřebujete podle § 89 odst. 3 zákona o elektronických komunikacích předchozí prokazatelný souhlas, a tedy lištu, ve které návštěvník souhlas udělí i odmítne. Výjimka pro malé weby neexistuje.',
    },
    {
      q: 'Je Google Consent Mode v2 povinný?',
      a: 'Zákon Consent Mode nevyžaduje – vyžaduje souhlas. Consent Mode v2 je způsob, jak souhlas předat značkám Googlu, a Google ho fakticky vyžaduje po inzerentech, kteří chtějí u uživatelů z EHP využívat měření konverzí a personalizaci reklam. Od března 2024 bez signálů souhlasu přicházíte o remarketingová publika z EHP a při nesouladu se zásadami může Google omezit i měření konverzí. Pokud Google Ads nepoužíváte, je Consent Mode méně kritický, pro GA4 ho ale doporučujeme také.',
    },
    {
      q: 'Jaký je rozdíl mezi basic a advanced consent mode?',
      a: 'V basic režimu prohlížeč načte značky Googlu až po souhlasu a do té doby neodchází nic. V advanced režimu je načte hned s výchozím stavem „odmítnuto“ a značky bez souhlasu posílají pingy bez cookies – s časovým razítkem, user agentem, referrerem, informací o prokliku z reklamy a stavem souhlasu. Advanced umožňuje přesnější modelování konverzí, jde ale o přenos údajů i bez souhlasu. Proto volbu doporučujeme udělat s vaším právníkem.',
    },
    {
      q: 'Jak zkontroluji, co web posílá před souhlasem?',
      a: 'Otevřete web v anonymním okně, v nástrojích pro vývojáře, které otevře klávesa F12, přejděte na záložku Síť a nic neklikejte. Projděte požadavky: neměly by tam být požadavky na Metu, TikTok, Sklik ani analytické nástroje třetích stran, od Googlu nanejvýš pingy bez cookies v advanced režimu. Pak zkontrolujte záložku Aplikace → Cookies. Spolehlivější je Tag Assistant se záložkou Consent. V auditu to děláme v osmi scénářích a výsledek dostanete jako záznam.',
    },
    {
      q: 'Co se stane s daty, když návštěvník cookies odmítne?',
      a: 'Analytické a reklamní nástroje ho pak nesmějí měřit pomocí cookies. Google v advanced režimu dostane pingy bez cookies a část konverzí a chování může modelovat – pokud web splní prahy, u GA4 třeba zhruba tisíc událostí denně s odmítnutím a tisíc uživatelů se souhlasem. Meta, Sklik ani TikTok nesouhlasícího návštěvníka neuvidí vůbec. V přehledech proto uvidíte méně dat než bez lišty – to je očekávaný stav, ne chyba.',
    },
    {
      q: 'Cookiebot, česká CMP, nebo vlastní lišta?',
      a: 'Cookiebot a podobné zahraniční CMP se hodí pro velké weby s víc doménami a jazyky a pro vydavatele, kteří zobrazují reklamu Googlu a potřebují certifikovanou CMP s TCF. České CMP jsou levnější a mají českou podporu. Vlastní lišta dává smysl, když máte vývojáře, záleží vám na designu a rychlosti a nepotřebujete TCF – doložitelnost souhlasů pak musíme vyřešit sami. Neprodáváme žádnou CMP, doporučení stavíme na vašich potřebách.',
    },
    {
      q: 'Máme e-shop na Shoptetu. Stačí lišta z administrace?',
      a: 'Pro skripty, které řídí Shoptet, je to dobrý základ. Vestavěná lišta má podle Shoptetu implementovaný Consent Mode v2, kde <code>ad_user_data</code> a <code>ad_personalization</code> spadají pod souhlas s profilováním, a Shoptet umožňuje i externí CMP, například Cookiebot. Problémy vznikají jinde: v kódech, které někdo vložil mimo platformu, v GTM, v doplňcích a v tazích, které na souhlas nečekají – ty je potřeba na souhlas napojit zvlášť. Ověříme, jak lišta platformy spolupracuje s GTM, Sklikem, Metou a Heurekou, a co je potřeba upravit.',
    },
    {
      q: 'Jak lištu napojit na Sklik a Seznam Event Measurement?',
      a: `Nové měření Seznamu, SEM, čte souhlas z IAB TCF, nebo ho dostane ve formátu Google Consent Mode přes <code>SEM('updateConsent', …)</code>. Cookies <code>sid</code> a <code>udid</code> vytvoří až po souhlasu s <code>ad_storage</code>, retargeting závisí na <code>ad_personalization</code>. Výchozí stav proto nastavujeme ještě před zobrazením lišty a aktualizaci posíláme hned po volbě. U starých kódů Skliku kontrolujeme parametr souhlasu přímo v požadavku.`,
    },
    {
      q: 'Potřebuju souhlas i pro Google Analytics 4?',
      a: 'Ano. GA4 ukládá analytické cookies a ty podle zákona o elektronických komunikacích a výkladu ÚOOÚ vyžadují souhlas. ÚOOÚ sice uvádí analytiku první strany jako příklad oprávněného zájmu – ale pro následné zpracování dat, ne pro samotné uložení cookies. Bez souhlasu tedy GA4 cookies ukládat nesmí, v advanced režimu odejdou jen pingy bez cookies.',
    },
    {
      q: 'Kolik to stojí a jak dlouho to trvá?',
      a: 'Cenu skládáme podle rozsahu: počet domén a jazyků, počet tagů a nástrojů, jestli lištu vybíráme, nebo vyvíjíme, jestli máte server-side GTM a kolik kódů běží mimo GTM. Licenci CMP platíte poskytovateli. Délka závisí na stejných faktorech a nejvíc času obvykle zabere rozhodnutí o textech a režimu s právníkem.',
    },
    {
      q: 'Jste právníci? Kdo odpovídá za texty lišty?',
      a: 'Nejsme advokátní kancelář. Odpovídáme za technické nastavení – aby lišta a tagy fungovaly podle rozhodnutí, které uděláte s právníkem, a aby to šlo doložit. Připravíme technické podklady: seznam cookies, účely, poskytovatele a dobu uložení. Z nich váš právník sestaví texty lišty a zásady cookies.',
    },
  ],

  relatedArticles: [
    { slug: 'consent-mode-v2-pruvodce', title: 'Consent Mode v2: kompletní průvodce' },
    { slug: 'cookies-zakon-gdpr-uoou', title: 'Cookies a zákon v ČR: § 89 ZEK, GDPR a doporučení ÚOOÚ v praxi' },
    { slug: 'jak-vybrat-cookie-listu', title: 'Jak vybrat cookie lištu: Cookiebot, české CMP, nebo vlastní řešení?' },
    { slug: 'odmitnuti-cookies-dopad-na-data', title: 'Co se stane s daty, když návštěvník odmítne cookies' },
    { slug: 'osobni-udaje-v-analytice', title: 'Osobní údaje v analytice: co smíte poslat do GA4, Google Ads a Mety' },
  ],

  relatedPages: ['sluzby/mereni-konverzi', 'sluzby/server-side-tracking', 'sluzby/audit-mereni'],

  contact: {
    formId: 'lp-consent',
    topics: ['consent'],
    title: 'Nastavíme souhlas podle pravidel – a bez zbytečné ztráty dat',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Na úvodní konzultaci se podíváme, co web posílá před souhlasem, a řekneme, jestli stačí oprava, nebo je potřeba nové nastavení. Nezávazně a zdarma.',
    placeholder: 'Např. po nasazení cookie lišty nám spadly konverze v Google Ads a nevíme, jestli lišta funguje správně…',
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
