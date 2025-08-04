
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeartPulse, Sparkles, Users, BookMarked, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Metadata } from "@/components/Metadata";
import { EmpowermentStreamCard, type EmpowermentStreamProps } from "@/components/EmpowermentStreamCard";
import { LazyLoad } from "@/components/LazyLoad";
import { useAnalytics } from "@/hooks/useAnalytics";
import EnhancedEcosystemDashboard from "@/components/EnhancedEcosystemDashboard";
import EcosystemDetailModal from "@/components/EcosystemDetailModal";
import GuidedTour from "@/components/GuidedTour";
import DataStorytellingPanel from "@/components/DataStorytellingPanel";

const empowermentStreams: EmpowermentStreamProps[] = [
  {
    title: "Care",
    description:
      "AI-driven chronic disease support, nurse training, emotional support SOPs.",
    fullDescription: "Our Care stream focuses on empowering healthcare professionals with AI-driven tools for chronic disease management, comprehensive nurse training programs, and standardized emotional support protocols. We provide evidence-based resources for hypertension and diabetes management, mental health support systems, and continuous professional development opportunities.",
    color: "from-green-700 to-green-400",
    icon: <HeartPulse className="w-8 h-8" />,
    features: [
      "AI-powered chronic disease management tools",
      "Comprehensive nurse training modules",
      "Emotional support standard operating procedures",
      "Evidence-based treatment protocols",
      "Mental health integration frameworks"
    ]
  },
  {
    title: "Code",
    description:
      "Open-source innovation hub, technical guides, APIs, and developer resources.",
    fullDescription: "The Code stream represents our commitment to open-source innovation and collaborative development. We provide comprehensive technical documentation, robust APIs, developer toolkits, and community-driven projects that advance digital health solutions across Africa.",
    color: "from-blue-900 to-blue-400",
    icon: <Sparkles className="w-8 h-8" />,
    features: [
      "Open-source health technology projects",
      "Comprehensive API documentation",
      "Developer community platform",
      "Technical guides and tutorials",
      "Collaborative innovation workspace"
    ]
  },
  {
    title: "Community",
    description:
      "Powerful stories, webinars, emotional wellness resources, testimonials.",
    fullDescription: "Our Community stream amplifies voices, shares transformative stories, and builds connections across Africa's healthcare ecosystem. Through webinars, testimonials, and wellness resources, we create a supportive network that drives positive change.",
    color: "from-amber-700 to-yellow-300",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Inspirational healthcare stories",
      "Regular community webinars",
      "Emotional wellness resources",
      "Patient and provider testimonials",
      "Peer support networks"
    ]
  },
  {
    title: "Commerce",
    description:
      "Digital strategy & tools for small and medium-sized African enterprises.",
    fullDescription: "The Commerce stream empowers African SMEs with digital transformation tools and strategies. Our proven approach includes web applications, mobile solutions, and messaging platform integrations that drive real business growth and community impact.",
    color: "from-yellow-700 to-yellow-400",
    icon: <BookMarked className="w-8 h-8" />,
    features: [
      "Digital transformation consulting",
      "Custom web and mobile applications",
      "WhatsApp business integrations",
      "E-commerce platform development",
      "Digital marketing strategies"
    ],
    proofOfLife: {
      title: "Mister's Bakery Success Story",
      description: "AHAID successfully implemented a comprehensive digital solution for Mister's Bakery, including a custom web application and WhatsApp integration, resulting in increased customer engagement and streamlined operations."
    }
  },
];

const EmpowermentStreams = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  // Use analytics hook to track page views and interactions
  useAnalytics({
    trackUserInteractions: true,
    trackOutboundLinks: true
  });

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    setIsModalOpen(true);
  };

  const handleStartTour = () => {
    setIsTourOpen(true);
  };

  const handleTourComplete = () => {
    setIsTourOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-emerald-50 to-white">
      <Metadata 
        title="Empowerment Streams | The 4C Framework" 
        description="Our comprehensive approach to empowering Africa's healthcare ecosystem through four interconnected streams: Care, Code, Community, and Commerce."
        keywords={["healthcare", "africa", "digital health", "empowerment", "4C framework"]}
      />
      <Navbar />
      
      <main className="pt-20 pb-12">
        {/* Header Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Empowerment Streams
            </h1>
            <h2 className="text-xl md:text-2xl text-amber-700 mb-6">
              The 4C Framework for Digital Health Transformation
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-green-900/80">
              Our comprehensive approach to empowering Africa's healthcare ecosystem through four interconnected streams: Care, Code, Community, and Commerce.
            </p>
          </div>
        </section>

        {/* Empowerment Streams Details */}
        <section className="max-w-7xl mx-auto px-4" aria-labelledby="empowerment-streams-heading">
          <h2 id="empowerment-streams-heading" className="sr-only">Empowerment Streams Details</h2>
          <div className="grid gap-8">
            {empowermentStreams.map((stream, index) => (
              <div key={stream.title} data-testid={`stream-${stream.title.toLowerCase()}`}>
                {index < 2 ? (
                  <EmpowermentStreamCard stream={stream} />
                ) : (
                  <LazyLoad>
                    <EmpowermentStreamCard stream={stream} />
                  </LazyLoad>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Dashboard */}
        <section className="max-w-7xl mx-auto px-4 py-12" data-tour="dashboard">
          <div data-tour="filters">
            <EnhancedEcosystemDashboard 
              onSectionClick={handleSectionClick}
              onStartTour={handleStartTour}
            />
          </div>
        </section>

        {/* Data Storytelling */}
        <section className="max-w-7xl mx-auto px-4 py-8" data-tour="narrative">
          <DataStorytellingPanel selectedSection={selectedSection} />
        </section>

        {/* Call to Action */}
        <section 
          className="max-w-4xl mx-auto px-4 py-12 text-center"
          aria-labelledby="cta-heading"
          data-testid="call-to-action"
        >
          <h3 id="cta-heading" className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Ready to Transform Healthcare in Africa?
          </h3>
          <p className="text-lg text-green-900/80 mb-6">
            Join us in building a comprehensive digital health ecosystem that empowers communities across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-700 hover:bg-amber-800 text-white"
              data-action="partner"
              aria-label="Partner with AHAID"
              onClick={() => {
                window.location.href = 'mailto:partnerships@ahaid.org?subject=Partnership Inquiry&body=Hello AHAID team, I am interested in exploring partnership opportunities with your organization.';
              }}
            >
              Partner with Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-700 text-green-800 hover:bg-green-50" 
              asChild
              data-action="contact"
            >
              <Link to="/#contact" aria-label="Go to contact section">
                Get in Touch
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Modals and Overlays */}
      <EcosystemDetailModal
        sectionId={selectedSection}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <GuidedTour
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onComplete={handleTourComplete}
      />
    </div>
  );
};

export default EmpowermentStreams;
