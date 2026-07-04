export type ParsedSiteHref = {
  pathname: string;
  hash: string;
};

export function parseSiteHref(href: string): ParsedSiteHref {
  if (!href || href === '#') {
    return { pathname: '/', hash: '' };
  }

  const hashIndex = href.indexOf('#');

  if (hashIndex === -1) {
    return { pathname: href.startsWith('/') ? href : `/${href}`, hash: '' };
  }

  const pathname = href.slice(0, hashIndex) || '/';
  const hash = href.slice(hashIndex + 1);

  return { pathname, hash };
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  if (!hash) {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const element = document.getElementById(hash);
  if (!element) return false;

  element.scrollIntoView({ behavior, block: 'start' });
  return true;
}

export function scrollToHashWhenReady(hash: string, behavior: ScrollBehavior = 'smooth') {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'auto' });
    return () => {};
  }

  let attempts = 0;
  let frameId = 0;
  let timeoutId = 0;

  const tryScroll = () => {
    if (scrollToHash(hash, behavior) || attempts >= 30) {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      return;
    }

    attempts += 1;
    frameId = window.requestAnimationFrame(tryScroll);
  };

  frameId = window.requestAnimationFrame(tryScroll);
  timeoutId = window.setTimeout(tryScroll, 120);

  return () => {
    window.cancelAnimationFrame(frameId);
    window.clearTimeout(timeoutId);
  };
}
