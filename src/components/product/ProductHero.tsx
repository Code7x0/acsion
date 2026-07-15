import { useEffect, useRef } from 'react';
import type { ProductDetail } from '../../data/productContent';
import { ProductGallery } from './ProductGallery';
import { ProductPurchase } from './ProductPurchase';

type ProductHeroProps = {
  product: ProductDetail;
  onAddToCart?: (quantity: number) => void;
};

export function ProductHero({ product, onAddToCart }: ProductHeroProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const purchaseRef = useRef<HTMLDivElement>(null);
  const tallGallery = product.handle === 'ascension-wrap';

  useEffect(() => {
    const gallery = galleryRef.current;
    const purchase = purchaseRef.current;
    if (!gallery || !purchase) return;

    const frame = gallery.querySelector<HTMLElement>('.product-gallery__main-frame');
    const thumbList = gallery.querySelector<HTMLElement>('.product-gallery__thumb-list');
    const desktopQuery = window.matchMedia('(min-width: 768px)');

    const sync = () => {
      if (!frame) return;

      if (!desktopQuery.matches) {
        frame.style.height = '';
        frame.style.minHeight = '';
        frame.style.maxHeight = '';
        frame.style.aspectRatio = '';
        if (thumbList) thumbList.style.maxHeight = '';
        return;
      }

      const scale = tallGallery ? 1.42 : 1.12;
      const height = Math.round(purchase.offsetHeight * scale);
      frame.style.height = `${height}px`;
      frame.style.minHeight = `${height}px`;
      frame.style.maxHeight = `${height}px`;
      frame.style.aspectRatio = 'auto';
      if (thumbList) thumbList.style.maxHeight = `${height}px`;
    };

    const observer = new ResizeObserver(sync);
    observer.observe(purchase);
    desktopQuery.addEventListener('change', sync);
    sync();

    return () => {
      observer.disconnect();
      desktopQuery.removeEventListener('change', sync);
    };
  }, [product.handle, tallGallery]);

  return (
    <section
      className={`product-hero${tallGallery ? ' product-hero--tall-gallery' : ''}`}
      aria-labelledby="product-title"
    >
      <div className="product-hero__inner container container--wide">
        <div ref={galleryRef}>
          <ProductGallery images={product.images} />
        </div>
        <div ref={purchaseRef}>
          <ProductPurchase product={product} onAddToCart={onAddToCart} />
        </div>
      </div>
    </section>
  );
}
