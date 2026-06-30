import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Philosophy } from './components/sections/Philosophy';
import { CollectionStory } from './components/sections/CollectionStory';
import { FeaturedProducts } from './components/sections/FeaturedProducts';
import { EditorialGrid } from './components/sections/EditorialGrid';
import { Newsletter } from './components/sections/Newsletter';
import { useHeaderScroll, useScrollAnimations } from './hooks/useThemeEffects';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  useScrollAnimations();
  useHeaderScroll();

  const handleQuickAdd = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header cartCount={cartCount} />
      <main id="main-content" role="main" tabIndex={-1}>
        <Hero />
        <Philosophy />
        <CollectionStory />
        <FeaturedProducts onQuickAdd={handleQuickAdd} />
        <EditorialGrid />
        <div className="section-divider section-divider--editorial-newsletter" aria-hidden="true" />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
