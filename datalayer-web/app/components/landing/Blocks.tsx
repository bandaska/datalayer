import { useEffect, useState } from 'react';
import { Link, useRouteLoaderData } from 'react-router';
import type { Block } from '~/content/schema';
import { openConsentSettings } from '~/lib/consent';
import { pushEvent } from '~/lib/dataLayer';
import type { ArticleTeaser } from '~/lib/cms/loadPage.server';
import type { RootData } from '~/lib/rootData';
import { formatDate } from '~/lib/text';
import { Pi } from '../Pictograms';

// Vykreslení obsahových bloků stránky (schéma v app/content/schema.ts).
// Pole označená ve schématu jako HTML server čistí už při uložení
// z administrace (app/lib/cms/sanitize.server.ts), proto je lze vložit přímo.

/** Data, která bloky potřebují mimo vlastní obsah: nejnovější články a obarvený kód (`kotva-sekce/pořadí-bloku`). */
export type BlockContext = { latest: ArticleTeaser[]; code?: Record<string, string> };

function Html({ as: Tag = 'span', html, className }: { as?: 'span' | 'p' | 'div' | 'li' | 'td' | 'th'; html: string; className?: string }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
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
      return (
        <div className={`lp-cards lp-cards--${block.columns ?? 3}`}>
          {block.items.map((c, i) => (
            <article className="lp-card" key={i}>
              {c.console && c.console.length ? (
                <pre className="lp-console" aria-label="Ilustrativní ukázka">
                  {c.console.map((line, j) => (
                    <span key={j} className={line.trim().startsWith('⚠') ? 'w' : undefined}>
                      {line}
                      {'\n'}
                    </span>
                  ))}
                </pre>
              ) : null}
              {c.pictogram ? <Pi name={c.pictogram} className="lp-card__pi" /> : null}
              {c.tag ? <span className="tag">{c.tag}</span> : null}
              <h3 className="lp-card__title">{c.title}</h3>
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
                  {c.link.label} →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      );

    case 'steps':
      return (
        <ol className="lp-steps">
          {block.items.map((s, i) => (
            <li className="lp-step" key={i}>
              <span className="lp-step__n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="lp-step__title">{s.title}</h3>
              <Html as="p" className="lp-step__text" html={s.text} />
              {s.output ? (
                <p className="lp-step__out">
                  <span className="lp-step__label">výstup:</span> {s.output}
                </p>
              ) : null}
              {s.fromClient ? (
                <p className="lp-step__client">
                  <span className="lp-step__label">od vás:</span> {s.fromClient}
                </p>
              ) : null}
              {s.duration ? <p className="lp-step__dur">{s.duration}</p> : null}
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div className="lp-table-wrap" role="region" aria-label={block.caption ?? 'Tabulka'} tabIndex={0}>
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
                      <td key={c} className={block.highlightColumn === c ? 'is-hl' : undefined} dangerouslySetInnerHTML={{ __html: cell }} />
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
        <aside className={`lp-callout lp-callout--${block.tone ?? 'info'}`}>
          {block.tone === 'warn' ? <Pi name="warn" className="lp-callout__pi" /> : null}
          <div>
            {block.title ? <p className="lp-callout__title">{block.title}</p> : null}
            <Html as="div" html={block.text} />
          </div>
        </aside>
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
      return ctx.latest.length ? (
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

    case 'menuGrid':
      return <MenuGrid menuId={block.menuId} extraMenuId={block.extraMenuId} extraTitle={block.extraTitle} sectionId={sectionId} />;

    case 'consentSettings':
      return (
        <p>
          <button type="button" className="btn btn-outline-custom" onClick={openConsentSettings}>
            [ {block.label || 'Změnit nastavení cookies'} ]
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
      <pre>
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
