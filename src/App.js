import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Engineer1 from './pictures/Engineer1.png'


function App() {
  return (
    <div className="App">
      <Navbar/>
      < img src={Engineer1} alt="Engineer1 image" width="100%"></img>
      <div className = "sec-div" >
      <h1>Our Mission</h1>
        <p className=' Our Mission' >We aim to provide a learning 
        environment which creates a sence of inspiration amongst the
        learners. Our goal is to help students to learn their 
        courses in dinstinct ways we think and work. We will
        deliver reliable, high-quality resources for students
        to better understand the content of the courses. 
        </p>
        </div>
    </div>
  );
}

export default App;
