import { Link } from "react-router-dom";
import { useAuth } from 'react-oidc-context';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useBrand } from "@/contexts/BrandContext";
import { getBrandConfig } from "@/config/brandConfig";
import BrandSwitcher from "@/components/BrandSwitcher";
import tableaiLogo from "@/assets/tableai-logo.png";

const Header = () => {
  const auth = useAuth();
  const { toast } = useToast();
  const { brand } = useBrand();
  const config = getBrandConfig(brand);

  const handleLogout = async () => {
    try {
      // Prefer RP-initiated logout via Hosted UI
      await auth.signoutRedirect();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      toast({
        title: "Logout Failed",
        description: "There was an error logging you out.",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="w-full py-4 px-6 bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img src={tableaiLogo} alt={config.name} className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              {config.name}
            </span>
          </div>
          <BrandSwitcher />
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
        
        <div className="flex items-center space-x-3">
          {auth.isAuthenticated ? (
            <>
              <Button asChild variant="outline" className="text-foreground border-border hover:bg-accent">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleLogout}
                className="font-semibold"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline" className="text-foreground border-border hover:bg-accent">
                <Link to="/login">Log In</Link>
              </Button>
              <Button 
                variant="default" 
                className="bg-gradient-hero hover:shadow-elegant transition-all duration-300 font-semibold"
              >
                {config.cta.primary}
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
