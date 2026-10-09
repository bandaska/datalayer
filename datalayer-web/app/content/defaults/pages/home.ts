import type { PageInput } from '../../schema';

// Homepage podle seo-analyza/04_homepage-ux/homepage-audit-a-navrh.md.
// Výchozí obsah – po migraci se edituje v administraci (Stránky → Úvod).
// Sekce „Ověřte si nás“ čeká, až na webu poběží server-side GTM. Kroky spolupráce
// bere blok „Postup“ z Textů webu, stejně jako stránky služeb (vyhodnocení webu, kap. 6.1).
// Texty prošly jazykovým auditem z 9. října 2026 (kap. 3.1 a 5.1), hero zůstává beze změny.

export const page: PageInput = {
  path: '',
  kind: 'home',
  navTitle: 'Úvod',
  tagline: 'webová analytika a měření',
  pictogram: 'datalayer',
  ogImage: '/og/default.png',

  seo: {
    title: 'Webová analytika a měření pro e-shopy a firmy | datalayer.cz',
    description:
      'Implementace GA4, Google Tag Manager, server-side tracking a Consent Mode v2. Měření, které sedí s tržbami – s dokumentací. Konzultace zdarma.',
  },

  hero: {
    variant: 'diagram',
    eyebrow: 'Webová analytika a měření pro e-shopy, B2B a velké firmy',
    h1: 'Stavíme neprůstřelné datové základy pro váš růst.',
    h1Highlight: 'datové základy',
    subtitle:
      'Navrhneme, nasadíme a ověříme měření od datové vrstvy po BigQuery: GA4, Google Tag Manager, server-side tracking a Consent Mode v2. S dokumentací a s daty, která vlastníte vy.',
    primaryCta: { label: 'Konzultovat projekt', href: '#kontakt' },
    secondaryCta: { label: 'Jak pracujeme', href: '/jak-pracujeme' },
    microcopy: 'Úvodní konzultace zdarma a nezávazně',
  },

  sections: [
    {
      id: 'pro-koho',
      eyebrow: 'Pro koho',
      title: 'Měření podle toho, jak vyděláváte',
      lead: 'E-shop potřebuje jiná data než firma, která prodává přes obchodníky. Vyberte si, co je vám nejblíž.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'E-shopy',
              pictogram: 'eshop',
              text: 'GA4 ukazuje jiné tržby než administrace a reklamní systémy si přivlastňují stejné objednávky.',
              bullets: [
                'měření e-commerce podle schématu GA4',
                'Google Ads, Meta, Sklik i Heureka se stejnou hodnotou objednávky',
                'marže a vratky v reportu',
              ],
              tags: ['Shoptet', 'Upgates', 'WooCommerce', 'Shopify'],
              link: { label: 'Měření pro e-shopy', href: '/reseni/e-shopy' },
            },
            {
              title: 'B2B a lead generation',
              pictogram: 'lead',
              text: 'Víte, kolik přišlo poptávek. Nevíte, které z nich se změnily v zakázku – a reklamní systémy to nevědí také.',
              bullets: [
                'měření formulářů a hovorů bez osobních údajů v analytice',
                'propojení s CRM a offline konverze',
                'cena leadu i zakázky',
              ],
              tags: ['HubSpot', 'Pipedrive', 'Raynet'],
              link: { label: 'Měření pro B2B', href: '/reseni/b2b-a-lead-generation' },
            },
            {
              title: 'Velké firmy',
              pictogram: 'gov',
              text: 'Více domén, týmů a dodavatelů. Každý měří trochu jinak a nikdo nemá celkový obraz.',
              bullets: [
                'měřicí plán, názvosloví a verzování jako standard',
                'server-side a BigQuery ve vašem Google Cloudu',
                'spolupráce s IT, testy a jasná pravidla předávání',
              ],
              tags: ['GTM', 'BigQuery', 'Google Cloud'],
              link: { label: 'Měření pro velké firmy', href: '/reseni/velke-firmy' },
            },
          ],
        },
      ],
    },
    {
      id: 'symptomy',
      eyebrow: 'Poznáváte se?',
      title: 'Šest situací, se kterými za námi klienti chodí nejčastěji',
      lead: 'Každá z nich má technickou příčinu, kterou umíme najít a opravit. Žádnou z nich nevyřeší „lepší report“.',
      tone: 'dark',
      note: 'Čísla v ukázkách jsou ilustrativní.',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          // na mobilu tři karty a tlačítko „Zobrazit další“
          variant: 'symptoms',
          items: [
            {
              console: ['GA4 purchase        812', 'e-shop objednávky  1 046', '⚠ rozdíl −22 %'],
              title: 'GA4 ukazuje o pětinu méně objednávek než e-shop',
              text: 'Obvykle chybí měření u některých plateb, cookie lišta špatně ukládá souhlas nebo web posílá nákup dvakrát a GA4 ho zahodí.',
              link: { label: 'Audit měření', href: '/sluzby/audit-mereni' },
            },
            {
              console: ["consent default 'denied'", 'google_ads konverze −38 %', '⚠ od nasazení lišty'],
              title: 'Po nasazení cookie lišty spadly konverze v Google Ads',
              text: 'Lišta blokuje tagy, ale Consent Mode v2 neposílá signály, takže Google nemá z čeho modelovat.',
              link: { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              console: ['meta Purchase   418', 'ga4 purchase    633', '⚠ event_id chybí'],
              title: 'Meta, Google a Sklik – každý hlásí jiná čísla',
              text: 'Část rozdílů způsobuje atribuce a je normální. Zbytek tvoří chyby: chybí Conversions API nebo deduplikace, případně každý systém dostává jinou hodnotu objednávky.',
              link: { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              console: ['GTM tagy        140', 'aktivní         41 ?', 'verze v212 bez popisu'],
              title: 'V Tag Manageru je 140 tagů a nikdo neví, které jsou potřeba',
              text: 'Nánosy po agenturách zpomalují web a posílají data tam, kam nemají. Uklidíme a nastavíme pravidla, aby to vydrželo.',
              link: { label: 'Google Tag Manager', href: '/sluzby/google-tag-manager' },
            },
            {
              console: ['form odesláno   94', 'CRM zakázky     ?', '⚠ CRM gclid neukládá'],
              title: 'Poptávky končí v e-mailu, ne v CRM ani v Google Ads',
              text: 'Reklamní systémy se pak učí z počtu formulářů, ne ze zakázek. Propojíme web, CRM a reklamní systémy.',
              link: { label: 'Měření pro B2B', href: '/reseni/b2b-a-lead-generation' },
            },
            {
              console: ['report zdroj    Excel', 'aktualizace     ručně, po 8:00', 'GA4 vzorkování  ano'],
              title: 'Report pro vedení každé pondělí někdo skládá ručně',
              text: 'Data z GA4, reklam a e-shopu spojíme v BigQuery a postavíme dashboard, který obnovuje data sám a sedí s účetnictvím.',
              link: { label: 'BigQuery a dashboardy', href: '/sluzby/bigquery' },
            },
          ],
        },
      ],
    },
    {
      id: 'sluzby',
      eyebrow: 'Služby',
      title: 'Od sběru dat po report, kterému věří vedení',
      lead: 'Data procházejí třemi vrstvami. Postavíme celý řetězec, nebo jen tu část, která vám chybí.',
      tone: 'deep',
      blocks: [{ type: 'menuGrid', menuId: 'sluzby' }],
    },
    {
      id: 'jak-pracujeme',
      eyebrow: 'Jak pracujeme',
      title: 'Pět kroků – po každém dostanete konkrétní výstup',
      lead: 'Žádné „nastavíme to“. Každý krok končí dokumentem nebo ověřením, které můžete předat vlastnímu týmu.',
      tone: 'light',
      blocks: [
        // kroky a výstupy z Textů webu → Postup spolupráce (stejné na celém webu)
        { type: 'process', detail: 'output' },
        { type: 'paragraphs', items: ['<a href="/jak-pracujeme">Celý postup a co od vás budeme potřebovat</a>'] },
      ],
    },
    {
      id: 'nastroje',
      eyebrow: 'S čím pracujeme',
      title: '',
      tone: 'dark',
      blocks: [
        {
          type: 'tags',
          items: [
            { label: 'GA4', href: '/sluzby/implementace-ga4' },
            { label: 'Google Tag Manager', href: '/sluzby/google-tag-manager' },
            { label: 'server-side GTM', href: '/sluzby/server-side-tracking' },
            { label: 'Google Cloud Run' },
            { label: 'BigQuery', href: '/sluzby/bigquery' },
            { label: 'Data Studio', href: '/sluzby/dashboardy-a-reporting' },
            { label: 'Power BI', href: '/sluzby/dashboardy-a-reporting' },
            { label: 'Google Ads', href: '/sluzby/mereni-konverzi' },
            { label: 'Meta CAPI', href: '/sluzby/mereni-konverzi' },
            { label: 'Sklik', href: '/sluzby/mereni-konverzi' },
            { label: 'Heureka', href: '/reseni/e-shopy' },
            { label: 'Shoptet', href: '/reseni/e-shopy#shoptet' },
            { label: 'Upgates', href: '/reseni/e-shopy#upgates' },
            { label: 'WooCommerce', href: '/reseni/e-shopy#woocommerce' },
            { label: 'Shopify', href: '/reseni/e-shopy#shopify' },
            { label: 'HubSpot', href: '/reseni/b2b-a-lead-generation' },
            { label: 'Pipedrive', href: '/reseni/b2b-a-lead-generation' },
            { label: 'Raynet', href: '/reseni/b2b-a-lead-generation' },
          ],
        },
      ],
    },
    {
      id: 'do-hloubky',
      eyebrow: 'Do hloubky',
      title: 'Vysvětlujeme, jak měření doopravdy funguje',
      lead: 'Návody s diagramy, kódem a odkazy na dokumentaci. Bez marketingových zkratek.',
      tone: 'dark',
      // sekce se ukáže, až na blogu budou aspoň tři články
      blocks: [{ type: 'articles', count: 3, minCount: 3 }],
    },
  ],

  faqTitle: 'Než se ozvete',
  faq: [
    {
      q: 'Pracujete i s menšími e-shopy, nebo jen s velkými firmami?',
      a: 'S obojím. U menších e-shopů obvykle začínáme auditem a opravou základního měření: GA4, souhlasu a konverzí. Server-side měření a BigQuery doporučujeme až tam, kde se vyplatí – a řekneme vám to rovnou.',
    },
    {
      q: 'Komu patří účty a data?',
      a: 'Vždy vám. GA4, GTM, Google Cloud i reklamní účty běží pod vaší firmou, my dostáváme přístup. Po skončení spolupráce nic nemigrujete a dostanete dokumentaci, podle které může pokračovat kdokoli jiný.',
    },
    {
      q: 'Jak se tvoří cena?',
      a: 'Podle rozsahu: počet webů a domén, platforma e-shopu, počet napojených reklamních systémů a to, jestli stavíme server-side měření nebo BigQuery. Po úvodní konzultaci dostanete nabídku s pevným rozsahem a výstupy. Provoz Google Cloudu platíte přímo Googlu.',
    },
    {
      q: 'Spolupracujete s naším vývojářem nebo agenturou?',
      a: 'Ano, je to běžné. Vývojářům dodáme specifikaci datové vrstvy a testovací scénáře; s PPC agenturou se domluvíme na konverzích a jejich hodnotách.',
    },
    {
      q: 'Je server-side tracking v souladu s GDPR?',
      a: 'Server-side měření nemění nic na tom, kdy potřebujete souhlas. Nastavujeme ho tak, aby respektovalo volbu v cookie liště a aby na servery třetích stran odcházelo jen to, co odcházet má. Právní posouzení konkrétního zpracování je věcí vašeho právníka.',
    },
  ],

  contact: {
    formId: 'home',
    title: 'Zjistíme, kde vám utíkají data',
    placeholder: 'Např. GA4 ukazuje o třicet procent méně objednávek než e-shop a nevíme proč…',
  },
};
