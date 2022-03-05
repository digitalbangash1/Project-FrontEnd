import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FirstPic from './components/FirstPic/FirstPic';
import OurMission from './components/OurMission/OurMission';
import AboutUs from './components/AboutUs/AboutUs';
import ReachUs from './components/ReachUs/ReachUs';
import { Container } from 'react-bootstrap';

function App() {
  return (
<div className="App">

    <div>
      <div>
      <Navbar/>
      </div>
    </div>

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

</div>
  );
}

export default App;
