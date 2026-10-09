import { describe, expect, it } from 'vitest';
import { highlightCode, highlightCodeBlocks } from '~/lib/highlight.server';
import { cleanHtml } from '~/lib/sanitize.server';

// Zvýraznění syntaxe na serveru (app/lib/highlight.server.ts): bloky kódu
// stránek a článků dostanou hotové <span class="hljs-…">, prohlížeč
// highlight.js nestahuje.

describe('highlightCode', () => {
  it('obarví JavaScript i podle zkratky js', () => {
    const r = highlightCode("dataLayer.push({ event: 'purchase', value: 1290 });", 'js');
    expect(r.language).toBe('javascript');
    expect(r.html).toContain('<span class="hljs-string">&#x27;purchase&#x27;</span>');
    expect(r.html).toContain('<span class="hljs-number">1290</span>');
  });

  it('zkratky jazyků z obsahu webu: ts, html, sql, text', () => {
    expect(highlightCode('const a: number = 1;', 'ts').language).toBe('typescript');
    expect(highlightCode('<div class="x"></div>', 'html').language).toBe('xml');
    expect(highlightCode('SELECT 1 FROM t', 'sql').html).toContain('hljs-keyword');
    const text = highlightCode('jen text <b>', 'text');
    expect(text.html).toBe('jen text &lt;b&gt;');
  });

  it('kód s HTML escapuje – výstup neobsahuje spustitelné značky', () => {
    const r = highlightCode('<script>alert(1)</script><img src=x onerror=alert(1)>', 'html');
    expect(r.html).not.toMatch(/<script|<img/);
    expect(r.html).toContain('&lt;');
  });

  it('neznámý nebo chybějící jazyk rozpozná automaticky', () => {
    expect(highlightCode('{"event": "purchase", "value": 1290}').language).toBe('json');
    expect(highlightCode('function f() { return 1; }', 'cobol-neexistuje').html).toContain('hljs-keyword');
  });
});

describe('highlightCodeBlocks (HTML článku)', () => {
  const block = (code: string, lang = 'language-javascript') =>
    cleanHtml(`<div class="code-container"><div class="code-header"><span class="code-lang">javascript</span></div><pre class="code-content"><code class="${lang}">${code}</code></pre></div>`);

  it('obarví blok, zachová třídy a entity nepřevede dvakrát', () => {
    const out = highlightCodeBlocks(block('if (a &lt; b &amp;&amp; c) { x = "&gt;"; }'));
    expect(out).toContain('<pre class="code-content"><code class="language-javascript hljs">');
    expect(out).toContain('<span class="hljs-keyword">if</span>');
    expect(out).toContain('a &lt; b &amp;&amp; c');
    expect(out).not.toContain('&amp;lt;');
    expect(out).toContain('<div class="code-header">');
  });

  it('inline kód v textu nechá být', () => {
    const html = cleanHtml('<p>Událost <code>purchase</code> pošle hodnotu.</p>');
    expect(highlightCodeBlocks(html)).toBe(html);
  });

  it('blok bez jazyka dostane rozpoznaný jazyk, <br> převede na nový řádek', () => {
    const out = highlightCodeBlocks(cleanHtml('<pre><code>{"a": 1,<br>"b": [true, null]}</code></pre>'));
    expect(out).toMatch(/<code class="language-json hljs">/);
    expect(out).toContain('\n');
    expect(out).not.toContain('<br');
  });

  it('obsah, který už obsahoval značky, se neztratí ani nezdvojí', () => {
    const out = highlightCodeBlocks(block('<span class="hljs-keyword">const</span> x = 1;'));
    expect(out).toContain('<span class="hljs-keyword">const</span>');
    expect(out.match(/hljs-keyword/g)).toHaveLength(1);
  });
});
