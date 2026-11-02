import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty,
// kap. 3 a 7, SS01–SS05). Hero má nový nadpis, kratší úvod, tlačítko „Probrat
// server-side měření“ a kotvy na sekce. Dřívější karty se symptomy a rozhodnutí
// ano/ne nahradila jedna sekce Kdy má server-side měření smysl se třemi kartami a blokem Kdy začít
// jinak s odkazy na audit a cookie lištu. Výstupy mají pět položek bez Cloud Run
// s nejméně dvěma servery, schéma toku dat tři uzly a větu, že server-side řešení
// samo nezaručuje úplnost dat. Přibyl průběh spolupráce (G03) a související služby,
// FAQ a kontakt mají znění ze SS05. Vypadla tvrzení o Safari a sedmi dnech,
// o doložení odchozích dat bez prostředníka, o měření po odmítnutí cookies,
// hashování jako ochraně údajů, cenové rozpětí provozu a odkaz na paragraf zákona.

export const page: PageInput = {
  path: 'sluzby/server-side-tracking',
  kind: 'service',
  navTitle: 'Server-side měření',
  tagline: 'měření přes vlastní server',
  pictogram: 'serverside',
  menuGroup: 'sber',

  seo: {
    title: 'Server-side tracking a měření přes vlastní server | datalayer.cz',
    description:
      'Server-side GTM pro analytiku a reklamu: návrh, nastavení prostředí, pravidla pro události a souhlasy, testy a dokumentace. Posoudíme přínos i náklady.',
  },

  hero: {
    h1: 'Server-side tracking a měření přes vlastní server',
    subtitle:
      'Navrhneme a nastavíme předávání měřicích událostí přes server-side Google Tag Manager. Určíme, která data mají odcházet do jednotlivých nástrojů, jak předávat souhlas a kdo zajišťuje provoz. Předem posoudíme přínos i průběžné náklady.',
    primaryCta: { label: 'Probrat server-side měření', href: '#kontakt' },
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
      title: 'Kdy má server-side měření smysl',
      lead: 'Především tehdy, když potřebujete řídit předávání dat více systémům nebo doplnit události ze serveru a CRM. Není automatická náhrada správně nastaveného měření v prohlížeči.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          variant: 'symptoms',
          items: [
            {
              title: 'Data z webu i firemních systémů',
              text: 'Potřebujete předávat například dokončené platby nebo změny stavu poptávky.',
              pictogram: 'datalayer',
            },
            {
              title: 'Kontrola předávaných údajů',
              text: 'Chcete sjednotit pravidla, podle kterých data odcházejí jednotlivým příjemcům.',
              pictogram: 'gov',
            },
            {
              title: 'Napojení reklamních rozhraní',
              text: 'Potřebujete doplnit serverové konverze a ověřit jejich souběh s měřením v prohlížeči.',
              pictogram: 'conversion',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Kdy začít jinak',
          text: 'Pokud chybí měřicí plán, datová vrstva nebo správné předávání souhlasu, doporučíme nejdřív opravit tento základ. U jednoduššího zadání může stačit stávající integrace.',
        },
        {
          type: 'links',
          items: [
            { label: 'Audit měření', href: '/sluzby/audit-mereni' },
            { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co dostanete',
      lead: 'Kapacitu, region, monitoring a odpovědnost za provoz upřesníme v nabídce. Odděleně v ní uvedeme technické zprovoznění upozornění a placenou průběžnou správu.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Návrh řešení',
              text: 'Popis zdrojů dat, cílových systémů a rozdělení měření mezi prohlížeč a server.',
            },
            {
              title: 'Nastavené prostředí',
              text: 'Hosting, doménu a kontejnery podle dohodnutého provozního modelu. Kapacitu navrhneme podle zátěže.',
            },
            {
              title: 'Pravidla pro události',
              text: 'Identifikátory, hodnoty a deduplikaci podle požadavků jednotlivých systémů.',
            },
            {
              title: 'Předávání souhlasů',
              text: 'Mapu podmínek, za kterých se jednotlivé události a údaje smějí předat.',
            },
            {
              title: 'Testy a provozní dokumentaci',
              text: 'Ověření zpracování událostí, postup při chybě a rozdělení odpovědnosti za další provoz.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      title: 'Jak server-side měření funguje',
      lead: 'Vybrané události z webu nebo firemního systému odešleme do server-side GTM. Ten je zpracuje a podle nastavených pravidel předá cílovým nástrojům. Část měření může dál zůstat v prohlížeči.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Server-side řešení samo nezaručuje úplnost dat ani shodu reportů. Způsob předání údajů a respektování volby návštěvníka je nutné nastavit a otestovat.',
          columns: [
            { label: 'Web a firemní systémy', items: ['události z prohlížeče', 'platby a změny stavu poptávek'] },
            { label: 'server-side GTM', items: ['zpracování událostí', 'pravidla předání a souhlasu'] },
            { label: 'analytika a reklama', items: ['Google Analytics 4 a Google Ads', 'Meta, Sklik a další nástroje'] },
          ],
        },
      ],
    },

    {
      id: 'prubeh',
      title: 'Jak probíhá spolupráce',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            { title: 'Upřesnění zadání', text: 'Projdeme web, používané nástroje a otázky, které potřebujete vyřešit.' },
            {
              title: 'Nabídka a součinnost',
              text: 'Dostanete rozsah práce, cenu, výstupy a seznam potřebných přístupů. Domluvíme také zapojení vývojáře nebo agentury.',
            },
            { title: 'Realizace a kontrola', text: 'Provedeme dohodnuté práce a ověříme je na testovacích scénářích.' },
            { title: 'Předání', text: 'Projdeme výsledky a předáme dokumentaci. Další správu nebo monitoring sjednáme samostatně.' },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Nahrazuje server-side řešení cookie lištu?',
      a: 'Ne. Změna technické cesty sama neřeší oprávnění k práci s údaji. Předávání dat nastavíme podle dohodnutých pravidel a volby návštěvníka; popis řešení dodáme i pro právní posouzení.',
    },
    {
      q: 'Z čeho se skládá cena?',
      a: 'Z návrhu a implementace, provozu hostingu a případné průběžné správy. Odhad provozu připravíme podle objemu událostí, kapacity a poskytovatele. Tyto položky uvedeme v nabídce odděleně.',
    },
    {
      q: 'Jaká součinnost je potřeba?',
      a: 'Přístupy do měřicích a reklamních účtů, správa domény a podle řešení také cloudový projekt a vývojář. Před zahájením upřesníme potřebné role i odpovědnost za provoz.',
    },
    {
      q: 'Kdy stačí Google Tag Gateway?',
      a: 'Když zadání odpovídá jeho podporovaným možnostem pro Google tagy. Pokud potřebujete složitější řízení událostí, jiné příjemce nebo napojení firemních systémů, posoudíme server-side GTM či další integrační cestu. Výběr vychází z konkrétního zadání.',
    },
  ],

  related: {
    items: [
      {
        label: 'Audit měření',
        href: '/sluzby/audit-mereni',
        text: 'Prověří současné měření a cookie lištu, na kterých server-side řešení staví.',
      },
      {
        label: 'Cookie lišta a Consent Mode',
        href: '/sluzby/cookie-lista-consent-mode',
        text: 'Řeší sběr a předávání souhlasu, podle kterého se řídí i server-side GTM.',
      },
      {
        label: 'Měření konverzí',
        href: '/sluzby/mereni-konverzi',
        text: 'Sjednotí definice, hodnoty a identifikátory konverzí, které server předává reklamním systémům.',
      },
    ],
  },

  contact: {
    formId: 'lp-server-side',
    title: 'Posoudíme vhodnost server-side měření',
    lead: 'Napište, které nástroje používáte a co potřebujete propojit. Projdeme možnosti, potřebnou součinnost a provozní náklady.',
    placeholder: '',
    leadType: 'consultation',
  },

  schema: {
    name: 'Server-side měření se serverovým Google Tag Managerem',
    serviceType: 'Server-side tracking a měření přes vlastní server',
    description:
      'Návrh a nastavení předávání měřicích událostí přes server-side Google Tag Manager: rozdělení měření mezi prohlížeč a server, hosting a kontejnery podle dohodnutého provozního modelu, pravidla pro identifikátory, hodnoty a deduplikaci, předávání souhlasů, testy a provozní dokumentace.',
    audience: 'E-shopy a B2B firmy',
  },
};
