import Button from "./CtaButton";
import DashboardPreview from "./DashboardPreview";
import { scrollToSection } from "@/lib/scroll";

const signals = [
  { label: "Projects synced", value: "6" },
  { label: "Avg. setup time", value: "2 min" },
  { label: "Integrations", value: "12+" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* Ambient backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-[0.5]" />
        <div className="hero-glow absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2" />
      </div>

      <div className="section-shell relative grid grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:py-28">
        <div>
          <div className="stagger-1 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 py-1 pl-1.5 pr-3 backdrop-blur">
            <span className="rounded-full bg-accent-dim px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-soft">
              New
            </span>
            <span className="text-[12.5px] text-ink-secondary">AI Assistant is live in every workspace</span>
          </div>

          <h1 className="stagger-2 mt-6 text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.5rem]">
            Build better software.
            <br />
            <span className="text-ink-secondary">Without the busywork.</span>
          </h1>

          <p className="stagger-3 mt-5 max-w-[46ch] text-[15.5px] leading-[1.65] text-ink-secondary sm:text-[17px]">
            Codeora brings projects, tasks, development activity, and AI
            assistance into one focused workspace — so you can spend less time
            managing your workflow and more time building.
          </p>

          <div className="stagger-4 mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("product")}
            >
              Start Building
            </Button>
            <a
              href="#product"
              className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-lg border border-border px-5 text-[15px] text-ink-secondary transition-colors hover:border-border-strong hover:text-ink sm:border-transparent sm:px-0 sm:hover:border-transparent"
            >
              Explore the workspace
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          <dl className="stagger-5 mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {signals.map((s) => (
              <div key={s.label} className="bg-canvas/80 px-3 py-3 sm:px-4">
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-tertiary">
                  {s.label}
                </dt>
                <dd className="mt-1 text-[15px] font-semibold text-ink sm:text-base">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
