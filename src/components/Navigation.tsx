import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TS</span>
            </div>
            <span className="text-xl font-bold text-primary">TradeSolutions</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="text-foreground hover:text-primary transition-colors"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Solution
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:437425425"
              className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">437-425-425</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-hero"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('problem')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                The Problem
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Our Solution
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <div className="pt-4 border-t border-border/50">
                <a
                  href="tel:437425425"
                  className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">437-425-425</span>
                </a>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="btn-hero w-full"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;