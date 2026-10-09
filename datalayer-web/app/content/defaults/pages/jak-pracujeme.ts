import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. A
// (návrh v1, 8. října 2026), úpravy podle vyhodnocení webu (9. října 2026, kap. 3.3
// a 5.15): stejných pět kroků jako na homepage a v Textech webu (Postup spolupráce),
// tady s podkroky. Úvodní konzultace stojí před prvním krokem, specifikace datové
// vrstvy patří k měřicímu plánu a podpora k předání. Tabulka přístupů je ve sbalených
// Technických detailech. Sekci „Jak měříme vlastní web“ jsme zkrátili na čtyři body
// a skryli – zapnout v administraci, až na produkci poběží GTM a consent.
// Do dodání podkladů klientem chybí: délky kroků a typická délka projektu,
// role v týmu u kroků, započtení ceny auditu, adresa pracovního e-mailu pro přístupy,
// osobní schůzky, složení týmu, partner pro vývoj, pravidla fakturace.
// Názvy menu v tabulce přístupů je potřeba před publikací ověřit v rozhraních nástrojů.
// Texty prošly jazykovým auditem z 9. října 2026 (kap. 3.18), bez slibů lhůt (rozhodnutí klienta).

export const page: PageInput = {
  path: 'jak-pracujeme',
  kind: 'page',
  navTitle: 'Jak pracujeme',
  tagline: 'od konzultace po předání měření',
  pictogram: 'audit',

  seo: {
    title: 'Jak pracujeme – od úvodní konzultace po předané měření | datalayer.cz',
    description:
      'Implementace měření v pěti krocích: audit, měřicí plán se specifikací dataLayer, implementace, validace a předání s dokumentací. Co dostanete v každém kroku.',
  },

  hero: {
    eyebrow: 'postup spolupráce',
    h1: 'Pět kroků od úvodní konzultace po předané měření',
    subtitle:
      'Každý projekt má stejnou kostru o pěti krocích. Nejdřív zjistíme, co dnes měříte, pak se dohodneme, co má měření sledovat, a teprve potom nastavujeme tagy. Na konci dostanete funkční měření, důkaz, že funguje, a dokumentaci, se kterou si poradí kdokoli.',
    primaryCta: { label: 'Konzultovat projekt', href: '#kontakt' },
    secondaryCta: { label: 'Pět kroků spolupráce', href: '#postup' },
    microcopy: 'Úvodní konzultace zdarma a nezávazně',
  },

  trust: ['Ke každému kroku konkrétní výstup', 'Účty, kontejnery i data zůstávají vám', 'Validace porovnáním s administrací nebo CRM'],

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
              tag: '01',
              title: 'Nejdřív měřicí plán, pak tagy',
              text: 'Měříme jen to, co někdo použije k rozhodnutí.',
            },
            {
              tag: '02',
              title: 'Pracujeme ve vašich účtech',
              text: 'GA4, Google Tag Manager (GTM), Google Cloud i data patří vám.',
            },
            {
              tag: '03',
              title: 'Souhlas je vstupní podmínka',
              text: 'Souhlas pro nás není překážka. Bez něj marketingová data neposíláme.',
            },
            {
              tag: '04',
              title: 'Nic nepředáme bez validace',
              text: 'Měření vždy porovnáme s administrací nebo CRM a projdeme testovací scénáře.',
            },
            {
              tag: '05',
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
      title: 'Pět kroků od auditu po předané měření',
      lead: 'Stejné kroky uvidíte u všech služeb. Před prvním z nich proběhne úvodní konzultace zdarma: projdeme web, cíle a největší problém a doporučíme, čím začít.',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          layout: 'rows',
          items: [
            {
              title: 'Audit',
              text: 'Zjistíme, co dnes měříte a kde data utíkají. Čísla porovnáme s administrací nebo CRM.',
              substeps: [
                'GTM a GA4: kontejnery, události a nastavení',
                'cookie lišta a Consent Mode',
                'reklamní systémy a datová vrstva',
                'porovnání čísel s administrací nebo CRM',
              ],
              output: 'audit-report.pdf – nálezy s prioritou podle dopadu, doporučení a odhad rozsahu oprav',
              fromClient: 'Přístupy pro čtení – jaké role a kde je udělíte, najdete u častých otázek v Technických detailech',
            },
            {
              title: 'Měřicí plán',
              text: 'Obchodní otázky převedeme na ukazatele (KPI), události a parametry a rozhodneme, která data kam odcházejí. Z plánu potom napíšeme zadání pro vývojáře.',
              substeps: [
                'KPI, události, parametry a cílové systémy',
                'pravidla pojmenování a souhlas, který událost potřebuje',
                'specifikace datové vrstvy s příklady JSON a akceptačními kritérii',
                'u platforem s vlastním dataLayerem mapování místo specifikace',
              ],
              output: 'merici-plan.xlsx ke schválení a datalayer-spec.md s testovacími scénáři',
              fromClient: 'Hodinová schůzka, schválení plánu a kontakt na vývojáře nebo podporu platformy',
            },
            {
              title: 'Implementace',
              text: 'Nastavíme GTM na webu, případně i na serveru, dále GA4, Consent Mode v2, reklamní systémy a BigQuery. Vývojáři mezitím doplní datovou vrstvu.',
              substeps: [
                'webový kontejner GTM, případně i serverový',
                'GA4 a Consent Mode v2',
                'konverze v reklamních systémech',
                'BigQuery a další napojení podle měřicího plánu',
              ],
              output: 'Kontejnery s jasným pojmenováním a historií verzí, funkční nastavení účtů',
              fromClient: 'Datová vrstva od vašich vývojářů, DNS záznam pro server-side a přístupy pro úpravy',
            },
            {
              title: 'Validace',
              text: 'Měření ověříme na testovacích scénářích a potom jeho čísla porovnáme s administrací nebo CRM.',
              substeps: [
                'testovací scénáře v GTM Preview a GA4 DebugView',
                'test souhlasu: přijetí, odmítnutí i stav bez volby',
                'testovací objednávky nebo poptávky',
                'souběžný běh a porovnání čísel s administrací nebo CRM',
              ],
              output: 'validace-protokol.pdf – co jsme testovali, výsledky a vysvětlení rozdílů',
              fromClient: 'Testovací objednávka nebo poptávka a export z administrace nebo CRM',
            },
            {
              title: 'Předání a podpora',
              text: 'Na předávací schůzce se záznamem projdeme dokumentaci a přístupy. Po spuštění podle dohody pokračujeme správou a monitoringem.',
              substeps: [
                'dokumentace architektury a datových toků',
                'seznam přístupů a vlastníků',
                'předávací schůzka se záznamem',
                'u správy upozornění při výpadku a měsíční report kvality dat',
              ],
              output: 'dokumentace.pdf, záznam schůzky a access-list.xlsx',
              fromClient: 'Hodina až hodina a půl času lidí, kteří budou měření používat, a kontaktní osoba',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Kolik to bude stát?',
          text: 'Cenu stanovíme po úvodní konzultaci, nejpozději po auditu. Dostanete nabídku s pevným rozsahem, výstupy a termíny. Provoz Google Cloudu a licence nástrojů platíte přímo poskytovatelům. Audit si můžete objednat i samostatně jako službu <a href="/sluzby/audit-mereni">Audit měření</a>.',
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
              text: 'Měřicí plán stavíme na událostech e-commerce v GA4 a čísla porovnáváme s administrací e-shopu. Google Ads, Meta, Sklik i Heureka dostanou stejnou hodnotu objednávky.',
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
              text: 'Na začátku přibude úvodní analýza (discovery) s rozhovory a pilotní nasazení. Měřicí plán, názvosloví a verzování zavedeme jako standard pro všechny weby a týmy.',
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
                'Každý řádek plánu začíná obchodní otázkou. K ní teprve přiřadíme KPI, událost, parametry, cílové systémy a souhlas, který událost potřebuje.',
              ],
              bullets: [
                '<strong>Které kampaně přinášejí ziskové objednávky?</strong> KPI: hrubý zisk z kampaně. Událost <code>purchase</code> s parametry <code>transaction_id</code>, <code>value</code>, <code>currency</code>, <code>items[]</code>, <code>shipping</code> a <code>coupon</code>. Cíl: GA4, Google Ads, Meta Conversions API (CAPI) a Sklik. Souhlas: analytický i marketingový.',
                '<strong>Kde lidé opouštějí pokladnu?</strong> KPI: míra dokončení pokladny. Události <code>begin_checkout</code>, <code>add_shipping_info</code> a <code>add_payment_info</code>. Cíl: GA4. Souhlas: analytický.',
                '<strong>Které formuláře přinášejí kvalitní poptávky?</strong> KPI: podíl kvalifikovaných poptávek. Událost <code>generate_lead</code> s parametry <code>form_id</code>, <code>lead_id</code> a <code>lead_topics</code>. Cíl: GA4, Google Ads a CRM. Souhlas: analytický i marketingový.',
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
                'Souhlas a Consent Mode: konfigurace a testy',
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
      id: 'vlastni-web',
      eyebrow: 'vlastní web',
      title: 'Jak měříme vlastní web – a jak si to můžete ověřit',
      lead: 'Na datalayer.cz si můžete prohlédnout, jak pracujeme se souhlasem a s daty z formuláře.',
      tone: 'dark',
      // zobrazit, až na produkci poběží GTM a consent (vyhodnocení webu, kap. 5.15)
      hidden: true,
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Vlastní cookie lišta</strong> – tlačítka „Odmítnout vše“ a „Přijmout vše“ mají stejnou váhu.',
            '<strong>Consent Mode v2</strong> – výchozí stav <code>denied</code>, GTM startuje až po něm.',
            '<strong>Vlastní formulář bez cizích skriptů</strong> – událost <code>generate_lead</code> bez čitelného jména a e-mailu, hash jen se souhlasem s marketingem.',
            '<strong>Ochrana proti spamu bez CAPTCHA</strong> – Cloudflare Turnstile a skryté pole.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            '<strong>Ověřte si to sami:</strong> otevřete web v anonymním okně, stiskněte F12 a v záložce Console napište <code>dataLayer</code>. Výchozí stav souhlasu najdete před událostí <code>gtm.js</code>.',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Jaké přístupy potřebujeme a kde je udělíte',
    blocks: [
      {
        type: 'paragraphs',
        items: [
          'Nepotřebujeme vaše hesla. Přístupy udělíte na náš pracovní e-mail a po skončení projektu je jedním kliknutím odeberete. Pro audit stačí čtení, pro implementaci potřebujeme práva k úpravám.',
        ],
      },
      {
        type: 'table',
        caption: 'Jaké role potřebujeme pro audit a pro implementaci',
        head: ['Nástroj', 'Audit', 'Implementace', 'Kde přístup udělíte'],
        rows: [
          ['Google Tag Manager', 'Čtení v kontejneru', 'Publikace v kontejneru, v účtu role Uživatel', 'Správce → Správa uživatelů'],
          ['Google Analytics 4', 'Čtenář', 'Editor na úrovni property', 'Správce → Správa přístupu k property'],
          ['Google Ads', 'Jen čtení', 'Standardní', 'Správce → Přístup a zabezpečení'],
          [
            'Merchant Center',
            'Standardní',
            'Správce, jen pokud řešíme produktový feed nebo data z košíku',
            'Nastavení → Lidé a přístup',
          ],
          [
            'Meta Business',
            'Events Manager – zobrazit',
            'Events Manager – spravovat',
            'Firemní nastavení → Zdroje dat → Datové sady',
          ],
          ['Sklik/Seznam', 'Čtení', 'Úpravy', 'Nastavení účtu → Přístupy'],
          [
            'Google Cloud',
            '<code>roles/viewer</code> na projekt',
            'Podle úkolu, třeba Cloud Run Admin nebo BigQuery Admin',
            'IAM a správa → IAM',
          ],
          ['Administrace e-shopu nebo CMS', 'Uživatel s nastavením marketingu', 'Totéž', 'Podle platformy'],
          [
            'CRM',
            'Čtení obchodních případů (pipeline)',
            'Správce pro pole a automatizace, nebo spolupráce s vaším správcem CRM',
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

  faq: [
    {
      q: 'Jak dlouho trvá typický projekt?',
      a: 'Záleží hlavně na dvou věcech: jak rychle vývojáři doplní datovou vrstvu a jak dlouho musí měření běžet, abychom ho mohli porovnat s administrací nebo CRM. Naše vlastní práce obvykle není to, co trvá nejdéle. Termíny najdete v nabídce, kterou dostanete po úvodní konzultaci, nejpozději po auditu.',
    },
    {
      q: 'Kdo bude na projektu pracovat?',
      a: 'Na začátku projektu znáte jména lidí, kteří na něm pracují, a víte, s kým mluvíte. Projekty nepředáváme subdodavatelům bez vašeho souhlasu.',
    },
    {
      q: 'Co když nemáme vlastního vývojáře?',
      a: 'Na Shoptetu, Upgates, Shopify a u většiny webů na WordPressu zvládneme větší část práce přes administraci a GTM. U vlastních řešení potřebujeme někoho, kdo do webu doplní <a href="/sluzby/datova-vrstva">datovou vrstvu</a>. Dodáme mu přesné zadání a výsledek otestujeme.',
    },
    {
      q: 'Spolupracujete s naší PPC nebo marketingovou agenturou?',
      a: 'Ano, je to běžné. Agentura dál spravuje kampaně a my zajistíme, aby měla správná data. Domluvíme se, kdo smí v GTM co měnit, a agentura dostane dokumentaci a přístupy podle potřeby.',
    },
    {
      q: 'Co když se měření po předání rozbije?',
      a: 'Chyby, které způsobíme my, opravíme. Pokud se měření rozbije později kvůli změně webu, pomůžeme v rámci <a href="/sluzby/sprava-webu-a-mereni">správy webu a měření</a> nebo jednorázově. Doporučujeme monitoring, který na výpadek upozorní.',
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

  relatedPages: ['sluzby/audit-mereni', 'sluzby/datova-vrstva', 'sluzby/sprava-webu-a-mereni'],

  contact: {
    formId: 'jak-pracujeme',
    title: 'Začněme úvodní konzultací',
    lead: 'Napište nám e-mail nebo vyplňte formulář. Na konzultaci projdeme váš web a řekneme, kterým krokem začít.',
    placeholder: 'Např. chceme nově nastavit měření pro web na poptávky a nevíme, jestli začít auditem…',
    leadType: 'consultation',
  },
};
