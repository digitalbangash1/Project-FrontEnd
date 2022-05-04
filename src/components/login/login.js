import React, { useContext } from "react";
import "./login.css";
import Header from "./Header";
import AuthProvider, { AuthContext } from "./AuthContext";
import Loginside from "./loginSide";
import CourseList from '../Courses/CourseList'

function Login() {
    const authContext = useContext(AuthContext);
    return (
        <div>
            <Header />
            {authContext.auth.email ? <CourseList /> : <Loginside />}
        </div>
    );
}

function loginCheck() {
    return (
        <AuthProvider>
            <Login />
        </AuthProvider>
    );
}


//---
export default loginCheck;
