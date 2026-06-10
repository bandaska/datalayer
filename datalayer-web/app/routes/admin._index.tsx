import { Link, useLoaderData } from 'react-router';
import { getAll } from '~/lib/articles.server';
import { countUsers } from '~/lib/users.server';

export async function loader() {
  const [articles, users] = await Promise.all([getAll(), countUsers()]);
  return { articleCount: articles.length, userCount: users };
}

export default function AdminDashboard() {
  const { articleCount, userCount } = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="h3 text-white mb-4">Přehled</h1>
      <div className="row g-3">
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small text-uppercase">Články</div>
            <div className="display-6 text-cyan">{articleCount}</div>
            <Link to="/admin/articles" className="btn-link-cyan">
              Spravovat →
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small text-uppercase">Uživatelé</div>
            <div className="display-6 text-cyan">{userCount}</div>
            <Link to="/admin/users" className="btn-link-cyan">
              Spravovat →
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small text-uppercase">Nový obsah</div>
            <div className="mt-2">
              <Link to="/admin/articles/new" className="btn btn-cta btn-sm">
                + Nový článek
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
