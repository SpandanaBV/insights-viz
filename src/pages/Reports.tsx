import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar, BarChart } from "lucide-react"

const Reports = () => {
  const reports = [
    { 
      id: 1, 
      name: "Monthly Revenue Report", 
      description: "Comprehensive revenue analysis for the current month",
      date: "2024-01-15",
      type: "Financial"
    },
    { 
      id: 2, 
      name: "User Engagement Report", 
      description: "User activity and engagement metrics",
      date: "2024-01-14",
      type: "Analytics"
    },
    { 
      id: 3, 
      name: "Conversion Funnel Analysis", 
      description: "Detailed conversion funnel performance",
      date: "2024-01-13",
      type: "Marketing"
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{report.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                </div>
                <BarChart className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {report.date}
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Reports