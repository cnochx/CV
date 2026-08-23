import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {memo} from 'react';

import SmoothScroll from '../components/Motion/SmoothScroll';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* Tier 1: desktop-only smooth scroll, self-gating (reduced motion / touch / Save-Data) */}
      <SmoothScroll />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
