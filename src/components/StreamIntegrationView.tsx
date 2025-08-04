import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Network, 
  ArrowRight, 
  Zap,
  Target,
  Users,
  Brain,
  Building,
  Heart,
  Code,
  TrendingUp,
  Link,
  Lightbulb,
  GitBranch
} from "lucide-react";

interface StreamConnection {
  from: string;
  to: string;
  relationship: string;
  impactMultiplier: number;
  examples: string[];
  bidirectional: boolean;
}

interface CombinedImpactStory {
  id: string;
  title: string;
  streams: string[];
  narrative: string;
  outcome: string;
  metrics: { label: string; value: string; change: number }[];
  timeline: { phase: string; description: string; streams: string[] }[];
}

interface StreamIntegrationViewProps {
  activeStreams?: string[];
  userProgress?: any;
}

const StreamIntegrationView = ({ activeStreams = [], userProgress }: StreamIntegrationViewProps) => {
  const [selectedConnection, setSelectedConnection] = useState<StreamConnection | null>(null);
  const [selectedStory, setSelectedStory] = useState<string>("mister-clinic");
  const [showAllConnections, setShowAllConnections] = useState(false);

  const streamConnections: StreamConnection[] = [
    {
      from: "commerce",
      to: "care",
      relationship: "Revenue Enables Healthcare",
      impactMultiplier: 3.2,
      examples: [
        "SME digital transformation fees fund AI platform development",
        "Business success stories create community investment",
        "Digital infrastructure serves both business and health needs"
      ],
      bidirectional: false
    },
    {
      from: "care",
      to: "code",
      relationship: "Healthcare Insights Drive Innovation",
      impactMultiplier: 2.8,
      examples: [
        "Patient data patterns inform AI algorithm improvements",
        "Clinical feedback shapes open-source tool development", 
        "Healthcare provider needs guide feature prioritization"
      ],
      bidirectional: true
    },
    {
      from: "code",
      to: "community",
      relationship: "Technical Solutions Create Stories",
      impactMultiplier: 2.1,
      examples: [
        "Successful implementations become testimonials",
        "Developer contributions inspire community involvement",
        "Open-source tools enable community health initiatives"
      ],
      bidirectional: true
    },
    {
      from: "community",
      to: "commerce",
      relationship: "Stories Drive Business Growth",
      impactMultiplier: 1.9,
      examples: [
        "Success testimonials attract new SME clients",
        "Community networks facilitate business partnerships",
        "Peer recommendations drive service adoption"
      ],
      bidirectional: false
    },
    {
      from: "care",
      to: "community",
      relationship: "Health Outcomes Create Advocates",
      impactMultiplier: 2.5,
      examples: [
        "Improved patient outcomes generate testimonials",
        "Healthcare provider success stories inspire peers",
        "AI platform benefits create community ambassadors"
      ],
      bidirectional: true
    },
    {
      from: "code",
      to: "commerce",
      relationship: "Technical Infrastructure Enables Business",
      impactMultiplier: 2.3,
      examples: [
        "Open-source tools reduce SME transformation costs",
        "Platform infrastructure supports business applications",
        "Developer community provides technical support"
      ],
      bidirectional: false
    }
  ];

  const combinedImpactStories: CombinedImpactStory[] = [
    {
      id: "mister-clinic",
      title: "Mister's Bakery → Community Clinic Transformation",
      streams: ["commerce", "care", "community"],
      narrative: "What started as a simple bakery digital transformation created a ripple effect that transformed healthcare access in the entire community.",
      outcome: "A single SME success story enabled AI-powered healthcare for 500+ families",
      metrics: [
        { label: "Bakery Revenue Increase", value: "200%", change: 200 },
        { label: "Healthcare Funding Generated", value: "$12,000", change: 100 },
        { label: "Patients Now Served", value: "500+", change: 500 },
        { label: "Community Health Score", value: "85%", change: 40 }
      ],
      timeline: [
        {
          phase: "Month 1-2: Digital Transformation",
          description: "Mister's Bakery implements web platform and WhatsApp integration",
          streams: ["commerce"]
        },
        {
          phase: "Month 3-4: Revenue Growth",
          description: "200% revenue increase generates AHAID sustainability funding",
          streams: ["commerce"]
        },
        {
          phase: "Month 5-6: Healthcare Investment",
          description: "Profits fund AI platform deployment at local community clinic",
          streams: ["commerce", "care"]
        },
        {
          phase: "Month 7-8: Health Outcomes",
          description: "500+ patients receive AI-powered diagnosis and treatment",
          streams: ["care"]
        },
        {
          phase: "Month 9-12: Community Impact",
          description: "Success story inspires 3 more SMEs and 2 more clinics",
          streams: ["community", "commerce", "care"]
        }
      ]
    },
    {
      id: "developer-ecosystem",
      title: "Developer Innovation → Pan-African Health Network",
      streams: ["code", "care", "community"],
      narrative: "A single open-source contribution sparked a development movement that now powers healthcare across 5 African countries.",
      outcome: "Global developer collaboration created locally-relevant health solutions",
      metrics: [
        { label: "Developers Contributing", value: "167", change: 250 },
        { label: "Countries Using Tools", value: "5", change: 400 },
        { label: "Healthcare Providers Reached", value: "1,200+", change: 300 },
        { label: "Patient Outcomes Improved", value: "94%", change: 25 }
      ],
      timeline: [
        {
          phase: "Week 1-4: Initial Contribution", 
          description: "Developer submits diagnostic algorithm improvement",
          streams: ["code"]
        },
        {
          phase: "Month 2-3: Community Growth",
          description: "12 more developers join, create mobile-first health tools",
          streams: ["code", "community"]
        },
        {
          phase: "Month 4-6: Clinical Integration",
          description: "Tools integrated into Nursaera platform for real patient care",
          streams: ["code", "care"]
        },
        {
          phase: "Month 7-12: Regional Expansion",
          description: "Health ministries in 5 countries adopt the platform",
          streams: ["care", "community"]
        },
        {
          phase: "Year 2: Sustainable Impact",
          description: "Self-sustaining ecosystem with 1,200+ healthcare providers",
          streams: ["code", "care", "community"]
        }
      ]
    }
  ];

  const getStreamIcon = (stream: string) => {
    switch (stream) {
      case "care": return Heart;
      case "code": return Code;
      case "community": return Users;
      case "commerce": return Building;
      default: return Target;
    }
  };

  const getStreamColor = (stream: string) => {
    switch (stream) {
      case "care": return "text-green-600";
      case "code": return "text-blue-600";
      case "community": return "text-amber-600";
      case "commerce": return "text-yellow-600";
      default: return "text-gray-600";
    }
  };

  const filteredConnections = showAllConnections 
    ? streamConnections 
    : streamConnections.filter(conn => 
        activeStreams.includes(conn.from) || activeStreams.includes(conn.to)
      );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-6 h-6 text-green-600" />
            Stream Integration & Cross-Impact Analysis
          </CardTitle>
          <p className="text-green-700">
            Discover how the 4C streams interconnect to create exponential impact beyond individual components
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="connections" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="connections">Stream Connections</TabsTrigger>
              <TabsTrigger value="stories">Combined Impact Stories</TabsTrigger>
              <TabsTrigger value="planning">Integration Planning</TabsTrigger>
            </TabsList>

            <TabsContent value="connections" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-green-800">Network Connections</h3>
                <Button
                  variant="outline"
                  onClick={() => setShowAllConnections(!showAllConnections)}
                >
                  {showAllConnections ? "Show Relevant" : "Show All"} Connections
                </Button>
              </div>

              <div className="grid gap-4">
                {filteredConnections.map((connection, index) => {
                  const FromIcon = getStreamIcon(connection.from);
                  const ToIcon = getStreamIcon(connection.to);
                  
                  return (
                    <Card 
                      key={index}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedConnection?.from === connection.from && selectedConnection?.to === connection.to
                          ? 'ring-2 ring-green-500 bg-green-50' 
                          : 'hover:bg-green-50'
                      }`}
                      onClick={() => setSelectedConnection(selectedConnection === connection ? null : connection)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <FromIcon className={`w-5 h-5 ${getStreamColor(connection.from)}`} />
                              <span className="font-medium capitalize">{connection.from}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <ArrowRight className="w-4 h-4 text-gray-400" />
                              {connection.bidirectional && (
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <ToIcon className={`w-5 h-5 ${getStreamColor(connection.to)}`} />
                              <span className="font-medium capitalize">{connection.to}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <Badge className="bg-green-600">
                              {connection.impactMultiplier}x Impact
                            </Badge>
                            <GitBranch className="w-4 h-4 text-green-600" />
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <h4 className="font-medium text-green-800 mb-2">{connection.relationship}</h4>
                          {selectedConnection === connection && (
                            <div className="space-y-2 animate-fade-in">
                              {connection.examples.map((example, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-green-700">
                                  <Zap className="w-3 h-3 mt-1 text-green-600 flex-shrink-0" />
                                  <span>{example}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="stories" className="space-y-6">
              <div className="flex gap-2 mb-4">
                {combinedImpactStories.map((story) => (
                  <Button
                    key={story.id}
                    variant={selectedStory === story.id ? "default" : "outline"}
                    onClick={() => setSelectedStory(story.id)}
                    className="text-sm"
                  >
                    {story.title.split(" ")[0]}'s Story
                  </Button>
                ))}
              </div>

              {combinedImpactStories.filter(story => story.id === selectedStory).map((story) => (
                <div key={story.id} className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-green-800">{story.title}</CardTitle>
                          <div className="flex gap-2 mt-2">
                            {story.streams.map(stream => {
                              const Icon = getStreamIcon(stream);
                              return (
                                <Badge key={stream} variant="outline" className="flex items-center gap-1">
                                  <Icon className={`w-3 h-3 ${getStreamColor(stream)}`} />
                                  {stream.charAt(0).toUpperCase() + stream.slice(1)}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-green-700">{story.narrative}</p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Final Outcome
                        </h4>
                        <p className="text-green-700">{story.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-green-800">Impact Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {story.metrics.map((metric) => (
                          <div key={metric.label} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                            <h5 className="font-medium text-green-800 mb-2">{metric.label}</h5>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-2xl font-bold text-green-800">{metric.value}</span>
                              <Badge className="bg-green-600">+{metric.change}%</Badge>
                            </div>
                            <Progress value={Math.min(metric.change, 100)} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-green-800">Integration Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {story.timeline.map((phase, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              {index < story.timeline.length - 1 && (
                                <div className="w-0.5 h-16 bg-green-300 mt-2"></div>
                              )}
                            </div>
                            <div className="flex-1 pb-8">
                              <h4 className="font-semibold text-green-800 mb-2">{phase.phase}</h4>
                              <p className="text-green-700 text-sm mb-3">{phase.description}</p>
                              <div className="flex gap-2">
                                {phase.streams.map(stream => {
                                  const Icon = getStreamIcon(stream);
                                  return (
                                    <Badge key={stream} variant="outline" className="text-xs flex items-center gap-1">
                                      <Icon className={`w-3 h-3 ${getStreamColor(stream)}`} />
                                      {stream}
                                    </Badge>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="planning" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                    Integration Opportunities
                  </CardTitle>
                  <p className="text-green-700">
                    Based on your profile and progress, here are personalized integration strategies
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Immediate Integration</h4>
                        <p className="text-sm text-green-700 mb-3">
                          Connect your current stream activity with complementary streams for quick wins
                        </p>
                        <Button size="sm" className="bg-green-700 hover:bg-green-800">
                          Explore Now
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-amber-800 mb-2">Strategic Integration</h4>
                        <p className="text-sm text-amber-700 mb-3">
                          Plan longer-term cross-stream initiatives for maximum impact multiplication
                        </p>
                        <Button size="sm" variant="outline" className="border-amber-600 text-amber-800">
                          Plan Strategy
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default StreamIntegrationView;