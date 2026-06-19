import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Apout from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Contractor from '../components/Sections/Contractor';
import CV from '../components/Sections/CV';
import Education from '../components/Sections/Education/';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Skills from '../components/Sections/Skills';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/HomepageData';


// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Navigation/Header'), {ssr: false});

/**
 * Renders the main homepage with metadata, navigation, and all primary portfolio sections.
 *
 * Dependencies:
 * - Uses `Page` to provide the shared document and social metadata wrapper.
 * - Uses the section components to render the homepage content blocks in sequence.
 * - Uses a client-only dynamic `Header` import to avoid server-side rendering for the navigation component.
 *
 * Operations:
 * - Reads the page-level metadata from `homePageMeta`.
 * - Passes SEO and social preview values to the `Page` layout component.
 * - Composes the homepage section flow from hero content through footer content.
 *
 * @returns {JSX.Element} Rendered homepage output.
 */
const Home: FC = memo(() => {
  const {
    title,
    description,
    image,
    url,
    ogImg,
    ogImgType,
    ogImgWidth,
    ogImgHeight,
    ogImgAlt,
    ogType,
    ogLinkPreView,
    twitterCardType,
    twitterCreator,
  } = homePageMeta;

  return (
    <Page
      description={description}
      image={image}
      ogImg={ogImg}
      ogImgAlt={ogImgAlt}
      ogImgHeight={ogImgHeight}
      ogImgType={ogImgType}
      ogImgWidth={ogImgWidth}
      ogLinkPreView={ogLinkPreView}
      ogType={ogType}
      title={title}
      twitterCardType={twitterCardType}
      twitterCreator={twitterCreator}
      url={url}>
      <Header />
      <Hero />
      <Apout />
      <Contractor />
      <Skills />
      <CV />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;