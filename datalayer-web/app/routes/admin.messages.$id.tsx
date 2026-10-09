import { Form, Link, redirect, useLoaderData } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { requireUser } from '~/lib/auth.server';
import { topicLabel } from '~/lib/contact';
import { deleteMessage, getMessage, setRead } from '~/lib/messages.server';

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
  const rows: [string, string][] = [
    ['Přijato', new Date(m.createdAt).toLocaleString('cs-CZ')],
    ['Jméno', m.jmeno],
    ['E-mail', m.email],
    ['Telefon', m.telefon || '–'],
    ['Web', m.web || '–'],
    ['Témata', m.temata.map(topicLabel).join(', ') || '–'],
    ['Formulář', `${m.formId} (${m.leadType})`],
    ['Stránka', m.page || '–'],
    ['ID poptávky', m.id],
    ['E-mail příjemcům', m.mailSent ? 'odeslán' : `neodeslán${m.mailError ? ` – ${m.mailError}` : ''}`],
  ];
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h1 className="h3 text-white mb-0">Zpráva od {m.jmeno || m.email}</h1>
        <Link to="/admin/messages" className="btn btn-outline-custom btn-sm">
          ← Všechny zprávy
        </Link>
      </div>
      <div className="admin-card mb-3">
        <table className="table table-dark mb-3">
          <tbody>
            {rows.map(([k, v]) => (
              <tr key={k}>
                <th className="text-muted fw-normal" style={{ width: '12rem' }}>
                  {k}
                </th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-white" style={{ whiteSpace: 'pre-wrap' }}>
          {m.zprava}
        </p>
      </div>
      <div className="d-flex gap-2 flex-wrap">
        <a href={`mailto:${m.email}?subject=${encodeURIComponent('Re: poptávka z webu datalayer.cz')}`} className="btn btn-cta btn-sm">
          Odpovědět e-mailem
        </a>
        <Form method="post">
          <input type="hidden" name="intent" value="unread" />
          <button type="submit" className="btn btn-outline-custom btn-sm">
            Označit jako nepřečtenou
          </button>
        </Form>
        <Form
          method="post"
          onSubmit={(e) => {
            if (!confirm('Smazat zprávu? Akce je nevratná.')) e.preventDefault();
          }}
        >
          <input type="hidden" name="intent" value="delete" />
          <button type="submit" className="btn btn-outline-danger btn-sm">
            Smazat
          </button>
        </Form>
      </div>
    </>
  );
}
