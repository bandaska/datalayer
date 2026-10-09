import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useLocation, useRouteLoaderData } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { Topic } from '~/content/schema';
import { TOPICS, normalizeEmail, normalizePhone, validateContact } from '~/lib/contact';
import type { ContactErrors, LeadType } from '~/lib/contact';
import { readConsent } from '~/lib/consent';
import { pushEvent, sha256Hex } from '~/lib/dataLayer';
import type { RootData } from '~/lib/rootData';
import { CONTACT_EMAIL } from '~/lib/site';
import { phoneHref } from '~/lib/settings';

// Nativní kontaktní blok (náhrada HubSpotu) podle vzoru annanovotna.cz:
// vlevo výzva a kanály (e-mail, telefon, LinkedIn), vpravo formulář.
// Bez JS funguje klasický POST na /api/kontakt (→ /dekujeme), s JS odešle
// fetch, ukáže stav a pošle do dataLayeru lead_form_start / lead_form_error /
// generate_lead (s SHA-256 hashi e-mailu a telefonu, nikdy čitelné údaje).

export type ContactBlockProps = {
  formId: string;
  title: string;
  lead?: string;
  placeholder?: string;
  topics?: Topic[];
  leadType?: LeadType;
  /** Zkrácená varianta pod články (bez kanálů vlevo). */
  compact?: boolean;
};

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id: string) => void;
};

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

function loadTurnstile(): Promise<TurnstileApi> {
  const w = window as unknown as { turnstile?: TurnstileApi };
  if (w.turnstile) return Promise.resolve(w.turnstile);
  return new Promise((resolve, reject) => {
    let s = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SRC}"]`);
    if (!s) {
      s = document.createElement('script');
      s.src = TURNSTILE_SRC;
      s.async = true;
      document.head.appendChild(s);
    }
    s.addEventListener('load', () => (w.turnstile ? resolve(w.turnstile) : reject(new Error('turnstile'))));
    s.addEventListener('error', () => reject(new Error('turnstile')));
  });
}

export function ContactBlock({
  formId,
  title,
  lead,
  placeholder,
  topics = [],
  leadType = 'consultation',
  compact = false,
}: ContactBlockProps) {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const email = root?.email || CONTACT_EMAIL;
  const phone = root?.phone || '';
  const linkedin = root?.linkedinUrl || '';
  const siteKey = root?.turnstileSiteKey || '';
  const t = root?.texts.contact ?? DEFAULT_TEXTS.contact;
  const location = useLocation();

  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const started = useRef(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  const [errors, setErrors] = useState<ContactErrors>({});
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState<{ text: string; error: boolean } | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!siteKey || !turnstileRef.current) return;
    let cancelled = false;
    loadTurnstile()
      .then((t) => {
        if (cancelled || !turnstileRef.current || widgetId.current) return;
        widgetId.current = t.render(turnstileRef.current, { sitekey: siteKey, theme: 'dark', language: 'cs' });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      const t = (window as unknown as { turnstile?: TurnstileApi }).turnstile;
      if (t && widgetId.current) t.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [siteKey]);

  useEffect(() => {
    if (success) successRef.current?.focus();
  }, [success]);

  const resetTurnstile = () => {
    const t = (window as unknown as { turnstile?: TurnstileApi }).turnstile;
    if (t && widgetId.current) t.reset(widgetId.current);
  };

  const onFocus = () => {
    if (started.current) return;
    started.current = true;
    pushEvent('lead_form_start', { form_id: formId, form_location: location.pathname });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const fields = {
      jmeno: String(fd.get('jmeno') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      zprava: String(fd.get('zprava') ?? '').trim(),
    };
    const found = validateContact(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      pushEvent('lead_form_error', { form_id: formId, error_fields: Object.keys(found).join(',') });
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }

    setSending(true);
    setNote({ text: 'Odesíláme…', error: false });
    const phoneValue = String(fd.get('telefon') ?? '');
    const leadTopics = fd.getAll('tema').map(String);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/json' },
        credentials: 'same-origin',
        body: fd,
      });
      const data = (await res.json().catch(() => ({ ok: false }))) as {
        ok?: boolean;
        message?: string;
        leadId?: string;
        errors?: ContactErrors;
      };
      if (data.ok) {
        // Hash e-mailu a telefonu (enhanced conversions) jen se souhlasem
        // s marketingovými cookies – čitelné údaje do dataLayeru nikdy.
        const marketing = Boolean(readConsent()?.marketing);
        const [emailHash, phoneHash] = marketing
          ? await Promise.all([sha256Hex(normalizeEmail(fields.email)), sha256Hex(normalizePhone(phoneValue))])
          : ['', ''];
        pushEvent('generate_lead', {
          form_id: formId,
          form_location: location.pathname,
          lead_type: leadType,
          lead_topics: leadTopics.join(','),
          lead_id: data.leadId || undefined,
          ...(marketing
            ? {
                user_data: {
                  sha256_email_address: emailHash || undefined,
                  sha256_phone_number: phoneHash || undefined,
                },
              }
            : {}),
        });
        form.reset();
        setNote(null);
        setSuccess(fields.email);
      } else {
        if (data.errors) setErrors(data.errors);
        setNote({
          text: data.message || 'Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám napište e-mail.',
          error: true,
        });
        resetTurnstile();
        pushEvent('lead_form_error', { form_id: formId, error_fields: 'server' });
      }
    } catch {
      setNote({ text: 'Spojení selhalo. Zkuste to prosím znovu.', error: true });
      resetTurnstile();
    } finally {
      setSending(false);
    }
  };

  const again = () => {
    setSuccess(null);
    resetTurnstile();
    formRef.current?.querySelector<HTMLInputElement>('input[name="jmeno"]')?.focus();
  };

  const fieldProps = (name: keyof ContactErrors) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${formId}-${name}-err` : undefined,
    onInput: () => errors[name] && setErrors((prev) => ({ ...prev, [name]: undefined })),
  });

  const defaultLead = phone ? t.leadWithPhone : t.leadWithoutPhone;
  const successMessage =
    t.successText.replace('{email}', success ?? '').replace(/ na \.$/, '.') + (phone && t.successPhone ? ` ${t.successPhone.replace('{phone}', phone)}` : '');

  return (
    <section id="kontakt" className={compact ? 'dl-contact dl-contact--compact' : 'dl-contact'} data-form={formId}>
      {/* starší odkazy v obsahu z administrace míří na #contact-form */}
      <span id="contact-form" />
      <div className="dl-contact__grid">
        <div className="dl-contact__intro">
          <p className="eyebrow">[ {t.eyebrow} ]</p>
          <h2>{title || t.defaultTitle}</h2>
          <p className="dl-contact__lead">{lead || defaultLead}</p>
          {compact ? null : (
            <>
              <ul className="dl-channels">
                <li>
                  <span className="dl-channels__icon" aria-hidden="true">
                    <MailIcon />
                  </span>
                  <span>
                    <span className="dl-channels__label">E-mail</span>
                    <a
                      href={`mailto:${email}`}
                      onClick={() => pushEvent('contact_click', { channel: 'email', section: 'contact' })}
                    >
                      {email}
                    </a>
                  </span>
                </li>
                {phone ? (
                  <li>
                    <span className="dl-channels__icon" aria-hidden="true">
                      <PhoneIcon />
                    </span>
                    <span>
                      <span className="dl-channels__label">Telefon</span>
                      <a
                        href={phoneHref(phone)}
                        onClick={() => pushEvent('contact_click', { channel: 'phone', section: 'contact' })}
                      >
                        {phone}
                      </a>
                    </span>
                  </li>
                ) : null}
                {linkedin ? (
                  <li>
                    <span className="dl-channels__icon" aria-hidden="true">
                      <LinkedinIcon />
                    </span>
                    <span>
                      <span className="dl-channels__label">LinkedIn</span>
                      <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        Vít Novotný
                      </a>
                    </span>
                  </li>
                ) : null}
              </ul>
              <div className="dl-person">
                <span className="dl-person__photo" aria-hidden="true">
                  VN
                </span>
                <span>
                  <span className="dl-person__name">{t.personName}</span>
                  <span className="dl-person__role">{t.personNote}</span>
                </span>
              </div>
            </>
          )}
        </div>

        <form
          ref={formRef}
          className="dl-form"
          method="post"
          action="/api/kontakt"
          noValidate
          onSubmit={onSubmit}
          onFocus={onFocus}
          data-contact-form={formId}
        >
          <input type="hidden" name="form_id" value={formId} />
          <input type="hidden" name="lead_type" value={leadType} />
          <input type="hidden" name="page" value={location.pathname} />
          <div className="dl-form__hp" aria-hidden="true">
            <label>
              Web firmy
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="dl-form__row">
            <label>
              Jméno a příjmení
              <input type="text" name="jmeno" autoComplete="name" required maxLength={120} {...fieldProps('jmeno')} />
              {errors.jmeno ? (
                <span className="dl-form__fielderr" id={`${formId}-jmeno-err`}>
                  {errors.jmeno}
                </span>
              ) : null}
            </label>
            <label>
              E-mail
              <input type="email" name="email" autoComplete="email" required maxLength={200} {...fieldProps('email')} />
              {errors.email ? (
                <span className="dl-form__fielderr" id={`${formId}-email-err`}>
                  {errors.email}
                </span>
              ) : null}
            </label>
          </div>
          <div className="dl-form__row">
            <label>
              Telefon <span className="opt">(nepovinné)</span>
              <input type="tel" name="telefon" autoComplete="tel" placeholder="+420" maxLength={40} />
            </label>
            <label>
              Web <span className="opt">(nepovinné)</span>
              <input type="text" name="web" inputMode="url" autoComplete="url" placeholder="www.vas-web.cz" maxLength={200} />
            </label>
          </div>

          <fieldset className="dl-topics">
            <legend>
              Co řešíte? <span className="opt">(nepovinné)</span>
            </legend>
            <div className="dl-topics__list">
              {TOPICS.map((t) => (
                <label className="dl-chip" key={t.value}>
                  <input type="checkbox" name="tema" value={t.value} defaultChecked={topics.includes(t.value)} />
                  <span>{t.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label>
            S čím vám můžeme pomoci?
            <textarea name="zprava" required maxLength={5000} placeholder={placeholder || t.defaultPlaceholder} {...fieldProps('zprava')} />
            {errors.zprava ? (
              <span className="dl-form__fielderr" id={`${formId}-zprava-err`}>
                {errors.zprava}
              </span>
            ) : null}
          </label>

          {siteKey ? <div className="dl-form__turnstile" ref={turnstileRef} /> : null}

          <p className="dl-form__legal" dangerouslySetInnerHTML={{ __html: t.legal }} />

          <button type="submit" className="dl-btn" disabled={sending}>
            [ {t.submit} ]
          </button>
          <p className={note?.error ? 'dl-form__note is-err' : 'dl-form__note'} role="status" aria-live="polite">
            {note ? note.text : t.note}
          </p>

          {success !== null ? (
            <div className="dl-form__success">
              <div>
                <div className="dl-form__success-icon" aria-hidden="true">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M7.5 12.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 tabIndex={-1} ref={successRef}>
                  {t.successTitle}
                </h3>
                <p>{successMessage}</p>
                <button type="button" className="dl-form__again" onClick={again}>
                  Napsat další zprávu
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M8 10.5V16M8 7.8v.1M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.3-2.6 1.4 0 2.2.9 2.2 2.6V16" strokeLinecap="round" />
    </svg>
  );
}
