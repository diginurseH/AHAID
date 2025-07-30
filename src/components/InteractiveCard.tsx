import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  title: string;
  summary: string;
  details: string;
  icon: React.ReactNode;
  gradient?: string;
  className?: string;
}

export function InteractiveCard({ 
  title, 
  summary, 
  details, 
  icon, 
  gradient = "from-green-700 to-green-400",
  className = ""
}: InteractiveCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "group perspective-1000 cursor-pointer h-64",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={cn(
        "relative w-full h-full transition-transform duration-700 transform-style-3d",
        isFlipped && "rotate-y-180"
      )}>
        {/* Front of card */}
        <Card className={cn(
          "absolute inset-0 backface-hidden bg-gradient-to-br",
          gradient,
          "text-white shadow-lg hover:shadow-xl transition-shadow"
        )}>
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
            <div className="mb-4 text-white/90">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-sm text-white/90 leading-relaxed">{summary}</p>
            <div className="mt-4 text-xs text-white/70">Click to learn more</div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className={cn(
          "absolute inset-0 backface-hidden rotate-y-180 bg-white border-2",
          gradient.includes('green') ? 'border-green-200' : 
          gradient.includes('blue') ? 'border-blue-200' :
          gradient.includes('amber') ? 'border-amber-200' : 'border-gray-200'
        )}>
          <CardContent className="p-6 h-full flex flex-col justify-center">
            <div className="mb-3 text-center">
              {icon}
            </div>
            <h3 className="text-lg font-semibold mb-3 text-center text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-center">{details}</p>
            <div className="mt-4 text-xs text-gray-400 text-center">Click to flip back</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}