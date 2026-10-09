import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { LandingPage } from '~/components/landing/LandingPage';
import { pathSchema } from '~/content/schema';
import { loadPage } from '~/lib/cms/loadPage.server';
import { ogImageOf, pageJsonLd } from '~/lib/landingLd';
import type { RootData } from '~/lib/rootData';
import { seoMeta } from '~/lib/seo';

// Všechny stránky z administrace (Stránky): služby, řešení, rozcestník,
// jak pracujeme, o nás, kontakt, zásady i stránky založené později.
// Cesta = URL bez úvodního lomítka; neexistující stránka vrací 404.

export async function loader({ request }: LoaderFunctionArgs) {
  const path = decodeURIComponent(new URL(request.url).pathname).replace(/^\/+|\/+$/g, '');
  if (!path || !pathSchema.safeParse(path).success) throw new Response('Stránka nenalezena', { status: 404 });
  return loadPage(request, path);
}

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  if (!data) return [{ title: 'Stránka nenalezena | datalayer.cz' }];
  const root = matches.find((m) => m.id === 'root')?.data as RootData | undefined;
  const { page } = data;
  return seoMeta({
    title: page.seo.title,
    description: page.seo.description,
    path: `/${page.path}`,
    image: ogImageOf(page),
    noindex: page.noindex || data.draft,
    jsonLd: pageJsonLd(page, root),
  });
};

export default function PageRoute() {
  const data = useLoaderData<typeof loader>();
  return <LandingPage page={data.page} existingArticles={data.existing} latest={data.latest} related={data.related} draft={data.draft} code={data.code} />;
}
