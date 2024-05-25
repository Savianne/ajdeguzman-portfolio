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
// import Gallery from "./components/Gallery/StyledGallery";

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
      ]}
    />
      <Header />
      <Home />
      <CategoryTitle customStyle="margin-left: 50px">About Me</CategoryTitle>
      <AboutMe />
      <Services />
      <FaveVerse />
      <WorkExperiences />
      <Gallery />
      <CategoryTitle customStyle="margin-left: 50px">Contact</CategoryTitle>
      <Contact />
      <Footer />
    </main>
  );
}
