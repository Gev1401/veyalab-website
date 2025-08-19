
import React from "react";
import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-hairline bg-white">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {/* Left: Logo & Tagline */}
          <div className="space-y-2">
            <h3 className="text-base font-bold gradient-text">
              veyalab
            </h3>
            <p className="text-text-muted text-sm leading-tight">
              AI agents for faster workflows, smarter sales, and secure operations.
            </p>
          </div>
          
          {/* Center: GDPR Compliance */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-headline">GDPR Compliance</h3>
            <p className="text-text-muted text-sm leading-tight">
              Your data stays safe. Our AI agents operate under strict GDPR guidelines and never act outside your defined rules.
            </p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-xs text-text-muted">Data Security Certified</span>
            </div>
          </div>
          
          {/* Right: Legal Links */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            <a href="#" className="text-text-muted text-xs hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted text-xs hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
        
        <div className="border-t border-hairline pt-4">
          <p className="text-text-muted text-xs text-center md:text-left">
            © {new Date().getFullYear()} veyalab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
