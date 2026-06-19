import Link from "next/link";
import type { CaseStudy } from "@/data/cases";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  className?: string;
  variant?: "mobile" | "desktop";
};

export function CaseStudyCard({
  caseStudy,
  className = "",
  variant = "mobile",
}: CaseStudyCardProps) {
  if (variant === "desktop") {
    return (
      <Link
        href={`/work/${caseStudy.slug}`}
        className={`block w-[384px] shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
      >
        <img
          src={caseStudy.desktopImage}
          alt=""
          width={384}
          className="h-auto w-[384px] rounded-none object-cover"
          aria-hidden
        />
        <div className="mt-4 flex items-end justify-between">
          <span className="max-w-[60%] whitespace-normal break-words text-base font-normal text-white">
            {caseStudy.title}
          </span>
          <span className="self-end whitespace-nowrap text-base font-normal text-white/60">
            {caseStudy.category}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className={`group block max-lg:!m-0 max-lg:px-0 ${className}`}
    >
      <div className="px-2">
        <img
          src={caseStudy.image}
          alt=""
          className="h-auto w-full rounded-none object-cover"
          aria-hidden
        />
      </div>
      <div className="flex items-end gap-2 px-2 pb-0 pt-2">
        <span className="min-w-0 flex-1 whitespace-pre-line text-left text-[16px] font-normal leading-5 text-white">
          {caseStudy.mobileTitle}
        </span>
        <span className="max-w-[45%] shrink-0 break-words whitespace-normal text-right text-[14px] font-normal leading-5 text-white/60">
          {caseStudy.category}
        </span>
      </div>
    </Link>
  );
}
