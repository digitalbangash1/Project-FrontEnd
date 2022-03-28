import React, { useContext } from "react";
import "./login.css";
import Header from "./Header";
import AuthProvider, { AuthContext } from "./AuthContext";
import Loginside from "./loginSide";
import updateCoursesAd from "../../pages/updateCoursesAd";

function Login() {
    const authContext = useContext(AuthContext);
    return (
        <div>
            <Header />
            {authContext.auth.email ? 'Welcome!!' : <Loginside />}
        </div>
    );
}

function AppWithstore() {
    return (
        <AuthProvider>
            <Login />
        </AuthProvider>
    );
}


//---
export default AppWithstore;
