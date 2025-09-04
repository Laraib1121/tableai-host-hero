import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users, Phone, DollarSign, Clock, Star } from "lucide-react";

const Analytics = () => {
  const kpiData = [
    {
      title: "Total Calls This Month",
      value: "1,247",
      change: "+23%",
      trend: "up",
      icon: Phone,
      description: "vs last month"
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      icon: Star,
      description: "average rating"
    },
    {
      title: "Response Time",
      value: "2.3s",
      change: "-0.5s",
      trend: "up",
      icon: Clock,
      description: "average pickup"
    },
    {
      title: "Revenue Impact",
      value: "$18,450",
      change: "+31%",
      trend: "up",
      icon: DollarSign,
      description: "AI-generated bookings"
    }
  ];

  const weeklyData = [
    { day: "Mon", calls: 45, bookings: 12, orders: 8 },
    { day: "Tue", calls: 52, bookings: 15, orders: 11 },
    { day: "Wed", calls: 38, bookings: 9, orders: 6 },
    { day: "Thu", calls: 61, bookings: 18, orders: 13 },
    { day: "Fri", calls: 74, bookings: 22, orders: 16 },
    { day: "Sat", calls: 89, bookings: 28, orders: 21 },
    { day: "Sun", calls: 67, bookings: 19, orders: 14 }
  ];

  const topCallReasons = [
    { reason: "Reservations", count: 487, percentage: 45 },
    { reason: "Menu Inquiries", count: 234, percentage: 22 },
    { reason: "Orders", count: 189, percentage: 17 },
    { reason: "Hours/Location", count: 156, percentage: 14 },
    { reason: "Other", count: 87, percentage: 8 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          AI receptionist performance and business insights
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {kpi.title}
              </CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`inline-flex items-center ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change}
                </span>
                {' '}{kpi.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Calls, bookings, and orders by day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyData.map((day) => (
                    <div key={day.day} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{day.day}</span>
                        <span className="text-muted-foreground">{day.calls} calls</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-hero h-2 rounded-full" 
                          style={{ width: `${(day.calls / 100) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{day.bookings} bookings</span>
                        <span>{day.orders} orders</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call Reasons */}
            <Card>
              <CardHeader>
                <CardTitle>Call Reasons</CardTitle>
                <CardDescription>What customers are calling about</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCallReasons.map((item) => (
                    <div key={item.reason} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.reason}</span>
                        <span className="text-muted-foreground">{item.count}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Performance Metrics</CardTitle>
                <CardDescription>How well the AI is handling calls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Call Resolution Rate</span>
                    <span className="text-2xl font-bold text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Average Handle Time</span>
                    <span className="text-2xl font-bold">3:24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-green-600">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Escalation Rate</span>
                    <span className="text-2xl font-bold text-green-600">6%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Peak Hours</CardTitle>
                <CardDescription>Busiest times for customer calls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded border">
                    <span className="text-sm">11:00 AM - 1:00 PM</span>
                    <span className="text-sm font-medium">Lunch Rush</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded border">
                    <span className="text-sm">6:00 PM - 8:00 PM</span>
                    <span className="text-sm font-medium">Dinner Peak</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded border">
                    <span className="text-sm">2:00 PM - 4:00 PM</span>
                    <span className="text-sm font-medium">Reservation Calls</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Insights</CardTitle>
                <CardDescription>Key trends and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-800 mb-1">Revenue Growth</h4>
                    <p className="text-sm text-green-700">
                      AI handling has increased bookings by 31% this month
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-800 mb-1">Peak Optimization</h4>
                    <p className="text-sm text-blue-700">
                      Consider adding staff during 6-8 PM for order support
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 mb-1">Menu Training</h4>
                    <p className="text-sm text-yellow-700">
                      Update AI knowledge base with new seasonal items
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Feedback</CardTitle>
                <CardDescription>Recent customer comments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded border">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm">"The AI was so helpful and quick!"</p>
                  </div>
                  <div className="p-3 rounded border">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-3 w-3 text-yellow-400" />
                      </div>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>  
                    <p className="text-sm">"Easy to make a reservation"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;