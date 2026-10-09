import type { PageInput } from '../../schema';

// Zásady cookies – výchozí znění. Tlačítko „Změnit nastavení cookies“ je blok
// consentSettings, který otevře cookie lištu. Věta o Turnstile podle dokumentace
// Cloudflaru (výchozí je jednorázový token, cookie cf_clearance jen se zapnutou
// pre-clearance, kterou web nepoužívá). Cookies Seznamu (sid, udid) doplnit, až
// v GTM poběží Sklik (vyhodnocení webu, kap. 5.15 a 8). Texty prošly jazykovým auditem
// z 9. října 2026 (kap. 3.24); platnost cookies v tabulce drží pravidla HARD-RULES
// (číslovky vyjádřitelné jedním slovem slovy).

export const page: PageInput = {
  path: 'cookies',
  kind: 'legal',
  navTitle: 'Zásady cookies',
  tagline: 'které cookies web používá',
  pictogram: 'consent',
  seo: {
    title: 'Zásady cookies | datalayer.cz',
    description:
      'Které cookies web datalayer.cz používá, k čemu slouží a jak dlouho platí. Analytické a marketingové cookies jen se souhlasem, volbu můžete kdykoli změnit.',
  },
  hero: {
    variant: 'simple',
    eyebrow: '',
    h1: 'Zásady cookies',
    subtitle:
      'Cookies jsou malé soubory, které web ukládá do prohlížeče. Nezbytné cookies drží web v chodu; analytické a marketingové používáme jen se souhlasem.',
  },
  sections: [
    {
      id: 'nastaveni',
      title: '',
      blocks: [{ type: 'consentSettings', label: 'Změnit nastavení cookies' }],
    },
    {
      id: 'jak-souhlas-funguje',
      title: 'Jak souhlas funguje',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Dokud si v cookie liště nic nevyberete, web neukládá žádné analytické ani marketingové cookies. Měřicí nástroje Googlu v tu chvíli dostávají jen signál, že souhlas chybí (Google Consent Mode v2, výchozí stav „denied“). Odmítnout jde stejně snadno jako přijmout a volbu můžete kdykoli změnit tlačítkem Nastavení cookies v patičce. Postupujeme podle § 89 odst. 3 zákona č. 127/2005 Sb. a GDPR.',
          ],
        },
      ],
    },
    {
      id: 'prehled-cookies',
      title: 'Přehled cookies',
      blocks: [
        {
          type: 'table',
          caption: 'Přehled cookies',
          head: ['Název', 'K čemu slouží', 'Platnost', 'Kategorie'],
          rows: [
            ['<code>dl_consent</code>', 'Uloží vaši volbu v cookie liště.', '180 dní', 'Nezbytné'],
            ['<code>dl_admin_session</code>', 'Přihlášení do administrace webu, týká se jen správců.', 'sedm dní', 'Nezbytné'],
            ['<code>_ga</code>, <code>_ga_&lt;ID&gt;</code>', 'Google Analytics 4 rozlišuje návštěvníky a jejich návštěvy.', 'dva roky', 'Analytické'],
            ['<code>_gcl_au</code>, <code>_gcl_aw</code>', 'Google Ads měří konverze z reklam.', 'devadesát dní', 'Marketingové'],
            ['<code>_fbp</code>', 'Meta Pixel měří konverze a publikum pro reklamy na Facebooku a Instagramu.', 'devadesát dní', 'Marketingové'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Analytické a marketingové cookies vznikají jen tehdy, když jste s nimi souhlasili a když je na webu zapnutý příslušný nástroj. Ochrana formuláře Cloudflare Turnstile pracuje s technickými údaji o prohlížeči a podle dokumentace Cloudflaru vydává místo cookie jednorázový ověřovací kód (token).',
          ],
        },
      ],
    },
  ],
  faq: [],
  contact: { enabled: false, formId: 'cookies', title: '', placeholder: '' },
};
