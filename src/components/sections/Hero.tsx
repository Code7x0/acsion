import { hero } from '../../data/content';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section
      className="hero hero--align-center hero--align-mobile-center"
      style={
        {
          '--hero-height': `${hero.height}vh`,
          '--hero-overlay-opacity': hero.overlayOpacity,
          '--hero-object-position': 'center center',
          '--hero-object-position-mobile': 'left 30%',
        } as React.CSSProperties
      }
      aria-label={hero.heading}
    >
      <div className="hero__media">
        <picture className="hero__picture animate-scale-in">
          <img
            className="hero__image"
            src={hero.image}
            alt={hero.heading}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__heading animate-fade-up">{hero.heading}</h1>
          <p className="hero__subheading animate-fade-up animate-delay-2">{hero.subheading}</p>
          <span className="hero__divider animate-fade-up animate-delay-2" aria-hidden="true" />
          <div className="hero__actions animate-fade-up animate-delay-3">
            <p className="hero__tagline">{hero.tagline}</p>
            <div className="hero__cta animate-fade-in animate-delay-4">
              <Button label={hero.buttonLabel} href={hero.buttonLink} className="hero__button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
