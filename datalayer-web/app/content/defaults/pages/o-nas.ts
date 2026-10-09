import type { PageInput } from '../../schema';

// Stránka O nás prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 5.2): zůstal hero s jedním tlačítkem, „Proč začínáme u datové vrstvy“, pravidla
// práce s daty a kontaktní blok; „Pro koho pracujeme“ (segmenty jsou v menu) a FAQ
// (opakovalo úvodní stránku) vypadly. Web zatím nemá obličej ani kontaktní osobu
// (rozhodnutí klienta): sekce „Kdo web provozuje“ ukáže identifikaci provozovatele
// z Nastavení, až ji klient vyplní, do té doby se nevykreslí.

export const page: PageInput = {
  path: 'o-nas',
  kind: 'page',
  navTitle: 'O nás',
  tagline: 'jak pracujeme s daty a pro koho',
  pictogram: 'gov',

  seo: {
    title: 'O nás – jak pracujeme s daty | datalayer.cz',
    description:
      'Jak datalayer.cz pracuje s daty klientů a pro koho stavíme měření. Technický tým pro GA4, GTM, server-side měření, souhlas (Consent Mode) a BigQuery.',
  },

  hero: {
    h1: 'Jak pracujeme s daty a pro koho',
    subtitle:
      'Stavíme a ověřujeme měření pro e-shopy, B2B firmy a velké firmy – od datové vrstvy přes Google Tag Manager (GTM), GA4 a souhlasy po server-side tracking a BigQuery. Pracujeme ve vašich účtech a každou implementaci předáme s dokumentací.',
    primaryCta: { label: 'Napsat nám', href: '#kontakt' },
  },

  sections: [
    {
      id: 'provozovatel',
      title: 'Kdo web provozuje',
      tone: 'white',
      // bez údajů v Nastavení → Provozovatel webu web sekci nevykreslí
      blocks: [{ type: 'operator' }],
    },
    {
      id: 'pristup',
      title: 'Proč začínáme u datové vrstvy',
      lead: 'Když firma rozhoduje o reklamě podle dat, kterým nikdo nevěří, problém většinou není v nástroji.',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Problém bývá ve spodní vrstvě: v tom, jak web data sbírá, jestli respektuje souhlas a jestli někdo ověřil, že čísla sedí. Proto začínáme u datové vrstvy, podle které nese jméno i datalayer.cz.',
            'Nasadit kód pro nás neznamená konec projektu. Končíme až ve chvíli, kdy čísla sedí s tržbami nebo s CRM a rozdíly umíme vysvětlit.',
            'Neprodáváme krabicové nástroje. Měření stavíme ve vašich účtech a předáváme ho s dokumentací.',
          ],
        },
      ],
    },
    {
      id: 'principy',
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
        { type: 'paragraphs', items: ['Nejsme advokátní kancelář – právní posouzení konkrétního zpracování zajišťuje váš právník.'] },
      ],
    },
  ],

  faq: [],

  contact: {
    formId: 'o-nas',
    title: 'Napište nám, co řešíte',
    lead: 'Napište nám e-mail nebo vyplňte formulář. Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první.',
    placeholder: 'Adresa webu a co řešíte, např. „Měření nám nastavila agentura a nemáme k němu dokumentaci“',
    leadType: 'consultation',
  },
};
