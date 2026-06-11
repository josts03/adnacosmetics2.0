import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { ImageReveal, PageWrapper, Reveal, WordReveal } from "../components/anim";
import { ButtonLink, PageHeader } from "../components/ui";

const SERVICES = [
  {
    title: "Manikura",
    img: "/storitve-manikura.webp",
    pos: "object-[center_80%]",
    text: "Pri storitvi manikure poskrbim za urejeno obnohtno kožico, nato odvisno od želje stranke in nohtne plošče, naraven noht pokrijem z izbranim materialom. Zelo rada naredim francosko manikuro, delam pa tudi enostavne poslikave. Pri svojem delu uporabljam kvalitetne materijale in ponujam široko paleto barv. Stranka pride na ponovni obisk v roku 3 - 4 tednov, nega doma pa sloni na uporabi olja in čuvanju nohtov pred mehanskimi poškodbami. Za dobro obstojnost nohtov dam 50% jaz, drugih 50% pa stranka.",
  },
  {
    title: "Pedikura",
    img: "/storitev-pedikura.webp",
    pos: "",
    text: "Pedikura je izraz, ki označuje urejanje stopal. Stranke, ki se na pedikuro naročijo, si večinoma želijo imeti bolj obstojen lak in bolj natančno nanesen. Jaz z urejanjem obnohtne kožice, krajšanjem in oblikovanjem nohtov poskrbim za bolj lahkoten korak in estetski videz.",
  },
  {
    title: "Lash lift in laminacija obrvi",
    img: "/storitev-vihanje-trepalnic.webp",
    pos: "",
    text: "Vihanje trepalnic (lash lift) je tehnika s katero privzdignem naravne trepalnice, po želji lahko trepalnice tudi pobarvam. Oči bodo videti bolj odprte, trepalnice pa zavihane, bolj goste in daljše. Pri laminaciji obrvi pa prav tako lahko vključim barvanje; laminacija pomaga obvladovati dlačice in ustvariti lepo obliko brez gelov. Za najboljše rezultate se prvih 24h po tretmaju izogibaj savnam in močenju.",
  },
  {
    title: "Depilacija",
    img: "/storitev-depilacija.webp",
    pos: "object-top",
    text: "S pomočjo vročega voska izpulim dlačico z mešičkom. Depilacija omogoča mehko kožo nekaj tednov, pri redni depilaciji se dlačice stanjšajo, posvetlijo in razredčijo. Po depilaciji se prvih 24-48h izogibaj direktnemu soncu.",
  },
  {
    title: "Masaža",
    img: "/storitev-masaza.webp",
    pos: "object-[center_80%]",
    text: "Klasična masaža telesa vključuje masažo hrbta, rok in nog spredaj in zadaj. 1 ura sprostitve v današnjem hitrem življenju bo vsakemu prav prišla. Za tiste, ki nimajo toliko časa pa obstaja masaža zgornjega hrbta in vratu, ta je krajša in traja 30 min, je kot nalašč za hitro sprostitev.",
  },
];

export default function Services() {
  return (
    <PageWrapper>
      <SEO
        title="Manikura, pedikura, lash lift Vrhnika | Adna Cosmetics"
        description="Manikura, pedikura, lash lift in laminacija obrvi, depilacija ter masaža v salonu Adna Cosmetics na Vrhniki. Profesionalna nega."
        path="/storitve"
      />
      <PageHeader
        eyebrow="Moja ponudba"
        title="Moje storitve"
        subtitle="Prepusti se strokovnim rokam in uživaj v vrhunskih lepotnih tretmajih."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl space-y-24 px-6 md:space-y-32 lg:px-8">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ImageReveal
                  src={service.img}
                  alt={service.title}
                  hover
                  className="aspect-[4/3]"
                  imgClassName={service.pos}
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Reveal>
                  <span className="font-serif text-6xl text-brand-nude-4 md:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Reveal>
                <h2 className="mt-4 text-3xl md:text-4xl">
                  <WordReveal text={service.title} />
                </h2>
                <Reveal delay={0.1}>
                  <p className="mt-6 leading-relaxed text-brand-dark/80">{service.text}</p>
                </Reveal>
                <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-6">
                  <ButtonLink to="/kontakt">Naroči se</ButtonLink>
                  <Link
                    to="/cenik"
                    className="group inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-taupe"
                  >
                    Preveri cenik
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA pas */}
      <section className="bg-brand-nude py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl md:text-4xl">
            <WordReveal text="Tvoj termin čaka." />
          </h2>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/kontakt" arrow>
              Rezerviraj termin
            </ButtonLink>
            <ButtonLink to="/cenik" variant="outline">
              Preveri cenik
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}
