import DemoBadge from "./DemoBadge";

export default function AIAssistantView() {
  return (
    <div className="flex h-full w-full max-w-[640px] flex-col overflow-y-auto p-4 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">AI Assistant</p>
          <p className="text-xs text-ink-tertiary">Scoped to billing-service</p>
        </div>
        <DemoBadge />
      </div>

      <div className="flex flex-1 flex-col justify-end gap-3">
        <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-surface-raised px-3.5 py-2.5">
          <p className="text-[12.5px] text-ink">Why is my API returning a 401?</p>
        </div>

        <div className="max-w-[90%] rounded-lg rounded-tl-sm border border-border bg-canvas/50 px-3.5 py-2.5">
          <p className="text-[12.5px] leading-relaxed text-ink-secondary">
            Your authentication middleware runs after the protected route. Move
            it before the route so requests are verified before the handler
            executes.
          </p>
          <pre className="mt-2.5 overflow-x-auto rounded-md bg-canvas p-2.5 font-mono text-[11px] leading-relaxed text-ink-secondary">
{`router.use(authenticate)
router.get("/invoices", getInvoices)`}
          </pre>
        </div>
      </div>
    </div>
  );
}
