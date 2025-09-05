import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SigninCallback, SignoutCallback } from 'react-oidc-context';
import Index from "./pages/Index";
import Login from "./pages/Login";
import DashboardLayout from "./components/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
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
          {/* OIDC callbacks */}
          <Route path="/auth/callback" element={<SigninCallback />} />
          <Route path="/auth/logout-callback" element={<SignoutCallback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><Overview /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/inbox" element={<ProtectedRoute><DashboardLayout><Inbox /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/reservations" element={<ProtectedRoute><DashboardLayout><Reservations /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/orders" element={<ProtectedRoute><DashboardLayout><Orders /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/analytics" element={<ProtectedRoute><DashboardLayout><Analytics /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/ai-settings" element={<ProtectedRoute><DashboardLayout><AISettings /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/integrations" element={<ProtectedRoute><DashboardLayout><div className="p-8 text-center text-muted-foreground">Integrations page coming soon</div></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/team" element={<ProtectedRoute><DashboardLayout><Team /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dashboard/billing" element={<ProtectedRoute><DashboardLayout><Billing /></DashboardLayout></ProtectedRoute>} />
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
