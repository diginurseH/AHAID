import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Shield, Users, Globe, Stethoscope, ChartBar, MessageSquare } from "lucide-react";

const NursaeraPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Health Assistant",
      description: "NLP-enabled chatbot providing real-time health monitoring and personalized recommendations for chronic diseases",
      status: "Live"
    },
    {
      icon: Stethoscope,
      title: "Clinical Documentation",
      description: "Comprehensive dashboards for healthcare professionals to manage patient care and clinical workflows",
      status: "Live"
    },
    {
      icon: ChartBar,
      title: "Health Analytics",
      description: "Ethical, anonymized health analytics to inform public health strategies and policy decisions",
      status: "Beta"
    },
    {
      icon: MessageSquare,
      title: "Emotional Wellness Support",
      description: "Culturally-tailored emotional and spiritual support integrated into health management",
      status: "Live"
    }
  ];

  const technicalSpecs = [
    { label: "Frontend", value: "React, Tailwind CSS, shadcn-ui" },
    { label: "Backend", value: "Python (Flask/FastAPI), SQLAlchemy" },
    { label: "Database", value: "Supabase (PostgreSQL)" },
    { label: "AI/ML", value: "NLP models, supervised learning" },
    { label: "Hosting", value: "AWS with Cloudflare CDN" },
    { label: "Documentation", value: "Mintlify, Sphinx" }
  ];

  const complianceFeatures = [
    { icon: Shield, title: "GDPR & HIPAA Compliant", description: "Full data protection compliance" },
    { icon: Globe, title: "Multilingual", description: "English, French, Swahili support" },
    { icon: Users, title: "Zero Surveillance", description: "Ethical data governance principles" }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-800 flex items-center justify-center gap-2">
          <Brain className="w-6 h-6" />
          Nursaera Digital Health Platform
        </CardTitle>
        <p className="text-center text-green-700">
          AI-powered healthcare platform for chronic disease management and community health optimization
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Core Features */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">Core Features</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-green-700 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="font-semibold text-green-900">{feature.title}</h5>
                        <Badge variant={feature.status === "Live" ? "default" : "secondary"} className="text-xs">
                          {feature.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-green-700">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">Technical Architecture</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {technicalSpecs.map((spec, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-green-100">
                <span className="font-medium text-green-900">{spec.label}:</span>
                <span className="text-green-700">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Ethics */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">Compliance & Ethics</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {complianceFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <Icon className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                  <h5 className="font-semibold text-amber-900 mb-1">{item.title}</h5>
                  <p className="text-xs text-amber-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-green-100 border border-green-200 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-green-800 mb-3">Platform Impact</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-900">1,200+</div>
              <div className="text-sm text-green-700">Patients Supported</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-900">300+</div>
              <div className="text-sm text-green-700">Healthcare Providers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-900">94.2%</div>
              <div className="text-sm text-green-700">AI Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-900">5,000+</div>
              <div className="text-sm text-green-700">AI Consultations</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NursaeraPlatform;