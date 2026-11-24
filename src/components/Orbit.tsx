import { orbitCards } from "@/content/projects";

/** Hero orbit: rings, rotating tick dial, six demo cards on a ring, centre "browser". Purely decorative. */
export default function Orbit() {
  return (
    <div className="orbit-wrap" aria-hidden="true">
      <div className="orbit">
        <span className="ring-deco" style={{ inset: 0 }} />
        <span className="ring-deco" style={{ inset: 150 }} />
        <div className="orbit-dial" />
        <div className="orbit-track">
          {orbitCards.map((c, i) => (
            <div key={c.name} className="orbit-item" style={{ "--a": `${i * 60}deg` } as React.CSSProperties}>
              <div className="orbit-card">
                <MiniSite {...c} />
              </div>
            </div>
          ))}
        </div>

        {/* Centre browser */}
        <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_30px_80px_-40px_rgba(14,15,18,0.45)]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="ml-2 truncate font-mono text-[10.5px] text-steel">votre-entreprise.be — en construction</span>
          </div>
          <div className="space-y-3 p-5">
            <div className="skel w-3/4" style={{ height: 18, animationDelay: "0s, 0s" }} />
            <div className="skel w-1/2" style={{ height: 18, animationDelay: "0.15s, 0s" }} />
            <div className="skel w-full" style={{ animationDelay: "0.3s, 0s" }} />
            <div className="skel w-5/6" style={{ animationDelay: "0.45s, 0s" }} />
            <div className="flex gap-2 pt-2">
              <div className="h-8 w-28 rounded-full bg-blue/90" />
              <div className="h-8 w-20 rounded-full border border-line" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="skel" style={{ height: 44, borderRadius: 10, animationDelay: "0.6s, 0s" }} />
              <div className="skel" style={{ height: 44, borderRadius: 10, animationDelay: "0.7s, 0s" }} />
              <div className="skel" style={{ height: 44, borderRadius: 10, animationDelay: "0.8s, 0s" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniSite({ name, sector, bg, fg, accent }: { name: string; sector: string; bg: string; fg: string; accent: string }) {
  return (
    <div className="w-[150px] overflow-hidden rounded-[14px] border border-black/5 shadow-[0_16px_40px_-24px_rgba(14,15,18,0.5)]" style={{ background: bg, color: fg }}>
      <div className="flex items-center justify-between px-3 pt-2.5">
        <span className="text-[9px] font-semibold tracking-tight">{name}</span>
        <span className="rounded-full px-1.5 py-[1px] font-mono text-[7px] uppercase" style={{ background: accent, color: bg }}>
          démo
        </span>
      </div>
      <div className="space-y-1.5 px-3 pb-3 pt-3">
        <div className="h-[6px] w-[85%] rounded-full" style={{ background: fg, opacity: 0.85 }} />
        <div className="h-[6px] w-[60%] rounded-full" style={{ background: fg, opacity: 0.4 }} />
        <div className="mt-2 h-[14px] w-[55%] rounded-full" style={{ background: accent }} />
      </div>
      <div className="px-3 pb-2 font-mono text-[7.5px] uppercase tracking-[0.08em] opacity-70">{sector}</div>
    </div>
  );
}
