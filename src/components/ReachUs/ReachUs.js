import React, { Component } from "react";
import engCover from "./engCover.png"
import "./ReachUs.css"


class ReachUs extends Component {
    render() {
        return <div className="Reachdiv">
            <figure class='position-relative2'>
                < img className="engCover" src={engCover} alt=""></img>
                <figcaption className="Reach">
                    <h2>Do you want to reach us?</h2>
                    <p>Just one call away: +45 1234 5678 </p>
                </figcaption>
            </figure>
        </div>
    }
}


export default ReachUs;