import { pageSchema, type PageContent, type PageInput } from '../schema';
import { page as home } from './pages/home';
import { page as sluzby } from './pages/sluzby';
import { page as implementaceGa4 } from './pages/implementace-ga4';
import { page as googleTagManager } from './pages/google-tag-manager';
import { page as datovaVrstva } from './pages/datova-vrstva';
import { page as serverSideTracking } from './pages/server-side-tracking';
import { page as cookieListaConsentMode } from './pages/cookie-lista-consent-mode';
import { page as mereniKonverzi } from './pages/mereni-konverzi';
import { page as bigquery } from './pages/bigquery';
import { page as dashboardyAReporting } from './pages/dashboardy-a-reporting';
import { page as auditMereni } from './pages/audit-mereni';
import { page as technickyAuditWebu } from './pages/technicky-audit-webu';
import { page as spravaWebuAMereni } from './pages/sprava-webu-a-mereni';
import { page as reseniEshopy } from './pages/reseni-e-shopy';
import { page as reseniB2b } from './pages/reseni-b2b-lead-generation';
import { page as reseniVelkeFirmy } from './pages/reseni-velke-firmy';
import { page as jakPracujeme } from './pages/jak-pracujeme';
import { page as oNas } from './pages/o-nas';
import { page as kontakt } from './pages/kontakt';
import { page as zpracovaniOsobnichUdaju } from './pages/zpracovani-osobnich-udaju';
import { page as cookies } from './pages/cookies';
export { DEFAULT_NAVIGATION } from './navigation';
export { DEFAULT_TEXTS } from './texts';

// Výchozí obsah webu: zdroj pro migraci, která ho naplní do Firestore, a pro
// web do chvíle, než migrace proběhne. Po migraci platí jen obsah z administrace.

const INPUTS: PageInput[] = [
  home,
  sluzby,
  implementaceGa4,
  googleTagManager,
  datovaVrstva,
  serverSideTracking,
  cookieListaConsentMode,
  mereniKonverzi,
  bigquery,
  dashboardyAReporting,
  auditMereni,
  technickyAuditWebu,
  spravaWebuAMereni,
  reseniEshopy,
  reseniB2b,
  reseniVelkeFirmy,
  jakPracujeme,
  oNas,
  kontakt,
  zpracovaniOsobnichUdaju,
  cookies,
];

/** OG obrázek z public/og (generuje scripts/og-images.ts), pokud ho stránka nemá. */
function withOg(p: PageInput): PageInput {
  if (p.ogImage) return p;
  return { ...p, ogImage: `/og/${p.path.replace(/\//g, '-') || 'default'}.png` };
}

export const DEFAULT_PAGES: PageContent[] = INPUTS.map((p) => pageSchema.parse(withOg(p)));
