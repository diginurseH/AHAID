import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  isDarkMode: boolean;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  fontSize: "small" | "medium" | "large";
  setFontSize: (size: "small" | "medium" | "large") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: "light" | "dark" | "system";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<"light" | "dark" | "system">(
    () => (localStorage.getItem("theme") as "light" | "dark" | "system") || defaultTheme
  );
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [highContrast, setHighContrast] = useState<boolean>(
    localStorage.getItem("high-contrast") === "true"
  );
  
  const [fontSize, setFontSizeState] = useState<"small" | "medium" | "large">(
    () => (localStorage.getItem("font-size") as "small" | "medium" | "large") || "medium"
  );

  // Update the theme state and localStorage
  const setTheme = (newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Update the font size state and localStorage
  const setFontSize = (newSize: "small" | "medium" | "large") => {
    setFontSizeState(newSize);
    localStorage.setItem("font-size", newSize);
    
    // Apply font size classes to the document
    document.documentElement.classList.remove("text-sm", "text-base", "text-lg");
    
    switch (newSize) {
      case "small":
        document.documentElement.classList.add("text-sm");
        break;
      case "medium":
        document.documentElement.classList.add("text-base");
        break;
      case "large":
        document.documentElement.classList.add("text-lg");
        break;
    }
  };

  // Effect to handle theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove("light", "dark");
    
    // Determine if we should use dark mode
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkMode = 
      theme === "dark" || (theme === "system" && systemDarkMode);
    
    // Apply the appropriate theme class
    root.classList.add(shouldUseDarkMode ? "dark" : "light");
    setIsDarkMode(shouldUseDarkMode);
    
    // Apply high contrast if enabled
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }
  }, [theme, highContrast]);

  // Effect to initialize font size
  useEffect(() => {
    setFontSize(fontSize);
  }, [fontSize]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        const root = window.document.documentElement;
        const systemDarkMode = mediaQuery.matches;
        
        root.classList.remove("light", "dark");
        root.classList.add(systemDarkMode ? "dark" : "light");
        setIsDarkMode(systemDarkMode);
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Effect to store high contrast preference
  useEffect(() => {
    localStorage.setItem("high-contrast", highContrast.toString());
  }, [highContrast]);

  const value = {
    theme,
    setTheme,
    isDarkMode,
    highContrast,
    setHighContrast,
    fontSize,
    setFontSize,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
}
