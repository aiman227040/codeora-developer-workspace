const steps = [
  {
    number: "01",
    title: "Connect",
    body: "Bring your development workflow into one workspace.",
  },
  {
    number: "02",
    title: "Organize",
    body: "Manage projects, tasks, and engineering activity without switching contexts.",
  },
  {
    number: "03",
    title: "Build",
    body: "Stay focused on the work that actually moves the project forward.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-[52ch]">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-ink sm:text-4xl">
            Three steps to a focused workflow.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, i) => (
            <li key={step.number} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-accent-soft">{step.number}</span>
                <div className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-[16px] font-semibold text-ink">{step.title}</h3>
              <p className="max-w-[32ch] text-[14.5px] leading-relaxed text-ink-secondary">
                {step.body}
              </p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-[38px] hidden text-ink-tertiary sm:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
