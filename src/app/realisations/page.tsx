import type { Metadata } from "next";
import Link from "next/link";
import TwoToneHeading from "@/components/TwoToneHeading";
import Label from "@/components/Label";
import { projects, type Project } from "@/content/projects";

export const metadata: Metadata = {
  title: "Réalisations — projets de démonstration",
  description: "Des sites de démonstration pour couvreurs, comptables, électriciens, dentistes et pisciniers. Voyez ce qu’on peut construire pour votre métier.",
  alternates: { canonical: "/realisations/" },
};

export default function Realisations() {
  return (
    <>
      <section className="container-x pt-14 sm:pt-20">
        <Label>Réalisations</Label>
        <div className="mt-6">
          <TwoToneHeading as="h1" size="page" first="Ce qu’on construit." second="Pour des métiers comme le vôtre." />
        </div>
        <p className="mt-8 max-w-[620px] text-[18px] leading-[1.6] text-graphite">
          FDC Webdesign démarre. Plutôt que d’inventer des clients, on vous montre des projets de démonstration : les entreprises
          ci-dessous sont fictives, mais chaque site est conçu comme on le ferait pour vous.
        </p>
      </section>

      <section className="container-x py-20 sm:py-24" aria-label="Projets de démonstration">
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.slug} className={`rise ${i === 0 ? "md:col-span-2" : ""}`} style={{ "--d": `${i * 110}ms` } as React.CSSProperties}>
              <DemoCard project={p} wide={i === 0} />
            </li>
          ))}
          <li className="rise" style={{ "--d": `${projects.length * 110}ms` } as React.CSSProperties}>
            <Link
              href="/contact/"
              className="lift flex h-full min-h-[320px] flex-col items-start justify-end rounded-[24px] border border-dashed border-steel/50 p-8"
            >
              <span className="label text-blue">[ Bientôt ]</span>
              <span className="display mt-4 text-[clamp(32px,3.4vw,44px)]">
                <span className="block">Votre entreprise</span>
                <span className="block text-mist">pourrait être ici.</span>
              </span>
              <span className="mt-6 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-[14px] font-medium text-white">
                Recevoir ma maquette gratuite →
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

function DemoCard({ project: p, wide }: { project: Project; wide: boolean }) {
  return (
    <article className="lift overflow-hidden rounded-[24px] border border-line bg-white">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded-full bg-paper px-3 py-1 font-mono text-[11px] text-steel">{p.domain}</span>
      </div>
      <div className={`relative overflow-hidden px-7 py-10 sm:px-10 ${wide ? "sm:py-16" : ""}`} style={{ background: p.bg, color: p.fg }} aria-hidden="true">
        <div className="flex items-center justify-between text-[13px]">
          <span className="font-semibold tracking-tight">{p.name}</span>
          <span className="hidden gap-5 opacity-70 sm:flex">
            <span>Services</span>
            <span>Réalisations</span>
            <span>Contact</span>
          </span>
        </div>
        <p className={`mt-10 max-w-[18ch] font-medium leading-[1.02] tracking-[-0.035em] ${wide ? "text-[clamp(32px,4.4vw,60px)]" : "text-[clamp(28px,3vw,38px)]"}`}>
          {p.headline}
        </p>
        <span className="mt-8 inline-flex rounded-full px-5 py-3 text-[14px] font-medium" style={{ background: p.accent, color: p.bg }}>
          {p.cta}
        </span>
        <span className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border" style={{ borderColor: p.accent, opacity: 0.35 }} />
        <span className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full border" style={{ borderColor: p.accent, opacity: 0.35 }} />
      </div>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-[19px] font-medium tracking-tight">
            {p.name}
            <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-steel">démo</span>
          </h2>
          <p className="mt-1 text-[14px] text-steel">
            {p.sector} · {p.town}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Fonctionnalités">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-[13px] text-graphite">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
