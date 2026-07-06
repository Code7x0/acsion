import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { parseSiteHref, scrollToHash } from '../utils/navigation';

export function useSiteNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = useCallback(
    (href: string) => {
      const { pathname, hash } = parseSiteHref(href);
      const nextHash = hash ? `#${hash}` : '';
      const isSamePath = location.pathname === pathname;
      const isSameHash = (location.hash || '') === nextHash;

      if (isSamePath && isSameHash) {
        scrollToHash(hash, 'smooth');
        return;
      }

      navigate({
        pathname,
        hash: nextHash || undefined,
      });
    },
    [location.hash, location.pathname, navigate],
  );

  return { navigateTo };
}
