import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 5.2). Zůstal hero s jedním tlačítkem, Poznáváte se? a Co uděláme a co
// dostanete. Schéma toku souhlasu, režim basic nebo advanced s výběrem lišty,
// právní rámec, postup, ověření, Technické detaily a odkazy na další stránky
// a články zmizely. FAQ má čtyři otázky: právní minimum (zákon, ÚOOÚ, Google
// a role právníka) a basic vs. advanced shrnují rušené sekce, odpověď o ceně
// převzala větu, že žádnou CMP neprodáváme. Texty prošly jazykovým auditem
// z 9. října 2026.

export const page: PageInput = {
  path: 'sluzby/cookie-lista-consent-mode',
  kind: 'service',
  navTitle: 'Cookie lišta a Consent Mode v2',
  tagline: 'souhlas legálně a bez zbytečné ztráty dat',
  pictogram: 'consent',
  menuGroup: 'sber',

  seo: {
    title: 'Cookie lišta a Consent Mode v2 – nastavení | datalayer.cz',
    description:
      'Vybereme a nastavíme cookie lištu, Consent Mode v2 a GTM. Ověříme, co web posílá před souhlasem, a vysvětlíme dopad na data. Konzultace zdarma.',
  },

  hero: {
    h1: 'Cookie lišta a Consent Mode v2 nastavené a ověřené',
    subtitle:
      'Cookie lišta sbírá souhlas návštěvníka, Consent Mode v2 ho předává tagům Googlu a Google Tag Manager (GTM) podle něj spouští ostatní tagy, třeba Mety nebo Skliku. Lištu vybereme a nastavíme tak, aby tagy souhlas respektovaly od prvního načtení stránky. Pak ověříme, co web posílá před souhlasem a po něm, a vysvětlíme dopad na data.',
    primaryCta: { label: 'Zkontrolovat můj web', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'To, že web lištu zobrazí, ještě neznamená, že tagy souhlas respektují. Ani platforma pro správu souhlasů (CMP) s certifikací od Googlu sama soulad nezaručí – rozhoduje, jak ji nasadíte.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Tagy běží bez ohledu na lištu',
              text: 'Meta Pixel, Sklik nebo chatovací widget odešlou data ještě před kliknutím, nebo dokonce po odmítnutí.',
              pictogram: 'warn',
            },
            {
              title: 'Consent Mode startuje pozdě',
              text: 'Výchozí stav přichází až po načtení GTM, chybí nové reklamní signály a v GA4 roste podíl „Unassigned“.',
              pictogram: 'ga4',
            },
            {
              title: 'Po nasazení lišty spadly konverze',
              text: 'Tagy naběhnou až na další stránce nebo web zbytečně běží v režimu basic bez modelování a data mizí i u lidí, kteří souhlasili.',
              pictogram: 'conversion',
            },
            {
              title: 'Lišta neodpovídá doporučení ÚOOÚ',
              text: 'Chybí „Odmítnout“ v první vrstvě, tlačítka nejsou rovnocenná nebo lišta jen informuje tlačítkem „Rozumím“.',
              pictogram: 'gov',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Službu nabízíme ve dvou variantách: audit, když lištu máte, a nastavení na klíč, když ji zavádíte nebo měníte.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Inventura cookies a tagů',
              text: 'Všechny cookies, tagy a skripty včetně kódů mimo GTM – v šabloně, pluginech, chatu nebo videu.',
            },
            {
              title: 'Lišta a podklady pro texty',
              text: 'Doporučíme CMP nebo navrhneme vlastní lištu a připravíme technické podklady, ze kterých právník sestaví texty lišty.',
            },
            {
              title: 'Consent Mode v2',
              text: 'Výchozí stav před načtením tagů, aktualizace po volbě, všechny čtyři reklamní a analytické signály a režim podle rozhodnutí s právníkem.',
            },
            {
              title: 'Napojení všech tagů',
              text: 'Tagy Mety, TikToku nebo LinkedInu naběhnou hned po souhlasu. Stav souhlasu předáme i do <a href="/sluzby/server-side-tracking">server-side GTM</a> a backendu, pokud je máte.',
            },
            {
              title: 'Sklik a Seznam Event Measurement',
              text: 'Souhlas předáme i novému měření Seznamu – přes standard IAB TCF (Transparency and Consent Framework), nebo ve formátu Google Consent Mode.',
            },
            {
              title: 'Protokol a dokumentace',
              text: 'Osm testovacích scénářů se záznamem síťového provozu ve formátu HAR, matice tagů a souhlasů, popis verzí GTM a seznam oprav pro vývojáře.',
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Je cookie lišta povinná a co k ní říkají ÚOOÚ a Google?',
      a: 'Lištu se souhlasem potřebuje každý web s analytikou, reklamními pixely nebo remarketingem, i jen s GA4: § 89 odst. 3 zákona o elektronických komunikacích vyžaduje předchozí prokazatelný souhlas a výjimku má jen technicky nezbytné ukládání. ÚOOÚ chce „Odmítnout“ už v první vrstvě, rovnocenná tlačítka a odvolání souhlasu stejně snadné jako jeho udělení. Google u uživatelů z EHP chce souhlas i s personalizací reklam a po inzerentech fakticky vyžaduje Consent Mode – při nesouladu může pozastavit publika a měření konverzí. Nejsme advokátní kancelář – texty lišty a zásady cookies sestaví z našich technických podkladů váš právník.',
    },
    {
      q: 'Režim basic, nebo advanced?',
      a: 'V režimu basic tagy Googlu čekají na souhlas a před volbou neodejde nic; Google Ads pak modeluje konverze jen obecným modelem a GA4 chování bez souhlasu nemodeluje. V režimu advanced odejdou bez souhlasu jen pingy bez cookies, Google Ads modeluje konverze modelem pro váš účet a GA4 chování, pokud web překročí prahy, které stanovil Google. Basic se hodí pro přísný právní výklad, regulované obory a malou návštěvnost, advanced pro inzerenty v Google Ads s dostatkem návštěv, když právník souhlasí s přenosem pingů. Režim volíme spolu s vámi a s právníkem nebo pověřencem pro ochranu osobních údajů.',
    },
    {
      q: 'Proč po nasazení lišty klesly konverze?',
      a: 'Část poklesu je očekávaná, protože nástroje dřív měřily i lidi bez souhlasu. Často jde ale o chybu: režim basic bez modelování; tagy, které naběhnou až po znovunačtení stránky; výchozí stav až po GTM; nebo nastavení bez signálu <code>ad_user_data</code>, které blokuje rozšířené konverze. Audit proto obsahuje i odhad dopadu na data.',
    },
    {
      q: 'Kolik to stojí?',
      a: 'Cenu skládáme podle rozsahu: počet domén a jazyků, tagů a nástrojů, jestli lištu vybíráme, nebo vyvíjíme, a kolik kódů běží mimo GTM. Licenci CMP platíte přímo poskytovateli. Žádnou CMP neprodáváme – nastavíme kteroukoli a ověříme i lištu e-shopové platformy, třeba Shoptetu.',
    },
  ],

  contact: {
    formId: 'lp-consent',
    title: 'Nastavíme sběr souhlasu podle pravidel – a bez zbytečné ztráty dat',
    lead: 'Na úvodní konzultaci se podíváme, co web posílá před souhlasem, a řekneme, jestli stačí oprava, nebo je potřeba nové nastavení.',
    placeholder: 'Adresa webu a co řešíte, např. „Po nasazení lišty nám spadly konverze v Google Ads“',
    leadType: 'consultation',
  },

  schema: {
    name: 'Cookie lišta a Google Consent Mode v2',
    serviceType: 'Nastavení a audit cookie lišty, Consent Mode v2 a Google Tag Manageru',
    description:
      'Výběr a nastavení cookie lišty, Google Consent Mode v2 v režimu basic nebo advanced a napojení všech tagů v GTM na souhlas. Audit, co web posílá před souhlasem, testovací protokol a vysvětlení dopadu na data. Technické nastavení podle § 89 odst. 3 zákona č. 127/2005 Sb. a doporučení ÚOOÚ; právní posouzení zajišťuje právník klienta.',
    audience: 'E-shopy, B2B firmy a velké firmy',
  },
};
