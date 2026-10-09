import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useMatches, useRouteLoaderData } from 'react-router';
import { DEFAULT_NAVIGATION } from '~/content/defaults/navigation';
import type { NavLink as NavLinkItem } from '~/content/schema';
import { pushEvent } from '~/lib/dataLayer';
import type { RootData } from '~/lib/rootData';
import { phoneHref } from '~/lib/settings';
import { Pi } from './Pictograms';

// Hlavní menu z administrace (Menu a patička): odkazy a rozbalovací menu se
// sloupci (mega-menu). Bez Bootstrap JS, na mobilu akordeon a spodní lišta
// Zavolat / Napsat. CTA vede na #kontakt, pokud stránka kontaktní blok má,
// jinak na /kontakt.

/** Má aktuální stránka kontaktní blok? (loader vrací `hasContact`, nebo route `handle.hasContact`) */
export function useContactHref(): string {
  const matches = useMatches();
  const has = matches.some(
    (m) =>
      (m.handle as { hasContact?: boolean } | undefined)?.hasContact ||
      (m.data as { hasContact?: boolean } | undefined)?.hasContact === true,
  );
  return has ? '#kontakt' : '/kontakt';
}

function MenuLink({ item }: { item: NavLinkItem }) {
  const inner = (
    <>
      {item.pictogram ? <Pi name={item.pictogram} /> : null}
      <span>
        <strong>{item.label}</strong>
        {item.tagline ? <span>{item.tagline}</span> : null}
      </span>
    </>
  );
  const cls = item.pictogram ? 'mega__item' : 'mega__item mega__item--plain';
  return item.href.startsWith('/') ? (
    <Link to={item.href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={item.href} className={cls}>
      {inner}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const contactHref = useContactHref();
  const root = useRouteLoaderData('root') as RootData | undefined;
  const nav = root?.navigation ?? DEFAULT_NAVIGATION;
  const navRef = useRef<HTMLElement>(null);

  // zavřít menu po přechodu na jinou stránku
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [location.pathname]);

  // zavřít klávesou Escape a kliknutím mimo
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <>
      <header className="site-nav" ref={navRef}>
        <div className="container site-nav__bar">
          <Link className="navbar-brand" to="/">
            datalayer<span className="highlight">.cz</span>
          </Link>

          <button type="button" className="site-nav__toggle" aria-expanded={mobile} aria-controls="site-menu" onClick={() => setMobile((v) => !v)}>
            <span className="visually-hidden">{mobile ? 'Zavřít menu' : 'Otevřít menu'}</span>
            <span className="site-nav__burger" aria-hidden="true" />
          </button>

          <nav id="site-menu" className={mobile ? 'site-menu is-open' : 'site-menu'} aria-label="Hlavní menu">
            <ul className="site-menu__list">
              {nav.items.map((item, idx) =>
                item.type === 'link' ? (
                  <li key={idx}>
                    {item.href.startsWith('/') ? (
                      <NavLink className="site-menu__link" to={item.href}>
                        {item.label}
                      </NavLink>
                    ) : (
                      <a className="site-menu__link" href={item.href}>
                        {item.label}
                      </a>
                    )}
                  </li>
                ) : (
                  <li key={idx} className={open === item.id ? 'has-mega is-open' : 'has-mega'}>
                    <button
                      type="button"
                      className="site-menu__link"
                      aria-expanded={open === item.id}
                      onClick={() => setOpen((cur) => (cur === item.id ? null : item.id))}
                    >
                      {item.label} <span className="caret" aria-hidden="true" />
                    </button>
                    <div className={item.columns.length > 1 ? 'mega' : 'mega mega--narrow'} hidden={open !== item.id}>
                      {item.columns.length > 1 ? (
                        <div className="mega__grid mega__grid--3" style={{ gridTemplateColumns: `repeat(${item.columns.length}, 1fr)` }}>
                          {item.columns.map((col, ci) => (
                            <div key={ci}>
                              {col.title ? <p className="mega__group">{col.title}</p> : null}
                              <ul>
                                {col.items.map((s) => (
                                  <li key={s.href}>
                                    <MenuLink item={s} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul>
                          {item.columns[0].items.map((s) => (
                            <li key={s.href}>
                              <MenuLink item={s} />
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.footerLink ? (
                        item.columns.length > 1 ? (
                          <Link to={item.footerLink.href} className="mega__all">
                            {item.footerLink.label} →
                          </Link>
                        ) : (
                          <>
                            <div className="mega__sep" role="separator" />
                            <MenuLink item={{ label: item.footerLink.label, href: item.footerLink.href }} />
                          </>
                        )
                      ) : null}
                    </div>
                  </li>
                ),
              )}
              <li className="site-menu__cta">
                <a
                  href={contactHref}
                  className="btn btn-cta"
                  onClick={() => pushEvent('cta_click', { cta_id: 'nav_cta', cta_text: nav.cta.label, section: 'nav' })}
                >
                  [ {nav.cta.label} ]
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobil: spodní lišta se dvěma akcemi */}
      <div className="mobile-bar">
        {root?.phone ? (
          <a href={phoneHref(root.phone)} className="mobile-bar__btn" onClick={() => pushEvent('contact_click', { channel: 'phone', section: 'mobile_bar' })}>
            {nav.mobileBar.callLabel}
          </a>
        ) : null}
        <a href={contactHref} className="mobile-bar__btn mobile-bar__btn--cta">
          {nav.mobileBar.writeLabel}
        </a>
      </div>
    </>
  );
}
