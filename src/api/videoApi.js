import axiosInstance from './axiosInstance';

export function getVideos(){
    const response = axiosInstance.get(`/video`);
    return response;
}