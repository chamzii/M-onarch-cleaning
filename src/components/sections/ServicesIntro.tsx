"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-navy" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)" }}>
            Cleaning Services for Offices &amp; Businesses
          </h2>
          <p className="mt-2 text-green-600 font-semibold text-lg">
            Keeping Your Workplace Cleaner With Our Professional Cleaning System
          </p>
          <p className="mt-5 text-gray leading-relaxed text-lg">
            At Monarch Cleaning, we use a thorough, consistent cleaning approach that ensures every area of your office gets the attention it deserves — not just the obvious spots. Our team works around your schedule so your business is never disrupted.
          </p>
          <Link href="/quote" className="inline-block mt-8 text-green-600 font-semibold hover:text-green-700 transition-colors border-b-2 border-green-600 pb-0.5">
            Learn About Our Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
