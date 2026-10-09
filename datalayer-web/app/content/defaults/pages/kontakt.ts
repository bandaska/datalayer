import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. D
// (návrh v1, 8. října 2026) a 05_formulare/specifikace-formularu.md, úpravy podle
// vyhodnocení webu (9. října 2026, kap. 5.15 a 6.4): formulář hned pod nadpisem
// (contact.position = top), „co se stane po odeslání“ ukazuje kontaktní blok sám
// (Texty webu → Kontakt), FAQ jen tři otázky, bez pruhu souvisejících stránek.
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
    variant: 'simple',
    eyebrow: 'kontakt',
    h1: 'Kontakt: napište nám, ozveme se do jednoho pracovního dne',
    subtitle:
      'Na úvodní třicetiminutové konzultaci projdeme vaše měření a řekneme, co opravit jako první – nezávazně a zdarma.',
  },

  trust: ['Odpověď do jednoho pracovního dne', 'Úvodní konzultace zdarma a nezávazně', 'Odpovídá přímo Vít Novotný'],

  sections: [
    {
      id: 'priprava',
      eyebrow: 'příprava',
      title: 'Jak se připravit na konzultaci',
      lead: 'Nic z toho není povinné. Pomůže nám to ale využít třicet minut naplno.',
      tone: 'white',
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
        {
          type: 'paragraphs',
          items: ['Celý postup od konzultace po předané měření popisuje stránka <a href="/jak-pracujeme">Jak pracujeme</a>.'],
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
      q: 'Podepíšete NDA ještě před hovorem?',
      a: 'Ano, napište to do zprávy. Zpracovatelskou smlouvu uzavíráme vždy, když pracujeme s osobními údaji.',
    },
    {
      q: 'Co se stane s údaji z formuláře?',
      a: 'Použijeme je jen k odpovědi na vaši zprávu a k případné nabídce. Žádný newsletter, žádný spam. Podrobnosti najdete v <a href="/zpracovani-osobnich-udaju">zásadách zpracování osobních údajů</a>.',
    },
  ],

  contact: {
    // formulář hned pod úvodem stránky
    position: 'top',
    formId: 'kontakt',
    title: 'Napište nám, co řešíte',
    lead: 'Ozveme se do jednoho pracovního dne. Odpovídá přímo Vít Novotný.',
    placeholder: 'Krátce napište, co řešíte…',
    leadType: 'consultation',
  },
};
