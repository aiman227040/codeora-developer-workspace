import DemoBadge from "./DemoBadge";

const events = [
  { repo: "billing-service", action: "merged", detail: "Add usage-based pricing tiers", meta: "#284 · main", time: "9m ago" },
  { repo: "onboarding-flow", action: "opened", detail: "Redesign step 2 validation", meta: "#61 · feature/step-validation", time: "47m ago" },
  { repo: "design-system", action: "commit", detail: "Refactor token naming for spacing scale", meta: "a1c9f2e", time: "1h ago" },
  { repo: "api-gateway", action: "review", detail: "Rate limiting middleware needs a second pass", meta: "#12 · requested review", time: "2h ago" },
  { repo: "billing-service", action: "commit", detail: "Fix rounding error in invoice totals", meta: "9e21b40", time: "3h ago" },
];

const badgeStyle: Record<string, string> = {
  merged: "bg-signal-merged/15 text-signal-merged",
  opened: "bg-accent-dim text-accent-soft",
  commit: "bg-ink-tertiary/15 text-ink-secondary",
  review: "bg-signal-review/15 text-signal-review",
};

export default function GitActivityView() {
  return (
    <div className="flex h-full w-full max-w-[640px] flex-col overflow-y-auto p-4 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">Git Activity</p>
          <p className="text-xs text-ink-tertiary">Across 4 connected repositories</p>
        </div>
        <DemoBadge />
      </div>

      <div className="flex flex-col gap-2">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-lg border border-border bg-canvas/50 p-3"
          >
            <span
              className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.04em] ${badgeStyle[e.action]}`}
            >
              {e.action}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] text-ink-secondary">{e.detail}</p>
              <p className="mt-0.5 font-mono text-[10.5px] text-ink-tertiary">
                {e.repo} · {e.meta}
              </p>
            </div>
            <span className="shrink-0 font-mono text-[10px] text-ink-tertiary">{e.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
