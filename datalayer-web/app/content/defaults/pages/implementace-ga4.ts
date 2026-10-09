import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 3.2 a 5.2): sloučená služba „GA4 a Google Tag Manager“, H1, title
// i description cílí na nastavení GA4 i GTM. Zůstal hero s jedním tlačítkem,
// „Poznáváte se?“ (symptom „Desítky tagů, které nikdo nezná“ ze zrušené stránky
// Google Tag Manager) a „Co uděláme a co dostanete“ (specifikace datové vrstvy
// ze zrušené stránky Datová vrstva, inventura kontejneru ze stránky GTM a karta
// Monitoring ze zrušené Správy webu a měření). Rozhodnutí „stará, nebo nová
// property“ je otázka FAQ. Schéma, postup, kontrolní seznam, Technické detaily
// a pás Pokračujte zmizely. Dokud klient nedodá podklady, stránka neobsahuje
// případovou studii, počty implementací, délky kroků ani lhůty u monitoringu.

export const page: PageInput = {
  path: 'sluzby/implementace-ga4',
  kind: 'service',
  navTitle: 'GA4 a Google Tag Manager',
  tagline: 'čísla, která sedí, a tagy v pořádku',
  pictogram: 'ga4',
  menuGroup: 'sber',

  seo: {
    title: 'Nastavení GA4 a Google Tag Manageru | datalayer.cz',
    description:
      'Nastavíme Google Analytics 4 a Google Tag Manager od nuly, nebo opravíme a uklidíme ty stávající. E-commerce, poptávky, tagy a souhlas. Čísla porovnáme s e-shopem.',
  },

  hero: {
    h1: 'Nastavení GA4 a Google Tag Manageru, které sedí s vašimi tržbami',
    subtitle:
      'Implementace GA4 neznamená jen vložit měřicí kód. Nastavíme Google Analytics 4 a Google Tag Manager (GTM) od nuly, nebo opravíme a uklidíme to, co už máte: měřicí plán, datovou vrstvu, e-commerce, poptávky, Consent Mode v2 a propojení s Google Ads, Search Console a BigQuery. V GTM zavedeme pravidla pro názvy, verze a oprávnění. Výsledek ověříme testovacími scénáři a porovnáním s administrací e-shopu nebo s CRM.',
    primaryCta: { label: 'Konzultovat GA4 a GTM', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Když někdo GA4 a GTM jen „vloží“ na web, čísla obvykle během prvních měsíců přestanou odpovídat skutečnosti. Pokud nevíte, co z toho platí u vás, začněte <a href="/sluzby/audit-mereni">auditem měření</a>.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'GA4 ukazuje jiné tržby než e-shop',
              text: 'Čísla se liší, nikdo neví, které platí, a vedení pak nevěří ani reportům z reklam.',
              pictogram: 'ga4',
            },
            {
              title: 'Desítky tagů, které nikdo nezná',
              text: 'Agentury se střídaly, tagy s názvy jako „New Tag (3)“ zůstaly a nikdo neví, které z nich jsou potřeba.',
              pictogram: 'gtm',
            },
            {
              title: 'Návštěvy z reklam padají do (not set)',
              text: 'GA4 ztratí zdroj návštěvy na platební bráně nebo mezi doménami a kampaně pak vypadají hůř, než jsou.',
              pictogram: 'warn',
            },
            {
              title: 'Poptávky jen jako „děkovací stránka“',
              text: 'Nevíte, který formulář a která kampaň přinesly zakázku, protože data končí v GA4 a do CRM se nedostanou.',
              pictogram: 'lead',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Kromě „hotového GA4“ a kontejneru GTM dostanete i dokumenty, podle kterých může měření převzít kdokoli jiný.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Měřicí plán',
              text: 'Jaké otázky mají data zodpovědět, jaké události k tomu potřebujeme a kde je v GA4 najdete.',
            },
            {
              title: 'Specifikace datové vrstvy',
              text: 'Zadání pro vývojáře: kontext stránky, e-commerce podle schématu GA4, poptávky, uživatelské atributy a pravidla zápisu s ukázkami kódu.',
            },
            {
              title: 'GA4 a Google Tag Manager (GTM) podle plánu',
              text: 'E-commerce, poptávky, tři až osm klíčových událostí, filtry, Consent Mode v2 a propojení. Kontejner GTM má verze s popisem změn.',
            },
            {
              title: 'Inventura a úklid kontejneru',
              text: 'Tabulka všech tagů s doporučením ponechat, upravit, nebo smazat. Po dohodě s vámi kontejner uklidíme a zavedeme jednotné názvy, složky a oprávnění, aby se v něm vyznal i další člověk.',
            },
            {
              title: 'Testovací protokol',
              text: 'Kontrola v Tag Assistantu a scénáře: nákup kartou, převodem i s kupónem, návrat z platební brány a obnovení děkovací stránky.',
            },
            {
              title: 'Porovnání s administrací nebo CRM',
              text: 'GA4 porovnáme s objednávkami či poptávkami za stejné období a vysvětlíme rozdíly.',
            },
            {
              title: 'Monitoring po releasech',
              text: 'Na přání hlídáme měření i po předání: po releasu webu automatický test projde nákup nebo formulář a kontrola dat porovná události s průměrem a s objednávkami. Když něco nesedí, přijde upozornění.',
            },
            {
              title: 'Školení, BigQuery nebo dashboard',
              text: 'Volitelně firemní školení na vašich datech, export do BigQuery nebo dashboard v Data Studiu (dříve Looker Studio).',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Kolik stojí nastavení GA4 a GTM?',
      a: 'Cenu určuje rozsah, ne balíček: hlavně jestli web už má datovou vrstvu, kolik typů konverzí, platforem a domén měříme, jak velký je kontejner GTM a jestli chcete i BigQuery, dashboardy nebo školení. Po úvodní konzultaci a krátké analýze dostanete nabídku s pevným rozsahem a seznamem výstupů. Samotné GA4 i GTM nic nestojí, platíte jen BigQuery nad rámec bezplatných limitů, případně licenci GA4 360 nebo Tag Manager 360.',
    },
    {
      q: 'Kdy opravit stávající GA4 a kdy založit novou property?',
      a: 'Většinou opravujeme property, kterou už máte, protože v ní zůstane historie, a opravy označíme v GA4 anotací s datem. Novou založíme, když property patří agentuře nebo bývalému dodavateli a převod nejde, když je historie tak chybná, že by spíš škodila, nebo když jedna property míchá nesouvisející weby či testovací a produkční data. Při přechodu necháme obě property jeden až tři měsíce běžet souběžně a pak přepneme reporty. U GTM zakládáme nový kontejner, jen když je stávající tak chaotický, že vyjde levněji začít znovu.',
    },
    {
      q: 'Budeme potřebovat vývojáře?',
      a: 'Obvykle ano, ale jen na začátku: vloží kód kontejneru, nasadí datovou vrstvu podle naší specifikace a připraví testovací prostředí. GA4 a GTM nastavíme my a práci vývojářů otestujeme. U Shoptetu, Shopify nebo WooCommerce zkontrolujeme vestavěnou integraci a rozhodneme, jestli ji použít, rozšířit, nebo nahradit vlastní datovou vrstvou.',
    },
    {
      q: 'Komu budou patřit účty a data?',
      a: 'Vám. Property GA4, kontejner GTM i projekt BigQuery zakládáme na firemních účtech, administrátor jste vy a my v nich máme jen oprávnění, která nám přidělíte. Po skončení spolupráce nám je jednoduše odeberete. Pokud dnes účty patří agentuře nebo bývalému dodavateli, pomůžeme s převodem administrátorských práv, nebo s bezpečným přechodem na nové účty.',
    },
  ],

  contact: {
    formId: 'lp-ga4',
    title: 'Nastavíme GA4 a GTM tak, aby čísla seděla s tržbami',
    lead: 'Na úvodní konzultaci projdeme GA4 a kontejner GTM a řekneme, co opravit jako první.',
    placeholder: 'Adresa webu a co řešíte, např. „GA4 ukazuje jiné tržby než e-shop a v GTM máme desítky neznámých tagů“',
    leadType: 'consultation',
  },

  schema: {
    name: 'GA4 a Google Tag Manager',
    serviceType: 'Nastavení Google Analytics 4 a Google Tag Manageru',
    description:
      'Nastavení Google Analytics 4 a Google Tag Manageru od nuly i oprava a úklid stávajících: měřicí plán, specifikace datové vrstvy, e-commerce a klíčové události, Consent Mode v2, názvosloví, verze a oprávnění v GTM, propojení s Google Ads, Search Console a BigQuery a porovnání s administrací e-shopu nebo CRM.',
    audience: 'E-shopy, B2B a lead generation, velké firmy',
  },
};
