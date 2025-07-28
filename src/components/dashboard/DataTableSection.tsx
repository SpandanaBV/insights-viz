import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

export const DataTableSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Campaign Performance</h2>
      
      <Card className="shadow-card hover:shadow-hover transition-all duration-300">
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable />
        </CardContent>
      </Card>
    </section>
  );
};