import React, { Component } from "react";
import Engineer1 from "./Engineer1.png"
import "./FirstPic.css"

class FirstPicc extends Component {
    render() {
        return (
            <div className="a" >
                <img className="Engineer1" src={Engineer1} alt="" ></img>
            </div>
        );
    }
}


export default FirstPicc;