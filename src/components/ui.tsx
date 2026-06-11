import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Eyebrow, WordReveal } from "./anim";
import { getIntroDelay } from "../lib/boot";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const VARIANTS = {
  primary: "bg-brand-dark text-brand-light hover:bg-brand-taupe",
  outline: "border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-light",
  light: "bg-brand-light text-brand-dark hover:bg-brand-nude",
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-300 ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

/** Skupna glava podstrani z vstopno animacijo. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const [delay] = useState(getIntroDelay);
  return (
    <section className="relative overflow-hidden bg-brand-light pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="texture-paper absolute inset-0 opacity-[0.12]" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.7, ease: EASE }}
        >
          <Eyebrow center>{eyebrow}</Eyebrow>
        </motion.div>
        <h1 className="mt-6 text-5xl md:text-6xl">
          <WordReveal text={title} mode="mount" delay={delay + 0.15} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.45, duration: 0.8, ease: EASE }}
          className="mt-5 text-lg text-brand-dark/70"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
