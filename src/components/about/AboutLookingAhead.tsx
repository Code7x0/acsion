import { aboutLookingAhead } from '../../data/aboutContent';
import { SectionTitle } from '../ui/SectionTitle';

export function AboutLookingAhead() {
  return (
    <section className="about-ahead" aria-labelledby="about-ahead-heading">
      <div className="about-ahead__particles" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <span className="about-ahead__particle" key={index} />
        ))}
      </div>

      <div className="about-ahead__grid">
        <div className="about-ahead__content" data-animate="fade">
          <SectionTitle label={aboutLookingAhead.label} className="about-ahead__label" />
          <p className="about-ahead__paragraph">{aboutLookingAhead.paragraph}</p>
          <h2 className="about-ahead__heading" id="about-ahead-heading">
            {aboutLookingAhead.statement.prefix}{' '}
            <em className="about-ahead__heading-emphasis">{aboutLookingAhead.statement.emphasis}</em>
          </h2>
        </div>

        <div className="about-ahead__gallery" data-animate="fade">
          {aboutLookingAhead.gallery.map((item) => (
            <figure className="about-ahead__gallery-item" key={item.label}>
              <div className="about-ahead__gallery-media">
                <img
                  className="about-ahead__gallery-image"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="about-ahead__gallery-caption">
                <span className="about-ahead__gallery-caption-text">{item.label}</span>
                <span className="about-ahead__gallery-caption-line" aria-hidden="true" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
