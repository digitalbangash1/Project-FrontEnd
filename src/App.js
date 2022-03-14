import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import CourseList from './components/Courses/CourseList';
import CourseDetails from './components/Courses/CourseDetails';
import Home from './components/Home/Home';
import Testing from './components/testing';
import Description from './pages/description';


function App() {
  return (
    <div className="App">
          <Navbar />
        
      <Routes>
        <Route path="courses" element={<CourseList />} />
        <Route path="discription" element={<Description />} />
        <Route path="testing" element={<Testing />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
