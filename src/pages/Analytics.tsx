
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend, AreaChart, Area } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const analyticsData = [
  { name: 'Jan', email: 400, social: 240, ads: 320 },
  { name: 'Feb', email: 300, social: 198, ads: 280 },
  { name: 'Mar', email: 200, social: 980, ads: 420 },
  { name: 'Apr', email: 278, social: 390, ads: 380 },
  { name: 'May', email: 189, social: 480, ads: 360 },
  { name: 'Jun', email: 239, social: 380, ads: 310 },
  { name: 'Jul', email: 349, social: 430, ads: 290 },
  { name: 'Aug', email: 279, social: 510, ads: 340 },
  { name: 'Sep', email: 349, social: 330, ads: 410 },
  { name: 'Oct', email: 439, social: 450, ads: 390 },
  { name: 'Nov', email: 578, social: 410, ads: 430 },
  { name: 'Dec', email: 629, social: 490, ads: 480 },
];

const campaignPerformance = [
  { name: 'Summer Sale', open: 65, click: 24, conversion: 12 },
  { name: 'New Product', open: 72, click: 32, conversion: 18 },
  { name: 'Holiday', open: 80, click: 45, conversion: 24 },
  { name: 'Black Friday', open: 92, click: 58, conversion: 32 },
  { name: 'End of Season', open: 68, click: 30, conversion: 15 },
];

const Analytics: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Track and analyze your marketing performance
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <Tabs defaultValue="overview" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-2">
            <Select defaultValue="90">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="60">Last 60 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
                <SelectItem value="year">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Channel Performance</CardTitle>
            <CardDescription>
              Comparing performance across marketing channels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="email" stackId="1" stroke="#1E40AF" fill="#3B82F6" />
                  <Area type="monotone" dataKey="social" stackId="1" stroke="#0E7490" fill="#06B6D4" />
                  <Area type="monotone" dataKey="ads" stackId="1" stroke="#047857" fill="#10B981" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>
                Performance metrics for your top campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={campaignPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="open" fill="#3B82F6" name="Open Rate %" />
                    <Bar dataKey="click" fill="#06B6D4" name="Click Rate %" />
                    <Bar dataKey="conversion" fill="#10B981" name="Conversion %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Engagement Trends</CardTitle>
              <CardDescription>
                Month over month engagement metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="email" stroke="#3B82F6" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="social" stroke="#06B6D4" />
                    <Line type="monotone" dataKey="ads" stroke="#10B981" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
