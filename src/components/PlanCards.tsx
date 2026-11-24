import Link from "next/link";
import { plans, setupFee } from "@/content/site";

export type PricingMode = "setup" | "nosetup";

export default function PlanCards({ mode = "setup", compact = false }: { mode?: PricingMode; compact?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((p, i) => {
        const dark = !!p.featured;
        const unavailable = mode === "nosetup" && !p.availableWithoutSetup;
        const setupLine = unavailable
          ? "Non disponible sans apport"
          : mode === "setup"
            ? `+ ${setupFee} € de création, une seule fois`
            : "0 € de création · engagement minimum";
        return (
          <article
            key={p.id}
            className={`rise relative flex flex-col rounded-[24px] p-7 sm:p-8 ${
              dark ? "on-ink bg-ink text-white" : "border border-line bg-white text-ink"
            } ${unavailable ? "opacity-60" : ""}`}
            style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] font-medium tracking-tight">{p.name}</h3>
              {p.featured && (
                <span className="rounded-full bg-volt px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink">Le plus choisi</span>
              )}
            </div>
            <p className={`mt-2 text-[15px] ${dark ? "text-on-ink" : "text-graphite"}`}>{p.pitch}</p>
            <p className="mt-8 flex items-baseline gap-1.5">
              <span className="display text-[56px]">{p.price}</span>
              <span className={`text-[15px] ${dark ? "text-on-ink" : "text-steel"}`}>€/mois HTVA</span>
            </p>
            <p className={`mt-1 font-mono text-[12px] uppercase tracking-[0.06em] ${dark ? "text-volt" : unavailable ? "text-steel" : "text-blue"}`}>
              {setupLine}
            </p>
            {!compact && (
              <ul className={`mt-7 space-y-3 border-t pt-7 text-[15px] ${dark ? "border-white/10 text-on-ink" : "border-line text-graphite"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className={dark ? "text-volt" : "text-blue"}>→</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-8">
              <Link
                href="/contact/"
                aria-label={`Choisir la formule ${p.name}`}
                className={`inline-flex min-h-[52px] w-full items-center justify-center rounded-full text-[15px] font-medium transition-colors ${
                  dark ? "bg-volt text-ink hover:bg-white" : "border border-ink/15 hover:border-ink hover:bg-ink hover:text-white"
                }`}
              >
                Commencer par la maquette →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
