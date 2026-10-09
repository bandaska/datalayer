import { Link, useLoaderData } from 'react-router';
import { getAll } from '~/lib/articles.server';
import { getAllPages } from '~/lib/pages.server';
import { countUnread } from '~/lib/messages.server';
import { countUsers } from '~/lib/users.server';

export async function loader() {
  const [articles, pages, users, unread] = await Promise.all([
    getAll(),
    getAllPages(),
    countUsers(),
    countUnread().catch(() => 0),
  ]);
  return { articleCount: articles.length, pageCount: pages.length, userCount: users, unread };
}

export default function AdminDashboard() {
  const { articleCount, pageCount, userCount, unread } = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="h3 text-white mb-4">Přehled</h1>
      <div className="row g-3">
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small">Články</div>
            <div className="display-6 text-cyan">{articleCount}</div>
            <Link to="/admin/articles" className="btn-link-cyan">
              Spravovat →
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small">Landing pages</div>
            <div className="display-6 text-cyan">{pageCount}</div>
            <Link to="/admin/pages" className="btn-link-cyan">
              Spravovat →
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small">Nepřečtené zprávy</div>
            <div className="display-6 text-cyan">{unread}</div>
            <Link to="/admin/messages" className="btn-link-cyan">
              Zprávy z formuláře →
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small">Uživatelé</div>
            <div className="display-6 text-cyan">{userCount}</div>
            <Link to="/admin/users" className="btn-link-cyan">
              Spravovat →
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="admin-card">
            <div className="text-muted small">Nový obsah</div>
            <div className="mt-2 d-flex gap-2 flex-wrap">
              <Link to="/admin/articles/new" className="btn btn-cta btn-sm">
                + Článek
              </Link>
              <Link to="/admin/pages/new" className="btn btn-outline-custom btn-sm">
                + Landing page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
