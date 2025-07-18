
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ResourcesOrganized from "@/components/ResourcesOrganized";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-green-50 to-white">
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
              <BookOpen className="w-8 h-8 text-green-700" />
              <h1 className="text-4xl md:text-5xl font-bold text-green-800">
                Resources Hub
              </h1>
            </div>
            <p className="max-w-3xl mx-auto text-lg text-green-900/80">
              Access comprehensive digital tools, training materials, and developer resources 
              to support healthcare innovation and digital transformation across Africa.
            </p>
          </div>
        </section>

        {/* Organized Resources */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="animate-fade-in">
            <ResourcesOrganized />
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Need Something Specific?
          </h3>
          <p className="text-lg text-green-900/80 mb-6">
            Can't find what you're looking for? Our team is here to help with custom resources and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white" asChild>
              <Link to="/#contact">Contact Support</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-700 text-blue-800 hover:bg-blue-50" asChild>
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;
