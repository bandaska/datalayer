type Defaults = {
  slug?: string;
  title?: string;
  author?: string;
  date?: string; // YYYY-MM-DD
  content?: string;
};

// Sdílená políčka formuláře článku (pro vytvoření i editaci).
// Při editaci je slug neměnný (slugLocked).
export function ArticleFormFields({
  defaults = {},
  slugLocked = false,
}: {
  defaults?: Defaults;
  slugLocked?: boolean;
}) {
  return (
    <>
      <div className="row g-3">
        <div className="col-md-8">
          <label className="form-label">Titulek</label>
          <input
            name="title"
            type="text"
            className="form-control"
            defaultValue={defaults.title}
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Datum</label>
          <input
            name="date"
            type="date"
            className="form-control"
            defaultValue={defaults.date}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Slug (URL)</label>
          <input
            name="slug"
            type="text"
            className="form-control"
            defaultValue={defaults.slug}
            placeholder="napr-muj-clanek"
            pattern="[a-z0-9-]+"
            title="Malá písmena, číslice a pomlčky."
            required={!slugLocked}
            readOnly={slugLocked}
          />
          <div className="form-text">Malá písmena, číslice a pomlčky. Po vytvoření neměnný.</div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Autor</label>
          <input
            name="author"
            type="text"
            className="form-control"
            defaultValue={defaults.author}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label">Obsah (HTML)</label>
          <textarea
            name="content"
            className="form-control font-monospace"
            rows={16}
            defaultValue={defaults.content}
            required
          />
          <div className="form-text">
            HTML obsah článku. Sanitizuje se při zobrazení (povolené tagy včetně
            code-container, infobox apod.).
          </div>
        </div>
      </div>
    </>
  );
}
