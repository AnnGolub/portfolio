import Link from "next/link";
import { TypewriterText } from "@/components/TypewriterText";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Mobile: full-screen photo background */}
      <div className="relative h-full md:hidden">
        <img
          src="/photo.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_15%]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.65)]"
          aria-hidden
        />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex flex-1 flex-col justify-end pb-16 pl-8">
            <h1 className="text-5xl font-black tracking-tight text-white">
              {site.name}
            </h1>
            <TypewriterText
              text={site.tagline}
              speed={50}
              className="mt-3 max-w-md text-left text-base leading-relaxed text-white/70"
            />
          </div>
          <div className="mb-10 flex justify-center">
            <Link
              href="#work"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              View work
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: split layout */}
      <div className="hidden h-full md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16">
          <h1 className="text-6xl font-black tracking-tight text-white lg:text-8xl">
            {site.name}
          </h1>
          <TypewriterText
            text={site.tagline}
            speed={50}
            className="mt-4 max-w-md text-left text-lg leading-relaxed text-white/70"
          />
          <Link
            href="#work"
            className="mt-8 inline-flex w-fit rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            View work
          </Link>
        </div>

        <div className="flex items-center justify-end px-8 lg:px-16">
          <img
            src="/photo.jpg"
            alt="Anna Golubeva"
            width={400}
            height={500}
            className="h-[500px] max-h-[85vh] w-auto max-w-full rounded-2xl object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
