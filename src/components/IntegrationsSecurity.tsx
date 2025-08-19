import React from "react";
import { Zap, Shield, Lock, CheckCircle } from "lucide-react";

const IntegrationsSecurity = () => {
  const integrationLogos = [
    { name: "Slack", category: "communication" },
    { name: "Teams", category: "communication" },
    { name: "Gmail", category: "communication" },
    { name: "Outlook", category: "communication" },
    { name: "Confluence", category: "knowledge" },
    { name: "Notion", category: "knowledge" },
    { name: "Drive", category: "knowledge" },
    { name: "amoCRM", category: "crm" },
    { name: "Bitrix", category: "crm" },
    { name: "HubSpot", category: "crm" },
    { name: "Salesforce", category: "crm" }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="h-5 w-5 text-primary" />,
      title: "Data Isolation",
      text: "All data is stored strictly inside your company and never leaves its perimeter."
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      title: "Access Control",
      text: "Role-based access controls."
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Compliance",
      text: "Activity audit and personal data protection."
    }
  ];

  return (
    <section className="w-full py-20 md:py-24 bg-surface">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Integrations Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-headline">Integrations</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-3">Communication</h4>
                <div className="flex flex-wrap gap-3">
                  {integrationLogos.filter(logo => logo.category === "communication").map((logo, index) => (
                    <div key={index} className="px-3 py-2 bg-white rounded-lg border border-hairline text-sm text-body hover:text-primary transition-colors cursor-pointer">
                      {logo.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-3">Knowledge Systems</h4>
                <div className="flex flex-wrap gap-3">
                  {integrationLogos.filter(logo => logo.category === "knowledge").map((logo, index) => (
                    <div key={index} className="px-3 py-2 bg-white rounded-lg border border-hairline text-sm text-body hover:text-primary transition-colors cursor-pointer">
                      {logo.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-3">CRM & Sales</h4>
                <div className="flex flex-wrap gap-3">
                  {integrationLogos.filter(logo => logo.category === "crm").map((logo, index) => (
                    <div key={index} className="px-3 py-2 bg-white rounded-lg border border-hairline text-sm text-body hover:text-primary transition-colors cursor-pointer">
                      {logo.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-text-muted">…and more via API</p>
            </div>
          </div>

          {/* Security Section */}
          <div className="space-y-8 relative">
            {/* Lock watermark */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
              <Lock className="h-32 w-32 text-primary" />
            </div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-headline gradient-underline">Security</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-headline mb-1">{feature.title}</h4>
                    <p className="text-body leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSecurity;