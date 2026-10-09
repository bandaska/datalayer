import sanitizeHtml from 'sanitize-html';

// Whitelist tagů a atributů pro obsah uložený v DB (články i landing pages).
export function cleanHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'figure',
      'figcaption',
      'span',
      'button',
      'i',
      'h1',
      'h2',
      'section',
    ]),
    allowedAttributes: {
      '*': ['class', 'id', 'style'],
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'width', 'height'],
      button: ['type'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'data'],
  });
}

/**
 * Inline HTML v textech stránek (odstavce, karty, FAQ…): jen zvýraznění,
 * kód, zalomení a odkazy. Ostatní značky zmizí, text zůstane.
 */
export function cleanInline(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ['strong', 'em', 'b', 'i', 'code', 'br', 'a', 'span'],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowProtocolRelative: false,
  });
}
