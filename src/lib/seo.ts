/**
 * Helper function to update meta tags for SEO
 * 
 * @param options SEO options for the page
 */
export function updateMetaTags(options: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}) {
  const {
    title,
    description,
    keywords = [],
    ogImage = '/images/og-image.png',
    ogType = 'website',
    ogUrl = window.location.href,
    twitterCard = 'summary_large_image',
  } = options;

  // Set document title
  document.title = title.includes('Nursaera') ? title : `${title} | Nursaera Health Tech`;

  // Helper function to get or create meta tag
  const getOrCreateMetaTag = (name: string, nameAttribute: 'name' | 'property'): HTMLMetaElement => {
    let meta = document.querySelector(`meta[${nameAttribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(nameAttribute, name);
      document.head.appendChild(meta);
    }
    
    return meta;
  };

  // Update basic meta tags
  getOrCreateMetaTag('description', 'name').setAttribute('content', description);
  
  if (keywords.length > 0) {
    getOrCreateMetaTag('keywords', 'name').setAttribute('content', keywords.join(', '));
  }

  // Update Open Graph tags
  getOrCreateMetaTag('og:title', 'property').setAttribute('content', document.title);
  getOrCreateMetaTag('og:description', 'property').setAttribute('content', description);
  getOrCreateMetaTag('og:image', 'property').setAttribute('content', new URL(ogImage, window.location.origin).href);
  getOrCreateMetaTag('og:url', 'property').setAttribute('content', ogUrl);
  getOrCreateMetaTag('og:type', 'property').setAttribute('content', ogType);

  // Update Twitter Card tags
  getOrCreateMetaTag('twitter:card', 'name').setAttribute('content', twitterCard);
  getOrCreateMetaTag('twitter:title', 'name').setAttribute('content', document.title);
  getOrCreateMetaTag('twitter:description', 'name').setAttribute('content', description);
  getOrCreateMetaTag('twitter:image', 'name').setAttribute('content', new URL(ogImage, window.location.origin).href);

  // Add canonical link if it doesn't exist
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = ogUrl;
}
