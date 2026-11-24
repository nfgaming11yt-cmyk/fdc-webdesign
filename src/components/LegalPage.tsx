import Label from "./Label";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="container-x pb-24 pt-14 sm:pb-[120px] sm:pt-20">
      <Label>Légal</Label>
      <h1 className="display mt-6 text-[clamp(40px,5.6vw,72px)]">{title}</h1>
      <p className="mt-8 max-w-[680px] rounded-[20px] border border-dashed border-steel/50 p-5 text-[15px] leading-relaxed text-steel">
        Modèle à valider par Filip (et idéalement relu par un professionnel du droit). Ce texte n’est pas un avis juridique. Les éléments
        entre crochets restent à compléter.
      </p>
      <div className="prose-legal mt-6 max-w-[680px]">{children}</div>
    </section>
  );
}
