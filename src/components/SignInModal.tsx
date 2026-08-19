import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "./CtaButton";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SignInModal({ open, onClose }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    const t = setTimeout(() => emailRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const useDemo = () => {
    setEmail("alex@codeora.dev");
    setPassword("demo1234");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signin-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[400px] animate-fade-up rounded-2xl border border-border bg-surface p-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] sm:p-7"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 id="signin-title" className="text-[19px] font-semibold tracking-tight text-ink">
              Welcome back
            </h2>
            <p className="mt-1 text-[13px] text-ink-tertiary">
              Sign in to your Codeora workspace.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sign in"
            className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-tertiary transition-colors hover:bg-surface-raised hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="signin-email" className="mb-1.5 block text-[12.5px] font-medium text-ink-secondary">
              Email
            </label>
            <input
              id="signin-email"
              ref={emailRef}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="h-11 w-full rounded-lg border border-border bg-canvas px-3 text-[14px] text-ink placeholder:text-ink-tertiary transition-colors focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="signin-password" className="mb-1.5 block text-[12.5px] font-medium text-ink-secondary">
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-11 w-full rounded-lg border border-border bg-canvas px-3 text-[14px] text-ink placeholder:text-ink-tertiary transition-colors focus:border-accent focus:outline-none"
            />
          </div>

          <Button variant="primary" className="mt-1 w-full" type="submit">
            Sign In
          </Button>
        </form>

        {submitted && (
          <p className="mt-3 animate-fade-up rounded-lg border border-border bg-canvas px-3 py-2 text-[12.5px] text-ink-secondary">
            This is a UI demo — no account is created.
          </p>
        )}

        <div className="mt-5 border-t border-border pt-4 text-center">
          <p className="text-[12.5px] text-ink-tertiary">
            Demo account available —{" "}
            <button
              type="button"
              onClick={useDemo}
              className="font-medium text-accent-soft underline-offset-4 hover:underline"
            >
              fill demo credentials
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
