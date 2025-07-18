
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, FileText, Code, GraduationCap, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Resources = () => {
  const digitalTools = [
    {
      title: "Triage and Follow-up Applications",
      description: "AI-powered assessment tools for initial patient evaluation and ongoing care monitoring",
      type: "Clinical Tool",
      icon: FileText,
      status: "Available"
    },
    {
      title: "Documentation Forms",
      description: "Standardized digital forms for patient records and care documentation",
      type: "Clinical Tool", 
      icon: FileText,
      status: "Available"
    },
    {
      title: "Referral Alert System",
      description: "Real-time notification system for patient referrals and care coordination",
      type: "Clinical Tool",
      icon: Settings,
      status: "Beta"
    },
    {
      title: "Remote Monitoring Dashboard",
      description: "Comprehensive dashboard for tracking patient health metrics remotely",
      type: "Clinical Tool",
      icon: Settings,
      status: "Development"
    }
  ];

  const trainingMaterials = [
    {
      title: "Digital Skills Courses",
      description: "Comprehensive training modules for healthcare workers on digital health tools",
      type: "Training",
      icon: GraduationCap,
      status: "Available"
    },
    {
      title: "Clinical Case Studies",
      description: "Real-world case studies demonstrating best practices in digital health",
      type: "Training",
      icon: FileText,
      status: "Available"
    },
    {
      title: "Care Protocols",
      description: "Evidence-based protocols for various healthcare scenarios and conditions",
      type: "Training",
      icon: FileText,
      status: "Available"
    },
    {
      title: "Quality Assurance Guidelines",
      description: "Standards and procedures for maintaining high-quality healthcare delivery",
      type: "Training",
      icon: FileText,
      status: "Available"
    }
  ];

  const developerResources = [
    {
      title: "API Documentation",
      description: "Comprehensive documentation for integrating with DINHA platform APIs",
      type: "Developer",
      icon: Code,
      status: "Available"
    },
    {
      title: "Chatbot Implementation Guide",
      description: "Step-by-step guide for implementing AI chatbots in healthcare settings",
      type: "Developer",
      icon: Code,
      status: "Available"
    },
    {
      title: "Standard Operating Procedures (SOPs)",
      description: "Detailed procedures for platform implementation and maintenance",
      type: "Documentation",
      icon: FileText,
      status: "Available"
    },
    {
      title: "Learning Management System",
      description: "Platform for managing and delivering healthcare education programs",
      type: "Platform",
      icon: GraduationCap,
      status: "Beta"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const ResourceCard = ({ resource }: { resource: any }) => {
    const Icon = resource.icon;
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-green-700" />
            <div>
              <h4 className="font-semibold text-gray-900">{resource.title}</h4>
              <span className="text-xs text-gray-500">{resource.type}</span>
            </div>
          </div>
          <span className={`px-2 py-1 text-xs rounded border ${getStatusColor(resource.status)}`}>
            {resource.status}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <Download className="w-3 h-3" />
            Download
          </Button>
          <Button size="sm" variant="ghost" className="flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            View
          </Button>
        </div>
      </div>
    );
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
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Resources Hub
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-green-900/80">
              Access comprehensive digital tools, training materials, and developer resources 
              to support healthcare innovation across Africa. Everything you need to implement 
              and scale digital health solutions.
            </p>
          </div>
        </section>

        {/* Resources Sections */}
        <section className="max-w-7xl mx-auto px-4 space-y-12">
          {/* Digital Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Digital Health Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {digitalTools.map((tool, idx) => (
                  <ResourceCard key={idx} resource={tool} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Training Materials */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Training Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {trainingMaterials.map((material, idx) => (
                  <ResourceCard key={idx} resource={material} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Developer Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Code className="w-6 h-6" />
                Developer Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {developerResources.map((resource, idx) => (
                  <ResourceCard key={idx} resource={resource} />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-lg text-green-900/80 mb-6">
            Our team can help you implement and customize these resources for your specific healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white" asChild>
              <Link to="/#contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-amber-700 text-amber-800 hover:bg-amber-50" asChild>
              <Link to="/community">Join the Community</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;
