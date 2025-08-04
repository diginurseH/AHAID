
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Target, Heart, GraduationCap, TrendingUp, Users, Handshake } from "lucide-react";

const CoreProblems = () => {
  const healthcareChallenges = [
    {
      title: "Emergency and follow-up care gaps in remote areas",
      description: "Limited access to timely medical intervention and continuous care monitoring"
    },
    {
      title: "Disconnection between hospital and home care services",
      description: "Poor coordination leading to fragmented patient care experiences"
    },
    {
      title: "Limited digital literacy among healthcare workers",
      description: "Technology adoption barriers preventing optimal use of digital health tools"
    },
    {
      title: "Lack of sustainable healthcare business models",
      description: "Financial constraints limiting the scalability of healthcare initiatives"
    }
  ];

  const sdgImpacts = [
    {
      sdg: "SDG 3",
      title: "Good Health & Well-being",
      description: "Strengthening community health access and quality care",
      icon: Heart,
      color: "bg-red-50 border-red-200 text-red-800"
    },
    {
      sdg: "SDG 5",
      title: "Gender Equality",
      description: "Empowering women in healthcare leadership and technology",
      icon: Users,
      color: "bg-pink-50 border-pink-200 text-pink-800"
    },
    {
      sdg: "SDG 8",
      title: "Decent Work & Economic Growth",
      description: "Creating sustainable healthcare business opportunities",
      icon: TrendingUp,
      color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    {
      sdg: "SDG 9",
      title: "Innovation & Infrastructure",
      description: "Digital health innovation and technology infrastructure",
      icon: GraduationCap,
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      sdg: "SDG 17",
      title: "Partnerships for the Goals",
      description: "Multi-stakeholder collaboration for health transformation",
      icon: Handshake,
      color: "bg-emerald-50 border-emerald-200 text-emerald-800"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-800 flex items-center justify-center gap-2">
          <Target className="w-6 h-6" />
          Core Problems & SDG Alignment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Healthcare Challenges */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg font-semibold text-green-800">Healthcare Challenges We Address</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {healthcareChallenges.map((challenge, idx) => (
              <div key={idx} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold text-amber-900 mb-2">{challenge.title}</h4>
                <p className="text-sm text-amber-800">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SDG Impact */}
        <div>
          <h3 className="text-lg font-semibold text-green-800 mb-4">UN Sustainable Development Goals Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sdgImpacts.map((sdg, idx) => {
              const Icon = sdg.icon;
              return (
                <div key={idx} className={`${sdg.color} rounded-lg border p-4`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5" />
                    <div>
                      <span className="text-xs font-bold">{sdg.sdg}</span>
                      <h4 className="font-semibold">{sdg.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm">{sdg.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoreProblems;
