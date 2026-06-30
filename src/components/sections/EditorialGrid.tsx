import { editorialGrid } from '../../data/content';
import { LinkText } from '../ui/LinkText';
import { ImageCard } from '../ui/ImageCard';

export function EditorialGrid() {
  return (
    <section
      id="editorial"
      className="editorial-grid section"
      aria-label="Editorial story"
      style={{ '--editorial-height': `${editorialGrid.stripHeight}rem` } as React.CSSProperties}
    >
      <div className="editorial-grid__strip">
        {editorialGrid.blocks.map((block, index) => {
          if (block.type === 'image') {
            return <ImageCard key={index} image={block.image} alt={block.alt} size={block.size} />;
          }

          return (
            <div className="editorial-grid__item editorial-grid__item--text" key={index}>
              <div className="editorial-grid__text">
                <h2 className="editorial-grid__heading">
                  {block.heading.map((line) => (
                    <span className="editorial-grid__heading-line" key={line}>
                      {line}
                    </span>
                  ))}
                </h2>
                <div className="editorial-grid__body type-body-sm type-muted">
                  {block.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <LinkText
                  label={block.buttonLabel}
                  href={block.buttonLink}
                  className="editorial-grid__cta"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
