/** Mono section label, rendered as `[ 01 — Méthode ]`. */
export default function Label({ n, children, className = "text-steel" }: { n?: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={`label ${className}`}>
      [ {n ? `${n} — ` : ""}
      {children} ]
    </p>
  );
}
