import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Growth = () => {
  const metrics = [
    { name: "Monthly Growth Rate", value: "+23.8%", trend: "up", description: "Compared to last month" },
    { name: "User Acquisition", value: "+156", trend: "up", description: "New users this week" },
    { name: "Churn Rate", value: "-2.1%", trend: "down", description: "Improved retention" },
    { name: "Revenue Growth", value: "+45.2%", trend: "up", description: "Year over year" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Growth Metrics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{metric.name}</CardTitle>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-500" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className={cn(
                  "text-3xl font-bold",
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                )}>
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Growth