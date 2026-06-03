type PageShellProps = {
  children: React.ReactNode;
  tone?: "base" | "elevated" | "surface";
  className?: string;
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
}: PageShellProps) {
  return (
    <div
      className={`min-h-screen w-full px-5 pb-20 pt-24 sm:px-8 sm:pt-28 sm:pb-28 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl lg:max-w-[44rem]">{children}</div>
    </div>
  );
}
