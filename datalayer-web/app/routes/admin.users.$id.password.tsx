import { Form, Link, redirect, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { requireUser } from '~/lib/auth.server';
import { getUserById, updatePassword } from '~/lib/users.server';

async function requireAdmin(request: Request) {
  const user = await requireUser(request);
  if (user.role !== 'admin') throw redirect('/admin');
  return user;
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireAdmin(request);
  const user = await getUserById(params.id!);
  if (!user) throw new Response('Uživatel nenalezen', { status: 404 });
  return { user };
}

export async function action({ request, params }: ActionFunctionArgs) {
  await requireAdmin(request);
  const form = await request.formData();
  const next = String(form.get('next') ?? '');
  const confirm = String(form.get('confirm') ?? '');

  if (next.length < 8) return { error: 'Heslo musí mít aspoň 8 znaků.' };
  if (next !== confirm) return { error: 'Heslo a potvrzení se neshodují.' };

  await updatePassword(params.id!, next);
  return redirect('/admin/users');
}

export default function ResetUserPassword() {
  const { user } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-white mb-0">Reset hesla</h1>
        <Link to="/admin/users" className="admin-link">
          ← Zpět
        </Link>
      </div>

      <div className="admin-card" style={{ maxWidth: 480 }}>
        <p className="text-muted mb-4">Nastavujete nové heslo pro: <strong className="text-white">{user.email}</strong></p>
        {actionData?.error ? (
          <div className="alert alert-danger py-2">{actionData.error}</div>
        ) : null}
        <Form method="post">
          <div className="mb-3">
            <label className="form-label">Nové heslo</label>
            <input name="next" type="password" className="form-control" minLength={8} required />
          </div>
          <div className="mb-4">
            <label className="form-label">Potvrzení</label>
            <input name="confirm" type="password" className="form-control" minLength={8} required />
          </div>
          <button type="submit" className="btn btn-cta">
            Nastavit heslo
          </button>
        </Form>
      </div>
    </>
  );
}
