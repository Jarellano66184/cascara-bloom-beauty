import { Card, CardContent } from "@/components/ui/card";
import cascaraImage from "@/assets/cascara-cherries.jpg";

const benefits = [
  {
    title: "Powerful Antioxidants",
    description: "Cascara contains higher concentrations of antioxidants than coffee beans, including chlorogenic acids and polyphenols that protect skin from free radical damage.",
    icon: "🛡️"
  },
  {
    title: "Anti-Aging Properties",
    description: "Rich in phenolic compounds that stimulate collagen production, reduce fine lines, and promote cellular regeneration for youthful-looking skin.",
    icon: "✨"
  },
  {
    title: "Natural Caffeine Boost",
    description: "Contains natural caffeine that improves circulation, reduces puffiness, and energizes tired skin for a radiant, healthy glow.",
    icon: "⚡"
  },
  {
    title: "Anti-Inflammatory",
    description: "Natural compounds in cascara help soothe irritated skin, reduce redness, and calm sensitive areas while promoting healing.",
    icon: "🌿"
  },
  {
    title: "Environmental Protection",
    description: "Creates a protective barrier against environmental stressors, pollution, and UV damage while maintaining skin's natural moisture balance.",
    icon: "🌍"
  },
  {
    title: "Brightening Effect",
    description: "Regular use helps even skin tone, fade dark spots, and reveal brighter, more luminous skin through gentle exfoliation and renewal.",
    icon: "💎"
  }
];

const CascaraBenefits = () => {
  return (
    <section id="ingredients" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Science Behind 
              <span className="text-cascara"> Cascara</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Cascara, the dried coffee cherry skin, is typically discarded during coffee processing. 
              We've discovered its incredible potential for skincare - it contains up to 6 times more 
              antioxidants than green tea and powerful compounds that transform your skin.
            </p>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-3xl opacity-20"></div>
              <img 
                src={cascaraImage} 
                alt="Fresh cascara coffee cherries" 
                className="relative z-10 w-full rounded-2xl shadow-elevated"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 animate-slide-up border-0 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-hero text-primary-foreground border-0">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Research-Backed Results
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Studies show that cascara contains up to 25% chlorogenic acid and powerful polyphenols 
                that significantly improve skin elasticity, hydration, and overall appearance within 4 weeks of use.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
                <div>
                  <div className="text-3xl font-bold">6x</div>
                  <div className="text-sm opacity-90">More antioxidants than green tea</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">25%</div>
                  <div className="text-sm opacity-90">Chlorogenic acid content</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4 weeks</div>
                  <div className="text-sm opacity-90">To see visible results</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CascaraBenefits;