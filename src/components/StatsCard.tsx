
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: number;
  percentage: number;
  color: string;
  icon: React.ReactNode;
}

export const StatsCard = ({ title, value, percentage, color, icon }: StatsCardProps) => {
  return (
    <Card className="group backdrop-blur-xl bg-white/70 border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-[1.05] cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 pt-6 px-6">
        <CardTitle className="text-sm font-medium text-gray-600 tracking-wide uppercase">{title}</CardTitle>
        <div className={`p-3 rounded-2xl ${color} group-hover:scale-110 transition-transform duration-500`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="text-3xl font-bold mb-2 text-gray-900 tracking-tight">{value}</div>
        <div className="text-sm text-gray-500 font-medium">
          {percentage.toFixed(1)}% of total responses
        </div>
      </CardContent>
    </Card>
  );
};
