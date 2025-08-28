import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Transform Waste Into 
              <span className="text-cascara"> Beauty</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
              Discover the power of cascara - the nutrient-rich coffee fruit skin that's 
              typically discarded - in our 100% natural skincare collection.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-forest rounded-full"></div>
              <span>100% Natural</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cascara rounded-full"></div>
              <span>Zero Waste</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-sage rounded-full"></div>
              <span>Cruelty Free</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Natural cascara skincare products" 
              className="relative z-10 rounded-2xl shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;