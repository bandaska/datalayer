import { Link, useSearchParams } from 'react-router';
import type { MetaFunction } from 'react-router';
import { SimplePage } from '~/components/SimplePage';
import { seoMeta } from '~/lib/seo';
import { CONTACT_EMAIL } from '~/lib/site';

// Děkovací stránka pro odeslání formuláře bez JavaScriptu (noindex).

export const meta: MetaFunction = () =>
  seoMeta({
    title: 'Děkujeme za zprávu | datalayer.cz',
    description: 'Zpráva z kontaktního formuláře dorazila. Ozveme se do jednoho pracovního dne.',
    path: '/dekujeme',
    noindex: true,
  });

const ERRORS: Record<string, string> = {
  '422': 'Ve formuláři chybí jméno, platný e-mail nebo text zprávy.',
  '403': 'Ověření proti spamu selhalo. Ochrana formuláře potřebuje zapnutý JavaScript.',
  '429': 'Odeslali jste několik zpráv za sebou. Zkuste to prosím za chvíli.',
};

export default function Dekujeme() {
  const [params] = useSearchParams();
  const error = params.get('chyba');

  if (error) {
    return (
      <SimplePage title="Zprávu se nepodařilo odeslat" path="/dekujeme">
        <p>{ERRORS[error] ?? 'Na serveru nastala chyba. Zkuste to prosím později.'}</p>
        <p>
          Napsat nám můžete i přímo na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <p>
          <Link to="/kontakt" className="btn btn-outline-custom">
            [ Zpět na kontakt ]
          </Link>
        </p>
      </SimplePage>
    );
  }

  return (
    <SimplePage title="Díky, zpráva dorazila" path="/dekujeme">
      <p>Ozveme se vám do jednoho pracovního dne. Spěchá to? Napište na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      <p>
        <Link to="/" className="btn btn-outline-custom">
          [ Zpět na úvod ]
        </Link>
      </p>
    </SimplePage>
  );
}
