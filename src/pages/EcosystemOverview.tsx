
import { Button } from "@/components/ui/button";
import { ArrowLeft, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CoreProblems from "@/components/CoreProblems";
import EcosystemDashboard from "@/components/EcosystemDashboard";
import EcosystemDetailModal from "@/components/EcosystemDetailModal";

const EcosystemOverview = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-emerald-50 to-white">
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Network className="w-8 h-8 text-green-700" />
              <h1 className="text-4xl md:text-5xl font-bold text-green-800">
                DINHA Ecosystem
              </h1>
            </div>
            <p className="max-w-3xl mx-auto text-lg text-green-900/80">
              Discover our comprehensive ecosystem featuring Nursaera (our AI-powered digital health platform), 
              SME digital transformation services, and culturally-responsive healthcare solutions. 
              See how our 4C Framework creates sustainable impact across African communities through ethical technology, 
              multilingual support, and community-driven innovation.
            </p>
          </div>
        </section>

        {/* Core Problems - Always Visible */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="animate-fade-in">
            <CoreProblems />
          </div>
        </section>

        {/* Interactive Dashboard */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="animate-fade-in">
            <EcosystemDashboard onSectionClick={handleSectionClick} />
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Join the DINHA Ecosystem
          </h3>
          <p className="text-lg text-green-900/80 mb-6">
            Whether you're a healthcare professional, developer, entrepreneur, or community leader, 
            there's a place for you in our growing ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white" asChild>
              <Link to="/empowerment-streams">Explore Streams</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-amber-700 text-amber-800 hover:bg-amber-50" asChild>
              <Link to="/resources">Access Resources</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-800 hover:bg-green-50" asChild>
              <Link to="/#contact">Get Involved</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Detail Modal */}
      <EcosystemDetailModal 
        sectionId={selectedSection}
        isOpen={!!selectedSection}
        onClose={() => setSelectedSection(null)}
      />
    </div>
  );
};

export default EcosystemOverview;
