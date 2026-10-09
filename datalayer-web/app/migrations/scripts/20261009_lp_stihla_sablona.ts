import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_PAGES, DEFAULT_TEXTS } from '~/content/defaults';
import { pageSchema } from '~/content/schema';
import { decodeNested, encodeNested, pageToDoc } from '~/lib/cms/codec';
import { pageIdFromPath } from '~/lib/cms/ids';
import { sanitizePage } from '~/lib/cms/sanitize.server';
import type { Migration } from '../types';

const ID = '20261009_lp_stihla_sablona';

/** Výchozí znění z předchozího kola – mění se jen tam, kde je nikdo neupravil. */
const OLD_COOKIE_TEXT =
  'Nezbytné cookies drží web v chodu. Analytické a marketingové cookies použijeme jen se souhlasem: pomáhají nám měřit návštěvnost a vyhodnocovat kampaně. Volbu můžete kdykoli změnit odkazem Nastavení cookies v patičce. Podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.';
const OLD_DASHBOARD_TAGLINE = 'Data Studio (dříve Looker Studio) i Power BI';
const NEW_DASHBOARD_TAGLINE = 'Data Studio i Power BI';

/** Porovnatelný tvar dokumentu: bez metadat, klíče seřazené, bez prázdných hodnot (Firestore je neukládá). */
function comparable(doc: Record<string, unknown>): string {
  const norm = (v: unknown): unknown => {
    if (Array.isArray(v)) return v.map(norm);
    if (v instanceof Timestamp) return v.toMillis();
    if (typeof v === 'object' && v !== null) {
      return Object.fromEntries(
        Object.entries(v)
          .filter(([, x]) => x !== undefined)
          .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
          .map(([k, x]) => [k, norm(x)]),
      );
    }
    return v;
  };
  const { updatedAt: _a, updatedBy: _b, ...content } = doc;
  return JSON.stringify(norm(content));
}

/**
 * Štíhlá šablona stránek podle vyhodnocení webu (9. října 2026,
 * seo-analyza/09_vyhodnoceni/vyhodnoceni-webu.md) – obsah stránek
 * z app/content/defaults uloží do Firestore:
 *
 * - `pages/<id>` – každou výchozí stránku, která v databázi je a liší se od nového
 *   znění, přepíše novým obsahem. Původní dokument předtím uloží do
 *   `pages_backup/<id>@20261009_lp_stihla_sablona`. Stav Zveřejněná a noindex
 *   nechá, jak je správce nastavil. Smazanou stránku znovu nezaloží.
 * - `content/texts` – kratší text cookie lišty, jen když v databázi zůstalo
 *   původní výchozí znění. Nová pole textů (postup spolupráce, kroky po odeslání
 *   formuláře, odkazy na děkovací stránce…) doplní schéma při čtení samo.
 * - `content/navigation` – popisek Dashboardů v menu bez „(dříve Looker Studio)“,
 *   jen když je beze změny.
 *
 * Idempotentní: druhý běh nic nezmění (stránka shodná s novým zněním se přeskočí).
 */
export const migration: Migration = {
  id: ID,
  description:
    'Štíhlá šablona stránek podle vyhodnocení webu: přepíše homepage, služby, řešení, rozcestník, Jak pracujeme, O nás, Kontakt, zásady a cookies novým obsahem. Původní znění každé přepsané stránky uloží do kolekce pages_backup, stav zveřejnění nechá. Cookie liště zkrátí text a v menu zkrátí popisek Dashboardů – obojí jen tam, kde je nikdo neupravil.',
  targets: ['firestore'],
  async run(ctx) {
    const db = ctx.firestore();
    const now = Timestamp.now();
    const by = 'migrace';
    let updated = 0;
    let edited = 0;
    let same = 0;
    const missing: string[] = [];

    for (const input of DEFAULT_PAGES) {
      const id = pageIdFromPath(input.path);
      const ref = db.collection('pages').doc(id);
      const snap = await ref.get();
      const current = snap.exists ? (snap.data() ?? {}) : null;
      // smazaná stránka zůstane smazaná; starší jednoduchou stránku nahradil už import obsahu
      if (!current || !current.hero) {
        missing.push(input.path || '(homepage)');
        continue;
      }
      const page = sanitizePage(
        pageSchema.parse({
          ...input,
          published: typeof current.published === 'boolean' ? current.published : true,
          noindex: typeof current.noindex === 'boolean' ? current.noindex : (input.noindex ?? false),
        }),
      );
      const next = pageToDoc(page, by, now);
      if (comparable(current) === comparable(next)) {
        same++;
        continue;
      }
      const backup = db.collection('pages_backup').doc(`${id}@${ID}`);
      if (!(await backup.get()).exists) await backup.set({ ...current, backedUpAt: now, backedUpBy: ID });
      await ref.set(next);
      updated++;
      if (current.updatedBy !== by) edited++;
    }

    // texty webu: jen původní výchozí znění cookie lišty
    let cookieBar = 'beze změny';
    const textsRef = db.collection('content').doc('texts');
    const textsSnap = await textsRef.get();
    if (textsSnap.exists) {
      const texts = decodeNested(textsSnap.data() ?? {}) as { cookieBar?: Record<string, unknown> };
      if (texts.cookieBar?.text === OLD_COOKIE_TEXT) {
        await textsRef.set(
          { cookieBar: encodeNested({ ...texts.cookieBar, text: DEFAULT_TEXTS.cookieBar.text }), updatedAt: now, updatedBy: by },
          { merge: true },
        );
        cookieBar = 'kratší text';
      } else if (texts.cookieBar?.text !== DEFAULT_TEXTS.cookieBar.text) {
        cookieBar = 'vlastní znění z administrace, beze změny';
      }
    }

    // menu: popisek Dashboardů bez vysvětlivky, jen když ho nikdo neupravil
    let menu = 'beze změny';
    const navRef = db.collection('content').doc('navigation');
    const navSnap = await navRef.get();
    if (navSnap.exists) {
      const nav = decodeNested(navSnap.data() ?? {}) as { items?: { type?: string; columns?: { items?: { tagline?: string }[] }[] }[] };
      let count = 0;
      for (const item of nav.items ?? []) {
        if (item.type !== 'menu') continue;
        for (const col of item.columns ?? [])
          for (const link of col.items ?? [])
            if (link.tagline === OLD_DASHBOARD_TAGLINE) {
              link.tagline = NEW_DASHBOARD_TAGLINE;
              count++;
            }
      }
      if (count) {
        await navRef.set({ items: encodeNested(nav.items), updatedAt: now, updatedBy: by }, { merge: true });
        menu = 'popisek Dashboardů bez vysvětlivky';
      }
    }

    ctx.log('štíhlá šablona stránek', { updated, edited, same, missing, cookieBar, menu });
    const parts = [`stránky: ${updated} přepsaných, ${same} beze změny`];
    if (updated) parts.push(`původní znění leží v kolekci pages_backup${edited ? ` (${edited} z nich mělo úpravy z administrace)` : ''}`);
    if (missing.length) parts.push(`v databázi chybí, nezaloženo: ${missing.join(', ')}`);
    parts.push(`cookie lišta: ${cookieBar}`, `menu: ${menu}`);
    return parts.join('; ');
  },
};
