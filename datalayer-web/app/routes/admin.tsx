import { Form, NavLink, Outlet, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { requireUser } from '~/lib/auth.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  return { user };
}

export default function AdminLayout() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="admin-shell">
      <nav className="admin-nav">
        <div className="container d-flex align-items-center justify-content-between py-2 flex-wrap gap-2">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <span className="navbar-brand mb-0">
              datalayer<span className="highlight">.cz</span> · admin
            </span>
            <NavLink to="/admin" end className="admin-link">
              Přehled
            </NavLink>
            <NavLink to="/admin/articles" className="admin-link">
              Články
            </NavLink>
            {user.role === 'admin' ? (
              <NavLink to="/admin/users" className="admin-link">
                Uživatelé
              </NavLink>
            ) : null}
            <a href="/" className="admin-link" target="_blank" rel="noreferrer">
              Web ↗
            </a>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">
              {user.name || user.email} ({user.role})
            </span>
            <Form method="post" action="/admin/logout">
              <button type="submit" className="btn btn-outline-custom btn-sm">
                Odhlásit
              </button>
            </Form>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <Outlet />
      </main>
    </div>
  );
}
