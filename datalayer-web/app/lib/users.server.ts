import bcrypt from 'bcryptjs';
import { Timestamp } from '@google-cloud/firestore';
import { firestore } from './firestore.server';

// Uživatelé adminu ve Firestore kolekci `users`.

export type Role = 'admin' | 'editor';

export type User = {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt?: string;
};

const collection = () => firestore.collection('users');

function toUser(
  doc: FirebaseFirestore.DocumentSnapshot | FirebaseFirestore.QueryDocumentSnapshot,
): User {
  const d = doc.data() as Record<string, unknown>;
  const created = d.createdAt;
  return {
    id: doc.id,
    email: (d.email as string) ?? '',
    name: (d.name as string) ?? '',
    role: (d.role as Role) ?? 'editor',
    createdAt: created instanceof Timestamp ? created.toDate().toISOString() : undefined,
  };
}

export async function listUsers(): Promise<User[]> {
  const snap = await collection().orderBy('email').get();
  return snap.docs.map(toUser);
}

export async function getUserById(id: string): Promise<User | null> {
  const doc = await collection().doc(id).get();
  return doc.exists ? toUser(doc) : null;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const snap = await collection().where('email', '==', email).limit(1).get();
  return snap.empty ? null : toUser(snap.docs[0]);
}

export async function countUsers(): Promise<number> {
  const snap = await collection().count().get();
  return snap.data().count;
}

export async function createUser(input: {
  email: string;
  name: string;
  password: string;
  role: Role;
}): Promise<User> {
  const email = input.email.trim().toLowerCase();
  if (await getUserByEmail(email)) {
    throw new Error('Uživatel s tímto e-mailem už existuje.');
  }
  const passwordHash = await bcrypt.hash(input.password, 10);
  const ref = await collection().add({
    email,
    name: input.name.trim(),
    role: input.role,
    passwordHash,
    createdAt: Timestamp.now(),
  });
  return toUser(await ref.get());
}

export async function deleteUser(id: string): Promise<void> {
  await collection().doc(id).delete();
}

export async function verifyCredentials(
  email: string,
  password: string,
): Promise<User | null> {
  const snap = await collection()
    .where('email', '==', email.trim().toLowerCase())
    .limit(1)
    .get();
  if (snap.empty) return null;
  const doc = snap.docs[0];
  const hash = (doc.data() as Record<string, unknown>).passwordHash as string | undefined;
  if (!hash) return null;
  const ok = await bcrypt.compare(password, hash);
  return ok ? toUser(doc) : null;
}
