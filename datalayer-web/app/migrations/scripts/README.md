# Migrace Firestore

Jedna migrace = jeden soubor `YYYYMMDD_nazev.ts` (malá písmena, číslice, `_`), který exportuje
`migration`, **a zároveň** řádek na konci `../manifest.ts`. Postup a pravidla jsou
v `docs/migrace.md`; soulad hlídá `tests/migrations.test.ts`.

```ts
import type { Migration } from '../types';

export const migration: Migration = {
  id: '20261015_nastaveni_x',
  description: 'Co změna dělá a proč (česky, zobrazí se v administraci).',
  targets: ['firestore'],
  async run(ctx) {
    const ref = ctx.firestore().collection('settings').doc('site');
    await ref.set({ x: 1 }, { merge: true });
    return 'nastavení x doplněné';
  },
};
```

## Import nového článku

Obsah článku patří do souboru vedle migrace (`content/<slug>.html`) a do migrace se načte jako text
(`?raw`), takže se dostane i do produkčního buildu:

```ts
import content from '../content/consent-mode-v2-pruvodce.html?raw';
import { importArticle } from '../helpers';
import type { Migration } from '../types';

export const migration: Migration = {
  id: '20261020_clanek_consent_mode_v2',
  description: 'Import článku Consent Mode v2: průvodce (brief A1).',
  targets: ['firestore'],
  async run(ctx) {
    const result = await importArticle(ctx, {
      slug: 'consent-mode-v2-pruvodce',
      title: 'Consent Mode v2: basic vs. advanced a co se posílá před souhlasem',
      author: 'Vít Novotný',
      date: '2026-10-20',
      description: '…140–160 znaků…',
      content,
    });
    return `consent-mode-v2-pruvodce: ${result}`;
  },
};
```

`importArticle` existující článek nepřepíše (mohl ho někdo upravit v administraci). Přepsat ho jde
jen výslovně (`{ overwrite: true }`) v nové migraci.

Migrace musí být **idempotentní** – po pádu uprostřed se pouští znovu celá.
