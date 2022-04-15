import axiosInstance from './axiosInstance';

export function getCourse(id){
    const response = axiosInstance.get(`/courses/${id}`);
    return response;
}

export function getCourses(){
    const response = axiosInstance.get(`/courses`);
    return response;
}

export function createCourse(course){
    const response = axiosInstance.post(`/courses`, course);
    return response;
}

export function updateCourse(id, course){
    const response = axiosInstance.put(`/courses/${id}`, course);
    return response;
}

export function DeleteCourse(id){
    const response = axiosInstance.delete(`/courses/${id}`);
    return response;
}