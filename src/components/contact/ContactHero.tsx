import type { CSSProperties } from 'react';
import { contactHero } from '../../data/contactContent';
import { LotusMark } from '../ui/LotusMark';

export function ContactHero() {
  return (
    <section
      className="contact-hero"
      style={
        {
          '--contact-hero-object-position': contactHero.objectPosition,
          '--contact-hero-object-position-mobile': contactHero.objectPositionMobile,
        } as CSSProperties
      }
      aria-labelledby="contact-hero-heading"
    >
      <div className="contact-hero__media">
        <picture className="contact-hero__picture">
          <img
            className="contact-hero__image"
            src={contactHero.image}
            alt={contactHero.imageAlt}
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="contact-hero__overlay contact-hero__overlay--gradient" aria-hidden="true" />
        <div className="contact-hero__overlay contact-hero__overlay--gold" aria-hidden="true" />
      </div>

      <div className="contact-hero__inner">
        <div className="contact-hero__content">
          <p className="contact-hero__label">{contactHero.label}</p>

          <h1 className="contact-hero__heading" id="contact-hero-heading">
            {contactHero.heading.map((line) => (
              <span className="contact-hero__heading-line" key={line}>
                {line}
              </span>
            ))}
          </h1>

          <p className="contact-hero__body">{contactHero.body}</p>
        </div>
      </div>

      <div className="contact-hero__scroll" aria-hidden="true">
        <span className="contact-hero__scroll-line" />
        <LotusMark className="contact-hero__scroll-mark" size={18} />
      </div>
    </section>
  );
}
