type LinkTextProps = {
  label: string;
  href?: string;
  inverse?: boolean;
  className?: string;
};

export function LinkText({ label, href = '#', inverse = false, className = '' }: LinkTextProps) {
  return (
    <a
      href={href}
      className={`link-text${inverse ? ' link-text--inverse' : ''} ${className}`.trim()}
    >
      {label}
      <span className="link-text__arrow" aria-hidden="true">
        &rarr;
      </span>
    </a>
  );
}
