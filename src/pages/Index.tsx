
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import ProvenResults from "@/components/ProvenResults";
import CustomerStories from "@/components/CustomerStories";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <CaseStudy />
        <ProvenResults />
        <CustomerStories />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
