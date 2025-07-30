import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, HeartPulse, BookMarked, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProgressiveDisclosure from "@/components/ProgressiveDisclosure";
import { InteractiveCard } from "@/components/InteractiveCard";
import { QuickStartFlow } from "@/components/QuickStartFlow";
import { ImpactMetricsSection } from "@/components/ImpactMetricsSection";
import { StakeholderPortal } from "@/components/StakeholderPortal";
import { InteroperabilityDocs } from "@/components/InteroperabilityDocs";
import { EvidenceValidationDashboard } from "@/components/EvidenceValidationDashboard";

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
        {/* Hero Section - Simplified and Action-Oriented */}
        <section id="home" className="max-w-6xl mx-auto py-16 px-4 text-center animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              AHAID
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-4 tracking-tight">
              Where Care Meets Code
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto">
              Africa's Health and Inclusive Digitalization platform empowering healthcare through technology
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white shadow-lg transition-transform hover:scale-105" asChild>
              <Link to="/ecosystem">Explore Our Ecosystem</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50" asChild>
              <Link to="/community">Join 2,500+ Members</Link>
            </Button>
          </div>
        </section>

        {/* Impact Metrics */}
        <ImpactMetricsSection />

        {/* Quick Start Flow */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <QuickStartFlow />
        </section>

        {/* Stakeholder Portal */}
        <StakeholderPortal />

        {/* Evidence Validation Dashboard */}
        <EvidenceValidationDashboard />

        {/* Technical Documentation */}
        <InteroperabilityDocs />

        {/* Mission & Vision - Simplified */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-green-600">AHAID's commitment to African healthcare</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-700 to-green-500 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                A world where <strong>digital dignity</strong> is a human right in healthcare, 
                where every nurse is a knowledge node, and care is personalized, predictive, 
                and powered by empathy + intelligence.
              </p>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">The Challenge</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>1 in 3 patients</strong> lack timely emergency care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Nurses excluded despite being <strong>70% of workforce</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Tools not <strong>culturally adapted</strong></span>
                </div>
                <div className="flex items-center gap-3 mt-4 p-3 bg-green-50 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">AHAID changes this with smart, localized solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Interactive Cards */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">What Drives Us</h2>
            <p className="text-lg text-green-600">Click any card to explore our core values</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <InteractiveCard
                key={value.title}
                title={value.title}
                summary={value.description}
                details={`${value.description} This value shapes every decision we make and every solution we build, ensuring our work truly serves African communities.`}
                icon={value.icon}
                gradient={
                  value.title.includes('Empathy') ? 'from-red-500 to-pink-400' :
                  value.title.includes('Integrity') ? 'from-green-600 to-green-400' :
                  value.title.includes('Innovation') ? 'from-yellow-500 to-orange-400' :
                  'from-amber-600 to-yellow-500'
                }
              />
            ))}
          </div>
        </section>

        {/* 4C Empowerment Streams - Interactive */}
        <section id="empowerment" className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">The 4C Framework</h2>
            <p className="text-lg text-green-600 mb-6">Click any stream to discover AHAID's comprehensive approach</p>
            <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50" asChild>
              <Link to="/empowerment-streams">Explore All Streams <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {empowermentStreams.map((stream) => (
              <InteractiveCard
                key={stream.title}
                title={stream.title}
                summary={stream.summary}
                details={stream.details}
                icon={stream.icon}
                gradient={stream.color}
                className="h-80"
              />
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
            <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-amber-50" asChild>
              <Link to="/studio">Visit Studio <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-green-50" asChild>
                <Link to="/community">Join Community <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
