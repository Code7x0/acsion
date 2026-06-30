import { useState } from 'react';
import type { FormEvent } from 'react';
import { newsletter } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="newsletter section"
      aria-labelledby="newsletter-heading"
      style={
        {
          '--newsletter-overlay': newsletter.overlayOpacity,
        } as React.CSSProperties
      }
    >
      <div className="newsletter__media" aria-hidden="true">
        <img className="newsletter__image" src={newsletter.backgroundImage} alt="" loading="lazy" />
        <div className="newsletter__overlay" />
      </div>

      <div className="newsletter__content container">
        <SectionTitle label={newsletter.label} className="newsletter__label" />
        <h2 className="newsletter__heading type-h2" id="newsletter-heading">
          {newsletter.heading}
        </h2>
        <p className="newsletter__subtext type-body-sm type-muted">{newsletter.subtext}</p>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          {submitted ? (
            <p className="newsletter__message newsletter__message--success" tabIndex={-1}>
              {newsletter.successMessage}
            </p>
          ) : (
            <div className="newsletter__fields">
              <label className="sr-only" htmlFor="newsletter-email">
                {newsletter.placeholder}
              </label>
              <input
                type="email"
                id="newsletter-email"
                className="newsletter__input"
                placeholder={newsletter.placeholder}
                autoComplete="email"
                required
              />
              <Button
                label={newsletter.buttonLabel}
                type="submit"
                className="newsletter__submit btn--primary"
              />
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
