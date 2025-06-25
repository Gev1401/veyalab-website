
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Database, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomerStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  
  const stories = [
    {
      icon: <AlertTriangle className="h-7 w-7 text-brand-purple" />,
      title: "Streamlining Restock Planning with Automated Alerts",
      description: [
        "A retail chain with 120 stores struggled to keep shelves stocked on time due to slow internal communication and manual reorder tracking. Their commercial team relied on spreadsheets and had no system for proactively flagging low inventory.",
        "We deployed AI agents to monitor key SKUs, predict restocking needs, and notify responsible teams automatically. As a result, they reduced out-of-stock incidents by 38% and recovered over $120K in missed sales within 3 months.",
      ],
    },
    {
      icon: <Database className="h-7 w-7 text-brand-purple" />,
      title: "Cleaning Up Disorganized Inventory Records at Scale",
      description: [
        "A supplier of event equipment had over 17,000 items in their system — but most records were incomplete, duplicated, or outdated. The sales team wasted time chasing internal updates instead of talking to clients.",
        "VeyaLab AI agents cleaned and enriched inventory data automatically, flagged discrepancies, and ensured key fields stayed accurate. This improved forecasting, reduced manual input by 60%, and accelerated time to quote.",
      ],
    },
    {
      icon: <CheckCircle className="h-7 w-7 text-brand-purple" />,
      title: "Automating Reorder Compliance to Prevent Revenue Loss",
      description: [
        "A regional distributor had trouble enforcing restock commitments from partner stores. Follow-ups were manual, often delayed, and led to stockouts in high-margin categories.",
        "We implemented AI-driven reorder enforcement: agents sent friendly nudges, escalation emails, and finally compliance reports. The process increased timely reorders by 45% and helped protect an estimated $250K in quarterly revenue.",
      ],
    },
  ];

  const handlePrev = () => {
    setActiveStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="customer-stories"
      className="w-full py-12 md:py-24 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Customer <span className="gradient-text">Stories</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Real results from businesses like yours
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          {/* Story Card */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-xl overflow-hidden min-h-[350px] transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                {stories[activeStory].icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{stories[activeStory].title}</h3>
              {stories[activeStory].description.map((paragraph, i) => (
                <p key={i} className="text-gray-600 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStory === index 
                    ? "bg-brand-purple scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <Button
              onClick={handlePrev}
              variant="outline"
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
              aria-label="Previous story"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
              aria-label="Next story"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
