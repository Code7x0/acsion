import type { CSSProperties } from 'react';
import { contactMethods } from '../../data/contactContent';
import { ContactIcon } from '../ui/ContactIcon';

export function ContactInfo() {
  return (
    <section className="contact-info" data-animate aria-label="Ways to contact Ascension">
      <div className="contact-info__texture" aria-hidden="true" />

      <span className="contact-info__seam" aria-hidden="true" />

      <div className="contact-info__inner">
        {contactMethods.map((method, index) => (
          <article
            className="contact-info__item"
            key={method.id}
            style={{ '--i': index } as CSSProperties}
          >
            <div className="contact-info__reveal">
              <span className="contact-info__icon-wrap">
                <ContactIcon name={method.icon} className="contact-info__icon" size={32} />
              </span>

              <h3 className="contact-info__heading">{method.heading}</h3>

              <span className="contact-info__divider" aria-hidden="true" />

              {method.primaryType === 'email' && (
                <a className="contact-info__primary contact-info__primary--link" href={`mailto:${method.primary}`}>
                  {method.primary}
                </a>
              )}

              {method.primaryType === 'address' && (
                <address className="contact-info__primary contact-info__primary--address">
                  {(method.addressLines ?? [method.primary]).map((line) => (
                    <span className="contact-info__primary-line" key={line}>
                      {line}
                    </span>
                  ))}
                </address>
              )}

              {method.primaryType === 'text' && (
                <p className="contact-info__primary">{method.primary}</p>
              )}

              <p className="contact-info__desc">
                {method.description.map((line, i) =>
                  line === '' ? (
                    <span className="contact-info__desc-gap" key={`gap-${i}`} aria-hidden="true" />
                  ) : (
                    <span className="contact-info__desc-line" key={line}>
                      {line}
                    </span>
                  ),
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
