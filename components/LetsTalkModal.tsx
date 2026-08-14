"use client";

import { useEffect, useState } from "react";

type LetsTalkModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LetsTalkModal({ isOpen, onClose }: LetsTalkModalProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow || "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleEmailClick = () => {
    navigator.clipboard.writeText("anka.golub17@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1500);
    });
  };

  const divider = (
    <div className="h-px self-stretch bg-white opacity-10" />
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 lg:flex lg:items-center lg:justify-center"
      onClick={onClose}
      role="presentation"
    >
      {/* Mobile: bottom sheet */}
      <div
        className="absolute inset-x-2 bottom-2 flex flex-col rounded-2xl bg-[#212121] p-5 lg:hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lets-talk-modal-title-mobile"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 min-h-8 min-w-8 items-center justify-center rounded-full bg-[#494949] p-0 transition-opacity hover:opacity-80"
        >
          <img src="/icons/Close.svg" width={24} height={24} alt="" />
        </button>

        <h2
          id="lets-talk-modal-title-mobile"
          className="mb-4 text-base font-bold leading-6 text-white"
        >
          Let&apos;s talk
        </h2>

        <div className="flex flex-col gap-3">
          {/* Email */}
          <button
            type="button"
            onClick={handleEmailClick}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img
              src={emailCopied ? "/Success.svg" : "/icons/sms.svg"}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 shrink-0 object-contain"
            />
            <span className="flex flex-1 flex-col items-start gap-1">
              <span className="text-[14px] font-normal leading-[18px] text-[#525252]">email</span>
              <span className="text-[14px] font-normal leading-6 text-white">anka.golub17@gmail.com</span>
            </span>
          </button>

          {divider}

          {/* Telegram */}
          <a
            href="https://t.me/golub54"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img src="/icons/sms-1.svg" alt="" width={20} height={20} className="h-5 w-5 shrink-0 object-contain" />
            <span className="flex flex-1 flex-col items-start gap-1">
              <span className="text-[14px] font-normal leading-[18px] text-[#525252]">telegram</span>
              <span className="text-[14px] font-normal leading-6 text-white">golub54</span>
            </span>
          </a>

          {divider}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anna-golubeva-9063b9237/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img src="/icons/sms-2.svg" alt="" width={20} height={20} className="h-5 w-5 shrink-0 object-contain" />
            <span className="flex flex-1 flex-col items-start gap-1">
              <span className="text-[14px] font-normal leading-[18px] text-[#525252]">linkedin</span>
              <span className="text-[14px] font-normal leading-6 text-white">Anna Golubeva</span>
            </span>
          </a>
        </div>
      </div>

      {/* Desktop: centered dialog */}
      <div
        className="relative hidden lg:flex lg:w-[500px] lg:flex-col lg:rounded-2xl lg:bg-[#212121]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lets-talk-modal-title"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-10 top-10 flex h-8 w-8 min-h-8 min-w-8 items-center justify-center rounded-full bg-[#494949] p-0 transition-opacity hover:opacity-80"
        >
          <img src="/icons/Close.svg" width={24} height={24} alt="" />
        </button>

        <div className="flex flex-col items-start p-10">
          <h2 id="lets-talk-modal-title" className="text-[22px] font-bold leading-normal text-white">
            Let&apos;s talk
          </h2>

          <div className="mt-4 flex flex-col gap-6 self-stretch">
            {/* Email */}
            <button
              type="button"
              onClick={handleEmailClick}
              className="flex items-center gap-4 self-stretch transition-opacity hover:opacity-80"
            >
              <img
                src={emailCopied ? "/DSuccess.svg" : "/maildesk.svg"}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0 object-contain"
              />
              <span className="flex flex-col items-start text-left">
                <span className="text-[16px] font-normal leading-6 text-[#525252]">email</span>
                <span className="text-[18px] font-normal leading-6 text-white">anka.golub17@gmail.com</span>
              </span>
            </button>

            {/* Telegram */}
            <a
              href="https://t.me/golub54"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 self-stretch transition-opacity hover:opacity-80"
            >
              <img src="/tgdesk.svg" alt="" width={24} height={24} className="h-6 w-6 shrink-0 object-contain" />
              <span className="flex flex-col items-start">
                <span className="text-[16px] font-normal leading-6 text-[#525252]">telegram</span>
                <span className="text-[18px] font-normal leading-6 text-white">golub54</span>
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anna-golubeva-9063b9237/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 self-stretch transition-opacity hover:opacity-80"
            >
              <img src="/indesk.svg" alt="" width={24} height={24} className="h-6 w-6 shrink-0 object-contain" />
              <span className="flex flex-col items-start">
                <span className="text-[16px] font-normal leading-6 text-[#525252]">linkedin</span>
                <span className="text-[18px] font-normal leading-6 text-white">Anna Golubeva</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
