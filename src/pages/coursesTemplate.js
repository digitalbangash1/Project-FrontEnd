import React, {Component} from "react";
import {useState} from "react";

export default function  CoursesTemplate() {

    const [values, setValues] = useState({
        name:'',
        description:''
    })
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        setSubmitted(true);
        alert("course is registered")
    };

    const handleCourseNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

        return (
            <div>
                <h1 align={"center"}>
                    This is course template. You can create courses here

                </h1>

                <div>
                    <form className={"register-courses"} onSubmit={handleSubmit}>
                    <label> Course Name :

                    <input
                    id={"course-name"}
                    className={"form-field"}
                    type={"text"}


                    placeholder={"Course Name"}
                    name={"coursename"}
                    value={values.name}
                    onChange={handleCourseNameInputChange}
                    onSubmit={handleSubmit}


                    />
                    </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <form className={"register-courses-description"} onSubmit={handleSubmit}>
                        <label> Course Decription :

                            <textarea
                                id={"course-description"}
                                className={"decriptition-field"}
                                type={"text"}


                                placeholder={"Course Description"}
                                name={"description"}
                                value={values.name}
                                onChange={handleCourseNameInputChange}
                                onSubmit={handleSubmit}


                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>



            </div>
        )
    }





