import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import CourseList from './components/Courses/CourseList';
import CourseDetails from './components/Courses/CourseDetails';
import Home from './components/Home/Home';
import Testing from './components/testing';
import Login from "./components/login/login";
import CoursesTemplate from "./pages/coursesTemplate";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from './components/Footer/Footer';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ContactUs from './components/ContactUs/ContactUs';


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
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/ContactUs" element={<ContactUs/>}/>
            </Routes>
            <ContactInfo/>
            <Footer/>
        </div>
    );
}

export default App;
