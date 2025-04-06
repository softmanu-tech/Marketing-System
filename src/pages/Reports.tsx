
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  PieChart, Pie, Cell, ResponsiveContainer, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from "recharts";
import { Download, Share, RefreshCw } from "lucide-react";

const monthlyData = [
  { name: 'Jan', campaigns: 4, leads: 230, conversions: 24 },
  { name: 'Feb', campaigns: 5, leads: 285, conversions: 32 },
  { name: 'Mar', campaigns: 6, leads: 350, conversions: 45 },
  { name: 'Apr', campaigns: 3, leads: 275, conversions: 30 },
  { name: 'May', campaigns: 4, leads: 310, conversions: 35 },
  { name: 'Jun', campaigns: 7, leads: 460, conversions: 58 },
  { name: 'Jul', campaigns: 5, leads: 390, conversions: 48 },
  { name: 'Aug', campaigns: 6, leads: 410, conversions: 52 },
  { name: 'Sep', campaigns: 8, leads: 520, conversions: 68 },
  { name: 'Oct', campaigns: 7, leads: 480, conversions: 62 },
  { name: 'Nov', campaigns: 5, leads: 420, conversions: 55 },
  { name: 'Dec', campaigns: 9, leads: 580, conversions: 75 },
];

const channelData = [
  { name: 'Email', value: 40 },
  { name: 'Social', value: 25 },
  { name: 'Paid Ads', value: 20 },
  { name: 'Organic', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Reports: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground mt-1">
              Analyze your marketing performance
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Share className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
            <Button className="bg-marketing-primary hover:bg-marketing-primary/90">
              <RefreshCw className="mr-2 h-4 w-4" /> Generate Report
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Tabs defaultValue="performance" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="leads">Leads</TabsTrigger>
              <TabsTrigger value="roi">ROI</TabsTrigger>
            </TabsList>
          
            <div className="mt-6">
              {/* Moved TabsContent inside the Tabs component */}
              <TabsContent value="performance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                    <CardDescription>
                      Annual marketing performance metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Line yAxisId="left" type="monotone" dataKey="leads" stroke="#3B82F6" name="Leads Generated" />
                          <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#10B981" name="Conversions" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <p className="text-sm text-muted-foreground">
                      Total annual leads: 4,710
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Total conversions: 584
                    </p>
                  </CardFooter>
                </Card>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Lead Sources</CardTitle>
                      <CardDescription>
                        Distribution of leads by marketing channel
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={channelData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={100}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                              {channelData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Campaign Performance</CardTitle>
                      <CardDescription>
                        Monthly campaign performance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="campaigns" fill="#3B82F6" name="Campaigns" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="campaigns">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Reports</CardTitle>
                    <CardDescription>View detailed campaign performance data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-10">
                      Campaign reporting data will be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="leads">
                <Card>
                  <CardHeader>
                    <CardTitle>Lead Reports</CardTitle>
                    <CardDescription>Track lead generation and conversion metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-10">
                      Lead reporting data will be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="roi">
                <Card>
                  <CardHeader>
                    <CardTitle>ROI Analysis</CardTitle>
                    <CardDescription>Measure the return on your marketing investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-10">
                      ROI analysis data will be displayed here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
          
          <div className="flex gap-2">
            <Select defaultValue="year">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
                <SelectItem value="6month">Last 6 months</SelectItem>
                <SelectItem value="year">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-xs text-green-600 mt-1">+8 from last period</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3,842</div>
              <p className="text-xs text-green-600 mt-1">+12% from last period</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12.4%</div>
              <p className="text-xs text-green-600 mt-1">+2.1% from last period</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
