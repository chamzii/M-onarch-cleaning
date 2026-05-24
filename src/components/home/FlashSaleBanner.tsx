"use client";
import Link from "next/link";

const items = ["50% Off Sale Items · Shop Now", "New Drops Every Friday", "Free Shipping Over £60", "Use Code NOIRE20 · 20% Off", "Next Day Delivery Available", "Free Returns · 30 Days"];

export default function FlashSaleBanner() {
  const repeated = [...items, ...items];
  return (
    <div className="bg-[#FF1F8E] py-3 overflow-hidden">
      <div className="flex animate-marquee">
        {repeated.map((text, i) => (
          <span key={i} className="flex items-center gap-6 shrink-0 px-8">
            <span className="font-body font-bold text-white text-xs tracking-widest uppercase whitespace-nowrap">
              {text}
            </span>
            <span className="text-white/50 text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
