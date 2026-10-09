import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_NAVIGATION, DEFAULT_TEXTS } from '~/content/defaults';
import { decodeNested, encodeNested } from '~/lib/cms/codec';
import { pageIdFromPath } from '~/lib/cms/ids';
import { comparable, syncPagesWithDefaults } from '../helpers';
import type { Migration } from '../types';

const ID = '20261009_ux_redukce';

/** Stránky zrušené UX redukcí – jejich adresy přesměrovává app/lib/redirects.ts. */
export const REMOVED_PAGES = [
  'sluzby',
  'sluzby/google-tag-manager',
  'sluzby/datova-vrstva',
  'sluzby/dashboardy-a-reporting',
  'sluzby/technicky-audit-webu',
  'sluzby/sprava-webu-a-mereni',
  'reseni/velke-firmy',
  'jak-pracujeme',
];

/** Texty webu: cesta → dřívější výchozí znění. Pole se změní jen tehdy, když ho nikdo neupravil. */
const OLD_TEXTS: Record<string, string[]> = {
  'contact.legal': [
    'Údaje použijeme jen k odpovědi na zprávu a případné nabídce. <a href="/zpracovani-osobnich-udaju">Jak s nimi zacházíme</a>. Žádný newsletter, žádný spam.',
  ],
  'contact.defaultPlaceholder': ['Krátce napište, co řešíte…'],
  'organization.description': [
    'Webová analytika a měření pro e-shopy, B2B firmy a velké firmy: implementace GA4, Google Tag Manager, server-side tracking, Consent Mode v2, BigQuery a dashboardy.',
  ],
};

/** Pole, která šablona po redukci nemá (nadtitulek a kroky u formuláře, pruh Pokračujte, tlačítko na služby u 404). */
const DROPPED_TEXTS = ['contact.eyebrow', 'contact.nextSteps', 'page.faqLead', 'page.continueLabel', 'notFound.services'];

type Obj = Record<string, unknown>;

function getPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o && typeof o === 'object' ? (o as Obj)[k] : undefined), obj);
}

/** Rodič pole a jeho klíč (rodič chybí, když cesta v dokumentu není). */
function parentOf(obj: Obj, path: string): [Obj | undefined, string] {
  const keys = path.split('.');
  const parent = getPath(obj, keys.slice(0, -1).join('.'));
  return [parent && typeof parent === 'object' ? (parent as Obj) : undefined, keys[keys.length - 1]];
}

const isRemovedHref = (href: unknown) => typeof href === 'string' && REMOVED_PAGES.includes(href.split('#')[0].replace(/^\//, '').toLowerCase());

/**
 * UX redukce webu (seo-analyza/2026-10-09_ux-redukce): z dvaceti čtyř stránek
 * zůstává třináct, šablona bez prvků, které nevedou k formuláři.
 *
 * - `pages/<id>` – ponechané stránky přepíše zkráceným zněním z kódu, původní
 *   dokument uloží do `pages_backup/<id>@20261009_ux_redukce` (stav Zveřejněná
 *   a noindex převezme, smazanou stránku nezaloží).
 * - `pages/<id>` zrušených stránek (GTM, datová vrstva, dashboardy, technický
 *   audit, správa webu, rozcestník služeb, velké firmy, Jak pracujeme) – uloží do
 *   `pages_backup` a smaže. Adresy přesměrovává kód (301).
 * - `content/navigation` – menu a patičku nahradí zkrácenou podobou (šest služeb,
 *   E-shopy, B2B, O nás; patička bez popisu a blogu), původní uloží do
 *   `content_backup/navigation@20261009_ux_redukce`.
 * - `content/texts` – kratší text pod formulářem a nápovědu ve zprávě změní jen
 *   tam, kde zůstalo výchozí znění; pole, která šablona nemá, smaže; z odkazů
 *   na děkovací stránce vyřadí zrušené stránky.
 *
 * Idempotentní: druhý běh nic nezmění.
 */
export const migration: Migration = {
  id: ID,
  description:
    'UX redukce webu: z dvaceti čtyř stránek nechá třináct – ponechané přepíše zkráceným zněním, zrušené (Google Tag Manager, Datová vrstva, Dashboardy, Technický audit, Správa webu, rozcestník Služby, Velké firmy, Jak pracujeme) smaže. Obojí předtím uloží do kolekce pages_backup. Menu a patičku zkrátí (původní uloží do content_backup), u formuláře zkrátí text o zpracování údajů a odstraní kroky po odeslání.',
  targets: ['firestore'],
  async run(ctx) {
    const db = ctx.firestore();
    const now = Timestamp.now();
    const by = 'migrace';

    const pages = await syncPagesWithDefaults(ctx, ID);

    // zrušené stránky: záloha a smazání
    const removed: string[] = [];
    for (const path of REMOVED_PAGES) {
      const id = pageIdFromPath(path);
      const ref = db.collection('pages').doc(id);
      const snap = await ref.get();
      if (!snap.exists) continue;
      const backup = db.collection('pages_backup').doc(`${id}@${ID}`);
      if (!(await backup.get()).exists) await backup.set({ ...(snap.data() ?? {}), backedUpAt: now, backedUpBy: ID });
      await ref.delete();
      removed.push(`/${path}`);
    }

    // menu a patička: zkrácená podoba, původní do zálohy
    let navigation = 'beze změny';
    const navRef = db.collection('content').doc('navigation');
    const navSnap = await navRef.get();
    const nextNav = encodeNested(DEFAULT_NAVIGATION) as Obj;
    if (navSnap.exists) {
      if (comparable(navSnap.data() ?? {}) !== comparable(nextNav)) {
        const backup = db.collection('content_backup').doc(`navigation@${ID}`);
        if (!(await backup.get()).exists) await backup.set({ ...(navSnap.data() ?? {}), backedUpAt: now, backedUpBy: ID });
        await navRef.set({ ...nextNav, updatedAt: now, updatedBy: by });
        navigation = 'zkrácené (původní v content_backup)';
      }
    }

    // texty webu
    const changes: string[] = [];
    const textsRef = db.collection('content').doc('texts');
    const textsSnap = await textsRef.get();
    if (textsSnap.exists) {
      const { updatedAt: _at, updatedBy: _by, ...content } = textsSnap.data() ?? {};
      const data = decodeNested(content) as Obj;
      for (const [path, olds] of Object.entries(OLD_TEXTS)) {
        const [parent, key] = parentOf(data, path);
        if (parent && olds.includes(parent[key] as string)) {
          parent[key] = getPath(DEFAULT_TEXTS, path);
          changes.push(path);
        }
      }
      for (const path of DROPPED_TEXTS) {
        const [parent, key] = parentOf(data, path);
        if (parent && key in parent) {
          delete parent[key];
          changes.push(`${path} (smazáno)`);
        }
      }
      const thankYou = data.thankYou as Obj | undefined;
      if (thankYou && Array.isArray(thankYou.links) && thankYou.links.some((l) => isRemovedHref((l as Obj)?.href))) {
        thankYou.links = thankYou.links.filter((l) => !isRemovedHref((l as Obj)?.href));
        changes.push('thankYou.links');
      }
      if (changes.length) await textsRef.set({ ...(encodeNested(data) as object), updatedAt: now, updatedBy: by });
    }

    ctx.log('UX redukce', { pages, removed, navigation, texts: changes });
    const parts = [`stránky: ${pages.updated} přepsaných, ${pages.same} beze změny`];
    if (pages.updated) parts.push(`původní znění leží v kolekci pages_backup${pages.edited ? ` (${pages.edited} z nich mělo úpravy z administrace)` : ''}`);
    if (pages.missing.length) parts.push(`v databázi chybí, nezaloženo: ${pages.missing.join(', ')}`);
    parts.push(`zrušené stránky: ${removed.length ? `${removed.length} smazaných (${removed.join(', ')}), zálohy v pages_backup` : 'žádné'}`);
    parts.push(`menu a patička: ${navigation}`, `texty webu: ${changes.length ? changes.join(', ') : 'beze změny'}`);
    return parts.join('; ');
  },
};
