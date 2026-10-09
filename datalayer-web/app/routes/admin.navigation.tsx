import { useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { NavigationEditor } from '~/components/admin/NavigationEditor';
import { requireUser } from '~/lib/auth.server';
import { PageError, listPages } from '~/lib/cms/pages.server';
import { navigationStore } from '~/lib/cms/singletons.server';

// Menu a patička (dokument content/navigation).

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  const [navigation, pages] = await Promise.all([navigationStore.get({ fresh: true }), listPages()]);
  const { updatedAt, updatedBy, ...nav } = navigation;
  return {
    navigation: nav,
    meta: { updatedAt, updatedBy },
    pages: pages
      .filter((p) => p.page.kind !== 'home')
      .map((p) => ({ path: p.page.path, label: p.page.navTitle, tagline: p.page.tagline, pictogram: p.page.pictogram })),
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireUser(request);
  const form = await request.formData();
  try {
    await navigationStore.save(JSON.parse(String(form.get('data') ?? '{}')), user.email);
    return { ok: true as const };
  } catch (err) {
    if (err instanceof PageError) return { ok: false as const, message: err.message, issues: err.issues };
    if (err instanceof SyntaxError) return { ok: false as const, message: 'Neplatná data editoru, obnovte stránku.' };
    throw err;
  }
}

export default function AdminNavigation() {
  const data = useLoaderData<typeof loader>();
  return <NavigationEditor initial={data.navigation} pages={data.pages} meta={data.meta} />;
}
