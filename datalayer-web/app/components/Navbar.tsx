import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useMatches, useRouteLoaderData } from 'react-router';
import { SERVICE_GROUPS, SOLUTIONS } from '~/content/menu';
import { pushEvent } from '~/lib/dataLayer';
import type { RootData } from '~/lib/rootData';
import { phoneHref } from '~/lib/settings';
import { Pi } from './Pictograms';

// Hlavní menu (architektura webu, kap. 2): Služby ▾ · Řešení ▾ · Blog · O nás
// · CTA. Mega-menu bez Bootstrap JS, na mobilu akordeon a spodní lišta
// Zavolat / Napsat. CTA vede na #kontakt, pokud stránka kontaktní blok má,
// jinak na /kontakt.

type Menu = 'sluzby' | 'reseni' | null;

/** Má aktuální stránka vlastní kontaktní blok (route `handle.hasContact`)? */
export function useContactHref(): string {
  const matches = useMatches();
  const has = matches.some((m) => (m.handle as { hasContact?: boolean } | undefined)?.hasContact);
  return has ? '#kontakt' : '/kontakt';
}

export function Navbar() {
  const [open, setOpen] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const contactHref = useContactHref();
  const root = useRouteLoaderData('root') as RootData | undefined;
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

  const toggle = (m: Exclude<Menu, null>) => setOpen((cur) => (cur === m ? null : m));

  return (
    <>
      <header className="site-nav" ref={navRef}>
        <div className="container site-nav__bar">
          <Link className="navbar-brand" to="/">
            datalayer<span className="highlight">.cz</span>
          </Link>

          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={mobile}
            aria-controls="site-menu"
            onClick={() => setMobile((v) => !v)}
          >
            <span className="visually-hidden">{mobile ? 'Zavřít menu' : 'Otevřít menu'}</span>
            <span className="site-nav__burger" aria-hidden="true" />
          </button>

          <nav id="site-menu" className={mobile ? 'site-menu is-open' : 'site-menu'} aria-label="Hlavní menu">
            <ul className="site-menu__list">
              <li className={open === 'sluzby' ? 'has-mega is-open' : 'has-mega'}>
                <button type="button" className="site-menu__link" aria-expanded={open === 'sluzby'} onClick={() => toggle('sluzby')}>
                  Služby <span className="caret" aria-hidden="true" />
                </button>
                <div className="mega" hidden={open !== 'sluzby'}>
                  <div className="mega__grid mega__grid--3">
                    {SERVICE_GROUPS.map((g) => (
                      <div key={g.id}>
                        <p className="mega__group">{g.label}</p>
                        <ul>
                          {g.items.map((s) => (
                            <li key={s.path}>
                              <Link to={s.path} className="mega__item">
                                <Pi name={s.pictogram} />
                                <span>
                                  <strong>{s.label}</strong>
                                  <span>{s.tagline}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link to="/sluzby" className="mega__all">
                    Všechny služby →
                  </Link>
                </div>
              </li>
              <li className={open === 'reseni' ? 'has-mega is-open' : 'has-mega'}>
                <button type="button" className="site-menu__link" aria-expanded={open === 'reseni'} onClick={() => toggle('reseni')}>
                  Řešení <span className="caret" aria-hidden="true" />
                </button>
                <div className="mega mega--narrow" hidden={open !== 'reseni'}>
                  <ul>
                    {SOLUTIONS.map((s) => (
                      <li key={s.path}>
                        <Link to={s.path} className="mega__item">
                          <Pi name={s.pictogram} />
                          <span>
                            <strong>{s.label}</strong>
                            <span>{s.tagline}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li className="mega__sep" role="separator" />
                    <li>
                      <Link to="/jak-pracujeme" className="mega__item mega__item--plain">
                        <strong>Jak pracujeme</strong>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink className="site-menu__link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="site-menu__link" to="/o-nas">
                  O nás
                </NavLink>
              </li>
              <li className="site-menu__cta">
                <a
                  href={contactHref}
                  className="btn btn-cta"
                  onClick={() => pushEvent('cta_click', { cta_id: 'nav_cta', cta_text: 'Konzultovat projekt', section: 'nav' })}
                >
                  [ Konzultovat projekt ]
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobil: spodní lišta se dvěma akcemi */}
      <div className="mobile-bar">
        {root?.phone ? (
          <a
            href={phoneHref(root.phone)}
            className="mobile-bar__btn"
            onClick={() => pushEvent('contact_click', { channel: 'phone', section: 'mobile_bar' })}
          >
            Zavolat
          </a>
        ) : null}
        <a href={contactHref} className="mobile-bar__btn mobile-bar__btn--cta">
          Napsat
        </a>
      </div>
    </>
  );
}
