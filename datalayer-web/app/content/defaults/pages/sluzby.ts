import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. B
// (návrh v1, 8. října 2026), úpravy podle vyhodnocení webu (9. října 2026, kap. 5.15):
// tabulka situací je seznam „situace → služba“ ve vzoru symptomů z homepage, kroky
// spolupráce nahradil odkaz na /jak-pracujeme a záložky segmentů zmizely – na řešení
// odkazuje přehled pod hero. Přehled všech služeb ve třech skupinách a řešení podle
// typu firmy vykreslí blok menuGrid z menu Služby a Řešení (Navigace v administraci).
// Interaktivní pomůcku se čtyřmi otázkami web zatím nemá, její roli přebírá seznam
// situací (#cim-zacit). Do rozhodnutí klienta (kap. B6) chybí FAQ „Pracujete s malými
// weby?“ a „Děláte i správu kampaní?“. Stránka neuvádí délky kroků ani délku auditu.
// Texty prošly jazykovým auditem z 9. října 2026 (kap. 3.3).

export const page: PageInput = {
  path: 'sluzby',
  kind: 'page',
  navTitle: 'Služby',
  tagline: 'od sběru dat po reporting a správu',
  pictogram: 'datalayer',

  seo: {
    title: 'Služby webové analytiky: GA4, GTM, BigQuery | datalayer.cz',
    description:
      'Přehled jedenácti služeb webové analytiky: sběr dat, data a reporting, audity a správa. Podle vaší situace doporučíme, čím začít.',
  },

  hero: {
    eyebrow: 'sběr dat, data a reporting, audity a správa',
    h1: 'Služby webové analytiky a měření',
    subtitle:
      'Jedenáct služeb ve třech skupinách – od sběru dat na webu přes BigQuery a reporting po audity a dlouhodobou správu. Když nevíte, kde je problém, začněte auditem měření: na webu nic nemění a ukáže chyby s prioritou podle dopadu.',
    primaryCta: { label: 'Konzultovat projekt', href: '#kontakt' },
    secondaryCta: { label: 'Pomozte mi vybrat', href: '#cim-zacit' },
    microcopy: 'Úvodní konzultace zdarma a nezávazně',
  },

  trust: ['Účty a data zůstávají vám', 'Nabídka s pevným rozsahem a výstupy', 'Dokumentace, podle které může pokračovat kdokoli'],

  sections: [
    {
      id: 'prehled',
      eyebrow: 'přehled služeb',
      title: 'Jedenáct služeb ve třech skupinách',
      lead: 'Začít můžete kteroukoli službou. Na stránkách Řešení skládáme služby do celku podle typu firmy – pro e-shopy, B2B firmy a velké firmy.',
      tone: 'deep',
      blocks: [{ type: 'menuGrid', menuId: 'sluzby', extraMenuId: 'reseni', extraTitle: 'Řešení podle typu firmy' }],
    },
    {
      id: 'cim-zacit',
      eyebrow: 'nevíte, co potřebujete?',
      title: 'Nejčastější situace a čím začít',
      lead: 'Najděte situaci, která je vám nejbližší. Když tu svou nenajdete, popište ji ve formuláři a doporučíme první krok.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          // na mobilu tři situace a tlačítko „Zobrazit další“
          variant: 'symptoms',
          items: [
            {
              title: 'GA4 ukazuje jiné tržby než e-shop',
              text: 'Rozdíl má víc příčin a audit je nejdřív oddělí.',
              pictogram: 'audit',
              link: { label: 'Audit měření', href: '/sluzby/audit-mereni' },
            },
            {
              title: 'Po nasazení cookie lišty spadly konverze',
              text: 'Lišta často funguje, ale signály souhlasu chybí nebo přicházejí pozdě.',
              pictogram: 'consent',
              link: { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              title: 'Meta hlásí méně nákupů než e-shop',
              text: 'Pomůže Meta Conversions API přes server s deduplikací a lepším párováním.',
              pictogram: 'serverside',
              link: { label: 'Server-side tracking', href: '/sluzby/server-side-tracking' },
            },
            {
              title: 'Report pro vedení dělá někdo ručně',
              text: 'Postavíme automatický report nad daty, která jsme předem ověřili.',
              pictogram: 'dashboard',
              link: { label: 'Dashboardy a reporting', href: '/sluzby/dashboardy-a-reporting' },
            },
            {
              title: 'Stavíme nový web nebo e-shop',
              text: 'Zadání pro vývojáře před začátkem vývoje vyjde levněji než pozdější opravy.',
              pictogram: 'datalayer',
              link: { label: 'Datová vrstva', href: '/sluzby/datova-vrstva' },
            },
            {
              title: 'Měření skoro nemáme',
              text: 'Postavíme základ: GA4 přes Google Tag Manager (GTM) s cookie lištou.',
              pictogram: 'ga4',
              link: { label: 'Implementace GA4', href: '/sluzby/implementace-ga4' },
            },
            {
              title: 'Chceme spojit GA4 s daty z CRM nebo ERP',
              text: 'BigQuery uloží surová data a nad nimi postavíme vlastní datový model.',
              pictogram: 'bigquery',
              link: { label: 'BigQuery', href: '/sluzby/bigquery' },
            },
            {
              title: 'Měření se opakovaně rozbíjí',
              text: 'Monitoring a pravidelná péče hlídají, aby měření po dalším releasu nespadlo.',
              pictogram: 'monitor',
              link: { label: 'Správa webu a měření', href: '/sluzby/sprava-webu-a-mereni' },
            },
          ],
        },
      ],
    },
    {
      id: 'navaznost',
      eyebrow: 'souvislosti',
      title: 'Jak služby navazují',
      lead: 'Data vznikají na webu, BigQuery je ukládá a report z nich ukáže výsledky. Audit na začátku řekne, kde je problém, průběžná správa hlídá, aby se nevrátil.',
      tone: 'white',
      blocks: [
        {
          type: 'flow',
          caption:
            'Jak služby navazují: audit na začátku, sběr dat na webu, BigQuery, reporting a průběžná správa a monitoring nad všemi kroky.',
          columns: [
            { label: 'Audit', items: ['audit měření'], note: 'na začátku' },
            {
              label: 'Sběr dat',
              items: ['datová vrstva', 'Google Tag Manager', 'GA4', 'Consent Mode', 'server-side tracking', 'konverze v reklamních systémech'],
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
        {
          type: 'paragraphs',
          items: [
            'Postup spolupráce je u všech služeb stejný: pět kroků od auditu po předání. Popisuje ho stránka <a href="/jak-pracujeme">Jak pracujeme</a>.',
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Mohu si objednat jen jednu službu?',
      a: 'Ano. Každá služba má samostatný rozsah a výstupy. Pokud ale zjistíme, že problém je jinde, řekneme vám to dřív, než začneme. Třeba když chcete server-side měření, ale chyba je v datové vrstvě.',
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
      a: 'Vždy vám. GA4, GTM, Google Cloud i reklamní účty běží pod vaší firmou a my dostáváme přístup. Po skončení spolupráce nic nemigrujete a dostanete dokumentaci, podle které může pokračovat kdokoli jiný.',
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
    lead: 'Na úvodní konzultaci projdeme vaše měření a doporučíme, čím začít.',
    placeholder: 'Např. nevíme, jestli potřebujeme server-side měření, nebo jen opravit GA4…',
    leadType: 'consultation',
  },
};
