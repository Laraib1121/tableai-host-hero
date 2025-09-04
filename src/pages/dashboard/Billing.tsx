import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Download, Check, Zap, Phone, BarChart } from "lucide-react";

const Billing = () => {
  const currentPlan = {
    name: "Professional",
    price: 199,
    billingCycle: "monthly",
    status: "Active",
    nextBilling: "Dec 15, 2024",
    features: [
      "Unlimited AI calls",
      "Advanced analytics",
      "Multi-location support",
      "Custom integrations",
      "Priority support"
    ]
  };

  const usageStats = [
    {
      metric: "AI Calls",
      current: 1247,
      limit: "Unlimited",
      icon: Phone
    },
    {
      metric: "Analytics Reports", 
      current: 45,
      limit: "Unlimited",
      icon: BarChart
    },
    {
      metric: "Team Members",
      current: 3,
      limit: 10,
      icon: CreditCard
    }
  ];

  const invoiceHistory = [
    {
      id: "INV-2024-001",
      date: "Nov 15, 2024",
      amount: 199.00,
      status: "Paid",
      description: "Professional Plan - November"
    },
    {
      id: "INV-2024-002", 
      date: "Oct 15, 2024",
      amount: 199.00,
      status: "Paid",
      description: "Professional Plan - October"
    },
    {
      id: "INV-2024-003",
      date: "Sep 15, 2024", 
      amount: 199.00,
      status: "Paid",
      description: "Professional Plan - September"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: 99,
      description: "Perfect for small restaurants",
      features: [
        "Up to 500 AI calls/month",
        "Basic analytics",
        "Single location",
        "Email support"
      ],
      current: false
    },
    {
      name: "Professional", 
      price: 199,
      description: "Great for growing businesses",
      features: [
        "Unlimited AI calls",
        "Advanced analytics", 
        "Multi-location support",
        "Custom integrations",
        "Priority support"
      ],
      current: true
    },
    {
      name: "Enterprise",
      price: 399,
      description: "For restaurant chains",
      features: [
        "Everything in Professional",
        "White-label solution",
        "Dedicated account manager",
        "Custom AI training",
        "24/7 phone support"
      ],
      current: false
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="text-muted-foreground">
          Manage your subscription, usage, and billing information
        </p>
      </div>

      {/* Current Plan Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Current Plan
          </CardTitle>
          <CardDescription>Your active subscription details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{currentPlan.name}</h3>
                <Badge className="bg-green-100 text-green-800">
                  {currentPlan.status}
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">
                ${currentPlan.price}
                <span className="text-base font-normal text-muted-foreground">
                  /{currentPlan.billingCycle}
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Next billing: {currentPlan.nextBilling}
              </p>
            </div>
            <div className="text-right">
              <Button variant="outline" className="mb-2">
                Change Plan
              </Button>
              <br />
              <Button variant="outline">
                Cancel Subscription
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="usage" className="space-y-6">
        <TabsList>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-6">
          {/* Usage Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usageStats.map((stat) => (
              <Card key={stat.metric}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.metric}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.current.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    of {stat.limit} {stat.limit !== "Unlimited" && "limit"}
                  </p>
                  {stat.limit !== "Unlimited" && (
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(stat.current / parseInt(stat.limit.toString())) * 100}%` }}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Plan Features */}
          <Card>
            <CardHeader>
              <CardTitle>Plan Features</CardTitle>
              <CardDescription>What's included in your current plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPlan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoice History</CardTitle>
              <CardDescription>Download your past invoices and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {invoiceHistory.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{invoice.id}</span>
                        <Badge className="bg-green-100 text-green-800">
                          {invoice.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{invoice.description}</p>
                      <p className="text-xs text-muted-foreground">{invoice.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">${invoice.amount.toFixed(2)}</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name} className={plan.current ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.current && (
                      <Badge className="bg-primary text-primary-foreground">
                        Current
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">
                    ${plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={plan.current ? "w-full" : "w-full bg-gradient-hero hover:shadow-elegant"}
                    variant={plan.current ? "outline" : "default"}
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Billing;