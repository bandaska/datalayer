import type { ReactNode } from 'react';
import { Link } from 'react-router';
import type { Faq, LandingPageContent } from '~/content/types';
import { menuItem } from '~/content/menu';
import { pushEvent } from '~/lib/dataLayer';
import type { Crumb } from '~/lib/seo';
import { ContactBlock } from '../ContactBlock';
import { Pi } from '../Pictograms';
import { Blocks } from './Blocks';
import { crumbsFor } from './crumbs';

// Šablona landing page (architektura webu, kap. 4): hero → trust bar →
// sekce → (doplněk, např. rozcestník služeb) → FAQ → do hloubky → navazující
// služby → kontakt.

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Drobečková navigace">
      <ol>
        {crumbs.map((c, i) => (
          <li key={c.path}>
            {i < crumbs.length - 1 ? <Link to={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ items, title = 'Časté otázky', tone = 'light' }: { items: Faq[]; title?: string; tone?: 'light' | 'dark' }) {
  if (!items.length) return null;
  return (
    <section className={`lp-section lp-section--${tone}`} id="faq">
      <div className="container lp-container">
        <p className="eyebrow">[ FAQ ]</p>
        <h2 className="lp-h2">{title}</h2>
        <div className="faq">
          {items.map((f, i) => (
            <details
              key={i}
              onToggle={(e) => {
                if ((e.currentTarget as HTMLDetailsElement).open) pushEvent('faq_open', { question: f.q });
              }}
            >
              <summary>{f.q}</summary>
              <div className="faq__a" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedPages({ paths, title = 'Navazující služby' }: { paths: string[]; title?: string }) {
  const items = paths.map((p) => menuItem(p)).filter((i): i is NonNullable<typeof i> => Boolean(i));
  if (!items.length) return null;
  return (
    <section className="lp-section lp-section--dark" id="navazujici">
      <div className="container lp-container">
        <p className="eyebrow">[ Navazující služby ]</p>
        <h2 className="lp-h2">{title}</h2>
        <div className="lp-related">
          {items.map((i) => (
            <Link key={i.path} to={i.path} className="lp-related__item">
              <Pi name={i.pictogram} />
              <span>
                <strong>{i.label}</strong>
                <span>{i.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedArticles({ items }: { items: { slug: string; title: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="lp-section lp-section--light" id="do-hloubky">
      <div className="container lp-container">
        <p className="eyebrow">[ Do hloubky ]</p>
        <h2 className="lp-h2">Články k tématu</h2>
        <ul className="lp-articles">
          {items.map((a) => (
            <li key={a.slug}>
              <Link to={`/blog/${a.slug}`}>{a.title} →</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LandingPage({
  page,
  existingArticles,
  afterIntro,
}: {
  page: LandingPageContent;
  /** Slugy článků, které na blogu opravdu existují. */
  existingArticles: string[];
  /** Doplněk za trust bar (např. mřížka služeb na rozcestníku). */
  afterIntro?: ReactNode;
}) {
  const { hero } = page;
  const articles = (page.relatedArticles ?? []).filter((a) => existingArticles.includes(a.slug));

  return (
    <>
      <header className="lp-hero">
        <div className="container lp-container">
          <Breadcrumbs crumbs={crumbsFor(page)} />
          <div className="lp-hero__grid">
            <div>
              <p className="eyebrow">[ {hero.eyebrow} ]</p>
              <h1 className="lp-hero__h1">{hero.h1}</h1>
              <p className="lp-hero__sub">{hero.subtitle}</p>
              {hero.quickAnswer ? (
                <div className="lp-quick">
                  <span className="lp-quick__label">Rychlá odpověď</span>
                  <p dangerouslySetInnerHTML={{ __html: hero.quickAnswer }} />
                </div>
              ) : null}
              <div className="lp-hero__ctas">
                <a
                  href={hero.primaryCta.href}
                  className="btn btn-cta"
                  onClick={() => pushEvent('cta_click', { cta_id: `${page.contact.formId}_hero_primary`, cta_text: hero.primaryCta.label, section: 'hero' })}
                >
                  [ {hero.primaryCta.label} ]
                </a>
                {hero.secondaryCta ? (
                  <a
                    href={hero.secondaryCta.href}
                    className="btn btn-outline-custom"
                    onClick={() => pushEvent('cta_click', { cta_id: `${page.contact.formId}_hero_secondary`, cta_text: hero.secondaryCta!.label, section: 'hero' })}
                  >
                    [ {hero.secondaryCta.label} ]
                  </a>
                ) : null}
              </div>
              {hero.microcopy ? <p className="lp-hero__micro">{hero.microcopy}</p> : null}
            </div>
            <div className="lp-hero__visual" aria-hidden="true">
              <div className="lp-hero__frame">
                <Pi name={page.pictogram} />
                <span className="lp-hero__tag">{hero.eyebrow}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {page.trust && page.trust.length ? (
        <div className="lp-trust">
          <div className="container lp-container">
            <ul>
              {page.trust.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {afterIntro}

      {page.sections.map((s) => (
        <section key={s.id} id={s.id} className={`lp-section lp-section--${s.tone ?? 'dark'}`}>
          <div className="container lp-container">
            {s.eyebrow ? <p className="eyebrow">[ {s.eyebrow} ]</p> : null}
            <h2 className="lp-h2">{s.title}</h2>
            {s.lead ? <p className="lp-lead" dangerouslySetInnerHTML={{ __html: s.lead }} /> : null}
            <Blocks blocks={s.blocks} sectionId={s.id} />
          </div>
        </section>
      ))}

      <FaqList items={page.faq} />
      <RelatedArticles items={articles} />
      <RelatedPages paths={page.relatedPages ?? []} title={page.kind === 'service' ? 'Navazující služby' : 'Související služby'} />

      <ContactBlock
        formId={page.contact.formId}
        title={page.contact.title}
        lead={page.contact.lead}
        placeholder={page.contact.placeholder}
        topics={page.contact.topics}
        leadType={page.contact.leadType}
      />
    </>
  );
}
