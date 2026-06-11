import { useState, type FormEvent, type ReactNode } from "react";
import { CircleCheck, Clock, Instagram, Mail, MapPin, Send, type LucideIcon } from "lucide-react";
import SEO from "../components/SEO";
import { PageWrapper, Reveal } from "../components/anim";
import { PageHeader } from "../components/ui";

const FORMSPREE = "https://formspree.io/f/mjgzkgnz";
const IG_URL = "https://www.instagram.com/adnaa_cosmetics/";

const INPUT_CLS =
  "w-full border border-brand-nude bg-brand-light/50 px-4 py-3 text-base outline-none transition-colors focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe";

const STORITVE = [
  "Manikura",
  "Pedikura",
  "Lash lift in laminacija obrvi",
  "Depilacija",
  "Masaža",
  "Več storitev",
  "Posvetovanje",
];

type Status = "idle" | "sending" | "success" | "error";

function InfoItem({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-brand-nude/60 p-3 text-brand-taupe">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-sans text-sm font-semibold tracking-widest uppercase">{title}</h3>
        <div className="mt-1.5 text-brand-dark/80">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — pri spamu prikažemo lažni uspeh
    if (String(data.get("_gotcha") ?? "").trim()) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg("Pri pošiljanju je prišlo do napake. Poskusi znova ali me kontaktiraj po e-pošti.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Sporočila ni bilo mogoče poslati. Preveri internetno povezavo in poskusi znova.");
      setStatus("error");
    }
  }

  return (
    <PageWrapper>
      <SEO
        title="Naroči se | Adna Cosmetics Vrhnika"
        description="Rezerviraj termin v salonu Adna Cosmetics na Vrhniki. Piši mi ali se naroči prek obrazca."
        path="/kontakt"
      />
      <PageHeader
        eyebrow="Stopi v stik"
        title="Kontakt"
        subtitle="Stopi v stik ali rezerviraj svoj termin."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:px-8">
          {/* Informacije */}
          <Reveal>
            <div className="border border-brand-nude bg-brand-nude/10 p-8 md:p-10">
              <h2 className="text-2xl">Informacije</h2>
              <div className="mt-8 space-y-7">
                <InfoItem icon={MapPin} title="Lokacija">
                  <p>Vrhnika</p>
                  <p className="mt-1 text-sm text-brand-dark/60">
                    Natančen naslov posredujem ob rezervaciji termina.
                  </p>
                </InfoItem>
                <InfoItem icon={Mail} title="Email">
                  <a
                    href="mailto:adnaacosmetics@gmail.com"
                    className="break-all transition-colors hover:text-brand-taupe"
                  >
                    adnaacosmetics@gmail.com
                  </a>
                </InfoItem>
                <InfoItem icon={Instagram} title="Družbena omrežja">
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-taupe"
                  >
                    Instagram: @adnaa_cosmetics
                  </a>
                </InfoItem>
                <InfoItem icon={Clock} title="Delovni čas">
                  <p>Pon - Pet: Po dogovoru</p>
                  <p>Sob, Ned, prazniki: Zaprto</p>
                </InfoItem>
              </div>
            </div>
          </Reveal>

          {/* Obrazec */}
          <Reveal delay={0.12}>
            <div className="border border-brand-nude/60 bg-white p-8 md:p-10">
              <h2 className="text-2xl">Pošlji povpraševanje</h2>

              {status === "success" ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CircleCheck className="h-14 w-14 text-brand-taupe" />
                  <h3 className="mt-6 text-2xl">Hvala za povpraševanje!</h3>
                  <p className="mt-3 text-brand-dark/70">
                    Tvoje sporočilo je bilo uspešno poslano, kmalu te kontaktiram.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 border border-brand-dark px-6 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-brand-dark hover:text-brand-light"
                  >
                    Pošlji novo povpraševanje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {status === "error" && (
                    <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-800">{errorMsg}</div>
                  )}

                  <div>
                    <label htmlFor="ime" className="mb-2 block text-sm font-medium">
                      Ime in priimek *
                    </label>
                    <input
                      id="ime"
                      type="text"
                      name="Ime"
                      required
                      placeholder="Si že lepa, samo vpiši ime 🎀!"
                      className={INPUT_CLS}
                    />
                  </div>

                  <div>
                    <label htmlFor="telefon" className="mb-2 block text-sm font-medium">
                      Telefonska številka *
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      name="Telefon"
                      required
                      placeholder="041 123 456"
                      pattern="[0-9+\s()/-]{6,20}"
                      className={INPUT_CLS}
                    />
                  </div>

                  <div>
                    <label htmlFor="storitev" className="mb-2 block text-sm font-medium">
                      Želena storitev *
                    </label>
                    <select id="storitev" name="Storitev" required defaultValue="" className={INPUT_CLS}>
                      <option value="" disabled>
                        Izberi storitev
                      </option>
                      {STORITVE.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="sporocilo" className="mb-2 block text-sm font-medium">
                      Sporočilo
                    </label>
                    <textarea
                      id="sporocilo"
                      name="Sporocilo"
                      rows={4}
                      placeholder="Želeni datum in ura, ali druga vprašanja..."
                      className={INPUT_CLS}
                    />
                  </div>

                  {/* Honeypot za spam */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex flex-1 items-center justify-center gap-3 bg-brand-dark px-8 py-4 text-sm tracking-widest uppercase text-brand-light transition-colors hover:bg-brand-taupe disabled:opacity-60"
                    >
                      <Send className="h-4 w-4" />
                      {status === "sending" ? "Pošiljanje..." : "Pošlji povpraševanje"}
                    </button>
                    <a
                      href={IG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-3 border border-brand-dark px-8 py-4 text-sm tracking-widest uppercase text-brand-dark transition-colors hover:bg-brand-dark hover:text-brand-light"
                    >
                      <Instagram className="h-4 w-4" />
                      Naroči se na IG
                    </a>
                  </div>

                  <p className="text-sm text-brand-dark/60">
                    To je samo informativno povpraševanje. Za potrditev in rezervacijo termina te
                    kontaktiram! :)
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}
