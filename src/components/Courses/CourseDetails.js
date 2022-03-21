import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default function CourseDetails() {
 


  return (
        <div>
            
          <Sidebar/>
          <div>Welcome to {course.name}</div>
          <div>{course.description}</div>
        </div>
    );
}
