type SectionTitleProps = {
  label: string;
  className?: string;
};

export function SectionTitle({ label, className = '' }: SectionTitleProps) {
  return <p className={`section-title type-label ${className}`.trim()}>{label}</p>;
}
