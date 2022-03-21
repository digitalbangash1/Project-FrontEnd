import React, { useEffect, useState } from 'react';
import {
  useParams,
} from "react-router-dom";
import Sidebar1 from '../Sidebar/Sidebar1';
import { getCourse } from '../../api/coursesApi';

export default function CourseDetails() {

  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const request = getCourse(courseId);
    request.then(response => {
      const course = response.data;
      setCourse(course);
      console.log(course);
    });
  }, []);

  return (
    <div>
      <Sidebar1 />

      {course && (
        <div>
            
          <Sidebar/>
          <div>Welcome to {course.name}</div>
          <div>{course.description}</div>
        </div>
      )}

    </div>
  );
}
