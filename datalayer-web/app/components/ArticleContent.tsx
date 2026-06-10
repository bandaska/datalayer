import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

/**
 * Render obsahu článku uloženého v DB (HTML) – ekvivalent původního
 * DbContentControl. Obsah se sanitizuje, nasvítí (highlight.js) a doplní
 * o funkci kopírování kódu (původní copyCode + tlačítko .btn-copy).
 *
 * `html` se sanitizuje na serveru (viz cleanHtml v blog.$slug loaderu),
 * sem už chodí bezpečné HTML.
 */
export function ArticleContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Zvýraznění syntaxe.
    root.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });

    // Kopírovací tlačítka (delegace na celý obsah).
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.btn-copy');
      if (!btn) return;
      const code = btn.closest('.code-container')?.querySelector('code')?.textContent ?? '';
      navigator.clipboard.writeText(code).then(() => {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        (btn as HTMLElement).style.color = '#00ffff';
        setTimeout(() => {
          btn.innerHTML = original;
          (btn as HTMLElement).style.color = '';
        }, 2000);
      });
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [html]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
