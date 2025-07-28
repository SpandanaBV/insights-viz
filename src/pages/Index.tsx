import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { DataTableSection } from "@/components/dashboard/DataTableSection";

const Index = () => {
  return (
    <div id="dashboard-content" className="space-y-8">
      <DashboardHeader />
      <div className="animate-slide-up">
        <MetricsOverview />
      </div>
      <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <ChartsSection />
      </div>
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <DataTableSection />
      </div>
    </div>
  );
};

export default Index;