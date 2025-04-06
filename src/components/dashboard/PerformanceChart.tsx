
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    emails: 4000,
    opens: 2400,
    clicks: 800,
  },
  {
    name: "Feb",
    emails: 3500,
    opens: 2210,
    clicks: 720,
  },
  {
    name: "Mar",
    emails: 4200,
    opens: 2290,
    clicks: 750,
  },
  {
    name: "Apr",
    emails: 4500,
    opens: 2600,
    clicks: 900,
  },
  {
    name: "May",
    emails: 4800,
    opens: 2700,
    clicks: 1100,
  },
  {
    name: "Jun",
    emails: 5300,
    opens: 3100,
    clicks: 1300,
  },
  {
    name: "Jul",
    emails: 5800,
    opens: 3400,
    clicks: 1450,
  },
];

const PerformanceChart: React.FC = () => {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="emails"
                stroke="#0891B2"
                fill="#0891B2"
                fillOpacity={0.2}
                name="Emails Sent"
              />
              <Area
                type="monotone"
                dataKey="opens"
                stroke="#0EA5E9"
                fill="#0EA5E9"
                fillOpacity={0.2}
                name="Opens"
              />
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="#7DD3FC"
                fill="#7DD3FC"
                fillOpacity={0.2}
                name="Clicks"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
