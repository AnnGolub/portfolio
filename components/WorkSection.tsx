import Link from "next/link";
import { LetsTalkLink } from "@/components/LetsTalkLink";
import { VideoWithLoader } from "@/components/VideoWithLoader";
import type { CaseStudy } from "@/data/cases";

type WorkSectionProps = {
  cases: CaseStudy[];
  onLetsTalkClick?: () => void;
};

export function WorkSection({ cases, onLetsTalkClick }: WorkSectionProps) {
  return (
    <section
      id="projects"
      className="scroll-mt-24 max-lg:!m-0 max-lg:bg-background max-lg:!p-0 max-lg:!py-0 bg-background lg:w-full lg:self-stretch"
    >
      {/* Mobile layout */}
      <div className="lg:hidden">
        <h2 className="max-lg:!mb-0 max-lg:!mt-12 px-2 text-[47px] font-medium leading-normal text-white">
          Projects
        </h2>

        <div className="flex max-lg:!mb-0 max-lg:!mt-6 flex-col gap-12">
          {cases.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/work/${caseStudy.slug}`}
              className="block"
            >
              <div className="px-2">
                {caseStudy.mobileVideo ? (
                  <VideoWithLoader
                    src={caseStudy.mobileVideo}
                    className="rounded-[16px]"
                  />
                ) : (
                  <img
                    src={caseStudy.image}
                    alt=""
                    className="h-auto w-full rounded-[16px] object-cover"
                    aria-hidden
                  />
                )}
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
          ))}
        </div>

        <div className="flex max-lg:!mb-0 max-lg:!mt-12 justify-center">
          <LetsTalkLink onClick={onLetsTalkClick} />
        </div>
      </div>

      {/* Desktop layout: sticky left text + scrollable right projects */}
      <div className="hidden lg:flex lg:items-start lg:gap-6">
        {/* Left sticky panel */}
        <div className="sticky top-0 w-[636px] shrink-0 self-start pt-0">
          <h2 className="text-[64px] font-medium leading-normal text-white">
            Projects
          </h2>
          <p className="mt-4 text-[24px] font-normal leading-normal text-white/60">
            A selection of recent projects from my time — from zero-to-one product launches to design process transformation across a 30+ person team
          </p>
        </div>

        {/* Right scrollable projects */}
        <div className="flex w-[636px] shrink-0 flex-col">
          {cases.map((caseStudy, index) => (
            <div key={caseStudy.slug} className={index > 0 ? "mt-[72px]" : ""}>
              <Link
                href={`/work/${caseStudy.slug}`}
                className="block cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {caseStudy.desktopVideo ? (
                  <VideoWithLoader
                    src={caseStudy.desktopVideo}
                    className="rounded-[16px]"
                  />
                ) : (
                  <img
                    src={caseStudy.desktopImage}
                    alt=""
                    className="h-auto w-full rounded-[16px] object-cover"
                    aria-hidden
                  />
                )}
                <div className="mt-2 flex items-end justify-between gap-2">
                  <span className="min-w-0 flex-1 whitespace-pre-line text-[24px] font-normal leading-normal text-white">
                    {caseStudy.mobileTitle}
                  </span>
                  <span className="shrink-0 self-end whitespace-nowrap text-[24px] font-normal leading-normal text-white/60">
                    {caseStudy.category}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
