import type { LandingPageContent } from './types';
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
import { page as sluzby } from './pages/sluzby';

// Registr obsahových stránek. Jen pro server (loadery, sitemapa, llms.txt) –
// do prohlížeče jde obsah jedné stránky přes data loaderu.

export const PAGES: LandingPageContent[] = [
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
];

const byPath = new Map(PAGES.map((p) => [p.path, p]));

export function getPage(path: string): LandingPageContent | undefined {
  return byPath.get(path.replace(/^\/+|\/+$/g, ''));
}
