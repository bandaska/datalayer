import { Link, NavLink } from 'react-router';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          datalayer<span className="highlight">.cz</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Služby
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/sluzby/ga4">Implementace GA4</Link></li>
                <li><Link className="dropdown-item" to="/sluzby/gtm">Server-Side GTM</Link></li>
                <li><Link className="dropdown-item" to="/sluzby/bigquery">BigQuery &amp; Data</Link></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/sluzby">Služby</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
            <li className="nav-item"><a className="nav-link" href="#contact-form">Kontakt</a></li>
            <li className="nav-item nav-item-cta">
              <a href="#contact-form" className="btn btn-cta">[ Konzultovat projekt ]</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
