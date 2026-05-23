"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
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
    { label: t("nav.process"), href: "#process" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        {/* Top bar */}
        <div className="bg-green-600 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6">
            <a href="tel:+46XXXXXXXXX" className="flex items-center gap-2 text-white text-sm font-medium">
              <Phone size={14} />
              +46 XXX XXX XXX
            </a>
            <Link href="/quote" className="text-white text-sm font-semibold bg-white/20 hover:bg-white/30 px-4 py-1 rounded transition-colors">
              {t("nav.quote")}
            </Link>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
              <span className="font-display font-bold text-white">M</span>
            </div>
            <div>
              <span className="font-display font-bold text-navy text-lg leading-none block">Monarch</span>
              <span className="font-body text-green-600 text-xs font-semibold tracking-widest uppercase">Cleaning</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="font-body text-sm font-semibold text-navy/70 hover:text-green-600 transition-colors uppercase tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "sv" : "en")}
              className="font-body text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded border border-border text-gray hover:border-green-600 hover:text-green-600 transition-all">
              {lang === "en" ? "SV" : "EN"}
            </button>
            <Link href="/quote" className="btn-green text-sm px-6 py-2.5">
              Free Estimate
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-1 text-navy" aria-label="Toggle menu">
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
                  className="font-display font-bold text-2xl text-navy py-4 border-b border-border hover:text-green-600 transition-colors">
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8">
              <Link href="/quote" onClick={() => setOpen(false)} className="btn-green w-full text-center">
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
