import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export default function AuthProvider(props) {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");

        if (email) {
            setAuth({
                token,
                email,
            });

        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}
//__
