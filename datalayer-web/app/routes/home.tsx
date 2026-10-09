import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { LandingPage } from '~/components/landing/LandingPage';
import { loadPage } from '~/lib/cms/loadPage.server';
import { ogImageOf, pageJsonLd } from '~/lib/landingLd';
import type { RootData } from '~/lib/rootData';
import { seoMeta } from '~/lib/seo';

// Homepage – stránka s prázdnou cestou z administrace (Stránky → Úvod).

export async function loader({ request }: LoaderFunctionArgs) {
  return loadPage(request, '');
}

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  if (!data) return [{ title: 'datalayer.cz' }];
  const root = matches.find((m) => m.id === 'root')?.data as RootData | undefined;
  const { page } = data;
  return seoMeta({
    title: page.seo.title,
    description: page.seo.description,
    path: '/',
    image: ogImageOf(page),
    noindex: page.noindex,
    jsonLd: pageJsonLd(page, root),
  });
};

export default function Home() {
  const data = useLoaderData<typeof loader>();
  return <LandingPage page={data.page} existingArticles={data.existing} latest={data.latest} related={data.related} draft={data.draft} />;
}
