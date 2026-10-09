import { describe, expect, it } from 'vitest';
import { LEGACY_REDIRECTS, TEMPORARY_REDIRECTS, redirectFor, redirectTarget } from '~/lib/redirects';

describe('301 přesměrování', () => {
  it('staré URL ze stagingu (i s jinou velikostí písmen a lomítkem)', () => {
    expect(redirectTarget('/sluzby/ga4')).toBe('/sluzby/implementace-ga4');
    expect(redirectTarget('/sluzby/serverSide')).toBe('/sluzby/server-side-tracking');
    expect(redirectTarget('/sluzby/dataLayer/')).toBe('/sluzby/implementace-ga4');
    expect(redirectTarget('/privacy')).toBe('/zpracovani-osobnich-udaju');
    expect(redirectTarget('/sluzby/gtm', '?utm_source=x')).toBe('/sluzby/implementace-ga4?utm_source=x');
  });

  it('stránky zrušené UX redukcí vedou na sloučenou stránku nebo úvod', () => {
    expect(redirectFor('/sluzby/google-tag-manager')).toEqual({ to: '/sluzby/implementace-ga4', status: 301 });
    expect(redirectFor('/sluzby/datova-vrstva')).toEqual({ to: '/sluzby/implementace-ga4', status: 301 });
    expect(redirectFor('/sluzby/dashboardy-a-reporting')).toEqual({ to: '/sluzby/bigquery', status: 301 });
    expect(redirectFor('/sluzby/technicky-audit-webu')).toEqual({ to: '/sluzby/audit-mereni', status: 301 });
    expect(redirectFor('/sluzby/sprava-webu-a-mereni')).toEqual({ to: '/', status: 301 });
    expect(redirectFor('/sluzby/')).toEqual({ to: '/', status: 301 });
    expect(redirectFor('/reseni/velke-firmy', '?a=1')).toEqual({ to: '/?a=1', status: 301 });
    expect(redirectFor('/Jak-Pracujeme')).toEqual({ to: '/o-nas', status: 301 });
  });

  it('skrytý blog dočasně (302)', () => {
    expect(redirectFor('/blog')).toEqual({ to: '/', status: 302 });
    expect(redirectFor('/blog/')).toEqual({ to: '/', status: 302 });
    expect(redirectFor('/blog/ga4-bigquery-export')).toEqual({ to: '/sluzby/bigquery', status: 302 });
    expect(redirectFor('/blog/server-side-gtm-uvod')).toEqual({ to: '/sluzby/server-side-tracking', status: 302 });
  });

  it('malá písmena a bez koncového lomítka', () => {
    expect(redirectTarget('/KONTAKT')).toBe('/kontakt');
    expect(redirectTarget('/o-nas/')).toBe('/o-nas');
    expect(redirectTarget('/Blog/Clanek/')).toBe('/blog/clanek');
  });

  it('platné adresy nechá být', () => {
    expect(redirectTarget('/')).toBeNull();
    expect(redirectTarget('/sluzby/bigquery')).toBeNull();
    expect(redirectTarget('/blog/jiny-clanek')).toBeNull();
  });

  it('admin, API a servisní cesty nepřevádí na malá písmena', () => {
    expect(redirectTarget('/admin/users/AbC123/password')).toBeNull();
    expect(redirectTarget('/api/kontakt')).toBeNull();
    expect(redirectTarget('/admin/users/AbC123/password/')).toBe('/admin/users/AbC123/password');
  });

  it('cíle přesměrování jsou samy platné (žádné řetězení)', () => {
    for (const target of [...Object.values(LEGACY_REDIRECTS), ...Object.values(TEMPORARY_REDIRECTS)]) expect(redirectTarget(target)).toBeNull();
  });
});
