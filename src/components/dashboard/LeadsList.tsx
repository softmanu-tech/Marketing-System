
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  dateAdded: string;
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    source: "Website Form",
    status: "new",
    dateAdded: "Today",
  },
  {
    id: "2",
    name: "Michael Thompson",
    email: "michael.t@example.com",
    source: "LinkedIn",
    status: "contacted",
    dateAdded: "Yesterday",
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily.d@example.com",
    source: "Referral",
    status: "qualified",
    dateAdded: "2 days ago",
  },
  {
    id: "4",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    source: "Trade Show",
    status: "converted",
    dateAdded: "Last week",
  },
  {
    id: "5",
    name: "Jessica Brown",
    email: "jessica.b@example.com",
    source: "Cold Email",
    status: "lost",
    dateAdded: "2 weeks ago",
  },
];

const getStatusColor = (status: Lead["status"]) => {
  switch (status) {
    case "new":
      return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
    case "contacted":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400";
    case "qualified":
      return "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-400";
    case "converted":
      return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
    case "lost":
      return "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400";
  }
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const LeadsList: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>
              New contacts that need your attention
            </CardDescription>
          </div>
          <Button className="bg-marketing-primary hover:bg-marketing-primary/90">
            <UserPlus className="mr-2 h-4 w-4" /> Add Lead
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Added</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-marketing-primary/10 text-marketing-primary">
                        {getInitials(lead.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {lead.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{lead.source}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(lead.status)}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{lead.dateAdded}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeadsList;
