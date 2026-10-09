import { Timestamp } from '@google-cloud/firestore';
import type { Migration } from '../types';

/**
 * Výchozí nastavení webu (`settings/site`): příjemce kontaktního formuláře.
 * Doplní jen chybějící pole – hodnoty uložené v administraci nepřepisuje.
 */
export const migration: Migration = {
  id: '20261009_settings_defaults',
  description:
    'Založí nastavení webu (settings/site) s výchozím příjemcem formuláře one@datalayer.cz. Hodnoty z administrace nepřepisuje.',
  targets: ['firestore'],
  async run(ctx) {
    const ref = ctx.firestore().collection('settings').doc('site');
    const snap = await ref.get();
    const data = snap.data() ?? {};
    const patch: Record<string, unknown> = {};
    if (!Array.isArray(data.recipients) || data.recipients.length === 0) patch.recipients = ['one@datalayer.cz'];
    if (typeof data.gtmId !== 'string') patch.gtmId = '';
    if (typeof data.phone !== 'string') patch.phone = '';
    if (typeof data.linkedinUrl !== 'string') patch.linkedinUrl = '';
    if (!Object.keys(patch).length) return 'nastavení už existuje, beze změny';
    await ref.set({ ...patch, updatedAt: Timestamp.now(), updatedBy: 'migrace' }, { merge: true });
    return `doplněno: ${Object.keys(patch).join(', ')}`;
  },
};
