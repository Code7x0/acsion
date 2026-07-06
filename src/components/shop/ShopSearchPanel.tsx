import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useShopSearch } from '../../context/ShopSearchContext';

function SearchIcon() {
  return (
    <svg className="shop-search__field-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.15" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function ShopSearchPanel() {
  const location = useLocation();
  const { query, setQuery, isOpen, closeSearch } = useShopSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const isShopPage = location.pathname === '/shop';

  useEffect(() => {
    if (!isOpen || !isShopPage) return;

    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSearch();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, isShopPage, closeSearch]);

  useEffect(() => {
    document.body.classList.toggle('shop-search-open', isShopPage && isOpen);
    return () => document.body.classList.remove('shop-search-open');
  }, [isShopPage, isOpen]);

  if (!isShopPage) return null;

  return (
    <div
      className={`shop-search${isOpen ? ' shop-search--open' : ''}`}
      id="shop-search"
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="shop-search__overlay"
        aria-label="Close search"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeSearch}
      />

      <div className="shop-search__dialog" role="search">
        <div className="shop-search__header">
          <div className="shop-search__intro">
            <p className="shop-search__label">Search</p>
            <h2 className="shop-search__title">Find your ritual</h2>
          </div>
          <button
            type="button"
            className="shop-search__close"
            aria-label="Close search"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeSearch}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>

        <label className="sr-only" htmlFor="shop-search-input">
          Search products
        </label>
        <div className="shop-search__field">
          <SearchIcon />
          <input
            ref={inputRef}
            id="shop-search-input"
            className="shop-search__input"
            type="search"
            value={query}
            placeholder="Search by product or collection"
            autoComplete="off"
            tabIndex={isOpen ? 0 : -1}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <p className="shop-search__hint">Try Yoga Mat, Wrap, Liminal, or Solar</p>
      </div>
    </div>
  );
}
