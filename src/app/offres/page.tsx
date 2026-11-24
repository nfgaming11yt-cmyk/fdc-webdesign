import type { Metadata } from "next";
import Label from "@/components/Label";
import PricingToggle from "@/components/PricingToggle";
import TwoToneHeading from "@/components/TwoToneHeading";
import { comparison, faq, plans } from "@/content/site";

export const metadata: Metadata = {
  title: "Offres et tarifs — sites web sur abonnement",
  description: "Trois formules mensuelles tout compris : hébergement, sécurité et modifications. Avec ou sans frais de création. Prix HTVA.",
  alternates: { canonical: "/offres/" },
};

export default function Offres() {
  return (
    <>
      <section className="container-x pt-14 sm:pt-20">
        <Label>Offres</Label>
        <div className="mt-6">
          <TwoToneHeading as="h1" size="page" first="Un prix par mois." second="Tout est compris." />
        </div>
        <p className="mt-8 max-w-[620px] text-[18px] leading-[1.6] text-graphite">
          Hébergement, nom de domaine, sécurité et modifications : pas de facture surprise. Tous les prix sont HTVA.
        </p>
      </section>

      <section className="container-x py-16 sm:py-20" aria-label="Formules">
        <PricingToggle />
      </section>

      <section className="container-x pb-24 sm:pb-[120px]" aria-labelledby="comparatif">
        <Label n="01">Comparatif</Label>
        <div id="comparatif" className="mt-5">
          <TwoToneHeading first="Formule par formule." second="Sans petites lignes." />
        </div>
        <div className="mt-12 overflow-x-auto rounded-[24px] border border-line bg-white" tabIndex={0} role="region" aria-label="Tableau comparatif (défilable)">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="label p-5 font-normal text-steel">Inclus</th>
                {plans.map((p) => (
                  <th key={p.id} scope="col" className="p-5 text-[17px] font-medium">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th scope="row" className="p-5 font-normal text-graphite">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={i} className={`p-5 ${v === "✓" ? "text-blue" : v === "—" ? "text-steel" : "text-ink"}`}>
                      {v === "✓" ? <span aria-label="Inclus">✓</span> : v === "—" ? <span aria-label="Non inclus">—</span> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-[120px]" aria-labelledby="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Label n="02">FAQ</Label>
            <div id="faq" className="mt-5">
              <TwoToneHeading first="Vos questions." second="Nos réponses." />
            </div>
          </div>
          <div className="border-t border-line">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex min-h-16 items-center justify-between gap-6 py-5 text-[18px] font-medium tracking-tight">
                  {item.q}
                  <span className="faq-plus flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-[20px] transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-6 text-[16px] leading-[1.65] text-graphite">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
