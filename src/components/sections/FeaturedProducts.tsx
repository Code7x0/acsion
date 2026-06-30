import { featuredProducts } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { LinkText } from '../ui/LinkText';
import { ProductCard } from '../ui/ProductCard';

type FeaturedProductsProps = {
  onQuickAdd?: () => void;
};

export function FeaturedProducts({ onQuickAdd }: FeaturedProductsProps) {
  return (
    <section
      id="products"
      className="featured-products section section--stone"
      aria-labelledby="featured-products-heading"
    >
      <div className="featured-products__inner container container--wide">
        <div className="featured-products__header">
          <div className="featured-products__intro">
            <SectionTitle label={featuredProducts.label} />
            <h2 className="featured-products__heading type-h2" id="featured-products-heading">
              {featuredProducts.heading}
            </h2>
          </div>
        </div>

        <div className="featured-products__grid" data-animate="fade">
          {featuredProducts.products.map((product, index) => (
            <div
              className="featured-products__item"
              data-animate="fade"
              key={product.title}
              style={{ '--stagger-index': index } as React.CSSProperties}
            >
              <ProductCard {...product} onQuickAdd={onQuickAdd} />
            </div>
          ))}
        </div>

        <LinkText
          label={featuredProducts.viewAllLabel}
          href={featuredProducts.viewAllLink}
          className="featured-products__view-all"
        />
      </div>
    </section>
  );
}
