import { Link, useRouteLoaderData } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { Block, Faq, PageContent, Pictogram, Section, SiteTexts } from '~/content/schema';
import type { PageSummary } from '~/lib/cms/pages.server';
import type { ArticleTeaser } from '~/lib/cms/loadPage.server';
import { pushEvent } from '~/lib/dataLayer';
import type { RootData } from '~/lib/rootData';
import type { Crumb } from '~/lib/seo';
import { ContactBlock } from '../ContactBlock';
import { HeroDiagram } from '../HeroDiagram';
import { Pi } from '../Pictograms';
import { Blocks, personReady, type BlockContext } from './Blocks';
import { crumbsFor } from './crumbs';
import { typo, typoHtml } from '~/lib/typo';

// Šablona stránky z administrace (štíhlá LP podle vyhodnocení webu, prototyp
// seo-analyza/prototyp/): hero s jedním úvodem a body důvěry → sekce s bloky →
// FAQ se sbalenými Technickými detaily → pruh „Pokračujte“ (stránky a články)
// → kontakt. Všechen obsah přichází z dat (kolekce `pages` ve Firestore).

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

function FaqItems({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details
          key={i}
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) pushEvent('faq_open', { question: f.q });
          }}
        >
          <summary>{typo(f.q)}</summary>
          <div className="faq__a" dangerouslySetInnerHTML={{ __html: typoHtml(f.a) }} />
        </details>
      ))}
    </div>
  );
}

/** FAQ ve dvou sloupcích (vlevo nadpis a sbalené Technické detaily, vpravo otázky). */
function FaqSection({ page, texts, ctx }: { page: PageContent; texts: SiteTexts['page']; ctx: BlockContext }) {
  const tech = page.techDetails;
  if (!page.faq.length && !tech) return null;
  const details = tech ? (
    <details className="lp-tech" id="technicke-detaily">
      <summary>
        <span className="lp-tech__label">Technické detaily</span>
        {/* štítek dodá šablona – předponu „Technické detaily:“ v textu (starší obsah) vynechá */}
        {tech.summary.replace(/^Technické detaily\s*[:–-]\s*/i, '')}
      </summary>
      <div className="lp-tech__in">
        <Blocks blocks={tech.blocks} sectionId="technicke-detaily" ctx={ctx} />
      </div>
    </details>
  ) : null;
  if (!page.faq.length) {
    return (
      <section className="lp-section lp-section--light">
        <div className="container lp-container">{details}</div>
      </section>
    );
  }
  return (
    <section className="lp-section lp-section--light" id="faq">
      <div className="container lp-container lp-faqwrap">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="lp-h2">{page.faqTitle || texts.faqTitle}</h2>
          {page.contact.enabled !== false && texts.faqLead ? <p className="lp-lead" dangerouslySetInnerHTML={{ __html: texts.faqLead }} /> : null}
          {details}
        </div>
        <FaqItems items={page.faq} />
      </div>
    </section>
  );
}

/** Pruh „Pokračujte“: navazující stránky a články k tématu v jednom řádku. */
function ContinueStrip({ pages, articles, label, pictogram }: { pages: PageSummary[]; articles: { slug: string; title: string }[]; label: string; pictogram: Pictogram }) {
  if (!pages.length && !articles.length) return null;
  return (
    <section className="lp-section lp-section--light lp-section--white lp-section--strip" id="navazujici">
      <div className="container lp-container">
        <p className="eyebrow">{label}</p>
        <div className="lp-strip">
          {pages.map((p) => (
            <Link key={p.path} to={`/${p.path}`} className="lp-rel" onClick={() => pushEvent('cta_click', { cta_id: `related_${p.path}`, cta_text: p.label, section: 'navazujici' })}>
              <Pi name={p.pictogram} />
              <span>
                <strong>{p.label}</strong>
                {p.tagline ? <span>{p.tagline}</span> : null}
              </span>
            </Link>
          ))}
          {articles.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="lp-rel" onClick={() => pushEvent('cta_click', { cta_id: `article_${a.slug}`, cta_text: a.title, section: 'navazujici' })}>
              <Pi name={pictogram} />
              <span>
                <strong>{a.title}</strong>
                <span>článek</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta({ href, label, primary, id }: { href: string; label: string; primary: boolean; id: string }) {
  const cls = primary ? 'btn btn-cta' : 'btn btn-outline-custom';
  const onClick = () => pushEvent('cta_click', { cta_id: id, cta_text: label, section: 'hero' });
  return href.startsWith('/') ? (
    <Link to={href} className={cls} onClick={onClick}>
      {label}
    </Link>
  ) : (
    <a href={href} className={cls} onClick={onClick}>
      {label}
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
  const trust = page.trust?.length ? (
    <ul className="lp-hero__trust">
      {page.trust.slice(0, 3).map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  ) : null;
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
            {hero.eyebrow ? <p className="eyebrow">{hero.eyebrow}</p> : null}
            <h1 className="article-title">{typo(hero.h1)}</h1>
            {hero.subtitle ? <p className="article-perex">{typo(hero.subtitle)}</p> : null}
            {ctas}
            {trust}
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
            {hero.eyebrow ? <p className="eyebrow">{hero.eyebrow}</p> : null}
            <h1 className="lp-hero__h1">{typo(hero.h1)}</h1>
            {/* jeden úvodní odstavec = rychlá odpověď (box „Rychlá odpověď“ šablona už nemá) */}
            {hero.subtitle ? <p className="lp-hero__sub">{typo(hero.subtitle)}</p> : null}
            {ctas}
            {hero.microcopy ? <p className="lp-hero__micro">{hero.microcopy}</p> : null}
            {trust}
          </div>
          <div className="lp-hero__visual" aria-hidden="true">
            <div className="lp-hero__frame">
              <Pi name={page.pictogram} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SectionView({ s, ctx }: { s: Section; ctx: BlockContext }) {
  const tone = s.tone ?? 'dark';
  // bílé pozadí přebírá styly světlých sekcí
  const cls = `lp-section lp-section--${tone === 'white' ? 'light lp-section--white' : tone}${s.layout === 'split' ? ' lp-section--split' : ''}`;
  const head = (
    <>
      {s.eyebrow ? <p className="eyebrow">{s.eyebrow}</p> : null}
      {s.title ? <h2 className="lp-h2">{typo(s.title)}</h2> : null}
      {s.lead ? <p className="lp-lead" dangerouslySetInnerHTML={{ __html: typoHtml(s.lead) }} /> : null}
    </>
  );
  const blocks = <Blocks blocks={s.blocks} sectionId={s.id} ctx={{ ...ctx, sectionTitle: s.title }} />;
  const note = s.note ? <p className="lp-note">{s.note}</p> : null;
  return (
    <section id={s.id} className={cls}>
      {s.layout === 'split' ? (
        <div className="container lp-container lp-split">
          <div className="lp-split__text">
            {head}
            {note}
          </div>
          <div className="lp-split__body">{blocks}</div>
        </div>
      ) : (
        <div className="container lp-container">
          {head}
          {blocks}
          {note}
        </div>
      )}
    </section>
  );
}

/**
 * Blok, který by se nevykreslil: články, dokud jich blog nemá dost, provozovatel
 * bez vyplněného jména v Nastavení, osoba bez jména nebo bez fotky i textu o praxi.
 */
type BlockEnv = { articles: number; operator: boolean; photo?: string; contactName?: string };

function emptyBlock(b: Block, env: BlockEnv): boolean {
  if (b.type === 'articles') return env.articles < (b.minCount ?? 3);
  if (b.type === 'operator') return !env.operator;
  if (b.type === 'person') return !personReady(b, env.photo, env.contactName);
  return false;
}

/** Skrytá sekce a sekce, ve které by žádný blok nic neukázal, se na webu nevykreslí. */
function visibleSection(s: Section, env: BlockEnv): boolean {
  if (s.hidden) return false;
  return !(s.blocks.length > 0 && s.blocks.every((b) => emptyBlock(b, env)));
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
  const root = useRouteLoaderData('root') as RootData | undefined;
  const texts = root?.texts.page ?? DEFAULT_TEXTS.page;
  const articles = (page.relatedArticles ?? []).filter((a) => existingArticles.includes(a.slug));
  const contactTexts = root?.texts.contact ?? DEFAULT_TEXTS.contact;
  const sections = page.sections.filter((s) =>
    visibleSection(s, { articles: latest.length, operator: Boolean(root?.operator?.name), photo: contactTexts.personPhoto, contactName: contactTexts.personName }),
  );
  const ctx: BlockContext = { latest, code };
  const contact =
    page.contact.enabled !== false ? (
      <ContactBlock
        formId={page.contact.formId}
        title={page.contact.title}
        lead={page.contact.lead}
        placeholder={page.contact.placeholder}
        topics={page.contact.topics}
        leadType={page.contact.leadType}
      />
    ) : null;
  const contactTop = page.contact.position === 'top';

  return (
    <>
      {draft ? (
        <div className="draft-banner" role="status">
          Koncept – stránku vidíte jen vy jako přihlášený správce. Zveřejníte ji v administraci.
        </div>
      ) : null}

      <Hero page={page} />
      {contactTop ? contact : null}

      {sections.map((s) => (
        <SectionView key={s.id} s={s} ctx={ctx} />
      ))}

      <FaqSection page={page} texts={texts} ctx={ctx} />
      <ContinueStrip pages={related} articles={articles} label={texts.continueLabel} pictogram={page.pictogram} />

      {contactTop ? null : contact}
    </>
  );
}
