import { site } from '../../data/content';

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__main container container--wide">
        <div className="site-footer__brand">
          <a className="site-footer__logo" href="#">
            {site.name}
          </a>
          <p className="site-footer__tagline type-body-sm">{site.tagline}</p>
        </div>

        <div className="site-footer__menus">
          {site.footerMenus.map((column) => (
            <div className="site-footer__column" key={column.heading}>
              <h2 className="site-footer__heading type-label">{column.heading}</h2>
              <nav aria-label={column.heading}>
                <ul className="site-footer__links">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a className="site-footer__link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom container container--wide">
        <p className="site-footer__copyright type-label">{site.copyright}</p>
      </div>
    </footer>
  );
}
