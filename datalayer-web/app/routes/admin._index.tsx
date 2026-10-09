import { Link, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { Card, PageHead, Pill, formatDateTime, plural } from '~/components/admin/ui';
import { getAll } from '~/lib/articles.server';
import { requireUser } from '~/lib/auth.server';
import { isCmsInitialized } from '~/lib/cms/meta.server';
import { listPages } from '~/lib/cms/pages.server';
import { countUnread } from '~/lib/messages.server';
import { countUsers } from '~/lib/users.server';
import { getMigrationStatus } from '~/migrations/runner';

// Přehled administrace: počty, stav převodu obsahu do databáze, čekající
// migrace a naposledy upravené stránky.

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  const isAdmin = user.role === 'admin';
  const [pages, articles, unread, users, initialized, migrations] = await Promise.all([
    listPages(),
    getAll(),
    countUnread().catch(() => 0),
    countUsers().catch(() => 0),
    isCmsInitialized(),
    isAdmin ? getMigrationStatus().catch(() => null) : Promise.resolve(null),
  ]);

  const recent = pages
    .filter((p) => p.updatedAt)
    .sort((a, b) => (b.updatedAt ?? '').localeCompare(a.updatedAt ?? ''))
    .slice(0, 6)
    .map((p) => ({ id: p.id, label: p.page.navTitle, path: p.page.path, updatedAt: p.updatedAt, updatedBy: p.updatedBy }));

  return {
    isAdmin,
    initialized,
    pages: {
      total: pages.length,
      drafts: pages.filter((p) => !p.page.published).length,
      fromCode: pages.filter((p) => p.source === 'default').length,
      legacy: pages.filter((p) => p.source === 'legacy').length,
    },
    articles: articles.length,
    unread,
    users,
    pendingMigrations: migrations ? migrations.filter((m) => !m.applied).map((m) => ({ id: m.id, description: m.description })) : [],
    recent,
  };
}

export default function AdminDashboard() {
  const d = useLoaderData<typeof loader>();

  return (
    <>
      <PageHead
        title="Přehled"
        desc="Obsah webu, poptávky a stav nasazení na jednom místě."
        actions={
          <>
            <Link to="/admin/pages/new" className="btn btn-primary">
              Nová stránka
            </Link>
            <Link to="/admin/articles/new" className="btn btn-outline-secondary">
              Nový článek
            </Link>
          </>
        }
      />

      {!d.initialized ? (
        <div className="alert alert-warning">
          <strong>Část obsahu web zatím bere z kódu.</strong> Upravovat můžete všechno už teď – uložená stránka, menu i texty
          platí hned. Migrace „Přesun obsahu webu do administrace“ uloží do databáze i zbytek a od té chvíle web čte obsah jen
          z administrace.{' '}
          {d.isAdmin ? <Link to="/admin/migrations">Otevřít Migrace →</Link> : 'Spustit ji může administrátor.'}
        </div>
      ) : null}

      {d.isAdmin && d.pendingMigrations.length ? (
        <div className="alert alert-info">
          <strong>Čekající migrace: {d.pendingMigrations.length}.</strong>{' '}
          {d.pendingMigrations.map((m) => m.id).join(', ')}. <Link to="/admin/migrations">Zkontrolovat a spustit →</Link>
        </div>
      ) : null}

      <div className="adm-grid">
        <Link to="/admin/pages" className="adm-stat">
          <span className="adm-stat__label">Stránky</span>
          <span className="adm-stat__value">{d.pages.total}</span>
          <span className="adm-stat__link">
            {d.pages.drafts ? `${d.pages.drafts} v konceptu · ` : ''}Spravovat →
          </span>
        </Link>
        <Link to="/admin/articles" className="adm-stat">
          <span className="adm-stat__label">Články</span>
          <span className="adm-stat__value">{d.articles}</span>
          <span className="adm-stat__link">Spravovat →</span>
        </Link>
        <Link to="/admin/messages" className="adm-stat">
          <span className="adm-stat__label">Nepřečtené zprávy</span>
          <span className="adm-stat__value">{d.unread}</span>
          <span className="adm-stat__link">Zprávy z formuláře →</span>
        </Link>
        {d.isAdmin ? (
          <Link to="/admin/users" className="adm-stat">
            <span className="adm-stat__label">Uživatelé</span>
            <span className="adm-stat__value">{d.users}</span>
            <span className="adm-stat__link">Spravovat →</span>
          </Link>
        ) : null}
      </div>

      <div className="row g-3">
        <div className="col-lg-7">
          <Card title="Naposledy upravené stránky" flush>
            {d.recent.length ? (
              <div className="adm-table-wrap">
                <table className="adm-table">
                  <tbody>
                    {d.recent.map((p) => (
                      <tr key={p.id}>
                        <td>
                          <Link to={`/admin/pages/${p.id}`}>
                            <strong>{p.label}</strong>
                          </Link>
                          <div className="small text-secondary">/{p.path}</div>
                        </td>
                        <td className="text-nowrap small">
                          {formatDateTime(p.updatedAt)}
                          <div className="text-secondary">{p.updatedBy ?? '–'}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="adm-empty mb-0">Zatím žádná uložená změna. Upravené stránky uvidíte tady.</p>
            )}
          </Card>
        </div>
        <div className="col-lg-5">
          <Card title="Kde co upravit">
            <ul className="adm-links">
              <li>
                <Link to="/admin/pages">Stránky</Link> – homepage, služby, řešení, kontakt i zásady: texty, sekce, FAQ, SEO.
              </li>
              <li>
                <Link to="/admin/navigation">Menu a patička</Link> – hlavní menu, rozbalovací nabídky, patička, lišta na mobilu.
              </li>
              <li>
                <Link to="/admin/texts">Texty webu</Link> – formulář, cookie lišta, úvod blogu, děkovací stránka a 404.
              </li>
              <li>
                <Link to="/admin/articles">Články</Link> – blog.
              </li>
              {d.isAdmin ? (
                <li>
                  <Link to="/admin/settings">Nastavení</Link> – příjemci formuláře, telefon, GTM.
                </li>
              ) : null}
            </ul>
            {d.pages.fromCode || d.pages.legacy ? (
              <p className="small text-secondary mb-0">
                {d.pages.fromCode ? (
                  <>
                    <Pill tone="info">z kódu</Pill> {plural(d.pages.fromCode, 'stránka', 'stránky', 'stránek')} zatím jen v kódu.{' '}
                  </>
                ) : null}
                {d.pages.legacy ? (
                  <>
                    <Pill tone="warn">starší</Pill> {plural(d.pages.legacy, 'stránka', 'stránky', 'stránek')} ze starší administrace – uložení v editoru je převede na nový formát.
                  </>
                ) : null}
              </p>
            ) : null}
          </Card>
        </div>
      </div>
    </>
  );
}
