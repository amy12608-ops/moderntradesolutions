import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Wrench, Users, Receipt } from "lucide-react";

const Solution = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutionFeatures = [
    {
      icon: Wrench,
      title: "Built for Your Trade",
      description: "Every feature designed around how you actually work - not generic business software."
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Fits into your existing workflow without disrupting how you serve customers."
    },
    {
      icon: Receipt,
      title: "Complete Business Management",
      description: "Booking, customer management, and invoicing work together as one system."
    }
  ];

  const benefits = [
    "No more double-booked appointments",
    "Customer history at your fingertips",
    "Instant professional invoices",
    "Automated follow-up reminders",
    "Mobile access from any job site",
    "Seamless payment processing"
  ];

  return (
    <section id="solution" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Custom-Built Systems That Actually Work for Trades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't adapt your business to fit our software. We build software that fits your business. 
            Every system is custom-designed for your specific trade, workflow, and customer needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutionFeatures.map((feature, index) => (
            <div key={index} className="card-elegant text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="section-primary rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-8">
            What You Get With Our Custom Solution
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-primary-foreground">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-2 text-lg"
            >
              <span>Start Your Custom Solution</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('features')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
            >
              See All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;