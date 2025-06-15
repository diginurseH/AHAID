import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, HeartPulse, BookMarked } from "lucide-react";
import Navbar from "@/components/Navbar";
import DinhaLogo from "@/components/DinhaLogo";

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
      "Digital strategy & tools for small and medium-sized African enterprises. DINHA empowers growth through web, mobile & messaging tech—proven with Mister's Bakery: web app & WhatsApp integration.",
    color: "from-yellow-700 to-yellow-400",
    icon: <BookMarked className="w-7 h-7" />,
    proofOfLife: true,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-yellow-50 via-emerald-50 to-white font-sans">
      {/* Navigation Bar */}
      <Navbar />
      {/* Main Content Below Nav */}
      <main className="pt-20 pb-6">
        {/* Header Section */}
        <section id="home" className="max-w-4xl mx-auto py-14 px-4 flex flex-col items-center text-center animate-fade-in">
          <div className="mb-5">
            {/* Big logo for home, hidden on mobile */}
            <span className="hidden md:block">
              <DinhaLogo size={90} />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-3 tracking-tight">
            DINHA
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-amber-700 mb-6">
            DigiNurse Health Africa
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-foreground/90 mb-6">
            Empowering Africa’s healthcare professionals, patients, and communities through <span className="text-green-700 font-medium">digital innovation</span>, <span className="text-amber-700 font-medium">emotional intelligence</span>, and <span className="text-emerald-700 font-medium">impactful storytelling.</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center animate-fade-in">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white shadow-lg transition-transform hover:scale-105">
              Explore the Ecosystem
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-800 hover:bg-green-50">
              Meet Your DINHA AI
            </Button>
            <Button size="lg" variant="secondary" className="bg-amber-700 text-white hover:bg-amber-800">
              Join Our Community
            </Button>
          </div>
        </section>
        {/* Mission & Vision */}
        <section className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-green-700/95 text-white rounded-xl shadow-lg animate-fade-in p-6">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p>
                To revolutionize healthcare across Africa—empowering every nurse, patient, and innovator to thrive through digital, emotional, and communal strength.
              </p>
            </div>
            <div className="bg-amber-50/90 border border-amber-200 rounded-xl shadow animate-fade-in p-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Our Mission</h3>
              <ul className="list-disc ml-5 space-y-1 text-base text-green-900">
                <li>AI-powered guidance for chronic illness, focused on hypertension and diabetes.</li>
                <li>Empower nurses: digital tools, education, emotional resilience.</li>
                <li>Open-source, collaborative innovation—connecting all stakeholders.</li>
                <li>Storytelling for wellness: amplify voices, emotional engagement, and impact.</li>
              </ul>
            </div>
          </div>
          {/* Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-amber-700">Core Values</h3>
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
          </div>
        </section>
        {/* 4C Empowerment Streams */}
        <section id="empowerment" className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Empowerment Streams: The 4C Framework</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {empowermentStreams.map((c) => (
              <div
                key={c.title}
                className={`rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg hover:scale-105 transition-transform animate-enter flex flex-col items-center p-7 relative`}
              >
                {c.icon}
                <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/90 text-center">{c.description}</p>
                {/* Add Proof of Life (Mister's Bakery) visually in Commerce */}
                {c.proofOfLife && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full px-3">
                    <div className="bg-white bg-opacity-90 border border-yellow-300 rounded-xl shadow-md p-4 mt-6 text-center text-green-900">
                      <div className="font-semibold text-amber-700 mb-1">Proof of Life</div>
                      <div className="text-[15px] mb-2">
                        <span className="font-bold">Mister's Bakery Pilot:</span> <br />
                        DINHA built a web app & WhatsApp integration for real SME impact in Africa.
                      </div>
                      {/* Button stub; replace link as needed */}
                      <a
                        href="#contact"
                        className="inline-block text-amber-700 border border-amber-700 rounded px-3 py-1.5 mt-1.5 hover:bg-amber-50 transition font-medium text-sm"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="h-12"></div> {/* Spacer for proof-of-life card overlap */}
        </section>
        {/* Studio Section Placeholder */}
        <section id="studio" className="max-w-5xl mx-auto px-4 py-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">DINHA Studio</h2>
          <p className="mb-5 text-green-900 text-base md:text-lg text-center max-w-2xl">
            Explore inspiring stories, health innovation blogs, and personal narratives. Integrated with Medium and Notion for seamless African healthcare storytelling and knowledge sharing.
          </p>
          <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-yellow-50">
            Visit Studio Blog
          </Button>
        </section>
        {/* Community Section Placeholder */}
        <section id="community" className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Community Voices</h2>
          <p className="mb-3 text-green-900 text-base md:text-lg text-center max-w-2xl">
            Real experiences, webinars, and testimonials. Join a thriving community dedicated to healthcare transformation across Africa.
          </p>
          <Button variant="secondary" className="bg-green-700 text-white hover:bg-green-800">
            Join the Conversation
          </Button>
        </section>
        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Contact & Collaborate</h2>
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
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-green-800/95 text-white text-center text-xs mt-16 tracking-wide animate-fade-in flex flex-col gap-2">
        <div>
          © {new Date().getFullYear()} DINHA – DigiNurse Health Africa. Empowering Africa, Digitally & Compassionately.
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
