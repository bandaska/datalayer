import { Timestamp } from '@google-cloud/firestore';
import { DEFAULT_TEXTS } from '~/content/defaults';
import { decodeNested, encodeNested } from '~/lib/cms/codec';
import { replaceAll, syncPagesWithDefaults } from '../helpers';
import type { Migration } from '../types';

const ID = '20261009_jazykovy_audit';
const PHONE = '+420 704 664 774';

/**
 * Texty webu, které se mění: cesta → dřívější výchozí znění (všechna předchozí kola).
 * Pole se přepíše jen tehdy, když v něm zůstalo některé z nich – úprava z administrace zůstane.
 */
const OLD_TEXTS: Record<string, unknown[]> = {
  'contact.defaultTitle': ['Napište nám, ozveme se do jednoho pracovního dne'],
  'contact.leadWithPhone': [
    'Napište nám, zavolejte, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme měření a řekneme vám, co opravit jako první – nezávazně a zdarma.',
  ],
  'contact.leadWithoutPhone': [
    'Napište nám e-mail, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme měření a řekneme vám, co opravit jako první – nezávazně a zdarma.',
  ],
  'contact.note': ['Ozveme se do jednoho pracovního dne.'],
  'contact.successTitle': ['Díky, zpráva dorazila'],
  'contact.successText': ['Ozveme se vám do jednoho pracovního dne na {email}.'],
  'contact.successPhone': ['Spěchá to? Zavolejte na {phone}.'],
  'contact.nextSteps': [
    [
      'Do jednoho pracovního dne navrhneme termín.',
      'Na třicet minut projdeme web a cíle.',
      'Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.',
    ],
  ],
  'cookieBar.text': [
    'Nezbytné cookies drží web v chodu. Analytické a marketingové cookies použijeme jen se souhlasem: pomáhají nám měřit návštěvnost a vyhodnocovat kampaně. Volbu můžete kdykoli změnit odkazem Nastavení cookies v patičce. Podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.',
    'Analytické a marketingové cookies k měření návštěvnosti a kampaní použijeme jen s vaším souhlasem. Volbu změníte kdykoli v patičce, podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.',
  ],
  'cookieBar.marketing': ['<strong>Marketingové</strong> – měření kampaní a remarketing v Google Ads, Meta a Skliku.'],
  'blog.seoDescription': [
    'Návody k GA4, Google Tag Manageru, Consent Mode v2, server-side trackingu a BigQuery. S diagramy, kódem a odkazy na dokumentaci, bez marketingových zkratek.',
  ],
  'blog.ctaTitle': ['Řešíte totéž u sebe?'],
  'blog.ctaLead': ['Napište, na čem jste se zasekli. Ozveme se do jednoho pracovního dne a řekneme, kde začít.'],
  'blog.ctaPlaceholder': ['Napište, na čem jste se zasekli…'],
  'thankYou.title': ['Díky, zpráva dorazila'],
  'thankYou.text': ['Ozveme se vám do jednoho pracovního dne.'],
  'notFound.text': ['Tuhle stránku jsme nenašli. Možná jsme ji přesunuli.'],
  'process.steps.0.text': ['Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.'],
  'process.steps.0.output': ['report s prioritami A/B/C'],
  'process.steps.1.text': ['Byznys cíle převedeme na události, parametry a pravidla pojmenování.'],
  'process.steps.3.text': ['Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.'],
  'process.steps.3.fromClient': ['testovací objednávka a export z administrace'],
  'process.steps.4.text': ['Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.'],
  'page.faqLead': ['Nenašli jste odpověď? <a href="#kontakt">Napište nám</a>.'],
};

/** Menu a patička: dřívější výchozí popisek → nový (kdekoli v menu, kde zůstal beze změny). */
const NAV_REPLACEMENTS: [from: string, to: string][] = [
  ['souhlas legálně a bez zbytečné ztráty dat', 'souhlas podle zákona a bez zbytečné ztráty dat'],
  ['Ads, Meta, Sklik i Heureka vidí totéž', 'Google Ads, Meta, Sklik i Heureka vidí totéž'],
  ['Obsah a firma', 'O nás'],
];

/** Dva původní články: přesné náhrady podle jazykového auditu (kap. 3.22 a 3.23). */
const ARTICLE_FIXES: Record<string, [from: string, to: string][]> = {
  'server-side-gtm-uvod': [
    ['Server-Side GTM', 'Server-side GTM'],
    ['Server-Side Google Tag Manager', 'Server-side Google Tag Manager'],
    [
      'Získáte přesnější data, rychlejší web a odolnější first-party měření, vždy v souladu se souhlasem návštěvníka.',
      'Cílem jsou přesnější data, rychlejší web a odolnější first-party měření – vždy v souladu se souhlasem návštěvníka.',
    ],
    ['Klientské měření naráží na limity prohlížečů', 'Měření na straně prohlížeče (client-side) naráží na limity prohlížečů'],
    ['Přesunem zpracování na server získáte kontrolu nad daty.', 'Přesunem zpracování na server sami rozhodujete, která data a kam odcházejí.'],
    ['Server-side měření je dnes standard pro datově řízené e-shopy.', 'Server-side měření je dnes běžné u e-shopů, které se rozhodují podle dat.'],
  ],
  'ga4-bigquery-export': [
    ['Napojení GA4 na BigQuery vám otevře surová data k pokročilým analýzám.', 'Napojení GA4 na BigQuery vám zpřístupní surová data pro pokročilé analýzy.'],
    ['Surová eventová data bez samplingu', 'Surová data o událostech bez vzorkování'],
    ['Základ pro reporting a machine learning', 'Základ pro reporting a strojové učení'],
    ['ale tabulky v něm po šedesáti dnech vyprší', 'ale tabulkám v něm po šedesáti dnech vyprší platnost'],
    ['úložiště má limit deset GiB', 'úložiště má limit 10 GiB'],
  ],
};

function getPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o && typeof o === 'object' ? (o as Record<string, unknown>)[k] : undefined), obj);
}

function setPath(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split('.');
  let o: Record<string, unknown> = obj;
  for (const k of keys.slice(0, -1)) o = o[k] as Record<string, unknown>;
  o[keys[keys.length - 1]] = value;
}

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Jazykový audit webu (seo-analyza/2026-10-09_jazykovy-audit) a úpravy klienta
 * z 9. října 2026:
 *
 * - `pages/<id>` – výchozí stránky přepíše zněním z kódu (texty podle auditu, bez slibů
 *   lhůt), původní dokument uloží do `pages_backup/<id>@20261009_jazykovy_audit`.
 * - `content/texts` – texty formuláře, potvrzení, cookie lišty, blogu, postupu
 *   spolupráce… jen v polích s dřívějším výchozím zněním.
 * - `content/navigation` – popisky v menu a patičce, jen dosud nezměněné.
 * - `settings/site` – telefon 704 664 774 (kontaktní blok, patička, tlačítko Zavolat).
 * - `articles/*` – jazykové opravy dvou původních článků (přesné náhrady).
 *
 * Idempotentní: druhý běh nic nezmění.
 */
export const migration: Migration = {
  id: ID,
  description:
    'Jazykový audit a úpravy klienta: přepíše stránky textem podle jazykového auditu (původní znění uloží do pages_backup), opraví texty formuláře, cookie lišty, blogu a menu tam, kde je nikdo neupravil, odstraní sliby lhůt, nastaví telefon 704 664 774 a opraví dva původní články.',
  targets: ['firestore'],
  async run(ctx) {
    const db = ctx.firestore();
    const now = Timestamp.now();
    const by = 'migrace';

    const pages = await syncPagesWithDefaults(ctx, ID);

    // texty webu: jen pole s dřívějším výchozím zněním
    let texts = 0;
    const textsRef = db.collection('content').doc('texts');
    const textsSnap = await textsRef.get();
    if (textsSnap.exists) {
      const data = decodeNested(textsSnap.data() ?? {}) as Record<string, unknown>;
      for (const [path, olds] of Object.entries(OLD_TEXTS)) {
        const current = getPath(data, path);
        if (current !== undefined && olds.some((o) => same(o, current))) {
          setPath(data, path, getPath(DEFAULT_TEXTS, path));
          texts++;
        }
      }
      if (texts) {
        const { updatedAt: _at, updatedBy: _by, ...content } = data;
        await textsRef.set({ ...(encodeNested(content) as object), updatedAt: now, updatedBy: by });
      }
    }

    // menu a patička: popisky s dřívějším výchozím zněním
    let nav = 0;
    const navRef = db.collection('content').doc('navigation');
    const navSnap = await navRef.get();
    if (navSnap.exists) {
      const data = decodeNested(navSnap.data() ?? {}) as Record<string, unknown>;
      const walk = (v: unknown): unknown => {
        if (typeof v === 'string') {
          const hit = NAV_REPLACEMENTS.find(([from]) => from === v);
          if (hit) {
            nav++;
            return hit[1];
          }
          return v;
        }
        if (Array.isArray(v)) return v.map(walk);
        if (v && typeof v === 'object' && !(v instanceof Timestamp)) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
        return v;
      };
      const { updatedAt: _at, updatedBy: _by, ...content } = data;
      const next = walk(content);
      if (nav) await navRef.set({ ...(encodeNested(next) as object), updatedAt: now, updatedBy: by });
    }

    // nastavení: telefon
    let phone = 'beze změny';
    const settingsRef = db.collection('settings').doc('site');
    const settingsSnap = await settingsRef.get();
    if ((settingsSnap.data() ?? {}).phone !== PHONE) {
      await settingsRef.set({ phone: PHONE, updatedAt: now, updatedBy: by }, { merge: true });
      phone = PHONE;
    }

    // články: přesné náhrady
    const articles: string[] = [];
    for (const [slug, replacements] of Object.entries(ARTICLE_FIXES)) {
      const ref = db.collection('articles').doc(slug);
      const snap = await ref.get();
      if (!snap.exists) continue;
      const a = snap.data() ?? {};
      const patch: Record<string, string> = {};
      let count = 0;
      for (const field of ['title', 'description', 'content'] as const) {
        if (typeof a[field] !== 'string') continue;
        const r = replaceAll(a[field] as string, replacements);
        if (r.count) {
          patch[field] = r.text;
          count += r.count;
        }
      }
      if (count) {
        await ref.set(patch, { merge: true });
        articles.push(`${slug} (${count})`);
      }
    }

    ctx.log('jazykový audit', { pages, texts, nav, phone, articles });
    const parts = [`stránky: ${pages.updated} přepsaných, ${pages.same} beze změny`];
    if (pages.updated) parts.push(`původní znění leží v kolekci pages_backup${pages.edited ? ` (${pages.edited} z nich mělo úpravy z administrace)` : ''}`);
    if (pages.missing.length) parts.push(`v databázi chybí, nezaloženo: ${pages.missing.join(', ')}`);
    parts.push(`texty webu: ${texts} polí`, `menu a patička: ${nav} popisků`, `telefon: ${phone}`, `články: ${articles.length ? articles.join(', ') : 'beze změny'}`);
    return parts.join('; ');
  },
};
