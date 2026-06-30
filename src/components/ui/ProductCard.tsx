import { useState } from 'react';

type Product = {
  title: string;
  price: number;
  image: string;
  href: string;
};

type ProductCardProps = Product & {
  onQuickAdd?: () => void;
};

export function ProductCard({ title, price, image, href, onQuickAdd }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (added) return;

    setAdded(true);
    onQuickAdd?.();
    window.setTimeout(() => setAdded(false), 1000);
  };

  return (
    <a href={href} className="product-card">
      <div className="product-card__media">
        <img className="product-card__image product-card__image--primary" src={image} alt={title} loading="lazy" />
        <button
          type="button"
          className={`product-card__quick-add${added ? ' product-card__quick-add--added' : ''}`}
          aria-label={added ? `${title} added to cart` : `Quick add ${title} to cart`}
          onClick={handleQuickAdd}
        >
          {added ? '✓ Added' : '+'}
        </button>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">${price}</p>
      </div>
    </a>
  );
}
