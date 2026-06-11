import { Form, Link, redirect, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { deletePage, getPageBySlug, updatePage } from '~/lib/pages.server';
import { PageFormFields } from '~/components/PageFormFields';

export async function loader({ params }: LoaderFunctionArgs) {
  const page = await getPageBySlug(params.slug!);
  if (!page) throw new Response('Stránka nenalezena', { status: 404 });
  return { page };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const slug = params.slug!;
  const form = await request.formData();

  if (form.get('intent') === 'delete') {
    await deletePage(slug);
    return redirect('/admin/pages');
  }

  const title = String(form.get('title') ?? '').trim();
  const perex = String(form.get('perex') ?? '').trim();
  const content = String(form.get('content') ?? '');

  if (!title) return { error: 'Vyplň titulek.' };

  await updatePage(slug, { title, perex, content });
  return redirect('/admin/pages');
}

export default function EditPage() {
  const { page } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-white mb-0">Upravit landing page</h1>
        <Link to="/admin/pages" className="admin-link">
          ← Zpět
        </Link>
      </div>

      <div className="admin-card">
        {actionData?.error ? (
          <div className="alert alert-danger py-2">{actionData.error}</div>
        ) : null}
        <Form method="post">
          <PageFormFields
            slugLocked
            defaults={{
              slug: page.slug,
              title: page.title,
              perex: page.perex,
              content: page.content,
            }}
          />
          <div className="mt-4 d-flex gap-2">
            <button type="submit" className="btn btn-cta">
              Uložit změny
            </button>
            <Link to={`/${page.slug}`} className="btn btn-outline-custom" target="_blank">
              Náhled ↗
            </Link>
          </div>
        </Form>

        <hr className="my-4 border-secondary" />
        <Form
          method="post"
          onSubmit={(e) => {
            if (!confirm(`Smazat stránku „${page.title}"?`)) e.preventDefault();
          }}
        >
          <input type="hidden" name="intent" value="delete" />
          <button type="submit" className="btn btn-outline-danger btn-sm">
            Smazat stránku
          </button>
        </Form>
      </div>
    </>
  );
}
