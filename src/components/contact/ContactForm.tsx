import { useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import { contactForm } from '../../data/contactContent';
import { logoSrc } from '../../data/logo';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-form" data-animate aria-labelledby="contact-form-heading">
      <div className="contact-form__inner">
        <div className="contact-form__panel contact-form__panel--left">
          <div className="contact-form__media">
            <img
              className="contact-form__image"
              src={contactForm.image}
              alt={contactForm.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="contact-form__overlay" aria-hidden="true" />

          {contactForm.showLotus && (
            <img
              className="contact-form__decor-lotus"
              src={logoSrc}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          )}

          <div className="contact-form__intro">
            <p className="contact-form__label">{contactForm.label}</p>
            <span className="contact-form__label-divider" aria-hidden="true" />
            <h2 className="contact-form__heading" id="contact-form-heading">
              {contactForm.heading}
            </h2>
            <p className="contact-form__lead">
              {contactForm.body.map((line) => (
                <span className="contact-form__lead-line" key={line}>
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="contact-form__panel contact-form__panel--right">
          <div className="contact-form__shadow" aria-hidden="true" />

          {submitted ? (
            <div className="contact-form__success" role="status" aria-live="polite">
              <span className="contact-form__success-mark" aria-hidden="true">
                &#10003;
              </span>
              <p className="contact-form__success-heading">{contactForm.success.heading}</p>
              <p className="contact-form__success-body">{contactForm.success.body}</p>
            </div>
          ) : (
            <form className="contact-form__form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row contact-form__row--split">
                <div className="contact-form__field" style={{ '--i': 0 } as CSSProperties}>
                  <label className="contact-form__field-label" htmlFor="cf-first">
                    First name
                  </label>
                  <input
                    className="contact-form__input"
                    type="text"
                    id="cf-first"
                    name="first_name"
                    autoComplete="given-name"
                  />
                </div>
                <div className="contact-form__field" style={{ '--i': 1 } as CSSProperties}>
                  <label className="contact-form__field-label" htmlFor="cf-last">
                    Last name
                  </label>
                  <input
                    className="contact-form__input"
                    type="text"
                    id="cf-last"
                    name="last_name"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field" style={{ '--i': 2 } as CSSProperties}>
                  <label className="contact-form__field-label" htmlFor="cf-email">
                    Email address
                  </label>
                  <input
                    className="contact-form__input"
                    type="email"
                    id="cf-email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field" style={{ '--i': 3 } as CSSProperties}>
                  <label className="contact-form__field-label" htmlFor="cf-subject">
                    Subject
                  </label>
                  <div className="contact-form__select-wrap">
                    <select className="contact-form__input contact-form__select" id="cf-subject" name="subject" defaultValue="">
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {contactForm.subjectOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <span className="contact-form__select-arrow" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="contact-form__row contact-form__row--message">
                <div className="contact-form__field" style={{ '--i': 4 } as CSSProperties}>
                  <label className="contact-form__field-label" htmlFor="cf-message">
                    Message
                  </label>
                  <textarea
                    className="contact-form__input contact-form__textarea"
                    id="cf-message"
                    name="message"
                    rows={5}
                    required
                  />
                </div>
              </div>

              <button className="contact-form__submit" type="submit" style={{ '--i': 5 } as CSSProperties}>
                <span className="contact-form__submit-label">{contactForm.buttonText}</span>
                <span className="contact-form__submit-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
