import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, TrendingUp, Users, MessageCircle, ShoppingCart, Cake, CheckCircle } from "lucide-react";

const SMETransformation = () => {
  const transformationFramework = [
    {
      step: "1",
      title: "Digital Assessment",
      description: "Comprehensive analysis of current operations and digital readiness",
      icon: TrendingUp
    },
    {
      step: "2", 
      title: "Custom Web Application",
      description: "Scalable React-based web applications with Tailwind CSS for optimal UX",
      icon: Globe
    },
    {
      step: "3",
      title: "WhatsApp Integration",
      description: "WhatsApp Business API integration for enhanced customer engagement",
      icon: MessageCircle
    },
    {
      step: "4",
      title: "Digital Branding",
      description: "Comprehensive branding and marketing strategy implementation",
      icon: Users
    }
  ];

  const caseStudyMetrics = [
    { label: "Revenue Increase", value: "45%", period: "6 months post-launch" },
    { label: "Customer Engagement", value: "200%", period: "via WhatsApp integration" },
    { label: "Order Processing", value: "70% faster", period: "through digital workflows" },
    { label: "Customer Satisfaction", value: "4.8/5", period: "average rating" }
  ];

  const techStack = [
    { component: "Frontend", tech: "React, Tailwind CSS" },
    { component: "Backend/API", tech: "Node.js, Supabase" },
    { component: "Integration", tech: "WhatsApp Business API" },
    { component: "Hosting", tech: "AWS, Cloudflare CDN" }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-800 flex items-center justify-center gap-2">
          <Smartphone className="w-6 h-6" />
          SME Digital Transformation
        </CardTitle>
        <p className="text-center text-green-700">
          Empowering African SMEs through customized digital solutions and proven transformation frameworks
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Transformation Framework */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">Digital Transformation Process</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {transformationFramework.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-blue-700" />
                        <h5 className="font-semibold text-blue-900">{step.title}</h5>
                      </div>
                      <p className="text-sm text-blue-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Case Study: Mister's Bakery */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Cake className="w-6 h-6 text-amber-700" />
            <h4 className="text-lg font-semibold text-amber-900">Mister's Bakery Case Study</h4>
            <Badge className="bg-green-600 text-white">Proven Success</Badge>
          </div>
          
          <p className="text-amber-800 mb-4">
            Our flagship SME transformation project demonstrating real-world impact of NURSAERAHEALTH's digital solutions 
            for African small businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-amber-900 mb-3">Key Achievements</h5>
              <div className="space-y-2">
                {caseStudyMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">
                      <strong>{metric.value}</strong> {metric.label.toLowerCase()} 
                      <span className="text-amber-600"> ({metric.period})</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-amber-900 mb-3">Technologies Implemented</h5>
              <div className="space-y-2">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-amber-800">{tech.component}:</span>
                    <span className="text-amber-700">{tech.tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-amber-200">
            <Button 
              className="bg-amber-700 hover:bg-amber-800 text-white"
              onClick={() => {
                window.open('https://misterbakery.com', '_blank');
              }}
            >
              View Full Case Study
            </Button>
          </div>
        </div>

        {/* Replicable Model */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">Scalable Implementation Model</h4>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 mb-3">
              Our SME transformation approach is designed for rapid replication across Africa:
            </p>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Standardized assessment and implementation protocols
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Reusable software architecture and component library
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Cultural adaptation frameworks for local market needs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Ongoing support and maintenance packages
              </li>
            </ul>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white border border-green-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-900">15+</div>
            <div className="text-sm text-green-700">SMEs Transformed</div>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-900">35%</div>
            <div className="text-sm text-green-700">Avg Revenue Increase</div>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-900">100%</div>
            <div className="text-sm text-green-700">Client Satisfaction</div>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-900">6 mos</div>
            <div className="text-sm text-green-700">Avg ROI Timeline</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SMETransformation;