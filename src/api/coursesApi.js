import axiosInstance from './axiosInstance';

export function getCourse(id){
    const response = axiosInstance.get(`/courses/${id}`);
    return response;
}