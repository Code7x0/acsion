type CollectionPanelProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  image: string;
  textAlign: 'left' | 'right';
  overlayOpacity: number;
  panelHeight: number;
};

export function CollectionPanel({
  title,
  subtitle,
  ctaLabel,
  href,
  image,
  textAlign,
  overlayOpacity,
  panelHeight,
}: CollectionPanelProps) {
  return (
    <a
      href={href}
      className={`collection-panel collection-panel--${textAlign}`}
      style={
        {
          '--panel-height': `${panelHeight}vh`,
          '--panel-overlay': overlayOpacity,
        } as React.CSSProperties
      }
      data-animate="fade"
    >
      <div className="collection-panel__media" aria-hidden="true">
        <img className="collection-panel__image" src={image} alt={title} loading="lazy" />
        <div className="collection-panel__overlay" />
        <div className="collection-panel__scrim" />
      </div>
      <div className="collection-panel__content">
        <h3 className="collection-panel__title">{title}</h3>
        <p className="collection-panel__subtitle type-nav">{subtitle}</p>
        <span className="collection-panel__cta link-text link-text--inverse">
          {ctaLabel}
          <span className="link-text__arrow" aria-hidden="true">
            &rarr;
          </span>
        </span>
      </div>
    </a>
  );
}
