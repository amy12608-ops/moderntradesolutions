import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const CallToAction = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const consultationIncludes = [
    "Complete business workflow analysis",
    "Custom system design and mockups", 
    "Integration planning with existing tools",
    "ROI projection and timeline",
    "No-obligation detailed proposal"
  ];

  return (
    <section className="py-20 section-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Trade Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Stop losing money to disorganized systems. Get a custom solution built specifically 
            for your trade that actually improves your business instead of complicating it.
          </p>

          {/* Free Consultation Offer */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">
              Free Business Analysis & System Design Consultation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-accent mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {consultationIncludes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-primary-foreground/90">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-lg font-semibold text-accent mb-4">Perfect if you're:</h4>
                <ul className="space-y-3 text-primary-foreground/90">
                  <li>• Missing appointments or double-booking</li>
                  <li>• Losing track of customer information</li>
                  <li>• Dealing with late payments regularly</li>
                  <li>• Spending too much time on paperwork</li>
                  <li>• Ready to grow but systems can't keep up</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent-light text-accent-foreground font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2 text-lg"
              >
                <span>Get Your Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <a
                href="tel:437425425"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: 437-425-425</span>
              </a>
            </div>
          </div>

          {/* Urgency/Scarcity */}
          <div className="text-center text-primary-foreground/80">
            <p className="text-lg mb-2">
              <strong className="text-accent">Limited Time:</strong> Free consultation includes custom mockup designs
            </p>
            <p className="text-sm">
              Every day you wait is money left on the table. Start your transformation today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;