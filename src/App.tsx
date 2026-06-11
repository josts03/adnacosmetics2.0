import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "motion/react";
import Layout from "./components/Layout";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricelist from "./pages/Pricelist";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/o-meni" element={<About />} />
        <Route path="/storitve" element={<Services />} />
        <Route path="/cenik" element={<Pricelist />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/politika-zasebnosti" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <SmoothScroll />
        <Preloader />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </MotionConfig>
    </BrowserRouter>
  );
}
