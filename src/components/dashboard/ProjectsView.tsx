import DemoBadge from "./DemoBadge";

const projects = [
  { name: "Billing Service", milestone: "v2.3 — Usage-based pricing", progress: 72, tasks: "18/25", status: "On track" },
  { name: "Onboarding Flow", milestone: "Guided setup redesign", progress: 41, tasks: "9/22", status: "In progress" },
  { name: "Design System v2", milestone: "Token migration", progress: 88, tasks: "31/35", status: "Review" },
  { name: "Internal API Gateway", milestone: "Rate limiting rollout", progress: 19, tasks: "4/21", status: "Planning" },
];

export default function ProjectsView() {
  return (
    <div className="flex h-full w-full max-w-[640px] flex-col overflow-y-auto p-4 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">Projects</p>
          <p className="text-xs text-ink-tertiary">4 active workspaces</p>
        </div>
        <DemoBadge />
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.name} className="rounded-lg border border-border bg-canvas/50 p-3.5">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[13px] font-medium text-ink">{p.name}</p>
              <span className="rounded-full bg-surface-raised px-2 py-0.5 font-mono text-[10px] text-ink-tertiary">
                {p.status}
              </span>
            </div>
            <p className="mb-3 truncate text-[12px] text-ink-tertiary">{p.milestone}</p>
            <div className="mb-1.5 h-1 w-full overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-accent" style={{ width: `${p.progress}%` }} />
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] text-ink-tertiary">
              <span>{p.tasks} tasks</span>
              <span>{p.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
