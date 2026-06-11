import { Form, Link, useLoaderData } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { deletePage, getAllPages } from '~/lib/pages.server';

export async function loader() {
  return { pages: await getAllPages() };
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  if (form.get('intent') === 'delete') {
    const slug = String(form.get('slug') ?? '');
    if (slug) await deletePage(slug);
  }
  return { ok: true };
}

export default function AdminPages() {
  const { pages } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-white mb-0">Landing pages</h1>
        <Link to="/admin/pages/new" className="btn btn-cta btn-sm">
          + Nová stránka
        </Link>
      </div>

      <div className="admin-card p-0">
        <table className="table table-dark table-hover mb-0 align-middle">
          <thead>
            <tr>
              <th>Titulek</th>
              <th>URL</th>
              <th className="text-end">Akce</th>
            </tr>
          </thead>
          <tbody>
            {pages.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-muted text-center py-4">
                  Zatím žádné landing pages.
                </td>
              </tr>
            ) : (
              pages.map((p) => (
                <tr key={p.slug}>
                  <td>{p.title}</td>
                  <td className="font-monospace small">/{p.slug}</td>
                  <td className="text-end">
                    <Link
                      to={`/admin/pages/${p.slug}/edit`}
                      className="btn btn-sm btn-outline-custom me-2"
                    >
                      Upravit
                    </Link>
                    <Form
                      method="post"
                      className="d-inline"
                      onSubmit={(e) => {
                        if (!confirm(`Smazat stránku „${p.title}"?`)) e.preventDefault();
                      }}
                    >
                      <input type="hidden" name="intent" value="delete" />
                      <input type="hidden" name="slug" value={p.slug} />
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
