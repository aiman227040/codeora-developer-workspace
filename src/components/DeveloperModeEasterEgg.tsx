import { useEffect, useState } from "react";

const LINES = [
  "$ codeora --mode=developer",
  "› loading workspace modules ........ ok",
  "› syncing git activity ............. ok",
  "› booting AI assistant ............. ok",
  "Developer Mode Activated 🚀",
];

export default function DeveloperModeEasterEgg({ active }: { active: boolean }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!active) {
      setVisibleLines(0);
      return;
    }
    document.documentElement.classList.add("dev-mode");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= LINES.length) window.clearInterval(id);
    }, 380);
    return () => {
      window.clearInterval(id);
      document.documentElement.classList.remove("dev-mode");
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-5 right-5 z-[100] w-[min(340px,calc(100vw-2.5rem))] animate-fade-up"
    >
      <div className="overflow-hidden rounded-xl border border-border-strong bg-surface-raised/95 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-blocked/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-review/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-merged/80" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
            codeora — zsh
          </span>
        </div>
        <div className="space-y-1 px-3 py-3 font-mono text-[11px] leading-relaxed text-ink-secondary">
          {LINES.slice(0, visibleLines).map((line, i) => (
            <p
              key={line}
              className={
                i === LINES.length - 1
                  ? "pt-1 font-semibold text-accent-soft"
                  : undefined
              }
            >
              {line}
              {i === visibleLines - 1 && (
                <span className="ml-1 inline-block h-3 w-1.5 translate-y-[2px] bg-accent-soft" />
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
