import { Form, Link, redirect, useActionData } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { createPage, pageSlugExists } from '~/lib/pages.server';
import { PageFormFields } from '~/components/PageFormFields';

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const slug = String(form.get('slug') ?? '').trim();
  const title = String(form.get('title') ?? '').trim();
  const perex = String(form.get('perex') ?? '').trim();
  const content = String(form.get('content') ?? '');

  if (!slug || !title) {
    return { error: 'Vyplň titulek a slug.' };
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { error: 'Slug smí obsahovat jen malá písmena, číslice a pomlčky.' };
  }
  if (await pageSlugExists(slug)) {
    return { error: `Stránka se slugem „${slug}" už existuje.` };
  }

  await createPage({ slug, title, perex, content });
  return redirect('/admin/pages');
}

export default function NewPage() {
  const actionData = useActionData<typeof action>();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-white mb-0">Nová landing page</h1>
        <Link to="/admin/pages" className="admin-link">
          ← Zpět
        </Link>
      </div>

      <div className="admin-card">
        {actionData?.error ? (
          <div className="alert alert-danger py-2">{actionData.error}</div>
        ) : null}
        <Form method="post">
          <PageFormFields />
          <div className="mt-4">
            <button type="submit" className="btn btn-cta">
              Vytvořit stránku
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
