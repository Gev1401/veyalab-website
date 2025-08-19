import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users } from "lucide-react";

const IntegrationsSecurity = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Integrations & <span className="gradient-text">Security</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Integrations Card */}
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Integrations</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                  <p className="text-gray-600">Slack/Teams, Gmail/Outlook</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Knowledge Systems</h4>
                  <p className="text-gray-600">Confluence/Notion/Drive</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">CRM & Sales</h4>
                  <p className="text-gray-600">amoCRM/Bitrix/HubSpot/Salesforce</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Card */}
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Security</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">All data is stored strictly inside your company and never leaves its perimeter.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Role-based access controls.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Activity audit and personal data protection.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSecurity;