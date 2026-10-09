import { Form, Link, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import type { PageKind } from '~/content/schema';
import { Card, PageHead, Pill, formatDateTime } from '~/components/admin/ui';
import { requireUser } from '~/lib/auth.server';
import { isCmsInitialized } from '~/lib/cms/meta.server';
import { PageError, deletePage, listPages } from '~/lib/cms/pages.server';

// Stránky webu: homepage, služby, řešení, ostatní stránky a zásady.

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  const [pages, initialized] = await Promise.all([listPages(), isCmsInitialized()]);
  return {
    initialized,
    pages: pages.map((p) => ({
      id: p.id,
      path: p.page.path,
      kind: p.page.kind,
      navTitle: p.page.navTitle,
      h1: p.page.hero.h1,
      published: p.page.published,
      noindex: p.page.noindex,
      source: p.source,
      updatedAt: p.updatedAt ?? null,
      updatedBy: p.updatedBy ?? null,
    })),
  };
}

export async function action({ request }: ActionFunctionArgs) {
  await requireUser(request);
  const form = await request.formData();
  if (form.get('intent') === 'delete') {
    try {
      await deletePage(String(form.get('path') ?? ''));
      return { ok: true as const };
    } catch (err) {
      if (err instanceof PageError) return { ok: false as const, message: err.message };
      throw err;
    }
  }
  return null;
}

const GROUPS: { kind: PageKind; title: string }[] = [
  { kind: 'home', title: 'Homepage' },
  { kind: 'service', title: 'Služby' },
  { kind: 'solution', title: 'Řešení' },
  { kind: 'page', title: 'Ostatní stránky' },
  { kind: 'legal', title: 'Zásady a právní texty' },
];

export default function AdminPages() {
  const { pages, initialized } = useLoaderData<typeof loader>();
  const result = useActionData<typeof action>();

  return (
    <>
      <PageHead
        title="Stránky"
        desc="Veškerý obsah stránek webu včetně homepage. Menu a patičku upravíte v sekci Menu a patička."
        actions={
          <Link to="/admin/pages/new" className="btn btn-primary">
            + Nová stránka
          </Link>
        }
      />
      {!initialized ? (
        <div className="alert alert-warning">
          Stránky se štítkem „z kódu“ web zatím bere z výchozích dat v kódu. Upravovat je můžete už teď – první uložení v editoru je přenese
          do administrace. Aby šly stránky i mazat, nasaďte v sekci <Link to="/admin/migrations">Migrace</Link> čekající migraci „Přesun obsahu
          webu do administrace“.
        </div>
      ) : null}
      {result && !result.ok ? <div className="alert alert-danger">{result.message}</div> : null}
      {result && result.ok ? <div className="alert alert-success">Stránku jsme smazali.</div> : null}

      {GROUPS.map((g) => {
        const items = pages.filter((p) => p.kind === g.kind);
        if (!items.length) return null;
        return (
          <Card key={g.kind} title={`${g.title} (${items.length})`} flush>
            <div className="adm-table-wrap">
              <table className="adm-table adm-table--pages">
                <thead>
                  <tr>
                    <th>Název</th>
                    <th>Adresa</th>
                    <th>Stav</th>
                    <th>Upraveno</th>
                    <th className="adm-table__actions">Akce</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <Link to={`/admin/pages/${p.id}`} className="fw-semibold">
                          {p.navTitle}
                        </Link>
                        <div className="small text-muted">{p.h1}</div>
                      </td>
                      <td>
                        <code>/{p.path}</code>
                      </td>
                      <td>
                        {p.published ? <Pill tone="ok">zveřejněná</Pill> : <Pill tone="warn">koncept</Pill>}{' '}
                        {p.noindex ? <Pill tone="muted">noindex</Pill> : null}{' '}
                        {p.source === 'default' ? <Pill tone="info">z kódu</Pill> : null}
                        {p.source === 'legacy' ? <Pill tone="info">starší</Pill> : null}
                      </td>
                      <td className="small">
                        {p.updatedAt ? (
                          <>
                            {formatDateTime(p.updatedAt)}
                            <div className="text-muted">{p.updatedBy}</div>
                          </>
                        ) : (
                          <span className="text-muted">–</span>
                        )}
                      </td>
                      <td className="adm-table__actions">
                        <Link to={`/admin/pages/${p.id}`} className="btn btn-sm btn-outline-primary">
                          Upravit
                        </Link>
                        <a href={`/${p.path}`} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary">
                          Zobrazit ↗
                        </a>
                        {p.kind !== 'home' && p.source !== 'default' ? (
                          <Form
                            method="post"
                            className="d-inline"
                            onSubmit={(e) => {
                              if (!window.confirm(`Smazat stránku /${p.path}? Akce je nevratná.`)) e.preventDefault();
                            }}
                          >
                            <input type="hidden" name="intent" value="delete" />
                            <input type="hidden" name="path" value={p.path} />
                            <button type="submit" className="btn btn-sm btn-outline-danger">
                              Smazat
                            </button>
                          </Form>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        );
      })}
    </>
  );
}
