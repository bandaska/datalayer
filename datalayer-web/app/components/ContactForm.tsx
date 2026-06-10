import { useEffect } from 'react';

type Props = {
  portalId: string;
  formId: string;
  region: string;
};

export function ContactForm({ portalId, formId, region }: Props) {
  useEffect(() => {
    const src = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    document.body.appendChild(s);
  }, [portalId, region]);

  return (
    <section
      id="contact-form"
      className="section-padding"
      style={{ backgroundColor: '#051125', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="text-center mb-5">
              <h2 className="section-title text-white mb-3">Napište nám</h2>
              <p className="text-muted">Máte dotaz k implementaci? Vyplňte formulář níže.</p>
            </div>
            <div className="bg-white p-4 rounded-3 shadow-lg text-dark">
              <div
                className="hs-form-frame"
                data-region={region}
                data-form-id={formId}
                data-portal-id={portalId}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
