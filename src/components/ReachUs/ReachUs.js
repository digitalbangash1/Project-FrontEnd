import React, { Component } from "react";
import engCover from "./engCover.png"
import"./ReachUs.css"
import { Container } from "react-bootstrap";

class ReachUs extends Component {
    render(){
        return(
        <div className="ReachUs">
        
            <figure class='position-relative'>
                < img className="engCover" src={engCover} alt =""></img>
                <figcaption> 
                <h2>About us:</h2>
                </figcaption>
            </figure>
        
            </div> 
        );
    }
}


export default ReachUs;