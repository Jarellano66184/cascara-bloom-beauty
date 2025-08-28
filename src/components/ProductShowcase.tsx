import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Using actual Redëm product photos

const products = [
  {
    id: 1,
    name: "Cascara Gentle Cleanser",
    description: "A gentle yet effective cleanser infused with antioxidant-rich cascara extract. Removes impurities while nourishing your skin with natural polyphenols and chlorogenic acids.",
    price: "$20",
    size: "3 oz",
    image: "/lovable-uploads/87bd30eb-1a0f-4100-8fe3-7b2bbf4070a1.png",
    benefits: ["Deep cleansing", "Antioxidant protection", "Gentle on sensitive skin", "Anti-inflammatory"],
    featured: true
  },
  {
    id: 2,
    name: "Cascara Nourishing Moisturizer",
    description: "Rich, hydrating moisturizer powered by cascara's natural compounds. Provides lasting moisture while protecting against free radical damage and promoting healthy skin renewal.",
    price: "$20",
    size: "3 oz",
    image: "/lovable-uploads/defe8c20-1b9f-4b9a-b127-8761642f38a9.png",
    benefits: ["24-hour hydration", "Anti-aging properties", "Skin barrier repair", "Natural caffeine boost"],
    featured: false
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-gradient-product">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Product Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Each product harnesses the potent antioxidant properties of cascara, 
            delivering visible results while supporting sustainable beauty practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={product.id} className={`group hover:shadow-elevated transition-all duration-500 animate-slide-up border-0 bg-card/80 backdrop-blur-sm ${index === 1 ? 'md:-mt-8' : ''}`}>
              <CardContent className="p-8">
                {product.featured && (
                  <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
                    Best Seller
                  </Badge>
                )}
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="relative z-10 w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cascara">{product.price}</div>
                      <div className="text-sm text-muted-foreground">{product.size}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-sage rounded-full"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="premium" className="w-full mt-6">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;