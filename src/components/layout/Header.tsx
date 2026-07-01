import { useEffect, useState } from 'react';
import { site } from '../../data/content';
import { Logo } from './Logo';

type HeaderProps = {
  cartCount?: number;
};

export function Header({ cartCount = 0 }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header site-header--transparent" role="banner">
        <div className="site-header__inner container container--wide">
          <Logo className="site-header__logo" onClick={closeMenu} />

          <nav className="site-header__nav" aria-label="Primary">
            <ul className="site-header__menu">
              {site.nav.map((item) => (
                <li key={item.label}>
                  <a className="site-header__link type-nav hover-underline" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a className="site-header__icon site-header__icon--account" href="#" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="5.5" r="3" stroke="currentColor" strokeWidth="1" />
                <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a className="site-header__icon site-header__icon--cart" href="#" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4h12l-1.2 8H5.2L4 4Z" stroke="currentColor" strokeWidth="1" />
                <path d="M7 4V3a2 2 0 0 1 4 0v1" stroke="currentColor" strokeWidth="1" />
              </svg>
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
            <a className="mobile-menu__logo type-h4" href="#" onClick={closeMenu}>
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
                  <a className="mobile-menu__link type-nav" href={item.href} onClick={closeMenu}>
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
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4h12l-1.2 8H5.2L4 4Z" stroke="currentColor" strokeWidth="1" />
                <path d="M7 4V3a2 2 0 0 1 4 0v1" stroke="currentColor" strokeWidth="1" />
              </svg>
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
