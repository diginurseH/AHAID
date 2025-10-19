import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Code, Users, Briefcase, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const journeyOptions = [
  {
    id: 'care',
    title: 'Healthcare Professional',
    description: 'I work in healthcare and need better tools',
    icon: <HeartPulse className="w-8 h-8" />,
    color: 'from-green-700 to-green-400',
    recommendations: [
      { title: 'AI Care Tools', link: '/empowerment-streams', description: 'Smart health monitoring solutions' },
      { title: 'Training Resources', link: '/resources', description: 'Professional development materials' },
      { title: 'Community', link: '/community', description: 'Connect with 2,500+ professionals' }
    ]
  },
  {
    id: 'code',
    title: 'Developer/Technologist',
    description: 'I build solutions and want to contribute',
    icon: <Code className="w-8 h-8" />,
    color: 'from-blue-900 to-blue-400',
    recommendations: [
      { title: 'Open Source Projects', link: '/studio', description: 'Contribute to health tech solutions' },
      { title: 'API Documentation', link: '/resources', description: 'Technical integration guides' },
      { title: 'Developer Community', link: '/community', description: 'Collaborate with innovators' }
    ]
  },
  {
    id: 'community',
    title: 'Community Leader',
    description: 'I want to drive change in my community',
    icon: <Users className="w-8 h-8" />,
    color: 'from-amber-700 to-yellow-300',
    recommendations: [
      { title: 'Community Programs', link: '/community', description: 'Local health initiatives' },
      { title: 'Storytelling Platform', link: '/studio', description: 'Share impactful narratives' },
      { title: 'Resource Library', link: '/resources', description: 'Tools for community engagement' }
    ]
  },
  {
    id: 'business',
    title: 'Business Owner/SME',
    description: 'I need digital tools for my business',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'from-yellow-700 to-yellow-400',
    recommendations: [
      { title: 'Digital Commerce Tools', link: '/empowerment-streams', description: 'Grow your business digitally' },
      { title: 'Business Resources', link: '/resources', description: 'Strategies and guides' },
      { title: 'SME Network', link: '/community', description: 'Connect with other entrepreneurs' }
    ]
  }
];

export function QuickStartFlow() {
  const [step, setStep] = useState<'selection' | 'recommendations'>('selection');
  const [selectedJourney, setSelectedJourney] = useState<typeof journeyOptions[0] | null>(null);

  const handleJourneySelect = (journey: typeof journeyOptions[0]) => {
    setSelectedJourney(journey);
    setStep('recommendations');
  };

  const resetFlow = () => {
    setStep('selection');
    setSelectedJourney(null);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-green-800">
          Find Your Path with NURSAERAHEALTH
        </CardTitle>
        <p className="text-green-600">Tell us about yourself to get personalized recommendations</p>
      </CardHeader>
      
      <CardContent className="p-6">
        {step === 'selection' && (
          <div className="grid md:grid-cols-2 gap-4">
            {journeyOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleJourneySelect(option)}
                className={`cursor-pointer rounded-lg bg-gradient-to-br ${option.color} text-white p-6 hover:scale-105 transition-all duration-200 shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-3">
                  {option.icon}
                  <h3 className="text-lg font-semibold">{option.title}</h3>
                </div>
                <p className="text-white/90 text-sm">{option.description}</p>
                <div className="flex items-center justify-end mt-4 text-white/70">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 'recommendations' && selectedJourney && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={resetFlow}
                className="text-green-700 hover:text-green-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to selection
              </Button>
            </div>
            
            <div className={`rounded-lg bg-gradient-to-br ${selectedJourney.color} text-white p-6 text-center`}>
              <div className="flex justify-center mb-3">
                {selectedJourney.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{selectedJourney.title}</h3>
              <p className="text-white/90">Here's what we recommend for you:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {selectedJourney.recommendations.map((rec, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-green-800 mb-2">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{rec.description}</p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={rec.link}>Explore</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}