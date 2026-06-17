"use client";

import { useEffect } from "react";

type LetsTalkModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const contactRows = [
  {
    icon: "/icons/sms.svg",
    label: "email",
    value: "anka.golub17@gmail.com",
    href: "mailto:anka.golub17@gmail.com",
    external: false,
  },
  {
    icon: "/icons/sms-1.svg",
    label: "telegram",
    value: "golub54",
    href: "https://t.me/golub54",
    external: true,
  },
  {
    icon: "/icons/sms-2.svg",
    label: "linkedin",
    value: "Anna Golubeva",
    href: "https://www.linkedin.com/in/anna-golubeva-9063b9237/",
    external: true,
  },
];

export default function LetsTalkModal({ isOpen, onClose }: LetsTalkModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow || "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative flex w-[328px] flex-col rounded-2xl bg-[#212121]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lets-talk-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3a3a3a] transition-opacity hover:opacity-80"
        >
          <img src="/icons/Close.svg" width={24} height={24} alt="" />
        </button>

        <div className="flex items-center self-stretch px-4 pb-3 pt-4">
          <h2
            id="lets-talk-modal-title"
            className="text-base font-bold leading-6 text-white"
          >
            Let&apos;s talk
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 self-stretch px-4 pb-4">
          {contactRows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              {...(row.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-2 self-stretch transition-opacity hover:opacity-80"
            >
              <img
                src={row.icon}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 object-contain"
              />
              <span className="flex flex-col gap-1">
                <span className="text-sm font-normal leading-[18px] text-[#525252]">
                  {row.label}
                </span>
                <span className="text-base font-normal leading-6 text-white">
                  {row.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
