
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, LineChart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-hero-pattern">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Boost your revenue with <span className="gradient-text">AI data enrichment</span> and automation
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
              Empower your team with enriched CRM data and automated workflows to make right decisions.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button 
              size="lg" 
              className="w-full text-base font-medium shadow-custom" 
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                Get up to 100 leads! <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100">
            <Database className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">Enriched Data</h3>
            <p className="text-sm text-center text-gray-500 mt-2">
              Complete your CRM with missing contact information and company details
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 animate-float">
            <LineChart className="h-12 w-12 text-brand-purple mb-4" />
            <h3 className="text-lg font-semibold">Intelligent Insights</h3>
            <p className="text-sm text-center text-gray-500 mt-2">
              Get actionable intelligence on your leads' needs and buying signals
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100">
            <Users className="h-12 w-12 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">Qualified Leads</h3>
            <p className="text-sm text-center text-gray-500 mt-2">
              Connect with the right decision-makers and increase conversion rates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
