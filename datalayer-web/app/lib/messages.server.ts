import { Timestamp } from '@google-cloud/firestore';
import { firestore } from './firestore.server';
import type { ContactFields } from './contact';

// Zprávy z kontaktního formuláře ve Firestore kolekci `messages`.
// Uložení je primární krok (vzor annanovotna.cz): zpráva se neztratí, ani když
// selže odeslání e-mailu. Správce ji najde v administraci (/admin/messages).

export type Message = ContactFields & {
  id: string; // = leadId
  createdAt: string;
  read: boolean;
  mailSent: boolean;
  mailError?: string;
};

const collection = () => firestore.collection('messages');

function toMessage(doc: FirebaseFirestore.DocumentSnapshot): Message {
  const d = doc.data() as Record<string, unknown>;
  const created = d.createdAt;
  return {
    id: doc.id,
    jmeno: String(d.jmeno ?? ''),
    email: String(d.email ?? ''),
    telefon: String(d.telefon ?? ''),
    web: String(d.web ?? ''),
    zprava: String(d.zprava ?? ''),
    temata: Array.isArray(d.temata) ? (d.temata as unknown[]).map(String) : [],
    formId: String(d.formId ?? ''),
    leadType: (d.leadType as Message['leadType']) ?? 'consultation',
    page: String(d.page ?? ''),
    createdAt: created instanceof Timestamp ? created.toDate().toISOString() : new Date(0).toISOString(),
    read: Boolean(d.read),
    mailSent: Boolean(d.mailSent),
    mailError: typeof d.mailError === 'string' ? d.mailError : undefined,
  };
}

/** Uloží zprávu. Vrací true při úspěchu (chybu jen zaloguje). */
export async function saveMessage(id: string, fields: ContactFields): Promise<boolean> {
  try {
    await collection().doc(id).set({ ...fields, createdAt: Timestamp.now(), read: false, mailSent: false });
    return true;
  } catch (err) {
    console.error('zprávy: uložení selhalo', { id, err });
    return false;
  }
}

export async function markMailResult(id: string, sent: boolean, error?: string): Promise<void> {
  try {
    await collection().doc(id).set({ mailSent: sent, ...(error ? { mailError: error } : {}) }, { merge: true });
  } catch (err) {
    console.error('zprávy: zápis stavu e-mailu selhal', { id, err });
  }
}

export async function listMessages(limit = 200): Promise<Message[]> {
  const snap = await collection().orderBy('createdAt', 'desc').limit(limit).get();
  return snap.docs.map(toMessage);
}

export async function getMessage(id: string): Promise<Message | null> {
  const doc = await collection().doc(id).get();
  return doc.exists ? toMessage(doc) : null;
}

export async function countUnread(): Promise<number> {
  const snap = await collection().where('read', '==', false).count().get();
  return snap.data().count;
}

export async function setRead(id: string, read: boolean): Promise<void> {
  await collection().doc(id).set({ read }, { merge: true });
}

export async function deleteMessage(id: string): Promise<void> {
  await collection().doc(id).delete();
}
