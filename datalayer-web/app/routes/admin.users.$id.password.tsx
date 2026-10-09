import { Form, Link, redirect, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead } from '~/components/admin/ui';
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

  if (next.length < 8) return { error: 'Heslo musí mít aspoň osm znaků.' };
  if (next !== confirm) return { error: 'Heslo a potvrzení se neshodují.' };

  await updatePassword(params.id!, next);
  return redirect('/admin/users');
}

export default function ResetUserPassword() {
  const { user } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <PageHead
        crumb={{ to: '/admin/users', label: 'Uživatelé' }}
        title="Nové heslo"
        desc={
          <>
            Nastavujete nové heslo uživateli <strong>{user.email}</strong>.
          </>
        }
      />

      <div style={{ maxWidth: 560 }}>
        <Card>
          {actionData?.error ? (
            <div className="alert alert-danger py-2" role="alert">
              {actionData.error}
            </div>
          ) : null}
          <Form method="post">
            <div className="mb-3">
              <label className="form-label" htmlFor="pw-next">
                Nové heslo
              </label>
              <input
                id="pw-next"
                name="next"
                type="password"
                className="form-control"
                minLength={8}
                autoComplete="new-password"
                required
                aria-describedby="pw-next-help"
              />
              <div id="pw-next-help" className="form-text">
                Aspoň osm znaků.
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="pw-confirm">
                Potvrzení nového hesla
              </label>
              <input
                id="pw-confirm"
                name="confirm"
                type="password"
                className="form-control"
                minLength={8}
                autoComplete="new-password"
                required
              />
            </div>
            <div className="d-flex gap-2 flex-wrap">
              <button type="submit" className="btn btn-primary">
                Nastavit heslo
              </button>
              <Link to="/admin/users" className="btn btn-outline-secondary">
                Zrušit
              </Link>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
