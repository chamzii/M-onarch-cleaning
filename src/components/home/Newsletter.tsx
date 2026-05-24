"use client";
import { useState } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-[#0A0A0A]">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=60"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
      <div className="container relative z-10 text-center max-w-2xl mx-auto">
        <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-4">Join The Inner Circle</p>
        <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Be First. Always.
        </h2>
        <p className="font-body text-[#9CA3AF] mt-4 text-base leading-relaxed">
          Sign up for early access to new drops, exclusive discounts, and behind-the-scenes content. Unsubscribe anytime.
        </p>
        {submitted ? (
          <div className="mt-8 py-5 px-8 bg-[#FF1F8E]/10 border border-[#FF1F8E]/30 text-[#FF1F8E] font-body font-semibold tracking-wide">
            You're in. Welcome to NOIRE.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1"
            />
            <button type="submit" className="btn-primary shrink-0">
              Join Now
            </button>
          </form>
        )}
        <p className="text-[#6B7280] text-xs font-body mt-4">
          + Get 15% off your first order when you sign up.
        </p>
      </div>
    </section>
  );
}
