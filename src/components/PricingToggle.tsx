"use client";

import { useState } from "react";
import { setupFee } from "@/content/site";
import PlanCards, { type PricingMode } from "./PlanCards";

const options: { id: PricingMode; label: string }[] = [
  { id: "setup", label: "Création + abonnement" },
  { id: "nosetup", label: "Sans apport" },
];

export default function PricingToggle() {
  const [mode, setMode] = useState<PricingMode>("setup");
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Type de formule" className="inline-flex w-fit rounded-full border border-line bg-white p-1">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              aria-pressed={mode === o.id}
              onClick={() => setMode(o.id)}
              className={`min-h-11 rounded-full px-5 text-[14px] font-medium transition-colors ${
                mode === o.id ? "bg-ink text-white" : "text-graphite hover:text-ink"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
        <p className="max-w-md text-[15px] text-graphite" aria-live="polite">
          {mode === "setup"
            ? `Vous payez la création une fois (${setupFee} € HTVA), puis un abonnement mensuel tout compris.`
            : "Aucun frais de création : seulement l’abonnement mensuel, avec une durée minimale d’engagement [À préciser]."}
        </p>
      </div>
      <div className="mt-10">
        <PlanCards mode={mode} />
      </div>
    </div>
  );
}
