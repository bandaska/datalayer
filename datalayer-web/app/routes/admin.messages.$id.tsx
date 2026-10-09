import type { ReactNode } from 'react';
import { Form, redirect, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead, Pill, formatDateTime } from '~/components/admin/ui';
import { requireUser } from '~/lib/auth.server';
import { topicLabel } from '~/lib/contact';
import { deleteMessage, getMessage, setRead } from '~/lib/messages.server';
import { phoneHref } from '~/lib/settings';

// Detail zprávy z formuláře. Otevřením se zpráva označí jako přečtená.

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUser(request);
  const message = await getMessage(params.id!);
  if (!message) throw new Response('Zpráva neexistuje', { status: 404 });
  if (!message.read) await setRead(message.id, true);
  return { message };
}

export async function action({ request, params }: ActionFunctionArgs) {
  await requireUser(request);
  const form = await request.formData();
  const intent = form.get('intent');
  if (intent === 'delete') {
    await deleteMessage(params.id!);
    return redirect('/admin/messages');
  }
  if (intent === 'unread') {
    await setRead(params.id!, false);
    return redirect('/admin/messages');
  }
  return null;
}

export default function AdminMessage() {
  const { message: m } = useLoaderData<typeof loader>();
  const rows: [string, ReactNode][] = [
    ['Datum a čas', formatDateTime(m.createdAt)],
    ['Jméno', m.jmeno || '–'],
    ['E-mail', <a href={`mailto:${m.email}`}>{m.email}</a>],
    ['Telefon', m.telefon ? <a href={phoneHref(m.telefon)}>{m.telefon}</a> : '–'],
    ['Web', m.web || '–'],
    ['Témata', m.temata.map(topicLabel).join(', ') || '–'],
    [
      'Formulář',
      <>
        <code>{m.formId}</code>, typ <code>{m.leadType}</code>
      </>,
    ],
    ['Stránka', m.page || '–'],
    ['ID poptávky', <code>{m.id}</code>],
    [
      'E-mail příjemcům',
      m.mailSent ? (
        <Pill tone="ok">odešel</Pill>
      ) : (
        <>
          <Pill tone="warn">neodešel</Pill>
          {m.mailError ? <span className="small text-muted ms-2">{m.mailError}</span> : null}
        </>
      ),
    ],
  ];

  return (
    <>
      <PageHead crumb={{ to: '/admin/messages', label: 'Zprávy z formuláře' }} title={`Zpráva od ${m.jmeno || m.email}`} />

      <Card flush>
        <div className="adm-table-wrap">
          <table className="adm-table">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k}>
                  <th scope="row" style={{ width: '12rem', borderBottom: i === rows.length - 1 ? 0 : undefined }}>
                    {k}
                  </th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Text zprávy">
        <div
          style={{
            whiteSpace: 'pre-wrap',
            overflowWrap: 'anywhere',
            background: 'var(--a-surface)',
            color: 'var(--a-text)',
            border: '1px solid var(--a-border)',
            borderRadius: 8,
            padding: '14px 16px',
            lineHeight: 1.65,
            maxWidth: '75ch',
          }}
        >
          {m.zprava || '–'}
        </div>
      </Card>

      <div className="d-flex gap-2 flex-wrap">
        <a
          href={`mailto:${m.email}?subject=${encodeURIComponent('Re: poptávka z webu datalayer.cz')}`}
          className="btn btn-primary"
        >
          Odpovědět e-mailem
        </a>
        <Form method="post">
          <input type="hidden" name="intent" value="unread" />
          <button type="submit" className="btn btn-outline-secondary">
            Označit jako nepřečtenou
          </button>
        </Form>
        <Form
          method="post"
          onSubmit={(e) => {
            if (!confirm('Smazat zprávu? Smazání nejde vzít zpět.')) e.preventDefault();
          }}
        >
          <input type="hidden" name="intent" value="delete" />
          <button type="submit" className="btn btn-outline-danger">
            Smazat
          </button>
        </Form>
      </div>
    </>
  );
}
