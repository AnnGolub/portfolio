type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-white/40 ${className}`}
    >
      {children}
    </p>
  );
}
