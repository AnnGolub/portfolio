"use client";

import { useState } from "react";
import { site } from "@/data/site";

const aboutText =
  "I grew up in Saint Petersburg and trained as a ballet dancer before finding my way into product design. Turns out choreography and UX have more in common than you'd think — both are about guiding people through an experience without them noticing the work behind it\n\n5+ years in IT, the last 3 at Alfa-Bank as a Senior Product Designer on the business product team — also leading the design system's widget library (quality, Figma library, dev handoff), with 220 widgets and components shipped to Storybook last year alongside engineering\n\nNow based in Barcelona, looking for the next stage";

function ContactIcons() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("anka.golub17@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleEmailClick}
        className="transition-opacity hover:opacity-80"
        aria-label="Copy email address"
      >
        <img
          src={copied ? "/Icon. Success.png" : "/Mail.png"}
          width={44}
          height={44}
          alt="Email"
          className="h-11 w-11 object-contain"
        />
      </button>
      <a
        href="https://t.me/golub54"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <img
          src="/Telegram.png"
          width={44}
          height={44}
          alt="Telegram"
          className="h-11 w-11 object-contain"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/anna-golubeva-9063b9237/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <img
          src="/In.png"
          width={44}
          height={44}
          alt="LinkedIn"
          className="h-11 w-11 object-contain"
        />
      </a>
      <a
        href="https://www.behance.net/Golub54"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-80"
      >
        <img
          src="/Behance.png"
          width={44}
          height={44}
          alt="Behance"
          className="h-11 w-11 object-contain"
        />
      </a>
    </>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 max-lg:!m-0 max-lg:bg-background max-lg:!p-0 max-lg:!py-0 bg-background lg:w-full lg:self-stretch"
    >
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex max-lg:!m-0 max-lg:!mt-12 flex-col items-start gap-8 self-stretch px-2">
          <h2 className="w-full text-left text-[47px] font-medium leading-normal text-white">
            About me
          </h2>
          {aboutText.split("\n\n").map((para, i) => (
            <p key={i} className="text-[18px] font-normal leading-6 text-white/60">
              {para}
            </p>
          ))}
        </div>

        <section
          id="contact"
          className="scroll-mt-24 flex max-lg:!mb-0 max-lg:!mt-12 max-lg:!pb-12 items-start justify-start gap-4 self-stretch pl-2 pr-2"
        >
          <ContactIcons />
        </section>
      </div>

      {/* Desktop: two-column layout */}
      <div className="hidden lg:flex lg:w-full lg:items-start lg:gap-6">
        {/* Left: heading */}
        <div className="w-[636px] shrink-0">
          <h2 className="text-[64px] font-medium leading-normal text-white">
            About me
          </h2>
        </div>

        {/* Right: text + icons */}
        <div className="flex w-[636px] shrink-0 flex-col">
          <div className="flex flex-col gap-6">
            {aboutText.split("\n\n").map((para, i) => (
              <p key={i} className="text-[24px] font-normal leading-normal text-white/60">
                {para}
              </p>
            ))}
          </div>

          <section
            id="contact"
            className="mt-[72px] flex flex-row gap-4"
          >
            <ContactIcons />
          </section>
        </div>
      </div>

      <p className="sr-only">{site.name}</p>
    </section>
  );
}
