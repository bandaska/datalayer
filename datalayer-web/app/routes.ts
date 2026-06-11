import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'), // /
  route('blog', 'routes/blog._index.tsx'), // /blog
  route('blog/:slug', 'routes/blog.$slug.tsx'), // /blog/<slug>
  route('sluzby', 'routes/services.tsx'), // /sluzby
  route('sluzby/:service', 'routes/services.$service.tsx'), // /sluzby/ga4 atd.
  route('privacy', 'routes/privacy.tsx'), // /privacy

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
    route('users', 'routes/admin.users._index.tsx'),
    route('users/:id/password', 'routes/admin.users.$id.password.tsx'),
    route('account', 'routes/admin.account.tsx'),
  ]),

  route('*', 'routes/$.tsx'), // landing pages z Firestore (catch-all)
] satisfies RouteConfig;
