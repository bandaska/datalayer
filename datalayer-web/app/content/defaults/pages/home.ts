import type { PageInput } from '../../schema';

// Homepage – výchozí obsah, po migraci se edituje v administraci (Stránky, stránka Úvod).
// Odpovídá auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty, kap. 4, H01–H05):
// zůstal hero s diagramem (diagram beze změny) a kontaktní blok. Nové jsou H1 a podtitul,
// textový odkaz „Vybrat službu“, rozcestník šesti služeb s volbou E-shopy / B2B, blok
// „Co je součástí naší práce“ s odkazem na modelovou ukázku auditu, průběh spolupráce (G03)
// a FAQ „Praktické informace o spolupráci“. Vypadlo „Šest situací…“ s nedoloženými počty,
// původní claim v H1 a nápověda ve zprávě (formulář má vlastní pole webu).

export const page: PageInput = {
  path: '',
  kind: 'home',
  navTitle: 'Úvod',
  tagline: 'webová analytika a měření',
  pictogram: 'datalayer',
  ogImage: '/og/default.png',

  seo: {
    title: 'Webová analytika pro e-shopy a firmy – datalayer.cz',
    description:
      'Nastavení a audit webové analytiky pro e-shopy a B2B firmy. GA4, GTM, měření konverzí a propojení dat. S testy a dokumentací.',
  },

  hero: {
    variant: 'diagram',
    h1: 'Webová analytika pro e-shopy a B2B firmy',
    h1Highlight: 'Webová analytika',
    subtitle:
      'Nastavíme a ověříme měření návštěvnosti, objednávek a poptávek. Propojíme data z webu, reklamních systémů a firemních nástrojů, abyste měli podklady pro vyhodnocení marketingu. Dostanete funkční nastavení, testy a dokumentaci.',
    primaryCta: { label: 'Domluvit konzultaci', href: '#kontakt' },
    secondaryLink: { label: 'Vybrat službu', href: '#sluzby' },
  },

  sections: [
    {
      id: 'sluzby',
      title: 'S čím vám pomůžeme',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Audit měření',
              text: 'Prověříme současné nastavení, popíšeme chyby a připravíme pořadí oprav.',
              link: { label: 'Co zahrnuje audit', href: '/sluzby/audit-mereni' },
            },
            {
              title: 'Nastavení GA4 a GTM',
              text: 'Navrhneme měřicí plán, nastavíme události a otestujeme předávání dat.',
              link: { label: 'Nastavení analytiky', href: '/sluzby/implementace-ga4' },
            },
            {
              title: 'Cookie lišta a Consent Mode',
              text: 'Propojíme volbu návštěvníka s měřicími nástroji a ověříme jejich chování.',
              link: { label: 'Nastavení souhlasů', href: '/sluzby/cookie-lista-consent-mode' },
            },
            {
              title: 'Měření konverzí',
              text: 'Nastavíme objednávky a poptávky pro Google Ads, Metu, Sklik a další systémy.',
              link: { label: 'Měření reklamních konverzí', href: '/sluzby/mereni-konverzi' },
            },
            {
              title: 'Server-side měření',
              text: 'Navrhneme předávání událostí přes server včetně správy souhlasů a provozu.',
              link: { label: 'Možnosti server-side měření', href: '/sluzby/server-side-tracking' },
            },
            {
              title: 'BigQuery a reporting',
              text: 'Spojíme marketingová a firemní data do přehledů s dohodnutými metrikami.',
              link: { label: 'Datový sklad a reporty', href: '/sluzby/bigquery' },
            },
          ],
        },
        {
          type: 'links',
          items: [
            { label: 'Řešení pro e-shopy', href: '/reseni/e-shopy' },
            { label: 'Řešení pro B2B firmy', href: '/reseni/b2b-a-lead-generation' },
          ],
        },
      ],
    },

    {
      id: 'pristup',
      title: 'Co je součástí naší práce',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Účty pod vaší správou',
              text: 'Měření nastavujeme v účtech vaší firmy. Přístupy nám přidělujete podle rozsahu práce.',
            },
            {
              title: 'Ověřené scénáře',
              text: 'Kontrolujeme nákup, formuláře a souhlasy podle dohodnutého testovacího plánu.',
            },
            {
              title: 'Dokumentace k předání',
              text: 'Získáte popis nastavení a změn, na který může navázat váš tým nebo další dodavatel.',
            },
          ],
        },
        // případová studie zatím není doložená – odkaz na modelovou ukázku (H03)
        {
          type: 'paragraphs',
          items: ['Formát výstupu auditu ukazuje modelová ukázka se smyšlenými nálezy. Nejde o výsledky konkrétního klienta.'],
        },
        {
          type: 'links',
          items: [{ label: 'Prohlédnout modelovou ukázku auditu', href: '/sluzby/audit-mereni#ukazka-reportu' }],
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
            { title: 'Realizace a kontrola', text: 'Provedeme dohodnuté práce a ověříme je na testovacích scénářích.' },
            { title: 'Předání', text: 'Projdeme výsledky a předáme dokumentaci. Další správu nebo monitoring sjednáme samostatně.' },
          ],
        },
      ],
    },
  ],

  faqTitle: 'Praktické informace o spolupráci',
  faq: [
    {
      q: 'Je spolupráce vhodná i pro menší e-shop?',
      a: 'Ano. Rozsah navrhneme podle používaných nástrojů a potřeb e-shopu. Často stačí upravit základní měření; server-side řešení nebo datový sklad mají smysl až při konkrétním využití.',
    },
    {
      q: 'Komu zůstávají účty a data?',
      a: 'Účty a projekty zůstávají pod správou vaší firmy. My pracujeme s přidělenými oprávněními. Součástí předání je dokumentace nastavení.',
    },
    {
      q: 'Na čem závisí cena?',
      a: 'Na rozsahu práce, počtu systémů a stavu současného nastavení. Před zahájením dostanete nabídku s cenou a seznamem výstupů. Případný provoz cloudu a licence uvádíme zvlášť.',
    },
    {
      q: 'Lze zapojit stávajícího vývojáře nebo agenturu?',
      a: 'Ano. Domluvíme rozdělení práce, připravíme potřebné zadání a společně ověříme výsledek.',
    },
  ],

  contact: {
    formId: 'home',
    title: 'Proberme vaše měření',
    lead: 'Napište adresu webu a stručně popište, co potřebujete vyřešit. Na úvodní konzultaci upřesníme zadání a navrhneme další postup. Konzultace je nezávazná a zdarma.',
    placeholder: '',
  },
};
