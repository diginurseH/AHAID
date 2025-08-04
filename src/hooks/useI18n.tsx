import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Define supported languages
type SupportedLanguage = 'en' | 'fr' | 'sw' | 'ar' | 'ha';

// Define the translations type
type Translations = {
  [key: string]: {
    [key in SupportedLanguage]?: string;
  };
};

// Example translations
const translations: Translations = {
  'app.title': {
    en: 'Africa\'s Health and Inclusive Digitalization',
    fr: 'Santé et Numérisation Inclusive en Afrique',
    sw: 'Afya ya Afrika na Udigitishaji Jumuishi',
    ar: 'صحة أفريقيا والرقمنة الشاملة',
    ha: 'Lafiyar Afrika da Digitization Mai Hadin kai'
  },
  'streams.care': {
    en: 'Care',
    fr: 'Soins',
    sw: 'Utunzaji',
    ar: 'رعاية',
    ha: 'Kulawa'
  },
  'streams.code': {
    en: 'Code',
    fr: 'Code',
    sw: 'Msimbo',
    ar: 'الشفرة',
    ha: 'Lambar Sirri'
  },
  'streams.community': {
    en: 'Community',
    fr: 'Communauté',
    sw: 'Jamii',
    ar: 'المجتمع',
    ha: 'Al\'umma'
  },
  'streams.commerce': {
    en: 'Commerce',
    fr: 'Commerce',
    sw: 'Biashara',
    ar: 'التجارة',
    ha: 'Kasuwanci'
  },
  // Add more translations as needed
};

// Define the context type
type I18nContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, params?: Record<string, string>) => string;
  direction: 'ltr' | 'rtl';
  availableLanguages: Array<{
    code: SupportedLanguage;
    name: string;
    nativeName: string;
    direction: 'ltr' | 'rtl';
  }>;
};

// Create the context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Define the language metadata
const languageMetadata = {
  en: {
    name: 'English',
    nativeName: 'English',
    direction: 'ltr' as const,
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr' as const,
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
    direction: 'ltr' as const,
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl' as const,
  },
  ha: {
    name: 'Hausa',
    nativeName: 'Hausa',
    direction: 'ltr' as const,
  },
};

// Create a provider component
export function I18nProvider({ children }: { children: ReactNode }) {
  // Get initial language from localStorage or use browser language or default to English
  const getBrowserLanguage = (): SupportedLanguage => {
    const browserLang = navigator.language.split('-')[0];
    return (browserLang as SupportedLanguage) in languageMetadata 
      ? browserLang as SupportedLanguage 
      : 'en';
  };

  const [language, setLanguageState] = useState<SupportedLanguage>(
    () => (localStorage.getItem('language') as SupportedLanguage) || getBrowserLanguage()
  );

  // Update language and save to localStorage
  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = languageMetadata[lang].direction;
  };

  // Translation function
  const t = (key: string, params?: Record<string, string>): string => {
    // Get the translation for the current language or fall back to English
    const translation = translations[key]?.[language] || translations[key]?.en || key;
    
    // Replace parameters if provided
    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => 
          acc.replace(new RegExp(`{{${paramKey}}}`, 'g'), paramValue),
        translation
      );
    }
    
    return translation;
  };

  // Set document direction on language change
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = languageMetadata[language].direction;
  }, [language]);

  // Build the list of available languages
  const availableLanguages = Object.entries(languageMetadata).map(
    ([code, data]) => ({
      code: code as SupportedLanguage,
      ...data
    })
  );

  return (
    <I18nContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      direction: languageMetadata[language].direction,
      availableLanguages
    }}>
      {children}
    </I18nContext.Provider>
  );
}

// Create a hook for using the context
export function useI18n() {
  const context = useContext(I18nContext);
  
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  
  return context;
}
