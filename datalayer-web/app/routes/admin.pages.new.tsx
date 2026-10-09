import { Form, redirect, useActionData, useNavigation } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead } from '~/components/admin/ui';
import { pathSchema, type PageKind } from '~/content/schema';
import { requireUser } from '~/lib/auth.server';
import { isReservedPath, pageIdFromPath } from '~/lib/cms/ids';
import { PageError, createPage } from '~/lib/cms/pages.server';

// Nová stránka: typ, adresa a název. Vznikne jako koncept a otevře se editor.

const PREFIX: Record<Exclude<PageKind, 'home'>, string> = { service: 'sluzby/', solution: 'reseni/', page: '', legal: '' };

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireUser(request);
  const form = await request.formData();
  const kind = String(form.get('kind') ?? 'page') as Exclude<PageKind, 'home'>;
  const slug = String(form.get('slug') ?? '').trim().toLowerCase();
  const navTitle = String(form.get('navTitle') ?? '').trim();
  const path = `${PREFIX[kind] ?? ''}${slug}`;
  if (!navTitle) return { error: 'Vyplňte název stránky.' };
  if (!slug || !pathSchema.safeParse(path).success) return { error: 'Adresa: jen malá písmena bez diakritiky, číslice, pomlčky (a lomítka).' };
  if (isReservedPath(path)) return { error: `Adresa /${path} patří aplikaci, zvolte jinou.` };
  try {
    await createPage({ path, kind, navTitle }, user.email);
  } catch (err) {
    if (err instanceof PageError) return { error: err.message };
    throw err;
  }
  return redirect(`/admin/pages/${pageIdFromPath(path)}`);
}

export default function AdminPageNew() {
  const result = useActionData<typeof action>();
  const busy = useNavigation().state !== 'idle';
  return (
    <>
      <PageHead title="Nová stránka" crumb={{ to: '/admin/pages', label: 'Stránky' }} desc="Stránka vznikne jako koncept. Obsah doplníte v editoru a pak ji zveřejníte." />
      {result?.error ? <div className="alert alert-danger">{result.error}</div> : null}
      <Card>
        <Form method="post" style={{ maxWidth: 640 }}>
          <div className="mb-3">
            <label className="form-label" htmlFor="kind">
              Typ stránky
            </label>
            <select id="kind" name="kind" className="form-select" defaultValue="service">
              <option value="service">Služba – adresa /sluzby/…</option>
              <option value="solution">Řešení – adresa /reseni/…</option>
              <option value="page">Stránka – adresa /…</option>
              <option value="legal">Zásady / právní text – adresa /…</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="navTitle">
              Název stránky
            </label>
            <input id="navTitle" name="navTitle" className="form-control" required placeholder="Např. Meta Conversions API" />
            <div className="form-text">Použije se v menu, drobečkové navigaci a jako výchozí nadpis H1.</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="slug">
              Adresa (konec URL)
            </label>
            <input id="slug" name="slug" className="form-control adm-mono" required pattern="[a-z0-9]+(-[a-z0-9]+)*(/[a-z0-9]+(-[a-z0-9]+)*)*" placeholder="meta-conversions-api" />
            <div className="form-text">Malá písmena bez diakritiky, číslice a pomlčky. Po vytvoření ji nejde změnit.</div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={busy}>
            {busy ? 'Zakládám…' : 'Založit a otevřít editor'}
          </button>
        </Form>
      </Card>
    </>
  );
}
