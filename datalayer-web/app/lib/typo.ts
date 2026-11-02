// Česká typografie při vykreslení (ČSN 01 6910, jazykový audit kap. 4.1): nedělitelná
// mezera za jednopísmennými předložkami a spojkami, mezi číslem a jednotkou a za „§“,
// aby nezůstaly na konci řádku, a nezlomitelný spojovník v „e-shop“, aby se slovo
// nelámalo na „e-“ a „shop“. Obsah v administraci zůstává s obyčejnými znaky.

const NBSP = ' ';
const SINGLE = /(?<=^|[\s(„ ])([kKsSvVzZoOuUaAiI]) (?=\S)/g;
const UNIT = /(\d) (?=(?:%|‰|Kč|ms|s|GiB|MB|kB|USD|EUR)(?![\p{L}\d]))/gu;
const PARAGRAPH = /§ (?=\d)/g;
const ESHOP = /(?<![\p{L}\d])([eE])-(?=shop)/gu;
const NB_HYPHEN = '\u2011';

/** Prostý text s nedělitelnými mezerami. */
export function typo(text: string): string {
  return text
    .replace(SINGLE, `$1${NBSP}`)
    .replace(UNIT, `$1${NBSP}`)
    .replace(PARAGRAPH, `§${NBSP}`)
    .replace(ESHOP, `$1${NB_HYPHEN}`);
}

/** HTML s nedělitelnými mezerami jen v textu – značky, atributy, <code> a <pre> nechá být. */
export function typoHtml(html: string): string {
  let skip = 0;
  return html
    .split(/(<[^>]*>)/)
    .map((part, i) => {
      if (i % 2) {
        if (/^<(code|pre)\b/i.test(part)) skip++;
        else if (/^<\/(code|pre)>/i.test(part)) skip = Math.max(0, skip - 1);
        return part;
      }
      return skip ? part : typo(part);
    })
    .join('');
}
