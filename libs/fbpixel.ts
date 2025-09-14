export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log("trackEvent ", window);
    window.fbq('trackEvent', name, options);
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackLead = (name: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log("trackLead ", window);
    window.fbq("trackLead ", name);
  }
};

export const waitForFbq = (callback: () => void, maxAttempts = 50) => {
  let attempts = 0;
  const checkFbq = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      callback();
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(checkFbq, 200);
    }
  };
  checkFbq();
};