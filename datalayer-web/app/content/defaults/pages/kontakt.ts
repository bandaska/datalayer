import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/15_jak-pracujeme-a-podpurne-stranky.md, kap. D
// (návrh v1, 8. října 2026) a 05_formulare/specifikace-formularu.md, úpravy podle
// vyhodnocení webu (9. října 2026, kap. 5.15 a 6.4): formulář hned pod nadpisem
// (contact.position = top), „co se stane po odeslání“ ukazuje kontaktní blok sám
// (Texty webu → Kontakt), FAQ jen tři otázky, bez pruhu souvisejících stránek.
// Telefon (704 664 774) web bere z Nastavení – H1 proto vrací výzvu ze zadání „nebo rovnou
// zavolejte“. Texty prošly jazykovým auditem z 9. října 2026 (kap. 3.20 a 5.4) a neslibují
// lhůty ani délku konzultace (rozhodnutí klienta).
// Web zatím nemá kontaktní osobu (rozhodnutí klienta, 9. října 2026), stránka proto
// neuvádí, kdo odpovídá. Do dodání podkladů klientem chybí: pracovní doba,
// firemní údaje, osobní schůzky, angličtina.

export const page: PageInput = {
  path: 'kontakt',
  kind: 'page',
  navTitle: 'Kontakt',
  tagline: 'e-mail, telefon a formulář',
  pictogram: 'lead',

  seo: {
    title: 'Kontakt – konzultace měření zdarma | datalayer.cz',
    description:
      'Napište nám, zavolejte nebo vyplňte formulář. Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první.',
  },

  hero: {
    variant: 'simple',
    eyebrow: 'kontakt',
    h1: 'Napište nám nebo rovnou zavolejte',
    subtitle: 'Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první.',
  },

  trust: ['Úvodní konzultace zdarma a nezávazně', 'Žádný newsletter ani spam'],

  sections: [
    {
      id: 'priprava',
      eyebrow: 'příprava',
      title: 'Jak se připravit na konzultaci',
      lead: 'Nic z toho není povinné. Pomůže nám to ale využít konzultaci naplno.',
      tone: 'white',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Adresa webu a platforma, na které běží',
            'Reklamní systémy, které používáte',
            'Hlavní problém jednou větou, třeba „GA4 ukazuje o pětinu méně objednávek než e-shop“',
            'Kdo má na starosti web a vývoj',
            'Případně snímek obrazovky nebo export, který vás znepokojil',
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
      a: 'Ano. Úvodní konzultace k ničemu nezavazuje.',
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
    lead: 'Napište nám, zavolejte nebo vyplňte formulář.',
    placeholder: 'Krátce napište, co řešíte…',
    leadType: 'consultation',
  },
};
