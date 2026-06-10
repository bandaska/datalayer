import { Form, redirect, useActionData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from 'react-router';
import { createUserSession, getUserId } from '~/lib/auth.server';
import { verifyCredentials } from '~/lib/users.server';

export const meta: MetaFunction = () => [{ title: 'Přihlášení | admin' }];

export async function loader({ request }: LoaderFunctionArgs) {
  // Už přihlášený → rovnou do adminu.
  if (await getUserId(request)) throw redirect('/admin');
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const email = String(form.get('email') ?? '');
  const password = String(form.get('password') ?? '');

  if (!email || !password) {
    return { error: 'Vyplň e-mail i heslo.' };
  }
  const user = await verifyCredentials(email, password);
  if (!user) {
    return { error: 'Nesprávný e-mail nebo heslo.' };
  }
  return createUserSession(user.id, '/admin');
}

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="admin-auth">
      <div className="admin-card" style={{ maxWidth: 420, margin: '10vh auto' }}>
        <h1 className="h4 mb-4 text-white">
          datalayer<span className="highlight">.cz</span> · admin
        </h1>
        {actionData?.error ? (
          <div className="alert alert-danger py-2">{actionData.error}</div>
        ) : null}
        <Form method="post">
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input name="email" type="email" className="form-control" autoComplete="username" required />
          </div>
          <div className="mb-4">
            <label className="form-label">Heslo</label>
            <input
              name="password"
              type="password"
              className="form-control"
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="btn btn-cta w-100">
            Přihlásit
          </button>
        </Form>
      </div>
    </div>
  );
}
