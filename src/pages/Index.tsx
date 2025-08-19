
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemValue from "@/components/ProblemValue";
import ProductSections from "@/components/ProductSections";
import HowWeWork from "@/components/HowWeWork";
import IntegrationsSecurity from "@/components/IntegrationsSecurity";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemValue />
        <div id="products">
          <ProductSections />
        </div>
        <HowWeWork />
        <div id="integrations">
          <IntegrationsSecurity />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
