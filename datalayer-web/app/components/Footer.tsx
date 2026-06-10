import { Link } from 'react-router';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-white fw-bold">
              datalayer<span className="highlight">.cz</span>
            </h5>
            <p className="small">
              Jsme techničtí inženýři vaší analytiky. Specializovaná implementace
              GA4, GTM, Server-Side měření a BigQuery.
            </p>
          </div>
          <div className="col-md-2 mb-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/sluzby">Služby</Link></li>
              <li className="mb-2"><Link to="/">O nás</Link></li>
              <li className="mb-2"><a href="#contact-form">Kontakt</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Kontakt</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><i className="far fa-envelope me-2" /> one@datalayer.cz</li>
              <li className="mb-2"><i className="fab fa-linkedin me-2" /> LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-5 pt-3 border-top border-secondary">
          <p className="small mb-0">
            <Link to="/privacy">Zpracování osobních údajů</Link>
            {' '}&copy; {new Date().getFullYear()} datalayer.cz
          </p>
        </div>
      </div>
    </footer>
  );
}
