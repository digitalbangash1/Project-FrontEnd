import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DeleteCourse, getCourses } from '../../api/coursesApi';

export default function CourseList() {

    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const promise = getCourses();
        promise.then(response => {
            const courses = response.data;
            setCourses(courses);
        });
    }, []);

    const addNewCourse = () => {
        navigate('/courses/new')
    };


    function DeleteCour(id) {
        if (window.confirm(' Are you sure? you are about to delete the course with Id number: ' + id)) {
            DeleteCourse(id);
            window.location.reload(false);
            /*  fetch(`https://localhost:7109/Courses/${id}`,{
                method: 'DELETE',
                headers:{'accept': '',
                'Content-Type': 'application/json',
                } 
                
            })*/
        }
    };



 /* Bootstraps styling has been used 
 
  */

    return (
        <div class="p-2">
            <div class="d-flex justify-content-between">
                <h2>Courses</h2>
                <button type="button" class="btn btn-primary" onClick={addNewCourse}>New</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course, index) => {
                            return (
                                <tr key={index}>
                                    <td >
                                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                                    </td>
                                    <td>{course.description}</td>
                                    <td className="col-1 form-group pt-3 mx-auto">
                                        <Link to={`/courses/${course.id}/update`} >Update</Link>
                                        <button className="btn btn-danger mr-2" onClick={() => DeleteCour(course.id)} >Delete</button>
                                    </td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}



