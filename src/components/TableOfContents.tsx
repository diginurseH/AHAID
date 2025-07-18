
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { List, ChevronUp, ChevronDown, X } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const TableOfContents = ({ items, className = "" }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 z-40 shadow-lg bg-white border-green-200 hover:bg-green-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <List className="w-4 h-4 text-green-700" />
      </Button>

      {/* Collapsible Table of Contents */}
      {isOpen && (
        <Card 
          className={`fixed top-32 right-4 w-64 z-30 transition-all duration-300 animate-fade-in bg-white/95 backdrop-blur-sm border-green-200 shadow-lg ${className}`}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-sm text-green-800">Contents</h4>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="h-6 w-6 p-0 text-green-700 hover:bg-green-100"
                >
                  {isCollapsed ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronUp className="w-3 h-3" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0 text-green-700 hover:bg-green-100"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
            
            {!isCollapsed && (
              <div className="animate-fade-in">
                <nav className="space-y-1 max-h-[50vh] overflow-y-auto">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        // Optional: close menu after selection on mobile
                        if (window.innerWidth < 768) {
                          setIsOpen(false);
                        }
                      }}
                      className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                        activeId === item.id
                          ? "bg-green-100 text-green-800 font-medium"
                          : "text-green-700 hover:bg-green-50"
                      } ${item.level > 1 ? "ml-4" : ""}`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    scrollToTop();
                    setIsOpen(false);
                  }}
                  className="w-full mt-4 text-green-700 hover:bg-green-50"
                >
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default TableOfContents;
