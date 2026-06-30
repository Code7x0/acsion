import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => {
      observer.observe(el);

      const rect = el.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      if (visibleHeight > 0 && visibleHeight / rect.height >= 0.08) {
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
    return () => observer.disconnect();
  }, []);
}

export function useHeaderScroll() {
  useEffect(() => {
    const header = document.querySelector('.site-header--transparent');
    const hero = document.querySelector('.hero');
    if (!header || !hero) return;

    let ticking = false;

    const updateHeader = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      header.classList.toggle('site-header--solid', heroBottom <= 72);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeader();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
