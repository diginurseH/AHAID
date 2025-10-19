import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause,
  RotateCcw
} from "lucide-react";

interface TourStep {
  id: string;
  title: string;
  content: string;
  target?: string;
  position: "top" | "bottom" | "left" | "right";
  action?: string;
}

interface GuidedTourProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const GuidedTour = ({ isOpen, onClose, onComplete }: GuidedTourProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const tourSteps: TourStep[] = [
    {
      id: "welcome",
      title: "Welcome to NURSAERAHEALTH Ecosystem",
      content: "This guided tour will walk you through our comprehensive digital health ecosystem. You'll discover how our 4C Framework creates sustainable impact across Africa.",
      position: "bottom"
    },
    {
      id: "filters",
      title: "Smart Filtering",
      content: "Use these filters to view data specific to your role (Patient, Provider, SME Owner) or geographic region. Watch how the metrics update in real-time.",
      target: "[data-tour='filters']",
      position: "bottom"
    },
    {
      id: "nursaera",
      title: "Nursaera AI Platform",
      content: "Our flagship AI-powered platform supports chronic disease management. Click here to see live patient data, provider networks, and AI accuracy metrics.",
      target: "[data-tour='nursaera']",
      position: "right",
      action: "Click to explore Nursaera"
    },
    {
      id: "sme-transformation",
      title: "SME Digital Transformation",
      content: "See how we've transformed 18+ African businesses. Each success story here funds more healthcare initiatives through our circular economy model.",
      target: "[data-tour='sme']",
      position: "left",
      action: "View transformation stories"
    },
    {
      id: "impact-metrics",
      title: "Real-Time Impact",
      content: "These live metrics show the interconnected impact across all streams. Notice how Commerce success directly translates to Care stream funding.",
      target: "[data-tour='impact']",
      position: "top"
    },
    {
      id: "relationships",
      title: "Ecosystem Relationships",
      content: "Each component connects to others, creating multiplied impact. The narrative section below explains these powerful relationships in detail.",
      target: "[data-tour='narrative']",
      position: "top"
    },
    {
      id: "drill-down",
      title: "Drill-Down Functionality",
      content: "Click any dashboard card to access detailed views, case studies, and technical specifications. Each section offers progressive disclosure for deeper insights.",
      position: "bottom"
    },
    {
      id: "download",
      title: "Take It With You",
      content: "Download the complete ecosystem map for offline reference, sharing with stakeholders, or integration into your own planning processes.",
      target: "[data-tour='download']",
      position: "left"
    }
  ];

  const totalSteps = tourSteps.length;

  useEffect(() => {
    if (isPlaying && currentStep < totalSteps - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setProgress((currentStep + 1) / totalSteps * 100);
      }, 4000);
      return () => clearTimeout(timer);
    } else if (currentStep >= totalSteps - 1) {
      setIsPlaying(false);
    }
  }, [currentStep, isPlaying, totalSteps]);

  useEffect(() => {
    setProgress((currentStep + 1) / totalSteps * 100);
  }, [currentStep, totalSteps]);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isOpen) return null;

  const currentTourStep = tourSteps[currentStep];

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
      {/* Highlight target element */}
      {currentTourStep.target && (
        <style>
          {`
            ${currentTourStep.target} {
              position: relative;
              z-index: 60;
              box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.5), 0 0 0 8px rgba(34, 197, 94, 0.2);
              border-radius: 8px;
            }
          `}
        </style>
      )}

      {/* Tour Card */}
      <Card className="fixed top-4 right-4 w-96 z-50 shadow-2xl border-green-200">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-green-700">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlay}
                className="h-6 w-6 p-0"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress Bar */}
          <Progress value={progress} className="mb-4" />

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-800">
              {currentTourStep.title}
            </h3>
            <p className="text-green-700 text-sm leading-relaxed">
              {currentTourStep.content}
            </p>
            
            {currentTourStep.action && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-amber-800 text-sm font-medium">
                  💡 Try it: {currentTourStep.action}
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={restart}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
            
            <Button
              onClick={nextStep}
              size="sm"
              className="bg-green-700 hover:bg-green-800"
            >
              {currentStep === totalSteps - 1 ? "Complete" : "Next"}
              {currentStep !== totalSteps - 1 && <ArrowRight className="w-4 h-4 ml-1" />}
            </Button>
          </div>

          {/* Auto-play indicator */}
          {isPlaying && (
            <div className="mt-3 text-xs text-green-600 text-center">
              Auto-advancing in {4 - (Date.now() % 4000) / 1000 | 0} seconds...
            </div>
          )}
        </CardContent>
      </Card>

      {/* Skip Tour */}
      <Button
        variant="ghost"
        onClick={onClose}
        className="fixed bottom-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70"
      >
        Skip Tour
      </Button>
    </div>
  );
};

export default GuidedTour;