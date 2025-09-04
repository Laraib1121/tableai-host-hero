import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Clock, DollarSign, Truck, Phone, CheckCircle } from "lucide-react";

const Orders = () => {
  const todaysOrders = [
    {
      id: "ORD-001",
      time: "2:30 PM",
      customer: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      type: "Takeout",
      status: "ready",
      total: 45.80,
      items: ["Grilled Salmon", "Side Salad", "Sparkling Water"],
      estimatedTime: "Ready now"
    },
    {
      id: "ORD-002",
      time: "2:45 PM",
      customer: "Mike Wilson",
      phone: "+1 (555) 123-4567",
      type: "Delivery",
      status: "preparing",
      total: 67.50,
      items: ["Ribeye Steak", "Mashed Potatoes", "Caesar Salad", "Wine"],
      estimatedTime: "15 min"
    },
    {
      id: "ORD-003",
      time: "3:00 PM",
      customer: "Lisa Brown",
      phone: "+1 (555) 456-7890",
      type: "Takeout",
      status: "confirmed",
      total: 32.25,
      items: ["Veggie Burger", "Sweet Potato Fries", "Iced Tea"],
      estimatedTime: "20 min"
    }
  ];

  const orderStats = [
    {
      title: "Today's Orders",
      value: "23",
      change: "+18%",
      icon: ShoppingBag,
      description: "vs yesterday"
    },
    {
      title: "Revenue",
      value: "$1,247",
      change: "+15%",
      icon: DollarSign,
      description: "today's total"
    },
    {
      title: "Avg Order Time",
      value: "18 min",
      change: "-2 min",
      icon: Clock,
      description: "preparation time"
    },
    {
      title: "AI Order Rate",
      value: "87%",
      change: "+5%",
      icon: CheckCircle,
      description: "handled by AI"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready":
        return "bg-green-100 text-green-800";
      case "preparing":
        return "bg-blue-100 text-blue-800";
      case "confirmed":
        return "bg-yellow-100 text-yellow-800";
      case "delivered":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ready":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "preparing":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "confirmed":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-muted-foreground">
          Manage takeout and delivery orders processed by AI
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderStats.map((stat) => (
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
                  stat.change.startsWith('+') ? 'text-green-600' : 
                  stat.change.startsWith('-') && stat.title === 'Avg Order Time' ? 'text-green-600' :
                  'text-red-600'
                }`}>
                  {stat.change}
                </span>
                {' '}{stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Orders</TabsTrigger>
          <TabsTrigger value="history">Order History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Orders</CardTitle>
              <CardDescription>Current orders being processed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysOrders.map((order) => (
                  <div key={order.id} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{order.customer}</span>
                            <Badge variant="outline">{order.type}</Badge>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Order #{order.id} • {order.time}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-medium">${order.total.toFixed(2)}</div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            {getStatusIcon(order.status)}
                            {order.estimatedTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2">Items:</p>
                        <p className="text-sm">{order.items.join(", ")}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        {order.type === "Delivery" && (
                          <Button variant="outline" size="sm">
                            <Truck className="h-3 w-3 mr-1" />
                            Track
                          </Button>
                        )}
                        <Button size="sm" className="bg-gradient-hero">
                          Update Status
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>Previously completed orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Order history will appear here</p>
                <p className="text-sm">Completed orders from previous days and weeks</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Trends</CardTitle>
                <CardDescription>Daily order patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-8">
                  <p>Order analytics and trends will be displayed here</p>
                  <p className="text-sm">Charts showing peak hours, popular items, and revenue trends</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Popular Items</CardTitle>
                <CardDescription>Most ordered menu items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Grilled Salmon</span>
                    <span className="text-sm font-medium">15 orders</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ribeye Steak</span>
                    <span className="text-sm font-medium">12 orders</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Caesar Salad</span>
                    <span className="text-sm font-medium">8 orders</span>
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

export default Orders;