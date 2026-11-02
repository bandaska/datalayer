import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 5, A01–A05, a společná struktura G03): hero „Audit webové analytiky a měření
// konverzí“ s tlačítkem „Poptat audit měření“, textovým odkazem na ukázku a kotvami,
// sekce „Kdy má audit smysl“ (místo dřívější sekce se symptomy), pět výstupů s větou o oddělení
// auditu od oprav, modelová tabulka nálezů se slovními prioritami, průběh spolupráce
// v auditní variantě, nové FAQ, související služby a kontakt „Poptávka auditu měření“.
// Vypadla nabídka rychlé kontroly zvenku (heslo do zprávy, tři až pět nálezů e-mailem –
// formulář nemá volbu orientační kontroly), karty fiktivních nálezů s procenty, priority
// A, B a C a odkaz na zákon v FAQ. Dokud klient nedodá podklady, stránka neobsahuje
// případovou studii, počet auditů, délku auditu ani ukázkový PDF report.

export const page: PageInput = {
  path: 'sluzby/audit-mereni',
  kind: 'service',
  navTitle: 'Audit měření',
  tagline: 'kontrola měření a plán oprav',
  pictogram: 'audit',
  menuGroup: 'audity',

  seo: {
    title: 'Audit měření – GA4, GTM, souhlas a konverze | datalayer.cz',
    description:
      'Audit měření prověří GA4, Google Tag Manager, cookie lištu a reklamní konverze a porovná data s objednávkami nebo CRM. Nálezy s prioritami a plán oprav.',
  },

  hero: {
    h1: 'Audit webové analytiky a měření konverzí',
    subtitle:
      'Prověříme GA4, Google Tag Manager, cookie lištu a měření reklamních konverzí. Porovnáme dostupná data s objednávkami nebo CRM a rozlišíme chyby nastavení od přirozených rozdílů mezi systémy. Dostanete nálezy s prioritami a plán oprav.',
    primaryCta: { label: 'Poptat audit měření', href: '#kontakt' },
    secondaryLink: { label: 'Ukázka výstupu auditu', href: '#ukazka-reportu' },
    anchors: [
      { label: 'Rozsah služby', href: '#kdy' },
      { label: 'Výstupy', href: '#vystupy' },
      { label: 'Průběh', href: '#prubeh' },
      { label: 'Cena a dotazy', href: '#faq' },
    ],
  },

  sections: [
    {
      id: 'kdy',
      title: 'Kdy má audit smysl',
      lead: 'Při nejasných rozdílech v datech i před změnou webu nebo dodavatele.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          variant: 'symptoms',
          items: [
            {
              title: 'Rozdíly v objednávkách a konverzích',
              text: 'Potřebujete zjistit, co způsobuje rozdíl mezi administrací, GA4 a reklamními systémy.',
              pictogram: 'warn',
            },
            {
              title: 'Změna cookie lišty',
              text: 'Po úpravě souhlasů se změnilo měření a chcete ověřit, zda nástroje reagují správně.',
              pictogram: 'consent',
            },
            {
              title: 'Převzetí měření',
              text: 'Při změně dodavatele potřebujete přehled účtů, přístupů a nastavení.',
              pictogram: 'gtm',
            },
            {
              title: 'Nový web nebo migrace',
              text: 'Chcete znát stav měření před změnou a připravit kontrolu po spuštění.',
              pictogram: 'serverside',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co od nás dostanete',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Shrnutí výsledků',
              text: 'Přehled hlavních zjištění pro marketing a vedení.',
            },
            {
              title: 'Seznam nálezů a plán oprav',
              text: 'U každého nálezu popis, důkaz, dopad a priorita. Doplníme doporučený postup a potřebnou součinnost.',
            },
            {
              title: 'Porovnání dostupných dat',
              text: 'Srovnání za dohodnuté období a vysvětlení zjištěných rozdílů. Neověřitelné příčiny označíme.',
            },
            {
              title: 'Kontrola GTM a testovací protokol',
              text: 'Přehled prověřených tagů a výsledky dohodnutých scénářů nákupu, formulářů a souhlasů.',
            },
            {
              title: 'Společné projití výsledků',
              text: 'Vysvětlíme priority a navrhneme další postup pro váš tým, vývojáře nebo agenturu.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Audit obsahuje kontrolu a doporučení. Samotné opravy sjednáváme samostatně.',
        },
      ],
    },

    // modelová ukázka (A04): smyšlené nálezy bez procent a odhadu hodin, slovní priority
    {
      id: 'ukazka-reportu',
      title: 'Modelová ukázka výstupu auditu',
      lead: 'Následující příklady jsou smyšlené a ukazují formát výstupu. Nejde o výsledky konkrétního klienta.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Priorita', 'Nález', 'Způsob ověření', 'Doporučená oprava', 'Součinnost'],
          rows: [
            [
              'Vysoká',
              'Testovací nákup se po návratu z brány nezapsal do GA4.',
              'Průchod testovací objednávkou a kontrola odeslané události.',
              'Upravit spouštění nákupní události a zopakovat test.',
              'Vývojář + analytik',
            ],
            [
              'Vysoká',
              'Dvě primární akce Google Ads měří tentýž nákup.',
              'Kontrola akcí a jejich využití v kampaních.',
              'Domluvit hlavní zdroj konverze a upravit nastavení.',
              'PPC specialista + analytik',
            ],
            [
              'Střední',
              'Část tagů nemá popsaný účel ani vlastníka.',
              'Inventura kontejneru GTM.',
              'Prověřit využití a doplnit dokumentaci.',
              'Marketing + analytik',
            ],
          ],
        },
      ],
    },

    {
      id: 'prubeh',
      title: 'Jak probíhá spolupráce',
      tone: 'white',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Upřesnění zadání', text: 'Projdeme web, používané nástroje a otázky, které potřebujete vyřešit.' },
            {
              title: 'Nabídka a součinnost',
              text: 'Dostanete rozsah práce, cenu, výstupy a seznam potřebných přístupů. Domluvíme také zapojení vývojáře nebo agentury.',
            },
            // auditní varianta kroku 3 (G03)
            {
              title: 'Realizace a kontrola',
              text: 'Provedeme kontrolu a připravíme nálezy s prioritami. Změny v měření jsou samostatně dohodnutá práce.',
            },
            { title: 'Předání', text: 'Projdeme výsledky a předáme dokumentaci. Další správu nebo monitoring sjednáme samostatně.' },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Na čem závisí cena auditu?',
      a: 'Na počtu webů, systémů a hloubce kontroly. Před zahájením dostanete nabídku s přesným rozsahem a výstupy. Úvodní konzultace je zdarma; nenahrazuje audit s přístupy a testováním.',
    },
    {
      q: 'Jaké přístupy jsou potřeba?',
      a: 'Pro kontrolu obvykle stačí oprávnění pro čtení. Podle rozsahu si vyžádáme také export objednávek bez nepotřebných osobních údajů a domluvíme testovací nákup. Přístupy přidělujete přes role, nikoli sdílením hesel.',
    },
    {
      q: 'Obsahuje audit právní posouzení cookies?',
      a: 'Kontrolujeme technické chování lišty a měřicích nástrojů. Připravíme popis datových toků a zjištění pro právní posouzení. Právní stanovisko není součástí technického auditu.',
    },
    {
      q: 'Kdo může doporučené opravy provést?',
      a: 'Váš vývojář, agentura nebo my podle domluveného rozsahu. Výstup připravíme tak, aby na něj mohl navázat další dodavatel.',
    },
  ],

  related: {
    items: [
      {
        label: 'Nastavení GA4 a GTM',
        href: '/sluzby/implementace-ga4',
        text: 'Úprava událostí v GA4 a kontejneru GTM podle nálezů z auditu.',
      },
      {
        label: 'Měření konverzí',
        href: '/sluzby/mereni-konverzi',
        text: 'Oprava předávání objednávek a poptávek do Google Ads, Mety, Skliku a dalších systémů.',
      },
    ],
  },

  contact: {
    formId: 'lp-audit',
    title: 'Poptávka auditu měření',
    lead: 'Pošlete adresu webu, používané nástroje a důvod kontroly. Navrhneme rozsah auditu a potřebné přístupy.',
    placeholder: '',
    leadType: 'audit',
  },

  schema: {
    name: 'Audit měření',
    serviceType: 'Audit webové analytiky a měření konverzí',
    description:
      'Kontrola GA4, Google Tag Manageru, cookie lišty a měření reklamních konverzí. Porovnání dostupných dat s objednávkami nebo CRM, nálezy s prioritami a plán oprav.',
    audience: 'E-shopy, B2B firmy, velké firmy',
  },
};
