
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Download, UserPlus } from "lucide-react";

const audienceData = [
  { name: 'New Subscribers', value: 1250, color: '#3B82F6' },
  { name: 'Active Customers', value: 1800, color: '#06B6D4' },
  { name: 'Returning Customers', value: 800, color: '#10B981' },
  { name: 'Inactive Users', value: 950, color: '#6B7280' },
];

const segmentData = [
  { id: 1, name: "All Customers", count: 3842, description: "All customers in the database", lastUsed: "2 hours ago" },
  { id: 2, name: "Product Interests", count: 1475, description: "Customers who showed interest in product pages", lastUsed: "Yesterday" },
  { id: 3, name: "Recent Purchases", count: 842, description: "Customers who purchased in last 30 days", lastUsed: "3 days ago" },
  { id: 4, name: "Newsletter Subscribers", count: 2643, description: "Active newsletter subscribers", lastUsed: "Last week" },
  { id: 5, name: "Cart Abandoners", count: 376, description: "Customers who abandoned their cart", lastUsed: "2 days ago" },
];

const COLORS = ['#3B82F6', '#06B6D4', '#10B981', '#6B7280'];

const Audiences: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Audiences</h1>
            <p className="text-muted-foreground mt-1">
              Manage and segment your audience
            </p>
          </div>
          <Button className="bg-marketing-primary hover:bg-marketing-primary/90">
            <UserPlus className="mr-2 h-4 w-4" /> Create Segment
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Audience Overview</CardTitle>
              <CardDescription>
                Distribution of your audience by segment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={audienceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {audienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Total: 4,800 users</div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Export Data
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Audience Growth</CardTitle>
              <CardDescription>
                Your audience has grown by 12% in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">New Subscribers</div>
                  <div className="text-sm text-green-600">+320</div>
                </div>
                <div className="h-2 bg-muted rounded overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Engagement Rate</div>
                  <div className="text-sm text-green-600">+8%</div>
                </div>
                <div className="h-2 bg-muted rounded overflow-hidden">
                  <div className="bg-cyan-500 h-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Conversion Rate</div>
                  <div className="text-sm text-green-600">+5%</div>
                </div>
                <div className="h-2 bg-muted rounded overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '28%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Unsubscribe Rate</div>
                  <div className="text-sm text-red-600">-2%</div>
                </div>
                <div className="h-2 bg-muted rounded overflow-hidden">
                  <div className="bg-gray-500 h-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Audience Segments</CardTitle>
            <CardDescription>
              View and manage all your audience segments
            </CardDescription>
            <div className="flex items-center gap-2 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search segments..."
                  className="pl-8 w-full"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> New Segment
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Audience Size</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {segmentData.map((segment) => (
                  <TableRow key={segment.id}>
                    <TableCell className="font-medium">{segment.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{segment.count.toLocaleString()} users</Badge>
                    </TableCell>
                    <TableCell>{segment.description}</TableCell>
                    <TableCell>{segment.lastUsed}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">Manage</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Audiences;
