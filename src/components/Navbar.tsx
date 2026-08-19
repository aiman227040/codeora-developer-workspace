import { useState } from "react";
import Button from "./CtaButton";
import SignInModal from "./SignInModal";
import { scrollToSection } from "@/lib/scroll";

const links = [
  { label: "Product", id: "product" },
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };


  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="section-shell flex h-16 items-center justify-between"
      >
        <a
          href="#top"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden="true"
            className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-xs font-bold text-white"
          >
            C
          </span>
          Codeora
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={go(link.id)}
                className="text-sm text-ink-secondary transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" onClick={() => setSignIn(true)}>
            Sign In
          </Button>
          <Button variant="primary" size="sm" onClick={() => scrollToSection("product")}>
            Start Building
          </Button>
        </div>


        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-canvas px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={go(link.id)}
                  className="block rounded-md px-2 py-2.5 text-[15px] text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                setOpen(false);
                setSignIn(true);
              }}
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                setOpen(false);
                scrollToSection("product");
              }}
            >
              Start Building
            </Button>
          </div>
        </div>
      )}
    </header>

    <SignInModal open={signIn} onClose={() => setSignIn(false)} />
    </>
  );
}
