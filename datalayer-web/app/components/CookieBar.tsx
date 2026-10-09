import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
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
          Cookies na tomto webu
        </h2>
        <p id="cc-desc" className="cc__desc">
          Nezbytné cookies drží web v chodu. Analytické a marketingové cookies použijeme jen se souhlasem:
          pomáhají nám měřit návštěvnost a vyhodnocovat kampaně. Volbu můžete kdykoli změnit odkazem
          Nastavení cookies v patičce. Podrobnosti najdete v <Link to="/cookies">zásadách cookies</Link>.
        </p>

        {detail ? (
          <div className="cc__options">
            <label className="cc__opt">
              <input type="checkbox" checked disabled />
              <span>
                <strong>Nezbytné</strong> – základní chod webu a ochrana formuláře proti spamu. Vždy aktivní.
              </span>
            </label>
            <label className="cc__opt">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
              <span>
                <strong>Analytické</strong> – měření návštěvnosti přes Google Analytics 4.
              </span>
            </label>
            <label className="cc__opt">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              <span>
                <strong>Marketingové</strong> – měření kampaní a remarketing v Google Ads, Meta a Skliku.
              </span>
            </label>
          </div>
        ) : null}

        <div className="cc__actions">
          <button type="button" className="cc__btn" onClick={() => decide(false, false)}>
            Odmítnout vše
          </button>
          {detail ? (
            <button type="button" className="cc__btn" onClick={() => decide(analytics, marketing)}>
              Uložit volbu
            </button>
          ) : (
            <button type="button" className="cc__btn" onClick={() => setDetail(true)}>
              Nastavení
            </button>
          )}
          <button type="button" className="cc__btn" onClick={() => decide(true, true)}>
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
