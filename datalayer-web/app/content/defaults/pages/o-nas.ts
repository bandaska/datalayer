import type { PageInput } from '../../schema';

// Stránka odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty).
// Kapitola k O nás v podkladu chybí, platí jen společná pravidla G01–G07: v menu
// „O datalayer.cz“ (G02), bez absolutních tvrzení („nikdo nevěří“, „čísla sedí
// s tržbami“, „pokračovat může kdokoli“) a bez „technického týmu“, který web nedokládá
// (G01), kontakt „Proberme vaše měření“ bez slibu, co konzultace zjistí. Zůstal hero
// s jedním tlačítkem, „Kdo web provozuje“, „Proč začínáme u datové vrstvy“ a pravidla
// práce s daty. Lidi, role a reference, které audit chce (kap. 1), web zatím nemá
// (rozhodnutí klienta, žádná kontaktní osoba) – stránka je nevymýšlí. Sekce „Kdo web
// provozuje“ ukáže identifikaci provozovatele z Nastavení, až ji klient vyplní, do té
// doby se nevykreslí.

export const page: PageInput = {
  path: 'o-nas',
  kind: 'page',
  navTitle: 'O datalayer.cz',
  tagline: 'jak pracujeme s daty a pro koho',
  pictogram: 'gov',

  seo: {
    title: 'O datalayer.cz – jak pracujeme s daty a pro koho',
    description:
      'Jak datalayer.cz pracuje s daty klientů a pro koho stavíme měření: GA4, GTM, server-side měření, souhlasy s Consent Mode a BigQuery v účtech vaší firmy.',
  },

  hero: {
    h1: 'Jak pracujeme s daty a pro koho',
    subtitle:
      'Stavíme a ověřujeme měření pro e-shopy, B2B firmy a velké firmy – od datové vrstvy přes Google Tag Manager (GTM), GA4 a souhlasy po server-side měření a BigQuery. Pracujeme ve vašich účtech a každou implementaci předáme s dokumentací.',
    primaryCta: { label: 'Napsat nám', href: '#kontakt' },
  },

  sections: [
    {
      id: 'provozovatel',
      title: 'Kdo web provozuje',
      tone: 'white',
      // bez údajů v Nastavení (Provozovatel webu) web sekci nevykreslí
      blocks: [{ type: 'operator' }],
    },
    {
      id: 'pristup',
      title: 'Proč začínáme u datové vrstvy',
      lead: 'Když se čísla v nástrojích rozcházejí, problém většinou není v samotném nástroji.',
      tone: 'light',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Problém bývá ve spodní vrstvě: v tom, jak web data sbírá, jestli respektuje souhlas a jestli někdo porovnal data se zdrojovými záznamy. Proto začínáme u datové vrstvy, podle které nese jméno i datalayer.cz.',
            'Nasadit kód pro nás neznamená konec projektu. Data porovnáme s objednávkami nebo s CRM a rozdíly vysvětlíme.',
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
            '<strong>Osobní údaje neposíláme v čitelné podobě.</strong> Do GA4 neposíláme e-maily ani telefony, do reklamních systémů jen hash a jen se souhlasem.',
            '<strong>Žádné černé skříňky.</strong> Stavíme na standardních nástrojích jako GTM, GA4 a BigQuery, takže na nás může navázat váš tým nebo další dodavatel.',
          ],
        },
        { type: 'paragraphs', items: ['Nejsme advokátní kancelář – právní posouzení konkrétního zpracování zajišťuje váš právník.'] },
      ],
    },
  ],

  faq: [],

  contact: {
    formId: 'o-nas',
    title: 'Proberme vaše měření',
    lead: 'Napište adresu webu a stručně popište, co potřebujete vyřešit. Na úvodní konzultaci upřesníme zadání a navrhneme další postup.',
    placeholder: '',
    leadType: 'consultation',
  },
};
