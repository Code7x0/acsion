import type { CSSProperties } from 'react';
import { aboutHero } from '../../data/aboutContent';
import { LotusMark } from '../ui/LotusMark';

export function AboutHero() {
  return (
    <section
      className="hero hero--about hero--align-left hero--align-mobile-left"
      style={
        {
          '--hero-height': `${aboutHero.height}vh`,
          '--hero-object-position': '68% center',
          '--hero-object-position-mobile': '72% center',
        } as CSSProperties
      }
      aria-label={aboutHero.label}
    >
      <div className="hero__media">
        <picture className="hero__picture about-hero__picture">
          <img
            className="hero__image about-hero__image"
            src={aboutHero.image}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="hero__overlay about-hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__content about-hero__content">
        <div className="hero__text about-hero__text">
          <div className="about-hero__label-group animate-fade-up">
            <span className="about-hero__label-line" aria-hidden="true" />
            <p className="about-hero__label type-label">{aboutHero.label}</p>
          </div>

          <h1 className="about-hero__heading animate-fade-up animate-delay-1">
            {aboutHero.heading.map((line) => (
              <span className="about-hero__heading-line" key={line}>
                {line}
              </span>
            ))}
          </h1>

          <div className="about-hero__footer animate-fade-up animate-delay-2">
            <span className="about-hero__footer-line about-hero__footer-line--horizontal" aria-hidden="true" />
            <p className="about-hero__subheading type-label">{aboutHero.subheading}</p>
            <span className="about-hero__footer-line about-hero__footer-line--vertical" aria-hidden="true" />
            <LotusMark className="about-hero__mark" size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
