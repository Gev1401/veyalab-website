import React from "react";
import { Search, Link, TestTube, TrendingUp } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Diagnostics",
      description: "analyze processes and goals.",
      number: "1"
    },
    {
      icon: <Link className="h-10 w-10 text-primary" />,
      title: "Integration",
      description: "connect CRM, knowledge bases, messengers.",
      number: "2"
    },
    {
      icon: <TestTube className="h-10 w-10 text-primary" />,
      title: "Pilot (4-6 weeks)",
      description: "test with measurable KPIs.",
      number: "3"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Scale",
      description: "roll out across teams or the entire company.",
      number: "4"
    }
  ];

  return (
    <section id="how-we-work" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How We <span className="gradient-text">Work</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-8">
          {steps.map((step, index) => (
            <div key={index} className="process-card relative flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="absolute -top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                {step.number}
              </div>
              <div className="rounded-full bg-primary/10 p-4 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-500 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;