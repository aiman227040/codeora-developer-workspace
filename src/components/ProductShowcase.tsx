import { useLayoutEffect, useRef, useState } from "react";
import DashboardFrame from "./dashboard/DashboardFrame";
import OverviewView from "./dashboard/OverviewView";
import ProjectsView from "./dashboard/ProjectsView";
import GitActivityView from "./dashboard/GitActivityView";
import AIAssistantView from "./dashboard/AIAssistantView";

const tabs = [
  { label: "Overview", view: OverviewView },
  { label: "Projects", view: ProjectsView },
  { label: "Git Activity", view: GitActivityView },
  { label: "AI Assistant", view: AIAssistantView },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(1);
  const activeTab = tabs[active] ?? tabs[0]!;
  const ActiveView = activeTab.view;

  const listRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const update = () => {
      const el = btnRefs.current[active];
      const list = listRef.current;
      if (!el || !list) return;
      setPill({
        left: el.offsetLeft,
        width: el.offsetWidth,
        ready: true,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  return (
    <section id="product" className="border-b border-border py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="mb-8 max-w-[52ch] sm:mb-10">
          <p className="eyebrow mb-4">Product</p>
          <h2 className="text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-4xl">
            Your development workflow, in one view.
          </h2>
        </div>

        <div className="relative mb-5">
          <div
            ref={listRef}
            role="tablist"
            aria-label="Product views"
            className="relative flex w-full gap-1 overflow-x-auto rounded-lg border border-border bg-surface p-1 pr-8 [scrollbar-width:none] sm:inline-flex sm:w-auto sm:pr-1"
          >
            {/* Sliding indicator */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1 top-1 rounded-md bg-surface-raised ring-1 ring-border-strong transition-[transform,width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: pill.width,
                transform: `translateX(${pill.left}px)`,
                opacity: pill.ready ? 1 : 0,
                left: 0,
              }}
            />
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                ref={(el) => {
                  btnRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls="product-panel"
                onClick={() => setActive(i)}
                className={`relative z-10 shrink-0 rounded-md px-4 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                  active === i ? "text-ink" : "text-ink-tertiary hover:text-ink-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-lg bg-gradient-to-l from-canvas to-transparent sm:hidden"
          />
        </div>

        <div
          key={active}
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="h-[520px] animate-fade-up sm:h-[560px]"
        >
          <DashboardFrame activeItem={activeTab.label}>
            <ActiveView />
          </DashboardFrame>
        </div>
      </div>
    </section>
  );
}
