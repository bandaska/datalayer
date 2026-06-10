import { Form, Link, useLoaderData } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { deleteArticle, getAll } from '~/lib/articles.server';
import { formatDate } from '~/lib/text';

export async function loader() {
  return { articles: await getAll() };
}

export async function action({ request }: ActionFunctionArgs) {
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-white mb-0">Články</h1>
        <Link to="/admin/articles/new" className="btn btn-cta btn-sm">
          + Nový článek
        </Link>
      </div>

      <div className="admin-card p-0">
        <table className="table table-dark table-hover mb-0 align-middle">
          <thead>
            <tr>
              <th>Titulek</th>
              <th>Slug</th>
              <th>Autor</th>
              <th>Datum</th>
              <th className="text-end">Akce</th>
            </tr>
          </thead>
          <tbody>
            {articles.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-muted text-center py-4">
                  Zatím žádné články.
                </td>
              </tr>
            ) : (
              articles.map((a) => (
                <tr key={a.slug}>
                  <td>{a.title}</td>
                  <td className="font-monospace small">{a.slug}</td>
                  <td>{a.author}</td>
                  <td className="small">{formatDate(a.date)}</td>
                  <td className="text-end">
                    <Link
                      to={`/admin/articles/${a.slug}/edit`}
                      className="btn btn-sm btn-outline-custom me-2"
                    >
                      Upravit
                    </Link>
                    <Form
                      method="post"
                      className="d-inline"
                      onSubmit={(e) => {
                        if (!confirm(`Smazat článek „${a.title}"?`)) e.preventDefault();
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
