import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Users, Building, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const personas = [
  {
    id: "nurses",
    title: "Healthcare Workers",
    icon: <Heart className="w-8 h-8" />,
    description: "Frontline heroes who need smart tools to enhance patient care and reduce administrative burden.",
    benefits: [
      "AI-powered clinical decision support",
      "Automated documentation tools",
      "Multilingual patient communication",
      "Evidence-based care protocols"
    ],
    cta: "Explore Care Solutions",
    route: "/resources",
    color: "bg-primary/10 border-primary/20",
    iconColor: "text-primary"
  },
  {
    id: "developers",
    title: "Health Tech Developers",
    icon: <Code className="w-8 h-8" />,
    description: "Innovators building the next generation of healthcare technology with open-source tools and APIs.",
    benefits: [
      "Open-source health tech frameworks",
      "Comprehensive API documentation",
      "Developer community support",
      "Ready-to-use components"
    ],
    cta: "Access Developer Tools",
    route: "/studio",
    color: "bg-secondary/10 border-secondary/20",
    iconColor: "text-secondary"
  },
  {
    id: "sme-owners",
    title: "SME Owners",
    icon: <Building className="w-8 h-8" />,
    description: "African entrepreneurs ready to digitize their healthcare businesses and reach more communities.",
    benefits: [
      "Digital transformation consulting",
      "Custom health app development",
      "Business process automation",
      "Market expansion strategies"
    ],
    cta: "Start Digital Journey",
    route: "/ecosystem",
    color: "bg-accent/10 border-accent/20",
    iconColor: "text-accent"
  },
  {
    id: "policymakers",
    title: "Policymakers",
    icon: <Users className="w-8 h-8" />,
    description: "Government leaders and health officials shaping policies for sustainable digital health transformation.",
    benefits: [
      "Evidence-based policy recommendations",
      "Implementation roadmaps",
      "Impact measurement frameworks",
      "Stakeholder coordination tools"
    ],
    cta: "View Policy Resources",
    route: "/community",
    color: "bg-muted border-border",
    iconColor: "text-muted-foreground"
  }
];

export const UserPersonas = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Built for Every Healthcare Stakeholder
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you're on the frontlines of care, building the future of health tech, or shaping policy, 
          AHAID has tools designed specifically for your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((persona) => (
          <Card key={persona.id} className={`${persona.color} hover:shadow-lg transition-all duration-300 group`}>
            <CardHeader className="text-center pb-4">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center ${persona.iconColor} group-hover:scale-110 transition-transform`}>
                {persona.icon}
              </div>
              <CardTitle className="text-xl">{persona.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {persona.description}
              </p>
              
              <div className="space-y-2">
                {persona.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full mt-4">
                <Link to={persona.route} className="flex items-center justify-center">
                  {persona.cta}
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            How AHAID Works
          </h3>
          <p className="text-muted-foreground">
            Simple steps to transform your healthcare practice or organization
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assess",
              description: "Identify your specific healthcare technology needs and challenges"
            },
            {
              step: "02", 
              title: "Connect",
              description: "Join our community and access relevant tools and resources"
            },
            {
              step: "03",
              title: "Implement",
              description: "Deploy AI-driven solutions with our expert guidance and support"
            },
            {
              step: "04",
              title: "Scale",
              description: "Expand your impact across communities and healthcare networks"
            }
          ].map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {step.step}
              </div>
              <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              
              {index < 3 && (
                <div className="hidden md:block absolute top-6 left-full w-full">
                  <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};