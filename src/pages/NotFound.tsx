import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { PageWrapper, Reveal, WordReveal } from "../components/anim";
import { ButtonLink } from "../components/ui";

export default function NotFound() {
  return (
    <PageWrapper>
      <SEO
        title="404 – Stran ni najdena | Adna Cosmetics"
        description="Ta stran ne obstaja. Vrni se na začetno stran Adna Cosmetics."
        path="/404"
        noindex
      />
      <section className="flex min-h-[80vh] items-center justify-center bg-brand-light px-6">
        <div className="max-w-xl py-20 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-brand-taupe/50" />
              <span className="text-xs tracking-[0.3em] uppercase text-brand-taupe">Adna Cosmetics</span>
              <span className="h-px w-12 bg-brand-taupe/50" />
            </div>
          </Reveal>

          <h1 className="mt-8 text-4xl md:text-5xl">
            <WordReveal text="Ups! Ta stran je šla na lepotni počitek." mode="mount" delay={0.15} />
          </h1>

          <Reveal delay={0.45}>
            <p className="mt-6 leading-relaxed text-brand-dark/70">
              Izgleda, da povezava, ki jo iščete, ne obstaja več ali pa se je preselila na lepše.
            </p>
          </Reveal>

          <Reveal delay={0.55} className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/">Nazaj na prvo stran</ButtonLink>
            <ButtonLink to="/storitve" variant="outline">
              Preglej ponudbo storitev
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.65}>
            <Link
              to="/kontakt"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-taupe"
            >
              Rezerviraj svoj termin
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}
