import React, { Component } from "react";
import"./Course.css"
import { Container } from "react-bootstrap";

class Course extends Component {
    render(){
        return <div>
            <figure class='PR'>
                <figcaption className="Course1"> 
                <h2>Courses</h2>
                <h3>All</h3>
                <p>Advanced Programming </p>
                <p>Front End Web Technology </p>
                <p>Back End development</p>
                <p>Distributed anda parallel Systems</p>
                </figcaption>
            </figure>
            </div>
    }
}


export default Course;