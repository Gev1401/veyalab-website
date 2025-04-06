
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudy = () => {
  return (
    <section id="case-study" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge className="px-3 py-1 text-sm" variant="secondary">Success Story</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why work with <span className="gradient-text">us</span>
          </h2>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-brand-blue to-brand-purple p-6 md:p-10 text-white">
                  <h3 className="text-2xl font-bold mb-4">Pharmaceutical Packaging Success</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white font-bold">$</span>
                      </div>
                      <p>Additional <span className="font-bold">$18,000</span> in revenue generated</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white font-bold">+</span>
                      </div>
                      <p><span className="font-bold">250+</span> new qualified leads uncovered</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white font-bold">%</span>
                      </div>
                      <p><span className="font-bold">32%</span> increase in sales conversion rate</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10 bg-white">
                  <h4 className="font-semibold mb-4">How we helped them succeed:</h4>
                  <p className="text-gray-600 mb-4">
                    We helped a packaging company earn $18,000 on an additional 250+ leads by enriching their data with information on packaging format, type of drugs produced, and contact information.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                        <span className="text-brand-purple text-sm">✓</span>
                      </div>
                      <span className="text-gray-600">Identified key decision makers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                        <span className="text-brand-purple text-sm">✓</span>
                      </div>
                      <span className="text-gray-600">Added missing contact details</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                        <span className="text-brand-purple text-sm">✓</span>
                      </div>
                      <span className="text-gray-600">Enhanced with industry-specific data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
