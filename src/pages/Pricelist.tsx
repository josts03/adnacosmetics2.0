import { CircleAlert } from "lucide-react";
import SEO from "../components/SEO";
import { PageWrapper, Reveal, WordReveal } from "../components/anim";
import { ButtonLink, PageHeader } from "../components/ui";

type PriceRow = [name: string, price: string];

const SECTIONS: { title: string; rows: PriceRow[]; note?: string }[] = [
  {
    title: "Manikura",
    rows: [
      ["Osnovna manikura", "25 €"],
      ["Podaljševanje S", "35 €"],
      ["Podaljševanje M", "40 €"],
      ["Podaljševanje L", "45 €"],
      ["Permanentno lakiranje", "30 €"],
      ["Odstranjevanje", "15 €"],
      ["Popravilo nohta", "4-8 €"],
      ["Grajena francoska", "10-15 €"],
      ["Poslikava", "5-10 €"],
      ["Dodatki", "0,50–2 €"],
      ["Rekonstrukcija / laminacija nohtov", "5 €"],
    ],
    note: "Opomba: Cena korekcije je enaka ceni podaljševanja. Korekcij tujega dela ne izvajam. Reklamacije so možne 48h po tretmaju.",
  },
  {
    title: "Pedikura",
    rows: [
      ["Estetska pedikura", "35 €"],
      ["Pedikura s trajnim lakiranjem", "40 €"],
      ["Pedikura s francosko poslikavo", "45 €"],
      ["Odstranjevanje trajnega laka s pedikuro", "20 €"],
    ],
  },
  {
    title: "Lash lift in laminacija obrvi",
    rows: [
      ["Laminacija obrvi", "35 €"],
      ["Laminacija obrvi z barvanjem", "40 €"],
      ["Lash lift", "35 €"],
      ["Lash lift z barvanjem", "40 €"],
      ["Duo", "60 €"],
      ["Duo z barvanjem", "70 €"],
    ],
    note: "Opomba: Na termin prosim pridi brez maskare.",
  },
  {
    title: "Depilacija",
    rows: [
      ["Cele noge", "30 €"],
      ["Noge od/do kolen", "20 €"],
      ["Pazduhe", "12 €"],
      ["Roke", "20 €"],
      ["Obraz", "10 €"],
    ],
  },
  {
    title: "Masaža",
    rows: [
      ["Klasična masaža telesa (60 min)", "40 €"],
      ["Masaža zgornjega hrbta z vratom (30 min)", "20 €"],
    ],
  },
];

export default function Pricelist() {
  return (
    <PageWrapper>
      <SEO
        title="Cenik storitev | Adna Cosmetics Vrhnika"
        description="Transparenten cenik storitev salona Adna Cosmetics – manikura od 25€, pedikura, lash lift, depilacija in masaža."
        path="/cenik"
      />
      <PageHeader
        eyebrow="Cenik storitev"
        title="Cenik"
        subtitle="Transparentne cene za vrhunske storitve."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-20 px-6">
          {SECTIONS.map((section, si) => (
            <div key={section.title}>
              <Reveal>
                <div className="flex items-baseline gap-4 border-b border-brand-dark/15 pb-4">
                  <span className="font-serif text-2xl text-brand-taupe">
                    {String(si + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl">{section.title}</h2>
                </div>
              </Reveal>

              <div className="mt-6">
                {section.rows.map(([name, price], i) => (
                  <Reveal key={name} delay={0.03 * i} y={12} duration={0.5}>
                    <div className="flex items-baseline gap-3 py-1.5">
                      <span className="shrink-0">{name}</span>
                      <span aria-hidden className="mx-1 flex-1 border-b border-dotted border-brand-dark/25" />
                      <span className="shrink-0 font-medium">{price}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              {section.note && (
                <Reveal delay={0.1}>
                  <p className="mt-5 flex items-start gap-2 text-sm italic text-brand-taupe">
                    <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                    {section.note}
                  </p>
                </Reveal>
              )}

              <Reveal delay={0.15} className="mt-7">
                <ButtonLink to="/kontakt" variant="outline">
                  Naroči se
                </ButtonLink>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Strošek odpovedi rezervacije */}
      <section className="bg-brand-nude/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="border border-brand-nude bg-white p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl">
                <WordReveal text="Strošek odpovedi rezervacije" />
              </h3>
              <div className="mt-7 space-y-4 leading-relaxed text-brand-dark/85">
                <p>
                  Manj kot 24 ur pred rezervacijo – <span className="font-bold text-red-800">100%</span>{" "}
                  vrednosti rezervirane storitve.
                </p>
                <p>
                  24 – 48 ur pred rezervacijo – <span className="font-bold text-red-800">50%</span>{" "}
                  vrednosti rezervirane storitve.
                </p>
              </div>
              <div className="mt-7 border-t border-brand-nude pt-6">
                <p className="italic text-brand-dark/70">Strošek zaračunam ob naslednjem obisku.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}
