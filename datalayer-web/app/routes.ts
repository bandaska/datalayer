import { type RouteConfig, index, route } from '@react-router/dev/routes';

// Obsahové stránky (služby, řešení, rozcestník, zásady…) i homepage čte web
// z administrace (kolekce `pages`); pevné routy mají jen blog, formulář,
// strojové soubory a administrace. Staré adresy ze stagingu přesměrovává (301)
// kořenový loader (app/lib/redirects.ts).

export default [
  index('routes/home.tsx'), // /
  route('blog', 'routes/blog._index.tsx'), // /blog
  route('blog/:slug', 'routes/blog.$slug.tsx'), // /blog/<slug>
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
    route('pages', 'routes/admin.pages._index.tsx'),
    route('pages/new', 'routes/admin.pages.new.tsx'),
    route('pages/:id', 'routes/admin.pages.$id.tsx'),
    route('navigation', 'routes/admin.navigation.tsx'),
    route('texts', 'routes/admin.texts.tsx'),
    route('articles', 'routes/admin.articles._index.tsx'),
    route('articles/new', 'routes/admin.articles.new.tsx'),
    route('articles/:slug/edit', 'routes/admin.articles.$slug.edit.tsx'),
    route('messages', 'routes/admin.messages._index.tsx'),
    route('messages/:id', 'routes/admin.messages.$id.tsx'),
    route('settings', 'routes/admin.settings.tsx'),
    route('migrations', 'routes/admin.migrations.tsx'),
    route('users', 'routes/admin.users._index.tsx'),
    route('users/:id/password', 'routes/admin.users.$id.password.tsx'),
    route('account', 'routes/admin.account.tsx'),
  ]),

  route('*', 'routes/page.tsx'), // stránky z administrace (catch-all)
] satisfies RouteConfig;
