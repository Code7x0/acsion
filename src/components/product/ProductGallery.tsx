import { useEffect, useRef, useState } from 'react';
import type { ProductImage } from '../../data/productContent';

type ProductGalleryProps = {
  images: ProductImage[];
};

function ChevronUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 3.5L11 8.5H3L7 3.5Z" fill="currentColor" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 10.5L3 5.5H11L7 10.5Z" fill="currentColor" />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4.75" stroke="currentColor" strokeWidth="1.1" />
      <path d="M11.5 11.5L15 15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M8 5.75V10.25M5.75 8H10.25" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const thumbListRef = useRef<HTMLDivElement>(null);
  const activeImage = images[activeIndex] ?? images[0];
  const showThumbs = images.length > 1;

  const selectImage = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setFadeKey((key) => key + 1);
  };

  const scrollThumbs = (direction: 'up' | 'down') => {
    const next =
      direction === 'up'
        ? Math.max(0, activeIndex - 1)
        : Math.min(images.length - 1, activeIndex + 1);
    selectImage(next);
  };

  useEffect(() => {
    const activeThumb = thumbListRef.current?.querySelector<HTMLButtonElement>(
      `[data-thumb-index="${activeIndex}"]`,
    );
    activeThumb?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [activeIndex]);

  if (!activeImage) return null;

  return (
    <div className="product-gallery">
      {showThumbs && (
        <div className="product-gallery__thumbs">
          <button
            type="button"
            className="product-gallery__thumb-nav product-gallery__thumb-nav--up"
            aria-label="Previous image"
            disabled={activeIndex === 0}
            onClick={() => scrollThumbs('up')}
          >
            <ChevronUpIcon />
          </button>

          <div className="product-gallery__thumb-list" ref={thumbListRef}>
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                className={`product-gallery__thumb${index === activeIndex ? ' product-gallery__thumb--active' : ''}`}
                data-thumb-index={index}
                aria-label={`View image ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => selectImage(index)}
              >
                <img src={image.src} alt="" loading="lazy" width={72} height={90} />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="product-gallery__thumb-nav product-gallery__thumb-nav--down"
            aria-label="Next image"
            disabled={activeIndex === images.length - 1}
            onClick={() => scrollThumbs('down')}
          >
            <ChevronDownIcon />
          </button>
        </div>
      )}

      <div className="product-gallery__main">
        <button type="button" className="product-gallery__zoom" aria-label="Zoom image">
          <ZoomIcon />
        </button>
        <div className="product-gallery__main-frame">
          <img
            key={fadeKey}
            className="product-gallery__main-image"
            src={activeImage.src}
            alt={activeImage.alt}
            loading="eager"
            fetchPriority="high"
            width={900}
            height={1125}
          />
        </div>
      </div>
    </div>
  );
}
