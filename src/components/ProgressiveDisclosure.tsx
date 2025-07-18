
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

interface ProgressiveDisclosureProps {
  title: string;
  summary: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: "default" | "outlined" | "subtle";
  icon?: React.ComponentType<{ className?: string }>;
}

const ProgressiveDisclosure = ({ 
  title, 
  summary, 
  children, 
  defaultOpen = false,
  variant = "default",
  icon: Icon = Info
}: ProgressiveDisclosureProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const getCardStyles = () => {
    switch (variant) {
      case "outlined":
        return "border-2 border-green-200 shadow-sm";
      case "subtle":
        return "bg-green-50/50 border-green-100";
      default:
        return "shadow-md";
    }
  };

  return (
    <Card className={`transition-all duration-300 ${getCardStyles()}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <Icon className="w-5 h-5 text-green-700 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <CardTitle className="text-lg text-green-800 mb-2">{title}</CardTitle>
              <p className="text-sm text-green-700/80 leading-relaxed">{summary}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 flex-shrink-0"
          >
            {isOpen ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                More
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      
      {isOpen && (
        <CardContent className="pt-0 animate-fade-in">
          <div className="border-t border-green-100 pt-4">
            {children}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ProgressiveDisclosure;
