import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Users, 
  Globe, 
  Target, 
  Award, 
  Shield,
  TrendingUp,
  MapPin,
  Building,
  BookOpen,
  Handshake,
  CheckCircle,
  Eye,
  Compass,
  ArrowRight,
  Star,
  User,
  GraduationCap,
  Stethoscope,
  Code,
  UserCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Metadata } from "@/components/Metadata";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import heroImage from "@/assets/hero-healthcare.jpg";
import nurseImage from "@/assets/nurse-technology.jpg";
import innovationImage from "@/assets/innovation-workspace.jpg";

const missionVisionData = {
  mission: "To democratize access to quality healthcare across Africa through innovative AI-driven solutions that empower healthcare professionals, strengthen community health systems, and create sustainable digital transformation pathways.",
  vision: "A future where every African has access to quality, dignified healthcare powered by locally-relevant technology that respects cultural values while advancing medical excellence.",
  sdgAlignment: [
    { goal: "SDG 3", description: "Good Health and Well-being", impact: "Primary focus on healthcare accessibility" },
    { goal: "SDG 4", description: "Quality Education", impact: "Healthcare professional training and development" },
    { goal: "SDG 5", description: "Gender Equality", impact: "Empowering women in healthcare and technology" },
    { goal: "SDG 8", description: "Decent Work", impact: "Creating sustainable employment in health tech" },
    { goal: "SDG 9", description: "Innovation & Infrastructure", impact: "Building healthcare technology infrastructure" },
    { goal: "SDG 17", description: "Partnerships", impact: "Cross-sector collaboration for health outcomes" }
  ]
};

const teamMembers = [
  {
    name: "Dr. Amina Hassan",
    role: "Founder & CEO",
    credentials: "MD, MPH, Digital Health Innovation",
    experience: "15+ years in African healthcare systems",
    expertise: ["Digital Health Strategy", "Healthcare Policy", "AI in Medicine"],
    image: nurseImage,
    bio: "Leading healthcare transformation across Africa with expertise in digital health implementation and policy development."
  },
  {
    name: "Samuel Ochieng",
    role: "CTO & Co-Founder", 
    credentials: "PhD Computer Science, AI/ML Specialist",
    experience: "12+ years in healthcare technology",
    expertise: ["AI/Machine Learning", "Healthcare Platforms", "Open Source Development"],
    image: innovationImage,
    bio: "Building robust, scalable healthcare technology solutions with focus on AI-powered diagnostic tools."
  },
  {
    name: "Dr. Fatima Diallo",
    role: "Chief Medical Officer",
    credentials: "MD, Specialist in Internal Medicine",
    experience: "20+ years clinical practice",
    expertise: ["Clinical Decision Support", "Quality Assurance", "Medical Training"],
    image: heroImage,
    bio: "Ensuring clinical excellence and safety in all AHAID healthcare solutions and training programs."
  }
];

const advisoryBoard = [
  {
    name: "Prof. Kwame Asante",
    role: "Healthcare Policy Advisor",
    credentials: "Former WHO Regional Director, Africa",
    expertise: "Healthcare Policy & Governance"
  },
  {
    name: "Dr. Asha Patel",
    role: "AI Ethics Advisor", 
    credentials: "PhD AI Ethics, Stanford University",
    expertise: "Responsible AI Development"
  },
  {
    name: "James Mwangi",
    role: "Digital Innovation Advisor",
    credentials: "Former Chief Innovation Officer, Safaricom",
    expertise: "Digital Transformation Strategy"
  }
];

const impactMetrics = [
  {
    category: "Healthcare Impact",
    metrics: [
      { label: "Patients Served", value: "12,500+", growth: 45, period: "Last 12 months" },
      { label: "Healthcare Providers Trained", value: "850+", growth: 62, period: "Since launch" },
      { label: "AI Diagnostic Accuracy", value: "94.7%", growth: 8, period: "Continuous improvement" },
      { label: "Rural Clinics Connected", value: "125", growth: 78, period: "Expanding network" }
    ]
  },
  {
    category: "Geographic Reach",
    metrics: [
      { label: "Countries Active", value: "15", growth: 25, period: "Pan-African presence" },
      { label: "Rural Communities", value: "230+", growth: 55, period: "Growing coverage" },
      { label: "Urban Centers", value: "45", growth: 35, period: "Major cities" },
      { label: "Cross-Border Programs", value: "8", growth: 100, period: "Regional initiatives" }
    ]
  },
  {
    category: "Technology & Innovation",
    metrics: [
      { label: "Open Source Contributors", value: "280+", growth: 120, period: "Developer community" },
      { label: "Platform Uptime", value: "99.8%", growth: 2, period: "Reliability standard" },
      { label: "API Integrations", value: "150+", growth: 85, period: "Partner connections" },
      { label: "Data Points Processed", value: "2.5M+", growth: 180, period: "Monthly volume" }
    ]
  }
];

const coreValues = [
  {
    value: "Empathy & Care",
    description: "Every solution designed with patient dignity and healthcare provider support at its core",
    examples: [
      "AI tools provide gentle, culturally sensitive health recommendations",
      "Platform designed for low-resource settings with offline capabilities",
      "Training programs emphasize emotional intelligence alongside technical skills"
    ],
    icon: Heart
  },
  {
    value: "Accessibility",
    description: "Healthcare technology should be available to all, regardless of location or economic status",
    examples: [
      "Free tier access for rural healthcare providers",
      "Multi-language support including local African languages",
      "Low-bandwidth optimized applications for remote areas"
    ],
    icon: Users
  },
  {
    value: "Innovation",
    description: "Continuous advancement through creative solutions and collaborative development",
    examples: [
      "Open-source development model encouraging global contributions",
      "Regular hackathons focusing on African healthcare challenges",
      "Partnerships with universities for research and development"
    ],
    icon: Target
  },
  {
    value: "Afrocentric Approach",
    description: "Solutions rooted in African values, customs, and healthcare realities",
    examples: [
      "Traditional medicine integration with modern diagnostic tools",
      "Community health worker training aligned with local practices",
      "Data governance respecting cultural privacy expectations"
    ],
    icon: Globe
  }
];

const partnershipCategories = [
  {
    category: "Healthcare Institutions",
    description: "Leading hospitals, clinics, and health systems across Africa",
    partners: [
      { name: "Kenyatta National Hospital", type: "Teaching Hospital", location: "Kenya", impact: "500+ healthcare workers trained" },
      { name: "University of Cape Town Medical School", type: "Academic Medical Center", location: "South Africa", impact: "Research collaboration" },
      { name: "Lagos State Health System", type: "Government Health Network", location: "Nigeria", impact: "2M+ population served" }
    ],
    icon: Building
  },
  {
    category: "Technology Partners",
    description: "Leading technology companies and platforms supporting our infrastructure",
    partners: [
      { name: "Google for Nonprofits", type: "Cloud Infrastructure", location: "Global", impact: "$50K+ in cloud credits" },
      { name: "Microsoft AI for Good", type: "AI Development", location: "Global", impact: "Advanced AI tools access" },
      { name: "GitHub", type: "Open Source Platform", location: "Global", impact: "Free enterprise features" }
    ],
    icon: Code
  },
  {
    category: "Government & Policy",
    description: "Collaboration with health ministries and policy makers",
    partners: [
      { name: "African Union - Digital Health Initiative", type: "Continental Partnership", location: "Pan-African", impact: "Policy framework development" },
      { name: "Ghana Ministry of Health", type: "Government Partnership", location: "Ghana", impact: "National health system integration" },
      { name: "Rwanda Health Ministry", type: "Digital Health Program", location: "Rwanda", impact: "Rural clinic connectivity" }
    ],
    icon: Shield
  },
  {
    category: "Academic & Research",
    description: "Universities and research institutions advancing healthcare innovation",
    partners: [
      { name: "MIT - Global Health Initiative", type: "Research Partnership", location: "USA", impact: "Joint research publications" },
      { name: "University of Nairobi", type: "Academic Collaboration", location: "Kenya", impact: "Student internship programs" },
      { name: "Makerere University", type: "Innovation Hub", location: "Uganda", impact: "Health tech incubation" }
    ],
    icon: BookOpen
  }
];

const testimonials = [
  {
    quote: "AHAID's commitment to transparency and ethical AI development gives us confidence in their solutions.",
    author: "Dr. Maria Santos",
    role: "Chief Medical Officer, Lagos General Hospital",
    category: "transparency"
  },
  {
    quote: "The community feedback integration shows they truly listen to healthcare workers on the ground.",
    author: "Nurse Jennifer Wanjiku",
    role: "Rural Health Clinic, Kenya",
    category: "community"
  },
  {
    quote: "Their data privacy standards exceed international requirements while respecting local cultural values.",
    author: "Prof. Emmanuel Kweku",
    role: "Data Protection Specialist, University of Ghana",
    category: "privacy"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
      <Metadata 
        title="About AHAID | Nursaera Health" 
        description="Learn about AHAID's mission to transform African healthcare through AI-driven solutions, our expert team, impact metrics, and partnership ecosystem."
        keywords={["about AHAID", "healthcare innovation", "African health tech", "mission vision", "team", "partnerships"]}
      />
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="text-sm text-green-600 mb-8">
            <a href="/" className="hover:text-green-800">Home</a> / About Us
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="AHAID team and healthcare professionals" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              About AHAID
            </h1>
            <p className="text-xl text-green-700 mb-4 max-w-3xl mx-auto">
              NURSAERA HEALTH
            </p>
            <p className="text-lg text-green-600 italic mb-8">
              Where care meets code
            </p>
            <p className="text-lg text-green-900 max-w-4xl mx-auto">
              Transforming African healthcare through innovative AI-driven solutions that empower 
              healthcare professionals, strengthen community health systems, and create sustainable 
              digital transformation pathways.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Mission & Vision</h2>
            <p className="text-green-700 max-w-2xl mx-auto">
              Our purpose-driven approach to African healthcare transformation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-800">
                  <Compass className="w-6 h-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 leading-relaxed">
                  {missionVisionData.mission}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <Eye className="w-6 h-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 leading-relaxed">
                  {missionVisionData.vision}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* UN SDG Alignment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-800">
                <Globe className="w-6 h-6" />
                UN Sustainable Development Goals Alignment
              </CardTitle>
              <p className="text-green-700">
                Our work directly contributes to achieving multiple UN SDGs
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {missionVisionData.sdgAlignment.map((sdg, index) => (
                  <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-800 mb-2">{sdg.goal}</div>
                    <div className="text-sm font-medium text-green-700 mb-2">{sdg.description}</div>
                    <div className="text-xs text-green-600">{sdg.impact}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Showcase */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Team</h2>
            <p className="text-green-700 max-w-2xl mx-auto">
              Experienced healthcare and technology leaders driving innovation across Africa
            </p>
          </div>

          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
              <TabsTrigger value="advisory">Advisory Board</TabsTrigger>
              <TabsTrigger value="community">Community Champions</TabsTrigger>
            </TabsList>

            <TabsContent value="leadership" className="space-y-8">
              <div className="grid lg:grid-cols-1 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-green-800 mb-2">{member.name}</h3>
                          <p className="text-green-600 font-medium mb-2">{member.role}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">{member.credentials}</Badge>
                            <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                          </div>
                        </div>
                        <p className="text-green-700 mb-4">{member.bio}</p>
                        <div>
                          <h4 className="font-semibold text-green-800 mb-2">Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, idx) => (
                              <Badge key={idx} className="bg-green-100 text-green-800">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisory" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advisoryBoard.map((advisor, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <UserCheck className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-bold text-green-800 text-center mb-2">{advisor.name}</h3>
                      <p className="text-green-600 text-center text-sm mb-3">{advisor.role}</p>
                      <p className="text-xs text-green-700 text-center mb-3">{advisor.credentials}</p>
                      <Badge variant="outline" className="w-full justify-center text-xs">
                        {advisor.expertise}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Community Champions</h3>
                <p className="text-green-700 max-w-2xl mx-auto">
                  Healthcare professionals and community leaders who advocate for digital health transformation
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-green-800 mb-2">Healthcare Provider Champions</h4>
                    <p className="text-green-700 text-sm mb-4">
                      850+ healthcare professionals trained and advocating for digital health adoption
                    </p>
                    <Badge className="bg-green-600">Active in 15 countries</Badge>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-blue-800 mb-2">Community Success Ambassadors</h4>
                    <p className="text-blue-700 text-sm mb-4">
                      Patients and community members sharing their transformation stories
                    </p>
                    <Badge className="bg-blue-600">230+ communities reached</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Impact Metrics */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Impact</h2>
            <p className="text-green-700 max-w-2xl mx-auto">
              Quantifiable achievements demonstrating real healthcare transformation across Africa
            </p>
          </div>

          <div className="space-y-8">
            {impactMetrics.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-800">
                    <TrendingUp className="w-6 h-6" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-2xl font-bold text-green-800 mb-2">{metric.value}</div>
                        <div className="text-sm font-medium text-green-700 mb-2">{metric.label}</div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-xs text-green-600">Growth: +{metric.growth}%</div>
                          <Progress value={Math.min(metric.growth, 100)} className="flex-1 h-1" />
                        </div>
                        <div className="text-xs text-green-500">{metric.period}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values in Action */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Values in Action</h2>
            <p className="text-green-700 max-w-2xl mx-auto">
              How our core values guide every decision and shape our impact
            </p>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardTitle className="flex items-center gap-3 text-green-800">
                      <Icon className="w-6 h-6" />
                      {value.value}
                    </CardTitle>
                    <p className="text-green-700">{value.description}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-green-800 mb-4">Examples in Practice:</h4>
                    <div className="space-y-3">
                      {value.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-green-700">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Community Testimonials */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-800">
                <Users className="w-6 h-6" />
                Community Voices
              </CardTitle>
              <p className="text-green-700">What our community says about our values and transparency</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 italic mb-3">"{testimonial.quote}"</p>
                    <div className="text-sm">
                      <div className="font-semibold text-green-800">{testimonial.author}</div>
                      <div className="text-green-600">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partnership Ecosystem */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Partnership Ecosystem</h2>
            <p className="text-green-700 max-w-2xl mx-auto">
              Collaborative relationships driving sustainable healthcare transformation across Africa
            </p>
          </div>

          <div className="space-y-8">
            {partnershipCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-green-800">
                      <Icon className="w-6 h-6" />
                      {category.category}
                    </CardTitle>
                    <p className="text-green-700">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.partners.map((partner, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex-1">
                            <h4 className="font-semibold text-green-800">{partner.name}</h4>
                            <p className="text-sm text-green-600 mb-1">{partner.type} • {partner.location}</p>
                            <p className="text-xs text-green-700">{partner.impact}</p>
                          </div>
                          <Badge variant="outline" className="ml-4">
                            Active Partnership
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Join Our Mission</h2>
              <p className="text-lg text-green-700 mb-6 max-w-2xl mx-auto">
                Be part of Africa's healthcare transformation. Whether you're a healthcare professional, 
                technologist, or organization, there's a place for you in our ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-700 hover:bg-green-800">
                  <a href="/community" className="flex items-center">
                    Join Our Community
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-green-700 text-green-800 hover:bg-green-50">
                  <a href="/#contact" className="flex items-center">
                    Partner With Us
                    <Handshake className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;