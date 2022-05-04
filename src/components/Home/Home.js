import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FirstPic from '../FirstPic/FirstPic'
import OurMission from '../OurMission/OurMission'
import ReachUs from '../ReachUs/ReachUs'
import ContactInfo from '../ContactInfo/ContactInfo'
import Footer from '../Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';
import Slider from '../Slider/Slider';


export default function Home() {
  return (<div>
    <FirstPic />
    <OurMission />
    <AboutUs />
    <ReachUs />
    <Slider />
    <ContactUs />
    <ContactInfo />
    <Footer />

  </div>
  )

}
