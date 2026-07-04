import { SiteLink } from '../ui/SiteLink';
import { site } from '../../data/content';

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__main container container--wide">
        <div className="site-footer__brand">
          <SiteLink className="site-footer__brand-link" href="/" ariaLabel="Ascension home">
            <img
              className="site-footer__brand-mark"
              src="/images/ascension-logo.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </SiteLink>
          <p className="site-footer__brand-tagline">{site.footerTagline}</p>
        </div>

        {site.footerMenus.map((column) => (
          <div className="site-footer__column" key={column.heading}>
            <h2 className="site-footer__heading">{column.heading}</h2>
            <nav aria-label={column.heading}>
              <ul className="site-footer__links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <SiteLink className="site-footer__link" href={link.href}>
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>

      <div className="site-footer__bottom container container--wide">
        <p className="site-footer__copyright">{site.copyright}</p>
        <nav className="site-footer__legal" aria-label="Legal">
          {site.footerLegal.map((link) => (
            <a className="site-footer__legal-link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
