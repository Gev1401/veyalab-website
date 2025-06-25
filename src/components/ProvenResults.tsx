
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Target } from "lucide-react";

const ProvenResults = () => {
  const benefits = [
    {
      icon: <Zap className="h-7 w-7 text-brand-purple" />,
      title: "Seamless Integration",
      description: "No complex setups needed; we integrate directly into your existing systems."
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-brand-purple" />,
      title: "Increased Profitability",
      description: "Our clients see up to 68% faster order fulfillment and a 75% reduction in overstock."
    },
    {
      icon: <Target className="h-7 w-7 text-brand-purple" />,
      title: "92% Inventory Accuracy",
      description: "Avoid costly stock errors and ensure smooth, efficient operations."
    }
  ];

  return (
    <section id="why-work-with-us" className="w-full py-12 md:py-24 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Work <span className="gradient-text">with Us</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Let your team focus on growing the business — we'll handle the inventory management for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
