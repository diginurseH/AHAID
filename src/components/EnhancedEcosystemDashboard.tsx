import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Smartphone, 
  Network, 
  Shield,
  ArrowRight,
  BarChart3,
  Repeat,
  Filter,
  Download,
  Play,
  MapPin,
  User,
  Building
} from "lucide-react";

interface DashboardMetric {
  label: string;
  value: string;
  trend?: number;
  region?: string;
  userType?: string;
}

interface DashboardSection {
  id: string;
  title: string;
  description: string;
  icon: any;
  badge?: string;
  color: string;
  metrics: DashboardMetric[];
  caseStudies: {
    title: string;
    description: string;
    impact: string;
    region: string;
  }[];
  relationships: string[];
}

interface EnhancedEcosystemDashboardProps {
  onSectionClick: (sectionId: string) => void;
  onStartTour: () => void;
}

const EnhancedEcosystemDashboard = ({ onSectionClick, onStartTour }: EnhancedEcosystemDashboardProps) => {
  const [filterUserType, setFilterUserType] = useState<string>("all");
  const [filterRegion, setFilterRegion] = useState<string>("all");
  const [showRealTimeData, setShowRealTimeData] = useState<boolean>(false);

  const dashboardSections: DashboardSection[] = [
    {
      id: "nursaera",
      title: "Nursaera Platform",
      description: "AI-powered digital health platform for chronic disease management",
      icon: Brain,
      badge: "Live Platform",
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      metrics: [
        { label: "Patients Supported", value: "1,247", trend: 12, region: "West Africa", userType: "patients" },
        { label: "Healthcare Providers", value: "324", trend: 8, region: "East Africa", userType: "providers" },
        { label: "AI Accuracy", value: "94.7%", trend: 2, region: "all", userType: "all" }
      ],
      caseStudies: [
        {
          title: "Rural Clinic Digital Transformation",
          description: "Implemented AI-driven diagnostics in remote areas",
          impact: "50% reduction in misdiagnosis rates",
          region: "West Africa"
        }
      ],
      relationships: ["sme", "impact", "network"]
    },
    {
      id: "sme",
      title: "SME Transformation",
      description: "Digital transformation services for African small businesses",
      icon: Smartphone,
      badge: "Proven Success",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      metrics: [
        { label: "SMEs Transformed", value: "18", trend: 20, region: "Central Africa", userType: "business" },
        { label: "Avg Revenue Increase", value: "42%", trend: 15, region: "all", userType: "business" },
        { label: "Client Satisfaction", value: "100%", trend: 0, region: "all", userType: "business" }
      ],
      caseStudies: [
        {
          title: "Mister's Bakery Digital Success",
          description: "Complete digital transformation including web app and WhatsApp integration",
          impact: "65% increase in customer orders",
          region: "West Africa"
        }
      ],
      relationships: ["nursaera", "community", "sustainability"]
    },
    {
      id: "impact",
      title: "Impact Metrics",
      description: "Real-time analytics and performance indicators across all streams",
      icon: BarChart3,
      badge: "Live Data",
      color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
      metrics: [
        { label: "Community Members", value: "5,247", trend: 18, region: "all", userType: "all" },
        { label: "AI Consultations", value: "5,423", trend: 25, region: "all", userType: "patients" },
        { label: "Developer Contributions", value: "167", trend: 12, region: "all", userType: "developers" }
      ],
      caseStudies: [
        {
          title: "Cross-Stream Impact Analysis",
          description: "Measuring interconnected benefits across all 4C streams",
          impact: "$3.2 social return per $1 invested",
          region: "Pan-African"
        }
      ],
      relationships: ["nursaera", "network", "sustainability"]
    },
    {
      id: "network",
      title: "Stakeholder Network",
      description: "Strategic partners and community collaborations",
      icon: Users,
      badge: "Global Network",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      metrics: [
        { label: "Healthcare Professionals", value: "324", trend: 8, region: "all", userType: "providers" },
        { label: "Strategic Partners", value: "7", trend: 40, region: "all", userType: "partners" },
        { label: "Countries Active", value: "12", trend: 9, region: "all", userType: "all" }
      ],
      caseStudies: [
        {
          title: "Multi-Country Health Initiative",
          description: "Coordinated healthcare improvement across 5 African nations",
          impact: "30% improvement in care coordination",
          region: "Multi-region"
        }
      ],
      relationships: ["nursaera", "impact", "sustainability"]
    },
    {
      id: "sustainability",
      title: "Sustainability Model",
      description: "Revenue streams and reinvestment strategy for long-term impact",
      icon: Repeat,
      badge: "Self-Sustaining",
      color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
      metrics: [
        { label: "Revenue Streams Active", value: "4", trend: 0, region: "all", userType: "all" },
        { label: "Social Impact Multiplier", value: "$3.2", trend: 7, region: "all", userType: "all" },
        { label: "Reinvestment Rate", value: "92%", trend: 2, region: "all", userType: "all" }
      ],
      caseStudies: [
        {
          title: "Circular Impact Economy",
          description: "Revenue from commerce stream funds healthcare initiatives",
          impact: "Self-sustaining growth model established",
          region: "Pan-African"
        }
      ],
      relationships: ["sme", "impact", "network"]
    },
    {
      id: "map",
      title: "Ecosystem Map",
      description: "Visual overview of the 4C framework and core infrastructure",
      icon: Network,
      badge: "Interactive Map",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
      metrics: [
        { label: "Core Streams", value: "4", trend: 0, region: "all", userType: "all" },
        { label: "Languages Supported", value: "3", trend: 0, region: "all", userType: "all" },
        { label: "Compliance Standards", value: "2", trend: 0, region: "all", userType: "all" }
      ],
      caseStudies: [
        {
          title: "Integrated Ecosystem Design",
          description: "Seamless connectivity between all framework components",
          impact: "95% user satisfaction with platform integration",
          region: "Pan-African"
        }
      ],
      relationships: ["nursaera", "sme", "impact"]
    }
  ];

  // Simulate real-time data updates
  useEffect(() => {
    if (showRealTimeData) {
      const interval = setInterval(() => {
        // This would connect to real data sources in production
        console.log("Updating real-time metrics...");
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showRealTimeData]);

  const filteredSections = dashboardSections.map(section => ({
    ...section,
    metrics: section.metrics.filter(metric => 
      (filterUserType === "all" || metric.userType === filterUserType || metric.userType === "all") &&
      (filterRegion === "all" || metric.region === filterRegion || metric.region === "all")
    )
  }));

  const downloadEcosystemMap = () => {
    // Create a downloadable version of the ecosystem map
    const mapData = {
      framework: "4C Framework - Care, Code, Community, Commerce",
      sections: dashboardSections.map(s => ({
        title: s.title,
        description: s.description,
        metrics: s.metrics,
        relationships: s.relationships
      })),
      lastUpdated: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(mapData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ahaid-ecosystem-map.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Header with Tour and Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">Interactive Ecosystem Dashboard</h2>
          <p className="text-green-700 max-w-2xl">
            Explore real-time data, drill down into specific components, and discover impact relationships
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={onStartTour} className="bg-amber-600 hover:bg-amber-700">
            <Play className="w-4 h-4 mr-2" />
            Start Guided Tour
          </Button>
          <Button onClick={downloadEcosystemMap} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Map
          </Button>
        </div>
      </div>

      {/* Filters and Controls */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filters:</span>
          </div>
          <Select value={filterUserType} onValueChange={setFilterUserType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="User Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="patients">Patients</SelectItem>
              <SelectItem value="providers">Healthcare Providers</SelectItem>
              <SelectItem value="business">SME Owners</SelectItem>
              <SelectItem value="developers">Developers</SelectItem>
              <SelectItem value="partners">Partners</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterRegion} onValueChange={setFilterRegion}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="West Africa">West Africa</SelectItem>
              <SelectItem value="East Africa">East Africa</SelectItem>
              <SelectItem value="Central Africa">Central Africa</SelectItem>
              <SelectItem value="Pan-African">Pan-African</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant={showRealTimeData ? "default" : "outline"}
            onClick={() => setShowRealTimeData(!showRealTimeData)}
            className="ml-auto"
          >
            {showRealTimeData ? "Live Data" : "Enable Live Data"}
          </Button>
        </div>
      </Card>

      {/* Dashboard Sections */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSections.map((section) => {
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
                          {showRealTimeData && <span className="ml-1 w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-800 mb-4">{section.description}</p>
                
                {/* Filtered Metrics */}
                <div className="space-y-3">
                  {section.metrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-green-700">{metric.label}:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-green-900">{metric.value}</span>
                          {metric.trend !== undefined && (
                            <span className={`text-xs ${metric.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {metric.trend > 0 ? '↗' : '↘'} {Math.abs(metric.trend)}%
                            </span>
                          )}
                        </div>
                      </div>
                      {metric.trend !== undefined && (
                        <Progress value={Math.min(metric.trend + 50, 100)} className="h-1" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Relationship Indicators */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {section.relationships.slice(0, 2).map((rel) => (
                    <Badge key={rel} variant="outline" className="text-xs">
                      Connected to {rel}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Ecosystem Narrative */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-green-800 mb-4">Understanding Ecosystem Relationships</h3>
        <Tabs defaultValue="narrative" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="narrative">Impact Narrative</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="technical">Technical Details</TabsTrigger>
          </TabsList>
          <TabsContent value="narrative" className="space-y-4">
            <p className="text-green-900">
              The AHAID ecosystem operates as an interconnected web where each component amplifies the others. 
              When we transform an SME through our Commerce stream, we create sustainable revenue that funds 
              healthcare initiatives in the Care stream. Our AI platform generates data insights that improve 
              both patient outcomes and business operations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Care → Code Impact Chain</h4>
                <p className="text-sm text-green-700">
                  Healthcare insights from our AI platform inform open-source tools, 
                  creating a feedback loop that improves care quality across Africa.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Commerce → Community Impact Chain</h4>
                <p className="text-sm text-blue-700">
                  Successful SME transformations become inspiring stories shared in our Community, 
                  motivating more businesses to embrace digital transformation.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="case-studies" className="space-y-4">
            {dashboardSections.slice(0, 2).map((section) => (
              <div key={section.id} className="border rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">{section.caseStudies[0].title}</h4>
                <p className="text-sm text-green-700 mb-2">{section.caseStudies[0].description}</p>
                <div className="flex items-center gap-4 text-xs text-green-600">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {section.caseStudies[0].impact}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {section.caseStudies[0].region}
                  </span>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="technical" className="space-y-4">
            <p className="text-green-900">
              Our ecosystem is built on modern, scalable architecture with proper data governance, 
              security compliance (GDPR, HIPAA), and real-time analytics capabilities.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-semibold mb-1">Data Flow</h5>
                <p className="text-gray-600">Real-time synchronization across all platform components</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-semibold mb-1">Security</h5>
                <p className="text-gray-600">End-to-end encryption with role-based access control</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-semibold mb-1">Scalability</h5>
                <p className="text-gray-600">Cloud-native architecture supporting millions of users</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default EnhancedEcosystemDashboard;