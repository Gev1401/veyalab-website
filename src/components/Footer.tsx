import React from "react";
import { ShieldCheck } from "lucide-react";
const Footer = () => {
  return <footer className="w-full py-12 border-t bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">
              Lumus<span className="text-brand-blue ">Labs</span>
            </h3>
            <p className="text-gray-500 max-w-xs">
              Empower your team with enriched CRM data and automated workflows to make right decisions.
            </p>
          </div>
          
          <div className="space-y-4">
            
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LumusLabs. All rights reserved.
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