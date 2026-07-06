import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ShopSearchPanel } from './components/shop/ShopSearchPanel';
import { ShopSearchProvider } from './context/ShopSearchContext';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ShopPage } from './pages/ShopPage';
import { useHeaderScroll, useScrollAnimations } from './hooks/useThemeEffects';
import { scrollToHashWhenReady } from './utils/navigation';

function AppShell() {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useScrollAnimations();
  useHeaderScroll();

  useEffect(() => {
    if (location.hash) {
      return scrollToHashWhenReady(location.hash.slice(1), 'smooth');
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  const handleQuickAdd = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header cartCount={cartCount} logoHref="/" />
      <ShopSearchPanel />
      <main id="main-content" role="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage onQuickAdd={handleQuickAdd} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage onQuickAdd={handleQuickAdd} />} />
          <Route path="/products/:handle" element={<ProductPage onAddToCart={handleQuickAdd} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ShopSearchProvider>
        <AppShell />
      </ShopSearchProvider>
    </BrowserRouter>
  );
}
