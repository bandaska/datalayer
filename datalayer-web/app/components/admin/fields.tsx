import { useEffect, useId, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { PICTOGRAMS, type Link, type Pictogram } from '~/content/schema';
import { Pi } from '../Pictograms';
import { Counter } from './ui';

// Ovládací prvky editorů administrace (stránky, menu, texty). Všechny jsou
// řízené (value + onChange), stav drží editor a ukládá ho jako JSON.

type Base = { label: ReactNode; help?: ReactNode; className?: string };

export function TextInput({
  label,
  value,
  onChange,
  help,
  placeholder,
  counter,
  mono,
  required,
  className,
  list,
}: Base & {
  value: string | undefined;
  onChange: (v: string) => void;
  placeholder?: string;
  counter?: { min?: number; max: number };
  mono?: boolean;
  required?: boolean;
  list?: string;
}) {
  const id = useId();
  return (
    <div className={className ?? 'mb-3'}>
      <div className="d-flex justify-content-between align-items-baseline gap-2">
        <label className="form-label" htmlFor={id}>
          {label}
          {required ? <span className="text-danger"> *</span> : null}
        </label>
        {counter ? <Counter value={value ?? ''} min={counter.min} max={counter.max} /> : null}
      </div>
      <input
        id={id}
        className={mono ? 'form-control adm-mono' : 'form-control'}
        value={value ?? ''}
        placeholder={placeholder}
        list={list}
        onChange={(e) => onChange(e.target.value)}
      />
      {help ? <div className="form-text">{help}</div> : null}
    </div>
  );
}

export const HTML_HELP = 'Lze použít <strong>, <em>, <code>, <br> a odkaz <a href="/…">.';

export function TextArea({
  label,
  value,
  onChange,
  help,
  rows = 3,
  placeholder,
  html,
  mono,
  counter,
  className,
}: Base & {
  value: string | undefined;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
  /** Pole povoluje inline HTML – zobrazí nápovědu. */
  html?: boolean;
  mono?: boolean;
  counter?: { min?: number; max: number };
}) {
  const id = useId();
  return (
    <div className={className ?? 'mb-3'}>
      <div className="d-flex justify-content-between align-items-baseline gap-2">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        {counter ? <Counter value={value ?? ''} min={counter.min} max={counter.max} /> : null}
      </div>
      <textarea
        id={id}
        className={mono ? 'form-control adm-mono' : 'form-control'}
        rows={rows}
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {help || html ? (
        <div className="form-text">
          {help}
          {help && html ? ' ' : null}
          {html ? HTML_HELP : null}
        </div>
      ) : null}
    </div>
  );
}

/** Seznam textů po řádcích (každý řádek = jedna položka). */
export function LinesInput({
  label,
  value,
  onChange,
  help,
  rows = 4,
  mono,
  className,
}: Base & { value: string[] | undefined; onChange: (v: string[] | undefined) => void; rows?: number; mono?: boolean }) {
  const joined = (value ?? []).join('\n');
  const [text, setText] = useState(joined);
  const last = useRef(joined);
  useEffect(() => {
    // hodnota se změnila zvenku (posun položky, vložení výchozího obsahu)
    if (joined !== last.current) {
      last.current = joined;
      setText(joined);
    }
  }, [joined]);
  const id = useId();
  return (
    <div className={className ?? 'mb-3'}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className={mono ? 'form-control adm-mono' : 'form-control'}
        rows={rows}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          const lines = e.target.value.split('\n').map((l) => l.trimEnd());
          const items = lines.filter((l) => l.trim() !== '');
          last.current = items.join('\n');
          onChange(items.length ? items : undefined);
        }}
      />
      <div className="form-text">{help ?? 'Každý řádek je jedna položka.'}</div>
    </div>
  );
}

/** Odstavce oddělené prázdným řádkem. */
export function ParagraphsInput({
  label,
  value,
  onChange,
  help,
  rows = 6,
}: Base & { value: string[]; onChange: (v: string[]) => void; rows?: number }) {
  const joined = value.join('\n\n');
  const [text, setText] = useState(joined);
  const last = useRef(joined);
  useEffect(() => {
    if (joined !== last.current) {
      last.current = joined;
      setText(joined);
    }
  }, [joined]);
  const id = useId();
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className="form-control"
        rows={rows}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          const items = e.target.value
            .split(/\n\s*\n/)
            .map((p) => p.trim())
            .filter(Boolean);
          last.current = items.join('\n\n');
          onChange(items);
        }}
      />
      <div className="form-text">
        {help ?? 'Odstavce oddělte prázdným řádkem.'} {HTML_HELP}
      </div>
    </div>
  );
}

export function Select<T extends string>({
  label,
  value,
  onChange,
  options,
  help,
  className,
}: Base & { value: T | undefined; onChange: (v: T) => void; options: { value: T; label: string }[] }) {
  const id = useId();
  return (
    <div className={className ?? 'mb-3'}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <select id={id} className="form-select" value={value ?? ''} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {help ? <div className="form-text">{help}</div> : null}
    </div>
  );
}

export function Toggle({ label, checked, onChange, help }: Base & { checked: boolean; onChange: (v: boolean) => void }) {
  const id = useId();
  return (
    <div className="form-check form-switch mb-3">
      <input id={id} className="form-check-input" type="checkbox" role="switch" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <label className="form-check-label fw-semibold" htmlFor={id}>
        {label}
      </label>
      {help ? <div className="form-text">{help}</div> : null}
    </div>
  );
}

/** Odkaz (text + adresa). `optional` = lze vypnout (hodnota undefined). */
export function LinkInput({
  label,
  value,
  onChange,
  optional,
  help,
  hrefList,
}: Base & { value: Link | undefined; onChange: (v: Link | undefined) => void; optional?: boolean; hrefList?: string }) {
  const enabled = Boolean(value);
  return (
    <div className="adm-fieldset">
      <legend>{label}</legend>
      {optional ? <Toggle label="Zobrazit" checked={enabled} onChange={(on) => onChange(on ? { label: '', href: '' } : undefined)} /> : null}
      {enabled || !optional ? (
        <div className="row g-2">
          <div className="col-md-5">
            <TextInput label="Text" value={value?.label} onChange={(v) => onChange({ label: v, href: value?.href ?? '' })} />
          </div>
          <div className="col-md-7">
            <TextInput
              label="Adresa"
              value={value?.href}
              mono
              list={hrefList}
              placeholder="/kontakt, #kontakt, https://…"
              onChange={(v) => onChange({ label: value?.label ?? '', href: v })}
            />
          </div>
        </div>
      ) : null}
      {help ? <div className="form-text mb-2">{help}</div> : null}
    </div>
  );
}

export const PICTOGRAM_LABELS: Record<Pictogram, string> = {
  ga4: 'GA4',
  gtm: 'GTM',
  datalayer: 'dataLayer',
  serverside: 'server-side',
  consent: 'consent',
  conversion: 'konverze',
  bigquery: 'BigQuery',
  dashboard: 'dashboard',
  audit: 'audit',
  perf: 'rychlost',
  monitor: 'monitoring',
  eshop: 'e-shop',
  lead: 'leady',
  gov: 'governance',
  warn: 'varování',
};

export function PictogramPicker({
  label,
  value,
  onChange,
  allowEmpty,
}: {
  label: ReactNode;
  value: Pictogram | undefined;
  onChange: (v: Pictogram | undefined) => void;
  allowEmpty?: boolean;
}) {
  return (
    <div className="mb-3">
      <div className="form-label">{label}</div>
      <div className="adm-pictos" role="radiogroup">
        {allowEmpty ? (
          <button type="button" className={!value ? 'adm-picto is-active' : 'adm-picto'} onClick={() => onChange(undefined)} aria-pressed={!value}>
            <span style={{ height: 28, display: 'flex', alignItems: 'center' }}>–</span>
            bez
          </button>
        ) : null}
        {PICTOGRAMS.map((p) => (
          <button type="button" key={p} className={value === p ? 'adm-picto is-active' : 'adm-picto'} onClick={() => onChange(p)} aria-pressed={value === p}>
            <Pi name={p} />
            {PICTOGRAM_LABELS[p]}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Zaškrtávací mřížka pro výběr více hodnot (související stránky, témata). */
export function CheckGrid<T extends string>({
  label,
  options,
  value,
  onChange,
  help,
}: Base & { options: { value: T; label: string; hint?: string }[]; value: T[]; onChange: (v: T[]) => void }) {
  return (
    <div className="mb-3">
      <div className="form-label">{label}</div>
      <div className="adm-checkgrid">
        {options.map((o) => (
          <label key={o.value} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={value.includes(o.value)}
              onChange={(e) => onChange(e.target.checked ? [...value, o.value] : value.filter((v) => v !== o.value))}
            />
            <span className="form-check-label">
              {o.label}
              {o.hint ? <small className="text-muted d-block">{o.hint}</small> : null}
            </span>
          </label>
        ))}
      </div>
      {help ? <div className="form-text">{help}</div> : null}
    </div>
  );
}

// ---------- seznam položek s řazením ----------

function move<T>(arr: T[], from: number, to: number): T[] {
  const next = arr.slice();
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function ListEditor<T>({
  items,
  onChange,
  renderItem,
  itemTitle,
  addOptions,
  addLabel = 'Přidat',
  nested,
  confirmDelete = true,
  emptyText,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  renderItem: (item: T, update: (v: T) => void, index: number) => ReactNode;
  itemTitle: (item: T, index: number) => ReactNode;
  /** Jedna nebo více možností „Přidat …“. */
  addOptions: { label: string; create: () => T }[];
  addLabel?: string;
  nested?: boolean;
  confirmDelete?: boolean;
  emptyText?: string;
}) {
  // Stabilní klíče položek – pole uvnitř si drží vlastní stav (např. text po řádcích),
  // takže po posunu nebo smazání nesmí „přeskočit“ na sousední položku.
  const counter = useRef(0);
  const newKey = () => `k${counter.current++}`;
  const [rows, setRows] = useState<{ key: string; open: boolean }[]>(() => items.map(() => ({ key: newKey(), open: false })));
  const synced = rows.length === items.length ? rows : items.map((_, i) => rows[i] ?? { key: newKey(), open: false });
  useEffect(() => {
    // počet položek se změnil zvenku – zapamatovat nové klíče
    if (rows.length !== items.length) setRows(synced);
  });
  const isOpen = (i: number) => synced[i]?.open ?? false;
  const setOpenAt = (i: number, v: boolean) => setRows(synced.map((r, j) => (j === i ? { ...r, open: v } : r)));

  const update = (i: number, v: T) => onChange(items.map((x, j) => (j === i ? v : x)));
  const remove = (i: number) => {
    if (confirmDelete && !window.confirm('Opravdu odstranit?')) return;
    onChange(items.filter((_, j) => j !== i));
    setRows(synced.filter((_, j) => j !== i));
  };
  const shift = (i: number, d: -1 | 1) => {
    const j = i + d;
    if (j < 0 || j >= items.length) return;
    onChange(move(items, i, j));
    setRows(move(synced, i, j));
  };
  const duplicate = (i: number) => {
    const copy = JSON.parse(JSON.stringify(items[i])) as T;
    const next = items.slice();
    next.splice(i + 1, 0, copy);
    onChange(next);
    const r = synced.slice();
    r.splice(i + 1, 0, { key: newKey(), open: true });
    setRows(r);
  };
  const add = (create: () => T) => {
    onChange([...items, create()]);
    setRows([...synced, { key: newKey(), open: true }]);
  };

  return (
    <div>
      {items.length === 0 && emptyText ? <p className="text-muted small">{emptyText}</p> : null}
      {items.map((item, i) => (
        <div key={synced[i]?.key ?? i} className={`adm-item${nested ? ' adm-item--nested' : ''}${isOpen(i) ? ' is-open' : ''}`}>
          <div
            className="adm-item__head"
            role="button"
            tabIndex={0}
            aria-expanded={isOpen(i)}
            onClick={() => setOpenAt(i, !isOpen(i))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpenAt(i, !isOpen(i));
              }
            }}
          >
            <span className="adm-item__index">{i + 1}</span>
            <span className="adm-item__title">{itemTitle(item, i)}</span>
            <span className="adm-item__tools" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
              <button type="button" className="btn btn-outline-secondary" title="Posunout nahoru" disabled={i === 0} onClick={() => shift(i, -1)}>
                ↑
              </button>
              <button type="button" className="btn btn-outline-secondary" title="Posunout dolů" disabled={i === items.length - 1} onClick={() => shift(i, 1)}>
                ↓
              </button>
              <button type="button" className="btn btn-outline-secondary" title="Duplikovat" onClick={() => duplicate(i)}>
                Kopie
              </button>
              <button type="button" className="btn btn-outline-danger" title="Odstranit" onClick={() => remove(i)}>
                ✕
              </button>
            </span>
          </div>
          {isOpen(i) ? <div className="adm-item__body">{renderItem(item, (v) => update(i, v), i)}</div> : null}
        </div>
      ))}
      <div className="adm-add">
        {addOptions.length === 1 ? (
          <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => add(addOptions[0].create)}>
            + {addOptions[0].label}
          </button>
        ) : (
          <>
            <span className="small fw-semibold text-muted">{addLabel}:</span>
            {addOptions.map((o) => (
              <button key={o.label} type="button" className="btn btn-sm btn-outline-primary" onClick={() => add(o.create)}>
                + {o.label}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

/** Zkrácený text pro titulek položky v seznamu. */
export function short(text: string | undefined, max = 70): string {
  const t = (text ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
}
