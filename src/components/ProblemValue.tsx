import React from "react";
import { AlertTriangle, TrendingUp, Clock, Users } from "lucide-react";

const ProblemValue = () => {
  const problems = [
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      text: "Employees waste hours on repetitive tasks and searching for information."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      text: "Customers wait too long for answers and switch to competitors."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      text: "Sales get stuck — managers don't know the right next step."
    }
  ];

  const solutions = [
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Knowledge Hub",
      description: "instant, accurate answers from your documents."
    },
    {
      icon: <AlertTriangle className="h-7 w-7 text-primary" />,
      title: "Customer Chatbot", 
      description: "24/7 sales and support across all channels."
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-primary" />,
      title: "AI Assistant",
      description: "guides employees through processes, especially in sales."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-red-600">
              Problem
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  {problem.icon}
                  <p className="text-gray-600">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Our <span className="gradient-text">Value</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We deliver three AI solutions that boost efficiency and profit:
            </p>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary">
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">{solution.description}</p>
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