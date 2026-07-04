import { aboutFoundation } from '../../data/aboutContent';

export function AboutFoundation() {
  return (
    <section className="about-foundation" aria-labelledby="about-foundation-heading">
      <div className="about-foundation__leaf" aria-hidden="true" />
      <div className="about-foundation__watermark" aria-hidden="true">
        <img src={aboutFoundation.lotusImage} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="about-foundation__inner">
        <div className="about-foundation__content">
          <header className="about-foundation__header" data-animate="fade-up">
            <p className="about-foundation__label">{aboutFoundation.label}</p>
            <span className="about-foundation__label-line" aria-hidden="true" />
            <h2 className="about-foundation__heading" id="about-foundation-heading">
              {aboutFoundation.heading}
            </h2>
            <p className="about-foundation__subtext">{aboutFoundation.subtext}</p>
          </header>

          <div className="about-foundation__grid">
            <article
              className="about-foundation__column about-foundation__column--mission"
              data-animate="fade-left"
              data-animate-delay="150"
            >
              <p className="about-foundation__column-label">{aboutFoundation.mission.label}</p>
              <span className="about-foundation__column-divider" aria-hidden="true" />
              <p className="about-foundation__text">{aboutFoundation.mission.text}</p>
              <div className="about-foundation__column-footer" aria-hidden="true">
                <span className="about-foundation__column-footer-line" />
                <span className="about-foundation__column-footer-dot" />
              </div>
            </article>

            <div className="about-foundation__center">
              <span className="about-foundation__connector" aria-hidden="true">
                <span className="about-foundation__connector-line about-foundation__connector-line--top" />
                <span className="about-foundation__connector-dot" />
              </span>

              <div
                className="about-foundation__lotus-wrap"
                data-animate="foundation-scale"
                data-animate-delay="300"
              >
                <img
                  className="about-foundation__lotus"
                  src={aboutFoundation.lotusImage}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <span className="about-foundation__connector" aria-hidden="true">
                <span className="about-foundation__connector-dot" />
                <span className="about-foundation__connector-line about-foundation__connector-line--bottom" />
              </span>

              <blockquote
                className="about-foundation__quote"
                data-animate="fade-up"
                data-animate-delay="450"
              >
                {aboutFoundation.quote.lines.map((line) => (
                  <span className="about-foundation__quote-line" key={line}>
                    {line}
                  </span>
                ))}
              </blockquote>
            </div>

            <article
              className="about-foundation__column about-foundation__column--vision"
              data-animate="fade-right"
              data-animate-delay="150"
            >
              <p className="about-foundation__column-label">{aboutFoundation.vision.label}</p>
              <span className="about-foundation__column-divider" aria-hidden="true" />
              <p className="about-foundation__text">{aboutFoundation.vision.text}</p>
              <div className="about-foundation__column-footer" aria-hidden="true">
                <span className="about-foundation__column-footer-line" />
                <span className="about-foundation__column-footer-dot" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
