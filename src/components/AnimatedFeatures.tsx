import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, ShoppingBag, CreditCard, MessageSquare, Clock, Globe, BarChart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const AnimatedFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

    // Animate heading
    gsap.fromTo(heading.children, 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate feature cards
    const cardElements = cards.querySelectorAll('.feature-card');
    gsap.fromTo(cardElements,
      {
        y: 80,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cards,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Add hover animations
    cardElements.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/5 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headingRef} className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Revolutionize Your Restaurant Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TableAI handles all front desk operations with advanced AI, freeing your staff to focus on what matters most - your guests.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card relative overflow-hidden hover:shadow-card transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.gradient} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-hero opacity-5 rounded-full -mr-10 -mt-10 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;