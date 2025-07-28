import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { UsersChart } from "@/components/charts/UsersChart";
import { ConversionsChart } from "@/components/charts/ConversionsChart";

export const ChartsSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Analytics Overview</h2>
      
      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="revenue">Revenue Trends</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Revenue Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle>Revenue by Channel</CardTitle>
              </CardHeader>
              <CardContent>
                <ConversionsChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-6">
          <Card className="shadow-card hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <UsersChart />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="conversions" className="space-y-6">
          <Card className="shadow-card hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <ConversionsChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};