import { useRef } from 'react';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import BridgeAmenities from './components/Bridge Amenities/BridgeAmenities';
import CallUs from './components/CallUs/CallUs';
import ContactPage from './components/Contact Us/ContactUs';
import Footer from './components/Footer/Footer';
import GroundFloor from './components/Ground Floor Amenities/GroundFloor';
import Header from './components/Header/Header';
import PreHeader from './components/Header/PreHeader';
import LocationAdvantage from './components/Location Advantage/LocationAdvantage';
import Overview from './components/Overview/Overview';
import Parallax from './components/Parallax/Parallax';
import ProjectGallery from './components/Project Gallery/ProjectGallery';
import ProjectPlan from './components/Project Plan/ProjectPlan';
// import OverlapBanner from './components/Overlap Banner/OverlapBanner';

const App = () => {
  const contactFormRef = useRef(null);

  const scrollToContact = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollToForm(); // Call the scroll function
    }
  };
  return (
    <>
      <PreHeader />
      <Header scrollToContact={scrollToContact} />
      <Banner />
      <Overview />
      <GroundFloor />
      <BridgeAmenities />
      <Parallax />
      <ProjectPlan />
      <ProjectGallery />
      <LocationAdvantage />
      <About />
      <ContactPage ref={contactFormRef} />
      <Footer />
      <CallUs />
    </>
  );
};

export default App;
