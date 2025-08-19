
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b relative z-50">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold gradient-text">
            Veya<span className="text-brand-blue">Lab</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#how-we-work" 
            className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
          >
            How We Work
          </a>
          <a 
            href="#products" 
            className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Solutions
          </a>
          <a 
            href="#integrations" 
            className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Integrations
          </a>
          <Button asChild>
            <a href="https://calendly.com/george-veyalab/30min" className="ml-4 font-medium">
              Get consultation
            </a>
          </Button>
        </nav>
        <Button 
          variant="outline" 
          size="sm" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 transform",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container pt-20 px-4">
          <nav className="flex flex-col items-center gap-6">
            <a 
              href="#how-we-work" 
              className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How We Work
            </a>
            <a 
              href="#products" 
              className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#integrations" 
              className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </a>
            <Button 
              asChild
              className="mt-4 w-full" 
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="https://calendly.com/george-veyalab/30min">
                Get consultation
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
