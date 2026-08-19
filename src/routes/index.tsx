import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import AIAssistant from "@/components/AIAssistant";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DeveloperModeEasterEgg from "@/components/DeveloperModeEasterEgg";
import { useKonamiCode } from "@/hooks/useKonamiCode";

const title = "Codeora — Build better software. Without the busywork.";
const description =
  "Codeora brings projects, tasks, development activity, and AI assistance into one focused workspace.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const devMode = useKonamiCode(6000);

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <AIAssistant />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <DeveloperModeEasterEgg active={devMode} />
    </div>
  );
}
