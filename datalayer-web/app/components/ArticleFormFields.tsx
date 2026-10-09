import { useState } from 'react';
import { Counter } from './admin/ui';
import { RichTextEditor } from './RichTextEditor';

type Defaults = {
  slug?: string;
  title?: string;
  author?: string;
  date?: string; // YYYY-MM-DD
  description?: string;
  content?: string;
};

// Sdílená políčka formuláře článku (pro vytvoření i editaci).
// Při editaci je slug neměnný (slugLocked). Vzhled z app/admin.css.
export function ArticleFormFields({
  defaults = {},
  slugLocked = false,
}: {
  defaults?: Defaults;
  slugLocked?: boolean;
}) {
  // Jen pro počítadlo znaků – formulář dál odesílá hodnotu přímo z textarey.
  const [description, setDescription] = useState(defaults.description ?? '');

  return (
    <div className="row g-3">
      <div className="col-md-8">
        <label className="form-label" htmlFor="article-title">
          Titulek
        </label>
        <input id="article-title" name="title" type="text" className="form-control" defaultValue={defaults.title} required />
      </div>
      <div className="col-md-4">
        <label className="form-label" htmlFor="article-date">
          Datum
        </label>
        <input id="article-date" name="date" type="date" className="form-control" defaultValue={defaults.date} required />
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor="article-slug">
          URL článku
        </label>
        <div className="input-group">
          <span className="input-group-text" style={{ borderColor: 'var(--a-border-strong)' }}>
            /blog/
          </span>
          <input
            id="article-slug"
            name="slug"
            type="text"
            className="form-control"
            defaultValue={defaults.slug}
            placeholder="muj-novy-clanek"
            pattern="[a-z0-9-]+"
            title="Malá písmena bez diakritiky, číslice a spojovníky."
            required={!slugLocked}
            readOnly={slugLocked}
            style={slugLocked ? { background: 'var(--a-bg)' } : undefined}
            aria-describedby="article-slug-help"
          />
        </div>
        <div id="article-slug-help" className="form-text">
          {slugLocked
            ? 'URL po vytvoření článku už nejde změnit.'
            : 'Malá písmena bez diakritiky, číslice a spojovníky. Po vytvoření článku URL už nezměníte.'}
        </div>
      </div>
      <div className="col-md-6">
        <label className="form-label" htmlFor="article-author">
          Autor
        </label>
        <input id="article-author" name="author" type="text" className="form-control" defaultValue={defaults.author} required />
      </div>
      <div className="col-12">
        <div className="d-flex justify-content-between align-items-baseline gap-2">
          <label className="form-label" htmlFor="article-description">
            Meta popis
          </label>
          <Counter value={description} min={140} max={160} />
        </div>
        <textarea
          id="article-description"
          name="description"
          className="form-control"
          rows={2}
          maxLength={200}
          defaultValue={defaults.description}
          onChange={(e) => setDescription(e.target.value)}
          aria-describedby="article-description-help"
        />
        <div id="article-description-help" className="form-text">
          Popisek do výsledků vyhledávání a pro sdílení, ideálně 140–160 znaků. Když pole necháte prázdné, web použije
          začátek článku.
        </div>
      </div>
      <div className="col-12">
        <div className="form-label">Obsah</div>
        <RichTextEditor name="content" defaultValue={defaults.content} rows={16} />
        <div className="form-text">
          Tlačítko „HTML“ přepne editor na surové HTML, třeba kvůli blokům code-container a infobox. Web obsah při
          zobrazení pročistí od nebezpečného kódu.
        </div>
      </div>
    </div>
  );
}
