import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FirstPic from '../FirstPic/FirstPic'
import OurMission from '../OurMission/OurMission'
import ReachUs from '../ReachUs/ReachUs'
import ContactInfo from '../ContactInfo/ContactInfo'
import Footer from '../Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';


export default function Home() {
  return( <div>
<FirstPic/>
<OurMission/>
<AboutUs/>
<ReachUs/>
<ContactUs/>
<ContactInfo/>
<Footer/>
</div>
  )
  
}
