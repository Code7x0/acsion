type ImageCardProps = {
  image: string;
  alt: string;
  size: 'large' | 'medium' | 'compact' | 'small';
  href?: string;
};

export function ImageCard({ image, alt, size, href }: ImageCardProps) {
  const inner = (
    <div className="editorial-grid__media">
      <img
        className="editorial-grid__image"
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  return (
    <div className={`editorial-grid__item editorial-grid__item--${size}`}>
      {href ? (
        <a href={href} className="editorial-grid__link">
          {inner}
        </a>
      ) : (
        <div className="editorial-grid__link">{inner}</div>
      )}
    </div>
  );
}
