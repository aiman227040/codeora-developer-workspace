import DemoBadge from "./DemoBadge";

const stats = [
  { label: "Active Projects", value: "6" },
  { label: "Tasks in Progress", value: "14" },
  { label: "Pull Requests", value: "3" },
  { label: "Current Sprint", value: "Sprint 12" },
];

const projects = [
  { name: "Billing Service", progress: 72, status: "On track" },
  { name: "Onboarding Flow", progress: 41, status: "In progress" },
];

const activity = [
  { text: "Pull request merged into main", tag: "merged", time: "9m ago" },
  { text: "Task \u201cAdd rate limiting\u201d completed", tag: "task", time: "34m ago" },
  { text: "Commit pushed to billing-service", tag: "commit", time: "1h ago" },
];

const dotColor: Record<string, string> = {
  merged: "bg-signal-merged",
  task: "bg-accent-soft",
  commit: "bg-ink-tertiary",
  review: "bg-signal-review",
};

export default function OverviewView() {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-4 sm:p-5">
      <div className="mb-3.5 flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">Good morning, Alex</p>
          <p className="text-xs text-ink-tertiary">Wednesday, Aug 19 — Sprint 12, day 4 of 10</p>
        </div>
        <DemoBadge />
      </div>

      <div className="mb-3.5 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border bg-canvas/50 px-3 py-2.5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-tertiary">
              {s.label}
            </p>
            <p className="mt-1 text-lg font-semibold text-ink">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-3.5">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-tertiary">
          Projects
        </p>
        <div className="flex flex-col gap-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-border bg-canvas/50 px-3 py-2.5"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[13px] font-medium text-ink">{p.name}</p>
                <span className="font-mono text-[10px] text-ink-tertiary">{p.status}</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full origin-left animate-grow-x rounded-full bg-accent"
                  style={{ width: `${p.progress}%`, animationDelay: "260ms" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-tertiary">
          Recent Activity
        </p>
        <div className="flex flex-col divide-y divide-border rounded-lg border border-border bg-canvas/50">
          {activity.map((a) => (
            <div key={a.text} className="flex items-center gap-2.5 px-3 py-2">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColor[a.tag]}`}
                aria-hidden="true"
              />
              <p className="flex-1 truncate text-[12.5px] text-ink-secondary">{a.text}</p>
              <span className="shrink-0 font-mono text-[10px] text-ink-tertiary">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
