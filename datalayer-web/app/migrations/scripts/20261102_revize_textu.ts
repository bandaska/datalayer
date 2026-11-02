import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_NAVIGATION, DEFAULT_TEXTS } from '~/content/defaults';
import { decodeNested, encodeNested } from '~/lib/cms/codec';
import { comparable, syncPagesWithDefaults } from '../helpers';
import type { Migration } from '../types';

const ID = '20261102_revize_textu';

/** Texty webu: cesta → dřívější výchozí znění. Pole se změní jen tehdy, když ho nikdo neupravil. */
const OLD_TEXTS: Record<string, string[]> = {
  'contact.defaultTitle': ['Napište nám, co řešíte', 'Napište nám, ozveme se do jednoho pracovního dne'],
  'contact.leadWithPhone': [
    'Napište nám, zavolejte nebo vyplňte formulář. Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první – nezávazně a zdarma.',
  ],
  'contact.leadWithoutPhone': [
    'Napište nám e-mail nebo vyplňte formulář. Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první – nezávazně a zdarma.',
  ],
  'contact.defaultPlaceholder': ['Adresa webu a co řešíte, např. „GA4 ukazuje o pětinu méně objednávek než e-shop“', 'Krátce napište, co řešíte…'],
  'contact.legal': [
    'Údaje použijeme jen k odpovědi. <a href="/zpracovani-osobnich-udaju">Jak s nimi zacházíme</a>',
    'Údaje použijeme jen k odpovědi na zprávu a případné nabídce. <a href="/zpracovani-osobnich-udaju">Jak s nimi zacházíme</a>. Žádný newsletter, žádný spam.',
  ],
  'contact.submit': ['Odeslat zprávu'],
  'contact.successTitle': ['Děkujeme, zpráva dorazila', 'Díky, zpráva dorazila'],
  'contact.successText': ['Ozveme se vám na {email}.', 'Ozveme se vám do jednoho pracovního dne na {email}.'],
  'thankYou.title': ['Děkujeme, zpráva dorazila', 'Díky, zpráva dorazila'],
  'thankYou.text': ['Ozveme se vám e-mailem.', 'Ozveme se vám do jednoho pracovního dne.'],
  'thankYou.errorTitle': ['Zprávu se nepodařilo odeslat'],
  'page.faqTitle': ['Časté otázky'],
};

/** Nová pole textů webu – doplní je výchozí hodnotou, pokud v dokumentu chybí. */
const NEW_TEXTS = ['contact.formIntro', 'page.relatedTitle'];

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
 * Revize textů a rozvržení podle auditu z 2. listopadu 2026
 * (seo-analyza/2026-11-02_seo-ux-texty/audit.md):
 *
 * - `pages/<id>` – výchozí stránky přepíše novým zněním (úvody, konkrétní nadpisy místo
 *   „Poznáváte se?“, průběh spolupráce, FAQ, související služby). Původní dokument uloží do
 *   `pages_backup/<id>@20261102_revize_textu`, stav Zveřejněná a noindex převezme.
 * - `content/navigation` – menu a patičku nahradí (Pro e-shopy, Pro B2B firmy, O datalayer.cz,
 *   Domluvit konzultaci, nové názvy služeb), původní uloží do
 *   `content_backup/navigation@20261102_revize_textu`.
 * - `content/texts` – texty formuláře, potvrzení a nadpis FAQ změní jen tam, kde zůstalo
 *   dřívější výchozí znění; doplní nová pole (věta nad formulářem, nadpis souvisejících služeb).
 *
 * Idempotentní: druhý běh nic nezmění.
 */
export const migration: Migration = {
  id: ID,
  description:
    'Revize textů podle auditu z 2. listopadu 2026: přepíše stránky novým zněním (původní uloží do pages_backup), nahradí menu a patičku (původní uloží do content_backup) a v textech webu změní formulář, potvrzení a nadpis FAQ tam, kde je nikdo neupravil.',
  targets: ['firestore'],
  async run(ctx) {
    const db = ctx.firestore();
    const now = Timestamp.now();
    const by = 'migrace';

    const pages = await syncPagesWithDefaults(ctx, ID);

    // menu a patička: nová podoba, původní do zálohy
    let navigation = 'beze změny';
    const navRef = db.collection('content').doc('navigation');
    const navSnap = await navRef.get();
    const nextNav = encodeNested(DEFAULT_NAVIGATION) as Obj;
    if (navSnap.exists && comparable(navSnap.data() ?? {}) !== comparable(nextNav)) {
      const backup = db.collection('content_backup').doc(`navigation@${ID}`);
      if (!(await backup.get()).exists) await backup.set({ ...(navSnap.data() ?? {}), backedUpAt: now, backedUpBy: ID });
      await navRef.set({ ...nextNav, updatedAt: now, updatedBy: by });
      navigation = 'nové (původní v content_backup)';
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
      for (const path of NEW_TEXTS) {
        const [parent, key] = parentOf(data, path);
        if (parent && parent[key] === undefined) {
          parent[key] = getPath(DEFAULT_TEXTS, path);
          changes.push(`${path} (nové)`);
        }
      }
      if (changes.length) await textsRef.set({ ...(encodeNested(data) as object), updatedAt: now, updatedBy: by });
    }

    ctx.log('revize textů', { pages, navigation, texts: changes });
    const parts = [`stránky: ${pages.updated} přepsaných, ${pages.same} beze změny`];
    if (pages.updated) parts.push(`původní znění leží v kolekci pages_backup${pages.edited ? ` (${pages.edited} z nich mělo úpravy z administrace)` : ''}`);
    if (pages.missing.length) parts.push(`v databázi chybí, nezaloženo: ${pages.missing.join(', ')}`);
    parts.push(`menu a patička: ${navigation}`, `texty webu: ${changes.length ? changes.join(', ') : 'beze změny'}`);
    return parts.join('; ');
  },
};
