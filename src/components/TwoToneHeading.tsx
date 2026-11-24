type Props = {
  first: string;
  second: string;
  as?: "h1" | "h2";
  size?: "hero" | "page" | "section";
  tone?: "paper" | "ink";
  className?: string;
};

const sizes = {
  hero: "text-[clamp(44px,7.4vw,108px)]",
  page: "text-[clamp(42px,6.2vw,88px)]",
  section: "text-[clamp(36px,4.6vw,64px)]",
};

/** Line 1 in ink (or white on dark), line 2 in mist. */
export default function TwoToneHeading({ first, second, as = "h2", size = "section", tone = "paper", className = "" }: Props) {
  const Tag = as;
  return (
    <Tag className={`display reveal ${sizes[size]} ${className}`}>
      <span className={`block ${tone === "ink" ? "text-white" : "text-ink"}`}>{first}</span>
      <span className={`block ${tone === "ink" ? "text-on-ink-dim" : "text-mist"}`}>{second}</span>
    </Tag>
  );
}
