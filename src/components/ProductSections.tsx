import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, MessageCircle, Bot } from "lucide-react";

const ProductSections = () => {
  const products = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Knowledge Hub for Employees",
      subtitle: "Scattered documents slow your team down",
      problem: "New hires take too long to onboard, and experienced employees waste hours searching for the right information.",
      solution: "Centralized search across all company systems with role-based access.",
      userStory: "The HR team reduced onboarding time by 25% — employees now get ready-made answers instead of chasing colleagues."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Customer Chatbot",
      subtitle: "When customers wait, you lose deals",
      problem: "Slow replies and missed leads lower your conversion rate.",
      solution: "The bot handles FAQs, captures leads, processes orders, integrates with your CRM, and escalates complex cases to a live agent.",
      userStory: "An e-commerce brand increased leads by 18% from night inquiries, with 65% of routine questions resolved by the bot."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Assistant for Employees",
      subtitle: "Sales managers don't know the next step — deals stall",
      problem: "Without guidance and control, deadlines slip and clients are lost.",
      solution: "The assistant recommends next actions, drafts emails, creates CRM tasks, and shortens the sales cycle.",
      userStory: "New reps hit quota in their first month — the assistant guides them through the pipeline and reduces mistakes."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Product <span className="gradient-text">Solutions</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="rounded-full bg-primary/10 p-4 flex-shrink-0">
                    {product.icon}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                      <h4 className="text-lg text-red-600 font-semibold">{product.subtitle}</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Problem:</span>
                        <p className="text-gray-600 mt-1">{product.problem}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Solution:</span>
                        <p className="text-gray-600 mt-1">{product.solution}</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">User Story:</span>
                        <p className="text-green-700 mt-1">{product.userStory}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSections;