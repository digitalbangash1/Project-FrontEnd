import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Container } from "react-bootstrap";
import './App.css';
import Engineer1 from './pictures/Engineer1.png'
import PicOfUS from './pictures/PicOfUs.png'
import engCover from './pictures/engCover.png'

function App() {
  return (
    <div className="App">
    
    <div>
      <Navbar/>
      < img className="Engineer1" src={Engineer1}  width="100%"></img>
    </div>

        <div className = "sec-div" > 
            <h2>Our Mission</h2>
          
            <p className=' OurMission'>
            We aim to provide a learning environment
            which creates a sence of inspiration amongst the learners.
            Our goal is to help students to learn their 
            courses in dinstinct ways we think and work. We will
            deliver reliable, high-quality resources for students
            to better understand the content of the courses. 
            </p>
        </div>

        <Container>
            <figure class='position-relative'>
                < img className="PicOfUs" src={PicOfUS}></img>
                <figcaption> 
                <h2>About us:</h2>
                <p>We are five software engineers students from DTU
                (Denmark Technical University) who are dedicated to 
                helping you learning the courses through the expereiences
                we have had through out the different subjects.</p>
                </figcaption>
            </figure>
        </Container>

        
    </div>
  );
}

export default App;
