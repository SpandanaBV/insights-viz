import { BarChart3, TrendingUp, Users, Target, Download, RefreshCw, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useExport } from "@/hooks/use-export";

export const DashboardHeader = () => {
  const { exportToPDF } = useExport();

  const handleExportDashboard = () => {
    exportToPDF("dashboard-content", "dashboard-report");
  };
  return (
    <div className="flex justify-between items-start">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="gradient-primary p-3 rounded-xl shadow-glow">
            <BarChart3 className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground">Welcome back! Here's your analytics overview.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent-success" />
            <span>Real-time updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>Live data</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-accent-warning" />
            <span>Auto-refresh</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <Button variant="outline" size="sm">
          <Bell className="h-4 w-4" />
        </Button>
        
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4" />
        </Button>
        
        <Button size="sm" onClick={handleExportDashboard}>
          <Download className="h-4 w-4 mr-2" />
          Export PDF
        </Button>
      </div>
    </div>
  );
};