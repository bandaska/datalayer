// Data kořenového loaderu (app/root.tsx), která čtou komponenty přes
// useRouteLoaderData('root'): kontakty z administrace, GTM a Turnstile.

export type RootData = {
  gtmId: string;
  phone: string;
  linkedinUrl: string;
  email: string;
  turnstileSiteKey: string;
};
