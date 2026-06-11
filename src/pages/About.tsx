import { Award, Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import { Counter, ImageReveal, PageWrapper, Reveal, WordReveal } from "../components/anim";
import { ButtonLink, PageHeader } from "../components/ui";

export default function About() {
  return (
    <PageWrapper>
      <SEO
        title="O salonu | Adna Cosmetics Vrhnika"
        description="Spoznaj zgodbo salona Adna Cosmetics in več kot 5 let izkušenj na področju profesionalne lepotne nege na Vrhniki."
        path="/o-meni"
      />
      <PageHeader eyebrow="Spoznaj me" title="O meni" subtitle="Spoznaj zgodbo salona Adna Cosmetics." />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-8">
          {/* Lepljiva slika z offset okvirjem */}
          <div className="relative self-start lg:sticky lg:top-28">
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand-nude" aria-hidden />
            <ImageReveal
              src="/profilna-slika.webp"
              alt="Adna — ustanoviteljica salona Adna Cosmetics"
              className="relative aspect-[3/4]"
            />
          </div>

          {/* Zgodba */}
          <div>
            <h2 className="text-3xl md:text-4xl">
              <WordReveal text="Adna Cosmetics" />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-brand-dark/80">
                Lepo vabljena v moj kotiček lepote! Spoznajva se v okolju, kjer tvoj termin ni le
                termin ampak čas, ki ga nameniš sama sebi. Zagotovim ti dobro energijo in prijeten
                pristop. Če ti je neprijetno ob novem spoznavanju, se lahko zmeniva in te počaka tvoj
                najljubši film ali pa serija. Trudim se, da je vsem strankam pri meni prijetno in
                udobno, saj je to tisto kar šteje. Se vidiva! :)
              </p>
            </Reveal>

            <h3 className="mt-12 text-2xl">
              <WordReveal text="Kdo sem?" />
            </h3>
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-brand-dark/80">
                Ime mi je Adna, že od majhnega me kozmetika in lepota navdušujeta. V srednji šoli me
                je želja po delu v kozmetiki popolnoma prevzela in opravila sem prva tečaja za
                manikuro. Bila sem namreč na srednji šoli, ki s kozmetiko ni imela skupne točke, a sem
                se po zaključku vpisala na Višjo šolo za kozmetiko in velnes v Ljubljani. Med srednjo
                šolo in izobraževanjem na višji šoli sem delala v različnih salonih in si nabrala
                izkušnje. Te izkušnje so nekaj, kar nosim s seboj in mi pri vsakdanjem delu vsekakor
                pridejo prav. V preteklem času sem v ponudbo dodala tudi nekaj novih storitev, a
                vseeno manikura ostaja moja svetla točka in nekaj, na kar se želim osredotočiti tudi v
                prihodnosti.
              </p>
            </Reveal>

            {/* Kartici s števcema */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="h-full border border-brand-nude/50 bg-brand-nude/30 p-8">
                  <Award className="h-8 w-8 text-brand-taupe" />
                  <div className="mt-5 font-serif text-5xl">
                    <Counter to={20} suffix="+" />
                  </div>
                  <h3 className="mt-2 text-xl">Certifikati</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-dark/75">
                    Verjamem v to, da se je v tem poslu potrebno konstantno izobraževati, zato sem se
                    v preteklih letih tudi sama izobraževala in se udeležila več kot 20 izobraževanj.
                    Izobraževanj sem se udeležila tako v Sloveniji kot v tujih državah in se tako
                    učila od najboljših.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="h-full border border-brand-nude/50 bg-brand-nude/30 p-8">
                  <Sparkles className="h-8 w-8 text-brand-taupe" />
                  <div className="mt-5 font-serif text-5xl">
                    <Counter to={5} suffix="+" />
                  </div>
                  <h3 className="mt-2 text-xl">Izkušnje</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-dark/75">
                    Na tem področju imam pet let izkušenj. Ta pot mi je omogočila ogromno karierno in
                    osebnostno rast. Vse to mi je prineslo boljše komunikacijske sposobnosti, boljše
                    odnose s strankami, hitrost ter spretnost pri salonskem delu.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-4">
              <ButtonLink to="/kontakt" arrow>
                Rezerviraj termin
              </ButtonLink>
              <ButtonLink to="/storitve" variant="outline">
                Moje storitve
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
