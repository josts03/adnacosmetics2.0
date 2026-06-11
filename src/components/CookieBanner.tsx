import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie_consent")) return;
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[90] bg-brand-dark text-brand-light"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-4 sm:flex-row sm:items-center lg:px-8">
            <p className="flex-1 text-sm leading-relaxed text-brand-light/80">
              Za zagotavljanje najboljše uporabniške izkušnje ta stran uporablja osnovne piškotke. Vse
              informacije, ki jih vnesete v obrazce, jih uporabim izključno za potrditev termina.{" "}
              <Link
                to="/politika-zasebnosti"
                className="underline underline-offset-2 transition-colors hover:text-brand-nude"
              >
                Preberite več v Politiki zasebnosti.
              </Link>
            </p>
            <button
              onClick={accept}
              className="bg-brand-nude px-6 py-3 text-xs tracking-widest uppercase text-brand-dark transition-colors hover:bg-brand-rose"
            >
              Razumem
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
