import { redirect } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { logout } from '~/lib/auth.server';

export async function action({ request }: ActionFunctionArgs) {
  return logout(request);
}

export async function loader() {
  // Logout jen přes POST; GET přesměruje.
  return redirect('/admin');
}
