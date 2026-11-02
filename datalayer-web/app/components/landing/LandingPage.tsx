import { Link, useRouteLoaderData } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { Block, Faq, PageContent, Section, SiteTexts } from '~/content/schema';
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

// Šablona stránky z administrace po UX redukci (seo-analyza/2026-10-09_ux-redukce)
// a auditu z 2. listopadu 2026 (seo-analyza/2026-11-02_seo-ux-texty): drobečková
// navigace Úvod / stránka → hero s nadpisem, podtitulem, jedním tlačítkem, případně
// textovým odkazem a kotvami na sekce → sekce s bloky → FAQ → související služby →
// kontakt. Bez nadtitulků. Všechen obsah přichází z dat (kolekce `pages` ve Firestore).

/** Drobečková navigace: Úvod / název stránky (podstránky z administrace i blog). */
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

/** Související služby před kontaktem: dva až tři odkazy, každý s větou o návaznosti (audit G02). */
function RelatedSection({ page, texts }: { page: PageContent; texts: SiteTexts['page'] }) {
  const related = page.related;
  if (!related?.items.length) return null;
  return (
    <section className="lp-section lp-section--light lp-section--white" id="souvisejici">
      <div className="container lp-container">
        <h2 className="lp-h2">{related.title || texts.relatedTitle}</h2>
        <ul className="lp-related-links">
          {related.items.map((r) => (
            <li key={r.href}>
              <Link to={r.href} className="lp-card__link" onClick={() => pushEvent('cta_click', { cta_id: `related_${r.href}`, cta_text: r.label, section: 'souvisejici' })}>
                {r.label}
              </Link>
              {r.text ? <p>{typo(r.text)}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** FAQ ve dvou sloupcích (vlevo nadpis, vpravo otázky). */
function FaqSection({ page, texts }: { page: PageContent; texts: SiteTexts['page'] }) {
  if (!page.faq.length) return null;
  return (
    <section className="lp-section lp-section--light" id="faq">
      <div className="container lp-container lp-faqwrap">
        <div>
          <h2 className="lp-h2">{page.faqTitle || texts.faqTitle}</h2>
        </div>
        <FaqItems items={page.faq} />
      </div>
    </section>
  );
}

function Cta({ href, label, id }: { href: string; label: string; id: string }) {
  const cls = 'btn btn-cta';
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

/** Textový odkaz vedle tlačítka v hero (ne druhé tlačítko). */
function HeroLink({ link, id }: { link: { label: string; href: string }; id: string }) {
  const onClick = () => pushEvent('cta_click', { cta_id: id, cta_text: link.label, section: 'hero' });
  return link.href.startsWith('/') ? (
    <Link to={link.href} className="hero-link" onClick={onClick}>
      {link.label}
    </Link>
  ) : (
    <a href={link.href} className="hero-link" onClick={onClick}>
      {link.label}
    </a>
  );
}

/** Kotvy na sekce pod úvodem stránky služby. */
function Anchors({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="lp-anchors" aria-label="Obsah stránky">
      <ul>
        {items.map((a) => (
          <li key={a.href}>
            <a href={a.href}>{a.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero({ page }: { page: PageContent }) {
  const { hero } = page;
  const variant = hero.variant ?? 'pictogram';
  const cta =
    hero.primaryCta || hero.secondaryLink ? (
      <div className={variant === 'diagram' ? 'hero-ctas' : 'lp-hero__ctas'}>
        {hero.primaryCta ? <Cta href={hero.primaryCta.href} label={hero.primaryCta.label} id={`${page.contact.formId}_hero_primary`} /> : null}
        {hero.secondaryLink ? <HeroLink link={hero.secondaryLink} id={`${page.contact.formId}_hero_link`} /> : null}
      </div>
    ) : null;
  const anchors = hero.anchors?.length ? <Anchors items={hero.anchors} /> : null;
  const crumbs = <Breadcrumbs crumbs={crumbsFor(page)} />;

  if (variant === 'diagram') {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h1 className="hero-heading">
                <Headline text={hero.h1} highlight={hero.h1Highlight} />
              </h1>
              {hero.subtitle ? <p className="hero-sub">{hero.subtitle}</p> : null}
              {cta}
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
      // kompaktní záhlaví kontaktu a právních stránek (audit G06)
      <header className="article-hero article-hero--compact">
        <div className="container">
          <div className="article-container">
            {crumbs}
            <h1 className="article-title">{typo(hero.h1)}</h1>
            {hero.subtitle ? <p className="article-perex">{typo(hero.subtitle)}</p> : null}
            {cta}
            {anchors}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="lp-hero">
      <div className="container lp-container">
        {crumbs}
        <div className="lp-hero__grid">
          <div>
            <h1 className="lp-hero__h1">{typo(hero.h1)}</h1>
            {hero.subtitle ? <p className="lp-hero__sub">{typo(hero.subtitle)}</p> : null}
            {cta}
            {anchors}
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
      {s.title ? <h2 className="lp-h2">{typo(s.title)}</h2> : null}
      {s.lead ? <p className="lp-lead" dangerouslySetInnerHTML={{ __html: typoHtml(s.lead) }} /> : null}
    </>
  );
  const blocks = <Blocks blocks={s.blocks} sectionId={s.id} ctx={{ ...ctx, sectionTitle: s.title }} />;
  return (
    <section id={s.id} className={cls}>
      {s.layout === 'split' ? (
        <div className="container lp-container lp-split">
          <div className="lp-split__text">{head}</div>
          <div className="lp-split__body">{blocks}</div>
        </div>
      ) : (
        <div className="container lp-container">
          {head}
          {blocks}
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
  latest,
  draft,
  code = {},
}: {
  page: PageContent;
  latest: ArticleTeaser[];
  draft?: boolean;
  /** Obarvené bloky kódu z loaderu (highlight.js na serveru). */
  code?: Record<string, string>;
}) {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const texts = root?.texts.page ?? DEFAULT_TEXTS.page;
  const contactTexts = root?.texts.contact ?? DEFAULT_TEXTS.contact;
  const sections = page.sections.filter((s) =>
    visibleSection(s, { articles: latest.length, operator: Boolean(root?.operator?.name), photo: contactTexts.personPhoto, contactName: contactTexts.personName }),
  );
  const ctx: BlockContext = { latest, code };
  const contactTop = page.contact.position === 'top';
  const contact =
    page.contact.enabled !== false ? (
      <ContactBlock
        formId={page.contact.formId}
        title={page.contact.title}
        lead={page.contact.lead}
        placeholder={page.contact.placeholder}
        leadType={page.contact.leadType}
        // formulář hned pod úvodem (stránka Kontakt): nadpis a úvod by opakovaly H1 a perex
        hideIntro={contactTop}
      />
    ) : null;

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

      <FaqSection page={page} texts={texts} />
      <RelatedSection page={page} texts={texts} />

      {contactTop ? null : contact}
    </>
  );
}
