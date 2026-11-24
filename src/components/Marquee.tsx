import { sectors } from "@/content/site";

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {sectors.map((s) => (
        <li key={s} className="flex items-center whitespace-nowrap">
          <span className="display px-6 text-[clamp(28px,3.6vw,48px)] text-ink">{s}</span>
          <span className="text-[22px] text-blue" aria-hidden="true">✳</span>
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Secteurs accompagnés" className="overflow-hidden border-y border-line py-7">
      <div className="marquee">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
