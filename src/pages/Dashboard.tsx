
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import CampaignList from "@/components/dashboard/CampaignList";
import LeadsList from "@/components/dashboard/LeadsList";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import {
  BarChart3,
  Mail,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to your marketing dashboard
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Campaigns"
            value="24"
            description="Active: 8"
            icon={<Mail className="h-5 w-5" />}
            trend={{ value: 12, direction: "up" }}
          />
          <StatCard
            title="Total Leads"
            value="3,842"
            description="Last 30 days: +124"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 8, direction: "up" }}
          />
          <StatCard
            title="Open Rate"
            value="38.5%"
            description="Industry avg: 25.2%"
            icon={<Zap className="h-5 w-5" />}
            trend={{ value: 5, direction: "up" }}
          />
          <StatCard
            title="Click Rate"
            value="12.8%"
            description="Industry avg: 8.1%"
            icon={<BarChart3 className="h-5 w-5" />}
            trend={{ value: 3, direction: "down" }}
          />
        </div>

        <PerformanceChart />

        <div className="grid gap-4 md:grid-cols-2">
          <CampaignList />
          <LeadsList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
