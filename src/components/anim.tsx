import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { animate, motion, useInView, useMotionValue, useSpring } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Ovoj strani za prehode med potmi (AnimatePresence). */
export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Fade-up razkritje ob scrollu. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Naslov, ki se razkrije besedo za besedo (maskiran dvig). */
export function WordReveal({
  text,
  delay = 0,
  mode = "view",
  className = "",
}: {
  text: string;
  delay?: number;
  mode?: "view" | "mount";
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      {...(mode === "mount"
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, margin: "-60px" } })}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "115%" },
              visible: {
                y: "0%",
                transition: { duration: 0.8, delay: delay + i * 0.08, ease: EASE },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.span>
  );
}

/** Slika, ki se razkrije s clip-path zaveso in rahlim zoom-out efektom. */
export function ImageReveal({
  src,
  alt = "",
  delay = 0,
  hover = false,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt?: string;
  delay?: number;
  hover?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        variants={{
          hidden: { scale: 1.18 },
          visible: { scale: 1, transition: { duration: 1.4, delay, ease: EASE } },
        }}
        {...(hover ? { whileHover: { scale: 1.06 } } : {})}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {/* Prekrivna zavesa, ki zdrsne navzdol in razkrije sliko */}
      <motion.div
        variants={{
          hidden: { y: "0%" },
          visible: { y: "101%", transition: { duration: 1.1, delay, ease: EASE } },
        }}
        className="absolute inset-0 bg-brand-nude-3"
        aria-hidden
      />
    </motion.div>
  );
}

/** Števec, ki se odšteje navzgor, ko pride v vidno polje. */
export function Counter({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (numRef.current) numRef.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={wrapRef} className={className}>
      <span ref={numRef}>0</span>
      {suffix}
    </span>
  );
}

/** Magnetni ovoj — element nežno sledi kazalcu miške. */
export function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.3 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** "Eyebrow" oznaka z animirano črto. */
export function Eyebrow({
  children,
  light = false,
  center = false,
}: {
  children: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  const line = `h-px w-10 ${light ? "bg-brand-nude" : "bg-brand-taupe"}`;
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: EASE } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <motion.span variants={lineVariants} className={`${line} origin-left`} />
      <span
        className={`text-sm font-semibold tracking-[0.2em] uppercase ${light ? "text-brand-nude" : "text-brand-taupe"}`}
      >
        {children}
      </span>
      {center && <motion.span variants={lineVariants} className={`${line} origin-right`} />}
    </motion.div>
  );
}
