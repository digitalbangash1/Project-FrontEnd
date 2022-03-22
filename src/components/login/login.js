import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import loginPic from "./loginPic.png";

class Login extends Component {
render() {
    return <div className="test"> 
        <h1>
        hello salam salam 
            </h1>
    

    <Container>
        <Form>
        < img className="login-admin-pic" src={loginPic} alt ="Bootstrap 5"></img>
        </Form>


    </Container>
    </div>
}
}

export default Login 
