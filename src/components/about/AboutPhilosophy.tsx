import { aboutPhilosophy } from '../../data/aboutContent';

export function AboutPhilosophy() {
  return (
    <section className="about-philosophy" aria-labelledby="about-philosophy-heading">
      <div className="about-philosophy__texture" aria-hidden="true" />
      <div className="about-philosophy__leaf" aria-hidden="true" />

      <div className="about-philosophy__inner container container--wide" data-animate="fade">
        <div className="about-philosophy__label-group">
          <p className="about-philosophy__label type-label">{aboutPhilosophy.label}</p>
          <span className="about-philosophy__label-lines" aria-hidden="true">
            <span className="about-philosophy__label-line" />
            <span className="about-philosophy__label-line" />
          </span>
        </div>

        <div className="about-philosophy__content-row">
          <h2 className="about-philosophy__heading" id="about-philosophy-heading">
            {aboutPhilosophy.heading.map((line) => (
              <span className="about-philosophy__heading-line" key={line}>
                {line}
              </span>
            ))}
          </h2>

          <div className="about-philosophy__aside">
            <span className="about-philosophy__divider" aria-hidden="true" />
            <div className="about-philosophy__copy">
              {aboutPhilosophy.copy.map((line) => (
                <p
                  className={`about-philosophy__copy-line${line.emphasis ? ' about-philosophy__copy-line--emphasis' : ''}`}
                  key={line.text}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
