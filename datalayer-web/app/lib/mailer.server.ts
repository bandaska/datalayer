import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { CONTACT_EMAIL } from './site';
import { topicLabel, type ContactFields } from './contact';

// Odeslání poptávky e-mailem přes SMTP (Cloud Run sám poštu neodesílá).
// Konfigurace z env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE,
// MAIL_FROM. Bez SMTP_HOST se e-mail neposílá – zpráva zůstane uložená
// v administraci (/admin/messages).
// Příjemci se nastavují v administraci (/admin/settings).

let transporter: Transporter | null = null;

export function mailEnabled(): boolean {
  return Boolean(process.env.SMTP_HOST);
}

function getTransporter(): Transporter {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === '1' : port === 465,
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
  }
  return transporter;
}

/** Odstraní zalomení řádků – ochrana hlaviček e-mailu proti injektáži. */
function clean(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

export function buildLeadMail(leadId: string, f: ContactFields, now = new Date()) {
  const topics = f.temata.map(topicLabel).join(', ');
  const subject = clean(`Poptávka z webu: ${topics || 'obecná'} – ${f.jmeno || f.email}`);
  const text = [
    `Nová zpráva z kontaktního formuláře na webu datalayer.cz (${leadId}).`,
    '',
    `Jméno:    ${f.jmeno || '–'}`,
    `E-mail:   ${f.email || '–'}`,
    `Telefon:  ${f.telefon || '–'}`,
    `Web:      ${f.web || '–'}`,
    `Témata:   ${topics || '–'}`,
    `Formulář: ${f.formId} (${f.leadType})`,
    `Stránka:  ${f.page || '–'}`,
    '',
    'Zpráva:',
    f.zprava || '–',
    '',
    '–',
    `Odesláno: ${now.toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' })}`,
    'Zprávu najdete i v administraci: /admin/messages',
  ].join('\n');
  return { subject, text };
}

/**
 * Pošle poptávku všem příjemcům. Prázdný seznam příjemců = záložně na
 * kontaktní e-mail webu, ať se poptávka neztratí.
 */
export async function sendLeadMail(
  leadId: string,
  fields: ContactFields,
  recipients: string[],
): Promise<{ sent: boolean; error?: string }> {
  if (!mailEnabled()) return { sent: false, error: 'SMTP není nastavené' };
  const to = recipients.length ? recipients : [CONTACT_EMAIL];
  const { subject, text } = buildLeadMail(leadId, fields);
  try {
    await getTransporter().sendMail({
      from: process.env.MAIL_FROM || `datalayer.cz <${process.env.SMTP_USER || CONTACT_EMAIL}>`,
      to,
      replyTo: fields.email ? { name: clean(fields.jmeno), address: clean(fields.email) } : undefined,
      subject,
      text,
      headers: { 'X-Lead-Id': leadId },
    });
    return { sent: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.error('e-mail: odeslání poptávky selhalo', { leadId, error });
    return { sent: false, error };
  }
}
