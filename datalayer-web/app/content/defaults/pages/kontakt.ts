import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. D
// (návrh v1, 8. října 2026) a 05_formulare/specifikace-formularu.md.
// Formulář, e-mail a volitelně telefon s LinkedInem vykreslí aplikace sama
// v kontaktním bloku na konci stránky, proto tu formulář ani kanály nejsou.
// H1 a meta popis ze zadání slibují telefonát („nebo rovnou zavolejte“). Telefon
// zatím chybí, proto texty stránky na telefonu nestojí – po doplnění čísla
// v administraci lze H1 ze zadání vrátit.
// Do dodání podkladů klientem chybí: telefon a pracovní doba, firemní údaje,
// osobní schůzky, angličtina.

export const page: PageInput = {
  path: 'kontakt',
  kind: 'page',
  navTitle: 'Kontakt',
  tagline: 'odpověď do jednoho pracovního dne',
  pictogram: 'lead',

  seo: {
    title: 'Kontakt: konzultace měření zdarma | datalayer.cz',
    description:
      'Napište nám, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme vaše měření a řekneme, co opravit jako první. Odpověď do pracovního dne.',
  },

  hero: {
    eyebrow: 'kontakt',
    h1: 'Kontakt: napište nám, ozveme se do jednoho pracovního dne',
    subtitle:
      'Na úvodní třicetiminutové konzultaci projdeme vaše měření a řekneme, co opravit jako první – nezávazně a zdarma.',
    quickAnswer:
      'Napište nám přes formulář na konci stránky nebo na <strong>one@datalayer.cz</strong>. Ozveme se do jednoho pracovního dne a navrhneme termín třicetiminutové konzultace zdarma. Na ní projdeme web, cíle a problém. Do dvou pracovních dnů potom dostanete shrnutí a návrh dalšího kroku.',
    primaryCta: { label: 'Napsat zprávu', href: '#kontakt' },
    secondaryCta: { label: 'Jak pracujeme', href: '/jak-pracujeme' },
    microcopy: 'Konzultace zdarma a nezávazně · odpověď do jednoho pracovního dne',
  },

  trust: [
    'Odpověď do jednoho pracovního dne',
    'Úvodní konzultace zdarma a nezávazně',
    'Odpovídá přímo Vít Novotný',
  ],

  sections: [
    {
      id: 'co-bude-dal',
      eyebrow: 'po odeslání',
      title: 'Co se stane po odeslání',
      lead: 'Každou zprávu čte a odpovídá na ni přímo Vít Novotný.',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Do jednoho pracovního dne se ozveme',
              text: 'Odpovíme e-mailem nebo telefonem a navrhneme termín třicetiminutové konzultace.',
            },
            {
              title: 'Konzultace',
              text: 'Projdeme web, cíle a problém. Když nám předem pošlete adresu webu, podíváme se na měření už před hovorem.',
            },
            {
              title: 'Shrnutí a návrh dalšího kroku',
              text: 'Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku. Nejčastěji jde o audit nebo nabídku s pevným rozsahem.',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Celý postup od konzultace po předané měření popisuje stránka <a href="/jak-pracujeme">Jak pracujeme</a>.',
          ],
        },
      ],
    },
    {
      id: 'priprava',
      eyebrow: 'příprava',
      title: 'Jak se připravit na konzultaci',
      lead: 'Nic z toho není povinné. Pomůže nám to ale využít třicet minut naplno.',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Adresa webu a platforma, na které běží',
            'Reklamní systémy, které používáte',
            'Hlavní problém jednou větou, třeba „GA4 ukazuje o pětinu méně objednávek než e-shop“',
            'Kdo má na starost web a vývoj',
            'Případně screenshot nebo export, který vás znepokojil',
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Je konzultace opravdu zdarma?',
      a: 'Ano. Trvá třicet minut a k ničemu vás nezavazuje.',
    },
    {
      q: 'Musím si předem připravit zadání?',
      a: 'Ne. Stačí popsat problém, zbytek probereme na konzultaci.',
    },
    {
      q: 'Podepíšete NDA ještě před hovorem?',
      a: 'Ano, napište to do zprávy. Zpracovatelskou smlouvu uzavíráme vždy, když pracujeme s osobními údaji.',
    },
    {
      q: 'Co se stane s údaji z formuláře?',
      a: 'Použijeme je jen k odpovědi na vaši zprávu a k případné nabídce. Žádný newsletter, žádný spam. Podrobnosti najdete v <a href="/zpracovani-osobnich-udaju">zásadách zpracování osobních údajů</a>.',
    },
    {
      q: 'Proč formulář nemá CAPTCHA?',
      a: 'Proti spamu ho chrání Cloudflare Turnstile a skryté pole, které vyplní jen robot. Formulář je náš vlastní, bez HubSpotu a bez cizích formulářových skriptů.',
    },
  ],

  relatedPages: ['jak-pracujeme', 'o-nas'],

  contact: {
    formId: 'kontakt',
    title: 'Napište nám, co řešíte',
    lead: 'Ozveme se do jednoho pracovního dne. Odpovídá přímo Vít Novotný.',
    placeholder: 'Krátce napište, co řešíte…',
    leadType: 'consultation',
  },
};
