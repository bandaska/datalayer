import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router';
import type { Link, NavItem, NavLink, Navigation, Pictogram } from '~/content/schema';
import { humanPath } from './PageEditor';
import { LinkInput, ListEditor, PictogramPicker, Select, TextArea, TextInput } from './fields';
import { Card, PageHead, formatDateTime, plural } from './ui';

// Editor hlavního menu, patičky a mobilní lišty (dokument content/navigation).

type MenuItem = Extract<NavItem, { type: 'menu' }>;
type MenuColumn = MenuItem['columns'][number];
type FooterColumn = Navigation['footer']['columns'][number];
type SaveResult = { ok: true } | { ok: false; message: string; issues?: { path: string; message: string }[] };

export type PageChoice = { path: string; label: string; tagline: string; pictogram: Pictogram };

function LinksEditor({ links, onChange, hrefList }: { links: Link[]; onChange: (l: Link[]) => void; hrefList: string }) {
  return (
    <ListEditor<Link>
      nested
      confirmDelete={false}
      items={links}
      onChange={onChange}
      itemTitle={(l) => (
        <>
          {l.label || 'Odkaz'} <small>{l.href}</small>
        </>
      )}
      addOptions={[{ label: 'Odkaz', create: () => ({ label: '', href: '/' }) }]}
      renderItem={(l, set) => (
        <div className="row g-2">
          <div className="col-md-5">
            <TextInput label="Text" value={l.label} onChange={(label) => set({ ...l, label })} />
          </div>
          <div className="col-md-7">
            <TextInput label="Adresa" value={l.href} onChange={(href) => set({ ...l, href })} mono list={hrefList} />
          </div>
        </div>
      )}
    />
  );
}

function MenuLinkEditor({ item, onChange, pages, hrefList }: { item: NavLink; onChange: (v: NavLink) => void; pages: PageChoice[]; hrefList: string }) {
  return (
    <>
      <Select
        label="Vyplnit ze stránky"
        value=""
        onChange={(path) => {
          const p = pages.find((x) => x.path === path);
          if (p) onChange({ label: p.label, href: `/${p.path}`, tagline: p.tagline || undefined, pictogram: p.pictogram });
        }}
        options={[{ value: '', label: '– vyberte stránku –' }, ...pages.map((p) => ({ value: p.path, label: `${p.label} (/${p.path})` }))]}
        help="Doplní název, adresu, řádek „co to řeší“ a piktogram ze stránky. Pak je můžete upravit."
      />
      <div className="row g-2">
        <div className="col-md-5">
          <TextInput label="Text" value={item.label} onChange={(label) => onChange({ ...item, label })} />
        </div>
        <div className="col-md-7">
          <TextInput label="Adresa" value={item.href} onChange={(href) => onChange({ ...item, href })} mono list={hrefList} />
        </div>
      </div>
      <TextInput label="Řádek pod textem" value={item.tagline} onChange={(v) => onChange({ ...item, tagline: v || undefined })} counter={{ max: 45 }} />
      <PictogramPicker label="Piktogram" value={item.pictogram} onChange={(pictogram) => onChange({ ...item, pictogram })} allowEmpty />
    </>
  );
}

export function NavigationEditor({
  initial,
  pages,
  meta,
}: {
  initial: Navigation;
  pages: PageChoice[];
  meta: { updatedAt?: string; updatedBy?: string };
}) {
  const [nav, setNav] = useState<Navigation>(initial);
  const [savedJson, setSavedJson] = useState(() => JSON.stringify(initial));
  const fetcher = useFetcher<SaveResult>();
  const saving = fetcher.state !== 'idle';
  const dirty = JSON.stringify(nav) !== savedJson;
  const result = fetcher.data;
  const hrefList = 'adm-nav-hrefs';
  const menus = nav.items.filter((i): i is MenuItem => i.type === 'menu');

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data?.ok) setSavedJson(JSON.stringify(nav));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher.state, fetcher.data]);

  useEffect(() => {
    if (!dirty) return;
    const onLeave = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', onLeave);
    return () => window.removeEventListener('beforeunload', onLeave);
  }, [dirty]);

  const save = () => fetcher.submit({ data: JSON.stringify(nav) }, { method: 'post' });
  const setFooter = (patch: Partial<Navigation['footer']>) => setNav((n) => ({ ...n, footer: { ...n.footer, ...patch } }));

  return (
    <>
      <datalist id={hrefList}>
        <option value="#kontakt" />
        <option value="/blog" />
        {pages.map((p) => (
          <option key={p.path} value={`/${p.path}`}>
            {p.label}
          </option>
        ))}
      </datalist>

      <PageHead
        title="Menu a patička"
        desc="Hlavní menu včetně rozbalovacích sloupců, tlačítko, patička a lišta na mobilu."
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

      <Card title="Hlavní menu" desc="Položky zleva doprava. Rozbalovací menu s více sloupci se zobrazí jako široké mega-menu.">
        <ListEditor<NavItem>
          items={nav.items}
          onChange={(items) => setNav({ ...nav, items })}
          itemTitle={(i) => (
            <>
              {i.label || 'Položka'} <small>{i.type === 'menu' ? `rozbalovací menu · ${plural(i.columns.reduce((n, c) => n + c.items.length, 0), 'odkaz', 'odkazy', 'odkazů')}` : i.href}</small>
            </>
          )}
          addLabel="Přidat"
          addOptions={[
            { label: 'Odkaz', create: () => ({ type: 'link', label: 'Nový odkaz', href: '/' }) },
            { label: 'Rozbalovací menu', create: () => ({ type: 'menu', id: `menu-${nav.items.length + 1}`, label: 'Nové menu', columns: [{ items: [] }] }) },
          ]}
          renderItem={(item, set) =>
            item.type === 'link' ? (
              <div className="row g-2">
                <div className="col-md-5">
                  <TextInput label="Text" value={item.label} onChange={(label) => set({ ...item, label })} />
                </div>
                <div className="col-md-7">
                  <TextInput label="Adresa" value={item.href} onChange={(href) => set({ ...item, href })} mono list={hrefList} />
                </div>
              </div>
            ) : (
              <>
                <div className="row g-2">
                  <div className="col-md-6">
                    <TextInput label="Text v menu" value={item.label} onChange={(label) => set({ ...item, label })} />
                  </div>
                  <div className="col-md-6">
                    <TextInput label="ID menu" value={item.id} onChange={(id) => set({ ...item, id })} mono help="Na ID odkazuje blok „Přehled z menu“ a patička." />
                  </div>
                </div>
                <div className="form-label">Sloupce</div>
                <ListEditor<MenuColumn>
                  nested
                  items={item.columns}
                  onChange={(columns) => set({ ...item, columns })}
                  itemTitle={(c) => (
                    <>
                      {c.title || 'Sloupec bez nadpisu'} <small>{plural(c.items.length, 'odkaz', 'odkazy', 'odkazů')}</small>
                    </>
                  )}
                  addOptions={[{ label: 'Sloupec', create: () => ({ title: 'Nový sloupec', items: [] }) }]}
                  renderItem={(col, setCol) => (
                    <>
                      <TextInput label="Nadpis sloupce" value={col.title} onChange={(title) => setCol({ ...col, title: title || undefined })} />
                      <ListEditor<NavLink>
                        nested
                        items={col.items}
                        onChange={(items) => setCol({ ...col, items })}
                        itemTitle={(l) => (
                          <>
                            {l.label || 'Odkaz'} <small>{l.href}</small>
                          </>
                        )}
                        addOptions={[{ label: 'Odkaz', create: () => ({ label: '', href: '/' }) }]}
                        renderItem={(l, setL) => <MenuLinkEditor item={l} onChange={setL} pages={pages} hrefList={hrefList} />}
                      />
                    </>
                  )}
                />
                <LinkInput label="Odkaz pod sloupci" value={item.footerLink} onChange={(footerLink) => set({ ...item, footerLink })} optional hrefList={hrefList} />
              </>
            )
          }
        />
      </Card>

      <Card title="Tlačítko v menu" desc="Vede na kontaktní formulář na stránce, nebo na /kontakt.">
        <TextInput label="Text tlačítka" value={nav.cta.label} onChange={(label) => setNav({ ...nav, cta: { label } })} help="Hranaté závorky doplní web sám." />
      </Card>

      <Card title="Patička">
        <TextArea label="Popis pod logem" value={nav.footer.description} onChange={(description) => setFooter({ description })} rows={3} />
        <div className="form-label">Sloupce odkazů</div>
        <ListEditor<FooterColumn>
          items={nav.footer.columns}
          onChange={(columns) => setFooter({ columns })}
          itemTitle={(c) => (
            <>
              {c.title} <small>{c.fromMenu ? `z menu „${c.fromMenu}“${c.links.length ? ` + ${plural(c.links.length, 'odkaz', 'odkazy', 'odkazů')}` : ''}` : plural(c.links.length, 'odkaz', 'odkazy', 'odkazů')}</small>
            </>
          )}
          addOptions={[{ label: 'Sloupec', create: () => ({ title: 'Nový sloupec', links: [] }) }]}
          renderItem={(col, set) => (
            <>
              <div className="row g-2">
                <div className="col-md-6">
                  <TextInput label="Nadpis" value={col.title} onChange={(title) => set({ ...col, title })} />
                </div>
                <div className="col-md-6">
                  <Select
                    label="Převzít odkazy z menu"
                    value={col.fromMenu ?? ''}
                    onChange={(v) => set({ ...col, fromMenu: v || undefined })}
                    options={[{ value: '', label: '– ne, jen ruční odkazy –' }, ...menus.map((m) => ({ value: m.id, label: m.label }))]}
                    help="Odkazy z menu se zobrazí jako první, ruční za nimi."
                  />
                </div>
              </div>
              <div className="form-label">Ruční odkazy</div>
              <LinksEditor links={col.links} onChange={(links) => set({ ...col, links })} hrefList={hrefList} />
            </>
          )}
        />
        <div className="row g-2 mt-1">
          <div className="col-md-6">
            <TextInput label="Nadpis sloupce s kontaktem" value={nav.footer.contactTitle} onChange={(contactTitle) => setFooter({ contactTitle })} help="E-mail, telefon a LinkedIn se berou z Nastavení." />
          </div>
          <div className="col-md-6">
            <TextInput label="Text odkazu na nastavení cookies" value={nav.footer.cookieSettingsLabel} onChange={(cookieSettingsLabel) => setFooter({ cookieSettingsLabel })} />
          </div>
        </div>
        <div className="form-label">Odkazy ve spodním řádku</div>
        <LinksEditor links={nav.footer.bottomLinks} onChange={(bottomLinks) => setFooter({ bottomLinks })} hrefList={hrefList} />
      </Card>

      <Card title="Lišta na mobilu" desc="Dvě tlačítka dole na obrazovce telefonu. „Zavolat“ se ukáže, jen když je v Nastavení telefon.">
        <div className="row g-2">
          <div className="col-md-6">
            <TextInput label="Tlačítko pro telefon" value={nav.mobileBar.callLabel} onChange={(callLabel) => setNav({ ...nav, mobileBar: { ...nav.mobileBar, callLabel } })} />
          </div>
          <div className="col-md-6">
            <TextInput label="Tlačítko pro formulář" value={nav.mobileBar.writeLabel} onChange={(writeLabel) => setNav({ ...nav, mobileBar: { ...nav.mobileBar, writeLabel } })} />
          </div>
        </div>
      </Card>

      <div className="adm-savebar">
        <span className={dirty ? 'adm-savebar__status is-dirty' : 'adm-savebar__status'}>
          {saving ? 'Ukládám…' : dirty ? 'Máte neuložené změny' : meta.updatedAt ? `Uloženo ${formatDateTime(meta.updatedAt)} (${meta.updatedBy ?? '–'})` : 'Výchozí menu z kódu – zatím neuložené'}
        </span>
        <button type="button" className="btn btn-primary" onClick={save} disabled={saving}>
          {saving ? 'Ukládám…' : 'Uložit'}
        </button>
      </div>
    </>
  );
}
