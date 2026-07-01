type LogoProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
};

const logoSrc = '/images/ascension-logo.png';
const logoAlt = 'Ascension by Aluminate Life';

export function Logo({ className = '', href = '#', onClick }: LogoProps) {
  const classes = ['site-logo', 'site-logo--header', className].filter(Boolean).join(' ');

  return (
    <a className={classes} href={href} onClick={onClick} aria-label={logoAlt}>
      <img
        className="site-logo__image"
        src={logoSrc}
        alt=""
        width={1024}
        height={1024}
        decoding="async"
        loading="lazy"
      />
    </a>
  );
}
