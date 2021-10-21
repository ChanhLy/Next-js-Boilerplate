import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

import { Header } from '@/components/Header/Header';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SessionProvider>
        <Header></Header>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default MyApp;
