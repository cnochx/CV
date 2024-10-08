import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomePageMeta} from '../../data/homepageDataDef';

const Page: NextPage<PropsWithChildren<HomePageMeta>> = memo(({children, title, description, image, url, ogImg, ogImgType, ogImgWidth, ogImgHeight, ogImgAlt, ogType, ogLinkPreView ,twitterCardType, twitterCreator}) => {
  const {asPath: pathname} = useRouter();
  const urlPath = `${url}${pathname}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href={urlPath} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />

        <meta content={ogType} property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={urlPath} property="og:url" />
        <meta content={image} property="og:image" />

        <meta content={ogImg} property="og:image" />
        <meta content={ogImg} property="og:image:secure_url" />
        <meta content={ogImgType} property="og:image:type" />
        <meta content={ogImgWidth} property="og:image:width" />
        <meta content={ogImgHeight} property="og:image:height" />
        <meta content={ogImgAlt} property="og:image:alt" />
        <meta content={ogLinkPreView} property="og:site_name" />

        <meta content={twitterCardType} name="twitter:card" />
        <meta content={twitterCreator} name="twitter:site" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={image} name="twitter:image" />

      </Head>x§
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );
});

Page.displayName = 'Page';
export default Page;
