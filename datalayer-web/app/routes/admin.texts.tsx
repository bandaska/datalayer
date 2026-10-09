import { useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { TextsEditor } from '~/components/admin/TextsEditor';
import { requireUser } from '~/lib/auth.server';
import { PageError } from '~/lib/cms/pages.server';
import { textsStore } from '~/lib/cms/singletons.server';

// Texty webu (dokument content/texts).

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  const { updatedAt, updatedBy, ...texts } = await textsStore.get({ fresh: true });
  return { texts, meta: { updatedAt, updatedBy } };
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireUser(request);
  const form = await request.formData();
  try {
    await textsStore.save(JSON.parse(String(form.get('data') ?? '{}')), user.email);
    return { ok: true as const };
  } catch (err) {
    if (err instanceof PageError) return { ok: false as const, message: err.message, issues: err.issues };
    if (err instanceof SyntaxError) return { ok: false as const, message: 'Neplatná data editoru, obnovte stránku.' };
    throw err;
  }
}

export default function AdminTexts() {
  const data = useLoaderData<typeof loader>();
  return <TextsEditor initial={data.texts} meta={data.meta} />;
}
