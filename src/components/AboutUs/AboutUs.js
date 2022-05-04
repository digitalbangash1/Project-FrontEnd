import React, { Component } from "react";
import PicOfUS from "./PicOfUs.png"

import "./AboutUs.css";

class AboutUs extends Component {
    render() {
        return <div className="AboutUs" id="aboutus">
            <div>
                <figure class='position-relative'>
                    < img className="PicOfUs" src={PicOfUS} alt=""></img>
                    <figcaption>
                        <h2>About us:</h2>
                        <p>We are five software engineers students from DTU
                            (Denmark Technical University) who are dedicated to
                            helping you learning the courses through the expereiences
                            we have had through out the different subjects. </p>
                    </figcaption>
                </figure>
            </div>
        </div>

    }
}


export default AboutUs;