// Radar centred on Wavre. Positions are approximate, for decoration (percent of the box).
const labels = [
  { name: "Wavre", x: 50, y: 50, main: true },
  { name: "Ottignies", x: 44, y: 66 },
  { name: "Louvain-la-Neuve", x: 52, y: 74 },
  { name: "Rixensart", x: 33, y: 44 },
  { name: "Grez-Doiceau", x: 68, y: 40 },
  { name: "Overijse", x: 32, y: 26 },
  { name: "Waterloo", x: 16, y: 58 },
  { name: "Jodoigne", x: 84, y: 60 },
  { name: "Bruxelles", x: 20, y: 12 },
];

export default function Radar() {
  return (
    <div
      role="img"
      aria-label="Zone d’intervention : rayon autour de Wavre, couvrant le Brabant wallon et Bruxelles"
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="radar-sweep" />
      </div>
      {[0, 16, 32, 48].map((inset) => (
        <span key={inset} className="ring-deco" style={{ inset: `${inset / 1.04}%` }} />
      ))}
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line" />
      {labels.map((l) => (
        <div key={l.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${l.x}%`, top: `${l.y}%` }}>
          {l.main ? (
            <span className="relative block h-3 w-3">
              <span className="radar-ping" />
              <span className="absolute inset-0 rounded-full bg-blue" />
            </span>
          ) : (
            <span className="block h-1.5 w-1.5 rounded-full bg-steel" />
          )}
          <span
            className={`absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.06em] ${
              l.main ? "text-blue" : "text-steel"
            }`}
          >
            {l.name}
          </span>
        </div>
      ))}
    </div>
  );
}
