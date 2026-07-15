import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    elements.forEach((el) => el.classList.remove('is-visible'));

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
  }, [location.pathname]);
}

