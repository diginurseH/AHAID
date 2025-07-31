import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  text?: string;
  size?: "small" | "medium" | "large";
  fullScreen?: boolean;
}

export function LoadingState({ 
  text = "Loading...",
  size = "medium", 
  fullScreen = false
}: LoadingStateProps) {
  const sizeClass = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8"
  };
  
  const content = (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader2 className={`${sizeClass[size]} animate-spin text-green-700`} />
      {text && <p className="text-green-800 font-medium">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50">
        {content}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      {content}
    </div>
  );
}
