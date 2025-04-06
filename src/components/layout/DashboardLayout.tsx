
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChart3,
  Home,
  Mail,
  MessageSquare,
  PieChart,
  Users,
  Plus,
  Menu,
  X,
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => (
  <Link to={to}>
    <Button
      variant="ghost"
      className={`w-full justify-start mb-1 ${
        isActive
          ? "bg-marketing-primary text-white hover:bg-marketing-primary hover:text-white"
          : "hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: "mr-2 h-4 w-4",
      })}
      {label}
    </Button>
  </Link>
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const routes = [
    { path: "/", label: "Dashboard", icon: <Home /> },
    { path: "/campaigns", label: "Campaigns", icon: <Mail /> },
    { path: "/analytics", label: "Analytics", icon: <BarChart3 /> },
    { path: "/audiences", label: "Audiences", icon: <Users /> },
    { path: "/leads", label: "Leads", icon: <MessageSquare /> },
    { path: "/reports", label: "Reports", icon: <PieChart /> },
  ];

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 ease-in-out bg-background border-r md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center border-b px-4">
          <h1 className="text-xl font-bold text-marketing-primary">Ignition</h1>
        </div>
        <ScrollArea className="h-[calc(100vh-3.5rem)] p-4">
          <div className="space-y-4">
            <div className="space-y-1">
              {routes.map((route) => (
                <SidebarLink
                  key={route.path}
                  to={route.path}
                  icon={route.icon}
                  label={route.label}
                  isActive={location.pathname === route.path}
                />
              ))}
            </div>
            <div className="pt-4">
              <Button className="w-full bg-marketing-primary hover:bg-marketing-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                New Campaign
              </Button>
            </div>
          </div>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 md:pl-64">
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
