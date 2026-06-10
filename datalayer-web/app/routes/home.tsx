import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => [
  { title: 'datalayer.cz – Datové základy pro váš růst' },
  {
    name: 'description',
    content:
      'Techničtí inženýři vaší analytiky. Implementace GA4, GTM, Server-Side měření a BigQuery. Data, kterým konečně můžete věřit.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h1 className="hero-heading">
                Stavíme neprůstřelné <span className="cyan-underline">datové základy</span> pro váš
                růst.
              </h1>
              <p className="hero-sub">
                Jsme techničtí inženýři vaší analytiky. Specializovaná implementace GA4, GTM,
                Server-Side měření a BigQuery. Data, kterým konečně můžete věřit.
              </p>
              <div className="d-flex gap-3">
                <Link to="/sluzby" className="btn btn-cta">
                  [ Naše služby ]
                </Link>
                <a href="#contact-form" className="btn btn-outline-custom">
                  [ Jak pracujeme ]
                </a>
              </div>
            </div>

            <div className="col-lg-7 hero-svg-container">
              <HeroDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="section-title">
            Proč vaše současná analytika
            <br />
            pravděpodobně nefunguje?
          </h2>
          <div className="row text-center mt-5">
            <div className="col-md-4 mb-4">
              <div className="feature-icon">
                <i className="fas fa-chart-line" />
              </div>
              <h5>Nepřesná data a duplicity</h5>
              <p className="text-muted small px-3">
                Nepřesná data a duplicity berou jistotu. Nesprávná data generují mylná rozhodnutí.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-icon">
                <i className="fas fa-cookie-bite" />
              </div>
              <h5>Konec cookies třetích stran</h5>
              <p className="text-muted small px-3">
                Konec cookies třetích stran a specializovaná implementace GA4, GTM, Server-Side
                měření atd.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-icon">
                <i className="fas fa-database" />
              </div>
              <h5>Data uvězněná v nástrojích</h5>
              <p className="text-muted small px-3">
                Data zviditelníme v nástrojích pro vizualizaci, uvolníme je pro další použití.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title text-dark">Naše technologická expertíza</h2>
          <div className="row g-4">
            {techCards.map((c) => (
              <div className="col-md-4" key={c.slug}>
                <Link to={`/sluzby/${c.slug}`} className="tech-card text-decoration-none">
                  <div className="tech-icon">
                    <i className={c.icon} />
                  </div>
                  <h5>{c.title}</h5>
                  <p className="text-muted small">{c.text}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section section-padding">
        <div className="container">
          <h2 className="mb-4">
            Neimplementujeme jen tagy.
            <br />
            Zlepšujeme byznys výsledky.
          </h2>
          <div className="big-stat">+18 %</div>
          <p className="lead mt-3 text-white-50">
            Konverzní uplift po přidání Server-Side implementace.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="section-title">Transparentní technický proces</h2>
          <div className="row process-line justify-content-center">
            {processSteps.map((s, i) => (
              <div className="col-lg-2 col-md-4 process-step" key={i}>
                <div className="step-number">{i + 1}</div>
                <h6>{s.title}</h6>
                <p className="small text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const techCards = [
  { slug: 'ga4', icon: 'fas fa-chart-bar', title: 'GA4 Implementace', text: 'Technická implementace funkcionálního ekosystému, nastavení eventů a cílů.' },
  { slug: 'gtm', icon: 'fas fa-tags', title: 'Google Tag Manager', text: 'Google Tag Manager konfigurace, správa kontejnerů, pokročilé nastavení.' },
  { slug: 'serverSide', icon: 'fas fa-server', title: 'Server-Side Měření', text: 'Server-Side implementace měření pro přesnější data a obcházení blokátorů.' },
  { slug: 'audit', icon: 'fas fa-cogs', title: 'GA4 Audit', text: 'Technický audit existujícího nastavení a návrh oprav.' },
  { slug: 'dataLayer', icon: 'fas fa-project-diagram', title: 'Data Layer Design', text: 'Návrh a specifikace datové vrstvy pro IT oddělení.' },
  { slug: 'bigquery', icon: 'fas fa-search-dollar', title: 'BigQuery', text: 'BigQuery export dat pro pokročilou analýzu a machine learning.' },
];

const processSteps = [
  { title: 'Audit & Strategie', text: 'Hloubková analýza současného stavu.' },
  { title: 'Specifikace Data Layer', text: 'Návrh přesné definice datové vrstvy.' },
  { title: 'Technická Implementace', text: 'Nasazení měřících kódů a tagů.' },
  { title: 'Validace & Testování', text: 'Kontrola kvality a přesnosti dat.' },
  { title: 'Předání & Support', text: 'Dokumentace a dlouhodobá podpora.' },
];

function HeroDiagram() {
  return (
    <svg width="100%" height="auto" viewBox="0 0 800 550" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neon-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood floodColor="rgb(0, 255, 255)" floodOpacity="0.6" in="SourceGraphic" />
          <feComposite operator="in" in2="SourceGraphic" />
          <feGaussianBlur stdDeviation="5" />
          <feComponentTransfer result="glow1">
            <feFuncA type="linear" slope="3" intercept="0" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="glow1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker id="arrow-straight" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="0">
          <polygon points="0 0, 10 3.5, 0 7" fill="rgb(0, 255, 255)" />
        </marker>
        <marker id="arrow-up" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="-58">
          <polygon points="0 0, 10 3.5, 0 7" fill="rgb(0, 255, 255)" />
        </marker>
        <marker id="arrow-down" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="58">
          <polygon points="0 0, 10 3.5, 0 7" fill="rgb(0, 255, 255)" />
        </marker>
      </defs>
      <g filter="url(#neon-cyan)" stroke="rgb(0, 255, 255)" strokeWidth="3" fill="none">
        <rect x="50" y="225" width="100" height="100" rx="15" fill="rgb(0, 255, 255)" fillOpacity="0.05" />
        <rect x="350" y="225" width="100" height="100" rx="15" fill="rgb(0, 255, 255)" fillOpacity="0.05" />
        <rect x="650" y="65" width="100" height="100" rx="15" fill="rgb(0, 255, 255)" fillOpacity="0.05" />
        <rect x="650" y="225" width="100" height="100" rx="15" fill="rgb(0, 255, 255)" fillOpacity="0.05" />
        <rect x="650" y="385" width="100" height="100" rx="15" fill="rgb(0, 255, 255)" fillOpacity="0.05" />
        <path d="M 160 275 L 340 275" markerEnd="url(#arrow-straight)" strokeDasharray="10, 5" />
        <path d="M 460 275 C 550 275, 630 130, 640 115" markerEnd="url(#arrow-up)" strokeDasharray="10, 5" />
        <path d="M 460 275 L 640 275" markerEnd="url(#arrow-straight)" strokeDasharray="10, 5" />
        <path d="M 460 275 C 550 275, 630 420, 640 435" markerEnd="url(#arrow-down)" strokeDasharray="10, 5" />
        <path d="M 240 275 L 240 385" strokeWidth="0.75" />
      </g>
      <rect x="195" y="385" width="195" height="80" rx="10" fill="#808080" fillOpacity="0.05" stroke="#404040" strokeWidth="2" />
      <g transform="translate(195, 385)">
        <text x="14" y="20" className="code-text-sm">
          <tspan x="14" dy="0">
            <tspan className="base-light">{'dataLayer.'}</tspan>
            <tspan className="method-light">{'push'}</tspan>
            <tspan className="base-light">{'({'}</tspan>
          </tspan>
          <tspan x="24" dy="20">
            <tspan className="string-light">{"'event'"}</tspan>
            <tspan className="base-light">{': '}</tspan>
            <tspan className="string-light">{"'purchase'"}</tspan>
          </tspan>
          <tspan x="14" dy="20" className="base-light">{'});'}</tspan>
        </text>
      </g>
      <text x="100" y="355" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">e-shop</text>
      <text x="400" y="355" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">GTM</text>
      <text x="700" y="195" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">GA4</text>
      <text x="700" y="355" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">FB CAPI</text>
      <text x="700" y="515" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">BigQuery</text>
    </svg>
  );
}
