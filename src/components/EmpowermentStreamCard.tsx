import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProofOfLife {
  title: string;
  description: string;
}

export interface EmpowermentStreamProps {
  title: string;
  description: string;
  fullDescription: string;
  color: string;
  icon: ReactNode;
  features: string[];
  proofOfLife?: ProofOfLife;
}

export function EmpowermentStreamCard({ stream }: { stream: EmpowermentStreamProps }) {
  return (
    <Card className="overflow-hidden shadow-lg animate-fade-in" data-stream-type={stream.title.toLowerCase()}>
      <div 
        className={`bg-gradient-to-r ${stream.color} text-white p-6`} 
        id={`stream-${stream.title.toLowerCase()}-header`}
      >
        <CardHeader className="p-0">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white" aria-hidden="true">{stream.icon}</span>
            <CardTitle className="text-2xl md:text-3xl font-bold">
              {stream.title}
            </CardTitle>
          </div>
          <p className="text-lg text-white/90">
            {stream.description}
          </p>
        </CardHeader>
      </div>
      
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-800 mb-3" id={`stream-${stream.title.toLowerCase()}-overview`}>
              Overview
            </h4>
            <p className="text-green-900/80 mb-4" aria-labelledby={`stream-${stream.title.toLowerCase()}-overview`}>
              {stream.fullDescription}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-800 mb-3" id={`stream-${stream.title.toLowerCase()}-features`}>
              Key Features
            </h4>
            <ul 
              className="space-y-2" 
              aria-labelledby={`stream-${stream.title.toLowerCase()}-features`}
            >
              {stream.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-green-900/80">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {stream.proofOfLife && (
          <div 
            className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4"
            aria-labelledby={`stream-${stream.title.toLowerCase()}-case-study`}
          >
            <h5 
              className="font-semibold text-amber-800 mb-2"
              id={`stream-${stream.title.toLowerCase()}-case-study`}
            >
              {stream.proofOfLife.title}
            </h5>
            <p className="text-amber-900/80 text-sm">
              {stream.proofOfLife.description}
            </p>
          </div>
        )}
        
        <div className="mt-6 flex flex-wrap gap-3">
          <Button 
            className="bg-green-700 hover:bg-green-800 text-white"
            aria-label={`Learn more about ${stream.title}`}
            data-action={`learn-more-${stream.title.toLowerCase()}`}
          >
            Learn More
          </Button>
          <Button 
            variant="outline" 
            className="border-green-700 text-green-800 hover:bg-green-50"
            aria-label={`Get started with ${stream.title}`}
            data-action={`get-started-${stream.title.toLowerCase()}`}
          >
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
