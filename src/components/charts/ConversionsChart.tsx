import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Organic Search', value: 35.2, count: 1142 },
  { name: 'Paid Ads', value: 28.7, count: 932 },
  { name: 'Social Media', value: 18.1, count: 588 },
  { name: 'Email Marketing', value: 12.3, count: 399 },
  { name: 'Direct Traffic', value: 5.7, count: 186 },
];

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--accent-success))',
  'hsl(var(--accent-info))',
  'hsl(var(--accent-warning))',
  'hsl(var(--secondary))',
];

export const ConversionsChart = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
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