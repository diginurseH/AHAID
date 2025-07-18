
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

interface Section {
  id: string;
  title: string;
  description?: string;
}

interface SectionNavigatorProps {
  sections: Section[];
  currentSection?: string;
  onSectionChange?: (sectionId: string) => void;
  showProgress?: boolean;
}

const SectionNavigator = ({ 
  sections, 
  currentSection, 
  onSectionChange,
  showProgress = true 
}: SectionNavigatorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentSection) {
      const index = sections.findIndex(s => s.id === currentSection);
      if (index >= 0) setCurrentIndex(index);
    }
  }, [currentSection, sections]);

  const goToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentIndex(index);
      onSectionChange?.(sections[index].id);
    }
  };

  const goToPrevious = () => goToSection(currentIndex - 1);
  const goToNext = () => goToSection(currentIndex + 1);

  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-sm border-b border-green-100 p-4 shadow-sm">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        {showProgress && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-green-700 mb-2">
              <span>Section {currentIndex + 1} of {sections.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="hidden md:block">
              <h3 className="font-semibold text-green-800">
                {sections[currentIndex]?.title}
              </h3>
              {sections[currentIndex]?.description && (
                <p className="text-sm text-green-700">
                  {sections[currentIndex].description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Section Selector */}
            <div className="hidden lg:flex items-center gap-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => goToSection(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-green-700 scale-125"
                      : index < currentIndex
                      ? "bg-green-400"
                      : "bg-green-200 hover:bg-green-300"
                  }`}
                  title={section.title}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={currentIndex === sections.length - 1}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigator;
