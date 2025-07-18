import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, HeartPulse, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProgressiveDisclosure from "@/components/ProgressiveDisclosure";

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
    description:
      "AI-driven chronic disease support, nurse training, emotional support SOPs.",
    color: "from-green-700 to-green-400",
    icon: <HeartPulse className="w-7 h-7" />,
  },
  {
    title: "Code",
    description:
      "Open-source innovation hub, technical guides, APIs, and developer resources.",
    color: "from-blue-900 to-blue-400",
    icon: <Sparkles className="w-7 h-7" />,
  },
  {
    title: "Community",
    description:
      "Powerful stories, webinars, emotional wellness resources, testimonials.",
    color: "from-amber-700 to-yellow-300",
    icon: <Users className="w-7 h-7" />,
  },
  {
    title: "Commerce",
    description:
      "Digital strategy & tools for small and medium-sized African enterprises, empowering growth through web, mobile & messaging technology solutions.",
    color: "from-yellow-700 to-yellow-400",
    icon: <BookMarked className="w-7 h-7" />,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-yellow-50 via-emerald-50 to-white font-sans">
      <Navbar />
      
      <main className="pt-20 pb-6">
        {/* Header Section */}
        <section id="home" className="max-w-4xl mx-auto py-14 px-4 flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-3 tracking-tight">
            AFRICA'S HEALTH AND INCLUSIVE DIGITALIZATION (AHAID)
          </h1>
          <h3 className="text-lg md:text-xl text-green-800 font-semibold mb-6">
            Where Care Meets Code
          </h3>
          <div className="flex justify-center animate-fade-in">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white shadow-lg transition-transform hover:scale-105" asChild>
              <Link to="/ecosystem">Explore the Ecosystem</Link>
            </Button>
          </div>
        </section>

        {/* About Us Section - Progressive Disclosure */}
        <section id="about" className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">About Us</h2>
          
          <div className="space-y-6">
            <ProgressiveDisclosure
              title="Our Story"
              summary="Born from the intersection of nursing expertise and technological innovation, DINHA represents a quiet revolution in African healthcare."
              defaultOpen={true}
            >
              <p className="text-green-900 leading-relaxed mb-4">
                We emerged from the recognition that healthcare transformation requires both deep clinical 
                understanding and cutting-edge digital solutions. Our founder, drawing from extensive nursing 
                experience across multiple healthcare systems, identified the critical gap between available 
                technology and real-world healthcare needs in resource-constrained environments.
              </p>
            </ProgressiveDisclosure>

            <ProgressiveDisclosure
              title="What Makes Us Different"
              summary="Four key differentiators set DINHA apart in the digital health landscape."
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800">Nurse-Led Innovation</h4>
                    <p className="text-sm text-green-700">Built by healthcare professionals who understand real clinical challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800">Cultural Sensitivity</h4>
                    <p className="text-sm text-green-700">Solutions designed with African contexts and values at the core</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800">Community-Centered</h4>
                    <p className="text-sm text-green-700">Technology that strengthens rather than replaces human connections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookMarked className="w-5 h-5 text-amber-800 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800">Open Source Commitment</h4>
                    <p className="text-sm text-green-700">Transparent, accessible, and collaboratively developed</p>
                  </div>
                </div>
              </div>
            </ProgressiveDisclosure>
          </div>
        </section>

        {/* Mission & Vision - Condensed */}
        <section className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-green-700/95 text-white rounded-xl shadow-lg animate-fade-in p-6">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p>
                We envision a world where <strong>digital dignity</strong> is a human right in healthcare. 
                Where every nurse is a knowledge node, and care is personalized, predictive, and powered by empathy + intelligence.
              </p>
            </div>
            <div className="bg-amber-50/90 border border-amber-200 rounded-xl shadow animate-fade-in p-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">The Problem We're Solving</h3>
              <ul className="list-disc ml-5 space-y-2 text-base text-green-900">
                <li><strong>1 in 3 patients</strong> lack access to timely emergency care</li>
                <li>Nurses excluded from tech innovation despite being <strong>70% of health workforce</strong></li>
                <li>Existing tools are <strong>not culturally adapted</strong></li>
                <li className="text-green-700 font-medium">DINHA changes that with smart, localized, AI-integrated solutions</li>
              </ul>
            </div>
          </div>

          {/* Core Values - Collapsed by Default */}
          <ProgressiveDisclosure
            title="Core Values"
            summary="Four fundamental principles guide everything we do at DINHA."
          >
            <div className="grid md:grid-cols-4 gap-6">
              {coreValues.map((v) => (
                <div key={v.title} className="hover:scale-105 transition-all duration-200 shadow border-green-100/80 rounded-xl bg-white animate-fade-in">
                  <div className="flex flex-col items-center p-5">
                    <div className="mb-3">{v.icon}</div>
                    <h4 className="font-semibold mb-1 text-green-900">{v.title}</h4>
                    <p className="text-sm text-muted-foreground text-center">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ProgressiveDisclosure>
        </section>

        {/* 4C Empowerment Streams - Always Visible */}
        <section id="empowerment" className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Empowerment Streams: The 4C Framework</h2>
            <Button variant="outline" className="border-green-700 text-green-800 hover:bg-green-50" asChild>
              <Link to="/empowerment-streams">View Detailed Streams</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {empowermentStreams.map((c) => (
              <div
                key={c.title}
                className={`rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg hover:scale-105 transition-transform animate-enter flex flex-col items-center p-7 relative`}
              >
                {c.icon}
                <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/90 text-center">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Condensed Sections */}
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
          <ProgressiveDisclosure
            title="DINHA Studio"
            summary="Explore inspiring stories, health innovation blogs, and personal narratives integrated with Medium and Notion."
          >
            <div className="text-center">
              <p className="mb-5 text-green-900 text-base md:text-lg max-w-2xl mx-auto">
                Seamless African healthcare storytelling and knowledge sharing platform featuring 
                curated content, expert insights, and community-driven narratives.
              </p>
              <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-yellow-50">
                Visit Studio Blog
              </Button>
            </div>
          </ProgressiveDisclosure>

          <ProgressiveDisclosure
            title="Join Our Community"
            summary="Connect with 2,500+ healthcare professionals, developers, and innovators across 15 African countries."
            defaultOpen={true}
          >
            <div className="bg-gradient-to-r from-green-800 to-emerald-700 text-white rounded-2xl p-8 text-center shadow-xl">
              <Users className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <p className="mb-6 text-green-100 text-base md:text-lg max-w-2xl mx-auto">
                Share experiences, participate in webinars, and access exclusive resources for healthcare transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-green-50" asChild>
                  <Link to="/community">Explore Community</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Testimonials
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">2,500+</div>
                  <div className="text-sm text-green-100">Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">15</div>
                  <div className="text-sm text-green-100">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">450+</div>
                  <div className="text-sm text-green-100">Discussions</div>
                </div>
              </div>
            </div>
          </ProgressiveDisclosure>
        </section>

        {/* Contact Section - Simplified */}
        <section id="contact" className="max-w-2xl mx-auto px-4 py-10">
          <ProgressiveDisclosure
            title="Contact & Collaborate"
            summary="Ready to join the healthcare transformation? Get in touch with our team."
          >
            <form className="bg-white rounded shadow p-6 flex flex-col gap-4" autoComplete="off">
              <div>
                <label htmlFor="name" className="block text-green-900 font-medium mb-1">Name</label>
                <input id="name" name="name" className="w-full px-3 py-2 border border-green-200 rounded focus:outline-amber-700" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-green-900 font-medium mb-1">Email</label>
                <input id="email" name="email" type="email" className="w-full px-3 py-2 border border-green-200 rounded focus:outline-amber-700" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-green-900 font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={3} className="w-full px-3 py-2 border border-green-200 rounded focus:outline-amber-700" placeholder="How can we help or collaborate?" />
              </div>
              <Button type="submit" className="bg-amber-700 text-white hover:bg-amber-800 w-full">Send Message</Button>
            </form>
          </ProgressiveDisclosure>
        </section>
      </main>

      {/* Founder's Note - Collapsed */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <ProgressiveDisclosure
          title="Founder's Note"
          summary="A personal message about the vision and mission behind DINHA."
        >
          <div className="bg-gradient-to-r from-green-800 to-emerald-700 text-white rounded-2xl p-8 text-center shadow-xl">
            <blockquote className="text-lg italic leading-relaxed mb-6">
              "This is not a platform. It is a remembering. DINHA is the breath that systems forgot to take—care rendered in code, 
              a quiet revolt, a sacred redesign. It was created for the nurse who healed without tools, for the patient who waited in silence, 
              and for the system that lost its pulse."
            </blockquote>
            <p className="font-semibold text-amber-200">
              We are not what broke us; we are what rebuilds—with presence. We are not the aftermath. We are the architects. 
              New ancestors, in real time—writing futures in the language of dignity.
            </p>
          </div>
        </ProgressiveDisclosure>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-green-800/95 text-white text-center text-xs mt-16 tracking-wide animate-fade-in flex flex-col gap-2">
        <div>
          © {new Date().getFullYear()} DINHA – AFRICA'S HEALTH AND INCLUSIVE DIGITALIZATION (AHAID). Empowering Africa, Digitally & Compassionately.
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
