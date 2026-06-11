import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { isFirstVisit, markIntroDone } from "../lib/boot";

const TITLE = "ADNA COSMETICS";

export default function Preloader() {
  const [show, setShow] = useState(isFirstVisit);

  useEffect(() => {
    if (!show) return;
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      markIntroDone();
      setShow(false);
      document.documentElement.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Druga zavesa (nude), ki odide z rahlim zamikom */}
          <motion.div
            key="curtain-nude"
            className="fixed inset-0 z-[99] bg-brand-nude"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.12 }}
          />
          {/* Glavna temna zavesa z napisom */}
          <motion.div
            key="curtain-dark"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden px-6">
              {TITLE.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-serif text-3xl tracking-[0.25em] text-brand-light md:text-5xl"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 h-px w-40 origin-left bg-brand-taupe md:w-56"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-5 text-[11px] tracking-[0.35em] uppercase text-brand-light/60"
            >
              Kozmetični salon · Vrhnika
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
