import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing Services",
      trade: "Plumber",
      rating: 5,
      quote: "Since getting our custom system, we've eliminated double bookings completely. Our cash flow improved by 40% because invoices get sent instantly, and customers can pay on the spot. Best investment I've made for my business.",
      result: "40% improved cash flow"
    },
    {
      name: "Sarah Chen",
      business: "Elite Electric Solutions", 
      trade: "Electrician",
      rating: 5,
      quote: "I was skeptical about custom software, but this system fits exactly how I work. I can access customer history while on site, schedule follow-ups instantly, and my professional invoices have increased my average job value.",
      result: "25% higher job values"
    },
    {
      name: "Tony Marconi",
      business: "Marconi Auto Repair",
      trade: "Mechanic",
      rating: 5,
      quote: "The appointment system has transformed my shop. Customers love booking online, and I love that I never lose track of a job. We're serving 30% more customers with the same staff because everything runs so smoothly.",
      result: "30% more customers served"
    },
    {
      name: "Lisa Thompson",
      business: "Thompson HVAC",
      trade: "HVAC Contractor",
      rating: 5,
      quote: "What impressed me most was how they understood my business before building anything. The system handles emergency calls, routine maintenance, and seasonal bookings exactly how I need it to work.",
      result: "Zero missed appointments"
    },
    {
      name: "Dave Patterson",
      business: "Patterson Roofing",
      trade: "Roofer",
      rating: 5,
      quote: "I went from losing jobs because I couldn't follow up properly to having a system that nurtures every lead automatically. My conversion rate doubled, and I never lose track of potential customers anymore.",
      result: "Doubled conversion rate"
    },
    {
      name: "Carlos Martinez",
      business: "Superior Landscaping",
      trade: "Landscaper",
      rating: 5,
      quote: "The mobile access is game-changing. I can update job status, take photos, and send invoices while still on the property. Customers get immediate service, and I get paid faster.",
      result: "50% faster payments"
    }
  ];

  return (
    <section id="testimonials" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Real Results from Real Tradespeople
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what trades professionals say about 
            their custom systems and the impact on their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant group">
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Result Highlight */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                <div className="text-accent font-semibold text-sm">Key Result:</div>
                <div className="text-accent-dark font-bold">{testimonial.result}</div>
              </div>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                <div className="text-xs text-primary font-medium mt-1">{testimonial.trade}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">35%</div>
            <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">2-3</div>
            <div className="text-sm text-muted-foreground">Weeks to Implementation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Ongoing Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;