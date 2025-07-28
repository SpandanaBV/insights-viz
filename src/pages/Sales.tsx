import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const Sales = () => {
  const sales = [
    { id: 1, product: "Premium Plan", amount: 99, customer: "Acme Corp", status: "completed" },
    { id: 2, product: "Basic Plan", amount: 29, customer: "StartupXYZ", status: "pending" },
    { id: 3, product: "Enterprise Plan", amount: 299, customer: "BigCorp Inc", status: "completed" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Sales</h1>
      
      <div className="space-y-4">
        {sales.map((sale) => (
          <Card key={sale.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{sale.product}</CardTitle>
                  <p className="text-sm text-muted-foreground">{sale.customer}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${sale.amount}</div>
                  <Badge variant={sale.status === "completed" ? "default" : "secondary"}>
                    {sale.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Sales