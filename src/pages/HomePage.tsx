import { Hero } from '../components/sections/Hero';
import { Philosophy } from '../components/sections/Philosophy';
import { CollectionStory } from '../components/sections/CollectionStory';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { EditorialGrid } from '../components/sections/EditorialGrid';
import { Newsletter } from '../components/sections/Newsletter';

type HomePageProps = {
  onQuickAdd: () => void;
};

export function HomePage({ onQuickAdd }: HomePageProps) {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedProducts onQuickAdd={onQuickAdd} />
      <CollectionStory />
      <EditorialGrid />
      <div className="section-divider section-divider--editorial-newsletter" aria-hidden="true" />
      <Newsletter />
    </>
  );
}
