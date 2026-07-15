import type { CSSProperties } from 'react';
import { SiteLink } from './SiteLink';

type CollectionCardProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt?: string;
  overlayOpacity?: number;
};

export function CollectionCard({
  title,
  subtitle,
  ctaLabel,
  href,
  image,
  imageAlt,
  overlayOpacity = 0.2,
}: CollectionCardProps) {
  return (
    <SiteLink
      href={href}
      className="collection-card"
      style={{ '--card-overlay': overlayOpacity } as CSSProperties}
    >
      <div className="collection-card__media" aria-hidden="true">
        <img className="collection-card__image" src={image} alt={imageAlt ?? title} loading="lazy" />
        <div className="collection-card__overlay" />
      </div>

      <div className="collection-card__content">
        <h3 className="collection-card__title">{title}</h3>
        <p className="collection-card__subtitle type-nav">{subtitle}</p>
        <span className="collection-card__cta type-label">{ctaLabel}</span>
      </div>
    </SiteLink>
  );
}
