import { Link, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { Card, PageHead, Pill, formatDateTime } from '~/components/admin/ui';
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
      <PageHead
        title="Zprávy z formuláře"
        desc="Poptávky z kontaktního formuláře, nejnovější nahoře. Nepřečtené zprávy mají štítek „nová“."
      />
      <Card flush>
        {messages.length === 0 ? (
          <div className="adm-empty">Zatím žádné zprávy.</div>
        ) : (
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Od</th>
                  <th>Témata</th>
                  <th>Formulář</th>
                  <th>E-mail příjemcům</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((m) => (
                  <tr key={m.id} className={m.read ? undefined : 'is-unread'}>
                    <td className="text-nowrap">{formatDateTime(m.createdAt)}</td>
                    <td>
                      <Link to={`/admin/messages/${m.id}`}>{m.jmeno || m.email}</Link>
                      {m.read ? null : (
                        <>
                          {' '}
                          <Pill tone="info">nová</Pill>
                        </>
                      )}
                      {m.jmeno ? <div className="small text-muted fw-normal">{m.email}</div> : null}
                    </td>
                    <td>{m.temata.map(topicLabel).join(', ') || '–'}</td>
                    <td>
                      <code>{m.formId}</code>
                    </td>
                    <td>{m.mailSent ? <Pill tone="ok">odešel</Pill> : <Pill tone="warn">neodešel</Pill>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </>
  );
}
