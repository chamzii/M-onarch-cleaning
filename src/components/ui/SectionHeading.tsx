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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className="font-body text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">{eyebrow}</p>
      )}
      <h2
        className={`font-display font-bold leading-tight ${light ? "text-white" : "text-navy"}`}
        style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
      >
        {title}{" "}
        {titleHighlight && <span className="text-green-600">{titleHighlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
