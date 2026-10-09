import { Link, useLoaderData } from 'react-router';
import type { MetaFunction } from 'react-router';
import { SERVICE_GROUPS, SOLUTIONS } from '~/content/menu';
import { LandingPage } from '~/components/landing/LandingPage';
import { Pi } from '~/components/Pictograms';
import { seoMeta } from '~/lib/seo';
import { loadLanding } from '~/lib/landing.server';
import { landingJsonLd, ogImageFor } from '~/lib/landingLd';

// /sluzby – rozcestník služeb: obsah stránky `sluzby` z registru + mřížka
// všech služeb ve třech vrstvách (sběr → data → audity) a řešení podle segmentu.

export const handle = { hasContact: true };

export async function loader() {
  return loadLanding('sluzby');
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: 'Služby | datalayer.cz' }];
  const { page } = data;
  return seoMeta({
    title: page.seo.title,
    description: page.seo.description,
    path: '/sluzby',
    image: ogImageFor('sluzby'),
    jsonLd: landingJsonLd(page),
  });
};

export function ServiceGrid() {
  return (
    <section className="lp-section lp-section--dark" id="prehled-sluzeb">
      <div className="container lp-container">
        <p className="eyebrow">[ Přehled služeb ]</p>
        <h2 className="lp-h2">Jedenáct služeb ve třech vrstvách</h2>
        <div className="pipe">
          {SERVICE_GROUPS.map((g, i) => (
            <div className="pipe__col" key={g.id}>
              <p className="pipe__step">0{i + 1} / {g.label.toLowerCase()}</p>
              <h3 className="pipe__title">{g.label}</h3>
              {g.items.map((s) => (
                <Link className="svc" to={s.path} key={s.path}>
                  <Pi name={s.pictogram} />
                  <span>
                    <strong>{s.label}</strong>
                    <span>{s.tagline}</span>
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <h3 className="lp-h3 mt-5">Řešení podle typu firmy</h3>
        <div className="lp-related">
          {SOLUTIONS.map((s) => (
            <Link key={s.path} to={s.path} className="lp-related__item">
              <Pi name={s.pictogram} />
              <span>
                <strong>{s.label}</strong>
                <span>{s.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesHub() {
  const { page, existing } = useLoaderData<typeof loader>();
  return <LandingPage page={page} existingArticles={existing} afterIntro={<ServiceGrid />} />;
}
