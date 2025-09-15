import { Calendar, Database, Receipt, Bell, Smartphone, CreditCard, Clock, Users } from "lucide-react";
import featuresImage from "@/assets/features-showcase.jpg";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Online booking system that syncs with your schedule, prevents double-booking, and sends automatic confirmations."
    },
    {
      icon: Database,
      title: "Customer Database",
      description: "Complete customer history, preferences, past jobs, and contact information accessible from anywhere."
    },
    {
      icon: Receipt,
      title: "Professional Invoicing",
      description: "Generate branded invoices instantly, track payments, and automate follow-ups for overdue accounts."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Automated reminders for appointments, follow-ups, and maintenance schedules keep your business running smoothly."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your entire business system from your phone or tablet while on job sites or traveling."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Accept payments on-site with integrated payment processing, reducing collection time and improving cash flow."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track job time automatically, improve estimates, and ensure accurate billing for all your services."
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Capture, track, and convert leads into customers with automated follow-up sequences and nurture campaigns."
    }
  ];

  return (
    <section id="features" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Every Feature Built Around Your Trade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No generic features here. Every capability is designed specifically for how tradespeople work, 
            ensuring your system actually improves your business instead of complicating it.
          </p>
        </div>

        {/* Hero Feature Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] max-w-4xl mx-auto">
            <img
              src={featuresImage}
              alt="Tradesperson using mobile app for customer management and scheduling"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="text-primary-foreground p-8 max-w-md">
                <h3 className="text-2xl font-bold mb-4">Access Everything On-Site</h3>
                <p className="text-lg">Your entire business system in your pocket - customer history, scheduling, invoicing, and payments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-elegant text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border/50 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Seamless Integration with Your Existing Tools
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We integrate with your current accounting software, payment processors, and communication tools. 
            No need to change everything - we work with what you already use.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="px-4 py-2 bg-muted rounded-lg">QuickBooks</span>
            <span className="px-4 py-2 bg-muted rounded-lg">Square</span>
            <span className="px-4 py-2 bg-muted rounded-lg">Stripe</span>
            <span className="px-4 py-2 bg-muted rounded-lg">Gmail</span>
            <span className="px-4 py-2 bg-muted rounded-lg">SMS</span>
            <span className="px-4 py-2 bg-muted rounded-lg">Google Calendar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;