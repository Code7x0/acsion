import { aboutCta } from '../../data/aboutContent';
import { LinkText } from '../ui/LinkText';

export function AboutCta() {
  return (
    <section className="about-cta" aria-labelledby="about-cta-heading">
      <div className="about-cta__media" aria-hidden="true">
        <img
          className="about-cta__image"
          src={aboutCta.image}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="about-cta__overlay" />
      </div>

      <div className="about-cta__content" data-animate="fade">
        <div className="about-cta__inner">
          <h2 className="about-cta__heading" id="about-cta-heading">
            {aboutCta.heading}
          </h2>
          <p className="about-cta__paragraph">{aboutCta.paragraph}</p>
          <LinkText label={aboutCta.buttonLabel} href={aboutCta.buttonLink} className="about-cta__link" />
        </div>
      </div>
    </section>
  );
}
