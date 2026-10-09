import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. B
// (návrh v1, 8. října 2026). Teaser postupu přebírá kroky z 04_homepage-ux/
// homepage-audit-a-navrh.md (sekce 6), FAQ o účtech a spolupráci z homepage (sekce 9).
// Mřížku všech jedenácti služeb ve třech skupinách i odkazy na tři řešení vykreslí
// aplikace nad sekcemi (ServiceGrid v app/routes/services.tsx), proto tu služby ani
// karty řešení znovu nevypisujeme. Segmenty jsou záložky s tím, co je u nich jinak.
// Interaktivní pomůcku se čtyřmi otázkami web zatím nemá. Její roli přebírá tabulka
// nejčastějších situací (#cim-zacit), kterou jsme doplnili o texty výsledků z pravidel
// pomůcky. Meta popis proto na rozdíl od zadání pomůcku nezmiňuje.
// Do rozhodnutí klienta (kap. B6) chybí FAQ „Pracujete s malými weby?“
// a „Děláte i správu kampaní?“. Stránka neuvádí délky kroků ani délku auditu.

export const page: PageInput = {
  path: 'sluzby',
  kind: 'page',
  navTitle: 'Služby',
  tagline: 'od sběru dat po reporting a správu',
  pictogram: 'datalayer',

  seo: {
    title: 'Služby webové analytiky: GA4, GTM, BigQuery | datalayer.cz',
    description:
      'Přehled jedenácti služeb webové analytiky: sběr dat, data a reporting, audity a správa. Nevíte, co potřebujete? Podle vaší situace doporučíme, čím začít.',
  },

  hero: {
    eyebrow: 'sběr dat · data a reporting · audity a správa',
    h1: 'Služby webové analytiky a měření',
    subtitle:
      'Jedenáct služeb ve třech skupinách – od sběru dat na webu přes BigQuery a reporting po audity a dlouhodobou správu. Můžete začít kteroukoli z nich, nebo nám popsat problém a doporučíme, čím začít.',
    quickAnswer:
      'Když nevíte, kde je problém, začněte <a href="/sluzby/audit-mereni">auditem měření</a>. Audit na webu nic nemění a ukáže chyby s prioritou podle dopadu. Stavíte nový web nebo e-shop? Začněte <a href="/sluzby/datova-vrstva">datovou vrstvou</a>. Reporty skládáte ručně? Pomůže <a href="/sluzby/dashboardy-a-reporting">automatický reporting</a>. Nabídku s pevným rozsahem dostanete po úvodní konzultaci.',
    primaryCta: { label: 'Konzultovat projekt', href: '#kontakt' },
    secondaryCta: { label: 'Pomozte mi vybrat', href: '#cim-zacit' },
    microcopy: 'Úvodní třicetiminutová konzultace zdarma · odpověď do jednoho pracovního dne',
  },

  trust: [
    'Jedenáct služeb ve třech skupinách',
    'Účty a data zůstávají vám',
    'Nabídka s pevným rozsahem a výstupy',
  ],

  sections: [
    {
      id: 'navaznost',
      eyebrow: 'souvislosti',
      title: 'Jak služby navazují',
      lead: 'Služby na sebe navazují: data vznikají na webu, BigQuery je ukládá a report z nich ukáže výsledky.',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: ['Audit na začátku řekne, kde je problém. Správa na konci hlídá, aby se nevrátil.'],
        },
        {
          type: 'flow',
          caption:
            'Jak služby navazují: audit na začátku, sběr dat na webu, BigQuery, reporting a průběžná správa a monitoring nad celou cestou.',
          columns: [
            { label: 'Audit', items: ['audit měření'], note: 'na začátku' },
            {
              label: 'Sběr dat',
              items: [
                'datová vrstva',
                'Google Tag Manager',
                'GA4',
                'Consent Mode',
                'server-side tracking',
                'konverze v reklamních systémech',
              ],
            },
            { label: 'Data', items: ['BigQuery'] },
            { label: 'Reporting', items: ['dashboardy'] },
            {
              label: 'Správa a monitoring',
              items: ['hlídá sběr dat, BigQuery i dashboardy'],
              note: 'průběžně',
            },
          ],
        },
      ],
    },
    {
      id: 'podle-typu-firmy',
      eyebrow: 'podle typu firmy',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      lead: 'E-shop potřebuje jiná data než firma, která prodává přes obchodníky. Služby proto skládáme podle toho, jak vyděláváte.',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'sluzby_segmenty',
          items: [
            {
              id: 'e-shopy',
              label: 'E-shopy',
              paragraphs: [
                'Od datové vrstvy po marži v reportu. Typický problém: GA4 ukazuje jiné tržby než administrace a reklamní systémy si přivlastňují stejné objednávky.',
                'Podrobně v řešení <a href="/reseni/e-shopy">Měření pro e-shopy</a>.',
              ],
              bullets: [
                'E-commerce měření podle schématu GA4',
                'Google Ads, Meta, Sklik i Heureka se stejnou hodnotou objednávky',
                'Marže a vratky v reportu',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a lead generation',
              paragraphs: [
                'Od formuláře po zakázku v CRM. Typický problém: víte, kolik přišlo poptávek, ale ne, které z nich se změnily v zakázku. Reklamní systémy to nevědí taky.',
                'Podrobně v řešení <a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>.',
              ],
              bullets: [
                'Měření formulářů a hovorů bez osobních údajů v analytice',
                'Propojení s CRM a offline konverze',
                'Cena za lead i za zakázku',
              ],
            },
            {
              id: 'velke-firmy',
              label: 'Velké firmy',
              paragraphs: [
                'Governance a server-side ve vašem cloudu. Typický problém: více domén, týmů a dodavatelů, každý měří trochu jinak a nikdo nemá celkový obraz.',
                'Podrobně v řešení <a href="/reseni/velke-firmy">Měření pro velké firmy</a>.',
              ],
              bullets: [
                'Měřicí plán, názvosloví a verzování jako standard',
                'Server-side a BigQuery ve vašem Google Cloudu',
                'Spolupráce s IT a testy',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cim-zacit',
      eyebrow: 'nevíte, co potřebujete?',
      title: 'Nejčastější situace a čím začít',
      lead: 'Najděte situaci, která je vám nejbližší. Když tu svou nenajdete, popište ji ve formuláři a doporučíme první krok.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Situace a služba, kterou doporučujeme jako první krok',
          head: ['Situace', 'Začněte', 'Proč'],
          rows: [
            [
              'GA4 ukazuje jiné tržby než e-shop',
              '<a href="/sluzby/audit-mereni">Audit měření</a>',
              'Rozdíl má víc příčin a nejdřív je potřeba je od sebe oddělit.',
            ],
            [
              'Po nasazení cookie lišty spadly konverze',
              '<a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>',
              'Lišta často funguje, ale signály souhlasu chybí nebo přicházejí pozdě.',
            ],
            [
              'Meta hlásí méně nákupů než e-shop',
              '<a href="/sluzby/server-side-tracking">Server-side tracking</a> a <a href="/sluzby/mereni-konverzi">měření konverzí</a>',
              'Conversions API s deduplikací a lepším párováním.',
            ],
            [
              'Stavíme nový web nebo e-shop',
              '<a href="/sluzby/datova-vrstva">Datová vrstva</a>',
              'Zadání pro vývojáře před začátkem vývoje vyjde levněji než pozdější opravy.',
            ],
            [
              'Měření skoro nemáme',
              '<a href="/sluzby/implementace-ga4">Implementace GA4</a>',
              'Postavíme základ: GA4 přes Tag Manager s cookie lištou.',
            ],
            [
              'Nevíme, co vlastně měříme',
              '<a href="/sluzby/audit-mereni">Audit měření</a>',
              'Audit ukáže, co dnes měříte, co chybí a co je navíc.',
            ],
            [
              'Web je pomalý',
              '<a href="/sluzby/technicky-audit-webu">Technický audit webu</a>',
              'Změříme, kolik zpomalení způsobují skripty a tagy.',
            ],
            [
              'Report pro vedení dělá někdo ručně',
              '<a href="/sluzby/dashboardy-a-reporting">Dashboardy a reporting</a>',
              'Automatický report nad daty, která jsme předem ověřili.',
            ],
            [
              'Chceme spojit GA4 s daty z CRM nebo ERP',
              '<a href="/sluzby/bigquery">BigQuery</a>',
              'Surová data a vlastní datový model.',
            ],
            [
              'Máme leady, ale nevíme, které jsou dobré',
              '<a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>',
              'Měření až do CRM a zpět do reklam.',
            ],
            [
              'Nemáme analytika a měření se opakovaně rozbíjí',
              '<a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>',
              'Monitoring a pravidelná péče.',
            ],
          ],
        },
      ],
    },
    {
      id: 'spoluprace',
      eyebrow: 'jak pracujeme',
      title: 'Pět kroků, po každém dostanete konkrétní výstup',
      lead: 'Žádné „nastavíme to“. Každý krok končí dokumentem nebo ověřením, které můžete předat vlastnímu týmu.',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Audit',
              text: 'Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.',
              output: 'Report s prioritami A/B/C',
            },
            {
              title: 'Měřicí plán',
              text: 'Byznysové cíle převedeme na události, parametry a pravidla pojmenování.',
              output: 'Měřicí plán a specifikace dataLayer',
            },
            {
              title: 'Implementace',
              text: 'Nastavíme GTM na webu, případně i na serveru, Consent Mode v2 a konverze do reklamních systémů.',
              output: 'Kontejnery s historií verzí',
            },
            {
              title: 'Validace',
              text: 'Projdeme testovací scénáře, zkontrolujeme každou událost a čísla porovnáme s e-shopem nebo CRM.',
              output: 'Protokol testů',
            },
            {
              title: 'Předání a podpora',
              text: 'Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.',
              output: 'Dokumentace a monitoring',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Podrobný postup v osmi krocích i to, co od vás budeme potřebovat, popisuje stránka <a href="/jak-pracujeme">Jak pracujeme</a>.',
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Můžu si objednat jen jednu službu?',
      a: 'Ano. Každá služba má samostatný rozsah a výstupy. Pokud ale zjistíme, že problém je jinde, řekneme vám to dřív, než začneme. Třeba když chcete server-side, ale chyba je v datové vrstvě.',
    },
    {
      q: 'Čím začít, když nevím, co je špatně?',
      a: '<a href="/sluzby/audit-mereni">Auditem měření</a>. Audit na webu nic nemění a dostanete z něj seznam chyb s prioritou podle dopadu a doporučení, co opravit.',
    },
    {
      q: 'Proč nejsou na webu ceny?',
      a: 'Rozsah se mezi projekty liší víc, než by ceník dokázal popsat. U každé služby proto popisujeme výstupy a postup. Nabídku s pevným rozsahem dostanete po úvodní konzultaci.',
    },
    {
      q: 'Komu patří účty a data?',
      a: 'Vždy vám. GA4, Tag Manager, Google Cloud i reklamní účty běží pod vaší firmou a my dostáváme přístup. Po skončení spolupráce nic nemigrujete a dostanete dokumentaci, podle které může pokračovat kdokoli jiný.',
    },
    {
      q: 'Spolupracujete s naším vývojářem nebo agenturou?',
      a: 'Ano, je to běžné. Vývojářům dodáme specifikaci datové vrstvy a testovací scénáře, s PPC agenturou se domluvíme na konverzích a jejich hodnotách.',
    },
  ],

  relatedPages: ['jak-pracujeme', 'sluzby/audit-mereni', 'o-nas'],

  contact: {
    formId: 'sluzby',
    title: 'Popište problém, služby vybereme spolu',
    lead: 'Na úvodní třicetiminutové konzultaci projdeme vaše měření a doporučíme, čím začít – nezávazně a zdarma.',
    placeholder: 'Např. nevíme, jestli potřebujeme server-side, nebo jen opravit GA4…',
    leadType: 'consultation',
  },
};
