import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  MessageSquare, 
  Calendar, 
  ShoppingBag, 
  BarChart, 
  Settings,
  Zap,
  CreditCard,
  Users,
  LogOut,
  ChevronDown
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink, useLocation } from "react-router-dom";
import tableaiLogo from "@/assets/tableai-logo.png";

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Inbox", url: "/dashboard/inbox", icon: MessageSquare },
  { title: "Reservations", url: "/dashboard/reservations", icon: Calendar },
  { title: "Orders", url: "/dashboard/orders", icon: ShoppingBag },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart },
  { title: "AI Settings", url: "/dashboard/ai-settings", icon: Zap },
  { title: "Integrations", url: "/dashboard/integrations", icon: Settings },
  { title: "Team", url: "/dashboard/team", icon: Users },
  { title: "Billing", url: "/dashboard/billing", icon: CreditCard },
];

interface DashboardSidebarProps {
  children?: React.ReactNode;
}

function DashboardSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return currentPath === "/dashboard";
    }
    return currentPath.startsWith(path);
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-accent text-accent-foreground font-medium" : "hover:bg-accent/50";

  const handleLogout = () => {
    // TODO: Implement AWS Cognito logout
    window.location.href = '/';
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <img src={tableaiLogo} alt="TableAI" className="w-8 h-8" />
            {!collapsed && (
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                TableAI
              </span>
            )}
          </div>
        </div>

        {/* Business Selector */}
        {!collapsed && (
          <div className="p-4 border-b border-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span className="truncate">Demo Restaurant</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Demo Restaurant</DropdownMenuItem>
                <DropdownMenuItem>Add Location</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/dashboard"}
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <div className="mt-auto p-4 border-t border-border">
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span>Log Out</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

const DashboardLayout: React.FC<DashboardSidebarProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="h-14 flex items-center justify-between border-b border-border px-6">
            <SidebarTrigger />
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome back, Restaurant Owner
              </span>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;