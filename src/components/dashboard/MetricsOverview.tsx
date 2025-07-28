import { MetricCard } from "@/components/ui/metric-card";
import { MetricCardSkeleton } from "@/components/ui/loading-skeleton";
import { useMetricsData } from "@/hooks/use-api-data";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

export const MetricsOverview = () => {
  const { metrics } = useMetricsData();

  const metricsConfig = [
    {
      title: "Total Revenue",
      value: metrics.revenue.value,
      change: metrics.revenue.change,
      trend: metrics.revenue.trend,
      icon: DollarSign,
      gradient: "primary" as const,
    },
    {
      title: "Active Users",
      value: metrics.users.value,
      change: metrics.users.change,
      trend: metrics.users.trend,
      icon: Users,
      gradient: "info" as const,
    },
    {
      title: "Conversions",
      value: metrics.conversions.value,
      change: metrics.conversions.change,
      trend: metrics.conversions.trend,
      icon: ShoppingCart,
      gradient: "warning" as const,
    },
    {
      title: "Growth Rate",
      value: metrics.growth.value,
      change: metrics.growth.change,
      trend: metrics.growth.trend,
      icon: TrendingUp,
      gradient: "success" as const,
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Key Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsConfig.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </section>
  );
};