import { Shield } from "lucide-react";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import { PageWrapper, Reveal, WordReveal } from "../components/anim";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="mt-12">
        <h2 className="text-2xl">{title}</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-brand-dark/80">{children}</div>
      </div>
    </Reveal>
  );
}

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <SEO
        title="Politika zasebnosti - Adna Cosmetics"
        description="Preberite si kako ravnamo z vašimi osebnimi podatki v kozmetičnem salonu Adna Cosmetics na Vrhniki."
        path="/politika-zasebnosti"
      />

      <section className="bg-brand-light pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex bg-brand-dark p-4"
            >
              <Shield className="h-8 w-8 text-brand-nude" />
            </motion.div>
            <h1 className="mt-8 text-5xl md:text-6xl">
              <WordReveal text="Politika zasebnosti" mode="mount" delay={0.15} />
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-5 text-lg text-brand-dark/70">Kako ravnamo z vašimi osebnimi podatki</p>
            </Reveal>
          </div>

          <Reveal delay={0.45}>
            <p className="mt-14 leading-relaxed text-brand-dark/80">
              Vaša zasebnost mi je zelo pomembna. V kozmetičnem salonu Adna Cosmetics se zavezujem, da
              bom vaše osebne podatke varovala v skladu z veljavno zakonodajo o varstvu osebnih
              podatkov (Splošna uredba o varstvu podatkov – GDPR in Zakon o varstvu osebnih podatkov –
              ZVOP-2).
            </p>
          </Reveal>

          <Section title="1. Katere osebne podatke zbiram?">
            <p>
              Zbiram samo tiste osebne podatke, ki mi jih neposredno in prostovoljno posredujete prek
              kontaktnega obrazca ali ob naročanju:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Ime in priimek</li>
              <li>Telefonska številka</li>
              <li>Elektronski naslov (če me kontaktirate po e-pošti ali prek obrazca)</li>
              <li>
                Druge informacije, ki jih vključite v svoje sporočilo (npr. želene storitve ali
                posebne potrebe)
              </li>
            </ul>
          </Section>

          <Section title="2. Namen obdelave osebnih podatkov">
            <p>
              Vaše osebne podatke uporabljam <strong>izključno</strong> za naslednje namene:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Potrditev vašega termina za storitve.</li>
              <li>
                Obveščanje in komuniciranje v zvezi z vašim obiskom v salonu (npr. opomniki, morebitne
                spremembe terminov).
              </li>
              <li>Odgovarjanje na vaša povpraševanja in vprašanja.</li>
            </ul>
            <p>
              Vaših podatkov v nobenem primeru ne uporabljam za pošiljanje neželene oglasne pošte in
              jih ne obdelujem za namene neposrednega trženja brez vaše izrecne privolitve.
            </p>
          </Section>

          <Section title="3. Deljenje podatkov s tretjimi osebami">
            <p>
              Vaše osebne podatke skrbno varujem in jih <strong>ne delim</strong>, ne prodajam ter ne
              oddajam v najem nobenim tretjim osebam.
            </p>
          </Section>

          <Section title="4. Hramba podatkov">
            <p>
              Vaše osebne podatke hranim le toliko časa, kolikor je to potrebno za izpolnitev namena,
              za katerega so bili zbrani (tj. za izvedbo storitve in morebitno poznejšo komunikacijo
              glede termina). Po preteku tega obdobja podatke varno in trajno izbrišem.
            </p>
          </Section>

          <Section title="5. Vaše pravice">
            <p>V zvezi z vašimi osebnimi podatki imate naslednje pravice:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Pravica do dostopa do informacij o tem, katere podatke zbiram.</li>
              <li>Pravica do popravka netočnih podatkov.</li>
              <li>Pravica do izbrisa (»pravica do pozabe«).</li>
              <li>Pravica do omejitve obdelave in ugovora zoper obdelavo.</li>
            </ul>
            <p>
              Če želite uveljavljati katero od teh pravic ali imate kakršnokoli vprašanje glede
              politike zasebnosti, me prosim kontaktirajte na elektronski naslov:{" "}
              <a
                href="mailto:adnaacosmetics@gmail.com"
                className="font-semibold text-brand-taupe underline underline-offset-2 transition-colors hover:text-brand-dark"
              >
                adnaacosmetics@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </PageWrapper>
  );
}
