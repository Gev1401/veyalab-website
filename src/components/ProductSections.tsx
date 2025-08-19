import React from "react";
import { Database, MessageCircle, Bot, Quote } from "lucide-react";

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
    <section className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-headline">
            Product <span className="gradient-text">Solutions</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl border border-hairline p-6 md:p-8 card-hover">
              {/* Header Row */}
              <div className="flex items-start gap-6 mb-6">
                <div className="rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 p-4 flex-shrink-0">
                  {product.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-headline mb-2">{product.title}</h3>
                  <p className="text-text-muted text-lg">{product.subtitle}</p>
                </div>
              </div>
              
              {/* Body Blocks */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-body uppercase tracking-wide">
                    Problem
                  </span>
                  <p className="text-body leading-relaxed flex-1">{product.problem}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground uppercase tracking-wide">
                    Solution
                  </span>
                  <p className="text-body leading-relaxed flex-1">{product.solution}</p>
                </div>
                
                <div className="bg-surface p-4 rounded-xl border-l-4 border-gradient-to-b from-primary to-secondary relative">
                  <Quote className="h-4 w-4 text-primary absolute top-4 right-4 opacity-60" />
                  <span className="inline-flex items-center text-xs font-medium text-primary uppercase tracking-wide mb-2">
                    User Story
                  </span>
                  <p className="text-body leading-relaxed">{product.userStory}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSections;