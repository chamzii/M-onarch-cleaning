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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <p className={`font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${light ? "text-teal-light/80" : "text-teal"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-bold leading-[1.1] tracking-tight ${light ? "text-white" : "text-navy"}`}
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className={light ? "text-teal" : "text-teal"}>{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-5 font-body text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
