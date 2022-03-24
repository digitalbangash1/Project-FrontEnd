import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./login.css";
import { Component, useContext } from "react";
import { useEffect, useState } from 'react';
import AuthProvider, { AuthContext } from "./AuthContext";
import Button from "react-bootstrap/Button";
import loginPic from "./loginPic.png";

export default function Loginside() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);


    function login(e) {
        e.preventDefault();
        //send Api request to validate data and git token
        if (password == 'admins193472' &&( email == 'gr10@engineer.academy')) {
            const token = "abc"
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            authContext.setAuth({ token, email });
        } else {
            alert('wrong details batata')
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
                        src={loginPic} alt="Bootstrap 5"></img>

                    <h2>Please login </h2>

                    <Form.Group controlId="sign-in-email" />
                    <Form.Control type="email" size="lg"
                        placeholder="Email address" autoComplete="username"
                        value={email} onChange={e => setEmail(e.target.value)} />

                    <Form.Group className="mb-3 " controlId="sign-in-pass" />
                    <Form.Control type="password" size="lg"
                        placeholder="password" autoComplete="current-password"
                        value={password} onChange={e => setPassword(e.target.value)} />

                    <Form.Group controlId="remember-me"
                        className="d-flex justify-content-center" />
                    <Form.Check label="Remember me " className="FormG" />

                    <Button className="text-center" variant="variant" size="sm"
                        onClick={login}>
                        Log in </Button>
                    <p>&copy;Engineer Academy 2022 </p>
                </Form>


            </Container>
        </div>
    );
}