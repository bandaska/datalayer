import { Form, redirect, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
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
      return { error: 'Nemůžeš smazat sám sebe.' };
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
    return { error: 'Heslo musí mít aspoň 8 znaků.' };
  }
  try {
    await createUser({ email, name, password, role });
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Nepodařilo se vytvořit uživatele.' };
  }
  return { ok: true };
}

export default function AdminUsers() {
  const { users, currentId } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <h1 className="h3 text-white mb-4">Uživatelé</h1>

      {actionData?.error ? (
        <div className="alert alert-danger py-2">{actionData.error}</div>
      ) : null}

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="admin-card p-0">
            <table className="table table-dark table-hover mb-0 align-middle">
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
                    <td>{u.name}</td>
                    <td>
                      <span className="badge text-bg-secondary">{u.role}</span>
                    </td>
                    <td className="text-end">
                      {u.id === currentId ? (
                        <span className="text-muted small">to jste vy</span>
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
        </div>

        <div className="col-lg-5">
          <div className="admin-card">
            <h2 className="h5 text-white mb-3">Nový uživatel</h2>
            <Form method="post">
              <input type="hidden" name="intent" value="create" />
              <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input name="email" type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Jméno</label>
                <input name="name" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Heslo</label>
                <input name="password" type="password" className="form-control" minLength={8} required />
              </div>
              <div className="mb-4">
                <label className="form-label">Role</label>
                <select name="role" className="form-select" defaultValue="editor">
                  <option value="editor">editor (jen články)</option>
                  <option value="admin">admin (vše)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-cta w-100">
                Vytvořit uživatele
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
