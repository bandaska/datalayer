import { useEffect, useState } from 'react';
import { Link, useRouteLoaderData } from 'react-router';
import { DEFAULT_TEXTS } from '~/content/defaults/texts';
import type { Block } from '~/content/schema';
import { openConsentSettings } from '~/lib/consent';
import { pushEvent } from '~/lib/dataLayer';
import type { ArticleTeaser } from '~/lib/cms/loadPage.server';
import type { RootData } from '~/lib/rootData';
import { formatDate } from '~/lib/text';
import { typo, typoHtml } from '~/lib/typo';
import { Pi } from '../Pictograms';

// Vykreslení obsahových bloků stránky (schéma v app/content/schema.ts).
// Pole označená ve schématu jako HTML server čistí už při uložení
// z administrace (app/lib/cms/sanitize.server.ts), proto je lze vložit přímo.

/** Data, která bloky potřebují mimo vlastní obsah: nejnovější články, obarvený kód (`kotva-sekce/pořadí-bloku`) a nadpis sekce (popisek tabulky). */
export type BlockContext = { latest: ArticleTeaser[]; code?: Record<string, string>; sectionTitle?: string };

function Html({ as: Tag = 'span', html, className }: { as?: 'span' | 'p' | 'div' | 'li' | 'td' | 'th' | 'small'; html: string; className?: string }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: typoHtml(html) }} />;
}

export function Blocks({ blocks, sectionId, ctx }: { blocks: Block[]; sectionId: string; ctx: BlockContext }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} sectionId={sectionId} index={i} ctx={ctx} />
      ))}
    </>
  );
}

function BlockView({ block, sectionId, index, ctx }: { block: Block; sectionId: string; index: number; ctx: BlockContext }) {
  switch (block.type) {
    case 'paragraphs':
      return (
        <div className="lp-prose">
          {block.items.map((p, i) => (
            <Html as="p" key={i} html={p} />
          ))}
        </div>
      );

    case 'list':
      return (
        <div className="lp-list-wrap">
          {block.title ? <h3 className="lp-h3">{block.title}</h3> : null}
          <ul className={`lp-list lp-list--${block.style ?? 'bullet'}`}>
            {block.items.map((item, i) => (
              <Html as="li" key={i} html={item} />
            ))}
          </ul>
        </div>
      );

    case 'cards':
      return <CardsBlock block={block} sectionId={sectionId} index={index} />;

    case 'steps':
      return <StepsBlock block={block} />;

    case 'table':
      return (
        <div className="lp-table-wrap" role="region" aria-label={block.caption || ctx.sectionTitle || 'Tabulka'} tabIndex={0}>
          <table className="lp-table">
            {block.caption ? <caption>{block.caption}</caption> : null}
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className={block.highlightColumn === i ? 'is-hl' : undefined} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" dangerouslySetInnerHTML={{ __html: cell }} />
                    ) : (
                      <td
                        key={c}
                        className={block.highlightColumn === c ? 'is-hl' : undefined}
                        data-label={plainLabel(block.head[c] ?? '')}
                        dangerouslySetInnerHTML={{ __html: cell }}
                      />
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'flow':
      return (
        <figure className="lp-flow">
          <div className="lp-flow__cols" style={{ ['--cols' as string]: block.columns.length }}>
            {block.columns.map((col, i) => (
              <div className="lp-flow__node" key={i}>
                <span className="lp-flow__label">{col.label}</span>
                <ul>
                  {col.items.map((it, j) => (
                    <Html as="li" key={j} html={it} />
                  ))}
                </ul>
                {col.note ? <p className="lp-flow__note">{col.note}</p> : null}
              </div>
            ))}
          </div>
          <figcaption>{block.caption}</figcaption>
        </figure>
      );

    case 'callout':
      return (
        <div className={`lp-callout lp-callout--${block.tone ?? 'info'}`} role="note">
          {block.tone === 'warn' ? <Pi name="warn" className="lp-callout__pi" /> : null}
          <div>
            {block.title ? <p className="lp-callout__title">{block.title}</p> : null}
            <Html as="div" html={block.text} />
          </div>
        </div>
      );

    case 'code':
      return <CodeBlock lang={block.lang} code={block.code} html={ctx.code?.[`${sectionId}/${index}`]} caption={block.caption} id={`${sectionId}-${index}`} />;

    case 'tabs':
      return <Tabs block={block} />;

    case 'html':
      return <div className="lp-html" dangerouslySetInnerHTML={{ __html: block.html }} />;

    case 'tags':
      return (
        <div className="plat">
          {block.items.map((t, i) =>
            t.href ? (
              <a key={i} href={t.href} onClick={() => pushEvent('cta_click', { cta_id: `${sectionId}_tag_${i}`, cta_text: t.label, section: sectionId })}>
                {t.label}
              </a>
            ) : (
              <span key={i}>{t.label}</span>
            ),
          )}
        </div>
      );

    case 'articles':
      return ctx.latest.length >= (block.minCount ?? 3) ? (
        <div className="art">
          {ctx.latest.slice(0, block.count ?? 3).map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="art__card" onClick={() => pushEvent('cta_click', { cta_id: `article_${a.slug}`, cta_text: a.title, section: sectionId })}>
              <span className="art__date">{formatDate(a.date)}</span>
              <h3>{a.title}</h3>
              <p>{a.perex}</p>
            </Link>
          ))}
        </div>
      ) : null;

    case 'proscons':
      return (
        <div className="lp-pc">
          {(['yes', 'no'] as const).map((k) => (
            <div key={k} className={`lp-pc__col lp-pc--${k}`}>
              <h3>{block[k].title}</h3>
              <ul>
                {block[k].items.map((it, i) => (
                  <li key={i}>
                    <Html html={it.text} />
                    {it.note ? <Html as="small" className="lp-pc__note" html={it.note} /> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case 'figures':
      return (
        <div className="lp-figures-wrap">
          <div className="lp-figures" style={{ ['--n' as string]: block.items.length }}>
            {block.items.map((f, i) => (
              <div className="lp-figure" key={i}>
                <b>{f.value}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
          {block.note ? <Html as="p" className="lp-figures__note" html={block.note} /> : null}
        </div>
      );

    case 'process':
      return <ProcessBlock block={block} />;

    case 'operator':
      return <OperatorBlock title={block.title} />;

    case 'person':
      return <PersonBlock block={block} />;

    case 'menuGrid':
      return <MenuGrid menuId={block.menuId} extraMenuId={block.extraMenuId} extraTitle={block.extraTitle} sectionId={sectionId} />;

    case 'consentSettings':
      return (
        <p>
          <button type="button" className="btn btn-outline-custom" onClick={openConsentSettings}>
            {block.label || 'Změnit nastavení cookies'}
          </button>
        </p>
      );
  }
}

/** Přehled odkazů z menu: sloupce jako v mega-menu, volitelně další menu jako karty. */
function MenuGrid({ menuId, extraMenuId, extraTitle, sectionId }: { menuId: string; extraMenuId?: string; extraTitle?: string; sectionId: string }) {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const menus = (root?.navigation.items ?? []).filter((i) => i.type === 'menu');
  const menu = menus.find((m) => m.id === menuId);
  const extra = extraMenuId ? menus.find((m) => m.id === extraMenuId) : undefined;
  if (!menu || menu.type !== 'menu') return null;
  return (
    <>
      <div className="pipe" style={{ ['--cols' as string]: menu.columns.length }}>
        {menu.columns.map((col, i) => (
          <div className="pipe__col" key={i}>
            {col.title ? (
              <>
                <p className="pipe__step">
                  {String(i + 1).padStart(2, '0')} / {col.title.toLowerCase()}
                </p>
                <h3 className="pipe__title">{col.title}</h3>
              </>
            ) : null}
            {col.items.map((s) => (
              <a className="svc" href={s.href} key={s.href} onClick={() => pushEvent('cta_click', { cta_id: `${sectionId}_${s.href}`, cta_text: s.label, section: sectionId })}>
                {s.pictogram ? <Pi name={s.pictogram} /> : null}
                <span>
                  <strong>{s.label}</strong>
                  {s.tagline ? <span>{s.tagline}</span> : null}
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>
      {extra && extra.type === 'menu' ? (
        <>
          {extraTitle ? <h3 className="lp-h3 mt-5">{extraTitle}</h3> : null}
          <div className="lp-related">
            {extra.columns
              .flatMap((c) => c.items)
              .map((s) => (
                <a key={s.href} href={s.href} className="lp-related__item">
                  {s.pictogram ? <Pi name={s.pictogram} /> : null}
                  <span>
                    <strong>{s.label}</strong>
                    {s.tagline ? <span>{s.tagline}</span> : null}
                  </span>
                </a>
              ))}
          </div>
        </>
      ) : null}
    </>
  );
}

function CodeBlock({ lang, code, html, caption, id }: { lang: string; code: string; html?: string; caption?: string; id: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <figure className="lp-code">
      <div className="lp-code__bar">
        <span className="lp-code__lang">{lang}</span>
        <button
          type="button"
          className="lp-code__copy"
          onClick={() => {
            navigator.clipboard?.writeText(code).then(() => {
              setCopied(true);
              pushEvent('code_copy', { snippet_id: id });
              setTimeout(() => setCopied(false), 2000);
            });
          }}
        >
          {copied ? 'Zkopírováno' : 'Kopírovat'}
        </button>
      </div>
      <pre tabIndex={0}>
        {/* html = kód obarvený na serveru (highlight.js escapuje text, přidá jen <span class="hljs-…">) */}
        {html !== undefined ? <code className="hljs" dangerouslySetInnerHTML={{ __html: html }} /> : <code>{code}</code>}
      </pre>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function Tabs({ block }: { block: Extract<Block, { type: 'tabs' }> }) {
  const [active, setActive] = useState(block.items[0]?.id);
  useEffect(() => {
    // odkaz s kotvou záložky (např. /reseni/e-shopy#shoptet nebo #audit na téže
    // stránce) ji otevře – při načtení i při změně kotvy
    const open = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash && block.items.some((t) => t.id === hash)) setActive(hash);
    };
    open();
    window.addEventListener('hashchange', open);
    return () => window.removeEventListener('hashchange', open);
  }, [block.items]);
  return (
    <div className="lp-tabs">
      <div className="lp-tabs__list" role="tablist">
        {block.items.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${block.group}-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${block.group}-${t.id}`}
            className={active === t.id ? 'lp-tab is-active' : 'lp-tab'}
            onClick={() => {
              setActive(t.id);
              pushEvent('tab_select', { tab_group: block.group, tab: t.id });
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      {block.items.map((t) => (
        <div
          key={t.id}
          id={`panel-${block.group}-${t.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${block.group}-${t.id}`}
          className="lp-tabs__panel"
          hidden={active !== t.id}
        >
          {/* kotva pro odkazy typu /reseni/e-shopy#shoptet */}
          <span id={t.id} className="lp-anchor" />
          {t.paragraphs?.map((p, i) => <Html as="p" key={i} html={p} />)}
          {t.bullets && t.bullets.length ? (
            <ul className="lp-list lp-list--check">
              {t.bullets.map((b, i) => (
                <Html as="li" key={i} html={b} />
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/** Text záhlaví tabulky bez HTML – popisek buňky ve skládaném zobrazení na mobilu. */
function plainLabel(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
}

function CardsBlock({ block, sectionId, index }: { block: Extract<Block, { type: 'cards' }>; sectionId: string; index: number }) {
  const symptoms = block.variant === 'symptoms';
  // na mobilu ukáže symptomy po třech, zbytek po kliknutí (u čtyř a méně karet všechny)
  const collapsible = symptoms && block.items.length > 4;
  const [expanded, setExpanded] = useState(false);
  const cls = ['lp-cards', `lp-cards--${block.columns ?? 3}`, symptoms ? 'lp-cards--symptoms' : '', collapsible && !expanded ? 'is-collapsed' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <>
      <div className={cls}>
        {block.items.map((c, i) => (
          <article className={c.console?.length ? 'lp-card has-console' : 'lp-card'} key={i}>
            {c.console && c.console.length ? (
              <pre className="lp-console" aria-label="Ilustrační ukázka">
                {c.console.map((line, j) => (
                  <span key={j} className={line.trim().startsWith('⚠') ? 'w' : undefined}>
                    {line}
                    {'\n'}
                  </span>
                ))}
              </pre>
            ) : null}
            {c.pictogram || c.tag ? (
              <div className="lp-card__head">
                {c.pictogram ? <Pi name={c.pictogram} className="lp-card__pi" /> : null}
                {c.tag ? (
                  <span className="tag" aria-hidden="true">
                    {c.tag}
                  </span>
                ) : null}
              </div>
            ) : null}
            <h3 className="lp-card__title">{typo(c.title)}</h3>
            {c.text ? <Html as="div" className="lp-card__text" html={c.text} /> : null}
            {c.bullets && c.bullets.length ? (
              <ul className="lp-card__bullets">
                {c.bullets.map((b, j) => (
                  <Html as="li" key={j} html={b} />
                ))}
              </ul>
            ) : null}
            {c.tags && c.tags.length ? (
              <p className="lp-card__tags">
                {c.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </p>
            ) : null}
            {c.link ? (
              <a
                className="lp-card__link"
                href={c.link.href}
                onClick={() => pushEvent('cta_click', { cta_id: `${sectionId}_${index}_${i}`, cta_text: c.link!.label, section: sectionId })}
              >
                {c.link.label}
              </a>
            ) : null}
          </article>
        ))}
      </div>
      {collapsible && !expanded ? (
        <button type="button" className="lp-cards__more" onClick={() => setExpanded(true)}>
          Zobrazit další ({block.items.length - 3})
        </button>
      ) : null}
    </>
  );
}

/** Sloupce mřížky kroků podle počtu, aby nezůstala osiřelá karta (6 → 3 × 2, 8 → 4 × 2). */
function stepColumns(n: number): number {
  if (n <= 5) return n;
  if (n === 6 || n === 9) return 3;
  return 4;
}

function StepsBlock({ block }: { block: Extract<Block, { type: 'steps' }> }) {
  const rows = block.layout === 'rows';
  return (
    <ol className={rows ? 'lp-steps lp-steps--rows' : 'lp-steps'} style={rows ? undefined : { ['--cols' as string]: stepColumns(block.items.length) }}>
      {block.items.map((s, i) => (
        <li className="lp-step" key={i}>
          <span className="lp-step__n">{String(i + 1).padStart(2, '0')}</span>
          <div className="lp-step__main">
            <h3 className="lp-step__title">{s.title}</h3>
            <Html as="p" className="lp-step__text" html={s.text} />
            {s.substeps && s.substeps.length ? (
              <ul className="lp-step__sub">
                {s.substeps.map((t, j) => (
                  <Html as="li" key={j} html={t} />
                ))}
              </ul>
            ) : null}
          </div>
          {s.output || s.fromClient || s.duration ? (
            <div className="lp-step__meta">
              {s.output ? (
                <p className="lp-step__out">
                  <span className="lp-step__label">Výstup:</span> {s.output}
                </p>
              ) : null}
              {s.fromClient ? (
                <p className="lp-step__client">
                  <span className="lp-step__label">Od vás:</span> {s.fromClient}
                </p>
              ) : null}
              {s.duration ? <p className="lp-step__dur">{s.duration}</p> : null}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** Jednotný postup spolupráce z Textů webu; krok 3 (implementace) jde u stránky upravit. */
function ProcessBlock({ block }: { block: Extract<Block, { type: 'process' }> }) {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const proc = root?.texts.process ?? DEFAULT_TEXTS.process;
  const detail = block.detail ?? 'fromClient';
  return (
    <ol className="lp-process">
      {proc.steps.map((st, i) => {
        const own = block.stepOverrides?.[i];
        const text = own?.text || (i === 2 && block.implementation) || st.text;
        const fromClient = own?.fromClient || (i === 2 && block.implementationFromClient) || st.fromClient;
        const extra = detail === 'output' ? st.output : fromClient;
        return (
          <li className="lp-process__step" key={i}>
            <span className="lp-process__n">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="lp-process__title">{st.title}</h3>
            <Html as="p" className="lp-process__text" html={text} />
            {extra ? (
              <span className="lp-process__extra">
                <span className="lp-process__label">{detail === 'output' ? 'Výstup:' : 'Od vás:'}</span> {extra}
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

/** Jméno z kontaktního bloku bez úvodního „Odpovídá“ („Odpovídá Jana Nováková“ → „Jana Nováková“). */
function bareName(name: string): string {
  return name.replace(/^Odpovídá\s+/i, '').trim();
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(-2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}

/** Blok osoby má co ukázat až se jménem a k tomu s fotkou nebo textem o praxi (podklady od klienta). */
export function personReady(block: Extract<Block, { type: 'person' }>, photo?: string, contactName = ''): boolean {
  return Boolean((block.name || bareName(contactName)) && (photo || block.paragraphs?.length));
}

/** Osoba za webem: jméno z bloku (jinak z Textů webu), fotka z Textů webu, praxe a nástroje z bloku, LinkedIn z Nastavení. */
function PersonBlock({ block }: { block: Extract<Block, { type: 'person' }> }) {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const t = root?.texts.contact ?? DEFAULT_TEXTS.contact;
  if (!personReady(block, t.personPhoto, t.personName)) return null;
  const name = block.name || bareName(t.personName);
  return (
    <div className="lp-person">
      {t.personPhoto ? (
        <img className="lp-person__photo" src={t.personPhoto} alt={name} width={160} height={160} loading="lazy" />
      ) : (
        <span className="lp-person__photo" aria-hidden="true">
          {initials(name)}
        </span>
      )}
      <div className="lp-person__body">
        <h3 className="lp-person__name">{name}</h3>
        {block.role ? <p className="lp-person__role">{block.role}</p> : null}
        {block.paragraphs?.map((p, i) => (
          <Html as="p" key={i} html={p} />
        ))}
        {block.facts && block.facts.length ? (
          <p className="lp-card__tags">
            {block.facts.map((f) => (
              <span className="tag" key={f}>
                {f}
              </span>
            ))}
          </p>
        ) : null}
        {root?.linkedinUrl ? (
          <a className="lp-person__link" href={root.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        ) : null}
      </div>
    </div>
  );
}

/** Identifikace provozovatele z Nastavení – bez vyplněného jména se neukáže. */
function OperatorBlock({ title }: { title?: string }) {
  const root = useRouteLoaderData('root') as RootData | undefined;
  const op = root?.operator;
  if (!op?.name) return null;
  return (
    <div className="lp-operator">
      {title ? <h3 className="lp-h3">{title}</h3> : null}
      <dl>
        <dt>Provozovatel</dt>
        <dd>{op.name}</dd>
        {op.id ? (
          <>
            <dt>IČO</dt>
            <dd>{op.id}</dd>
          </>
        ) : null}
        {op.address ? (
          <>
            <dt>Sídlo</dt>
            <dd>{op.address}</dd>
          </>
        ) : null}
        {op.registry ? (
          <>
            <dt>Zápis</dt>
            <dd>{op.registry}</dd>
          </>
        ) : null}
        {root?.email ? (
          <>
            <dt>E-mail</dt>
            <dd>
              <a href={`mailto:${root.email}`}>{root.email}</a>
            </dd>
          </>
        ) : null}
      </dl>
    </div>
  );
}
