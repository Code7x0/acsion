import { motion, useReducedMotion } from 'framer-motion';
import { editorialBanner } from '../../data/editorialBannerContent';
import { LotusMark } from '../ui/LotusMark';
import { SiteLink } from '../ui/SiteLink';

export function EditorialBanner() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.35 },
          transition: { duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
        };

  return (
    <section className="editorial-banner" aria-labelledby="editorial-banner-heading">
      <div className="editorial-banner__media" aria-hidden="true">
        <img
          className="editorial-banner__image"
          src={editorialBanner.image}
          alt=""
          loading="lazy"
          width={2400}
          height={900}
        />
        <div className="editorial-banner__overlay editorial-banner__overlay--gradient" />
        <div className="editorial-banner__overlay editorial-banner__overlay--gold" />
        <div className="editorial-banner__dust editorial-banner__dust--one" />
        <div className="editorial-banner__dust editorial-banner__dust--two" />
        <div className="editorial-banner__dust editorial-banner__dust--three" />
      </div>

      <div className="editorial-banner__inner">
        <div className="editorial-banner__layout">
          <div className="editorial-banner__content">
            <motion.span className="editorial-banner__rule" aria-hidden="true" {...fadeUp()} />

            <motion.h2 className="editorial-banner__heading" id="editorial-banner-heading" {...fadeUp(0.15)}>
              {editorialBanner.heading}
            </motion.h2>

            <motion.p className="editorial-banner__copy" {...fadeUp(0.3)}>
              {editorialBanner.paragraph}
            </motion.p>

            <motion.div className="editorial-banner__cta-wrap" {...fadeUp(0.45)}>
              <SiteLink className="editorial-banner__cta" href={editorialBanner.ctaLink}>
                {editorialBanner.ctaLabel}
                <span className="editorial-banner__cta-arrow" aria-hidden="true">
                  →
                </span>
              </SiteLink>
            </motion.div>
          </div>

          {editorialBanner.showLotus && (
            <motion.div
              className="editorial-banner__divider"
              aria-hidden="true"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="editorial-banner__divider-line" />
              <LotusMark className="editorial-banner__lotus" size={56} />
              <span className="editorial-banner__divider-line" />
            </motion.div>
          )}

          <div className="editorial-banner__visual" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
