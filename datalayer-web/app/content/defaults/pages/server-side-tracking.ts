import type { PageInput } from '../../schema';

// Stránka prošla UX redukcí z 9. října 2026 (seo-analyza/2026-10-09_ux-redukce,
// kap. 5.2). Zůstal hero s jedním tlačítkem, Poznáváte se?, Co uděláme a co
// dostanete (monitoring jako karta), schéma toku dat a rozhodnutí ano/ne bez
// tabulky hostingu a cen. Postup, sekce o monitoringu, Technické detaily a odkazy
// na další stránky a články zmizely. FAQ má čtyři otázky: vlastnictví účtů
// převzala odpověď o tom, co od klienta potřebujeme, a cenu provozu zmiňuje jediná
// věta v odpovědi o ceně. Texty prošly jazykovým auditem z 9. října 2026.

export const page: PageInput = {
  path: 'sluzby/server-side-tracking',
  kind: 'service',
  navTitle: 'Server-side tracking',
  tagline: 'měření na vaší doméně',
  pictogram: 'serverside',
  menuGroup: 'sber',

  seo: {
    title: 'Server-side tracking – měření na vaší doméně | datalayer.cz',
    description:
      'Server-side GTM na vaší doméně a ve vašem Google Cloudu. Meta Conversions API, Google Ads, GA4 i Sklik přes server, v souladu se souhlasem. Konzultace zdarma.',
  },

  hero: {
    h1: 'Server-side tracking na vaší doméně a ve vašem cloudu',
    subtitle:
      'Prohlížeč pošle každou událost jen jednou – na server-side Google Tag Manager (GTM) na vaší doméně. Ten ji podle souhlasu návštěvníka předá do GA4, Google Ads, Meta Conversions API (CAPI) nebo Skliku. Máte pod kontrolou, co a komu odchází; povinnost získat souhlas se nemění.',
    primaryCta: { label: 'Konzultovat architekturu', href: '#kontakt' },
  },

  sections: [
    {
      id: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Server-side měření má smysl, když základní měření funguje, ale naráží na limity prohlížeče, na požadavky IT na rychlost nebo na kontrolu nad daty.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Meta vidí méně nákupů než e-shop',
              text: 'Pixel zachytí jen část objednávek a kampaně se učí z neúplných dat.',
              pictogram: 'conversion',
            },
            {
              title: 'Zákazníci ze Safari se „rozpadají“',
              text: 'Safari zkracuje cookies z JavaScriptu na sedm dní a vracející se zákazník vypadá jako nový.',
              pictogram: 'warn',
            },
            {
              title: 'IT tlačí na rychlost a bezpečnost',
              text: 'Desítka cizích skriptů zpomaluje web a komplikuje bezpečnostní politiku.',
              pictogram: 'perf',
            },
            {
              title: 'Pověřenec pro ochranu osobních údajů chce vědět, co komu odchází',
              text: 'Bez prostředníka nemáte jak doložit ani omezit, co skripty posílají.',
              pictogram: 'gov',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Dostanete zdokumentovanou architekturu, kterou převezme váš tým nebo kdokoli jiný.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Návrh architektury',
              text: 'Co jde přes server, co zůstává v prohlížeči a kde se rozhoduje o souhlasu.',
            },
            {
              title: 'Server ve vašem Google Cloudu',
              text: 'Cloud Run s nejméně dvěma servery, doména, certifikát a upozornění na rozpočet.',
            },
            {
              title: 'Kontejnery GTM',
              text: 'Webový i serverový kontejner s verzemi a jednotnými názvy.',
            },
            {
              title: 'Mapa událostí a deduplikace',
              text: 'Stejné ID objednávky pro všechny platformy, žádná konverze dvakrát.',
            },
            {
              title: 'Matice souhlasu',
              text: 'Který tag smí běžet při jakém souhlasu – podklad pro pověřence.',
            },
            {
              title: 'Monitoring a provozní příručka',
              text: 'Upozornění na výpadek a pokles událostí, postup při výpadku i plán pro odchod k jinému dodavateli.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      title: 'Jak server-side měření funguje',
      lead: 'Místo pěti skriptů, které posílají data každý zvlášť, odejde z prohlížeče jedna událost na váš server. Ten ji rozešle dál.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Prohlížeč a backend posílají události na server-side GTM na vaší doméně. Server je podle souhlasu návštěvníka předá platformám.',
          columns: [
            { label: 'zdroje', items: ['prohlížeč: dataLayer a souhlas', 'backend nebo CRM: platby, storna, poptávky'] },
            { label: 'sgtm.vasweb.cz', items: ['server-side GTM', 'Cloud Run ve vašem cloudu', 'rozhodnutí podle souhlasu'] },
            { label: 'platformy', items: ['GA4 a Google Ads', 'Meta CAPI', 'Sklik a TikTok'] },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Kontrola nad daty.</strong> Osobní údaje před odesláním odstraníte nebo zahashujete.',
            '<strong>Spolehlivější konverze.</strong> Meta CAPI, rozšířené konverze Google Ads a platby z backendu.',
            '<strong>Souhlas platí dál.</strong> Kdo cookies odmítne, toho neměříme ani touto cestou.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      title: 'Kdy se server-side měření vyplatí',
      lead: 'Server-side měření není první krok. Když se vám nevyplatí, řekneme to rovnou.',
      tone: 'light',
      blocks: [
        {
          type: 'proscons',
          yes: {
            title: 'Má smysl, když…',
            items: [
              { text: 'reklama tvoří velkou část objednávek nebo poptávek' },
              { text: 'potřebujete Meta CAPI, Sklik nebo TikTok s deduplikací' },
              { text: 'chcete posílat události z backendu – platby, storna, CRM' },
              { text: 'IT nebo pověřenec požaduje kontrolu nad odchozími daty' },
              { text: 'někdo bude mít server na starosti a bude ho hlídat' },
            ],
          },
          no: {
            title: 'Doporučíme počkat, když…',
            items: [
              { text: 'nesedí základní měření', note: 'nejdřív <a href="/sluzby/audit-mereni">audit měření</a>' },
              { text: 'chybí funkční cookie lišta', note: 'nejdřív <a href="/sluzby/cookie-lista-consent-mode">Consent Mode v2</a>' },
              { text: 'inzerujete jen v Google Ads', note: 'často stačí Google Tag Gateway' },
              { text: 'máte malý rozpočet a návštěvnost' },
              { text: 'čekáte měření bez souhlasu – to server-side GTM nedělá' },
            ],
          },
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Je server-side měření legální? Potřebuji pořád cookie lištu?',
      a: 'Lištu potřebujete dál. Server-side měření je jen jiná technická cesta: ukládání a čtení netechnických údajů dál vyžaduje předchozí souhlas podle § 89 odst. 3 zákona o elektronických komunikacích. Server proto s každou událostí dostane stav souhlasu a podle něj data pošle, nebo ne. Nejsme advokátní kancelář – právní posouzení zajistí váš právník.',
    },
    {
      q: 'Kolik stojí implementace a provoz serveru?',
      a: 'Cena implementace se odvíjí od rozsahu – rozhoduje počet platforem a domén, stav datové vrstvy a požadavky IT. Fakturu za provoz dostáváte přímo od Googlu nebo poskytovatele hostingu: u Cloud Run realisticky 110–150 dolarů měsíčně, spravovaný hosting stojí od stovek korun. Odhad pro vaši návštěvnost připravíme ještě před spuštěním.',
    },
    {
      q: 'Co od nás budete potřebovat?',
      a: 'Potřebujeme přístupy do GTM, GA4 a reklamních účtů přes role, fakturační účet Google Cloud, úpravu DNS a vývojáře pro případné úpravy datové vrstvy. Server běží ve vašem Google Cloudu, kontejnery i reklamní účty zůstávají vaše a my dostáváme jen role. Po skončení spolupráce své přístupy odebereme podle provozní příručky a měření běží dál beze změny.',
    },
    {
      q: 'Google Tag Gateway, nebo server-side GTM?',
      a: 'Gateway načítá Google tag z vaší domény přes síť pro doručování obsahu (CDN). Je jednodušší a levnější, ale jen pro tagy Google a bez úprav dat. Pokud chcete Metu, Sklik, kontrolu nad osobními údaji nebo události z backendu, potřebujete server-side GTM. Obojí lze kombinovat.',
    },
  ],

  contact: {
    formId: 'lp-server-side',
    title: 'Probereme, jestli se vám server-side měření vyplatí',
    lead: 'Na úvodní konzultaci projdeme vaše měření a řekneme, jestli je server-side GTM další krok, nebo je potřeba nejdřív opravit základ.',
    placeholder: 'Adresa webu a co řešíte, např. „Meta vidí o třetinu méně nákupů než e-shop“',
    leadType: 'consultation',
  },

  schema: {
    name: 'Server-side tracking se serverovým Google Tag Managerem',
    serviceType: 'Server-side tracking a měření konverzí',
    description:
      'Návrh a nasazení server-side Google Tag Manageru na doméně a v Google Cloudu klienta: GA4, Google Ads, Meta Conversions API, Seznam Event Measurement a TikTok Events API přes server, deduplikace, monitoring a dokumentace. Vždy v souladu se souhlasem návštěvníka.',
    audience: 'E-shopy, B2B firmy a velké firmy',
  },
};
