import type { Pictogram } from '~/content/types';

// Sada technických piktogramů (náhrada Font Awesome), návrh v
// `seo-analyza/04_homepage-ux/prototyp/piktogramy-sprite.svg`.
// Sprite se vkládá jednou do layoutu, ikony se odkazují přes <use href="#pi-…">.
// Barva = currentColor (cyan na tmavém, tmavší tyrkys na světlém pozadí).

const SYMBOLS = `
<symbol id="pi-ga4" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="4" width="26" height="20" rx="2.5"/>
<path d="M3 9h26"/><circle cx="6" cy="6.5" r=".6" fill="currentColor"/><circle cx="8.4" cy="6.5" r=".6" fill="currentColor"/>
<path d="M6.5 20.5l4.5-5 3.5 2.5 4.5-6 3.5 3 3-2.5"/>
<path d="M18.5 12v8.5" stroke-dasharray="1.2 1.6" opacity=".6"/>
<rect x="19" y="26.5" width="10" height="3.5" rx="1" fill="currentColor" fill-opacity=".1"/>
<path d="M21.5 27.7h5M21.5 28.9h5"/>
</symbol>
<symbol id="pi-gtm" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="5" y="3.5" width="22" height="25" rx="2" fill="currentColor" fill-opacity=".08"/>
<path d="M5 11.8h22M5 20.2h22"/>
<path d="M13 7.6h6M13 16h6M13 24.4h6"/>
<path d="M8 7.6h.01M8 16h.01M8 24.4h.01" stroke-width="2.4"/>
<path d="M27 6.5h2.5v3H27" opacity=".7"/>
</symbol>
<symbol id="pi-datalayer" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M9.5 5C7 5 6.5 6.5 6.5 8.5v4c0 1.8-1 3.2-2.8 3.5 1.8.3 2.8 1.7 2.8 3.5v4c0 2 .5 3.5 3 3.5"/>
<path d="M22.5 5c2.5 0 3 1.5 3 3.5v4c0 1.8 1 3.2 2.8 3.5-1.8.3-2.8 1.7-2.8 3.5v4c0 2-.5 3.5-3 3.5"/>
<rect x="11" y="10" width="10" height="2.4" rx="1" fill="currentColor" fill-opacity=".15"/>
<rect x="11" y="14.8" width="10" height="2.4" rx="1" fill="currentColor" fill-opacity=".15"/>
<rect x="11" y="19.6" width="7" height="2.4" rx="1" fill="currentColor" fill-opacity=".15"/>
</symbol>
<symbol id="pi-serverside" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="2" y="10" width="9" height="12" rx="1.5"/><path d="M2 13h9"/>
<path d="M11 16h3.5" stroke-dasharray="1.2 1.6"/>
<path d="M19 7.5l5 2v5.2c0 3.6-2.2 6.4-5 7.8-2.8-1.4-5-4.2-5-7.8V9.5z" fill="currentColor" fill-opacity=".1"/>
<path d="M16.8 14.8l1.6 1.6 3-3.2"/>
<path d="M24 12l5-4M24 15h5.5M24 18l5 4"/>
<circle cx="29.5" cy="7.6" r=".9" fill="currentColor"/><circle cx="30" cy="15" r=".9" fill="currentColor"/><circle cx="29.5" cy="22.4" r=".9" fill="currentColor"/>
</symbol>
<symbol id="pi-consent" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="9" width="18" height="10" rx="5" fill="currentColor" fill-opacity=".1"/>
<circle cx="16" cy="14" r="3.4" fill="currentColor" fill-opacity=".25"/>
<path d="M6.8 14l1.6 1.6 2.8-3"/>
<rect x="23.5" y="12.5" width="6" height="5.5" rx="1"/><path d="M24.8 12.5v-1.6a1.7 1.7 0 0 1 3.4 0v1.6"/>
<circle cx="6" cy="24.5" r="1.1" fill="currentColor"/><circle cx="11" cy="24.5" r="1.1" fill="currentColor"/>
<circle cx="16" cy="24.5" r="1.1"/><circle cx="21" cy="24.5" r="1.1" fill="currentColor"/>
</symbol>
<symbol id="pi-conversion" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M2.5 6h3l2.4 11.5h10.6l2.2-8H7"/>
<circle cx="9.5" cy="21.5" r="1.5"/><circle cx="17" cy="21.5" r="1.5"/>
<path d="M21 13.5h3.2"/>
<path d="M24.2 13.5c1.8 0 1.8-6 4.3-6M24.2 13.5h4.3M24.2 13.5c1.8 0 1.8 6 4.3 6"/>
<circle cx="29.3" cy="7.5" r="1" fill="currentColor"/><circle cx="29.3" cy="13.5" r="1" fill="currentColor"/><circle cx="29.3" cy="19.5" r="1" fill="currentColor"/>
<path d="M3 27h26" stroke-dasharray="1.2 1.8" opacity=".5"/>
</symbol>
<symbol id="pi-bigquery" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M4 9l12-5 12 5-12 5z" fill="currentColor" fill-opacity=".1"/>
<path d="M4 9v9l12 5 12-5V9"/>
<path d="M16 14v9M10 11.5v9M22 11.5v9" opacity=".7"/>
<path d="M4 13.5l12 5 12-5" opacity=".7"/>
<rect x="6" y="25.5" width="20" height="4" rx="1"/>
<path d="M8.5 27.5h4M14 27.5h2M17.5 27.5h6" />
</symbol>
<symbol id="pi-dashboard" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="2.5" y="4" width="27" height="19" rx="2"/>
<rect x="5.5" y="7" width="8" height="6.5" rx="1" fill="currentColor" fill-opacity=".12"/>
<path d="M7.5 11.2h4" stroke-width="2"/>
<path d="M16 13l3-3 2.5 2 4.5-4.5"/>
<path d="M5.5 17.5h21M5.5 20h14" opacity=".6"/>
<path d="M12 23l-1.5 5h11L20 23"/>
<circle cx="27" cy="27" r="2.2"/><path d="M26 27h2M27 26v2"/>
</symbol>
<symbol id="pi-audit" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M4 6.5h9l6 6-7.5 7.5-7.5-7.5z" fill="currentColor" fill-opacity=".08"/>
<circle cx="9" cy="10" r="1.2"/>
<circle cx="20" cy="19" r="6"/><path d="M24.4 23.4L29 28"/>
<path d="M17.6 19.2l1.6 1.6 3.2-3.4"/>
<path d="M3.5 25l3 3M6.5 25l-3 3" opacity=".8"/>
</symbol>
<symbol id="pi-perf" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M4 20a12 12 0 0 1 24 0"/>
<path d="M8 20a8 8 0 0 1 16 0" opacity=".45"/>
<path d="M16 20l5-6"/><circle cx="16" cy="20" r="1.4" fill="currentColor"/>
<path d="M9.5 26l-3 2 3 2M22.5 26l3 2-3 2M17.5 25.5l-3 5"/>
</symbol>
<symbol id="pi-monitor" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="5.5" width="26" height="22" rx="2"/><path d="M3 11h26M9 3.5v4M23 3.5v4"/>
<path d="M5.5 20h5l2-5 3 9 2.5-6 1.5 2h7"/>
</symbol>
<symbol id="pi-eshop" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M7 3h18v26l-3-2-3 2-3-2-3 2-3-2-3 2z" fill="currentColor" fill-opacity=".08"/>
<path d="M11 8.5h10M11 12.5h6M11 16.5h8" opacity=".75"/>
<path d="M11 22h10" stroke-width="2"/>
</symbol>
<symbol id="pi-lead" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="2.5" y="5" width="9" height="12" rx="1.5"/><path d="M4.5 8.5h5M4.5 11.5h5M4.5 14.5h3"/>
<path d="M12.5 8h9l-3.5 5v4l-2 1.5V13z" fill="currentColor" fill-opacity=".1"/>
<path d="M17 20v2.5"/>
<rect x="11" y="23" width="18" height="6" rx="1.5"/><path d="M13.5 26h7"/><circle cx="25.5" cy="26" r="1.1" fill="currentColor"/>
</symbol>
<symbol id="pi-gov" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<rect x="12" y="3" width="8" height="6" rx="1.2" fill="currentColor" fill-opacity=".1"/>
<path d="M16 9v4M7 13h18M7 13v4M25 13v4M16 13v4"/>
<rect x="3.5" y="17" width="7" height="5" rx="1"/><rect x="12.5" y="17" width="7" height="5" rx="1"/><rect x="21.5" y="17" width="7" height="5" rx="1"/>
<rect x="12.5" y="25" width="7" height="5" rx="1"/><path d="M14 25v-1.4a2 2 0 0 1 4 0V25"/>
</symbol>
<symbol id="pi-warn" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M16 4l13 23H3z"/><path d="M16 12v7M16 23h.01" stroke-width="2.2"/>
</symbol>
`;

export function PictogramSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'none' }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<defs>${SYMBOLS}</defs>` }}
    />
  );
}

export function Pi({ name, className, size }: { name: Pictogram; className?: string; size?: number }) {
  return (
    <svg
      className={className ? `pi ${className}` : 'pi'}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#pi-${name}`} />
    </svg>
  );
}
