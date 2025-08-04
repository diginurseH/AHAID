import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeartPulse, Code, Users, Building, ArrowRight, TrendingUp, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const frameworkData = [
  {
    id: "care",
    title: "Care",
    icon: <HeartPulse className="w-8 h-8" />,
    summary: "AI-driven health tools for professionals",
    color: "bg-gradient-to-br from-primary to-primary/80",
    textColor: "text-primary-foreground",
    route: "/resources",
    benefits: [
      "Reduce documentation time by 60%",
      "AI-powered clinical decision support",
      "Multilingual patient communication",
      "Evidence-based care protocols"
    ],
    metrics: {
      users: "2,500+",
      timesSaved: "3 hrs/day",
      accuracy: "94%"
    },
    successStory: "Dr. Amara in Lagos reduced patient wait times by 40% using our AI triage system."
  },
  {
    id: "code",
    title: "Code",
    icon: <Code className="w-8 h-8" />,
    summary: "Open-source innovation for health tech",
    color: "bg-gradient-to-br from-secondary to-secondary/80",
    textColor: "text-secondary-foreground", 
    route: "/studio",
    benefits: [
      "Ready-to-use health tech components",
      "Comprehensive API documentation",
      "Active developer community",
      "Accelerated development cycles"
    ],
    metrics: {
      developers: "500+",
      projects: "150+",
      acceleration: "6 months"
    },
    successStory: "Samuel's team in Nairobi built a clinic management system 6 months faster with our framework."
  },
  {
    id: "community",
    title: "Community",
    icon: <Users className="w-8 h-8" />,
    summary: "Connect, share, and grow together",
    color: "bg-gradient-to-br from-accent to-accent/80",
    textColor: "text-accent-foreground",
    route: "/community",
    benefits: [
      "Peer-to-peer knowledge sharing",
      "Regular webinars and training",
      "Success story showcases",
      "Collaborative problem solving"
    ],
    metrics: {
      members: "3,000+",
      countries: "15+",
      events: "50+"
    },
    successStory: "Our monthly webinars have trained over 1,000 healthcare professionals across Africa."
  },
  {
    id: "commerce",
    title: "Commerce",
    icon: <Building className="w-8 h-8" />,
    summary: "Digital tools for African enterprises",
    color: "bg-gradient-to-br from-muted-foreground to-muted-foreground/80",
    textColor: "text-background",
    route: "/ecosystem",
    benefits: [
      "Digital transformation consulting",
      "Custom health app development",
      "Business process automation",
      "Market expansion strategies"
    ],
    metrics: {
      businesses: "200+",
      growth: "150%",
      revenue: "$2M+"
    },
    successStory: "HealthTech SMEs in our program averaged 150% revenue growth in their first year."
  }
];

export const Interactive4CFramework = () => {
  const [hoveredStream, setHoveredStream] = useState<string | null>(null);
  const [selectedStream, setSelectedStream] = useState<string>("care");

  const selectedData = frameworkData.find(stream => stream.id === selectedStream);

  return (
    <section id="empowerment" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          The 4C Framework
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Our comprehensive approach to digital health transformation
        </p>
        <Badge variant="outline" className="text-sm">
          Hover or click to explore each pillar
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Interactive Framework Visualization */}
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {frameworkData.map((stream) => (
              <Card 
                key={stream.id}
                className={`group cursor-pointer transition-all duration-300 border-2 ${
                  selectedStream === stream.id 
                    ? 'border-primary shadow-lg scale-105' 
                    : hoveredStream === stream.id 
                    ? 'border-accent shadow-md scale-102' 
                    : 'border-border hover:border-muted-foreground'
                }`}
                onMouseEnter={() => setHoveredStream(stream.id)}
                onMouseLeave={() => setHoveredStream(null)}
                onClick={() => setSelectedStream(stream.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stream.color} group-hover:scale-110 transition-transform`}>
                    <div className={stream.textColor}>
                      {stream.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {stream.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {stream.summary}
                  </p>
                  
                  {/* Quick Metrics */}
                  <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                    {stream.id === 'care' && (
                      <>
                        <div className="text-center">
                          <div className="font-semibold text-primary">{stream.metrics.users}</div>
                          <div>Users</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-primary">{stream.metrics.timesSaved}</div>
                          <div>Saved</div>
                        </div>
                      </>
                    )}
                    {stream.id === 'code' && (
                      <>
                        <div className="text-center">
                          <div className="font-semibold text-secondary">{stream.metrics.developers}</div>
                          <div>Developers</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-secondary">{stream.metrics.projects}</div>
                          <div>Projects</div>
                        </div>
                      </>
                    )}
                    {stream.id === 'community' && (
                      <>
                        <div className="text-center">
                          <div className="font-semibold text-accent">{stream.metrics.members}</div>
                          <div>Members</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-accent">{stream.metrics.countries}</div>
                          <div>Countries</div>
                        </div>
                      </>
                    )}
                    {stream.id === 'commerce' && (
                      <>
                        <div className="text-center">
                          <div className="font-semibold text-muted-foreground">{stream.metrics.businesses}</div>
                          <div>SMEs</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-muted-foreground">{stream.metrics.growth}</div>
                          <div>Growth</div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed View */}
        <div className="lg:col-span-1">
          {selectedData && (
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedData.color}`}>
                    <div className={selectedData.textColor}>
                      {selectedData.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {selectedData.title} Stream
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {selectedData.summary}
                </p>

                {/* Key Benefits */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Key Benefits
                  </h4>
                  {selectedData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Success Story */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    Success Story
                  </h4>
                  <p className="text-sm text-muted-foreground italic">
                    "{selectedData.successStory}"
                  </p>
                </div>

                {/* CTA */}
                <Button className="w-full" asChild>
                  <Link to={selectedData.route} className="flex items-center justify-center">
                    Explore {selectedData.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};