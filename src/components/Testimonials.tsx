import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    title: "Owner, Bella Vista Italian",
    content: "TableAI has completely transformed our operations. We've reduced missed calls by 100% and our staff can now focus entirely on the dining experience. The AI handles reservations flawlessly.",
    rating: 5,
    image: "👩‍🍳"
  },
  {
    name: "David Chen",
    title: "Manager, Golden Dragon",
    content: "The multilingual support is incredible. Our customers love being able to place orders in their native language. TableAI has increased our takeout orders by 40%.",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Sarah Thompson",
    title: "Owner, The Green Spoon",
    content: "Best investment we've made. TableAI pays for itself with the increased efficiency and never missing a reservation. The 24/7 availability has been a game changer.",
    rating: 5,
    image: "👩‍🍳"
  },
  {
    name: "Antonio Rossi",
    title: "Head Chef, Nonna's Kitchen",
    content: "Our phone orders are now seamless. The AI understands complex modifications and special requests better than most humans. Kitchen operations are much smoother.",
    rating: 5,
    image: "👨‍🍳"
  },
  {
    name: "Jennifer Kim",
    title: "Restaurant Manager, Seoul Kitchen",
    content: "The integration with our POS system was effortless. TableAI handles payment processing securely and our accounting is much simpler now.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Michael Foster",
    title: "Owner, The Burger Joint",
    content: "TableAI has reduced our labor costs significantly while improving customer satisfaction. The analytics help us understand our customers better than ever.",
    rating: 5,
    image: "👨‍🍳"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Loved by Restaurant Owners
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Across the Globe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of restaurants that have revolutionized their operations with TableAI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="font-semibold">4.9/5 average rating</span>
            <span className="text-muted-foreground">from 500+ restaurants</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;