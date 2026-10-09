import { Link } from 'react-router';
import type { Faq, PageContent } from '~/content/schema';
import type { PageSummary } from '~/lib/cms/pages.server';
import type { ArticleTeaser } from '~/lib/cms/loadPage.server';
import { pushEvent } from '~/lib/dataLayer';
import type { Crumb } from '~/lib/seo';
import { ContactBlock } from '../ContactBlock';
import { HeroDiagram } from '../HeroDiagram';
import { Pi } from '../Pictograms';
import { Blocks } from './Blocks';
import { crumbsFor } from './crumbs';

// Šablona stránky z administrace: hero → trust bar → sekce s bloky → FAQ →
// do hloubky → navazující stránky → kontakt. Všechen obsah přichází z dat
// (kolekce `pages` ve Firestore, výchozí obsah v app/content/defaults).

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  if (!crumbs.length) return null;
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

export function FaqList({ items, title, tone = 'light' }: { items: Faq[]; title?: string; tone?: 'light' | 'dark' }) {
  if (!items.length) return null;
  return (
    <section className={`lp-section lp-section--${tone}`} id="faq">
      <div className="container lp-container">
        <p className="eyebrow">[ FAQ ]</p>
        <h2 className="lp-h2">{title || 'Časté otázky'}</h2>
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

export function RelatedPages({ items, title }: { items: PageSummary[]; title: string }) {
  if (!items.length) return null;
  return (
    <section className="lp-section lp-section--dark" id="navazujici">
      <div className="container lp-container">
        <p className="eyebrow">[ {title} ]</p>
        <h2 className="lp-h2">{title}</h2>
        <div className="lp-related">
          {items.map((i) => (
            <Link key={i.path} to={`/${i.path}`} className="lp-related__item">
              <Pi name={i.pictogram} />
              <span>
                <strong>{i.label}</strong>
                {i.tagline ? <span>{i.tagline}</span> : null}
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

function Cta({ href, label, primary, id }: { href: string; label: string; primary: boolean; id: string }) {
  const cls = primary ? 'btn btn-cta' : 'btn btn-outline-custom';
  const onClick = () => pushEvent('cta_click', { cta_id: id, cta_text: label, section: 'hero' });
  return href.startsWith('/') ? (
    <Link to={href} className={cls} onClick={onClick}>
      [ {label} ]
    </Link>
  ) : (
    <a href={href} className={cls} onClick={onClick}>
      [ {label} ]
    </a>
  );
}

/** H1 s podtrženou částí (homepage). */
function Headline({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, ...rest] = text.split(highlight);
  return (
    <>
      {before}
      <span className="cyan-underline">{highlight}</span>
      {rest.join(highlight)}
    </>
  );
}

function Hero({ page }: { page: PageContent }) {
  const { hero } = page;
  const variant = hero.variant ?? 'pictogram';
  const ctaId = page.contact.formId;
  const ctas =
    hero.primaryCta || hero.secondaryCta ? (
      <div className={variant === 'diagram' ? 'hero-ctas' : 'lp-hero__ctas'}>
        {hero.primaryCta ? <Cta href={hero.primaryCta.href} label={hero.primaryCta.label} primary id={`${ctaId}_hero_primary`} /> : null}
        {hero.secondaryCta ? <Cta href={hero.secondaryCta.href} label={hero.secondaryCta.label} primary={false} id={`${ctaId}_hero_secondary`} /> : null}
      </div>
    ) : null;

  if (variant === 'diagram') {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              {hero.eyebrow ? <p className="eyebrow">{hero.eyebrow}</p> : null}
              <h1 className="hero-heading">
                <Headline text={hero.h1} highlight={hero.h1Highlight} />
              </h1>
              {hero.subtitle ? <p className="hero-sub">{hero.subtitle}</p> : null}
              {ctas}
              {hero.microcopy ? <p className="hero-micro">{hero.microcopy}</p> : null}
            </div>
            <div className="col-lg-7 hero-svg-container">
              <HeroDiagram />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'simple') {
    return (
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <Breadcrumbs crumbs={crumbsFor(page)} />
            {hero.eyebrow ? <p className="eyebrow">[ {hero.eyebrow} ]</p> : null}
            <h1 className="article-title">{hero.h1}</h1>
            {hero.subtitle ? <p className="article-perex">{hero.subtitle}</p> : null}
            {ctas}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="lp-hero">
      <div className="container lp-container">
        <Breadcrumbs crumbs={crumbsFor(page)} />
        <div className="lp-hero__grid">
          <div>
            {hero.eyebrow ? <p className="eyebrow">[ {hero.eyebrow} ]</p> : null}
            <h1 className="lp-hero__h1">{hero.h1}</h1>
            {hero.subtitle ? <p className="lp-hero__sub">{hero.subtitle}</p> : null}
            {hero.quickAnswer ? (
              <div className="lp-quick">
                <span className="lp-quick__label">Rychlá odpověď</span>
                <p dangerouslySetInnerHTML={{ __html: hero.quickAnswer }} />
              </div>
            ) : null}
            {ctas}
            {hero.microcopy ? <p className="lp-hero__micro">{hero.microcopy}</p> : null}
          </div>
          <div className="lp-hero__visual" aria-hidden="true">
            <div className="lp-hero__frame">
              <Pi name={page.pictogram} />
              {hero.eyebrow ? <span className="lp-hero__tag">{hero.eyebrow}</span> : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function LandingPage({
  page,
  existingArticles,
  latest,
  related,
  draft,
  code = {},
}: {
  page: PageContent;
  /** Slugy souvisejících článků, které na blogu opravdu existují. */
  existingArticles: string[];
  latest: ArticleTeaser[];
  related: PageSummary[];
  draft?: boolean;
  /** Obarvené bloky kódu z loaderu (highlight.js na serveru). */
  code?: Record<string, string>;
}) {
  const articles = (page.relatedArticles ?? []).filter((a) => existingArticles.includes(a.slug));
  // Sekce jen s blokem „Články“ zmizí, dokud blog žádné články nemá.
  const sections = page.sections.filter((s) => !(s.blocks.length && s.blocks.every((b) => b.type === 'articles') && latest.length === 0));

  return (
    <>
      {draft ? (
        <div className="draft-banner" role="status">
          Koncept – stránku vidíte jen vy jako přihlášený správce. Zveřejníte ji v administraci.
        </div>
      ) : null}

      <Hero page={page} />

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

      {sections.map((s) => (
        <section key={s.id} id={s.id} className={`lp-section lp-section--${s.tone ?? 'dark'}`}>
          <div className="container lp-container">
            {s.eyebrow ? <p className="eyebrow">[ {s.eyebrow} ]</p> : null}
            {s.title ? <h2 className="lp-h2">{s.title}</h2> : null}
            {s.lead ? <p className="lp-lead" dangerouslySetInnerHTML={{ __html: s.lead }} /> : null}
            <Blocks blocks={s.blocks} sectionId={s.id} ctx={{ latest, code }} />
            {s.note ? <p className="lp-note">{s.note}</p> : null}
          </div>
        </section>
      ))}

      <FaqList items={page.faq} title={page.faqTitle} />
      <RelatedArticles items={articles} />
      <RelatedPages items={related} title={page.kind === 'service' ? 'Navazující služby' : 'Související služby'} />

      {page.contact.enabled !== false ? (
        <ContactBlock
          formId={page.contact.formId}
          title={page.contact.title}
          lead={page.contact.lead}
          placeholder={page.contact.placeholder}
          topics={page.contact.topics}
          leadType={page.contact.leadType}
        />
      ) : null}
    </>
  );
}
