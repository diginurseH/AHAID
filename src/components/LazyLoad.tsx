import { ReactNode, useEffect, useState } from "react";

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
}

/**
 * A component that lazily renders its children when they come into view
 */
export function LazyLoad({ 
  children, 
  threshold = 0.1, 
  rootMargin = "100px", 
  placeholder = <div className="min-h-[200px] animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg" />
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(containerRef);
    
    return () => {
      observer.disconnect();
    };
  }, [containerRef, threshold, rootMargin]);

  return (
    <div ref={setContainerRef}>
      {isVisible ? children : placeholder}
    </div>
  );
}
