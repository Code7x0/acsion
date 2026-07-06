import type { CSSProperties } from 'react';
import type { ProductStoryContent } from '../../data/productStoryContent';
import { ProductAccordion } from './ProductAccordion';

type ProductStoryProps = {
  story: ProductStoryContent;
};

export function ProductStory({ story }: ProductStoryProps) {
  return (
    <section
      className="product-story"
      aria-labelledby="product-story-heading"
      style={
        {
          '--product-story-bg': 'var(--color-stone)',
        } as CSSProperties
      }
    >
      <div className="product-story__texture" aria-hidden="true" />

      <div className="product-story__inner">
        <div className="product-story__grid" data-animate="fade-up">
          <div className="product-story__media" data-animate="foundation-scale">
            <div className="product-story__media-frame">
              <img
                className="product-story__image"
                src={story.lifestyleImage}
                alt={story.lifestyleImageAlt}
                loading="lazy"
                width={960}
                height={620}
              />
            </div>
          </div>

          <div className="product-story__content">
            <p className="product-story__label" data-animate="fade-up">
              {story.label}
            </p>

            {story.showDivider && <span className="product-story__divider" aria-hidden="true" />}

            <h2
              className="product-story__heading"
              id="product-story-heading"
              data-animate="fade-up"
              data-animate-delay="150"
            >
              {story.heading.map((line) => (
                <span className="product-story__heading-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>

            <div className="product-story__body" data-animate="fade-up" data-animate-delay="300">
              {story.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="product-story__accordion-wrap" data-animate="fade-up" data-animate-delay="450">
          <ProductAccordion items={story.accordion} defaultOpenId={story.defaultOpenId} />
        </div>
      </div>
    </section>
  );
}
