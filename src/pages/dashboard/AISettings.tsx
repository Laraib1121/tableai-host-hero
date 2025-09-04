import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, MessageSquare, Clock, Upload, Save } from "lucide-react";

const AISettings = () => {
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [bookingEnabled, setBookingEnabled] = useState(true);
  const [orderEnabled, setOrderEnabled] = useState(true);
  const [businessHours, setBusinessHours] = useState("11:00 AM - 10:00 PM");
  const [greeting, setGreeting] = useState("Thank you for calling Demo Restaurant! How can I help you today?");

  const knowledgeBase = [
    {
      category: "Menu Items",
      status: "Updated",
      lastUpdate: "2 hours ago",
      items: 47
    },
    {
      category: "Hours & Location",
      status: "Current", 
      lastUpdate: "1 day ago",
      items: 12
    },
    {
      category: "Policies",
      status: "Needs Update",
      lastUpdate: "1 week ago", 
      items: 8
    },
    {
      category: "Special Events",
      status: "Current",
      lastUpdate: "3 days ago",
      items: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Updated":
      case "Current":
        return "bg-green-100 text-green-800";
      case "Needs Update":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Settings</h1>
        <p className="text-muted-foreground">
          Configure your AI receptionist behavior and knowledge base
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="knowledge" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Knowledge Base
          </TabsTrigger>
          <TabsTrigger value="responses" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Responses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Capabilities</CardTitle>
              <CardDescription>
                Enable or disable specific AI functions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Voice Calls</Label>
                  <p className="text-sm text-muted-foreground">
                    Handle incoming phone calls automatically
                  </p>
                </div>
                <Switch
                  checked={voiceEnabled}
                  onCheckedChange={setVoiceEnabled}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Reservation Booking</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow AI to make and modify reservations
                  </p>
                </div>
                <Switch
                  checked={bookingEnabled}
                  onCheckedChange={setBookingEnabled}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Order Taking</Label>
                  <p className="text-sm text-muted-foreground">
                    Process takeout and delivery orders
                  </p>
                </div>
                <Switch
                  checked={orderEnabled}
                  onCheckedChange={setOrderEnabled}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Configuration</CardTitle>
              <CardDescription>
                Basic restaurant information for AI responses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hours">Business Hours</Label>
                <Input
                  id="hours"
                  value={businessHours}
                  onChange={(e) => setBusinessHours(e.target.value)}
                  placeholder="e.g., 11:00 AM - 10:00 PM"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="greeting">Phone Greeting</Label>
                <Textarea
                  id="greeting"
                  value={greeting}
                  onChange={(e) => setGreeting(e.target.value)}
                  placeholder="How should the AI greet callers?"
                  rows={3}
                />
              </div>

              <Button className="bg-gradient-hero hover:shadow-elegant">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base Status</CardTitle>
              <CardDescription>
                Keep your AI updated with current restaurant information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {knowledgeBase.map((item) => (
                  <div key={item.category} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.category}</span>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.items} items • Last updated {item.lastUpdate}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Documents</CardTitle>
              <CardDescription>
                Upload menus, policies, or other documents for AI training
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Upload Files</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop files here, or click to browse
                </p>
                <Button variant="outline">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="responses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Custom Responses</CardTitle>
              <CardDescription>
                Customize how the AI responds to common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Hours Inquiry Response</Label>
                  <Textarea
                    placeholder="How should the AI respond when asked about hours?"
                    rows={2}
                    defaultValue="We're open daily from 11 AM to 10 PM. We look forward to serving you!"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Menu Question Response</Label>
                  <Textarea
                    placeholder="How should the AI handle menu questions?"
                    rows={2}
                    defaultValue="I'd be happy to help with menu questions! We have a full menu with appetizers, entrees, and desserts. What specifically would you like to know about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Reservation Full Response</Label>
                  <Textarea
                    placeholder="What should the AI say when no reservations are available?"
                    rows={2}
                    defaultValue="I apologize, but we're fully booked for that time. Would you like me to check for another time or add you to our waitlist?"
                  />
                </div>
              </div>

              <Button className="bg-gradient-hero hover:shadow-elegant">
                <Save className="h-4 w-4 mr-2" />
                Save Response Templates
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Settings</CardTitle>
              <CardDescription>
                Configure AI response behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Formal Language</Label>
                  <p className="text-sm text-muted-foreground">
                    Use formal, professional language in responses
                  </p>
                </div>
                <Switch defaultChecked={true} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Proactive Suggestions</Label>
                  <p className="text-sm text-muted-foreground">
                    Suggest specials or popular items during calls
                  </p>
                </div>
                <Switch defaultChecked={false} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AISettings;