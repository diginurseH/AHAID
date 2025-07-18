
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Code, Heart, DollarSign } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      stream: "Care",
      icon: Heart,
      metrics: [
        { label: "Healthcare professionals trained", value: "500+", trend: "+25%" },
        { label: "AI consultations provided", value: "2,000+", trend: "+40%" },
        { label: "Chronic disease protocols deployed", value: "15", trend: "+50%" }
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      stream: "Code",
      icon: Code,
      metrics: [
        { label: "Open-source projects", value: "12", trend: "+60%" },
        { label: "Developer contributions", value: "150+", trend: "+35%" },
        { label: "API integrations", value: "25+", trend: "+80%" }
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      stream: "Community",
      icon: Users,
      metrics: [
        { label: "Community members", value: "5,000+", trend: "+45%" },
        { label: "Stories shared", value: "300+", trend: "+30%" },
        { label: "Webinars conducted", value: "50+", trend: "+25%" }
      ],
      color: "bg-amber-50 border-amber-200"
    },
    {
      stream: "Commerce",
      icon: DollarSign,
      metrics: [
        { label: "SMEs supported", value: "25+", trend: "+100%" },
        { label: "Digital solutions deployed", value: "40+", trend: "+120%" },
        { label: "Revenue generated", value: "$50K+", trend: "+200%" }
      ],
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-800 flex items-center justify-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Impact Metrics Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((stream) => {
            const Icon = stream.icon;
            return (
              <div
                key={stream.stream}
                className={`${stream.color} rounded-lg border p-4`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-green-700" />
                  <h4 className="text-lg font-semibold text-green-900">{stream.stream} Stream</h4>
                </div>
                
                <div className="space-y-3">
                  {stream.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-green-800">{metric.label}</div>
                        <div className="text-xl font-bold text-green-900">{metric.value}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-green-600">Growth</div>
                        <div className="text-sm font-semibold text-green-700 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {metric.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Metrics updated quarterly. Growth percentages represent year-over-year change.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactMetrics;
