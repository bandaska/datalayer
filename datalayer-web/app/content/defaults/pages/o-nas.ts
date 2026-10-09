import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. C
// (návrh v1, 8. října 2026), úpravy podle vyhodnocení webu (9. října 2026, kap. 5.15
// a 8). Sekce „Pro koho pracujeme“ přebírá texty segmentů z 04_homepage-ux/
// homepage-audit-a-navrh.md (sekce 2). Pravidla práce s daty jsme zkrátili na čtyři body,
// postup a „co od vás budeme potřebovat“ najde návštěvník na /jak-pracujeme.
// Web zatím nemá obličej ani kontaktní osobu (rozhodnutí klienta, 9. října 2026):
// stránka neuvádí jméno, fotku ani blok osoby. Sekce „Kdo web provozuje“ ukáže jen
// identifikaci provozovatele z Nastavení, jakmile ji klient vyplní. Do té doby chybí
// firemní údaje (IČO, DIČ, sídlo, rejstřík), příběh založení a telefon. Tvrzení o správě
// kampaní čeká na rozhodnutí klienta (viz kap. B6), proto na stránce není.

export const page: PageInput = {
  path: 'o-nas',
  kind: 'page',
  navTitle: 'O nás',
  tagline: 'jak pracujeme s daty a pro koho',
  pictogram: 'gov',

  seo: {
    title: 'O nás: jak pracujeme s daty | datalayer.cz',
    description:
      'Jak datalayer.cz pracuje s daty klientů, pro koho stavíme měření a co od vás budeme potřebovat. Technický tým pro GA4, GTM, server-side, consent a BigQuery.',
  },

  hero: {
    eyebrow: 'o nás',
    h1: 'O nás: jak pracujeme s daty a pro koho',
    subtitle:
      'Stavíme a ověřujeme měření pro e-shopy, B2B a velké firmy – od datové vrstvy přes Tag Manager, GA4 a souhlasy po server-side tracking a BigQuery. Pracujeme ve vašich účtech a každou implementaci předáme s dokumentací.',
    primaryCta: { label: 'Napsat nám', href: '#kontakt' },
    secondaryCta: { label: 'Jak pracujeme', href: '/jak-pracujeme' },
    microcopy: 'Úvodní konzultace zdarma · odpověď do jednoho pracovního dne',
  },

  trust: ['Účty a data zakládáme na vaši firmu', 'Validace před každým předáním', 'Standardní nástroje, žádné černé skříňky'],

  sections: [
    {
      id: 'provozovatel',
      eyebrow: 'provozovatel',
      title: 'Kdo web provozuje',
      tone: 'white',
      // bez údajů v Nastavení → Provozovatel webu web sekci nevykreslí
      blocks: [{ type: 'operator' }],
    },
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
      lead: 'Čtyři pravidla, která platí pro každý projekt.',
      tone: 'white',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Data patří vám.</strong> Účty, kontejnery, projekty v Google Cloudu i data zakládáme na vaši firmu. My máme jen přístup, který můžete kdykoli odebrat.',
            '<strong>Souhlas je podmínka, ne překážka.</strong> Měření nastavujeme podle § 89 odst. 3 zákona o elektronických komunikacích a doporučení ÚOOÚ. Odmítnutí musí být stejně snadné jako přijetí.',
            '<strong>Osobní údaje nikdy v čitelné podobě.</strong> Do GA4 neposíláme e-maily ani telefony, do reklamních systémů jen hash a jen se souhlasem.',
            '<strong>Žádné černé skříňky.</strong> Stavíme na standardních nástrojích jako GTM, GA4 a BigQuery, takže po nás může pokračovat kdokoli.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Nejsme advokátní kancelář, právní posouzení konkrétního zpracování zajišťuje váš právník. Postup spolupráce a to, co od vás v jednotlivých krocích budeme potřebovat, popisuje stránka <a href="/jak-pracujeme">Jak pracujeme</a>.',
          ],
        },
      ],
    },
  ],

  faq: [
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
    title: 'Chcete nás nejdřív poznat? Napište nám',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Ozveme se do jednoho pracovního dne.',
    placeholder: 'Krátce napište, co řešíte…',
    leadType: 'consultation',
  },
};
