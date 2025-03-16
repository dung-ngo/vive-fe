// import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import NextApp from 'next/app';
import { TInitialLayout } from '@/typescript/types/props';
import LayoutProvider from '@/context/LayoutContext';
import { ThemeProvider, createTheme } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';

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
      <ThemeProvider theme={theme}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </ThemeProvider>
    </>
  );
}
