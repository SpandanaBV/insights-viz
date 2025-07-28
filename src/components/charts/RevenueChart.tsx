import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 65000, target: 60000 },
  { month: 'Feb', revenue: 72000, target: 65000 },
  { month: 'Mar', revenue: 68000, target: 70000 },
  { month: 'Apr', revenue: 85000, target: 75000 },
  { month: 'May', revenue: 91000, target: 80000 },
  { month: 'Jun', revenue: 87000, target: 85000 },
  { month: 'Jul', revenue: 95000, target: 90000 },
  { month: 'Aug', revenue: 102000, target: 95000 },
  { month: 'Sep', revenue: 98000, target: 100000 },
  { month: 'Oct', revenue: 115000, target: 105000 },
  { month: 'Nov', revenue: 125000, target: 110000 },
  { month: 'Dec', revenue: 132000, target: 120000 },
];

export const RevenueChart = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="month" 
            className="text-xs text-muted-foreground"
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            className="text-xs text-muted-foreground"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip 
            formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'revenue' ? 'Revenue' : 'Target']}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ r: 4, fill: 'hsl(var(--primary))' }}
            activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2, fill: 'white' }}
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={2}
            strokeDasharray="8 8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};