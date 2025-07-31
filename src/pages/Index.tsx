import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, HeartPulse, BookMarked, ArrowRight, Star, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { InteractiveCard } from "@/components/InteractiveCard";
import heroImage from "@/assets/hero-healthcare.jpg";
import communityImage from "@/assets/community-digital.jpg";
import innovationImage from "@/assets/innovation-workspace.jpg";
import nurseImage from "@/assets/nurse-technology.jpg";

const coreValues = [
  {
    icon: <HeartPulse className="text-gold-600" />,
    title: "Empathy & Emotional Intelligence",
    description:
      "AI-driven tools built with deep emotional intelligence and mental wellness sensitivity.",
  },
  {
    icon: <Users className="text-green-700" />,
    title: "Integrity & Accessibility", 
    description:
      "Open, honest, accessible, and reliable information for all.",
  },
  {
    icon: <Sparkles className="text-yellow-600" />,
    title: "Innovation & Collaboration",
    description:
      "Creative, collaborative, open-source platforms for real impact.",
  },
  {
    icon: <BookMarked className="text-amber-800" />,
    title: "Afrocentric Empowerment",
    description:
      "Rooted in African values, cultures, and community realities.",
  },
];

const empowermentStreams = [
  {
    title: "Care",
    summary: "AI-driven health tools for professionals",
    details: "Comprehensive chronic disease support, nurse training programs, emotional support protocols, and intelligent health monitoring systems designed for African healthcare contexts.",
    color: "from-green-700 to-green-400",
    icon: <HeartPulse className="w-8 h-8" />,
  },
  {
    title: "Code",
    summary: "Open-source innovation for health tech",
    details: "Developer-focused innovation hub featuring technical guides, APIs, SDKs, and collaborative development resources for building scalable health technology solutions.",
    color: "from-blue-900 to-blue-400",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: "Community",
    summary: "Connect, share, and grow together",
    details: "Platform for sharing powerful stories, participating in educational webinars, accessing emotional wellness resources, and building meaningful professional networks.",
    color: "from-amber-700 to-yellow-300",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Commerce",
    summary: "Digital tools for African enterprises",
    details: "Comprehensive digital strategy and technology solutions for small and medium-sized African businesses, featuring web, mobile, and messaging platform integrations.",
    color: "from-yellow-700 to-yellow-400",
    icon: <BookMarked className="w-8 h-8" />,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-yellow-50 via-emerald-50 to-white font-sans">
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
            <div className="absolute inset-0 bg-green-900/70"></div>
          </div>
          <div className="relative max-w-6xl mx-auto py-24 px-4 text-center animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Africa's Health and Inclusive Digitalization (AHAID)
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
                Where Care Meets Code
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 shadow-lg transition-transform hover:scale-105">
                <Link to="/ecosystem" className="flex items-center">
                  Explore Our Ecosystem
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/community" className="flex items-center">
                  Join 2,500+ Members
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Highlights - Simplified */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="text-3xl font-bold text-green-700 mb-2">2,500+</div>
              <div className="text-green-600 mb-4">Healthcare Professionals</div>
              <Button variant="outline" size="sm" className="border-green-700 text-green-700">
                <Link to="/ecosystem" className="flex items-center">
                  View Impact <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
              <div className="text-3xl font-bold text-amber-700 mb-2">4C</div>
              <div className="text-amber-600 mb-4">Framework Approach</div>
              <Button variant="outline" size="sm" className="border-amber-700 text-amber-700">
                <Link to="/empowerment-streams" className="flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-blue-600 mb-4">AI-Powered Support</div>
              <Button variant="outline" size="sm" className="border-blue-700 text-blue-700">
                <Link to="/resources" className="flex items-center">
                  Explore <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us - Mission Statement with Image */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">About AHAID</h2>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                Creating <strong>digital dignity</strong> in healthcare through AI-driven tools 
                that empower African healthcare professionals and communities.
              </p>
              <p className="text-green-600 mb-8">
                We bridge the gap between cutting-edge technology and compassionate care, 
                ensuring every healthcare solution is built with African values at its core.
              </p>
              <Button className="bg-green-700 hover:bg-green-800 text-white">
                <Link to="/ecosystem" className="flex items-center">
                  Learn Our Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={nurseImage} 
                alt="African nurse using digital technology"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Core Values - Simplified Cards */}
        <section className="max-w-6xl mx-auto px-4 py-16 bg-green-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">What Drives Us</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <Card key={value.title} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-green-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 4C Empowerment Streams with Images */}
        <section id="empowerment" className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">The 4C Framework</h2>
            <p className="text-lg text-green-600 mb-6">Our comprehensive approach to digital health transformation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <img 
                src={communityImage} 
                alt="Community digital engagement"
                className="rounded-xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">Community & Care</h3>
                <p className="text-sm opacity-90">Connecting healthcare professionals and communities</p>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src={innovationImage} 
                alt="Innovation workspace"
                className="rounded-xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">Code & Commerce</h3>
                <p className="text-sm opacity-90">Building innovative solutions for African enterprises</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {empowermentStreams.map((stream) => (
              <Card key={stream.title} className="border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    {stream.icon}
                  </div>
                  <h3 className="font-bold text-green-800 mb-2 text-center">{stream.title}</h3>
                  <p className="text-sm text-green-600 text-center mb-4">{stream.summary}</p>
                  <Button size="sm" variant="outline" className="w-full border-green-700 text-green-700">
                    <Link to="/empowerment-streams">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call-to-Action Sections */}
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
          {/* Studio CTA */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-8 text-center shadow-xl">
            <BookMarked className="h-12 w-12 mx-auto mb-4 text-white/90" />
            <h3 className="text-2xl font-bold mb-4">AHAID Studio</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90">
              Healthcare stories and innovation insights from across Africa
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-amber-50">
              <Link to="/studio" className="flex items-center">
                Visit Studio <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Community CTA */}
          <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-2xl p-8 text-center shadow-xl">
            <Users className="h-12 w-12 mx-auto mb-4 text-green-200" />
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-green-100">
              Connect with healthcare professionals and access exclusive resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50">
                <Link to="/community" className="flex items-center">
                  Join Community <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Success Stories
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section - Streamlined */}
        <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Get in Touch</h2>
              <p className="text-lg text-green-600">Ready to transform healthcare? Let's collaborate!</p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6" autoComplete="off">
              <div>
                <label htmlFor="name" className="block text-green-900 font-medium mb-2">Full Name</label>
                <input 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="Your full name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-green-900 font-medium mb-2">Email Address</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="your@email.com" 
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-green-900 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  placeholder="Tell us about your project or how we can collaborate..."
                />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full bg-green-700 hover:bg-green-800 text-white">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Founder's Note - Inspirational Quote */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-800 to-emerald-700 text-white rounded-2xl p-12 text-center shadow-2xl">
          <div className="mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartPulse className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">A Message from Our Founder</h3>
          </div>
          
          <blockquote className="text-xl italic leading-relaxed mb-8 max-w-3xl mx-auto">
            "AHAID is the breath that systems forgot to take—care rendered in code, 
            a quiet revolt, a sacred redesign. We are not the aftermath. We are the architects."
          </blockquote>
          
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Built for every nurse who healed without tools, every patient who waited in silence, 
            and every system ready to rediscover its pulse.
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-green-800/95 text-white text-center text-xs mt-16 tracking-wide animate-fade-in flex flex-col gap-2">
        <div>
          © {new Date().getFullYear()} AHAID – AFRICA'S HEALTH AND INCLUSIVE DIGITALIZATION (AHAID). Empowering Africa, Digitally & Compassionately.
        </div>
        <div>
          <a href="#" className="underline hover:text-amber-300 transition">Privacy Policy</a>{" "}
          |{" "}
          <a href="#contact" className="underline hover:text-amber-300 transition">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
