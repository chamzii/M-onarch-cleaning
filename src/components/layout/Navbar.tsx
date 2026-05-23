"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.whyUs"), href: "#why-us" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
              <span className="font-display font-bold text-white text-sm">M</span>
            </div>
            <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>
              Monarch <span className="text-teal">Cleaning</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-teal ${scrolled ? "text-navy/70" : "text-white/80"}`}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "sv" : "en")}
              className={`font-body text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-lg border transition-all duration-200 ${scrolled ? "border-border text-gray hover:border-teal hover:text-teal" : "border-white/30 text-white/70 hover:border-white hover:text-white"}`}>
              {lang === "en" ? "SV" : "EN"}
            </button>
            <Link href="/quote"
              className="font-body text-sm font-semibold px-5 py-2.5 rounded-xl bg-teal text-white hover:bg-teal-dark transition-colors duration-200 shadow-sm">
              {t("nav.quote")}
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className={`md:hidden p-1 ${scrolled ? "text-navy" : "text-white"}`} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12 bg-white"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display font-bold text-3xl text-navy py-4 border-b border-border hover:text-teal transition-colors">
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex items-center gap-3">
              <button onClick={() => setLang(lang === "en" ? "sv" : "en")}
                className="font-body text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg border border-border text-gray hover:border-teal hover:text-teal transition-all">
                {lang === "en" ? "SV" : "EN"}
              </button>
              <Link href="/quote" onClick={() => setOpen(false)}
                className="flex-1 flex items-center justify-center bg-teal text-white font-body font-semibold py-3.5 rounded-xl text-sm">
                {t("nav.quote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
