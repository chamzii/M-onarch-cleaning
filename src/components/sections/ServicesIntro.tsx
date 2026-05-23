"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";

export default function ServicesIntro() {
  const { lang } = useLang();

  const sv = {
    heading: "Städtjänster för kontor och företag",
    sub: "Vi håller din arbetsplats renare med vårt professionella städsystem",
    body: "Hos Monarch Cleaning använder vi en grundlig och konsekvent städmetod som säkerställer att varje del av ditt kontor får den uppmärksamhet den förtjänar — inte bara de uppenbara ställena. Vårt team arbetar runt ditt schema så att din verksamhet aldrig störs.",
    link: "Läs om våra tjänster →",
  };
  const en = {
    heading: "Cleaning Services for Offices & Businesses",
    sub: "Keeping Your Workplace Cleaner With Our Professional Cleaning System",
    body: "At Monarch Cleaning, we use a thorough, consistent cleaning approach that ensures every area of your office gets the attention it deserves — not just the obvious spots. Our team works around your schedule so your business is never disrupted.",
    link: "Learn About Our Services →",
  };

  const c = lang === "sv" ? sv : en;

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
            {c.heading}
          </h2>
          <p className="mt-2 text-green-600 font-semibold text-lg">{c.sub}</p>
          <p className="mt-5 text-gray leading-relaxed text-lg">{c.body}</p>
          <Link
            href="/quote"
            className="inline-block mt-8 text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            {c.link}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
