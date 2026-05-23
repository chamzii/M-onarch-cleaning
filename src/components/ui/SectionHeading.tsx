"use client";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, titleHighlight, subtitle, centered = true, light = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <p className={`font-body text-xs tracking-[0.35em] uppercase mb-4 ${light ? "text-gold-light" : "text-gold"}`}>
          — {eyebrow} —
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight ${light ? "text-white" : "text-charcoal"}`}>
        {title}{" "}
        {titleHighlight && (
          <em className="not-italic" style={{ color: "#B8973A" }}>{titleHighlight}</em>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-5 font-body text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-white/70" : "text-slate"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
