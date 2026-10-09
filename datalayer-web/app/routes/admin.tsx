import { useState } from 'react';
import { Form, Link, NavLink, Outlet, useLoaderData } from 'react-router';
import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from 'react-router';
import adminStylesHref from '~/admin.css?url';
import { requireUser } from '~/lib/auth.server';
import { countUnread } from '~/lib/messages.server';

// Layout administrace: postranní menu (na mobilu rozbalovací) a obsah.
// Světlý vzhled z app/admin.css – web má vlastní tmavé styly v app.css.

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: adminStylesHref }];

export const meta: MetaFunction = () => [{ title: 'Administrace | datalayer.cz' }, { name: 'robots', content: 'noindex, nofollow' }];

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  const unread = await countUnread().catch(() => 0);
  return { user, unread };
}

export default function AdminLayout() {
  const { user, unread } = useLoaderData<typeof loader>();
  const [open, setOpen] = useState(false);
  const isAdmin = user.role === 'admin';

  const item = (to: string, label: string, opts: { end?: boolean; count?: number } = {}) => (
    <li>
      <NavLink to={to} end={opts.end} onClick={() => setOpen(false)}>
        <span>{label}</span>
        {opts.count ? <span className="adm-count">{opts.count}</span> : null}
      </NavLink>
    </li>
  );

  return (
    <div className="adm">
      <aside className={open ? 'adm-side is-open' : 'adm-side'}>
        <div className="adm-sidehead">
          <Link to="/admin" className="adm-brand">
            datalayer<span>.cz</span>
            <small>administrace</small>
          </Link>
          <button type="button" className="btn btn-sm btn-outline-light adm-toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? 'Zavřít' : 'Menu'}
          </button>
        </div>
        <ul className="adm-nav">
          {item('/admin', 'Přehled', { end: true })}
          <li className="adm-nav__group">Obsah webu</li>
          {item('/admin/pages', 'Stránky')}
          {item('/admin/navigation', 'Menu a patička')}
          {item('/admin/texts', 'Texty webu')}
          {item('/admin/articles', 'Články')}
          <li className="adm-nav__group">Poptávky</li>
          {item('/admin/messages', 'Zprávy z formuláře', { count: unread })}
          {isAdmin ? (
            <>
              <li className="adm-nav__group">Správa</li>
              {item('/admin/settings', 'Nastavení')}
              {item('/admin/migrations', 'Migrace')}
              {item('/admin/users', 'Uživatelé')}
            </>
          ) : null}
        </ul>
        <div className="adm-user">
          <a href="/" target="_blank" rel="noreferrer">
            Zobrazit web ↗
          </a>
          <div className="mt-2">
            <NavLink to="/admin/account" onClick={() => setOpen(false)}>
              {user.name || user.email}
            </NavLink>
            <small>{user.role === 'admin' ? 'administrátor' : 'editor'}</small>
          </div>
          <Form method="post" action="/admin/logout">
            <button type="submit" className="btn btn-sm btn-outline-light">
              Odhlásit
            </button>
          </Form>
        </div>
      </aside>
      <div className="adm-main">
        <main className="adm-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
