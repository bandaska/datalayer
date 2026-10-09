// Google Consent Mode v2 + cookie lišta (vzor: annanovotna.cz, app/consent.php).
//
// Postup podle § 89 odst. 3 zákona č. 127/2005 Sb. a GDPR:
//  - před souhlasem jsou analytická i reklamní úložiště „denied“,
//  - souhlas je granulární (kategorie), odmítnout jde stejně snadno jako
//    přijmout, nic není předem zaškrtnuté,
//  - volba se ukládá do cookie `dl_consent` (180 dní) a předává do Consent
//    Mode i do dataLayeru (`cookie_consent_update` / `cookie_consent_loaded`),
//  - souhlas jde kdykoli změnit odkazem „Nastavení cookies“ v patičce.

export const CONSENT_COOKIE = 'dl_consent';
export const CONSENT_MAX_AGE_DAYS = 180;
/** Událost na `window`, která znovu otevře lištu (odkaz v patičce, stránka Cookies). */
export const OPEN_CONSENT_EVENT = 'dl:open-consent';

export type ConsentChoice = { analytics: boolean; marketing: boolean };

/**
 * Inline skript do <head> PŘED GTM: dataLayer, výchozí odmítnutý consent,
 * použití dříve uložené volby a (je-li nastavené ID) loader GTM.
 * `gtmId` musí projít `isValidGtmId` – do skriptu jde jen ověřená hodnota.
 */
export function consentHeadScript(gtmId: string): string {
  const safeGtm = /^GTM-[A-Z0-9]{4,10}$/.test(gtmId) ? gtmId : '';
  const gtm = safeGtm
    ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${safeGtm}');`
    : '';
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',personalization_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);
(function(){try{var m=document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=([^;]+)/);if(!m)return;var c=JSON.parse(decodeURIComponent(m[1]));
gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied',personalization_storage:c.marketing?'granted':'denied'});
window.dataLayer.push({event:'cookie_consent_loaded',consent_analytics:!!c.analytics,consent_marketing:!!c.marketing});}catch(e){}})();
${gtm}`;
}

// ---------- klientská část ----------

export function readConsent(): ConsentChoice | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]+)`));
  if (!m) return null;
  try {
    const c = JSON.parse(decodeURIComponent(m[1])) as Partial<ConsentChoice>;
    return { analytics: Boolean(c.analytics), marketing: Boolean(c.marketing) };
  } catch {
    return null;
  }
}

type Gtag = (...args: unknown[]) => void;

export function saveConsent(choice: ConsentChoice): void {
  const value = encodeURIComponent(JSON.stringify({ ...choice, ts: new Date().toISOString(), v: 1 }));
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;

  const w = window as unknown as { dataLayer: unknown[]; gtag?: Gtag };
  w.dataLayer = w.dataLayer || [];
  const gtag: Gtag =
    w.gtag ??
    function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };
  gtag('consent', 'update', {
    analytics_storage: choice.analytics ? 'granted' : 'denied',
    ad_storage: choice.marketing ? 'granted' : 'denied',
    ad_user_data: choice.marketing ? 'granted' : 'denied',
    ad_personalization: choice.marketing ? 'granted' : 'denied',
    personalization_storage: choice.marketing ? 'granted' : 'denied',
  });
  w.dataLayer.push({
    event: 'cookie_consent_update',
    consent_analytics: choice.analytics,
    consent_marketing: choice.marketing,
  });
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
