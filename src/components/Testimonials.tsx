import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useBrand } from "@/contexts/BrandContext";
import { getBrandConfig } from "@/config/brandConfig";


const Testimonials = () => {
  const { brand } = useBrand();
  const config = getBrandConfig(brand);
  
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Loved by {brand === 'medical' ? 'Healthcare Professionals' : 'Restaurant Owners'}
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Across the Globe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of {brand === 'medical' ? 'practices' : 'restaurants'} that have revolutionized their operations with {config.name}.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
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
            <span className="text-muted-foreground">from 500+ {brand === 'medical' ? 'practices' : 'restaurants'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;