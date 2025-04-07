
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, BarChart } from "lucide-react";

const ProvenResults = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Our clients have experienced significant improvements in their sales performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-3xl font-bold mb-2">+37%</h3>
              <p className="text-gray-600">Increase in sales conversion rates</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-3xl font-bold mb-2">92%</h3>
              <p className="text-gray-600">Customer satisfaction rating</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <BarChart className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-3xl font-bold mb-2">2.5x</h3>
              <p className="text-gray-600">ROI on marketing spend</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
