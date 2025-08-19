import React from "react";
import { AlertTriangle, TrendingUp, Clock, Users, Zap, Target } from "lucide-react";

const ProblemValue = () => {
  const problems = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      text: "Employees waste hours on repetitive tasks and searching for information."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      text: "Customers wait too long for answers and switch to competitors."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      text: "Sales get stuck — managers don't know the right next step."
    }
  ];

  const solutions = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Knowledge Hub",
      description: "instant, accurate answers from your documents."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "Customer Chatbot", 
      description: "24/7 sales and support across all channels."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "AI Assistant",
      description: "guides employees through processes, especially in sales."
    }
  ];

  return (
    <section className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Gradient Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-secondary/10 to-primary/10 transform -translate-x-1/2"></div>
          
          {/* Problem Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="rounded-full bg-primary/10 p-2">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-headline">
                  Problem
                </h2>
                <p className="text-sm text-text-muted">What blocks growth</p>
              </div>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-hairline card-hover">
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    {problem.icon}
                  </div>
                  <p className="text-body leading-relaxed">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="rounded-full bg-secondary/10 p-2">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-headline gradient-underline">
                  Our Value
                </h2>
              </div>
            </div>
            <p className="text-body text-lg leading-relaxed mb-6">
              We deliver three AI solutions that boost efficiency and profit:
            </p>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-hairline card-hover">
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-headline mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-body">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemValue;