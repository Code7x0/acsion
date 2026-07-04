type ValueIconProps = {
  name: 'intention' | 'presence' | 'craft' | 'connection';
  className?: string;
  size?: number;
};

const stroke = { stroke: 'currentColor', fill: 'none' as const };

export function ValueIcon({ name, className = '', size = 28 }: ValueIconProps) {
  const icons = {
    intention: (
      <>
        <circle cx="24" cy="24" r="14" strokeWidth="0.8" {...stroke} />
        <circle cx="24" cy="24" r="9" strokeWidth="0.8" {...stroke} />
        <circle cx="24" cy="24" r="4" strokeWidth="0.8" {...stroke} />
      </>
    ),
    presence: (
      <>
        <circle cx="24" cy="24" r="5" strokeWidth="0.85" {...stroke} />
        <path d="M24 8V13M24 35V40M8 24H13M35 24H40" strokeWidth="0.8" {...stroke} />
        <path d="M13.5 13.5L17 17M31 31L34.5 34.5M34.5 13.5L31 17M17 31L13.5 34.5" strokeWidth="0.75" {...stroke} />
      </>
    ),
    craft: (
      <>
        <path d="M12 36V22C12 15.5 17.5 11 24 11C30.5 11 36 15.5 36 22V36" strokeWidth="0.85" {...stroke} />
        <path d="M12 36H36" strokeWidth="0.85" {...stroke} />
        <path d="M16 28H32M18 24H30M20 20H28" strokeWidth="0.75" {...stroke} />
      </>
    ),
    connection: (
      <>
        <circle cx="18" cy="24" r="7" strokeWidth="0.85" {...stroke} />
        <circle cx="30" cy="24" r="7" strokeWidth="0.85" {...stroke} />
      </>
    ),
  };

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
