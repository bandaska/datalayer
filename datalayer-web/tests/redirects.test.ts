import { describe, expect, it } from 'vitest';
import { LEGACY_REDIRECTS, redirectTarget } from '~/lib/redirects';

describe('301 přesměrování', () => {
  it('staré URL ze stagingu (i s jinou velikostí písmen a lomítkem)', () => {
    expect(redirectTarget('/sluzby/ga4')).toBe('/sluzby/implementace-ga4');
    expect(redirectTarget('/sluzby/serverSide')).toBe('/sluzby/server-side-tracking');
    expect(redirectTarget('/sluzby/dataLayer/')).toBe('/sluzby/datova-vrstva');
    expect(redirectTarget('/sluzby/datalayer')).toBe('/sluzby/datova-vrstva');
    expect(redirectTarget('/privacy')).toBe('/zpracovani-osobnich-udaju');
    expect(redirectTarget('/sluzby/gtm', '?utm_source=x')).toBe('/sluzby/google-tag-manager?utm_source=x');
  });

  it('malá písmena a bez koncového lomítka', () => {
    expect(redirectTarget('/SLUZBY')).toBe('/sluzby');
    expect(redirectTarget('/blog/')).toBe('/blog');
    expect(redirectTarget('/Blog/Clanek/')).toBe('/blog/clanek');
  });

  it('platné adresy nechá být', () => {
    expect(redirectTarget('/')).toBeNull();
    expect(redirectTarget('/sluzby/bigquery')).toBeNull();
    expect(redirectTarget('/blog/ga4-bigquery-export')).toBeNull();
  });

  it('admin, API a servisní cesty nepřevádí na malá písmena', () => {
    expect(redirectTarget('/admin/users/AbC123/password')).toBeNull();
    expect(redirectTarget('/api/kontakt')).toBeNull();
    expect(redirectTarget('/admin/users/AbC123/password/')).toBe('/admin/users/AbC123/password');
  });

  it('cíle přesměrování jsou samy platné (žádné řetězení)', () => {
    for (const target of Object.values(LEGACY_REDIRECTS)) expect(redirectTarget(target)).toBeNull();
  });
});
