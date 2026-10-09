import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { getPageBySlug } from '~/lib/pages.server';
import { cleanHtml } from '~/lib/sanitize.server';
import { ArticleContent } from '~/components/ArticleContent';
import { ContactBlock } from '~/components/ContactBlock';
import { Breadcrumbs } from '~/components/landing/LandingPage';
import { breadcrumbLd, seoMeta } from '~/lib/seo';
import { perex } from '~/lib/text';

// Catch-all route pro landing pages uložené v kolekci `pages` (administrace).
// Zachytí cesty, které neodpovídají žádné konkrétní routě (/, /blog, /sluzby…),
// a zkusí je najít ve Firestore. Pokud neexistují → 404 (ErrorBoundary).

export const handle = { hasContact: true };

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Stránka nenalezena | datalayer.cz' }];
  const path = `/${data.page.slug}`;
  return seoMeta({
    title: `${data.page.title} | datalayer.cz`,
    description: data.page.perex || perex(data.page.content, 155),
    path,
    jsonLd: breadcrumbLd([
      { name: 'Úvod', path: '/' },
      { name: data.page.title, path },
    ]),
  });
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params['*'] ?? '';
  const page = await getPageBySlug(slug);
  if (!page) {
    throw new Response('Stránka nenalezena', { status: 404 });
  }
  return { page: { ...page, content: cleanHtml(page.content) } };
}

export default function LandingPage() {
  const { page } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <Breadcrumbs
              crumbs={[
                { name: 'Úvod', path: '/' },
                { name: page.title, path: `/${page.slug}` },
              ]}
            />
            <h1 className="article-title">{page.title}</h1>
            {page.perex ? <p className="article-perex">{page.perex}</p> : null}
          </div>
        </div>
      </header>
      <section className="article-content">
        <div className="container article-container">
          <div className="article-body-db">
            <ArticleContent html={page.content} />
          </div>
        </div>
      </section>
      <ContactBlock formId={`cms-${page.slug.replace(/[^a-z0-9-]/g, '-').slice(0, 30)}`} title="Napište nám, nebo rovnou zavolejte" />
    </>
  );
}
