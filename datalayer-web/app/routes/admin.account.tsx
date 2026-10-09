import { Form, useActionData, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead, Pill } from '~/components/admin/ui';
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
    return { error: 'Nové heslo musí mít aspoň osm znaků.' };
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
      <PageHead
        title="Můj účet"
        desc={
          <>
            {user.name ? `${user.name}, ` : null}
            {user.email}{' '}
            <Pill tone={user.role === 'admin' ? 'info' : 'muted'}>{user.role === 'admin' ? 'administrátor' : 'editor'}</Pill>
          </>
        }
      />

      <div style={{ maxWidth: 560 }}>
        <Card title="Změna hesla" desc="Kvůli bezpečnosti zadejte i současné heslo.">
          {actionData?.error ? (
            <div className="alert alert-danger py-2" role="alert">
              {actionData.error}
            </div>
          ) : null}
          {actionData?.ok ? (
            <div className="alert alert-success py-2" role="status">
              Heslo jsme změnili. Příště se přihlaste novým heslem.
            </div>
          ) : null}
          <Form method="post">
            <div className="mb-3">
              <label className="form-label" htmlFor="account-current">
                Současné heslo
              </label>
              <input
                id="account-current"
                name="current"
                type="password"
                className="form-control"
                autoComplete="current-password"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="account-next">
                Nové heslo
              </label>
              <input
                id="account-next"
                name="next"
                type="password"
                className="form-control"
                minLength={8}
                autoComplete="new-password"
                required
                aria-describedby="account-next-help"
              />
              <div id="account-next-help" className="form-text">
                Aspoň osm znaků.
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="account-confirm">
                Potvrzení nového hesla
              </label>
              <input
                id="account-confirm"
                name="confirm"
                type="password"
                className="form-control"
                minLength={8}
                autoComplete="new-password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Změnit heslo
            </button>
          </Form>
        </Card>
      </div>
    </>
  );
}
