import { AlertTriangle, Clock, FileX, DollarSign } from "lucide-react";
import problemSolutionImage from "@/assets/problem-solution.jpg";

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Double-Booked Appointments",
      description: "Paper calendars and sticky notes lead to scheduling conflicts and frustrated customers."
    },
    {
      icon: FileX,
      title: "Lost Customer Information",
      description: "Important client details scattered across notebooks, business cards, and memory."
    },
    {
      icon: DollarSign,
      title: "Delayed Payments",
      description: "Manual invoicing creates delays, errors, and cash flow problems for your business."
    },
    {
      icon: AlertTriangle,
      title: "Missed Opportunities",
      description: "No system to follow up with leads or track repeat customers means lost revenue."
    }
  ];

  return (
    <section id="problem" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Every Day, Tradespeople Lose Money to Outdated Systems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You're skilled at your trade, but managing appointments, customer data, and invoices shouldn't 
            be this complicated. Generic apps don't understand your workflow, and paper systems can't keep up 
            with your growing business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={problemSolutionImage}
                alt="Chaotic paper schedules transforming into organized digital systems"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Overlay Stats */}
            <div className="absolute top-6 right-6 bg-destructive text-destructive-foreground rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold">25%</div>
              <div className="text-sm">Revenue Lost</div>
            </div>
          </div>

          {/* Problems List */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-12 p-6 bg-destructive/5 border border-destructive/20 rounded-xl">
              <h4 className="text-lg font-semibold text-destructive mb-3">
                The Real Cost of Disorganization
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Missed appointments = Lost revenue</li>
                <li>• Poor follow-up = Customers don't return</li>
                <li>• Late invoices = Cash flow problems</li>
                <li>• No customer history = Repeat work opportunities missed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;