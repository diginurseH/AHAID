
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle language"
      onClick={toggleLanguage}
      className="px-2 py-1 text-green-800 border border-green-100"
    >
      {language === "en" ? "FR" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
