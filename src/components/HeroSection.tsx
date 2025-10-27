import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Heart, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-healthcare.jpg";
import ProgressiveDisclosure from "./ProgressiveDisclosure";

const healthcareStats = [
  {
    icon: <Heart className="w-6 h-6" />,
    value: "70%",
    label: "Healthcare worker shortage in rural Africa",
    color: "text-destructive"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "400M",
    label: "Africans lack access to quality healthcare",
    color: "text-warning"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "2.3M",
    label: "Additional health workers needed by 2030",
    color: "text-primary"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Dr. Amara Kone",
    role: "ICU Nurse, Lagos",
    quote: "Nursaera Health Tech's AI tools helped me save 3 hours daily on documentation, giving me more time for patient care.",
    videoId: "placeholder-1" // In real app, these would be actual video IDs
  },
  {
    id: 2,
    name: "Samuel Ochieng",
    role: "Health Tech Developer, Nairobi",
    quote: "The open-source community accelerated our clinic management system development by 6 months.",
    videoId: "placeholder-2"
  }
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="African healthcare professionals collaborating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-accent-foreground mb-2 tracking-wide">
                NURSAERA HEALTH
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/80 italic">
                Where care meets code
              </p>
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <Link to="/ecosystem" className="flex items-center">
                  Start Your Digital Health Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/community" className="flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Success Stories
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>2,500+ Healthcare Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>15+ Country Partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>WHO Collaborative Partner</span>
              </div>
            </div>
          </div>

          {/* Side Content - Stats & Testimonials */}
          <div className="space-y-6">
            {/* Healthcare Challenge Stats */}
            <ProgressiveDisclosure
              title="The Healthcare Challenge"
              summary="Critical statistics driving our mission"
              variant="outlined"
            >
              <div className="space-y-4">
                {healthcareStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card/90 rounded-lg">
                    <div className={`${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ProgressiveDisclosure>

            {/* Video Testimonials */}
            <Card className="bg-card/90 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="font-semibold text-card-foreground mb-4">User Success Stories</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex gap-4">
                      <Button variant="outline" size="icon" className="flex-shrink-0">
                        <Play className="w-4 h-4" />
                      </Button>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          "{testimonial.quote}"
                        </p>
                        <div className="text-xs font-medium text-card-foreground">
                          {testimonial.name}, {testimonial.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};