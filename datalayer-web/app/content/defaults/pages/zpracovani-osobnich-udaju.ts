import type { PageInput } from '../../schema';

// Zpracování osobních údajů podle auditu z 2. listopadu 2026, kap. 15 (seo-analyza/
// 2026-11-02_seo-ux-texty): kratší záhlaví a perex (P01), správce a kontakt (identifikaci
// doplní blok Provozovatel z Nastavení, až ji klient vyplní – zástupné údaje se
// nepublikují), oddělené účely Vyřízení poptávky a Měření úspěšnosti reklamy (P02), Ochrana
// formuláře (P03) a Vaše práva a možnosti s tlačítkem nastavení cookies (P05).
// Texty popisují ověřenou implementaci: formulář ukládá do Firestore a posílá e-mail; hash
// e-mailu a telefonu vzniká jen se souhlasem s marketingovými cookies a jde do datové vrstvy
// GTM (app/components/ContactBlock.tsx); limit odeslání drží IP adresu jen v paměti nejvýš
// hodinu (app/lib/rateLimit.server.ts); GTM se načítá s výchozím odmítnutým souhlasem
// (app/lib/consent.ts). Tabulku účelů, příjemců a dob (P04) a datum poslední aktualizace
// doplnit, až je potvrdí klient a právník. „Správce je…“ a „Právní základ je…“ v 1. pádě
// podle HARD-RULES („je metoda“, ne „je metodou“).

export const page: PageInput = {
  path: 'zpracovani-osobnich-udaju',
  kind: 'legal',
  navTitle: 'Zpracování osobních údajů',
  tagline: 'jak zacházíme s osobními údaji',
  pictogram: 'gov',
  seo: {
    title: 'Zpracování osobních údajů – datalayer.cz',
    description:
      'Informace o správci, účelech zpracování, příjemcích a uchování osobních údajů z webu datalayer.cz. Kontakty a možnosti uplatnění práv.',
  },
  hero: {
    variant: 'simple',
    h1: 'Zpracování osobních údajů',
    subtitle: 'Zde najdete informace o tom, kdo zpracovává údaje z tohoto webu, k jakým účelům a jak můžete uplatnit svá práva.',
  },
  sections: [
    {
      id: 'zasady',
      title: '',
      blocks: [
        {
          type: 'html',
          html: `<h2>Správce a kontakt</h2>
<p>Správce osobních údajů je provozovatel webu datalayer.cz uvedený níže. S dotazy ke zpracování údajů se můžete obrátit na <a href="mailto:one@datalayer.cz">one@datalayer.cz</a>.</p>`,
        },
        { type: 'operator' },
        {
          type: 'html',
          html: `<h2>Vyřízení poptávky</h2>
<p>Při odeslání formuláře zpracováváme jméno, e-mail a text zprávy. Pokud je vyplníte, také telefon a adresu webu. Údaje používáme k vyřízení poptávky a domluvě případné spolupráce. Právní základ je jednání o smlouvě na vaši žádost podle čl. 6 odst. 1 písm. b) GDPR, proto ve formuláři nežádáme o souhlas.</p>
<p>Poptávku uložíme do databáze Google Cloud Firestore a pošleme ji e-mailem lidem, kteří poptávky vyřizují. Do analytických nástrojů jméno, e-mail ani telefon neposíláme.</p>
<h2>Měření úspěšnosti reklamy</h2>
<p>Jen pokud udělíte souhlas s marketingovými cookies, web při odeslání formuláře převede e-mail a telefon do podoby hashe (SHA-256) a předá ho do datové vrstvy Google Tag Manageru. Odtud ho mohou převzít reklamní systémy k měření konverzí, například rozšířené konverze Google Ads. Hash umožňuje párování údajů a není anonymizací. Právní základ je váš souhlas, který odvoláte v nastavení cookies.</p>
<h2>Ochrana formuláře</h2>
<p>Formulář chráníme proti automatizovanému zneužití službou Cloudflare Turnstile. Při ověření pracuje s technickými údaji o prohlížeči a s IP adresou. IP adresu používáme také k omezení počtu zpráv odeslaných za sebou: server ji drží jen v operační paměti, nejvýš hodinu. Právní základ je náš oprávněný zájem na ochraně webu před zneužitím podle čl. 6 odst. 1 písm. f) GDPR.</p>
<h2>Cookies a měření návštěvnosti</h2>
<p>Analytické a marketingové cookies používáme jen se souhlasem podle § 89 odst. 3 zákona č. 127/2005 Sb. a čl. 6 odst. 1 písm. a) GDPR. Web načítá Google Tag Manager i před vaší volbou, s výchozím odmítnutým souhlasem. Google tagy pak mohou odesílat požadavky bez cookies s informacemi o události a technickém kontextu. Podrobnosti najdete na stránce <a href="/cookies">Cookies a nastavení souhlasu</a>.</p>
<h2>Jak dlouho údaje uchováváme</h2>
<p>Poptávky uchováváme po dobu, kterou potřebujeme k jejich vyřízení. Pokud spolupráce nevznikne, smažeme je nejpozději do dvanácti měsíců od poslední komunikace. Pokud spolupráce vznikne, uchováváme údaje po dobu trvání smlouvy a dál jen tak dlouho, jak to vyžadují právní předpisy.</p>
<h2>Kdo má k údajům přístup</h2>
<ul>
<li>Google Cloud – provoz webu a databáze s poptávkami.</li>
<li>Cloudflare – ochrana formuláře proti spamu.</li>
<li>Poskytovatel e-mailových služeb, přes kterého odchází upozornění na novou poptávku.</li>
<li>Se souhlasem s cookies také Google (Google Analytics, Google Ads), Meta Platforms a Seznam.cz.</li>
</ul>
<p>Některé z těchto společností mohou údaje předávat mimo EU. V takovém případě je chrání standardní smluvní doložky Evropské komise nebo rámec EU–USA pro ochranu údajů (Data Privacy Framework).</p>
<h2>Vaše práva a možnosti</h2>
<p>Za podmínek, které stanoví právní předpisy, můžete požádat o přístup k údajům, opravu, výmaz, omezení zpracování nebo přenositelnost. U příslušných zpracování můžete vznést námitku. Napište na <a href="mailto:one@datalayer.cz">one@datalayer.cz</a>. Pokud nebudete spokojeni s tím, jak s údaji zacházíme, můžete podat stížnost u Úřadu pro ochranu osobních údajů (<a href="https://uoou.gov.cz">uoou.gov.cz</a>).</p>
<p>Souhlas s cookies můžete změnit v nastavení cookies.</p>`,
        },
        { type: 'consentSettings', label: 'Nastavit cookies' },
      ],
    },
  ],
  faq: [],
  contact: { enabled: false, formId: 'zasady', title: '', placeholder: '' },
};
