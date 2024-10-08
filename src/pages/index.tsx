import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Freelance from '../components/Sections/Freelance';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/homepageData';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description, image, url, ogType, twitterCardType, twitterCreator} = homePageMeta;
  return (
    <Page description={description}
          image={image}
          ogType={ogType}
          title={title}
          twitterCardType={twitterCardType}
          twitterCreator={twitterCreator}
          url={url}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Freelance />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
