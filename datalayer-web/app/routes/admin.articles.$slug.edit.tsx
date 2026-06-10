import { Form, Link, redirect, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { deleteArticle, getBySlug, updateArticle } from '~/lib/articles.server';
import { ArticleFormFields } from '~/components/ArticleFormFields';

export async function loader({ params }: LoaderFunctionArgs) {
  const article = await getBySlug(params.slug!);
  if (!article) throw new Response('Článek nenalezen', { status: 404 });
  return { article };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const slug = params.slug!;
  const form = await request.formData();

  if (form.get('intent') === 'delete') {
    await deleteArticle(slug);
    return redirect('/admin/articles');
  }

  const title = String(form.get('title') ?? '').trim();
  const author = String(form.get('author') ?? '').trim();
  const date = String(form.get('date') ?? '').trim();
  const content = String(form.get('content') ?? '');

  if (!title || !author || !date) {
    return { error: 'Vyplň všechna povinná pole.' };
  }

  await updateArticle(slug, { title, author, date, content });
  return redirect('/admin/articles');
}

export default function EditArticle() {
  const { article } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-white mb-0">Upravit článek</h1>
        <Link to="/admin/articles" className="admin-link">
          ← Zpět
        </Link>
      </div>

      <div className="admin-card">
        {actionData?.error ? (
          <div className="alert alert-danger py-2">{actionData.error}</div>
        ) : null}
        <Form method="post">
          <ArticleFormFields
            slugLocked
            defaults={{
              slug: article.slug,
              title: article.title,
              author: article.author,
              date: article.date.slice(0, 10),
              content: article.content,
            }}
          />
          <div className="mt-4 d-flex gap-2">
            <button type="submit" className="btn btn-cta">
              Uložit změny
            </button>
            <Link to={`/blog/${article.slug}`} className="btn btn-outline-custom" target="_blank">
              Náhled ↗
            </Link>
          </div>
        </Form>

        <hr className="my-4 border-secondary" />
        <Form
          method="post"
          onSubmit={(e) => {
            if (!confirm(`Smazat článek „${article.title}"?`)) e.preventDefault();
          }}
        >
          <input type="hidden" name="intent" value="delete" />
          <button type="submit" className="btn btn-outline-danger btn-sm">
            Smazat článek
          </button>
        </Form>
      </div>
    </>
  );
}
