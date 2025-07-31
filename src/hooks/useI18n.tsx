import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Define supported languages
type SupportedLanguage = 'en' | 'fr' | 'sw' | 'ar' | 'ha';

// Define the translations type
type Translations = {
  [key: string]: {
    [key in SupportedLanguage]?: string;
  };
};

// Comprehensive translations for AHAID
const translations: Translations = {
  'app.title': {
    en: 'Africa\'s Health and Inclusive Digitalization',
    fr: 'Santé et Numérisation Inclusive en Afrique',
    sw: 'Afya ya Afrika na Udigitishaji Jumuishi',
    ar: 'صحة أفريقيا والرقمنة الشاملة',
    ha: 'Lafiyar Afrika da Digitization Mai Hadin kai'
  },
  'hero.subtitle': {
    en: 'Where Care Meets Code',
    fr: 'Où les Soins Rencontrent le Code',
    sw: 'Mahali Utunzaji Unapokutana na Msimbo',
    ar: 'حيث تلتقي الرعاية بالتقنية',
    ha: 'Inda Kulawa ya hadu da Code'
  },
  'nav.home': {
    en: 'Home',
    fr: 'Accueil',
    sw: 'Nyumbani',
    ar: 'الرئيسية',
    ha: 'Gida'
  },
  'nav.ecosystem': {
    en: 'Ecosystem',
    fr: 'Écosystème',
    sw: 'Mazingira',
    ar: 'النظام البيئي',
    ha: 'Tsarin halittu'
  },
  'nav.community': {
    en: 'Community',
    fr: 'Communauté',
    sw: 'Jamii',
    ar: 'المجتمع',
    ha: 'Al\'umma'
  },
  'nav.resources': {
    en: 'Resources',
    fr: 'Ressources',
    sw: 'Rasilimali',
    ar: 'الموارد',
    ha: 'Albarkatu'
  },
  'nav.studio': {
    en: 'Studio',
    fr: 'Studio',
    sw: 'Studio',
    ar: 'الاستوديو',
    ha: 'Studio'
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
  'stakeholder.healthcare': {
    en: 'Healthcare Workers',
    fr: 'Travailleurs de la Santé',
    sw: 'Wafanyakazi wa Afya',
    ar: 'العاملون في الرعاية الصحية',
    ha: 'Ma\'aikatan Lafiya'
  },
  'stakeholder.government': {
    en: 'Government & Policy',
    fr: 'Gouvernement et Politiques',
    sw: 'Serikali na Sera',
    ar: 'الحكومة والسياسات',
    ha: 'Gwamnati da Manufofi'
  },
  'stakeholder.developers': {
    en: 'Developers & Tech Partners',
    fr: 'Développeurs et Partenaires Tech',
    sw: 'Wasanidi na Washirika wa Teknolojia',
    ar: 'المطورون والشركاء التقنيون',
    ha: 'Masu haɓakawa da Abokan hulɗa na Tech'
  },
  'stakeholder.investors': {
    en: 'Investors & Partners',
    fr: 'Investisseurs et Partenaires',
    sw: 'Wawekezaji na Washirika',
    ar: 'المستثمرون والشركاء',
    ha: 'Masu saka hannun jari da Abokan hulɗa'
  },
  'cta.explore_ecosystem': {
    en: 'Explore Our Ecosystem',
    fr: 'Explorez Notre Écosystème',
    sw: 'Chunguza Mazingira Yetu',
    ar: 'استكشف نظامنا البيئي',
    ha: 'Bincika Tsarin Halittarmu'
  },
  'cta.join_community': {
    en: 'Join Community',
    fr: 'Rejoindre la Communauté',
    sw: 'Jiunge na Jamii',
    ar: 'انضم للمجتمع',
    ha: 'Shiga Al\'umma'
  },
  'about.title': {
    en: 'About AHAID',
    fr: 'À Propos d\'AHAID',
    sw: 'Kuhusu AHAID',
    ar: 'حول AHAID',
    ha: 'Game da AHAID'
  },
  'about.description': {
    en: 'Creating digital dignity in healthcare through AI-driven tools that empower African healthcare professionals and communities.',
    fr: 'Créer la dignité numérique dans les soins de santé grâce à des outils pilotés par l\'IA qui responsabilisent les professionnels de la santé et les communautés africains.',
    sw: 'Kuunda utukufu wa kidijitali katika huduma za afya kupitia zana za AI zinazoweza kuwahimiza wataalamu wa afya na jamii za Kiafrika.',
    ar: 'خلق الكرامة الرقمية في الرعاية الصحية من خلال أدوات مدعومة بالذكاء الاصطناعي تمكن المهنيين الأفارقة والمجتمعات في مجال الرعاية الصحية.',
    ha: 'Ƙirƙirar mutunci na dijital a cikin kiwon lafiya ta hanyar kayan aikin da AI ke jagoranta waɗanda ke ƙarfafa ƙwararrun ma\'aikatan lafiya na Afirka da al\'ummomi.'
  },
  'values.empathy': {
    en: 'Empathy & Care',
    fr: 'Empathie et Soin',
    sw: 'Huruma na Utunzaji',
    ar: 'التعاطف والرعاية',
    ha: 'Tausayi da Kulawa'
  },
  'values.accessibility': {
    en: 'Accessibility',
    fr: 'Accessibilité',
    sw: 'Upatikanaji',
    ar: 'إمكانية الوصول',
    ha: 'Samun dama'
  },
  'values.innovation': {
    en: 'Innovation',
    fr: 'Innovation',
    sw: 'Uvumbuzi',
    ar: 'الابتكار',
    ha: 'Ƙirƙira'
  },
  'values.afrocentric': {
    en: 'Afrocentric',
    fr: 'Afrocentrique',
    sw: 'Kiafrika',
    ar: 'أفريقي المحور',
    ha: 'Na Afirka'
  }
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
