import tableaiLogo from "@/assets/tableai-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={tableaiLogo} alt="TableAI" className="w-8 h-8 brightness-0 invert" />
              <span className="text-xl font-bold">TableAI</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              The AI-powered front desk solution that transforms restaurant operations, handling calls, reservations, and orders 24/7.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#integrations" className="hover:text-background transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-background transition-colors">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#careers" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#help" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#documentation" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#security" className="hover:text-background transition-colors">Security</a></li>
              <li><a href="#privacy" className="hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-background/60 text-sm">
            © 2024 TableAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/privacy" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-background/60 hover:text-background transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;