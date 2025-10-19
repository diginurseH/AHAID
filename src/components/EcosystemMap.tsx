
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Sparkles, Users, BookMarked, ArrowRight, Brain, Shield, Globe } from "lucide-react";

const EcosystemMap = () => {
  const connections = [
    { from: "Care", to: "Community", description: "Nursaera AI insights & patient outcomes" },
    { from: "Code", to: "Care", description: "AI/ML platforms & health analytics" },
    { from: "Commerce", to: "Code", description: "SME funding & tech innovation" },
    { from: "Community", to: "Commerce", description: "Cultural insights & market validation" },
  ];

  const coreInfrastructure = [
    { icon: Brain, title: "Nursaera Platform", description: "AI-powered digital health platform for chronic disease management" },
    { icon: Shield, title: "Ethical AI Framework", description: "GDPR/HIPAA compliant, zero-surveillance data governance" },
    { icon: Globe, title: "Multilingual Support", description: "English, French, Swahili localization for African communities" },
  ];

  const streams = [
    { id: "care", title: "Care", icon: HeartPulse, color: "bg-green-100 text-green-800", position: "top-left" },
    { id: "code", title: "Code", icon: Sparkles, color: "bg-blue-100 text-blue-800", position: "top-right" },
    { id: "community", title: "Community", icon: Users, color: "bg-amber-100 text-amber-800", position: "bottom-left" },
    { id: "commerce", title: "Commerce", icon: BookMarked, color: "bg-yellow-100 text-yellow-800", position: "bottom-right" },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-800">
          NURSAERAHEALTH Ecosystem Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative grid grid-cols-2 gap-8 p-8">
          {streams.map((stream) => {
            const Icon = stream.icon;
            return (
              <div
                key={stream.id}
                className={`${stream.color} rounded-lg p-4 text-center flex flex-col items-center justify-center h-24`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="font-semibold">{stream.title}</span>
              </div>
            );
          })}
          
          {/* Connection lines - simplified visual representation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
              {connections.map((conn, idx) => (
                <div key={idx} className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded shadow-sm">
                  <ArrowRight className="w-3 h-3" />
                  <span>{conn.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-y-6">
          <h4 className="text-lg font-semibold text-green-800 text-center">Core Infrastructure</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {coreInfrastructure.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <Icon className="w-6 h-6 text-green-700 mx-auto mb-2" />
                  <h5 className="font-semibold text-green-900 mb-1">{item.title}</h5>
                  <p className="text-xs text-green-700">{item.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Built on React, Python (Flask/FastAPI), Supabase, with AWS hosting and Cloudflare CDN for optimal performance across Africa.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EcosystemMap;
