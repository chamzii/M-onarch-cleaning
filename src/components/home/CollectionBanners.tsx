"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Clubwear",
    sub: "Own the night",
    href: "/collections/clubwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-[500px] lg:h-full",
  },
  {
    title: "Dresses",
    sub: "Every occasion",
    href: "/collections/dresses",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    span: "lg:col-span-1",
    height: "h-[300px]",
  },
  {
    title: "Sets & Co-Ords",
    sub: "Effortlessly matched",
    href: "/collections/sets",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    span: "lg:col-span-1",
    height: "h-[300px]",
  },
];

export default function CollectionBanners() {
  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-[0.3em] uppercase mb-3">Shop By Category</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Collections
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:h-[600px]">
          {collections.map((col, i) => (
            <motion.div
              key={col.href}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${col.span} relative overflow-hidden group cursor-pointer ${col.height}`}
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-body text-[#FF1F8E] text-xs font-bold tracking-widest uppercase mb-1">{col.sub}</p>
                <h3 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">{col.title}</h3>
                <Link
                  href={col.href}
                  className="inline-flex items-center gap-2 font-body text-xs font-bold tracking-widest uppercase text-white border-b border-white/40 pb-0.5 hover:border-[#FF1F8E] hover:text-[#FF1F8E] transition-colors"
                >
                  Shop {col.title}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
