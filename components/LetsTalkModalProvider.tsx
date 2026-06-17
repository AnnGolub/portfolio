"use client";

import LetsTalkModal from "@/components/LetsTalkModal";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LetsTalkModalContextValue = {
  openModal: () => void;
};

const LetsTalkModalContext = createContext<LetsTalkModalContextValue | null>(
  null,
);

export function LetsTalkModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ openModal }), [openModal]);

  return (
    <LetsTalkModalContext.Provider value={value}>
      {children}
      <LetsTalkModal isOpen={isOpen} onClose={closeModal} />
    </LetsTalkModalContext.Provider>
  );
}

export function useLetsTalkModal() {
  const context = useContext(LetsTalkModalContext);
  if (!context) {
    throw new Error("useLetsTalkModal must be used within LetsTalkModalProvider");
  }
  return context;
}
