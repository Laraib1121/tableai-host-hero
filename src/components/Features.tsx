import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, ShoppingBag, CreditCard, MessageSquare, Clock, Globe, BarChart } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI Voice Assistant",
    description: "Handle unlimited incoming calls simultaneously with natural conversation AI that understands restaurant context.",
    gradient: "bg-gradient-hero"
  },
  {
    icon: Calendar,
    title: "Smart Reservations",
    description: "Automatically manage bookings, check availability, and send confirmations with seamless calendar integration.",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: ShoppingBag,
    title: "Order Management",
    description: "Take complex orders for delivery and takeout with menu knowledge and customization handling.",
    gradient: "bg-gradient-hero"
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Securely process payments over the phone with integrated PCI-compliant payment systems.",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: MessageSquare,
    title: "Multi-Language Support",
    description: "Communicate with guests in their preferred language to provide inclusive customer service.",
    gradient: "bg-gradient-hero"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call or reservation request with round-the-clock AI assistance.",
    gradient: "bg-gradient-secondary"
  },
  {
    icon: Globe,
    title: "Restaurant Integrations",
    description: "Connect seamlessly with your existing POS, reservation system, and delivery platforms.",
    gradient: "bg-gradient-hero"
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Get detailed reports on call volume, booking patterns, and customer preferences.",
    gradient: "bg-gradient-secondary"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Revolutionize Your Restaurant Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TableAI handles all front desk operations with advanced AI, freeing your staff to focus on what matters most - your guests.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.gradient} bg-opacity-20 flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-hero opacity-5 rounded-full -mr-10 -mt-10"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;