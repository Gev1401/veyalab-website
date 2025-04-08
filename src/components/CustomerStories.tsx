import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, Database } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CustomerStories = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
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

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem
                key={index}
                className={`md:basis-full ${index === currentIndex ? "block" : "hidden"}`}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-xl overflow-hidden h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                      {story.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                    {story.description.map((paragraph, i) => (
                      <p key={i} className="text-gray-600 mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ✅ Управление стрелками без вложенного button */}
          <div className="flex justify-center gap-4 mt-6">
            <div role="button" onClick={handlePrevious}>
              <CarouselPrevious />
            </div>
            <div role="button" onClick={handleNext}>
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerStories;