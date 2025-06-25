import React from "react";
import { ShieldCheck } from "lucide-react";
const Footer = () => {
  return <footer className="w-full py-12 border-t bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-x-20">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">
              Veya<span className="text-brand-blue">Lab</span>
            </h3>
            <p className="text-gray-500 max-w-xs">We build AI agents that clean your inventory data, automate workflows, and help commercial teams act faster and smarter.</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">GDPR Compliance</h3>
            <p className="text-gray-500 max-w-xs">Your data stays safe. Our AI agents operate under strict GDPR guidelines and never act outside your defined rules.</p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-blue" />
              <span className="text-sm text-gray-500">Data Security Certified</span>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VeyaLab. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-brand-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-brand-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;