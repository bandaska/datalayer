import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { SimplePage } from '~/components/SimplePage';
import { breadcrumbLd, seoMeta } from '~/lib/seo';
import { CONTACT_EMAIL } from '~/lib/site';

const PATH = '/zpracovani-osobnich-udaju';

export const meta: MetaFunction = () =>
  seoMeta({
    title: 'Zpracování osobních údajů | datalayer.cz',
    description:
      'Jaké osobní údaje web datalayer.cz zpracovává, proč a jak dlouho je uchováváme, kdo k nim má přístup a jaká máte práva podle GDPR.',
    path: PATH,
    jsonLd: breadcrumbLd([
      { name: 'Úvod', path: '/' },
      { name: 'Zpracování osobních údajů', path: PATH },
    ]),
  });

export default function Privacy() {
  return (
    <SimplePage
      title="Zpracování osobních údajů"
      perex="Popisujeme tu, jaké osobní údaje web datalayer.cz zpracovává, proč je potřebujeme, jak dlouho je uchováváme a jaká máte práva."
      path={PATH}
    >
      <h2>Kdo údaje zpracovává</h2>
      <p>
        Správce osobních údajů je provozovatel webu datalayer.cz. S čímkoli, co se týká osobních údajů, nám
        napište na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Kontaktní formulář</h2>
      <p>
        Když nám pošlete zprávu, zpracujeme jméno, e-mail a text zprávy. Pokud je vyplníte, také telefon,
        adresu webu a vybraná témata. Údaje potřebujeme, abychom mohli odpovědět na poptávku a případně
        připravit nabídku. Právní základ je jednání o smlouvě na vaši žádost podle čl. 6 odst. 1 písm. b) GDPR,
        proto ve formuláři nežádáme o souhlas.
      </p>
      <p>
        Zprávu uložíme do databáze Google Cloud Firestore a pošleme ji e-mailem lidem, kteří poptávky
        vyřizují. Do analytiky ani reklamních systémů jméno, e-mail ani telefon v čitelné podobě neposíláme.
        Při odeslání formuláře web vytvoří jen jednosměrný otisk e-mailu a telefonu (SHA-256), a to jen pokud
        jste souhlasili s marketingovými cookies.
      </p>

      <h2>Ochrana proti spamu</h2>
      <p>
        Formulář chrání služba Cloudflare Turnstile. Ověří, že formulář vyplňuje člověk, a pracuje přitom
        s technickými údaji o prohlížeči a s IP adresou. IP adresu krátce používáme i k omezení počtu zpráv
        odeslaných za sebou. Právní základ je náš oprávněný zájem na ochraně webu před zneužitím podle
        čl. 6 odst. 1 písm. f) GDPR.
      </p>

      <h2>Cookies a měření návštěvnosti</h2>
      <p>
        Analytické a marketingové cookies používáme jen se souhlasem podle § 89 odst. 3 zákona č. 127/2005 Sb.
        a čl. 6 odst. 1 písm. a) GDPR. Souhlas můžete kdykoli odvolat. Podrobnosti najdete
        v <Link to="/cookies">zásadách cookies</Link>.
      </p>

      <h2>Jak dlouho údaje uchováváme</h2>
      <p>
        Zprávy z formuláře uchováváme po dobu, kterou potřebujeme k vyřízení poptávky. Pokud spolupráce
        nevznikne, smažeme je nejpozději do dvanácti měsíců od poslední komunikace. Pokud spolupráce vznikne,
        uchováváme údaje po dobu trvání smlouvy a dál jen tak dlouho, jak to vyžadují právní předpisy.
      </p>

      <h2>Kdo k údajům má přístup</h2>
      <ul>
        <li>Google Cloud – provoz webu a databáze se zprávami.</li>
        <li>Cloudflare – ochrana formuláře proti spamu.</li>
        <li>Poskytovatel e-mailových služeb, přes kterého odchází upozornění na novou zprávu.</li>
        <li>Se souhlasem s cookies také Google (Google Analytics, Google Ads), Meta Platforms a Seznam.cz.</li>
      </ul>
      <p>
        Některé z těchto společností mohou údaje předávat mimo EU. V takovém případě je chrání standardní
        smluvní doložky Evropské komise nebo rámec EU a USA pro ochranu osobních údajů.
      </p>

      <h2>Vaše práva</h2>
      <p>
        Máte právo na přístup k údajům, jejich opravu nebo výmaz, omezení zpracování a přenositelnost. Proti
        zpracování na základě oprávněného zájmu můžete vznést námitku a udělený souhlas můžete kdykoli
        odvolat. Stačí napsat na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Pokud nebudete
        spokojeni s tím, jak s údaji zacházíme, můžete podat stížnost u Úřadu pro ochranu osobních údajů
        (<a href="https://uoou.gov.cz" rel="noopener noreferrer">uoou.gov.cz</a>).
      </p>
    </SimplePage>
  );
}
