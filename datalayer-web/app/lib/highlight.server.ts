import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import php from 'highlight.js/lib/languages/php';
import plaintext from 'highlight.js/lib/languages/plaintext';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

// Zvýraznění syntaxe na serveru: stránka dostane hotové <span class="hljs-…">
// a prohlížeč highlight.js nestahuje (dřív zhruba 970 kB JavaScriptu na
// stránce článku). Barvy tokenů jsou v app.css (paleta Atom One Dark).
// Jazyky i se zkratkami: js, ts, html, sh, txt… (aliasy highlight.js).

const LANGUAGES = { bash, css, javascript, json, php, plaintext, python, sql, typescript, xml, yaml };
for (const [name, language] of Object.entries(LANGUAGES)) hljs.registerLanguage(name, language);

/** Jazyky, mezi kterými hledá automatické rozpoznání (kód bez označení jazyka). */
const AUTO_DETECT = ['javascript', 'typescript', 'json', 'xml', 'css', 'bash', 'sql', 'python', 'php', 'yaml'];

/**
 * Obarví kód. `lang` = název nebo zkratka jazyka; neznámý nebo chybějící jazyk
 * rozpozná automaticky. Výstup je bezpečné HTML – text kódu highlight.js
 * escapuje a přidá jen <span class="hljs-…">.
 */
export function highlightCode(code: string, lang?: string): { html: string; language: string } {
  const name = lang?.trim().toLowerCase();
  const known = name ? hljs.getLanguage(name) : undefined;
  if (name && known) {
    const res = hljs.highlight(code, { language: name, ignoreIllegals: true });
    // zkratku (js, html…) převést na název jazyka (javascript, xml…)
    return { html: res.value, language: hljs.listLanguages().find((id) => hljs.getLanguage(id) === known) ?? name };
  }
  const res = hljs.highlightAuto(code, AUTO_DETECT);
  return { html: res.value, language: res.language ?? 'plaintext' };
}

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

/** Text kódu z HTML: zalomení řádků zůstanou, značky zmizí, entity se převedou zpět na znaky. */
function codeText(inner: string): string {
  return inner
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
      if (e[0] === '#') {
        const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        return Number.isFinite(n) ? String.fromCodePoint(n) : m;
      }
      return ENTITIES[e.toLowerCase()] ?? m;
    });
}

const CODE_BLOCK = /<pre([^>]*)>(\s*)<code([^>]*)>([\s\S]*?)<\/code>(\s*)<\/pre>/gi;

/**
 * Obarví bloky kódu (<pre><code class="language-…">) ve vyčištěném HTML článku.
 * Volat až po cleanHtml – výstup highlight.js už obsahuje jen escapovaný text
 * a značky <span class="hljs-…">.
 */
export function highlightCodeBlocks(html: string): string {
  return html.replace(CODE_BLOCK, (_m, preAttrs: string, before: string, codeAttrs: string, inner: string, after: string) => {
    const classes = (/class="([^"]*)"/i.exec(codeAttrs)?.[1] ?? '').split(/\s+/).filter(Boolean);
    const lang = classes.find((c) => /^(language|lang)-/.test(c))?.replace(/^(language|lang)-/, '');
    const { html: highlighted, language } = highlightCode(codeText(inner), lang);
    const cls = [...classes.filter((c) => c !== 'hljs'), ...(lang ? [] : [`language-${language}`]), 'hljs'].join(' ');
    // posouvatelný blok kódu musí jít ovládat i klávesnicí
    const pre = /tabindex=/i.test(preAttrs) ? preAttrs : `${preAttrs} tabindex="0"`;
    return `<pre${pre}>${before}<code class="${cls}">${highlighted}</code>${after}</pre>`;
  });
}
