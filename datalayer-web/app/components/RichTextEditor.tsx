import { useEffect, useRef, useState } from 'react';

// Jednoduchý WYSIWYG editor jako progresivní vylepšení nad <textarea>.
// - Bez JS / na serveru se zobrazí prostá textarea (zdroj pravdy pro odeslání).
// - Po načtení JS se textarea skryje a edituje se vizuálně; obsah se průběžně
//   synchronizuje zpět do textarea, takže formulář odešle vždy aktuální HTML.
// - Tlačítko „HTML" přepne na editaci surového HTML (kvůli vlastním blokům
//   jako code-container / infobox).

const CODE_BLOCK = `<div class="code-container"><div class="code-header"><span class="code-lang">javascript</span><button class="btn-copy" type="button"><i class="far fa-copy"></i> Copy</button></div><pre class="code-content"><code class="language-javascript">// kód</code></pre></div><p></p>`;

const INFOBOX = `<div class="infobox"><div class="infobox-icon"><i class="fas fa-lightbulb"></i></div><div class="infobox-content"><h5>Tip</h5><p>Text…</p></div></div><p></p>`;

export function RichTextEditor({
  name,
  defaultValue = '',
  rows = 16,
}: {
  name: string;
  defaultValue?: string;
  rows?: number;
}) {
  const taRef = useRef<HTMLTextAreaElement>(null);
  const edRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [raw, setRaw] = useState(false);

  useEffect(() => setMounted(true), []);

  // Při přechodu do vizuálního režimu naplň editor z textarea.
  useEffect(() => {
    if (mounted && !raw && edRef.current && taRef.current) {
      edRef.current.innerHTML = taRef.current.value;
    }
  }, [mounted, raw]);

  function sync() {
    if (edRef.current && taRef.current) {
      taRef.current.value = edRef.current.innerHTML;
    }
  }

  function cmd(command: string, value?: string) {
    document.execCommand(command, false, value);
    edRef.current?.focus();
    sync();
  }

  function insertHTML(html: string) {
    edRef.current?.focus();
    document.execCommand('insertHTML', false, html);
    sync();
  }

  function makeLink() {
    const url = window.prompt('URL odkazu (https://…):');
    if (url) cmd('createLink', url);
  }

  function toggleRaw() {
    if (!raw) sync(); // vizuální → HTML: ulož aktuální obsah do textarea
    setRaw((v) => !v);
  }

  const Btn = ({
    onClick,
    title,
    children,
  }: {
    onClick: () => void;
    title: string;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      className="btn btn-sm btn-outline-secondary"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return (
    <div className="rte">
      {mounted ? (
        <div className="rte-toolbar d-flex flex-wrap gap-1 mb-2">
          {!raw ? (
            <>
              <Btn title="Tučně" onClick={() => cmd('bold')}>
                <b>B</b>
              </Btn>
              <Btn title="Kurzíva" onClick={() => cmd('italic')}>
                <i>I</i>
              </Btn>
              <Btn title="Nadpis 2" onClick={() => cmd('formatBlock', 'H2')}>
                H2
              </Btn>
              <Btn title="Nadpis 3" onClick={() => cmd('formatBlock', 'H3')}>
                H3
              </Btn>
              <Btn title="Odstavec" onClick={() => cmd('formatBlock', 'P')}>
                ¶
              </Btn>
              <Btn title="Odrážky" onClick={() => cmd('insertUnorderedList')}>
                • List
              </Btn>
              <Btn title="Číslovaný seznam" onClick={() => cmd('insertOrderedList')}>
                1. List
              </Btn>
              <Btn title="Odkaz" onClick={makeLink}>
                🔗
              </Btn>
              <Btn title="Blok kódu" onClick={() => insertHTML(CODE_BLOCK)}>
                {'</>'}
              </Btn>
              <Btn title="Infobox" onClick={() => insertHTML(INFOBOX)}>
                ⓘ
              </Btn>
            </>
          ) : null}
          <button
            type="button"
            className={`btn btn-sm ${raw ? 'btn-cta' : 'btn-outline-secondary'} ms-auto`}
            onClick={toggleRaw}
          >
            {raw ? 'Vizuální editor' : 'HTML'}
          </button>
        </div>
      ) : null}

      {mounted && !raw ? (
        <div
          ref={edRef}
          className="rte-area form-control"
          contentEditable
          suppressContentEditableWarning
          onInput={sync}
          onBlur={sync}
        />
      ) : null}

      <textarea
        ref={taRef}
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        className="form-control font-monospace"
        style={mounted && !raw ? { display: 'none' } : undefined}
      />
    </div>
  );
}
