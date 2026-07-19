import { contactStudio } from '../../data/contactContent';
import { logoSrc } from '../../data/logo';

export function ContactStudio() {
  return (
    <section className="contact-studio" data-animate aria-labelledby="contact-studio-heading">
      <div className="contact-studio__inner">
        <div className="contact-studio__content">
          <p className="contact-studio__label">{contactStudio.label}</p>
          <h2 className="contact-studio__heading" id="contact-studio-heading">
            <address className="contact-studio__address">
              {contactStudio.heading.map((line) => (
                <span className="contact-studio__address-line" key={line}>
                  {line}
                </span>
              ))}
            </address>
          </h2>

          {contactStudio.showDivider && (
            <span className="contact-studio__divider" aria-hidden="true" />
          )}

          <p className="contact-studio__body">
            {contactStudio.body.map((line) => (
              <span className="contact-studio__body-line" key={line}>
                {line}
              </span>
            ))}
          </p>
        </div>

        <div
          className={`contact-studio__media${
            contactStudio.enableZoom ? ' contact-studio__media--zoom' : ''
          }`}
        >
          <img
            className="contact-studio__image"
            src={contactStudio.image}
            alt={contactStudio.imageAlt}
            loading="lazy"
            decoding="async"
          />
          {contactStudio.showLotus && (
            <img
              className="contact-studio__watermark"
              src={logoSrc}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </section>
  );
}
