import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  gradient?: "primary" | "success" | "warning" | "info";
}

const gradientClasses = {
  primary: "from-primary/10 to-primary/5 border-primary/20",
  success: "from-accent-success/10 to-accent-success/5 border-accent-success/20",
  warning: "from-accent-warning/10 to-accent-warning/5 border-accent-warning/20",
  info: "from-accent-info/10 to-accent-info/5 border-accent-info/20",
};

const iconColors = {
  primary: "text-primary",
  success: "text-accent-success",
  warning: "text-accent-warning",
  info: "text-accent-info",
};

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon, 
  gradient = "primary" 
}: MetricCardProps) => {
  return (
    <Card className={cn(
      "hover:shadow-hover transition-all duration-300 hover:scale-105 bg-gradient-to-br",
      gradientClasses[gradient]
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <Icon className={cn("h-5 w-5", iconColors[gradient])} />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-2">
        <div className="text-2xl font-bold text-foreground">
          {value}
        </div>
        
        <div className="flex items-center gap-1 text-sm">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-accent-success" />
          ) : (
            <TrendingDown className="h-4 w-4 text-accent-danger" />
          )}
          <span className={cn(
            "font-medium",
            trend === "up" ? "text-accent-success" : "text-accent-danger"
          )}>
            {change}
          </span>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
};