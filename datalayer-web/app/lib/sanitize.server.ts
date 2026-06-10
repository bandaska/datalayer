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
