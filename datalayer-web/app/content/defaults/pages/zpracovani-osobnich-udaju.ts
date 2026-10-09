import type { PageInput } from '../../schema';

// Zásady zpracování osobních údajů – výchozí znění (návrh k potvrzení klientem:
// doba uchování zpráv, region databáze). Identifikaci správce (jméno nebo firma,
// IČO, sídlo) doplní blok Provozovatel z Nastavení → Provozovatel webu, jakmile
// ji klient vyplní (vyhodnocení webu, kap. 8). Texty prošly jazykovým auditem
// z 9. října 2026 (kap. 3.25); „Správce je…“ a „Právní základ je…“ zůstávají v 1. pádě
// podle HARD-RULES („je metoda“, ne „je metodou“). UX redukce z 9. října 2026 obsah
// nezměnila, z hero jen vypadl prázdný nadtitulek (pole zmizelo ze schématu).

export const page: PageInput = {
  path: 'zpracovani-osobnich-udaju',
  kind: 'legal',
  navTitle: 'Zpracování osobních údajů',
  tagline: 'jak zacházíme s osobními údaji',
  pictogram: 'gov',
  seo: {
    title: 'Zpracování osobních údajů | datalayer.cz',
    description:
      'Jaké osobní údaje web datalayer.cz zpracovává, proč a jak dlouho je uchováváme, kdo k nim má přístup a jaká máte práva podle GDPR.',
  },
  hero: {
    variant: 'simple',
    h1: 'Zpracování osobních údajů',
    subtitle:
      'Popisujeme tu, jaké osobní údaje web datalayer.cz zpracovává, proč je potřebujeme, jak dlouho je uchováváme a jaká máte práva.',
  },
  sections: [
    {
      id: 'zasady',
      title: '',
      blocks: [
        {
          type: 'html',
          html: `<h2>Kdo údaje zpracovává</h2>
<p>Správce osobních údajů je provozovatel webu datalayer.cz. S čímkoli, co se týká osobních údajů, nám napište na <a href="mailto:one@datalayer.cz">one@datalayer.cz</a>.</p>`,
        },
        { type: 'operator' },
        {
          type: 'html',
          html: `<h2>Kontaktní formulář</h2>
<p>Když nám pošlete zprávu, zpracujeme jméno, e-mail a text zprávy. Pokud ho vyplníte, zpracujeme také telefon. Údaje potřebujeme, abychom mohli odpovědět na poptávku a případně připravit nabídku. Právní základ je jednání o smlouvě na vaši žádost podle čl. 6 odst. 1 písm. b) GDPR, proto ve formuláři nežádáme o souhlas.</p>
<p>Zprávu uložíme do databáze Google Cloud Firestore a pošleme ji e-mailem lidem, kteří poptávky vyřizují. Do analytiky ani reklamních systémů jméno, e-mail ani telefon v čitelné podobě neposíláme. Při odeslání formuláře web vytvoří jen jednosměrný otisk e-mailu a telefonu (SHA-256), a to jen pokud jste souhlasili s marketingovými cookies.</p>
<h2>Ochrana proti spamu</h2>
<p>Formulář chrání služba Cloudflare Turnstile. Ověří, že formulář vyplňuje člověk, a pracuje přitom s technickými údaji o prohlížeči a s IP adresou. IP adresu krátce používáme i k omezení počtu zpráv odeslaných za sebou. Právní základ je náš oprávněný zájem na ochraně webu před zneužitím podle čl. 6 odst. 1 písm. f) GDPR.</p>
<h2>Cookies a měření návštěvnosti</h2>
<p>Analytické a marketingové cookies používáme jen se souhlasem podle § 89 odst. 3 zákona č. 127/2005 Sb. a čl. 6 odst. 1 písm. a) GDPR. Souhlas můžete kdykoli odvolat. Podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.</p>
<h2>Jak dlouho údaje uchováváme</h2>
<p>Zprávy z formuláře uchováváme po dobu, kterou potřebujeme k vyřízení poptávky. Pokud spolupráce nevznikne, smažeme je nejpozději do dvanácti měsíců od poslední komunikace. Pokud spolupráce vznikne, uchováváme údaje po dobu trvání smlouvy a dál jen tak dlouho, jak to vyžadují právní předpisy.</p>
<h2>Kdo má k údajům přístup</h2>
<ul>
<li>Google Cloud – provoz webu a databáze se zprávami.</li>
<li>Cloudflare – ochrana formuláře proti spamu.</li>
<li>Poskytovatel e-mailových služeb, přes kterého odchází upozornění na novou zprávu.</li>
<li>Se souhlasem s cookies také Google (Google Analytics, Google Ads), Meta Platforms a Seznam.cz.</li>
</ul>
<p>Některé z těchto společností mohou údaje předávat mimo EU. V takovém případě je chrání standardní smluvní doložky Evropské komise nebo rámec EU–USA pro ochranu údajů (Data Privacy Framework).</p>
<h2>Vaše práva</h2>
<p>Máte právo na přístup k údajům, jejich opravu nebo výmaz, omezení zpracování a přenositelnost. Proti zpracování na základě oprávněného zájmu můžete vznést námitku a udělený souhlas můžete kdykoli odvolat. Stačí napsat na <a href="mailto:one@datalayer.cz">one@datalayer.cz</a>. Pokud nebudete spokojeni s tím, jak s údaji zacházíme, můžete podat stížnost u Úřadu pro ochranu osobních údajů (<a href="https://uoou.gov.cz">uoou.gov.cz</a>).</p>`,
        },
      ],
    },
  ],
  faq: [],
  contact: { enabled: false, formId: 'zasady', title: '', placeholder: '' },
};
