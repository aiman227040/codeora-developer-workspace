const features = [
  {
    number: "01",
    title: "Project Workspace",
    body: "Keep projects organized with milestones, tasks, and progress in one focused workspace.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 8h14" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 4v0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Git Activity",
    body: "See commits, pull requests, reviews, and recent engineering activity without losing context.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="5" cy="4.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="5" cy="15.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 6.3v7.4M5 10c0-2.5 2.5-3.7 8-3.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI Development Assistant",
    body: "Get help understanding errors, planning implementation, and working through technical problems.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2.5l1.5 4.8L16.5 9l-5 1.7L10 15.5l-1.5-4.8L3.5 9l5-1.7L10 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Project Insights",
    body: "Understand project progress and development activity through a clear, focused view.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 16V9M9 16V4M15 16v-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-[52ch]">
          <p className="eyebrow mb-4">Features</p>
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-ink sm:text-4xl">
            Everything you need to stay in flow.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.number}
              className="group flex flex-col bg-canvas p-6 transition-colors duration-300 hover:bg-surface"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-accent-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent-dim">
                  {f.icon}
                </span>
                <span className="font-mono text-xs text-ink-tertiary">{f.number}</span>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-ink">{f.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-ink-secondary">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
