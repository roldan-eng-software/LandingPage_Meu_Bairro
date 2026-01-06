import { trackCustomEvent } from '@/hooks/useGoogleAnalytics';

// Common analytics events for the Meu Bairro application
export const analyticsEvents = {
  // User engagement events
  pageView: (pageName: string) => {
    trackCustomEvent('page_view', 'Navigation', pageName);
  },

  buttonClick: (buttonName: string, location?: string) => {
    trackCustomEvent('button_click', 'User Interaction', `${buttonName}${location ? ` - ${location}` : ''}`);
  },

  formSubmit: (formName: string) => {
    trackCustomEvent('form_submit', 'User Interaction', formName);
  },

  // Feature-specific events
  searchQuery: (query: string) => {
    trackCustomEvent('search', 'Search', query);
  },

  contactFormSubmit: () => {
    trackCustomEvent('contact_form_submit', 'Lead Generation', 'Contact Page');
  },

  newsletterSignup: () => {
    trackCustomEvent('newsletter_signup', 'Lead Generation', 'Newsletter');
  },

  // Content engagement
  linkClick: (linkText: string, destination?: string) => {
    trackCustomEvent('link_click', 'Content', `${linkText}${destination ? ` - ${destination}` : ''}`);
  },

  imageClick: (imageDescription: string) => {
    trackCustomEvent('image_click', 'Content', imageDescription);
  },

  // Error tracking
  error: (errorType: string, errorMessage?: string) => {
    trackCustomEvent('error', 'System', `${errorType}${errorMessage ? ` - ${errorMessage}` : ''}`);
  },

  // Performance tracking
  pageLoadTime: (loadTime: number) => {
    trackCustomEvent('page_load_time', 'Performance', undefined, loadTime);
  },

  // User journey events
  userRegistration: () => {
    trackCustomEvent('user_registration', 'User Journey', 'Account Created');
  },

  login: () => {
    trackCustomEvent('login', 'User Journey', 'User Logged In');
  },

  // Business metrics
  conversion: (conversionType: string, value?: number) => {
    trackCustomEvent('conversion', 'Business', conversionType, value);
  }
};

// Performance monitoring
export const trackPageLoadTime = () => {
  if (typeof window !== 'undefined' && window.performance) {
    window.addEventListener('load', () => {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      analyticsEvents.pageLoadTime(loadTime);
    });
  }
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  analyticsEvents.error(error.name, `${error.message}${context ? ` - ${context}` : ''}`);
};
