import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, ShoppingBag, TrendingUp, Clock, CheckCircle } from "lucide-react";

const Overview = () => {
  const stats = [
    {
      title: "Calls Today",
      value: "47",
      change: "+12%",
      trend: "up",
      icon: Phone,
      description: "vs yesterday"
    },
    {
      title: "Reservations",
      value: "23",
      change: "+8%",
      trend: "up",
      icon: Calendar,
      description: "for today"
    },
    {
      title: "Orders",
      value: "$1,247",
      change: "+15%",
      trend: "up",
      icon: ShoppingBag,
      description: "revenue today"
    },
    {
      title: "AI Efficiency",
      value: "94%",
      change: "+2%",
      trend: "up",
      icon: TrendingUp,
      description: "calls handled"
    }
  ];

  const recentCalls = [
    {
      id: 1,
      time: "2:45 PM",
      type: "Reservation",
      status: "completed",
      customer: "John Smith",
      details: "Table for 4, 7:30 PM tonight"
    },
    {
      id: 2,
      time: "2:30 PM",
      type: "Order",
      status: "completed",
      customer: "Sarah Johnson",
      details: "Takeout order - $45.80"
    },
    {
      id: 3,
      time: "2:15 PM",
      type: "Inquiry",
      status: "completed",
      customer: "Mike Wilson",
      details: "Menu question about allergens"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Monitor your restaurant's AI receptionist performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`inline-flex items-center ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                {' '}{stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Calls
            </CardTitle>
            <CardDescription>
              Latest AI receptionist interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCalls.map((call) => (
                <div key={call.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{call.customer}</span>
                        <Badge variant="secondary" className="text-xs">
                          {call.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{call.details}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{call.time}</span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>
              Upcoming reservations and events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">Table for 6</p>
                  <p className="text-sm text-muted-foreground">Johnson Party</p>
                </div>
                <span className="text-sm font-medium">6:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">Table for 2</p>
                  <p className="text-sm text-muted-foreground">Anniversary Dinner</p>
                </div>
                <span className="text-sm font-medium">7:30 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">Table for 4</p>
                  <p className="text-sm text-muted-foreground">Business Meeting</p>
                </div>
                <span className="text-sm font-medium">8:00 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;