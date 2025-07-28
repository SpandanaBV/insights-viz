import { MetricCard } from "@/components/ui/metric-card";
import { DollarSign, Users, Target, TrendingUp } from "lucide-react";

export const MetricsOverview = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Key Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$847,521"
          change="+12.5%"
          trend="up"
          icon={DollarSign}
          gradient="primary"
        />
        
        <MetricCard
          title="Active Users"
          value="24,847"
          change="+8.3%"
          trend="up"
          icon={Users}
          gradient="info"
        />
        
        <MetricCard
          title="Conversions"
          value="3,247"
          change="+15.7%"
          trend="up"
          icon={Target}
          gradient="success"
        />
        
        <MetricCard
          title="Growth Rate"
          value="23.4%"
          change="+2.1%"
          trend="up"
          icon={TrendingUp}
          gradient="warning"
        />
      </div>
    </section>
  );
};