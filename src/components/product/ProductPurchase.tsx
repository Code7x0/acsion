import { useMemo, useState } from 'react';
import type { ProductDetail } from '../../data/productContent';

type ProductPurchaseProps = {
  product: ProductDetail;
  onAddToCart?: (quantity: number) => void;
};

function TrustIcon({ type }: { type: 'ship' | 'secure' | 'world' }) {
  if (type === 'ship') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2.5 5.5h9v7H2.5v-7Z" stroke="currentColor" strokeWidth="1" />
        <path d="M11.5 7.5H14l1.5 2v3h-4v-5Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="5" cy="13.5" r="1" fill="currentColor" />
        <circle cx="13" cy="13.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'secure') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2.5L15 5v4.5c0 3.2-2.4 5.8-6 6.5-3.6-.7-6-3.3-6-6.5V5L9 2.5Z" stroke="currentColor" strokeWidth="1" />
        <path d="M7 9l1.5 1.5L11.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.25" stroke="currentColor" strokeWidth="1" />
      <path d="M2.5 9h13M9 2.75c-2 2.25-2 4.5-2 6.25s0 4 2 6.25c2-2.25 2-4.5 2-6.25s0-4-2-6.25Z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

const trustIcons = ['ship', 'secure', 'world'] as const;

export function ProductPurchase({ product, onAddToCart }: ProductPurchaseProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id ?? '');
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = useMemo(
    () => product.variants.find((variant) => variant.id === selectedVariantId) ?? product.variants[0],
    [product.variants, selectedVariantId],
  );

  const showIntentionPicker = product.variants.length > 1 && product.variants[0]?.id !== 'default';

  const handleAddToCart = () => {
    onAddToCart?.(quantity);
  };

  return (
    <div className="product-purchase">
      <p className="product-purchase__collection">{product.collectionLabel}</p>
      <h1 className="product-purchase__title" id="product-title">
        {product.title}
      </h1>
      <p className="product-purchase__price">${product.price.toFixed(2)}</p>

      <div className="product-purchase__description">
        {product.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {showIntentionPicker && (
        <div className="product-purchase__variants">
          <p className="product-purchase__variants-label">Intention</p>
          <div className="product-purchase__variant-list" role="listbox" aria-label="Select intention">
            {product.variants.map((variant) => {
              const isSelected = variant.id === selectedVariant?.id;

              return (
                <button
                  key={variant.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`product-purchase__variant${isSelected ? ' product-purchase__variant--selected' : ''}`}
                  disabled={!variant.available}
                  onClick={() => setSelectedVariantId(variant.id)}
                >
                  <span
                    className="product-purchase__variant-swatch"
                    style={{ background: variant.swatch }}
                    aria-hidden="true"
                  />
                  <span className="product-purchase__variant-copy">
                    <span className="product-purchase__variant-name">{variant.name}</span>
                    <span className="product-purchase__variant-stone">({variant.stone})</span>
                  </span>
                  {isSelected && (
                    <span className="product-purchase__variant-check" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="product-purchase__quantity-row">
        <p className="product-purchase__quantity-label">Quantity</p>
        <div className="product-purchase__quantity">
          <button
            type="button"
            className="product-purchase__quantity-button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          >
            −
          </button>
          <span className="product-purchase__quantity-value" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            className="product-purchase__quantity-button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => value + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="product-purchase__actions">
        <button type="button" className="product-purchase__add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button type="button" className="product-purchase__paypal" aria-label="Buy with PayPal">
          <span className="product-purchase__paypal-label">Buy with</span>
          <span className="product-purchase__paypal-logo">PayPal</span>
        </button>
      </div>

      <ul className="product-purchase__trust">
        {product.trustBadges.map((badge, index) => (
          <li key={badge.label} className="product-purchase__trust-item">
            <TrustIcon type={trustIcons[index] ?? 'ship'} />
            <span>{badge.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
