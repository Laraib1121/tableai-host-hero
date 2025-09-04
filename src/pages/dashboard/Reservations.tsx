import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, Users, Phone, Plus } from "lucide-react";

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const todaysReservations = [
    {
      id: 1,
      time: "6:00 PM",
      customer: "Johnson Family",
      party: 6,
      phone: "+1 (555) 123-4567",
      status: "confirmed",
      table: "12",
      notes: "Birthday celebration"
    },
    {
      id: 2,
      time: "6:30 PM",
      customer: "Mike Wilson",
      party: 2,
      phone: "+1 (555) 987-6543",
      status: "confirmed",
      table: "5",
      notes: "Anniversary dinner"
    },
    {
      id: 3,
      time: "7:00 PM",
      customer: "Sarah Davis",
      party: 4,
      phone: "+1 (555) 456-7890",
      status: "pending",
      table: "8",
      notes: "Business meeting"
    },
    {
      id: 4,
      time: "7:30 PM",
      customer: "John Smith",
      party: 4,
      phone: "+1 (555) 234-5678",
      status: "confirmed",
      table: "15",
      notes: ""
    },
    {
      id: 5,
      time: "8:00 PM",
      customer: "Lisa Brown",
      party: 2,
      phone: "+1 (555) 345-6789",
      status: "confirmed",
      table: "3",
      notes: "Dietary restrictions: vegetarian"
    }
  ];

  const upcomingReservations = [
    {
      date: "Tomorrow",
      count: 18,
      highlight: "Busy evening - 85% capacity"
    },
    {
      date: "This Weekend",
      count: 45,
      highlight: "Weekend rush expected"
    },
    {
      date: "Next Week",
      count: 67,
      highlight: "Valentine's Day special events"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reservations</h1>
          <p className="text-muted-foreground">
            Manage restaurant reservations and table bookings
          </p>
        </div>
        <Button className="bg-gradient-hero hover:shadow-elegant">
          <Plus className="h-4 w-4 mr-2" />
          New Reservation
        </Button>
      </div>

      <Tabs defaultValue="today" className="space-y-6">
        <TabsList>
          <TabsTrigger value="today" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Today
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Calendar View
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Upcoming
          </TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          {/* Today's Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Today's Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todaysReservations.length}</div>
                <p className="text-xs text-muted-foreground">
                  {todaysReservations.reduce((acc, res) => acc + res.party, 0)} total guests
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Table Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">
                  Peak time: 7:30 PM
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">AI Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.floor(todaysReservations.length * 0.8)}
                </div>
                <p className="text-xs text-muted-foreground">
                  80% handled by AI
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Reservation List */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>All reservations for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaysReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <span className="font-medium">{reservation.customer}</span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {reservation.time}
                          <Users className="h-3 w-3 ml-2" />
                          {reservation.party} guests
                          <span className="ml-2">Table {reservation.table}</span>
                        </div>
                        {reservation.notes && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {reservation.notes}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(reservation.status)}>
                        {reservation.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Select a date to view reservations</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border p-3 pointer-events-auto"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>
                  Reservations for {selectedDate?.toLocaleDateString()}
                </CardTitle>
                <CardDescription>Bookings for selected date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-8">
                  {selectedDate?.toDateString() === new Date().toDateString() ? (
                    <div className="space-y-2">
                      <p>Today's reservations are shown in the "Today" tab</p>
                      <Button variant="outline" onClick={() => {
                        const todayTab = document.querySelector('[value="today"]') as HTMLElement;
                        todayTab?.click();
                      }}>
                        View Today's Schedule
                      </Button>
                    </div>
                  ) : (
                    <p>No reservations found for this date</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Reservations</CardTitle>
              <CardDescription>Overview of future bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingReservations.map((period, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{period.date}</h4>
                      <p className="text-sm text-muted-foreground">{period.highlight}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{period.count}</div>
                      <p className="text-xs text-muted-foreground">reservations</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reservations;