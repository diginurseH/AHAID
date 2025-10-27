import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, HeartPulse, BookMarked, ArrowRight, Star, Globe, Zap, Award, Shield, Users2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { UserPersonas } from "@/components/UserPersonas";
import { Interactive4CFramework } from "@/components/Interactive4CFramework";
import UserProfileAssessment from "@/components/UserProfileAssessment";
import InteractiveJourneyMap from "@/components/InteractiveJourneyMap";
import StreamIntegrationView from "@/components/StreamIntegrationView";
import ActionPlanningTool from "@/components/ActionPlanningTool";
import communityImage from "@/assets/community-digital.jpg";
import innovationImage from "@/assets/innovation-workspace.jpg";
import nurseImage from "@/assets/nurse-technology.jpg";
import { useAnalytics } from "@/hooks/useAnalytics";

const coreValues = [
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Empathy & Care",
    description: "AI-driven tools built with emotional intelligence.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Accessibility", 
    description: "Open, reliable information for all.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Innovation",
    description: "Creative platforms for real impact.",
  },
  {
    icon: <BookMarked className="w-6 h-6" />,
    title: "Afrocentric",
    description: "Rooted in African values and realities.",
  },
];

const trustIndicators = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "WHO Partnership",
    description: "Collaborative partner in digital health initiatives",
    value: "Official"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Data Security",
    description: "HIPAA compliant with end-to-end encryption",
    value: "Certified"
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Global Reach",
    description: "Active in 15+ African countries",
    value: "15+ Countries"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "User Satisfaction",
    description: "Average user rating across all platforms",
    value: "4.8/5"
  }
];

const Index = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [userProgress, setUserProgress] = useState<any>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [showJourney, setShowJourney] = useState(false);

  useAnalytics({ trackUserInteractions: true, trackOutboundLinks: true });

  const handleProfileComplete = (profile: any) => {
    setUserProfile(profile);
    setShowAssessment(false);
    setShowJourney(true);
  };

  const handleProgressUpdate = (progress: any) => setUserProgress(progress);
  const handlePlanSave = (plan: any) => console.log("Saving plan:", plan);

  return (
    <div className="relative min-h-screen w-full bg-background font-sans overflow-hidden">
      <Navbar />
      
      <main className="pt-20 pb-6">
        {/* Enhanced Hero Section */}
        <div className="animate-fade-in">
          <HeroSection />
        </div>

        {/* Interactive Journey Entry */}
        {!userProfile && !showAssessment && (
          <section className="max-w-6xl mx-auto px-4 py-16 text-center animate-fade-in">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10 hover:shadow-xl transition-all duration-300">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-6 animate-scale-in">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Start Your Personalized Journey</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take our assessment to unlock personalized recommendations and create your action plan
              </p>
              <Button 
                onClick={() => setShowAssessment(true)} 
                size="lg" 
                className="bg-primary hover:bg-primary/90 hover-scale shadow-lg"
              >
                Begin Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </section>
        )}

        {/* Assessment & Journey Components */}
        {showAssessment && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <UserProfileAssessment onProfileComplete={handleProfileComplete} existingProfile={userProfile} />
          </section>
        )}

        {showJourney && userProfile && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <InteractiveJourneyMap userProfile={userProfile} onProgressUpdate={handleProgressUpdate} />
          </section>
        )}

        {/* User Personas & How It Works */}
        <UserPersonas />

        {/* Trust Indicators */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building confidence through partnerships, certifications, and proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 text-center group hover-scale border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {indicator.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {indicator.value}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {indicator.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive About Us Section */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-16 animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="text-lg px-6 py-2 border-primary/30 hover:border-primary transition-colors">
                Our Story
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Nursaera Health Tech
            </h2>
            <p className="text-lg text-muted-foreground italic mb-8">
              Where care meets code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
                Creating <strong className="text-primary">digital dignity</strong> in African healthcare through AI-powered solutions.
              </p>
              
              {/* Interactive Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "12,500+", label: "Patients Served", color: "primary" },
                  { value: "15", label: "Countries Active", color: "secondary" },
                  { value: "850+", label: "Healthcare Providers", color: "accent" },
                  { value: "94.7%", label: "AI Accuracy", color: "primary" }
                ].map((stat, idx) => (
                  <Card 
                    key={idx}
                    className="p-4 text-center hover:shadow-xl transition-all duration-300 hover-scale cursor-pointer border-primary/20 group animate-fade-in"
                    style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                  >
                    <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </Card>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <Button className="bg-primary hover:bg-primary/90 hover-scale shadow-lg group">
                  <Link to="/about" className="flex items-center">
                    Learn Our Full Story 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/5 hover-scale group">
                  <Link to="/ecosystem" className="flex items-center">
                    Explore Ecosystem 
                    <Globe className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative group animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src={nurseImage} 
                alt="African nurse using digital technology"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Interactive Mission & Values Preview */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Empathy & Care", desc: "AI tools built with emotional intelligence and patient dignity", gradient: "from-primary/10 to-primary/5" },
              { icon: Users, title: "Accessibility", desc: "Healthcare technology available to all, regardless of location", gradient: "from-secondary/10 to-secondary/5" },
              { icon: Sparkles, title: "Innovation", desc: "Creative platforms and collaborative development for real impact", gradient: "from-accent/10 to-accent/5" },
              { icon: Globe, title: "Afrocentric", desc: "Solutions rooted in African values, customs, and realities", gradient: "from-primary/10 to-primary/5" }
            ].map((value, idx) => (
              <Card 
                key={idx}
                className={`p-6 text-center hover:shadow-2xl transition-all duration-300 hover-scale cursor-pointer bg-gradient-to-br ${value.gradient} border-primary/20 group animate-fade-in`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </section>


        {/* Interactive 4C Framework */}
        <Interactive4CFramework />

        {/* Innovation Showcase */}
        <section className="max-w-6xl mx-auto px-4 py-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src={innovationImage} 
                alt="Innovation workspace with African professionals" 
                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 px-6 py-2 text-base border-primary/30">
                Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Innovation in Action
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From AI-powered health assistants to digital transformation tools, 
                we're building technology that understands African healthcare needs.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { name: "Nursaera AI Health Platform", icon: Sparkles },
                  { name: "SME Digital Transformation", icon: Zap },
                  { name: "Community Health Networks", icon: Users }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors animate-fade-in group"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 hover-scale shadow-lg group">
                <Link to="/studio" className="flex items-center">
                  Explore Innovations 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-6 py-2 text-base border-primary/30">
              Contact Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join Africa's digital health transformation.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-card to-primary/5 border border-primary/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <form 
              className="grid md:grid-cols-2 gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const message = formData.get('message') as string;
                
                if (!name || !email || !message) {
                  alert('Please fill in all fields.');
                  return;
                }
                
                // Create mailto link with form data
                const subject = encodeURIComponent('Contact from Nursaera Health Tech Website');
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                const mailtoUrl = `mailto:contact@nursaerahealth.org?subject=${subject}&body=${body}`;
                
                window.location.href = mailtoUrl;
                
                // Show success message
                alert('Thank you for your message! Your email client should open now.');
              }}
            >
              <div>
                <label htmlFor="name" className="block text-card-foreground font-medium mb-2">Full Name</label>
                <input 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent" 
                  placeholder="Your full name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-card-foreground font-medium mb-2">Email Address</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent" 
                  placeholder="your@email.com" 
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-card-foreground font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent" 
                  placeholder="Tell us about your project or how we can collaborate..."
                />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 hover-scale shadow-lg">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground text-center mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-2">Nursaera Health Tech</h3>
            <p className="text-secondary-foreground/80 italic">Where care meets code</p>
          </div>
          <div className="text-sm mb-4 opacity-90">
            © {new Date().getFullYear()} Nursaera Health Tech. Empowering Africa through healthcare innovation.
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <a href="/privacy" className="hover:text-accent transition-colors story-link">Privacy Policy</a>
            <span>|</span>
            <a href="#contact" className="hover:text-accent transition-colors story-link">Contact</a>
            <span>|</span>
            <a href="/about" className="hover:text-accent transition-colors story-link">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;