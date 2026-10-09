import { Form, redirect, useActionData } from 'react-router';
import type { ActionFunctionArgs, LinksFunction, LoaderFunctionArgs, MetaFunction } from 'react-router';
import adminStylesHref from '~/admin.css?url';
import { createUserSession, getUserId } from '~/lib/auth.server';
import { verifyCredentials } from '~/lib/users.server';

// Přihlášení do administrace. Route leží mimo layout admin.tsx, proto si
// styly administrace (app/admin.css) načítá sama.

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: adminStylesHref }];

export const meta: MetaFunction = () => [{ title: 'Přihlášení | datalayer.cz' }, { name: 'robots', content: 'noindex, nofollow' }];

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
    return { error: 'Vyplňte e-mail i heslo.' };
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
    <div className="adm-auth">
      <div className="adm-auth__card">
        <div className="adm-auth__brand">
          datalayer<span>.cz</span>
        </div>
        <h1 className="fs-6 fw-semibold text-muted mb-4">Přihlášení do administrace</h1>
        {actionData?.error ? (
          <div className="alert alert-danger py-2" role="alert">
            {actionData.error}
          </div>
        ) : null}
        <Form method="post">
          <div className="mb-3">
            <label className="form-label" htmlFor="login-email">
              E-mail
            </label>
            <input id="login-email" name="email" type="email" className="form-control" autoComplete="username" required />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="login-password">
              Heslo
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              className="form-control"
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Přihlásit se
          </button>
        </Form>
      </div>
    </div>
  );
}
