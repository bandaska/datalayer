import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'), // /
  route('blog', 'routes/blog._index.tsx'), // /blog
  route('blog/:slug', 'routes/blog.$slug.tsx'), // /blog/<slug>
  route('sluzby', 'routes/services.tsx'), // /sluzby
  route('sluzby/:service', 'routes/services.$service.tsx'), // /sluzby/ga4 atd.
  route('privacy', 'routes/privacy.tsx'), // /privacy
  route('*', 'routes/$.tsx'), // landing pages z Firestore (catch-all)
] satisfies RouteConfig;
