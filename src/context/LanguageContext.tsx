"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "@/data/translations";

type Lang = "en" | "sv";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("sv");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function t(key: string): any {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val: any = translations[lang];
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
