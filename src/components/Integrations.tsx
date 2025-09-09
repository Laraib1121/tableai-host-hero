import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBrand } from "@/contexts/BrandContext";
import { getBrandConfig } from "@/config/brandConfig";


const Integrations = () => {
  const { brand } = useBrand();
  const config = getBrandConfig(brand);
  
  return (
    <section id="integrations" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Seamless Integration with Your
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Existing Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {config.name} connects with all the {brand === 'medical' ? 'healthcare' : 'restaurant'} tools you already use, creating a unified ecosystem for maximum efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {config.integrations.map((integration, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">
                  <integration.logo className="w-12 h-12 mx-auto text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{integration.name}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto text-xs">
                  {integration.category}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  {integration.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Don't see your platform?</p>
          <a 
            href="#contact" 
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Request a custom integration →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;