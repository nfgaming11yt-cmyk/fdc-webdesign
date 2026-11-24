"use client";

import { useState } from "react";
import { sectors } from "@/content/site";

type Status = "idle" | "sending" | "done" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [sector, setSector] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      if (!accessKey) throw new Error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Demande de maquette — ${data.entreprise || data.nom}`,
          from_name: "Site FDC Webdesign",
          secteur: sector ?? "Non précisé",
          ...data,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("done");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="pop flex min-h-[520px] flex-col items-start justify-center" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-volt text-[24px] text-ink" aria-hidden="true">✓</span>
        <p className="display mt-8 text-[clamp(40px,5vw,64px)]">
          <span className="block text-white">Merci !</span>
          <span className="block text-on-ink-dim">On s’y met.</span>
        </p>
        <p className="mt-5 max-w-sm text-[16px] text-on-ink">Vous recevez votre maquette par e-mail dans les 72 h.</p>
      </div>
    );
  }

  const input =
    "mt-2 block w-full min-h-[52px] rounded-[14px] border border-white/12 bg-white/[0.04] px-4 text-[16px] text-white placeholder:text-on-ink-dim focus:border-volt focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <fieldset>
        <legend className="label text-on-ink">Votre secteur</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {[...sectors, "Autre"].map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={sector === s}
              onClick={() => setSector(sector === s ? null : s)}
              className={`min-h-11 rounded-full border px-4 text-[14px] transition-colors ${
                sector === s ? "border-volt bg-volt text-ink" : "border-white/15 text-on-ink hover:border-white/40 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[14px] text-on-ink">
          Nom
          <input name="nom" required autoComplete="name" className={input} />
        </label>
        <label className="block text-[14px] text-on-ink">
          Entreprise
          <input name="entreprise" required autoComplete="organization" className={input} />
        </label>
      </div>
      <label className="block text-[14px] text-on-ink">
        E-mail
        <input name="email" type="email" required autoComplete="email" className={input} />
      </label>
      <label className="block text-[14px] text-on-ink">
        Site actuel <span className="text-on-ink-dim">(facultatif)</span>
        <input name="site_actuel" type="url" inputMode="url" placeholder="https://" autoComplete="url" className={input} />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-volt px-7 text-[16px] font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Envoi…" : "Recevoir ma maquette gratuite →"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-[14px] text-volt">
          L’envoi a échoué. Réessayez ou écrivez-nous directement.
        </p>
      )}
      <p className="text-[13px] leading-relaxed text-on-ink-dim">
        Vos données servent uniquement à répondre à votre demande. Voir la{" "}
        <a href="/confidentialite/" className="underline underline-offset-2 hover:text-white">politique de confidentialité</a>.
      </p>
    </form>
  );
}
