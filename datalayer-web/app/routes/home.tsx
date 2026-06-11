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

      {/* e-shop (košík) */}
      <svg x="65" y="240" width="70" height="70" viewBox="0 0 48 48">
        <g fill="rgb(0, 255, 255)" stroke="none">
          <path d="M15 39a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm4 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1zM31 39a3 3 0 1 0 3-3 3 3 0 0 0-3 3zm4 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
          <circle cx="28.55" cy="20.55" r="1.45" />
          <path d="M23.45 16.9A1.45 1.45 0 1 0 22 15.45a1.45 1.45 0 0 0 1.45 1.45zM23 22a1 1 0 0 0 .71-.29l6-6a1 1 0 0 0-1.42-1.42l-6 6a1 1 0 0 0 0 1.42A1 1 0 0 0 23 22z" />
          <path d="M7 10a1 1 0 0 0 1-1 1 1 0 0 1 1-1h2.26l5.4 17.27 1.38 5A1 1 0 0 0 19 31h13a1 1 0 0 1 0 2H20a1 1 0 0 0 0 2h12a3 3 0 0 0 0-6H19.76l-.83-3h13.54a6.92 6.92 0 0 0 3.58-1 7 7 0 0 0 3-3.46 6.45 6.45 0 0 0 .21-.62L42 11.27a1 1 0 0 0-.16-.87A1 1 0 0 0 41 10H14l-1-3.3a1 1 0 0 0-1-.7H9a3 3 0 0 0-3 3 1 1 0 0 0 1 1zm32.67 2L38 18l-.68 2.37A5 5 0 0 1 32.47 24H18.36l-1.87-6-1.88-6z" />
        </g>
      </svg>

      {/* GTM (kosočtverec) */}
      <svg x="365" y="240" width="70" height="70" viewBox="0 0 256 256">
        <g stroke="none">
          <polygon
            fill="#A0FFFF"
            points="150.261818 245.516364 105.825455 202.185455 201.258182 104.730909 247.265455 149.821818"
          />
          <path
            fill="#00FFFF"
            d="M150.450909,53.9381818 L106.174545,8.73090909 L9.36,104.629091 C-3.12,117.109091 -3.12,137.341818 9.36,149.836364 L104.72,245.821818 L149.810909,203.64 L77.1563636,127.232727 L150.450909,53.9381818 Z"
          />
          <path
            fill="#A0FFFF"
            d="M246.625455,105.370909 L150.625455,9.37090909 C138.130909,-3.12363636 117.869091,-3.12363636 105.374545,9.37090909 C92.88,21.8654545 92.88,42.1272727 105.374545,54.6218182 L201.374545,150.621818 C213.869091,163.116364 234.130909,163.116364 246.625455,150.621818 C259.12,138.127273 259.12,117.865455 246.625455,105.370909 Z"
          />
          <circle fill="#00B0B0" cx="127.265455" cy="224.730909" r="31.2727273" />
        </g>
      </svg>

      {/* GA4 */}
      <svg x="665" y="80" width="70" height="70" viewBox="-14 0 284 284">
        <g stroke="none">
          <path
            fill="#00FFFF"
            d="M256.003159,247.933017 C256.055907,258.030289 251.77298,267.664804 244.241349,274.390297 C236.709718,281.11579 226.653817,284.285366 216.626905,283.094249 C198.58347,280.424364 185.360959,264.722632 185.800619,246.488035 L185.800619,36.8452103 C185.364944,18.5907614 198.619678,2.88144681 216.687112,0.238996295 C226.704325,-0.933476157 236.743571,2.24455542 244.261279,8.9678962 C251.778988,15.691237 256.053811,25.3147619 256.003159,35.4002282 L256.003159,247.933017 Z"
          />
          <path
            fill="#00B0B0"
            d="M35.1010243,213.193238 C54.4867848,213.193238 70.2020487,228.908502 70.2020487,248.294263 C70.2020487,267.680023 54.4867848,283.395287 35.1010243,283.395287 C15.7152639,283.395287 0,267.680023 0,248.294263 C0,228.908502 15.7152639,213.193238 35.1010243,213.193238 Z M127.459466,106.806429 C107.981896,107.874068 92.8698765,124.212107 93.3217628,143.713681 L93.3217628,237.998765 C93.3217628,263.58699 104.580582,279.120548 121.077461,282.431965 C131.434034,284.530959 142.185473,281.860819 150.356699,275.160414 C158.527925,268.460009 163.252393,258.439904 163.222912,247.872809 L163.222912,142.088076 C163.240039,132.641687 159.462041,123.584285 152.737293,116.950107 C146.012546,110.315928 136.904752,106.661084 127.459466,106.806429 L127.459466,106.806429 Z"
          />
        </g>
      </svg>

      {/* FB CAPI (server) */}
      <svg x="665" y="240" width="70" height="70" viewBox="0 0 24 24">
        <g stroke="#00FFFF" strokeWidth="1.0" fill="none">
          <rect x="2" y="3.5" width="20" height="5" rx="2.5" />
          <rect x="2" y="9.5" width="20" height="5" rx="2.5" />
          <rect x="2" y="15.5" width="20" height="5" rx="2.5" />
        </g>
        <g fill="#00B0B0" stroke="none">
          <circle cx="5" cy="6" r="1" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="5" cy="18" r="1" />
        </g>
      </svg>

      {/* BigQuery (lupa) */}
      <svg x="665" y="400" width="70" height="70" viewBox="0 0 24 24">
        <g stroke="none">
          <path fill="#A0FFFF" d="M6.73,10.83v2.63A4.91,4.91,0,0,0,8.44,15.2V10.83Z" />
          <path fill="#00FFFF" d="M9.89,8.41v7.53A7.62,7.62,0,0,0,11,16,8,8,0,0,0,12,16V8.41Z" />
          <path fill="#A0FFFF" d="M13.64,11.86v3.29a5,5,0,0,0,1.7-1.82V11.86Z" />
          <path
            fill="#00B0B0"
            d="M17.74,16.32l-1.42,1.42a.42.42,0,0,0,0,.6l3.54,3.54a.42.42,0,0,0,.59,0l1.43-1.43a.42.42,0,0,0,0-.59l-3.54-3.54a.42.42,0,0,0-.6,0"
          />
          <path
            fill="#00FFFF"
            d="M11,2a9,9,0,1,0,9,9,9,9,0,0,0-9-9m0,15.69A6.68,6.68,0,1,1,17.69,11,6.68,6.68,0,0,1,11,17.69"
          />
        </g>
      </svg>

      <text x="100" y="355" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">e-shop</text>
      <text x="400" y="355" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">GTM</text>
      <text x="700" y="195" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">GA4</text>
      <text x="700" y="355" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">FB CAPI</text>
      <text x="700" y="515" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fill="white" stroke="none">BigQuery</text>
    </svg>
  );
}
