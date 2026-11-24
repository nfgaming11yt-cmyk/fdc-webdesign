import Link from "next/link";
import Label from "@/components/Label";
import Marquee from "@/components/Marquee";
import Orbit from "@/components/Orbit";
import PlanCards from "@/components/PlanCards";
import TwoToneHeading from "@/components/TwoToneHeading";
import { site } from "@/content/site";

export const metadata = {
  title: { absolute: "FDC Webdesign — Sites web sur abonnement, Wavre" },
  alternates: { canonical: "/" },
};

const steps = [
  { n: "01", title: "Maquette offerte", text: "Vous recevez une maquette de votre page d’accueil en 72 h. Gratuitement, sans engagement." },
  { n: "02", title: "Vos retours", text: "On ajuste ensemble les textes, les couleurs et les photos jusqu’à ce que ce soit vraiment vous." },
  { n: "03", title: "En ligne en 14 jours", text: "Votre site est publié, rapide sur mobile et prêt à être trouvé sur Google." },
  { n: "04", title: "On s’en occupe", text: "Hébergement, sécurité, modifications : un abonnement, un seul interlocuteur. Vous, vous bossez.", dark: true },
];

const promises = [
  { big: "14 j", text: "pour mettre votre site en ligne" },
  { big: "0 €", text: "pour la maquette, sans engagement" },
  { big: "1", text: "seul interlocuteur, du début à la fin" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: "Création et maintenance de sites web sur abonnement pour indépendants et PME.",
  areaServed: site.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
  knowsLanguage: "fr-BE",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative">
        <div className="container-x pt-14 sm:pt-20">
          <p className="label flex items-center gap-3 text-steel">
            <span className="pulse-dot" aria-hidden="true" />
            Agence web · Brabant wallon &amp; Bruxelles · {site.launchSpots} places de lancement
          </p>
          <h1 className="display mt-7 max-w-[14ch] text-[clamp(44px,7.4vw,108px)] sm:max-w-none">
            <span className="block text-ink">Des sites qui travaillent</span>
            <span className="block text-mist">pendant que vous bossez.</span>
          </h1>
          <p className="mt-8 max-w-[560px] text-[18px] leading-[1.6] text-graphite sm:text-[19px]">
            Un site rapide, clair et entretenu pour votre entreprise. Création, hébergement et modifications compris dans un
            abonnement mensuel. Vous recevez votre maquette avant de payer quoi que ce soit.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact/" className="inline-flex min-h-[52px] items-center rounded-full bg-blue px-7 text-[16px] font-medium text-white transition-colors hover:bg-ink">
              Recevoir ma maquette gratuite
            </Link>
            <Link href="/offres/" className="inline-flex min-h-[52px] items-center rounded-full border border-ink/20 px-7 text-[16px] font-medium text-ink transition-colors hover:border-ink">
              Voir les prix
            </Link>
          </div>
        </div>
        <div className="mt-10 sm:mt-6">
          <Orbit />
        </div>
        <div className="container-x -mt-4 flex justify-center pb-16 sm:pb-20">
          <Link href="/realisations/" className="label inline-flex min-h-11 items-center text-blue hover:underline">
            Voir les réalisations →
          </Link>
        </div>
      </section>

      <Marquee />

      {/* Méthode */}
      <section className="container-x py-24 sm:py-[120px]" aria-labelledby="methode">
        <Label n="01">Méthode</Label>
        <div id="methode" className="mt-5">
          <TwoToneHeading first="Simple pour vous." second="De la maquette au suivi." />
        </div>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`reveal flex min-h-[280px] flex-col rounded-[24px] p-7 ${s.dark ? "on-ink bg-ink text-white" : "border border-line bg-white"}`}
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className={`font-mono text-[13px] ${s.dark ? "text-volt" : "text-blue"}`}>{s.n}</span>
              <h3 className="mt-auto text-[24px] font-medium tracking-tight">{s.title}</h3>
              <p className={`mt-3 text-[15px] leading-[1.55] ${s.dark ? "text-on-ink" : "text-graphite"}`}>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Offres teaser */}
      <section className="container-x pb-24 sm:pb-[120px]" aria-labelledby="offres">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Label n="02">Offres</Label>
            <div id="offres" className="mt-5">
              <TwoToneHeading first="Un prix par mois." second="Tout est compris." />
            </div>
          </div>
          <Link href="/offres/" className="label inline-flex min-h-11 items-center text-blue hover:underline">
            Comparer les formules →
          </Link>
        </div>
        <div className="mt-14">
          <PlanCards compact />
        </div>
        <div className="mt-5 flex flex-col gap-4 rounded-[24px] border border-dashed border-steel/50 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[20px] font-medium tracking-tight">Formule sans apport</p>
            <p className="mt-1 text-[15px] text-graphite">Pas de frais de création : uniquement l’abonnement mensuel, avec une durée minimale.</p>
          </div>
          <Link href="/offres/" className="inline-flex min-h-11 w-fit items-center rounded-full border border-ink/20 px-5 text-[14px] font-medium hover:border-ink">
            En savoir plus →
          </Link>
        </div>
      </section>

      {/* Promesses */}
      <section className="container-x pb-24 sm:pb-[120px]" aria-labelledby="promesses">
        <Label n="03">Nos engagements</Label>
        <h2 id="promesses" className="sr-only">Nos engagements</h2>
        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {promises.map((p, i) => (
            <li
              key={p.big}
              className="reveal mx-auto flex aspect-square w-full max-w-[340px] flex-col items-center justify-center rounded-full border border-line text-center"
              style={{ "--d": `${i * 120}ms` } as React.CSSProperties}
            >
              <span className="display text-[clamp(64px,8vw,112px)]">{p.big}</span>
              <span className="mt-3 max-w-[18ch] text-[16px] text-graphite">{p.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
