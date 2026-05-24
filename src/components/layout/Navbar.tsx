"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: lang === "sv" ? "Våra tjänster" : "Our Services", href: "#services" },
    { label: lang === "sv" ? "Om oss" : "About Us", href: "#about" },
    { label: lang === "sv" ? "Varför anlita oss?" : "Why Hire Us?", href: "#why-us" },
    { label: lang === "sv" ? "Hur det fungerar" : "How It Works", href: "#process" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${scrolled ? "shadow-lg" : ""}`}
        style={{ backgroundColor: "#0F172A" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded bg-green-600 flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg">M</span>
            </div>
            <span className="font-display font-bold text-white text-xl">Monarch Cleaning</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => setLang(lang === "en" ? "sv" : "en")}
              className="font-body text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors border border-white/20 px-3 py-1.5 rounded"
            >
              {lang === "en" ? "SV" : "EN"}
            </button>
            <a href="tel:+46XXXXXXXXX" className="flex items-center gap-2 font-body font-semibold text-white/80 text-sm hover:text-white transition-colors">
              <Phone size={15} className="text-green-400" />
              +46 XXX XXX XXX
            </a>
            <Link href="/quote" className="btn-green text-sm px-5 py-2.5 rounded">
              {lang === "sv" ? "Gratis offert" : "Free Estimate"}
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-1">
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
            className="fixed inset-0 z-40 pt-20 px-6 flex flex-col"
            style={{ backgroundColor: "#0F172A" }}
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-body font-semibold text-xl text-white py-4 border-b border-white/10 hover:text-green-400 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+46XXXXXXXXX" className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold py-3 rounded text-center">
                <Phone size={16} /> {lang === "sv" ? "Ring oss" : "Call Us"}
              </a>
              <Link href="/quote" onClick={() => setOpen(false)} className="btn-green text-center py-3 rounded">
                {lang === "sv" ? "Gratis offert" : "Free Estimate"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
