import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  ArrowRight, 
  Target, 
  CheckCircle,
  Star,
  Users,
  Brain,
  Building,
  Heart,
  Code,
  Compass,
  Route,
  Flag
} from "lucide-react";

interface JourneyStep {
  id: string;
  title: string;
  description: string;
  type: "decision" | "action" | "milestone" | "assessment";
  options?: {
    id: string;
    label: string;
    description: string;
    nextStep: string;
    requirements?: string[];
    impact: string;
  }[];
  content?: React.ReactNode;
  completed?: boolean;
  streamConnection: string[];
}

interface UserProgress {
  currentPath: string[];
  completedSteps: string[];
  achievements: string[];
  streamProgress: {
    care: number;
    code: number;
    community: number;
    commerce: number;
  };
}

interface InteractiveJourneyMapProps {
  userProfile: any;
  onProgressUpdate: (progress: UserProgress) => void;
}

const InteractiveJourneyMap = ({ userProfile, onProgressUpdate }: InteractiveJourneyMapProps) => {
  const [currentStepId, setCurrentStepId] = useState("welcome");
  const [progress, setProgress] = useState<UserProgress>({
    currentPath: ["welcome"],
    completedSteps: [],
    achievements: [],
    streamProgress: { care: 0, code: 0, community: 0, commerce: 0 }
  });
  const [selectedChoice, setSelectedChoice] = useState<string>("");

  const journeySteps: Record<string, JourneyStep> = {
    welcome: {
      id: "welcome",
      title: "Welcome to Your AHAID Journey",
      description: "Based on your profile, we've created a personalized path through our ecosystem.",
      type: "milestone",
      streamConnection: ["all"],
      options: [
        {
          id: "start",
          label: "Begin My Journey",
          description: "Start exploring the 4C Framework tailored to your needs",
          nextStep: userProfile?.role === "patient" ? "care_intro" : 
                   userProfile?.role === "developer" ? "code_intro" :
                   userProfile?.role === "business" ? "commerce_intro" : "overview",
          impact: "Unlock personalized recommendations"
        }
      ]
    },
    
    overview: {
      id: "overview",
      title: "Choose Your Entry Point",
      description: "Each stream offers unique value. Where would you like to start?",
      type: "decision",
      streamConnection: ["all"],
      options: [
        {
          id: "care_path",
          label: "Care Stream",
          description: "AI-powered healthcare solutions and nurse training",
          nextStep: "care_intro",
          impact: "Improve patient outcomes with AI technology"
        },
        {
          id: "code_path", 
          label: "Code Stream",
          description: "Open-source innovation and technical collaboration",
          nextStep: "code_intro",
          impact: "Contribute to cutting-edge health technology"
        },
        {
          id: "community_path",
          label: "Community Stream", 
          description: "Stories, testimonials, and peer connections",
          nextStep: "community_intro",
          impact: "Build meaningful healthcare networks"
        },
        {
          id: "commerce_path",
          label: "Commerce Stream",
          description: "Digital transformation for African SMEs",
          nextStep: "commerce_intro",
          impact: "Drive sustainable business growth"
        }
      ]
    },

    care_intro: {
      id: "care_intro",
      title: "AI-Powered Healthcare Journey",
      description: "Discover how our Nursaera platform transforms patient care with artificial intelligence.",
      type: "action",
      streamConnection: ["care"],
      options: [
        {
          id: "patient_journey",
          label: "Patient Experience",
          description: "See how AI helps patients manage chronic conditions",
          nextStep: "patient_ai_demo",
          impact: "Experience personalized health recommendations"
        },
        {
          id: "provider_journey",
          label: "Healthcare Provider Path",
          description: "Learn how AI supports clinical decision-making",
          nextStep: "provider_training",
          impact: "Access AI-powered diagnostic tools"
        },
        {
          id: "integration_path",
          label: "System Integration",
          description: "Understand how AI integrates with existing healthcare workflows",
          nextStep: "technical_integration",
          impact: "Seamless healthcare system enhancement"
        }
      ]
    },

    code_intro: {
      id: "code_intro", 
      title: "Open Source Health Innovation",
      description: "Join our developer community building the future of African healthcare technology.",
      type: "action",
      streamConnection: ["code"],
      options: [
        {
          id: "contribute",
          label: "Start Contributing",
          description: "Browse open issues and make your first contribution",
          nextStep: "github_setup",
          impact: "Direct impact on healthcare outcomes"
        },
        {
          id: "learn_apis",
          label: "Explore APIs",
          description: "Learn about our healthcare APIs and documentation",
          nextStep: "api_documentation",
          impact: "Build on proven health tech infrastructure"
        },
        {
          id: "join_community",
          label: "Developer Community",
          description: "Connect with other health tech developers",
          nextStep: "dev_community",
          impact: "Collaborative innovation network"
        }
      ]
    },

    commerce_intro: {
      id: "commerce_intro",
      title: "Digital Transformation Journey", 
      description: "Transform your business with proven digital solutions that create community impact.",
      type: "action",
      streamConnection: ["commerce"],
      options: [
        {
          id: "assess_business",
          label: "Business Assessment",
          description: "Evaluate your digital readiness and opportunities",
          nextStep: "business_assessment",
          impact: "Customized transformation roadmap"
        },
        {
          id: "success_stories",
          label: "See Success Stories",
          description: "Learn from businesses that have transformed with AHAID",
          nextStep: "case_studies",
          impact: "Proven transformation strategies"
        },
        {
          id: "quick_wins",
          label: "Quick Wins",
          description: "Immediate improvements you can implement today",
          nextStep: "immediate_actions",
          impact: "Fast ROI and momentum building"
        }
      ]
    },

    community_intro: {
      id: "community_intro",
      title: "Healthcare Community Hub",
      description: "Connect with inspiring stories and build meaningful relationships in healthcare.",
      type: "action", 
      streamConnection: ["community"],
      options: [
        {
          id: "share_story",
          label: "Share Your Story",
          description: "Inspire others with your healthcare journey",
          nextStep: "story_submission",
          impact: "Amplify your impact and inspire others"
        },
        {
          id: "connect_peers",
          label: "Connect with Peers",
          description: "Find healthcare professionals in your area or specialty",
          nextStep: "peer_matching",
          impact: "Professional network expansion"
        },
        {
          id: "wellness_resources",
          label: "Wellness Resources",
          description: "Access emotional and professional wellness support",
          nextStep: "wellness_hub",
          impact: "Enhanced well-being and resilience"
        }
      ]
    },

    // Cross-stream integration points
    integration_hub: {
      id: "integration_hub",
      title: "Stream Integration Opportunities",
      description: "Discover how different streams can work together to amplify your impact.",
      type: "decision",
      streamConnection: ["care", "code", "community", "commerce"],
      options: [
        {
          id: "care_code",
          label: "Care + Code Integration",
          description: "Use healthcare data to improve AI algorithms",
          nextStep: "data_contribution",
          impact: "Improve AI accuracy for everyone"
        },
        {
          id: "commerce_community",
          label: "Commerce + Community",
          description: "Share your business transformation story",
          nextStep: "business_storytelling",
          impact: "Inspire other entrepreneurs"
        },
        {
          id: "all_streams",
          label: "Complete Ecosystem",
          description: "See how all four streams create synergistic impact",
          nextStep: "ecosystem_view",
          impact: "Maximum ecosystem leverage"
        }
      ]
    }
  };

  const handleChoice = (optionId: string, nextStepId: string) => {
    const newProgress = {
      ...progress,
      currentPath: [...progress.currentPath, nextStepId],
      completedSteps: [...progress.completedSteps, currentStepId]
    };

    // Update stream progress based on the step
    const currentStep = journeySteps[currentStepId];
    const streamUpdates = { ...newProgress.streamProgress };
    
    currentStep.streamConnection.forEach(stream => {
      if (stream !== "all" && stream in streamUpdates) {
        streamUpdates[stream as keyof typeof streamUpdates] += 10;
      }
    });

    newProgress.streamProgress = streamUpdates;
    
    setProgress(newProgress);
    setCurrentStepId(nextStepId);
    setSelectedChoice("");
    onProgressUpdate(newProgress);
  };

  const getPathVisualization = () => {
    return progress.currentPath.map((stepId, index) => {
      const step = journeySteps[stepId];
      const isCompleted = progress.completedSteps.includes(stepId);
      const isCurrent = stepId === currentStepId;
      
      return (
        <div key={stepId} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            isCompleted ? 'bg-green-600 text-white' :
            isCurrent ? 'bg-green-100 text-green-600 border-2 border-green-600' :
            'bg-gray-200 text-gray-500'
          }`}>
            {isCompleted ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <span className="text-xs font-bold">{index + 1}</span>
            )}
          </div>
          {index < progress.currentPath.length - 1 && (
            <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
          )}
        </div>
      );
    });
  };

  const currentStep = journeySteps[currentStepId];
  const overallProgress = (progress.completedSteps.length / Math.max(progress.currentPath.length, 1)) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-green-600" />
              Your Personalized Journey
            </CardTitle>
            <Badge variant="outline">
              Progress: {Math.round(overallProgress)}%
            </Badge>
          </div>
          <Progress value={overallProgress} className="w-full" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            {getPathVisualization()}
          </div>
          
          {/* Stream Progress */}
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(progress.streamProgress).map(([stream, value]) => (
              <div key={stream} className="text-center">
                <div className="text-xs text-gray-600 mb-1 capitalize">{stream}</div>
                <Progress value={Math.min(value, 100)} className="h-2" />
                <div className="text-xs font-medium mt-1">{Math.min(value, 100)}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Step */}
      <Card className="animate-fade-in">
        <CardHeader>
          <div className="flex items-center gap-3">
            {currentStep.type === "decision" && <Route className="w-6 h-6 text-blue-600" />}
            {currentStep.type === "action" && <Target className="w-6 h-6 text-green-600" />}
            {currentStep.type === "milestone" && <Flag className="w-6 h-6 text-amber-600" />}
            <div>
              <CardTitle className="text-xl text-green-800">{currentStep.title}</CardTitle>
              <p className="text-green-700">{currentStep.description}</p>
            </div>
          </div>
          
          {/* Stream Connections */}
          <div className="flex gap-2 mt-3">
            {currentStep.streamConnection.map(stream => (
              <Badge key={stream} variant="outline" className="text-xs">
                {stream === "all" ? "All Streams" : stream.charAt(0).toUpperCase() + stream.slice(1)}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {currentStep.options?.map((option) => (
            <Card 
              key={option.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedChoice === option.id ? 'ring-2 ring-green-500 bg-green-50' : 'hover:bg-green-50'
              }`}
              onClick={() => setSelectedChoice(option.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-800 mb-2">{option.label}</h4>
                    <p className="text-green-700 text-sm mb-3">{option.description}</p>
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <Star className="w-3 h-3" />
                      <span className="font-medium">Impact:</span>
                      <span>{option.impact}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-600 mt-1" />
                </div>
              </CardContent>
            </Card>
          ))}
          
          {selectedChoice && (
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => {
                  const selectedOption = currentStep.options?.find(opt => opt.id === selectedChoice);
                  if (selectedOption) {
                    handleChoice(selectedChoice, selectedOption.nextStep);
                  }
                }}
                className="bg-green-700 hover:bg-green-800"
              >
                Continue Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Achievements */}
      {progress.achievements.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-600" />
              Achievements Unlocked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {progress.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-amber-800 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InteractiveJourneyMap;