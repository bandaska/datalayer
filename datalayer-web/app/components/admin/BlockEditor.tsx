import type { Block, BlockType } from '~/content/schema';
import { RichTextEditor } from '../RichTextEditor';
import { LinesInput, LinkInput, ListEditor, ParagraphsInput, PictogramPicker, Select, TextArea, TextInput, short } from './fields';
import { plural } from './ui';

// Editory jednotlivých typů bloků obsahu stránky.

export const BLOCK_LABELS: Record<BlockType, string> = {
  paragraphs: 'Odstavce',
  list: 'Seznam',
  cards: 'Karty',
  steps: 'Kroky postupu',
  table: 'Tabulka',
  flow: 'Schéma toku dat',
  callout: 'Zvýrazněný box',
  code: 'Ukázka kódu',
  tabs: 'Záložky',
  html: 'Volný text (editor)',
  tags: 'Štítky',
  articles: 'Nejnovější články',
  menuGrid: 'Přehled z menu',
  consentSettings: 'Tlačítko nastavení cookies',
  proscons: 'Rozhodnutí ✓ / ✕',
  figures: 'Čísla v boxech',
  process: 'Postup spolupráce',
  operator: 'Provozovatel webu',
  person: 'Osoba za webem',
};

export const BLOCK_HELP: Record<BlockType, string> = {
  paragraphs: 'Běžný text v odstavcích.',
  list: 'Odrážky, fajfky (co uděláme) nebo křížky (co neděláme).',
  cards: 'Mřížka karet s nadpisem, textem, piktogramem, „konzolí“, odrážkami, štítky a odkazem.',
  steps: 'Postup krok za krokem s výstupem a tím, co potřebujeme od klienta.',
  table: 'Tabulka se záhlavím; jeden sloupec lze zvýraznit.',
  flow: 'Schéma toku dat zleva doprava (na mobilu pod sebou).',
  callout: 'Upozornění nebo tip v rámečku.',
  code: 'Kód s tlačítkem Kopírovat.',
  tabs: 'Obsah v záložkách (segmenty, platformy). ID záložky slouží i jako kotva v URL.',
  html: 'Volný text z vizuálního editoru – vhodné pro zásady a delší texty.',
  tags: 'Řada štítků, volitelně s odkazem.',
  articles: 'Automaticky nejnovější články z blogu.',
  menuGrid: 'Odkazy z menu ve sloupcích (např. všechny služby jako na homepage).',
  consentSettings: 'Tlačítko, které otevře nastavení cookies.',
  proscons: 'Dva sloupce: kdy služba dává smysl (✓) a kdy doporučíme počkat (✕). Pod položku jde dát drobnou poznámku s odkazem.',
  figures: 'Dvě až čtyři čísla v boxech, např. náklady provozu, a poznámka se zdrojem.',
  process: 'Jednotný postup spolupráce – pět kroků z Textů webu. U služby jde upravit popis kroku 3 (implementace).',
  operator: 'Jméno nebo firma, IČO a sídlo z Nastavení. Dokud nejsou vyplněné, blok se nezobrazí.',
  person: 'Jméno, role, praxe a nástroje tady, fotka z Textů webu (Kontakt), LinkedIn z Nastavení. Bez fotky i bez textu o praxi se blok nezobrazí.',
};

export function newBlock(type: BlockType): Block {
  switch (type) {
    case 'paragraphs':
      return { type, items: [''] };
    case 'list':
      return { type, style: 'check', items: [''] };
    case 'cards':
      return { type, columns: 3, items: [{ title: 'Nová karta', text: '' }] };
    case 'steps':
      return { type, items: [{ title: 'Nový krok', text: '' }] };
    case 'table':
      return { type, head: ['Sloupec 1', 'Sloupec 2'], rows: [['', '']] };
    case 'flow':
      return { type, caption: '', columns: [{ label: 'Zdroj', items: [] }, { label: 'Cíl', items: [] }] };
    case 'callout':
      return { type, tone: 'info', text: '' };
    case 'code':
      return { type, lang: 'javascript', code: '' };
    case 'tabs':
      return { type, group: 'zalozky', items: [{ id: 'zalozka-1', label: 'Záložka 1', paragraphs: [] }] };
    case 'html':
      return { type, html: '<p></p>' };
    case 'tags':
      return { type, items: [{ label: 'Štítek' }] };
    case 'articles':
      return { type, count: 3 };
    case 'menuGrid':
      return { type, menuId: 'sluzby' };
    case 'consentSettings':
      return { type, label: 'Změnit nastavení cookies' };
    case 'proscons':
      return { type, yes: { title: 'Dává smysl, když…', items: [{ text: '' }] }, no: { title: 'Doporučíme počkat, když…', items: [{ text: '' }] } };
    case 'figures':
      return { type, items: [{ value: '', label: '' }] };
    case 'process':
      return { type };
    case 'operator':
      return { type, title: 'Provozovatel' };
    case 'person':
      return { type };
  }
}

/** Krátké shrnutí bloku do titulku v seznamu. */
export function blockSummary(b: Block): string {
  switch (b.type) {
    case 'paragraphs':
      return short(b.items[0]);
    case 'list':
      return b.title ? short(b.title) : plural(b.items.length, 'položka', 'položky', 'položek');
    case 'cards':
      return `${plural(b.items.length, 'karta', 'karty', 'karet')}: ${short(b.items.map((c) => c.title).join(', '), 60)}`;
    case 'steps':
      return plural(b.items.length, 'krok', 'kroky', 'kroků');
    case 'table':
      return short(b.caption || b.head.join(' · '));
    case 'flow':
      return short(b.columns.map((c) => c.label).join(' → '));
    case 'callout':
      return short(b.title || b.text);
    case 'code':
      return b.lang;
    case 'tabs':
      return short(b.items.map((t) => t.label).join(' · '));
    case 'html':
      return short(b.html);
    case 'tags':
      return short(b.items.map((t) => t.label).join(', '));
    case 'articles':
      return plural(b.count ?? 3, 'článek', 'články', 'článků');
    case 'menuGrid':
      return `menu „${b.menuId}“`;
    case 'consentSettings':
      return b.label ?? '';
    case 'proscons':
      return `${plural(b.yes.items.length, 'důvod', 'důvody', 'důvodů')} pro, ${plural(b.no.items.length, 'důvod', 'důvody', 'důvodů')} proti`;
    case 'figures':
      return short(b.items.map((f) => f.value).join(' · '));
    case 'process':
      return b.implementation ? `krok 3: ${short(b.implementation, 50)}` : 'pět kroků z Textů webu';
    case 'operator':
      return 'z Nastavení';
    case 'person':
      return b.paragraphs?.length ? short(b.paragraphs[0]) : 'čeká na fotku nebo text o praxi';
  }
}

type B<T extends Block['type']> = Extract<Block, { type: T }>;
type CardItem = B<'cards'>['items'][number];
type StepItem = B<'steps'>['items'][number];
type FlowColumn = B<'flow'>['columns'][number];
type TabItem = B<'tabs'>['items'][number];
type ProsItem = B<'proscons'>['yes']['items'][number];
type FigureItem = B<'figures'>['items'][number];

export type EditorOptions = {
  menus: { id: string; label: string }[];
};

const COLS = [
  { value: '2', label: 'Dva sloupce' },
  { value: '3', label: 'Tři sloupce' },
  { value: '4', label: 'Čtyři sloupce' },
] as const;

export function BlockEditor({ block, onChange, options }: { block: Block; onChange: (b: Block) => void; options: EditorOptions }) {
  switch (block.type) {
    case 'paragraphs':
      return <ParagraphsInput label="Odstavce" value={block.items} onChange={(items) => onChange({ ...block, items: items.length ? items : [''] })} />;

    case 'list':
      return (
        <>
          <div className="row g-2">
            <div className="col-md-4">
              <Select
                label="Vzhled"
                value={block.style ?? 'bullet'}
                onChange={(style) => onChange({ ...block, style })}
                options={[
                  { value: 'check', label: 'Fajfky ✓' },
                  { value: 'cross', label: 'Křížky ✕' },
                  { value: 'bullet', label: 'Odrážky' },
                ]}
              />
            </div>
            <div className="col-md-8">
              <TextInput label="Nadpis seznamu (nepovinný)" value={block.title} onChange={(title) => onChange({ ...block, title: title || undefined })} />
            </div>
          </div>
          <LinesInput label="Položky" value={block.items} onChange={(items) => onChange({ ...block, items: items ?? [''] })} help="Každý řádek je jedna položka. Lze použít <strong>, <code> a odkazy." rows={6} />
        </>
      );

    case 'cards':
      return (
        <>
          <div className="row g-2">
            <div className="col-md-6">
              <Select label="Počet sloupců" value={String(block.columns ?? 3) as '2' | '3' | '4'} onChange={(v) => onChange({ ...block, columns: Number(v) as 2 | 3 | 4 })} options={[...COLS]} />
            </div>
            <div className="col-md-6">
              <Select
                label="Vzhled"
                value={block.variant ?? 'default'}
                onChange={(variant) => onChange({ ...block, variant: variant === 'default' ? undefined : variant })}
                options={[
                  { value: 'default', label: 'Karty' },
                  { value: 'symptoms', label: 'Symptomy (na mobilu kompaktní seznam)' },
                ]}
              />
            </div>
          </div>
          <ListEditor<CardItem>
            nested
            items={block.items}
            onChange={(items) => onChange({ ...block, items })}
            itemTitle={(c) => c.title || 'Karta'}
            addOptions={[{ label: 'Karta', create: () => ({ title: 'Nová karta', text: '' }) }]}
            renderItem={(c, set) => (
              <>
                <TextInput label="Nadpis" value={c.title} onChange={(title) => set({ ...c, title })} required />
                <TextArea label="Text" value={c.text} onChange={(text) => set({ ...c, text })} html rows={3} />
                <PictogramPicker label="Piktogram" value={c.pictogram} onChange={(pictogram) => set({ ...c, pictogram })} allowEmpty />
                <div className="row g-2">
                  <div className="col-md-4">
                    <TextInput label="Štítek nad nadpisem" value={c.tag} onChange={(tag) => set({ ...c, tag: tag || undefined })} />
                  </div>
                  <div className="col-md-8">
                    <TextInput
                      label="Štítky pod textem"
                      value={c.tags?.join(', ')}
                      onChange={(v) => set({ ...c, tags: v.split(',').map((x) => x.trim()).filter(Boolean).length ? v.split(',').map((x) => x.trim()).filter(Boolean) : undefined })}
                      help="Oddělte čárkou."
                    />
                  </div>
                </div>
                <LinesInput label="Konzole (nepovinné)" value={c.console} onChange={(console) => set({ ...c, console })} mono rows={3} help="Řádky „logu“ v mono písmu, řádek začínající ⚠ se zvýrazní." />
                <LinesInput label="Odrážky (nepovinné)" value={c.bullets} onChange={(bullets) => set({ ...c, bullets })} rows={3} />
                <LinkInput label="Odkaz karty" value={c.link} onChange={(link) => set({ ...c, link })} optional />
              </>
            )}
          />
        </>
      );

    case 'steps':
      return (
        <>
          <Select
            label="Rozložení"
            value={block.layout ?? 'grid'}
            onChange={(layout) => onChange({ ...block, layout: layout === 'grid' ? undefined : layout })}
            options={[
              { value: 'grid', label: 'Karty vedle sebe' },
              { value: 'rows', label: 'Kroky pod sebou s podkroky' },
            ]}
          />
        <ListEditor<StepItem>
          nested
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
          itemTitle={(s) => s.title || 'Krok'}
          addOptions={[{ label: 'Krok', create: () => ({ title: 'Nový krok', text: '' }) }]}
          renderItem={(s, set) => (
            <>
              <TextInput label="Název kroku" value={s.title} onChange={(title) => set({ ...s, title })} required />
              <TextArea label="Popis" value={s.text} onChange={(text) => set({ ...s, text })} html />
              <LinesInput label="Podkroky (nepovinné)" value={s.substeps} onChange={(substeps) => set({ ...s, substeps })} rows={3} help="Každý řádek jeden podkrok." />
              <div className="row g-2">
                <div className="col-md-4">
                  <TextInput label="Výstup" value={s.output} onChange={(v) => set({ ...s, output: v || undefined })} />
                </div>
                <div className="col-md-4">
                  <TextInput label="Od klienta potřebujeme" value={s.fromClient} onChange={(v) => set({ ...s, fromClient: v || undefined })} />
                </div>
                <div className="col-md-4">
                  <TextInput label="Délka" value={s.duration} onChange={(v) => set({ ...s, duration: v || undefined })} help="Jen když ji víte jistě." />
                </div>
              </div>
            </>
          )}
        />
        </>
      );

    case 'table':
      return <TableEditor block={block} onChange={onChange} />;

    case 'flow':
      return (
        <>
          <TextArea label="Popis schématu" value={block.caption} onChange={(caption) => onChange({ ...block, caption })} help="Zobrazí se pod schématem a slouží i jako alternativní text." />
          <ListEditor<FlowColumn>
            nested
            items={block.columns}
            onChange={(columns) => onChange({ ...block, columns })}
            itemTitle={(c) => c.label || 'Uzel'}
            addOptions={[{ label: 'Uzel', create: () => ({ label: 'Nový uzel', items: [] }) }]}
            renderItem={(c, set) => (
              <>
                <TextInput label="Název uzlu" value={c.label} onChange={(label) => set({ ...c, label })} required />
                <LinesInput label="Položky" value={c.items} onChange={(items) => set({ ...c, items: items ?? [] })} rows={4} />
                <TextInput label="Poznámka pod uzlem" value={c.note} onChange={(note) => set({ ...c, note: note || undefined })} />
              </>
            )}
          />
        </>
      );

    case 'callout':
      return (
        <>
          <div className="row g-2">
            <div className="col-md-4">
              <Select
                label="Typ"
                value={block.tone ?? 'info'}
                onChange={(tone) => onChange({ ...block, tone })}
                options={[
                  { value: 'info', label: 'Tip / informace' },
                  { value: 'warn', label: 'Upozornění' },
                ]}
              />
            </div>
            <div className="col-md-8">
              <TextInput label="Nadpis (nepovinný)" value={block.title} onChange={(title) => onChange({ ...block, title: title || undefined })} />
            </div>
          </div>
          <TextArea label="Text" value={block.text} onChange={(text) => onChange({ ...block, text })} html rows={4} />
        </>
      );

    case 'code':
      return (
        <>
          <div className="row g-2">
            <div className="col-md-4">
              <TextInput label="Jazyk" value={block.lang} onChange={(lang) => onChange({ ...block, lang })} mono />
            </div>
            <div className="col-md-8">
              <TextInput label="Popisek (nepovinný)" value={block.caption} onChange={(caption) => onChange({ ...block, caption: caption || undefined })} />
            </div>
          </div>
          <TextArea label="Kód" value={block.code} onChange={(code) => onChange({ ...block, code })} mono rows={10} />
        </>
      );

    case 'tabs':
      return (
        <>
          <TextInput label="ID skupiny (pro měření)" value={block.group} onChange={(group) => onChange({ ...block, group })} mono />
          <ListEditor<TabItem>
            nested
            items={block.items}
            onChange={(items) => onChange({ ...block, items })}
            itemTitle={(t) => t.label || 'Záložka'}
            addOptions={[{ label: 'Záložka', create: () => ({ id: `zalozka-${block.items.length + 1}`, label: 'Nová záložka', paragraphs: [] }) }]}
            renderItem={(t, set) => (
              <>
                <div className="row g-2">
                  <div className="col-md-6">
                    <TextInput label="Název záložky" value={t.label} onChange={(label) => set({ ...t, label })} required />
                  </div>
                  <div className="col-md-6">
                    <TextInput label="ID / kotva" value={t.id} onChange={(id) => set({ ...t, id })} mono help="Např. shoptet – odkaz /stranka#shoptet otevře záložku." />
                  </div>
                </div>
                <ParagraphsInput label="Odstavce" value={t.paragraphs ?? []} onChange={(paragraphs) => set({ ...t, paragraphs })} rows={4} />
                <LinesInput label="Odrážky" value={t.bullets} onChange={(bullets) => set({ ...t, bullets })} />
              </>
            )}
          />
        </>
      );

    case 'html':
      return (
        <div className="mb-3">
          <div className="form-label">Text</div>
          <RichTextEditor defaultValue={block.html} rows={14} onChange={(html) => onChange({ ...block, html })} />
        </div>
      );

    case 'tags':
      return (
        <LinesInput
          label="Štítky"
          value={block.items.map((t) => (t.href ? `${t.label} | ${t.href}` : t.label))}
          onChange={(lines) =>
            onChange({
              ...block,
              items: (lines ?? []).map((l) => {
                const [label, href] = l.split('|').map((x) => x.trim());
                return href ? { label, href } : { label };
              }),
            })
          }
          rows={8}
          help="Každý řádek jeden štítek. Odkaz přidáte za svislou čáru: Shoptet | /reseni/e-shopy#shoptet"
        />
      );

    case 'articles':
      return (
        <div className="row g-2">
          <div className="col-md-6">
            <TextInput
              label="Počet článků"
              value={String(block.count ?? 3)}
              onChange={(v) => onChange({ ...block, count: Math.min(12, Math.max(1, Number(v.replace(/\D/g, '')) || 3)) })}
            />
          </div>
          <div className="col-md-6">
            <TextInput
              label="Zobrazit až od počtu článků"
              value={String(block.minCount ?? 3)}
              onChange={(v) => onChange({ ...block, minCount: Math.min(12, Math.max(1, Number(v.replace(/\D/g, '')) || 3)) })}
              help="Dokud blog nemá tolik článků, sekce se skryje."
            />
          </div>
        </div>
      );

    case 'menuGrid':
      return (
        <>
          <Select
            label="Menu"
            value={block.menuId}
            onChange={(menuId) => onChange({ ...block, menuId })}
            options={options.menus.length ? options.menus.map((m) => ({ value: m.id, label: `${m.label} (${m.id})` })) : [{ value: block.menuId, label: block.menuId }]}
            help="Rozbalovací menu z Menu a patička."
          />
          <div className="row g-2">
            <div className="col-md-6">
              <Select
                label="Pod ním ještě karty z menu (nepovinné)"
                value={block.extraMenuId ?? ''}
                onChange={(v) => onChange({ ...block, extraMenuId: v || undefined })}
                options={[{ value: '', label: '– nic –' }, ...options.menus.map((m) => ({ value: m.id, label: m.label }))]}
              />
            </div>
            <div className="col-md-6">
              <TextInput label="Nadpis karet" value={block.extraTitle} onChange={(extraTitle) => onChange({ ...block, extraTitle: extraTitle || undefined })} />
            </div>
          </div>
        </>
      );

    case 'consentSettings':
      return <TextInput label="Text tlačítka" value={block.label} onChange={(label) => onChange({ ...block, label })} />;

    case 'proscons':
      return (
        <div className="row g-3">
          {(['yes', 'no'] as const).map((k) => (
            <div className="col-lg-6" key={k}>
              <TextInput
                label={k === 'yes' ? 'Nadpis sloupce ✓' : 'Nadpis sloupce ✕'}
                value={block[k].title}
                onChange={(title) => onChange({ ...block, [k]: { ...block[k], title } })}
                required
              />
              <ListEditor<ProsItem>
                nested
                confirmDelete={false}
                items={block[k].items}
                onChange={(items) => onChange({ ...block, [k]: { ...block[k], items: items.length ? items : [{ text: '' }] } })}
                itemTitle={(it) => short(it.text) || 'Položka'}
                addOptions={[{ label: 'Položka', create: () => ({ text: '' }) }]}
                renderItem={(it, set) => (
                  <>
                    <TextInput label="Text" value={it.text} onChange={(text) => set({ ...it, text })} required />
                    <TextInput
                      label="Poznámka pod textem (nepovinné)"
                      value={it.note}
                      onChange={(note) => set({ ...it, note: note || undefined })}
                      help={'Např. → nejdřív <a href="/sluzby/audit-mereni">audit měření</a>'}
                    />
                  </>
                )}
              />
            </div>
          ))}
        </div>
      );

    case 'figures':
      return (
        <>
          <ListEditor<FigureItem>
            nested
            confirmDelete={false}
            items={block.items}
            onChange={(items) => onChange({ ...block, items: items.length ? items.slice(0, 4) : [{ value: '', label: '' }] })}
            itemTitle={(f) => f.value || 'Číslo'}
            addOptions={block.items.length < 4 ? [{ label: 'Číslo', create: () => ({ value: '', label: '' }) }] : []}
            renderItem={(f, set) => (
              <div className="row g-2">
                <div className="col-md-4">
                  <TextInput label="Číslo" value={f.value} onChange={(value) => set({ ...f, value })} required placeholder="110–150 $" />
                </div>
                <div className="col-md-8">
                  <TextInput label="Popisek" value={f.label} onChange={(label) => set({ ...f, label })} required />
                </div>
              </div>
            )}
          />
          <TextArea label="Poznámka pod čísly (nepovinné)" value={block.note} onChange={(note) => onChange({ ...block, note: note || undefined })} html rows={2} />
        </>
      );

    case 'process':
      return (
        <>
          <p className="small text-secondary">Kroky upravíte pro celý web v sekci Texty webu → Postup spolupráce.</p>
          <TextArea
            label="Popis kroku 3 – implementace pro tuto službu (nepovinné)"
            value={block.implementation}
            onChange={(implementation) => onChange({ ...block, implementation: implementation || undefined })}
            rows={2}
          />
          <div className="row g-2">
            <div className="col-md-6">
              <TextInput
                label="Krok 3 – co potřebujeme od vás (nepovinné)"
                value={block.implementationFromClient}
                onChange={(v) => onChange({ ...block, implementationFromClient: v || undefined })}
              />
            </div>
            <div className="col-md-6">
              <Select
                label="Pod krokem ukázat"
                value={block.detail ?? 'fromClient'}
                onChange={(detail) => onChange({ ...block, detail: detail === 'fromClient' ? undefined : detail })}
                options={[
                  { value: 'fromClient', label: 'Co potřebujeme od vás' },
                  { value: 'output', label: 'Výstup kroku' },
                ]}
              />
            </div>
          </div>
        </>
      );

    case 'operator':
      return (
        <>
          <TextInput label="Nadpis (nepovinné)" value={block.title} onChange={(title) => onChange({ ...block, title: title || undefined })} />
          <p className="small text-secondary mb-0">Údaje se berou z Nastavení → Provozovatel webu.</p>
        </>
      );

    case 'person':
      return (
        <>
          <div className="row g-2">
            <div className="col-md-6">
              <TextInput label="Jméno" value={block.name} onChange={(name) => onChange({ ...block, name: name || undefined })} help="Prázdné = jméno z Textů webu → Kontakt." />
            </div>
            <div className="col-md-6">
              <TextInput label="Role" value={block.role} onChange={(role) => onChange({ ...block, role: role || undefined })} help="Např. tracking & data engineer." />
            </div>
          </div>
          <ParagraphsInput label="Praxe a zkušenosti" value={block.paragraphs ?? []} onChange={(paragraphs) => onChange({ ...block, paragraphs: paragraphs.length ? paragraphs : undefined })} />
          <LinesInput label="Nástroje a certifikace (nepovinné)" value={block.facts} onChange={(facts) => onChange({ ...block, facts })} rows={3} help="Každý řádek jeden štítek. Jen ověřené údaje." />
          <p className="small text-secondary mb-0">Fotka se bere z Textů webu → Kontakt, odkaz na LinkedIn z Nastavení.</p>
        </>
      );
  }
}

function TableEditor({ block, onChange }: { block: Extract<Block, { type: 'table' }>; onChange: (b: Block) => void }) {
  const cols = block.head.length;
  const setHead = (i: number, v: string) => onChange({ ...block, head: block.head.map((h, j) => (j === i ? v : h)) });
  const setCell = (r: number, c: number, v: string) =>
    onChange({ ...block, rows: block.rows.map((row, i) => (i === r ? row.map((x, j) => (j === c ? v : x)) : row)) });
  const addCol = () => onChange({ ...block, head: [...block.head, `Sloupec ${cols + 1}`], rows: block.rows.map((r) => [...r, '']) });
  const removeCol = (c: number) =>
    cols > 1 &&
    onChange({
      ...block,
      head: block.head.filter((_, j) => j !== c),
      rows: block.rows.map((r) => r.filter((_, j) => j !== c)),
      highlightColumn: block.highlightColumn === c ? undefined : block.highlightColumn,
    });
  const addRow = () => onChange({ ...block, rows: [...block.rows, Array(cols).fill('')] });
  const removeRow = (r: number) => onChange({ ...block, rows: block.rows.filter((_, i) => i !== r) });
  const moveRow = (r: number, d: -1 | 1) => {
    const to = r + d;
    if (to < 0 || to >= block.rows.length) return;
    const rows = block.rows.slice();
    [rows[r], rows[to]] = [rows[to], rows[r]];
    onChange({ ...block, rows });
  };

  return (
    <>
      <div className="row g-2">
        <div className="col-md-8">
          <TextInput label="Popisek tabulky (nepovinný)" value={block.caption} onChange={(caption) => onChange({ ...block, caption: caption || undefined })} />
        </div>
        <div className="col-md-4">
          <Select
            label="Zvýrazněný sloupec"
            value={block.highlightColumn === undefined ? '' : String(block.highlightColumn)}
            onChange={(v) => onChange({ ...block, highlightColumn: v === '' ? undefined : Number(v) })}
            options={[{ value: '', label: '– žádný –' }, ...block.head.map((h, i) => ({ value: String(i), label: h || `Sloupec ${i + 1}` }))]}
          />
        </div>
      </div>
      <div className="adm-table-wrap mb-2">
        <table className="adm-table adm-tablegrid">
          <thead>
            <tr>
              {block.head.map((h, i) => (
                <th key={i}>
                  <div className="d-flex gap-1">
                    <input className="form-control form-control-sm" value={h} onChange={(e) => setHead(i, e.target.value)} aria-label={`Záhlaví sloupce ${i + 1}`} />
                    <button type="button" className="btn btn-sm btn-outline-danger btn-icon" title="Odstranit sloupec" onClick={() => removeCol(i)} disabled={cols <= 1}>
                      ✕
                    </button>
                  </div>
                </th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c}>
                    <textarea className="form-control form-control-sm" rows={2} value={cell} onChange={(e) => setCell(r, c, e.target.value)} aria-label={`Řádek ${r + 1}, sloupec ${c + 1}`} />
                  </td>
                ))}
                <td className="text-nowrap">
                  <button type="button" className="btn btn-sm btn-outline-secondary btn-icon" onClick={() => moveRow(r, -1)} disabled={r === 0} title="Nahoru">
                    ↑
                  </button>{' '}
                  <button type="button" className="btn btn-sm btn-outline-secondary btn-icon" onClick={() => moveRow(r, 1)} disabled={r === block.rows.length - 1} title="Dolů">
                    ↓
                  </button>{' '}
                  <button type="button" className="btn btn-sm btn-outline-danger btn-icon" onClick={() => removeRow(r)} title="Odstranit řádek">
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="adm-add">
        <button type="button" className="btn btn-sm btn-outline-primary" onClick={addRow}>
          + Řádek
        </button>
        <button type="button" className="btn btn-sm btn-outline-primary" onClick={addCol}>
          + Sloupec
        </button>
        <span className="form-text">První sloupec se zobrazí tučně jako záhlaví řádku. V buňkách lze použít &lt;strong&gt;, &lt;code&gt; a odkazy.</span>
      </div>
    </>
  );
}
