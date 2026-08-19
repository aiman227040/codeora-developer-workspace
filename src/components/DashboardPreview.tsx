import { useInView } from "../hooks/useInView";
import DashboardFrame from "./dashboard/DashboardFrame";
import OverviewView from "./dashboard/OverviewView";

export default function DashboardPreview() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={`h-[500px] w-full sm:h-[560px] ${
        inView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: "80ms" }}
    >
      <DashboardFrame activeItem="Overview">
        <OverviewView />
      </DashboardFrame>
    </div>
  );
}
