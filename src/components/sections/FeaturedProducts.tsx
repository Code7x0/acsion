import { featuredProducts } from '../../data/content';
import { shopProducts } from '../../data/shopContent';
import { SectionTitle } from '../ui/SectionTitle';
import { LinkText } from '../ui/LinkText';
import { ProductCard } from '../ui/ProductCard';

type FeaturedProductsProps = {
  onQuickAdd?: () => void;
};

export function FeaturedProducts({ onQuickAdd }: FeaturedProductsProps) {
  const products = shopProducts.slice(0, featuredProducts.limit);

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
          {products.map((product, index) => (
            <div
              className="featured-products__item"
              data-animate="fade"
              key={product.id}
              style={{ '--stagger-index': index } as React.CSSProperties}
            >
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
                href={product.href}
                onQuickAdd={onQuickAdd}
              />
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
