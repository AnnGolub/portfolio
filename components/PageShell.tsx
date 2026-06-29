type PageShellProps = {
  children: React.ReactNode;
  tone?: "base" | "elevated" | "surface";
  className?: string;
  innerClassName?: string;
  caseStudy?: boolean;
};

const tones = {
  base: "bg-[#0a0a0a]",
  elevated: "bg-[#0f0f0f]",
  surface: "bg-[#141414]",
};

export function PageShell({
  children,
  tone = "elevated",
  className = "",
  innerClassName = "max-w-6xl lg:max-w-[44rem]",
  caseStudy = false,
}: PageShellProps) {
  const layoutClasses = caseStudy
    ? "px-2 pb-20 pt-0 sm:pb-28"
    : "px-5 pb-20 pt-24 sm:px-8 sm:pt-28 sm:pb-28";

  return (
    <div
      className={`min-h-screen w-full ${caseStudy ? "" : "overflow-x-hidden"} ${layoutClasses} ${tones[tone]} ${className}`}
    >
      <div className={`mx-auto w-full ${innerClassName}`}>{children}</div>
    </div>
  );
}
