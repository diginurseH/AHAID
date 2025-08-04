
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TableOfContents from "@/components/TableOfContents";
import ResourcesOrganized from "@/components/ResourcesOrganized";
import resourcesImage from "@/assets/resources-digital.jpg";

const Resources = () => {
  const tocItems = [
    { id: "overview", title: "Resources Overview", level: 1 },
    { id: "resources", title: "Resource Categories", level: 1 },
    { id: "support", title: "Need Help?", level: 1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbNav />
          
          <TableOfContents items={tocItems} />

          {/* Header Section with Image */}
          <section id="overview" className="py-12">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="text-secondary">Resources</span> <span className="text-primary">Hub</span>
                  </h1>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Access comprehensive digital tools, training materials, and developer resources 
                  to support healthcare innovation across Africa.
                </p>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="#resources">Browse Resources</Link>
                </Button>
              </div>
              <div>
                <img 
                  src={resourcesImage} 
                  alt="Digital resources and training materials interface" 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* Organized Resources */}
          <section id="resources">
            <div className="animate-fade-in">
              <ResourcesOrganized />
            </div>
          </section>

          {/* Quick Access Section */}
          <section id="support" className="py-12 text-center">
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
              <Button size="lg" className="bg-primary-foreground text-primary border border-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/community">Join Community</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resources;
