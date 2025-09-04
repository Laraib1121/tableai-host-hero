import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageSquare, Mail, Play, Download, Star } from "lucide-react";

const Inbox = () => {
  const [selectedCall, setSelectedCall] = useState<number | null>(null);

  const calls = [
    {
      id: 1,
      time: "2:45 PM",
      duration: "3:24",
      type: "Reservation",
      customer: "John Smith",
      phone: "+1 (555) 123-4567",
      status: "completed",
      rating: 5,
      transcript: "AI: Thank you for calling Demo Restaurant! How can I help you today?\nCustomer: Hi, I'd like to make a reservation for tonight.\nAI: I'd be happy to help you with that! For how many people?\nCustomer: Four people, around 7:30 PM if possible.\nAI: Perfect! I have availability at 7:30 PM for a party of 4. May I have your name?\nCustomer: John Smith.\nAI: Great! Your reservation is confirmed for tonight at 7:30 PM under the name John Smith. Is there anything else I can help you with?\nCustomer: No, that's perfect. Thank you!\nAI: You're welcome! We look forward to seeing you tonight!"
    },
    {
      id: 2,
      time: "2:30 PM",
      duration: "2:15",
      type: "Order",
      customer: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      status: "completed",
      rating: 4,
      transcript: "AI: Hello! Thank you for calling Demo Restaurant. How can I assist you today?\nCustomer: I'd like to place a takeout order.\nAI: Wonderful! I can help you with that. What would you like to order?\nCustomer: I'll have the grilled salmon with vegetables and a side salad.\nAI: Excellent choice! The grilled salmon with vegetables and side salad. Anything else?\nCustomer: That's it.\nAI: Perfect! Your total is $32.50. Can I get your name and phone number for pickup?\nCustomer: Sarah Johnson, 555-987-6543.\nAI: Thank you Sarah! Your order will be ready in 20-25 minutes."
    }
  ];

  const messages = [
    {
      id: 1,
      platform: "SMS",
      customer: "Mike Wilson",
      time: "1:15 PM",
      message: "What are your hours today?",
      response: "We're open from 11 AM to 10 PM today. Looking forward to serving you!"
    },
    {
      id: 2,
      platform: "Email",
      customer: "Lisa Brown",
      time: "12:30 PM",
      message: "Do you have vegan options on your menu?",
      response: "Yes! We have several delicious vegan options including our popular veggie burger and quinoa salad."
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Inbox</h1>
        <p className="text-muted-foreground">
          View call transcripts, messages, and customer interactions
        </p>
      </div>

      <Tabs defaultValue="calls" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calls" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Calls
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Messages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calls" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Call List */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Calls</CardTitle>
                <CardDescription>All AI receptionist calls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {calls.map((call) => (
                    <div
                      key={call.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedCall === call.id ? 'bg-accent' : 'hover:bg-accent/50'
                      }`}
                      onClick={() => setSelectedCall(call.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{call.customer}</span>
                          <Badge variant="secondary">{call.type}</Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(call.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{call.phone}</span>
                        <div className="flex items-center gap-2">
                          <span>{call.duration}</span>
                          <span>{call.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call Details */}
            <Card>
              <CardHeader>
                <CardTitle>Call Details</CardTitle>
                <CardDescription>
                  {selectedCall ? "Transcript and call information" : "Select a call to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedCall ? (
                  <div className="space-y-4">
                    {(() => {
                      const call = calls.find(c => c.id === selectedCall);
                      if (!call) return null;
                      
                      return (
                        <>
                          <div className="flex items-center gap-2 mb-4">
                            <Button size="sm" variant="outline">
                              <Play className="h-4 w-4 mr-1" />
                              Play Recording
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium">Transcript</h4>
                            <div className="bg-muted p-4 rounded-lg text-sm">
                              <pre className="whitespace-pre-wrap font-mono text-xs">
                                {call.transcript}
                              </pre>
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    Select a call from the list to view its transcript and details
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>SMS and email interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.customer}</span>
                        <Badge variant="outline">{message.platform}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{message.time}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">{message.message}</p>
                      </div>
                      <div className="bg-primary/5 p-3 rounded-lg">
                        <p className="text-sm">{message.response}</p>
                      </div>
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

export default Inbox;