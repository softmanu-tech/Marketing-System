
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  ChevronDown,
  Copy,
  Edit,
  Filter,
  Plus,
  Search,
  Trash,
} from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  status: "draft" | "scheduled" | "active" | "completed" | "paused";
  type: string;
  audience: string;
  sent: number;
  opens: number;
  clicks: number;
  lastUpdated: string;
  scheduleDate?: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Summer Sale Announcement",
    status: "active",
    type: "Email",
    audience: "All Customers",
    sent: 2500,
    opens: 1200,
    clicks: 385,
    lastUpdated: "2 hours ago",
  },
  {
    id: "2",
    name: "New Product Launch",
    status: "scheduled",
    type: "Email + SMS",
    audience: "Product Interests",
    sent: 0,
    opens: 0,
    clicks: 0,
    lastUpdated: "Yesterday",
    scheduleDate: "Jun 15, 2025",
  },
  {
    id: "3",
    name: "Customer Feedback Survey",
    status: "draft",
    type: "Email",
    audience: "Recent Purchases",
    sent: 0,
    opens: 0,
    clicks: 0,
    lastUpdated: "3 days ago",
  },
  {
    id: "4",
    name: "Monthly Newsletter",
    status: "completed",
    type: "Email",
    audience: "Newsletter Subscribers",
    sent: 5280,
    opens: 2340,
    clicks: 890,
    lastUpdated: "Last week",
  },
  {
    id: "5",
    name: "Abandoned Cart Recovery",
    status: "paused",
    type: "Email",
    audience: "Cart Abandoners",
    sent: 1432,
    opens: 720,
    clicks: 215,
    lastUpdated: "2 days ago",
  },
  {
    id: "6",
    name: "Holiday Special Promotion",
    status: "draft",
    type: "Email + SMS",
    audience: "All Customers",
    sent: 0,
    opens: 0,
    clicks: 0,
    lastUpdated: "5 days ago",
  },
  {
    id: "7",
    name: "Customer Loyalty Program",
    status: "active",
    type: "Email",
    audience: "Repeat Customers",
    sent: 1850,
    opens: 920,
    clicks: 410,
    lastUpdated: "1 day ago",
  },
  {
    id: "8",
    name: "Product Update Announcement",
    status: "scheduled",
    type: "Email",
    audience: "Product Users",
    sent: 0,
    opens: 0,
    clicks: 0,
    lastUpdated: "4 days ago",
    scheduleDate: "May 28, 2025",
  },
];

const getStatusColor = (status: Campaign["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
    case "scheduled":
      return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
    case "draft":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400";
    case "completed":
      return "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-400";
    case "paused":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400";
  }
};

const Campaigns: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
            <p className="text-muted-foreground mt-1">
              Create and manage your marketing campaigns
            </p>
          </div>
          <Button className="bg-marketing-primary hover:bg-marketing-primary/90">
            <Plus className="mr-2 h-4 w-4" /> New Campaign
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  <TabsTrigger value="draft">Drafts</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search campaigns..."
                      className="pl-8 w-[250px]"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Audience</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockCampaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">
                          {campaign.name}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status.charAt(0).toUpperCase() +
                              campaign.status.slice(1)}
                          </Badge>
                          {campaign.scheduleDate && (
                            <div className="flex items-center mt-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {campaign.scheduleDate}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{campaign.type}</TableCell>
                        <TableCell>{campaign.audience}</TableCell>
                        <TableCell>
                          {campaign.status === "draft" ||
                          campaign.status === "scheduled" ? (
                            <span className="text-muted-foreground text-sm">
                              Not started
                            </span>
                          ) : (
                            <div>
                              <div className="mb-1">
                                <span className="text-sm font-medium">
                                  Open rate:{" "}
                                </span>
                                <span className="text-sm">
                                  {((campaign.opens / campaign.sent) * 100).toFixed(
                                    1
                                  )}
                                  %
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-medium">
                                  Click rate:{" "}
                                </span>
                                <span className="text-sm">
                                  {((campaign.clicks / campaign.sent) * 100).toFixed(
                                    1
                                  )}
                                  %
                                </span>
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{campaign.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                className="h-8 w-8 p-0"
                              >
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="cursor-pointer">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer">
                                <Copy className="mr-2 h-4 w-4" />
                                Duplicate
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="active" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Audience</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockCampaigns
                      .filter((campaign) => campaign.status === "active")
                      .map((campaign) => (
                        <TableRow key={campaign.id}>
                          <TableCell className="font-medium">
                            {campaign.name}
                          </TableCell>
                          <TableCell>{campaign.type}</TableCell>
                          <TableCell>{campaign.audience}</TableCell>
                          <TableCell>
                            <div>
                              <div className="mb-1">
                                <span className="text-sm font-medium">
                                  Open rate:{" "}
                                </span>
                                <span className="text-sm">
                                  {((campaign.opens / campaign.sent) * 100).toFixed(
                                    1
                                  )}
                                  %
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-medium">
                                  Click rate:{" "}
                                </span>
                                <span className="text-sm">
                                  {((campaign.clicks / campaign.sent) * 100).toFixed(
                                    1
                                  )}
                                  %
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{campaign.lastUpdated}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TabsContent>

              {/* Repeat similar structure for other tabs (scheduled, draft, completed) */}
              <TabsContent value="scheduled" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Showing scheduled campaigns...
                </div>
              </TabsContent>
              
              <TabsContent value="draft" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Showing draft campaigns...
                </div>
              </TabsContent>
              
              <TabsContent value="completed" className="m-0">
                <div className="p-4 text-center text-muted-foreground">
                  Showing completed campaigns...
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
