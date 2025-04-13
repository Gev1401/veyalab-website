
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomerStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  
  const stories = [
    {
      icon: <Rocket className="h-7 w-7 text-brand-purple" />,
      title: "Boosting Sales Outreach with Automated Personalization",
      description: [
        "A company that makes pharmaceutical packaging wanted to send more personalized outreach to potential clients. Their sales team spent over 10 hours a week researching leads and filling out CRM fields by hand — but the data was often messy and not very useful.",
        "We used AI to automate the research and fill in the right packaging needs for each lead. This saved their team a ton of time and increased their meeting booking rate by 30% thanks to better personalization.",
      ],
    },
    {
      icon: <Users className="h-7 w-7 text-brand-purple" />,
      title: "Turning a Messy CRM into Qualified Leads",
      description: [
        "An event equipment rental company had 17,000 messy contacts in their CRM. It was hard to find returning customers or figure out who to contact next.",
        "We filled in missing details, organized the data, and used AI to find the leads that matched their ideal customer. In the end, they got 4,000 qualified leads and closed their first deal from the cleaned list.",
      ],
    },
    {
      icon: <Database className="h-7 w-7 text-brand-purple" />,
      title: "Making a Purchased Lead List Actually Usable",
      description: [
        "One company bought a list of 5,000 leads, but most of it was missing websites, emails, or any useful info. Their sales team couldn't tell who was a good fit — or even how to reach them.",
        "We cleaned the list, found working websites, filled in missing info with AI, and flagged the leads that matched their ideal customer profile. The result: 2,000 sales-ready leads, and a far more efficient outreach process.",
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
