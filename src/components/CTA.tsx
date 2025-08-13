import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Free 30-day trial",
  "No setup fees",
  "24/7 support included",
  "Cancel anytime"
];

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="relative overflow-hidden bg-gradient-hero shadow-elegant">
          <div className="absolute inset-0 bg-black/10"></div>
          <CardContent className="relative z-10 p-12 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of restaurants using TableAI to provide exceptional customer service while reducing costs and increasing efficiency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/90">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-white font-semibold text-lg px-8 py-6"
              >
                Book Your Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold text-lg px-8 py-6"
              >
                Start Free Trial
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-6">
              No credit card required • Setup in 24 hours • Cancel anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;