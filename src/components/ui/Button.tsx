import type { MouseEvent } from 'react';
import { useSiteNavigation } from '../../hooks/useSiteNavigation';

type ButtonProps = {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

function normalizeHref(href: string) {
  if (href.startsWith('/') || href.startsWith('#')) {
    return href.startsWith('#') ? `/${href}` : href;
  }

  return href;
}

export function Button({
  label,
  href = '#',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const { navigateTo } = useSiteNavigation();
  const classes = `btn btn--primary ${className}`.trim();

  if (type === 'submit' || onClick) {
    return (
      <button type={type} className={classes} onClick={onClick}>
        {label}
      </button>
    );
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href === '#') return;
    event.preventDefault();
    navigateTo(normalizeHref(href));
  };

  return (
    <a href={href} className={classes} onClick={handleClick}>
      {label}
    </a>
  );
}
