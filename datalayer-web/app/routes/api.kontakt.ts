import type { ActionFunctionArgs } from 'react-router';
import { CONTACT_MESSAGES, newLeadId, readContactFields, validateContact, type ContactErrors } from '~/lib/contact';
import { sendLeadMail } from '~/lib/mailer.server';
import { markMailResult, saveMessage } from '~/lib/messages.server';
import { clientIp, isRateLimited, recordHit } from '~/lib/rateLimit.server';
import { getSettings } from '~/lib/settings.server';
import { verifyTurnstile } from '~/lib/turnstile.server';

// POST /api/kontakt – nativní kontaktní formulář (náhrada HubSpotu).
// Postup jako na annanovotna.cz (api/kontakt.php):
//   honeypot → limit frekvence → validace → Cloudflare Turnstile →
//   uložení do Firestore (primární krok) → e-mail příjemcům z administrace.
// S JS odpovídá JSON `{ ok, message, leadId?, errors? }`, bez JS přesměruje
// (303) na děkovací stránku /dekujeme.

type Payload = { ok: boolean; message: string; leadId?: string; errors?: ContactErrors };

function respond(request: Request, wantsJson: boolean, status: number, payload: Payload): Response {
  if (wantsJson) {
    return new Response(JSON.stringify(payload), {
      status,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }
  const target = new URL('/dekujeme', request.url);
  if (!payload.ok) target.searchParams.set('chyba', String(status));
  return new Response(null, { status: 303, headers: { Location: target.pathname + target.search } });
}

export async function action({ request }: ActionFunctionArgs) {
  const wantsJson =
    request.headers.get('X-Requested-With') === 'XMLHttpRequest' ||
    (request.headers.get('Accept') ?? '').includes('application/json');

  if (request.method !== 'POST') {
    return respond(request, wantsJson, 405, { ok: false, message: 'Neplatný požadavek.' });
  }

  let fd: FormData;
  try {
    fd = await request.formData();
  } catch {
    return respond(request, wantsJson, 400, { ok: false, message: 'Neplatný požadavek.' });
  }

  // 1) Honeypot: skryté pole „website“ vyplní jen robot. Tváříme se úspěšně,
  //    ať robot filtr nepozná.
  if (String(fd.get('website') ?? '').trim() !== '') {
    return respond(request, wantsJson, 200, { ok: true, message: CONTACT_MESSAGES.ok });
  }

  // 2) Limit frekvence podle IP.
  const ip = clientIp(request);
  const rateKey = ip ?? 'unknown';
  if (isRateLimited(rateKey)) {
    return respond(request, wantsJson, 429, { ok: false, message: CONTACT_MESSAGES.rate });
  }

  // 3) Validace.
  const fields = readContactFields(fd);
  const errors = validateContact(fields);
  if (Object.keys(errors).length) {
    return respond(request, wantsJson, 422, { ok: false, message: CONTACT_MESSAGES.invalid, errors });
  }

  // 4) Cloudflare Turnstile (když je nastavený).
  if (!(await verifyTurnstile(String(fd.get('cf-turnstile-response') ?? ''), ip))) {
    return respond(request, wantsJson, 403, { ok: false, message: CONTACT_MESSAGES.spam });
  }

  // 5) Uložení (primární) a e-mail (best effort).
  const leadId = newLeadId();
  const saved = await saveMessage(leadId, fields);
  const settings = await getSettings();
  const mail = await sendLeadMail(leadId, fields, settings.recipients);
  if (saved) await markMailResult(leadId, mail.sent, mail.error);

  // Chyba jen tehdy, když se zpráva ani neuložila, ani neodeslala.
  if (!saved && !mail.sent) {
    return respond(request, wantsJson, 500, { ok: false, message: CONTACT_MESSAGES.failed });
  }

  recordHit(rateKey);
  // Do logu jen ID a stav, nikdy obsah zprávy.
  console.info('kontakt: přijatá poptávka', { leadId, formId: fields.formId, saved, mailSent: mail.sent });
  return respond(request, wantsJson, 200, { ok: true, message: CONTACT_MESSAGES.ok, leadId });
}
