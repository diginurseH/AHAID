import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Users, Heart, Code, Building2, Target, TrendingUp, Award } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

interface LandingPageProps {
  stakeholderType: 'healthcare' | 'government' | 'developers' | 'investors';
}

export function StakeholderLandingPage({ stakeholderType }: LandingPageProps) {
  const { t } = useI18n();

  const stakeholderConfig = {
    healthcare: {
      icon: <Heart className="w-8 h-8" />,
      color: "bg-primary",
      accentColor: "border-primary",
      headline: "Empower Your Healthcare Practice with AI",
      subheadline: "Join 2,500+ healthcare professionals using Nursaera platform",
      ctaPrimary: "Access Platform",
      ctaSecondary: "Watch Demo",
      metrics: [
        { label: "Task Efficiency", value: "30%", desc: "improvement" },
        { label: "Active Users", value: "2,500+", desc: "professionals" },
        { label: "Countries", value: "15", desc: "actively using" }
      ],
      features: [
        "AI-powered clinical decision support",
        "Peer collaboration networks",
        "Evidence-based protocols",
        "24/7 support access"
      ],
      testimonial: {
        text: "Nursaera has transformed how we deliver patient care. The AI assistance and peer network are invaluable.",
        author: "Dr. Amina Hassan",
        role: "Lead Physician, Nairobi General Hospital"
      }
    },
    government: {
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-secondary",
      accentColor: "border-secondary",
      headline: "Digital Health Policy Framework",
      subheadline: "Accelerate national digital health transformation",
      ctaPrimary: "View Framework",
      ctaSecondary: "Schedule Consultation",
      metrics: [
        { label: "Partner Countries", value: "8", desc: "signed MOUs" },
        { label: "Cost Savings", value: "$2.1M", desc: "estimated annually" },
        { label: "Compliance", value: "98%", desc: "HL7/FHIR standards" }
      ],
      features: [
        "Comprehensive policy recommendations",
        "Implementation roadmaps",
        "Compliance tracking tools",
        "ROI measurement framework"
      ],
      testimonial: {
        text: "AHAID's framework provided the foundation for our national digital health strategy implementation.",
        author: "Hon. Dr. Sarah Mwangi",
        role: "Minister of Health, Kenya"
      }
    },
    developers: {
      icon: <Code className="w-8 h-8" />,
      color: "bg-accent",
      accentColor: "border-accent",
      headline: "Build the Future of African Healthcare",
      subheadline: "APIs, SDKs, and developer tools for health innovation",
      ctaPrimary: "Developer Portal",
      ctaSecondary: "View Documentation",
      metrics: [
        { label: "API Calls", value: "1.2M+", desc: "monthly" },
        { label: "SDK Downloads", value: "5,400", desc: "developers" },
        { label: "Integrations", value: "120+", desc: "active partners" }
      ],
      features: [
        "Comprehensive API documentation",
        "Ready-to-use SDKs",
        "Integration sandbox",
        "Developer community support"
      ],
      testimonial: {
        text: "The AHAID APIs made it incredibly easy to integrate health data standards into our application.",
        author: "Michael Ochieng",
        role: "CTO, HealthTech Solutions"
      }
    },
    investors: {
      icon: <Users className="w-8 h-8" />,
      color: "bg-primary",
      accentColor: "border-primary",
      headline: "Invest in Africa's Digital Health Future",
      subheadline: "450K+ lives improved with measurable social impact",
      ctaPrimary: "Impact Dashboard",
      ctaSecondary: "Partnership Inquiry",
      metrics: [
        { label: "Social Impact", value: "450K+", desc: "lives improved" },
        { label: "Market Reach", value: "$50M", desc: "addressable market" },
        { label: "ROI Potential", value: "300%", desc: "5-year projection" }
      ],
      features: [
        "Comprehensive impact tracking",
        "Financial model transparency",
        "Strategic partnership opportunities",
        "Sustainable revenue streams"
      ],
      testimonial: {
        text: "AHAID represents the perfect intersection of social impact and sustainable business growth in Africa.",
        author: "Dr. Jane Kimani",
        role: "Partner, Acumen Capital Partners"
      }
    }
  };

  const config = stakeholderConfig[stakeholderType];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-16 h-16 ${config.color} text-white rounded-2xl mb-6`}>
              {config.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {config.headline}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {config.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className={`${config.color} hover:opacity-90`}>
                {config.ctaPrimary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className={config.accentColor}>
                {config.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {config.metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.desc}</div>
                <Progress value={85} className="mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Tailored Solutions for Your Success
            </h2>
            <div className="space-y-4">
              {config.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <Button className={`mt-8 ${config.color} hover:opacity-90`}>
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <Award className="w-6 h-6 text-accent mt-1" />
              <div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "{config.testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{config.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{config.testimonial.role}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <Card className="text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the AHAID ecosystem and be part of Africa's digital health transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className={`${config.color} hover:opacity-90`}>
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}