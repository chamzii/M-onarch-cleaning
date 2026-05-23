"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.whyUs"), href: "#why-us" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center">
              <span className="font-display text-gold text-lg font-semibold leading-none">M</span>
            </div>
            <div>
              <span className="font-display font-semibold tracking-[0.15em] text-base block leading-none text-white">
                MONARCH
              </span>
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/50">
                CLEANING
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="font-body text-sm tracking-wide text-white/70 hover:text-white gold-underline transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "en" ? "sv" : "en")}
              className="font-body text-xs tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-all duration-200">
              {lang === "en" ? "SV" : "EN"}
            </button>
            <Link href="/quote"
              className="font-body text-sm font-medium px-5 py-2.5 rounded-full bg-gold text-white hover:bg-gold-light transition-all duration-200 shadow-sm hover:shadow-md">
              {t("nav.quote")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-1 text-white" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12 bg-charcoal"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-3xl text-white py-3 border-b border-white/10 hover:text-gold transition-colors">
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex items-center gap-3">
              <button onClick={() => setLang(lang === "en" ? "sv" : "en")}
                className="font-body text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-all">
                {lang === "en" ? "SV" : "EN"}
              </button>
              <Link href="/quote" onClick={() => setOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 bg-gold text-white font-body py-3.5 rounded-full text-sm font-medium">
                <Phone size={16} />
                {t("nav.quote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
