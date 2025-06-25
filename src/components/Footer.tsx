
import React from "react";
import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <div className="space-y-2">
            <h3 className="text-base font-bold gradient-text">
              Veya<span className="text-brand-blue">Lab</span>
            </h3>
            <p className="text-gray-500 text-sm leading-tight max-w-xs">
              We build AI agents that clean your inventory data, automate workflows, and help commercial teams act faster and smarter.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-base font-bold">GDPR Compliance</h3>
            <p className="text-gray-500 text-sm leading-tight max-w-xs">
              Your data stays safe. Our AI agents operate under strict GDPR guidelines and never act outside your defined rules.
            </p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-blue" />
              <span className="text-xs text-gray-500">Data Security Certified</span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} VeyaLab. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-500 text-xs hover:text-brand-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-brand-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
