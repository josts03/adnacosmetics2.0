import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { Clock, Instagram, Mail, MapPin, Menu, X } from "lucide-react";
import Logo from "./Logo";
import CookieBanner from "./CookieBanner";
import { getLenis } from "../lib/scroll";
import { getIntroDelay } from "../lib/boot";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const IG_URL = "https://www.instagram.com/adnaa_cosmetics/";
const EMAIL = "adnaacosmetics@gmail.com";

const NAV_LINKS = [
  { to: "/", label: "Domov" },
  { to: "/o-meni", label: "O meni" },
  { to: "/storitve", label: "Storitve" },
  { to: "/cenik", label: "Cenik" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-brand-dark text-brand-light">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <span className="flex items-center gap-2 text-xs tracking-wide">
          <MapPin className="h-3.5 w-3.5 text-brand-nude" /> Vrhnika
        </span>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className="hidden items-center gap-2 text-xs tracking-wide transition-colors hover:text-brand-nude sm:flex"
          >
            <Mail className="h-3.5 w-3.5 text-brand-nude" /> {EMAIL}
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-brand-nude"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [introDelay] = useState(getIntroDelay);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-brand-light/95 shadow-sm backdrop-blur-md" : "bg-brand-light"
        }`}
      >
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: introDelay, duration: 0.7, ease: EASE }}
          className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        >
          <Link to="/" aria-label="Domov" className="py-2">
            <Logo
              className={`w-auto transition-all duration-500 ${scrolled ? "h-14 md:h-16" : "h-[68px] md:h-24"}`}
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `py-1 text-sm tracking-[0.15em] uppercase transition-colors hover:text-brand-taupe ${
                    isActive
                      ? "border-b border-brand-taupe font-semibold text-brand-taupe"
                      : "text-brand-dark"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              className="bg-brand-dark px-6 py-3 text-sm tracking-widest uppercase text-brand-light transition-colors hover:bg-brand-taupe"
            >
              Naroči se
            </Link>
          </div>

          <button onClick={() => setOpen(true)} aria-label="Odpri meni" className="p-2 md:hidden">
            <Menu className="h-7 w-7" />
          </button>
        </motion.div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

const menuList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const menuItem: Variants = {
  hidden: { y: 44, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[80] flex flex-col bg-brand-dark text-brand-light md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-3">
            <Logo white className="h-14 w-auto" />
            <button onClick={onClose} aria-label="Zapri meni" className="p-2">
              <X className="h-7 w-7" />
            </button>
          </div>

          <motion.nav
            variants={menuList}
            initial="hidden"
            animate="show"
            className="flex flex-1 flex-col items-start justify-center gap-1 px-8"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.to} variants={menuItem}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-2 font-serif text-4xl transition-colors ${
                      isActive ? "italic text-brand-nude" : "text-brand-light hover:text-brand-nude"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div variants={menuItem} className="mt-7">
              <Link
                to="/kontakt"
                onClick={onClose}
                className="inline-block bg-brand-light px-8 py-4 text-sm tracking-widest uppercase text-brand-dark"
              >
                Naroči se
              </Link>
            </motion.div>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center justify-between gap-4 border-t border-brand-light/10 px-6 py-5 text-sm"
          >
            <a href={`mailto:${EMAIL}`} className="break-all text-brand-light/80">
              {EMAIL}
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="shrink-0 rounded-full border border-brand-light/40 p-2.5"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo white className="h-20 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-brand-light/70">
            Adna Cosmetics, kjer lepota sreča strokovnost in poudarja tvojo unikatnost.
          </p>
        </div>

        <div>
          <h3 className="text-lg">Kontakt</h3>
          <ul className="mt-5 space-y-3 text-sm text-brand-light/75">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand-nude" /> Vrhnika
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-nude" />
              <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-brand-nude">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Delovni čas</h3>
          <ul className="mt-5 space-y-3 text-sm text-brand-light/75">
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-brand-nude" /> Pon - Pet: Po dogovoru
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-brand-nude" /> Sob, Ned, prazniki: Zaprto
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Sledi mi</h3>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-light/40 transition-all duration-300 hover:border-brand-nude hover:bg-brand-nude hover:text-brand-dark"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-brand-light/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-brand-light/60 sm:flex-row lg:px-8">
          <p>© {year} Adna Cosmetics. Vse pravice pridržane.</p>
          <Link to="/politika-zasebnosti" className="transition-colors hover:text-brand-nude">
            Politika zasebnosti
          </Link>
        </div>
      </div>
    </footer>
  );
}
