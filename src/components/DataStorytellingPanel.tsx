import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Code, 
  Building, 
  Globe,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Download,
  Play
} from "lucide-react";
import ProgressiveDisclosure from "./ProgressiveDisclosure";

interface ImpactChain {
  id: string;
  title: string;
  description: string;
  stages: {
    name: string;
    description: string;
    metrics: { label: string; value: string; change: number }[];
    connections: string[];
  }[];
}

interface CaseStudy {
  id: string;
  title: string;
  region: string;
  timeframe: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { label: string; before: string; after: string; improvement: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface DataStorytellingPanelProps {
  selectedSection?: string;
}

const DataStorytellingPanel = ({ selectedSection }: DataStorytellingPanelProps) => {
  const [expandedChain, setExpandedChain] = useState<string | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string>("mister-bakery");

  const impactChains: ImpactChain[] = [
    {
      id: "commerce-to-care",
      title: "Commerce → Care Impact Chain",
      description: "How SME digital transformation directly funds healthcare initiatives",
      stages: [
        {
          name: "SME Digital Transformation",
          description: "We transform an African small business with digital tools",
          metrics: [
            { label: "Revenue Increase", value: "42%", change: 15 },
            { label: "Digital Efficiency", value: "65%", change: 25 },
            { label: "Customer Reach", value: "300%", change: 45 }
          ],
          connections: ["Revenue Generation"]
        },
        {
          name: "Revenue Generation",
          description: "Successful SME generates sustainable revenue for AHAID",
          metrics: [
            { label: "Monthly Revenue", value: "$2,400", change: 20 },
            { label: "Profit Margin", value: "35%", change: 8 },
            { label: "Reinvestment Fund", value: "90%", change: 5 }
          ],
          connections: ["Healthcare Funding"]
        },
        {
          name: "Healthcare Funding",
          description: "Revenue funds AI platform development and nurse training",
          metrics: [
            { label: "Nurses Trained", value: "24", change: 12 },
            { label: "AI Model Improvements", value: "15", change: 18 },
            { label: "Patient Reach Extension", value: "500+", change: 22 }
          ],
          connections: ["Community Impact"]
        },
        {
          name: "Community Impact",
          description: "Improved healthcare outcomes across the community",
          metrics: [
            { label: "Patients Served", value: "1,247", change: 28 },
            { label: "Health Outcomes", value: "94%", change: 12 },
            { label: "Community Satisfaction", value: "96%", change: 8 }
          ],
          connections: []
        }
      ]
    },
    {
      id: "care-to-code",
      title: "Care → Code Impact Chain",
      description: "How healthcare insights inform open-source development",
      stages: [
        {
          name: "AI Healthcare Platform",
          description: "Nursaera collects anonymized health insights",
          metrics: [
            { label: "Data Points Collected", value: "50K+", change: 35 },
            { label: "Pattern Recognition", value: "94.7%", change: 5 },
            { label: "Insights Generated", value: "1,200", change: 18 }
          ],
          connections: ["Open Source Development"]
        },
        {
          name: "Open Source Development",
          description: "Insights inform new open-source health tools",
          metrics: [
            { label: "Tools Released", value: "12", change: 40 },
            { label: "Developer Adoption", value: "167", change: 25 },
            { label: "Community Contributions", value: "89", change: 30 }
          ],
          connections: ["Global Health Impact"]
        },
        {
          name: "Global Health Impact",
          description: "Open tools improve healthcare globally",
          metrics: [
            { label: "Countries Using Tools", value: "15", change: 50 },
            { label: "Healthcare Providers", value: "500+", change: 35 },
            { label: "Patients Benefited", value: "5,000+", change: 40 }
          ],
          connections: []
        }
      ]
    }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: "mister-bakery",
      title: "Mister's Bakery Digital Transformation",
      region: "West Africa",
      timeframe: "6 months",
      challenge: "Small family bakery struggling with manual operations, limited customer reach, and inefficient order management.",
      solution: "Implemented comprehensive digital solution including custom web application, WhatsApp Business integration, and digital payment systems.",
      impact: "Complete business transformation resulting in tripled revenue and expanded customer base.",
      metrics: [
        { label: "Monthly Revenue", before: "$800", after: "$2,400", improvement: "200%" },
        { label: "Customer Orders", before: "50/month", after: "180/month", improvement: "260%" },
        { label: "Order Processing Time", before: "15 min", after: "3 min", improvement: "80%" },
        { label: "Customer Satisfaction", before: "75%", after: "98%", improvement: "31%" }
      ],
      testimonial: {
        quote: "AHAID didn't just give us a website - they transformed how we think about our business. We're now reaching customers we never knew existed.",
        author: "Sarah Mensah",
        role: "Owner, Mister's Bakery"
      }
    },
    {
      id: "rural-clinic",
      title: "Rural Clinic AI Implementation",
      region: "East Africa",
      timeframe: "4 months",
      challenge: "Remote clinic with limited medical expertise struggling with accurate diagnosis and treatment protocols.",
      solution: "Deployed Nursaera AI platform with local nurse training program and telemedicine capabilities.",
      impact: "Dramatic improvement in diagnostic accuracy and patient outcomes in underserved community.",
      metrics: [
        { label: "Diagnostic Accuracy", before: "65%", after: "94%", improvement: "45%" },
        { label: "Patient Satisfaction", before: "70%", after: "95%", improvement: "36%" },
        { label: "Treatment Success Rate", before: "72%", after: "89%", improvement: "24%" },
        { label: "Nurse Confidence", before: "60%", after: "92%", improvement: "53%" }
      ],
      testimonial: {
        quote: "The AI platform gives us confidence to provide better care. We're not just treating symptoms anymore - we're providing real healthcare.",
        author: "Dr. James Okoye",
        role: "Medical Director"
      }
    }
  ];

  const downloadCaseStudy = (caseStudy: CaseStudy) => {
    const reportData = {
      title: caseStudy.title,
      summary: {
        region: caseStudy.region,
        timeframe: caseStudy.timeframe,
        challenge: caseStudy.challenge,
        solution: caseStudy.solution,
        impact: caseStudy.impact
      },
      metrics: caseStudy.metrics,
      testimonial: caseStudy.testimonial,
      generatedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${caseStudy.id}-case-study.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-green-800">Impact Storytelling Dashboard</CardTitle>
          <p className="text-green-700">
            Explore how our ecosystem components create interconnected value and sustainable impact
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="impact-chains" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="impact-chains">Impact Chains</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="relationships">Ecosystem Relations</TabsTrigger>
            </TabsList>

            <TabsContent value="impact-chains" className="space-y-4">
              <div className="space-y-4">
                {impactChains.map((chain) => (
                  <Card key={chain.id} className="overflow-hidden">
                    <CardHeader 
                      className="cursor-pointer hover:bg-green-50 transition-colors"
                      onClick={() => setExpandedChain(expandedChain === chain.id ? null : chain.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg text-green-800">{chain.title}</CardTitle>
                          <p className="text-green-700 text-sm">{chain.description}</p>
                        </div>
                        {expandedChain === chain.id ? 
                          <ChevronUp className="w-5 h-5 text-green-600" /> : 
                          <ChevronDown className="w-5 h-5 text-green-600" />
                        }
                      </div>
                    </CardHeader>
                    
                    {expandedChain === chain.id && (
                      <CardContent className="pt-0">
                        <div className="space-y-6">
                          {chain.stages.map((stage, index) => (
                            <div key={stage.name} className="relative">
                              <div className="flex items-start gap-4">
                                <div className="flex flex-col items-center">
                                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                  </div>
                                  {index < chain.stages.length - 1 && (
                                    <div className="w-0.5 h-16 bg-green-300 mt-2"></div>
                                  )}
                                </div>
                                
                                <div className="flex-1">
                                  <h4 className="font-semibold text-green-800 mb-2">{stage.name}</h4>
                                  <p className="text-green-700 text-sm mb-3">{stage.description}</p>
                                  
                                  <div className="grid md:grid-cols-3 gap-3">
                                    {stage.metrics.map((metric) => (
                                      <div key={metric.label} className="bg-green-50 p-3 rounded-lg">
                                        <div className="text-xs text-green-600 mb-1">{metric.label}</div>
                                        <div className="font-bold text-green-800">{metric.value}</div>
                                        <div className="flex items-center text-xs">
                                          <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                                          <span className="text-green-600">+{metric.change}%</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              {index < chain.stages.length - 1 && (
                                <div className="flex items-center mt-4 ml-4 text-green-600">
                                  <ArrowRight className="w-4 h-4 mr-2" />
                                  <span className="text-sm">Leads to: {stage.connections.join(", ")}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="space-y-4">
              <div className="flex gap-2 mb-4">
                {caseStudies.map((study) => (
                  <Button
                    key={study.id}
                    variant={selectedCaseStudy === study.id ? "default" : "outline"}
                    onClick={() => setSelectedCaseStudy(study.id)}
                    className="text-sm"
                  >
                    {study.title.split(" ")[0]}'s {study.title.split(" ")[1]}
                  </Button>
                ))}
              </div>

              {caseStudies.filter(study => study.id === selectedCaseStudy).map((study) => (
                <Card key={study.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-green-800">{study.title}</CardTitle>
                        <div className="flex gap-4 mt-2 text-sm text-green-600">
                          <Badge variant="outline">{study.region}</Badge>
                          <Badge variant="outline">{study.timeframe}</Badge>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => downloadCaseStudy(study)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ProgressiveDisclosure
                      title="Challenge & Solution"
                      summary={study.challenge}
                      defaultOpen={true}
                    >
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-green-800 mb-2">Solution Implemented</h5>
                          <p className="text-green-700">{study.solution}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-800 mb-2">Impact Achieved</h5>
                          <p className="text-green-700">{study.impact}</p>
                        </div>
                      </div>
                    </ProgressiveDisclosure>

                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Key Metrics Transformation</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                            <h5 className="font-medium text-green-800 mb-2">{metric.label}</h5>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600">Before: {metric.before}</span>
                              <span className="text-sm text-green-800">After: {metric.after}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Progress value={parseInt(metric.improvement)} className="flex-1" />
                              <Badge className="bg-green-600">+{metric.improvement}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {study.testimonial && (
                      <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="p-4">
                          <blockquote className="text-amber-900 italic mb-3">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="text-sm text-amber-800">
                            <strong>{study.testimonial.author}</strong>, {study.testimonial.role}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="relationships" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Care Stream Connections
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                      <span>Funds from Commerce enable AI development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                      <span>Code contributions improve platform capabilities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                      <span>Community feedback guides feature development</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Code Stream Connections
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>Healthcare insights inform tool development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>Open source tools support SME transformation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>Developer community drives innovation</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Community Stream Connections
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600" />
                      <span>Success stories inspire new partnerships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600" />
                      <span>Testimonials validate platform effectiveness</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-600" />
                      <span>Network effects amplify reach and impact</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Commerce Stream Connections
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600" />
                      <span>Revenue generation enables healthcare funding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600" />
                      <span>SME success creates employment opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-yellow-600" />
                      <span>Digital transformation knowledge transfer</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataStorytellingPanel;