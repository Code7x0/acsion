import { collectionStory } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { CollectionCard } from '../ui/CollectionCard';

export function CollectionStory() {
  return (
    <section
      id="collections"
      className="collection-story section section--stone"
      aria-labelledby="collection-story-heading"
      style={
        {
          '--collection-card-gap': `${collectionStory.cardGap}px`,
          '--collection-card-height': `${collectionStory.cardHeight}rem`,
        } as React.CSSProperties
      }
    >
      <div className="collection-story__intro container container--wide">
        <SectionTitle label={collectionStory.label} className="collection-story__label" />
        <h2 className="collection-story__heading type-h2" id="collection-story-heading">
          {collectionStory.heading}
        </h2>
      </div>

      <div className="collection-story__grid container container--wide">
        {collectionStory.cards.map((card) => (
          <CollectionCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
