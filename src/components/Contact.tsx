import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, CheckCircle, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState("");
  const [showWebhookInput, setShowWebhookInput] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    trade: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Setup Required",
        description: "Please enter your Zapier webhook URL in the settings above.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Trade Solutions Website"
        }),
      });

      toast({
        title: "Consultation Request Sent!",
        description: "Your request has been sent to Google Sheets. We'll contact you within 24 hours.",
      });
      
      setFormData({
        name: "",
        business: "",
        trade: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending to webhook:", error);
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const trades = [
    "Select your trade...",
    "Plumber",
    "Electrician", 
    "HVAC Technician",
    "Mechanic/Auto Repair",
    "Contractor/General",
    "Roofer",
    "Landscaper",
    "Painter", 
    "Carpenter",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">
              Get Your Free Consultation Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to see how a custom system can transform your trade business? 
              Contact us for a no-obligation consultation and custom system design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-elegant">
              {/* Webhook Setup */}
              <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-muted">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Zapier Integration Setup</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowWebhookInput(!showWebhookInput)}
                  >
                    {showWebhookInput ? "Hide" : "Setup"}
                  </Button>
                </div>
                
                {showWebhookInput && (
                  <div className="space-y-2">
                    <Label htmlFor="webhookUrl" className="text-xs">
                      Zapier Webhook URL (Create a Zap with webhook trigger → Google Sheets)
                    </Label>
                    <Input
                      id="webhookUrl"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                      className="text-sm"
                    />
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6">
                Schedule Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Business Name</Label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      placeholder="Smith Plumbing Services"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trade">Your Trade *</Label>
                  <select
                    id="trade"
                    name="trade"
                    value={formData.trade}
                    onChange={(e) => setFormData(prev => ({ ...prev, trade: e.target.value }))}
                    required
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    {trades.map((trade, index) => (
                      <option key={index} value={index === 0 ? "" : trade}>
                        {trade}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@smithplumbing.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your biggest business challenges</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="I'm struggling with double-booked appointments and customers not paying invoices on time..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full text-lg"
                >
                  {isSubmitting ? "Sending..." : "Get My Free Consultation"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone CTA */}
              <div className="card-elegant text-center section-primary">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Prefer to Talk Right Now?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Call us directly for immediate consultation scheduling and answers to your questions.
                </p>
                <a
                  href="tel:4374256969"
                  className="btn-hero inline-flex items-center space-x-2 bg-accent hover:bg-accent-light text-accent-foreground text-xl font-bold py-4 px-8"
                >
                  <Phone className="w-6 h-6" />
                  <span>437-425-6969</span>
                </a>
                <p className="text-primary-foreground/80 text-sm mt-4">
                  Monday - Friday: 8 AM - 6 PM<br />
                  Saturday: 9 AM - 4 PM
                </p>
              </div>

              {/* What Happens Next */}
              <div className="card-elegant">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>What Happens Next?</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">We Call You Within 24 Hours</h4>
                      <p className="text-muted-foreground text-sm">Quick phone conversation to understand your business needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Free Business Analysis</h4>
                      <p className="text-muted-foreground text-sm">We analyze your workflow and identify improvement opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Custom System Design</h4>
                      <p className="text-muted-foreground text-sm">We create mockups and detailed plans for your custom solution.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Your Decision</h4>
                      <p className="text-muted-foreground text-sm">No pressure. Review everything and decide if it's right for your business.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">Other Ways to Reach Us</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">info@tradesolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Live chat available during business hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
