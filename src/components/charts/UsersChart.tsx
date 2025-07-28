import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', newUsers: 245, returningUsers: 892 },
  { day: 'Tue', newUsers: 312, returningUsers: 1024 },
  { day: 'Wed', newUsers: 198, returningUsers: 987 },
  { day: 'Thu', newUsers: 421, returningUsers: 1156 },
  { day: 'Fri', newUsers: 387, returningUsers: 1234 },
  { day: 'Sat', newUsers: 289, returningUsers: 891 },
  { day: 'Sun', newUsers: 203, returningUsers: 756 },
];

export const UsersChart = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="day" 
            className="text-xs text-muted-foreground"
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            className="text-xs text-muted-foreground"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            formatter={(value: number, name: string) => [
              value.toLocaleString(), 
              name === 'newUsers' ? 'New Users' : 'Returning Users'
            ]}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Bar 
            dataKey="newUsers" 
            fill="hsl(var(--primary))" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="returningUsers" 
            fill="hsl(var(--accent-info))" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};