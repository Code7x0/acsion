import type { MouseEvent, ReactNode } from 'react';
import { useSiteNavigation } from '../../hooks/useSiteNavigation';

type SiteLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
};

export function SiteLink({ href, className, children, onClick, ariaLabel }: SiteLinkProps) {
  const { navigateTo } = useSiteNavigation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();
    navigateTo(href);
  };

  return (
    <a className={className} href={href} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}
