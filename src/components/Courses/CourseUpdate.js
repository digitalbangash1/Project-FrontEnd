import React, { Component, useEffect } from "react";
import { useState } from "react";
import { updateCourse, getCourse } from '../../api/coursesApi';
import { useParams } from "react-router-dom";
import login from "./CourseList"

export default function CourseUpdate() {

    const { courseId } = useParams();
    const [values, setValues] = useState({
        name: '',
        description: ''
    })
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        console.log('courseId', courseId);
        const promise = getCourse(courseId);
        promise.then(response => {
            const course = response.data;
            setValues(course);
        });
    }, []);

    const handleNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    const handleDescriptionChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            description: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);

        if (!values.name || !values.description) {
            console.log('Both name and description are required');
            return;
        }

        const promise = updateCourse(courseId, values);
        promise.then(response => {
            console.log("Course updated");
        });
    }

    return (
        <div class="p-2">
            <h3 align={"center"}>
                Update course
            </h3>

            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label>Name</label>
                    <input type="text" class="form-control w-25"
                        value={values.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div class="mb-3">
                    <label>Description</label>
                    <textarea type="text" class="form-control w-25"
                        value={values.description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary" onClick={event =>  window.location.href='/login'}>Update</button>
            </form>

        </div>
    )
}





