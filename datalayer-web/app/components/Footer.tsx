import { Link, useRouteLoaderData } from 'react-router';
import { ALL_SERVICES, SOLUTIONS } from '~/content/menu';
import { openConsentSettings } from '~/lib/consent';
import { pushEvent } from '~/lib/dataLayer';
import type { RootData } from '~/lib/rootData';
import { phoneHref } from '~/lib/settings';
import { CONTACT_EMAIL } from '~/lib/site';

// Patička (architektura webu, kap. 2): služby, řešení a firma, kontakt;
// spodní řádek se zásadami a odkazem „Nastavení cookies“.

export function Footer() {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const email = root?.email || CONTACT_EMAIL;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="site-footer__brand">
              datalayer<span className="highlight">.cz</span>
            </p>
            <p className="small">
              Webová analytika a měření pro e-shopy, B2B firmy a velké firmy. Od datové vrstvy po BigQuery,
              s dokumentací a s daty, která vlastníte vy.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="site-footer__title">Služby</p>
            <ul className="list-unstyled small">
              {ALL_SERVICES.map((s) => (
                <li key={s.path} className="mb-1">
                  <Link to={s.path}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="site-footer__title">Řešení</p>
            <ul className="list-unstyled small">
              {SOLUTIONS.map((s) => (
                <li key={s.path} className="mb-1">
                  <Link to={s.path}>{s.label}</Link>
                </li>
              ))}
              <li className="mb-1">
                <Link to="/jak-pracujeme">Jak pracujeme</Link>
              </li>
            </ul>
            <p className="site-footer__title mt-3">Obsah a firma</p>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="mb-1">
                <Link to="/o-nas">O nás</Link>
              </li>
              <li className="mb-1">
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="site-footer__title">Kontakt</p>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href={`mailto:${email}`} onClick={() => pushEvent('contact_click', { channel: 'email', section: 'footer' })}>
                  {email}
                </a>
              </li>
              {root?.phone ? (
                <li className="mb-2">
                  <a href={phoneHref(root.phone)} onClick={() => pushEvent('contact_click', { channel: 'phone', section: 'footer' })}>
                    {root.phone}
                  </a>
                </li>
              ) : null}
              {root?.linkedinUrl ? (
                <li className="mb-2">
                  <a href={root.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <Link to="/zpracovani-osobnich-udaju">Zpracování osobních údajů</Link>
          <Link to="/cookies">Cookies</Link>
          <button type="button" className="link-button" onClick={openConsentSettings}>
            Nastavení cookies
          </button>
          <span>&copy; {new Date().getFullYear()} datalayer.cz</span>
        </div>
      </div>
    </footer>
  );
}
