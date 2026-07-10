import { logoAlt, logoSrc } from '../../data/logo';

type LogoProps = {
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function Logo({ className = '', href = '#', onClick }: LogoProps) {
  const classes = ['site-logo', 'site-logo--header', className].filter(Boolean).join(' ');

  return (
    <a className={classes} href={href} onClick={onClick} aria-label={logoAlt}>
      <img
        className="site-logo__image"
        src={logoSrc}
        alt={logoAlt}
        width={75}
        height={75}
        decoding="async"
        loading="eager"
      />
    </a>
  );
}
