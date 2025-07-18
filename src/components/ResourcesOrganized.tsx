
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  ExternalLink, 
  FileText, 
  Code, 
  GraduationCap,
  Stethoscope,
  BookOpen,
  Users,
  Shield,
  Globe,
  Smartphone
} from "lucide-react";

const ResourcesOrganized = () => {
  const digitalTools = [
    {
      title: "Triage Assessment App",
      description: "AI-powered triage system for emergency healthcare prioritization",
      type: "Web Application",
      status: "Live",
      icon: Stethoscope,
      link: "#"
    },
    {
      title: "Follow-up Care Dashboard",
      description: "Patient monitoring and follow-up care management system",
      type: "Dashboard",
      status: "Live",
      icon: FileText,
      link: "#"
    },
    {
      title: "Remote Monitoring System",
      description: "IoT-enabled patient monitoring for chronic disease management",
      type: "Mobile App",
      status: "Beta",
      icon: Smartphone,
      link: "#"
    },
    {
      title: "Referral Alert System",
      description: "Automated referral and notification system for healthcare providers",
      type: "API Service",
      status: "Live",
      icon: Users,
      link: "#"
    }
  ];

  const trainingMaterials = [
    {
      title: "Digital Health Literacy Course",
      description: "Comprehensive training program for healthcare workers",
      duration: "40 hours",
      level: "Beginner to Advanced",
      icon: GraduationCap,
      downloadLink: "#"
    },
    {
      title: "Clinical Case Studies",
      description: "Real-world case studies from African healthcare settings",
      duration: "Self-paced",
      level: "Intermediate",
      icon: BookOpen,
      downloadLink: "#"
    },
    {
      title: "Care Protocol Guidelines",
      description: "Standardized care protocols for common conditions",
      duration: "Reference Material",
      level: "All Levels",
      icon: Shield,
      downloadLink: "#"
    },
    {
      title: "Quality Assurance Framework",
      description: "Quality metrics and assessment tools for healthcare delivery",
      duration: "Implementation Guide",
      level: "Advanced",
      icon: FileText,
      downloadLink: "#"
    }
  ];

  const developerResources = [
    {
      title: "Nursaera API Documentation",
      description: "Complete API reference for Nursaera platform integration",
      version: "v2.1",
      language: "REST API",
      icon: Code,
      link: "#"
    },
    {
      title: "React Component Library",
      description: "Reusable healthcare UI components built with React",
      version: "v1.5",
      language: "TypeScript",
      icon: Code,
      link: "#"
    },
    {
      title: "AI Model Integration Guide",
      description: "Documentation for implementing healthcare AI models",
      version: "v1.0",
      language: "Python",
      icon: Globe,
      link: "#"
    },
    {
      title: "WhatsApp Business Integration",
      description: "SDK for WhatsApp Business API healthcare implementations",
      version: "v2.0",
      language: "Node.js",
      icon: Smartphone,
      link: "#"
    }
  ];

  return (
    <div className="space-y-8">
      <Tabs defaultValue="digital-tools" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="digital-tools">Digital Tools</TabsTrigger>
          <TabsTrigger value="training">Training & Education</TabsTrigger>
          <TabsTrigger value="developer">Developer Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="digital-tools" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {digitalTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-green-700" />
                        <div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline">{tool.type}</Badge>
                            <Badge variant={tool.status === "Live" ? "default" : "secondary"}>
                              {tool.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                    <Button className="w-full" asChild>
                      <a href={tool.link} className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Access Tool
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        
        <TabsContent value="training" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {trainingMaterials.map((material, idx) => {
              const Icon = material.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-blue-700" />
                      <div>
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{material.duration}</Badge>
                          <Badge variant="secondary">{material.level}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={material.downloadLink} className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        
        <TabsContent value="developer" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {developerResources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-purple-700" />
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{resource.version}</Badge>
                          <Badge variant="secondary">{resource.language}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={resource.link} className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Documentation
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourcesOrganized;
