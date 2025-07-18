
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Smartphone, 
  Network, 
  Shield,
  ArrowRight,
  BarChart3,
  Repeat
} from "lucide-react";

interface DashboardSection {
  id: string;
  title: string;
  description: string;
  icon: any;
  badge?: string;
  color: string;
  metrics?: { label: string; value: string }[];
}

interface EcosystemDashboardProps {
  onSectionClick: (sectionId: string) => void;
}

const EcosystemDashboard = ({ onSectionClick }: EcosystemDashboardProps) => {
  const dashboardSections: DashboardSection[] = [
    {
      id: "nursaera",
      title: "Nursaera Platform",
      description: "AI-powered digital health platform for chronic disease management",
      icon: Brain,
      badge: "Live Platform",
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      metrics: [
        { label: "Patients Supported", value: "1,200+" },
        { label: "Healthcare Providers", value: "300+" },
        { label: "AI Accuracy", value: "94.2%" }
      ]
    },
    {
      id: "sme",
      title: "SME Transformation",
      description: "Digital transformation services for African small businesses",
      icon: Smartphone,
      badge: "Proven Success",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      metrics: [
        { label: "SMEs Transformed", value: "15+" },
        { label: "Avg Revenue Increase", value: "35%" },
        { label: "Client Satisfaction", value: "100%" }
      ]
    },
    {
      id: "impact",
      title: "Impact Metrics",
      description: "Real-time analytics and performance indicators across all streams",
      icon: BarChart3,
      badge: "Live Data",
      color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
      metrics: [
        { label: "Community Members", value: "5,000+" },
        { label: "AI Consultations", value: "5,000+" },
        { label: "Developer Contributions", value: "150+" }
      ]
    },
    {
      id: "network",
      title: "Stakeholder Network",
      description: "Strategic partners and community collaborations",
      icon: Users,
      badge: "Global Network",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      metrics: [
        { label: "Healthcare Professionals", value: "300+" },
        { label: "Key Partners", value: "5+" },
        { label: "Global Connections", value: "Multi-continent" }
      ]
    },
    {
      id: "sustainability",
      title: "Sustainability Model",
      description: "Revenue streams and reinvestment strategy for long-term impact",
      icon: Repeat,
      badge: "Self-Sustaining",
      color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
      metrics: [
        { label: "Revenue Distribution", value: "4 Streams" },
        { label: "Social Impact Multiplier", value: "$3-5 per $1" },
        { label: "Reinvestment Rate", value: "90%" }
      ]
    },
    {
      id: "map",
      title: "Ecosystem Map",
      description: "Visual overview of the 4C Framework and core infrastructure",
      icon: Network,
      badge: "Interactive Map",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
      metrics: [
        { label: "Core Streams", value: "4C Framework" },
        { label: "Languages Supported", value: "3" },
        { label: "Compliance", value: "GDPR & HIPAA" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Explore Our Ecosystem</h2>
        <p className="text-green-700 max-w-2xl mx-auto">
          Click on any section below to dive deeper into specific aspects of the DINHA ecosystem
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card 
              key={section.id} 
              className={`${section.color} transition-all duration-200 cursor-pointer transform hover:scale-105`}
              onClick={() => onSectionClick(section.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-green-700" />
                    <div>
                      <CardTitle className="text-lg text-green-900">{section.title}</CardTitle>
                      {section.badge && (
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {section.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-800 mb-4">{section.description}</p>
                {section.metrics && (
                  <div className="space-y-2">
                    {section.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-green-700">{metric.label}:</span>
                        <span className="font-semibold text-green-900">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button 
          variant="outline" 
          className="border-green-700 text-green-800 hover:bg-green-50"
          onClick={() => onSectionClick("detailed")}
        >
          <Shield className="w-4 h-4 mr-2" />
          View Detailed Technical Specifications
        </Button>
      </div>
    </div>
  );
};

export default EcosystemDashboard;
