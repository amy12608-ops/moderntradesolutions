import { Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";

const Contact = () => {
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
            {/* Google Form */}
            <div className="card-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Schedule Your Free Consultation
              </h3>
              
              <div className="w-full overflow-hidden rounded-lg">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf-EqSj51Byh0OTDgSdwik7r9haLn-pxq85z7aOSpw_kuk26g/viewform?embedded=true" 
                  width="100%" 
                  height="1126" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  title="Free Consultation Form"
                  className="border-0"
                >
                  Loading…
                </iframe>
              </div>
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
