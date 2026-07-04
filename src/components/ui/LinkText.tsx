import { useSiteNavigation } from '../../hooks/useSiteNavigation';

type LinkTextProps = {
  label: string;
  href?: string;
  inverse?: boolean;
  className?: string;
};

export function LinkText({ label, href = '#', inverse = false, className = '' }: LinkTextProps) {
  const { navigateTo } = useSiteNavigation();

  return (
    <a
      href={href}
      className={`link-text${inverse ? ' link-text--inverse' : ''} ${className}`.trim()}
      onClick={(event) => {
        if (href === '#') return;
        event.preventDefault();
        navigateTo(href.startsWith('/') ? href : `/${href}`);
      }}
    >
      {label}
      <span className="link-text__arrow" aria-hidden="true">
        &rarr;
      </span>
    </a>
  );
}
