import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, HeartPulse, BookMarked, ArrowRight, Star, Globe, Zap, Award, Shield, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { UserPersonas } from "@/components/UserPersonas";
import { Interactive4CFramework } from "@/components/Interactive4CFramework";
import communityImage from "@/assets/community-digital.jpg";
import innovationImage from "@/assets/innovation-workspace.jpg";
import nurseImage from "@/assets/nurse-technology.jpg";

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
  return (
    <div className="relative min-h-screen w-full bg-background font-sans">
      <Navbar />
      
      <main className="pt-20 pb-6">
        {/* Enhanced Hero Section */}
        <HeroSection />

        {/* User Personas & How It Works */}
        <UserPersonas />

        {/* Trust Indicators */}
        <section className="max-w-7xl mx-auto px-4 py-16 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              Building confidence through partnerships, certifications, and proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {indicator.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">
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

        {/* About Us with Image */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                About AHAID
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Creating <strong>digital dignity</strong> in healthcare through AI-driven tools 
                that empower African healthcare professionals and communities.
              </p>
              <p className="text-muted-foreground mb-8">
                We bridge the gap between cutting-edge technology and compassionate care, 
                ensuring every healthcare solution is built with African values at its core.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Link to="/ecosystem" className="flex items-center">
                  Learn Our Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src={nurseImage} 
                alt="African nurse using digital technology"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto px-4 py-16 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              What Drives Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <Card key={value.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive 4C Framework */}
        <Interactive4CFramework />

        {/* Innovation Showcase */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={innovationImage} 
                alt="Innovation workspace with African professionals" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Innovation in Action
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From AI-powered health assistants to digital transformation tools, 
                we're building technology that understands African healthcare needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Nursaera AI Health Platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-muted-foreground">SME Digital Transformation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Community Health Networks</span>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Link to="/studio" className="flex items-center">
                  Explore Innovations <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to be part of Africa's digital health transformation? Let's connect.
            </p>
          </div>
          
          <div className="bg-card border rounded-2xl p-8 shadow-lg">
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
                const subject = encodeURIComponent('Contact from AHAID Website');
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                const mailtoUrl = `mailto:contact@ahaid.org?subject=${subject}&body=${body}`;
                
                window.location.href = mailtoUrl;
                
                // Show success message
                alert('Thank you for your message! Your email client should open now. If not, please email us directly at contact@ahaid.org');
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
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-secondary text-secondary-foreground text-center text-xs mt-16 tracking-wide">
        <div className="mb-2">
          © {new Date().getFullYear()} AHAID – AFRICA'S HEALTH AND INCLUSIVE DIGITALIZATION (AHAID). Empowering Africa, Digitally & Compassionately.
        </div>
        <div>
          <a href="/privacy" className="underline hover:text-accent transition">Privacy Policy</a>{" "}
          |{" "}
          <a href="#contact" className="underline hover:text-accent transition">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;