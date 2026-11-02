import type { PageInput } from '../../schema';

// Cookies a nastavení souhlasu podle auditu z 2. listopadu 2026, kap. 16 (seo-analyza/
// 2026-11-02_seo-ux-texty): záhlaví a tlačítko změny souhlasu hned pod perexem (CK01),
// obecný popis volby a jedna varianta podle implementace (CK02) – web načítá Google Tag
// Manager s výchozím odmítnutým souhlasem (app/lib/consent.ts), Google tagy se tedy mohou
// chovat jako v režimu advanced. Přehled technologií s poskytovatelem a podmínkou aktivace
// (CK03); doby u nástrojů třetích stran odpovídají jejich výchozímu nastavení – po zapnutí
// nástrojů v GTM je ověřit a doplnit datum ověření (zástupné údaje se nepublikují).
// Platnost cookies slovy podle HARD-RULES (číslovky vyjádřitelné jedním slovem).

export const page: PageInput = {
  path: 'cookies',
  kind: 'legal',
  navTitle: 'Cookies a nastavení souhlasu',
  tagline: 'které cookies web používá',
  pictogram: 'consent',
  seo: {
    title: 'Cookies a nastavení souhlasu – datalayer.cz',
    description:
      'Přehled cookies a dalších technologií na datalayer.cz. Zjistěte jejich účel a změňte souhlas s analytickými a marketingovými cookies.',
  },
  hero: {
    variant: 'simple',
    h1: 'Cookies a nastavení souhlasu',
    subtitle: 'Zde můžete změnit souhlas s analytickými a marketingovými cookies a zjistit, které technologie web používá.',
  },
  sections: [
    {
      id: 'jak-souhlas-funguje',
      title: 'Jak souhlas funguje',
      blocks: [
        { type: 'consentSettings', label: 'Změnit nastavení cookies' },
        {
          type: 'paragraphs',
          items: [
            'Svou volbu můžete kdykoli změnit tlačítkem na této stránce nebo odkazem Nastavení cookies v patičce. Analytické a marketingové cookies lze odmítnout. Nezbytné technologie zajišťují základní funkce webu.',
            'Google tagy mohou při neuděleném souhlasu odesílat požadavky bez cookies. Tyto požadavky mohou obsahovat informace o události a technickém kontextu. Přesný rozsah a účel zpracování popisujeme v <a href="/zpracovani-osobnich-udaju">informacích o osobních údajích</a>.',
          ],
        },
      ],
    },
    {
      id: 'prehled-cookies',
      title: 'Používané cookies a další technologie',
      blocks: [
        {
          type: 'table',
          caption: 'Používané cookies',
          head: ['Název', 'Poskytovatel', 'Účel', 'Doba uchování', 'Kategorie a podmínka aktivace'],
          rows: [
            ['<code>dl_consent</code>', 'datalayer.cz', 'Uloží vaši volbu v cookie liště.', '180 dní', 'Nezbytné, vždy aktivní'],
            ['<code>dl_admin_session</code>', 'datalayer.cz', 'Přihlášení do administrace webu.', 'sedm dní', 'Nezbytné, jen při přihlášení do administrace'],
            ['<code>_ga</code>, <code>_ga_&lt;ID&gt;</code>', 'Google', 'Google Analytics 4 rozlišuje návštěvníky a jejich návštěvy.', 'dva roky', 'Analytické, jen se souhlasem a se zapnutou službou GA4'],
            ['<code>_gcl_au</code>, <code>_gcl_aw</code>', 'Google', 'Google Ads měří konverze z reklam.', 'devadesát dní', 'Marketingové, jen se souhlasem a se zapnutým měřením Google Ads'],
            ['<code>_fbp</code>', 'Meta Platforms', 'Meta Pixel měří konverze a publikum pro reklamy na Facebooku a Instagramu.', 'devadesát dní', 'Marketingové, jen se souhlasem a se zapnutým Meta Pixelem'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Doby uchování u nástrojů Googlu a Mety odpovídají jejich výchozímu nastavení. Ochrana formuláře Cloudflare Turnstile pracuje s technickými údaji o prohlížeči a podle dokumentace Cloudflaru vydává místo cookie jednorázový ověřovací kód (token). Způsob zpracování osobních údajů a příjemce dat uvádíme na stránce <a href="/zpracovani-osobnich-udaju">Zpracování osobních údajů</a>.',
          ],
        },
      ],
    },
  ],
  faq: [],
  contact: { enabled: false, formId: 'cookies', title: '', placeholder: '' },
};
