import { contactIntro } from '../../data/contactContent';
import { logoSrc } from '../../data/logo';

export function ContactIntro() {
  return (
    <section
      className="contact-intro"
      data-animate
      aria-labelledby="contact-intro-heading"
    >
      <div className="contact-intro__texture" aria-hidden="true" />

      <div className="contact-intro__inner">
        {contactIntro.showDivider && (
          <div className="contact-intro__divider" aria-hidden="true">
            <span className="contact-intro__divider-line contact-intro__divider-line--left" />
            {contactIntro.showLotus && (
              <img
                className="contact-intro__lotus"
                src={logoSrc}
                alt=""
                loading="lazy"
                decoding="async"
              />
            )}
            <span className="contact-intro__divider-line contact-intro__divider-line--right" />
          </div>
        )}

        <h2 className="contact-intro__heading" id="contact-intro-heading">
          {contactIntro.heading.map((line) => (
            <span className="contact-intro__heading-line" key={line}>
              {line}
            </span>
          ))}
        </h2>

        <p className="contact-intro__body">
          {contactIntro.body.map((line) => (
            <span className="contact-intro__body-line" key={line}>
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
