import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_TEXTS } from '~/content/defaults';
import { decodeNested, encodeNested } from '~/lib/cms/codec';
import { syncPagesWithDefaults } from '../helpers';
import type { Migration } from '../types';

const ID = '20261102_audit_dokonceni';

/** Texty webu: cesta → dřívější výchozí znění. Pole se změní jen tehdy, když ho nikdo neupravil. */
const OLD_TEXTS: Record<string, string[]> = {
  'cookieBar.title': ['Cookies na tomto webu'],
  'cookieBar.text': [
    'Analytické a marketingové cookies k měření návštěvnosti a kampaní použijeme jen s vaším souhlasem. Volbu změníte kdykoli v patičce. Podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.',
    'Nezbytné cookies drží web v chodu. Analytické a marketingové cookies použijeme jen se souhlasem: pomáhají nám měřit návštěvnost a vyhodnocovat kampaně. Volbu můžete kdykoli změnit odkazem Nastavení cookies v patičce. Podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.',
  ],
  'cookieBar.necessary': ['<strong>Nezbytné</strong> – základní chod webu a ochrana formuláře proti spamu. Vždy aktivní.'],
  'cookieBar.analytics': ['<strong>Analytické</strong> – měření návštěvnosti přes Google Analytics 4.'],
  'cookieBar.marketing': [
    '<strong>Marketingové</strong> – měření kampaní a remarketing v Google Ads, Metě a Skliku.',
    '<strong>Marketingové</strong> – měření kampaní a remarketing v Google Ads, Meta a Skliku.',
  ],
  'cookieBar.reject': ['Odmítnout vše'],
  'cookieBar.settings': ['Nastavení'],
  'cookieBar.save': ['Uložit volbu'],
  'notFound.title': ['Stránka neexistuje'],
  'notFound.text': ['Tuto stránku jsme nenašli. Možná jsme ji přesunuli.', 'Tuhle stránku jsme nenašli. Možná jsme ji přesunuli.'],
  'notFound.home': ['Zpět na úvod'],
};

/** Nová pole textů webu – doplní je výchozí hodnotou, pokud v dokumentu chybí. */
const NEW_TEXTS = ['notFound.contact'];

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

/**
 * Dokončení auditu z 2. listopadu 2026 – kapitoly 11–18 (seo-analyza/2026-11-02_seo-ux-texty/audit.md):
 *
 * - `pages/<id>` – výchozí stránky přepíše novým zněním (E-shopy, B2B, O datalayer.cz, Kontakt,
 *   zpracování osobních údajů, cookies; titulky a popisy pro vyhledávače u všech stránek).
 *   Původní dokument uloží do `pages_backup/<id>@20261102_audit_dokonceni`.
 * - `content/texts` – texty cookie lišty a stránky 404 změní jen tam, kde zůstalo dřívější výchozí
 *   znění; doplní odkaz na kontakt ze stránky 404.
 *
 * Idempotentní: druhý běh nic nezmění.
 */
export const migration: Migration = {
  id: ID,
  description:
    'Dokončení auditu z 2. listopadu 2026: přepíše stránky novým zněním (E-shopy, B2B, O datalayer.cz, Kontakt, zásady, cookies a titulky pro vyhledávače; původní uloží do pages_backup) a v textech webu změní cookie lištu a stránku 404 tam, kde je nikdo neupravil.',
  targets: ['firestore'],
  async run(ctx) {
    const db = ctx.firestore();
    const now = Timestamp.now();

    const pages = await syncPagesWithDefaults(ctx, ID);

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
      for (const path of NEW_TEXTS) {
        const [parent, key] = parentOf(data, path);
        if (parent && parent[key] === undefined) {
          parent[key] = getPath(DEFAULT_TEXTS, path);
          changes.push(`${path} (nové)`);
        }
      }
      if (changes.length) await textsRef.set({ ...(encodeNested(data) as object), updatedAt: now, updatedBy: 'migrace' });
    }

    ctx.log('dokončení auditu', { pages, texts: changes });
    const parts = [`stránky: ${pages.updated} přepsaných, ${pages.same} beze změny`];
    if (pages.updated) parts.push(`původní znění leží v kolekci pages_backup${pages.edited ? ` (${pages.edited} z nich mělo úpravy z administrace)` : ''}`);
    if (pages.missing.length) parts.push(`v databázi chybí, nezaloženo: ${pages.missing.join(', ')}`);
    parts.push(`texty webu: ${changes.length ? changes.join(', ') : 'beze změny'}`);
    return parts.join('; ');
  },
};
