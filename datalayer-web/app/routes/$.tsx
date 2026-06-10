import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { getPageBySlug } from '~/lib/pages.server';
import { cleanHtml } from '~/lib/sanitize.server';
import { ArticleContent } from '~/components/ArticleContent';

// Catch-all route pro landing pages uložené v kolekci `pages`.
// Zachytí cesty, které neodpovídají žádné konkrétní routě (/, /blog, /sluzby…),
// a zkusí je najít ve Firestore. Pokud neexistují → 404 (ErrorBoundary).

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Stránka nenalezena | datalayer.cz' }];
  return [
    { title: `${data.page.title} | datalayer.cz` },
    ...(data.page.perex ? [{ name: 'description', content: data.page.perex }] : []),
  ];
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
    </>
  );
}
