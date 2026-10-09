import { useEffect, useMemo, useRef, useState } from 'react';
import { Form, useFetcher } from 'react-router';
import { BLOCK_TYPES, TOPIC_VALUES, type Block, type BlockType, type PageContent, type PageKind, type Section } from '~/content/schema';
import { TOPICS } from '~/lib/contact';
import { checkPage } from '~/lib/textRules';
import { BLOCK_HELP, BLOCK_LABELS, BlockEditor, blockSummary, newBlock, type EditorOptions } from './BlockEditor';
import { CheckGrid, LinesInput, LinkInput, ListEditor, PictogramPicker, Select, TextArea, TextInput, Toggle, short } from './fields';
import { Card, Pill, formatDateTime, plural } from './ui';

// Editor stránky webu. Celý obsah drží jako jeden objekt (schéma
// app/content/schema.ts) a ukládá ho jako JSON; server ho zvaliduje, vyčistí
// HTML a uloží do Firestore (kolekce `pages`).

export type PageOption = { path: string; label: string; kind: PageKind; published: boolean };

type SaveResult = { ok: true; savedAt: string } | { ok: false; message: string; issues?: { path: string; message: string }[] };

const KIND_LABELS: Record<PageKind, string> = {
  home: 'Homepage',
  service: 'Služba',
  solution: 'Řešení',
  page: 'Stránka',
  legal: 'Zásady / právní text',
};

const TONES = [
  { value: 'dark', label: 'Tmavé pozadí' },
  { value: 'light', label: 'Světlé pozadí' },
  { value: 'deep', label: 'Tmavě modré pozadí' },
] as const;

const LABELS: Record<string, string> = {
  sections: 'Sekce',
  blocks: 'blok',
  items: 'položka',
  columns: 'sloupec',
  rows: 'řádek',
  head: 'záhlaví',
  faq: 'FAQ',
  hero: 'Hero',
  seo: 'SEO',
  contact: 'Kontakt',
  schema: 'Strukturovaná data',
  trust: 'Pruh faktů',
  title: 'nadpis',
  text: 'text',
  label: 'text',
  href: 'adresa',
  id: 'kotva',
  q: 'otázka',
  a: 'odpověď',
  h1: 'nadpis H1',
  subtitle: 'podtitul',
  eyebrow: 'štítek',
  description: 'description',
  navTitle: 'Krátký název',
  tagline: 'Řádek „co to řeší“',
  primaryCta: 'hlavní tlačítko',
  secondaryCta: 'druhé tlačítko',
  formId: 'ID formuláře',
  placeholder: 'nápověda v poli zprávy',
  html: 'volný text',
  path: 'Adresa',
};

/** „sections.2.blocks.0.items.1.title“ → „Sekce 3 › blok 1 › položka 2 › nadpis“ */
export function humanPath(path: string): string {
  return path
    .split('.')
    .map((p) => (/^\d+$/.test(p) ? String(Number(p) + 1) : LABELS[p] ?? p))
    .join(' ')
    .replace(/ (\d+)/g, ' $1 ›')
    .replace(/›\s*$/, '')
    .trim();
}

export function PageEditor({
  initial,
  meta,
  pages,
  articles,
  options,
}: {
  initial: PageContent;
  meta: { source: 'firestore' | 'legacy' | 'default'; updatedAt?: string; updatedBy?: string };
  pages: PageOption[];
  articles: { slug: string; title: string }[];
  options: EditorOptions;
}) {
  const [page, setPage] = useState<PageContent>(initial);
  const [savedJson, setSavedJson] = useState(() => JSON.stringify(initial));
  const [tab, setTab] = useState<'obsah' | 'faq' | 'propojeni' | 'nastaveni'>('obsah');
  const [newType, setNewType] = useState<BlockType>('paragraphs');
  const fetcher = useFetcher<SaveResult>();
  const saving = fetcher.state !== 'idle';
  const json = JSON.stringify(page);
  const dirty = json !== savedJson;
  // stránka z kódu nebo ze starší administrace ještě nemá uloženou verzi
  const unsaved = meta.source !== 'firestore';
  const result = fetcher.data;

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.ok) setSavedJson(JSON.stringify(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher.state, fetcher.data]);

  useEffect(() => {
    if (json === savedJson) return;
    const onLeave = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener('beforeunload', onLeave);
    return () => window.removeEventListener('beforeunload', onLeave);
  }, [json, savedJson]);

  const issues = useMemo(() => checkPage(page), [page]);
  const errors = issues.filter((i) => i.level === 'error');
  const hints = issues.filter((i) => i.level === 'hint');

  const set = <K extends keyof PageContent>(key: K, value: PageContent[K]) => setPage((p) => ({ ...p, [key]: value }));
  const setHero = (patch: Partial<PageContent['hero']>) => setPage((p) => ({ ...p, hero: { ...p.hero, ...patch } }));
  const setContact = (patch: Partial<PageContent['contact']>) => setPage((p) => ({ ...p, contact: { ...p.contact, ...patch } }));
  const setSeo = (patch: Partial<PageContent['seo']>) => setPage((p) => ({ ...p, seo: { ...p.seo, ...patch } }));

  // „Uložit a zobrazit“: okno otevřeme hned při kliknutí (jinak by ho prohlížeč
  // zablokoval) a adresu stránky do něj načteme až po úspěšném uložení.
  const viewWindow = useRef<Window | null>(null);
  const save = (andView = false) => {
    viewWindow.current = andView ? window.open('about:blank', '_blank') : null;
    fetcher.submit({ intent: 'save', data: JSON.stringify(page) }, { method: 'post' });
  };

  useEffect(() => {
    if (fetcher.state !== 'idle' || !viewWindow.current) return;
    if (fetcher.data?.ok) viewWindow.current.location.href = `/${page.path}`;
    else viewWindow.current.close();
    viewWindow.current = null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher.state]);

  const url = `/${page.path}`;
  const hrefList = 'adm-page-hrefs';

  return (
    <>
      <datalist id={hrefList}>
        <option value="#kontakt" />
        {pages.map((p) => (
          <option key={p.path} value={`/${p.path}`}>
            {p.label}
          </option>
        ))}
      </datalist>

      <div className="adm-head">
        <div>
          <div className="adm-crumb">
            <a href="/admin/pages">← Stránky</a>
          </div>
          <h1>{page.navTitle || 'Stránka'}</h1>
          <p>
            <code>{url}</code> · {KIND_LABELS[page.kind]} ·{' '}
            {page.published ? <Pill tone="ok">zveřejněná</Pill> : <Pill tone="warn">koncept</Pill>}{' '}
            {meta.source === 'default' ? <Pill tone="info">výchozí obsah z kódu – zatím neuložený</Pill> : null}
            {meta.source === 'legacy' ? <Pill tone="info">starší stránka – uložením ji převedete</Pill> : null}
          </p>
        </div>
        <div className="adm-head__actions">
          <a className="btn btn-outline-secondary" href={url} target="_blank" rel="noreferrer">
            Zobrazit ↗
          </a>
          <button type="button" className="btn btn-primary" onClick={() => save(false)} disabled={saving}>
            {saving ? 'Ukládám…' : 'Uložit'}
          </button>
        </div>
      </div>

      {result && !result.ok ? (
        <div className="alert alert-danger">
          <strong>{result.message}</strong>
          {result.issues?.length ? (
            <ul className="mb-0 mt-2">
              {result.issues.slice(0, 12).map((i, k) => (
                <li key={k}>
                  {humanPath(i.path)}: {i.message}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      {result && result.ok && !dirty ? <div className="alert alert-success">Změny jsme uložili, na webu se projeví hned.</div> : null}

      <div className="adm-editor">
        <div>
          <div className="adm-tabs" role="tablist">
            {(
              [
                ['obsah', 'Obsah stránky'],
                ['faq', `FAQ (${page.faq.length})`],
                ['propojeni', 'Kontakt a propojení'],
                ['nastaveni', 'SEO a nastavení'],
              ] as const
            ).map(([id, label]) => (
              <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'adm-tab is-active' : 'adm-tab'} onClick={() => setTab(id)}>
                {label}
              </button>
            ))}
          </div>

          {tab === 'obsah' ? (
            <>
              <Card title="Úvod stránky (hero)" desc="První obrazovka: nadpis H1, podtitul a tlačítka.">
                <div className="row g-2">
                  <div className="col-md-4">
                    <Select
                      label="Vzhled"
                      value={page.hero.variant ?? 'pictogram'}
                      onChange={(variant) => setHero({ variant })}
                      options={[
                        { value: 'pictogram', label: 'S piktogramem' },
                        { value: 'diagram', label: 'S diagramem (homepage)' },
                        { value: 'simple', label: 'Jen text' },
                      ]}
                    />
                  </div>
                  <div className="col-md-8">
                    <TextInput label="Štítek nad nadpisem" value={page.hero.eyebrow} onChange={(eyebrow) => setHero({ eyebrow })} />
                  </div>
                </div>
                <TextInput label="Nadpis H1" value={page.hero.h1} onChange={(h1) => setHero({ h1 })} counter={{ max: 75 }} required />
                {page.hero.variant === 'diagram' ? (
                  <TextInput label="Podtržená část H1" value={page.hero.h1Highlight} onChange={(v) => setHero({ h1Highlight: v || undefined })} help="Musí přesně odpovídat části nadpisu." />
                ) : null}
                <TextArea label="Podtitul" value={page.hero.subtitle} onChange={(subtitle) => setHero({ subtitle })} rows={3} />
                {page.hero.variant !== 'diagram' && page.hero.variant !== 'simple' ? (
                  <TextArea
                    label="Rychlá odpověď"
                    value={page.hero.quickAnswer}
                    onChange={(v) => setHero({ quickAnswer: v || undefined })}
                    html
                    rows={4}
                    help="Shrnutí na 40–60 slov pro čtenáře i AI přehledy."
                  />
                ) : null}
                <LinkInput label="Hlavní tlačítko" value={page.hero.primaryCta} onChange={(primaryCta) => setHero({ primaryCta })} optional hrefList={hrefList} help="Hranaté závorky doplní web sám." />
                <LinkInput label="Druhé tlačítko" value={page.hero.secondaryCta} onChange={(secondaryCta) => setHero({ secondaryCta })} optional hrefList={hrefList} />
                <TextInput label="Mikrotext pod tlačítky" value={page.hero.microcopy} onChange={(v) => setHero({ microcopy: v || undefined })} />
              </Card>

              <Card title="Pruh faktů pod úvodem" desc="Tři až čtyři ověřitelná fakta. Prázdné = pruh se nezobrazí.">
                <LinesInput label="Fakta" value={page.trust} onChange={(trust) => set('trust', trust)} rows={4} />
              </Card>

              <Card title={`Sekce (${page.sections.length})`} desc="Obsah stránky po sekcích. Každá sekce má nadpis H2 a libovolné bloky.">
                <ListEditor<Section>
                  items={page.sections}
                  onChange={(sections) => set('sections', sections)}
                  itemTitle={(s) => (
                    <>
                      {s.title || <em>bez nadpisu</em>}
                      <small>#{s.id} · {plural(s.blocks.length, 'blok', 'bloky', 'bloků')}</small>
                    </>
                  )}
                  addOptions={[
                    {
                      label: 'Sekce',
                      create: () => ({ id: `sekce-${page.sections.length + 1}`, title: 'Nová sekce', tone: page.sections.length % 2 ? 'dark' : 'light', blocks: [] }),
                    },
                  ]}
                  renderItem={(s, update) => (
                    <>
                      <div className="row g-2">
                        <div className="col-md-8">
                          <TextInput label="Nadpis H2" value={s.title} onChange={(title) => update({ ...s, title })} help="Prázdný nadpis se nezobrazí." />
                        </div>
                        <div className="col-md-4">
                          <TextInput label="Kotva (#)" value={s.id} onChange={(id) => update({ ...s, id })} mono help="Odkaz na sekci: /stranka#kotva" />
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className="col-md-8">
                          <TextInput label="Štítek nad nadpisem" value={s.eyebrow} onChange={(v) => update({ ...s, eyebrow: v || undefined })} />
                        </div>
                        <div className="col-md-4">
                          <Select label="Pozadí" value={s.tone ?? 'dark'} onChange={(tone) => update({ ...s, tone })} options={[...TONES]} />
                        </div>
                      </div>
                      <TextArea label="Úvodní text" value={s.lead} onChange={(v) => update({ ...s, lead: v || undefined })} html rows={2} />
                      <div className="form-label mt-2">Bloky obsahu</div>
                      <ListEditor<Block>
                        nested
                        items={s.blocks}
                        onChange={(blocks) => update({ ...s, blocks })}
                        itemTitle={(b) => (
                          <>
                            {BLOCK_LABELS[b.type]}
                            <small>{blockSummary(b)}</small>
                          </>
                        )}
                        addOptions={[]}
                        emptyText="Sekce zatím nemá žádný blok."
                        renderItem={(b, setBlock) => (
                          <>
                            <p className="form-text mt-0">{BLOCK_HELP[b.type]}</p>
                            <BlockEditor block={b} onChange={setBlock} options={options} />
                          </>
                        )}
                      />
                      <div className="adm-add">
                        <select className="form-select form-select-sm" style={{ maxWidth: 280 }} value={newType} onChange={(e) => setNewType(e.target.value as BlockType)} aria-label="Typ nového bloku">
                          {BLOCK_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {BLOCK_LABELS[t]}
                            </option>
                          ))}
                        </select>
                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => update({ ...s, blocks: [...s.blocks, newBlock(newType)] })}>
                          + Přidat blok
                        </button>
                      </div>
                      <TextInput label="Poznámka pod sekcí" value={s.note} onChange={(v) => update({ ...s, note: v || undefined })} help="Drobný text, např. „Čísla v ukázkách jsou ilustrativní.“" />
                    </>
                  )}
                />
              </Card>
            </>
          ) : null}

          {tab === 'faq' ? (
            <Card title="Časté otázky" desc="Zobrazí se pod sekcemi a web z nich vytvoří i strukturovaná data FAQPage.">
              <TextInput label="Nadpis sekce FAQ" value={page.faqTitle} onChange={(v) => set('faqTitle', v || undefined)} placeholder="Časté otázky" />
              <ListEditor
                items={page.faq}
                onChange={(faq) => set('faq', faq)}
                itemTitle={(f) => short(f.q) || 'Otázka'}
                addOptions={[{ label: 'Otázka', create: () => ({ q: 'Nová otázka?', a: '' }) }]}
                renderItem={(f, update) => (
                  <>
                    <TextInput label="Otázka" value={f.q} onChange={(q) => update({ ...f, q })} required />
                    <TextArea label="Odpověď" value={f.a} onChange={(a) => update({ ...f, a })} html rows={5} />
                  </>
                )}
              />
            </Card>
          ) : null}

          {tab === 'propojeni' ? (
            <>
              <Card title="Kontaktní blok" desc="Formulář na konci stránky. Texty, které necháte prázdné, převezme z Textů webu.">
                <Toggle label="Zobrazit kontaktní blok" checked={page.contact.enabled !== false} onChange={(on) => setContact({ enabled: on })} />
                {page.contact.enabled !== false ? (
                  <>
                    <div className="row g-2">
                      <div className="col-md-8">
                        <TextInput label="Nadpis" value={page.contact.title} onChange={(title) => setContact({ title })} />
                      </div>
                      <div className="col-md-4">
                        <TextInput label="ID formuláře (měření)" value={page.contact.formId} onChange={(formId) => setContact({ formId })} mono help="Jde do form_id v dataLayeru." />
                      </div>
                    </div>
                    <TextArea label="Úvodní text" value={page.contact.lead} onChange={(v) => setContact({ lead: v || undefined })} rows={2} />
                    <TextInput label="Nápověda v poli zprávy" value={page.contact.placeholder} onChange={(placeholder) => setContact({ placeholder })} />
                    <CheckGrid
                      label="Předvybraná témata"
                      options={TOPIC_VALUES.map((t) => ({ value: t, label: TOPICS.find((x) => x.value === t)?.label ?? t }))}
                      value={page.contact.topics ?? []}
                      onChange={(topics) => setContact({ topics: topics.length ? topics : undefined })}
                    />
                    <Select
                      label="Typ poptávky (měření)"
                      value={page.contact.leadType ?? 'consultation'}
                      onChange={(leadType) => setContact({ leadType })}
                      options={[
                        { value: 'consultation', label: 'Konzultace' },
                        { value: 'audit', label: 'Audit' },
                        { value: 'quick_check', label: 'Rychlá kontrola' },
                      ]}
                    />
                  </>
                ) : null}
              </Card>
              <Card title="Související stránky" desc="Karty „Navazující služby“ pod FAQ.">
                <CheckGrid
                  label="Stránky"
                  options={pages.filter((p) => p.path !== page.path && p.kind !== 'home').map((p) => ({ value: p.path, label: p.label, hint: `/${p.path}${p.published ? '' : ' · koncept'}` }))}
                  value={page.relatedPages ?? []}
                  onChange={(relatedPages) => set('relatedPages', relatedPages.length ? relatedPages : undefined)}
                />
              </Card>
              <Card title="Články k tématu" desc="Odkaz se zobrazí, jen když článek na blogu existuje.">
                {articles.length ? (
                  <CheckGrid
                    label="Články"
                    options={articles.map((a) => ({ value: a.slug, label: a.title, hint: `/blog/${a.slug}` }))}
                    value={(page.relatedArticles ?? []).map((a) => a.slug)}
                    onChange={(slugs) =>
                      set(
                        'relatedArticles',
                        slugs.length
                          ? slugs.map((s) => ({ slug: s, title: articles.find((a) => a.slug === s)?.title ?? page.relatedArticles?.find((a) => a.slug === s)?.title ?? s }))
                          : undefined,
                      )
                    }
                  />
                ) : (
                  <p className="text-muted mb-0">Blog zatím nemá články.</p>
                )}
                {(page.relatedArticles ?? []).filter((a) => !articles.some((x) => x.slug === a.slug)).length ? (
                  <p className="form-text mb-0">
                    Plánované články (zobrazí se po vydání):{' '}
                    {(page.relatedArticles ?? [])
                      .filter((a) => !articles.some((x) => x.slug === a.slug))
                      .map((a) => a.title)
                      .join(', ')}
                  </p>
                ) : null}
              </Card>
            </>
          ) : null}

          {tab === 'nastaveni' ? (
            <>
              <Card title="Stránka">
                <div className="row g-2">
                  <div className="col-md-6">
                    <TextInput label="Adresa" value={url} onChange={() => undefined} mono help="Adresu nejde změnit. Pro novou adresu založte novou stránku a starou smažte." />
                  </div>
                  <div className="col-md-6">
                    {page.kind === 'home' ? (
                      <TextInput label="Typ" value="Homepage" onChange={() => undefined} />
                    ) : (
                      <Select
                        label="Typ"
                        value={page.kind}
                        onChange={(kind) => set('kind', kind)}
                        options={(['service', 'solution', 'page', 'legal'] as const).map((k) => ({ value: k, label: KIND_LABELS[k] }))}
                        help="Služba má v drobečkové navigaci odkaz na Služby."
                      />
                    )}
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-md-6">
                    <TextInput label="Krátký název (menu, drobečky, karty)" value={page.navTitle} onChange={(navTitle) => set('navTitle', navTitle)} required />
                  </div>
                  <div className="col-md-6">
                    <TextInput label="Řádek „co to řeší“" value={page.tagline} onChange={(tagline) => set('tagline', tagline)} counter={{ max: 45 }} help="Nabídne se při přidání do menu." />
                  </div>
                </div>
                <PictogramPicker label="Piktogram" value={page.pictogram} onChange={(v) => v && set('pictogram', v)} />
                {page.kind !== 'home' ? (
                  <Toggle label="Zveřejněná" checked={page.published} onChange={(published) => set('published', published)} help="Koncept uvidíte jen vy po přihlášení." />
                ) : null}
                <Toggle label="Skrýt před vyhledávači (noindex)" checked={page.noindex} onChange={(noindex) => set('noindex', noindex)} />
              </Card>

              <Card title="SEO" desc="Titulek a popis ve výsledcích vyhledávání a při sdílení.">
                <TextInput label="Title" value={page.seo.title} onChange={(title) => setSeo({ title })} counter={{ min: 50, max: 60 }} required />
                <TextArea label="Meta description" value={page.seo.description} onChange={(description) => setSeo({ description })} counter={{ min: 140, max: 155 }} rows={3} />
                <div className="adm-preview mb-3" aria-label="Náhled ve vyhledávání">
                  <div className="adm-preview__url">datalayer.cz{url === '/' ? '' : url.replace(/\//g, ' › ')}</div>
                  <div className="adm-preview__title">{page.seo.title}</div>
                  <div className="adm-preview__desc">{page.seo.description}</div>
                </div>
                <TextInput label="Obrázek pro sdílení" value={page.ogImage} onChange={(v) => set('ogImage', v || undefined)} mono help="1200×630 px, např. /og/default.png nebo https://…" />
              </Card>

              {page.kind === 'service' || page.kind === 'solution' ? (
                <Card title="Strukturovaná data služby" desc="Schema.org Service pro vyhledávače.">
                  <Toggle
                    label="Zapnout"
                    checked={Boolean(page.schema)}
                    onChange={(on) => set('schema', on ? { name: page.navTitle, serviceType: page.navTitle, description: page.seo.description } : undefined)}
                  />
                  {page.schema ? (
                    <>
                      <TextInput label="Název služby" value={page.schema.name} onChange={(name) => set('schema', { ...page.schema!, name })} />
                      <TextInput label="Typ služby" value={page.schema.serviceType} onChange={(serviceType) => set('schema', { ...page.schema!, serviceType })} />
                      <TextArea label="Popis" value={page.schema.description} onChange={(description) => set('schema', { ...page.schema!, description })} />
                      <TextInput label="Pro koho" value={page.schema.audience} onChange={(audience) => set('schema', { ...page.schema!, audience: audience || undefined })} />
                    </>
                  ) : null}
                </Card>
              ) : null}

              {page.kind !== 'home' && meta.source !== 'default' ? (
                <Card title="Smazání stránky">
                  <Form
                    method="post"
                    onSubmit={(e) => {
                      if (!window.confirm(`Smazat stránku ${url}? Akce je nevratná a odkazy na ni přestanou fungovat.`)) e.preventDefault();
                    }}
                  >
                    <input type="hidden" name="intent" value="delete" />
                    <button type="submit" className="btn btn-outline-danger">
                      Smazat stránku
                    </button>
                  </Form>
                </Card>
              ) : null}
            </>
          ) : null}
        </div>

        <aside className="adm-editor__aside">
          <Card title="Kontrola textů" desc="Pravidla českých textů (HARD-RULES).">
            {errors.length === 0 && hints.length === 0 ? <p className="mb-0">Vše v pořádku.</p> : null}
            {errors.length ? (
              <>
                <p className="mb-1">
                  <Pill tone="danger">{errors.length} k opravě</Pill>
                </p>
                <ul className="adm-rules ps-3">
                  {errors.slice(0, 15).map((i, k) => (
                    <li key={k}>
                      {i.message}
                      <span className="adm-rules__where">{i.where}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {hints.length ? (
              <>
                <p className="mb-1">
                  <Pill tone="warn">{hints.length} k posouzení</Pill>
                </p>
                <ul className="adm-rules ps-3">
                  {hints.slice(0, 15).map((i, k) => (
                    <li key={k}>
                      {i.message}
                      <span className="adm-rules__where">{i.where}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </Card>
          <Card title="Historie">
            <p className="mb-0 small">
              {meta.updatedAt ? (
                <>
                  Naposledy uložil {meta.updatedBy || '–'}
                  <br />
                  {formatDateTime(meta.updatedAt)}
                </>
              ) : (
                'Zatím neuloženo v administraci.'
              )}
            </p>
          </Card>
        </aside>
      </div>

      <div className="adm-savebar">
        <span className={dirty || unsaved ? 'adm-savebar__status is-dirty' : 'adm-savebar__status'}>
          {saving
            ? 'Ukládám…'
            : dirty
              ? 'Máte neuložené změny'
              : meta.source === 'default'
                ? 'Výchozí obsah z kódu – uložením ho přenesete do administrace'
                : meta.source === 'legacy'
                  ? 'Starší stránka – uložením ji převedete na nový formát'
                  : meta.updatedAt
                    ? `Uloženo ${formatDateTime(meta.updatedAt)}`
                    : 'Vše uložené'}
          {errors.length ? ` · ${errors.length} porušení pravidel textů` : ''}
        </span>
        <span className="d-flex gap-2">
          <button type="button" className="btn btn-outline-secondary" onClick={() => save(true)} disabled={saving}>
            Uložit a zobrazit
          </button>
          <button type="button" className="btn btn-primary" onClick={() => save(false)} disabled={saving}>
            {saving ? 'Ukládám…' : 'Uložit'}
          </button>
        </span>
      </div>
    </>
  );
}
