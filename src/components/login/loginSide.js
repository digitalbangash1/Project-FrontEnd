import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./login.css";
import { useContext } from "react";
import { useState } from 'react';
import { AuthContext } from "./AuthContext";
import Button from "react-bootstrap/Button";
import loginPic1 from "./loginPic1.png";

export default function Loginside() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);


    function login(e) {
        e.preventDefault();
        //send Api request to validate data and git token
        if (password === 'admins123456' && (email === 'gr10@engineer.academy')) {
            const token = "abc"
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            authContext.setAuth({ token, email });
        } else {
            alert('wrong details, please try igen :(')
        }
    }


    return (
        <div className="login">
            <h1 >
                Welcome to Admin login page
            </h1>
            <Container id="main-con" className="con">

                <Form className="form">

                    < img className="login-admin-pic"
                        src={loginPic1} alt="Bootstrap 5"></img>

                    <h2>Please login </h2>

                    <Form.Group controlId="signInEmail" />
                    <Form.Control type="email" size="lg"
                        placeholder="Email address" autoComplete="username"
                        value={email} onChange={e => setEmail(e.target.value)} />

                    <Form.Group className="mb-3 " controlId="sign-in-pass" />
                    <Form.Control type="password" size="lg"
                        placeholder="password" autoComplete="current-password"
                        value={password} onChange={e => setPassword(e.target.value)} />

                    <Form.Group controlId="rememberMe" />
                    <Form.Check label="Remember me " className="d-flex justify-content-center"
                        type="checkbox" id="rememberMe" />

                    <Button className="text-center mt-4" variant="variant" size="sm"
                        onClick={login}>
                        Log in </Button>
                    <p>&copy;Engineer Academy 2022 </p>
                </Form>


            </Container>
        </div>
    );
}
//--

