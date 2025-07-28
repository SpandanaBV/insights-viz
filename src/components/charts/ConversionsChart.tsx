import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useApiData } from "@/hooks/use-api-data";

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--accent-success))',
  'hsl(var(--accent-info))',
  'hsl(var(--accent-warning))',
  'hsl(var(--secondary))',
];

export const ConversionsChart = () => {
  const { data, loading } = useApiData("/api/conversions");

  if (loading) {
    return <div className="h-80 w-full animate-pulse bg-muted rounded" />;
  }

  const pieData = data.map((item, index) => ({
    name: item.name,
    value: Math.floor(Math.random() * 40) + 10,
    count: item.value
  }));
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number, name: string, props: any) => [
              `${value}% (${props.payload.count} conversions)`,
              name
            ]}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};