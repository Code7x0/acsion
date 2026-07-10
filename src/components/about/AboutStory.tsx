import { aboutStory } from '../../data/aboutContent';
import { logoAlt, logoSrc } from '../../data/logo';
import { SectionTitle } from '../ui/SectionTitle';

export function AboutStory() {
  return (
    <section className="about-story" aria-labelledby="about-story-heading">
      <div className="about-story__watermark" aria-hidden="true">
        <img src={logoSrc} alt={logoAlt} loading="lazy" decoding="async" />
      </div>

      <div className="about-story__media" data-animate="scale">
        <img
          className="about-story__image"
          src={aboutStory.image}
          alt={aboutStory.imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="about-story__panel">
        <div className="about-story__content container container--wide" data-animate="fade">
          <SectionTitle label={aboutStory.label} className="about-story__label" />
          <h2 className="about-story__heading" id="about-story-heading">
            {aboutStory.heading}
          </h2>
          <div className="about-story__body">
            {aboutStory.paragraphs.map((paragraph) => (
              <p className="about-story__paragraph type-body" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
