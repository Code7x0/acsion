import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type ShopSearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
};

const ShopSearchContext = createContext<ShopSearchContextValue | null>(null);

export function ShopSearchProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setQuery('');
    setIsOpen(false);
  }, [location.pathname]);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      isOpen,
      openSearch: () => setIsOpen(true),
      closeSearch: () => {
        setIsOpen(false);
        setQuery('');
      },
      toggleSearch: () => setIsOpen((open) => !open),
    }),
    [query, isOpen],
  );

  return <ShopSearchContext.Provider value={value}>{children}</ShopSearchContext.Provider>;
}

export function useShopSearch() {
  const context = useContext(ShopSearchContext);

  if (!context) {
    throw new Error('useShopSearch must be used within ShopSearchProvider');
  }

  return context;
}
