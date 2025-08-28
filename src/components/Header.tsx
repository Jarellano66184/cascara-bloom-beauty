import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">R</span>
          </div>
          <span className="font-serif text-2xl font-semibold text-foreground">Redëm</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#ingredients" className="text-muted-foreground hover:text-foreground transition-colors">
            Ingredients
          </a>
          <a href="#sustainability" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Story
          </a>
        </div>
        
        <Button variant="cta" size="sm">
          Shop Now
        </Button>
      </nav>
    </header>
  );
};

export default Header;