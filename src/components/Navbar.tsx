
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold gradient-text">
            Veya<span className="text-brand-blue">Lab</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#how-it-works" 
            className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#why-work-with-us" 
            className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors"
          >
            Why Work With Us
          </a>
          <a 
            href="#customer-stories" 
            className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors"
          >
            Customer Stories
          </a>
          <Button asChild>
            <a href="https://calendly.com/george-veyalab/30min" className="ml-4 font-medium">
              Get 100 enriched leads
            </a>
          </Button>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
