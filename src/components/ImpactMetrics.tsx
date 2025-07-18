
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Code, Heart, DollarSign, Brain, Globe, Shield } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      stream: "Care (Nursaera)",
      icon: Heart,
      metrics: [
        { label: "Chronic disease patients supported", value: "1,200+", trend: "+40%" },
        { label: "AI health consultations delivered", value: "5,000+", trend: "+65%" },
        { label: "Healthcare providers using platform", value: "300+", trend: "+55%" }
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
      stream: "Commerce (SME Digital)",
      icon: DollarSign,
      metrics: [
        { label: "SMEs digitally transformed", value: "15+", trend: "+150%" },
        { label: "Revenue increase (avg per SME)", value: "35%", trend: "+20%" },
        { label: "Mister's Bakery case study", value: "Success", trend: "Proven" }
      ],
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const platformMetrics = [
    {
      icon: Brain,
      label: "AI Model Accuracy",
      value: "94.2%",
      description: "Chronic disease prediction accuracy"
    },
    {
      icon: Globe,
      label: "Multilingual Support",
      value: "3 Languages",
      description: "English, French, Swahili"
    },
    {
      icon: Shield,
      label: "Data Compliance",
      value: "100%",
      description: "GDPR & HIPAA compliant"
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
        
        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold text-green-800 text-center">Platform Performance</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {platformMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <Icon className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                  <div className="text-xl font-bold text-amber-900">{metric.value}</div>
                  <div className="text-sm font-semibold text-amber-800">{metric.label}</div>
                  <div className="text-xs text-amber-700 mt-1">{metric.description}</div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Metrics updated quarterly. Growth percentages represent year-over-year change. Platform hosted on AWS with Cloudflare CDN.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactMetrics;
