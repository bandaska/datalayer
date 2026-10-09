import { redirect, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { PageEditor } from '~/components/admin/PageEditor';
import { requireUser } from '~/lib/auth.server';
import { PageError, deletePage, getPageById, listPages, savePage } from '~/lib/cms/pages.server';
import { getNavigation } from '~/lib/cms/singletons.server';

// Editor jedné stránky (ID dokumentu = cesta s „__“ místo „/“, homepage = home).

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUser(request);
  const loaded = await getPageById(params.id!);
  if (!loaded) throw new Response('Stránka neexistuje', { status: 404 });
  const [pages, navigation] = await Promise.all([listPages(), getNavigation()]);
  return {
    page: loaded.page,
    meta: { source: loaded.source, updatedAt: loaded.updatedAt, updatedBy: loaded.updatedBy },
    pages: pages.map((p) => ({ path: p.page.path, label: p.page.navTitle, kind: p.page.kind, published: p.page.published })),
    menus: navigation.items.flatMap((i) => (i.type === 'menu' ? [{ id: i.id, label: i.label }] : [])),
  };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const user = await requireUser(request);
  const form = await request.formData();
  const intent = form.get('intent');
  const current = await getPageById(params.id!);
  if (!current) throw new Response('Stránka neexistuje', { status: 404 });

  if (intent === 'delete') {
    await deletePage(current.page.path);
    return redirect('/admin/pages');
  }

  try {
    const data = JSON.parse(String(form.get('data') ?? '{}')) as Record<string, unknown>;
    // Adresa je ID dokumentu – v editoru ji nejde změnit.
    await savePage({ ...data, path: current.page.path }, user.email);
    return { ok: true as const, savedAt: new Date().toISOString() };
  } catch (err) {
    if (err instanceof PageError) return { ok: false as const, message: err.message, issues: err.issues };
    if (err instanceof SyntaxError) return { ok: false as const, message: 'Neplatná data editoru, obnovte stránku.' };
    throw err;
  }
}

export default function AdminPageEdit() {
  const data = useLoaderData<typeof loader>();
  return <PageEditor key={data.page.path} initial={data.page} meta={data.meta} pages={data.pages} options={{ menus: data.menus }} />;
}
