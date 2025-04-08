import React from "react";
import { FileUp, Database, UserCheck } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    icon: <FileUp className="h-10 w-10 text-brand-blue" />,
    title: "ICP definition",
    description: "Share your Ideal Customer Profile and the specific client information you want to enrich.",
    number: "1"
  }, {
    icon: <Database className="h-10 w-10 text-brand-purple" />,
    title: "Data Processing & Enrichment",
    description: "We process and clean your data, enriching it with valuable external insights to improve its accuracy and completeness.",
    number: "2"
  }, {
    icon: <UserCheck className="h-10 w-10 text-brand-blue" />,
    title: "Receive Qualified Leads",
    description: "Receive a refined list of potential leads, complete with accurate and up-to-date information, ready for your sales team to act on.",
    number: "3"
  }];
  return <section id="how-it-works" className="w-full py-12 md:py-24 bg-brand-light/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How it <span className="gradient-text">Works</span>
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">Set up AI enrichment in minutes — just tell us your Ideal Customer Profile, and we'll do the rest.
If you could find it manually, our AI can do it for you — but way faster.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative mt-8">
          {steps.map((step, index) => <div key={index} className="process-card relative flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="absolute -top-4 right-4 bg-brand-light rounded-full px-3 py-1 font-semibold text-brand-purple">
                {step.number}
              </div>
              <div className="rounded-full bg-brand-light p-4 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-center">{step.description}</p>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          
          
        </div>
      </div>
    </section>;
};
export default HowItWorks;