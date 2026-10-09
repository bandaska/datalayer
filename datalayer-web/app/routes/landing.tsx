import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { LandingPage } from '~/components/landing/LandingPage';
import { loadLanding } from '~/lib/landing.server';
import { landingJsonLd, ogImageFor } from '~/lib/landingLd';
import { seoMeta } from '~/lib/seo';

// Obsahové stránky z registru (app/content/pages): služby /sluzby/*, řešení
// /reseni/*, /jak-pracujeme, /o-nas, /kontakt. Obsah se načítá na serveru
// a do prohlížeče jdou jen data jedné stránky.

export const handle = { hasContact: true };

export async function loader({ request }: LoaderFunctionArgs) {
  return loadLanding(new URL(request.url).pathname);
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Stránka nenalezena | datalayer.cz' }];
  const { page } = data;
  return seoMeta({
    title: page.seo.title,
    description: page.seo.description,
    path: `/${page.path}`,
    image: ogImageFor(page.path),
    jsonLd: landingJsonLd(page),
  });
};

export default function LandingRoute() {
  const { page, existing } = useLoaderData<typeof loader>();
  return <LandingPage page={page} existingArticles={existing} />;
}
