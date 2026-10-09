import { pageSchema, type PageContent, type PageInput } from '../schema';
import { page as home } from './pages/home';
import { page as implementaceGa4 } from './pages/implementace-ga4';
import { page as serverSideTracking } from './pages/server-side-tracking';
import { page as cookieListaConsentMode } from './pages/cookie-lista-consent-mode';
import { page as mereniKonverzi } from './pages/mereni-konverzi';
import { page as bigquery } from './pages/bigquery';
import { page as auditMereni } from './pages/audit-mereni';
import { page as reseniEshopy } from './pages/reseni-e-shopy';
import { page as reseniB2b } from './pages/reseni-b2b-lead-generation';
import { page as oNas } from './pages/o-nas';
import { page as kontakt } from './pages/kontakt';
import { page as zpracovaniOsobnichUdaju } from './pages/zpracovani-osobnich-udaju';
import { page as cookies } from './pages/cookies';
export { DEFAULT_NAVIGATION } from './navigation';
export { DEFAULT_TEXTS } from './texts';

// Výchozí obsah webu: zdroj pro migraci, která ho naplní do Firestore, a pro
// web do chvíle, než migrace proběhne. Po migraci platí jen obsah z administrace.
// Od UX redukce (9. října 2026) má web třináct stránek: úvod, šest služeb, dva
// segmenty, O nás, Kontakt a dvě právní stránky. Zrušené adresy přesměrovává
// app/lib/redirects.ts.

const INPUTS: PageInput[] = [
  home,
  implementaceGa4,
  serverSideTracking,
  cookieListaConsentMode,
  mereniKonverzi,
  bigquery,
  auditMereni,
  reseniEshopy,
  reseniB2b,
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
