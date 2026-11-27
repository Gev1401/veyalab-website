import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pains from "@/components/Pains";
import Solutions from "@/components/Solutions";
import BI from "@/components/BI";
import CaseStudy from "@/components/CaseStudy";
import HowWeWork from "@/components/HowWeWork";
import WhyUs from "@/components/WhyUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Pains />
        <Solutions />
        <BI />
        <CaseStudy />
        <HowWeWork />
        <WhyUs />
        <div id="contact">
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
