import { Form, Link, redirect, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { deleteArticle, getBySlug, updateArticle } from '~/lib/articles.server';
import { requireUser } from '~/lib/auth.server';
import { ArticleFormFields } from '~/components/ArticleFormFields';
import { Card, PageHead } from '~/components/admin/ui';

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUser(request);
  const article = await getBySlug(params.slug!);
  if (!article) throw new Response('Článek nenalezen', { status: 404 });
  return { article };
}

export async function action({ request, params }: ActionFunctionArgs) {
  await requireUser(request);
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
  const description = String(form.get('description') ?? '').trim().slice(0, 200);

  if (!title || !author || !date) {
    return { error: 'Vyplňte všechna povinná pole.' };
  }

  const modifiedDate = String(form.get('modifiedDate') ?? '').trim();
  const noindex = form.get('noindex') === 'on';
  await updateArticle(slug, { title, author, date, description, content, modifiedDate, noindex });
  return redirect('/admin/articles');
}

export default function EditArticle() {
  const { article } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <PageHead
        crumb={{ to: '/admin/articles', label: 'Články' }}
        title="Úprava článku"
        desc={article.title}
        actions={
          <a href={`/blog/${article.slug}`} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">
            Zobrazit na webu ↗
          </a>
        }
      />

      <Card>
        {actionData?.error ? (
          <div className="alert alert-danger py-2" role="alert">
            {actionData.error}
          </div>
        ) : null}
        <Form method="post">
          <ArticleFormFields
            slugLocked
            defaults={{
              slug: article.slug,
              title: article.title,
              author: article.author,
              date: article.date.slice(0, 10),
              modifiedDate: article.modifiedDate?.slice(0, 10),
              noindex: article.noindex,
              description: article.description,
              content: article.content,
            }}
          />
          <div className="mt-4 d-flex gap-2 flex-wrap">
            <button type="submit" className="btn btn-primary">
              Uložit změny
            </button>
            <Link to="/admin/articles" className="btn btn-outline-secondary">
              Zrušit
            </Link>
          </div>
        </Form>
      </Card>

      <Card title="Smazání článku" desc="Článek zmizí z blogu i z administrace. Smazání nejde vzít zpět.">
        <Form
          method="post"
          onSubmit={(e) => {
            if (!confirm(`Smazat článek „${article.title}“? Smazání nejde vzít zpět.`)) e.preventDefault();
          }}
        >
          <input type="hidden" name="intent" value="delete" />
          <button type="submit" className="btn btn-outline-danger">
            Smazat článek
          </button>
        </Form>
      </Card>
    </>
  );
}
