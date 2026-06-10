import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => [
  { title: 'Zpracování osobních údajů | datalayer.cz' },
];

export default function Privacy() {
  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <h1 className="article-title">Zpracování osobních údajů</h1>
          </div>
        </div>
      </header>
      <section className="article-content">
        <div className="container article-container">
          <p>
            Tato stránka popisuje, jak datalayer.cz zpracovává osobní údaje. Doplňte aktuální znění
            zásad zpracování osobních údajů (GDPR).
          </p>
        </div>
      </section>
    </>
  );
}
