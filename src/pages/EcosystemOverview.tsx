
import { Button } from "@/components/ui/button";
import { ArrowLeft, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import EcosystemMap from "@/components/EcosystemMap";
import StakeholderNetwork from "@/components/StakeholderNetwork";
import ImpactMetrics from "@/components/ImpactMetrics";
import SustainabilityModel from "@/components/SustainabilityModel";

const EcosystemOverview = () => {
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
            <h2 className="text-xl md:text-2xl text-amber-700 mb-6">
              A Comprehensive View of Our Interconnected Healthcare Innovation Network
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-green-900/80">
              Explore how our four empowerment streams work together to create sustainable impact across Africa's healthcare landscape, 
              connecting stakeholders, measuring outcomes, and building a self-sustaining ecosystem for transformation.
            </p>
          </div>
        </section>

        {/* Ecosystem Components */}
        <section className="max-w-7xl mx-auto px-4 space-y-12">
          {/* Ecosystem Map */}
          <div className="animate-fade-in">
            <EcosystemMap />
          </div>

          {/* Stakeholder Network */}
          <div className="animate-fade-in">
            <StakeholderNetwork />
          </div>

          {/* Impact Metrics */}
          <div className="animate-fade-in">
            <ImpactMetrics />
          </div>

          {/* Sustainability Model */}
          <div className="animate-fade-in">
            <SustainabilityModel />
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
              <Link to="/#contact">Get Involved</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EcosystemOverview;
