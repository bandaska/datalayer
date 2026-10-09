import { Form, useActionData, useLoaderData, useNavigation } from 'react-router';
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import { Card, PageHead, Pill, formatDateTime } from '~/components/admin/ui';
import { requireRole } from '~/lib/auth.server';
import { mailEnabled } from '~/lib/mailer.server';
import { isValidGtmId, isValidLinkedinUrl, isValidOperatorId, normalizeGtmId, parseRecipients } from '~/lib/settings';
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

  const operatorName = String(form.get('operatorName') ?? '').trim().slice(0, 160);
  const operatorId = String(form.get('operatorId') ?? '').replace(/\s+/g, '');
  if (operatorId && !isValidOperatorId(operatorId)) errors.operatorId = 'IČO má osm číslic.';
  const operatorAddress = String(form.get('operatorAddress') ?? '').trim().slice(0, 240);
  const operatorRegistry = String(form.get('operatorRegistry') ?? '').trim().slice(0, 240);
  if ((operatorId || operatorAddress) && !operatorName) errors.operatorName = 'Vyplňte jméno nebo obchodní firmu provozovatele.';

  if (Object.keys(errors).length) return { errors };
  await saveSettings({ recipients: valid, gtmId, phone, linkedinUrl, operatorName, operatorId, operatorAddress, operatorRegistry }, user.email);
  return { ok: true };
}

export default function AdminSettings() {
  const { settings, status } = useLoaderData<typeof loader>();
  const result = useActionData<typeof action>();
  const saving = useNavigation().state === 'submitting';
  const err = result?.errors ?? {};
  const hasErrors = Object.keys(err).length > 0;

  return (
    <>
      <PageHead title="Nastavení webu" desc="Příjemci zpráv z formuláře, měření a kontakty, které web zobrazuje." />
      {result?.ok ? <div className="alert alert-success">Nastavení jsme uložili. Web ho použije do půl minuty.</div> : null}
      {hasErrors ? (
        <div className="alert alert-danger" role="alert">
          Nastavení jsme neuložili. Opravte prosím zvýrazněná pole.
        </div>
      ) : null}

      <Form method="post">
        <Card title="Kontaktní formulář" desc="Komu web posílá zprávy z formuláře.">
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
            aria-describedby="recipients-help"
          />
          {err.recipients ? <div className="invalid-feedback d-block">{err.recipients}</div> : null}
          <div id="recipients-help" className="form-text">
            Jedna adresa na řádek, případně několik adres za sebou s čárkou. Každá zpráva z formuláře přijde všem
            příjemcům a web ji zároveň uloží do sekce Zprávy z formuláře.
          </div>
        </Card>

        <Card title="Měření" desc="Google Tag Manager na veřejném webu. Administrace ho nenačítá.">
          <label className="form-label" htmlFor="gtmId">
            Google Tag Manager ID
          </label>
          <input
            id="gtmId"
            name="gtmId"
            className={err.gtmId ? 'form-control is-invalid' : 'form-control'}
            defaultValue={settings.gtmId}
            placeholder="GTM-XXXXXXX"
            aria-describedby="gtmId-help"
          />
          {err.gtmId ? <div className="invalid-feedback d-block">{err.gtmId}</div> : null}
          <div id="gtmId-help" className="form-text">
            Když pole necháte prázdné, web GTM nenačte. Consent Mode v2 a cookie lišta fungují i bez něj, web načte GTM
            až po nich.
          </div>
        </Card>

        <Card title="Kontakty na webu" desc="Telefon a LinkedIn v kontaktním bloku a patičce, telefon i v liště na mobilu.">
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
                aria-describedby="phone-help"
              />
              {err.phone ? <div className="invalid-feedback d-block">{err.phone}</div> : null}
              <div id="phone-help" className="form-text">
                Když pole necháte prázdné, web telefon nezobrazí.
              </div>
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
                aria-describedby="linkedinUrl-help"
              />
              {err.linkedinUrl ? <div className="invalid-feedback d-block">{err.linkedinUrl}</div> : null}
              <div id="linkedinUrl-help" className="form-text">
                Když pole necháte prázdné, web odkaz nezobrazí.
              </div>
            </div>
          </div>
        </Card>

        <Card
          title="Provozovatel webu"
          desc="Zákon vyžaduje identifikaci provozovatele: jméno nebo obchodní firmu, IČO a sídlo. Web je ukáže v patičce, na stránce O nás a v zásadách zpracování osobních údajů."
        >
          {!settings.operatorName ? (
            <div className="alert alert-warning">Údaje zatím chybí – před spuštěním webu je doplňte.</div>
          ) : null}
          <div className="row g-3">
            {(
              [
                ['operatorName', 'Jméno nebo obchodní firma', settings.operatorName, 'Např. Vít Novotný nebo datalayer s.r.o.'],
                ['operatorId', 'IČO', settings.operatorId, '12345678'],
                ['operatorAddress', 'Sídlo nebo místo podnikání', settings.operatorAddress, 'Ulice 1, 110 00 Praha'],
                ['operatorRegistry', 'Zápis v rejstříku (nepovinné)', settings.operatorRegistry, 'Např. zapsaný v obchodním rejstříku u Městského soudu v Praze, oddíl C, vložka 000000'],
              ] as const
            ).map(([name, label, value, placeholder]) => (
              <div className={name === 'operatorRegistry' ? 'col-12' : 'col-md-6'} key={name}>
                <label className="form-label" htmlFor={name}>
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  className={err[name] ? 'form-control is-invalid' : 'form-control'}
                  defaultValue={value}
                  placeholder={placeholder}
                />
                {err[name] ? <div className="invalid-feedback d-block">{err[name]}</div> : null}
              </div>
            ))}
          </div>
        </Card>

        <div className="d-flex align-items-center gap-3 flex-wrap mb-4">
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Ukládám…' : 'Uložit nastavení'}
          </button>
          {settings.updatedAt ? (
            <span className="small text-muted">
              Poslední změna: {formatDateTime(settings.updatedAt)}, {settings.updatedBy || '–'}
            </span>
          ) : null}
        </div>
      </Form>

      <Card
        title="Služby v prostředí"
        desc="Klíče a hesla web čte z proměnných prostředí v Cloud Run. Tady jen vidíte, které služby díky nim běží."
        flush
      >
        <div className="adm-table-wrap">
          <table className="adm-table">
            <tbody>
              <tr>
                <td className="fw-semibold text-nowrap">Cloudflare Turnstile</td>
                <td>{status.turnstile ? <Pill tone="ok">zapnutý</Pill> : <Pill tone="warn">vypnutý</Pill>}</td>
                <td>
                  {status.turnstile ? (
                    'Ověření od Cloudflare chrání formulář před spamem.'
                  ) : (
                    <>
                      Chybí <code>TURNSTILE_SITE_KEY</code> nebo <code>TURNSTILE_SECRET_KEY</code>, takže formulář před
                      spamem chrání jen honeypot a limit frekvence.
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td className="fw-semibold text-nowrap">Odesílání e-mailů přes SMTP</td>
                <td>{status.smtp ? <Pill tone="ok">zapnuté</Pill> : <Pill tone="warn">vypnuté</Pill>}</td>
                <td>
                  {status.smtp ? (
                    <>
                      Web posílá zprávy z formuláře příjemcům e-mailem
                      {status.mailFrom ? (
                        <>
                          , odesílatel <code>{status.mailFrom}</code>
                        </>
                      ) : null}
                      .
                    </>
                  ) : (
                    <>
                      Chybí <code>SMTP_HOST</code>, takže web zprávy jen ukládá do sekce Zprávy z formuláře.
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
