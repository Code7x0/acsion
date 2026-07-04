type LotusMarkProps = {
  className?: string;
  size?: number;
};

export function LotusMark({ className = '', size = 24 }: LotusMarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 6L28.5 16.5H39L30.75 23.25L34.5 34.5L24 28.5L13.5 34.5L17.25 23.25L9 16.5H19.5L24 6Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
      />
      <path
        d="M24 14L26.5 20H33L28 24L30 30L24 26.5L18 30L20 24L15 20H21.5L24 14Z"
        stroke="currentColor"
        strokeWidth="0.85"
      />
      <path d="M24 20L24 30" stroke="currentColor" strokeWidth="0.75" />
      <path d="M20 24L28 24" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}
