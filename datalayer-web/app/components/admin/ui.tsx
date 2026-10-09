import type { ReactNode } from 'react';
import { Link } from 'react-router';

// Sdílené prvky administrace (styly v app/admin.css).

export function PageHead({
  title,
  desc,
  actions,
  crumb,
}: {
  title: ReactNode;
  desc?: ReactNode;
  actions?: ReactNode;
  /** Odkaz zpět, např. { to: '/admin/pages', label: 'Stránky' } */
  crumb?: { to: string; label: string };
}) {
  return (
    <div className="adm-head">
      <div>
        {crumb ? (
          <div className="adm-crumb">
            <Link to={crumb.to}>← {crumb.label}</Link>
          </div>
        ) : null}
        <h1>{title}</h1>
        {desc ? <p>{desc}</p> : null}
      </div>
      {actions ? <div className="adm-head__actions">{actions}</div> : null}
    </div>
  );
}

export function Card({
  title,
  desc,
  actions,
  flush,
  children,
}: {
  title?: ReactNode;
  desc?: ReactNode;
  actions?: ReactNode;
  /** Bez vnitřního odsazení (tabulky přes celou šířku). */
  flush?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={flush ? 'adm-card adm-card--flush' : 'adm-card'}>
      {title || actions ? (
        <div className="adm-card__head" style={flush ? { padding: '16px 18px 0' } : undefined}>
          <div>
            {title ? <h2>{title}</h2> : null}
            {desc ? <p className="adm-card__desc mb-0">{desc}</p> : null}
          </div>
          {actions}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export type PillTone = 'ok' | 'warn' | 'info' | 'danger' | 'muted';

export function Pill({ tone = 'muted', children }: { tone?: PillTone; children: ReactNode }) {
  return <span className={`adm-pill adm-pill--${tone}`}>{children}</span>;
}

/** Počítadlo znaků s barvou podle doporučeného rozsahu (SEO title, description). */
export function Counter({ value, min, max }: { value: string; min?: number; max: number }) {
  const n = value.length;
  const cls = n > max ? 'adm-counter is-over' : min !== undefined && n >= min ? 'adm-counter is-ok' : 'adm-counter';
  return (
    <span className={cls}>
      {n} / {min !== undefined ? `${min}–` : ''}
      {max} znaků
    </span>
  );
}

/** Počet s českým tvarem slova: 1 blok, 2–4 bloky, 0 a 5+ bloků. */
export function plural(n: number, one: string, few: string, many: string): string {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`;
}

/** Datum a čas pro administraci (česky, pražský čas). */
export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return '–';
  return new Date(iso).toLocaleString('cs-CZ', { timeZone: 'Europe/Prague', dateStyle: 'medium', timeStyle: 'short' });
}
