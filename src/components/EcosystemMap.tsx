
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Sparkles, Users, BookMarked, ArrowRight } from "lucide-react";

const EcosystemMap = () => {
  const connections = [
    { from: "Care", to: "Community", description: "Patient stories & testimonials" },
    { from: "Code", to: "Care", description: "AI tools & platforms" },
    { from: "Commerce", to: "Code", description: "Funding innovation" },
    { from: "Community", to: "Commerce", description: "Market insights" },
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
          DINHA Ecosystem Map
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
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Each stream reinforces and empowers the others, creating a sustainable ecosystem for African healthcare transformation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EcosystemMap;
