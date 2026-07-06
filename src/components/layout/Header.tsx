import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../../data/content';
import { useShopSearch } from '../../context/ShopSearchContext';
import { useSiteNavigation } from '../../hooks/useSiteNavigation';
import { SiteLink } from '../ui/SiteLink';
import { Logo } from './Logo';

type HeaderProps = {
  cartCount?: number;
  logoHref?: string;
};

const MENU_CLOSE_MS = 350;

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.15" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5.25 7.25V6a4.75 4.75 0 0 1 9.5 0v1.25"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M3.75 7.25h12.5l-1.05 9.45a.9.9 0 0 1-.9.8H5.7a.9.9 0 0 1-.9-.8L3.75 7.25Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({ cartCount = 0, logoHref = '/' }: HeaderProps) {
  const { navigateTo } = useSiteNavigation();
  const { isOpen: searchOpen, toggleSearch } = useShopSearch();
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const runNavigation = (href: string, fromMobileMenu = false) => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    const go = () => navigateTo(href);

    if (fromMobileMenu && menuOpen) {
      setMenuOpen(false);
      closeTimerRef.current = window.setTimeout(go, MENU_CLOSE_MS);
      return;
    }

    setMenuOpen(false);
    go();
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    fromMobileMenu = false,
  ) => {
    event.preventDefault();
    runNavigation(href, fromMobileMenu);
  };

  return (
    <>
      <header className="site-header site-header--transparent" role="banner">
        <div className="site-header__inner container container--wide">
          <Logo
            className="site-header__logo"
            href={logoHref}
            onClick={(event) => {
              event.preventDefault();
              runNavigation(logoHref, menuOpen);
            }}
          />

          <nav className="site-header__nav" aria-label="Primary">
            <ul className="site-header__menu">
              {site.nav.map((item) => (
                <li key={item.label}>
                  <SiteLink className="site-header__link type-nav hover-underline" href={item.href}>
                    {item.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            {isShopPage && (
              <button
                type="button"
                className={`site-header__icon site-header__icon--search${searchOpen ? ' site-header__icon--active' : ''}`}
                aria-label="Search products"
                aria-expanded={searchOpen}
                aria-controls="shop-search"
                onClick={toggleSearch}
              >
                <SearchIcon />
              </button>
            )}
            <a className="site-header__icon site-header__icon--account" href="#" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="5.5" r="3" stroke="currentColor" strokeWidth="1" />
                <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a className="site-header__icon site-header__icon--cart" href="#" aria-label="Cart">
              <CartIcon />
              {cartCount > 0 && (
                <span className="site-header__cart-count" aria-live="polite">
                  {cartCount}
                </span>
              )}
            </a>
            <button
              type="button"
              className="site-header__menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="site-header__menu-toggle-line" />
              <span className="site-header__menu-toggle-line" />
              <span className="site-header__menu-toggle-line" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__overlay" onClick={closeMenu} aria-hidden="true" />
        <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="mobile-menu__header">
            <a
              className="mobile-menu__logo type-h4"
              href={logoHref}
              onClick={(event) => handleNavClick(event, logoHref, true)}
            >
              {site.name}
            </a>
            <button
              type="button"
              className="mobile-menu__close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>

          <nav className="mobile-menu__nav" aria-label="Mobile">
            <ul className="mobile-menu__list">
              {site.nav.map((item, index) => (
                <li
                  className="mobile-menu__item"
                  key={item.label}
                  style={{ '--menu-item-index': index } as React.CSSProperties}
                >
                  <a
                    className="mobile-menu__link type-nav"
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href, true)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__footer">
            <a className="mobile-menu__icon" href="#" aria-label="Account" onClick={closeMenu}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="5.5" r="3" stroke="currentColor" strokeWidth="1" />
                <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a className="mobile-menu__icon" href="#" aria-label="Cart" onClick={closeMenu}>
              <CartIcon />
              {cartCount > 0 && (
                <span className="mobile-menu__cart-count" aria-live="polite">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
