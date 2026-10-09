import { Form, useActionData, useLoaderData, useNavigation } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { requireRole } from '~/lib/auth.server';
import { mailEnabled } from '~/lib/mailer.server';
import { isValidGtmId, isValidLinkedinUrl, normalizeGtmId, parseRecipients } from '~/lib/settings';
import { getSettings, saveSettings } from '~/lib/settings.server';
import { CONTACT_EMAIL } from '~/lib/site';
import { turnstileEnabled } from '~/lib/turnstile.server';

// Nastavení webu (jen role admin): příjemci kontaktního formuláře, GTM ID,
// telefon a LinkedIn na webu. Tajemství (Turnstile, SMTP) zůstávají v env /
// Secret Manageru – tady se jen ukazuje, jestli jsou nastavená.

export async function loader({ request }: LoaderFunctionArgs) {
  await requireRole(request, 'admin');
  return {
    settings: await getSettings({ fresh: true }),
    status: {
      turnstile: turnstileEnabled(),
      smtp: mailEnabled(),
      mailFrom: process.env.MAIL_FROM || '',
    },
  };
}

type ActionResult = { ok?: boolean; errors?: Record<string, string> };

export async function action({ request }: ActionFunctionArgs): Promise<ActionResult> {
  const user = await requireRole(request, 'admin');
  const form = await request.formData();
  const errors: Record<string, string> = {};

  const { valid, invalid } = parseRecipients(String(form.get('recipients') ?? ''));
  if (invalid.length) errors.recipients = `Neplatné adresy: ${invalid.join(', ')}`;
  else if (!valid.length) errors.recipients = 'Zadejte aspoň jednu adresu, kam mají chodit zprávy.';

  const gtmId = normalizeGtmId(String(form.get('gtmId') ?? ''));
  if (gtmId && !isValidGtmId(gtmId)) errors.gtmId = 'ID kontejneru má tvar GTM-XXXXXXX (velká písmena a číslice).';

  const phone = String(form.get('phone') ?? '').trim().slice(0, 40);
  if (phone && !/^\+?[\d\s()-]{9,20}$/.test(phone)) errors.phone = 'Telefon zadejte jako +420 123 456 789.';

  const linkedinUrl = String(form.get('linkedinUrl') ?? '').trim();
  if (linkedinUrl && !isValidLinkedinUrl(linkedinUrl)) errors.linkedinUrl = 'Odkaz musí začínat https://www.linkedin.com/.';

  if (Object.keys(errors).length) return { errors };
  await saveSettings({ recipients: valid, gtmId, phone, linkedinUrl }, user.email);
  return { ok: true };
}

export default function AdminSettings() {
  const { settings, status } = useLoaderData<typeof loader>();
  const result = useActionData<typeof action>();
  const saving = useNavigation().state === 'submitting';
  const err = result?.errors ?? {};

  return (
    <>
      <h1 className="h3 text-white mb-4">Nastavení webu</h1>
      {result?.ok ? <div className="alert alert-success">Nastavení jsme uložili. Web ho použije do půl minuty.</div> : null}

      <Form method="post" className="admin-card mb-4">
        <h2 className="h5 text-white mb-3">Kontaktní formulář</h2>
        <label className="form-label" htmlFor="recipients">
          Příjemci zpráv
        </label>
        <textarea
          id="recipients"
          name="recipients"
          className={err.recipients ? 'form-control is-invalid' : 'form-control'}
          rows={3}
          defaultValue={settings.recipients.join('\n')}
          placeholder={CONTACT_EMAIL}
        />
        {err.recipients ? <div className="invalid-feedback d-block">{err.recipients}</div> : null}
        <div className="form-text mb-4">
          Jedna adresa na řádek, případně několik adres za sebou s čárkou. Každá zpráva z formuláře přijde všem
          příjemcům a web ji zároveň uloží do sekce Zprávy.
        </div>

        <h2 className="h5 text-white mb-3">Měření</h2>
        <label className="form-label" htmlFor="gtmId">
          Google Tag Manager ID
        </label>
        <input
          id="gtmId"
          name="gtmId"
          className={err.gtmId ? 'form-control is-invalid' : 'form-control'}
          defaultValue={settings.gtmId}
          placeholder="GTM-XXXXXXX"
        />
        {err.gtmId ? <div className="invalid-feedback d-block">{err.gtmId}</div> : null}
        <div className="form-text mb-4">
          Prázdné pole = GTM vypnutý. Consent Mode v2 a cookie lišta fungují i bez něj, web načte GTM až po nich.
        </div>

        <h2 className="h5 text-white mb-3">Kontakty na webu</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label" htmlFor="phone">
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              className={err.phone ? 'form-control is-invalid' : 'form-control'}
              defaultValue={settings.phone}
              placeholder="+420 123 456 789"
            />
            {err.phone ? <div className="invalid-feedback d-block">{err.phone}</div> : null}
            <div className="form-text">Prázdné = web telefon nezobrazí (kontaktní blok, patička, lišta na mobilu).</div>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="linkedinUrl">
              LinkedIn
            </label>
            <input
              id="linkedinUrl"
              name="linkedinUrl"
              className={err.linkedinUrl ? 'form-control is-invalid' : 'form-control'}
              defaultValue={settings.linkedinUrl}
              placeholder="https://www.linkedin.com/in/…"
            />
            {err.linkedinUrl ? <div className="invalid-feedback d-block">{err.linkedinUrl}</div> : null}
          </div>
        </div>

        <button type="submit" className="btn btn-cta mt-4" disabled={saving}>
          {saving ? 'Ukládám…' : 'Uložit nastavení'}
        </button>
        {settings.updatedAt ? (
          <p className="small text-muted mt-3 mb-0">
            Naposledy uložil {settings.updatedBy || '–'}, {new Date(settings.updatedAt).toLocaleString('cs-CZ')}.
          </p>
        ) : null}
      </Form>

      <div className="admin-card">
        <h2 className="h5 text-white mb-3">Služby nastavené v prostředí (Cloud Run)</h2>
        <ul className="list-unstyled mb-0 small">
          <li className="mb-2">
            <strong>Cloudflare Turnstile:</strong>{' '}
            {status.turnstile ? 'zapnutý' : 'vypnutý – chybí TURNSTILE_SITE_KEY nebo TURNSTILE_SECRET_KEY (formulář chrání jen honeypot a limit frekvence)'}
          </li>
          <li>
            <strong>Odesílání e-mailů (SMTP):</strong>{' '}
            {status.smtp
              ? `nastavené${status.mailFrom ? `, odesílatel ${status.mailFrom}` : ''}`
              : 'nenastavené – chybí SMTP_HOST; web zprávy jen ukládá do sekce Zprávy'}
          </li>
        </ul>
      </div>
    </>
  );
}
