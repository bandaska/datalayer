import { Link, useRouteLoaderData } from 'react-router';
import { DEFAULT_NAVIGATION } from '~/content/defaults/navigation';
import type { Link as LinkItem, Navigation } from '~/content/schema';
import { openConsentSettings } from '~/lib/consent';
import { pushEvent } from '~/lib/dataLayer';
import type { RootData } from '~/lib/rootData';
import { phoneHref } from '~/lib/settings';
import { CONTACT_EMAIL } from '~/lib/site';

// Patička z administrace (Menu a patička): popis, sloupce odkazů (ručně nebo
// převzaté z menu), kontakt z nastavení a spodní řádek se zásadami.

function columnLinks(nav: Navigation, col: Navigation['footer']['columns'][number]): LinkItem[] {
  const fromMenu: LinkItem[] = [];
  if (col.fromMenu) {
    const menu = nav.items.find((i) => i.type === 'menu' && i.id === col.fromMenu);
    if (menu && menu.type === 'menu') for (const c of menu.columns) for (const it of c.items) fromMenu.push({ label: it.label, href: it.href });
  }
  return [...fromMenu, ...col.links];
}

function FooterLink({ link }: { link: LinkItem }) {
  return link.href.startsWith('/') ? <Link to={link.href}>{link.label}</Link> : <a href={link.href}>{link.label}</a>;
}

export function Footer() {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const nav = root?.navigation ?? DEFAULT_NAVIGATION;
  const email = root?.email || CONTACT_EMAIL;
  const f = nav.footer;
  const colClass = 'col-lg col-md-6 mb-4';

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className={colClass}>
            <p className="site-footer__brand">
              datalayer<span className="highlight">.cz</span>
            </p>
            {f.description ? <p className="small">{f.description}</p> : null}
          </div>
          {f.columns.map((col, i) => (
            <div className={colClass} key={i}>
              <p className="site-footer__title">{col.title}</p>
              <ul className="list-unstyled small">
                {columnLinks(nav, col).map((l) => (
                  <li key={`${l.href}-${l.label}`} className="mb-1">
                    <FooterLink link={l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={colClass}>
            <p className="site-footer__title">{f.contactTitle}</p>
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
          {f.bottomLinks.map((l) => (
            <FooterLink key={l.href} link={l} />
          ))}
          <button type="button" className="link-button" onClick={openConsentSettings}>
            {f.cookieSettingsLabel}
          </button>
          <span>&copy; {new Date().getFullYear()} datalayer.cz</span>
        </div>
      </div>
    </footer>
  );
}
