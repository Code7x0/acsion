import { motion, useReducedMotion } from 'framer-motion';
import { ShopProductCard } from '../shop/ShopProductCard';
import { getRecommendedProducts } from '../../utils/catalogProducts';

type ProductRecommendationsProps = {
  currentHandle: string;
  onQuickAdd?: () => void;
};

const content = {
  label: 'You May Also Like',
  heading: 'Continue Your Journey',
  description: 'Discover thoughtfully crafted pieces that complement your daily rituals.',
};

export function ProductRecommendations({ currentHandle, onQuickAdd }: ProductRecommendationsProps) {
  const prefersReducedMotion = useReducedMotion();
  const products = getRecommendedProducts(currentHandle, 4);

  if (!products.length) return null;

  const cardMotion = (index: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.8,
            delay: index * 0.12,
            ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
          },
        };

  return (
    <section className="product-recommendations" aria-labelledby="product-recommendations-heading">
      <div className="product-recommendations__inner container container--wide">
        <header className="product-recommendations__header" data-animate="fade-up">
          <p className="product-recommendations__label">{content.label}</p>
          <span className="product-recommendations__divider" aria-hidden="true" />
          <h2 className="product-recommendations__heading" id="product-recommendations-heading">
            {content.heading}
          </h2>
          <p className="product-recommendations__description">{content.description}</p>
        </header>

        <div className="product-recommendations__grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-recommendations__item"
              {...cardMotion(index)}
            >
              <ShopProductCard
                product={product}
                size="standard"
                index={index}
                onQuickAdd={onQuickAdd}
                variant="recommendation"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
