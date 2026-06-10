import { Form, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { requireUser } from '~/lib/auth.server';
import { updatePassword, verifyPassword } from '~/lib/users.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  return { user };
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireUser(request);
  const form = await request.formData();
  const current = String(form.get('current') ?? '');
  const next = String(form.get('next') ?? '');
  const confirm = String(form.get('confirm') ?? '');

  if (!(await verifyPassword(user.id, current))) {
    return { error: 'Současné heslo není správné.' };
  }
  if (next.length < 8) {
    return { error: 'Nové heslo musí mít aspoň 8 znaků.' };
  }
  if (next !== confirm) {
    return { error: 'Nové heslo a potvrzení se neshodují.' };
  }

  await updatePassword(user.id, next);
  return { ok: true };
}

export default function Account() {
  const { user } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <h1 className="h3 text-white mb-4">Můj účet</h1>

      <div className="admin-card" style={{ maxWidth: 480 }}>
        <p className="text-muted mb-4">
          {user.email} <span className="badge text-bg-secondary">{user.role}</span>
        </p>

        <h2 className="h5 text-white mb-3">Změna hesla</h2>
        {actionData?.error ? (
          <div className="alert alert-danger py-2">{actionData.error}</div>
        ) : null}
        {actionData?.ok ? (
          <div className="alert alert-success py-2">Heslo bylo změněno.</div>
        ) : null}
        <Form method="post">
          <div className="mb-3">
            <label className="form-label">Současné heslo</label>
            <input name="current" type="password" className="form-control" autoComplete="current-password" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Nové heslo</label>
            <input name="next" type="password" className="form-control" minLength={8} autoComplete="new-password" required />
          </div>
          <div className="mb-4">
            <label className="form-label">Potvrzení nového hesla</label>
            <input name="confirm" type="password" className="form-control" minLength={8} autoComplete="new-password" required />
          </div>
          <button type="submit" className="btn btn-cta">
            Změnit heslo
          </button>
        </Form>
      </div>
    </>
  );
}
