
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold gradient-text">
            CRM<span className="text-brand-blue">Boost</span>
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
            href="#case-study" 
            className="text-base font-medium text-gray-600 hover:text-brand-blue transition-colors"
          >
            Case Study
          </a>
          <Button asChild>
            <a href="#contact" className="ml-4 font-medium">
              Get Started
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
