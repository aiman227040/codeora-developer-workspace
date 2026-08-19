export default function AIAssistant() {
  return (
    <section id="ai-assistant" className="border-b border-border py-20 sm:py-28">
      <div className="section-shell grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <p className="eyebrow mb-4">AI Development Assistant</p>
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-ink sm:text-4xl">
            An extra pair of eyes when you need one.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[15.5px] leading-relaxed text-ink-secondary">
            Ask about an error, a failing test, or a piece of unfamiliar code.
            The assistant reads the surrounding context in your workspace and
            responds with a concrete explanation — not a generic search
            result.
          </p>
          <p className="mt-5 text-[13px] text-ink-tertiary">
            Preview of the assistant interface. Shown to illustrate how it
            will work inside the workspace.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2 border-b border-border pb-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-dim text-accent-soft">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2l1.2 3.8L13 7l-3.8 1.2L8 12l-1.2-3.8L3 7l3.8-1.2L8 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-[13px] font-medium text-ink">AI Assistant</p>
            <span className="ml-auto font-mono text-[10px] text-ink-tertiary">auth-service</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-sm bg-surface-raised px-4 py-3">
              <p className="text-[13.5px] text-ink">Why is my API returning a 401?</p>
            </div>

            <div className="max-w-[92%] rounded-lg rounded-tl-sm border border-border bg-canvas/60 px-4 py-3">
              <p className="text-[13.5px] leading-relaxed text-ink-secondary">
                Your authentication middleware is running after the protected
                route. Move the middleware before the route so the request is
                authenticated before the handler executes.
              </p>
            </div>

            <div className="max-w-[92%] overflow-x-auto rounded-lg border border-border bg-canvas px-4 py-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-tertiary">
                Suggested fix
              </p>
              <pre className="font-mono text-[12px] leading-relaxed text-ink-secondary">
<span className="text-signal-blocked">- router.get("/invoices", getInvoices)</span>{"\n"}
<span className="text-signal-blocked">- router.use(authenticate)</span>{"\n"}
<span className="text-signal-merged">+ router.use(authenticate)</span>{"\n"}
<span className="text-signal-merged">+ router.get("/invoices", getInvoices)</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
