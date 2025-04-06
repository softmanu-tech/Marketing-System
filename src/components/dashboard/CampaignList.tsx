
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Play, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const CampaignList: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>
              Manage and monitor your marketing campaigns
            </CardDescription>
          </div>
          <Button className="bg-marketing-primary hover:bg-marketing-primary/90">
            New Campaign
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Audience</TableHead>
              <TableHead className="text-right">Performance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status.charAt(0).toUpperCase() +
                      campaign.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{campaign.type}</TableCell>
                <TableCell>{campaign.audience}</TableCell>
                <TableCell className="text-right">
                  {campaign.status === "draft" || campaign.status === "scheduled" ? (
                    "Not started"
                  ) : (
                    <span>
                      {((campaign.opens / campaign.sent) * 100).toFixed(1)}% open rate
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Play className="mr-2 h-4 w-4" />
                        Run Now
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
      </CardContent>
    </Card>
  );
};

export default CampaignList;
