import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Brain, 
  Target, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Users,
  Building,
  Heart,
  Code
} from "lucide-react";

interface UserProfile {
  role: "patient" | "provider" | "developer" | "business" | "policymaker" | "";
  experience: "beginner" | "intermediate" | "advanced" | "";
  goals: string[];
  region: string;
  priorities: string[];
  completed: boolean;
}

interface AssessmentQuestion {
  id: string;
  type: "radio" | "checkbox" | "select";
  question: string;
  options: { value: string; label: string; description?: string }[];
  category: keyof UserProfile;
}

interface UserProfileAssessmentProps {
  onProfileComplete: (profile: UserProfile) => void;
  existingProfile?: UserProfile;
}

const UserProfileAssessment = ({ onProfileComplete, existingProfile }: UserProfileAssessmentProps) => {
  const [profile, setProfile] = useState<UserProfile>(existingProfile || {
    role: "",
    experience: "",
    goals: [],
    region: "",
    priorities: [],
    completed: false
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentComplete, setAssessmentComplete] = useState(false);

  const assessmentQuestions: AssessmentQuestion[] = [
    {
      id: "role",
      type: "radio",
      question: "What best describes your primary role?",
      category: "role",
      options: [
        { value: "patient", label: "Patient/Healthcare Consumer", description: "Seeking better healthcare access and quality" },
        { value: "provider", label: "Healthcare Provider", description: "Nurse, doctor, or healthcare professional" },
        { value: "developer", label: "Developer/Technologist", description: "Building or contributing to health tech solutions" },
        { value: "business", label: "Business Owner/SME", description: "Running a small or medium enterprise" },
        { value: "policymaker", label: "Policymaker/Administrator", description: "Healthcare system planning and governance" }
      ]
    },
    {
      id: "experience",
      type: "radio",
      question: "What's your experience level with digital health solutions?",
      category: "experience",
      options: [
        { value: "beginner", label: "Beginner", description: "New to digital health tools and platforms" },
        { value: "intermediate", label: "Intermediate", description: "Some experience with health technology" },
        { value: "advanced", label: "Advanced", description: "Experienced with multiple health tech platforms" }
      ]
    },
    {
      id: "goals",
      type: "checkbox",
      question: "What are your primary goals? (Select all that apply)",
      category: "goals",
      options: [
        { value: "improve_patient_care", label: "Improve Patient Care Quality" },
        { value: "digital_transformation", label: "Digital Business Transformation" },
        { value: "technical_contribution", label: "Contribute to Open Source Health Tech" },
        { value: "community_building", label: "Build Healthcare Communities" },
        { value: "policy_development", label: "Develop Health Policies" },
        { value: "learning", label: "Learn About Digital Health Innovation" }
      ]
    },
    {
      id: "priorities",
      type: "checkbox",
      question: "Which areas are most important to you?",
      category: "priorities",
      options: [
        { value: "ai_diagnostics", label: "AI-Powered Diagnostics" },
        { value: "business_growth", label: "Business Growth & Revenue" },
        { value: "community_impact", label: "Community Health Impact" },
        { value: "technical_innovation", label: "Technical Innovation" },
        { value: "cost_reduction", label: "Cost Reduction & Efficiency" },
        { value: "accessibility", label: "Healthcare Accessibility" }
      ]
    }
  ];

  const handleInputChange = (questionId: string, value: string | string[]) => {
    setProfile(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeAssessment();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const completeAssessment = () => {
    const completedProfile = { ...profile, completed: true };
    setProfile(completedProfile);
    setAssessmentComplete(true);
    onProfileComplete(completedProfile);
  };

  const getRecommendedStreams = () => {
    const recommendations = [];
    
    if (profile.role === "patient" || profile.goals.includes("improve_patient_care")) {
      recommendations.push({
        stream: "Care",
        reason: "AI-powered health management tools",
        icon: Heart,
        color: "text-green-600"
      });
    }
    
    if (profile.role === "developer" || profile.goals.includes("technical_contribution")) {
      recommendations.push({
        stream: "Code",
        reason: "Open-source health innovation",
        icon: Code,
        color: "text-blue-600"
      });
    }
    
    if (profile.role === "business" || profile.goals.includes("digital_transformation")) {
      recommendations.push({
        stream: "Commerce",
        reason: "Digital business transformation",
        icon: Building,
        color: "text-yellow-600"
      });
    }
    
    if (profile.goals.includes("community_building") || profile.priorities.includes("community_impact")) {
      recommendations.push({
        stream: "Community",
        reason: "Healthcare community building",
        icon: Users,
        color: "text-amber-600"
      });
    }
    
    return recommendations;
  };

  const currentQuestion = assessmentQuestions[currentStep];
  const progress = ((currentStep + 1) / assessmentQuestions.length) * 100;

  if (assessmentComplete) {
    const recommendations = getRecommendedStreams();
    
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-800">Assessment Complete!</CardTitle>
          <p className="text-green-700">Here's your personalized journey through the NURSAERAHEALTH ecosystem</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-800 mb-3">Your Profile</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">
                  {profile.role?.charAt(0).toUpperCase() + profile.role?.slice(1)}
                </Badge>
                <Badge variant="outline" className="mr-2">
                  {profile.experience?.charAt(0).toUpperCase() + profile.experience?.slice(1)}
                </Badge>
                <div className="text-sm text-green-700 mt-2">
                  <strong>Goals:</strong> {profile.goals.length} selected
                </div>
                <div className="text-sm text-green-700">
                  <strong>Priorities:</strong> {profile.priorities.length} selected
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-green-800 mb-3">Recommended Streams</h3>
              <div className="space-y-3">
                {recommendations.map((rec, index) => {
                  const Icon = rec.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Icon className={`w-5 h-5 ${rec.color}`} />
                      <div className="flex-1">
                        <div className="font-medium text-green-800">{rec.stream}</div>
                        <div className="text-sm text-green-700">{rec.reason}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t">
            <Button 
              onClick={() => window.location.href = '/empowerment-streams'}
              className="bg-green-700 hover:bg-green-800"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-xl text-green-800">Personalize Your NURSAERAHEALTH Experience</CardTitle>
          <Badge variant="outline">
            Step {currentStep + 1} of {assessmentQuestions.length}
          </Badge>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {currentQuestion.type === "radio" && (
            <RadioGroup
              value={profile[currentQuestion.category] as string}
              onValueChange={(value) => handleInputChange(currentQuestion.category, value)}
            >
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-green-50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-gray-600">{option.description}</div>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === "checkbox" && (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-green-50 transition-colors">
                  <Checkbox
                    id={option.value}
                    checked={(profile[currentQuestion.category] as string[])?.includes(option.value)}
                    onCheckedChange={(checked) => {
                      const currentValues = (profile[currentQuestion.category] as string[]) || [];
                      const newValues = checked
                        ? [...currentValues, option.value]
                        : currentValues.filter(v => v !== option.value);
                      handleInputChange(currentQuestion.category, newValues);
                    }}
                  />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-medium">{option.label}</div>
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={
              !profile[currentQuestion.category] || 
              (Array.isArray(profile[currentQuestion.category]) && (profile[currentQuestion.category] as string[]).length === 0)
            }
            className="bg-green-700 hover:bg-green-800"
          >
            {currentStep === assessmentQuestions.length - 1 ? "Complete Assessment" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileAssessment;