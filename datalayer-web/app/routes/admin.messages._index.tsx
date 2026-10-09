import { Link, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { requireUser } from '~/lib/auth.server';
import { topicLabel } from '~/lib/contact';
import { listMessages } from '~/lib/messages.server';

// Zprávy z kontaktního formuláře (role admin i editor).

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  return { messages: await listMessages() };
}

export default function AdminMessages() {
  const { messages } = useLoaderData<typeof loader>();
  return (
    <>
      <h1 className="h3 text-white mb-4">Zprávy z formuláře ({messages.length})</h1>
      <div className="admin-card p-0">
        <table className="table table-dark table-hover mb-0 align-middle">
          <thead>
            <tr>
              <th>Přijato</th>
              <th>Od</th>
              <th>Témata</th>
              <th>Formulář</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-muted text-center py-4">
                  Zatím žádné zprávy.
                </td>
              </tr>
            ) : (
              messages.map((m) => (
                <tr key={m.id} className={m.read ? undefined : 'fw-bold'}>
                  <td className="small text-nowrap">{new Date(m.createdAt).toLocaleString('cs-CZ')}</td>
                  <td>
                    <Link to={`/admin/messages/${m.id}`} className="btn-link-cyan">
                      {m.jmeno || m.email}
                    </Link>
                    {m.read ? null : <span className="badge bg-info text-dark ms-2">nová</span>}
                  </td>
                  <td className="small">{m.temata.map(topicLabel).join(', ') || '–'}</td>
                  <td className="small font-monospace">{m.formId}</td>
                  <td className="small">{m.mailSent ? 'odeslán' : <span className="text-warning">neodeslán</span>}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
