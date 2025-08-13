import { Button } from "@/components/ui/button";
import tableaiLogo from "@/assets/tableai-logo.png";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={tableaiLogo} alt="TableAI" className="w-10 h-10" />
          <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            TableAI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#integrations" className="text-foreground/80 hover:text-foreground transition-colors">
            Integrations
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
        
        <Button 
          variant="default" 
          className="bg-gradient-hero hover:shadow-elegant transition-all duration-300 font-semibold"
        >
          Book Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;