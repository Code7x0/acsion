import philosophyImage from '../../assets/philosophy-editorial.jpg';
import { philosophy } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { LinkText } from '../ui/LinkText';

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="philosophy philosophy--image-right section section--stone"
      aria-labelledby="philosophy-heading"
    >
      <div className="philosophy__grid container container--wide">
        <div className="philosophy__content" data-animate="fade">
          <SectionTitle label={philosophy.label} className="philosophy__label" />
          <h2 className="philosophy__heading" id="philosophy-heading">
            {philosophy.heading.map((line) => (
              <span className="philosophy__heading-line" key={line}>
                {line}
              </span>
            ))}
          </h2>
          <p className="philosophy__description type-body type-muted">{philosophy.description}</p>
          <LinkText
            label={philosophy.buttonLabel}
            href={philosophy.buttonLink}
            className="philosophy__link"
          />
        </div>

        <div className="philosophy__media">
          <img
            className="philosophy__image"
            src={philosophyImage}
            alt={philosophy.imageAlt}
            width={1024}
            height={576}
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
