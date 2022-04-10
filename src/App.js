import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import CourseList from './components/Courses/CourseList';
import CourseDetails from './components/Courses/CourseDetails';
import Home from './components/Home/Home';
import Testing from './components/testing';
import Login from "./components/login/login";
import CoursesTemplate from "./pages/coursesTemplate";


function App() {
    return (
        <div className="App">
            <Navbar/>

            <Routes>
                <Route path="/courses" element={<CourseList/>}/>
                <Route path="/courses/:courseId" element={<CourseDetails/>}/>
                <Route path="/testing" element={<Testing/>}/>
                <Route path="/coursestemplate" element={<CoursesTemplate/>}/>
                <Route path = "/login" element ={<Login/>} />
                <Route path="/" element={<Home/>}/>
                

            </Routes>
        </div>
    );
}

export default App;
