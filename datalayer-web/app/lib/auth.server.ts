import { createCookieSessionStorage, redirect } from 'react-router';
import { getUserById, type User } from './users.server';

const sessionSecret = process.env.SESSION_SECRET || 'dev-secret-change-me';
if (process.env.NODE_ENV === 'production' && sessionSecret === 'dev-secret-change-me') {
  console.warn('VAROVÁNÍ: SESSION_SECRET není nastaven v produkci!');
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'dl_admin_session',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    maxAge: 60 * 60 * 24 * 7, // 7 dní
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: { 'Set-Cookie': await storage.commitSession(session) },
  });
}

export async function getUserId(request: Request): Promise<string | null> {
  const session = await storage.getSession(request.headers.get('Cookie'));
  const userId = session.get('userId');
  return typeof userId === 'string' ? userId : null;
}

/** Vrátí přihlášeného uživatele, jinak přesměruje na login. */
export async function requireUser(request: Request): Promise<User> {
  const userId = await getUserId(request);
  if (userId) {
    const user = await getUserById(userId);
    if (user) return user;
  }
  throw redirect('/admin/login');
}

export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get('Cookie'));
  return redirect('/admin/login', {
    headers: { 'Set-Cookie': await storage.destroySession(session) },
  });
}
