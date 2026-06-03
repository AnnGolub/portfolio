"use client";

import { useEffect } from "react";

type HashRedirectProps = {
  hash: string;
};

export function HashRedirect({ hash }: HashRedirectProps) {
  useEffect(() => {
    window.location.replace(`/#${hash}`);
  }, [hash]);

  return null;
}
