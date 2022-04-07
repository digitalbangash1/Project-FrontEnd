import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CourseList() {

    const url = "https://localhost:7109/courses";
    const [courses, setCourses] = useState([]); //hook

    useEffect(() => {
        const request = axios.get(url);
        request.then(response => {
            const courses = response.data;
            setCourses(courses);
            console.log(courses);
        });
    }, []);

    return (
        <div>
            <h2>Courses list</h2>
            <ul>
                {
                    courses.map((course, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/courses/${course.id}`}>{course.name}</Link>
                            </li>)
                    })
                }
            </ul>
        </div>
    );
}

