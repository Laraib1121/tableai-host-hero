import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import { Phone, MessageCircle, Calendar, CreditCard } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Restaurant", "Deli", "Cafe"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    const image = imageRef.current;

    if (!content || !image) return;

    // Initial animation on load
    gsap.fromTo(content.children,
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      }
    );

    gsap.fromTo(image,
      {
        x: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.8
      }
    );

    // Floating animation for the image
    gsap.to(image, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full animate-pulse delay-1000 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/5 rounded-full animate-pulse delay-2000 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div ref={contentRef} className="text-center lg:text-left space-y-8">
          <Badge className="inline-flex items-center space-x-2 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>AI-Powered Restaurant Front Desk</span>
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Transform Your{" "}
            <span className="font-display font-bold transition-all duration-500 ease-in-out">
              {words[currentWord]}
            </span>
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
        
        <div ref={imageRef} className="relative">
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