import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, CircleCheck, Star } from "lucide-react";
import SEO from "../components/SEO";
import { Counter, Eyebrow, ImageReveal, Magnetic, PageWrapper, Reveal, WordReveal } from "../components/anim";
import { ButtonLink } from "../components/ui";
import { getIntroDelay } from "../lib/boot";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FEATURES = [
  "Strokovna in prijazna obravnava",
  "Individualen pristop k vsaki stranki",
  "Uporaba visokokakovostnih produktov",
  "Sproščujoč in čist ambient",
];

const STATS = [
  { to: 5, suffix: "+", label: "let izkušenj" },
  { to: 20, suffix: "+", label: "izobraževanj" },
  { to: 5, suffix: "", label: "storitev na enem mestu" },
];

const SERVICES = [
  {
    title: "Manikura",
    icon: "/manikura.png",
    desc: "Brezhibno urejene roke, ki naredijo vtis. Gel, trajni lak in podaljševanje za nohte, ki trajajo.",
    small: false,
  },
  {
    title: "Pedikura",
    icon: "/pedikura.png",
    desc: "Mehke, negovane noge vse leto. Profesionalna pedikura za popolno urejena stopala.",
    small: true,
  },
  {
    title: "Lash lift in laminacija obrvi",
    icon: "/lash-lift.png",
    desc: "Oblikovanje, laminacija in lash lift, ki traja tedne. Zbudi se urejena.",
    small: false,
  },
  {
    title: "Depilacija",
    icon: "/depilacija.png",
    desc: "Do 4 tedne gladke kože brez britja. Učinkovito voskanje za vse tipe kože.",
    small: false,
  },
  {
    title: "Masaža",
    icon: "/masaza.png",
    desc: "60-minutna masaža, ki odpravi napetost v hrbtu in ramenih.",
    small: false,
  },
];

type Testimonial = { text: string; name: string; place: string; stars: number };

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Samozavestna punca k ve kaj dela, tvoja sproscenost se pa cuti ze ko vstopis v salon in zato je sama storitev bolj prijetna😙.",
    name: "Nika P.",
    place: "Vrhnika",
    stars: 5,
  },
  {
    text: "Meni je ambient super☺️bi mogoče dodala še kakšno ambientno svetlobo😅 Drugače sem pa vedno zelo sproščena in vedno se prilagodiš mojim željam😊",
    name: "Brina I.",
    place: "Ljubljana",
    stars: 4,
  },
  {
    text: "Top izkusnja vsakic! Na nohte in depilacijo hodim samo se sem, punca je res prijazna, natancna in vsakic naredi res super vzdusje. Vedno se dobro pocutim, rezultat je pa tocno tak, kot si ga zelim. Priporocam vsem, ki iscejo kakovostne storitve in dober in prijeten odnos❤️",
    name: "Nina S.",
    place: "Ljubljana",
    stars: 5,
  },
  {
    text: "Super si, ful dobre nohtke delas in res se vidi da se izobrazujes redno! 💖💅🏼",
    name: "Ula L.",
    place: "Ljubljana",
    stars: 5,
  },
  { text: "Top of the top, ocena 5", name: "Ema V.", place: "Brezovica", stars: 5 },
  {
    text: "Vedno vesela, nasmejana in družabna, izpolnjuješ želje brez vprašanj. Čista 5 ❤️",
    name: "Lejla R.",
    place: "Idrija",
    stars: 5,
  },
  {
    text: "Tvoji nohti so mi zmeraj drzali, noben ni nikoli odstopil, tudi ce sem jih imela dlje casa gor se noben ni zlomil, toptoptop",
    name: "Zoja B.",
    place: "Logatec",
    stars: 5,
  },
  {
    text: "Vzdusje na terminu je zelo prijetno, za smeh je vedno poskrbljeno. Sami nohti so narejeni hitro, za ugodno ceno in zelo lepo, vedno po mojih zeljah. Sam salon pa je zelo lepo urejen s prijetno temperaturo in ozracjem.",
    name: "Eva D.",
    place: "Ljubljana",
    stars: 5,
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <SEO
        title="Adna Cosmetics – Kozmetični salon Vrhnika"
        description="Kozmetični salon Adna Cosmetics na Vrhniki. Manikura, pedikura, lash lift in laminacija obrvi, depilacija in masaža. Rezerviraj svoj termin."
        path="/"
      />
      <Hero />
      <MarqueeBand />
      <WhySection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </PageWrapper>
  );
}

function Hero() {
  const [base] = useState(getIntroDelay);
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rise = useTransform(scrollYProgress, [0, 0.7], [0, 60]);

  return (
    <section ref={ref} className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-nude">
      {/* Ozadje na desktopu — parallax slika */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 hidden md:block">
        <img
          src="/backgroundimage.jpg"
          alt=""
          fetchPriority="high"
          className="h-[115%] w-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-nude via-brand-nude/75 to-brand-nude/15" />
      </motion.div>

      {/* Mobilno — tekstura papirja in mehke lise */}
      <div className="absolute inset-0 md:hidden" aria-hidden>
        <div className="texture-paper absolute inset-0 opacity-[0.18]" />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-rose blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-brand-medium/50 blur-3xl" />
      </div>

      <motion.div style={{ opacity: fade, y: rise }} className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base, duration: 0.7, ease: EASE }}
          >
            <Eyebrow>Dobrodošla</Eyebrow>
          </motion.div>

          <h1 className="mt-6 text-5xl leading-[1.08] md:text-7xl">
            <WordReveal text="Bodi vse, kar si" mode="mount" delay={base + 0.15} />
            <br />
            <span className="italic text-brand-taupe">
              <WordReveal text="v Adna Cosmetics" mode="mount" delay={base + 0.45} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + 0.75, duration: 0.8, ease: EASE }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-brand-dark/80"
          >
            Manikura, pedikura, lash lift in laminacija obrvi, depilacija in masaža — vse na enem
            mestu. Rezerviraj svoj termin zdaj.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + 0.95, duration: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Magnetic>
              <ButtonLink to="/kontakt" arrow>
                Rezerviraj termin
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink to="/storitve" variant="outline">
                Moje storitve
              </ButtonLink>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Indikator za scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-brand-dark/60">Pomakni se</span>
        <div className="h-12 w-px overflow-hidden bg-brand-dark/15">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full bg-brand-taupe"
          />
        </div>
      </motion.div>
    </section>
  );
}

function MarqueeBand() {
  const items = ["Manikura", "Pedikura", "Lash lift in laminacija obrvi", "Depilacija", "Masaža"];
  const row = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden bg-brand-dark py-5">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={i} className="flex items-center gap-6 px-6 whitespace-nowrap">
                <span className="font-serif text-xl italic text-brand-light/90 md:text-2xl">{item}</span>
                <span className="text-brand-taupe">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function WhySection() {
  return (
    <section className="relative overflow-hidden bg-brand-nude py-24 md:py-32">
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-brand-rose/70 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <Reveal>
            <Eyebrow>Zakaj Adna Cosmetics?</Eyebrow>
          </Reveal>
          <h2 className="mt-5 text-4xl md:text-5xl">
            <WordReveal text="Kaj me odlikuje?" />
          </h2>

          <div className="mt-10 space-y-5">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <CircleCheck className="mt-0.5 h-6 w-6 shrink-0 text-brand-taupe" />
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-dark/10 pt-10">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.15 + i * 0.1}>
                <div>
                  <div className="font-serif text-4xl text-brand-dark md:text-5xl">
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs tracking-[0.15em] uppercase text-brand-dark/60">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12">
            <ButtonLink to="/o-meni" variant="outline">
              Spoznaj me
            </ButtonLink>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-16">
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 3 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full bg-brand-rose"
            aria-hidden
          />
          <ImageReveal
            src="/salon-osebje.webp"
            alt="Adna v salonu Adna Cosmetics"
            className="relative aspect-[3/4] rounded-t-full"
          />
          <Reveal
            delay={0.5}
            className="absolute -bottom-2 -left-2 max-w-[280px] md:-left-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="border border-brand-nude/60 bg-white p-6 shadow-xl"
            >
              <p className="font-medium">Adna, ustanoviteljica z 5+ let izkušenj.</p>
              <p className="mt-2 text-sm italic leading-relaxed text-brand-dark/70">
                »Moje poslanstvo je, da vsaka stranka zapusti salon bolj samozavestna, kot je prišla.«
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-brand-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow center>Storitve</Eyebrow>
          </Reveal>
          <h2 className="mt-5 text-4xl md:text-5xl">
            <WordReveal text="Kaj ponujam?" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-brand-dark/70">
              Skrbim za tvoj videz od nog do glave — vse na enem mestu.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.05 + (i % 3) * 0.08} className="h-full">
              <Link
                to="/storitve"
                className="group flex h-full flex-col border border-brand-nude/60 bg-white p-8 transition-colors duration-300 hover:border-brand-taupe"
              >
                <div className="flex h-16 items-center">
                  <img
                    src={service.icon}
                    alt=""
                    loading="lazy"
                    className={`${service.small ? "h-[54px] w-[54px]" : "h-16 w-16"} transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105`}
                  />
                </div>
                <h3 className="mt-6 text-2xl">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-brand-dark/70">{service.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-taupe">
                  Več
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-[#D4AF37] text-[#D4AF37]" : "fill-gray-300 text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full flex-col gap-5 border border-brand-nude/60 bg-white p-8">
      <Stars count={t.stars} />
      <p className="flex-1 italic leading-relaxed text-brand-dark/80">„{t.text}"</p>
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-nude/40 font-serif text-lg text-brand-taupe">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{t.name}</p>
          <p className="text-sm text-brand-dark/60">{t.place}</p>
        </div>
      </div>
    </div>
  );
}

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 90 : -90, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -90 : 90, opacity: 0 }),
};

function MobileCarousel({ reviews }: { reviews: Testimonial[] }) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const count = reviews.length;

  const paginate = (dir: number) => setState(([i]) => [(i + dir + count) % count, dir]);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 10000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="lg:hidden">
      <div className="relative min-h-[340px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1);
              else if (info.offset.x > 60) paginate(-1);
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <TestimonialCard t={reviews[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => paginate(-1)}
          aria-label="Prejšnje mnenje"
          className="border border-brand-dark/20 p-3 transition-colors hover:bg-brand-dark hover:text-brand-light"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setState([i, i > index ? 1 : -1])}
              aria-label={`Mnenje ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-brand-taupe" : "w-2 bg-brand-dark/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          aria-label="Naslednje mnenje"
          className="border border-brand-dark/20 p-3 transition-colors hover:bg-brand-dark hover:text-brand-light"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [reviews] = useState<Testimonial[]>(() => [...TESTIMONIALS].sort(() => Math.random() - 0.5));

  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow center>Mnenja</Eyebrow>
          </Reveal>
          <h2 className="mt-5 text-4xl md:text-5xl">
            <WordReveal text="Mnenja strank" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-brand-dark/70">Kar pravijo moje stranke.</p>
          </Reveal>
        </div>
      </div>

      {/* Desktop: neskončen marquee trak */}
      <Reveal className="relative mt-16 hidden lg:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-white to-transparent" />
        <div className="animate-marquee-slow flex w-max hover:[animation-play-state:paused]">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-stretch" aria-hidden={half === 1}>
              {reviews.map((t, i) => (
                <div key={i} className="mx-3 w-[400px] shrink-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mobilno: carousel s podrsavanjem */}
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:hidden">
        <MobileCarousel reviews={reviews} />
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-28 md:py-40">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl text-brand-light md:text-6xl">
          <WordReveal text="Pripravljena za spremembo?" />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-5 text-xl text-brand-nude">Tvoj termin čaka.</p>
        </Reveal>
        <Reveal delay={0.25} className="mt-10">
          <Magnetic>
            <ButtonLink to="/kontakt" variant="light" arrow>
              Rezerviraj svoj termin
            </ButtonLink>
          </Magnetic>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-10 text-sm text-brand-light/60">
            Ali me kontaktiraj:{" "}
            <a
              href="mailto:adnaacosmetics@gmail.com"
              className="underline underline-offset-4 transition-colors hover:text-brand-nude"
            >
              adnaacosmetics@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
