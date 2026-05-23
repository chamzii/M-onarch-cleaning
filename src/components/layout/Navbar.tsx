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
    { label: "Our Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Why Hire Us?", href: "#why-us" },
    { label: "How It Works", href: "#process" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded bg-green-600 flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg">M</span>
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-navy text-xl block">Monarch Cleaning</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="font-body text-sm font-semibold text-navy/70 hover:text-green-600 transition-colors whitespace-nowrap">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button onClick={() => setLang(lang === "en" ? "sv" : "en")}
              className="font-body text-xs font-bold tracking-widest uppercase text-gray hover:text-green-600 transition-colors border border-gray-200 px-3 py-1.5 rounded">
              {lang === "en" ? "SV" : "EN"}
            </button>
            <a href="tel:+46XXXXXXXXX" className="flex items-center gap-2 font-body font-semibold text-navy text-sm">
              <Phone size={15} className="text-green-600" />
              +46 XXX XXX XXX
            </a>
            <Link href="/quote" className="btn-green text-sm px-5 py-2.5 rounded">
              Free Estimate
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-navy p-1">
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
            className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-body font-semibold text-xl text-navy py-4 border-b border-gray-100 hover:text-green-600 transition-colors">
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+46XXXXXXXXX" className="btn-outline border-green-600 text-green-600 text-center">
                <Phone size={16} className="mr-2" /> Call Us
              </a>
              <Link href="/quote" onClick={() => setOpen(false)} className="btn-green text-center">
                Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
