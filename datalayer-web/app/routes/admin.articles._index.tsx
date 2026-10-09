import { Form, Link, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead } from '~/components/admin/ui';
import { deleteArticle, getAll } from '~/lib/articles.server';
import { requireUser } from '~/lib/auth.server';
import { formatDate } from '~/lib/text';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  return { articles: await getAll() };
}

export async function action({ request }: ActionFunctionArgs) {
  await requireUser(request);
  const form = await request.formData();
  if (form.get('intent') === 'delete') {
    const slug = String(form.get('slug') ?? '');
    if (slug) await deleteArticle(slug);
  }
  return { ok: true };
}

export default function AdminArticles() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <>
      <PageHead
        title="Články"
        desc="Články na blogu, nejnovější nahoře."
        actions={
          <Link to="/admin/articles/new" className="btn btn-primary">
            + Nový článek
          </Link>
        }
      />

      <Card flush>
        {articles.length === 0 ? (
          <div className="adm-empty">Zatím žádné články.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Titulek</th>
                  <th>URL</th>
                  <th>Datum</th>
                  <th>Autor</th>
                  <th className="text-end">Akce</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr key={a.slug}>
                    <td>
                      <Link to={`/admin/articles/${a.slug}/edit`} className="fw-semibold">
                        {a.title}
                      </Link>
                    </td>
                    <td>
                      <code>/blog/{a.slug}</code>
                    </td>
                    <td className="text-nowrap">{formatDate(a.date)}</td>
                    <td>{a.author}</td>
                    <td className="adm-table__actions">
                      <Link to={`/admin/articles/${a.slug}/edit`} className="btn btn-sm btn-outline-secondary">
                        Upravit
                      </Link>
                      <a href={`/blog/${a.slug}`} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary">
                        Zobrazit ↗
                      </a>
                      <Form
                        method="post"
                        className="d-inline"
                        onSubmit={(e) => {
                          if (!confirm(`Smazat článek „${a.title}“? Smazání nejde vzít zpět.`)) e.preventDefault();
                        }}
                      >
                        <input type="hidden" name="intent" value="delete" />
                        <input type="hidden" name="slug" value={a.slug} />
                        <button type="submit" className="btn btn-sm btn-outline-danger">
                          Smazat
                        </button>
                      </Form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </>
  );
}
