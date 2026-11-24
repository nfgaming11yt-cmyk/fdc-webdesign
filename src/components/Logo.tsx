export default function Logo({ onInk = false }: { onInk?: boolean }) {
  return (
    <span className="font-mono text-[15px] font-medium tracking-tight">
      fdc<span className={onInk ? "text-volt" : "text-blue"}>/</span>webdesign
    </span>
  );
}
