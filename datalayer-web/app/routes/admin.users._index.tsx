import { Form, Link, redirect, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead, Pill } from '~/components/admin/ui';
import { requireUser } from '~/lib/auth.server';
import { createUser, deleteUser, listUsers, type Role } from '~/lib/users.server';

// Správu uživatelů smí jen role 'admin'.
async function requireAdmin(request: Request) {
  const user = await requireUser(request);
  if (user.role !== 'admin') throw redirect('/admin');
  return user;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const current = await requireAdmin(request);
  return { users: await listUsers(), currentId: current.id };
}

export async function action({ request }: ActionFunctionArgs) {
  const current = await requireAdmin(request);
  const form = await request.formData();
  const intent = form.get('intent');

  if (intent === 'delete') {
    const id = String(form.get('id') ?? '');
    if (id === current.id) {
      return { error: 'Sami sebe smazat nemůžete.' };
    }
    if (id) await deleteUser(id);
    return { ok: true };
  }

  // create
  const email = String(form.get('email') ?? '').trim();
  const name = String(form.get('name') ?? '').trim();
  const password = String(form.get('password') ?? '');
  const role = (String(form.get('role') ?? 'editor') as Role) === 'admin' ? 'admin' : 'editor';

  if (!email || !password) {
    return { error: 'E-mail a heslo jsou povinné.' };
  }
  if (password.length < 8) {
    return { error: 'Heslo musí mít aspoň osm znaků.' };
  }
  try {
    await createUser({ email, name, password, role });
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Nepodařilo se vytvořit uživatele.' };
  }
  return { ok: true };
}

/** Název role v administraci (stejně jako v postranním menu). */
const ROLE_LABEL: Record<Role, string> = { admin: 'administrátor', editor: 'editor' };

export default function AdminUsers() {
  const { users, currentId } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <PageHead
        title="Uživatelé"
        desc="Kdo se smí přihlásit do administrace. Editor spravuje obsah webu a zprávy, administrátor navíc nastavení, migrace a uživatele."
      />

      {actionData?.error ? (
        <div className="alert alert-danger py-2" role="alert">
          {actionData.error}
        </div>
      ) : null}

      <div className="row g-4">
        <div className="col-lg-7">
          <Card flush>
            {users.length === 0 ? (
              <div className="adm-empty">Zatím žádní uživatelé.</div>
            ) : (
              <div className="adm-table-wrap">
                <table className="adm-table">
                  <thead>
                    <tr>
                      <th>E-mail</th>
                      <th>Jméno</th>
                      <th>Role</th>
                      <th className="text-end">Akce</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id}>
                        <td>{u.email}</td>
                        <td>{u.name || '–'}</td>
                        <td>
                          <Pill tone={u.role === 'admin' ? 'info' : 'muted'}>{ROLE_LABEL[u.role] ?? u.role}</Pill>
                        </td>
                        <td className="adm-table__actions">
                          <Link to={`/admin/users/${u.id}/password`} className="btn btn-sm btn-outline-secondary">
                            Změnit heslo
                          </Link>
                          {u.id === currentId ? (
                            <span className="small text-muted">to jste vy</span>
                          ) : (
                            <Form
                              method="post"
                              className="d-inline"
                              onSubmit={(e) => {
                                if (!confirm(`Smazat uživatele ${u.email}?`)) e.preventDefault();
                              }}
                            >
                              <input type="hidden" name="intent" value="delete" />
                              <input type="hidden" name="id" value={u.id} />
                              <button type="submit" className="btn btn-sm btn-outline-danger">
                                Smazat
                              </button>
                            </Form>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>

        <div className="col-lg-5">
          <Card title="Nový uživatel">
            <Form method="post">
              <input type="hidden" name="intent" value="create" />
              <div className="mb-3">
                <label className="form-label" htmlFor="new-user-email">
                  E-mail
                </label>
                <input id="new-user-email" name="email" type="email" className="form-control" autoComplete="off" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="new-user-name">
                  Jméno
                </label>
                <input id="new-user-name" name="name" type="text" className="form-control" autoComplete="off" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="new-user-password">
                  Heslo
                </label>
                <input
                  id="new-user-password"
                  name="password"
                  type="password"
                  className="form-control"
                  minLength={8}
                  autoComplete="new-password"
                  required
                  aria-describedby="new-user-password-help"
                />
                <div id="new-user-password-help" className="form-text">
                  Aspoň osm znaků.
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="new-user-role">
                  Role
                </label>
                <select id="new-user-role" name="role" className="form-select" defaultValue="editor">
                  <option value="editor">editor – obsah webu a zprávy</option>
                  <option value="admin">administrátor – navíc nastavení, migrace a uživatelé</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Vytvořit uživatele
              </button>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}
