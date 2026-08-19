import Button from "./CtaButton";
import { scrollToSection } from "@/lib/scroll";

export default function FinalCTA() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="section-shell flex flex-col items-center text-center">
        <h2 className="max-w-[20ch] text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink sm:max-w-none sm:text-4xl">
          Less managing. More building.
        </h2>
        <p className="mt-4 max-w-[38ch] text-[15.5px] leading-relaxed text-ink-secondary">
          Give your development workflow a place to flow.
        </p>
        <Button
          variant="primary"
          className="mt-8"
          onClick={() => scrollToSection("product")}
        >
          Start Building →
        </Button>
      </div>
    </section>
  );
}
