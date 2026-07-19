export type ContactIconName = 'lotus' | 'geometry' | 'pin' | 'envelope' | 'phone';

type ContactIconProps = {
  name: ContactIconName;
  className?: string;
  size?: number;
};

const paths: Record<ContactIconName, JSX.Element> = {
  lotus: (
    <>
      <path d="M16 26C13 20 14 12 16 8C18 12 19 20 16 26Z" />
      <path d="M16 26C12 22 9 16 9 11C13 13 16 19 16 26Z" />
      <path d="M16 26C20 22 23 16 23 11C19 13 16 19 16 26Z" />
      <path d="M16 26C11 25 6 21 4 16C8 15 13 20 16 26Z" />
      <path d="M16 26C21 25 26 21 28 16C24 15 19 20 16 26Z" />
    </>
  ),
  geometry: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 5L25.5 21.5H6.5L16 5Z" />
      <path d="M16 27L6.5 10.5H25.5L16 27Z" />
      <circle cx="16" cy="16" r="1.6" />
    </>
  ),
  pin: (
    <>
      <path d="M16 28C11 21 8 17 8 12A8 8 0 1 1 24 12C24 17 21 21 16 28Z" />
      <circle cx="16" cy="12" r="3" />
    </>
  ),
  envelope: (
    <>
      <rect x="5" y="9" width="22" height="14" rx="1.5" />
      <path d="M6 10.5L16 18L26 10.5" />
    </>
  ),
  phone: (
    <>
      <rect x="10" y="4" width="12" height="24" rx="2.5" />
      <path d="M14 24H18" />
    </>
  ),
};

export function ContactIcon({ name, className = '', size = 32 }: ContactIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
