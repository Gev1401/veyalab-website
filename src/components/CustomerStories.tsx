
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, Database } from "lucide-react";

const CustomerStories = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Customer <span className="gradient-text">Stories</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Real results from businesses like yours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <Rocket className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Boosting Sales Outreach with Automated Personalization</h3>
              <p className="text-gray-600 mb-4">
                A company that makes pharmaceutical packaging wanted to send more personalized outreach to potential clients. 
                Their sales team spent over 10 hours a week researching leads and filling out CRM fields by hand — but the 
                data was often messy and not very useful.
              </p>
              <p className="text-gray-600">
                We used AI to automate the research and fill in the right packaging needs for each lead. This saved their team 
                a ton of time and increased their meeting booking rate by 30% thanks to better personalization.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Turning a Messy CRM into Qualified Leads</h3>
              <p className="text-gray-600 mb-4">
                An event equipment rental company had 17,000 messy contacts in their CRM. It was hard to find returning 
                customers or figure out who to contact next.
              </p>
              <p className="text-gray-600">
                We filled in missing details, organized the data, and used AI to find the leads that matched their ideal 
                customer. In the end, they got 4,000 qualified leads and closed their first deal from the cleaned list.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <Database className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Making a Purchased Lead List Actually Usable</h3>
              <p className="text-gray-600 mb-4">
                One company bought a list of 5,000 leads, but most of it was missing websites, emails, or any useful info. 
                Their sales team couldn't tell who was a good fit — or even how to reach them.
              </p>
              <p className="text-gray-600">
                We cleaned the list, found working websites, filled in missing info with AI, and flagged the leads that 
                matched their ideal customer profile. The result: 2,000 sales-ready leads, and a far more efficient outreach process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
