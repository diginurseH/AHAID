import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Code, Building, Globe, HandHeart } from "lucide-react";

const StakeholderNetwork = () => {
  const stakeholders = [
    {
      group: "Healthcare Professionals",
      icon: Heart,
      members: ["Nurses", "Doctors", "Community Health Workers", "Healthcare Administrators"],
      role: "Primary users of Care stream tools and training programs",
      color: "bg-green-50 border-green-200"
    },
    {
      group: "Patients & Communities",
      icon: Users,
      members: ["Chronic disease patients", "Rural communities", "Urban healthcare seekers", "Family caregivers"],
      role: "Beneficiaries of improved healthcare delivery and community support",
      color: "bg-blue-50 border-blue-200"
    },
    {
      group: "Technology Partners",
      icon: Code,
      members: ["Open-source developers", "AI researchers", "Digital health startups", "Tech volunteers"],
      role: "Contributors to Code stream innovation and platform development",
      color: "bg-purple-50 border-purple-200"
    },
    {
      group: "Business Ecosystem",
      icon: Building,
      members: ["African SMEs", "Healthcare facilities", "NGOs", "Government agencies"],
      role: "Commerce stream clients and sustainability partners",
      color: "bg-amber-50 border-amber-200"
    },
    {
      group: "Global Network",
      icon: Globe,
      members: ["International donors", "Research institutions", "Diaspora communities", "Global health organizations"],
      role: "Strategic partners providing funding, expertise, and global connections",
      color: "bg-emerald-50 border-emerald-200"
    }
  ];

  const keyPartners = [
    {
      name: "Rotary Club",
      role: "Community engagement",
      description: "Facilitating grassroots healthcare initiatives and volunteer networks",
      icon: "🏥"
    },
    {
      name: "Research Hospitals",
      role: "Clinical expertise",
      description: "Providing evidence-based protocols and clinical validation",
      icon: "🏫"
    },
    {
      name: "International Donors",
      role: "Project funding",
      description: "Supporting sustainable healthcare innovation across Africa",
      icon: "🌐"
    },
    {
      name: "Zidallie Design Studio",
      role: "Digital production",
      description: "Creating user-centered design solutions for healthcare platforms",
      icon: "🎨"
    },
    {
      name: "Mister's Bakers",
      role: "Pilot implementation",
      description: "Real-world testing ground for SME digital transformation",
      icon: "🍞"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-800">
          Stakeholder Network & Key Partners
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Existing Stakeholder Network */}
        <div>
          <h3 className="text-lg font-semibold text-green-800 mb-4">Ecosystem Stakeholders</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stakeholders.map((stakeholder) => {
              const Icon = stakeholder.icon;
              return (
                <div
                  key={stakeholder.group}
                  className={`${stakeholder.color} rounded-lg border p-4`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-green-700" />
                    <h4 className="font-semibold text-green-900">{stakeholder.group}</h4>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    {stakeholder.members.map((member, idx) => (
                      <div key={idx} className="text-sm text-green-800 bg-white/50 px-2 py-1 rounded">
                        {member}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-green-700 italic">
                    {stakeholder.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Partners Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <HandHeart className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg font-semibold text-green-800">Strategic Partners</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyPartners.map((partner, idx) => (
              <div key={idx} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{partner.icon}</span>
                  <div>
                    <h4 className="font-semibold text-amber-900">{partner.name}</h4>
                    <span className="text-sm text-amber-700 font-medium">{partner.role}</span>
                  </div>
                </div>
                <p className="text-xs text-amber-800">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StakeholderNetwork;
