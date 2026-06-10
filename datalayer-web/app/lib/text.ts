// Náhrady za Latte filtry `date`, `stripHtml`, `truncate`.

/** Ekvivalent `|date:'j. n. Y'` → "5. 3. 2025". */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`;
}

/** Ekvivalent `|stripHtml` – odstraní HTML tagy a normalizuje mezery. */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Ekvivalent `|truncate:150` – ořízne text na délku a doplní výpustku. */
export function truncate(text: string, length = 150): string {
  if (text.length <= length) return text;
  return text.slice(0, length).replace(/\s+\S*$/, '') + '…';
}

export function perex(html: string, length = 150): string {
  return truncate(stripHtml(html), length);
}
