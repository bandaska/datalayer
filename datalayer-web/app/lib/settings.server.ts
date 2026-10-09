import { Timestamp } from '@google-cloud/firestore';
import { firestore } from './firestore.server';
import { DEFAULT_SETTINGS, type SiteSettings } from './settings';

// Nastavení webu ve Firestore: dokument `settings/site`.
// Čte ho každá stránka (GTM ID, telefon), proto krátká cache v paměti instance.

const doc = () => firestore.collection('settings').doc('site');

const CACHE_MS = 30_000;
let cache: { value: SiteSettings; at: number } | null = null;

function fromData(d: Record<string, unknown> | undefined): SiteSettings {
  if (!d) return { ...DEFAULT_SETTINGS };
  const updated = d.updatedAt;
  return {
    recipients: Array.isArray(d.recipients) ? (d.recipients as unknown[]).map(String) : [],
    gtmId: typeof d.gtmId === 'string' ? d.gtmId : '',
    phone: typeof d.phone === 'string' ? d.phone : '',
    linkedinUrl: typeof d.linkedinUrl === 'string' ? d.linkedinUrl : '',
    operatorName: typeof d.operatorName === 'string' ? d.operatorName : '',
    operatorId: typeof d.operatorId === 'string' ? d.operatorId : '',
    operatorAddress: typeof d.operatorAddress === 'string' ? d.operatorAddress : '',
    operatorRegistry: typeof d.operatorRegistry === 'string' ? d.operatorRegistry : '',
    updatedAt: updated instanceof Timestamp ? updated.toDate().toISOString() : undefined,
    updatedBy: typeof d.updatedBy === 'string' ? d.updatedBy : undefined,
  };
}

/** Nastavení webu. Při chybě Firestore vrátí výchozí hodnoty – web musí běžet dál. */
export async function getSettings(options: { fresh?: boolean } = {}): Promise<SiteSettings> {
  if (!options.fresh && cache && Date.now() - cache.at < CACHE_MS) return cache.value;
  try {
    const snap = await doc().get();
    const value = fromData(snap.data());
    cache = { value, at: Date.now() };
    return value;
  } catch (err) {
    console.error('nastavení: čtení selhalo', err);
    return cache?.value ?? { ...DEFAULT_SETTINGS };
  }
}

export async function saveSettings(
  input: Pick<SiteSettings, 'recipients' | 'gtmId' | 'phone' | 'linkedinUrl' | 'operatorName' | 'operatorId' | 'operatorAddress' | 'operatorRegistry'>,
  by: string,
): Promise<void> {
  await doc().set(
    {
      recipients: input.recipients,
      gtmId: input.gtmId,
      phone: input.phone,
      linkedinUrl: input.linkedinUrl,
      operatorName: input.operatorName,
      operatorId: input.operatorId,
      operatorAddress: input.operatorAddress,
      operatorRegistry: input.operatorRegistry,
      updatedAt: Timestamp.now(),
      updatedBy: by,
    },
    { merge: true },
  );
  cache = null;
}
