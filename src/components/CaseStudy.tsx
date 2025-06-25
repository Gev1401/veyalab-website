
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, BarChart2 } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Case Study: Real Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our AI agents transformed a commercial team's workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">80% Time Saved</h3>
              <p className="text-gray-600">
                Automated data cleaning reduced manual work from hours to minutes
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Target className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">95% Accuracy</h3>
              <p className="text-gray-600">
                AI agents maintained high precision while processing thousands of records
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BarChart2 className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3x Faster Decisions</h3>
              <p className="text-gray-600">
                Clean data enabled faster analysis and strategic decision-making
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
