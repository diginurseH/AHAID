
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { List, ChevronUp } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Toggle button for mobile */}
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-4 left-4 z-40 md:hidden shadow-lg"
        onClick={() => setIsVisible(!isVisible)}
      >
        <List className="w-4 h-4" />
      </Button>

      {/* Table of Contents */}
      <Card 
        className={`fixed top-32 right-4 w-64 max-h-[60vh] overflow-y-auto z-30 transition-all duration-300 ${
          isVisible ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        } ${className}`}
      >
        <CardContent className="p-4">
          <h4 className="font-semibold text-sm mb-3 text-green-800">Contents</h4>
          <nav className="space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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
            onClick={scrollToTop}
            className="w-full mt-4 text-green-700"
          >
            <ChevronUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TableOfContents;
