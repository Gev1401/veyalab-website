
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle } from "lucide-react";

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request submitted!",
        description: "We'll be in touch with you shortly.",
        action: (
          <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
        ),
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to boost your <span className="gradient-text">sales pipeline?</span>
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Get up to 100 leads with our data enrichment service
          </p>
        </div>
        <div className="mx-auto max-w-md mt-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="py-6"
              />
              <Input
                placeholder="Work Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="py-6"
              />
              <Input
                placeholder="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="py-6"
              />
              <Textarea
                placeholder="Tell us about your needs and ideal customer profile"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full text-base shadow-custom py-6" 
              size="lg" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Get up to 100 leads! <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
            <p className="text-xs text-center text-gray-500">
              By submitting this form, you agree to our privacy policy and terms.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
