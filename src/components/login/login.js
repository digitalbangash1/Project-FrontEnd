import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import loginPic from "./loginPic.png";
import "./login.css"
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';

class Login extends Component {
render() {
    return( <div className="login"> 
        <h1 >
        Welcome to Admin login page  
            </h1>
    <Container id="main-con" className="con">

        <Form className="form">
        
        < img className="login-admin-pic" src={loginPic} alt ="Bootstrap 5"></img>
        <h2>Please login </h2>
        <Form.Group  controlId="sign-in-email" />
            <Form.Control type="email"size="lg" placeholder="Email address" autoComplete="username"/>
        <Form.Group controlId="sign-in-pass"  />
            <Form.Control type="password"size="lg" placeholder="password" autoComplete="current-password"/>
        <Form.Group controlId="Remember-me"  className="FormG" />
        <Form.Check label= "Remember me "  className="FormG"/>
        <Button variant ="variant" size="lg"> Log in </Button>
        <p>&copy;Engineer Academy 2022 </p>
        </Form>


    </Container>
    </div>
    );
    
    }
    
}



export default Login;
