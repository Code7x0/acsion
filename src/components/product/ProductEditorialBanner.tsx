import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { productEditorialBanner } from '../../data/productEditorialBannerContent';
import { LotusMark } from '../ui/LotusMark';

const bannerHeights = {
  desktop: 390,
  tablet: 315,
  mobile: 270,
} as const;

export function ProductEditorialBanner() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
        };

  const accentMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.8, delay: 0.35, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
      };

  return (
    <section
      className="product-editorial-banner"
      aria-labelledby="product-editorial-banner-heading"
      style={
        {
          '--product-editorial-height-desktop': `${bannerHeights.desktop}px`,
          '--product-editorial-height-tablet': `${bannerHeights.tablet}px`,
          '--product-editorial-height-mobile': `${bannerHeights.mobile}px`,
        } as CSSProperties
      }
    >
      <div className="product-editorial-banner__media" aria-hidden="true">
        <img
          className="product-editorial-banner__image"
          src={productEditorialBanner.image}
          alt=""
          loading="lazy"
          width={2400}
          height={900}
        />
        <div className="product-editorial-banner__overlay product-editorial-banner__overlay--gradient" />
        <div className="product-editorial-banner__overlay product-editorial-banner__overlay--gold" />
      </div>

      <div className="product-editorial-banner__inner">
        <div className="product-editorial-banner__layout">
          <div className="product-editorial-banner__content">
            <motion.h2
              className="product-editorial-banner__heading"
              id="product-editorial-banner-heading"
              {...fadeUp(0.15)}
            >
              {productEditorialBanner.heading}
            </motion.h2>

            {productEditorialBanner.showAccent && (
              <motion.div className="product-editorial-banner__accent" aria-hidden="true" {...accentMotion}>
                <span className="product-editorial-banner__accent-line" />
                <LotusMark className="product-editorial-banner__lotus" size={32} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
