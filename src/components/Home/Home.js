import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FirstPic from '../FirstPic/FirstPic'
import OurMission from '../OurMission/OurMission'
import ReachUs from '../ReachUs/ReachUs'

export default function Home() {
  return <div>
    

    <div>
      <div>
      <FirstPic/>
      </div>
    </div>


    <div>
      <div> 
      <OurMission/>
      </div>
    </div>

    <div>
      <div>
      <AboutUs/>
      </div>
    </div>

    <div>
      <div>
      <ReachUs/>
      </div>
    </div>

  </div>;
}
