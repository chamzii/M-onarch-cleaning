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
        <div className={`inline-flex items-center gap-2 mb-6 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" />
          <p className={`font-body text-sm font-semibold tracking-[0.25em] uppercase ${light ? "text-gold-light" : "text-gold"}`}>
            {eyebrow}
          </p>
          <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <h2
        className={`font-display font-bold leading-[1.1] tracking-tight ${light ? "text-white" : "text-charcoal"}`}
        style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
      >
        {title}{" "}
        {titleHighlight && (
          <span style={{ color: "#B8973A" }}>{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-6 font-body text-lg md:text-xl max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-white/65" : "text-slate"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
