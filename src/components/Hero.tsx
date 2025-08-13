import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import { Phone, MessageCircle, Calendar, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <Badge className="inline-flex items-center space-x-2 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>AI-Powered Restaurant Front Desk</span>
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Transform Your Restaurant 
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              with TableAI
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Let AI handle calls, reservations, orders, and payments 24/7, so your staff can focus on creating amazing dining experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 font-semibold"
            >
              Book a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
            >
              Watch Demo Video
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">24/7 Call Handling</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm font-medium">Reservations</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium">Order Taking</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Payment Processing</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={heroImage} 
            alt="TableAI in action" 
            className="w-full rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;