import { Shield, Headphones, Puzzle, Award, Clock, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Puzzle,
      title: "100% Custom Solutions",
      description: "No templates or generic systems. Every feature is built specifically for your trade and workflow.",
      highlight: "Built for You"
    },
    {
      icon: Headphones,
      title: "Dedicated Support Team",
      description: "Personal support from people who understand your business. Not outsourced, not scripted responses.",
      highlight: "Real People"
    },
    {
      icon: Shield,
      title: "Seamless Integration",
      description: "We integrate with your existing tools and processes. No disruption to how you serve customers.",
      highlight: "Zero Disruption"
    },
    {
      icon: Award,
      title: "Trades Experience",
      description: "We've worked with mechanics, plumbers, electricians, and contractors. We know your challenges.",
      highlight: "Industry Experts"
    },
    {
      icon: Clock,
      title: "Rapid Implementation",
      description: "Most systems are live within 2-3 weeks. Start seeing results immediately, not months later.",
      highlight: "Fast Results"
    },
    {
      icon: Zap,
      title: "Ongoing Optimization",
      description: "We continuously improve your system based on how you use it. It gets better over time.",
      highlight: "Always Improving"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Why Tradespeople Choose Our Custom Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another software company. We're specialists in creating business systems 
            that actually work for trades professionals who need results, not complications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="card-elegant group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {reason.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Generic Software vs. Our Custom Solutions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Generic Software Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-destructive flex items-center space-x-2">
                <span className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center text-sm">✗</span>
                <span>Generic Software</span>
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• One-size-fits-all approach</li>
                <li>• Features you don't need</li>
                <li>• Doesn't match your workflow</li>
                <li>• Limited customization options</li>
                <li>• Support that doesn't understand trades</li>
                <li>• Monthly fees with no ownership</li>
              </ul>
            </div>

            {/* Our Custom Solutions Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary flex items-center space-x-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">✓</span>
                <span>Our Custom Solutions</span>
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Built specifically for your trade</li>
                <li>• Only features that add value</li>
                <li>• Matches exactly how you work</li>
                <li>• Unlimited customization</li>
                <li>• Support from trades industry experts</li>
                <li>• One-time investment, you own the system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;