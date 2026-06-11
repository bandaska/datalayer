import { Form, Link, redirect, useActionData } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { createArticle, slugExists } from '~/lib/articles.server';
import { ArticleFormFields } from '~/components/ArticleFormFields';

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const slug = String(form.get('slug') ?? '').trim();
  const title = String(form.get('title') ?? '').trim();
  const author = String(form.get('author') ?? '').trim();
  const date = String(form.get('date') ?? '').trim();
  const content = String(form.get('content') ?? '');

  if (!slug || !title || !author || !date) {
    return { error: 'Vyplň všechna povinná pole.' };
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { error: 'Slug smí obsahovat jen malá písmena, číslice a pomlčky.' };
  }
  if (await slugExists(slug)) {
    return { error: `Článek se slugem „${slug}" už existuje.` };
  }

  await createArticle({ slug, title, author, date, content });
  return redirect('/admin/articles');
}

export default function NewArticle() {
  const actionData = useActionData<typeof action>();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-white mb-0">Nový článek</h1>
        <Link to="/admin/articles" className="admin-link">
          ← Zpět
        </Link>
      </div>

      <div className="admin-card">
        {actionData?.error ? (
          <div className="alert alert-danger py-2">{actionData.error}</div>
        ) : null}
        <Form method="post">
          <ArticleFormFields />
          <div className="mt-4">
            <button type="submit" className="btn btn-cta">
              Vytvořit článek
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
