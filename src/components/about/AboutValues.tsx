import { aboutValues } from '../../data/aboutContent';
import { ValueIcon } from '../ui/ValueIcon';

export function AboutValues() {
  return (
    <section className="about-values" aria-labelledby="about-values-heading">
      <div className="about-values__texture" aria-hidden="true" />

      <div className="about-values__inner container container--wide">
        <header className="about-values__header" data-animate="fade">
          <p className="about-values__label type-label" id="about-values-heading">
            {aboutValues.label}
          </p>
          <span className="about-values__header-line" aria-hidden="true" />
        </header>

        <div className="about-values__grid">
          {aboutValues.items.map((value) => (
            <article className="about-values__item" key={value.title} data-animate="fade">
              <ValueIcon className="about-values__icon" name={value.icon} size={60} />
              <h3 className="about-values__title">{value.title}</h3>
              <p className="about-values__description">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
