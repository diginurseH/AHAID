
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, HeartPulse, BookMarked } from "lucide-react";

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
      "Entrepreneurship playbooks and resource toolkits for health innovators.",
    color: "from-yellow-700 to-yellow-400",
    icon: <BookMarked className="w-7 h-7" />,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-yellow-50 via-emerald-50 to-white font-sans">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto py-14 px-4 flex flex-col items-center text-center animate-fade-in">
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
      </div>
      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card className="bg-green-700/95 text-white shadow-lg animate-fade-in">
            <CardContent className="py-6">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p>
                To revolutionize healthcare across Africa—empowering every nurse, patient, and innovator to thrive through digital, emotional, and communal strength.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50/90 border-amber-200 shadow animate-fade-in">
            <CardContent className="py-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Our Mission</h3>
              <ul className="list-disc ml-5 space-y-1 text-base text-green-900">
                <li>AI-powered guidance for chronic illness, focused on hypertension and diabetes.</li>
                <li>Empower nurses: digital tools, education, emotional resilience.</li>
                <li>Open-source, collaborative innovation—connecting all stakeholders.</li>
                <li>Storytelling for wellness: amplify voices, emotional engagement, and impact.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* Values */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-amber-700">Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((v) => (
              <Card key={v.title} className="hover:scale-105 transition-all duration-200 shadow border-green-100/80 bg-white">
                <CardContent className="flex flex-col items-center p-5">
                  <div className="mb-3">{v.icon}</div>
                  <h4 className="font-semibold mb-1 text-green-900">{v.title}</h4>
                  <p className="text-sm text-muted-foreground text-center">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* 4C Empowerment Streams */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Empowerment Streams: The 4C Framework</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {empowermentStreams.map((c) => (
            <div
              key={c.title}
              className={`rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg hover:scale-105 transition-transform animate-enter flex flex-col items-center p-7`}
            >
              {c.icon}
              <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/90 text-center">{c.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-green-800/95 text-white text-center text-xs mt-16 tracking-wide animate-fade-in">
        © {new Date().getFullYear()} DINHA – DigiNurse Health Africa. Empowering Africa, Digitally & Compassionately.
      </footer>
    </main>
  );
};

export default Index;
