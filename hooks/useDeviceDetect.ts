import { useEffect, useState } from 'react';

type Detection = {
  isMobile: () => boolean;
  isDesktop: () => boolean;
  isAndroid: () => boolean;
  isIos: () => boolean;
  // isSSR: () => boolean;
};

const deviceDetectByUserAgent = (userAgent: NavigatorID['userAgent']): Detection => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
  const isSSR = () => Boolean(userAgent.match(/SSR/i));
  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  const isDesktop = () => Boolean(!isMobile() && !isSSR());
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    // isSSR,
  };
};

export const useDeviceDetect = () => {
  const [detection, setDetection] = useState<Detection | 'SSR'>('SSR');

  useEffect(() => {
    setDetection(deviceDetectByUserAgent(navigator.userAgent));
  }, []);

  return detection;
};
