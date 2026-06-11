import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { getLenis, setLenis } from "../lib/scroll";

export default function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    setLenis(lenis);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
