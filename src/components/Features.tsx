import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useBrand } from "@/contexts/BrandContext";
import { getBrandConfig } from "@/config/brandConfig";


const Features = () => {
  const { brand } = useBrand();
  const config = getBrandConfig(brand);
  
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Revolutionize Your {brand === 'medical' ? 'Practice' : 'Restaurant'} Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {config.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {config.features.map((feature, index) => (
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