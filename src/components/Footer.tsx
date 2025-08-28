import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">R</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Redëm</span>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Transforming waste into beauty with 100% natural cascara skincare.
              Sustainable, effective, and ethically sourced.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-cream/80 hover:text-cream hover:bg-cream/10">
                <span className="sr-only">Instagram</span>
                📸
              </Button>
              <Button variant="ghost" size="icon" className="text-cream/80 hover:text-cream hover:bg-cream/10">
                <span className="sr-only">Facebook</span>
                📘
              </Button>
              <Button variant="ghost" size="icon" className="text-cream/80 hover:text-cream hover:bg-cream/10">
                <span className="sr-only">Twitter</span>
                🐦
              </Button>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3 text-cream/80">
              <li><a href="#" className="hover:text-cream transition-colors">Cascara Cleanser</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Nourishing Moisturizer</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Complete Set</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-cream/80">
              <li><a href="#" className="hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-cream/80">
              <li><a href="#" className="hover:text-cream transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2024 Redëm Skincare. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-cream/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;