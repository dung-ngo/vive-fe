declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageView = (url: string) => {
    console.log('pageView', url, window);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } else {
    console.warn('gtag is not defined yet');
  }
};

export const waitForGtag = (callback: () => void, maxAttempts = 50) => {
    let attempts = 0;
    const checkGtag = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        callback();
      } else if (attempts < maxAttempts) {
        attempts++;
        console.log("waitForGtagFn ", attempts, window);
        setTimeout(checkGtag, 200);
      }
    };
    checkGtag();
  };