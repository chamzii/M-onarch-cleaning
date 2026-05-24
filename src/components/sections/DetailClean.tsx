"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function DetailClean() {
  const { lang } = useLang();

  const sv = {
    eyebrow: "Vår städmetod",
    heading: "Kontorsstädning som går längre än ytan",
    body: "De flesta städtjänster tar hand om det uppenbara. Vi tar hand om allt — varje yta, varje hörn, varje detalj. Vår systematiska metod säkerställer att inget missas.",
    bullets: [
      "Skrivbord, stolar och arbetsytor",
      "Kök, mikrovågsugn och kaffemaskiner",
      "Toaletter och handtvättplatser",
      "Mötesrum och gemensamma utrymmen",
      "Golv — dammsugning, moppning och polering",
      "Soptömning och återvinning",
    ],
    cta: "Få en gratis offert",
  };

  const en = {
    eyebrow: "Our Cleaning Method",
    heading: "Office Cleaning That Goes Beyond the Surface",
    body: "Most cleaning services handle the obvious. We handle everything — every surface, every corner, every detail. Our systematic approach ensures nothing is missed.",
    bullets: [
      "Desks, chairs, and work surfaces",
      "Kitchens, microwaves, and coffee machines",
      "Bathrooms and handwashing stations",
      "Meeting rooms and common areas",
      "Floors — vacuuming, mopping, and polishing",
      "Trash removal and recycling",
    ],
    cta: "Get A Free Estimate",
  };

  const c = lang === "sv" ? sv : en;

  return (
    <section id="about" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-lg"
            style={{ height: "440px" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
              alt="Clean office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
              {c.eyebrow}
            </p>
            <h2
              className="font-display font-bold text-navy leading-tight mb-5"
              style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)" }}
            >
              {c.heading}
            </h2>
            <p className="text-gray leading-relaxed mb-7">{c.body}</p>

            <ul className="space-y-3 mb-8">
              {c.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#0369A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-navy text-sm font-body">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/quote" className="btn-green px-8 py-3 rounded inline-block">
              {c.cta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
