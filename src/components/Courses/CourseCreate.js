import React from "react";
import { useState } from "react";
import { createCourse } from '../../api/coursesApi';

export default function CourseCreate() {

    const [values, setValues] = useState({
        name: '',
        description: ''
    })
    const [submitted, setSubmitted] = useState(false);

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

        const promise = createCourse(values);
        promise.then(response => {
            setValues({
                name: '',
                description: ''
            })
            console.log("Course created");
        });
    }

    return (
        <div class="p-2">
            <h3 align={"center"}>
                Create course
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
                    <input type="text" class="form-control w-25"
                        value={values.description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary" onClick={event =>  window.location.href='/login'}>Create</button>
            </form>

        </div>
    )
}





