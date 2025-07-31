import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, HeartPulse, BookMarked, ArrowRight, Star, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-healthcare.jpg";
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

const empowermentStreams = [
  {
    title: "Care",
    summary: "AI-driven health tools for professionals",
    color: "bg-primary text-primary-foreground",
    icon: <HeartPulse className="w-8 h-8" />,
  },
  {
    title: "Code",
    summary: "Open-source innovation for health tech",
    color: "bg-secondary text-secondary-foreground",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: "Community",
    summary: "Connect, share, and grow together",
    color: "bg-accent text-accent-foreground",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Commerce",
    summary: "Digital tools for African enterprises",
    color: "bg-primary text-primary-foreground",
    icon: <BookMarked className="w-8 h-8" />,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-background font-sans">
      <Navbar />
      
      <main className="pt-20 pb-6">
        {/* Hero Section with Background Image */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="African healthcare professionals collaborating" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/80"></div>
          </div>
          <div className="relative max-w-6xl mx-auto py-24 px-4 text-center animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-4 tracking-tight">
                Africa's Health and Inclusive Digitalization (AHAID)
              </h1>
              <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto">
                Where Care Meets Code
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
                <Link to="/ecosystem" className="flex items-center">
                  Explore Our Ecosystem
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                <Link to="/community" className="flex items-center">
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground mb-4">Healthcare Professionals</div>
                <Button variant="outline" size="sm" className="border-primary text-primary">
                  <Link to="/ecosystem" className="flex items-center">
                    View Impact <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">4C</div>
                <div className="text-muted-foreground mb-4">Framework Approach</div>
                <Button variant="outline" size="sm" className="border-accent text-accent">
                  <Link to="/empowerment-streams" className="flex items-center">
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-muted-foreground mb-4">AI-Powered Support</div>
                <Button variant="outline" size="sm" className="border-secondary text-secondary">
                  <Link to="/resources" className="flex items-center">
                    Explore <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Us with Image */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-secondary">About</span> <span className="text-primary">AHAID</span>
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
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-secondary">What</span> <span className="text-primary">Drives Us</span>
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

        {/* 4C Framework */}
        <section id="empowerment" className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-secondary">The</span> <span className="text-primary">4C Framework</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">Our comprehensive approach to digital health transformation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {empowermentStreams.map((stream, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stream.color} group-hover:scale-110 transition-transform`}>
                    {stream.icon}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {stream.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {stream.summary}
                  </p>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-secondary">Innovation</span> <span className="text-primary">in Action</span>
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
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-secondary">Get</span> <span className="text-primary">In Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to be part of Africa's digital health transformation? Let's connect.
            </p>
          </div>
          
          <div className="bg-card border rounded-2xl p-8 shadow-lg">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-card-foreground font-medium mb-2">Full Name</label>
                <input 
                  id="name" 
                  name="name" 
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
          <a href="#" className="underline hover:text-accent transition">Privacy Policy</a>{" "}
          |{" "}
          <a href="#contact" className="underline hover:text-accent transition">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;