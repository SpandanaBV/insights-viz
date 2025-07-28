import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { useExport } from "@/hooks/use-export"
import { useApiData } from "@/hooks/use-api-data"
import { ChartSkeleton } from "@/components/ui/loading-skeleton"
import { Download, RefreshCw } from "lucide-react"
import { DateRange } from "react-day-picker"
import { RevenueChart } from "@/components/charts/RevenueChart"
import { UsersChart } from "@/components/charts/UsersChart"

const Analytics = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)
  const { data, loading, refresh } = useApiData("/api/analytics")
  const { exportToPDF, exportToCSV } = useExport()

  const handleExportPDF = () => {
    exportToPDF("analytics-content", "analytics-report")
  }

  const handleExportCSV = () => {
    exportToCSV(data, "analytics-data")
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Analytics</h1>
          <div className="flex gap-2">
            <ChartSkeleton />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div id="analytics-content" className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="flex gap-2">
          <DateRangePicker 
            date={dateRange} 
            onDateChange={setDateRange}
          />
          <Button variant="outline" onClick={refresh}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            CSV
          </Button>
          <Button onClick={handleExportPDF}>
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Advanced Revenue Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Engagement Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <UsersChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Analytics