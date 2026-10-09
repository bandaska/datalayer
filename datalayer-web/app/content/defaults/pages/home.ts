import type { PageInput } from '../../schema';

// Homepage – výchozí obsah, po migraci se edituje v administraci (Stránky → Úvod).
// Prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce, kap. 4):
// zůstal hero s diagramem a jedním tlačítkem (H1 beze změny, publikum v podtitulu),
// šest situací bez úvodu, poznámky a konzolí, čtyři otázky a kontaktní blok.
// Segmenty, přehled služeb, postup spolupráce, nástroje a články vypadly.

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
    h1: 'Stavíme neprůstřelné datové základy pro váš růst.',
    h1Highlight: 'datové základy',
    subtitle:
      'Navrhneme, nasadíme a ověříme měření pro e-shopy a B2B firmy – od datové vrstvy po BigQuery. S dokumentací a s daty, která vlastníte vy.',
    primaryCta: { label: 'Konzultovat projekt', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Šest situací, se kterými za námi klienti chodí nejčastěji',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          // na mobilu kompaktní seznam, všech šest karet hned
          variant: 'symptoms',
          items: [
            {
              title: 'GA4 ukazuje o pětinu méně objednávek než e-shop',
              text: 'Obvykle chybí měření u některých plateb, cookie lišta špatně ukládá souhlas nebo web posílá nákup dvakrát a GA4 ho zahodí.',
              link: { label: 'Audit měření', href: '/sluzby/audit-mereni' },
            },
            {
              title: 'Po nasazení cookie lišty spadly konverze v Google Ads',
              text: 'Lišta blokuje tagy, ale Consent Mode v2 neposílá signály, takže Google nemá z čeho modelovat.',
              link: { label: 'Cookie lišta a Consent Mode', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              title: 'Meta, Google a Sklik – každý hlásí jiná čísla',
              text: 'Část rozdílů způsobuje atribuce a je normální. Zbytek tvoří chyby: chybí Conversions API nebo deduplikace, případně každý systém dostává jinou hodnotu objednávky.',
              link: { label: 'Měření konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              title: 'V Tag Manageru je 140 tagů a nikdo neví, které jsou potřeba',
              text: 'Nánosy po agenturách zpomalují web a posílají data tam, kam nemají. Uklidíme a nastavíme pravidla, aby to vydrželo.',
              link: { label: 'GA4 a Google Tag Manager', href: '/sluzby/implementace-ga4' },
            },
            {
              title: 'Poptávky končí v e-mailu, ne v CRM ani v Google Ads',
              text: 'Reklamní systémy se pak učí z počtu formulářů, ne ze zakázek. Propojíme web, CRM a reklamní systémy.',
              link: { label: 'Měření pro B2B', href: '/reseni/b2b-a-lead-generation' },
            },
            {
              title: 'Report pro vedení každé pondělí někdo skládá ručně',
              text: 'Data z GA4, reklam a e-shopu spojíme v BigQuery a postavíme dashboard, který obnovuje data sám a sedí s účetnictvím.',
              link: { label: 'BigQuery a dashboardy', href: '/sluzby/bigquery' },
            },
          ],
        },
      ],
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
  ],

  contact: {
    formId: 'home',
    title: 'Zjistíme, kde vám utíkají data',
    placeholder: 'Adresa webu a co řešíte, např. „GA4 ukazuje o třicet procent méně objednávek než e-shop“',
  },
};
