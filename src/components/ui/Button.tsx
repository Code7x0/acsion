type ButtonProps = {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function Button({
  label,
  href = '#',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `btn btn--primary ${className}`.trim();

  if (type === 'submit' || onClick) {
    return (
      <button type={type} className={classes} onClick={onClick}>
        {label}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {label}
    </a>
  );
}
