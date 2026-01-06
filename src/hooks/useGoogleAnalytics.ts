import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-KPJY8VSLNB', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Event tracking function
  const trackEvent = (action: string, category?: string, label?: string, value?: number) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  return { trackEvent };
};

// Custom event tracking functions
export const trackPageView = (path: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-KPJY8VSLNB', {
      page_path: path,
    });
  }
};

export const trackCustomEvent = (
  action: string,
  category: string = 'User Interaction',
  label?: string,
  value?: number
) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
