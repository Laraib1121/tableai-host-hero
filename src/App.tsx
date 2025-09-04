import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import DashboardLayout from "./components/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Inbox from "./pages/dashboard/Inbox";
import Reservations from "./pages/dashboard/Reservations";
import Orders from "./pages/dashboard/Orders";
import Analytics from "./pages/dashboard/Analytics";
import AISettings from "./pages/dashboard/AISettings";
import Team from "./pages/dashboard/Team";
import Billing from "./pages/dashboard/Billing";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
          <Route path="/dashboard/inbox" element={<DashboardLayout><Inbox /></DashboardLayout>} />
          <Route path="/dashboard/reservations" element={<DashboardLayout><Reservations /></DashboardLayout>} />
          <Route path="/dashboard/orders" element={<DashboardLayout><Orders /></DashboardLayout>} />
          <Route path="/dashboard/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
          <Route path="/dashboard/ai-settings" element={<DashboardLayout><AISettings /></DashboardLayout>} />
          <Route path="/dashboard/integrations" element={<DashboardLayout><div className="p-8 text-center text-muted-foreground">Integrations page coming soon</div></DashboardLayout>} />
          <Route path="/dashboard/team" element={<DashboardLayout><Team /></DashboardLayout>} />
          <Route path="/dashboard/billing" element={<DashboardLayout><Billing /></DashboardLayout>} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
