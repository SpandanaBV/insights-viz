import { BarChart3, TrendingUp, Users, Target } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="gradient-primary p-3 rounded-xl shadow-glow">
          <BarChart3 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          ADmyBRAND Insights
        </h1>
      </div>
      
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Advanced analytics platform for digital marketing agencies
      </p>
      
      <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-accent-success" />
          <span>Real-time insights</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <span>User analytics</span>
        </div>
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-accent-warning" />
          <span>Conversion tracking</span>
        </div>
      </div>
    </div>
  );
};