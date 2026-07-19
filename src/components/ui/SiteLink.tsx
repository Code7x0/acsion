import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { useSiteNavigation } from '../../hooks/useSiteNavigation';

type SiteLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  style?: CSSProperties;
  ariaCurrent?: 'page';
};

export function SiteLink({
  href,
  className,
  children,
  onClick,
  ariaLabel,
  style,
  ariaCurrent,
}: SiteLinkProps) {
  const { navigateTo } = useSiteNavigation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();
    navigateTo(href);
  };

  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
