import { ReactNode } from "react";

const sidebarItems = [
  { label: "Overview", icon: "grid" },
  { label: "Projects", icon: "folder" },
  { label: "Tasks", icon: "check" },
  { label: "Git Activity", icon: "branch" },
  { label: "AI Assistant", icon: "spark" },
  { label: "Settings", icon: "gear" },
];

function SidebarIcon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": true as const,
  };
  switch (name) {
    case "grid":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
          <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
          <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
          <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M2 4.5a1 1 0 011-1h3l1.2 1.5H13a1 1 0 011 1V12a1 1 0 01-1 1H3a1 1 0 01-1-1V4.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5.2 8.2l1.8 1.8 3.8-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "branch":
      return (
        <svg {...common}>
          <circle cx="4" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="4" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="12" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M4 5v6M4 8c0-2 2-3 6.5-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M8 2l1.2 3.8L13 7l-3.8 1.2L8 12l-1.2-3.8L3 7l3.8-1.2L8 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 2.5v1.4M8 12.1v1.4M13.5 8h-1.4M3.9 8H2.5M11.7 4.3l-1 1M5.3 10.7l-1 1M11.7 11.7l-1-1M5.3 5.3l-1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

interface DashboardFrameProps {
  activeItem: string;
  children: ReactNode;
}

export default function DashboardFrame({ activeItem, children }: DashboardFrameProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-[0_40px_100px_-45px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.03]">
      {/* Window chrome */}
      <div className="flex h-9 shrink-0 items-center gap-3 border-b border-border bg-canvas/70 px-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        </div>
        <div className="min-w-0 flex-1 truncate text-center font-mono text-[10.5px] text-ink-tertiary">
          codeora.app / {activeItem.toLowerCase().replace(/\s+/g, "-")}
        </div>
        <div className="hidden w-[54px] sm:block" />
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Sidebar — hidden on the smallest breakpoint to keep the preview legible */}
        <aside className="hidden w-[168px] shrink-0 flex-col gap-0.5 border-r border-border bg-canvas/60 p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-2 text-xs font-semibold text-ink">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-accent text-[10px] font-bold text-white">
              C
            </span>
            Codeora
          </div>
          <nav aria-label="Dashboard sections" className="flex flex-col gap-0.5">
            {sidebarItems.map((item) => {
              const active = item.label === activeItem;
              return (
                <div
                  key={item.label}
                  className={`relative flex items-center gap-2 rounded-md px-2 py-1.5 text-[12.5px] transition-colors duration-300 ${
                    active ? "bg-accent-dim text-ink" : "text-ink-tertiary"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-accent-soft"
                    />
                  )}
                  <span className={active ? "text-accent-soft" : "text-ink-tertiary"}>
                    <SidebarIcon name={item.icon} />
                  </span>
                  {item.label}
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}
