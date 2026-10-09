import { useEffect, useRef, useState } from 'react';
import { useRouteLoaderData } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { RootData } from '~/lib/rootData';
import { OPEN_CONSENT_EVENT, readConsent, saveConsent } from '~/lib/consent';

// Cookie lišta s granulárním souhlasem (Nezbytné / Analytické / Marketingové).
// „Odmítnout vše“ a „Přijmout vše“ mají stejnou váhu – žádné dark patterns.
// Zobrazí se, dokud návštěvník nevybere; znovu ji otevře odkaz v patičce.

export function CookieBar() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const root = useRouteLoaderData('root') as RootData | undefined;
  const t = root?.texts.cookieBar ?? DEFAULT_TEXTS.cookieBar;

  useEffect(() => {
    const current = readConsent();
    if (!current) setOpen(true);
    const onOpen = () => {
      const c = readConsent();
      setAnalytics(Boolean(c?.analytics));
      setMarketing(Boolean(c?.marketing));
      setDetail(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open) titleRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const decide = (a: boolean, m: boolean) => {
    saveConsent({ analytics: a, marketing: m });
    setOpen(false);
    setDetail(false);
  };

  return (
    <div className="cc" role="dialog" aria-modal="false" aria-labelledby="cc-title" aria-describedby="cc-desc">
      <div className="cc__panel">
        <h2 id="cc-title" className="cc__title" tabIndex={-1} ref={titleRef}>
          {t.title}
        </h2>
        <p id="cc-desc" className="cc__desc" dangerouslySetInnerHTML={{ __html: t.text }} />

        {detail ? (
          <div className="cc__options">
            <label className="cc__opt">
              <input type="checkbox" checked disabled />
              <span dangerouslySetInnerHTML={{ __html: t.necessary }} />
            </label>
            <label className="cc__opt">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
              <span dangerouslySetInnerHTML={{ __html: t.analytics }} />
            </label>
            <label className="cc__opt">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              <span dangerouslySetInnerHTML={{ __html: t.marketing }} />
            </label>
          </div>
        ) : null}

        <div className="cc__actions">
          <button type="button" className="cc__btn" onClick={() => decide(false, false)}>
            {t.reject}
          </button>
          {detail ? (
            <button type="button" className="cc__btn" onClick={() => decide(analytics, marketing)}>
              {t.save}
            </button>
          ) : (
            <button type="button" className="cc__btn cc__btn--settings" onClick={() => setDetail(true)}>
              {t.settings}
            </button>
          )}
          <button type="button" className="cc__btn" onClick={() => decide(true, true)}>
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
