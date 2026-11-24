import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Label from "@/components/Label";
import TwoToneHeading from "@/components/TwoToneHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — votre maquette gratuite en 72 h",
  description: "Demandez votre maquette gratuite : on vous l’envoie en 72 h, sans engagement. Site en ligne 14 jours après validation.",
  alternates: { canonical: "/contact/" },
};

const timeline = [
  { day: "J+0", text: "Vous remplissez le formulaire. Deux minutes, pas plus." },
  { day: "J+3", text: "Vous recevez la maquette de votre page d’accueil. Gratuite, sans engagement." },
  { day: "J+17", text: "Votre site est en ligne, 14 jours après validation de la maquette." },
];

export default function Contact() {
  return (
    <section className="container-x pb-24 pt-14 sm:pb-[120px] sm:pt-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <Label>Contact</Label>
          <div className="mt-6">
            <TwoToneHeading as="h1" size="page" first="Votre maquette," second="gratuite, en 72 h." />
          </div>
          <ol className="mt-12 space-y-0 border-l border-line">
            {timeline.map((t) => (
              <li key={t.day} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-blue" aria-hidden="true" />
                <p className="font-mono text-[13px] font-medium text-blue">{t.day}</p>
                <p className="mt-1 max-w-sm text-[16px] leading-[1.55] text-graphite">{t.text}</p>
              </li>
            ))}
          </ol>
          <dl className="mt-12 grid gap-5 border-t border-line pt-8 text-[16px] sm:grid-cols-2">
            <div>
              <dt className="label text-steel">E-mail</dt>
              <dd className="mt-1.5 text-ink">{site.email}</dd>
            </div>
            <div>
              <dt className="label text-steel">Téléphone</dt>
              <dd className="mt-1.5 text-ink">{site.phone}</dd>
            </div>
            <div>
              <dt className="label text-steel">Basé à</dt>
              <dd className="mt-1.5 text-ink">
                {site.locality}, {site.region}
              </dd>
            </div>
          </dl>
        </div>

        <div className="on-ink relative overflow-hidden rounded-[28px] bg-ink p-7 text-white sm:p-10">
          <div aria-hidden="true">
            <span className="ring-deco" style={{ width: 520, height: 520, right: -260, top: -260 }} />
            <span className="ring-deco" style={{ width: 340, height: 340, right: -170, top: -170 }} />
          </div>
          <div className="relative">
            <p className="label text-volt">[ Demande de maquette ]</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
