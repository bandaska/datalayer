import { RichTextEditor } from './RichTextEditor';

type Defaults = {
  slug?: string;
  title?: string;
  perex?: string;
  content?: string;
};

// Sdílená políčka formuláře landing page (vytvoření i editace).
export function PageFormFields({
  defaults = {},
  slugLocked = false,
}: {
  defaults?: Defaults;
  slugLocked?: boolean;
}) {
  return (
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
        <label className="form-label">Slug (URL)</label>
        <input
          name="slug"
          type="text"
          className="form-control"
          defaultValue={defaults.slug}
          placeholder="napr-kampan-ga4"
          pattern="[a-z0-9-]+"
          title="Malá písmena, číslice a pomlčky."
          required={!slugLocked}
          readOnly={slugLocked}
        />
        <div className="form-text">Dostupné na /{'{slug}'}. Po vytvoření neměnný.</div>
      </div>
      <div className="col-12">
        <label className="form-label">Perex</label>
        <input
          name="perex"
          type="text"
          className="form-control"
          defaultValue={defaults.perex}
          placeholder="Krátký podtitulek pod nadpisem (volitelné)"
        />
      </div>
      <div className="col-12">
        <label className="form-label">Obsah</label>
        <RichTextEditor name="content" defaultValue={defaults.content} rows={16} />
      </div>
    </div>
  );
}
