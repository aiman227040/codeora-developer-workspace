export default function DemoBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-tertiary">
      <span className="h-1.5 w-1.5 rounded-full bg-ink-tertiary" aria-hidden="true" />
      Sample workspace
    </span>
  );
}
