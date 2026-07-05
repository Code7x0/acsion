import { useState } from 'react';
import type { ShopProduct } from '../../data/shopContent';
import type { ShopProductSize } from './shopProductUtils';

type ShopProductCardProps = {
  product: ShopProduct;
  size: ShopProductSize;
  index: number;
  onQuickAdd?: () => void;
};

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 15.25S2.75 11.5 2.75 7.25C2.75 5.45 4.18 4 6 4c1.02 0 1.94.47 2.54 1.2.6-.73 1.52-1.2 2.54-1.2 1.82 0 3.25 1.45 3.25 3.25C14.33 11.5 9 15.25 9 15.25Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShopProductCard({ product, size, index, onQuickAdd }: ShopProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const loading = index < 2 ? 'eager' : 'lazy';
  const fetchPriority = index < 2 ? ('high' as const) : undefined;

  return (
    <article className={`shop-product-card shop-product-card--${size}`}>
      <a className="shop-product-card__link" href={product.href}>
        <div className="shop-product-card__media">
          <div className="shop-product-card__image-wrap">
            <img
              className="shop-product-card__image shop-product-card__image--primary"
              src={product.image}
              alt={product.title}
              loading={loading}
              fetchPriority={fetchPriority}
              width={800}
              height={1000}
            />
            {product.hoverImage && (
              <img
                className="shop-product-card__image shop-product-card__image--secondary"
                src={product.hoverImage}
                alt=""
                loading="lazy"
                aria-hidden="true"
                width={800}
                height={1000}
              />
            )}
          </div>
          <span className="shop-product-card__overlay" aria-hidden="true" />
          {product.available && (
            <button
              type="button"
              className={`product-card__quick-add shop-product-card__quick-add${added ? ' product-card__quick-add--added' : ''}`}
              aria-label={added ? `${product.title} added to cart` : `Quick add ${product.title} to cart`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (added) return;

                setAdded(true);
                onQuickAdd?.();
                window.setTimeout(() => setAdded(false), 1000);
              }}
            >
              {added ? '✓ Added' : '+'}
            </button>
          )}
          <button
            type="button"
            className={`shop-product-card__wishlist${wishlisted ? ' shop-product-card__wishlist--active' : ''}`}
            aria-label={wishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
            aria-pressed={wishlisted}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setWishlisted((active) => !active);
            }}
          >
            <HeartIcon />
          </button>
        </div>

        <div className="shop-product-card__info">
          <p className="shop-product-card__collection">{product.collection}</p>
          <h3 className="shop-product-card__title">{product.title}</h3>
          <p className="shop-product-card__price">${product.price}</p>
          <span className="shop-product-card__cta">
            View Product
            <span className="shop-product-card__cta-arrow" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </a>
    </article>
  );
}
