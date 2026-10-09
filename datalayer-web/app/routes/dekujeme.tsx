import { Link, useRouteLoaderData, useSearchParams } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { RootData } from '~/lib/rootData';
import type { MetaFunction } from 'react-router';
import { SimplePage } from '~/components/SimplePage';
import { seoMeta } from '~/lib/seo';
import { CONTACT_EMAIL } from '~/lib/site';
import { phoneHref } from '~/lib/settings';

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
  const root = useRouteLoaderData('root') as RootData | undefined;
  const t = root?.texts.thankYou ?? DEFAULT_TEXTS.thankYou;

  if (error) {
    return (
      <SimplePage title={t.errorTitle} path="/dekujeme">
        <p>{ERRORS[error] ?? 'Na serveru nastala chyba. Zkuste to prosím později.'}</p>
        <p>
          Napsat nám můžete i přímo na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <p>
          <Link to="/kontakt" className="btn btn-outline-custom">
            Zpět na kontakt
          </Link>
        </p>
      </SimplePage>
    );
  }

  return (
    <SimplePage title={t.title} path="/dekujeme">
      <p>
        {t.text}{' '}
        {root?.phone ? (
          <>
            Pokud to spěchá, zavolejte na <a href={phoneHref(root.phone)}>{root.phone}</a> nebo napište na{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </>
        ) : (
          <>
            Pokud to spěchá, napište na <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </>
        )}
      </p>
      <p>
        <Link to="/" className="btn btn-outline-custom">
          {t.back}
        </Link>
      </p>
      {t.links?.length ? (
        <ul className="thanks-links">
          {t.links.map((l) => (
            <li key={l.href}>
              <Link to={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </SimplePage>
  );
}
