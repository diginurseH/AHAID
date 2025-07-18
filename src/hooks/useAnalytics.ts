import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsOptions {
  excludePaths?: string[];
  trackOutboundLinks?: boolean;
  trackUserInteractions?: boolean;
}

/**
 * A hook to track page views and other analytics events
 * @param options Configuration options for analytics tracking
 */
export function useAnalytics({
  excludePaths = [],
  trackOutboundLinks = true,
  trackUserInteractions = false,
}: AnalyticsOptions = {}) {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    const currentPath = location.pathname;

    // Skip tracking for excluded paths
    if (excludePaths.includes(currentPath)) {
      return;
    }

    // This is where you would integrate with your analytics provider
    // Example for Google Analytics:
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: currentPath,
      });
    }

    // Example for custom analytics:
    console.log(`[Analytics] Page viewed: ${currentPath}`);
  }, [location, excludePaths]);

  // Track outbound links
  useEffect(() => {
    if (!trackOutboundLinks) return;

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Check if link is external
      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        // This is where you would track the outbound link click
        console.log(`[Analytics] Outbound link clicked: ${href}`);
        
        // Example for Google Analytics:
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'outbound',
            event_label: href,
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [trackOutboundLinks]);

  // Track user interactions (button clicks, form submissions, etc.)
  useEffect(() => {
    if (!trackUserInteractions) return;

    const handleInteraction = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button');
        const buttonText = button?.textContent?.trim();
        
        console.log(`[Analytics] Button clicked: ${buttonText}`);
        
        // Example for Google Analytics:
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'button',
            event_label: buttonText,
          });
        }
      }
    };

    document.addEventListener('click', handleInteraction);
    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, [trackUserInteractions]);

  return null;
}

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
