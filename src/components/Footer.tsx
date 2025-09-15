import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">TS</span>
              </div>
              <span className="text-xl font-bold">TradeSolutions</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Custom digital solutions built specifically for tradespeople. 
              We create appointment booking, CRM, and invoicing systems that actually work for your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('problem')}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                The Problem
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Our Solution
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Testimonials
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>• Custom Appointment Booking Systems</li>
              <li>• Trade-Specific CRM Solutions</li>
              <li>• Automated Invoicing & Payments</li>
              <li>• Mobile Business Management</li>
              <li>• System Integration & Support</li>
              <li>• Business Process Optimization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:437425425"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-accent">437-425-425</div>
                  <div className="text-sm">Call for immediate consultation</div>
                </div>
              </a>
              
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <div>
                  <div>info@tradesolutions.com</div>
                  <div className="text-sm">Email us your questions</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <div>
                  <div>Serving All of Ontario</div>
                  <div className="text-sm">Remote consultation available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trades We Serve */}
        <div className="border-t border-primary-foreground/20 py-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Trades We Specialize In</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">Plumbers</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">Electricians</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">HVAC Technicians</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">Auto Mechanics</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">General Contractors</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">Roofers</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">Landscapers</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">Painters</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full">Carpenters</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 TradeSolutions. All rights reserved. Built specifically for trades professionals.
          </div>
          <div className="flex space-x-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;