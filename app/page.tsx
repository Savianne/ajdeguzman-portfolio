import dynamic from 'next/dynamic';
import AnimatedCursor from "react-animated-cursor";
import Home from "./components/home/StyledHome";
import CategoryTitle from "./components/CategoryTitle";
import AboutMe from "./components/about/StyledAboutMe";
import Services from "./components/Services/Services";
import FaveVerse from "./components/Services/FaveVerse";
import WorkExperiences from "./components/WorkExperiences/StyledWorkExperiences";
import Contact from "./components/contact/ContactStyled";
import Footer from "./components/Footer";
import Header from "./components/Heading";
import StyleTools from './components/Tools/StyledTools';

const Gallery = dynamic(() => import('../app/components/Gallery/StyledGallery'), {
  ssr: false
});

export default function Page() {
  return (
    <main>
      <AnimatedCursor
      innerSize={8}
      outerSize={15}
      color='193, 11, 111'
      outerAlpha={1}
      innerScale={0.7}
      outerScale={5}
      outerStyle={{
        backgroundColor: 'yellow',
        mixBlendMode: 'difference'
      }}
      clickables={[
        '.cur',
        'button',
        'a'
      ]}
    />
      <Header />
      <Home />
      <CategoryTitle id="about" customStyle="margin: 0 auto">About Me</CategoryTitle>
      <AboutMe />
      <Services />
      <FaveVerse />
      <StyleTools />
      <WorkExperiences />
      <CategoryTitle id="featured" customStyle="margin: 0 auto">Featured Works</CategoryTitle>
      <Gallery />
      <CategoryTitle id="contact" customStyle="margin: 0 auto">Contact</CategoryTitle>
      <Contact />
      <Footer />
    </main>
  );
}
