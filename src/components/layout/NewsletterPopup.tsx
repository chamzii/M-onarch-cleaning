"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const dismiss = () => {
    localStorage.setItem("noire_popup_dismissed", "1");
    setVisible(false);
  };

  useEffect(() => {
    if (localStorage.getItem("noire_popup_dismissed")) return;
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) { setDone(true); setTimeout(() => dismiss(), 2000); }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={dismiss}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 bg-[#111111] border border-[#2D2D2D] p-8 text-center"
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-[#6B7280] hover:text-white transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <p className="font-body text-[#FF1F8E] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Exclusive Offer</p>
            <h3 className="font-display text-4xl font-bold text-white mb-1">15% Off</h3>
            <p className="font-display text-xl text-[#9CA3AF] italic mb-4">Your First Order</p>
            <p className="font-body text-[#6B7280] text-sm mb-6">
              Join the NOIRE inner circle for early access to new drops, exclusive deals, and style inspiration.
            </p>
            {done ? (
              <p className="text-[#FF1F8E] font-body font-semibold">Welcome to NOIRE. Check your inbox.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="btn-primary">Claim My 15% Off</button>
              </form>
            )}
            <button
              onClick={dismiss}
              className="mt-4 text-[#6B7280] text-xs font-body hover:text-white transition-colors cursor-pointer"
            >
              No thanks, I'll pay full price
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
