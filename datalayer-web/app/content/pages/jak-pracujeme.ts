import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. A
// (návrh v1, 8. října 2026).
// Do dodání podkladů klientem chybí: délky kroků a typická délka projektu,
// role v týmu u kroků, započtení ceny auditu, adresa pracovního e-mailu pro přístupy,
// osobní schůzky, složení týmu, partner pro vývoj, pravidla fakturace.
// Sekce „Jak měříme vlastní web“ popisuje jen to, co platí podle návrhu nového webu:
// vlastní lišta, Consent Mode v2 s výchozím denied, GTM až přes nastavení souhlasu,
// nativní formulář s hashem, Turnstile a honeypot. Texty odpovídají kódu
// v app/lib/consent.ts, app/components/CookieBar.tsx a ContactBlock.tsx – hash
// e-mailu a telefonu formulář přidá jen se souhlasem s marketingem. Server-side GTM zatím neběží,
// proto ho stránka uvádí jen jako další krok. O režimu basic/advanced klient zatím
// nerozhodl, proto chybí krok s filtrem `collect` v záložce Network.
// Názvy menu v tabulce přístupů je potřeba před publikací ověřit v rozhraních nástrojů.

export const page: LandingPageContent = {
  path: 'jak-pracujeme',
  kind: 'page',
  navTitle: 'Jak pracujeme',
  tagline: 'od konzultace po předání měření',
  pictogram: 'audit',

  seo: {
    title: 'Jak pracujeme: od auditu po předání měření | datalayer.cz',
    description:
      'Jak probíhá implementace měření: konzultace, audit, měřicí plán, specifikace dataLayer, validace a dokumentace. Co dostanete v každém kroku.',
  },

  hero: {
    eyebrow: 'postup spolupráce',
    h1: 'Jak pracujeme: od konzultace po předané měření',
    subtitle:
      'Každý projekt má stejnou kostru. Nejdřív zjistíme, co dnes měříte, pak se dohodneme, co má měření sledovat, a teprve potom píšeme tagy. Na konci dostanete funkční měření, důkaz, že funguje, a dokumentaci, se kterou si poradí kdokoli.',
    quickAnswer:
      'Spolupráce má osm kroků: úvodní konzultace, audit současného stavu, měřicí plán, specifikace datové vrstvy, implementace, validace a testy, předání s dokumentací a podpora. Ke každému kroku patří konkrétní výstup. Po konzultaci nebo auditu dostanete nabídku s pevným rozsahem, výstupy a termíny. Účty, kontejnery i data patří vám.',
    primaryCta: { label: 'Konzultovat projekt', href: '#kontakt' },
    secondaryCta: { label: 'Jak měříme vlastní web', href: '#vlastni-web' },
    microcopy: 'Úvodní třicetiminutová konzultace zdarma · odpověď do jednoho pracovního dne',
  },

  trust: [
    'Ke každému kroku konkrétní výstup',
    'Účty, kontejnery i data zůstávají vám',
    'Validace proti administraci nebo CRM',
    'Dokumentace jako výstup projektu',
  ],

  sections: [
    {
      id: 'principy',
      eyebrow: 'principy',
      title: 'Pět pravidel, podle kterých pracujeme',
      lead: 'Stejná pravidla platí pro audit, implementaci i správu měření.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: '// plan_first',
              title: 'Nejdřív měřicí plán, pak tagy',
              text: 'Měříme jen to, co někdo použije k rozhodnutí.',
            },
            {
              tag: '// your_accounts',
              title: 'Pracujeme ve vašich účtech',
              text: 'GA4, GTM, Google Cloud i data patří vám.',
            },
            {
              tag: '// consent_by_default',
              title: 'Souhlas je vstupní podmínka',
              text: 'Souhlas pro nás není překážka. Bez něj marketingová data neposíláme.',
            },
            {
              tag: '// verify_before_handover',
              title: 'Nic nepředáme bez validace',
              text: 'Měření vždy ověříme proti administraci, CRM nebo testovacím scénářům.',
            },
            {
              tag: '// docs_are_output',
              title: 'Dokumentace je výstup projektu',
              text: 'Není to bonus. Kdokoli po nás musí umět pokračovat.',
            },
          ],
        },
      ],
    },
    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Osm kroků od prvního hovoru po funkční měření',
      lead: 'Kostra je u každého projektu stejná. U malých projektů spojíme měřicí plán a specifikaci datové vrstvy do jednoho kroku.',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Úvodní konzultace',
              text: 'Na třicetiminutové konzultaci zdarma projdeme web, cíle, nástroje a největší problém. Řekneme, co bychom opravili jako první.',
              output: 'Shrnutí hovoru e-mailem a doporučení prvního kroku',
              fromClient: 'Adresa webu a ideálně člověk, který má na starost marketing',
            },
            {
              title: 'Audit současného stavu',
              text: 'Projdeme GTM, GA4, cookie lištu, reklamní systémy a datovou vrstvu. Čísla porovnáme s administrací nebo CRM.',
              output: 'audit-report.pdf – nálezy s prioritou podle dopadu, doporučení a odhad rozsahu oprav',
              fromClient: 'Přístupy pro čtení, návod najdete níže v části o přístupech',
            },
            {
              title: 'Měřicí plán',
              text: 'Byznysové otázky převedeme na KPI, události a parametry. Rozhodneme, která data kam odcházejí.',
              output: 'merici-plan.xlsx – seznam událostí, parametrů, konverzí a cílových systémů, který schválíte',
              fromClient: 'Jedna hodinová schůzka a schválení plánu',
            },
            {
              title: 'Specifikace datové vrstvy',
              text: 'Napíšeme zadání pro vývojáře: události, parametry, příklady JSON a akceptační kritéria. U platforem s vlastním dataLayerem připravíme mapování.',
              output: 'datalayer-spec.md a testovací scénáře',
              fromClient: 'Kontakt na vývojáře nebo podporu platformy',
            },
            {
              title: 'Implementace',
              text: 'Nastavíme GTM na webu, případně i na serveru, dále GA4, Consent Mode v2, reklamní systémy a BigQuery. Vývojáři mezitím doplní datovou vrstvu.',
              output: 'Kontejnery s jasným pojmenováním a historií verzí, funkční nastavení účtů',
              fromClient: 'Datová vrstva od vašich vývojářů, DNS záznam pro server-side a přístupy pro úpravy',
            },
            {
              title: 'Validace a testy',
              text: 'Projdeme testovací scénáře v GTM Preview a GA4 DebugView a otestujeme souhlas: přijetí, odmítnutí i stav bez volby. Ověříme testovací objednávky nebo leady. Pak necháme měření běžet a jeho čísla porovnáme s administrací nebo CRM.',
              output: 'validace-protokol.pdf – co jsme testovali, výsledky a vysvětlení rozdílů',
              fromClient: 'Testovací objednávka nebo lead a export z administrace nebo CRM',
            },
            {
              title: 'Předání a dokumentace',
              text: 'Uděláme předávací call se záznamem a předáme dokumentaci architektury a datových toků i seznam přístupů a vlastníků.',
              output: 'dokumentace.pdf, záznam callu a access-list.xlsx',
              fromClient: 'Hodina až hodina a půl času lidí, kteří budou měření používat',
            },
            {
              title: 'Podpora',
              text: 'Prvních třicet dní po spuštění hlídáme měření zdarma. Potom podle dohody pokračujeme správou a monitoringem.',
              output: 'Upozornění při výpadku, u správy i měsíční report kvality dat',
              fromClient: 'Kontaktní osoba',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Kolik to bude stát?',
          text: 'Cenu stanovíme po úvodní konzultaci, nejpozději po auditu. Dostanete nabídku s pevným rozsahem, výstupy a termíny. Audit si můžete objednat i samostatně jako službu <a href="/sluzby/audit-mereni">Audit měření</a>.',
        },
      ],
    },
    {
      id: 'podle-typu-firmy',
      eyebrow: 'podle typu firmy',
      title: 'Jak se postup liší podle typu firmy',
      lead: 'Kroky zůstávají stejné. Mění se hlavně to, s čím čísla porovnáváme a kam data posíláme.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'E-shopy',
              pictogram: 'eshop',
              text: 'Měřicí plán stavíme na e-commerce událostech GA4 a čísla porovnáváme s administrací e-shopu. Google Ads, Meta, Sklik i Heureka dostanou stejnou hodnotu objednávky.',
              link: { label: 'Měření pro e-shopy', href: '/reseni/e-shopy' },
            },
            {
              title: 'B2B a lead generation',
              pictogram: 'lead',
              text: 'Měření nekončí odesláním formuláře. Poptávky porovnáváme se záznamy v CRM a reklamním systémům posíláme i to, co se s poptávkou stalo dál.',
              link: { label: 'Měření pro B2B a lead generation', href: '/reseni/b2b-a-lead-generation' },
            },
            {
              title: 'Velké firmy',
              pictogram: 'gov',
              text: 'Na začátku přibude discovery s rozhovory a pilot. Měřicí plán, názvosloví a verzování zavedeme jako standard pro všechny weby a týmy.',
              link: { label: 'Měření pro velké firmy', href: '/reseni/velke-firmy' },
            },
          ],
        },
      ],
    },
    {
      id: 'ukazky',
      eyebrow: 'ukázky výstupů',
      title: 'Jak vypadají výstupy, které dostanete',
      lead: 'Výřezy ze čtyř dokumentů, které při projektu vzniknou. Příklady používají smyšlená data.',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'proces_ukazky',
          items: [
            {
              id: 'plan',
              label: 'Měřicí plán',
              paragraphs: [
                'Každý řádek plánu začíná byznysovou otázkou. K ní teprve přiřadíme KPI, událost, parametry, cílové systémy a souhlas, který událost potřebuje.',
              ],
              bullets: [
                '<strong>Které kampaně přinášejí ziskové objednávky?</strong> KPI: hrubý zisk z kampaně. Událost <code>purchase</code> s parametry <code>transaction_id</code>, <code>value</code>, <code>currency</code>, <code>items[]</code>, <code>shipping</code> a <code>coupon</code>. Cíl: GA4, Google Ads, Meta CAPI a Sklik. Souhlas: analytický i marketingový.',
                '<strong>Kde lidé opouštějí pokladnu?</strong> KPI: míra dokončení pokladny. Události <code>begin_checkout</code>, <code>add_shipping_info</code> a <code>add_payment_info</code>. Cíl: GA4. Souhlas: analytický.',
                '<strong>Které formuláře přinášejí kvalitní poptávky?</strong> KPI: podíl kvalifikovaných leadů. Událost <code>generate_lead</code> s parametry <code>form_id</code>, <code>lead_id</code> a <code>lead_topics</code>. Cíl: GA4, Google Ads a CRM. Souhlas: analytický i marketingový.',
              ],
            },
            {
              id: 'spec',
              label: 'Specifikace dataLayer',
              paragraphs: [
                'Specifikace vývojářům přesně říká, kdy a s jakými daty událost poslat a jak poznat, že funguje. Výřez pro událost <code>purchase</code>:',
              ],
              bullets: [
                '<strong>Kdy:</strong> po potvrzení objednávky na děkovací stránce, právě jednou pro dané <code>transaction_id</code>.',
                '<strong>Povinné:</strong> <code>transaction_id</code> jako text, <code>value</code> jako číslo bez DPH a bez dopravy, <code>currency</code> podle ISO 4217 a aspoň jedna položka v <code>items[]</code>.',
                '<strong>Akceptační kritérium:</strong> obnovení stránky událost znovu neodešle.',
              ],
            },
            {
              id: 'validace',
              label: 'Protokol validace',
              paragraphs: ['Protokol ukazuje, co jsme testovali, co jsme čekali a jaký byl výsledek. Příklady testů:'],
              bullets: [
                '<code>CNS-01</code> Návštěva bez interakce s lištou: žádný marketingový požadavek, výchozí stav souhlasu <code>denied</code>.',
                '<code>CNS-02</code> Volba „Odmítnout vše“: žádné cookies <code>_ga</code> ani <code>_fbp</code>, Meta CAPI nic neodešle.',
                '<code>ECM-05</code> Obnovení děkovací stránky: událost <code>purchase</code> odejde jen jednou.',
                '<code>CMP-12</code> GA4 proti administraci: každý rozdíl má vysvětlení, třeba souhlas, testovací objednávky nebo storna.',
              ],
            },
            {
              id: 'docs',
              label: 'Dokumentace',
              paragraphs: [
                'Dokumentace popisuje celé měření tak, aby po nás mohl pokračovat kdokoli. Obsahuje tyto kapitoly:',
              ],
              bullets: [
                'Architektura a schéma',
                'Inventář datových toků',
                'GTM: konvence a přehled tagů',
                'GA4: nastavení, vlastní definice a klíčové události',
                'Consent: konfigurace a testy',
                'Reklamní systémy',
                'Server-side: infrastruktura a náklady',
                'Přístupy a vlastníci',
                'Postup při výpadku',
                'Historie změn',
              ],
            },
          ],
        },
        {
          type: 'code',
          lang: 'js',
          caption: 'Výřez ze specifikace: událost purchase se smyšlenými daty',
          code: `dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: '2026-10458',
    value: 808.26,
    currency: 'CZK',
    shipping: 73.55,
    tax: 169.73,
    items: [
      { item_id: 'BTL-0420', item_name: 'Termoska 0,5 l', item_category: 'Outdoor', price: 404.13, quantity: 2 }
    ]
  }
});`,
        },
      ],
    },
    {
      id: 'pristupy',
      eyebrow: 'přístupy',
      title: 'Jak nám dát přístupy a jak je po projektu odebrat',
      lead: 'Nepotřebujeme vaše hesla. Přístupy udělíte na náš pracovní e-mail a po skončení projektu je jedním kliknutím odeberete.',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: ['Pro audit stačí čtení, pro implementaci potřebujeme práva k úpravám.'],
        },
        {
          type: 'table',
          caption: 'Jaké role potřebujeme pro audit a pro implementaci',
          head: ['Nástroj', 'Audit', 'Implementace', 'Kde přístup udělíte'],
          rows: [
            ['Google Tag Manager', 'Čtení v kontejneru', 'Publikace v kontejneru, v účtu role Uživatel', 'Správce → Správa uživatelů'],
            ['Google Analytics 4', 'Viewer', 'Editor na úrovni property', 'Správce → Správa přístupu k property'],
            ['Google Ads', 'Jen čtení', 'Standardní', 'Správce → Přístup a zabezpečení'],
            [
              'Merchant Center',
              'Standardní',
              'Admin, jen pokud řešíme produktový feed nebo data z košíku',
              'Nastavení → Lidé a přístup',
            ],
            [
              'Meta Business',
              'Events Manager – zobrazit',
              'Events Manager – spravovat',
              'Firemní nastavení → Zdroje dat → Datové sady',
            ],
            ['Sklik / Seznam', 'Čtení', 'Úpravy', 'Nastavení účtu → Přístupy'],
            [
              'Google Cloud',
              '<code>roles/viewer</code> na projekt',
              'Podle úkolu, třeba Cloud Run Admin nebo BigQuery Admin',
              'IAM a správa → IAM',
            ],
            ['Administrace e-shopu nebo CMS', 'Uživatel s nastavením marketingu', 'Totéž', 'Podle platformy'],
            [
              'CRM',
              'Čtení pipeline',
              'Admin pro pole a automatizace, nebo spolupráce s vaším adminem',
              'Podle CRM',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'NDA podepíšeme ještě před udělením přístupů, pokud o to stojíte. Zpracovatelskou smlouvu uzavíráme vždy, když pracujeme s osobními údaji, třeba v CRM.',
          ],
        },
      ],
    },
    {
      id: 'vlastni-web',
      eyebrow: 'vlastní web',
      title: 'Jak měříme vlastní web – a jak si to můžete ověřit',
      lead: 'Na datalayer.cz si můžete prohlédnout, jak pracujeme se souhlasem a s daty z formuláře. Stačí k tomu nástroje pro vývojáře v prohlížeči.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma měření na datalayer.cz: cookie lišta a formulář zapisují do dataLayer, Tag Manager startuje až po výchozím stavu souhlasu a server-side GTM je další krok.',
          columns: [
            { label: 'Prohlížeč', items: ['cookie lišta', 'kontaktní formulář'] },
            {
              label: 'dataLayer',
              items: [
                'výchozí stav souhlasu: denied',
                'gtm.js až za ním',
                'aktualizace souhlasu po volbě',
                'generate_lead, hash e-mailu jen se souhlasem',
              ],
            },
            {
              label: 'Google Tag Manager',
              items: ['startuje až po výchozím stavu souhlasu', 'tagy Googlu čtou stav souhlasu'],
            },
            { label: 'Další krok', items: ['server-side GTM na vlastní subdoméně'], note: 'zatím neběží' },
          ],
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'cmp',
              title: 'Vlastní cookie lišta',
              text: 'Lišta je součást webu, ne služba třetí strany. Tlačítka „Odmítnout vše“ a „Přijmout vše“ mají stejnou váhu a volbu kdykoli změníte odkazem Nastavení cookies v patičce.',
            },
            {
              tag: 'consent',
              title: 'Consent Mode v2',
              text: 'Analytické i reklamní signály mají výchozí stav <code>denied</code>. Po vaší volbě lišta pošle aktualizaci souhlasu a tagy Googlu se podle ní zařídí.',
            },
            {
              tag: 'gtm',
              title: 'Tag Manager až po výchozím stavu souhlasu',
              text: 'Skript pro Consent Mode nejdřív nastaví výchozí stav souhlasu a teprve potom sám načte Tag Manager. Stejný skript použije i volbu, kterou jste uložili při minulé návštěvě.',
            },
            {
              tag: 'form',
              title: 'Vlastní formulář, žádné cizí skripty',
              text: 'Kontaktní formulář je součást webu, bez HubSpotu a bez cizích formulářových skriptů. Web nenačítá ani Font Awesome.',
            },
            {
              tag: 'generate_lead',
              title: 'Poptávka bez čitelných osobních údajů',
              text: 'Po odeslání formulář zapíše do <code>dataLayer</code> událost <code>generate_lead</code>. Jméno ani e-mail v ní nikdy nejsou v čitelné podobě. Hash SHA-256 e-mailu a telefonu formulář přidá jen se souhlasem s marketingovými cookies.',
            },
            {
              tag: 'turnstile',
              title: 'Ochrana proti spamu bez CAPTCHA',
              text: 'Formulář chrání Cloudflare Turnstile a skryté pole, které vyplní jen robot. Nemusíte opisovat písmena z obrázku.',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            '<strong>Ověřte si to sami ve čtyřech krocích.</strong> Stačí Chrome nebo Firefox a jejich nástroje pro vývojáře.',
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Otevřete anonymní okno',
              text: 'Otevřete datalayer.cz v anonymním okně a stiskněte F12. Na cookie liště zatím nic nevolte.',
            },
            {
              title: 'Zkontrolujte cookies',
              text: 'V Chromu otevřete záložku Application → Cookies, ve Firefoxu Storage → Cookies. Před souhlasem tam nenajdete cookie _ga ani jinou analytickou nebo reklamní cookie.',
            },
            {
              title: 'Podívejte se do dataLayer',
              text: 'V záložce Console napište dataLayer a stiskněte Enter. Výchozí stav souhlasu stojí v poli před událostí gtm.js, se kterou startuje Tag Manager.',
            },
            {
              title: 'Odešlete testovací zprávu',
              text: 'Vyplňte kontaktní formulář s testovacím e-mailem a do zprávy napište „test“. Po odeslání najděte v dataLayer událost generate_lead. Jméno ani e-mail v ní v čitelné podobě nenajdete. Pokud jste přijali marketingové cookies, uvidíte e-mail jen jako hash o 64 znacích.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Další krok: server-side GTM',
          text: 'Server-side GTM na vlastní subdoméně je náš další krok. Dokud nepoběží, nepíšeme o něm tady jako o hotové věci.',
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Jak dlouho trvá typický projekt?',
      a: 'Záleží hlavně na dvou věcech: jak rychle vývojáři doplní datovou vrstvu a jak dlouho musí měření běžet, abychom ho mohli porovnat s administrací nebo CRM. Samotná naše práce obvykle nezabere nejvíc času. Termíny najdete v nabídce, kterou dostanete po úvodní konzultaci, nejpozději po auditu.',
    },
    {
      q: 'Pracujete na dálku?',
      a: 'Ano, většina projektů probíhá na dálku: sdílená obrazovka, předávací cally se záznamem a komunikace e-mailem nebo v nástroji, který už používáte, třeba ve Slacku, Teams nebo Jiře.',
    },
    {
      q: 'Kdo bude na projektu pracovat?',
      a: 'Úvodní konzultaci vede Vít Novotný. Na začátku projektu víte jménem, kdo dělá co a s kým mluvíte. Projekty nepředáváme dalším subdodavatelům bez vašeho souhlasu.',
    },
    {
      q: 'Co když nemáme vlastního vývojáře?',
      a: 'Na Shoptetu, Upgates, Shopify a většině webů na WordPressu zvládneme většinu práce přes administraci a Tag Manager. U vlastních řešení potřebujeme někoho, kdo do webu doplní <a href="/sluzby/datova-vrstva">datovou vrstvu</a>. Dodáme mu přesné zadání a výsledek otestujeme.',
    },
    {
      q: 'Spolupracujete s naší PPC nebo marketingovou agenturou?',
      a: 'Ano, je to běžné. Agentura dál spravuje kampaně a my zajistíme, aby měla správná data. Domluvíme se, kdo smí v GTM co měnit, a agentura dostane dokumentaci a přístupy podle potřeby.',
    },
    {
      q: 'Jak je to s cenou a provozními náklady?',
      a: 'Ceny na webu neuvádíme, protože se rozsah projektů výrazně liší. Nabídka má vždy pevný rozsah a výstupy. Provoz Google Cloudu a licence nástrojů platíte přímo poskytovatelům.',
    },
    {
      q: 'Co když se měření po předání rozbije?',
      a: 'Prvních třicet dní po spuštění měření hlídáme zdarma a chyby, které způsobíme my, opravíme vždy. Pokud se měření rozbije později kvůli změně webu, pomůžeme v rámci <a href="/sluzby/sprava-webu-a-mereni">správy webu a měření</a> nebo jednorázově. Doporučujeme monitoring, který na výpadek upozorní do 24 hodin.',
    },
    {
      q: 'Podepíšete NDA a zpracovatelskou smlouvu?',
      a: 'Ano. NDA i před první schůzkou, zpracovatelskou smlouvu vždy, když pracujeme s osobními údaji, třeba s CRM nebo se zákaznickými daty v BigQuery.',
    },
  ],

  relatedArticles: [
    { slug: 'merici-plan', title: 'Měřicí plán: jak naplánovat měření dřív, než napíšete první tag' },
    { slug: 'datova-vrstva-specifikace', title: 'Datová vrstva: co to je a jak napsat specifikaci pro vývojáře' },
    { slug: 'co-obsahuje-audit-mereni', title: 'Co má obsahovat audit měření' },
  ],

  relatedPages: [
    'sluzby/audit-mereni',
    'sluzby/datova-vrstva',
    'sluzby/sprava-webu-a-mereni',
    'sluzby/cookie-lista-consent-mode',
  ],

  contact: {
    formId: 'jak-pracujeme',
    title: 'Začněme třicetiminutovou konzultací',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Na konzultaci projdeme váš web a řekneme, kterým krokem začít – nezávazně a zdarma.',
    placeholder: 'Např. chceme nově nastavit měření pro web na poptávky a nevíme, jestli začít auditem…',
    leadType: 'consultation',
  },
};
