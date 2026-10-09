import type { ReactNode } from 'react';
import { Breadcrumbs } from './landing/LandingPage';

// Jednoduchá textová stránka (zásady, děkovací stránka).
export function SimplePage({ title, perex, path, children }: { title: string; perex?: string; path: string; children: ReactNode }) {
  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="article-container">
            <Breadcrumbs
              crumbs={[
                { name: 'Úvod', path: '/' },
                { name: title, path },
              ]}
            />
            <h1 className="article-title">{title}</h1>
            {perex ? <p className="article-perex">{perex}</p> : null}
          </div>
        </div>
      </header>
      <section className="article-content">
        <div className="container article-container">{children}</div>
      </section>
    </>
  );
}
