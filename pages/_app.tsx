// import Layout from '@/components/layout/Layout';
import LayoutProvider from '@/context/LayoutContext';
import * as fbq from '@/libs/fbpixel';
import * as gtag from '@/libs/gtag';
import { TInitialLayout } from '@/typescript/types/props';
import { ThemeProvider, createTheme } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/index.scss';
import '/node_modules/flag-icons/css/flag-icons.min.css';

interface PApp extends AppProps {
  layoutProps?: TInitialLayout;
  apollo: any;
}

export default function App({
  Component,
  pageProps,
  layoutProps,
  apollo,
}: PApp) {
  const theme = createTheme({
    components: {
      // Name of the component
    },
  });
  useEffect(() => {
    console.log('✅ gtag is ready 1 -', gtag.GA_MEASUREMENT_ID, window.gtag);
    gtag.waitForGtag(() => {
      console.log('✅ gtag is ready 2 -', window, window.gtag);
      gtag.pageView(window.location.pathname);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Thử Thách 7 Ngày Thuần Chay | Vive</title>
        <meta
          name="description"
          content="Nào mình cùng Vive! Là một tổ chức phi lợi nhuận, chúng mình chia sẻ thông tin và khuyến khích lối sống thuần chay lành mạnh."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src='https://connect.facebook.net/en_US/fbevents.js';
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script');
              fbq('init', '${fbq.FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || function() {};
            gtag('js', new Date());
            gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </ThemeProvider>
    </>
  );
}
