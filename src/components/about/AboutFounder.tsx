import { aboutFounder } from '../../data/aboutContent';
import { SectionTitle } from '../ui/SectionTitle';

export function AboutFounder() {
  return (
    <section className="about-founder" aria-labelledby="about-founder-heading">
      <div className="about-founder__panel">
        <div className="about-founder__content" data-animate="fade">
          <SectionTitle label={aboutFounder.label} className="about-founder__label" />
          <h2 className="about-founder__heading" id="about-founder-heading">
            {aboutFounder.heading}
          </h2>
          <div className="about-founder__body">
            {aboutFounder.paragraphs.map((paragraph) => (
              <p className="about-founder__paragraph" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
          <blockquote className="about-founder__quote">
            &ldquo;{aboutFounder.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="about-founder__media" data-animate="scale">
        <img
          className="about-founder__image"
          src={aboutFounder.image}
          alt={aboutFounder.imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
