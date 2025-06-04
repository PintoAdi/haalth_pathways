
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface HealthcareChartProps {
  data: ChartData[];
}

export const HealthcarePieChart = ({ data }: HealthcareChartProps) => {
  return (
    <Card className="backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
      <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 pb-6">
        <CardTitle className="text-xl font-semibold text-gray-900 tracking-tight">Healthcare Preference Distribution</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                border: 'none', 
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                backdropFilter: 'blur(16px)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const HealthcareBarChart = ({ data }: HealthcareChartProps) => {
  return (
    <Card className="backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02]">
      <CardHeader className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 pb-6">
        <CardTitle className="text-xl font-semibold text-gray-900 tracking-tight">Healthcare Preferences Comparison</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                border: 'none', 
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                backdropFilter: 'blur(16px)'
              }}
            />
            <Legend />
            <Bar 
              dataKey="value" 
              fill="#3B82F6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
