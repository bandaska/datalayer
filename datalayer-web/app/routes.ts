import { type RouteConfig, index, route } from '@react-router/dev/routes';

// Architektura URL: seo-analyza/03_landing-pages/00_architektura-webu.md.
// Staré adresy ze stagingu přesměrovává (301) kořenový loader (app/lib/redirects.ts).

export default [
  index('routes/home.tsx'), // /
  route('sluzby', 'routes/services.tsx'), // /sluzby – rozcestník
  route('sluzby/:slug', 'routes/landing.tsx', { id: 'landing-sluzby' }),
  route('reseni/:slug', 'routes/landing.tsx', { id: 'landing-reseni' }),
  route('jak-pracujeme', 'routes/landing.tsx', { id: 'landing-jak-pracujeme' }),
  route('o-nas', 'routes/landing.tsx', { id: 'landing-o-nas' }),
  route('kontakt', 'routes/landing.tsx', { id: 'landing-kontakt' }),
  route('blog', 'routes/blog._index.tsx'), // /blog
  route('blog/:slug', 'routes/blog.$slug.tsx'), // /blog/<slug>
  route('zpracovani-osobnich-udaju', 'routes/privacy.tsx'),
  route('cookies', 'routes/cookies.tsx'),
  route('dekujeme', 'routes/dekujeme.tsx'), // fallback formuláře bez JS (noindex)

  // --- Strojové soubory a API ---
  route('sitemap.xml', 'routes/sitemap[.]xml.ts'),
  route('robots.txt', 'routes/robots[.]txt.ts'),
  route('llms.txt', 'routes/llms[.]txt.ts'),
  route('api/kontakt', 'routes/api.kontakt.ts'),
  route('migrate', 'routes/migrate.ts'), // migrační URL (token MIGRATION_TOKEN)

  // --- Admin ---
  route('admin/login', 'routes/admin.login.tsx'),
  route('admin/logout', 'routes/admin.logout.tsx'),
  route('admin', 'routes/admin.tsx', [
    index('routes/admin._index.tsx'),
    route('articles', 'routes/admin.articles._index.tsx'),
    route('articles/new', 'routes/admin.articles.new.tsx'),
    route('articles/:slug/edit', 'routes/admin.articles.$slug.edit.tsx'),
    route('pages', 'routes/admin.pages._index.tsx'),
    route('pages/new', 'routes/admin.pages.new.tsx'),
    route('pages/:slug/edit', 'routes/admin.pages.$slug.edit.tsx'),
    route('messages', 'routes/admin.messages._index.tsx'),
    route('messages/:id', 'routes/admin.messages.$id.tsx'),
    route('settings', 'routes/admin.settings.tsx'),
    route('migrations', 'routes/admin.migrations.tsx'),
    route('users', 'routes/admin.users._index.tsx'),
    route('users/:id/password', 'routes/admin.users.$id.password.tsx'),
    route('account', 'routes/admin.account.tsx'),
  ]),

  route('*', 'routes/$.tsx'), // landing pages z Firestore (catch-all)
] satisfies RouteConfig;
