"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { label: "New In", href: "/collections/new" },
  { label: "Dresses", href: "/collections/dresses" },
  { label: "Sets", href: "/collections/sets" },
  { label: "Clubwear", href: "/collections/clubwear" },
  { label: "Corsets", href: "/collections/corsets" },
  { label: "Heels", href: "/collections/heels" },
  { label: "Sale", href: "/collections/sale", className: "text-[#FF1F8E]" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dispatch, itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#FF1F8E] text-white text-center py-2 text-xs font-body font-semibold tracking-widest uppercase z-50 relative">
        Free shipping on orders over £60 · Use code NOIRE20 for 20% off
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl" : "bg-[#0A0A0A]"}`}>
        <div className="container flex items-center justify-between h-16 gap-4">
          {/* Mobile menu btn */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white cursor-pointer"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold tracking-[0.25em] text-white shrink-0">
            NOIRE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-body text-xs font-semibold tracking-widest uppercase hover:text-[#FF1F8E] transition-colors ${l.className ?? "text-white/80"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/shop" aria-label="Search" className="text-white/70 hover:text-white transition-colors cursor-pointer hidden sm:block">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <Link href="/auth" aria-label="Account" className="text-white/70 hover:text-white transition-colors cursor-pointer hidden sm:block">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="relative text-white/70 hover:text-[#FF1F8E] transition-colors cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 17s-7-4.5-7-9a4 4 0 018 0 4 4 0 018 0c0 4.5-7 9-7 9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF1F8E] rounded-full text-[9px] font-bold flex items-center justify-center text-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => dispatch({ type: "OPEN" })}
              aria-label="Cart"
              className="relative text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 2h2l2.4 9.4a2 2 0 001.9 1.6h6.4a2 2 0 001.9-1.4L18 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="17" r="1" fill="currentColor" />
                <circle cx="15" cy="17" r="1" fill="currentColor" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF1F8E] rounded-full text-[9px] font-bold flex items-center justify-center text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[90px] left-0 right-0 bg-[#111111] z-30 border-b border-[#2D2D2D]"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm font-semibold tracking-widest uppercase py-3 border-b border-[#2D2D2D] last:border-0 ${l.className ?? "text-white/80 hover:text-white"}`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <Link href="/auth" onClick={() => setMobileOpen(false)} className="btn-outline flex-1 text-center py-3">Account</Link>
                <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="btn-outline flex-1 text-center py-3">Wishlist</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer />
    </>
  );
}
