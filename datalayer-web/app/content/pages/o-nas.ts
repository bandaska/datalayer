import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. C
// (návrh v1, 8. října 2026). Sekce „Pro koho pracujeme“ přebírá texty segmentů
// z 04_homepage-ux/homepage-audit-a-navrh.md (sekce 2).
// Do dodání podkladů klientem chybí: fotografie, bio a fakta o Vítu Novotném
// (praxe, certifikace, přednášky, LinkedIn), citace, příběh založení, tým, firemní
// údaje (IČO, DIČ, sídlo, rejstřík), telefon. Tvrzení o správě kampaní čeká
// na rozhodnutí klienta (viz kap. B6), proto na stránce není.
// Teaser vlastního webu neuvádí server-side GTM ani rozšířené konverze – zatím neběží.

export const page: LandingPageContent = {
  path: 'o-nas',
  kind: 'page',
  navTitle: 'O nás',
  tagline: 'kdo jsme a jak pracujeme s daty',
  pictogram: 'gov',

  seo: {
    title: 'O nás: Vít Novotný a tým datalayer.cz',
    description:
      'Kdo stojí za datalayer.cz, jak pracujeme s daty klientů a co od vás budeme potřebovat. Technický tým pro GA4, GTM, server-side, consent a BigQuery.',
  },

  hero: {
    eyebrow: 'o nás',
    h1: 'Kdo stojí za datalayer.cz a jak pracujeme s daty',
    subtitle:
      'Za datalayer.cz stojí Vít Novotný, tracking & data engineer. Věnujeme se měření: datové vrstvě, Tag Manageru, GA4, souhlasům, server-side trackingu a BigQuery.',
    quickAnswer:
      'Za datalayer.cz stojí Vít Novotný, tracking & data engineer. Stavíme a ověřujeme měření pro e-shopy, B2B a velké firmy: datovou vrstvu, Google Tag Manager, GA4, Consent Mode, server-side tracking a BigQuery. Pracujeme ve vašich účtech, data patří vám a každou implementaci předáme s dokumentací.',
    primaryCta: { label: 'Napsat Vítovi', href: '#kontakt' },
    secondaryCta: { label: 'Jak pracujeme', href: '/jak-pracujeme' },
    microcopy: 'Odpovídá přímo Vít Novotný · odpověď do jednoho pracovního dne',
  },

  trust: [
    'Účty a data zakládáme na vaši firmu',
    'Souhlas podle zákona a doporučení ÚOOÚ',
    'Validace před každým předáním',
    'Standardní nástroje, žádné černé skříňky',
  ],

  sections: [
    {
      id: 'pristup',
      eyebrow: 'přístup',
      title: 'Proč začínáme u datové vrstvy',
      lead: 'Když firma rozhoduje o reklamě podle dat, kterým nikdo nevěří, problém většinou není v nástroji.',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Problém bývá ve spodní vrstvě: v tom, jak web data sbírá, jestli respektuje souhlas a jestli někdo ověřil, že čísla sedí. Proto začínáme u datové vrstvy, podle které nese jméno i datalayer.cz.',
            'Nasadit kód pro nás neznamená konec projektu. Končíme až ve chvíli, kdy čísla sedí s tržbami nebo s CRM a rozdíly umíme vysvětlit.',
            'Neprodáváme krabicové nástroje. Měření stavíme ve vašich účtech a předáváme ho s dokumentací, podle které může pokračovat kdokoli.',
          ],
        },
      ],
    },
    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Pro koho pracujeme',
      lead: 'E-shop potřebuje jiná data než firma, která prodává přes obchodníky.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'E-shopy',
              pictogram: 'eshop',
              text: 'Pro e-shopy, kterým GA4 ukazuje jiné tržby než administrace. Stavíme e-commerce měření podle schématu GA4, aby Google Ads, Meta, Sklik i Heureka dostaly stejnou hodnotu objednávky.',
              link: { label: 'Měření pro e-shopy', href: '/reseni/e-shopy' },
            },
            {
              title: 'B2B a lead generation',
              pictogram: 'lead',
              text: 'Víte, kolik přišlo poptávek, ale ne, které z nich se změnily v zakázku. Propojíme formuláře s CRM a reklamním systémům pošleme i to, co se s poptávkou stalo dál.',
              link: { label: 'Měření pro B2B a lead generation', href: '/reseni/b2b-a-lead-generation' },
            },
            {
              title: 'Velké firmy',
              pictogram: 'gov',
              text: 'Více domén, týmů a dodavatelů a každý měří trochu jinak. Zavedeme měřicí plán, názvosloví a verzování jako standard. Server-side a BigQuery postavíme ve vašem Google Cloudu.',
              link: { label: 'Měření pro velké firmy', href: '/reseni/velke-firmy' },
            },
          ],
        },
      ],
    },
    {
      id: 'principy',
      eyebrow: 'principy',
      title: 'Jak zacházíme s daty – vašimi i vašich zákazníků',
      lead: 'Šest pravidel, která platí pro každý projekt.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: '01',
              title: 'Data patří vám',
              text: 'Účty, kontejnery, projekty v Google Cloudu i data zakládáme na vaši firmu. My máme jen přístup, který můžete kdykoli odebrat.',
            },
            {
              tag: '02',
              title: 'Souhlas je podmínka, ne překážka',
              text: 'Měření nastavujeme podle § 89 odst. 3 zákona o elektronických komunikacích a doporučení ÚOOÚ. Analytické a marketingové nástroje smějí ukládat cookies až po souhlasu a odmítnutí musí být stejně snadné jako přijetí.',
            },
            {
              tag: '03',
              title: 'Jen data, která někdo použije',
              text: 'Měříme to, co je v měřicím plánu a slouží k rozhodnutí. Méně dat znamená menší riziko i rychlejší web.',
            },
            {
              tag: '04',
              title: 'Osobní údaje nikdy v čitelné podobě',
              text: 'Do GA4 neposíláme e-maily ani telefony. Do reklamních systémů je posíláme jen jako hash a jen se souhlasem.',
            },
            {
              tag: '05',
              title: 'Ověřit před předáním',
              text: 'Každou implementaci ověříme proti administraci, CRM nebo testovacím scénářům a výsledek vám dáme písemně.',
            },
            {
              tag: '06',
              title: 'Žádné černé skříňky',
              text: 'Stavíme na standardních nástrojích jako GTM, server-side GTM, GA4 a BigQuery, ne na proprietárních skriptech. Po nás může pokračovat kdokoli.',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: ['Nejsme advokátní kancelář. Právní posouzení konkrétního zpracování zajišťuje váš právník.'],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Jak měříme vlastní web',
          text: 'Část toho, co nastavujeme klientům, si můžete prohlédnout přímo u nás. Na datalayer.cz běží naše vlastní cookie lišta s Consent Mode v2 a výchozím stavem <code>denied</code>. Nativní formulář bez HubSpotu nezapisuje e-mail do <code>dataLayer</code> v čitelné podobě, nanejvýš jako hash SHA-256 a jen se souhlasem. Ověřit si to můžete v nástrojích pro vývojáře přímo v prohlížeči. <a href="/jak-pracujeme#vlastni-web">Jak měříme vlastní web</a>',
        },
      ],
    },
    {
      id: 'co-potrebujeme',
      eyebrow: 'spolupráce',
      title: 'Co od vás budeme potřebovat',
      lead: 'Pět věcí, bez kterých se projekt neobejde.',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'bullet',
          items: [
            '<strong>Jednoho člověka, který rozhoduje</strong> – schválí měřicí plán a priority.',
            '<strong>Přístupy do nástrojů</strong> – postup popisuje návod <a href="/jak-pracujeme#pristupy">Jak nám dát přístupy</a>.',
            '<strong>Vývojáře nebo podporu platformy</strong>, pokud je potřeba upravit web.',
            '<strong>Data pro ověření</strong> – export objednávek nebo leadů za období, které spolu vybereme.',
            '<strong>Čas na předání</strong> – hodinu až hodinu a půl lidí, kteří budou měření používat.',
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Kdo odpoví na moji zprávu?',
      a: 'Přímo Vít Novotný, tracking & data engineer. Ozve se do jednoho pracovního dne.',
    },
    {
      q: 'Komu patří účty a data?',
      a: 'Vám. GA4, Tag Manager, Google Cloud i reklamní účty zakládáme na vaši firmu a my dostáváme jen přístup, který můžete kdykoli odebrat. Po skončení spolupráce nic nemigrujete.',
    },
    {
      q: 'Může po vás pokračovat někdo jiný?',
      a: 'Ano. Stavíme na standardních nástrojích a dokumentace je výstup každého projektu. Podle ní může pokračovat interní tým i jiný dodavatel.',
    },
    {
      q: 'Posíláte osobní údaje do GA4?',
      a: 'Ne. Do GA4 neposíláme e-maily ani telefony. Do reklamních systémů je posíláme jen jako hash SHA-256 a jen se souhlasem návštěvníka.',
    },
    {
      q: 'Řešíte i právní stránku cookies a souhlasu?',
      a: 'Měření nastavujeme podle zákona o elektronických komunikacích a doporučení ÚOOÚ. Nejsme ale advokátní kancelář, takže právní posouzení konkrétního zpracování zajišťuje váš právník.',
    },
  ],

  relatedPages: ['jak-pracujeme', 'sluzby/audit-mereni', 'kontakt'],

  contact: {
    formId: 'o-nas',
    title: 'Chcete nás nejdřív poznat? Napište Vítovi',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Odpovídá přímo Vít Novotný.',
    placeholder: 'Krátce napište, co řešíte…',
    leadType: 'consultation',
  },
};
