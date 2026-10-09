import { useEffect, useMemo, useState } from 'react';
import { useFetcher } from 'react-router';
import type { SiteTexts } from '~/content/schema';
import { checkText } from '~/lib/textRules';
import { humanPath } from './PageEditor';
import { LinesInput, LinkInput, ListEditor, TextArea, TextInput } from './fields';
import { Card, PageHead, Pill, formatDateTime } from './ui';

// Editor textů webu mimo stránky: kontaktní formulář, cookie lišta, blog,
// děkovací a chybová stránka (dokument content/texts).

type Field = { key: string; label: string; type?: 'text' | 'area' | 'html' | 'lines'; help?: string };
type Group = { id: keyof SiteTexts; title: string; desc: string; fields: Field[] };

const GROUPS: Group[] = [
  {
    id: 'contact',
    title: 'Kontaktní formulář',
    desc: 'Výchozí texty bloku s formulářem. Nadpis, úvod a nápovědu v poli zprávy jde nastavit i u každé stránky zvlášť.',
    fields: [
      { key: 'defaultTitle', label: 'Výchozí nadpis' },
      { key: 'leadWithPhone', label: 'Úvod, když je vyplněný telefon', type: 'area' },
      { key: 'leadWithoutPhone', label: 'Úvod bez telefonu', type: 'area' },
      { key: 'defaultPlaceholder', label: 'Nápověda v poli zprávy' },
      { key: 'legal', label: 'Text o zpracování údajů pod formulářem', type: 'html' },
      { key: 'submit', label: 'Tlačítko odeslání', help: 'Hranaté závorky doplní web sám.' },
      { key: 'note', label: 'Poznámka pod tlačítkem' },
      { key: 'successTitle', label: 'Nadpis po odeslání' },
      { key: 'successText', label: 'Text po odeslání', help: '{email} nahradí adresa návštěvníka.' },
      { key: 'successPhone', label: 'Dovětek s telefonem', help: '{phone} nahradí telefon z Nastavení. Bez telefonu se nezobrazí.' },
      { key: 'personName', label: 'Kontaktní osoba (nepovinné)', help: 'Např. „Odpovídá Jana Nováková“. Prázdné = blok bez kontaktní osoby, fotky i iniciál.' },
      { key: 'personNote', label: 'Doplněk ke jménu (nepovinné)' },
      { key: 'personPhoto', label: 'Fotka (cesta nebo https URL)', help: 'Jen s vyplněnou kontaktní osobou. Bez fotky web ukáže iniciály.' },
    ],
  },
  {
    id: 'page',
    title: 'Šablona stránek',
    desc: 'Společné texty všech stránek.',
    fields: [
      { key: 'faqTitle', label: 'Výchozí nadpis FAQ' },
    ],
  },
  {
    id: 'cookieBar',
    title: 'Cookie lišta',
    desc: 'Odmítnout a přijmout musí zůstat stejně snadné (žádné „dark patterns“).',
    fields: [
      { key: 'title', label: 'Nadpis' },
      { key: 'text', label: 'Text lišty', type: 'html' },
      { key: 'necessary', label: 'Kategorie Nezbytné', type: 'html' },
      { key: 'analytics', label: 'Kategorie Analytické', type: 'html' },
      { key: 'marketing', label: 'Kategorie Marketingové', type: 'html' },
      { key: 'reject', label: 'Tlačítko Odmítnout vše' },
      { key: 'settings', label: 'Tlačítko Nastavení' },
      { key: 'save', label: 'Tlačítko Uložit volbu' },
      { key: 'accept', label: 'Tlačítko Přijmout vše' },
    ],
  },
  {
    id: 'blog',
    title: 'Blog',
    desc: 'Úvod výpisu článků a kontaktní blok pod články.',
    fields: [
      { key: 'seoTitle', label: 'SEO title výpisu' },
      { key: 'seoDescription', label: 'Meta description výpisu', type: 'area' },
      { key: 'eyebrow', label: 'Štítek nad nadpisem' },
      { key: 'title', label: 'Nadpis H1' },
      { key: 'perex', label: 'Úvodní text', type: 'area' },
      { key: 'empty', label: 'Text, když blog nemá články' },
      { key: 'readMore', label: 'Odkaz „Číst článek“' },
      { key: 'ctaTitle', label: 'Nadpis kontaktního bloku pod články' },
      { key: 'ctaLead', label: 'Úvod kontaktního bloku', type: 'area' },
      { key: 'ctaPlaceholder', label: 'Nápověda v poli zprávy' },
    ],
  },
  {
    id: 'thankYou',
    title: 'Děkovací stránka',
    desc: 'Zobrazí se po odeslání formuláře bez JavaScriptu.',
    fields: [
      { key: 'title', label: 'Nadpis' },
      { key: 'text', label: 'Text', type: 'area' },
      { key: 'errorTitle', label: 'Nadpis při chybě' },
      { key: 'back', label: 'Tlačítko zpět' },
    ],
  },
  {
    id: 'notFound',
    title: 'Stránka nenalezena (404)',
    desc: 'Když návštěvník otevře neexistující adresu.',
    fields: [
      { key: 'title', label: 'Nadpis' },
      { key: 'text', label: 'Text', type: 'area' },
      { key: 'home', label: 'Tlačítko na úvod' },
    ],
  },
  {
    id: 'organization',
    title: 'Firma ve strukturovaných datech',
    desc: 'Popis firmy pro vyhledávače (schema.org Organization) a llms.txt.',
    fields: [{ key: 'description', label: 'Popis firmy', type: 'area' }],
  },
];

type SaveResult = { ok: true } | { ok: false; message: string; issues?: { path: string; message: string }[] };

export function TextsEditor({ initial, meta }: { initial: SiteTexts; meta: { updatedAt?: string; updatedBy?: string } }) {
  const [texts, setTexts] = useState<SiteTexts>(initial);
  const [savedJson, setSavedJson] = useState(() => JSON.stringify(initial));
  const fetcher = useFetcher<SaveResult>();
  const saving = fetcher.state !== 'idle';
  const dirty = JSON.stringify(texts) !== savedJson;
  const result = fetcher.data;

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.ok) setSavedJson(JSON.stringify(texts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher.state, fetcher.data]);

  useEffect(() => {
    if (!dirty) return;
    const onLeave = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', onLeave);
    return () => window.removeEventListener('beforeunload', onLeave);
  }, [dirty]);

  const get = (g: keyof SiteTexts, k: string) => {
    const v = (texts[g] as Record<string, unknown>)[k];
    return Array.isArray(v) ? v.join('\n') : String(v ?? '');
  };
  const getLines = (g: keyof SiteTexts, k: string) => ((texts[g] as Record<string, unknown>)[k] as string[] | undefined) ?? [];
  const setLines = (g: keyof SiteTexts, k: string, v: string[] | undefined) => setTexts((t) => ({ ...t, [g]: { ...(t[g] as object), [k]: v ?? [] } }));
  const proc = texts.process;
  const setProcess = (patch: Partial<SiteTexts['process']>) => setTexts((t) => ({ ...t, process: { ...t.process, ...patch } }));
  const setField = (g: keyof SiteTexts, k: string, v: string) => setTexts((t) => ({ ...t, [g]: { ...(t[g] as object), [k]: v } }));
  const save = () => fetcher.submit({ data: JSON.stringify(texts) }, { method: 'post' });

  const issues = useMemo(
    () =>
      [
        ...GROUPS.flatMap((g) => g.fields.flatMap((f) => checkText(get(g.id, f.key), `${g.title} › ${f.label}`))),
        ...proc.steps.flatMap((st, i) => [st.title, st.text, st.output ?? '', st.fromClient ?? ''].flatMap((x) => checkText(x, `Postup › krok ${i + 1}`))),
      ].filter((i) => i.level === 'error'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [texts],
  );

  return (
    <>
      <PageHead
        title="Texty webu"
        desc="Texty mimo jednotlivé stránky: formulář, cookie lišta, blog, děkovací a chybová stránka."
        actions={
          <button type="button" className="btn btn-primary" onClick={save} disabled={saving}>
            {saving ? 'Ukládám…' : 'Uložit'}
          </button>
        }
      />
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
      {result && result.ok && !dirty ? <div className="alert alert-success">Změny jsme uložili. Web je použije do půl minuty.</div> : null}
      {issues.length ? (
        <div className="alert alert-warning">
          <strong>Kontrola textů:</strong> {issues.length} k opravě.
          <ul className="mb-0 mt-1">
            {issues.slice(0, 8).map((i, k) => (
              <li key={k}>
                {i.where}: {i.message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {GROUPS.map((g) => (
        <Card key={g.id} title={g.title} desc={g.desc}>
          <div className="row g-2">
            {g.fields.map((f) =>
              f.type === 'lines' ? (
                <div className="col-12" key={f.key}>
                  <LinesInput label={f.label} value={getLines(g.id, f.key)} onChange={(v) => setLines(g.id, f.key, v)} rows={3} help={f.help} />
                </div>
              ) : f.type === 'area' || f.type === 'html' ? (
                <div className="col-12" key={f.key}>
                  <TextArea label={f.label} value={get(g.id, f.key)} onChange={(v) => setField(g.id, f.key, v)} rows={3} html={f.type === 'html'} help={f.help} />
                </div>
              ) : (
                <div className="col-md-6" key={f.key}>
                  <TextInput label={f.label} value={get(g.id, f.key)} onChange={(v) => setField(g.id, f.key, v)} help={f.help} />
                </div>
              ),
            )}
          </div>
        </Card>
      ))}

      <Card title="Postup spolupráce" desc="Pět kroků, které ukazuje blok „Postup spolupráce“ na homepage i u služeb. Nadpis a úvod sekce má každá stránka vlastní, u služby jde upravit i popis kroku 3.">
        {proc.steps.map((st, i) => (
          <div className="adm-fieldset" key={i}>
            <div className="row g-2">
              <div className="col-md-4">
                <TextInput
                  label={`Krok ${i + 1} – název`}
                  value={st.title}
                  onChange={(title) => setProcess({ steps: proc.steps.map((x, j) => (j === i ? { ...x, title } : x)) })}
                />
              </div>
              <div className="col-md-8">
                <TextInput label="Popis" value={st.text} onChange={(text) => setProcess({ steps: proc.steps.map((x, j) => (j === i ? { ...x, text } : x)) })} />
              </div>
              <div className="col-md-6">
                <TextInput
                  label="Výstup"
                  value={st.output}
                  onChange={(output) => setProcess({ steps: proc.steps.map((x, j) => (j === i ? { ...x, output: output || undefined } : x)) })}
                />
              </div>
              <div className="col-md-6">
                <TextInput
                  label="Co potřebujeme od vás"
                  value={st.fromClient}
                  onChange={(fromClient) => setProcess({ steps: proc.steps.map((x, j) => (j === i ? { ...x, fromClient: fromClient || undefined } : x)) })}
                />
              </div>
            </div>
          </div>
        ))}
      </Card>

      <Card title="Odkazy na děkovací stránce" desc="Kam může návštěvník pokračovat po odeslání formuláře bez JavaScriptu.">
        <ListEditor
          nested
          confirmDelete={false}
          items={texts.thankYou.links}
          onChange={(links) => setTexts((t) => ({ ...t, thankYou: { ...t.thankYou, links } }))}
          itemTitle={(l) => l.label || 'Odkaz'}
          addOptions={texts.thankYou.links.length < 4 ? [{ label: 'Odkaz', create: () => ({ label: 'Nový odkaz', href: '/' }) }] : []}
          renderItem={(l, set) => <LinkInput label="Odkaz" value={l} onChange={(v) => v && set(v)} />}
        />
      </Card>

      <div className="adm-savebar">
        <span className={dirty ? 'adm-savebar__status is-dirty' : 'adm-savebar__status'}>
          {saving ? 'Ukládám…' : dirty ? 'Máte neuložené změny' : meta.updatedAt ? `Uloženo ${formatDateTime(meta.updatedAt)} (${meta.updatedBy ?? '–'})` : 'Výchozí texty z kódu – zatím neuložené'}{' '}
          {issues.length ? <Pill tone="danger">{issues.length} k opravě</Pill> : null}
        </span>
        <button type="button" className="btn btn-primary" onClick={save} disabled={saving}>
          {saving ? 'Ukládám…' : 'Uložit'}
        </button>
      </div>
    </>
  );
}
