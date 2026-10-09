import { useEffect, useRef } from 'react';
import { pushEvent } from '~/lib/dataLayer';

/**
 * Render obsahu článku uloženého v DB (HTML) – ekvivalent původního
 * DbContentControl, s funkcí kopírování kódu (původní copyCode + tlačítko
 * .btn-copy).
 *
 * `html` vyčistí a obarví server (cleanHtml a highlightCodeBlocks v loaderu
 * blog.$slug), sem už chodí bezpečné HTML s hotovým zvýrazněním syntaxe.
 */
export function ArticleContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Kopírovací tlačítka (delegace na celý obsah).
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.btn-copy');
      if (!btn) return;
      const code = btn.closest('.code-container')?.querySelector('code')?.textContent ?? '';
      navigator.clipboard.writeText(code).then(() => {
        pushEvent('code_copy', { snippet_id: btn.closest('.code-container')?.id || 'article' });
        const original = btn.innerHTML;
        btn.textContent = 'Zkopírováno';
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
