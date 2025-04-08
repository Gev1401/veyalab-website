
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, BarChart2 } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="why-work-with-us" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why work <span className="gradient-text">with us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Let your sales team focus on closing deals — we'll handle the data heavy lifting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="border border-gray-100 shadow-lg rounded-xl overflow-hidden bg-white">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                <Target className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold">Reduce wasted outreach efforts</h3>
              <p className="text-gray-600">
                AI-enriched CRM data helps focus only on sales-ready leads with hyper-personalized approaches
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 shadow-lg rounded-xl overflow-hidden bg-white">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                <BarChart2 className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold">Boost deal conversion rates</h3>
              <p className="text-gray-600">
                Precise lead segmentation by product fit and buyer readiness increases meeting-to-deal conversion
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 shadow-lg rounded-xl overflow-hidden bg-white">
            <CardContent className="p-6 flex flex-col items-start space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold">Save 10+ hours weekly per rep</h3>
              <p className="text-gray-600">
                Automating manual CRM updates gives each seller back 2+ full selling days every month
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
