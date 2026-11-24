import type { Metadata } from "next";
import Label from "@/components/Label";
import Radar from "@/components/Radar";
import TwoToneHeading from "@/components/TwoToneHeading";
import { towns } from "@/content/site";

export const metadata: Metadata = {
  title: "À propos — une agence, un seul interlocuteur",
  description: "FDC Webdesign, c’est Filip, basé à Wavre. Un seul interlocuteur pour créer, héberger et faire vivre votre site, en Brabant wallon et à Bruxelles.",
  alternates: { canonical: "/a-propos/" },
};

const values = [
  { title: "Local", text: "Basé à Wavre. On peut se voir, chez vous ou autour d’un café, et je connais votre marché." },
  { title: "Clair", text: "Un prix mensuel affiché, ce qui est inclus écrit noir sur blanc. Pas de jargon, pas de surprise." },
  { title: "Suivi", text: "Votre site n’est pas livré puis oublié : je m’en occupe chaque mois, et vous savez qui appeler." },
];

export default function APropos() {
  return (
    <>
      <section className="container-x pt-14 sm:pt-20">
        <Label>À propos</Label>
        <div className="mt-6">
          <TwoToneHeading as="h1" size="page" first="Une agence." second="Un seul interlocuteur." />
        </div>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-[18px] leading-[1.65] text-graphite">
            <p>Bonjour, moi c’est Filip.</p>
            <p className="rounded-[20px] border border-dashed border-steel/50 p-6 text-steel">
              [Bio de Filip : parcours, pourquoi FDC Webdesign, ce qui le motive. À fournir par Filip.]
            </p>
            <p>
              Quand vous travaillez avec FDC Webdesign, vous parlez toujours à la même personne : celle qui conçoit votre site, le met en ligne et
              s’en occupe ensuite.
            </p>
          </div>
          <div
            className="flex aspect-[4/5] w-full max-w-[420px] items-center justify-center rounded-[28px] border border-dashed border-steel/50 bg-white"
            role="img"
            aria-label="Emplacement pour la photo de Filip"
          >
            <span className="label text-steel">[ Photo de Filip ]</span>
          </div>
        </div>
      </section>

      <section className="container-x py-24 sm:py-[120px]" aria-labelledby="valeurs">
        <Label n="01">Valeurs</Label>
        <div id="valeurs" className="mt-5">
          <TwoToneHeading first="Trois principes." second="Tenus chaque mois." />
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title} className="reveal rounded-[24px] border border-line bg-white p-8" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
              <span className="font-mono text-[13px] text-blue">0{i + 1}</span>
              <h3 className="mt-10 text-[26px] font-medium tracking-tight">{v.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.6] text-graphite">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x pb-24 sm:pb-[120px]" aria-labelledby="zone">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Label n="02">Zone d’intervention</Label>
            <div id="zone" className="mt-5">
              <TwoToneHeading first="Depuis Wavre." second="Brabant wallon & Bruxelles." />
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {towns.map((t) => (
                <li key={t} className={`rounded-full border px-4 py-2 text-[14px] ${t === "Wavre" ? "border-blue bg-blue text-white" : "border-line bg-white text-graphite"}`}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Radar />
        </div>
      </section>
    </>
  );
}
