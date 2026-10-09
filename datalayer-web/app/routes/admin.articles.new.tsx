import { Form, Link, redirect, useActionData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { createArticle, slugExists } from '~/lib/articles.server';
import { requireUser } from '~/lib/auth.server';
import { ArticleFormFields } from '~/components/ArticleFormFields';
import { Card, PageHead } from '~/components/admin/ui';
import { SITE_NAME } from '~/lib/site';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  await requireUser(request);
  const form = await request.formData();
  const slug = String(form.get('slug') ?? '').trim();
  const title = String(form.get('title') ?? '').trim();
  const author = String(form.get('author') ?? '').trim();
  const date = String(form.get('date') ?? '').trim();
  const content = String(form.get('content') ?? '');
  const description = String(form.get('description') ?? '').trim().slice(0, 200);

  if (!slug || !title || !author || !date) {
    return { error: 'Vyplňte všechna povinná pole.' };
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { error: 'URL smí obsahovat jen malá písmena bez diakritiky, číslice a spojovníky.' };
  }
  if (await slugExists(slug)) {
    return { error: `Článek s URL /blog/${slug} už existuje.` };
  }

  const modifiedDate = String(form.get('modifiedDate') ?? '').trim();
  const noindex = form.get('noindex') === 'on';
  await createArticle({ slug, title, author, date, description, content, modifiedDate, noindex });
  return redirect('/admin/articles');
}

export default function NewArticle() {
  const actionData = useActionData<typeof action>();

  return (
    <>
      <PageHead
        crumb={{ to: '/admin/articles', label: 'Články' }}
        title="Nový článek"
        desc="Po vytvoření se článek hned objeví na blogu."
      />

      <Card>
        {actionData?.error ? (
          <div className="alert alert-danger py-2" role="alert">
            {actionData.error}
          </div>
        ) : null}
        <Form method="post">
          <ArticleFormFields defaults={{ author: SITE_NAME }} />
          <div className="mt-4 d-flex gap-2 flex-wrap">
            <button type="submit" className="btn btn-primary">
              Vytvořit článek
            </button>
            <Link to="/admin/articles" className="btn btn-outline-secondary">
              Zrušit
            </Link>
          </div>
        </Form>
      </Card>
    </>
  );
}
