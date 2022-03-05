import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FirstPic from './components/FirstPic/FirstPic';
import OurMission from './components/OurMission/OurMission';
import AboutUs from './components/AboutUs/AboutUs';
import ReachUs from './components/ReachUs/ReachUs';

function App() {
  return (
<div className="App">

    <div>
      <Navbar/>
    </div>

    <div>
      <FirstPic/>
    </div>


    <div> 
      <OurMission/>
    </div>

    <div>
      <AboutUs/>
    </div>

    


</div>
  );
}

export default App;
