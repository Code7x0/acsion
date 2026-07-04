import type { CSSProperties } from 'react';
import { shopHero } from '../../data/shopContent';
import { Button } from '../ui/Button';
import { LotusMark } from '../ui/LotusMark';

export function ShopHero() {
  return (
    <section
      className="shop-hero hero hero--align-left hero--align-mobile-left"
      style={
        {
          '--shop-hero-object-position': shopHero.objectPosition,
          '--shop-hero-object-position-mobile': shopHero.objectPositionMobile,
        } as CSSProperties
      }
      aria-labelledby="shop-hero-heading"
    >
      <div className="hero__media">
        <picture className="hero__picture shop-hero__picture">
          <img
            className="hero__image shop-hero__image"
            src={shopHero.image}
            alt={shopHero.imageAlt}
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="shop-hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__content shop-hero__content">
        <div className="hero__text shop-hero__text">
          <p className="shop-hero__label" data-animate="fade-up">
            {shopHero.label}
          </p>

          <h1 className="shop-hero__heading" id="shop-hero-heading" data-animate="fade-up" data-animate-delay="150">
            {shopHero.heading.map((line) => (
              <span className="shop-hero__heading-line" key={line}>
                {line}
              </span>
            ))}
          </h1>

          <p className="shop-hero__subtext" data-animate="fade-up" data-animate-delay="300">
            {shopHero.subtext}
          </p>

          <div className="shop-hero__cta" data-animate="fade-up" data-animate-delay="450">
            <Button
              label={shopHero.buttonLabel}
              href={shopHero.buttonLink}
              className="hero__button shop-hero__button"
            />
          </div>
        </div>
      </div>

      <div className="shop-hero__scroll" aria-hidden="true" data-animate="fade">
        <span className="shop-hero__scroll-line" />
        <LotusMark className="shop-hero__scroll-mark" size={16} />
      </div>
    </section>
  );
}
