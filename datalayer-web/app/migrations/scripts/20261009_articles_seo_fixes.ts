import { Timestamp } from '@google-cloud/firestore';
import { replaceAll } from '../helpers';
import type { Migration } from '../types';

/**
 * Opravy dvou původních článků podle SEO auditu (seo-analyza/07_audit-webu-klienta):
 *  - věcná chyba v GA4 → BigQuery: sandbox BigQuery není „zdarma bez omezení“
 *    (tabulky po 60 dnech expirují, streamovaný export nejde, limit 10 GiB),
 *  - „odolnost vůči blokátorům“ a „konec cookies třetích stran“ (Chrome je
 *    ponechává, Privacy Sandbox skončil) → přesné formulace,
 *  - ikony Font Awesome v obsahu (web knihovnu už nenačítá),
 *  - meta popis článků (pole `description`), pokud chybí.
 * Mění jen texty, které v článku pořád jsou – ruční úpravy z administrace zůstanou.
 */

const FIXES: Record<string, { replacements: [string, string][]; description: string }> = {
  'server-side-gtm-uvod': {
    replacements: [
      [
        'Získáte přesnější data, lepší výkon webu a odolnost vůči blokátorům.',
        'Získáte přesnější data, rychlejší web a odolnější first-party měření, vždy v souladu se souhlasem návštěvníka.',
      ],
      [
        'Klientské měření naráží na limity prohlížečů, blokátory a konec cookies třetích stran.',
        'Klientské měření naráží na limity prohlížečů, blokátory reklam a omezení cookies v Safari a Firefoxu.',
      ],
      ['Server-side měření je dnes standardem pro datově řízené e-shopy.', 'Server-side měření je dnes standard pro datově řízené e-shopy.'],
      ['<i class="far fa-copy"></i> Copy', 'Kopírovat'],
    ],
    description:
      'Co je server-side Google Tag Manager, proč přesouvá měření z prohlížeče na server a jak začít. Přesnější data a rychlejší web, vždy se souhlasem návštěvníka.',
  },
  'ga4-bigquery-export': {
    replacements: [
      [
        'Export je zdarma v rámci sandbox limitů BigQuery.',
        'Sandbox BigQuery nic nestojí, ale tabulky v něm po šedesáti dnech vyprší, streamovaný export nefunguje a úložiště má limit deset GiB. Pro trvalý export proto připojte k projektu platební účet a upravte výchozí expiraci tabulek.',
      ],
      ['<i class="fas fa-lightbulb"></i>', 'i'],
    ],
    description:
      'Napojení GA4 na BigQuery: surová data o událostech bez vzorkování, spojení dat napříč zdroji a základ pro reporting. Na co si dát pozor u sandboxu.',
  },
};

export const migration: Migration = {
  id: '20261009_articles_seo_fixes',
  description:
    'Opraví dva původní články podle SEO auditu (chyba o sandboxu BigQuery, formulace o blokátorech a cookies, ikony Font Awesome) a doplní jim meta popis.',
  targets: ['firestore'],
  async run(ctx) {
    const done: string[] = [];
    for (const [slug, fix] of Object.entries(FIXES)) {
      const ref = ctx.firestore().collection('articles').doc(slug);
      const snap = await ref.get();
      if (!snap.exists) {
        done.push(`${slug}: neexistuje`);
        continue;
      }
      const data = snap.data() ?? {};
      const { text, count } = replaceAll(String(data.content ?? ''), fix.replacements);
      const patch: Record<string, unknown> = {};
      if (count > 0) patch.content = text;
      if (!data.description) patch.description = fix.description;
      if (!Object.keys(patch).length) {
        done.push(`${slug}: beze změny`);
        continue;
      }
      await ref.set({ ...patch, updatedAt: Timestamp.now() }, { merge: true });
      const fixes = ['text beze změny', 'jedna oprava textu', 'dvě opravy textu', 'tři opravy textu', 'čtyři opravy textu'][count] ?? `${count} oprav textu`;
      done.push(`${slug}: ${fixes}${patch.description ? ', doplněný popis' : ''}`);
      ctx.log('článek upraven', { slug, count });
    }
    return done.join('; ');
  },
};
