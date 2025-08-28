import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sustainabilityStats = [
  {
    number: "40%",
    label: "Of coffee cherry is typically wasted",
    description: "We transform this waste into powerful skincare ingredients"
  },
  {
    number: "100%",
    label: "Natural ingredients",
    description: "No synthetic chemicals, parabens, or harmful additives"
  },
  {
    number: "Zero",
    label: "Waste production",
    description: "Our circular approach ensures nothing goes to landfills"
  }
];

const impactAreas = [
  {
    title: "Environmental Impact",
    description: "By utilizing cascara, we reduce agricultural waste and create value from materials that would otherwise be discarded.",
    icon: "🌱"
  },
  {
    title: "Supporting Farmers",
    description: "Our cascara sourcing provides additional income streams for coffee farmers, supporting sustainable agricultural practices.",
    icon: "👥"
  },
  {
    title: "Circular Beauty",
    description: "We believe beauty shouldn't come at the cost of the environment. Our products prove that sustainability and effectiveness go hand in hand.",
    icon: "♻️"
  }
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-gradient-product">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Beauty That Makes a 
            <span className="text-forest"> Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            At Redeem, we're not just creating skincare - we're redefining what beauty means 
            in a sustainable world. Every product tells a story of transformation and responsibility.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {sustainabilityStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-elevated transition-all duration-300 animate-slide-up border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-cascara mb-4 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Impact Areas */}
        <div className="space-y-8 mb-16">
          {impactAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 animate-slide-up border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                      {area.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <Card className="bg-gradient-hero text-primary-foreground border-0 animate-slide-up">
          <CardContent className="p-12 text-center">
            <h3 className="font-serif text-3xl font-semibold mb-6">
              Join the Sustainable Beauty Revolution
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Every purchase supports our mission to transform waste into wonder, 
              creating a more sustainable future for beauty, one product at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" className="bg-cream text-forest hover:bg-secondary">
                Shop Sustainable
              </Button>
              <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream/10">
                Learn Our Process
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Sustainability;