import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import CourseView from './components/Courses/CourseView';
import CourseDetails from './components/Courses/CourseDetails';
import Home from './components/Home/Home';
import Login from "./components/login/login";
import CoursesTemplate from "./pages/coursesTemplate";
import CourseCreate from './components/Courses/CourseCreate';
import CourseUpdate from './components/Courses/CourseUpdate';
import AboutUs from './components/AboutUs/AboutUs';
import NoPage from './components/NoPage';


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route exact path="/about" component={AboutUs} />
                <Route path="/courses" element={<CourseView/>}/>
                <Route path="/courses/new" element={<CourseCreate/>}/>
                <Route path="/courses/:courseId/update" element={<CourseUpdate/>}/>
                <Route path="/courses/:courseId" element={<CourseDetails/>}/>
                <Route path="/coursestemplate" element={<CoursesTemplate/>}/>
                <Route path = "/login" element ={<Login/>} />
                <Route path="/" element={<Home/>}/>
                <Route path="/*" element={<NoPage/>}/>
            </Routes>
        </div>
    );
}


export default App;
