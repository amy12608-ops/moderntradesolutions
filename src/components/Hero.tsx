import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tradesperson.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="heading-hero">
                Custom Digital Solutions Built for Your Trade
              </h1>
              <p className="text-hero-sub max-w-2xl">
                We don't sell generic software. We build personalized appointment booking, CRM, and invoicing systems designed specifically for your trade business - whether you're a mechanic, plumber, electrician, or contractor.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-hero flex items-center space-x-2 text-lg"
              >
                <span>Get Your Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="tel:437425425"
                className="btn-secondary flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">437-425-425</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Custom Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={heroImage}
                alt="Professional tradesperson using custom digital scheduling system"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-[var(--shadow-card)] border border-border/50">
              <div className="text-2xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground">Efficiency Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;