const links = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="section-shell flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[15px] font-semibold text-ink">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-xs font-bold text-white">
              C
            </span>
            Codeora
          </div>
          <p className="mt-3 max-w-[32ch] text-[13.5px] leading-relaxed text-ink-tertiary">
            Developer workspace for focused teams and builders.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13.5px] text-ink-secondary transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
