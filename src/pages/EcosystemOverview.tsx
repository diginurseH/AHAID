
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Network, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TableOfContents from "@/components/TableOfContents";
import ecosystemImage from "@/assets/ecosystem-workspace.jpg";

const ecosystemComponents = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Nursaera Platform",
    description: "AI-powered digital health platform for chronic disease management",
    color: "bg-primary text-primary-foreground"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "SME Transformation",
    description: "Digital solutions for African small and medium enterprises",
    color: "bg-secondary text-secondary-foreground"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Community Hub",
    description: "Connect healthcare professionals and innovators across Africa",
    color: "bg-accent text-accent-foreground"
  }
];

const EcosystemOverview = () => {
  const tocItems = [
    { id: "overview", title: "Ecosystem Overview", level: 1 },
    { id: "components", title: "Key Components", level: 1 },
    { id: "join", title: "Join the Ecosystem", level: 1 },
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
                  <Network className="w-8 h-8 text-primary" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="text-secondary">AHAID</span> <span className="text-primary">Ecosystem</span>
                  </h1>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  A comprehensive digital health ecosystem connecting healthcare professionals, 
                  technology innovators, and communities across Africa.
                </p>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/community">Join Our Community</Link>
                </Button>
              </div>
              <div>
                <img 
                  src={ecosystemImage} 
                  alt="AHAID ecosystem workspace with African professionals" 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* Key Components */}
          <section id="components" className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-secondary">Key</span> <span className="text-primary">Components</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ecosystemComponents.map((component, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${component.color}`}>
                      {component.icon}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {component.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {component.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section id="join" className="py-12">
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join the AHAID Ecosystem
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Whether you're a healthcare professional, developer, entrepreneur, or community leader, 
                there's a place for you in our growing ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                  <Link to="/empowerment-streams">Explore Streams</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                  <Link to="/resources">Access Resources</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                  <Link to="/#contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EcosystemOverview;
